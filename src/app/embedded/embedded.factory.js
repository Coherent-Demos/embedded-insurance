(function() {
  'use strict';

  angular
    .module('coherentPaDemo')
    .factory('EmbeddedFactory', fctry);

  /** @ngInject */
  function fctry($http,
                 $q,
                 $timeout) {
    var vm = this;

    return vm;
  }
})();
