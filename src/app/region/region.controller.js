export class RegionController {
  constructor ($log, $stateParams, municipios) {
    'ngInject';
    municipios.region($stateParams.id, response => this.region = response)
  }
}
