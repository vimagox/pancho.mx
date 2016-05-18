export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/app/main/main.html',
      controller: 'MainController',
      controllerAs: 'xmain'
    })
    .state('pais', {
      url: '/mex',
      params: { id: 'mexico', selection: 'score' },
      templateUrl: '/app/country/country.html',
      controller: 'CountryController',
      controllerAs: 'xcountry'
    })
    .state('pais.region', {
      url: '/:region',
      params: { id: '', selection: 'score', alias: '' }
    })
    .state('pais.region.municipio', {
      url: '/:municipio',
      params: { id: '' }
    });

  $urlRouterProvider.otherwise('/');
}
