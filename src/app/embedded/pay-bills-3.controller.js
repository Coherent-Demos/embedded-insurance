"use strict";

(function () {
  'use strict';

  angular.module('coherentPaDemo').controller('PayBills3Controller', PayBills3Controller);
  /** @ngInject */

  function PayBills3Controller($state, EmbeddedService, $http) {
    var vm = this;

    vm.biller = EmbeddedService.biller;
    vm.checkbox = true;
    vm.productRotationInput = EmbeddedService.productRotationInput;
    vm.billType = EmbeddedService.billType;
    vm.checkbox = false;

    function getObjectByParameter(objectsArray, paramName, paramValue) {
      for (var i=0;i<objectsArray.length;i++) {
        if (objectsArray[i][paramName] === paramValue) {
          return objectsArray[i];
        }
      }
      return null; // Return null if no matching object is found
    }

    vm.getProduct = function() {
      vm.productRotationInput.request_data.inputs.BillType = EmbeddedService.billType;
      vm.productRotationInput.request_data.inputs.Amount = vm.billAmount;
      var req = {
        method: 'POST',
        url: 'https://excel.staging.coherent.global/coherentflex/api/v3/folders/Bill Embedded/services/Product Rotation/Execute',
        headers: {
          'x-synthetic-key': EmbeddedService.PFToken,
          'x-tenant-name': 'coherentflex'
        },
        data: vm.productRotationInput
      };
      $http(req).then(function (response) {
        vm.data = response.data.response_data.outputs;
        vm.product = getObjectByParameter(vm.data.ProductDetails, 'Product', vm.data.NextOffer);
        vm.product.ProductTrim = vm.product.Product.toLowerCase().replace(/ /g, '-');
        vm.productName = vm.data.NextOffer;
        vm.cover = vm.billAmount * vm.product.Cover;
        vm.premium = vm.cover * 1.5;
        vm.activeRule = getObjectByParameter(vm.data.RuleResults, "Apply", true);
      }, function () {});
    }

    vm.go = function() {
      EmbeddedService.productRotationInput.request_data.inputs.FirstBill = false;
      EmbeddedService.productRotationInput.request_data.inputs.LastViewed = vm.productName;
      $state.go('pay-bills-4');
    }

    vm.snooze = function() {
      vm.productRotationInput.request_data.inputs.FirstBill = false;
      vm.productRotationInput.request_data.inputs.LastViewed = vm.productName;
      vm.getProduct();
    }

    if(vm.billType=='') {
      $state.go('pay-bills-1');
    }
    vm.getProduct();


  }
})();