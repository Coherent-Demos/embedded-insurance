"use strict";

(function () {
  'use strict';

  angular.module('CoherentDemos').controller('EmbeddedFlex1Controller', EmbeddedFlex1Controller);
  /** @ngInject */

  function EmbeddedFlex1Controller($state, EmbeddedService, $http) {
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

    vm.setPersona = function (index) {
      EmbeddedService.PFInput.request_data = {"request_data":{"inputs":{"Discount_Code":null,"Limit1":null,"Limit10":null,"Limit2":null,"Limit3":null,"Limit4":null,"Limit5":null,"Limit6":null,"Limit7":null,"Limit8":null,"Limit9":null,"No_Products":4,"Prm_Active_Lifestyle":"NA","Prm_Age":30,"Prm_AMZNPRIMESG":-1,"Prm_Automotive":-628,"Prm_Bar":-71,"Prm_Child":-472,"Prm_CreditArrear":0,"Prm_CreditBalance":8302,"Prm_CreditScore":"NA","Prm_Currency":"NA","Prm_Dependents":0,"Prm_E_commerce":-528,"Prm_Education":"A Levels","Prm_Food":-1999,"Prm_Gaming":-7,"Prm_Gender":"Female","Prm_Grocery":-535,"Prm_Hair":-66,"Prm_Health":-161,"Prm_Helper":-444,"Prm_Home":"NA","Prm_Income":27000,"Prm_Industry":"Insurance","Prm_Insurance":"NA","Prm_LateSleeper":"NA","Prm_Loan":0,"Prm_Location":"NA","Prm_Luxury":"NA","Prm_Marital_Status":"Single","Prm_Mortgage":"NA","Prm_Movies":-29,"Prm_Occupation":"I.T.","Prm_Petrol":-99,"Prm_Postcode":300821,"Prm_Rent":-5156,"Prm_Residency":"Employment Pass","Prm_Retail_shopping":-473,"Prm_Transport":-366,"Prm_Travel":-345,"Prm_Utility":-218,"Selection":"Recommended","UW_Response":[{"ID":2,"Response":"N"},{"ID":3,"Response":"N"},{"ID":4,"Response":"N"}]}},"request_meta":{"version_id":"64f79261-1e6c-4f8b-992f-6a2ca947d76b","transaction_date":"2022-02-02T18:22:26.084Z","call_purpose":"Spark - API Tester","source_system":"SPARK","correlation_id":"","requested_output":"","service_category":"","compiler_type":"Type3"}}
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

      vm.activePersona = EmbeddedService.personas[index-1].Name
      console.log(EmbeddedService.personas[index-1].Prm_CreditBalance)
      getPlan();
    }

    function getPlan() {
      vm.recommendedPlans = []
      EmbeddedService.recommendedPlans =[]
      console.log(EmbeddedService.PFInput)
      var req = {
        method: 'POST',
        url: 'https://excel.sit.coherent.global/coherent/api/v3/folders/Flex/services/Controller',
        headers: {
          'SecretKey': EmbeddedService.PFToken,
          'x-tenant-name': 'coherent'
        },
        data: EmbeddedService.PFInput
      };
      $http(req).then(function (response) {
        vm.data = response.data.response_data.outputs;
        var rc = vm.data.Recommended_Products;
        EmbeddedService.PFOutput = response.data.response_data.outputs;
        console.log(vm.data.UI_Options[0].Product);

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
          console.log(vm.recommendedPlans);
          EmbeddedService.recommendedPlans = vm.recommendedPlans;
        }

        for (var i = 0; i < rc.length; i++) {
          var a;

          _loop(i);
        }
      }, function () {});
    }

    vm.setPersona(1)

  }
})();