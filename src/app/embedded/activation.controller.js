(function() {
  'use strict';

  angular
    .module('CoherentDemos')
    .controller('ActivationController', ctrl);

  /** @ngInject */
  function ctrl($state,
                EmbeddedService,
                EmbeddedFactory,
                $http) {
    var vm = this;

    vm.activePersona = EmbeddedService.activePersona
    vm.totalPrice = EmbeddedService.PFOutput["02g_Gross_Prem_after_discount"];

    return vm;
  }
})();
