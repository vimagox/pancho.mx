export class RegionController {
  constructor ($log, $stateParams, $scope, $window, municipios) {
    'ngInject';
    this.xselection = 'score';
    $log.log($stateParams);
    $log.log('============================');
    // municipios.region($stateParams.id, response => this.region = response);

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

  }
}
