(function () {

    var app = angular.module('sessionController', ['authServices','userServices'])

    app.config(function () {

            console.log("session Controller Loaded...")

    })

    app.controller('sessionCtrl', function ($scope, User, $window) {


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


            $scope.currentHour = $window.localStorage.getItem('currentHour')
            $scope.currentDate = $window.localStorage.getItem('currentDate')

            User.getDate("5bf4f0a4b8f53129ecbc13a0").then(function (data) {

                console.log(data)

                $scope.globalDateInformation = data.data.date;

                    if ($scope.currentHour == "eight") {

                        if ($scope.globalDateInformation[$scope.currentHour].state[0] == 3) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[1] == 3) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[2] == 3) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;


                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[3] == 3) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;    
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;


                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[4] == 3) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;    
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[5] == 3) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;    
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;

                       
                        }

                        
                        if ($scope.globalDateInformation[$scope.currentHour].state[2] == 0 &&
                            $scope.globalDateInformation[$scope.currentHour].state[3] == 0 && 
                            $scope.globalDateInformation[$scope.currentHour].state[4] == 0 && 
                            $scope.globalDateInformation[$scope.currentHour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0) {

                                $scope.bookSession58 = true;
                                $scope.bookSession48 = true;
                                $scope.bookSession38 = true;
                                $scope.bookSession28 = true;

                        }
                        if (
                            $scope.globalDateInformation[$scope.currentHour].state[3] == 0 && 
                            $scope.globalDateInformation[$scope.currentHour].state[4] == 0 && 
                            $scope.globalDateInformation[$scope.currentHour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0 &&
                            $scope.globalDateInformation['nine'].state[1]      == 0 ) {

                                $scope.bookSession58 = true;
                                $scope.bookSession48 = true;
                                $scope.bookSession38 = true;

                        }
                        if ( 
                            $scope.globalDateInformation[$scope.currentHour].state[4] == 0 && 
                            $scope.globalDateInformation[$scope.currentHour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0 &&
                            $scope.globalDateInformation['nine'].state[1]      == 0 &&
                            $scope.globalDateInformation['nine'].state[2]      == 0 ) {

                                $scope.bookSession58 = true;
                                $scope.bookSession48 = true;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[5] == 0 &&  
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

                    if ($scope.currentHour == "nine") {

                       // $location.path("/datepage/session/nine");
                        console.log('OY')

                        if ($scope.globalDateInformation[$scope.currentHour].state[0] == 3) {

                            $scope.bookSession9 = false;
                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[1] == 3) {

                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;

                        }

                        if ($scope.globalDateInformation[$scope.currentHour].state[2] == 3) {

                            $scope.bookSession29 = false;
                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;


                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[3] == 3) {

                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;


                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[4] == 3) {

                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[5] == 3) {

                            $scope.bookSession59 = false;


                        }

                        if (data.data.date[$scope.currentHour].state[3] === 3) {

                            $scope.discovery800AMSelected = false;
                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookCheckUp19 = false;
                            $scope.bookCheckUp29 = false;

                        }

                    }

                    if ($scope.currentHour == "eight") {

                        if ($scope.globalDateInformation[$scope.currentHour].state[0] == 2) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[1] == 2) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[2] == 2) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;


                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[3] == 2) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;    
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;


                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[4] == 2) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;    
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[5] == 2) {

                            $scope.bookSession8     = false;
                            $scope.bookSession18    = false;
                            $scope.bookSession28    = false;    
                            $scope.bookSession38    = false;
                            $scope.bookSession48    = false;
                            $scope.bookSession58    = false;

                       
                        }

                        
                        if ($scope.globalDateInformation[$scope.currentHour].state[2] == 0 &&
                            $scope.globalDateInformation[$scope.currentHour].state[3] == 0 && 
                            $scope.globalDateInformation[$scope.currentHour].state[4] == 0 && 
                            $scope.globalDateInformation[$scope.currentHour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0) {

                                $scope.bookSession58 = true;
                                $scope.bookSession48 = true;
                                $scope.bookSession38 = true;
                                $scope.bookSession28 = true;

                        }
                        if (
                            $scope.globalDateInformation[$scope.currentHour].state[3] == 0 && 
                            $scope.globalDateInformation[$scope.currentHour].state[4] == 0 && 
                            $scope.globalDateInformation[$scope.currentHour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0 &&
                            $scope.globalDateInformation['nine'].state[1]      == 0 ) {

                                $scope.bookSession58 = true;
                                $scope.bookSession48 = true;
                                $scope.bookSession38 = true;

                        }
                        if ( 
                            $scope.globalDateInformation[$scope.currentHour].state[4] == 0 && 
                            $scope.globalDateInformation[$scope.currentHour].state[5] == 0 &&  
                            $scope.globalDateInformation['nine'].state[0]      == 0 &&
                            $scope.globalDateInformation['nine'].state[1]      == 0 &&
                            $scope.globalDateInformation['nine'].state[2]      == 0 ) {

                                $scope.bookSession58 = true;
                                $scope.bookSession48 = true;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[5] == 0 &&  
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

                    if ($scope.currentHour == "nine") {

                        if ($scope.globalDateInformation[$scope.currentHour].state[0] == 2) {

                            $scope.bookSession9 = false;
                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[1] == 2) {


                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;

                        }

                        if ($scope.globalDateInformation[$scope.currentHour].state[2] == 2) {

                            $scope.bookSession29 = false;
                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;


                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[3] == 2) {

                            $scope.bookSession39 = false;
                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;


                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[4] == 2) {

                            $scope.bookSession49 = false;
                            $scope.bookSession59 = false;

                        }
                        if ($scope.globalDateInformation[$scope.currentHour].state[5] == 2) {

                            $scope.bookSession59 = false;


                        }

                        if (data.data.date[$scope.currentHour].state[3] === 2) {

                            $scope.discovery800AMSelected = false;
                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookSession19 = false;
                            $scope.bookSession29 = false;
                            $scope.bookCheckUp19 = false;
                            $scope.bookCheckUp29 = false;

                        }

                    }


            })


            $scope.selectTime = function (time, booked) {

                console.log('Oy')
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

        $scope.openBookingPage = function (slot) {

            $scope.dateCondensed = $window.localStorage.getItem('dateCondensed')
            
            $window.location.href = "/schedule/"+$scope.dateCondensed+"/checkup";

        }

      
    
    })

}());