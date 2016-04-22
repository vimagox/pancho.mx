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
    // link: linkFunc,
    controller: GovernmentsController,
    controllerAs: 'xgovernments',
    bindToController: true
  };

  return directive;

  function linkFunc(scope, el, $window) {
    let watcher;
    let w = angular.element($window);

    scope.getWindowDimensions = function () {
      return { 'h': w.height(), 'w': w.width() };
    };

    watcher = scope.$watch(scope.getWindowDimensions, newValue => {
      this.windowHeight = newValue.h;
      this.windowWidth = newValue.w;
    }, true);

    w.bind('resize', function () {
      scope.$apply();
    });

    // // let watcher;
    // let typist = malarkey(el[0], {
    //   typeSpeed: 40,
    //   deleteSpeed: 40,
    //   pauseDelay: 800,
    //   loop: true,
    //   postfix: ' '
    // });
    //
    // el.addClass('acme-malarkey');
    //
    // angular.forEach(scope.extraValues, (value) => {
    //   typist.type(value).pause().delete();
    // });
    //
    // // watcher = scope.$watch('vm.contributors', () => {
    // //   angular.forEach(vm.contributors, (contributor) => {
    // //     typist.type(contributor.login).pause().delete();
    // //   });
    // // });
    //
    scope.$on('$destroy', () => {
      watcher();
    });
  }
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

  // activate(githubContributor) {
  //   return this.getContributors(githubContributor).then(() => {
  //     this.$log.info('Activated Contributors View');
  //   });
  // }

  // getContributors(githubContributor) {
  //   return githubContributor.getContributors(10).then((data) => {
  //     this.contributors = data;
  //
  //     return this.contributors;
  //   });
  // }
}
