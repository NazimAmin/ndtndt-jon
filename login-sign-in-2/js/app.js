(function() {
    /**
     * @ngdoc function
     * @name ndtndtApp.controller:MainCtrl
     * @description
     * # MainCtrl
     * Controller of the ndtndtApp
     */
    var app = angular.module('ndtndtApp', []);

    app.controller('ItemCtrl', function() {
        this.product = item;
    });
    app.controller('UserCtrl', function() {
        this.accounts = user;
    });
    app.controller('StarCtrl', function() {
        this.numOfStars = stars;
    });

    app.controller('BidCtrl', function() {
        this.bids = {};

        this.addBid = function(price) {
            price.push(this.bids);
            user.bidPrice = price;
            user.push(item.bidders);
        };
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
            if (input) {
                start = +start; //parse to int
                return input.slice(start);
            }
            return [];
        }
    });
    //users
    var user = {
        name: "user",
        location: "MN",
        bidPrice: null,
        image: "images/guy.jpg"
    };

    //bids

    var item = {
        name: 'Boxers',
        price: 3,
        bidders: [{
            name: "Guy 1",
            location: "NY",

            bidPrice: 13,


            image: "images/guy.jpg"
        }, {
            name: "Guy 2",
            location: "LA",

            bidPrice: 15,


            image: "images/this other guy.jpg"
        }],

        size: 'L',
        description: "cool boxers bruh",
        image: ["../images/onlyny1.jpg", "../images/onlyny2.jpg", "../images/onlyny3.jpg", "../images/onlyny4.jpg"]

    };

})();