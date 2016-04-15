
	var app = angular.module("app",["ui.router","ui.grid", "ui.bootstrap","ngAnimate", "ui.grid.expandable",
	                                "ui.grid.selection","ui.grid.rowEdit","ui.grid.edit", "ui.grid.cellNav",
	                                "ngMaterial" //Ashish added ngMaterial
	                                ]).
	config(function($stateProvider, $urlRouterProvider) {
		
		$stateProvider.state("/",{
			url: "/",
			controller : "paymentTrackerController",
			templateUrl : "com/views/trackerPayment.html"
		}).state("dashboard",{
			url: "/dashboard",
			controller : "paymentTrackerController",
			templateUrl : "com/views/confirmation.html"
		}).state("confirmation",{
			url: "/confirmation",
			controller : "paymentTrackerController",
			templateUrl : "com/views/confirmation.html"
		}).state("payment",{
			url: "/payment",
			views: {
		        '': {
		          templateUrl: 'com/views/trackerPayment.html',
		          controller: 'paymentTrackerController'
		        },
		        '@payment': {
			        templateUrl: 'com/views/paymentSearch.html',
			        controller: 'paymentTrackerController'
			    }
		    }
			
		}).state('payment.paymentSearch', {
		    url: '^/paymentSearch',
		    views: {
		      '': {
		        templateUrl: 'com/views/paymentSearch.html',
		        controller: 'paymentTrackerController'
		      }
		    }
		}).state('payment.maintenance', {
		    url: '^/maintenance',
		    views: {
		      '': {
		        templateUrl: 'com/views/maintenance.html',
		        controller: 'paymentTrackerController'
		      }
		    }
		}).state("itft",{
			url: "/itft",
			controller : "paymentTrackerController",
			templateUrl : "com/views/itft.html"
		}).state("opics",{
			url: "/opics",
			controller : "paymentTrackerController",
			templateUrl : "com/views/opics.html"
		}).state("moreport",{
			url: "/moreport",
			controller : "paymentTrackerController",
			templateUrl : "com/views/moreport.html"
		});
		$urlRouterProvider.otherwise('/');
	});
