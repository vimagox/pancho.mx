export function ScoreDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
    },
    templateUrl: 'app/components/score/score.html',
    controller: ScoreController,
    controllerAs: 'score',
    bindToController: true
  };

  return directive;
}

class ScoreController {
  constructor ($log, $state) {
    'ngInject';

    this.$log = $log;
    this.$state = $state;
  }
}
