
angular.module("toDoList", ["LocalStorageModule"])
  .controller("TodoController", function($scope, localStorageService){

    $scope.actividad= [];
    /*
        {
            actividad: 'Terminar el curso Angular',
            fecha:'3-03-15 2:00 pm'
        }
    */
    
    $scope.addActv = function(){
        $scope.actividad.push($scope.newActv);
        $scope.newActv = {};
    }
    
});
