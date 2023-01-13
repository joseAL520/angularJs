// usamos protocolos http  usamos una pagina https://jsonplaceholder.typicode.com para el api rest
angular.module("MyFirstApp", [])
  .controller("FirstController", function($scope, $http){  
    $scope.posts=[];
    $scope.loding= true;
// get llamado de la lista  
    $http.get("https://jsonplaceholder.typicode.com/posts/") 
    .then(function(user){
        console.log(user);  
        
        $scope.posts = user.data; 
        $scope.loding = false;  
       
    });


});