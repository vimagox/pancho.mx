export function SidenavDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
    },
    templateUrl: 'app/components/sidenav/sidenav.html',
    controller: SidenavController,
    controllerAs: 'xsidenav',
    bindToController: true
  };

  return directive;
}

class SidenavController {
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
