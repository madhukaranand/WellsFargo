'use strict';

app.factory('paymentTrackerService', function ($http, $q) {
	
	return{
    	getPaymentRecords:  function(){
    		 var deferred = $q.defer();
    	     $http.get("data/100.json")
    	       .success(function(data) { 
    	    	  //console.log("Success: " + JSON.stringify(data));
    	          deferred.resolve(data);
    	       }).error(function(data) {
    	    	   console.log("Failure: " + JSON.stringify(data));
    	          deferred.reject(data);
    	       });
    	     return deferred.promise;
    	},
    	
      
    	
    	
      
    };
    
});