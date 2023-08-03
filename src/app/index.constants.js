/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('coherentPaDemo')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('environment', 'eks')
    .constant('configUrls', {
      eks: {
        keyCloakTokenUrl: 'https://keycloak1.eks.sonic.sit.coherent.com.hk/auth/realms/quick-silver/apikey/token',
        keyCloakApiKey: '2ef30faf-6071-492a-8aaa-96ef207a863a',
        keyCloakPFClient: 'product-factory',
        PFUrl: 'https://excelengine.eks.sonic.sit.coherent.com.hk/api/v1/product/coherent/engines/Execute/',
        createPolicy: 'https://newbusiness.eks.sonic.sit.coherent.com.hk/v1/newpolicy',
        enquirePolicy: 'https://enquiry.eks.sonic.sit.coherent.com.hk/v1/policy/id/',
        fileUpload: 'https://newbusiness.eks.sonic.sit.coherent.com.hk/v1/s3/fileupload',
        claimInitiate: 'https://claims.eks.sonic.sit.coherent.com.hk/v1/claim/initiate',
        applyPremium: 'https://policyservicing.eks.sonic.sit.coherent.com.hk/v1/applypremium',
        topupPremium: 'https://policyservicing.eks.sonic.sit.coherent.com.hk/v1/topuppremium',
        cancelPolicy: 'https://policyservicing.eks.sonic.sit.coherent.com.hk/v1/cancelpolicy',
        updatePolicy: 'https://policyservicing.eks.sonic.sit.coherent.com.hk/v1/update/email',
        isAuthorizationNeeded: true,
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiZ3JvdXBzIjpbImFkbWluIiwiaGVhbHRoIl0sImlhdCI6MTUxNjIzOTAyMn0.CMEQlrAI3_MbWZJ1RF0qtvoZi6ZOHKduY3zyIXn8N-o'
      },
      demo: {
        keyCloakTokenUrl: 'https://keycloak.demo.sonic.dev.coherent.global/auth/realms/demo-sonic-global/apikey/token',
        keyCloakApiKey: '85e01b68-1c0b-417c-ae58-2078572f111f',
        keyCloakPFClient: 'product-factory',
        PFUrl: 'https://excelengine.demo.sonic.dev.coherent.global/api/v1/product/coherent/engines/Execute/',
        createPolicy: 'https://newbusiness.demo.sonic.dev.coherent.global/v1/newpolicy',
        enquirePolicy: 'https://enquiry.demo.sonic.dev.coherent.global/v1/policy/id/',
        fileUpload: 'https://newbusiness.demo.sonic.dev.coherent.global/v1/s3/fileupload',
        claimInitiate: 'https://claims.demo.sonic.dev.coherent.global/v1/claim/initiate',
        applyPremium: 'https://policyservicing.demo.sonic.dev.coherent.global/v1/applypremium',
        topupPremium: 'https://policyservicing.demo.sonic.dev.coherent.global/v1/topuppremium',
        cancelPolicy: 'https://policyservicing.demo.sonic.dev.coherent.global/v1/cancelpolicy',
        updatePolicy: 'https://policyservicing.demo.sonic.dev.coherent.global/v1/update/email',
        isAuthorizationNeeded: true,
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiZ3JvdXBzIjpbImFkbWluIiwiaGVhbHRoIl0sImlhdCI6MTUxNjIzOTAyMn0.CMEQlrAI3_MbWZJ1RF0qtvoZi6ZOHKduY3zyIXn8N-o'
      }
    });
})();
