export function FooterDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
      xborder: '@'
    },
    templateUrl: 'app/components/footer/footer.html',
    controller: FooterController,
    controllerAs: 'xfooter',
    bindToController: true
  };

  return directive;
}

class FooterController {
  constructor ($log, $state) {
    'ngInject';

    this.$log = $log;
    this.$state = $state;
  }
}
