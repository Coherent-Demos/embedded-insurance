/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('CoherentDemos')
    .config(['AnalyticsProvider', function (AnalyticsProvider) {

      console.log('initiate ga')
      // Add configuration code as desired
      AnalyticsProvider.setAccount('G-LF44QL31LC');  //UU-XXXXXXX-X should be your tracking code
    }]).run(['Analytics', function(Analytics) { }]);

})();
