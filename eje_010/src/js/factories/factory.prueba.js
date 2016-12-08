(function(){

    'use strict';

    function prueba(){
        return {
            getPrueba: "Probando desde el factory"
        }
    }

    angular.module('myApp')
        .factory('myPrueba',prueba);
})();
