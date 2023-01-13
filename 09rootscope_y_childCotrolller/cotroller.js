
angular.module("FirtModule", [])
 .run(function($rootScope){
    $rootScope.nombre = 'codigo Facilito';
 })
 // padre controller
 .controller("filtersController", function($scope){
    $scope.nombre = 'CF';

    setTimeout(function(){
        $scope.$apply(function(){
            $scope.nombre=':3';
        });

    },1000);
})
// hijo controller
 .controller("chillController", function($scope){
   
 });