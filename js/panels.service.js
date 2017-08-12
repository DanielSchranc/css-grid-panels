function panelsService($http, CONFIG) {

  var api = CONFIG.API.PANELS;

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
