
/*
app.directive("tabelUser",function(){
 return{
  restrict:'EA',


 }
});
*/

app.directive('objectExplain', function() {
  return {
    replace:true,
    template: '<code data-toggle="tooltip" >{{htmlTagName}}</code>'
  };
});

app.directive('pyIfTip',function(){
  return{
      replace:true,
    template:'<code data-toggle="tooltip"  >{{pyIfO.htmlTagName}}</code>'
  };
});

app.directive('pyIf',function(){
  return{
    replace:true,
    template:'<code  >{{pyIfO.htmlTagName}}</code>'

  };
});
app.directive('tA',function(){
  return{
    restrict:'E',
    replace:true,
    template:'<code > {{angel3}}</code>'

  };
});
app.directive('tD',function(){
  return{
    restrict:'E',

    template:'<code > {{dot3}}</code>'

  };
})
app.directive('builtInWith',function(){
return{  replace:true,
  restrict:'E',
   template:'<code style:"color:blue" ng-bind="">{{BuilINWith}}</code>'
 }
 });
app.directive('oops',function(){
 return{
	   restrict:'E',
   template:'<code  ng-bind="">{{OOPS}}</code>'
 }});