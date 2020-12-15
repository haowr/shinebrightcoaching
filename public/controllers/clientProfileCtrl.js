(function () {

    var app = angular.module('clientProfileController', ['authServices','userServices'])
    
    app.config(function () {

        
    })

    app.controller('clientProfileCtrl', function ($scope, Auth, User, $timeout, $location, $rootScope, $window) {

        if(!Auth.isLoggedIn()){

            $location.path('/')
            $rootScope.loggedIn = false;

        }else{

            $rootScope.loggedIn = true;
        }

        $scope.idFromLocalStorage           = $window.localStorage.getItem('_id')
        $scope.clientName                   = $window.localStorage.getItem('name');
        $scope.currentBookingTitle          = "";
        $scope.currentBooking               = 0;
        $scope.infoPageOpen                 = true;
        $scope.bookingsPageOpen             = false;
        $scope.scheduledJobPageOpen         = false;
        $scope.loadingBookingStatus         = false;
        $scope.bookingInfo = {

            id: $scope.idFromLocalStorage

        }

        User.getUser($scope.idFromLocalStorage).then(function (data) {

            $scope.clientName                   = data.data.user.name;
            $scope.currentUserBookingsArray     = data.data.user.bookings;
            $scope.audio                        = new Audio("../audio/shinebrightclick.wav")
            $scope.shinebrighterror             = new Audio("../audio/shinebrighterror.wav");
            $scope.shinebrightloading           = new Audio('../audio/shinebrightloading.wav');
            $scope.shinebrightsuccess           = new Audio('../audio/shinebrightsuccess.wav');
            $scope.shinebrighttap               = new Audio('../audio/shinebrighttap.wav');

            

            if($scope.currentUserBookingsArray.length > 0){

                $scope.currentBookingTitle      = $scope.currentUserBookingsArray.length
                $scope.currentBooking           = $scope.currentUserBookingsArray.length -1

            }else{

                $scope.currentBookingTitle      = 0;
                $scope.currentBooking           = 0;

            }

            if($scope.currentUserBookingsArray.length > 0){
        
                $scope.currentBookingTitle      = $scope.currentUserBookingsArray.length
                $scope.currentBooking           = 0

            }else{

                $scope.currentBookingTitle      = 0;
                $scope.currentBooking           = 0;
                $scope.loadingClientBookings    = false;
                $scope.shake                    = true;
                $scope.shinebrighterror.play()

                $timeout(function(){

                    $scope.shake                = false;

                },1000)

            }
            
            console.log("$scope.currentBooking", $scope.currentBooking)
            console.log("$scope.currentUserBookingsArray", $scope.currentUserBookingsArray)


        })

        $scope.changeBookingLeft = function () {


            User.getUser($scope.idFromLocalStorage).then(function (data) {

                    $scope.currentUserBookingsArray     = data.data.user.bookings;
                    console.log("$scope.currentUserBookingsArray", $scope.currentUserBookingsArray)

                    if ( $scope.currentBooking > 0 ) {

                        $scope.currentBooking       = $scope.currentBooking - 1;
                        $scope.currentBookingTitle  = $scope.currentBooking +1;
                        $scope.shinebrighttap.play()

                    } 
                    
                else {

                        $scope.currentBooking       = $scope.currentUserBookingsArray.length - 1;
                        $scope.currentBookingTitle  = $scope.currentUserBookingsArray.length ;
                        console.log("ERRE?")
                        console.log($scope.currentBooking)


                        if($scope.currentUserBookingsArray.length == 0){

                            $scope.currentBookingTitle  = 0;
                            console.log("ERRE??")
                            $scope.shake                = true;
                            $scope.shinebrighterror.play()

                            $timeout(function(){
        
                                $scope.shake = false;
        
                            },1000)

                        }
                    
                    }    
                    console.log("$scope.currentBooking", $scope.currentBooking)
                    console.log("currentUserBookingsArray", $scope.currentUserBookingsArray[$scope.currentBooking])

                
            })

        }

        $scope.changeBookingRight = function () {

            User.getUser($scope.idFromLocalStorage).then(function (data) {

                $scope.currentUserBookingsArray     = data.data.user.bookings;

                    if ( $scope.currentBooking < $scope.currentUserBookingsArray.length - 1 ) {

                        $scope.currentBooking       = $scope.currentBooking + 1;
                        $scope.currentBookingTitle  = $scope.currentBooking + 1;
                        $scope.shinebrighttap.play()

                    } else{



                        $scope.currentBooking       = 0;
                        $scope.currentBookingTitle  = 1;

                        if($scope.currentUserBookingsArray.length == 0){

                            console.log("Should be here...")

                            $scope.shake                    = true;
                            $scope.currentBookingTitle      = 0;
                            $scope.shinebrighterror.play()

                            $timeout(function(){
        
                                $scope.shake = false;
        
                            },1000)

                        }


                    }
                
            })

        }

        $scope.markAsCompleted = function(currentbooking){ 

                $scope.currentBooking = currentbooking;

                if(currentbooking <= -1){

                }else{

                    $scope.loadingBookingStatus = true;
                    $scope.shinebrightloading.play()

                    User.getUser($scope.idFromLocalStorage).then(function (data) {

                        $scope.bookingInfo.currentbooking   = $scope.currentBooking;

                        User.markBookingAsCompleted($scope.bookingInfo).then(function(data){
        
                            $scope.currentUserBookingsArray = data.data.user.bookings
        
                            $timeout(function(){
        
                                $scope.loadingBookingStatus = false;
        
                                $scope.shinebrightsuccess.play()
        
                            },1000)
            
                        })
        
                    })

                }  

        }
        $scope.index = 0;
        $scope.deleteBooking = function(currentbooking){

                $scope.loadingBookingDeletion       = true;
                $scope.index = currentbooking 
                console.log("INDEX", $scope.index)

                

                User.getUser($scope.idFromLocalStorage).then(function (data) {
                
                    $scope.bookingInfo.currentbooking   = $scope.index;
                    console.log("INDEX", $scope.index)
                    $scope.bookingInfo.appointmentType  = $scope.currentUserBookingsArray[$scope.index].appointmentType;
                    $scope.bookingInfo.hour             = $scope.currentUserBookingsArray[$scope.index].hour;
                    $scope.bookingInfo.slot             = $scope.currentUserBookingsArray[$scope.index].slot;
                    $scope.bookingInfo.time             = $scope.currentUserBookingsArray[$scope.index].time;
                    $scope.bookingInfo.date             = $scope.currentUserBookingsArray[$scope.index].date;

             
                    User.deleteBooking($scope.bookingInfo).then(function(data){

                        console.log(data)

                        User.getUser($scope.idFromLocalStorage).then(function(data){

                            console.log(data)
                            $scope.currentUserBookingsArray = data.data.user.bookings

                        if($scope.currentUserBookingsArray.length > 0){

                            $scope.loadingBookingDeletion   = false;
                            $scope.shake                    = true;
                            $scope.currentBookingTitle      = 1
                            $scope.currentBooking           = 0;

                        }else{

                            $scope.loadingBookingDeletion   = false;
                            $scope.shake                    = true;
                            $scope.currentBookingTitle      = 0;
                            $scope.currentBooking           = 0;
                            $scope.shinebrighterror.play()

                            $timeout(function(){

                                $scope.shake = false;
        
                            },1000)

                        }

                    })

                })

            })
                
        }

        $scope.markAsNotCompleted = function(currentbooking){


                $scope.loadingBookingStatus = true;

                if(currentbooking <= -1){

                }else{

                    $scope.shinebrightloading.play()


                    User.getUser($scope.idFromLocalStorage).then(function (data) {

                        $scope.bookingInfo.currentbooking   = data.data.user.bookings.length-1
                        $scope.bookingInfo.currentbooking   = currentbooking;
                        $scope.currentBooking               = currentbooking;
        
                        User.markBookingAsNotCompleted($scope.bookingInfo).then(function(data){
        
        
                            $scope.currentUserBookingsArray = data.data.user.bookings
        
                            $timeout(function(){
        
                                $scope.loadingBookingStatus = false;
        
                                $scope.shinebrightsuccess.play()
        
                            },1000)
            
                        })
        
                    })


                }

                
                
        }

        $scope.openMessagePage = function () {

            $('html, body').animate({ scrollTop: 0 }, 'fast');
            $scope.audio.play()

        }
        
        $scope.openSchedulePage = function () {

            $('html, body').animate({ scrollTop: 0 }, 'fast');
            $scope.audio.play()

        }

    })

}());