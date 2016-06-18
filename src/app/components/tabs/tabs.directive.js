export function TabsDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/tabs/tabs.html',
    scope: {
        creationDate: '='
    },
    controller: TabsController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class TabsController {
  constructor (moment, $scope, $log) {
    'ngInject';

    // "this.creationDate" is available by directive option "bindToController: true"
    this.relativeDate = moment(this.creationDate).fromNow();

    this.tabs = [
          { title: 'Comunicados', content: "Tabs will become paginated if there isn't enough room for them."},
          { title: 'Logros', content: "You can swipe left and right on a mobile device to change tabs."}
        ];
    this.selected = null,
    this.previous = null;
    this.selectedIndex = 2;

    $scope.$watch('selectedIndex', (current, old) => {
        this.previous = this.selected;
        this.selected = this.tabs[current];
        if ( old + 1 && (old != current)) $log.debug('Goodbye ' + this.previous.title + '!');
        if ( current + 1 )                $log.debug('Hello ' + this.selected.title + '!');
    });

    this.addTab = function (title, view) {
      view = view || title + " Content View";
      this.tabs.push({ title: title, content: view, disabled: false});
    };

    this.removeTab = function (tab) {
      let index = this.tabs.indexOf(tab);
      this.tabs.splice(index, 1);
    };
  }
}
