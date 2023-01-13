
angular.module("mainModule", [])
  .filter("removeeHtml", function(){

        return function(texto){
            return texto.toUpperCase().replace("");
        }
  
})

.controller("filtersController", function($scope){
    $scope.mi_html = {};
    $scope.mi_html.title = ' hola mundo ';
    $scope.mi_html.body = 'hello wordl';
    $scope.costo = 2 ; 
});