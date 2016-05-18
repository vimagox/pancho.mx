/* global moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { CountryController } from './country/country.controller';
import { XhttpService } from '../app/components/xhttp/xhttp.service';
import { MunicipiosService } from '../app/components/municipios/municipios.service';
import { StorageService } from '../app/components/municipios/storage.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { GovernmentsDirective } from '../app/components/governments/governments.directive';
import { FooterDirective } from '../app/components/footer/footer.directive';
import { ScoreDirective } from '../app/components/score/score.directive';
import { ArtifactsDirective } from '../app/components/artifacts/artifacts.directive';
import { ForumsDirective } from '../app/components/forums/forums.directive';
import { MenuDirective } from '../app/components/menu/menu.directive';

angular.module('app', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap', 'toastr'])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('xhttp', XhttpService)
  .service('webDevTec', WebDevTecService)
  .service('municipios', MunicipiosService)
  .service('xstorage', StorageService)
  .controller('CountryController', CountryController)
  .controller('MainController', MainController)
  .directive('xfooter', FooterDirective)
  .directive('score', ScoreDirective)
  .directive('artifacts', ArtifactsDirective)
  .directive('forums', ForumsDirective)
  .directive('xmenu', MenuDirective)
  .directive('acmeNavbar', NavbarDirective)
  .directive('governments', GovernmentsDirective);
