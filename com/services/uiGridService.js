app.factory('uiGridService', function ($http, $rootScope) {

	var factory = {};
	factory.getGridHeight = function(gridOptions) {
		console.log(gridOptions);
		var length = gridOptions.data.length;
	    var rowHeight = 30; // your row height
	    var headerHeight = 40; // your header height
	    var filterHeight = 40; // your filter height
	    console.log("factory");
		return length * rowHeight + headerHeight + filterHeight + "px";
	}
	factory.removeUnit = function(value, unit) {
		return value.replace(unit, '');
	}
	return factory;
});