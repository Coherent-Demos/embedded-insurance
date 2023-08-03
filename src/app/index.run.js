(function() {
  'use strict';

  angular
    .module('coherentPaDemo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $timeout, $translate, $window) {
    var unregisterState = $rootScope.$on('$stateChangeSuccess', function() {
      $timeout(function () {
        $window.scrollTo(0, 0);
      }, 10);
    });

    $rootScope.$on('$destroy', unregisterState);

    $log.debug('runBlock end');
  }

})();
