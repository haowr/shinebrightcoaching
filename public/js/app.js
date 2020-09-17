(function(){

//console.log("app.js loaded");

var app = angular.module('qlc',['appRoutes', 'mainController',"homeController","profileController",'storeDirectives','intakeController', 'loginController','registerController','userServices','authServices','clientProfileController'] );
												//,'angular-fullcalendar'																																				  
app.config(function($compileProvider){

	$compileProvider.preAssignBindingsEnabled(true);

});
app.controller('QlhController', [  function($scope) {
console.log("QlhController")
$scope.closeModal = function(){
	              $('#modal1').modal('close');


}


}])
}());


