(function() {
  'use strict';

  angular
    .module('CoherentDemos')
    .directive('footer', footer);

  /** @ngInject */
  function footer() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html',
      scope: {
      },
      controller: FooterController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function FooterController($translate) {
      var vm = this;

      vm.translate = function(language) {
        $translate.use(language);
      }
    }
  }

})();
