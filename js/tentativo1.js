app.factory('tentativo1', ['$http', function($http) {
	return $http.get('https://raw.githubusercontent.com/johnpapa/ng-demos/master/grunt-gulp/data/thor.json')
	.success(function(data) {
		return data;
	}).error(function(err) {
		return err;
	});
}]);