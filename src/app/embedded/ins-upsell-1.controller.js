"use strict";

(function () {
  'use strict';

  angular.module('CoherentDemos').controller('InsUpsell1Controller', InsUpsell1Controller);
  /** @ngInject */

  function InsUpsell1Controller($state, EmbeddedService, $http) {
    var vm = this;

    vm.biller = EmbeddedService.biller;

  }
})();