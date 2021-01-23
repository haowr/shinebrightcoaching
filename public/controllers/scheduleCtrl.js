(function(){

    var app = angular.module('scheduleController',['userServices','authServices'])

    app.config(function(){
        console.log(
            "Schedule Controller Loaded..."
        )
    })

    app.controller('scheduleCtrl', function($scope,$http,$location,User,$timeout,$rootScope,Auth,$window){
               
        $rootScope.$on('$routeChangeStart', function () {
     

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

            
            $scope.loadingBooking           = false;
            $scope.loadingBooking1          = false;
            $scope.loadingBooking2          = false;
            $scope.loadingBooking3          = false;
            $scope.loadingBooking4          = false;
            $scope.loadingBooking5          = false;
            $scope.loadingBookingDeletion   = false;
            $scope.loadingClientBookings    = true;

            $scope.checkUpData      = {

            }
            $scope.sessionData      = {
            }
     
            $scope.timeData         = {
    
            }
            $scope.discoveryData    = {
    
            }
            $scope.checkupData      = {
    
            }
            $scope.dateData         = {
    
            }
            $scope.dateDataForUser = {
                date: "",
                time: "",
                id: ""
            }
            $scope.hour = ""

            $scope.openModal = function (size) {

                if(size == 'small'){
    
                    $('#modal1').modal('open');
    
    
                }else{
    
                    $('#modal1large').modal('open');
    
                }
                
            }
    
            $scope.selectTime = function (time, booked) {


                $scope.isCurrentlyBooked      = booked;
    
                $scope.discovery800AMIsBooked = false;
                $scope.discovery810AMIsBooked = false;
                $scope.discovery820AMIsBooked = false;
                $scope.discovery830AMIsBooked = false;
                $scope.discovery840AMIsBooked = false;
                $scope.discovery850AMIsBooked = false;
                $scope.session800AMIsBooked = false;
                $scope.session810AMIsBooked = false;
                $scope.session820AMIsBooked = false;
                $scope.session830AMIsBooked = false;
                $scope.session840AMIsBooked = false;
                $scope.session850AMIsBooked = false;
                $scope.checkUp800AMIsBooked = false;
                $scope.checkUp810AMIsBooked = false;
                $scope.checkUp820AMIsBooked = false;
                $scope.checkUp830AMIsBooked = false;
                $scope.checkUp840AMIsBooked = false;
                $scope.checkUp850AMIsBooked = false;
                $scope.discovery900AMIsBooked = false;
                $scope.discovery910AMIsBooked = false;
                $scope.discovery920AMIsBooked = false;
                $scope.discovery930AMIsBooked = false;
                $scope.discovery940AMIsBooked = false;
                $scope.discovery950AMIsBooked = false;
                $scope.session900AMIsBooked = false;
                $scope.session910AMIsBooked = false;
                $scope.session920AMIsBooked = false;
                $scope.session930AMIsBooked = false;
                $scope.session940AMIsBooked = false;
                $scope.session950AMIsBooked = false;
                $scope.checkUp900AMIsBooked = false;
                $scope.checkUp910AMIsBooked = false;
                $scope.checkUp920AMIsBooked = false;
                $scope.checkUp930AMIsBooked = false;
                $scope.checkUp940AMIsBooked = false;
                $scope.checkUp950AMIsBooked = false;
    
    
                if (time == "8:10") {
    
                    if (!booked) {
    
                        $scope.discovery810AMSelected = true;
                        $scope.discovery820AMSelected = false;
                        $scope.discovery830AMSelected = false;
                        $scope.discovery840AMSelected = false;
                        $scope.discovery850AMSelected = false;
                        $scope.discovery800AMSelected = false;
                        $scope.session800AMSelected = false;
                        $scope.session810AMSelected = true;
                        $scope.session820AMSelected = false;
                        $scope.session830AMSelected = false;
                        $scope.session840AMSelected = false;
                        $scope.session850AMSelected = false;
                        $scope.checkUp800AMSelected = false;
                        $scope.checkUp810AMSelected = true;
                        $scope.checkUp820AMSelected = false;
                        $scope.checkUp830AMSelected = false;
                        $scope.checkUp840AMSelected = false;
                        $scope.checkUp850AMSelected = false;
                        $scope.audio.play();
                        $scope.discoveryData.time = "8:10am"
                        $scope.sessionData.time = "8:10am"
                        $scope.checkUpData.time = "8:10am"
    
                    } else {
    
                        $scope.discovery810AMIsBooked   = true;
                        $scope.session810AMIsBooked     = true;
                        $scope.checkUp810AMIsBooked     = true;
    
                    }
    
                }
                if (time == "8:20") {
    
                    if (!booked) {
    
                        $scope.discovery810AMSelected = false;
                        $scope.discovery820AMSelected = true;
                        $scope.discovery830AMSelected = false;
                        $scope.discovery840AMSelected = false;
                        $scope.discovery850AMSelected = false;
                        $scope.discovery800AMSelected = false;
                        $scope.session800AMSelected = false;
                        $scope.session810AMSelected = false;
                        $scope.session820AMSelected = true;
                        $scope.session830AMSelected = false;
                        $scope.session840AMSelected = false;
                        $scope.session850AMSelected = false;
                        $scope.checkUp800AMSelected = false;
                        $scope.checkUp810AMSelected = false;
                        $scope.checkUp820AMSelected = true;
                        $scope.checkUp830AMSelected = false;
                        $scope.checkUp840AMSelected = false;
                        $scope.checkUp850AMSelected = false;
                        $scope.audio.play();
                        $scope.discoveryData.time   = "8:20am"
                        $scope.sessionData.time     = "8:20am"
                        $scope.checkUpData.time     = "8:20am"
    
    
    
    
                    } else {
    
                        $scope.discovery820AMIsBooked   = true;
                        $scope.session820AMIsBooked     = true;
                        $scope.checkUp820AMIsBooked     = true;
                        $scope.shinebrighterror.play()
    
    
                    }
    
                }
                if (time == "8:30") {
    
                    if (!booked) {
    
                        $scope.discovery810AMSelected = false;
                        $scope.discovery820AMSelected = false;
                        $scope.discovery830AMSelected = true;
                        $scope.discovery840AMSelected = false;
                        $scope.discovery850AMSelected = false;
                        $scope.discovery800AMSelected = false;
                        $scope.session800AMSelected = false;
                        $scope.session810AMSelected = false;
                        $scope.session820AMSelected = false;
                        $scope.session830AMSelected = true;
                        $scope.session840AMSelected = false;
                        $scope.session850AMSelected = false;
                        $scope.checkUp800AMSelected = false;
                        $scope.checkUp810AMSelected = false;
                        $scope.checkUp820AMSelected = false;
                        $scope.checkUp830AMSelected = true;
                        $scope.checkUp840AMSelected = false;
                        $scope.checkUp850AMSelected = false;
                        $scope.audio.play();
                        $scope.discoveryData.time   = "8:30am"
                        $scope.sessionData.time     = "8:30am"
                        $scope.checkUpData.time     = "8:30am"
    
                    } else {
    
                        $scope.discovery830AMIsBooked   = true;
                        $scope.session830AMIsBooked     = true;
                        $scope.checkUp830AMIsBooked     = true;
                        $scope.shinebrighterror.play()
    
                    }
    
                }
                if (time == "8:40") {
    
                    if (!booked) {
    
                        $scope.discovery810AMSelected = false;
                        $scope.discovery820AMSelected = false;
                        $scope.discovery830AMSelected = false;
                        $scope.discovery840AMSelected = true;
                        $scope.discovery850AMSelected = false;
                        $scope.discovery800AMSelected = false;
                        $scope.session800AMSelected = false;
                        $scope.session810AMSelected = false;
                        $scope.session820AMSelected = false;
                        $scope.session830AMSelected = false;
                        $scope.session840AMSelected = true;
                        $scope.session850AMSelected = false;
                        $scope.checkUp800AMSelected = false;
                        $scope.checkUp810AMSelected = false;
                        $scope.checkUp820AMSelected = false;
                        $scope.checkUp830AMSelected = false;
                        $scope.checkUp840AMSelected = true;
                        $scope.checkUp850AMSelected = false;
                        $scope.audio.play();
                        $scope.discoveryData.time   = "8:40am"
                        $scope.sessionData.time     = "8:40am"
                        $scope.checkUpData.time     = "8:40am"
    
    
    
    
                    } else {
    
                        $scope.discovery840AMIsBooked   = true;
                        $scope.session840AMIsBooked     = true;
                        $scope.checkUp840AMIsBooked     = true;
                        $scope.shinebrighterror.play()
    
                    }
    
                }
                if (time == "8:50") {
    
                    if (!booked) {
    
                        $scope.discovery810AMSelected = false;
                        $scope.discovery820AMSelected = false;
                        $scope.discovery830AMSelected = false;
                        $scope.discovery840AMSelected = false;
                        $scope.discovery850AMSelected = true;
                        $scope.discovery800AMSelected = false;
                        $scope.session800AMSelected = false;
                        $scope.session810AMSelected = false;
                        $scope.session820AMSelected = false;
                        $scope.session830AMSelected = false;
                        $scope.session840AMSelected = false;
                        $scope.session850AMSelected = true;
                        $scope.checkUp800AMSelected = false;
                        $scope.checkUp810AMSelected = false;
                        $scope.checkUp820AMSelected = false;
                        $scope.checkUp830AMSelected = false;
                        $scope.checkUp840AMSelected = false;
                        $scope.checkUp850AMSelected = true;
                        $scope.audio.play();
                        $scope.discoveryData.time   = "8:50am"
                        $scope.sessionData.time     = "8:50am"
                        $scope.checkUpData.time     = "8:50am"
    
    
    
                    } else {
    
                        $scope.discovery850AMIsBooked   = true;
                        $scope.session850AMIsBooked     = true;
                        $scope.checkUp850AMIsBooked     = true;
                        $scope.shinebrighterror.play()
    
    
                    }
    
                }
                if (time == "8:00") {
    
                    if (!booked) {
    
                        $scope.discovery810AMSelected = false;
                        $scope.discovery820AMSelected = false;
                        $scope.discovery830AMSelected = false;
                        $scope.discovery840AMSelected = false;
                        $scope.discovery850AMSelected = false;
                        $scope.discovery800AMSelected = true;
                        $scope.session800AMSelected = true;
                        $scope.session810AMSelected = false;
                        $scope.session820AMSelected = false;
                        $scope.session830AMSelected = false;
                        $scope.session840AMSelected = false;
                        $scope.session850AMSelected = false;
                        $scope.checkUp800AMSelected = true;
                        $scope.checkUp810AMSelected = false;
                        $scope.checkUp820AMSelected = false;
                        $scope.checkUp830AMSelected = false;
                        $scope.checkUp840AMSelected = false;
                        $scope.checkUp850AMSelected = false;
                        $scope.audio.play();
                        $scope.discoveryData.time   = "8:00am"
                        $scope.sessionData.time     = "8:00am"
                        $scope.checkUpData.time     = "8:00am"
    
    
    
                    } else {
    
                        $scope.discovery800AMIsBooked   = true;
                        $scope.session800AMIsBooked     = true;
                        $scope.checkUp800AMIsBooked     = true;
                        $scope.shinebrighterror.play()
                    }
    
                }
    
                if (time == "9:10") {
    
                    if (!booked) {
    
                        $scope.discovery910AMSelected = true;
                        $scope.discovery920AMSelected = false;
                        $scope.discovery930AMSelected = false;
                        $scope.discovery940AMSelected = false;
                        $scope.discovery950AMSelected = false;
                        $scope.discovery900AMSelected = false;
                        $scope.session900AMSelected = false;
                        $scope.session910AMSelected = true;
                        $scope.session920AMSelected = false;
                        $scope.session930AMSelected = false;
                        $scope.session940AMSelected = false;
                        $scope.session950AMSelected = false;
                        $scope.checkUp900AMSelected = false;
                        $scope.checkUp910AMSelected = true;
                        $scope.checkUp920AMSelected = false;
                        $scope.checkUp930AMSelected = false;
                        $scope.checkUp940AMSelected = false;
                        $scope.checkUp950AMSelected = false;
                        $scope.audio.play();
                        $scope.discoveryData.time   = "9:10am"
                        $scope.sessionData.time     = "9:10am"
                        $scope.checkUpData.time     = "9:10am"
    
    
    
                    } else {
    
                        $scope.discovery910AMIsBooked   = true;
                        $scope.session910AMIsBooked     = true;
                        $scope.checkUp910AMIsBooked     = true;
    
                    }
    
                }
                if (time == "9:20") {
                    console.log("here")
    
                    if (!booked) {
    
                        $scope.discovery910AMSelected = false;
                        $scope.discovery920AMSelected = true;
                        $scope.discovery930AMSelected = false;
                        $scope.discovery940AMSelected = false;
                        $scope.discovery950AMSelected = false;
                        $scope.discovery900AMSelected = false;
                        $scope.session900AMSelected = false;
                        $scope.session910AMSelected = false;
                        $scope.session920AMSelected = true;
                        $scope.session930AMSelected = false;
                        $scope.session940AMSelected = false;
                        $scope.session950AMSelected = false;
                        $scope.checkUp900AMSelected = false;
                        $scope.checkUp910AMSelected = false;
                        $scope.checkUp920AMSelected = true;
                        $scope.checkUp930AMSelected = false;
                        $scope.checkUp940AMSelected = false;
                        $scope.checkUp950AMSelected = false;
                        $scope.audio.play();
                        $scope.discoveryData.time   = "9:20am"
                        $scope.sessionData.time     = "9:20am"
                        $scope.checkUpData.time     = "9:20am"
    
    
    
                    } else {
    
                        $scope.discovery920AMIsBooked   = true;
                        $scope.session920AMIsBooked     = true;
                        $scope.checkUp920AMIsBooked     = true;
    
                    }
    
                }
                if (time == "9:30") {
                    console.log("here")
    
                    if (!booked) {
    
                        $scope.discovery910AMSelected = false;
                        $scope.discovery920AMSelected = false;
                        $scope.discovery930AMSelected = true;
                        $scope.discovery940AMSelected = false;
                        $scope.discovery950AMSelected = false;
                        $scope.discovery900AMSelected = false;
                        $scope.session900AMSelected = false;
                        $scope.session910AMSelected = false;
                        $scope.session920AMSelected = false;
                        $scope.session930AMSelected = true;
                        $scope.session940AMSelected = false;
                        $scope.session950AMSelected = false;
                        $scope.checkUp900AMSelected = false;
                        $scope.checkUp910AMSelected = false;
                        $scope.checkUp920AMSelected = false;
                        $scope.checkUp930AMSelected = true;
                        $scope.checkUp940AMSelected = false;
                        $scope.checkUp950AMSelected = false;
                        $scope.audio.play();
                        $scope.discoveryData.time   = "9:30am"
                        $scope.sessionData.time     = "9:30am"
                        $scope.checkUpData.time     = "9:30am"
    
    
                    } else {
    
                        $scope.discovery930AMIsBooked   = true;
                        $scope.session930AMIsBooked     = true;
                        $scope.checkUp930AMIsBooked     = true;
    
                    }
    
                }
                if (time == "9:40") {
                    console.log("here")
    
                    if (!booked) {
    
                        $scope.discovery910AMSelected = false;
                        $scope.discovery920AMSelected = false;
                        $scope.discovery930AMSelected = false;
                        $scope.discovery940AMSelected = true;
                        $scope.discovery950AMSelected = false;
                        $scope.discovery900AMSelected = false;
                        $scope.session900AMSelected = false;
                        $scope.session910AMSelected = false;
                        $scope.session920AMSelected = false;
                        $scope.session930AMSelected = false;
                        $scope.session940AMSelected = true;
                        $scope.session950AMSelected = false;
                        $scope.checkUp900AMSelected = false;
                        $scope.checkUp910AMSelected = false;
                        $scope.checkUp920AMSelected = false;
                        $scope.checkUp930AMSelected = false;
                        $scope.checkUp940AMSelected = true;
                        $scope.checkUp950AMSelected = false;
                        $scope.audio.play();
                        $scope.discoveryData.time   = "9:40am"
                        $scope.sessionData.time     = "9:40am"
                        $scope.checkUpData.time     = "9:40am"
    
    
                    } else {
    
                        $scope.discovery940AMIsBooked   = true;
                        $scope.session940AMIsBooked     = true;
                        $scope.checkUp940AMIsBooked     = true;
    
                    }
    
                }
                if (time == "9:50") {
                    console.log("here")
                    if (!booked) {
    
                        $scope.discovery910AMSelected = false;
                        $scope.discovery920AMSelected = false;
                        $scope.discovery930AMSelected = false;
                        $scope.discovery940AMSelected = false;
                        $scope.discovery950AMSelected = true;
                        $scope.discovery900AMSelected = false;
                        $scope.session900AMSelected = false;
                        $scope.session910AMSelected = false;
                        $scope.session920AMSelected = false;
                        $scope.session930AMSelected = false;
                        $scope.session940AMSelected = false;
                        $scope.session950AMSelected = true;
                        $scope.checkUp900AMSelected = false;
                        $scope.checkUp910AMSelected = false;
                        $scope.checkUp920AMSelected = false;
                        $scope.checkUp930AMSelected = false;
                        $scope.checkUp940AMSelected = false;
                        $scope.checkUp950AMSelected = true;
                        $scope.audio.play();
                        $scope.discoveryData.time   = "9:50am"
                        $scope.sessionData.time     = "9:50am"
                        $scope.checkUpData.time     = "9:50am"
    
    
                    } else {
    
                        $scope.discovery950AMIsBooked   = true;
                        $scope.session950AMIsBooked     = true;
                        $scope.checkUp950AMIsBooked     = true;
                        console.log('HErEx',$scope.checkUp950AMSelected)
                        
    
                    }
    
                }
                if (time == "9:00") {
    
                    if (!booked) {
    
                        $scope.discovery910AMSelected = false;
                        $scope.discovery920AMSelected = false;
                        $scope.discovery930AMSelected = false;
                        $scope.discovery940AMSelected = false;
                        $scope.discovery950AMSelected = false;
                        $scope.discovery900AMSelected = true;
                        $scope.session900AMSelected = true;
                        $scope.session910AMSelected = false;
                        $scope.session920AMSelected = false;
                        $scope.session930AMSelected = false;
                        $scope.session940AMSelected = false;
                        $scope.session950AMSelected = false;
                        $scope.checkUp900AMSelected = true;
                        $scope.checkUp910AMSelected = false;
                        $scope.checkUp920AMSelected = false;
                        $scope.checkUp930AMSelected = false;
                        $scope.checkUp940AMSelected = false;
                        $scope.checkUp950AMSelected = false;
                        $scope.audio.play();
                        $scope.discoveryData.time   = "9:00am"
                        $scope.sessionData.time     = "9:00am"
                        $scope.checkUpData.time     = "9:00am"
    
    
                    } else {
    
                        $scope.discovery900AMIsBooked   = true;
                        $scope.session900AMIsBooked     = true;
                        $scope.checkUp900AMIsBooked     = true;
    
                    }
    
                }
    
    
            }
            console.log(
                "reload?"
            )

          

        $scope.openScheduledJobPage = function (currentdate, id, datecondensed) {

            $scope.id               = id
            $scope.dateCondensed    = datecondensed
           // 
           $location.path("/schedule/"+$scope.dateCondensed)
           $window.localStorage.setItem('dateCondensed', $scope.dateCondensed)
           $window.localStorage.setItem('currentDate', "2020-22-30")

            console.log("openScheduledJobPage")

            if (!$scope.scheduledJobPageOpen) {
                $scope.schedulePageOpen     = false;

                $scope.scheduledJobPageOpen = true;
                $scope.currentDate          = "2020-22-30"

               

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
                        $location.path("/datepage/discovery");


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

                        $location.path("/datepage/session/eight");


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

                        $location.path("/datepage/session/nine");


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

        $scope.submitSession = function (hour) {

            if (!$scope.isCurrentlyBooked){

                $scope.shinebrightloading.play();

                    if ($scope.sessionData.time == "8:00am" || $scope.sessionData.time == "9:00am" ||
                        $scope.sessionData.time == "10:00am" || $scope.sessionData.time == "11:00am" ||
                        $scope.sessionData.time == "12:00pm" || $scope.sessionData.time == "1:00pm" ||
                        $scope.sessionData.time == "2:00pm" || $scope.sessionData.time == "3:00pm") {


                
                        $scope.dateData.hour    = hour;
                        $scope.dateData.id      = "5bf4f0a4b8f53129ecbc13a0";

                        $scope.loadingBooking   = true;

                        User.getDate("5bf4f0a4b8f53129ecbc13a0").then(function (data) {


                            if (hour == 'eight') {

                                data.data.date[hour].state[0]           = 3;
                                data.data.date[hour].state[1]           = 3;
                                data.data.date[hour].state[2]           = 3;
                                data.data.date[hour].state[3]           = 3;
                                data.data.date[hour].state[4]           = 3;

                                $scope.dateData.dateInfo                = data.data.date[hour].state

                                console.log("Date Date", $scope.dateData)

                                User.updateDate($scope.dateData).then(function (data) {

                                    $scope.dateDataForUser.date = $scope.currentDate;

                                    $timeout(function () {

                                        if (data.data.date[hour].state[0] === 3) {

                                            $scope.bookSession8  = false;

                                            $timeout(function(){

                                                $scope.bookSession18 = false;

                                            $timeout(function () {

                                                $scope.bookSession28 = false;

                                                $timeout(function () {

                                                    $scope.bookSession38 = false;

                                                    $timeout(function () {

                                                        $scope.bookSession48 = false;

                                                        
                                                            $timeout(function () {

                                                                $scope.loadingBooking = false;
                                                                $scope.shinebrightsuccess.play()

                                                            }, 500)


                                                    }, 500)

                                                }, 500)

                                            }, 500)

                                            },500)

                                        }

                                    }, 1000)

                                    if ($scope.sessionData.time == "8:00am") {

                                        $scope.dateDataForUser.time = "8:00am - 8:50am"
                                        $scope.dateDataForUser.hour = "eight";
                                        $scope.dateDataForUser.slot = 0;

                                    }

                                    $scope.dateDataForUser.appointmentType = "Session!";
                                    $scope.dateDataForUser.id = "5f3c30e99f40852b3663e127";
                                    
                                    User.addBooking($scope.dateDataForUser).then(function (data) {

                                        console.log(data)
                                        if (data.data.user.calender["88"][22]) {
            
                                            $scope.booked1222 = true;
                                            //console.log("hero")
                                        }
                                    
                                    })
                                    
                                })

                            }

                            
                            if (hour == 'nine') {


                                $scope.dateData.dateInfo                = data.data.date[hour].state

                                User.updateDate($scope.dateData).then(function (data) {

                                    $scope.dateDataForUser.date = $scope.currentDate;

                                    $timeout(function () {

                                        if (data.data.date[hour].state[0] === 3) {

                                            $scope.bookSession9  = false;

                                            $timeout(function(){

                                                $scope.bookSession19 = false;

                                            $timeout(function () {

                                                $scope.bookSession29 = false;

                                                $timeout(function () {

                                                    $scope.bookSession39 = false;

                                                    $timeout(function () {

                                                        $scope.bookSession49 = false;

                                                      
                                                            $timeout(function () {

                                                                $scope.loadingBooking = false;
                                                                $scope.shinebrightsuccess.play()

                                                            }, 500)


                                                    }, 500)

                                                }, 500)

                                            }, 500)

                                            },500)

                                        }

                                    }, 1000)

                                    if ($scope.sessionData.time == "9:00am") {

                                        $scope.dateDataForUser.time = "9:00am - 9:50am"
                                        $scope.dateDataForUser.hour = "nine";
                                        $scope.dateDataForUser.slot = 0;

                                    }

                                    $scope.dateDataForUser.appointmentType = "Session!";
                                    $scope.dateDataForUser.id = $scope.idFromLocalStorage;
                                    
                                    User.addBooking($scope.dateDataForUser).then(function (data) {

                                        if (data.data.user.calender["88"][22]) {
            
                                            $scope.booked1222 = true;
                                        }
                                    
            
                                    })
                                    

                                })
                            }

                        })

                    }
                    if ($scope.sessionData.time == "8:10am" || $scope.sessionData.time == "9:10am" ||
                        $scope.sessionData.time == "10:10am" || $scope.sessionData.time == "11:10am" ||
                        $scope.sessionData.time == "12:10pm" || $scope.sessionData.time == "1:10pm" ||
                        $scope.sessionData.time == "2:10pm" || $scope.sessionData.time == "3:10pm") {

        
                        $scope.dateData.hour    = hour;
                        $scope.dateData.id      = $scope.id
                        $scope.bookSession      = false;
                        $scope.loadingBooking1  = true;

                        
                        User.getDate("5bf4f0a4b8f53129ecbc13a0").then(function (data) {

                            if (hour == 'eight') {

                                data.data.date[hour].state[1]           = 3;
                                data.data.date[hour].state[2]           = 3;
                                data.data.date[hour].state[3]           = 3;
                                data.data.date[hour].state[4]           = 3;
                                data.data.date[hour].state[5]           = 3;
                                //data.data.date['nine'].state[0]          = 2;

                                $scope.dateData.dateInfo                = data.data.date[hour].state
                                //$scope.dateData.nexthour                = 'nine'
                                //$scope.dateData.dateInfoNextHour        = data.data.date['nine'].state

                                User.updateDate($scope.dateData).then(function (data) {

                                    $scope.dateDataForUser.date = $scope.currentDate;

                                    $timeout(function () {

                                        if (data.data.date[hour].state[1] === 3) {

                                            $scope.bookSession8 = false;

                                            $timeout(function(){

                                            $scope.bookSession18 = false;

                                            $timeout(function () {

                                                $scope.bookSession28 = false;

                                                $timeout(function () {

                                                    $scope.bookSession38 = false;

                                                    $timeout(function () {

                                                        $scope.bookSession48 = false;

                                                        $timeout(function () {

                                                            $scope.bookSession58 = false;

                                                            $timeout(function () {

                                                                $scope.loadingBooking1 = false;
                                                                $scope.shinebrightsuccess.play()

                                                            }, 500)

                                                        }, 500)

                                                    }, 500)

                                                }, 500)

                                            }, 500)

                                            }, 500)

                                        }

                                    }, 1000)

                                    if ($scope.sessionData.time == "8:10am") {

                                        $scope.dateDataForUser.time = "8:10am - 9:00am"
                                        $scope.dateDataForUser.hour = "eight";
                                        $scope.dateDataForUser.slot = 1;

                                    }

                                    $scope.dateDataForUser.appointmentType = "Session!";
                                    $scope.dateDataForUser.id = $scope.idFromLocalStorage;
                                    
                                    User.addBooking($scope.dateDataForUser).then(function (data) {

                                        if (data.data.user.calender["88"][22]) {
            
                                            $scope.booked1222 = true;

                                        }
                                
                                    })
                                
                                })
                                
                            }

                            
                            if (hour == 'nine') {

                                //data.data.date[hour].state[0]           = 2;
                                data.data.date[hour].state[1]           = 3;
                                data.data.date[hour].state[2]           = 3;
                                data.data.date[hour].state[3]           = 3;
                                data.data.date[hour].state[4]           = 3;
                                data.data.date[hour].state[5]           = 3;
                               // data.data.date['nine'].state[0]          = 2;

                                $scope.dateData.dateInfo                = data.data.date[hour].state
                                //$scope.dateData.nexthour                = 'nine'
                                //$scope.dateData.dateInfoNextHour        = data.data.date['nine'].state

                                User.updateDate($scope.dateData).then(function (data) {

                                    $scope.dateDataForUser.date = $scope.currentDate;

                                    $timeout(function () {

                                        if (data.data.date[hour].state[1] === 3) {


                                            $scope.bookSession9 = false;

                                            $timeout(function(){
                                          
                                            $scope.bookSession19 = false;

                                            $timeout(function () {

                                                $scope.bookSession29 = false;

                                                $timeout(function () {

                                                    $scope.bookSession39 = false;

                                                    $timeout(function () {

                                                        $scope.bookSession49 = false;

                                                        $timeout(function () {

                                                            $scope.bookSession59 = false;

                                                            $timeout(function () {

                                                                $scope.loadingBooking1 = false;
                                                                $scope.shinebrightsuccess.play()

                                                            }, 500)

                                                        }, 500)

                                                    }, 500)

                                                }, 500)

                                            }, 500)

                                        },500)

                                        }

                                    }, 1000)

                                    if ($scope.sessionData.time == "9:10am") {

                                        $scope.dateDataForUser.time = "9:10am - 10:00am"
                                        $scope.dateDataForUser.hour = "nine";
                                        $scope.dateDataForUser.slot = 1;

                                    }

                                    $scope.dateDataForUser.appointmentType = "Session!";
                                    $scope.dateDataForUser.id = $scope.idFromLocalStorage;
                                    
                                    User.addBooking($scope.dateDataForUser).then(function (data) {

         
                                        if (data.data.user.calender["88"][22]) {
            
                                            $scope.booked1222 = true;

                                        }
                                    
                                    })
                                    
                                })
                            }

                        })

                    }
                    if ($scope.sessionData.time == "8:20am" || $scope.sessionData.time == "9:20am" ||
                        $scope.sessionData.time == "10:20am" || $scope.sessionData.time == "11:20am" ||
                        $scope.sessionData.time == "12:20pm" || $scope.sessionData.time == "1:20pm" ||
                        $scope.sessionData.time == "2:20pm" || $scope.sessionData.time == "3:20pm") {


                        $scope.dateData.hour    = hour;
                        $scope.dateData.id      = $scope.id

                        $scope.bookSession      = false;
                        $scope.loadingBooking2  = true;

                        User.getDate("5bf4f0a4b8f53129ecbc13a0").then(function (data) {

                            if (hour == 'eight') {

                                data.data.date[hour].state[0]           = 3;
                                data.data.date[hour].state[1]           = 3;
                                data.data.date[hour].state[2]           = 3;
                                data.data.date[hour].state[3]           = 3;
                                data.data.date[hour].state[4]           = 3;
                                data.data.date[hour].state[5]           = 3;
                                data.data.date['nine'].state[0]         = 3;

                                $scope.dateData.dateInfo                = data.data.date[hour].state
                                $scope.dateData.nexthour                = 'nine'
                                $scope.dateData.dateInfoNextHour        = data.data.date['nine'].state

                                User.updateDateNextHour($scope.dateData).then(function (data) {

                                    $scope.dateDataForUser.date = $scope.currentDate;

                                    $timeout(function () {

                                        if (data.data.date[hour].state[4] === 3) {


                                            $scope.bookSession8 = false;

                                            $timeout(function(){

                                            $scope.bookSession18 = false;

                                            $timeout(function () {

                                                $scope.bookSession28 = false;

                                                $timeout(function () {

                                                    $scope.bookSession38 = false;

                                                    $timeout(function () {

                                                        $scope.bookSession48 = false;

                                                        $timeout(function () {

                                                            $scope.bookSession58 = false;

                                                            $timeout(function () {

                                                                $scope.loadingBooking2 = false;
                                                                $scope.shinebrightsuccess.play()

                                                            }, 500)

                                                        }, 500)

                                                    }, 500)

                                                }, 500)

                                            }, 500)

                                        },500)

                                        }

                                    }, 1000)

                                    if ($scope.sessionData.time == "8:20am") {

                                        $scope.dateDataForUser.time = "8:20am - 9:10am"
                                        $scope.dateDataForUser.hour = "eight";
                                        $scope.dateDataForUser.slot = 2;

                                    }

                                    $scope.dateDataForUser.appointmentType = "Session!";
                                    $scope.dateDataForUser.id = $scope.idFromLocalStorage;
                                    
                                    User.addBooking($scope.dateDataForUser).then(function (data) {

                                        if (data.data.user.calender["88"][22]) {
            
                                            $scope.booked1222 = true;

                                        }
                                
                                    })
                                
                                })

                            }

                            
                            if (hour == 'nine') {

                                data.data.date[hour].state[0]           = 3;
                                data.data.date[hour].state[1]           = 3;
                                data.data.date[hour].state[2]           = 3;
                                data.data.date[hour].state[3]           = 3;
                                data.data.date[hour].state[4]           = 3;
                                data.data.date[hour].state[5]           = 3;
                                data.data.date['nine'].state[0]          = 3;

                                $scope.dateData.dateInfo                = data.data.date[hour].state
                                $scope.dateData.nexthour                = 'nine'
                                $scope.dateData.dateInfoNextHour        = data.data.date['nine'].state

                                User.updateDateNextHour($scope.dateData).then(function (data) {

                                    $scope.dateDataForUser.date = $scope.currentDate;

                                    $timeout(function () {

                                        if (data.data.date[hour].state[4] === 3) {

                                            $scope.bookSession9 = false;

                                            $timeout(function(){

                                            $scope.bookSession19 = false;

                                            $timeout(function () {

                                                $scope.bookSession29 = false;

                                                $timeout(function () {

                                                    $scope.bookSession39 = false;

                                                    $timeout(function () {

                                                        $scope.bookSession49 = false;

                                                        $timeout(function () {

                                                            $scope.bookSession59 = false;

                                                            $timeout(function () {

                                                                $scope.loadingBooking2 = false;
                                                                $scope.shinebrightsuccess.play()

                                                            }, 500)

                                                        }, 500)

                                                    }, 500)

                                                }, 500)

                                            }, 500)

                                        },500)

                                        }

                                    }, 1000)

                                    if ($scope.discoveryData.time == "9:20am") {

                                        $scope.dateDataForUser.time = "9:20am - 10:10am"
                                        $scope.dateDataForUser.hour = "nine";
                                        $scope.dateDataForUser.slot = 2;

                                    }

                                    $scope.dateDataForUser.appointmentType = "Session!";
                                    $scope.dateDataForUser.id = $scope.idFromLocalStorage;
                                    
                                    User.addBooking($scope.dateDataForUser).then(function (data) {

                                        if (data.data.user.calender["88"][22]) {
            
                                            $scope.booked1222 = true;

                                        }
                                    
            
                                    })
                                    

                                })
                            }

                        })

                    }
                    if ($scope.sessionData.time == "8:30am" || $scope.sessionData.time == "9:30am" ||
                        $scope.sessionData.time == "10:30am" || $scope.sessionData.time == "11:30am" ||
                        $scope.sessionData.time == "12:30pm" || $scope.sessionData.time == "1:30pm" ||
                        $scope.sessionData.time == "2:30pm" || $scope.sessionData.time == "3:30pm") {



                        $scope.dateData.hour    = hour;
                        $scope.dateData.id      = $scope.id

                        $scope.bookSession      = false;
                        $scope.loadingBooking3  = true;

                        User.getDate("5bf4f0a4b8f53129ecbc13a0").then(function (data) {

                            if (hour == 'eight') {

                                data.data.date[hour].state[0]           = 3;
                                data.data.date[hour].state[1]           = 3;
                                data.data.date[hour].state[2]           = 3;
                                data.data.date[hour].state[3]           = 3;
                                data.data.date[hour].state[4]           = 3;
                                data.data.date[hour].state[5]           = 3;
                                data.data.date['nine'].state[0]         = 3;
                                data.data.date['nine'].state[1]         = 3;


                                $scope.dateData.dateInfo                = data.data.date[hour].state
                                $scope.dateData.nexthour                = 'nine'
                                $scope.dateData.dateInfoNextHour        = data.data.date['nine'].state

                                User.updateDateNextHour($scope.dateData).then(function (data) {

                                    $scope.dateDataForUser.date = $scope.currentDate;

                                    $timeout(function () {

                                        if (data.data.date[hour].state[3] === 3) {

                                            $scope.bookSession8 = false;

                                            $timeout(function(){

                                            $scope.bookSession18 = false;

                                            $timeout(function () {

                                                $scope.bookSession28 = false;

                                                $timeout(function () {

                                                    $scope.bookSession38 = false;

                                                    $timeout(function () {

                                                        $scope.bookSession48 = false;

                                                        $timeout(function () {

                                                            $scope.bookSession58 = false;

                                                            $timeout(function () {

                                                                $scope.loadingBooking3 = false;
                                                                $scope.shinebrightsuccess.play()

                                                            }, 500)

                                                        }, 500)

                                                    }, 500)

                                                }, 500)

                                            }, 500)

                                        },500)

                                        }

                                    }, 1000)

                                    if ($scope.sessionData.time == "8:30am") {

                                        $scope.dateDataForUser.time = "8:30am - 9:20am"
                                        $scope.dateDataForUser.hour = "eight";
                                        $scope.dateDataForUser.slot = 4;

                                    }
                 
                                    $scope.dateDataForUser.appointmentType = "Session!";
                                    $scope.dateDataForUser.id = $scope.idFromLocalStorage;
                                    
                                    User.addBooking($scope.dateDataForUser).then(function (data) {

                                        console.log(data)
                                        if (data.data.user.calender["88"][22]) {
            
                                            $scope.booked1222 = true;

                                        }
                                    
            
                                    })
                                    

                                })
                            }

                            
                            if (hour == 'nine') {

                                data.data.date[hour].state[0]           = 3;
                                data.data.date[hour].state[1]           = 3;
                                data.data.date[hour].state[2]           = 3;
                                data.data.date[hour].state[3]           = 3;
                                data.data.date[hour].state[4]           = 3;
                                data.data.date[hour].state[5]           = 3;
                                data.data.date['nine'].state[0]          = 3;
                                data.data.date['nine'].state[1]          = 3;


                                $scope.dateData.dateInfo                = data.data.date[hour].state
                                $scope.dateData.nexthour                = 'nine'
                                $scope.dateData.dateInfoNextHour        = data.data.date['nine'].state

                                User.updateDateNextHour($scope.dateData).then(function (data) {

                                    $scope.dateDataForUser.date = $scope.currentDate;

                                    $timeout(function () {

                                        if (data.data.date[hour].state[4] === 3) {

                                            $scope.bookSession9 = false;

                                            $timeout(function(){

                                            $scope.bookSession19 = false;

                                            $timeout(function () {

                                                $scope.bookSession29 = false;

                                                $timeout(function () {

                                                    $scope.bookSession39 = false;

                                                    $timeout(function () {

                                                        $scope.bookSession49 = false;

                                                        $timeout(function () {

                                                            $scope.bookSession59 = false;

                                                            $timeout(function () {

                                                                $scope.loadingBooking3 = false;
                                                                $scope.shinebrightsuccess.play()

                                                            }, 500)

                                                        }, 500)

                                                    }, 500)

                                                }, 500)

                                            }, 500)

                                        },500)

                                        }

                                    }, 1000)

                                    if ($scope.sessionData.time == "9:30am") {

                                        $scope.dateDataForUser.time = "9:30am - 10:20am"
                                        $scope.dateDataForUser.hour = "nine";
                                        $scope.dateDataForUser.slot = 4;

                                    }

                                    $scope.dateDataForUser.appointmentType = "Session!";
                                    $scope.dateDataForUser.id = $scope.idFromLocalStorage;
                                    
                                    User.addBooking($scope.dateDataForUser).then(function (data) {

                                        if (data.data.user.calender["88"][22]) {
            
                                            $scope.booked1222 = true;

                                        }
                                    
                                    })
                                    
                                })
                            }

                        })

                    }
                    if ($scope.sessionData.time == "8:40am" || $scope.sessionData.time == "9:40am" ||
                        $scope.sessionData.time == "10:40am" || $scope.sessionData.time == "11:40am" ||
                        $scope.sessionData.time == "12:40pm" || $scope.sessionData.time == "1:40pm" ||
                        $scope.sessionData.time == "2:40pm" || $scope.sessionData.time == "3:40pm") {


                        $scope.dateData.hour    = hour;
                        $scope.dateData.id      = $scope.id

                        $scope.bookSession      = false;
                        $scope.loadingBooking4  = true;

                        User.getDate("5bf4f0a4b8f53129ecbc13a0").then(function (data) {

                            if (hour == 'eight') {

                                data.data.date[hour].state[0]           = 3;
                                data.data.date[hour].state[1]           = 3;
                                data.data.date[hour].state[2]           = 3;
                                data.data.date[hour].state[3]           = 3;
                                data.data.date[hour].state[4]           = 3;
                                data.data.date[hour].state[5]           = 3;
                                data.data.date['nine'].state[0]         = 3;
                                data.data.date['nine'].state[1]         = 3;
                                data.data.date['nine'].state[2]         = 3;



                                $scope.dateData.dateInfo                = data.data.date[hour].state
                                $scope.dateData.nexthour                = 'nine'
                                $scope.dateData.dateInfoNextHour        = data.data.date['nine'].state

                                User.updateDateNextHour($scope.dateData).then(function (data) {

                                    $scope.dateDataForUser.date = $scope.currentDate;

                                    $timeout(function () {

                                        if (data.data.date[hour].state[3] === 3) {

                                            $scope.bookSession8 = false;

                                            $timeout(function(){

                                            $scope.bookSession18 = false;

                                            $timeout(function () {

                                                $scope.bookSession28 = false;

                                                $timeout(function () {

                                                    $scope.bookSession38 = false;

                                                    $timeout(function () {

                                                        $scope.bookSession48 = false;

                                                        $timeout(function () {

                                                            $scope.bookSession58 = false;

                                                            $timeout(function () {

                                                                $scope.loadingBooking4 = false;
                                                                $scope.shinebrightsuccess.play()

                                                            }, 500)

                                                        }, 500)

                                                    }, 500)

                                                }, 500)

                                            }, 500)

                                        },500)

                                        }

                                    }, 1000)

                                    if ($scope.sessionData.time == "8:40am") {

                                        $scope.dateDataForUser.time = "8:40am - 9:30am"
                                        $scope.dateDataForUser.hour = "eight";
                                        $scope.dateDataForUser.slot = 4;

                                    }

                                    $scope.dateDataForUser.appointmentType = "Session!";
                                    $scope.dateDataForUser.id = $scope.idFromLocalStorage;
                                    
                                    User.addBooking($scope.dateDataForUser).then(function (data) {

                                        if (data.data.user.calender["88"][22]) {
            
                                            $scope.booked1222 = true;

                                        }
            
                                    })
                                
                                })

                            }

                            
                            if (hour == 'nine') {

                                data.data.date[hour].state[0]           = 3;
                                data.data.date[hour].state[1]           = 3;
                                data.data.date[hour].state[2]           = 3;
                                data.data.date[hour].state[3]           = 3;
                                data.data.date[hour].state[4]           = 3;
                                data.data.date[hour].state[5]           = 3;
                                data.data.date['nine'].state[0]          = 3;
                                data.data.date['nine'].state[1]          = 3;
                                data.data.date['nine'].state[2]          = 3;



                                $scope.dateData.dateInfo                = data.data.date[hour].state
                                $scope.dateData.nexthour                = 'nine'
                                $scope.dateData.dateInfoNextHour        = data.data.date['nine'].state

                                User.updateDateNextHour($scope.dateData).then(function (data) {

                                    $scope.dateDataForUser.date = $scope.currentDate;

                                    $timeout(function () {

                                        if (data.data.date[hour].state[4] === 3) {

                                            $scope.bookSession9 = false;

                                            $timeout(function(){

                                            $scope.bookSession19 = false;

                                            $timeout(function () {

                                                $scope.bookSession29 = false;

                                                $timeout(function () {

                                                    $scope.bookSession39 = false;

                                                    $timeout(function () {

                                                        $scope.bookSession49 = false;

                                                        $timeout(function () {

                                                            $scope.bookSession59 = false;

                                                            $timeout(function () {

                                                                $scope.loadingBooking4 = false;
                                                                $scope.shinebrightsuccess.play()

                                                            }, 500)

                                                        }, 500)

                                                    }, 500)

                                                }, 500)

                                            }, 500)

                                        },500)

                                        }

                                    }, 1000)

                                    if ($scope.sessionData.time == "9:40am") {

                                        $scope.dateDataForUser.time = "9:40am - 10:30am"
                                        $scope.dateDataForUser.hour = "nine";
                                        $scope.dateDataForUser.slot = 4;

                                    }

                                    $scope.dateDataForUser.appointmentType = "Session!";
                                    $scope.dateDataForUser.id = $scope.idFromLocalStorage;
                                    
                                    User.addBooking($scope.dateDataForUser).then(function (data) {

                                        if (data.data.user.calender["88"][22]) {
            
                                            $scope.booked1222 = true;

                                        }
                                
                                    })

                                })

                            }

                        })

                    }
                    if ($scope.sessionData.time == "8:50am" || $scope.sessionData.time == "9:50am" ||
                        $scope.sessionData.time == "10:50am" || $scope.sessionData.time == "11:50am" ||
                        $scope.sessionData.time == "12:50pm" || $scope.sessionData.time == "1:50pm" ||
                        $scope.sessionData.time == "2:50pm" || $scope.sessionData.time == "3:50pm") {

                        $scope.dateData.hour    = hour;
                        $scope.dateData.id      = $scope.id;

                        $scope.bookSession      = false;
                        $scope.loadingBooking5  = true;

                        User.getDate("5bf4f0a4b8f53129ecbc13a0").then(function (data) {

                            if (hour == 'eight') {

                                data.data.date[hour].state[1]           = 3;
                                data.data.date[hour].state[2]           = 3;
                                data.data.date[hour].state[3]           = 3;
                                data.data.date[hour].state[4]           = 3;
                                data.data.date[hour].state[5]           = 3;
                                data.data.date['nine'].state[0]         = 3;
                                data.data.date['nine'].state[1]         = 3;
                                data.data.date['nine'].state[2]         = 3;
                                data.data.date['nine'].state[3]         = 3;
                                data.data.date['nine'].state[4]         = 3;

                                $scope.dateData.dateInfo                = data.data.date[hour].state;
                                $scope.dateData.nexthour                = 'nine';
                                $scope.dateData.dateInfoNextHour        = data.data.date['nine'].state;

                                User.updateDateNextHour($scope.dateData).then(function (data) {

                                    $scope.dateDataForUser.date = $scope.currentDate;

                                    $timeout(function () {

                                        if (data.data.date[hour].state[5] === 3) {

                                            $scope.bookSession8 = false;

                                            $timeout(function () {

                                                if (data.data.date[hour].state[5] === 3) {
        
                                                    $scope.bookSession18 = false;
        
                                                    $timeout(function () {
        
                                                        $scope.bookSession28 = false;
        
                                                        $timeout(function () {
        
                                                            $scope.bookSession38 = false;
        
                                                            $timeout(function () {
        
                                                                $scope.bookSession48 = false;
        
                                                                $timeout(function () {
        
                                                                    $scope.bookSession58 = false;
        
                                                                    $timeout(function () {
        
                                                                        $scope.loadingBooking5 = false;
                                                                        $scope.shinebrightsuccess.play()
        
                                                                    }, 500)
        
                                                                }, 500)
        
                                                            }, 500)
        
                                                        }, 500)
        
                                                    }, 500)
        
                                                }
        
                                            }, 1000)

                                        }

                                    }, 1000)

                                    if ($scope.sessionData.time == "8:50am") {

                                        $scope.dateDataForUser.time = "8:50am - 9:40am"
                                        $scope.dateDataForUser.hour = "eight";
                                        $scope.dateDataForUser.slot = 5;

                                    }
                   
                                    $scope.dateDataForUser.appointmentType  = "Session!";
                                    $scope.dateDataForUser.id               = $scope.idFromLocalStorage;
                                    
                                    User.addBooking($scope.dateDataForUser).then(function (data) {

                                        if (data.data.user.calender["88"][22]) {
            
                                            $scope.booked1222 = true;

                                        }
                                
                                    })
                                    

                                })
                            }

                            
                            if (hour == 'nine') {

                                data.data.date[hour].state[1]           = 3;
                                data.data.date[hour].state[2]           = 3;
                                data.data.date[hour].state[3]           = 3;
                                data.data.date[hour].state[4]           = 3;
                                data.data.date[hour].state[5]           = 3;
                                data.data.date['ten'].state[0]          = 3;
                                data.data.date['ten'].state[1]          = 3;
                                data.data.date['ten'].state[2]          = 3;
                                data.data.date['ten'].state[3]          = 3;
                                data.data.date['ten'].state[4]          = 3;

                                $scope.dateData.dateInfo                = data.data.date[hour].state;
                                $scope.dateData.nexthour                = 'ten';
                                $scope.dateData.dateInfoNextHour        = data.data.date['ten'].state;

                                User.updateDateNextHour($scope.dateData).then(function (data) {

                                    $scope.dateDataForUser.date = $scope.currentDate;

                                    $timeout(function () {

                                        if (data.data.date[hour].state[5] === 3) {

                                            $scope.bookSession19 = false;

                                            $timeout(function () {

                                                $scope.bookSession29 = false;

                                                $timeout(function () {

                                                    $scope.bookSession39 = false;

                                                    $timeout(function () {

                                                        $scope.bookSession49 = false;

                                                        $timeout(function () {

                                                            $scope.bookSession59 = false;

                                                            $timeout(function () {

                                                                $scope.loadingBooking5 = false;
                                                                $scope.shinebrightsuccess.play()

                                                            }, 500)

                                                        }, 500)

                                                    }, 500)

                                                }, 500)

                                            }, 500)

                                        }

                                    }, 1000)

                                    if ($scope.sessionData.time == "9:50am") {

                                        $scope.dateDataForUser.time = "9:50am - 10:40am"
                                        $scope.dateDataForUser.hour = "nine";
                                        $scope.dateDataForUser.slot = 5;

                                    }

                                    $scope.dateDataForUser.appointmentType  = "Session!";
                                    $scope.dateDataForUser.id               = $scope.idFromLocalStorage;
                                    
                                    User.addBooking($scope.dateDataForUser).then(function (data) {

                                        if (data.data.user.calender["88"][22]) {
            
                                            $scope.booked1222 = true;

                                        }
                                    
                                    })

                                })

                            }

                        })

                    }


            }else{

                $scope.shinebrighterror.play()

            }

        }


    })

}());