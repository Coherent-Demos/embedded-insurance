(function () {
  'use strict';

  angular.module('coherentPaDemo').controller('EmbeddedFlex2Controller', EmbeddedFlex2Controller);
  /** @ngInject */

  function EmbeddedFlex2Controller($state, EmbeddedService, $http) {
    var vm = this;
        vm.checkbox = {};
        vm.slider = {};
        vm.recommendedPlans = EmbeddedService.recommendedPlans;
        vm.activePersona = EmbeddedService.activePersona
        vm.totalPrice = EmbeddedService.PFOutput["02g_Gross_Prem_after_discount"];
        vm.PFInput = EmbeddedService.PFInput
        vm.oldprice = EmbeddedService.PFOutput["01_Gross_Prem_before_discount"];
        vm.discount = Math.round(EmbeddedService.PFOutput["02a_Discount_Multi_Pct"] * 100);
        for (var i = 0; i < vm.recommendedPlans.length; i++) {
          var aid = vm.recommendedPlans[i].ID;
          vm.checkbox[aid] = true;
          vm.slider[aid] = {}
          vm.slider[aid].cover = vm.recommendedPlans[i].cover;
          vm.slider[aid].convertedcover = vm.recommendedPlans[i].cover;
          vm.slider[aid].convertedmin = vm.recommendedPlans[i].Min;
          vm.slider[aid].convertedmax = vm.recommendedPlans[i].Max;
          vm.slider[aid].convertedstep = vm.recommendedPlans[i].Step;
        }

    vm.customize = function () {
      var ee = document.getElementById("totprice-animate")
      ee.classList.remove("text-is-updated")
      var ff = document.getElementById("discount-animate")
      ff.classList.remove("text-is-updated")
      vm.PFInput.request_data.inputs.Selection = "Customise";
      EmbeddedService.customCoverages = [];

      for (var i = 0; i < vm.recommendedPlans.length; i++) {
        var a = {};
        a.ID = vm.recommendedPlans[i].ID;

        if (vm.checkbox[vm.recommendedPlans[i].ID] == false) {
          a.value = null;
        } else {
          a.value = parseInt(vm.slider[vm.recommendedPlans[i].ID].convertedcover) ;
        }

        EmbeddedService.customCoverages.push(a);
        vm.PFInput.request_data.inputs["Limit" + vm.recommendedPlans[i].ID] = EmbeddedService.customCoverages.find(function (x) {
          return x.ID === vm.recommendedPlans[i].ID;
        }).value;

        vm.recommendedPlans[i].cover = EmbeddedService.customCoverages[i].value
        vm.recommendedPlans[i].included = vm.checkbox[vm.recommendedPlans[i].ID]
      }

      var req = {
        method: 'POST',
        url: 'https://excel.staging.coherent.global/coherentflex/api/v3/folders/Flex/services/Controller File/Execute',
        headers: {
          'x-synthetic-key': EmbeddedService.PFToken,
          'x-tenant-name': 'coherentflex'
        },
        data: vm.PFInput
      };
      $http(req).then(function (response) {
        vm.data = response.data.response_data.outputs;
        if (vm.totalPrice != vm.data["02g_Gross_Prem_after_discount"]) {
          ee = document.getElementById("totprice-animate")
          ee.classList.add("text-is-updated")
        }
        // if (vm.discount != vm.data["02a_Discount_Multi_Pct"]) {
        //   var ff = document.getElementById("discount-animate")
        //   ff.classList.add("text-is-updated")
        // }
        vm.totalPrice = vm.data["02g_Gross_Prem_after_discount"];
        vm.oldprice = vm.data["01_Gross_Prem_before_discount"];
        vm.discount = vm.data["02a_Discount_Multi_Pct"] * 100;
        var rc = vm.recommendedPlans;
        EmbeddedService.PFOutput = response.data.response_data.outputs;

        for (var i = 0; i < rc.length; i++) {
          if (vm.checkbox[vm.recommendedPlans[i].ID] == true) {
            vm.slider[vm.recommendedPlans[i].ID].cover = EmbeddedService.customCoverages.find(function (x) {
              return x.ID === rc[i].ID;
            }).value;
            vm.recommendedPlans[i].premium = vm.data.Premium_Detail.find(function (x) {
              return x.ID === rc[i].ID;
            }).Gross_Premium_before_Discount;
          }
        }
        EmbeddedService.recommendedPlans = vm.recommendedPlans
      });
    };
  }
})();