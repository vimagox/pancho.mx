export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('mexico', {
      url: '/mex',
      templateUrl: 'app/country/country.html',
      controller: 'CountryController',
      controllerAs: 'country'
    })
    .state('region', {
      url: '/mex/:alias',
      params: { id: null },
      templateUrl: 'app/region/region.html',
      controller: 'RegionController',
      controllerAs: 'region'
    });

  $urlRouterProvider.otherwise('/');
}
