export function ArtifactsDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
      title: '@',
      xperiod: '@'
    },
    templateUrl: 'app/components/artifacts/artifacts.html',
    controller: ArtifactsController,
    controllerAs: 'xartifacts',
    bindToController: true
  };

  return directive;
}

class ArtifactsController {
  constructor ($log, $state, $scope, $window) {
    'ngInject';

    var colors = {
      propuestas: '#2ea3ff',
      quejas: '#ff642f',
      foros: '#fcc000'
    };

    this.$log = $log;
    this.$state = $state;
    this.sublink = 1;
    this.level = 'Nacional';

    this.expanded = true;
    this.xcolor = colors[this.title.toLowerCase()]

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
