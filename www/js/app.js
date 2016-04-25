// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
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
      titulo: 'Bem vindo ao iTasks',
      descricao: 'Seja bem vindo ao iTasks, o seu aplicativo para gerenciamento de tarefas',
    }
  ];

  $scope.clickk = function(item) {
    alert('MAOE =)');
    console.log(item);
  };

  $scope.mostarItem = function(item) {
    var alertPopup = $ionicPopup.alert({
      title:  item.titulo,
      template: 'Descrição: ' + item.descricao + '.'
    });

    alertPopup.then(function(res) {
      console.log('Tarefa exibida');
    });
  };

  $scope.moverItem = function(item, fromIndex, toIndex) {
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };

  $scope.removerTarefa = function(item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };


  $scope.addItemClick =  function(){
     $scope.data = {};
    $ionicPopup.show({
      title: 'Adicionar Tarefa',
      templateUrl: 'popup.html',
      scope: $scope,
      buttons: [{
        text: 'Cancelar'
      }, {
        text: 'Adicionar',
        type: 'button-positive',
        onTap: function(e) {
          console.log('titulo: ' + $scope.data.titulo);

          var novoItem = {
            titulo: $scope.data.titulo,
            descricao: $scope.data.descricao
          }
          return $scope.items.push(novoItem);
        }
      }]
    });
  };
});
