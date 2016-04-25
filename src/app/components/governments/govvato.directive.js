export function GovvatoDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
      x: '='
    },
    templateUrl: 'app/components/governments/govvato.html',
    controller: GovvatoController,
    controllerAs: 'xgovvato',
    bindToController: true
  };

  return directive;
}

class GovvatoController {
  constructor ($log, $state) {
    'ngInject';

    this.$log = $log;
    this.$state = $state;
  }
}
