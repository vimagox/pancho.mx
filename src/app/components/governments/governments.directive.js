export function GovernmentsDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
      name: '@',
      back: '@',
      gov: '=',
      link: '@',
      list: '='
    },
    templateUrl: 'app/components/governments/governments.html',
    controller: GovernmentsController,
    controllerAs: 'xgovernments',
    bindToController: true
  };

  return directive;
}

class GovernmentsController {
  constructor ($log, $state, $scope, $window, xstorage) {
    'ngInject';

    this.$log = $log;
    this.$state = $state;
    this.xselection = 'score';

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

  select(g) {
    this.$state.go(this.link, {alias: g.uid, id: g.id})
  }
}
