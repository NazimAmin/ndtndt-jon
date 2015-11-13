(function(){
/**
* @ngdoc function
* @name ndtndtApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the ndtndtApp
*/
var app = angular.module('ndtndtApp',[]);

app.controller('ItemCtrl' , function(){
	this.product= item;
});
app.controller('UserCtrl', function(){
	this.accounts = users;
});
app.controller('StarCtrl', function(){
	this.numOfStars = stars;
});


app.controller('OptionCtrl', ['$scope', function($scope) {
  this.product = item;
   $scope.data = {
    repeatSelect: null,
    availableOptions: item.size,
    selectedOption: item.size[0]
    
   };
}]);

app.filter('startFrom', function() {
	return function(input, start) {
		if(input) {
start = +start; //parse to int
return input.slice(start);
}
return [];
}
});
//users

app.controller('HighestBidCtrl' , ['$scope', function($scope) {
this.users = users;
$scope.highestBid = function(bid1, bid2){

if (bid1 >bid2)
	return bid1;
 else if (bid2 > bid1)
	return bid2;
};
}]);

var users = [
{
	name : "Guy 1",
	location :"NY",
	rating: 4,
	bidPrice: 15,
	purchased: 26,
	sold: 23,
	image: "images/guy.jpg"
},{
	name :"Guy 2",
	location :"LA",
	rating:2,
	bidPrice: 13,
	purchased: 6,
	sold: 2,
	image: "images/this other guy.jpg"
}];

//bids

var item =
{
	name: 'Boxers',
	price: 3,
	curentBid: Math.max(11 ,12),
	count: 34,
	size: 'L',
    description : "cool boxers bruh",
	image: ["../images/onlyny1.jpg","../images/onlyny2.jpg","../images/onlyny3.jpg","../images/onlyny4.jpg"]

};

})();