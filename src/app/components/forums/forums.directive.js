export function ForumsDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
    },
    templateUrl: 'app/components/forums/forums.html',
    controller: ForumsController,
    controllerAs: 'xforums',
    bindToController: true
  };

  return directive;
}

class ForumsController {
  constructor ($log, $state) {
    'ngInject';

    this.$log = $log;
    this.$state = $state;
  }
}
