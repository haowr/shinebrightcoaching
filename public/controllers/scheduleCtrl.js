(function(){

    var app = angular.module('scheduleController',['userServices','authServices'])

    app.config(function(){
        console.log(
            "Schedule Controller Loaded..."
        )
    })

    app.controller('scheduleCtrl', function($scope,$http,$location,User,$timeout,$rootScope,Auth,$window){
               
        $rootScope.$on('$routeChangeStart', function () {

            $rootScope.loggedIn = Auth.isLoggedIn()

     

        })
        
        $scope.schedulePageOpen             = true;
        $scope.infoPageOpen                 = false;
        $scope.messagePageOpen              = false;
        $scope.messageSubjectCannotBeEmpty  = false;
        $scope.messageBodyCannotBeEmpty     = false;
        $scope.bookingsPageOpen             = false;

    })

}());