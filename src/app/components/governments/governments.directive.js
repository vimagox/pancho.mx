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
  constructor ($log, $state, $scope, $window) {
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
    if (g.id > 10000) {
      this.$state.go(this.link, {municipio: g.uid, id: g.id, selection: 'score'})
    }else {
      this.$state.go(this.link, {region: g.uid, id: g.id, selection: 'score'})
    }
  }
}
