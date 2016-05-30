export function runBlock ($log, FastClick, $document) {
  'ngInject';
  $log.debug('runBlock end');

  FastClick.attach($document.body)
}
