export function MenuDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
      xselection: '=',
      subs: '@'
    },
    templateUrl: 'app/components/menu/menu.html',
    controller: MenuController,
    controllerAs: 'xmenu',
    bindToController: true
  };

  return directive;
}

class MenuController {
  constructor ($log, $state) {
    'ngInject';
    this.$log = $log;
    this.$state = $state;
  }

  xselect(x) {
    this.xselection = x;
  }
}
