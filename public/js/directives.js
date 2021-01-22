(function () {

	var app = angular.module('storeDirectives', []);

	//var hearto = 0;
	//var status =0;


	app.directive('adminBookingsPage', function () {


		return {

			restrict: 'E',
		
			templateUrl: '../views/pages/adminbookingpage.html',
			controller: function () {
		
			},
			controllerAs: "bookingpage"
		}
	});
	app.directive('bookingPage', function () {


		return {

			restrict: 'E',
		
			templateUrl: '../views/pages/bookingpage.html',
			controller: function () {
		
			},
			controllerAs: "bookingpage"
		}
	});
	app.directive('eightToNine', function () {


		return {

			restrict: 'E',
			
			templateUrl: '../views/8-9.html',
			controller: function () {
			},
			controllerAs: "eighttonine"
		}
	});

		


	app.directive('nineToTen', function () {


		return {

			restrict: 'E',
			scope: true,

			link: function (scope, element, attrs) {
			
			},
			templateUrl: '../views/9-10.html',
			controller: function () {
				this.discoveryData2 = {
					type: "",
					test: "",
					time: ""
				}
				this.submitBooking2 =  function () {
					console.log(this.discoveryData2)
					console.log(scope)
				}

			},
			controllerAs: "ninetoten"
		}
	});
	app.directive('composeMessagePage', function () {


		return {

			restrict: 'E',
			templateUrl: '../views/compose-message-page.html',
			controller: function () {
				this.imageIndex = 0;
				this.currentImageChange = function (imageNumber) {
					console.log(imageNumber);
					this.imageIndex = imageNumber || 0;
				};
			},
			controllerAs: 'gallery'
		}

	});
	app.directive('messagePage', function () {


		return {

			restrict: 'E',
			templateUrl: '../views/message-page.html',
			controller: function () {
				this.imageIndex = 0;
				this.currentImageChange = function (imageNumber) {
					console.log(imageNumber);
					this.imageIndex = imageNumber || 0;
				};
			},
			controllerAs: 'gallery'
		}

	});
	app.directive('timesheetPage', function () {


		return {

			restrict: 'E',
			templateUrl: '../views/timesheet-page.html',
			controller: function () {
				this.imageIndex = 0;
				this.currentImageChange = function (imageNumber) {
					console.log(imageNumber);
					this.imageIndex = imageNumber || 0;
				};
			},
			controllerAs: 'gallery'
		}

	});
	app.directive('infoPage', function () {


		return {

			restrict: 'E',
			templateUrl: '../views/info-page.html',
			controller: function () {
				this.imageIndex = 0;
				this.currentImageChange = function (imageNumber) {
					console.log(imageNumber);
					this.imageIndex = imageNumber || 0;
				};
			},
			controllerAs: 'gallery'
		}

	});
	app.directive('schedulePage', function () {


		return {

			restrict: 'E',
			templateUrl: '../views/schedule-page.html',
			controller: function () {
				this.imageIndex = 0;
				this.currentImageChange = function (imageNumber) {
					console.log(imageNumber);
					this.imageIndex = imageNumber || 0;
				};
			},
			controllerAs: 'gallery'

		}

	});
	app.directive('scheduledJobPage', function () {


		return {

			restrict: 'E',
			templateUrl: '../views/scheduled-job-page.html',
			controller: function () {

				this.imageIndex = 0;
				this.labels = ["Activity"];
				this.data = [100];
				this.currentImageChange = function (imageNumber) {
					console.log(imageNumber);
					this.imageIndex = imageNumber || 0;
				};
			},
			controllerAs: 'scheduledJob'

		}

	});
	app.directive('scheduleSDOrCiPage', function () {


		return {

			restrict: 'E',
			templateUrl: '../views/schedule-s-d-or-ci-page.html',
			controller: function () {

				this.imageIndex = 0;
				this.labels = ["Activity"];
				this.data = [100];
				this.currentImageChange = function (imageNumber) {
					console.log(imageNumber);
					this.imageIndex = imageNumber || 0;
				};
			},
			controllerAs: 'scheduledJob'

		}

	});




})();