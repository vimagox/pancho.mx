export function CardsDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
      xselection: '=',
      subs: '@'
    },
    templateUrl: 'app/components/cards/cards.html',
    controller: CardsController,
    controllerAs: 'xcards',
    bindToController: true
  };

  return directive;
}

class CardsController {
  constructor ($log, $state) {
    'ngInject';
    this.$log = $log;
    this.$state = $state;
  }

}
