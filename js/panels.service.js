function panelsService($http) {

    var api = 'data/panels.json';

    this.getPanels = function() {
        return $http
            .get(api)
            .then(function(response) {
                if (response) {
                    return response.data;
                }
            });
    }

}

angular
    .module('app')
    .service('panelsService', panelsService);
