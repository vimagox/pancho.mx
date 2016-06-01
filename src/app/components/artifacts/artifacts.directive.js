export function ArtifactsDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
      title: '@',
      xperiod: '@'
    },
    templateUrl: 'app/components/artifacts/artifacts.html',
    controller: ArtifactsController,
    controllerAs: 'xartifacts',
    bindToController: true
  };

  return directive;
}

class ArtifactsController {
  constructor ($log, $state) {
    'ngInject';

    this.$log = $log;
    this.$state = $state;
  }
}
