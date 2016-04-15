(function(){
	app.controller("paymentTrackerController",['$rootScope', '$scope','paymentTrackerService','$http','$templateCache','uiGridConstants','uiGridService', paymentTrackerfun]);
	function paymentTrackerfun($rootScope,$scope,paymentTrackerService,$http, $templateCache, uiGridConstants, uiGridService){
		console.log("controller");
		$rootScope.tableTabs = [{
            title: 'Details',
            url: 'details.tpl.html'
        }, {
            title: 'History',
            url: 'history.tpl.html'
        }];

	    
		$scope.gridOptions = {};
		$scope.gridOptions = {
		    enableSorting: true,
		    enableFiltering: true,
		    enableExpandableRowHeader: false,
		    expandableRowTemplate: 'com/views/expandableRowTemplate.html',
		    expandableRowHeight: 150,
		   /* expandableRowScope: {
			      subGridVariable: 'subGridScopeVariable'
			},*/
			enableHorizontalScrollbar : uiGridConstants.scrollbars.NEVER,
			enableVerticalScrollbar : 0,
		    columnDefs: [
		      {
				    // Add a new column with your icon
				  	name: 'Expandable',
				  	displayName: '',
				  	enableSorting: false,
				  	headerCellClass: 'header-cell',
				  	cellClass: 'center-align',
				  	enableCellEdit: false,
				  	enableColumnMenu: false,
				  	enableFiltering: false,
				  	width: 50,
				  	//cellTemplate: "<div style= \"height:32px \" class=\"ui-grid-row-header-cell ui-grid-expandable-buttons-cell\"><div class=\"ui-grid-cell-contents\"><i ng-class=\"{ 'ui-grid-icon-plus-squared' : !row.isExpanded && row.entity.subGridOptions.data.length !== 0, 'ui-grid-icon-minus-squared' : row.isExpanded, 'ng-grid-cell': row.entity.subGridOptions.data.length == 0 }\" ng-click=\"grid.api.expandable.toggleRowExpansion(row.entity)\"></i></div></div>"
				  	cellTemplate: "<div style= \"height:32px \" class=\"ui-grid-row-header-cell ui-grid-expandable-buttons-cell\"><div class=\"ui-grid-cell-contents\"><i ng-class=\"{ 'ui-grid-icon-plus-squared' : !row.isExpanded, 'ui-grid-icon-minus-squared' : row.isExpanded}\" ng-click=\"grid.api.expandable.toggleRowExpansion(row.entity)\"></i></div></div>"
				
				},
		      { 
		      	field: 'branch',
		      	name: 'BRANCH', 
		      	enableCellEdit: false,
		      	enableColumnMenu: false
		      },
		      { 
		      	field: 'swiftMsgFlow',
		      	displayName:'Direct',
		      	enableColumnMenu: false
		      },
		      { 
		      	field: 'swiftMsgType',
		      	displayName:'SWITCH MSG TYPE',
		      	enableColumnMenu: false
		      },
		      { 
		      	field: 'swiftReference',
		      	displayName:'SWIFT REFERENCE',
		      	enableColumnMenu: false
		      },
		      { 
		      	field: 'tradeId',
		      	displayName:'TRADE ID',
		      	enableColumnMenu: false 
		      },
		      { 
		      	field: 'sourceBIC',
		      	displayName:'SOURCE BIC',
		      	enableColumnMenu: false 
		      },
		      { 
		      	field: 'destinationBIC',
		      	displayName:'DESTINATION BIC', 
		      	enableColumnMenu: false
		      },
		      { 
		      	field: 'currency', 
		      	displayName:'CCY', 
		      	enableColumnMenu: false
		      },
		      { 
		      	field: 'amount', 
		      	displayName: 'AMOUNT',
		      	enableColumnMenu: false
		      },
		      { 
		      	field: 'currentStatus', 
		      	displayName: 'Status',
		      	enableColumnMenu: false
		      },
		      { 
		      	field: 'creationDate', 
		      	displayName: 'Update Time(EST)',
		      	enableColumnMenu: false
		      },
		      { 
		      	field: 'time', 
		      	displayName: 'Time',
		      	enableColumnMenu: false
		      },
		      { 
		      	field: 'comments', 
		      	displayName: 'comments',
		      	enableColumnMenu: false,
		      	enableFiltering: false,
		      	cellTooltip:function( row, col ) {
		          return 'Name: ' + row.entity.name + ' Company: ' + row.entity.company;
		        }
		      },
		      { 
	      		field: 'action',
	      		name: 'Action',
	      		enableColumnMenu: false,
	      		cellEditableCondition: false,
	      		enableFiltering: false,
		       	//cellTemplate: '<div class="ui-grid-cell-contents ng-binding ng-scope"><button ng-click="edit($event, row)"><span class="glyphicon glyphicon-trash"></span></button></div>' 
		       	cellTemplate: '<div class="ui-grid-cell-contents"><button id="editBtn" class="gridBtn" ng-click="grid.appScope.edit($event, row)" ><span class="glyphicon glyphicon glyphicon-list-alt"></span></button><button id="editBtn" class="gridBtn" ng-click="grid.appScope.edit($event, row)" ><span class="glyphicon glyphicon glyphicon-pencil"></span></button></div>'
			  }
		    ],


		   onRegisterApi: function (gridApi) {
		    	console.log("ddd");
		    	$scope.gridApi = gridApi;
		    	gridApi.expandable.on.rowExpandedStateChanged($scope, function (row) {
		    		//var height = parseInt(uiGridService.removeUnit($scope.jdeNewUserConflictsGridHeight,'px'));
		    		//console.log("height" + height);
                	//var changedRowHeight = parseInt(uiGridService.getGridHeight(row.entity.subGridNewUserConflictsGrid, true));
	            	angular.forEach($scope.gridApi.grid.rows,function(r){
                                                        if(row !==r){
                                                                                                                                                                                
                                                                r.isExpanded =false;                                                            
                                                        }
                                                        
                                        });
	            	if (row.isExpanded) {
	            		//height += changedRowHeight;
	            	 	var testData = [
                            {
                                "availabilityDate": "2015-04-01T04:18:51.080Z",
                                "availabilityDay": ['Sun', 'Mon', 'Tues'][Math.floor(Math.random() * 3)],
                                "availabilityStartTime": "2015-04-01T05:18:51.105Z",
                                "availabilityEndTime": "2015-04-02T03:18:51.110Z",
                                "available": false,
                                "id": "551b71d8921933a6cbc90495",
                                "workerId": "5500d45b1d1dff783e895f72"
                            },
                            {
                                "availabilityDate": "2015-04-01T04:18:51.080Z",
                                "availabilityDay": ['Sun', 'Mon', 'Tues'][Math.floor(Math.random() * 3)],
                                "availabilityStartTime": "2015-04-01T06:18:51.105Z",
                                "availabilityEndTime": "2015-04-01T05:18:51.110Z",
                                "available": false,
                                "id": "551b71d8921933a6cbc90496",
                                "workerId": "5500d45b1d1dff783e895f72"
                            }
                        ];
						row.entity.subGridOptions = {
	                  	enableHorizontalScrollbar : uiGridConstants.scrollbars.NEVER,
						enableVerticalScrollbar : uiGridConstants.scrollbars.NEVER,
						enableSorting: false,
		    			enableColumnMenu: false,
	                    columnDefs: [
		                    { 
						      	field: 'branch',
						      	name: 'BRANCH', 
						      	enableCellEdit: false,
						      	enableColumnMenu: false
						      },
						      { 
						      	field: 'swiftMsgFlow',
						      	displayName:'Direct',
						      	enableColumnMenu: false
						      },
						      { 
						      	field: 'swiftMsgType',
						      	displayName:'SWITCH MSG TYPE',
						      	enableColumnMenu: false
						      },
						      { 
						      	field: 'swiftReference',
						      	displayName:'SWIFT REFERENCE',
						      	enableColumnMenu: false
						      },
						      { 
						      	field: 'tradeId',
						      	displayName:'TRADE ID',
						      	enableColumnMenu: false 
						      },
						      { 
						      	field: 'sourceBIC',
						      	displayName:'SOURCE BIC',
						      	enableColumnMenu: false 
						      },
						      { 
						      		field: 'action',
						      		name: 'Action',
						      		enableColumnMenu: false,
						      		cellEditableCondition: false,
						      		enableFiltering: false, 
							       	//cellTemplate: '<div class="ui-grid-cell-contents ng-binding ng-scope"><button ng-click="edit($event, row)"><span class="glyphicon glyphicon-trash"></span></button></div>' 
							       	cellTemplate: '<div class="ui-grid-cell-contents"><button id="editBtn" class="gridBtn" ng-click="grid.appScope.showDialogue($event, row)" ><span class="glyphicon glyphicon glyphicon-list-alt"></span></button><button id="editBtn" class="gridBtn" ng-click="grid.appScope.edit($event, row)" ><span class="glyphicon glyphicon glyphicon-pencil"></span></button></div>'
								  }
		                  ]
	              		};

	              		$http.get('data/100.json')
	                    .success(function(data) {
	                      	row.entity.subGridOptions.data = data;
	                      	$scope.subgridHeight = uiGridService.getGridHeight(row.entity.subGridOptions);
		 					angular.element(".expandableRow").css("height",$scope.subgridHeight + 50);
		 					console.log($scope.subgridHeight);
	                    });
	              		row.entity.subData = testData;
	 				
	                } else {
	                	//height -= changedRowHeight;
	                }
	                //$scope.jdeNewUserConflictsGridHeight = height + 'px';
	                
	            });
	        }
      
		    
		 };
		
		$scope.getRecordsList = function(selectedValue,enterInstitute){
		 	paymentTrackerService.getPaymentRecords().then(function(data){  	
				$scope.gridOptions.data = data;
				console.log(uiGridService);
				$scope.gridHeight = uiGridService.getGridHeight($scope.gridOptions);
			},
			function(data){
				console.log("error");
			});
		}
	
		$scope.getRecordsList();
			$scope.addNewItem=function(){
			$scope.data.push( { name: 'Test add ', title: 'Test add' });
	    };

		 $scope.edit = function(event, row) {
		 	console.log(row.entity);
		 	angular.element(".ui-grid-cell-focus").css("background-color", "#b3c4c7");

		 }


	}

	app.controller("viewOne", ['$scope', '$mdDialog','uiGridService', function ($scope, $mdDialog, uiGridService) {
		
		$scope.onClickTableTab = function (tab) {
		 	$scope.currentTableTab = tab.url;
		 	
		 	console.log($scope.subgridHeight);
	    }
	    
	    $scope.isActiveTableTab = function(tabUrl) {
	        return tabUrl == $scope.currentTableTab;
	    }
	    $scope.currentTableTab = 'details.tpl.html';
	    $scope.showDialogue = function(event, row) {
			$scope.showTabDialog(event);
		}
	    $scope.showTabDialog = function(ev) {
		    $mdDialog.show({
		      controller: DialogController,
		      templateUrl: 'com/views/tabDialog.tmpl.html',
		      parent: angular.element(document.body),
		      targetEvent: ev,
		      clickOutsideToClose:true
		    }).then(function(answer) {
	          $scope.status = 'You said the information was "' + answer + '".';
	        }, function() {
	          $scope.status = 'You cancelled the dialog.';
	        });
		} 
		 
		 
		function DialogController($scope, $mdDialog) {
			$scope.hide = function() {
				$mdDialog.hide();
			};
			$scope.cancel = function() {
				$mdDialog.cancel();
			};
			$scope.answer = function(answer) {
				$mdDialog.hide(answer);
			};
		}


	}]);


}());