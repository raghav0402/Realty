angular.module('RoutingApp', ['ngRoute'])
	.config( ['$routeProvider', function($routeProvider) {
		$routeProvider
	    	.when('/home', {
                templateUrl: 'home.html'
            })
			.when('/about', {
				templateUrl: 'about.html'
			})
			.when('/post', {
				templateUrl: 'postAd.html'
			})
			.when('/contact', {
				templateUrl: 'contact.html'
			})
			.otherwise({
				redirectTo: '/home'
			});
	}]);
	
	
angular.module('RoutingApp')
    .directive('bsActiveLink', ['$location', function ($location) {
    return {
        restrict: 'A', //use as attribute 
        replace: false,
        link: function (scope, elem) {
            //after the route has changed
            scope.$on("$routeChangeSuccess", function () {
                var hrefs = ['/#' + $location.path(),
                             '#' + $location.path(), //html5: false
                             $location.path()]; //html5: true
                angular.forEach(elem.find('a'), function (a) {
                    a = angular.element(a);
                    if (-1 !== hrefs.indexOf(a.attr('href'))) {
                        a.parent().addClass('active');
                    } else {
                        a.parent().removeClass('active');   
                    };
                });     
            });
        }
    }
}]);