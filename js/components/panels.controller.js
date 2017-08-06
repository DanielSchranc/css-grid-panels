function PanelsController(panelsService) {
    var ctrl = this;

    ctrl.panels = null;

    panelsService
        .getPanels()
        .then(function(response) {
            ctrl.panels = response;
        });
}
angular
    .module('app')
    .controller('PanelsController', PanelsController);
