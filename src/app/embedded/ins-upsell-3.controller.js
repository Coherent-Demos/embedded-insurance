"use strict";

(function () {
  'use strict';

  angular.module('CoherentDemos').controller('InsUpsell3Controller', InsUpsell3Controller);
  /** @ngInject */

  function InsUpsell3Controller($state, EmbeddedService, $http) {
    var vm = this;

    vm.go = function() {
      $state.go('ins-upsell-4');
    }

  }
})();