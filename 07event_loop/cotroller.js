
angular.module("FirtModule", [])
 .controller("filtersController", function($scope){
    
    $scope.nombre = 'ureli';
 
 /*
 setTimeout(function(){
        $scope.$apply(funtion(){$scope.nombre = 'codigo facilito';}); 
        //console.log($scope.nombre);
    },2000);
 */
    
    document.querySelector('#mi_boton').addEventListener('click', function(){
        $scope.nombre = 'codigo facilito';
        $scope.$apply(); // apply es la mejor forma de programacion colocarlo al finnal como parametro

    });
});