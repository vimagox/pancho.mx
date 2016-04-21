export class CountryController {
  constructor ($timeout, municipios) {
    'ngInject';

    this.xselection = 'score';
    municipios.country('mexico', response => this.country = response)
  }
}
