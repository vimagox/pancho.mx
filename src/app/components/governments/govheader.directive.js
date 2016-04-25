export function GovheaderDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
      name: '@',
      back: '@'
    },
    templateUrl: 'app/components/governments/govheader.html',
    controller: GovheaderController,
    controllerAs: 'xgovheader',
    bindToController: true
  };

  return directive;
}

class GovheaderController {
  constructor ($log, $state) {
    'ngInject';

    this.$log = $log;
    this.$state = $state;
  }

  xback(st) {
    this.$state.go(st, {x: 'govs'})
  }
}
