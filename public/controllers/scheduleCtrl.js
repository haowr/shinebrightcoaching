(function(){

    var app = angular.module('scheduleController',['userServices','authServices'])

    app.config(function(){
        console.log(
            "Schedule Controller Loaded..."
        )
    })

    app.controller('scheduleCtrl', function($scope,$http,$location,User,$timeout,$rootScope,Auth,$window){
               
        $rootScope.$on('$routeChangeStart', function () {

          //  $rootScope.loggedIn = Auth.isLoggedIn()

     

        })
        
        $scope.schedulePageOpen             = true;
        $scope.infoPageOpen                 = false;
        $scope.messagePageOpen              = false;
        $scope.messageSubjectCannotBeEmpty  = false;
        $scope.messageBodyCannotBeEmpty     = false;
        $scope.bookingsPageOpen             = false;

        $scope.discoveryPageOpen    = false;
        $scope.sessionPageOpen      = false;
        $scope.checkUpPageOpen      = true;
        $scope.checkUpAvailable8    = true;
        $scope.sessionAvailable8    = true;
        $scope.discoveryAvailable8  = true;
        $scope.checkUpAvailable9    = true;
        $scope.sessionAvailable9    = true;
        $scope.discoveryAvailable9  = true;
        $scope.checkUpAvailable10   = true;
        $scope.sessionAvailable10   = true;
        $scope.discoveryAvailable10 = true;
        $scope.checkUpAvailable11   = true;
        $scope.sessionAvailable11   = true;
        $scope.discoveryAvailable11 = true;
        $scope.checkUpAvailable12   = true;
        $scope.sessionAvailable12   = true;
        $scope.discoveryAvailable12 = true;
        $scope.checkUpAvailable1    = true;
        $scope.sessionAvailable1    = true;
        $scope.discoveryAvailable1  = true;
        $scope.checkUpAvailable2    = true;
        $scope.sessionAvailable2    = true;
        $scope.discoveryAvailable2  = true;
        $scope.checkUpAvailable3    = true;
        $scope.sessionAvailable3    = true;
        $scope.discoveryAvailable3  = true;


        $scope.checkUpTitle80       = true;
        $scope.discoveryTitle80     = false;
        $scope.sessionTitle80       = false;
        $scope.checkUpTitle81       = true;
        $scope.checkUpTitle82       = true;
        $scope.checkUpTitle83       = true;
        $scope.checkUpTitle84       = true;
        $scope.checkUpTitle85       = true;
        $scope.checkUpTitle86       = true;
        $scope.checkUpTitle87       = true;
        $scope.checkUpTitle88       = true;
        $scope.checkUpTitle90       = true;
        $scope.checkUpTitle91       = true;
        $scope.checkUpTitle92       = true;
        $scope.checkUpTitle93       = true;
        $scope.checkUpTitle94       = true;
        $scope.checkUpTitle95       = true;
        $scope.checkUpTitle96       = true;
        $scope.checkUpTitle97       = true;
        $scope.checkUpTitle98       = true;
        $scope.checkUpTitle100      = true;
        $scope.checkUpTitle101      = true;
        $scope.checkUpTitle102      = true;
        $scope.checkUpTitle103      = true;
        $scope.checkUpTitle104      = true;
        $scope.checkUpTitle105      = true;
        $scope.checkUpTitle106      = true;
        $scope.checkUpTitle107      = true;
        $scope.checkUpTitle108      = true;
        $scope.checkUpTitle110      = false;
        $scope.checkUpTitle111      = true;
        $scope.checkUpTitle112      = true;
        $scope.checkUpTitle113      = true;
        $scope.checkUpTitle114      = true;
        $scope.checkUpTitle115      = true;
        $scope.checkUpTitle116      = true;
        $scope.checkUpTitle117      = true;
        $scope.checkUpTitle118      = true;
        $scope.checkUpTitle120      = false;
        $scope.checkUpTitle121      = true;
        $scope.checkUpTitle122      = true;
        $scope.checkUpTitle123      = true;
        $scope.checkUpTitle124      = true;
        $scope.checkUpTitle125      = true;
        $scope.checkUpTitle126      = true;
        $scope.checkUpTitle127      = true;
        $scope.checkUpTitle128      = true;
        $scope.checkUpTitle10       = true;
        $scope.checkUpTitle11       = true;
        $scope.checkUpTitle12       = true;
        $scope.checkUpTitle13       = true;
        $scope.checkUpTitle14       = true;
        $scope.checkUpTitle15       = true;
        $scope.checkUpTitle16       = true;
        $scope.checkUpTitle17       = true;
        $scope.checkUpTitle18       = true;
        $scope.checkUpTitle20       = true;
        $scope.checkUpTitle21       = true;
        $scope.checkUpTitle22       = true;
        $scope.checkUpTitle23       = true;
        $scope.checkUpTitle24       = true;
        $scope.checkUpTitle25       = true;
        $scope.checkUpTitle26       = true;
        $scope.checkUpTitle27       = true;
        $scope.checkUpTitle28       = true;
        $scope.checkUpTitle30       = true;
        $scope.checkUpTitle31       = true;
        $scope.checkUpTitle32       = true;
        $scope.checkUpTitle33       = true;
        $scope.checkUpTitle34       = true;
        $scope.checkUpTitle35       = true;
        $scope.checkUpTitle36       = true;
        $scope.checkUpTitle37       = true;
        $scope.checkUpTitle38       = true;

    
        $scope.discoveryTitle80     = false;
        $scope.discoveryTitle81     = false;
        $scope.discoveryTitle82     = false;
        $scope.discoveryTitle83     = false;
        $scope.discoverytTitle84    = false;
        $scope.discoveryTitle85     = false;
        $scope.discoverytTitle86    = false;
        $scope.discoveryTitle87     = false;
        $scope.discoveryTitle88     = false;
        $scope.discoveryTitle90     = false;
        $scope.discoveryTitle91     = false;
        $scope.discoveryTitle92     = false;
        $scope.discoveryTitle93     = false;
        $scope.discoveryTitle94     = false;
        $scope.discoveryTitle95     = false;
        $scope.discoveryTitle96     = false;
        $scope.discoveryTitle97     = false;
        $scope.sessionTitle81       = false;
        $scope.sessionTitle82       = false;
        $scope.sessionTitle83       = false;
        $scope.sessionTitle84       = false;
        $scope.sessionTitle85       = false;
        $scope.sessionTitle86       = false;
        $scope.sessionTitle87       = false;
        $scope.sessionTitle88       = false;
        $scope.sessionTitle90       = false;
        $scope.sessionTitle91       = false;
        $scope.sessionTitle92       = false;
        $scope.sessionTitle93       = false;
        $scope.sessionTitle94       = false;
        $scope.sessionTitle95       = false;
        $scope.sessionTitle96       = false;
        $scope.sessionTitle97       = false;
        $scope.sessionTitle100      = false;
        $scope.sessionTitle101      = false;
        $scope.sessionTitle102      = false;
        $scope.sessionTitle103      = false;
        $scope.sessionTitle104      = false;
        $scope.sessionTitle105      = false;
        $scope.sessionTitle106      = false;
        $scope.sessionTitle107      = false;
        $scope.sessionTitle110      = false;
        $scope.sessionTitle111      = false;
        $scope.sessionTitle112      = false;
        $scope.sessionTitle113      = false;
        $scope.sessionTitle114      = false;
        $scope.sessionTitle115      = false;
        $scope.sessionTitle116      = false;
        $scope.sessionTitle117      = false;
        $scope.sessionTitle120      = false;
        $scope.sessionTitle121      = false;
        $scope.sessionTitle122      = false;
        $scope.sessionTitle123      = false;
        $scope.sessionTitle124      = false;
        $scope.sessionTitle125      = false;
        $scope.sessionTitle126      = false;
        $scope.sessionTitle127      = false;
        $scope.sessionTitle10       = false;
        $scope.sessionTitle11       = false;
        $scope.sessionTitle12       = false;
        $scope.sessionTitle13       = false;
        $scope.sessionTitle14       = false;
        $scope.sessionTitle15       = false;
        $scope.sessionTitle16       = false;
        $scope.sessionTitle17       = false;
        $scope.sessionTitle20       = false;
        $scope.sessionTitle21       = false;
        $scope.sessionTitle22       = false;
        $scope.sessionTitle23       = false;
        $scope.sessionTitle24       = false;
        $scope.sessionTitle25       = false;
        $scope.sessionTitle26       = false;
        $scope.sessionTitle27       = false;
        $scope.sessionTitle30       = false;
        $scope.sessionTitle31       = false;
        $scope.sessionTitle32       = false;
        $scope.sessionTitle33       = false;
        $scope.sessionTitle34       = false;
        $scope.sessionTitle35       = false;
        $scope.sessionTitle36       = false;
        $scope.sessionTitle37       = false;

        $scope.openScheduledJobPage = function (currentdate, id, datecondensed) {

            $scope.id               = id
            $scope.dateCondensed    = datecondensed
           // 
           //$window.location.href = "/datepage";

            console.log("openScheduledJobPage")

            if (!$scope.scheduledJobPageOpen) {
                $scope.schedulePageOpen     = false;

                $scope.scheduledJobPageOpen = true;
                $scope.currentDate          = "2020-22-30"

                User.getDate($scope.id).then(function (data) {
                    

                        $scope.dateInfo = data.data.date
                        console.log($scope.dateInfo)
    
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                            && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {
    
    
                            $scope.sessionAvailable8    = true;
                            $scope.discoveryAvailable8  = true;
                            $scope.checkUpAvailable8    = true;
                            $scope.sessionAlmostFull8   = false;
                            $scope.sessionFull8         = false;
                            $scope.discoveryAlmostFull8 = false;
                            $scope.discoveryFull8       = false;
                            $scope.checkUpAlmostFull8   = false;
                            $scope.checkUpFull8         = false;
    
    
                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {
    
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryAvailable8  = true;
                            $scope.checkUpAvailable8    = true;
                            $scope.sessionAlmostFull8   = false;
                            $scope.sessionAvailable8    = false;
                            $scope.discoveryAlmostFull8 = false;
                            $scope.discoveryFull8       = false;
                            $scope.checkUpAlmostFull8   = false;
                            $scope.checkUpFull8         = false;
    
    
                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {
    
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryAlmostFull8 = true;
                            $scope.checkUpAvailable8    = true;
                            $scope.sessionAlmostFull8   = false;
                            $scope.sessionAvailable8    = false;
                            $scope.discoveryFull8       = false;
                            $scope.discoveryAvailable8  = false;
                            $scope.checkUpAlmostFull8   = false;
                            $scope.checkUpFull8         = false;
    
    
                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryFull8       = true;
                            $scope.checkUpAvailable8    = true;
                            $scope.sessionAvailable8    = false;
                            $scope.sessionAlmostFull8   = false;
                            $scope.discoveryAlmostFull8 = false;
                            $scope.discoveryAvailable8  = false;
                            $scope.checkUpAlmostFull8   = false;
                            $scope.checkUpFull8         = false;
    
                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                        && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 0) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryFull8       = true;
                            $scope.checkUpAlmostFull8   = true;
                            $scope.sessionAlmostFull8   = false;
                            $scope.sessionAvailable8    = false;
                            $scope.checkUpAvailable8    = false;
                            $scope.checkUpFull8         = false;
                            $scope.discoveryAlmostFull8 = false;
                            $scope.discoveryAvailable8  = false;
    
                        }
                        if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                            && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 2) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryAvailable8  = true;
                            $scope.checkUpAvailable8    = true;
                            $scope.sessionAlmostFull8   = false;
                            $scope.sessionAvailable8    = false;
                            $scope.discoveryAlmostFull8 = false;
                            $scope.discoveryFull8       = false;
                            $scope.checkUpAlmostFull8   = false;
                            $scope.checkUpFull8         = false;
    
                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                            && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryAlmostFull8 = true;
                            $scope.checkUpAvailable8    = true;
                            $scope.sessionAlmostFull8   = false;
                            $scope.sessionAvailable8    = false;
                            $scope.discoveryAvaialble8  = false;
                            $scope.discoveryFull8       = false;
                            $scope.checkUpAlmostFull8   = false;
                            $scope.checkUpFull8         = false;
    
                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 2
                            && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryAlmostFull8 = true;
                            $scope.checkUpAvailable8    = true;
                            $scope.sessionAlmostFull8   = false;
                            $scope.sessionAvailable8    = false;
                            $scope.discoveryAvailable8  = false;
                            $scope.discoveryFull8       = false;
                            $scope.checkUpAlmostFull8   = false;
                            $scope.checkUpFull8         = false;
    
                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                            && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryFull8       = true;
                            $scope.checkUpAlmostFull8   = true;
                            $scope.sessionAlmostFull8   = false;
                            $scope.sessionAvailable8    = false;
                            $scope.discoveryAlmostFull8 = false;
                            $scope.discoveryAvailable8  = false;
                            $scope.checkUpAvailable8    = false;
                            $scope.checkUpFull8         = false;
    
                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                            && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryFull8       = true;
                            $scope.checkUpAlmostFull8   = true;
                            $scope.sessionAvailable8    = false;
                            $scope.sessionAlmostFull8   = false;
                            $scope.discoveryAlmostFull8 = false;
                            $scope.discoveryAvailable8  = false;
                            $scope.checkUpAvailable8    = false;
                            $scope.checkUpFull8         = false;
    
                        }
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                            && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryFull8       = true;
                            $scope.checkUpFull8         = true;
                            $scope.sessionAlmostFull8   = false;
                            $scope.sessionAvailable8    = false;
                            $scope.discoveryAlmsotFull8 = false;
                            $scope.discoveryAvailable8  = false;
                            $scope.checkUpAlmostFull8   = false;
                            $scope.checkUpAvailable8    = false;
    
                        }
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                            && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 2) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryFull8       = true;
                            $scope.checkUpAlmostFull8   = true;
                            $scope.sessionAlmostFull8   = false;
                            $scope.sessionAvailable8    = false;
                            $scope.discoveryAlmostFull8 = false;
                            $scope.discoveryAvailable8  = false;
                            $scope.checkUpAvailable8    = false;
                            $scope.checkUpFull8         = false;
    
                        }
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                            && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryFull8       = true;
                            $scope.checkUpAlmostFull8   = true;
                            $scope.sessionAlmostFull8   = false;
                            $scope.sessionAvailable8    = false;
                            $scope.discoveryAvailable8  = false;
                            $scope.checkUpAvailable8    = false;
                            $scope.checkUpFull8         = false;
    
                        }
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 2
                            && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryFull8       = true;
                            $scope.checkUpAlmostFull8   = true;
                            $scope.sessionAlmostFull8   = false;
                            $scope.sessionAvailable8    = false;
                            $scope.discoveryAlmostFull8 = false;
                            $scope.discoveryAvailable8  = false;
                            $scope.checkUpAvailable8    = false;
                            $scope.chjeckUpFull8        = false;
    
                        }
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                            && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryFull8       = true;
                            $scope.checkUpAlmostFull8   = true;
                            $scope.sessionAvailable8    = false;
                            $scope.sessionAlmostFull8   = false;
                            $scope.discoveryAlmostFull8 = false;
                            $scope.discoveryAvailable8  = false;
                            $scope.checkUpFull8         = false;
                            $scope.checkUpFull8         = false;
    
                        }
                        if (data.data.date['eight'].state[0]    == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                            && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryFull8       = true;
                            $scope.checkUpAlmostFull8   = true;
                            $scope.sessionAlmostFull8   = false;
                            $scope.sesionAvailable8     = false;
                            $scope.discoveryAlmostFull8 = false;
                            $scope.discoveryAvailable8  = false;
                            $scope.checkUpFull8         = false;
                            $scope.checkUpAvailable8    = false;
    
                        }
                        if (data.data.date['eight'].state[0]    == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                            && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 0) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryFull8       = true;
                            $scope.checkUpAlmostFull8   = true;
                            $scope.sessionAlmostFull8   = false;
                            $scope.sessionAvailable8    = false;
                            $scope.checkUpAvailable8    = false;
                            $scope.checkUpFull8         = false;
                            $scope.discoveryAlmostFull8 = false;
                            $scope.discoveryAvailable8  = false;
    
                        }
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                            && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryFull8       = true;
                            $scope.checkUpAlmostFull8   = true;
                            $scope.sessionAlmostFull8   = false;
                            $scope.sessionAvailable8    = false;
                            $scope.discoveryAlmostFull8 = false;
                            $scope.discoveryAvailable8  = false;
                            $scope.checkUpFull8         = false;
                            $scope.checkUpAvailable8    = false;
    
                        }
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                            && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 2) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryFull8       = true;
                            $scope.checkUpAlmostFull8   = true;
                            $scope.sessionAvailable8    = false;
                            $scope.sessionAlmostFull8   = false;
                            $scope.discoveryAlmostFull8 = false;
                            $scope.discoveryAvailable8  = false;
                            $scope.checkUpFull8         = false;
                            $scope.checkUpAvailable8    = false;
    
                        }
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                            && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryFull8       = true;
                            $scope.checkUpAlmostFull8   = true;
                            $scope.sessionAvailble8     = false;
                            $scope.sessionAlmostFull8   = false;
                            $scope.checkUpAvailable8    = false;
                            $scope.checkFull8           = false;
                            $scope.discoveryAlmostFull8 = false;
                            $scope.discoveryAvailable8  = false;
    
                        }
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 2
                            && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {
    
                            $scope.sessionFull8             = true;
                            $scope.discoveryFull8           = true;
                            $scope.checkUpAlmostFull8       = true;
                            $scope.sessionAvailable8        = false;
                            $scope.sessionAlmostFull8       = false;
                            $scope.discoveryAlmostFull8     = false;
                            $scope.discoveryAvailable8      = false;
                            $scope.checkUpAvailable8        = false;
                            $scope.checkUpFull8             = false;
    
                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                            && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryFull8       = true;
                            $scope.checkUpAlmostFull8   = true;
                            $scope.sessionAvailable8    = false;
                            $scope.sessionAlmostFull8   = false;
                            $scope.discoveryAvailable8  = false;
                            $scope.discoveryAlmostFull8 = false;
                            $scope.checkUpFull8         = false;
                            $scope.checkUpAvaialable8   = false; 
    
                        }
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                            && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryAlmostFull8 = true;
                            $scope.checkUpAvailable8    = true;
                            $scope.sessionAvailable8    = false;
                            $scope.sessionAlmostFull8   = false;
                            $scope.discoveryAvailable8  = false;
                            $scope.discoveryAvailable8  = false;
                            $scope.checkUpFull8         = false;
                            $scope.checkUpAlmostFull8   = false;
    
                        }
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                            && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 2) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryAlmostFull8 = true;
                            $scope.checkUpAvailable8    = true;
                            $scope.sessionAlmostFull8   = false;
                            $scope.sesionAvailable8     = false;
                            $scope.discoveryAvailable8  = false;
                            $scope.discoveryFull8       = false;
                            $scope.checkUpFull8         = false;
                            $scope.checkUpAlmostFull8   = false;
    
                        }
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                            && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryAlmostFull8 = true;
                            $scope.checkUpAvailable8    = true;
                            $scope.sessionAlmostFull8   = false;
                            $scope.sessionAvailable8    = false;
                            $scope.discoveryAvailable8  = false;
                            $scope.discoveryFull8       = false;
                            $scope.checkUpAlmostFull8   = false;
                            $scope.checkUpFull8         = false;
    
                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 2
                            && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryAlmostFull8 = true;
                            $scope.checkUpAvailable8    = true;
                            $scope.sessionAlmostFull8   = false;
                            $scope.sessionAvailable8    = false;
                            $scope.discoveryFull8       = false;
                            $scope.discoveryAvailable8  = false;
                            $scope.checkUpAlmostFull8   = false;
                            $scope.checkUpFull8         = false;
    
                        }
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                            && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryAlmostFull8 = true;
                            $scope.checkUpAvailable8    = true;
                            $scope.sessionAlmostFull8   = false;
                            $scope.sessionAvailable8    = false;
                            $scope.discoveryFull8       = false;
                            $scope.discoveryAvailable8  = false;
                            $scope.checkUpAvailable     = false;
                            $scope.checkUpFull8         = false;
    
                        }
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                            && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 2) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryAlmostFull8 = true;
                            $scope.checkUpAvailable8    = true;
                            $scope.sessionAlmostFull8   = false;
                            $scope.sessionAvailable8    = false;
                            $scope.discoveryFull8       = false;
                            $scope.discoveryAvailable8  = false;
                            $scope.checkUpAlmostFull8   = false;
                            $scope.checkUpFull8         = false;
    
                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                            && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryAlmostFull8 = true;
                            $scope.checkUpAvailable8    = true;
                            $scope.sessionAlmostFull8   = false;
                            $scope.sessionAvailable8    = false;
                            $scope.discoveryFull8       = false;
                            $scope.discoveryAvailable8  = false;
                            $scope.checkUpAlmostFull8   = false;
                            $scope.checkUpFull8         = false;
    
                        }
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                            && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {
    
                            $scope.sessionAlmostFull8   = true;
                            $scope.discoveryAvailable8  = true;
                            $scope.checkUpAvailable8    = true;
                            $scope.sessionFull8         = false;
                            $scope.sessionAvailable8    = false;
                            $scope.discoveryFull8       = false;
                            $scope.discoveryAlmostFull8 = false;
                            $scope.checkUpAlmostFull8   = false;
                            $scope.checkUpFull8         = false;
    
                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                            && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 2) {
    
                            $scope.sessionAlmostFull8   = true;
                            $scope.discoveryAlvailable8 = true;
                            $scope.checkUpAvailable8    = true;
                            $scope.sessionFull8         = false;
                            $scope.sessionAvailable8    = false;
                            $scope.discoveryFull8       = false;
                            $scope.discoveryAlmostFull8 = false;
                            $scope.checkUpAlmostFull8   = false;
                            $scope.checkUpFull8         = false;
    
                        }
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                            && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 0) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryFull8       = true;
                            $scope.checkUpAvailable8    = true;
                            $scope.sessionAlmostFull8   = false;
                            $scope.sessionAvailable8    = false;
                            $scope.discoveryAlmostFull8 = false;
                            $scope.discoveryAvailable8  = false;
                            $scope.checkUpAlmostFull8   = false;
                            $scope.checkUpFull8         = false;
    
                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 2
                            && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 2) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryFull8       = true;
                            $scope.checkUpAvailable8    = true;
                            $scope.sessionAlmostFull8   = false;
                            $scope.sessionAvailable8    = false;
                            $scope.discoveryAlmostFull8 = false;
                            $scope.discoveryAvailable8  = false;
                            $scope.checkUpAlmostFull8   = false;
                            $scope.checkUpFull8         = false;
    
                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 2
                            && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryFull8       = true;
                            $scope.checkUpAvailable8    = true;
                            $scope.sessionAlmostFull8   = false;
                            $scope.sessionAvailable8    = false;
                            $scope.discoveryAlmostFull8 = false;
                            $scope.discoveryAvailable8  = false;
                            $scope.checkUpAlmostFull8   = false;
                            $scope.checkUpFull8         = false;
    
                        }
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 2
                            && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryFull8       = true;
                            $scope.checkUpAvailable8    = true;
                            $scope.sessionAlmostFull8   = false;
                            $scope.sessionAvailable8    = false;
                            $scope.discoveryAlmostFull8 = false;
                            $scope.discoveryAvailable8  = false;
                            $scope.checkUpAlmostFull8   = false;
                            $scope.checkUpFull8         = false;
    
                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                            && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryFull8       = true;
                            $scope.checkUpAvailable8    = true;
                            $scope.sessionAlmostFull8   = false;
                            $scope.sessionAvailable8    = false;
                            $scope.discoveryAlmostFull8 = false;
                            $scope.discoveryAvailable8  = false;
                            $scope.checkUpAlmostFull8   = false;
                            $scope.checkUpFull8         = false;
    
                        }
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                            && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 0) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryFull8       = true;
                            $scope.checkUpAlmostFull8   = true;
                            $scope.sessionAlmostFull8   = false;
                            $scope.sessionAvailable8    = false;
                            $scope.discoveryAlmostFull8 = false;
                            $scope.discoveryAvailable8  = false;
                            $scope.checkUpAvailable8    = false;
                            $scope.checkUpFull8         = false;
    
                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 2) {
            
                            $scope.sessionFull8         = true;
                            $scope.discoveryFull8       = true;
                            $scope.checkUpAlmostFull8   = true;
                            $scope.sessionAlmostFull8   = false;
                            $scope.sessionAvailable8    = false;
                            $scope.discoveryAlmostFull8 = false;
                            $scope.discoveryAvailable8  = false;
                            $scope.checkUpAvailable8    = false;
                            $scope.checkUpFull8         = false;
            
                        }
                        if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 2) {
        
                            $scope.sessionFull8         = true;
                            $scope.discoveryFull8       = true;
                            $scope.checkUpAvailable8    = true;
                            $scope.sessionAlmostFull8   = false;
                            $scope.sessionAvailable8    = false;
                            $scope.discoveryAlmostFull8 = false;
                            $scope.discoveryAvailable8  = false;
                            $scope.checkUpAvailable8    = false;
                            $scope.checkUpFull8         = false;
        
                        }
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryFull8       = true;
                            $scope.checkUpAvailable8    = true;
                            $scope.sessionAlmostFull8   = false;
                            $scope.sessionAvailable8    = false;
                            $scope.discoveryAlmostFull8 = false;
                            $scope.discoveryAvailable8  = false;
                            $scope.checkUpAvailable8    = false;
                            $scope.checkUpFull8         = false;
    
                        }
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryFull8       = true;
                            $scope.checkUpAvailable8    = true;
                            $scope.sessionAlmostFull8   = false;
                            $scope.sessionAvailable8    = false;
                            $scope.discoveryAlmostFull8 = false;
                            $scope.discoveryAvailable8  = false;
                            $scope.checkUpAlmostFull8   = false;
                            $scope.checkUpFull8         = false;
    
                        }   
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 2) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryFull8       = true;
                            $scope.checkUpAvailable8    = true;
                            $scope.sessionAlmostFull8   = false;
                            $scope.sessionAvailable8    = false;
                            $scope.discoveryAlmostFull8 = false;
                            $scope.discoveryAvailable8  = false;
                            $scope.checkUpAlmostFull8   = false;
                            $scope.checkUpFull8         = false;
    
                        }
                        if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 2) {
    
                            $scope.sessionFull8         = true;
                            $scope.discoveryFull8       = true;
                            $scope.checkUpAvailable8    = true;
                            $scope.sessionAlmostFull8   = false;
                            $scope.sessionAvailable8    = false;
                            $scope.discoveryAlmostFull8 = false;
                            $scope.discoveryAvailable8  = false;
                            $scope.checkUpAlmostFull8   = false;
                            $scope.checkUpFull8         = false;
    
                        }
                         
                        if (data.data.date['eight'].state[1] == 2 &&
                        data.data.date['eight'].state[2] == 0 &&
                        data.data.date['eight'].state[3] == 0 && 
                        data.data.date['eight'].state[4] == 0 && 
                        data.data.date['eight'].state[5] == 0 &&  
                        data.data.date['nine'].state[0]  == 0) {
    
                            $scope.bookSession28        = true;
                            $scope.bookDiscovery28      = true;
                            $scope.bookDiscovery38      = true;
                            $scope.bookDiscovery48      = true;
    
                            $scope.sessionFull8         = false;
                            $scope.sessionAlmostFull8   = true;
                            $scope.sessionAvailable8    = false;
                            $scope.discoveryAvailable8  = true;
                            $scope.discoveryAlmostFull8 = false;
                            $scope.discoveryFull8       = false;
    
                    }
                    if (data.data.date['eight'].state[2] == 2 &&
                        data.data.date['eight'].state[3] == 0 && 
                        data.data.date['eight'].state[4] == 0 && 
                        data.data.date['eight'].state[5] == 0 &&  
                        data.data.date['nine'].state[0]  == 0 &&
                        data.data.date['nine'].state[1]  == 0 ) {
    
                          
                            $scope.bookSession38        = true;
                            $scope.bookDiscovery38      = true;
                            $scope.bookDiscovery48      = true;
                            $scope.bookDiscovery58      = true;
    
                            $scope.sessionFull8         = false;
                            $scope.sessionAlmostFull8   = true;
                            $scope.sessionAvailable8    = false;
                            $scope.discoveryAvailable8  = true;
                            $scope.discoveryAlmostFull8 = false;
                            $scope.discoveryFull8       = false;
    
                    }
                    if ( data.data.date['eight'].state[3] == 2 &&
                        data.data.date['eight'].state[4] == 0 && 
                        data.data.date['eight'].state[5] == 0 &&  
                        data.data.date['nine'].state[0]  == 0 &&
                        data.data.date['nine'].state[1]  == 0 &&
                        data.data.date['nine'].state[2]  == 0 ) {
    
                            $scope.bookSession48        = true;
                            $scope.bookDiscovery48      = true;
                            $scope.bookDiscovery58      = true;
    
                            $scope.discoveryAvailable8  = false;
                            $scope.discoveryAlmostFull8 = true;
                            $scope.discoveryFull8       = false;
                            $scope.sessionAlmostFull8   = true;
                            $scope.sessionAvailable8    = false;
                            $scope.sessionFull8         = false;
    
                    }
                    if (data.data.date['eight'].state[4] == 2 &&
                        data.data.date['eight'].state[5] == 0 &&  
                        data.data.date['nine'].state[0]  == 0 &&
                        data.data.date['nine'].state[1]  == 0 &&
                        data.data.date['nine'].state[2]  == 0 &&
                        data.data.date['nine'].state[3]  == 0 &&
                        data.data.date['nine'].state[4]  == 0 ) {
    
                            $scope.bookSession58    = true;
                            $scope.bookDiscovery58  = true;
                           
    
                            $scope.sessionAlmostFull8   = true;
                            $scope.sessionFull8         = false;
                            $scope.sessionAvailable8    = false;
                            $scope.discoveryAvailable8  = true;
                            $scope.discoveryAlmostFull8 = false;
                            $scope.discoveryFull8        = false;
                            
    
                    }
                  
    
                        if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                        && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryFull9       = true;
                            $scope.checkUpAvailable9    = true;
                            $scope.sessionAlmostFull9   = false;
                            $scope.sessionAvailable9    = false;
                            $scope.discoveryAlmostFull9 = false;
                            $scope.discoveryAvailable9  = false;
                            $scope.checkUpAlmostFull9   = false;
                            $scope.checkUpFull9         = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                        && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryFull9       = true;
                            $scope.checkUpAvailable9    = true;
                            $scope.sessionAlmostFull9   = false;
                            $scope.sessionAvailable9    = false;
                            $scope.discoveryAlmostFull9 = false;
                            $scope.discoveryAvailable9  = false;
                            $scope.checkUpAlmostFull9   = false;
                            $scope.checkUpFull9         = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                        && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {
    
                            $scope.sessionAvailable9        = true;
                            $scope.discoveryAvailable9      = true;
                            $scope.checkUpAvailable9        = true;
                            $scope.sessionAlmostFull9       = false;
                            $scope.sessionFull9             = false;
                            $scope.discoveryAlmostFull9     = false;
                            $scope.discoveryFull9           = false;
                            $scope.checkUpAlmostFull9       = false;
                            $scope.checkUpFull9             = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                        && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryAvailable9  = true;
                            $scope.checkUpAvailable9    = true;
                            $scope.sessionAlmostFull9   = false;;
                            $scope.sessionAvailable9    = false;
                            $scope.discoveryAlmostFull9 = false;
                            $scope.discoveryFull9       = false;
                            $scope.checkUpAlmostFull9   = false;
                            $scope.checkUpFull9         = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                        && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryAlmostFull9 = true;
                            $scope.checkUpAvailable9    = true;
                            $scope.sessionAlmostFull9   = false;
                            $scope.sessionAvailable9    = false;
                            $scope.discoveryFull9       = false;
                            $scope.discoveryAvailable9  = false;
                            $scope.checkUpAlmostFull9   = false;
                            $scope.checkUpFull9         = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                        && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryFull9       = true;
                            $scope.checkUpAvailable9    = true;
                            $scope.sessionAvailable9    = false;
                            $scope.sessionAlmostFull9   = false;
                            $scope.discoveryAlmostFull9 = false;
                            $scope.discoveryAvailable9  = false;
                            $scope.checkUpAlmostFull9   = false;
                            $scope.checkUpFull9         = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                        && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 0) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryFull9       = true;
                            $scope.checkUpAlmostFull9   = true;
                            $scope.sessionAlmostFull9   = false;
                            $scope.sessionAvailable9    = false;
                            $scope.checkUpAvailable9    = false;
                            $scope.checkUpFull9         = false;
                            $scope.discoveryAlmostFull9 = false;
                            $scope.discoveryAvailable9  = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                        && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryAvailable9  = true;
                            $scope.checkUpAvailable9    = true;
                            $scope.sessionAlmostFull9   = false;
                            $scope.sessionAvailable9    = false;
                            $scope.discoveryAlmostFull9 = false;
                            $scope.discoveryFull9       = false;
                            $scope.checkUpAlmostFull9   = false;
                            $scope.checkUpFull9         = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                        && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryAlmostFull9 = true;
                            $scope.checkUpAvailable9    = true;
                            $scope.sessionAlmostFull9   = false;
                            $scope.sessionAvailable9    = false;
                            $scope.discoveryAvaialble9  = false;
                            $scope.discoveryFull9       = false;
                            $scope.checkUpAlmostFull9   = false;
                            $scope.checkUpFull9         = false;
      
                        }
                        if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 2
                        && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryAlmostFull9 = true;
                            $scope.checkUpAvailable9    = true;
                            $scope.sessionAlmostFull9   = false;
                            $scope.sessionAvailable9    = false;
                            $scope.discoveryAvailable9  = false;
                            $scope.discoveryFull9       = false;
                            $scope.checkUpAlmostFull9   = false;
                            $scope.checkUpFull9         = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                        && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryFull9       = true;
                            $scope.checkUpAlmostFull9   = true;
                            $scope.sessionAlmostFull9   = false;
                            $scope.sessionAvailable9    = false;
                            $scope.discoveryAlmostFull9 = false;
                            $scope.discoveryAvailable9  = false;
                            $scope.checkUpAvailable9    = false;
                            $scope.checkUpFull9         = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                        && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryFull9       = true;
                            $scope.checkUpAlmostFull9   = true;
                            $scope.sessionAvailable9    = false;
                            $scope.sessionAlmostFull9   = false;
                            $scope.discoveryAlmostFull9 = false;
                            $scope.discoveryAvailable9  = false;
                            $scope.checkUpAvailable9    = false;
                            $scope.checkUpFull9         = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                        && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryFull9       = true;
                            $scope.checkUpFull9         = true;
                            $scope.sessionAlmostFull9   = false;
                            $scope.sessionAvailable9    = false;
                            $scope.discoveryAlmsotFull9 = false;
                            $scope.discoveryAvailable9  = false;
                            $scope.checkUpAlmostFull9   = false;
                            $scope.checkUpAvailable9    = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                        && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryFull9       = true;
                            $scope.checkUpAlmostFull9   = true;
                            $scope.sessionAlmostFull9   = false;
                            $scope.sessionAvailable9    = false;
                            $scope.discoveryAlmostFull9 = false;
                            $scope.discoveryAvailable9  = false;
                            $scope.checkUpAvailable9    = false;
                            $scope.checkUpFull9         = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                        && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryFull9       = true;
                            $scope.checkUpAlmostFull9   = true;
                            $scope.sessionAlmostFull9   = false;
                            $scope.sessionAvailable9    = false;
                            $scope.discoveryAvailable9  = false;
                            $scope.checkUpAvailable9    = false;
                            $scope.checkUpFull9         = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 2
                        && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryFull9       = true;
                            $scope.checkUpAlmostFull9   = true;
                            $scope.sessionAlmostFull9   = false;
                            $scope.sessionAvailable9    = false;
                            $scope.discoveryAlmostFull9 = false;
                            $scope.discoveryAvailable9  = false;
                            $scope.checkUpAvailable9    = false;
                            $scope.chjeckUpFull9        = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                        && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryFull9       = true;
                            $scope.checkUpAlmostFull9   = true;
                            $scope.sessionAvailable9    = false;
                            $scope.sessionAlmostFull9   = false;
                            $scope.discoveryAlmostFull9 = false;
                            $scope.discoveryAvailable9  = false;
                            $scope.checkUpFull9         = false;
                            $scope.checkUpFull9         = false;
    
                        }
                        if (data.data.date['nine'].state[0]    == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                        && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryFull9       = true;
                            $scope.checkUpAlmostFull9   = true;
                            $scope.sessionAlmostFull9   = false;
                            $scope.sesionAvailable9     = false;
                            $scope.discoveryAlmostFull9 = false;
                            $scope.discoveryAvailable9  = false;
                            $scope.checkUpFull9         = false;
    
                        }
                        if (data.data.date['nine'].state[0]    == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                        && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 0) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryFull9       = true;
                            $scope.checkUpAlmostFull9   = true;
                            $scope.sessionAlmostFull9   = false;
                            $scope.sessionAvailable9    = false;
                            $scope.checkUpAvailable9    = false;
                            $scope.checkUpFull9         = false;
                            $scope.discoveryAlmostFull9 = false;
                            $scope.discoveryAvailable9  = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                        && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryFull9       = true;
                            $scope.checkUpAlmostFull9   = true;
                            $scope.sessionAlmostFull9   = false;
                            $scope.sessionAvailable9    = false;
                            $scope.discoveryAlmostFull9 = false;
                            $scope.discoveryAvailable9  = false;
                            $scope.checkUpFull9         = false;
                            $scope.checkUpAvailable9    = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 2
                        && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {
    
                            $scope.sessionFull9         = false;
                            $scope.discoveryFull9       = false;
                            $scope.checkUpAlmostFull9   = false;
                            $scope.sessionAlmostFull9   = true;
                            $scope.sessionAvailable9    = false;
                            $scope.discoveryAlmostFull9 = true;
                            $scope.discoveryAvailable9  = false;
                            $scope.checkUpFull9         = false;
                            $scope.checkUpAvailable9    = true;
    
                        }
                        if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 2
                        && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 0) {
    
                            $scope.sessionFull9         = false;
                            $scope.discoveryFull9       = false;
                            $scope.checkUpAlmostFull9   = true;
                            $scope.sessionAlmostFull9   = true;
                            $scope.sessionAvailable9    = false;
                            $scope.discoveryAlmostFull9 = true;
                            $scope.discoveryAvailable9  = false;
                            $scope.checkUpFull9         = false;
                            $scope.checkUpAvailable9    = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                        && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryFull9       = true;
                            $scope.checkUpAlmostFull9   = true;
                            $scope.sessionAvailable9    = false;
                            $scope.sessionAlmostFull9   = false;
                            $scope.discoveryAlmostFull9 = false;
                            $scope.discoveryAvailable9  = false;
                            $scope.checkUpFull9         = false;
                            $scope.checkUpAvailable9    = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                        && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryFull9       = true;
                            $scope.checkUpAlmostFull9   = true;
                            $scope.sessionAvailble9     = false;
                            $scope.sessionAlmostFull9   = false;
                            $scope.checkUpAvailable9    = false;
                            $scope.checkFull9           = false;
                            $scope.discoveryAlmostFull9 = false;
                            $scope.discoveryAvailable9  = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 2
                        && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryFull9       = true;
                            $scope.checkUpAlmostFull9   = true;
                            $scope.sessionAvailable9    = false;
                            $scope.sessionAlmostFull9   = false;
                            $scope.discoveryAlmostFull9 = false;
                            $scope.discoveryAvailable9  = false;
                            $scope.checkUpAvailable9    = false;
                            $scope.checkUpFull9         = false;
    
    
                        }
                        if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                        && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryFull9       = true;
                            $scope.checkUpAlmostFull9   = true;
                            $scope.sessionAvailable9    = false;
                            $scope.sessionAlmostFull9   = false;
                            $scope.discoveryAvailable9  = false;
                            $scope.discoveryAlmostFull9 = false;
                            $scope.checkUpFull9         = false;
                            $scope.checkUpAvaialable9   = false; 
    
                        }
                        if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                        && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryAlmostFull9 = true;
                            $scope.checkUpAvailable9    = true;
                            $scope.sessionAvailable9    = false;
                            $scope.sessionAlmostFull9   = false;
                            $scope.discoveryAvailable9  = false;
                            $scope.discoveryAvailable9  = false;
                            $scope.checkUpFull9         = false;
                            $scope.checkUpAlmostFull9   = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                        && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryAlmostFull9 = true;
                            $scope.checkUpAvailable9    = true;
                            $scope.sessionAlmostFull9   = false;
                            $scope.sesionAvailable9     = false;
                            $scope.discoveryAvailable9  = false;
                            $scope.discoveryFull9       = false;
                            $scope.checkUpFull9         = false;
                            $scope.checkUpAlmostFull9   = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                        && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryAlmostFull9 = true;
                            $scope.checkUpAvailable9    = true;
                            $scope.sessionAlmostFull9   = false;
                            $scope.sessionAvailable9    = false;
                            $scope.discoveryAvailable9  = false;
                            $scope.discoveryFull9       = false;
                            $scope.checkUpAlmostFull9   = false;
                            $scope.checkUpFull9         = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 2
                        && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryAlmostFull9 = true;
                            $scope.checkUpAvailable9    = true;
                            $scope.sessionAlmostFull9   = false;
                            $scope.sessionAvailable9    = false;
                            $scope.discoveryFull9       = false;
                            $scope.discoveryAvailable9  = false;
                            $scope.checkUpAlmostFull9   = false;
                            $scope.checkUpFull9         = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                        && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryAlmostFull9 = true;
                            $scope.checkUpAvailable9    = true;
                            $scope.sessionAlmostFull9   = false;
                            $scope.sessionAvailable9    = false;
                            $scope.discoveryFull9       = false;
                            $scope.discoveryAvailable9  = false;
                            $scope.checkUpAvailable     = false;
                            $scope.checkUpFull9 = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                        && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryAlmostFull9 = true;
                            $scope.checkUpAvailable9    = true;
                            $scope.sessionAlmostFull9   = false;
                            $scope.sessionAvailable9    = false;
                            $scope.discoveryFull9       = false;
                            $scope.discoveryAvailable9  = false;
                            $scope.checkUpAlmostFull9   = false;
                            $scope.checkUpFull9         = false;
                      
                        }
                        if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                        && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryAlmostFull9 = true;
                            $scope.checkUpAvailable9    = true;
                            $scope.sessionAlmostFull9   = false;
                            $scope.sessionAvailable9    = false;
                            $scope.discoveryFull9       = false;
                            $scope.discoveryAvailable9  = false;
                            $scope.checkUpAlmostFull9   = false;
                            $scope.checkUpFull9         = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                        && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {
    
                            $scope.sessionAlmostFull9   = true;
                            $scope.discoveryAvailable9  = true;
                            $scope.checkUpAvailable9    = true;
                            $scope.sessionFull9         = false;
                            $scope.sessionAvailable9    = false;
                            $scope.discoveryFull9       = false;
                            $scope.discoveryAlmostFull9 = false;
                            $scope.checkUpAlmostFull9   = false;
                            $scope.checkUpFull9         = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                        && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {
    
                            $scope.sessionAlmostFull9   = true;
                            $scope.discoveryAlvailable9 = true;
                            $scope.checkUpAvailable9    = true;
                            $scope.sessionFull9         = false;
                            $scope.sessionAvailable9    = false;
                            $scope.discoveryFull9       = false;
                            $scope.discoveryAlmostFull9 = false;
                            $scope.checkUpAlmostFull9   = false;
                            $scope.checkUpFull9         = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                        && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 0) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryFull9       = true;
                            $scope.checkUpAvailable9    = true;
                            $scope.sessionAlmostFull9   = false;
                            $scope.sessionAvailable9    = false;
                            $scope.discoveryAlmostFull9 = false;
                            $scope.discoveryAvailable9  = false;
                            $scope.checkUpAlmostFull9   = false;
                            $scope.checkUpFull9         = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 2
                        && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryFull9       = true;
                            $scope.checkUpAvailable9    = true;
                            $scope.sessionAlmostFull9   = false;
                            $scope.sessionAvailable9    = false;
                            $scope.discoveryAlmostFull9 = false;
                            $scope.discoveryAvailable9  = false;
                            $scope.checkUpAlmostFull9   = false;
                            $scope.checkUpFull9         = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 2
                        && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryFull9       = true;
                            $scope.checkUpAvailable9    = true;
                            $scope.sessionAlmostFull9   = false;
                            $scope.sessionAvailable9    = false;
                            $scope.discoveryAlmostFull9 = false;
                            $scope.discoveryAvailable9  = false;
                            $scope.checkUpAlmostFull9   = false;
                            $scope.checkUpFull9         = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 2
                        && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryFull9       = true;
                            $scope.checkUpAvailable9    = true;
                            $scope.sessionAlmostFull9   = false;
                            $scope.sessionAvailable9    = false;
                            $scope.discoveryAlmostFull9 = false;
                            $scope.discoveryAvailable9  = false;
                            $scope.checkUpAlmostFull9   = false;
                            $scope.checkUpFull9         = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                        && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryFull9       = true;
                            $scope.checkUpAvailable9    = true;
                            $scope.sessionAlmostFull9   = false;
                            $scope.sessionAvailable9    = false;
                            $scope.discoveryAlmostFull9 = false;
                            $scope.discoveryAvailable9  = false;
                            $scope.checkUpAlmostFull9   = false;
                            $scope.checkUpFull9         = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                        && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 0) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryFull9       = true;
                            $scope.checkUpAlmostFull9   = true;
                            $scope.sessionAlmostFull9   = false;
                            $scope.sessionAvailable9    = false;
                            $scope.discoveryAlmostFull9 = false;
                            $scope.discoveryAvailable9  = false;
                            $scope.checkUpAvailable9    = false;
                            $scope.checkUpFull9         = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                        && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {
            
                            $scope.sessionFull9         = true;
                            $scope.discoveryFull9       = true;
                            $scope.checkUpAlmostFull9   = true;
                            $scope.sessionAlmostFull9   = false;
                            $scope.sessionAvailable9    = false;
                            $scope.discoveryAlmostFull9 = false;
                            $scope.discoveryAvailable9  = false;
                            $scope.checkUpAvailable9    = false;
                            $scope.checkUpFull9         = false;
            
                        }
                        if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                        && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {
    
                            $scope.sessionFull9         = true;
                            $scope.discoveryFull9       = true;
                            $scope.checkUpAvailable9    = true;
                            $scope.sessionAlmostFull9   = false;
                            $scope.sessionAvailable9    = false;
                            $scope.discoveryAlmostFull9 = false;
                            $scope.discoveryAvailable9  = false;
                            $scope.checkUpAvailable9    = false;
                            $scope.checkUpFull9         = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                        && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {
    
                            $scope.sessionFull9             = true;
                            $scope.discoveryFull9           = true;
                            $scope.checkUpAvailable9        = true;
                            $scope.sessionAlmostFull9       = false;
                            $scope.sessionAvailable9        = false;
                            $scope.discoveryAlmostFull9     = false;
                            $scope.discoveryAvailable9      = false;
                            $scope.checkUpAvailable9        = false;
                            $scope.checkUpFull9             = false;
    
                        }
                        if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                        && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {
    
                            $scope.sessionFull9             = true;
                            $scope.discoveryFull9           = true;
                            $scope.checkUpAvailable9        = true;
                            $scope.sessionAlmostFull9       = false;
                            $scope.sessionAvailable9        = false;
                            $scope.discoveryAlmostFull9     = false;
                            $scope.discoveryAvailable9      = false;
                            $scope.checkUpAlmostFull9       = false;
                            $scope.checkUpFull9             = false;
    
                        } 
    
                    
                    if (   data.data.date['nine'].state[1] == 2 && 
                        data.data.date['nine'].state[2] == 0 &&
                        data.data.date['nine'].state[3] == 0 && 
                        data.data.date['nine'].state[4] == 0 && 
                        data.data.date['nine'].state[5] == 0 &&  
                        data.data.date['ten'].state[0]  == 0) {
    
                            $scope.bookSession29        = true;
                            $scope.bookDiscovery29      = true;
                            $scope.bookDiscovery39      = true;
                            $scope.bookDiscovery49      = true;
    
                            $scope.sessionFull9         = false;
                            $scope.sessionAlmostFull9   = true;
                            $scope.sessionAvailable9    = false;
                            $scope.discoveryAvailable9  = true;
                            $scope.discoveryAlmostFull9 = false;
                            $scope.discoveryFull9       = false;
    
                    }
                    if (data.data.date['nine'].state[2] == 2 &&
                        data.data.date['nine'].state[3] == 0 && 
                        data.data.date['nine'].state[4] == 0 && 
                        data.data.date['nine'].state[5] == 0 &&  
                        data.data.date['ten'].state[0]  == 0 &&
                        data.data.date['ten'].state[1]  == 0 ) {
    
                          
                            $scope.bookSession39        = true;
                            $scope.bookDiscovery39      = true;
                            $scope.bookDiscovery49      = true;
                            $scope.bookDiscovery59      = true;
    
                            $scope.sessionFull9         = false;
                            $scope.sessionAlmostFull9   = true;
                            $scope.sessionAvailable9    = false;
                            $scope.discoveryAvailable9  = true;
                            $scope.discoveryAlmostFull9 = false;
                            $scope.discoveryFull9       = false;
    
                    }
                    if ( data.data.date['nine'].state[3] == 2 &&
                        data.data.date['nine'].state[4] == 0 && 
                        data.data.date['nine'].state[5] == 0 &&  
                        data.data.date['ten'].state[0]  == 0 &&
                        data.data.date['ten'].state[1]  == 0 &&
                        data.data.date['ten'].state[2]  == 0 ) {
    
                            $scope.bookSession49        = true;
                            $scope.bookDiscovery49      = true;
                            $scope.bookDiscovery59      = true;
    
                            $scope.discoveryAvailable9  = false;
                            $scope.discoveryAlmostFull9 = true;
                            $scope.discoveryFull9       = false;
                            $scope.sessionAlmostFull9   = true;
                            $scope.sessionAvailable9    = false;
                            $scope.sessionFull9         = false;
    
                    }
                    if (data.data.date['nine'].state[4] == 2 &&
                        data.data.date['nine'].state[5] == 0 &&  
                        data.data.date['ten'].state[0]  == 0 &&
                        data.data.date['ten'].state[1]  == 0 &&
                        data.data.date['ten'].state[2]  == 0 &&
                        data.data.date['ten'].state[3]  == 0 &&
                        data.data.date['ten'].state[4]  == 0 ) {
    
                            $scope.bookSession59    = true;
                            $scope.bookDiscovery59  = true;
                           
    
                            $scope.sessionAlmostFull9   = true;
                            $scope.sessionFull9         = false;
                            $scope.sessionAvailable9    = false;
                            $scope.discoveryAvailable9  = true;
                            $scope.discoveryAlmostFull9 = false;
                            $scope.discoveryFull9        = false;
                            
    
                    }
    
    
              




                    $scope.dateInfo = data.data.date
                    console.log($scope.dateInfo)

                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {


                        $scope.sessionAvailable8    = true;
                        $scope.discoveryAvailable8  = true;
                        $scope.checkUpAvailable8    = true;
                        $scope.sessionAlmostFull8   = false;
                        $scope.sessionFull8         = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryFull8       = false;
                        $scope.checkUpAlmostFull8   = false;
                        $scope.checkUpFull8         = false;


                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {


                        $scope.sessionFull8         = true;
                        $scope.discoveryAvailable8  = true;
                        $scope.checkUpAvailable8    = true;
                        $scope.sessionAlmostFull8   = false;
                        $scope.sessionAvailable8    = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryFull8       = false;
                        $scope.checkUpAlmostFull8   = false;
                        $scope.checkUpFull8         = false;


                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {


                        $scope.sessionFull8         = true;
                        $scope.discoveryAlmostFull8 = true;
                        $scope.checkUpAvailable8    = true;
                        $scope.sessionAlmostFull8   = false;
                        $scope.sessionAvailable8    = false;
                        $scope.discoveryFull8       = false;
                        $scope.discoveryAvailable8  = false;
                        $scope.checkUpAlmostFull8   = false;
                        $scope.checkUpFull8         = false;


                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryFull8       = true;
                        $scope.checkUpAvailable8    = true;
                        $scope.sessionAvailable8    = false;
                        $scope.sessionAlmostFull8   = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8  = false;
                        $scope.checkUpAlmostFull8   = false;
                        $scope.checkUpFull8         = false;

                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3
                    && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 0) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryFull8       = true;
                        $scope.checkUpAlmostFull8   = true;
                        $scope.sessionAlmostFull8   = false;
                        $scope.sessionAvailable8    = false;
                        $scope.checkUpAvailable8    = false;
                        $scope.checkUpFull8         = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8  = false;

                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 3) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryAvailable8  = true;
                        $scope.checkUpAvailable8    = true;
                        $scope.sessionAlmostFull8   = false;
                        $scope.sessionAvailable8    = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryFull8       = false;
                        $scope.checkUpAlmostFull8   = false;
                        $scope.checkUpFull8         = false;

                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryAlmostFull8 = true;
                        $scope.checkUpAvailable8    = true;
                        $scope.sessionAlmostFull8   = false;
                        $scope.sessionAvailable8    = false;
                        $scope.discoveryAvaialble8  = false;
                        $scope.discoveryFull8       = false;
                        $scope.checkUpAlmostFull8   = false;
                        $scope.checkUpFull8         = false;

                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 3
                        && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryAlmostFull8 = true;
                        $scope.checkUpAvailable8    = true;
                        $scope.sessionAlmostFull8   = false;
                        $scope.sessionAvailable8    = false;
                        $scope.discoveryAvailable8  = false;
                        $scope.discoveryFull8       = false;
                        $scope.checkUpAlmostFull8   = false;
                        $scope.checkUpFull8         = false;

                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3
                        && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryFull8       = true;
                        $scope.checkUpAlmostFull8   = true;
                        $scope.sessionAlmostFull8   = false;
                        $scope.sessionAvailable8    = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8  = false;
                        $scope.checkUpAvailable8    = false;
                        $scope.checkUpFull8         = false;

                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3
                        && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryFull8       = true;
                        $scope.checkUpAlmostFull8   = true;
                        $scope.sessionAvailable8    = false;
                        $scope.sessionAlmostFull8   = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8  = false;
                        $scope.checkUpAvailable8    = false;
                        $scope.checkUpFull8         = false;

                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3
                        && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryFull8       = true;
                        $scope.checkUpFull8         = true;
                        $scope.sessionAlmostFull8   = false;
                        $scope.sessionAvailable8    = false;
                        $scope.discoveryAlmsotFull8 = false;
                        $scope.discoveryAvailable8  = false;
                        $scope.checkUpAlmostFull8   = false;
                        $scope.checkUpAvailable8    = false;

                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3
                        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 3) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryFull8       = true;
                        $scope.checkUpAlmostFull8   = true;
                        $scope.sessionAlmostFull8   = false;
                        $scope.sessionAvailable8    = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8  = false;
                        $scope.checkUpAvailable8    = false;
                        $scope.checkUpFull8         = false;

                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryFull8       = true;
                        $scope.checkUpAlmostFull8   = true;
                        $scope.sessionAlmostFull8   = false;
                        $scope.sessionAvailable8    = false;
                        $scope.discoveryAvailable8  = false;
                        $scope.checkUpAvailable8    = false;
                        $scope.checkUpFull8         = false;

                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 3
                        && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryFull8       = true;
                        $scope.checkUpAlmostFull8   = true;
                        $scope.sessionAlmostFull8   = false;
                        $scope.sessionAvailable8    = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8  = false;
                        $scope.checkUpAvailable8    = false;
                        $scope.chjeckUpFull8        = false;

                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3
                        && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryFull8       = true;
                        $scope.checkUpAlmostFull8   = true;
                        $scope.sessionAvailable8    = false;
                        $scope.sessionAlmostFull8   = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8  = false;
                        $scope.checkUpFull8         = false;
                        $scope.checkUpFull8         = false;

                    }
                    if (data.data.date['eight'].state[0]    == 0 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3
                        && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryFull8       = true;
                        $scope.checkUpAlmostFull8   = true;
                        $scope.sessionAlmostFull8   = false;
                        $scope.sesionAvailable8     = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8  = false;
                        $scope.checkUpFull8         = false;
                        $scope.checkUpAvailable8    = false;

                    }
                    if (data.data.date['eight'].state[0]    == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 0) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryFull8       = true;
                        $scope.checkUpAlmostFull8   = true;
                        $scope.sessionAlmostFull8   = false;
                        $scope.sessionAvailable8    = false;
                        $scope.checkUpAvailable8    = false;
                        $scope.checkUpFull8         = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8  = false;

                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3
                        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryFull8       = true;
                        $scope.checkUpAlmostFull8   = true;
                        $scope.sessionAlmostFull8   = false;
                        $scope.sessionAvailable8    = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8  = false;
                        $scope.checkUpFull8         = false;
                        $scope.checkUpAvailable8    = false;

                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 3) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryFull8       = true;
                        $scope.checkUpAlmostFull8   = true;
                        $scope.sessionAvailable8    = false;
                        $scope.sessionAlmostFull8   = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8  = false;
                        $scope.checkUpFull8         = false;
                        $scope.checkUpAvailable8    = false;

                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryFull8       = true;
                        $scope.checkUpAlmostFull8   = true;
                        $scope.sessionAvailble8     = false;
                        $scope.sessionAlmostFull8   = false;
                        $scope.checkUpAvailable8    = false;
                        $scope.checkFull8           = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8  = false;

                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 3
                        && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {

                        $scope.sessionFull8             = true;
                        $scope.discoveryFull8           = true;
                        $scope.checkUpAlmostFull8       = true;
                        $scope.sessionAvailable8        = false;
                        $scope.sessionAlmostFull8       = false;
                        $scope.discoveryAlmostFull8     = false;
                        $scope.discoveryAvailable8      = false;
                        $scope.checkUpAvailable8        = false;
                        $scope.checkUpFull8             = false;

                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3
                        && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryFull8       = true;
                        $scope.checkUpAlmostFull8   = true;
                        $scope.sessionAvailable8    = false;
                        $scope.sessionAlmostFull8   = false;
                        $scope.discoveryAvailable8  = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.checkUpFull8         = false;
                        $scope.checkUpAvaialable8   = false; 

                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryAlmostFull8 = true;
                        $scope.checkUpAvailable8    = true;
                        $scope.sessionAvailable8    = false;
                        $scope.sessionAlmostFull8   = false;
                        $scope.discoveryAvailable8  = false;
                        $scope.discoveryAvailable8  = false;
                        $scope.checkUpFull8         = false;
                        $scope.checkUpAlmostFull8   = false;

                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 3) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryAlmostFull8 = true;
                        $scope.checkUpAvailable8    = true;
                        $scope.sessionAlmostFull8   = false;
                        $scope.sesionAvailable8     = false;
                        $scope.discoveryAvailable8  = false;
                        $scope.discoveryFull8       = false;
                        $scope.checkUpFull8         = false;
                        $scope.checkUpAlmostFull8   = false;

                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryAlmostFull8 = true;
                        $scope.checkUpAvailable8    = true;
                        $scope.sessionAlmostFull8   = false;
                        $scope.sessionAvailable8    = false;
                        $scope.discoveryAvailable8  = false;
                        $scope.discoveryFull8       = false;
                        $scope.checkUpAlmostFull8   = false;
                        $scope.checkUpFull8         = false;

                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 3
                        && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryAlmostFull8 = true;
                        $scope.checkUpAvailable8    = true;
                        $scope.sessionAlmostFull8   = false;
                        $scope.sessionAvailable8    = false;
                        $scope.discoveryFull8       = false;
                        $scope.discoveryAvailable8  = false;
                        $scope.checkUpAlmostFull8   = false;
                        $scope.checkUpFull8         = false;

                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryAlmostFull8 = true;
                        $scope.checkUpAvailable8    = true;
                        $scope.sessionAlmostFull8   = false;
                        $scope.sessionAvailable8    = false;
                        $scope.discoveryFull8       = false;
                        $scope.discoveryAvailable8  = false;
                        $scope.checkUpAvailable     = false;
                        $scope.checkUpFull8         = false;

                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 3) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryAlmostFull8 = true;
                        $scope.checkUpAvailable8    = true;
                        $scope.sessionAlmostFull8   = false;
                        $scope.sessionAvailable8    = false;
                        $scope.discoveryFull8       = false;
                        $scope.discoveryAvailable8  = false;
                        $scope.checkUpAlmostFull8   = false;
                        $scope.checkUpFull8         = false;

                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryAlmostFull8 = true;
                        $scope.checkUpAvailable8    = true;
                        $scope.sessionAlmostFull8   = false;
                        $scope.sessionAvailable8    = false;
                        $scope.discoveryFull8       = false;
                        $scope.discoveryAvailable8  = false;
                        $scope.checkUpAlmostFull8   = false;
                        $scope.checkUpFull8         = false;

                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {

                        $scope.sessionAlmostFull8   = true;
                        $scope.discoveryAvailable8  = true;
                        $scope.checkUpAvailable8    = true;
                        $scope.sessionFull8         = false;
                        $scope.sessionAvailable8    = false;
                        $scope.discoveryFull8       = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.checkUpAlmostFull8   = false;
                        $scope.checkUpFull8         = false;

                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 3) {

                        $scope.sessionAlmostFull8   = true;
                        $scope.discoveryAlvailable8 = true;
                        $scope.checkUpAvailable8    = true;
                        $scope.sessionFull8         = false;
                        $scope.sessionAvailable8    = false;
                        $scope.discoveryFull8       = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.checkUpAlmostFull8   = false;
                        $scope.checkUpFull8         = false;

                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 0) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryFull8       = true;
                        $scope.checkUpAvailable8    = true;
                        $scope.sessionAlmostFull8   = false;
                        $scope.sessionAvailable8    = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8  = false;
                        $scope.checkUpAlmostFull8   = false;
                        $scope.checkUpFull8         = false;

                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 3
                        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 3) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryFull8       = true;
                        $scope.checkUpAvailable8    = true;
                        $scope.sessionAlmostFull8   = false;
                        $scope.sessionAvailable8    = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8  = false;
                        $scope.checkUpAlmostFull8   = false;
                        $scope.checkUpFull8         = false;

                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 3
                        && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryFull8       = true;
                        $scope.checkUpAvailable8    = true;
                        $scope.sessionAlmostFull8   = false;
                        $scope.sessionAvailable8    = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8  = false;
                        $scope.checkUpAlmostFull8   = false;
                        $scope.checkUpFull8         = false;

                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 3
                        && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryFull8       = true;
                        $scope.checkUpAvailable8    = true;
                        $scope.sessionAlmostFull8   = false;
                        $scope.sessionAvailable8    = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8  = false;
                        $scope.checkUpAlmostFull8   = false;
                        $scope.checkUpFull8         = false;

                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 0
                        && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryFull8       = true;
                        $scope.checkUpAvailable8    = true;
                        $scope.sessionAlmostFull8   = false;
                        $scope.sessionAvailable8    = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8  = false;
                        $scope.checkUpAlmostFull8   = false;
                        $scope.checkUpFull8         = false;

                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3
                        && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 0) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryFull8       = true;
                        $scope.checkUpAlmostFull8   = true;
                        $scope.sessionAlmostFull8   = false;
                        $scope.sessionAvailable8    = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8  = false;
                        $scope.checkUpAvailable8    = false;
                        $scope.checkUpFull8         = false;

                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 3) {
        
                        $scope.sessionFull8         = true;
                        $scope.discoveryFull8       = true;
                        $scope.checkUpAlmostFull8   = true;
                        $scope.sessionAlmostFull8   = false;
                        $scope.sessionAvailable8    = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8  = false;
                        $scope.checkUpAvailable8    = false;
                        $scope.checkUpFull8         = false;
        
                    }
                    if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 3) {
    
                        $scope.sessionFull8         = true;
                        $scope.discoveryFull8       = true;
                        $scope.checkUpAvailable8    = true;
                        $scope.sessionAlmostFull8   = false;
                        $scope.sessionAvailable8    = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8  = false;
                        $scope.checkUpAvailable8    = false;
                        $scope.checkUpFull8         = false;
    
                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryFull8       = true;
                        $scope.checkUpAvailable8    = true;
                        $scope.sessionAlmostFull8   = false;
                        $scope.sessionAvailable8    = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8  = false;
                        $scope.checkUpAvailable8    = false;
                        $scope.checkUpFull8         = false;

                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 0) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryFull8       = true;
                        $scope.checkUpAvailable8    = true;
                        $scope.sessionAlmostFull8   = false;
                        $scope.sessionAvailable8    = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8  = false;
                        $scope.checkUpAlmostFull8   = false;
                        $scope.checkUpFull8         = false;

                    }   
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 3) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryFull8       = true;
                        $scope.checkUpAvailable8    = true;
                        $scope.sessionAlmostFull8   = false;
                        $scope.sessionAvailable8    = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8  = false;
                        $scope.checkUpAlmostFull8   = false;
                        $scope.checkUpFull8         = false;

                    }
                    if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {

                        $scope.sessionFull8         = true;
                        $scope.discoveryFull8       = true;
                        $scope.checkUpAvailable8    = true;
                        $scope.sessionAlmostFull8   = false;
                        $scope.sessionAvailable8    = false;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryAvailable8  = false;
                        $scope.checkUpAlmostFull8   = false;
                        $scope.checkUpFull8         = false;

                    }

                       // 3's And 2's //

                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 3) {

                    

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = false;
                    $scope.checkUpFull8             = false;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = true;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = false;
                    $scope.checkUpAvailable8        = true;

                }
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 3) {

                    

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = false;
                    $scope.checkUpFull8             = false;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = true;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = false;
                    $scope.checkUpAvailable8        = true;

                }
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 3) {

                    

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = false;
                    $scope.checkUpFull8             = false;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = true;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = false;
                    $scope.checkUpAvailable8        = true;

                }
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 3) {

                    

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = false;
                    $scope.checkUpFull8             = false;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = true;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = false;
                    $scope.checkUpAvailable8        = true;

                }
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 2
                && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 3) {

                    

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = false;
                    $scope.checkUpFull8             = false;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = true;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = false;
                    $scope.checkUpAvailable8        = true;

                }
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 3) {

                    

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = true;
                    $scope.checkUpFull8             = false;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = false;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = true;
                    $scope.checkUpAvailable8        = false;

                }
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 3) {

                    

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = true;
                    $scope.checkUpFull8             = false;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = false;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = true;
                    $scope.checkUpAvailable8        = false;

                }
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 2
                && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 3) {

                    

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = true;
                    $scope.checkUpFull8             = false;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = false;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = true;
                    $scope.checkUpAvailable8        = false;

                }
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 3) {

                    

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = true;
                    $scope.checkUpFull8             = false;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = false;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = true;
                    $scope.checkUpAvailable8        = false;

                }
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 3) {

                    

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = true;
                    $scope.checkUpFull8             = false;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = false;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = true;
                    $scope.checkUpAvailable8        = false;

                }
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 3) {

                    

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = true;
                    $scope.checkUpFull8             = false;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = false;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = true;
                    $scope.checkUpAvailable8        = false;

                }
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 2
                && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 3) {

                    

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = true;
                    $scope.checkUpFull8             = false;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = false;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = true;
                    $scope.checkUpAvailable8        = false;

                }
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 3) {

                    

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = true;
                    $scope.checkUpFull8             = false;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = false;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = true;
                    $scope.checkUpAvailable8        = false;

                }

                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 3) {

                    

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = true;
                    $scope.checkUpFull8             = false;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = false;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = true;
                    $scope.checkUpAvailable8        = false;

                }

                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {

                    

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = true;
                    $scope.checkUpFull8             = true;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = false;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = false;
                    $scope.checkUpAvailable8        = false;

                }

                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 3
                && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {

                    

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = true;
                    $scope.checkUpFull8             = true;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = false;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = false;
                    $scope.checkUpAvailable8        = false;

                }

                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3
                && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {

                    

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = true;
                    $scope.checkUpFull8             = true;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = false;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = false;
                    $scope.checkUpAvailable8        = false;

                }


                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3
                && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {

                    

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = true;
                    $scope.checkUpFull8             = true;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = false;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = false;
                    $scope.checkUpAvailable8        = false;

                }
                    
                if (data.data.date['eight'].state[0] == 3 && data.data.date['eight'].state[1] == 3 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3
                && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 2) {

                    

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = true;
                    $scope.checkUpFull8             = true;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = false;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = false;
                    $scope.checkUpAvailable8        = false;

                } 
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 3) {

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = true;
                    $scope.checkUpFull8             = true;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = false;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = false;
                    $scope.checkUpAvailable8        = false;

                } 
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3
                && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = true;
                    $scope.checkUpFull8             = true;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = false;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = false;
                    $scope.checkUpAvailable8        = false;

                } 
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3
                && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = true;
                    $scope.checkUpFull8             = false;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = false;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = true;
                    $scope.checkUpAvailable8        = false;

                } 
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 3 && data.data.date['eight'].state[3] == 3
                && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = true;
                    $scope.checkUpFull8             = false;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = false;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = true;
                    $scope.checkUpAvailable8        = false;

                } 
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 3
                && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = true;
                    $scope.checkUpFull8             = false;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = false;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = true;
                    $scope.checkUpAvailable8        = false;
                }
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 3) {

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = true;
                    $scope.checkUpFull8             = false;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = false;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = false;
                    $scope.checkUpAvailable8        = true;

                } 
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 2
                && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 3) {

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = true;
                    $scope.checkUpFull8             = false;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = false;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = false;
                    $scope.checkUpAvailable8        = true;
                    console.log("i")

                } 

                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 3) {

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = true;
                    $scope.checkUpFull8             = false;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = false;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = false;
                    $scope.checkUpAvailable8        = true;
                    console.log("i")


                } 
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 3) {

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = true;
                    $scope.checkUpFull8             = false;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = false;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = false;
                    $scope.checkUpAvailable8        = true;
                    console.log("i")


                } 
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 3) {

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = true;
                    $scope.checkUpFull8             = false;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = false;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = false;
                    $scope.checkUpAvailable8        = true;
                    console.log("i")


                } 
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 3) {

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = true;
                    $scope.checkUpFull8             = false;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = false;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = false;
                    $scope.checkUpAvailable8        = true;
                    console.log("i")


                } 
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 2
                && data.data.date['eight'].state[4] == 2 && data.data.date['eight'].state[5] == 3) {

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = false;
                    $scope.checkUpFull8             = false;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = true;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = false;
                    $scope.checkUpAvailable8        = true;
                    console.log("i")


                } 
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 2
                && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 3) {

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = false;
                    $scope.checkUpFull8             = false;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = true;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = false;
                    $scope.checkUpAvailable8        = true;
                    console.log("i")


                } 
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                && data.data.date['eight'].state[4]  == 0 && data.data.date['eight'].state[5] == 3) {

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = false;
                    $scope.checkUpFull8             = false;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = true;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = false;
                    $scope.checkUpAvailable8        = true;
                    console.log("i")


                } 
                
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 3) {

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = false;
                    $scope.checkUpFull8             = false;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = true;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = false;
                    $scope.checkUpAvailable8        = true;
                    console.log("i")


                } 
                    if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                    && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 3) {
    
                        $scope.sessionFull8             = true;
                        $scope.discoveryFull8           = false;
                        $scope.checkUpFull8             = false;
                        $scope.sessionAlmostFull8       = false;
                        $scope.sessionAvailable8        = false;
                        $scope.discoveryAlmostFull8     = true;
                        $scope.discoveryAvailable8      = false;
                        $scope.checkUpAlmostFull8       = false;
                        $scope.checkUpAvailable8        = true;
                        console.log("i")

    
                    } 
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 2
                && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = false;
                    $scope.checkUpFull8             = false;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = true;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = false;
                    $scope.checkUpAvailable8        = true;
                    console.log("i")


                } 
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 0
                && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = true;
                    $scope.checkUpFull8             = false;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = false;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = false;
                    $scope.checkUpAvailable8        = true;
                    console.log("i")


                } 
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = true;
                    $scope.checkUpFull8             = false;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = false;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = false;
                    $scope.checkUpAvailable8        = true;
                    console.log("i")


                } 
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = false;
                    $scope.checkUpFull8             = false;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = true;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = false;
                    $scope.checkUpAvailable8        = true;
                    console.log("i")


                } 
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 2 && data.data.date['eight'].state[3] == 3
                && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = true;
                    $scope.checkUpFull8             = false;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = false;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = true;
                    $scope.checkUpAvailable8        = false;
                    console.log("i")


                } 
                if (data.data.date['eight'].state[0] == 2 && data.data.date['eight'].state[1] == 2 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 3
                && data.data.date['eight'].state[4] == 3 && data.data.date['eight'].state[5] == 3) {

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = true;
                    $scope.checkUpFull8             = false;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = false;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAlmostFull8       = true;
                    $scope.checkUpAvailable8        = false;
                    console.log("i")


                } 
                if (data.data.date['eight'].state[0] == 0 && data.data.date['eight'].state[1] == 0 && data.data.date['eight'].state[2] == 0 && data.data.date['eight'].state[3] == 0
                && data.data.date['eight'].state[4] == 0 && data.data.date['eight'].state[5] == 3) {

                    $scope.sessionFull8             = true;
                    $scope.discoveryFull8           = false;
                    $scope.checkUpFull8             = false;
                    $scope.sessionAlmostFull8       = false;
                    $scope.sessionAvailable8        = false;
                    $scope.discoveryAlmostFull8     = false;
                    $scope.discoveryAvailable8      = true;
                    $scope.checkUpAlmostFull8       = false;
                    $scope.checkUpAvailable8        = true;
                    console.log("i")


                } 

                    // LOOK AHEAD LOGIC //
                     
                    if (data.data.date['eight'].state[1] == 3 &&
                    data.data.date['eight'].state[2] == 0 &&
                    data.data.date['eight'].state[3] == 0 && 
                    data.data.date['eight'].state[4] == 0 && 
                    data.data.date['eight'].state[5] == 0 &&  
                    data.data.date['nine'].state[0]  == 0) {

                        $scope.bookSession28        = true;
                        $scope.bookDiscovery28      = true;
                        $scope.bookDiscovery38      = true;
                        $scope.bookDiscovery48      = true;

                        $scope.sessionFull8         = false;
                        $scope.sessionAlmostFull8   = true;
                        $scope.sessionAvailable8    = false;
                        $scope.discoveryAvailable8  = true;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryFull8       = false;

                }
                if (data.data.date['eight'].state[2] == 3 &&
                    data.data.date['eight'].state[3] == 0 && 
                    data.data.date['eight'].state[4] == 0 && 
                    data.data.date['eight'].state[5] == 0 &&  
                    data.data.date['nine'].state[0]  == 0 &&
                    data.data.date['nine'].state[1]  == 0 ) {

                      
                        $scope.bookSession38        = true;
                        $scope.bookDiscovery38      = true;
                        $scope.bookDiscovery48      = true;
                        $scope.bookDiscovery58      = true;

                        $scope.sessionFull8         = false;
                        $scope.sessionAlmostFull8   = true;
                        $scope.sessionAvailable8    = false;
                        $scope.discoveryAvailable8  = true;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryFull8       = false;

                }
                if ( data.data.date['eight'].state[3] == 3 &&
                    data.data.date['eight'].state[4] == 0 && 
                    data.data.date['eight'].state[5] == 0 &&  
                    data.data.date['nine'].state[0]  == 0 &&
                    data.data.date['nine'].state[1]  == 0 &&
                    data.data.date['nine'].state[2]  == 0 ) {

                        $scope.bookSession48        = true;
                        $scope.bookDiscovery48      = true;
                        $scope.bookDiscovery58      = true;

                        $scope.discoveryAvailable8  = false;
                        $scope.discoveryAlmostFull8 = true;
                        $scope.discoveryFull8       = false;
                        $scope.sessionAlmostFull8   = true;
                        $scope.sessionAvailable8    = false;
                        $scope.sessionFull8         = false;

                }
                if (data.data.date['eight'].state[4] == 3 &&
                    data.data.date['eight'].state[5] == 0 &&  
                    data.data.date['nine'].state[0]  == 0 &&
                    data.data.date['nine'].state[1]  == 0 &&
                    data.data.date['nine'].state[2]  == 0 &&
                    data.data.date['nine'].state[3]  == 0 &&
                    data.data.date['nine'].state[4]  == 0 ) {

                        $scope.bookSession58    = true;
                        $scope.bookDiscovery58  = true;
                       

                        $scope.sessionAlmostFull8   = true;
                        $scope.sessionFull8         = false;
                        $scope.sessionAvailable8    = false;
                        $scope.discoveryAvailable8  = true;
                        $scope.discoveryAlmostFull8 = false;
                        $scope.discoveryFull8        = false;
                    }



                if (data.data.date['nine'].state[0] == 3){


                    $scope.sessionAlmostFull8       = true;
                    $scope.sessionAvailable8        = false;
                    $scope.sessionFull8             = false;
                    $scope.discoveryFull8           = false;
                    $scope.discoveryAlmostFull8     = true;
                    $scope.discoveryAvailable8      = false;
                    $scope.checkUpAvailable8        = true;
                    $scope.checkUpAlmostFull8       = false;
                    $scope.checkUpFull8             = false;
                


                }
                if (data.data.date['nine'].state[0] == 2){


                    $scope.sessionAlmostFull8       = true;
                    $scope.sessionAvailable8        = false;
                    $scope.sessionFull8             = false;
                    $scope.discoveryFull8           = false;
                    $scope.discoveryAlmostFull8     = false;
                    $scope.discoveryAvailable8      = true;
                    $scope.checkUpAvailable8        = true;
                    $scope.checkUpAlmostFull8       = false;
                    $scope.checkUpFull8             = false;
                


                }

                // LOOK AHEAD LOGIC //
              

                    if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryFull9       = true;
                        $scope.checkUpAvailable9    = true;
                        $scope.sessionAlmostFull9   = false;
                        $scope.sessionAvailable9    = false;
                        $scope.discoveryAlmostFull9 = false;
                        $scope.discoveryAvailable9  = false;
                        $scope.checkUpAlmostFull9   = false;
                        $scope.checkUpFull9         = false;

                    }
                    if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryFull9       = true;
                        $scope.checkUpAvailable9    = true;
                        $scope.sessionAlmostFull9   = false;
                        $scope.sessionAvailable9    = false;
                        $scope.discoveryAlmostFull9 = false;
                        $scope.discoveryAvailable9  = false;
                        $scope.checkUpAlmostFull9   = false;
                        $scope.checkUpFull9         = false;

                    }
                    if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {

                        $scope.sessionAvailable9        = true;
                        $scope.discoveryAvailable9      = true;
                        $scope.checkUpAvailable9        = true;
                        $scope.sessionAlmostFull9       = false;
                        $scope.sessionFull9             = false;
                        $scope.discoveryAlmostFull9     = false;
                        $scope.discoveryFull9           = false;
                        $scope.checkUpAlmostFull9       = false;
                        $scope.checkUpFull9             = false;

                    }
                    if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryAvailable9  = true;
                        $scope.checkUpAvailable9    = true;
                        $scope.sessionAlmostFull9   = false;;
                        $scope.sessionAvailable9    = false;
                        $scope.discoveryAlmostFull9 = false;
                        $scope.discoveryFull9       = false;
                        $scope.checkUpAlmostFull9   = false;
                        $scope.checkUpFull9         = false;

                    }
                    if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryAlmostFull9 = true;
                        $scope.checkUpAvailable9    = true;
                        $scope.sessionAlmostFull9   = false;
                        $scope.sessionAvailable9    = false;
                        $scope.discoveryFull9       = false;
                        $scope.discoveryAvailable9  = false;
                        $scope.checkUpAlmostFull9   = false;
                        $scope.checkUpFull9         = false;

                    }
                    if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryFull9       = true;
                        $scope.checkUpAvailable9    = true;
                        $scope.sessionAvailable9    = false;
                        $scope.sessionAlmostFull9   = false;
                        $scope.discoveryAlmostFull9 = false;
                        $scope.discoveryAvailable9  = false;
                        $scope.checkUpAlmostFull9   = false;
                        $scope.checkUpFull9         = false;

                    }
                    if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3
                    && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 0) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryFull9       = true;
                        $scope.checkUpAlmostFull9   = true;
                        $scope.sessionAlmostFull9   = false;
                        $scope.sessionAvailable9    = false;
                        $scope.checkUpAvailable9    = false;
                        $scope.checkUpFull9         = false;
                        $scope.discoveryAlmostFull9 = false;
                        $scope.discoveryAvailable9  = false;

                    }
                    if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryAvailable9  = true;
                        $scope.checkUpAvailable9    = true;
                        $scope.sessionAlmostFull9   = false;
                        $scope.sessionAvailable9    = false;
                        $scope.discoveryAlmostFull9 = false;
                        $scope.discoveryFull9       = false;
                        $scope.checkUpAlmostFull9   = false;
                        $scope.checkUpFull9         = false;

                    }
                    if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryAlmostFull9 = true;
                        $scope.checkUpAvailable9    = true;
                        $scope.sessionAlmostFull9   = false;
                        $scope.sessionAvailable9    = false;
                        $scope.discoveryAvaialble9  = false;
                        $scope.discoveryFull9       = false;
                        $scope.checkUpAlmostFull9   = false;
                        $scope.checkUpFull9         = false;
  
                    }
                    if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 3
                    && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryAlmostFull9 = true;
                        $scope.checkUpAvailable9    = true;
                        $scope.sessionAlmostFull9   = false;
                        $scope.sessionAvailable9    = false;
                        $scope.discoveryAvailable9  = false;
                        $scope.discoveryFull9       = false;
                        $scope.checkUpAlmostFull9   = false;
                        $scope.checkUpFull9         = false;

                    }
                    if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3
                    && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryFull9       = true;
                        $scope.checkUpAlmostFull9   = true;
                        $scope.sessionAlmostFull9   = false;
                        $scope.sessionAvailable9    = false;
                        $scope.discoveryAlmostFull9 = false;
                        $scope.discoveryAvailable9  = false;
                        $scope.checkUpAvailable9    = false;
                        $scope.checkUpFull9         = false;

                    }
                    if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3
                    && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryFull9       = true;
                        $scope.checkUpAlmostFull9   = true;
                        $scope.sessionAvailable9    = false;
                        $scope.sessionAlmostFull9   = false;
                        $scope.discoveryAlmostFull9 = false;
                        $scope.discoveryAvailable9  = false;
                        $scope.checkUpAvailable9    = false;
                        $scope.checkUpFull9         = false;

                    }
                    if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3
                    && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryFull9       = true;
                        $scope.checkUpFull9         = true;
                        $scope.sessionAlmostFull9   = false;
                        $scope.sessionAvailable9    = false;
                        $scope.discoveryAlmsotFull9 = false;
                        $scope.discoveryAvailable9  = false;
                        $scope.checkUpAlmostFull9   = false;
                        $scope.checkUpAvailable9    = false;

                    }
                    if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryFull9       = true;
                        $scope.checkUpAlmostFull9   = true;
                        $scope.sessionAlmostFull9   = false;
                        $scope.sessionAvailable9    = false;
                        $scope.discoveryAlmostFull9 = false;
                        $scope.discoveryAvailable9  = false;
                        $scope.checkUpAvailable9    = false;
                        $scope.checkUpFull9         = false;

                    }
                    if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryFull9       = true;
                        $scope.checkUpAlmostFull9   = true;
                        $scope.sessionAlmostFull9   = false;
                        $scope.sessionAvailable9    = false;
                        $scope.discoveryAvailable9  = false;
                        $scope.checkUpAvailable9    = false;
                        $scope.checkUpFull9         = false;

                    }
                    if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 3
                    && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryFull9       = true;
                        $scope.checkUpAlmostFull9   = true;
                        $scope.sessionAlmostFull9   = false;
                        $scope.sessionAvailable9    = false;
                        $scope.discoveryAlmostFull9 = false;
                        $scope.discoveryAvailable9  = false;
                        $scope.checkUpAvailable9    = false;
                        $scope.chjeckUpFull9        = false;

                    }
                    if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3
                    && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryFull9       = true;
                        $scope.checkUpAlmostFull9   = true;
                        $scope.sessionAvailable9    = false;
                        $scope.sessionAlmostFull9   = false;
                        $scope.discoveryAlmostFull9 = false;
                        $scope.discoveryAvailable9  = false;
                        $scope.checkUpFull9         = false;
                        $scope.checkUpFull9         = false;

                    }
                    if (data.data.date['nine'].state[0]    == 0 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3
                    && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryFull9       = true;
                        $scope.checkUpAlmostFull9   = true;
                        $scope.sessionAlmostFull9   = false;
                        $scope.sesionAvailable9     = false;
                        $scope.discoveryAlmostFull9 = false;
                        $scope.discoveryAvailable9  = false;
                        $scope.checkUpFull9         = false;

                    }
                    if (data.data.date['nine'].state[0]    == 3 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 0) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryFull9       = true;
                        $scope.checkUpAlmostFull9   = true;
                        $scope.sessionAlmostFull9   = false;
                        $scope.sessionAvailable9    = false;
                        $scope.checkUpAvailable9    = false;
                        $scope.checkUpFull9         = false;
                        $scope.discoveryAlmostFull9 = false;
                        $scope.discoveryAvailable9  = false;

                    }
                    if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryFull9       = true;
                        $scope.checkUpAlmostFull9   = true;
                        $scope.sessionAlmostFull9   = false;
                        $scope.sessionAvailable9    = false;
                        $scope.discoveryAlmostFull9 = false;
                        $scope.discoveryAvailable9  = false;
                        $scope.checkUpFull9         = false;
                        $scope.checkUpAvailable9    = false;

                    }
                    if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryFull9       = true;
                        $scope.checkUpAlmostFull9   = true;
                        $scope.sessionAvailable9    = false;
                        $scope.sessionAlmostFull9   = false;
                        $scope.discoveryAlmostFull9 = false;
                        $scope.discoveryAvailable9  = false;
                        $scope.checkUpFull9         = false;
                        $scope.checkUpAvailable9    = false;

                    }
                    if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryFull9       = true;
                        $scope.checkUpAlmostFull9   = true;
                        $scope.sessionAvailble9     = false;
                        $scope.sessionAlmostFull9   = false;
                        $scope.checkUpAvailable9    = false;
                        $scope.checkFull9           = false;
                        $scope.discoveryAlmostFull9 = false;
                        $scope.discoveryAvailable9  = false;

                    }
                    if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 3
                    && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryFull9       = true;
                        $scope.checkUpAlmostFull9   = true;
                        $scope.sessionAvailable9    = false;
                        $scope.sessionAlmostFull9   = false;
                        $scope.discoveryAlmostFull9 = false;
                        $scope.discoveryAvailable9  = false;
                        $scope.checkUpAvailable9    = false;
                        $scope.checkUpFull9         = false;


                    }
                    if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3
                    && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryFull9       = true;
                        $scope.checkUpAlmostFull9   = true;
                        $scope.sessionAvailable9    = false;
                        $scope.sessionAlmostFull9   = false;
                        $scope.discoveryAvailable9  = false;
                        $scope.discoveryAlmostFull9 = false;
                        $scope.checkUpFull9         = false;
                        $scope.checkUpAvaialable9   = false; 

                    }
                    if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryAlmostFull9 = true;
                        $scope.checkUpAvailable9    = true;
                        $scope.sessionAvailable9    = false;
                        $scope.sessionAlmostFull9   = false;
                        $scope.discoveryAvailable9  = false;
                        $scope.discoveryAvailable9  = false;
                        $scope.checkUpFull9         = false;
                        $scope.checkUpAlmostFull9   = false;

                    }
                    if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryAlmostFull9 = true;
                        $scope.checkUpAvailable9    = true;
                        $scope.sessionAlmostFull9   = false;
                        $scope.sesionAvailable9     = false;
                        $scope.discoveryAvailable9  = false;
                        $scope.discoveryFull9       = false;
                        $scope.checkUpFull9         = false;
                        $scope.checkUpAlmostFull9   = false;

                    }
                    if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryAlmostFull9 = true;
                        $scope.checkUpAvailable9    = true;
                        $scope.sessionAlmostFull9   = false;
                        $scope.sessionAvailable9    = false;
                        $scope.discoveryAvailable9  = false;
                        $scope.discoveryFull9       = false;
                        $scope.checkUpAlmostFull9   = false;
                        $scope.checkUpFull9         = false;

                    }
                    if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 3
                    && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryAlmostFull9 = true;
                        $scope.checkUpAvailable9    = true;
                        $scope.sessionAlmostFull9   = false;
                        $scope.sessionAvailable9    = false;
                        $scope.discoveryFull9       = false;
                        $scope.discoveryAvailable9  = false;
                        $scope.checkUpAlmostFull9   = false;
                        $scope.checkUpFull9         = false;

                    }
                    if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryAlmostFull9 = true;
                        $scope.checkUpAvailable9    = true;
                        $scope.sessionAlmostFull9   = false;
                        $scope.sessionAvailable9    = false;
                        $scope.discoveryFull9       = false;
                        $scope.discoveryAvailable9  = false;
                        $scope.checkUpAvailable     = false;
                        $scope.checkUpFull9 = false;

                    }
                    if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryAlmostFull9 = true;
                        $scope.checkUpAvailable9    = true;
                        $scope.sessionAlmostFull9   = false;
                        $scope.sessionAvailable9    = false;
                        $scope.discoveryFull9       = false;
                        $scope.discoveryAvailable9  = false;
                        $scope.checkUpAlmostFull9   = false;
                        $scope.checkUpFull9         = false;
                  
                    }
                    if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryAlmostFull9 = true;
                        $scope.checkUpAvailable9    = true;
                        $scope.sessionAlmostFull9   = false;
                        $scope.sessionAvailable9    = false;
                        $scope.discoveryFull9       = false;
                        $scope.discoveryAvailable9  = false;
                        $scope.checkUpAlmostFull9   = false;
                        $scope.checkUpFull9         = false;

                    }
                    if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {

                        $scope.sessionAlmostFull9   = true;
                        $scope.discoveryAvailable9  = true;
                        $scope.checkUpAvailable9    = true;
                        $scope.sessionFull9         = false;
                        $scope.sessionAvailable9    = false;
                        $scope.discoveryFull9       = false;
                        $scope.discoveryAlmostFull9 = false;
                        $scope.checkUpAlmostFull9   = false;
                        $scope.checkUpFull9         = false;

                    }
                    if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {

                        $scope.sessionAlmostFull9   = true;
                        $scope.discoveryAlvailable9 = true;
                        $scope.checkUpAvailable9    = true;
                        $scope.sessionFull9         = false;
                        $scope.sessionAvailable9    = false;
                        $scope.discoveryFull9       = false;
                        $scope.discoveryAlmostFull9 = false;
                        $scope.checkUpAlmostFull9   = false;
                        $scope.checkUpFull9         = false;

                    }
                    if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 0) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryFull9       = true;
                        $scope.checkUpAvailable9    = true;
                        $scope.sessionAlmostFull9   = false;
                        $scope.sessionAvailable9    = false;
                        $scope.discoveryAlmostFull9 = false;
                        $scope.discoveryAvailable9  = false;
                        $scope.checkUpAlmostFull9   = false;
                        $scope.checkUpFull9         = false;

                    }
                    if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 3
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryFull9       = true;
                        $scope.checkUpAvailable9    = true;
                        $scope.sessionAlmostFull9   = false;
                        $scope.sessionAvailable9    = false;
                        $scope.discoveryAlmostFull9 = false;
                        $scope.discoveryAvailable9  = false;
                        $scope.checkUpAlmostFull9   = false;
                        $scope.checkUpFull9         = false;

                    }
                    if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 3
                    && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryFull9       = true;
                        $scope.checkUpAvailable9    = true;
                        $scope.sessionAlmostFull9   = false;
                        $scope.sessionAvailable9    = false;
                        $scope.discoveryAlmostFull9 = false;
                        $scope.discoveryAvailable9  = false;
                        $scope.checkUpAlmostFull9   = false;
                        $scope.checkUpFull9         = false;

                    }
                    if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 3
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryFull9       = true;
                        $scope.checkUpAvailable9    = true;
                        $scope.sessionAlmostFull9   = false;
                        $scope.sessionAvailable9    = false;
                        $scope.discoveryAlmostFull9 = false;
                        $scope.discoveryAvailable9  = false;
                        $scope.checkUpAlmostFull9   = false;
                        $scope.checkUpFull9         = false;

                    }
                    if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryFull9       = true;
                        $scope.checkUpAvailable9    = true;
                        $scope.sessionAlmostFull9   = false;
                        $scope.sessionAvailable9    = false;
                        $scope.discoveryAlmostFull9 = false;
                        $scope.discoveryAvailable9  = false;
                        $scope.checkUpAlmostFull9   = false;
                        $scope.checkUpFull9         = false;

                    }
                    if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3
                    && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 0) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryFull9       = true;
                        $scope.checkUpAlmostFull9   = true;
                        $scope.sessionAlmostFull9   = false;
                        $scope.sessionAvailable9    = false;
                        $scope.discoveryAlmostFull9 = false;
                        $scope.discoveryAvailable9  = false;
                        $scope.checkUpAvailable9    = false;
                        $scope.checkUpFull9         = false;

                    }
                    if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {
        
                        $scope.sessionFull9         = true;
                        $scope.discoveryFull9       = true;
                        $scope.checkUpAlmostFull9   = true;
                        $scope.sessionAlmostFull9   = false;
                        $scope.sessionAvailable9    = false;
                        $scope.discoveryAlmostFull9 = false;
                        $scope.discoveryAvailable9  = false;
                        $scope.checkUpAvailable9    = false;
                        $scope.checkUpFull9         = false;
        
                    }
                    if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {

                        $scope.sessionFull9         = true;
                        $scope.discoveryFull9       = true;
                        $scope.checkUpAvailable9    = true;
                        $scope.sessionAlmostFull9   = false;
                        $scope.sessionAvailable9    = false;
                        $scope.discoveryAlmostFull9 = false;
                        $scope.discoveryAvailable9  = false;
                        $scope.checkUpAvailable9    = false;
                        $scope.checkUpFull9         = false;

                    }
                    if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {

                        $scope.sessionFull9             = true;
                        $scope.discoveryFull9           = true;
                        $scope.checkUpAvailable9        = true;
                        $scope.sessionAlmostFull9       = false;
                        $scope.sessionAvailable9        = false;
                        $scope.discoveryAlmostFull9     = false;
                        $scope.discoveryAvailable9      = false;
                        $scope.checkUpAvailable9        = false;
                        $scope.checkUpFull9             = false;

                    }
                    if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 0) {

                        $scope.sessionFull9             = true;
                        $scope.discoveryFull9           = true;
                        $scope.checkUpAvailable9        = true;
                        $scope.sessionAlmostFull9       = false;
                        $scope.sessionAvailable9        = false;
                        $scope.discoveryAlmostFull9     = false;
                        $scope.discoveryAvailable9      = false;
                        $scope.checkUpAlmostFull9       = false;
                        $scope.checkUpFull9             = false;

                    } 

                    if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {

                        $scope.sessionFull9             = true;
                        $scope.discoveryFull9           = false;
                        $scope.checkUpAvailable9        = true;
                        $scope.sessionAlmostFull9       = false;
                        $scope.sessionAvailable9        = false;
                        $scope.discoveryAlmostFull9     = true;
                        $scope.discoveryAvailable9      = false;
                        $scope.checkUpAlmostFull9       = false;
                        $scope.checkUpFull9             = false;
                        console.log("i")

                    } 
                    if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 0) {

                        $scope.sessionFull9             = true;
                        $scope.discoveryFull9           = false;
                        $scope.checkUpAvailable9        = true;
                        $scope.sessionAlmostFull9       = false;
                        $scope.sessionAvailable9        = false;
                        $scope.discoveryAlmostFull9     = true;
                        $scope.discoveryAvailable9      = false;
                        $scope.checkUpAlmostFull9       = false;
                        $scope.checkUpFull9             = false;
                        console.log("i")

                    } 
                    if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 0) {

                        $scope.sessionFull9             = true;
                        $scope.discoveryFull9           = false;
                        $scope.checkUpAvailable9        = true;
                        $scope.sessionAlmostFull9       = false;
                        $scope.sessionAvailable9        = false;
                        $scope.discoveryAlmostFull9     = true;
                        $scope.discoveryAvailable9      = false;
                        $scope.checkUpAlmostFull9       = false;
                        $scope.checkUpFull9             = false;
                        console.log("i")

                    } 



                // 3's And 2's //

                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {

                    

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = false;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = true;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = false;
                    $scope.checkUpAvailable9        = true;

                }
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 3) {

                    

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = false;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = true;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = false;
                    $scope.checkUpAvailable9        = true;

                }
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {

                    

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = false;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = true;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = false;
                    $scope.checkUpAvailable9        = true;

                }
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 3) {

                    

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = false;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = true;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = false;
                    $scope.checkUpAvailable9        = true;

                }
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 3) {

                    

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = false;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = true;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = false;
                    $scope.checkUpAvailable9        = true;

                }
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {

                    

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = true;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = false;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = true;
                    $scope.checkUpAvailable9        = false;

                }
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 3) {

                    

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = true;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = false;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = true;
                    $scope.checkUpAvailable9        = false;

                }
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 3) {

                    

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = true;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = false;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = true;
                    $scope.checkUpAvailable9        = false;

                }
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 3) {

                    

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = true;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = false;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = true;
                    $scope.checkUpAvailable9        = false;

                }
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {

                    

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = true;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = false;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = true;
                    $scope.checkUpAvailable9        = false;

                }
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 3) {

                    

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = true;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = false;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = true;
                    $scope.checkUpAvailable9        = false;

                }
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 3) {

                    

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = true;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = false;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = true;
                    $scope.checkUpAvailable9        = false;

                }
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 3) {

                    

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = true;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = false;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = true;
                    $scope.checkUpAvailable9        = false;

                }

                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 3) {

                    

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = true;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = false;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = true;
                    $scope.checkUpAvailable9        = false;

                }

                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {

                    

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = true;
                    $scope.checkUpFull9             = true;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = false;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = false;
                    $scope.checkUpAvailable9        = false;

                }

                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 3
                && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {

                    

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = true;
                    $scope.checkUpFull9             = true;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = false;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = false;
                    $scope.checkUpAvailable9        = false;

                }

                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3
                && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {

                    

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = true;
                    $scope.checkUpFull9             = true;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = false;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = false;
                    $scope.checkUpAvailable9        = false;

                }


                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3
                && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {

                    

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = true;
                    $scope.checkUpFull9             = true;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = false;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = false;
                    $scope.checkUpAvailable9        = false;

                }
                    
                if (data.data.date['nine'].state[0] == 3 && data.data.date['nine'].state[1] == 3 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3
                && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 2) {

                    

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = true;
                    $scope.checkUpFull9             = true;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = false;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = false;
                    $scope.checkUpAvailable9        = false;

                } 
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 3) {

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = true;
                    $scope.checkUpFull9             = true;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = false;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = false;
                    $scope.checkUpAvailable9        = false;

                } 
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3
                && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = true;
                    $scope.checkUpFull9             = true;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = false;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = false;
                    $scope.checkUpAvailable9        = false;

                } 
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3
                && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = true;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = false;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = true;
                    $scope.checkUpAvailable9        = false;

                } 
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 3 && data.data.date['nine'].state[3] == 3
                && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = true;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = false;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = true;
                    $scope.checkUpAvailable9        = false;

                } 
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 3
                && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = true;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = false;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = true;
                    $scope.checkUpAvailable9        = false;
                }
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 3) {

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = true;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = false;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = false;
                    $scope.checkUpAvailable9        = true;

                } 
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 3) {

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = true;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = false;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = false;
                    $scope.checkUpAvailable9        = true;
                    console.log("i")

                } 

                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 3) {

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = true;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = false;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = false;
                    $scope.checkUpAvailable9        = true;
                    console.log("i")


                } 
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 3) {

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = true;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = false;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = false;
                    $scope.checkUpAvailable9        = true;
                    console.log("i")


                } 
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = true;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = false;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = false;
                    $scope.checkUpAvailable9        = true;
                    console.log("i")


                } 
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = true;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = false;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = false;
                    $scope.checkUpAvailable9        = true;
                    console.log("i")


                } 
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 3) {

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = false;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = true;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = false;
                    $scope.checkUpAvailable9        = true;
                    console.log("i")


                } 
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = false;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = true;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = false;
                    $scope.checkUpAvailable9        = true;
                    console.log("i")


                } 
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4]  == 0 && data.data.date['nine'].state[5] == 3) {

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = false;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = true;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = false;
                    $scope.checkUpAvailable9        = true;
                    console.log("i")


                } 
                
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = false;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = true;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = false;
                    $scope.checkUpAvailable9        = true;
                    console.log("i")


                } 
                    if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                    && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {
    
                        $scope.sessionFull9             = true;
                        $scope.discoveryFull9           = false;
                        $scope.checkUpFull9             = false;
                        $scope.sessionAlmostFull9       = false;
                        $scope.sessionAvailable9        = false;
                        $scope.discoveryAlmostFull9     = true;
                        $scope.discoveryAvailable9      = false;
                        $scope.checkUpAlmostFull9       = false;
                        $scope.checkUpAvailable9        = true;
                        console.log("i")

    
                    } 
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 2
                && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = false;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = true;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = false;
                    $scope.checkUpAvailable9        = true;
                    console.log("i")


                } 
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = true;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = false;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = false;
                    $scope.checkUpAvailable9        = true;
                    console.log("i")


                } 

                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = true;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = false;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = false;
                    $scope.checkUpAvailable9        = true;
                    console.log("i")


                }
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 2) {

                    $scope.sessionFull9             = false;
                    $scope.discoveryFull9           = false;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = true;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = false;
                    $scope.discoveryAvailable9      = true;
                    $scope.checkUpAlmostFull9       = false;
                    $scope.checkUpAvailable9        = true;
                    console.log("i")


                }
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 2 && data.data.date['nine'].state[5] == 2) {

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = true;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = false;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = true;
                    $scope.checkUpAvailable9        = false;
                    console.log("i")


                }


                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = true;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = false;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = false;
                    $scope.checkUpAvailable9        = true;
                    console.log("i")


                } 
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = false;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = true;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = false;
                    $scope.checkUpAvailable9        = true;
                    console.log("i")


                } 
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 2 && data.data.date['nine'].state[3] == 3
                && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = true;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = false;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = true;
                    $scope.checkUpAvailable9        = false;
                    console.log("i")


                } 
                if (data.data.date['nine'].state[0] == 2 && data.data.date['nine'].state[1] == 2 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 3
                && data.data.date['nine'].state[4] == 3 && data.data.date['nine'].state[5] == 3) {

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = true;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = false;
                    $scope.discoveryAvailable9      = false;
                    $scope.checkUpAlmostFull9       = true;
                    $scope.checkUpAvailable9        = false;
                    console.log("i")


                } 
                if (data.data.date['nine'].state[0] == 0 && data.data.date['nine'].state[1] == 0 && data.data.date['nine'].state[2] == 0 && data.data.date['nine'].state[3] == 0
                && data.data.date['nine'].state[4] == 0 && data.data.date['nine'].state[5] == 3) {

                    $scope.sessionFull9             = true;
                    $scope.discoveryFull9           = false;
                    $scope.checkUpFull9             = false;
                    $scope.sessionAlmostFull9       = false;
                    $scope.sessionAvailable9        = false;
                    $scope.discoveryAlmostFull9     = false;
                    $scope.discoveryAvailable9      = true;
                    $scope.checkUpAlmostFull9       = false;
                    $scope.checkUpAvailable9        = true;
                    console.log("i")


                } 
                
                if (   data.data.date['nine'].state[1] == 3 && 
                    data.data.date['nine'].state[2] == 0 &&
                    data.data.date['nine'].state[3] == 0 && 
                    data.data.date['nine'].state[4] == 0 && 
                    data.data.date['nine'].state[5] == 0 &&  
                    data.data.date['ten'].state[0]  == 0) {

                        $scope.bookSession29        = true;
                        $scope.bookDiscovery29      = true;
                        $scope.bookDiscovery39      = true;
                        $scope.bookDiscovery49      = true;

                        $scope.sessionFull9         = false;
                        $scope.sessionAlmostFull9   = true;
                        $scope.sessionAvailable9    = false;
                        $scope.discoveryAvailable9  = true;
                        $scope.discoveryAlmostFull9 = false;
                        $scope.discoveryFull9       = false;

                }
                if (data.data.date['nine'].state[2] == 3 &&
                    data.data.date['nine'].state[3] == 0 && 
                    data.data.date['nine'].state[4] == 0 && 
                    data.data.date['nine'].state[5] == 0 &&  
                    data.data.date['ten'].state[0]  == 0 &&
                    data.data.date['ten'].state[1]  == 0 ) {

                      
                        $scope.bookSession39        = true;
                        $scope.bookDiscovery39      = true;
                        $scope.bookDiscovery49      = true;
                        $scope.bookDiscovery59      = true;

                        $scope.sessionFull9         = false;
                        $scope.sessionAlmostFull9   = true;
                        $scope.sessionAvailable9    = false;
                        $scope.discoveryAvailable9  = true;
                        $scope.discoveryAlmostFull9 = false;
                        $scope.discoveryFull9       = false;

                }
                if ( data.data.date['nine'].state[3] == 3 &&
                    data.data.date['nine'].state[4] == 0 && 
                    data.data.date['nine'].state[5] == 0 &&  
                    data.data.date['ten'].state[0]  == 0 &&
                    data.data.date['ten'].state[1]  == 0 &&
                    data.data.date['ten'].state[2]  == 0 ) {

                        $scope.bookSession49        = true;
                        $scope.bookDiscovery49      = true;
                        $scope.bookDiscovery59      = true;

                        $scope.discoveryAvailable9  = false;
                        $scope.discoveryAlmostFull9 = true;
                        $scope.discoveryFull9       = false;
                        $scope.sessionAlmostFull9   = true;
                        $scope.sessionAvailable9    = false;
                        $scope.sessionFull9         = false;

                }
                if (data.data.date['nine'].state[4] == 3 &&
                    data.data.date['nine'].state[5] == 0 &&  
                    data.data.date['ten'].state[0]  == 0 &&
                    data.data.date['ten'].state[1]  == 0 &&
                    data.data.date['ten'].state[2]  == 0 &&
                    data.data.date['ten'].state[3]  == 0 &&
                    data.data.date['ten'].state[4]  == 0 ) {

                        $scope.bookSession59    = true;
                        $scope.bookDiscovery59  = true;
                       

                        $scope.sessionAlmostFull9   = true;
                        $scope.sessionFull9         = false;
                        $scope.sessionAvailable9    = false;
                        $scope.discoveryAvailable9  = true;
                        $scope.discoveryAlmostFull9 = false;
                        $scope.discoveryFull9        = false;
                        

                }


                })

            }
        }

    })

}());