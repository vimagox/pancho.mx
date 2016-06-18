export function runBlock ($log, FastClick, $window, $templateRequest) {
  'ngInject';
  $log.debug('runBlock end');

  FastClick.attach($window.document.body)

  var urls = [
    '/assets/images/pri.png',
    '/assets/images/pan.png',
    '/assets/images/prd.png',
    '/assets/images/pvem.png',
    '/assets/images/pt.png',
    '/assets/images/psi.png',
    '/assets/images/independiente.png',
    '/assets/images/humanista.png',
    '/assets/images/panal.png',
    '/assets/images/pes.png',
    '/assets/images/pcu.png',
    '/assets/images/ppg.png',
    '/assets/images/morena.png',
    '/assets/images/mc.png',
    '/assets/images/pmc.png',
    '/assets/images/ave.png',
    '/assets/images/cardenista.png'
  ];

  angular.forEach(urls, function(url) {
    $templateRequest(url);
  });

}
