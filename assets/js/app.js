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

var users = [
{
	name : "This Guy",
	location :"NY",
	rating: 4,
	purchased: 26,
	sold: 23,
	image: "images/guy.jpg"
},{
	name :"This Other Guy",
	location :"LA",
	rating:2,
	purchased: 6,
	sold: 2,
	image: "images/this other guy.jpg"
}];

//bids

var item =
{
	name: 'Boxers',
	price: 15,
	count: 34,
	size:[
      {id: '1', name: 'S'},
      {id: '2', name: 'M'},
      {id: '3', name: 'L'}
    ],
    description : "cool boxers bruh",
	image: ["../images/onlyny1.jpg","../images/onlyny2.jpg","../images/onlyny3.jpg","../images/onlyny4.jpg"]

};

})();