app.controller('maincontroller', ['$scope', 'tentativo1', function($scope, tentativo1) {
	tentativo1.success(function(data) {
		$scope.tentativo1 = data;
	});
}]);