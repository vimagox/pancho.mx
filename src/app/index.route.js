export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/app/main/main.html',
      controller: 'MainController',
      controllerAs: 'xmain'
    })
    .state('mexico', {
      url: '/mex',
      params: { id: 'mexico' },
      templateUrl: '/app/country/country.html',
      controller: 'CountryController',
      controllerAs: 'xcountry'
    })
    .state('region', {
      url: '/mex/:alias',
      params: { id: 'mexico' },
      templateUrl: '/app/region/region.html',
      controller: 'RegionController',
      controllerAs: 'xregion'
    });

  $urlRouterProvider.otherwise('/');
}
