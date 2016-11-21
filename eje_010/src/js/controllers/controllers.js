(function(){
    'use strict';

    /* @ngInject */
    function exampleCtrl($log){

        var vm = this;

        vm.name = "Hola Mundo";

    }

    exampleCtrl.$inject= ['$log'];

    angular.module('myApp')
        .controller('exampleCtrl',exampleCtrl);
})();