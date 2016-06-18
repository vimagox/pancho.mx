export class ArtifactController {
  constructor ($timeout, $scope, $window) {
    'ngInject';

    let w = angular.element($window);

    $scope.getWindowDimensions = function () {
      return { 'h': w.height(), 'w': w.width() };
    };

    $scope.$watch($scope.getWindowDimensions, newValue => {
      this.windowHeight = newValue.h;
      this.windowWidth = newValue.w;
    }, true);

    w.bind('resize', function () {
      $scope.$apply();
    });

    this.ok = function() {
      $window.history.back();
    }

    this.cancel = function() {
      $window.history.back();
    }
  }
}
