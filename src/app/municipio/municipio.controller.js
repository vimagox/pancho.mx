export class MunicipioController {
  constructor ($log, $stateParams, $window, $scope, municipios, storage) {
    'ngInject';

    this.xselection = $stateParams.x || 'score';
    municipios.municipio($stateParams.id, response => this.municipio = response);

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
