export class CountryController {
  constructor ($log, $timeout, $scope, $state, $stateParams, $window, municipios, xstorage) {
    'ngInject';

    this.loading = true;
    $log.log($stateParams.id);

    function isNumber(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }

    this.xselection = $stateParams.selection || 'score';

    if (isNumber($stateParams.id) && $stateParams.id>10000) { //municipio
      $stateParams.municipio = $stateParams.alias;
      municipios.municipio($stateParams.id, response => this.loadMunicipio(response));
      this.municipio = {id: $stateParams.id}
    } else if (isNumber($stateParams.id)) { //region
      this.region = {id: $stateParams.id, alias: $stateParams.alias};
      this.municipio = null;
      xstorage.put('regionId', $stateParams.id);
      xstorage.put('regionAlias', $stateParams.alias);
      $stateParams.region = $stateParams.alias;
      municipios.region($stateParams.id, response => this.loadRegion(response))
    } else { //country
      this.region = null;
      this.municipio = null;
      municipios.country($stateParams.id, response => this.loadCountry(response))
    }

    this.xselect = function(x) {
      this.xselection = x;
    }

    this.loadCountry = function(c) {
      this.country = c;
      this.loading = false;
      xstorage.putObject('country', c);
      xstorage.remove('region');
      xstorage.remove('municipio');
    }

    this.loadRegion = function(r) {
      this.country = r;
      this.loading = false;
      xstorage.putObject('region', r);
      xstorage.remove('municipio');
    }

    this.loadMunicipio = function(m) {
      this.country = m;
      this.loading = false;
      xstorage.putObject('municipio', m);
    }


    this.name = function() {
      if (this.municipio) {
        var r = xstorage.getObject('region');
        return this.country.name + ', ' + r.name;
      }
      if (this.region) {
        var c = xstorage.getObject('country');
        return this.country.name+', ' + c.name;
      }
      if (this.country) {
        return this.country.name;
      }
    };

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
          return 'Comunicados'
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
