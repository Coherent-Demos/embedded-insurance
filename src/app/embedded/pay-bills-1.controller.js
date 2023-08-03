"use strict";

(function () {
  'use strict';

  angular.module('coherentPaDemo').controller('PayBills1Controller', PayBills1Controller);
  /** @ngInject */

  function PayBills1Controller($state, EmbeddedService, $http) {
    var vm = this;

    vm.seeBillers = function(biller) {
      EmbeddedService.billType = biller;
      $state.go('pay-bills-2');
    }

  }
})();