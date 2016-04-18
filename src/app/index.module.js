/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { CountryController } from './country/country.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { XhttpService } from '../app/components/xhttp/xhttp.service';
import { MunicipiosService } from '../app/components/municipios/municipios.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

angular.module('app', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('xhttp', XhttpService)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .service('municipios', MunicipiosService)
  .controller('CountryController', CountryController)
  .controller('MainController', MainController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective);
