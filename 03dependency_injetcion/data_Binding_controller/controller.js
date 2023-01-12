// dependecy injection - las dependecias que generas o que existen puedo incrustarlo con mis controladores o dentro del modulo

angular.module("MyFistApp", [])
//  se hace atraves de las variables  en este casos $   se debe respetar el orden
  .controller("FirstController",["$scope","$http" ,function(mv , url){ 
    
    mv.nombre = "jose";
    mv.nuevoUsuario = {};
    mv.usuarios=[
        {comentario: "buen comentario", username:"joseAngel"},
        {comentario: "mal comentario",  username:"otro usuario"}
    ];


    // funciones
    mv.agregarComentario = function(){
      mv.comentarios.push($scope.nuevoUsuario);   
      mv.nuevoComenatio={};
    }
}]);

