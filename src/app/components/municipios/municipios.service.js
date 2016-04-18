export class MunicipiosService {
  constructor ($log, xhttp) {
    'ngInject';

    this.$log = $log;
    this.xhttp = xhttp;
    this.apiHost = 'http://localhost:3333';
  }

  country(c, callback) {
    return this.xhttp.get(this.apiHost + '/'+c+'?include=government')
      .then((response) => {
        // this.$log.log('--------------');
        // this.$log.log(response.country);
        // this.$log.log('--------------');
        callback(response.country);
        // return response.country;
      })
      .catch((error) => {
        this.$log.error('XHR Failed for Municipios.\n' + angular.toJson(error.data, true));
      });
  }
}
