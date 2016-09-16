(function() {
  function InactiveCtrl($scope, $firebaseArray) {
    this.title = "Inactive Tasks";

    var tasksRef = new Firebase("https://blocitoff-f9a4e.firebaseio.com/tasks");
    $scope.tasks = $firebaseArray(tasksRef);

    this.deleteTask = function(task) {
      console.log(task);
      $scope.tasks.$remove(task);
    };
  }

  angular
    .module('blocitoff')
    .controller('InactiveCtrl', ['$scope', '$firebaseArray', InactiveCtrl]);
})();