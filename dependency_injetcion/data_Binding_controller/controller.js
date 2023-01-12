
angular.module("MyFistApp", [])
.controller("FirstController", function($scope){ 
    
    $scope.nombre = "jose";
    $scope.nuevoUsuario = {};
    $scope.usuarios=[
        {comentario: "buen comentario", username:"joseAngel"},
        {comentario: "mal comentario",  username:"otro usuario"}
    ];


    // funciones
    $scope.agregarComentario = function(){
      $scope.comentarios.push($scope.nuevoUsuario);   
      $scope.nuevoComenatio={};
    }
});

