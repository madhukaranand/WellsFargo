
	app.controller("globalController",['$rootScope', '$scope', globalControllerFun]);
	function globalControllerFun($rootScope, $scope){
		$scope.tabs = [{
			title: 'dashboard',
			url: 'one.tpl.html',
			tabclass: 'dashboard'
		}, {
			title: 'confirmations',
			url: 'two.tpl.html',
			tabclass: 'confirmation',
			subtab: {
				url:'',
				title: ''
			}
		}, {
			title: 'payment Tracker',
			url: 'three.tpl.html',
			tabclass: 'payment',
			subtab: {
				url:'maintenance.html',
				title: 'Maintenance'
			}
		}, {
			title: 'International Treasury Funding Tool',
			url: 'four.tpl.html',
			tabclass: 'itft'
		}, {
			title: 'Opics Report',
			url: 'five.tpl.html',
			tabclass: 'opics'
		}, {
			title: 'Mo Report',
			url: 'six.tpl.html',
			tabclass: 'moreport'
		}];


		$scope.currentTab = 'three.tpl.html';
		$scope.onClickTab = function (tab) {
			$scope.currentTab = tab.url;
		}
		$scope.isActiveTab = function(tabUrl) {
			return tabUrl == $scope.currentTab;
		};
	}

