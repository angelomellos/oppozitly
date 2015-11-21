app.factory('zitlyFactory', function ($http) {
  var factory = {};
  factory.createZitly = function(url){
    return $http.post('/api/urls',{url: url})
    .then(response => response.data);
  };
  return factory;
})
