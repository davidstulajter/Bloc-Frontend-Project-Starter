angular.module('blocitoff').controller('TasksController', function ($scope, $firebaseArray, $window) {

  
  var isTaskExpired = function (task) {
    var timeNow = new Date().getTime();
    return ((timeNow - task.timeCreated) >= 604800000);
  };

  var tasksRef = new Firebase("https://blocitoff-f9a4e.firebaseio.com/tasks");
  $scope.tasks = $firebaseArray(tasksRef);

  
  $scope.taskName = "";
  
  
  $scope.addTask = function () {
  
    $scope.tasks.$add({
      name: $scope.taskName,
      //priority: $scope.priority,
      completed: false,
      timeCreated: Firebase.ServerValue.TIMESTAMP
    }).then(function(ref) {
      $scope.taskName = "";
    });
  };

  $scope.updateTask = function(task) {
    console.log(task);
    $scope.tasks.$save(task);
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
