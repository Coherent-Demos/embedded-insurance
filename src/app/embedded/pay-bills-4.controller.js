"use strict";

(function () {
  'use strict';

  angular.module('CoherentDemos').controller('PayBills4Controller', PayBills4Controller);
  /** @ngInject */

  function PayBills4Controller($state, EmbeddedService, $http) {
    var vm = this;

    vm.go = function() {
      $state.go('pay-bills-1');
    }

  }
})();