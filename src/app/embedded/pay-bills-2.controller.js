"use strict";

(function () {
  'use strict';

  angular.module('CoherentDemos').controller('PayBills2Controller', PayBills2Controller);
  /** @ngInject */

  function PayBills2Controller($state, EmbeddedService, $http) {
    var vm = this;

    vm.billType = EmbeddedService.billType;
    vm.billers = EmbeddedService.billers;

    vm.payBiller = function(biller) {
      EmbeddedService.biller = biller;
      $state.go('pay-bills-3');
    }

  }
})();