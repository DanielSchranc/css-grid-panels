function getChildCount() {
  return {
    scope: {},
    restrict: 'A',
    link: function($scope, $element, $attrs, $ctrl) {

      $attrs.$observe('childCount', function(value) {
        var count = parseInt(value);
        if ((count % 2 > 0) && !(count === 1) && !(count === 5)) {
          $element.addClass('panel-count-odd');
        } else if ((count % 2) === 0) {
          $element.addClass('panel-count-even');
        } else if (count === 5) {
          $element.addClass('panel-count-5');
        }
      });

    }
  };
}

angular
  .module('app')
  .directive('getChildCount', getChildCount)
