angular.module("CustomDirective",[])
.directive('backImg',function(){

    return function(scope,elemnt,attrs){
        attrs.$observe('backImg',function(value){
            elemnt.css({
                "background":"url("+value+")",
                "background-size": "cover",
                "background-position": "center" 
            })
        });
    }

})

//style="background:url({{repo.owner.avatar_url}}); background-position: center; background-size: cover;">
.controller("AppCtrl", function($scope,$http){
    $scope.repos=[];
    $http.get("https://api.github.com/users/joseAL520/repos") 
    .then(function(respitorio){
        console.log(respitorio);  
        $scope.repos =respitorio.data;      
    });

});