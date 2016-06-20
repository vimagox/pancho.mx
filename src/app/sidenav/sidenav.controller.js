export class SidenavController {
  constructor ($timeout, $scope, $window, $mdSidenav) {
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

    this.toggleRight = buildToggler('right');
    this.isOpenRight = function(){
      return $mdSidenav('right').isOpen();
    };


    this.close = function () {
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };

    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      let timer;
      return function debounced() {
        let context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }


    function buildToggler(navID) {
      return function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }
    }
  }
}
