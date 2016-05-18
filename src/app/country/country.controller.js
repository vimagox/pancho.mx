export class CountryController {
  constructor ($timeout, $scope, $state, $stateParams, $window, municipios, xstorage) {
    'ngInject';

    console.log("=========================================");
    console.log($stateParams);
    console.log("=========================================");

    function isNumber(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }

    this.xselection = $stateParams.selection || 'score';

    if (isNumber($stateParams.id) && $stateParams.id>10000) { //municipio
      $stateParams.municipio = $stateParams.alias;
      municipios.municipio($stateParams.id, response => this.country = response);
      this.municipio = {id: $stateParams.id}
    } else if (isNumber($stateParams.id)) { //region
      console.log($stateParams);
      this.region = {id: $stateParams.id, alias: $stateParams.alias};
      this.municipio = null;
      xstorage.put('regionId', $stateParams.id);
      xstorage.put('regionAlias', $stateParams.alias);
      $stateParams.region = $stateParams.alias;
      municipios.region($stateParams.id, response => this.country = response)
    } else { //country
      this.region = null;
      this.municipio = null;
      municipios.country($stateParams.id, response => this.country = response)
    }

    this.govs = function() {
      if (this.country) {
        return this.country.regions || this.country.municipios;
      }
    }

    this.govlink = function() {
      if (this.country) {
        return this.country.regions ? '.region' : '.municipio';
      }
    }

    this.backlink = function() {
      if (this.municipio || this.region) {
        return true;
      }
      return false;
    }

    this.back = function() {
      if(this.municipio) {
        $state.go('pais.region', {id: xstorage.get('regionId'), alias: xstorage.get('regionAlias'), selection: 'govs'});
      } else if(this.region) {
        $state.go('pais', {id: '', selection: 'govs'});
      }
    };

    this.subs = function() {
      if (this.country) {
        if (this.country.regions) {
          return 'Estados';
        } else if (this.country.municipios) {
          return 'Municipios';
        } else {
          return 'Anuncios'
        }
      }
    }

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

  }
}
