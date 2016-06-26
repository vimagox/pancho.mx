export function ArtifactsDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
      level: '@',
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
  constructor ($log, $state, $scope, $window, $timeout, $mdBottomSheet) {
    'ngInject';

    var colors = {
      propuestas: '#2ea3ff',
      quejas: '#ff642f',
      foros: '#7e57c2'// #e91e63'
    };

    this.currentNavItem = 'page1';

    this.$log = $log;
    this.$state = $state;
    this.sublink = 3;

    this.expanded = true;
    this.xcolor = colors[this.title.toLowerCase()]

    let w = angular.element($window);

    $scope.getWindowDimensions = function () {
      return { 'h': w.height(), 'w': w.width() };
    };

    $scope.$watch($scope.getWindowDimensions, newValue => {
      this.windowHeight = newValue.h;
      this.windowWidth = newValue.w;
    }, true);

    w.bind('resize', function () {
      $scope.$apply();
    });

    this.alert = '';

    this.items = [
      { name: 'Apoyar', icon: 'pri' },
      { name: 'Remover', icon: 'pan' },
      { name: 'Reportar', icon: 'prd' }
    ];

    this.listItemClick = function($index) {
      var clickedItem = this.items[$index];
      $mdBottomSheet.hide(clickedItem);
    };

    this.newArtifactLabel = function() {
      if (this.title === 'Foros') {
        return 'Crear ' + this.title.slice(0, -1) + ' ' + this.level.slice(17, this.level.length);
      } else {
        return 'Publicar ' + this.title.slice(0, -1) + ' ' + this.level.slice(9, this.level.length);
      }
    }

  }
}
