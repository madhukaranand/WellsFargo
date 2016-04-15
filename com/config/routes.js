(function(){
	angular.module("app").config(['$routeProvider',
		function($routeProvider) {
		$routeProvider
		.when("/",{
			controller : "paymentTrackerController",
			templateUrl : "com/views/trackerPayment.html"
		})
		.otherwise({ redirectTo: '/' });
	}])
}());
