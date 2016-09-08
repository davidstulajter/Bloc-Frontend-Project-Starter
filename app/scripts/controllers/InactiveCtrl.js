(function() {
  function InactiveCtrl() {
    this.title = "Inactive Tasks";
  }

  angular
    .module('blocitoff')
    .controller('InactiveCtrl', [InactiveCtrl]);
})();