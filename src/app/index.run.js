export function runBlock ($log, FastClick, $window) {
  'ngInject';
  $log.debug('runBlock end');

  FastClick.attach($window.document.body)
}
