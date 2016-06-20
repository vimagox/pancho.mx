export class RightController {
  constructor ($scope, $timeout, $mdSidenav, $log) {
    'ngInject';
    
    this.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
  }
}
