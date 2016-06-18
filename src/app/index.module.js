/* global moment:false FastClick:false*/

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { CountryController } from './country/country.controller';
import { MyScoreController } from './myscore/myscore.controller';
import { ArtifactController } from './artifact/artifact.controller';
import { LoginController } from './login/login.controller';
import { XhttpService } from '../app/components/xhttp/xhttp.service';
import { MunicipiosService } from '../app/components/municipios/municipios.service';
import { StorageService } from '../app/components/municipios/storage.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { GovernmentsDirective } from '../app/components/governments/governments.directive';
import { FooterDirective } from '../app/components/footer/footer.directive';
import { TabsDirective } from '../app/components/tabs/tabs.directive';
import { ScoreDirective } from '../app/components/score/score.directive';
import { CardsDirective } from '../app/components/cards/cards.directive';
import { ArtifactsDirective } from '../app/components/artifacts/artifacts.directive';
import { MenuDirective } from '../app/components/menu/menu.directive';

angular.module('app', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize',
    'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap',
    'ngMaterial',
    // 'material.svgAssetsCache',
    'toastr'])
  .constant('moment', moment)
  .constant('FastClick', FastClick)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('xhttp', XhttpService)
  .service('webDevTec', WebDevTecService)
  .service('municipios', MunicipiosService)
  .service('xstorage', StorageService)
  .controller('ArtifactController', ArtifactController)
  .controller('CountryController', CountryController)
  .controller('MyScoreController', MyScoreController)
  .controller('MainController', MainController)
  .controller('LoginController', LoginController)
  .directive('xfooter', FooterDirective)
  .directive('score', ScoreDirective)
  .directive('tabs', TabsDirective)
  .directive('artifacts', ArtifactsDirective)
  .directive('cards', CardsDirective)
  .directive('xmenu', MenuDirective)
  .directive('acmeNavbar', NavbarDirective)
  .directive('governments', GovernmentsDirective);
