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
  constructor ($log, $state) {
    'ngInject';

    this.$log = $log;
    this.$state = $state;
    this.xselection = 'score';
  }

  select(g) {
    this.$state.go(this.link, {alias: g.uid, id: g.id})
  }
}
