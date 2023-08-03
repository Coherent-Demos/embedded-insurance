"use strict";

(function () {
  'use strict';

  angular.module('coherentPaDemo').controller('InsUpsell5Controller', InsUpsell5Controller);
  /** @ngInject */

  function InsUpsell5Controller($state, EmbeddedService, $http) {
    var vm = this;

    vm.go = function() {
      $state.go('embedded-landing');
    }

  }
})();