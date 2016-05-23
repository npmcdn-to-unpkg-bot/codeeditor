
/*
app.controller('TimeoutController',
function($scope) {
$scope.scheduleTask = function() {
  setTimeout(function() {
  $scope.$apply(function() { // wrapped the code in $apply()
  $scope.message = 'Fetched after 3 seconds';
  console.log('message=' + $scope.message);
  });
}, 3000);
}
});


*/


 app.controller('Controller', ['$scope', function($scope) {
   $scope.htmlTagName='object';
   $scope.keyWorldColor = "green";
   $scope.pyIfO = {tip:'this is a controll flow in python',htmlTagName:'if'};
   $scope.angel3 = ">>>";
   $scope.dot3 = "...";
   $scope.BuilINWith = "with";
   $scope.OOPS = "object-oriented programming";
   $scope.cl = function(event){
   	$("#dissable").hide();
   }
 }]);

app.controller('Controller2'['$scope',function($scope){
	
}]);