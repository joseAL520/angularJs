angular.module("CustomDirective",[])

.controller("AppCtrl", function($scope,$http){
    $scope.repos=[];
    $http.get("https://api.github.com/users/joseAL520/repos") 
    .then(function(respitorio){
        console.log(respitorio);  
        $scope.repos =respitorio.data;      
    });

});