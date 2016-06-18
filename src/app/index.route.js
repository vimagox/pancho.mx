export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'xmain'
    })
    .state('pais', {
      url: '/mex',
      params: { id: 'mexico', selection: 'score', name: 'México' },
      templateUrl: 'app/country/country.html',
      controller: 'CountryController',
      controllerAs: 'xcountry'
    })
    .state('pais.region', {
      url: '/:region',
      params: { id: '', selection: 'score', alias: '', name: '' }
    })
    .state('pais.region.municipio', {
      url: '/:municipio',
      params: { id: '', name: '' }
    })
    .state('myscore', {
      url: '/calificaciones',
      params: { id: '', name: '' },
      templateUrl: 'app/myscore/myscore.html',
      controller: 'MyScoreController',
      controllerAs: 'xmyscore'
    })
    .state('artifact', {
      url: '/artifact',
      params: { id: '', name: '' },
      templateUrl: 'app/artifact/artifact.html',
      controller: 'ArtifactController',
      controllerAs: 'xa'
    })
    .state('login', {
      url: '/login',
      params: { id: '', name: '' },
      templateUrl: 'app/login/login.html',
      controller: 'LoginController',
      controllerAs: 'lc'
    })
    .state('register', {
      url: '/register',
      params: { id: '', name: '' },
      templateUrl: 'app/register/register.html',
      controller: 'RegisterController',
      controllerAs: 'rc'
    })
    .state('forgot', {
      url: '/forgot',
      params: { id: '', name: '' },
      templateUrl: 'app/forgot/forgot.html',
      controller: 'ForgotController',
      controllerAs: 'fc'
    });

  $urlRouterProvider.otherwise('/');
}
