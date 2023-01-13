// se reciclo parte de codigo del tema to do list

angular.module("toDoList", ["LocalStorageModule"])
 .factory('ToDoService', function(localStorageService){
    var toDoService = {};
    toDoService.key = "angular-todolist";
    if(localStorageService.get(toDoService.ke)){
        toDoService.activities= localStorageService.get(toDoService.key);
    }else{
        toDoService.activities = [];
    }

    // agregar
    toDoService.add = function(newActv){
        toDoService.activities.push(newActv);
    }

    //actiualizar
    toDoService.updaLocalStorage = function(){
        localStorageService.set(toDoService.key, toDoService.activities);
    }

    //limpiar
    toDoService.clean = function(){
        toDoService.activities = [];
        toDoService.updaLocalStorage();
        return toDoService.getAll();
    } 

    toDoService.getAll = function(){
        return toDoService.activities;
    }

    // filtro
    toDoService.removeItem = function(item){
        toDoService.activities = toDoService.activities.filter(function(activty){
            return activty !== item;
        });
        toDoService.updaLocalStorage();
        return toDoService.getAll();
    }

   return toDoService;
})

.controller("ToDoController", function($scope, ToDoService){

// los watch son una mala practica  porque son mas dificil de testear
    /*
         $scope.$watchCollection('todo',function(newValue,oldValue){
        localStorageService.set("angular-todolist",$scope.todo);
    
    });*/  
    
    $scope.todo = ToDoService.getAll();
    $scope.newActv = {};

    // agregar un elemento
    $scope.addActv = function(){
       ToDoService.add($scope.newActv);
       $scope.newActv = {};
    }

    //remover un elemento
    $scope.removeActv = function(item){
       $scope.todo = ToDoService.removeItem(item);
    }

    // limpiar
    $scope.cleanActvs = function(){
        $scope.todo = ToDoService.clean();
    }

});
