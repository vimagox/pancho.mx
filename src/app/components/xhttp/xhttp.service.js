export class XhttpService {
  constructor ($http, $log) {
    'ngInject';

    this.$http = $http;
    this.$log = $log;
    this.headers = {
      'Content-Type': 'application/json; charset=utf-8',
      'Accept': 'application/json',
      'Authorization': 'token',
      // 'User-Authorization': 'a12c45fc7384d53c4f31c45cca8749da1e07faa69245'
      'User-Authorization': '3d7a16db9b3b7440df79a27db274e4a84231ba3089e9'
    };
  }


  get(url) {
    this.$log.log(url);
    return this.$http({
      method: 'get',
      url: url,
      headers: this.headers
    }).then((response) => {
      this.$log.log(response.data);
      return response.data;
    }).catch((error) => {
      this.$log.error('XHR Failed for ' + this.apiHost + '.\n' + angular.toJson(error.data, true));
    });
  }
}
