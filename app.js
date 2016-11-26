(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  var lunchController = this;
  $scope.message = "";
  $scope.lunchMenu = "";

  $scope.displayMessage = function() {
    if ($scope.lunchMenu === '') {
      $scope.message = "Please enter data first";
    } else {
      $scope.message = $scope.lunchMenu.split(",").length > 3 ?
                "Too much!" : "Enjoy!";
    }
  }
}

})();
