export function config ($logProvider, $locationProvider, $urlRouterProvider, toastrConfig, $mdThemingProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  // Set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;

  // Configure a dark theme with primary foreground yellow
  $mdThemingProvider.theme('docs-dark', 'default')
    .primaryPalette('yellow')
    .dark();
}

// angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
// .config(function($mdIconProvider) {
//     $mdIconProvider
//       .icon('share-arrow', 'img/icons/share-arrow.svg', 24)
//       .icon('upload', 'img/icons/upload.svg', 24)
//       .icon('copy', 'img/icons/copy.svg', 24)
//       .icon('print', 'img/icons/print.svg', 24)
//       .icon('hangout', 'img/icons/hangout.svg', 24)
//       .icon('mail', 'img/icons/mail.svg', 24)
//       .icon('message', 'img/icons/message.svg', 24)
//       .icon('copy2', 'img/icons/copy2.svg', 24)
//       .icon('facebook', 'img/icons/facebook.svg', 24)
//       .icon('twitter', 'img/icons/twitter.svg', 24);
//   })
