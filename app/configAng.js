//assign the angular module to the var app
var app = angular.module("myApp", ['ngRoute']);

//configure "app" with routeProvider
app.config(($routeProvider)=> {
  $routeProvider
    //when at the base page
    .when("/", {
      //use the Home Ctrl
      controller: "homeCtrl",
      //use the partial "home"
      templateUrl : "partials/home.html"
    })
    .when("/about", {
      // use the about ctrl
      controller: "aboutCtrl",
      //use the partial "addProduct"
      templateUrl: "partials/about.html"
    })
    .when("/connect", {
      // use the connect ctrl
      controller: "connectCtrl",
      //use the partial "connect"
      templateUrl: "partials/connect.html"
    })
    .when("/projects", {
      // use the projects ctrl
      controller: "projectsCtrl",
      //use the partial "projects"
      templateUrl: "partials/projects.html"
    })
    .when("/projects/largerlocal", {
      // use the projects ctrl
      controller: "projectsCtrl",
      //use the partial "projects"
      templateUrl: "partials/largerlocal.html"
    })
    .when("/tech", {
      // use the technologies ctrl
      controller: "technologiesCtrl",
      //use the partial "technologies"
      templateUrl: "partials/technologies.html"
    })
});
