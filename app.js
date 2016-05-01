angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('AppCtrl', function($scope, $ionicPopup) {
  $scope.tarefasFeitas = 0;
  $scope.nivel = 0;

  $scope.items = [
    {
      title: 'Welcome to iTasks',
      description: 'Welcome to iTasks, Your application for managing tasks. Created by: gkal19.',
    }
  ];

  $scope.clickk = function(item) {
    alert('Hi');
    console.log(item);
  };

  $scope.showItem = function(item) {
    var alertPopup = $ionicPopup.alert({
      title:  item.title,
      template: 'Description: ' + item.description + '.'
    });

    alertPopup.then(function(res) {
      console.log('Task Displayed');
    });
  };

  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };

  $scope.removeItem = function(item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };


  $scope.addItemClick =  function(){
     $scope.data = {};
    $ionicPopup.show({
      title: 'Add Task',
      templateUrl: 'popup.html',
      scope: $scope,
      buttons: [{
        text: 'Cancel'
      }, {
        text: 'Add Task',
        type: 'button-positive',
        onTap: function(e) {
          console.log('title: ' + $scope.data.title);

          var novoItem = {
            titulo: $scope.data.title,
            descricao: $scope.data.description
          }
          return $scope.items.push(newItem);
        }
      }]
    });
  };
});
