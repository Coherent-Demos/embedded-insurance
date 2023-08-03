(function () {
  'use strict';

  angular.module('coherentPaDemo').controller('EmbeddedFlex3Controller', EmbeddedFlex3Controller);
  /** @ngInject */

  function EmbeddedFlex3Controller($state, EmbeddedService, $http) {
    var vm = this;
    
    vm.totalPrice = EmbeddedService.PFOutput["02g_Gross_Prem_after_discount"];
    vm.oldprice = EmbeddedService.PFOutput["01_Gross_Prem_before_discount"];
    vm.discount = Math.round(EmbeddedService.PFOutput["02a_Discount_Multi_Pct"] * 100);
    vm.UWquestions = EmbeddedService.PFOutput.Question_Sets
    vm.activePersona = EmbeddedService.activePersona

  }
})();