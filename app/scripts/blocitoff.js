angular.module('blocitoff').controller('TasksController', function ($scope, $firebaseArray, $window) {

  
  var isTaskExpired = function (task) {
    var timeNow = new Date().getTime();
    return ((timeNow - task.timeCreated) >= 604800000);
  };

  var tasksRef = new Firebase("https://blocitoff-f9a4e.firebaseio.com/tasks");
  $scope.tasks = $firebaseArray(tasksRef);

  
  $scope.taskName = "";
  $scope.taskPriority = "1";
  
  $scope.getPriorityString = function(num) {
    var priority = "";
    if (num === 1) {
      priority = "Low";
    } else if (num === 2) {
      priority = "Medium";
    } else {
      priority = "High";
    }
    return priority;
  };

  $scope.addTask = function () {
  
    var newTask = {
      name: $scope.taskName,
      priority: Number($scope.taskPriority),
      completed: false,
      timeCreated: Firebase.ServerValue.TIMESTAMP
    };

    $scope.tasks.$add(newTask).then(function(ref) {
      $scope.taskName = "";
    });
  };

  $scope.updateTask = function(task) {
    console.log(task);
    $scope.tasks.$save(task);
  };

  $scope.deleteTask = function(task) {
    $scope.tasks.$remove(task);
  };

  $scope.getDuration = function(task) {
    var now = moment();
    var dateCreated = moment(task.timeCreated);
    var duration = moment.duration(now.diff(dateCreated));
    return duration.humanize();
  };

  $scope.isOlderThanSevenDays = function(task) {
    var now = moment();
    var dateCreated = moment(task.timeCreated);
    var duration = moment.duration(now.diff(dateCreated));
    console.log(duration.humanize());
    var daysOld = duration.days();
    return daysOld > 7;
  };
  
  $scope.isLessThanSevenDays = function(task) {
    var now = moment();
    var dateCreated = moment(task.timeCreated);
    var duration = moment.duration(now.diff(dateCreated));
    console.log(duration.humanize());
    var daysOld = duration.days();
    return daysOld < 7;
  };
});
