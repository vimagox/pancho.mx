export class MunicipiosService {
  constructor ($log, xhttp) {
    'ngInject';

    this.$log = $log;
    this.xhttp = xhttp;
    // this.apiHost = 'http://localhost:3333';
    this.apiHost = 'http://api.municipios.com';
  }

  country(c, callback) {
    return this.xhttp.get(this.apiHost + '/'+c+'?include=government')
      .then((response) => {
        callback(response.country);
      })
      .catch((error) => {
        this.$log.error('XHR Failed for Municipios.\n' + angular.toJson(error.data, true));
      });
  }

  region(r, callback) {
    return this.xhttp.get(this.apiHost + '/regions/'+r+'?include=government')
      .then((response) => {
        callback(response.region);
      })
      .catch((error) => {
        this.$log.error('XHR Failed for Municipios.\n' + angular.toJson(error.data, true));
      });
  }

  municipio(m, callback) {
    return this.xhttp.get(this.apiHost + '/municipios/'+m+'?include=government')
      .then((response) => {
        callback(response.municipio);
      })
      .catch((error) => {
        this.$log.error('XHR Failed for Municipios.\n' + angular.toJson(error.data, true));
      });
  }
}
