"use strict";

(function () {
  'use strict';

  angular.module('CoherentDemos').controller('InsUpsell2Controller', InsUpsell2Controller);
  /** @ngInject */

  function InsUpsell2Controller($state, EmbeddedService, $http) {
    var vm = this;
    vm.age = 24
    vm.children = 0
    vm.adults = 1
    vm.personaleffects = false
    vm.lifeevent = false
    vm.lifestyle = false
    vm.valuables = false

    vm.productUpsellInput = EmbeddedService.productUpsellInput.request_data

    vm.go = function() {
      vm.productUpsellInput.inputs.Age = vm.age;
      if(vm.adults > 1 || vm.children > 0) {vm.productUpsellInput.inputs.Family = true;} else {vm.productUpsellInput.inputs.Family = false;};
      vm.productUpsellInput.inputs.HighNet = vm.valuables;
      vm.productUpsellInput.inputs.LifeStyle = vm.lifestyle;
      vm.productUpsellInput.inputs.PersonalEffects = vm.personaleffects;
      vm.productUpsellInput.inputs.Spouse = vm.lifeevent;
      vm.productUpsellInput.inputs.Passengers = parseInt(vm.adults) + parseInt(vm.children);
      EmbeddedService.productUpsellInput.request_data = vm.productUpsellInput;
      $state.go('ins-upsell-3');
    }

  }
})();