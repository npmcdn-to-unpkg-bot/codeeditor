

/*
app.service('objectExplan',function(){
this.py_object_html=function(){ // define an instance method
  return;
}
});
*/

/*
var t =angular.module('myApp.services', [])
.factory("aurthur",  function() {
   var aurthurName = "Jawahar S";
  return {
    gett : function(){return aurthurName;}
;
  };

});

app.service("objectExplan",function(){


    return {
      var py_object_html= function(){
        return '<code data-toggle="tooltip" data-title="this is a common or base of all object in pyhon">object</code>';
      }
    };
});
*/

var app = angular.module("myApp",['ngRoute']);
app.config(function( $routeProvider,$locationProvider){
 $routeProvider
 .when('/',{
 	 	controller: 'Controller',
 	templateUrl:' view/code.html'
 })
 .when('/exception-a',{
 	controller: 'Controller',
 	templateUrl:'view/exception.html'
 })

 .when('/basic-a',{
 	controller: 'Controller',
 	templateUrl:'view/basic.html'
 })
 .when('/functions-a',{
  	controller: 'Controller',
 	templateUrl:'view/function.html'
 })
 .when('/class-a',{
  	controller: 'Controller',
 	templateUrl:'view/class.html'	
 })
 .when('/class2-a',{
   	controller: 'Controller',
 	templateUrl:'view/class2.html'		
 })
.when('/basic-2-a',{
	   	controller: 'Controller',
 	templateUrl:'view/basic-2.html'		
})

 ;
   $locationProvider.html5Mode(true);
});
