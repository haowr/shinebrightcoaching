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

        $scope.appointmentType              = ""
        $scope.hour                         = ""

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

            $scope.bookDiscovery8 = true
            $scope.bookDiscovery9 = true;
            $scope.bookDiscovery18 = true;
            $scope.bookDiscovery19 = true;
            $scope.bookDiscovery28 = true;
            $scope.bookDiscovery29 = true;
            $scope.bookDiscovery39 = true;
            $scope.bookDiscovery49 = true;
            $scope.bookDiscovery59 = true;
            $scope.bookDiscovery10 = true;
            $scope.bookDiscovery110 = true;
            $scope.bookDiscovery210 = true;
            $scope.bookDiscovery310 = true;
            $scope.bookDiscovery410 = true;
            $scope.bookDiscovery510 = true;
            $scope.bookDiscovery11 = true;
            $scope.bookDiscovery111 = true;
            $scope.bookDiscovery211 = true;
            $scope.bookDiscovery311 = true;
            $scope.bookDiscovery411 = true;
            $scope.bookDiscovery511 = true;
            $scope.bookDiscovery12 = true;
            $scope.bookDiscovery112 = true;
            $scope.bookDiscovery212 = true;
            $scope.bookDiscovery312 = true;
            $scope.bookDiscovery412 = true;
            $scope.bookDiscovery512 = true;
            $scope.bookDiscovery1 = true;
            $scope.bookDiscovery11 = true;
            $scope.bookDiscovery21 = true;
            $scope.bookDiscovery31 = true;
            $scope.bookDiscovery41 = true;
            $scope.bookDiscovery51 = true;
            $scope.bookDiscovery2 = true;
            $scope.bookDiscovery102 = true;
            $scope.bookDiscovery22 = true;
            $scope.bookDiscovery32 = true;
            $scope.bookDiscovery42 = true;
            $scope.bookDiscovery52 = true;
            $scope.bookDiscovery3 = true;
            $scope.bookDiscovery13 = true;
            $scope.bookDiscovery23 = true;
            $scope.bookDiscovery33 = true;
            $scope.bookDiscovery43 = true;
            $scope.bookDiscovery53 = true;
            $scope.bookDiscovery38 = true;
            $scope.bookDiscovery48 = true;
            $scope.bookDiscovery58 = true;

            $scope.bookSession8 = true
            $scope.bookSession9 = true;
            $scope.bookSession18 = true;
            $scope.bookSession19 = true;
            $scope.bookSession28 = true;
            $scope.bookSession29 = true;
            $scope.bookSession39 = true;
            $scope.bookSession49 = true;
            $scope.bookSession59 = true;
            $scope.bookSession10 = true;
            $scope.bookSession110 = true;
            $scope.bookSession210 = true;
            $scope.bookSession310 = true;
            $scope.bookSession410 = true;
            $scope.bookSession510 = true;
            $scope.bookSession11 = true;
            $scope.bookSession111 = true;
            $scope.bookSession211 = true;
            $scope.bookSession311 = true;
            $scope.bookSession411 = true;
            $scope.bookSession511 = true;
            $scope.bookSession12 = true;
            $scope.bookSession112 = true;
            $scope.bookSession212 = true;
            $scope.bookSession312 = true;
            $scope.bookSession412 = true;
            $scope.bookSession512 = true;
            $scope.bookSession1 = true;
            $scope.bookSession11 = true;
            $scope.bookSession21 = true;
            $scope.bookSession31 = true;
            $scope.bookSession41 = true;
            $scope.bookSession51 = true;
            $scope.bookSession2 = true;
            $scope.bookSession12 = true;
            $scope.bookSession22 = true;
            $scope.bookSession32 = true;
            $scope.bookSession42 = true;
            $scope.bookSession52 = true;
            $scope.bookSession3 = true;
            $scope.bookSession13 = true;
            $scope.bookSession23 = true;
            $scope.bookSession33 = true;
            $scope.bookSession43 = true;
            $scope.bookSession53 = true;
            $scope.bookSession38 = true;
            $scope.bookSession48 = true;
            $scope.bookSession58 = true;

            $scope.bookCheckUp8 = true
            $scope.bookCheckUp9 = true;
            $scope.bookCheckUp18 = true;
            $scope.bookCheckUp19 = true;
            $scope.bookCheckUp28 = true;
            $scope.bookCheckUp29 = true;
            $scope.bookCheckUp39 = true;
            $scope.bookCheckUp49 = true;
            $scope.bookCheckUp59 = true;
            $scope.bookCheckUp10 = true;
            $scope.bookCheckUp110 = true;
            $scope.bookCheckUp210 = true;
            $scope.bookCheckUp310 = true;
            $scope.bookCheckUp410 = true;
            $scope.bookCheckUp510 = true;
            $scope.bookCheckUp11 = true;
            $scope.bookCheckUp111 = true;
            $scope.bookCheckUp211 = true;
            $scope.bookCheckUp311 = true;
            $scope.bookCheckUp411 = true;
            $scope.bookCheckUp511 = true;
            $scope.bookCheckUp12 = true;
            $scope.bookCheckUp112 = true;
            $scope.bookCheckUp212 = true;
            $scope.bookCheckUp312 = true;
            $scope.bookCheckUp412 = true;
            $scope.bookCheckUp512 = true;
            $scope.bookCheckUp1 = true;
            $scope.bookCheckUp11 = true;
            $scope.bookCheckUp21 = true;
            $scope.bookCheckUp31 = true;
            $scope.bookCheckUp41 = true;
            $scope.bookCheckUp51 = true;
            $scope.bookCheckUp2 = true;
            $scope.bookCheckUp102 = true;
            $scope.bookCheckUp22 = true;
            $scope.bookCheckUp32 = true;
            $scope.bookCheckUp42 = true;
            $scope.bookCheckUp52 = true;
            $scope.bookCheckUp3 = true;
            $scope.bookCheckUp13 = true;
            $scope.bookCheckUp23 = true;
            $scope.bookCheckUp33 = true;
            $scope.bookCheckUp43 = true;
            $scope.bookCheckUp53 = true;
            $scope.bookCheckUp38 = true;
            $scope.bookCheckUp48 = true;
            $scope.bookCheckUp58 = true;

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

        $scope.selectAppointmentType = function (type, column, color) {

            $scope.appointmentType = type;
    
            if (color == 'green' || color == 'yellow') {

                $scope.appointmentTypeAvailable = true;

            } else {

                $scope.appointmentTypeAvailable = false;

            }

            if (type == 'checkup') {

                $scope.sessionPageOpen = false;
                $scope.discoveryPageOpen = false;
                $scope.checkUpPageOpen = true;
                $scope.checkUpTitle9 = true;

                if (column == '1') {

                    if (!$scope.checkUp8Selected) {

                        $scope.discovery8Selected   = false;
                        $scope.session8Selected     = false;
                        $scope.checkUp8Selected     = true;
                        $scope.sessionTitle80       = false;
                        $scope.discoveryTitle80     = false;
                        $scope.checkUpTitle80       = true;
                        $scope.audio.play()

                    }

                }

                if (column == '2') {

                    if (!$scope.checkUp9Selected2) {

                        $scope.discovery9Selected2  = false;
                        $scope.session9Selected2    = false;
                        $scope.checkUp9Selected2    = true;
                        $scope.sessionTitle91       = false;
                        $scope.discoveryTitle91     = false;
                        $scope.checkUpTitle91       = true;
                        $scope.audio.play()

                    }

                }

                if (column == '3') {

                    if (!$scope.checkUp10Selected3) {

                        $scope.discovery10Selected3 = false;
                        $scope.session10Selected3   = false;
                        $scope.checkUp10Selected3   = true;
                        $scope.checkUpTitle102      = true;
                        $scope.discoveryTitle102    = false;
                        $scope.sessionTitle102      = false;
                        $scope.audio.play()

                    }

                }

                if (column == '4') {

                    if (!$scope.checkUp11Selected4) {

                        $scope.discovery11Selected4     = false;
                        $scope.session11Selected4       = false;
                        $scope.checkUp11Selected4       = true;
                        $scope.checkUpTitle113          = true;
                        $scope.discoveryTitle113        = false;
                        $scope.sessionTitle113          = false;

                        $scope.audio.play()

                    }

                }

                if (column == '5') {

                    if (!$scope.checkUp12Selected5) {

                        $scope.discovery12Selected5     = false;
                        $scope.session12Selected5       = false;
                        $scope.checkUp12Selected5       = true;
                        $scope.sessionTitle124          = false;
                        $scope.discoveryTitle124        = false;
                        $scope.checkUpTitle124          = true;
                        $scope.audio.play()

                    }

                }

                if (column == '6') {

                    if (!$scope.checkUp1Selected6) {

                        $scope.discovery1Selected6      = false;
                        $scope.session1Selected6        = false;
                        $scope.checkUp1Selected6        = true;
                        $scope.sessionTitle15           = false;
                        $scope.discoveryTitle15         = false;
                        $scope.checkUpTitle15           = true;
                        $scope.audio.play()

                    }

                }

                if (column == '7') {

                    if (!$scope.checkUp2Selected7) {

                        $scope.discovery2Selected7      = false;
                        $scope.session2Selected7        = false;
                        $scope.checkUp2Selected7        = true;
                        $scope.sessionTitle26           = false;
                        $scope.discoveryTitle26         = false;
                        $scope.checkUpTitle26           = true;
                        $scope.audio.play()

                    }

                }

                if (column == '8') {

                    if (!$scope.checkUp3Selected8) {

                        $scope.discovery3Selected8      = false;
                        $scope.session3Selected8        = false;
                        $scope.checkUp3Selected8        = true;
                        $scope.sessionTitle37           = false;
                        $scope.discoveryTitle37         = false;
                        $scope.checkUpTitle37           = true;
                        $scope.audio.play()

                    }

                }

            }

            if (type == 'discovery') {

                $scope.sessionPageOpen      = false;
                $scope.checkUpPageOpen      = false;
                $scope.discoveryPageOpen    = true;


                if (column == '1') {

                    if (!$scope.discovery8Selected) {

                        $scope.checkUp8Selected         = false;
                        $scope.session8Selected         = false;
                        $scope.discovery8Selected       = true
                        $scope.sessionTitle80           = false;
                        $scope.checkUpTitle80           = false;
                        $scope.discoveryTitle80         = true;

                        $scope.audio.play()

                    }

                }

                if (column == '2') {

                    if (!$scope.discovery9Selected2) {

                        $scope.checkUp9Selected2        = false;
                        $scope.session9Selected2        = false;
                        $scope.discovery9Selected2      = true;
                        $scope.sessionTitle91           = false;
                        $scope.checkUpTitle91           = false;
                        $scope.discoveryTitle91         = true;

                        $scope.audio.play()

                    }

                }

                if (column == '3') {

                    if (!$scope.discovery10Selected3) {

                        $scope.checkUp10Selected3       = false;
                        $scope.session10Selected3       = false;
                        $scope.discovery10Selected3     = true;
                        $scope.sessionTitle102          = false;
                        $scope.checkUpTitle102          = false;
                        $scope.discoveryTitle102        = true;

                        $scope.audio.play()

                    }

                }
                if (column == '4') {

                    if (!$scope.discovery11Selected4) {

                        $scope.checkUp11Selected4       = false;
                        $scope.session11Selected4       = false;
                        $scope.discovery11Selected4     = true;
                        $scope.sessionTitle113          = false;
                        $scope.checkUpTitle113          = false;
                        $scope.discoveryTitle113        = true;

                        $scope.audio.play()

                    }

                }
                if (column == '5') {

                    if (!$scope.discovery12Selected5) {

                        $scope.checkUp12Selected5   = false;
                        $scope.session12Selected5   = false;
                        $scope.discovery12Selected5 = true;
                        $scope.sessionTitle124      = false;
                        $scope.checkUpTitle124      = false;
                        $scope.discoveryTitle124    = true;

                        $scope.audio.play()

                    }

                }
                if (column == '6') {

                    if (!$scope.discovery1Selected6) {

                        $scope.checkUp1Selected6    = false;
                        $scope.session1Selected6    = false;
                        $scope.discovery1Selected6  = true;
                        $scope.sessionTitle15       = false;
                        $scope.checkUpTitle15       = false;
                        $scope.discoveryTitle15     = true;

                        $scope.audio.play()

                    }

                }
                if (column == '7') {

                    if (!$scope.discovery2Selected7) {

                        $scope.checkUp2Selected7    = false;
                        $scope.session2Selected7    = false;
                        $scope.discovery2Selected7  = true;
                        $scope.sessionTitle26       = false;
                        $scope.checkUpTitle26       = false;
                        $scope.discoveryTitle26     = true;
                        $scope.audio.play()

                    }

                }
                if (column == '8') {

                    if (!$scope.discovery3Selected8) {

                        $scope.checkUp3Selected8    = false;
                        $scope.session3Selected8    = false;
                        $scope.discovery3Selected8  = true;
                        $scope.checkUpTitle37       = false;
                        $scope.sessionTitle37       = false;
                        $scope.discoveryTitle37     = true;

                        $scope.audio.play()

                    }

                }




            }

            if (type == 'session') {

                $scope.discoveryPageOpen    = false;
                $scope.checkUpPageOpen      = false;
                $scope.sessionPageOpen      = true;

                if (column == '1') {

                    if (!$scope.session8Selected) {

                        $scope.checkUp8Selected     = false;
                        $scope.discovery8Selected   = false;
                        $scope.session8Selected     = true
                        $scope.checkUpTitle80       = false;
                        $scope.discoveryTitle80     = false;
                        $scope.sessionTitle80       = true;

                        $scope.audio.play()

                    }

                }

                if (column == '2') {

                    if (!$scope.session9Selected2) {

                        $scope.checkUp9Selected2    = false;
                        $scope.discovery9Selected2  = false;
                        $scope.session9Selected2    = true;
                        $scope.sessionTitle91       = true;
                        $scope.discoveryTitle91     = false;
                        $scope.checkUpTitle91       = false;

                        $scope.audio.play()

                    }

                }

                if (column == '3') {

                    if (!$scope.session10Selected3) {

                        $scope.checkUp10Selected3   = false;
                        $scope.discovery10Selected3 = false;
                        $scope.session10Selected3   = true;
                        $scope.checkUpTitle102      = false;
                        $scope.discoveryTitle102    = false;
                        $scope.sessionTitle102      = true; 

                        $scope.audio.play()

                    }

                }
                if (column == '4') {

                    if (!$scope.session11Selected4) {

                        $scope.checkUp11Selected4   = false;
                        $scope.discovery11Selected4 = false;
                        $scope.session11Selected4   = true;
                        $scope.discoveryTitle113    = false;
                        $scope.checkUpTitle113      = false;
                        $scope.sessionTitle113      = true;

                        $scope.audio.play()

                    }

                }
                if (column == '5') {

                    if (!$scope.session12Selected5) {

                        $scope.checkUp12Selected5   = false;
                        $scope.discovery12Selected5 = false;
                        $scope.session12Selected5   = true;
                        $scope.discoveryTitle124    = false;
                        $scope.checkUpTitle124      = false;
                        $scope.sessionTitle124      = true;

                        $scope.audio.play()

                    }

                }
                if (column == '6') {

                    if (!$scope.session1Selected6) {

                        $scope.checkUp1Selected6    = false;
                        $scope.discovery1Selected6  = false;
                        $scope.session1Selected6    = true;
                        $scope.discoveryTitle15     = false;
                        $scope.checkUpTitle15       = false;
                        $scope.sessionTitle15       = true;

                        $scope.audio.play()

                    }

                }
                if (column == '7') {

                    if (!$scope.session2Selected7) {

                        $scope.checkUp2Selected7        = false;
                        $scope.discovery2Selected7      = false;
                        $scope.session2Selected7        = true;
                        $scope.discoveryTitle26         = false;
                        $scope.checkUpTitle26           = false;
                        $scope.sessionTitle26           = true;

                        $scope.audio.play()

                    }

                }
                if (column == '8') {

                    if (!$scope.session3Selected8) {

                        $scope.checkUp3Selected8        = false;
                        $scope.discovery3Selected8      = false;
                        $scope.session3Selected8        = true;
                        $scope.discoveryTitle37         = false;
                        $scope.checkUpTitle37           = false;
                        $scope.sessionTitle37           = true;

                        $scope.audio.play()

                    }

                }

            }

        }

        $scope.openBookingPage = function (slot) {

            $scope.slot                     = slot;
            $scope.hour                     = slot;
            $window.localStorage.setItem('hour', slot)
            console.log($scope.hour)
            $scope.bookingPageOpen          = true;
            $scope.scheduledJobPageOpen     = false;
            $scope.scheduleSDOrCiPageOpen   = false;
            $scope.discovery800AMIsBooked   = false;
            $scope.discovery810AMIsBooked   = false;
            $scope.discovery820AMIsBooked   = false;
            $scope.discovery830AMIsBooked   = false;
            $scope.discovery840AMIsBooked   = false;
            $scope.discovery850AMIsBooked   = false;
            $scope.session800AMIsBooked     = false;
            $scope.session810AMIsBooked     = false;
            $scope.session820AMIsBooked     = false;
            $scope.session830AMIsBooked     = false;
            $scope.session840AMIsBooked     = false;
            $scope.session850AMIsBooked     = false;
            $scope.checkUp800AMIsBooked     = false;
            $scope.checkUp810AMIsBooked     = false;
            $scope.checkUp820AMIsBooked     = false;
            $scope.checkUp830AMIsBooked     = false;
            $scope.checkUp840AMIsBooked     = false;
            $scope.checkUp850AMIsBooked     = false;
            $scope.discovery900AMIsBooked   = false;
            $scope.discovery910AMIsBooked   = false;
            $scope.discovery920AMIsBooked   = false;
            $scope.discovery930AMIsBooked   = false;
            $scope.discovery940AMIsBooked   = false;
            $scope.discovery950AMIsBooked   = false;
            $scope.session900AMIsBooked     = false;
            $scope.session910AMIsBooked     = false;
            $scope.session920AMIsBooked     = false;
            $scope.session930AMIsBooked     = false;
            $scope.session940AMIsBooked     = false;
            $scope.session950AMIsBooked     = false;
            $scope.checkUp900AMIsBooked     = false;
            $scope.checkUp910AMIsBooked     = false;
            $scope.checkUp920AMIsBooked     = false;
            $scope.checkUp930AMIsBooked     = false;
            $scope.checkUp940AMIsBooked     = false;
            $scope.checkUp950AMIsBooked     = false;
            $scope.globalDateInformation    = {};

            User.getDate("5bf4f0a4b8f53129ecbc13a0").then(function (data) {

console.log(data)
                $scope.globalDateInformation = data.data.date;


                if ($scope.appointmentType == "discovery") {


                    if ($scope.hour == "eight") {

                        if ($scope.globalDateInformation[$scope.hour].state[0] == 3) {

                            $scope.bookDiscovery8 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 3) {

                            $scope.bookDiscovery8 = false;
                            $scope.bookDiscovery18 = false;

                        }

                        if ($scope.globalDateInformation[$scope.hour].state[2] == 3) {

                            $scope.bookDiscovery8 = false;
                            $scope.bookDiscovery18 = false;
                            $scope.bookDiscovery28 = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 3) {

                            $scope.bookDiscovery18 = false;
                            $scope.bookDiscovery28 = false;
                            $scope.bookDiscovery38 = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 3) {

                            $scope.bookDiscovery28 = false;
                            $scope.bookDiscovery38 = false;
                            $scope.bookDiscovery48 = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 3) {

                            $scope.bookDiscovery38 = false;
                            $scope.bookDiscovery48 = false;
                            $scope.bookDiscovery58 = false;

                        }
                        if ($scope.globalDateInformation['nine'].state[0] == 3) {

                            $scope.bookDiscovery58 = false;
                            $scope.bookDiscovery48 = false;


                        }

                    }
                    if ($scope.hour == "nine") {

                        if ($scope.globalDateInformation[$scope.hour].state[0] == 3) {

                            $scope.bookDiscovery9 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 3) {

                            $scope.bookDiscovery9 = false;
                            $scope.bookDiscovery19 = false;

                        }

                        if ($scope.globalDateInformation[$scope.hour].state[2] == 3) {

                            $scope.bookDiscovery9  = false;
                            $scope.bookDiscovery19 = false;
                            $scope.bookDiscovery29 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 3) {

                            $scope.bookDiscovery19 = false;
                            $scope.bookDiscovery29 = false;
                            $scope.bookDiscovery39 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 3) {

                            $scope.bookDiscovery29 = false;
                            $scope.bookDiscovery39 = false;
                            $scope.bookDiscovery49 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 3) {

                            $scope.bookDiscovery39 = false;
                            $scope.bookDiscovery49 = false;
                            $scope.bookDiscovery59 = false;

                        }

                    }

                }
                if ($scope.appointmentType == "discovery") {


                    if ($scope.hour == "eight") {

                        if ($scope.globalDateInformation[$scope.hour].state[0] == 2) {

                            $scope.bookDiscovery8 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 2) {

                            $scope.bookDiscovery8 = false;
                            $scope.bookDiscovery18 = false;

                        }

                        if ($scope.globalDateInformation[$scope.hour].state[2] == 2) {

                            $scope.bookDiscovery8 = false;
                            $scope.bookDiscovery18 = false;
                            $scope.bookDiscovery28 = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 2) {

                            $scope.bookDiscovery18 = false;
                            $scope.bookDiscovery28 = false;
                            $scope.bookDiscovery38 = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 2) {

                            $scope.bookDiscovery28 = false;
                            $scope.bookDiscovery38 = false;
                            $scope.bookDiscovery48 = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 2) {

                            $scope.bookDiscovery38 = false;
                            $scope.bookDiscovery48 = false;
                            $scope.bookDiscovery58 = false;

                        }
                        if ($scope.globalDateInformation['nine'].state[0] == 2) {

                            $scope.bookDiscovery58 = false;
                            $scope.bookDiscovery48 = false;


                        }

                    }
                    if ($scope.hour == "nine") {

                        if ($scope.globalDateInformation[$scope.hour].state[0] == 2) {

                            $scope.bookDiscovery9 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 2) {

                            $scope.bookDiscovery9 = false;
                            $scope.bookDiscovery19 = false;

                        }

                        if ($scope.globalDateInformation[$scope.hour].state[2] == 2) {

                            $scope.bookDiscovery9  = false;
                            $scope.bookDiscovery19 = false;
                            $scope.bookDiscovery29 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 2) {

                            $scope.bookDiscovery19 = false;
                            $scope.bookDiscovery29 = false;
                            $scope.bookDiscovery39 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 2) {

                            $scope.bookDiscovery29 = false;
                            $scope.bookDiscovery39 = false;
                            $scope.bookDiscovery49 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 2) {

                            $scope.bookDiscovery39 = false;
                            $scope.bookDiscovery49 = false;
                            $scope.bookDiscovery59 = false;

                        }

                    }

                }

                if ($scope.appointmentType == "checkup") {


                    if ($scope.hour == "eight") {

                        if ($scope.globalDateInformation[$scope.hour].state[0] == 3) {

                            $scope.bookCheckUp8 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 3) {

                            $scope.bookCheckUp18 = false;

                        }

                        if ($scope.globalDateInformation[$scope.hour].state[2] == 3) {

                            $scope.bookCheckUp28 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 3) {

                            $scope.bookCheckUp38 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 3) {

                            $scope.bookCheckUp48 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 3) {

                            $scope.bookCheckUp58 = false;

                        }

                    }
                    if ($scope.hour == "nine") {

                        $location.path("/datepage/checkup");

                        
                        if ($scope.globalDateInformation[$scope.hour].state[0] == 3) {

                            $scope.bookCheckUp9 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 3) {

                            $scope.bookCheckUp19 = false;

                        }

                        if ($scope.globalDateInformation[$scope.hour].state[2] == 3) {

                            $scope.bookCheckUp29 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 3) {

                            $scope.bookCheckUp39 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 3) {

                            $scope.bookCheckUp49 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 3) {

                            $scope.bookCheckUp59 = false;

                        }

                        if (data.data.date[$scope.hour].state[3] === 3) {

                            $scope.discovery800AMSelected = false;
                            $scope.bookCheckUp19 = false;
                            $scope.bookCheckUp29 = false;
                            $scope.bookSession19 = false;
                            $scope.bookCheckUp29 = false;
                            $scope.bookCheckUp19 = false;
                            $scope.bookCheckUp29 = false;

                        }
                        

                    }

                }
                if ($scope.appointmentType == "checkup") {


                    if ($scope.hour == "eight") {

                        if ($scope.globalDateInformation[$scope.hour].state[0] == 2) {

                            $scope.bookCheckUp8 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 2) {

                            $scope.bookCheckUp18 = false;

                        }

                        if ($scope.globalDateInformation[$scope.hour].state[2] == 2) {

                            $scope.bookCheckUp28 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 2) {

                            $scope.bookCheckUp38 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 2) {

                            $scope.bookCheckUp48 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 2) {

                            $scope.bookCheckUp58 = false;

                        }

                    }
                    if ($scope.hour == "nine") {

                        if ($scope.globalDateInformation[$scope.hour].state[0] == 2) {

                            $scope.bookCheckUp9 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 2) {

                            $scope.bookCheckUp19 = false;

                        }

                        if ($scope.globalDateInformation[$scope.hour].state[2] == 2) {

                            $scope.bookCheckUp29 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 2) {

                            $scope.bookCheckUp39 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 2) {

                            $scope.bookCheckUp49 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 2) {

                            $scope.bookCheckUp59 = false;

                        }

                        if (data.data.date[$scope.hour].state[3] === 2) {

                            $scope.discovery800AMSelected = false;
                            $scope.bookCheckUp19 = false;
                            $scope.bookCheckUp29 = false;
                            $scope.bookSession19 = false;
                            $scope.bookCheckUp29 = false;
                            $scope.bookCheckUp19 = false;
                            $scope.bookCheckUp29 = false;

                        }

                    }

                }

                if ($scope.appointmentType == "session") { 


                    if ($scope.hour == "eight") {

                        if ($scope.globalDateInformation[$scope.hour].state[0] == 3) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 3) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[2] == 3) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 3) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;    
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 3) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;    
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 3) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;    
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;

                       
                        }

                        
                        if ($scope.globalDateInformation[$scope.hour].state[2] == 0 &&
                            $scope.globalDateInformation[$scope.hour].state[3] == 0 && 
                            $scope.globalDateInformation[$scope.hour].state[4] == 0 && 
                            $scope.globalDateInformation[$scope.hour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0) {

                                $scope.bookSession58 = true;
                                $scope.bookSession48 = true;
                                $scope.bookSession38 = true;
                                $scope.bookSession28 = true;

                        }
                        if (
                            $scope.globalDateInformation[$scope.hour].state[3] == 0 && 
                            $scope.globalDateInformation[$scope.hour].state[4] == 0 && 
                            $scope.globalDateInformation[$scope.hour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0 &&
                            $scope.globalDateInformation['nine'].state[1]      == 0 ) {

                                $scope.bookSession58 = true;
                                $scope.bookSession48 = true;
                                $scope.bookSession38 = true;

                        }
                        if ( 
                            $scope.globalDateInformation[$scope.hour].state[4] == 0 && 
                            $scope.globalDateInformation[$scope.hour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0 &&
                            $scope.globalDateInformation['nine'].state[1]      == 0 &&
                            $scope.globalDateInformation['nine'].state[2]      == 0 ) {

                                $scope.bookSession58 = true;
                                $scope.bookSession48 = true;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0 &&
                            $scope.globalDateInformation['nine'].state[1]      == 0 &&
                            $scope.globalDateInformation['nine'].state[2]      == 0 &&
                            $scope.globalDateInformation['nine'].state[3]      == 0 &&
                            $scope.globalDateInformation['nine'].state[4]      == 0 ) {

                                $scope.bookSession58 = true;

                        }

                        if ($scope.globalDateInformation['nine'].state[0] == 3) {

                            $scope.bookSession58 = false;
                            $scope.bookSession48 = false;
                            $scope.bookSession38 = false;
                            $scope.bookSession28 = false;

                        }
                    }

                    if ($scope.hour == "nine") {

                        if ($scope.globalDateInformation[$scope.hour].state[0] == 3) {

                            $scope.bookSession9 = false;
                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 3) {


                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;

                        }

                        if ($scope.globalDateInformation[$scope.hour].state[2] == 3) {

                            $scope.bookSession29 = false;
                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 3) {

                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 3) {

                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 3) {

                            $scope.bookSession59 = false;


                        }

                        if (data.data.date[$scope.hour].state[3] === 3) {

                            $scope.discovery800AMSelected = false;
                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookCheckUp19 = false;
                            $scope.bookCheckUp29 = false;

                        }

                    }

                }
                if ($scope.appointmentType == "session") { 


                    if ($scope.hour == "eight") {

                        if ($scope.globalDateInformation[$scope.hour].state[0] == 2) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 2) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[2] == 2) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 2) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;    
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 2) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;    
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 2) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;    
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;

                       
                        }

                        
                        if ($scope.globalDateInformation[$scope.hour].state[2] == 0 &&
                            $scope.globalDateInformation[$scope.hour].state[3] == 0 && 
                            $scope.globalDateInformation[$scope.hour].state[4] == 0 && 
                            $scope.globalDateInformation[$scope.hour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0) {

                                $scope.bookSession58 = true;
                                $scope.bookSession48 = true;
                                $scope.bookSession38 = true;
                                $scope.bookSession28 = true;

                        }
                        if (
                            $scope.globalDateInformation[$scope.hour].state[3] == 0 && 
                            $scope.globalDateInformation[$scope.hour].state[4] == 0 && 
                            $scope.globalDateInformation[$scope.hour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0 &&
                            $scope.globalDateInformation['nine'].state[1]      == 0 ) {

                                $scope.bookSession58 = true;
                                $scope.bookSession48 = true;
                                $scope.bookSession38 = true;

                        }
                        if ( 
                            $scope.globalDateInformation[$scope.hour].state[4] == 0 && 
                            $scope.globalDateInformation[$scope.hour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0 &&
                            $scope.globalDateInformation['nine'].state[1]      == 0 &&
                            $scope.globalDateInformation['nine'].state[2]      == 0 ) {

                                $scope.bookSession58 = true;
                                $scope.bookSession48 = true;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0 &&
                            $scope.globalDateInformation['nine'].state[1]      == 0 &&
                            $scope.globalDateInformation['nine'].state[2]      == 0 &&
                            $scope.globalDateInformation['nine'].state[3]      == 0 &&
                            $scope.globalDateInformation['nine'].state[4]      == 0 ) {

                                $scope.bookSession58 = true;

                        }

                        if ($scope.globalDateInformation['nine'].state[0] == 2) {

                            $scope.bookSession58 = false;
                            $scope.bookSession48 = false;
                            $scope.bookSession38 = false;
                            $scope.bookSession28 = false;

                        }
                    }

                    if ($scope.hour == "nine") {

                        if ($scope.globalDateInformation[$scope.hour].state[0] == 2) {

                            $scope.bookSession9 = false;
                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[1] == 2) {


                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;

                        }

                        if ($scope.globalDateInformation[$scope.hour].state[2] == 2) {

                            $scope.bookSession29 = false;
                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[3] == 2) {

                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;


                        }
                        if ($scope.globalDateInformation[$scope.hour].state[4] == 2) {

                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;

                        }
                        if ($scope.globalDateInformation[$scope.hour].state[5] == 2) {

                            $scope.bookSession59 = false;


                        }

                        if (data.data.date[$scope.hour].state[3] === 2) {

                            $scope.discovery800AMSelected = false;
                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookCheckUp19 = false;
                            $scope.bookCheckUp29 = false;

                        }

                    }

                }

            })

        }

    })

}());