export class LeftController {
  constructor ($timeout, $scope, $window, $mdSidenav) {
    'ngInject';

    this.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };
  })
}
