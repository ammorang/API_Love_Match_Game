"use strict";

angular
  .module("loveMatch", ["ngRoute"])
  .config(function($routeProvider) {
    $routeProvider
      .when("/componentName", {
        template: "<component-name></component-name>"
      })
      .when("/resultComponent", {
        template: "<result-component></result-component>"
      })
      .otherwise("/componentName");
  });