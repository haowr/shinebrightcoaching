(function () {

    var app = angular.module('clientProfileController', ['authServices','userServices'])
    app.config(function () {

        console.log("Password Controller Loaded")
    })

    app.controller('clientProfileCtrl', function ($scope, Auth, User, $timeout, $location, $rootScope, $window) {

        $scope.idFromLocalStorage = $window.localStorage.getItem('_id')

        $scope.clientName                   = "";
        $scope.currentBookingTitle          = "";
        $scope.infoPageOpen                 = true;
        $scope.bookingsPageOpen             = false;
        $scope.scheduledJobPageOpen         = false;

        User.getUser($scope.idFromLocalStorage).then(function (data) {

            console.log(data)
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
                $scope.currentBooking           = $scope.currentUserBookingsArray.length -1

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


        })

        $scope.changeBookingLeft = function () {

            User.getUser($scope.idFromLocalStorage).then(function (data) {

                $scope.currentUserBookingsArray     = data.data.user.bookings;

                    if ( $scope.currentBooking > 0 ) {

                        $scope.currentBooking       = $scope.currentBooking - 1;
                        $scope.currentBookingTitle  = $scope.currentBooking;
                        $scope.shinebrighttap.play()

                    } else {

                        $scope.currentBooking       = $scope.currentUserBookingsArray.length - 1;
                        $scope.currentBookingTitle  = $scope.currentUserBookingsArray.length - 1;

                        if($scope.currentUserBookingsArray.length == 0){

                            $scope.currentBookingTitle  = 0;
                            $scope.shake                = true;
                            $scope.shinebrighterror.play()

                            $timeout(function(){
        
                                $scope.shake = false;
        
                            },1000)

                        }
                    
                    }    
                
            })

        }

        $scope.changeBookingRight = function () {

            User.getUser($scope.idFromLocalStorage).then(function (data) {

                $scope.currentUserBookingsArray     = data.data.user.bookings;

                    if ( $scope.currentBooking < $scope.currentUserBookingsArray.length - 1 ) {

                        $scope.currentBooking       = $scope.currentBooking + 1;
                        $scope.currentBookingTitle  = $scope.currentBooking + 1;
                        $scope.shinebrighttap.play()

                    } else {

                        $scope.currentBooking       = 0;
                        $scope.currentBookingTitle  = 0;

                        if($scope.currentUserBookingsArray.length == 0){

                            $scope.shake            = true;
                            $scope.shinebrighterror.play()

                            $timeout(function(){
        
                                $scope.shake = false;
        
                            },1000)

                        }
                    
                    }    
                
                })

        }

        $scope.markAsCompleted = function(currentbooking){ 


                if(currentbooking <= -1){

                }else{

                    $scope.shinebrightloading.play()


                    User.getUser($scope.idFromLocalStorage).then(function (data) {

                        $scope.bookingInfo.currentbooking   = currentbooking
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

        $scope.deleteBooking = function(currentbooking){

                $scope.loadingBookingDeletion       = true;

            
                User.getUser($scope.idFromLocalStorage).then(function (data) {
                
                    $scope.bookingInfo.currentbooking   = data.data.user.bookings.length-1
                    console.log("bookinginfo")
                    console.log($scope.bookingInfo)

                    User.deleteBooking($scope.bookingInfo).then(function(data){

                        console.log(data)

                        $scope.currentUserBookingsArray = data.data.user.bookings

                        if($scope.currentUserBookingsArray.length > 0){

                            $scope.currentBookingTitle  = $scope.currentUserBookingsArray.length
                            $scope.currentBooking       = $scope.currentUserBookingsArray.length - 1;



                        }else{

                            $scope.loadingBookingDeletion = false;
                            $scope.shake = true;
                            $scope.currentBookingTitle  = 0;
                            $scope.currentBooking       = 0;
                            $scope.shinebrighterror.play()
                            $timeout(function(){

                                $scope.shake = false;
        
                            },1000)

                            
                            

                        }

                
                    })


                })
                
        }

        $scope.markAsNotCompleted = function(currentbooking){


                $scope.loadingBookingStatus         = true;

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

    })

}());