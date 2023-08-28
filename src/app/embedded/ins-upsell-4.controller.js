"use strict";

(function () {
  'use strict';

  angular.module('CoherentDemos').controller('InsUpsell4Controller', InsUpsell4Controller);
  /** @ngInject */

  function InsUpsell4Controller($state, EmbeddedService, $http) {
    var vm = this;

    vm["Family PA"] = false;
    vm["Cyber Cover"] = false;
    vm["Mobile Guard"] = false;
    vm["Valuables"] = false;
    vm.totalPrice = 0;
    vm.activeProducts = 0;
    vm.discountedPrice = 0;
    vm.effectiveDiscount = 0;

    vm.getProducts = function() {
      var req = {
        method: 'POST',
        url: 'https://excel.staging.coherent.global/coherentflex/api/v3/folders/Bill Embedded/services/Product Upsell/Execute',
        headers: {
          'x-synthetic-key': EmbeddedService.PFToken,
          'x-tenant-name': 'coherentflex'
        },
        data: EmbeddedService.productUpsellInput
      };
      $http(req).then(function (response) {
        vm.data = response.data.response_data.outputs;
        for(var i=0;i<vm.data.Products.length;i++) {
          vm[vm.data.Products[i].Products] = true
        }

      }, function () {});
    }

    vm.updatePrice = function(product, index) {

      console.log(vm.activeProducts)
      if (vm[product]) { vm.totalPrice += vm.data.ProductDetails[index].Premium; vm.activeProducts += 1; } else { vm.totalPrice -= vm.data.ProductDetails[index].Premium; vm.activeProducts -= 1; }
      vm.effectiveDiscount = 0;
      vm.discountedPrice = vm.totalPrice;
      for(var i=0;i<vm.data.Discount.length;i++) {
        if(vm.activeProducts>=vm.data.Discount[i]["Basket Size"]) {
          vm.effectiveDiscount = vm.data.Discount[i]["Discount"] / 100;
          vm.discountedPrice = vm.totalPrice * (1 - vm.effectiveDiscount);
        }  
      }
    }

    vm.go = function() {
      $state.go('ins-upsell-5');
    }

    vm.getProducts();

  }
})();