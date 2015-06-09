app.controller('MainIonicCtrl', function($scope, $stateParams, $http) {
  $scope.settingsList = [
    { text: "Led", checked: false }
  ];

  $scope.toggleLed = function(item) {
    console.log(item);
    if(item.checked) {
      $http.get('http://192.168.0.102:3000/ligar').
      success(function(data) {
      });
    } else {
      $http.get('http://192.168.0.102:3000/desligar').
      success(function(data) {
      });
    }
  };

});