(function () {

    var app = angular.module('homeController', [])
    
    app.config(function () {

    })

    app.controller('homeCtrl', function ($scope, $rootScope, $timeout) {

        $scope.openModal = function () {

            $('#modal1').modal('open');
            
        }

        $scope.openModal();
       
    })

}());