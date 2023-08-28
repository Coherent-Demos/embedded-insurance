(function() {
  'use strict';

  angular
    .module('CoherentDemos')
    .directive('range', drctv);

  /** @ngInject */
  function drctv() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/range/range.html',
      scope: {
        min: '=',
        max: '=',
        model: '=',
        disabled: '=',
        change: '&'
      },
      link: linkFunc,
      controller: ctrl,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    function linkFunc(scope, el, attr, vm) {
      var watcher;

      var update = _.debounce(vm.change, 500);

      watcher = scope.$watch('vm.model', function () {
        el[0].children[0].style.backgroundSize = ((vm.model - vm.min) / (vm.max - vm.min) * 100) + '% 100%';
        el[0].children[0].value = vm.model;

        update();
      });

      scope.$on('$destroy', function () {
        watcher();
      });
    }

    /** @ngInject */
    function ctrl() {
      var vm = this;

      return vm;
    }
  }

})();
