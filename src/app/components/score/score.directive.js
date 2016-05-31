export function ScoreDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
    },
    templateUrl: 'app/components/score/score.html',
    controller: ScoreController,
    controllerAs: 'xscore',
    bindToController: true
  };

  return directive;
}

class ScoreController {
  constructor ($log, $state, $window, $scope) {
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

    this.$log = $log;
    this.$state = $state;
  }
}
