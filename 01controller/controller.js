//angular es un franword de Modelo Vista Vista Modelo

//   Vista Modelo
// modulo de angular "nombre del modulo"   [modulos de angular que vamos a importar]
// [ngResource]  nos sirve para consumir api Rest

angular.module("MyFistApp", ["ngResource"])
//controladores
.controller("FirstController", function($scope){ 
 //scope nos enlaca a nuestro controlador e informacion de la aplicacion de la vista
    $scope.nombre = "jose";
}).controller("secController",function($scope){

});

