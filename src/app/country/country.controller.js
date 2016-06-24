export class CountryController {
  constructor ($log, $timeout, $scope, $state, $stateParams, $window, municipios, xstorage, $mdSidenav) {
    'ngInject';

    this.loading = true;
    this.xselection = $stateParams.selection || 'score';
    this.xname = $stateParams.name;

    $log.log($stateParams);
    $log.log($stateParams.name);

    function isNumber(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }

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

    this.updatePeriod = function(x) {
      $log.log(x);
      this.period = x;
    }

    this.loadCountry = function(c) {
      this.country = c;
      this.loading = false;
      xstorage.put('countryName', c.name);
      xstorage.remove('region');
      xstorage.remove('municipio');
    }

    this.loadRegion = function(r) {
      this.country = r;
      this.loading = false;
      xstorage.put('regionName', r.name);
      xstorage.remove('municipio');
    }

    this.loadMunicipio = function(m) {
      this.country = m;
      this.loading = false;
      xstorage.put('municipioName', m.name);
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

    this.level = function() {
      if (this.municipio) { return { level: 'Temas de interes en el Municipio', gov: 'Gobierno Municipal' } }
      if (this.region) { return {level: 'Temas de interes Estatal',       gov: 'Gobierno Estatal' } }
      if (this.country) { return {level: 'Temas de interes Nacional',     gov: 'Gobierno Federal' } }
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
        $state.go('pais.region', {id: xstorage.get('regionId'),
            alias: xstorage.get('regionAlias'), selection: 'govs',
            name: xstorage.get('regionName')});
      } else if(this.region) {
        $log.log(xstorage.getObject('country'));
        $state.go('pais', {id: '', selection: 'govs',
            name: xstorage.get('countryName')});
      }
    };

    this.subs = function() {
      if (this.country) {
        if (this.country.regions) {
          return 'Estados';
        } else if (this.country.municipios) {
          return 'Municipios';
        } else {
          return 'General'
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


    this.toggleMenu = buildToggler('right');
    this.isOpenMenu = function(){
      return $mdSidenav('right').isOpen();
    };

    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            // $log.debug("toggle " + navID + " is done");
          });
      }
    }

    this.closeMenu = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('right').close()
        .then(function () {
            // $log.debug("close RIGHT is done");
        });
    };

    let that = this;
    $scope.$watch('xselection', newValue => {
      $log.log("======================");
      $log.log(newValue);
      $log.log("======================");
      that.closeMenu();
    }, true);

  }
}
