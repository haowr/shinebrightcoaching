(function () {

    var app = angular.module('homeController', [])
    app.config(function () {

        console.log("Home Controller Loaded")
    })

    app.controller('homeCtrl', function ($scope, $rootScope, $timeout) {
        $scope.shineHomeOpen = true;
        $scope.navBar = false;
        $scope.codingPageOpen = false;
        $scope.rosePageOpen = false;
        $scope.fadein = true;
        $scope.fadeout = false;
        $scope.fadeinCodeDisplay = true;
        $scope.fadeoutCodeDisplay = false;
        $scope.codeDisplay = false;
        $scope.borderTop = false;
        $scope.borderRight = false;
        $scope.borderLeft = false;
        $scope.borderBottom = false;
        $scope.page1 = false;
        $scope.changePage = function(){

            if(!$scope.page1){

            $scope.page1 = true;
                
            }else{
                $scope.page1 = false;
            }

        }
        $scope.openQlhPage = function () {
            console.log("clicked")
            $scope.fadein = false;
            $scope.qlhPageOpen = true;
            $scope.codeDisplay = false;
            $scope.codingPageOpen = false;
        }
        $scope.openHouseOfShoesPage = function () {
            console.log("clicked")
            $scope.fadein = false;
            $scope.houseOfShoesPageOpen = true;
            $scope.codeDisplay = false;
            $scope.codingPageOpen = false;
        }
        $scope.openRosePage = function () {
            console.log("clicked")
            $scope.fadein = false;
            $scope.rosePageOpen = true;
            $scope.codeDisplay = false;
            $scope.codingPageOpen = false;
        }
        $scope.fadeinright = false;
        $scope.fadeoutleft = false;
        $scope.fadeinup = false;
        $scope.fadeoutup = false;
        $scope.fadeindown = false;
        $scope.fadeoutdown = false;
        $scope.fadeinleft = false;
        $scope.fadeoutright = false;
        $scope.fadeouthome = false;
        $scope.openShineHome = function () {
            console.log("clicked")
            if (!$scope.shineHomeOpen) {
                $scope.fadeinright = false;
                $scope.fadeinup = false
                $scope.fadeoutup = true;
                $scope.fadeinleft = false
                $scope.fadeoutleft = true;
                $scope.fadeoutright = true;
                $scope.fadeindown = false;
                $scope.fadeoutdown = true
                $scope.rosePageOpen = false;
                $scope.houseOfShoesPageOpen = false;
                $scope.qlhPageOpen = false;
                // $scope.navBar = false;
                // $scope.fadein = false;
                // $scope.fadeout = true;
                $timeout(function () {
                    $scope.musicPageOpen = false;
                    $scope.codeDisplay = false;
                    $scope.codingPageOpen = false;
                    $scope.shineHomeOpen = true;


                }, 1600)
                $timeout(function () {

                    //

                    $scope.fadeouthome = true;

                    // $scope.codingPageOpen = false;
                    // $scope.musicPageOpen = false;
                     $scope.codingPageOpen = false;
                    $scope.fadeout = false;
                    $scope.fadein = true;

                    $scope.fadeinCodeDisplay = false;
                    $scope.fadeoutCodeDisplay = true;
                    //$scope.codeDisplay = false;
                    // $scope.codeDisplay = false;


                }, 600)
                $timeout(function () {

                    //
                   
                    // $scope.musicPageOpen = false;

                }, 800)
                $timeout(function () {


                }, 900)

            }
        }
        $scope.pageRefreshed = false;
        $scope.openMusicPage = function () {
            console.log("clicked")
            if (!$scope.musicPageOpen) {

                $scope.pageRefreshed = true;
                $scope.fadein = false;
                $scope.fadeout = true;
                


                $timeout(function () {
                    $scope.musicPageOpen = true;
                    $scope.shineHomeOpen = false;
                    $scope.photoPageOpen = false;
                    $scope.codingPageOpen = false;
                    $scope.fadeout = false;
                    $scope.fadein = true;
                    $scope.fadeoutleft = false;
                    $scope.fadeoutright = false;
                    $scope.fadeinleft = true;

                    $scope.fadeinright = true;
                    $scope.fadeoutup = false;
                    $scope.fadeoutdown = false

                    $scope.fadeindown = true;

                    $scope.fadeinup = true
                    $scope.fadeouthome = false;
                    $scope.fadeinhome = true;
                    $scope.fadeinright = true;

                }, 500)
                $timeout(function () {
                    $scope.codeDisplay = true;
                    $scope.fadeoutCodeDisplay = false;
                    $scope.fadeinCodeDisplay = true;
                }, 1200)
                $timeout(function () {
                    $scope.navBar = true;
                }, 2100)

            } 
               if (!$scope.musicPageOpen && ($scope.contactPageOpen || $scope.codingPageOpen || $scope.photoPageOpen)) {

                    $scope.fadeinright = false;
                $scope.fadeinup = false
                $scope.fadeoutup = true;
                $scope.fadeinleft = false
                $scope.fadeoutleft = true;
                $scope.fadeoutright = true;
                $scope.fadeindown = false;
                $scope.fadeoutdown = true


                $timeout(function () {
                    $scope.musicPageOpen = true;
                    $scope.shineHomeOpen = false;
                    $scope.contactPageOpen = false;
                    $scope.codingPageOpen = false;
                    $scope.fadeout = false;
                    $scope.fadein = true;
                    $scope.fadeoutleft = false;
                    $scope.fadeoutright = false;
                    $scope.fadeinleft = true;

                    $scope.fadeinright = true;
                    $scope.fadeoutup = false;
                    $scope.fadeoutdown = false

                    $scope.fadeindown = true;

                    $scope.fadeinup = true
                    $scope.fadeouthome = false;
                    $scope.fadeinhome = true;
                    $scope.fadeinright = true;

                }, 500)
                $timeout(function () {
                    $scope.codeDisplay = true;
                    $scope.fadeoutCodeDisplay = false;
                    $scope.fadeinCodeDisplay = true;
                }, 1200)
                $timeout(function () {
                    $scope.navBar = true;
                }, 2100)

            } 
        }
        $scope.contactPageOpen = false;
        $scope.openContactPage = function () {
            console.log("clicked")
            if (!$scope.contactPageOpen) {
            
                $scope.pageRefreshed = true;
                $scope.fadein = false;
                $scope.fadeout = true;
                


                $timeout(function () {
                     $scope.contactPageOpen = true;
                     $scope.codingPageOpen = false;
                    $scope.musicPageOpen = false;
                    $scope.photoPageOpen = false;
                    $scope.shineHomeOpen = false;
                   
                    $scope.fadeout = false;
                    $scope.fadein = true;
                    $scope.fadeoutleft = false;
                    $scope.fadeoutright = false;
                    $scope.fadeinleft = true;

                    $scope.fadeinright = true;
                    $scope.fadeoutup = false;
                    $scope.fadeoutdown = false

                    $scope.fadeindown = true;

                    $scope.fadeinup = true
                    $scope.fadeouthome = false;
                    $scope.fadeinhome = true;
                    $scope.fadeinright = true;

                }, 500)
                $timeout(function () {
                    $scope.codeDisplay = true;
                    $scope.fadeoutCodeDisplay = false;
                    $scope.fadeinCodeDisplay = true;
                }, 1200)
                $timeout(function () {
                    $scope.navBar = true;
                }, 2100)

            }   
             if (!$scope.contactPageOpen && ($scope.musicPageOpen || $scope.codingPageOpen || $scope.photoPageOpen)) {
console.log("music page open")
                    $scope.fadeinright = false;
                $scope.fadeinup = false
                $scope.fadeoutup = true;
                $scope.fadeinleft = false
                $scope.fadeoutleft = true;
                $scope.fadeoutright = true;
                $scope.fadeindown = false;
                $scope.fadeoutdown = true


                $timeout(function () {
                    $scope.contactPageOpen = true;
                    $scope.photoPageOpen = false;
                    $scope.codingPageOpen = false;
                    $scope.shineHomeOpen = false;
                    $scope.musicPageOpen = false;
                    $scope.fadeout = false;
                    $scope.fadein = true;
                    $scope.fadeoutleft = false;
                    $scope.fadeoutright = false;
                    $scope.fadeinleft = true;

                    $scope.fadeinright = true;
                    $scope.fadeoutup = false;
                    $scope.fadeoutdown = false

                    $scope.fadeindown = true;

                    $scope.fadeinup = true
                    $scope.fadeouthome = false;
                    $scope.fadeinhome = true;
                    $scope.fadeinright = true;

                }, 500)
                $timeout(function () {
                    $scope.codeDisplay = true;
                    $scope.fadeoutCodeDisplay = false;
                    $scope.fadeinCodeDisplay = true;
                }, 1200)
                $timeout(function () {
                    $scope.navBar = true;
                }, 2100)

            } 
        
        }

        $scope.openModal = function () {

            $('#modal1').modal('open');
            console.log("COgal")
            
        }
        $scope.openModal();

        $scope.openCodingPage = function () {
            console.log("clicked")
            if (!$scope.codingPageOpen) {
            
                $scope.pageRefreshed = true;
                $scope.fadein = false;
                $scope.fadeout = true;
                


                $timeout(function () {
                     $scope.codingPageOpen = true;
                    $scope.musicPageOpen = false;
                    $scope.photoPageOpen = false;
                    $scope.shineHomeOpen = false;
                   
                    $scope.fadeout = false;
                    $scope.fadein = true;
                    $scope.fadeoutleft = false;
                    $scope.fadeoutright = false;
                    $scope.fadeinleft = true;

                    $scope.fadeinright = true;
                    $scope.fadeoutup = false;
                    $scope.fadeoutdown = false

                    $scope.fadeindown = true;

                    $scope.fadeinup = true
                    $scope.fadeouthome = false;
                    $scope.fadeinhome = true;
                    $scope.fadeinright = true;

                }, 500)
                $timeout(function () {
                    $scope.codeDisplay = true;
                    $scope.fadeoutCodeDisplay = false;
                    $scope.fadeinCodeDisplay = true;
                }, 1200)
                $timeout(function () {
                    $scope.navBar = true;
                }, 2100)

            }   
        
        }
        $scope.fadeoutmusicpage = false;
        $scope.fadeinmusicpage = false;
        $scope.fadeInMusic = false;
        $scope.fadeOutMusic = true;
        $scope.audio = new Audio('../audio/bride.wav')
        $scope.playTrack = function () {
            console.log("Play")
            if (!$scope.fadeoutmusicpage) {
                $scope.fadeoutmusicpage = true;
                $scope.fadeOutMusic = false;
                $scope.fadeInMusic = true;
                $scope.fadeinmusicpage = true;
                //var audio = new Audio('../audio/bride.wav');
                $scope.audio.play();

            } else {
                $scope.fadeOutMusic = false;
                $scope.fadeInMusic = true;
            }
        }
        $scope.stopTrack = function () {

            //if (!$scope.fadeoutmusicpage) {
            $scope.fadeoutmusicpage = false;
            // $scope.fadeinmusicpage = true;
            $scope.fadeInMusic = false;
            $scope.fadeOutMusic = true;


            //var audio = new Audio('../audio/bride.wav');
            $scope.audio.pause();
            $scope.audio.currentTime = 0;;

            //}
        }
        $scope.photoPageOpen = false;
          $scope.openPhotoPage = function () {
            console.log("CLICKED")
            if (!$scope.photoPageOpen) {
                $scope.fadein = false;
                $scope.fadeout = true;

                $timeout(function () {
                    $scope.photoPageOpen = true;
                    $scope.codingPageOpen = false;
                    $scope.contactPageOpen = false;
                    $scope.shineHomeOpen = false;
                    $scope.musicPageOpen = false;
                    $scope.fadeout = false;
                    $scope.fadein = true;

                }, 500)
                $timeout(function () {
                    $scope.codeDisplay = true;
                    $scope.fadeinCodeDisplay = true;
                }, 1300)
                $timeout(function () {
                    $scope.navBar = true;
                }, 2100)

            }     if (!$scope.photoPageOpen && ($scope.musicPageOpen || $scope.codingPageOpen)) {
console.log("music page open")
                    $scope.fadeinright = false;
                $scope.fadeinup = false
                $scope.fadeoutup = true;
                $scope.fadeinleft = false
                $scope.fadeoutleft = true;
                $scope.fadeoutright = true;
                $scope.fadeindown = false;
                $scope.fadeoutdown = true


                $timeout(function () {
                    $scope.photoPageOpen = true;
                    $scope.contactPageOpen = false;
                    $scope.codingPageOpen = false;
                    $scope.shineHomeOpen = false;
                    $scope.musicPageOpen = false;
                    $scope.fadeout = false;
                    $scope.fadein = true;
                    $scope.fadeoutleft = false;
                    $scope.fadeoutright = false;
                    $scope.fadeinleft = true;

                    $scope.fadeinright = true;
                    $scope.fadeoutup = false;
                    $scope.fadeoutdown = false

                    $scope.fadeindown = true;

                    $scope.fadeinup = true
                    $scope.fadeouthome = false;
                    $scope.fadeinhome = true;
                    $scope.fadeinright = true;

                }, 500)
                $timeout(function () {
                    $scope.codeDisplay = true;
                    $scope.fadeoutCodeDisplay = false;
                    $scope.fadeinCodeDisplay = true;
                }, 1200)
                $timeout(function () {
                    $scope.navBar = true;
                }, 2100)

            } 
        }
        $scope.openCodingPage = function () {
            console.log("CLICKED")
            if (!$scope.codingPageOpen) {
                $scope.fadein = false;
                $scope.fadeout = true;

                $timeout(function () {
                    $scope.codingPageOpen = true;
                    $scope.shineHomeOpen = false;
                    $scope.musicPageOpen = false;
                    $scope.fadeout = false;
                    $scope.fadein = true;

                }, 500)
                $timeout(function () {
                    $scope.codeDisplay = true;
                    $scope.fadeinCodeDisplay = true;
                }, 1300)
                $timeout(function () {
                    $scope.navBar = true;
                }, 2100)

            }     if (!$scope.codingPageOpen && ($scope.musicPageOpen || $scope.contactPageOpen || $scope.photoPageOpen)) {
console.log("music page open")
                    $scope.fadeinright = false;
                $scope.fadeinup = false
                $scope.fadeoutup = true;
                $scope.fadeinleft = false
                $scope.fadeoutleft = true;
                $scope.fadeoutright = true;
                $scope.fadeindown = false;
                $scope.fadeoutdown = true


                $timeout(function () {
                    $scope.codingPageOpen = true;
                    $scope.shineHomeOpen = false;
                    $scope.contactPageOpen = false;
                    $scope.photoPageOpen = false;
                    $scope.musicPageOpen = false;
                    $scope.fadeout = false;
                    $scope.fadein = true;
                    $scope.fadeoutleft = false;
                    $scope.fadeoutright = false;
                    $scope.fadeinleft = true;

                    $scope.fadeinright = true;
                    $scope.fadeoutup = false;
                    $scope.fadeoutdown = false

                    $scope.fadeindown = true;

                    $scope.fadeinup = true
                    $scope.fadeouthome = false;
                    $scope.fadeinhome = true;
                    $scope.fadeinright = true;

                }, 500)
                $timeout(function () {
                    $scope.codeDisplay = true;
                    $scope.fadeoutCodeDisplay = false;
                    $scope.fadeinCodeDisplay = true;
                }, 1200)
                $timeout(function () {
                    $scope.navBar = true;
                }, 2100)

            } 
        }
    })

}());