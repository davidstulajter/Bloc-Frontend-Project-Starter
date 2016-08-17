(function() {
  function ActiveCtrl() {
    this.title = "Active Tasks";
  }

  angular
    .module('blocitoff')
    .controller('ActiveCtrl', [ActiveCtrl]);
})();