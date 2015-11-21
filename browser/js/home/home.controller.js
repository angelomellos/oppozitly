app.controller('HomeController', function ($scope, zitlyFactory){
  $scope.zitly = '';
  $scope.lengthen = () => {
    zitlyFactory.createZitly($scope.url)
    .then(
      res => $scope.zitly = res.zitly
    );
  }
})
