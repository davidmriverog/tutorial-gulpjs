(function(){
    'use strict';

    /* @ngInject */
    function example2Ctrl($log){

        var vm = this;

        vm.name = "Hola Mundo 2";

    }

    example2Ctrl.$inject= ['$log'];

    angular.module('myApp')
        .controller('example2Ctrl',example2Ctrl);
})();