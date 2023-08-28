(function() {
  'use strict';

  angular
    .module('CoherentDemos')
    .service('EmbeddedService', EmbeddedService);

  /** @ngInject */
  function EmbeddedService() {
    var vm = this;

    vm.activePersonaID = 1;
    vm.purchased = false
    vm.reset = function() {
      vm.recommendedPlans = [{"premium":"","cover":200,"name":"Item","Default":200,"Min":0,"Max":10000,"Step":1000,"ID":8},{"premium":"","cover":100,"name":"Hospital Cash","Default":100,"Min":0,"Max":200,"Step":20,"ID":7},{"premium":10.11,"cover":200,"name":"Travel","Default":200,"Min":0,"Max":2000,"Step":200,"ID":10},{"premium":"","cover":400,"name":"Home Contents","Default":400,"Min":0,"Max":10000,"Step":1000,"ID":6}];
      vm.PFInput = {"request_data":{"inputs":{"Discount_Code":null,"Limit1":null,"Limit10":null,"Limit2":null,"Limit3":null,"Limit4":null,"Limit5":null,"Limit6":null,"Limit7":null,"Limit8":null,"Limit9":null,"No_Products":4,"Prm_Active_Lifestyle":"NA","Prm_Age":30,"Prm_AMZNPRIMESG":-1,"Prm_Automotive":-628,"Prm_Bar":-71,"Prm_Child":-472,"Prm_CreditArrear":0,"Prm_CreditBalance":8302,"Prm_CreditScore":"NA","Prm_Currency":"NA","Prm_Dependents":0,"Prm_E_commerce":-528,"Prm_Education":"A Levels","Prm_Food":-1999,"Prm_Gaming":-7,"Prm_Gender":"Female","Prm_Grocery":-535,"Prm_Hair":-66,"Prm_Health":-161,"Prm_Helper":-444,"Prm_Home":"NA","Prm_Income":27000,"Prm_Industry":"Insurance","Prm_Insurance":"NA","Prm_LateSleeper":"NA","Prm_Loan":0,"Prm_Location":"NA","Prm_Luxury":"NA","Prm_Marital_Status":"Single","Prm_Mortgage":"NA","Prm_Movies":-29,"Prm_Occupation":"I.T.","Prm_Petrol":-99,"Prm_Postcode":300821,"Prm_Rent":-5156,"Prm_Residency":"Employment Pass","Prm_Retail_shopping":-473,"Prm_Transport":-366,"Prm_Travel":-345,"Prm_Utility":-218,"Selection":"Recommended","UW_Response":[{"ID":2,"Response":"N"},{"ID":3,"Response":"N"},{"ID":4,"Response":"N"}]}},"request_meta":{"version_id":"55303ac9-2a03-42ee-9c85-4808b8e1064f","transaction_date":"2022-06-27T23:43:40.011Z","call_purpose":"Spark - API Tester","source_system":"SPARK","correlation_id":"","requested_output":"","service_category":""}};
      vm.customCoverages = []
      vm.activePersona = vm.personas[vm.activePersonaID-1].Name
    }

    vm.billType = ""
    vm.biller = ""

    vm.billers = [
      {
        name: "Meralco",
        type: "electric",
        image: "meralco.png"
      },
      {
        name: "Aboitiz Power",
        type: "electric",
        image: "aboitiz.png"
      },
      {
        name: "Manila Water",
        type: "water",
        image: "manilawater.png"
      },
      {
        name: "Globe",
        type: "telco",
        image: "globe.png"
      },
      {
        name: "Sky",
        type: "cable",
        image: "sky.png"
      },
      {
        name: "Medicard",
        type: "healthcare",
        image: "medicard.png"
      },
      {
        name: "Priority Pass",
        type: "transpo",
        image: "pioritypass.png"
      },
      {
        name: "BPI",
        type: "creditcard",
        image: "bpi.png"
      }
    ]

    vm.controllerPayload = {
      "response_data": {
        "outputs": {
          "01_Gross_Prem_before_discount": 120.13,
          "02a_Discount_Multi_Pct": 0.02,
          "02b_Code_Discount_Pct": 0,
          "02c_Code_Discount_amt": 0,
          "02d_Code_Discount_Product": "null",
          "02e_Code_Discount_Error_Msg": "null",
          "02g_Gross_Prem_after_discount": 117.73,
          "02h_Total_Discount": 2.40000000000001,
          "03_Comm": 26.8,
          "04_Tax": 5.88,
          "05_Net_Prem": 90.93,
          "06_Gross_Prem_inc_Tax": 123.61,
          "API_Discount": "{\"message\":null,\"data\":{\"Inputs\":{\"Discount_Code\":null,\"Product_cnt\":4},\"Outputs\":{\"02a_Discount_Multi_Pct\":0.02,\"02b_Code_Discount_Pct\":null,\"02c_Code_Discount_Amt\":null,\"02d_Code_Discount_Product\":null,\"02e_Code_Discount_Error_Msg\":null},\"Errors\":[],\"FetchTimeUTC\":\"2022-01-23T17:22:34.7794676Z\",\"EngineID\":\"9e42502e-c827-4a6a-97dd-e24fd1e7234e\",\"ServiceName\":\"Discount Table\",\"EngineType\":\"Type3\",\"Revision\":\"1.0.0\",\"Version\":\"0aef11c7-466b-4011-83e2-c6b5e92238ab\",\"ReleaseDate\":\"2022-01-12 09:11:11\",\"Description\":null,\"EngineHash\":\"BC267AFC560050E1D3738C3B22FBA794\",\"CalcTime\":2.0,\"TotalTime\":29,\"SolveInputs\":[],\"SolveOutputs\":[],\"ProductName\":\"Embedded\",\"EffectiveStartDate\":\"2010-01-01T00:00:00Z\",\"EffectiveEndDate\":\"2120-01-01T00:00:00Z\",\"CallGUID\":\"2c250e48-17c2-47ce-b8a5-73cdebb7e0ac\"},\"errorCode\":null,\"status\":\"Success\"}",
          "API_Postcode": "{\"IsSuccess\":false,\"ErrorCode\":\"-21\",\"ErrorDetails\":\"Unauthorized postcode for demo plan.\",\"Postcodes\":[]}",
          "API_Recommender": "{\"message\":null,\"data\":{\"Inputs\":{\"Factors\":[{\"Variables\":\"Age\",\"Value\":30},{\"Variables\":\"Gender\",\"Value\":\"Female\"},{\"Variables\":\"Income\",\"Value\":27000},{\"Variables\":\"Postcode\",\"Value\":300821},{\"Variables\":\"Occupation\",\"Value\":\"I.T.\"},{\"Variables\":\"Industry\",\"Value\":\"Insurance\"},{\"Variables\":\"Marital Status\",\"Value\":\"Single\"},{\"Variables\":\"Dependents\",\"Value\":0},{\"Variables\":\"Education\",\"Value\":\"A Levels\"},{\"Variables\":\"Residency\",\"Value\":\"Employment Pass\"},{\"Variables\":\"CreditBalance\",\"Value\":8302},{\"Variables\":\"CreditArrear\",\"Value\":0},{\"Variables\":\"Loan\",\"Value\":0},{\"Variables\":\"Health\",\"Value\":-161},{\"Variables\":\"Child\",\"Value\":-472},{\"Variables\":\"Insurance\",\"Value\":\"NA\"},{\"Variables\":\"Travel\",\"Value\":-345},{\"Variables\":\"Luxury\",\"Value\":\"NA\"},{\"Variables\":\"E-commerce\",\"Value\":-528},{\"Variables\":\"Active Lifestyle\",\"Value\":\"NA\"},{\"Variables\":\"Grocery\",\"Value\":-535},{\"Variables\":\"Home\",\"Value\":\"NA\"},{\"Variables\":\"Currency\",\"Value\":\"NA\"},{\"Variables\":\"Automotive\",\"Value\":-628},{\"Variables\":\"Bar\",\"Value\":-71},{\"Variables\":\"Food\",\"Value\":-1999},{\"Variables\":\"Gaming\",\"Value\":-7},{\"Variables\":\"Hair\",\"Value\":-66},{\"Variables\":\"Helper\",\"Value\":-444},{\"Variables\":\"Movies\",\"Value\":-29},{\"Variables\":\"Petrol\",\"Value\":-99},{\"Variables\":\"Rent\",\"Value\":-5156},{\"Variables\":\"Retail shopping\",\"Value\":-473},{\"Variables\":\"Transport\",\"Value\":-366},{\"Variables\":\"Utility\",\"Value\":-218},{\"Variables\":\"AMZNPRIMESG\",\"Value\":-1},{\"Variables\":\"Mortgage\",\"Value\":\"NA\"},{\"Variables\":\"CreditScore\",\"Value\":\"NA\"},{\"Variables\":\"LateSleeper\",\"Value\":\"NA\"},{\"Variables\":\"Location\",\"Value\":\"NA\"}]},\"Outputs\":{\"Results\":[{\"ID\":1,\"Model\":\"Term Life\",\"Prob\":0.0022378485212763335,\"Offer_Flag\":\"Y\",\"Rank\":9},{\"ID\":2,\"Model\":\"Accidental PPD\",\"Prob\":0.768524783499018,\"Offer_Flag\":\"Y\",\"Rank\":7},{\"ID\":3,\"Model\":\"Critical Illness\",\"Prob\":0.574442516811659,\"Offer_Flag\":\"Y\",\"Rank\":8},{\"ID\":4,\"Model\":\"Medical Expenses\",\"Prob\":0,\"Offer_Flag\":\"Y\",\"Rank\":11},{\"ID\":5,\"Model\":\"Hospital Cash\",\"Prob\":0.995033198349943,\"Offer_Flag\":\"Y\",\"Rank\":3},{\"ID\":6,\"Model\":\"Travel\",\"Prob\":0.930861579656653,\"Offer_Flag\":\"Y\",\"Rank\":6},{\"ID\":7,\"Model\":\"Home Emergency Assistance\",\"Prob\":0,\"Offer_Flag\":\"Y\",\"Rank\":12},{\"ID\":8,\"Model\":\"Cyber\",\"Prob\":0.999647462162129,\"Offer_Flag\":\"Y\",\"Rank\":2},{\"ID\":9,\"Model\":\"Home Contents\",\"Prob\":0.994779874306442,\"Offer_Flag\":\"Y\",\"Rank\":4},{\"ID\":10,\"Model\":\"Unemployment*\",\"Prob\":0,\"Offer_Flag\":\"N\",\"Rank\":13},{\"ID\":11,\"Model\":\"Event Cancellation\",\"Prob\":0,\"Offer_Flag\":\"Y\",\"Rank\":14},{\"ID\":12,\"Model\":\"Item\",\"Prob\":0.999981542106704,\"Offer_Flag\":\"Y\",\"Rank\":1},{\"ID\":13,\"Model\":\"Shipping Insurance\",\"Prob\":0,\"Offer_Flag\":null,\"Rank\":15},{\"ID\":14,\"Model\":\"Sports coverage for physical injury\",\"Prob\":0,\"Offer_Flag\":\"Y\",\"Rank\":16},{\"ID\":15,\"Model\":\"Competition / Race coverage\",\"Prob\":0,\"Offer_Flag\":\"Y\",\"Rank\":17},{\"ID\":16,\"Model\":\"Gimmicky \\\"prize\\\" insurance\",\"Prob\":0,\"Offer_Flag\":\"Y\",\"Rank\":18},{\"ID\":17,\"Model\":\"Education\",\"Prob\":0.0021930915508508067,\"Offer_Flag\":\"Y\",\"Rank\":10},{\"ID\":18,\"Model\":\"Crypto\",\"Prob\":0.993940198508416,\"Offer_Flag\":\"Y\",\"Rank\":5}]},\"Errors\":[],\"FetchTimeUTC\":\"2022-01-23T17:22:32.2092966Z\",\"EngineID\":\"e28a656f-310d-44ae-a56c-ba65012cca7a\",\"ServiceName\":\"Recommender\",\"EngineType\":\"Type3\",\"Revision\":\"1.0.0\",\"Version\":\"e0fa9c4f-9081-439e-bd3f-3e17685bc221\",\"ReleaseDate\":\"2022-01-12 09:10:49\",\"Description\":null,\"EngineHash\":\"078330208EA652991F08C052BE222CFC\",\"CalcTime\":183.0,\"TotalTime\":19597,\"SolveInputs\":[],\"SolveOutputs\":[],\"ProductName\":\"Embedded\",\"EffectiveStartDate\":\"2010-01-01T00:00:00Z\",\"EffectiveEndDate\":\"2120-01-01T00:00:00Z\",\"CallGUID\":\"78e0932a-34eb-496b-81e0-f3db8ee62fe9\"},\"errorCode\":null,\"status\":\"Success\"}",
          "API_Res1": null,
          "API_Res10": null,
          "API_Res2": null,
          "API_Res3": null,
          "API_Res4": "{\"message\":null,\"data\":{\"Inputs\":{\"Promotion_Code\":null,\"Quote_Date\":null,\"Sum_Assured\":1},\"Outputs\":{\"Commission\":0,\"Commission_Rate\":0.2,\"Decline_Flag\":null,\"Decline_Reason\":null,\"Gross_Premium\":3.51,\"Net_Premium\":3.51,\"Tax\":0,\"Tax_Rate\":0},\"Errors\":[],\"Warnings\":[{\"Key\":\"Default Values\",\"Value\":[\"Input parameter(s) missing. API request using the Default Values.\"]}],\"FetchTimeUTC\":\"2022-01-23T17:22:33.0100391Z\",\"EngineID\":\"c744135e-6fc8-4115-a6b8-597984977fe5\",\"ServiceName\":\"04_Cyber Product Engine\",\"EngineType\":\"Type3\",\"Revision\":\"1.0.0\",\"Version\":\"09a6bdfc-7a0d-4d12-8b86-7df0993588b2\",\"ReleaseDate\":\"2022-01-12 09:09:23\",\"Description\":null,\"EngineHash\":\"98E5C7318E7E52789E01175354783037\",\"CalcTime\":4.0,\"TotalTime\":69,\"SolveInputs\":[],\"SolveOutputs\":[],\"ProductName\":\"Embedded\",\"EffectiveStartDate\":\"2010-01-01T00:00:00Z\",\"EffectiveEndDate\":\"2120-01-01T00:00:00Z\",\"CallGUID\":\"c458c37c-e500-4aa6-b53a-2434b8b68b8d\"},\"errorCode\":null,\"status\":\"Success\"}",
          "API_Res5": null,
          "API_Res6": "{\"message\":null,\"data\":{\"Inputs\":{\"Content_SI\":400,\"Floor_Size\":1999,\"Payment_Options\":null,\"Postal_Code\":18979,\"Promotion_Code\":null,\"Property_Type\":\"Flat\",\"Quote_Date\":\"2021-11-23 T03:00:00Z\",\"Year_Built\":1980},\"Outputs\":{\"Commission\":20,\"Commission_Rate\":0.2,\"Decline_Flag\":0,\"Decline_Reason\":null,\"Gross_Premium\":100,\"Net_Premium\":80,\"Tax\":6,\"Tax_Rate\":0.06},\"Errors\":[],\"Warnings\":[{\"Key\":\"Default Values\",\"Value\":[\"Input parameter(s) missing. API request using the Default Values.\"]}],\"FetchTimeUTC\":\"2022-01-23T17:22:33.4711202Z\",\"EngineID\":\"50cd5041-3d6f-48c8-89d2-c0d06b9306cc\",\"ServiceName\":\"06_Home Content Product Engine Details\",\"EngineType\":\"Type3\",\"Revision\":\"1.0.0\",\"Version\":\"d175d039-1c15-4c87-9548-5177b5cda93f\",\"ReleaseDate\":\"2022-01-12 09:09:40\",\"Description\":null,\"EngineHash\":\"BB05CC34C615575782FE2CA68AC4EB66\",\"CalcTime\":25.0,\"TotalTime\":89,\"SolveInputs\":[],\"SolveOutputs\":[],\"ProductName\":\"Embedded\",\"EffectiveStartDate\":\"2010-01-01T00:00:00Z\",\"EffectiveEndDate\":\"2120-01-01T00:00:00Z\",\"CallGUID\":\"3b8aa8bd-9c59-4b6b-b3b7-ec99310383f2\"},\"errorCode\":null,\"status\":\"Success\"}",
          "API_Res7": "{\"message\":null,\"data\":{\"Inputs\":{\"Promotion_Code\":null,\"Quote_Date\":null,\"Sum_Assured\":100},\"Outputs\":{\"Commission\":0,\"Commission_Rate\":0.4,\"Decline_Flag\":null,\"Decline_Reason\":null,\"Gross_Premium\":16.55,\"Net_Premium\":16.55,\"Tax\":0,\"Tax_Rate\":0},\"Errors\":[],\"Warnings\":[{\"Key\":\"Default Values\",\"Value\":[\"Input parameter(s) missing. API request using the Default Values.\"]}],\"FetchTimeUTC\":\"2022-01-23T17:22:33.9939716Z\",\"EngineID\":\"e0910ed9-5604-4232-bfd8-3402c0a723fc\",\"ServiceName\":\"07_Hospital Cash Product Engine\",\"EngineType\":\"Type3\",\"Revision\":\"1.0.0\",\"Version\":\"a56c7fae-e10c-4b03-811e-3c9e10d33787\",\"ReleaseDate\":\"2022-01-12 09:09:48\",\"Description\":null,\"EngineHash\":\"77E31DA771334DD9A4A77F2645A9FA57\",\"CalcTime\":0.0,\"TotalTime\":41,\"SolveInputs\":[],\"SolveOutputs\":[],\"ProductName\":\"Embedded\",\"EffectiveStartDate\":\"2010-01-01T00:00:00Z\",\"EffectiveEndDate\":\"2120-01-01T00:00:00Z\",\"CallGUID\":\"1da84606-af59-4857-9061-4d373385f8cb\"},\"errorCode\":null,\"status\":\"Success\"}",
          "API_Res8": "{\"message\":null,\"data\":{\"Inputs\":{\"Promotion_Code\":null,\"Quote_Date\":null,\"Sum_Assured\":200},\"Outputs\":{\"Commission\":0,\"Commission_Rate\":0.3,\"Decline_Flag\":null,\"Decline_Reason\":null,\"Gross_Premium\":0.07,\"Net_Premium\":0.07,\"Tax\":0,\"Tax_Rate\":0},\"Errors\":[],\"Warnings\":[{\"Key\":\"Default Values\",\"Value\":[\"Input parameter(s) missing. API request using the Default Values.\"]}],\"FetchTimeUTC\":\"2022-01-23T17:22:34.3150226Z\",\"EngineID\":\"0e6974d4-c448-4b25-a0ca-e5745b312d35\",\"ServiceName\":\"08_Item Product Engine\",\"EngineType\":\"Type3\",\"Revision\":\"1.0.0\",\"Version\":\"71e7becc-5a64-4a94-af5d-812d77d9878a\",\"ReleaseDate\":\"2022-01-12 09:09:55\",\"Description\":null,\"EngineHash\":\"723386664DB6BE4C3C8CECEEFEEC6033\",\"CalcTime\":1.0,\"TotalTime\":25,\"SolveInputs\":[],\"SolveOutputs\":[],\"ProductName\":\"Embedded\",\"EffectiveStartDate\":\"2010-01-01T00:00:00Z\",\"EffectiveEndDate\":\"2120-01-01T00:00:00Z\",\"CallGUID\":\"d8f0e068-2f45-40db-a705-524c019eabb0\"},\"errorCode\":null,\"status\":\"Success\"}",
          "API_Res9": null,
          "API_UWQ": "{\"message\":null,\"data\":{\"Inputs\":{\"Selected_Products\":[{\"ID\":1,\"Selected\":\"N\"},{\"ID\":2,\"Selected\":\"N\"},{\"ID\":3,\"Selected\":\"N\"},{\"ID\":4,\"Selected\":\"Y\"},{\"ID\":5,\"Selected\":\"N\"},{\"ID\":6,\"Selected\":\"Y\"},{\"ID\":7,\"Selected\":\"Y\"},{\"ID\":8,\"Selected\":\"Y\"},{\"ID\":9,\"Selected\":\"N\"},{\"ID\":10,\"Selected\":\"N\"}],\"UW_Response\":[{\"ID\":2,\"Response\":\"N\"},{\"ID\":3,\"Response\":\"N\"},{\"ID\":4,\"Response\":\"N\"}]},\"Outputs\":{\"Question_Sets\":[{\"ID\":1,\"Value\":\"Has any of your life insurance application been declined before?\",\"Response\":\"Yes;No;\",\"Referral_Response\":\"Yes\",\"Display\":\"N\"},{\"ID\":2,\"Value\":\"Have you had a home insurance policy cancelled, declined, refused to renew or had special terms and conditions imposed upon a policy, or have made or reported a home insurance claim in the past 3 years ?\",\"Response\":\"Yes;No;\",\"Referral_Response\":\"Yes\",\"Display\":\"Y\"},{\"ID\":3,\"Value\":\"Have you ever had, or been told that you have, or are you currently under investigation for diabetes, cancer, heart attack, stroke, AIDS or HIV infection, carcinoma in situ, tumour, lump or polyp?\",\"Response\":\"Yes;No;\",\"Referral_Response\":\"Yes\",\"Display\":\"Y\"},{\"ID\":4,\"Value\":\"In the past 2  years, have you had any abnormal results in a pap smear, mammogram, breast ultrasound, prostate examinination or tumour market blood test?\",\"Response\":\"Yes;No;\",\"Referral_Response\":\"Yes\",\"Display\":\"Y\"},{\"ID\":5,\"Value\":\"In the last 12 months, has the proposed insured smoked any cigarette, cigars, electronic cigarettes, vaporizers or waterpipe tobacco?\",\"Response\":\"Yes;No;\",\"Referral_Response\":\"\",\"Display\":\"Y\"}],\"Referral_Flag\":\"Quote\"},\"Errors\":[],\"FetchTimeUTC\":\"2022-01-23T17:22:35.1440014Z\",\"EngineID\":\"5c5c375e-6059-4a80-bd6a-e8ba7c91fa4c\",\"ServiceName\":\"UW Questions\",\"EngineType\":\"Type3\",\"Revision\":\"1.0.0\",\"Version\":\"78ed5a03-83eb-40a3-9f1a-1a1b43898826\",\"ReleaseDate\":\"2022-01-12 09:11:19\",\"Description\":null,\"EngineHash\":\"A0D046FD13D0D2135F6C3FA9D82CB7B5\",\"CalcTime\":4.0,\"TotalTime\":43,\"SolveInputs\":[],\"SolveOutputs\":[],\"ProductName\":\"Embedded\",\"EffectiveStartDate\":\"2010-01-01T00:00:00Z\",\"EffectiveEndDate\":\"2120-01-01T00:00:00Z\",\"CallGUID\":\"1afb7255-9697-4aaf-b140-064cfe16c806\"},\"errorCode\":null,\"status\":\"Success\"}",
          "Postcode_Out1": "ErrValue",
          "Postcode_Out2": "ErrValue",
          "Postcode_Out3": "ErrValue",
          "Postcode_Out4": "ErrValue",
          "Premium_Detail": [
            {
              "ID": 1,
              "Gross_Premium_before_Discount": "",
              "Gross_Premium_after_Discount": "",
              "Commission": "",
              "Tax": "",
              "Net_Premium": "",
              "Gross_Premium_inc_Tax": ""
            },
            {
              "ID": 2,
              "Gross_Premium_before_Discount": "",
              "Gross_Premium_after_Discount": "",
              "Commission": "",
              "Tax": "",
              "Net_Premium": "",
              "Gross_Premium_inc_Tax": ""
            },
            {
              "ID": 3,
              "Gross_Premium_before_Discount": "",
              "Gross_Premium_after_Discount": "",
              "Commission": "",
              "Tax": "",
              "Net_Premium": "",
              "Gross_Premium_inc_Tax": ""
            },
            {
              "ID": 4,
              "Gross_Premium_before_Discount": 3.51,
              "Gross_Premium_after_Discount": 3.44,
              "Commission": 0.69,
              "Tax": 0,
              "Net_Premium": 2.75,
              "Gross_Premium_inc_Tax": 3.44
            },
            {
              "ID": 5,
              "Gross_Premium_before_Discount": "",
              "Gross_Premium_after_Discount": "",
              "Commission": "",
              "Tax": "",
              "Net_Premium": "",
              "Gross_Premium_inc_Tax": ""
            },
            {
              "ID": 6,
              "Gross_Premium_before_Discount": 100,
              "Gross_Premium_after_Discount": 98,
              "Commission": 19.6,
              "Tax": 5.88,
              "Net_Premium": 78.4,
              "Gross_Premium_inc_Tax": 103.88
            },
            {
              "ID": 7,
              "Gross_Premium_before_Discount": 16.55,
              "Gross_Premium_after_Discount": 16.22,
              "Commission": 6.49,
              "Tax": 0,
              "Net_Premium": 9.73,
              "Gross_Premium_inc_Tax": 16.22
            },
            {
              "ID": 8,
              "Gross_Premium_before_Discount": 0.07,
              "Gross_Premium_after_Discount": 0.07,
              "Commission": 0.02,
              "Tax": 0,
              "Net_Premium": 0.05,
              "Gross_Premium_inc_Tax": 0.07
            },
            {
              "ID": 9,
              "Gross_Premium_before_Discount": "",
              "Gross_Premium_after_Discount": "",
              "Commission": "",
              "Tax": "",
              "Net_Premium": "",
              "Gross_Premium_inc_Tax": ""
            },
            {
              "ID": 10,
              "Gross_Premium_before_Discount": "",
              "Gross_Premium_after_Discount": "",
              "Commission": "",
              "Tax": "",
              "Net_Premium": "",
              "Gross_Premium_inc_Tax": ""
            }
          ],
          "Question_Sets": [
            {
              "ID": 1,
              "Value": "Has any of your life insurance application been declined before?",
              "Response": "Yes;No;",
              "Referral_Response": "Yes",
              "Display": "N"
            },
            {
              "ID": 2,
              "Value": "Have you had a home insurance policy cancelled, declined, refused to renew or had special terms and conditions imposed upon a policy, or have made or reported a home insurance claim in the past 3 years ?",
              "Response": "Yes;No;",
              "Referral_Response": "Yes",
              "Display": "Y"
            },
            {
              "ID": 3,
              "Value": "Have you ever had, or been told that you have, or are you currently under investigation for diabetes, cancer, heart attack, stroke, AIDS or HIV infection, carcinoma in situ, tumour, lump or polyp?",
              "Response": "Yes;No;",
              "Referral_Response": "Yes",
              "Display": "Y"
            },
            {
              "ID": 4,
              "Value": "In the past 2  years, have you had any abnormal results in a pap smear, mammogram, breast ultrasound, prostate examinination or tumour market blood test?",
              "Response": "Yes;No;",
              "Referral_Response": "Yes",
              "Display": "Y"
            },
            {
              "ID": 5,
              "Value": "In the last 12 months, has the proposed insured smoked any cigarette, cigars, electronic cigarettes, vaporizers or waterpipe tobacco?",
              "Response": "Yes;No;",
              "Referral_Response": "",
              "Display": "Y"
            }
          ],
          "Recommended_Products": [
            {
              "ID": 8,
              "Product": "Item",
              "Recommend Coverage": 200
            },
            {
              "ID": 4,
              "Product": "Cyber",
              "Recommend Coverage": 1
            },
            {
              "ID": 7,
              "Product": "Hospital Cash",
              "Recommend Coverage": 100
            },
            {
              "ID": 6,
              "Product": "Home Contents",
              "Recommend Coverage": 400
            }
          ],
          "Referral_Flag": "Quote",
          "UI_Options": [
            {
              "ID": 1,
              "Product": "Accidental PPD",
              "Eligibility": "Y",
              "Default": 40000,
              "Min": 0,
              "Max": 200000,
              "Step": 20000
            },
            {
              "ID": 2,
              "Product": "Critical Illness",
              "Eligibility": "Y",
              "Default": 20000,
              "Min": 0,
              "Max": 200000,
              "Step": 20000
            },
            {
              "ID": 3,
              "Product": "Crypto",
              "Eligibility": "Y",
              "Default": 2000,
              "Min": 0,
              "Max": 20000,
              "Step": 2000
            },
            {
              "ID": 4,
              "Product": "Cyber",
              "Eligibility": "Y",
              "Default": 1,
              "Min": 0,
              "Max": 1,
              "Step": 1
            },
            {
              "ID": 5,
              "Product": "Education",
              "Eligibility": "Y",
              "Default": 200,
              "Min": 0,
              "Max": 20000,
              "Step": 2000
            },
            {
              "ID": 6,
              "Product": "Home Contents",
              "Eligibility": "Y",
              "Default": 400,
              "Min": 0,
              "Max": 10000,
              "Step": 1000
            },
            {
              "ID": 7,
              "Product": "Hospital Cash",
              "Eligibility": "Y",
              "Default": 100,
              "Min": 0,
              "Max": 200,
              "Step": 20
            },
            {
              "ID": 8,
              "Product": "Item",
              "Eligibility": "Y",
              "Default": 200,
              "Min": 0,
              "Max": 10000,
              "Step": 1000
            },
            {
              "ID": 9,
              "Product": "Term Life",
              "Eligibility": "Y",
              "Default": 100000,
              "Min": 0,
              "Max": 200000,
              "Step": 20000
            },
            {
              "ID": 10,
              "Product": "Travel",
              "Eligibility": "Y",
              "Default": 200,
              "Min": 0,
              "Max": 2000,
              "Step": 200
            }
          ]
        },
        "warnings": [],
        "errors": [],
        "service_chain": []
      },
      "response_meta": {
        "service_id": "4b59e498-b6dd-492f-a27b-f3f5dca4c1cc",
        "version_id": "19dbe817-d620-4fe4-b2b1-996591077eb4",
        "version": "1.8.0",
        "process_time": 20,
        "call_id": "c5e43978-5052-45f1-888b-c8f1231b4b57",
        "compiler_type": "Type3",
        "compiler_version": "1.0.0",
        "source_hash": null,
        "engine_id": "D751AA0B8417648EAFC14A7AAB34A4C5",
        "correlation_id": "",
        "system": "SPARK",
        "request_timestamp": "2022-01-23, 17:24:18 GMT+00:00"
      }
    }

    vm.investInput = {
      "request_data": {
        "inputs": {
          "Discount_Code": null,
          "Limit1": null,
          "Limit10": null,
          "Limit2": null,
          "Limit3": null,
          "Limit4": null,
          "Limit5": null,
          "Limit6": null,
          "Limit7": null,
          "Limit8": null,
          "Limit9": null,
          "No_Products": 9,
          "Prm_Active_Lifestyle": "NA",
          "Prm_Age": 30,
          "Prm_AMZNPRIMESG": -1,
          "Prm_Automotive": -628,
          "Prm_Bar": -71,
          "Prm_Child": -472,
          "Prm_CreditArrear": 0,
          "Prm_CreditBalance": 8302,
          "Prm_CreditScore": "NA",
          "Prm_Currency": "NA",
          "Prm_Dependents": 0,
          "Prm_E_commerce": -528,
          "Prm_Education": "A Levels",
          "Prm_Food": -1999,
          "Prm_Gaming": -7,
          "Prm_Gender": "Female",
          "Prm_Grocery": -535,
          "Prm_Hair": -66,
          "Prm_Health": -161,
          "Prm_Helper": -444,
          "Prm_Home": "NA",
          "Prm_Income": 27000,
          "Prm_Industry": "Insurance",
          "Prm_Insurance": "NA",
          "Prm_LateSleeper": "NA",
          "Prm_Loan": 0,
          "Prm_Location": "NA",
          "Prm_Luxury": "NA",
          "Prm_Marital_Status": "Single",
          "Prm_Mortgage": "NA",
          "Prm_Movies": -29,
          "Prm_Occupation": "I.T.",
          "Prm_Petrol": -99,
          "Prm_Postcode": 560727,
          "Prm_ProfileName": "Cassandra",
          "Prm_Rent": -5156,
          "Prm_Residency": "Employment Pass",
          "Prm_Retail_shopping": -473,
          "Prm_Transport": -366,
          "Prm_Travel": -345,
          "Prm_Utility": -218,
          "Selection": "Customise",
          "UW_Response": [
            {
              "ID": 2,
              "Response": "N"
            },
            {
              "ID": 3,
              "Response": "N"
            },
            {
              "ID": 4,
              "Response": "N"
            }
          ]
        }
      },
      "request_meta": {
        "version_id": "dbdb14e5-6314-4287-95e1-6cff1942039c",
        "transaction_date": "2022-03-21T14:57:11.051Z",
        "call_purpose": "Spark - API Tester",
        "source_system": "SPARK",
        "correlation_id": "",
        "requested_output": "",
        "service_category": "",
        "compiler_type": "Type3"
      }
    }

    vm.PFInput = {
      "request_data": {
        "inputs": {
          "Discount_Code": null,
          "Limit1": null,
          "Limit10": null,
          "Limit2": null,
          "Limit3": null,
          "Limit4": null,
          "Limit5": null,
          "Limit6": null,
          "Limit7": null,
          "Limit8": null,
          "Limit9": null,
          "No_Products": 4,
          "Prm_Active_Lifestyle": "NA",
          "Prm_Age": 30,
          "Prm_AMZNPRIMESG": -1,
          "Prm_Automotive": -628,
          "Prm_Bar": -71,
          "Prm_Child": -472,
          "Prm_CreditArrear": 0,
          "Prm_CreditBalance": 8302,
          "Prm_CreditScore": "NA",
          "Prm_Currency": "NA",
          "Prm_Dependents": 0,
          "Prm_E_commerce": -528,
          "Prm_Education": "A Levels",
          "Prm_Food": -1999,
          "Prm_Gaming": -7,
          "Prm_Gender": "Female",
          "Prm_Grocery": -535,
          "Prm_Hair": -66,
          "Prm_Health": -161,
          "Prm_Helper": -444,
          "Prm_Home": "NA",
          "Prm_Income": 27000,
          "Prm_Industry": "Insurance",
          "Prm_Insurance": "NA",
          "Prm_LateSleeper": "NA",
          "Prm_Loan": 0,
          "Prm_Location": "NA",
          "Prm_Luxury": "NA",
          "Prm_Marital_Status": "Single",
          "Prm_Mortgage": "NA",
          "Prm_Movies": -29,
          "Prm_Occupation": "I.T.",
          "Prm_Petrol": -99,
          "Prm_Postcode": 300821,
          "Prm_Rent": -5156,
          "Prm_Residency": "Employment Pass",
          "Prm_Retail_shopping": -473,
          "Prm_Transport": -366,
          "Prm_Travel": -345,
          "Prm_Utility": -218,
          "Selection": "Recommended",
          "UW_Response": [
            {
              "ID": 2,
              "Response": "N"
            },
            {
              "ID": 3,
              "Response": "N"
            },
            {
              "ID": 4,
              "Response": "N"
            }
          ]
        }
      },
      "request_meta": {
        "version_id": "55303ac9-2a03-42ee-9c85-4808b8e1064f",
        "transaction_date": "2022-06-27T23:43:40.011Z",
        "call_purpose": "Spark - API Tester",
        "source_system": "SPARK",
        "correlation_id": "",
        "requested_output": "",
        "service_category": ""
      }
    }

    vm.PFOutput = {
      "response_data": {
        "outputs": {
          "01_Gross_Prem_before_discount": 89.35,
          "02a_Discount_Multi_Pct": 0.16,
          "02b_Code_Discount_Pct": 0,
          "02c_Code_Discount_amt": 0,
          "02d_Code_Discount_Product": "null",
          "02e_Code_Discount_Error_Msg": "null",
          "02g_Gross_Prem_after_discount": 75.05,
          "02h_Total_Discount": 14.3,
          "03_Comm": 18.65,
          "04_Tax": 3.16,
          "05_Net_Prem": 56.4,
          "06_Gross_Prem_inc_Tax": 78.21,
          "API_Discount": "{\"metadata\":{\"name\":\"EMBBEDED_Discount\",\"calltype\":\"EXTERNALXMLAPIBYNAME\",\"status\":\"200\",\"error_code\":\"\",\"response_time\":\"637\"},\"data\":{\"message\":null,\"data\":{\"Inputs\":{\"Discount_Code\":null,\"Product_cnt\":4,\"DateTime\":44621.02690667824},\"Outputs\":{\"02a_Discount_Multi_Pct\":0.16,\"02b_Code_Discount_Pct\":null,\"02c_Code_Discount_Amt\":null,\"02d_Code_Discount_Product\":null,\"02e_Code_Discount_Error_Msg\":null,\"DateTime\":44621.02690667824},\"Errors\":[],\"FetchTimeUTC\":\"2022-03-01T00:38:45.3731048Z\",\"EngineID\":\"ca9671c9-13ef-4d7c-8a84-19d43aa5e62d\",\"ServiceName\":\"Discount Table\",\"EngineType\":\"Type3\",\"Revision\":\"1.54.0\",\"Version\":\"4b807af6-7084-4422-b8fd-28628972fb56\",\"ReleaseDate\":\"2022-02-17 06:12:31\",\"Description\":null,\"EngineHash\":\"C737DF30DF5B3455C0A81841599819AB\",\"CalcTime\":0.0,\"TotalTime\":28,\"SolveInputs\":[],\"SolveOutputs\":[],\"ProductName\":\"Flex\",\"EffectiveStartDate\":\"2010-01-01T00:00:00Z\",\"EffectiveEndDate\":\"2120-01-01T00:00:00Z\",\"CallGUID\":\"c473a4a7-dca5-41e5-8de0-4a6a1b19a073\"},\"errorCode\":null,\"status\":\"Success\"}}",
          "API_Postcode": "{\"metadata\":{\"name\":\"SGLOCATE_POSTCODE\",\"calltype\":\"EXTERNALXMLAPIBYNAME\",\"status\":\"200\",\"error_code\":\"\",\"response_time\":\"0\"},\"data\":{\"metadata\":{\"name\":\"SGLOCATE_POSTCODE\",\"calltype\":\"EXTERNALXMLAPIBYNAME\",\"status\":\"200\",\"error_code\":\"\",\"response_time\":\"252\"},\"data\":{\"IsSuccess\":false,\"ErrorCode\":\"-21\",\"ErrorDetails\":\"Unauthorized postcode for demo plan.\",\"Postcodes\":[]}}}",
          "API_Recommender": "{\"metadata\":{\"name\":\"EMBBEDED_Recommender\",\"calltype\":\"EXTERNALXMLAPIBYNAME\",\"status\":\"200\",\"error_code\":\"\",\"response_time\":\"937\"},\"data\":{\"message\":null,\"data\":{\"Inputs\":{\"Factors\":[{\"Variables\":\"Age\",\"Value\":30},{\"Variables\":\"Gender\",\"Value\":\"Female\"},{\"Variables\":\"Income\",\"Value\":27000},{\"Variables\":\"Postcode\",\"Value\":300821},{\"Variables\":\"Occupation\",\"Value\":\"I.T.\"},{\"Variables\":\"Industry\",\"Value\":\"Insurance\"},{\"Variables\":\"Marital Status\",\"Value\":\"Single\"},{\"Variables\":\"Dependents\",\"Value\":0},{\"Variables\":\"Education\",\"Value\":\"A Levels\"},{\"Variables\":\"Residency\",\"Value\":\"Employment Pass\"},{\"Variables\":\"CreditBalance\",\"Value\":8302},{\"Variables\":\"CreditArrear\",\"Value\":0},{\"Variables\":\"Loan\",\"Value\":0},{\"Variables\":\"Health\",\"Value\":-161},{\"Variables\":\"Child\",\"Value\":-472},{\"Variables\":\"Insurance\",\"Value\":\"NA\"},{\"Variables\":\"Travel\",\"Value\":-345},{\"Variables\":\"Luxury\",\"Value\":\"NA\"},{\"Variables\":\"E-commerce\",\"Value\":-528},{\"Variables\":\"Active Lifestyle\",\"Value\":\"NA\"},{\"Variables\":\"Grocery\",\"Value\":-535},{\"Variables\":\"Home\",\"Value\":\"NA\"},{\"Variables\":\"Currency\",\"Value\":\"NA\"},{\"Variables\":\"Automotive\",\"Value\":-628},{\"Variables\":\"Bar\",\"Value\":-71},{\"Variables\":\"Food\",\"Value\":-1999},{\"Variables\":\"Gaming\",\"Value\":-7},{\"Variables\":\"Hair\",\"Value\":-66},{\"Variables\":\"Helper\",\"Value\":-444},{\"Variables\":\"Movies\",\"Value\":-29},{\"Variables\":\"Petrol\",\"Value\":-99},{\"Variables\":\"Rent\",\"Value\":-5156},{\"Variables\":\"Retail shopping\",\"Value\":-473},{\"Variables\":\"Transport\",\"Value\":-366},{\"Variables\":\"Utility\",\"Value\":-218},{\"Variables\":\"AMZNPRIMESG\",\"Value\":-1},{\"Variables\":\"Mortgage\",\"Value\":\"NA\"},{\"Variables\":\"CreditScore\",\"Value\":\"NA\"},{\"Variables\":\"LateSleeper\",\"Value\":\"NA\"},{\"Variables\":\"Location\",\"Value\":\"NA\"}],\"DateTime\":44621.02689101852},\"Outputs\":{\"Results\":[{\"ID\":1,\"Model\":\"Term Life\",\"Prob\":0.004496273160941,\"Manual Offer Flag\":\"Y\",\"Calc Offer Flag\":\"Y\",\"Offer_Flag\":\"Y\",\"Probability\":0.004496273160941,\"Rank\":8},{\"ID\":2,\"Model\":\"Accidental PPD\",\"Prob\":0.768524783499018,\"Manual Offer Flag\":\"Y\",\"Calc Offer Flag\":\"Y\",\"Offer_Flag\":\"Y\",\"Probability\":0.768524783499018,\"Rank\":5},{\"ID\":3,\"Model\":\"Critical Illness\",\"Prob\":0.574442516811659,\"Manual Offer Flag\":\"Y\",\"Calc Offer Flag\":\"Y\",\"Offer_Flag\":\"Y\",\"Probability\":0.574442516811659,\"Rank\":6},{\"ID\":4,\"Model\":\"Medical Expenses\",\"Prob\":0,\"Manual Offer Flag\":\"Y\",\"Calc Offer Flag\":\"Y\",\"Offer_Flag\":\"Y\",\"Probability\":0.0,\"Rank\":10},{\"ID\":5,\"Model\":\"Hospital Cash\",\"Prob\":0.995033198349943,\"Manual Offer Flag\":\"Y\",\"Calc Offer Flag\":\"Y\",\"Offer_Flag\":\"Y\",\"Probability\":0.995033198349943,\"Rank\":2},{\"ID\":6,\"Model\":\"Travel\",\"Prob\":0.930861579656653,\"Manual Offer Flag\":\"Y\",\"Calc Offer Flag\":\"Y\",\"Offer_Flag\":\"Y\",\"Probability\":0.930861579656653,\"Rank\":4},{\"ID\":7,\"Model\":\"Home Emergency Assistance\",\"Prob\":0,\"Manual Offer Flag\":\"Y\",\"Calc Offer Flag\":\"Y\",\"Offer_Flag\":\"Y\",\"Probability\":0.0,\"Rank\":11},{\"ID\":8,\"Model\":\"Cyber\",\"Prob\":0.999647462162129,\"Manual Offer Flag\":\"N\",\"Calc Offer Flag\":\"Y\",\"Offer_Flag\":\"N\",\"Probability\":0.0,\"Rank\":9},{\"ID\":9,\"Model\":\"Home Contents\",\"Prob\":0.994779874306442,\"Manual Offer Flag\":\"Y\",\"Calc Offer Flag\":\"Y\",\"Offer_Flag\":\"Y\",\"Probability\":0.994779874306442,\"Rank\":3},{\"ID\":10,\"Model\":\"Unemployment*\",\"Prob\":0,\"Manual Offer Flag\":\"Y\",\"Calc Offer Flag\":\"N\",\"Offer_Flag\":\"Y\",\"Probability\":0.0,\"Rank\":13},{\"ID\":11,\"Model\":\"Event Cancellation\",\"Prob\":0,\"Manual Offer Flag\":\"Y\",\"Calc Offer Flag\":\"N\",\"Offer_Flag\":\"Y\",\"Probability\":0.0,\"Rank\":14},{\"ID\":12,\"Model\":\"Item\",\"Prob\":0.999981542106704,\"Manual Offer Flag\":\"Y\",\"Calc Offer Flag\":\"Y\",\"Offer_Flag\":\"Y\",\"Probability\":0.999981542106704,\"Rank\":1},{\"ID\":13,\"Model\":\"Shipping Insurance\",\"Prob\":0,\"Manual Offer Flag\":\"Y\",\"Calc Offer Flag\":\"N\",\"Offer_Flag\":\"Y\",\"Probability\":0.0,\"Rank\":15},{\"ID\":14,\"Model\":\"Sports coverage for physical injury\",\"Prob\":0,\"Manual Offer Flag\":\"Y\",\"Calc Offer Flag\":\"N\",\"Offer_Flag\":\"Y\",\"Probability\":0.0,\"Rank\":16},{\"ID\":15,\"Model\":\"Competition / Race coverage\",\"Prob\":0,\"Manual Offer Flag\":\"Y\",\"Calc Offer Flag\":\"N\",\"Offer_Flag\":\"Y\",\"Probability\":0.0,\"Rank\":17},{\"ID\":16,\"Model\":\"Gimmicky \\\"prize\\\" insurance\",\"Prob\":0,\"Manual Offer Flag\":\"Y\",\"Calc Offer Flag\":\"N\",\"Offer_Flag\":\"Y\",\"Probability\":0.0,\"Rank\":18},{\"ID\":17,\"Model\":\"Education\",\"Prob\":0.004406347697722,\"Manual Offer Flag\":\"Y\",\"Calc Offer Flag\":\"Y\",\"Offer_Flag\":\"Y\",\"Probability\":0.004406347697722,\"Rank\":9},{\"ID\":18,\"Model\":\"Crypto\",\"Prob\":0.52497918747894,\"Manual Offer Flag\":\"Y\",\"Calc Offer Flag\":\"Y\",\"Offer_Flag\":\"Y\",\"Probability\":0.52497918747894,\"Rank\":7}],\"DateTime\":44621.02689101852},\"Errors\":[],\"FetchTimeUTC\":\"2022-03-01T00:38:44.315657Z\",\"EngineID\":\"149bc281-78cd-4a73-ae06-3f6954a558d8\",\"ServiceName\":\"Recommender\",\"EngineType\":\"Type3\",\"Revision\":\"1.13.0\",\"Version\":\"b64d1690-5e0b-4776-b21d-dcad5787c3b4\",\"ReleaseDate\":\"2022-02-24 03:18:06\",\"Description\":null,\"EngineHash\":\"DCF5F4F71650966C5FFC6B2ED7CA023D\",\"CalcTime\":243.0,\"TotalTime\":267,\"SolveInputs\":[],\"SolveOutputs\":[],\"ProductName\":\"Flex\",\"EffectiveStartDate\":\"2010-01-01T00:00:00Z\",\"EffectiveEndDate\":\"2120-01-01T00:00:00Z\",\"CallGUID\":\"f4e8a5a1-e7ae-4671-91f4-2b152033c46c\"},\"errorCode\":null,\"status\":\"Success\"}}",
          "API_Res1": null,
          "API_Res10": "{\"metadata\":{\"name\":\"EMBBEDED_10_Product\",\"calltype\":\"EXTERNALXMLAPIBYNAME\",\"status\":\"200\",\"error_code\":\"\",\"response_time\":\"0\"},\"data\":{\"metadata\":{\"name\":\"EMBBEDED_10_Product\",\"calltype\":\"EXTERNALXMLAPIBYNAME\",\"status\":\"200\",\"error_code\":\"\",\"response_time\":\"566\"},\"data\":{\"message\":null,\"data\":{\"Inputs\":{\"Promotion_Code\":null,\"Quote_Date\":null,\"Sum_Assured\":200},\"Outputs\":{\"Commission\":0,\"Commission_Rate\":0.3,\"Decline_Flag\":null,\"Decline_Reason\":null,\"Gross_Premium\":10.11,\"Net_Premium\":10.11,\"Tax\":0,\"Tax_Rate\":0},\"Errors\":[],\"Warnings\":[{\"Key\":\"Default Values\",\"Value\":[\"Input parameter(s) missing. API request using the Default Values.\"]}],\"FetchTimeUTC\":\"2022-03-01T00:34:34.4308968Z\",\"EngineID\":\"9479a708-ff71-45d0-9a21-5dab0258be7f\",\"ServiceName\":\"10_Travel Product Engine\",\"EngineType\":\"Type3\",\"Revision\":\"1.0.0\",\"Version\":\"2232627f-dbc1-43c2-9c8a-a0d5b069d451\",\"ReleaseDate\":\"2022-01-26 05:55:18\",\"Description\":null,\"EngineHash\":\"1E1C47AEE1D4A91AD1606DAD068712D5\",\"CalcTime\":0.0,\"TotalTime\":38,\"SolveInputs\":[],\"SolveOutputs\":[],\"ProductName\":\"Product Engine General Insurance\",\"EffectiveStartDate\":\"2010-01-01T00:00:00Z\",\"EffectiveEndDate\":\"2120-01-01T00:00:00Z\",\"CallGUID\":\"8b64f098-cb5f-4802-a6ab-e4ddf18a8a18\"},\"errorCode\":null,\"status\":\"Success\"}}}",
          "API_Res2": null,
          "API_Res3": null,
          "API_Res4": null,
          "API_Res5": null,
          "API_Res6": "{\"metadata\":{\"name\":\"EMBBEDED_06_Product\",\"calltype\":\"EXTERNALXMLAPIBYNAME\",\"status\":\"200\",\"error_code\":\"\",\"response_time\":\"403\"},\"data\":{\"message\":null,\"data\":{\"Inputs\":{\"Content_SI\":400,\"Floor_Size\":1999,\"Payment_Options\":null,\"Postal_Code\":18979,\"Promotion_Code\":null,\"Property_Type\":\"Flat\",\"Quote_Date\":\"2021-11-23 T03:00:00Z\",\"Year_Built\":1980,\"DateTime\":44621.02690193287},\"Outputs\":{\"Commission\":12.52,\"Commission_Rate\":0.2,\"Decline_Flag\":0,\"Decline_Reason\":null,\"Gross_Premium\":62.62,\"Net_Premium\":50.1,\"Tax\":3.76,\"Tax_Rate\":0.060044714148834,\"DateTime\":44621.02690193287},\"Errors\":[],\"Warnings\":[{\"Key\":\"Default Values\",\"Value\":[\"Input parameter(s) missing. API request using the Default Values.\"]}],\"FetchTimeUTC\":\"2022-03-01T00:38:44.7256002Z\",\"EngineID\":\"f2298058-60ee-44c7-ab68-6699527c9786\",\"ServiceName\":\"06_Home Content Product Engine Details\",\"EngineType\":\"Type3\",\"Revision\":\"1.6.0\",\"Version\":\"2112747e-b704-4f74-a2f6-360ef82a37dd\",\"ReleaseDate\":\"2022-02-17 02:25:40\",\"Description\":null,\"EngineHash\":\"A7B948C677A3B7C3F848043CA662C1B9\",\"CalcTime\":1.0,\"TotalTime\":40,\"SolveInputs\":[],\"SolveOutputs\":[],\"ProductName\":\"Product Engine General Insurance\",\"EffectiveStartDate\":\"2010-01-01T00:00:00Z\",\"EffectiveEndDate\":\"2120-01-01T00:00:00Z\",\"CallGUID\":\"4cfed0c5-c151-40d3-9859-b948d757c7ba\"},\"errorCode\":null,\"status\":\"Success\"}}",
          "API_Res7": "{\"metadata\":{\"name\":\"EMBBEDED_07_Product\",\"calltype\":\"EXTERNALXMLAPIBYNAME\",\"status\":\"200\",\"error_code\":\"\",\"response_time\":\"0\"},\"data\":{\"metadata\":{\"name\":\"EMBBEDED_07_Product\",\"calltype\":\"EXTERNALXMLAPIBYNAME\",\"status\":\"200\",\"error_code\":\"\",\"response_time\":\"518\"},\"data\":{\"message\":null,\"data\":{\"Inputs\":{\"Promotion_Code\":null,\"Quote_Date\":null,\"Sum_Assured\":100},\"Outputs\":{\"Commission\":0,\"Commission_Rate\":0.4,\"Decline_Flag\":null,\"Decline_Reason\":null,\"Gross_Premium\":16.55,\"Net_Premium\":16.55,\"Tax\":0,\"Tax_Rate\":0},\"Errors\":[],\"Warnings\":[{\"Key\":\"Default Values\",\"Value\":[\"Input parameter(s) missing. API request using the Default Values.\"]}],\"FetchTimeUTC\":\"2022-03-01T00:34:33.3378237Z\",\"EngineID\":\"4f01723c-7f63-4804-9a86-94f21e398e9a\",\"ServiceName\":\"07_Hospital Cash Product Engine\",\"EngineType\":\"Type3\",\"Revision\":\"1.0.0\",\"Version\":\"b96d92fd-c179-4ed4-bfff-20cf8e194b57\",\"ReleaseDate\":\"2022-01-26 05:47:05\",\"Description\":null,\"EngineHash\":\"9D41B7D38066D29C5B36DE6E010ECB6A\",\"CalcTime\":0.0,\"TotalTime\":36,\"SolveInputs\":[],\"SolveOutputs\":[],\"ProductName\":\"Product Engine Life and Health\",\"EffectiveStartDate\":\"2010-01-01T00:00:00Z\",\"EffectiveEndDate\":\"2120-01-01T00:00:00Z\",\"CallGUID\":\"139369a5-960b-460c-8bc6-1f65e739e61d\"},\"errorCode\":null,\"status\":\"Success\"}}}",
          "API_Res8": "{\"metadata\":{\"name\":\"EMBBEDED_08_Product\",\"calltype\":\"EXTERNALXMLAPIBYNAME\",\"status\":\"200\",\"error_code\":\"\",\"response_time\":\"0\"},\"data\":{\"metadata\":{\"name\":\"EMBBEDED_08_Product\",\"calltype\":\"EXTERNALXMLAPIBYNAME\",\"status\":\"200\",\"error_code\":\"\",\"response_time\":\"518\"},\"data\":{\"message\":null,\"data\":{\"Inputs\":{\"Promotion_Code\":null,\"Quote_Date\":null,\"Sum_Assured\":200},\"Outputs\":{\"Commission\":0,\"Commission_Rate\":0.3,\"Decline_Flag\":null,\"Decline_Reason\":null,\"Gross_Premium\":0.07,\"Net_Premium\":0.07,\"Tax\":0,\"Tax_Rate\":0},\"Errors\":[],\"Warnings\":[{\"Key\":\"Default Values\",\"Value\":[\"Input parameter(s) missing. API request using the Default Values.\"]}],\"FetchTimeUTC\":\"2022-03-01T00:34:33.8626535Z\",\"EngineID\":\"8ce8e4dc-6b85-46d7-98f3-1950da08141c\",\"ServiceName\":\"08_Item Product Engine\",\"EngineType\":\"Type3\",\"Revision\":\"1.0.0\",\"Version\":\"d6a0795d-75fd-45a8-9943-83b73a968f79\",\"ReleaseDate\":\"2022-01-26 05:55:06\",\"Description\":null,\"EngineHash\":\"FCDCEAA7E7903C94755673FA05A5AD0D\",\"CalcTime\":0.0,\"TotalTime\":21,\"SolveInputs\":[],\"SolveOutputs\":[],\"ProductName\":\"Product Engine General Insurance\",\"EffectiveStartDate\":\"2010-01-01T00:00:00Z\",\"EffectiveEndDate\":\"2120-01-01T00:00:00Z\",\"CallGUID\":\"b248d1a6-b42b-4907-b6ad-d65c5641a5ef\"},\"errorCode\":null,\"status\":\"Success\"}}}",
          "API_Res9": null,
          "API_UWQ": "{\"metadata\":{\"name\":\"EMBBEDED_UWQuestions\",\"calltype\":\"EXTERNALXMLAPIBYNAME\",\"status\":\"200\",\"error_code\":\"\",\"response_time\":\"731\"},\"data\":{\"message\":null,\"data\":{\"Inputs\":{\"Selected_Products\":[{\"ID\":1,\"Selected\":\"N\"},{\"ID\":2,\"Selected\":\"N\"},{\"ID\":3,\"Selected\":\"N\"},{\"ID\":4,\"Selected\":\"N\"},{\"ID\":5,\"Selected\":\"N\"},{\"ID\":6,\"Selected\":\"Y\"},{\"ID\":7,\"Selected\":\"Y\"},{\"ID\":8,\"Selected\":\"Y\"},{\"ID\":9,\"Selected\":\"N\"},{\"ID\":10,\"Selected\":\"Y\"}],\"UW_Response\":[{\"ID\":2,\"Response\":\"N\"},{\"ID\":3,\"Response\":\"N\"},{\"ID\":4,\"Response\":\"N\"}],\"DateTime\":44621.026914155096},\"Outputs\":{\"Question_Sets\":[{\"ID\":1,\"Value\":\"Has any of your life insurance application been declined before?\",\"Response\":\"Yes;No;\",\"Referral_Response\":\"Yes\",\"Display\":\"N\"},{\"ID\":2,\"Value\":\"Have you had a home insurance policy cancelled, declined, refused to renew or had special terms and conditions imposed upon a policy, or have made or reported a home insurance claim in the past 3 years ?\",\"Response\":\"Yes;No;\",\"Referral_Response\":\"Yes\",\"Display\":\"Y\"},{\"ID\":3,\"Value\":\"Have you ever had, or been told that you have, or are you currently under investigation for diabetes, cancer, heart attack, stroke, AIDS or HIV infection, carcinoma in situ, tumour, lump or polyp?\",\"Response\":\"Yes;No;\",\"Referral_Response\":\"Yes\",\"Display\":\"Y\"},{\"ID\":4,\"Value\":\"In the past 2  years, have you had any abnormal results in a pap smear, mammogram, breast ultrasound, prostate examinination or tumour market blood test?\",\"Response\":\"Yes;No;\",\"Referral_Response\":\"Yes\",\"Display\":\"Y\"},{\"ID\":5,\"Value\":\"In the last 12 months, has the proposed insured smoked any cigarette, cigars, electronic cigarettes, vaporizers or waterpipe tobacco?\",\"Response\":\"Yes;No;\",\"Referral_Response\":\"\",\"Display\":\"Y\"}],\"Referral_Flag\":\"Quote\",\"DateTime\":44621.026914155096},\"Errors\":[],\"FetchTimeUTC\":\"2022-03-01T00:38:46.1104987Z\",\"EngineID\":\"0e7ef5f8-af6f-465b-87b9-dd115fd83cbd\",\"ServiceName\":\"UW Questions\",\"EngineType\":\"Type3\",\"Revision\":\"1.15.0\",\"Version\":\"a6105790-ad39-4d97-9593-eee9b360b1a3\",\"ReleaseDate\":\"2022-02-23 13:11:40\",\"Description\":null,\"EngineHash\":\"6CCC083D2BA7398E655674B8814E5483\",\"CalcTime\":3.0,\"TotalTime\":35,\"SolveInputs\":[],\"SolveOutputs\":[],\"ProductName\":\"Flex\",\"EffectiveStartDate\":\"2010-01-01T00:00:00Z\",\"EffectiveEndDate\":\"2120-01-01T00:00:00Z\",\"CallGUID\":\"7c316d8b-d219-4430-b17d-0580fb3bde18\"},\"errorCode\":null,\"status\":\"Success\"}}",
          "Postcode_Out1": "ErrValue",
          "Postcode_Out2": "ErrValue",
          "Postcode_Out3": "ErrValue",
          "Postcode_Out4": "ErrValue",
          "Premium_Detail": [
            {
              "ID": 1,
              "Gross_Premium_before_Discount": "",
              "Gross_Premium_after_Discount": "",
              "Commission": "",
              "Tax": "",
              "Net_Premium": "",
              "Gross_Premium_inc_Tax": ""
            },
            {
              "ID": 2,
              "Gross_Premium_before_Discount": "",
              "Gross_Premium_after_Discount": "",
              "Commission": "",
              "Tax": "",
              "Net_Premium": "",
              "Gross_Premium_inc_Tax": ""
            },
            {
              "ID": 3,
              "Gross_Premium_before_Discount": "",
              "Gross_Premium_after_Discount": "",
              "Commission": "",
              "Tax": "",
              "Net_Premium": "",
              "Gross_Premium_inc_Tax": ""
            },
            {
              "ID": 4,
              "Gross_Premium_before_Discount": "",
              "Gross_Premium_after_Discount": "",
              "Commission": "",
              "Tax": "",
              "Net_Premium": "",
              "Gross_Premium_inc_Tax": ""
            },
            {
              "ID": 5,
              "Gross_Premium_before_Discount": "",
              "Gross_Premium_after_Discount": "",
              "Commission": "",
              "Tax": "",
              "Net_Premium": "",
              "Gross_Premium_inc_Tax": ""
            },
            {
              "ID": 6,
              "Gross_Premium_before_Discount": 62.62,
              "Gross_Premium_after_Discount": 52.6,
              "Commission": 10.52,
              "Tax": 3.16,
              "Net_Premium": 42.08,
              "Gross_Premium_inc_Tax": 55.76
            },
            {
              "ID": 7,
              "Gross_Premium_before_Discount": 16.55,
              "Gross_Premium_after_Discount": 13.9,
              "Commission": 5.56,
              "Tax": 0,
              "Net_Premium": 8.34,
              "Gross_Premium_inc_Tax": 13.9
            },
            {
              "ID": 8,
              "Gross_Premium_before_Discount": 0.07,
              "Gross_Premium_after_Discount": 0.06,
              "Commission": 0.02,
              "Tax": 0,
              "Net_Premium": 0.04,
              "Gross_Premium_inc_Tax": 0.06
            },
            {
              "ID": 9,
              "Gross_Premium_before_Discount": "",
              "Gross_Premium_after_Discount": "",
              "Commission": "",
              "Tax": "",
              "Net_Premium": "",
              "Gross_Premium_inc_Tax": ""
            },
            {
              "ID": 10,
              "Gross_Premium_before_Discount": 10.11,
              "Gross_Premium_after_Discount": 8.49,
              "Commission": 2.55,
              "Tax": 0,
              "Net_Premium": 5.94,
              "Gross_Premium_inc_Tax": 8.49
            }
          ],
          "Question_Sets": [
            {
              "ID": 1,
              "Value": "Has any of your life insurance application been declined before?",
              "Response": "Yes;No;",
              "Referral_Response": "Yes",
              "Display": "N"
            },
            {
              "ID": 2,
              "Value": "Have you had a home insurance policy cancelled, declined, refused to renew or had special terms and conditions imposed upon a policy, or have made or reported a home insurance claim in the past 3 years ?",
              "Response": "Yes;No;",
              "Referral_Response": "Yes",
              "Display": "Y"
            },
            {
              "ID": 3,
              "Value": "Have you ever had, or been told that you have, or are you currently under investigation for diabetes, cancer, heart attack, stroke, AIDS or HIV infection, carcinoma in situ, tumour, lump or polyp?",
              "Response": "Yes;No;",
              "Referral_Response": "Yes",
              "Display": "Y"
            },
            {
              "ID": 4,
              "Value": "In the past 2  years, have you had any abnormal results in a pap smear, mammogram, breast ultrasound, prostate examinination or tumour market blood test?",
              "Response": "Yes;No;",
              "Referral_Response": "Yes",
              "Display": "Y"
            },
            {
              "ID": 5,
              "Value": "In the last 12 months, has the proposed insured smoked any cigarette, cigars, electronic cigarettes, vaporizers or waterpipe tobacco?",
              "Response": "Yes;No;",
              "Referral_Response": "",
              "Display": "Y"
            }
          ],
          "Recommended_Products": [
            {
              "ID": 8,
              "Product": "Item",
              "Recommend Coverage": 200
            },
            {
              "ID": 7,
              "Product": "Hospital Cash",
              "Recommend Coverage": 100
            },
            {
              "ID": 6,
              "Product": "Home Contents",
              "Recommend Coverage": 400
            },
            {
              "ID": 10,
              "Product": "Travel",
              "Recommend Coverage": 200
            }
          ],
          "Referral_Flag": "Quote,DateTime:44621.026914155096",
          "UI_Options": [
            {
              "ID": 1,
              "Product": "Accidental PPD",
              "Eligibility": "Y",
              "Default": 40000,
              "Min": 0,
              "Max": 200000,
              "Step": 20000
            },
            {
              "ID": 2,
              "Product": "Critical Illness",
              "Eligibility": "Y",
              "Default": 20000,
              "Min": 0,
              "Max": 200000,
              "Step": 20000
            },
            {
              "ID": 3,
              "Product": "Crypto",
              "Eligibility": "Y",
              "Default": 2000,
              "Min": 0,
              "Max": 20000,
              "Step": 2000
            },
            {
              "ID": 4,
              "Product": "Cyber",
              "Eligibility": "Y",
              "Default": 1,
              "Min": 0,
              "Max": 1,
              "Step": 1
            },
            {
              "ID": 5,
              "Product": "Education",
              "Eligibility": "Y",
              "Default": 200,
              "Min": 0,
              "Max": 20000,
              "Step": 2000
            },
            {
              "ID": 6,
              "Product": "Home Contents",
              "Eligibility": "Y",
              "Default": 400,
              "Min": 0,
              "Max": 10000,
              "Step": 1000
            },
            {
              "ID": 7,
              "Product": "Hospital Cash",
              "Eligibility": "Y",
              "Default": 100,
              "Min": 0,
              "Max": 200,
              "Step": 20
            },
            {
              "ID": 8,
              "Product": "Item",
              "Eligibility": "Y",
              "Default": 200,
              "Min": 0,
              "Max": 10000,
              "Step": 1000
            },
            {
              "ID": 9,
              "Product": "Term Life",
              "Eligibility": "Y",
              "Default": 100000,
              "Min": 0,
              "Max": 200000,
              "Step": 20000
            },
            {
              "ID": 10,
              "Product": "Travel",
              "Eligibility": "Y",
              "Default": 200,
              "Min": 0,
              "Max": 2000,
              "Step": 200
            }
          ]
        },
        "warnings": [],
        "errors": [],
        "service_chain": []
      },
      "response_meta": {
        "service_id": null,
        "version_id": "0bdfbd7d-31b7-4821-8971-856110e180de",
        "version": "1.2.0",
        "process_time": 2747,
        "call_id": "261886fe-b2ff-4283-9d38-5ab2d20e2cce",
        "compiler_type": "Type3",
        "compiler_version": "1.0.0",
        "source_hash": null,
        "engine_id": "F5802C4B510681F7B6396B84B5B9E5F5",
        "correlation_id": "",
        "system": "SPARK",
        "request_timestamp": "2022-03-01, 00:38:43 GMT+00:00"
      }
    }

    vm.recommendedPlans = [
        {
            "premium": "",
            "cover": 200,
            "name": "Item",
            "Default": 200,
            "Min": 0,
            "Max": 10000,
            "Step": 1000,
            "ID": 8
        },
        {
            "premium": "",
            "cover": 100,
            "name": "Hospital Cash",
            "Default": 100,
            "Min": 0,
            "Max": 200,
            "Step": 20,
            "ID": 7
        },
        {
            "premium": 10.11,
            "cover": 200,
            "name": "Travel",
            "Default": 200,
            "Min": 0,
            "Max": 2000,
            "Step": 200,
            "ID": 10
        },
        {
            "premium": "",
            "cover": 400,
            "name": "Home Contents",
            "Default": 400,
            "Min": 0,
            "Max": 10000,
            "Step": 1000,
            "ID": 6
        }
    ]

    vm.productRotationInput = {"request_data":{"inputs":{"Amount":"10000","BillType":"electric","FirstBill":true,"LastViewed":"Ginsure Bill Protect","OfferType":"Single","OwnCyber":false,"OwnHome":false,"OwnProtect":false,"OwnTravel":false}},"request_meta":{}}
    vm.productUpsellInput = {"request_data":{"inputs":{"Age":"24","Family":false,"HighNet":false,"LifeStyle":false,"PersonalEffects":false,"Spouse":false, "Passengers": "0"}},"request_meta":{}}

    vm.PFToken = '302041c0-6c2b-4567-8b3a-ae21cbf9671c'

    vm.activeProduct = ''
    vm.productData = []

    vm.setActiveProduct = function (activeProduct) {
      vm.activeProduct = activeProduct;
    }
    vm.setProductData = function (productData) {
      vm.productData = productData;
    }

    vm.plansSamples = [
        {
            "premium": 3.44,
            "name": "Cyber",
            "Default": 1,
            "Min": 0,
            "Max": 1,
            "Step": 1,
            "ID": 4
        },
        {
            "premium": 98,
            "name": "Home Contents",
            "Default": 400,
            "Min": 0,
            "Max": 10000,
            "Step": 1000,
            "ID": 6
        },
        {
            "premium": 16.22,
            "name": "Hospital Cash",
            "Default": 100,
            "Min": 0,
            "Max": 200,
            "Step": 20,
            "ID": 7
        },
        {
            "premium": 0.07,
            "name": "Item",
            "Default": 200,
            "Min": 0,
            "Max": 10000,
            "Step": 1000,
            "ID": 8
        }
    ];
    vm.customCoverages = []

    vm.personas = [
     {
       "Persona_ID": 1,
       "Name": "Cassandra",
       "Prm_Age": 30,
       "Prm_Gender": "Female",
       "Prm_Income": 27000,
       "Prm_Postcode": 300821,
       "Prm_Occupation": "I.T.",
       "Prm_Industry": "Insurance",
       "Prm_Marital_Status": "Single",
       "Prm_Dependents": 0,
       "Prm_Education": "A Levels",
       "Prm_Residency": "Employment Pass",
       "Prm_CreditBalance": 8302,
       "Prm_CreditArrear": 0,
       "Prm_Loan": 0,
       "Prm_Health": 0,
       "Prm_Child": -470,
       "Prm_Insurance": "NA",
       "Prm_Travel": -345,
       "Prm_Luxury": "NA",
       "Prm_E-commerce": -200,
       "Prm_Active_Lifestyle": "NA",
       "Prm_Grocery": -535,
       "Prm_Home": "NA",
       "Prm_Currency": 0,
       "Prm_Automotive": -600,
       "Prm_Bar": 0,
       "Prm_Food": 0,
       "Prm_Gaming": 0,
       "Prm_Hair": 0,
       "Prm_Helper": 0,
       "Prm_Movies": 0,
       "Prm_Petrol": 0,
       "Prm_Rent": -3000,
       "Prm_Retail_shopping": -555,
       "Prm_Transport": 0,
       "Prm_Utility": 0,
       "Prm_AMZNPRIMESG": 0,
       "Prm_Mortgage": "NA",
       "Prm_CreditScore": "NA",
       "Prm_LateSleeper": "NA",
       "Prm_Location": "NA"
     },
     {
       "Persona_ID": 2,
       "Name": "Cristine",
       "Prm_Age": 23,
       "Prm_Gender": "Female",
       "Prm_Income": 10909,
       "Prm_Postcode": 768100,
       "Prm_Occupation": "Lawyer",
       "Prm_Industry": "Insurance",
       "Prm_Marital_Status": "Single",
       "Prm_Dependents": 0,
       "Prm_Education": "Bachelor Degree",
       "Prm_Residency": "Singaporean/ PR",
       "Prm_CreditBalance": 0,
       "Prm_CreditArrear": 0,
       "Prm_Loan": "NA",
       "Prm_Health": 0,
       "Prm_Child": 0,
       "Prm_Insurance": "NA",
       "Prm_Travel": -7447,
       "Prm_Luxury": "NA",
       "Prm_E-commerce": -319,
       "Prm_Active_Lifestyle": "NA",
       "Prm_Grocery": "NA",
       "Prm_Home": "NA",
       "Prm_Currency": 0,
       "Prm_Automotive": 0,
       "Prm_Bar": "NA",
       "Prm_Food": -52.8840975,
       "Prm_Gaming": "NA",
       "Prm_Hair": "NA",
       "Prm_Helper": "NA",
       "Prm_Movies": "NA",
       "Prm_Petrol": "NA",
       "Prm_Rent": -7000,
       "Prm_Retail_shopping": -271,
       "Prm_Transport": -42,
       "Prm_Utility": "NA",
       "Prm_AMZNPRIMESG": 0,
       "Prm_Mortgage": "NA",
       "Prm_CreditScore": "NA",
       "Prm_LateSleeper": "NA",
       "Prm_Location": "NA"
     },
     {
       "Persona_ID": 3,
       "Name": "Charlie",
       "Prm_Age": 30,
       "Prm_Gender": "Male",
       "Prm_Income": 20500,
       "Prm_Postcode": 428975,
       "Prm_Occupation": "Business owner",
       "Prm_Industry": "Education",
       "Prm_Marital_Status": "Married",
       "Prm_Dependents": 1,
       "Prm_Education": "Bachelor Degree",
       "Prm_Residency": "Singaporean/ PR",
       "Prm_CreditBalance": 5100,
       "Prm_CreditArrear": 0,
       "Prm_Loan": "NA",
       "Prm_Health": -120,
       "Prm_Child": -712,
       "Prm_Insurance": "NA",
       "Prm_Travel": 0,
       "Prm_Luxury": 0,
       "Prm_E-commerce": -20,
       "Prm_Active_Lifestyle": -255,
       "Prm_Grocery": "NA",
       "Prm_Home": "NA",
       "Prm_Currency": -19845,
       "Prm_Automotive": 0,
       "Prm_Bar": "NA",
       "Prm_Food": "NA",
       "Prm_Gaming": 0,
       "Prm_Hair": "NA",
       "Prm_Helper": "NA",
       "Prm_Movies": "NA",
       "Prm_Petrol": "NA",
       "Prm_Rent": -100,
       "Prm_Retail_shopping": 0,
       "Prm_Transport": -10,
       "Prm_Utility": "NA",
       "Prm_AMZNPRIMESG": -1,
       "Prm_Mortgage": 0,
       "Prm_CreditScore": "Grade A",
       "Prm_LateSleeper": "Y",
       "Prm_Location": "Local"
     },
     {
       "Persona_ID": 4,
       "Name": "Avril",
       "Prm_Age": 30,
       "Prm_Gender": "Male",
       "Prm_Income": 20500,
       "Prm_Postcode": 428975,
       "Prm_Occupation": "Business owner",
       "Prm_Industry": "Education",
       "Prm_Marital_Status": "Married",
       "Prm_Dependents": 1,
       "Prm_Education": "Bachelor Degree",
       "Prm_Residency": "Singaporean/ PR",
       "Prm_CreditBalance": 5100,
       "Prm_CreditArrear": 0,
       "Prm_Loan": "NA",
       "Prm_Health": -120,
       "Prm_Child": -8712,
       "Prm_Insurance": "NA",
       "Prm_Travel": 0,
       "Prm_Luxury": -55,
       "Prm_E-commerce": -20,
       "Prm_Active_Lifestyle": -255,
       "Prm_Grocery": "NA",
       "Prm_Home": "NA",
       "Prm_Currency": -845,
       "Prm_Automotive": 0,
       "Prm_Bar": "NA",
       "Prm_Food": "NA",
       "Prm_Gaming": -630,
       "Prm_Hair": "NA",
       "Prm_Helper": "NA",
       "Prm_Movies": "NA",
       "Prm_Petrol": "NA",
       "Prm_Rent": -100,
       "Prm_Retail_shopping": -74,
       "Prm_Transport": -10,
       "Prm_Utility": "NA",
       "Prm_AMZNPRIMESG": -1,
       "Prm_Mortgage": 0,
       "Prm_CreditScore": "Grade A",
       "Prm_LateSleeper": "Y",
       "Prm_Location": "Local"
     },
     {
       "Persona_ID": 5,
       "Name": "Adam",
       "Prm_Age": 30,
       "Prm_Gender": "Male",
       "Prm_Income": 20500,
       "Prm_Postcode": 428975,
       "Prm_Occupation": "Business owner",
       "Prm_Industry": "Education",
       "Prm_Marital_Status": "Married",
       "Prm_Dependents": 1,
       "Prm_Education": "Bachelor Degree",
       "Prm_Residency": "Singaporean/ PR",
       "Prm_CreditBalance": 5100,
       "Prm_CreditArrear": 0,
       "Prm_Loan": "NA",
       "Prm_Health": -120,
       "Prm_Child": -8712,
       "Prm_Insurance": "NA",
       "Prm_Travel": 0,
       "Prm_Luxury": -55,
       "Prm_E-commerce": -20,
       "Prm_Active_Lifestyle": -255,
       "Prm_Grocery": "NA",
       "Prm_Home": "NA",
       "Prm_Currency": -845,
       "Prm_Automotive": 0,
       "Prm_Bar": "NA",
       "Prm_Food": "NA",
       "Prm_Gaming": -630,
       "Prm_Hair": "NA",
       "Prm_Helper": "NA",
       "Prm_Movies": "NA",
       "Prm_Petrol": "NA",
       "Prm_Rent": -100,
       "Prm_Retail_shopping": -74,
       "Prm_Transport": -10,
       "Prm_Utility": "NA",
       "Prm_AMZNPRIMESG": -1,
       "Prm_Mortgage": 0,
       "Prm_CreditScore": "Grade A",
       "Prm_LateSleeper": "Y",
       "Prm_Location": "Local"
     }
    ]

  }
})();
