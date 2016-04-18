export class XhttpService {
  constructor ($http) {
    'ngInject';

    this.$http = $http;
    this.headers = {
      'Content-Type': 'application/json; charset=utf-8',
      'Accept': 'application/json',
      'Authorization': 'token',
      'User-Authorization': '87f1a9a405285a726760ad207632496b2449e581f286'
    };
  }


  get(url) {
    return this.$http({
      method: 'get',
      url: url,
      headers: this.headers
    }).then((response) => {
      return response.data;
    }).catch((error) => {
      this.$log.error('XHR Failed for ' + this.apiHost + '.\n' + angular.toJson(error.data, true));
    });
  }
}
