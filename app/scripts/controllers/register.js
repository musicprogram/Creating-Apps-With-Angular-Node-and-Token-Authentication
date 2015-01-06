'use strict';

angular.module('angularNodeApp').controller('RegisterCtrl', function ($scope,$rootScope,$http, alert) {
    $scope.submit = function(){

    	var url = '/';
    	var user = {};    

    	$http.post(url, user)
	    	.success(function(res){
	    		alert('Succes','Ok!','You are now registered');
	    	})
	    	.error(function(err){
	    		alert('Warning','Opps!','Could not register');
	    	});
    };


  });
