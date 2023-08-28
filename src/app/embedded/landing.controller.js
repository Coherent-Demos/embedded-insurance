(function() {
  'use strict';

  angular
    .module('CoherentDemos')
    .controller('LandingController', ctrl);

  /** @ngInject */
  function ctrl($state,
                EmbeddedService,
                EmbeddedFactory,
                $http) {
    var vm = this;
    vm.data = {};
    vm.allPlans = [];
    vm.recommendedPlans = [];
    vm.planObject = {
      premium: 0,
      name: ''
    };
    vm.discount = 1;
    vm.personas = EmbeddedService.personas
    vm.activePersona = ""
    vm.purchased = EmbeddedService.purchased
    vm.modules = EmbeddedService.recommendedPlans

    vm.resetPurchase = function() {
      EmbeddedService.purchased = false
      vm.purchased = EmbeddedService.purchased
      vm.setPersona(1)
    }

    vm.landing = true
    vm.spending = false

    vm.clickTab = function (tabName) {
      vm.landing = false
      vm.spending = false
      vm[tabName] = true
    }

    vm.setPersona = function (index) {
      EmbeddedService.reset()
      EmbeddedService.PFInput.request_data.inputs["Prm_Age"] = EmbeddedService.personas[index-1]["Prm_Age"]
      EmbeddedService.PFInput.request_data.inputs["Prm_Gender"] = EmbeddedService.personas[index-1]["Prm_Gender"]
      EmbeddedService.PFInput.request_data.inputs["Prm_Income"] = EmbeddedService.personas[index-1]["Prm_Income"]
      EmbeddedService.PFInput.request_data.inputs["Prm_Postcode"] = EmbeddedService.personas[index-1]["Prm_Postcode"]
      EmbeddedService.PFInput.request_data.inputs["Prm_Occupation"] = EmbeddedService.personas[index-1]["Prm_Occupation"]
      EmbeddedService.PFInput.request_data.inputs["Prm_Industry"] = EmbeddedService.personas[index-1]["Prm_Industry"]
      EmbeddedService.PFInput.request_data.inputs["Prm_Marital_Status"] = EmbeddedService.personas[index-1]["Prm_Marital_Status"]
      EmbeddedService.PFInput.request_data.inputs["Prm_Dependents"] = EmbeddedService.personas[index-1]["Prm_Dependents"]
      EmbeddedService.PFInput.request_data.inputs["Prm_Education"] = EmbeddedService.personas[index-1]["Prm_Education"]
      EmbeddedService.PFInput.request_data.inputs["Prm_Residency"] = EmbeddedService.personas[index-1]["Prm_Residency"]
      EmbeddedService.PFInput.request_data.inputs["Prm_CreditBalance"] = EmbeddedService.personas[index-1]["Prm_CreditBalance"]
      EmbeddedService.PFInput.request_data.inputs["Prm_CreditArrear"] = EmbeddedService.personas[index-1]["Prm_CreditArrear"]
      EmbeddedService.PFInput.request_data.inputs["Prm_Loan"] = EmbeddedService.personas[index-1]["Prm_Loan"]
      EmbeddedService.PFInput.request_data.inputs["Prm_Health"] = EmbeddedService.personas[index-1]["Prm_Health"]
      EmbeddedService.PFInput.request_data.inputs["Prm_Child"] = EmbeddedService.personas[index-1]["Prm_Child"]
      EmbeddedService.PFInput.request_data.inputs["Prm_Insurance"] = EmbeddedService.personas[index-1]["Prm_Insurance"]
      EmbeddedService.PFInput.request_data.inputs["Prm_Travel"] = EmbeddedService.personas[index-1]["Prm_Travel"]
      EmbeddedService.PFInput.request_data.inputs["Prm_Luxury"] = EmbeddedService.personas[index-1]["Prm_Luxury"]
      EmbeddedService.PFInput.request_data.inputs["Prm_E-commerce"] = EmbeddedService.personas[index-1]["Prm_E-commerce"]
      EmbeddedService.PFInput.request_data.inputs["Prm_Active_Lifestyle"] = EmbeddedService.personas[index-1]["Prm_Active_Lifestyle"]
      EmbeddedService.PFInput.request_data.inputs["Prm_Grocery"] = EmbeddedService.personas[index-1]["Prm_Grocery"]
      EmbeddedService.PFInput.request_data.inputs["Prm_Home"] = EmbeddedService.personas[index-1]["Prm_Home"]
      EmbeddedService.PFInput.request_data.inputs["Prm_Currency"] = EmbeddedService.personas[index-1]["Prm_Currency"]
      EmbeddedService.PFInput.request_data.inputs["Prm_Automotive"] = EmbeddedService.personas[index-1]["Prm_Automotive"]
      EmbeddedService.PFInput.request_data.inputs["Prm_Bar"] = EmbeddedService.personas[index-1]["Prm_Bar"]
      EmbeddedService.PFInput.request_data.inputs["Prm_Food"] = EmbeddedService.personas[index-1]["Prm_Food"]
      EmbeddedService.PFInput.request_data.inputs["Prm_Gaming"] = EmbeddedService.personas[index-1]["Prm_Gaming"]
      EmbeddedService.PFInput.request_data.inputs["Prm_Hair"] = EmbeddedService.personas[index-1]["Prm_Hair"]
      EmbeddedService.PFInput.request_data.inputs["Prm_Helper"] = EmbeddedService.personas[index-1]["Prm_Helper"]
      EmbeddedService.PFInput.request_data.inputs["Prm_Movies"] = EmbeddedService.personas[index-1]["Prm_Movies"]
      EmbeddedService.PFInput.request_data.inputs["Prm_Petrol"] = EmbeddedService.personas[index-1]["Prm_Petrol"]
      EmbeddedService.PFInput.request_data.inputs["Prm_Rent"] = EmbeddedService.personas[index-1]["Prm_Rent"]
      EmbeddedService.PFInput.request_data.inputs["Prm_Retail_shopping"] = EmbeddedService.personas[index-1]["Prm_Retail_shopping"]
      EmbeddedService.PFInput.request_data.inputs["Prm_Transport"] = EmbeddedService.personas[index-1]["Prm_Transport"]
      EmbeddedService.PFInput.request_data.inputs["Prm_Utility"] = EmbeddedService.personas[index-1]["Prm_Utility"]
      EmbeddedService.PFInput.request_data.inputs["Prm_AMZNPRIMESG"] = EmbeddedService.personas[index-1]["Prm_AMZNPRIMESG"]
      EmbeddedService.PFInput.request_data.inputs["Prm_Mortgage"] = EmbeddedService.personas[index-1]["Prm_Mortgage"]
      EmbeddedService.PFInput.request_data.inputs["Prm_CreditScore"] = EmbeddedService.personas[index-1]["Prm_CreditScore"]
      EmbeddedService.PFInput.request_data.inputs["Prm_LateSleeper"] = EmbeddedService.personas[index-1]["Prm_LateSleeper"]
      EmbeddedService.PFInput.request_data.inputs["Prm_Location"] = EmbeddedService.personas[index-1]["Prm_Location"]
      vm.balance = Math.round(EmbeddedService.personas[index-1]["Prm_Income"] * 0.112)
      vm.txn1 = EmbeddedService.PFInput.request_data.inputs["Prm_Health"]
      vm.txn2 = EmbeddedService.PFInput.request_data.inputs["Prm_Child"]
      vm.txn3 = EmbeddedService.PFInput.request_data.inputs["Prm_Retail_shopping"]
      vm.txn4 = EmbeddedService.PFInput.request_data.inputs["Prm_Automotive"]
      vm.txn5 = EmbeddedService.PFInput.request_data.inputs["Prm_Rent"]
      vm.txn6 = EmbeddedService.PFInput.request_data.inputs["Prm_Travel"]
      vm.txn7 = EmbeddedService.PFInput.request_data.inputs["Prm_Currency"]
      vm.bankBalance = EmbeddedService.PFInput.request_data.inputs["Prm_Income"]
      vm.activePersona = EmbeddedService.personas[index-1].Name
      EmbeddedService.activePersonaID = index
      getPlan();
      setSpending();
    }

    function getPlan() {
      vm.recommendedPlans = []
      EmbeddedService.recommendedPlans =[]
      EmbeddedService.PFInput.request_data.inputs.Selection = "Recommended"
      var req = {
        method: 'POST',
        url: 'https://excel.staging.coherent.global/coherentflex/api/v3/folders/Flex/services/Controller File/Execute',
        headers: {
          'x-synthetic-key': EmbeddedService.PFToken,
          'x-tenant-name': 'coherentflex'
        },
        data: EmbeddedService.PFInput
      };
      $http(req).then(function (response) {
        vm.data = response.data.response_data.outputs;
        var rc = vm.data.Recommended_Products;
        EmbeddedService.PFOutput = response.data.response_data.outputs;

        var _loop = function _loop(i) {
          a = {};
          a.premium = vm.data.Premium_Detail.find(function (x) {
            return x.ID === rc[i].ID;
          }).Gross_Premium_before_Discount;
          a.cover = vm.data.Recommended_Products.find(function (x) {
            return x.ID === rc[i].ID;
          })["Recommend Coverage"];
          a.name = vm.data.UI_Options.find(function (x) {
            return x.ID === rc[i].ID;
          }).Product;
          a.Default = vm.data.UI_Options.find(function (x) {
            return x.ID === rc[i].ID;
          }).Default;
          a.Min = vm.data.UI_Options.find(function (x) {
            return x.ID === rc[i].ID;
          }).Min;
          a.Max = vm.data.UI_Options.find(function (x) {
            return x.ID === rc[i].ID;
          }).Max;
          a.Step = vm.data.UI_Options.find(function (x) {
            return x.ID === rc[i].ID;
          }).Step;
          a.ID = vm.data.UI_Options.find(function (x) {
            return x.ID === rc[i].ID;
          }).ID;
          vm.recommendedPlans.push(a);
          vm.discount = Math.round(EmbeddedService.PFOutput["02a_Discount_Multi_Pct"] * 100);
          EmbeddedService.activePersona = vm.activePersona;
          EmbeddedService.recommendedPlans = vm.recommendedPlans;
        }

        for (var i = 0; i < rc.length; i++) {
          var a;

          _loop(i);
        }
      }, function () {});
    }


    function setSpending() {
      vm.totalTransactions = 0
      vm.index = EmbeddedService.activePersonaID-1
      
      vm.txn1 = Math.abs(parseInt(vm.personas[vm.index]["Prm_Health"])) 
      vm.txn2 = Math.abs(parseInt(vm.personas[vm.index]["Prm_Child"])) 
      vm.txn3 = Math.abs(parseInt(vm.personas[vm.index]["Prm_Retail_shopping"])) 
      vm.txn4 = Math.abs(parseInt(vm.personas[vm.index]["Prm_Automotive"])) 
      vm.txn5 = Math.abs(parseInt(vm.personas[vm.index]["Prm_Rent"])) 
      vm.txn6 = Math.abs(parseInt(vm.personas[vm.index]["Prm_Travel"])) 
      vm.txn7 = Math.abs(parseInt(vm.personas[vm.index]["Prm_Currency"])) 

      vm.totalTransactions = Math.abs(vm.txn1 + vm.txn2  + vm.txn3 + vm.txn4 + vm.txn5 + vm.txn6 + vm.txn7)

      vm.txn1Pct = Math.round(vm.txn1 / vm.totalTransactions  * 100)
      vm.txn2Pct = Math.round(vm.txn2 / vm.totalTransactions  * 100)
      vm.txn3Pct = Math.round(vm.txn3 / vm.totalTransactions  * 100)
      vm.txn4Pct = Math.round(vm.txn4 / vm.totalTransactions  * 100)
      vm.txn5Pct = Math.round(vm.txn5 / vm.totalTransactions  * 100)
      vm.txn6Pct = Math.round(vm.txn6 / vm.totalTransactions  * 100)
      vm.txn7Pct = Math.round(vm.txn7 / vm.totalTransactions  * 100)

      vm.txn1Count = Math.round(vm.txn1 / 100)
      vm.txn2Count = Math.round(vm.txn2 / 100)
      vm.txn3Count = Math.round(vm.txn3 / 100)
      vm.txn4Count = Math.round(vm.txn4 / 100)
      vm.txn5Count = Math.round(vm.txn5 / 100)
      vm.txn6Count = Math.round(vm.txn6 / 100)
      vm.txn7Count = Math.round(vm.txn7 / 100)


      vm.arclength1 = vm.txn1 / vm.totalTransactions * 565
      vm.arclength2 = vm.txn2 / vm.totalTransactions * 565
      vm.arclength3 = vm.txn3 / vm.totalTransactions * 565
      vm.arclength4 = vm.txn4 / vm.totalTransactions * 565
      vm.arclength5 = vm.txn5 / vm.totalTransactions * 565
      vm.arclength6 = vm.txn6 / vm.totalTransactions * 565
      vm.arclength7 = vm.txn7 / vm.totalTransactions * 565
      
      vm.offset1 = -1 * (0)
      vm.offset2 = -1 * (vm.arclength1)
      vm.offset3 = -1 * (vm.arclength1 + vm.arclength2)
      vm.offset4 = -1 * (vm.arclength1 + vm.arclength2 + vm.arclength3)
      vm.offset5 = -1 * (vm.arclength1 + vm.arclength2 + vm.arclength3 + vm.arclength4)
      vm.offset6 = -1 * (vm.arclength1 + vm.arclength2 + vm.arclength3 + vm.arclength4 + vm.arclength5)
      vm.offset7 = -1 * (vm.arclength1 + vm.arclength2 + vm.arclength3 + vm.arclength4 + vm.arclength5 + vm.arclength6)

      vm.dasharray1 = Math.round(vm.txn1 / vm.totalTransactions * 565) + ' 565'
      vm.dasharray2 = Math.round(vm.txn2 / vm.totalTransactions * 565) + ' 565'
      vm.dasharray3 = Math.round(vm.txn3 / vm.totalTransactions * 565) + ' 565'
      vm.dasharray4 = Math.round(vm.txn4 / vm.totalTransactions * 565) + ' 565'
      vm.dasharray5 = Math.round(vm.txn5 / vm.totalTransactions * 565) + ' 565'
      vm.dasharray6 = Math.round(vm.txn6 / vm.totalTransactions * 565) + ' 565'
      vm.dasharray7 = Math.round(vm.txn7 / vm.totalTransactions * 565) + ' 565'
    }

    vm.setPersona(EmbeddedService.activePersonaID)

    return vm;
  }
})();
