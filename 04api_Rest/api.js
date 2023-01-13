// usamos protocolos http  usamos una pagina https://jsonplaceholder.typicode.com para el api rest
angular.module("MyFirstApp", [])
  .controller("FirstController", function($scope, $http){  
    $scope.posts=[];
    $scope.newUser = [];
// get llamado de la lista  
    $http.get("https://jsonplaceholder.typicode.com/posts/") 
    .then(function(user){
        console.log(user);  
        $scope.posts = user.data;      
    });

// post agregar a la lista
 $scope.addApiRest = function(){
    $http.post("https://jsonplaceholder.typicode.com/posts/",{
        title: $scope.newUser.title,
        body: $scope.newUser.body,
        userId:1})
    .then(function(data,status,headers,config){
        $scope.posts.push($scope.newUser);
        $scope.newUser= {};

    });
 }




});