export function config ($logProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  // Set options third-party lib
  // toastrConfig.allowHtml = true;
  // toastrConfig.timeOut = 3000;
  // toastrConfig.positionClass = 'toast-top-right';
  // toastrConfig.preventDuplicates = true;
  // toastrConfig.progressBar = true;
}
