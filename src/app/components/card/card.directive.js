export function CardDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
      name: '@',
      xcolor: '@'
    },
    templateUrl: 'app/components/card/card.html',
    controller: CardController,
    controllerAs: 'xcard',
    bindToController: true
  };

  return directive;
}

class CardController {
  constructor ($log, $state, $scope, $window, $timeout, $mdBottomSheet) {
    'ngInject';
  }
}
// HTMLJSCSSREGULARCARD.TMPL.HTMLUSERCARD.TMPL.HTML
// angular.module('colorsDemo', ['ngMaterial'])
//   .config(function ($mdThemingProvider, $mdIconProvider) {
//     $mdThemingProvider.theme('forest')
//       .primaryPalette('brown')
//       .accentPalette('green');
//     $mdIconProvider
//       .defaultIconSet('img/icons/sets/social-icons.svg', 24);
//   })
//   .directive('regularCard', function () {
//     return {
//       restrict: 'E',
//       templateUrl: 'regularCard.tmpl.html',
//       scope: {
//         name: '@',
//       }
//     }
//   })
//   .directive('userCard', function () {
//     return {
//       restrict: 'E',
//       templateUrl: 'userCard.tmpl.html',
//       scope: {
//         name: '@',
//         theme: '@'
//       },
//       controller: function ($scope) {
//         $scope.theme = $scope.theme || 'default';
//       }
//     }
//   });
