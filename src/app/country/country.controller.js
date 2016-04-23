export class CountryController {
  constructor ($timeout, $scope, $window, municipios) {
    'ngInject';

    this.xselection = 'score';
    municipios.country('mexico', response => this.country = response)

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
