export class CountryController {
  constructor ($timeout, municipios) {
    'ngInject';
    let that = this;
    // this.country = municipios.country('mexico');
    municipios.country('mexico', function(response) {
      console.log(response);
      that.country = response;
    });
  }

  // showToastr() {
  //   this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
  //   this.classAnimation = '';
  // }
}
