angular.module('todoApp').controller('TasksController', ['$scope', 
function ($scope) {
  
  $scope.vm = {};

  $scope.vm.taskName = null;

  $scope.vm.tasks = [];
 

  $scope.vm.addTask = function addTask() {
    if($scope.vm.taskName) {
      // var task={};
      // task.name = $scope.vm.taskName;
      // task.complete = false;
       var task = {'name':$scope.vm.taskName,'complete':false}; 
      $scope.vm.tasks.push(task);
      $scope.vm.taskName = null;
    }
  };
  $scope.vm.removeTask = function removeTask(taskName){
    if(taskName != null){
      $scope.vm.tasks.splice($scope.vm.tasks.indexOf(taskName), 1);
    }
  };
}]);