export class StorageService {
  constructor ($log, $cookies) {
    'ngInject';

    this.$log = $log;
    this.$cookies =$cookies;
    this.country = null;
    this.region = null;
    this.municipio = null;
  }

  put(id, x) { return this.$cookies.put(id, x); }
  get(id) { return this.$cookies.get(id); }

  putOrGet(id, x) {
    if (x) {
      this.put(id, x);
      return x
    }
    return this.get(id);
  }

  putObject(x, o) { this.$cookies.putObject(x, o); }
  getObject(x) { return this.$cookies.getObject(x); }

  clear() {
    var cookies = this.$cookies.getAll();
    angular.forEach(cookies, (v, k) => this.$cookies.remove(k) );
  }
}
