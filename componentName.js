"use strict";

const componentName = {
  template: `
  <form class="compatibility">
    <label>Enter your name:</label>
    <input type="text" placeholder="First name" ng-model="names.firstName">
    <label>Enter the name of your crush:</label>
    <input type="text" placeholder="Second name" ng-model="names.secondName">
    <button class="matchbtn" ng-click="$ctrl.getName(names.firstName, names.secondName)">Check Your Love Compatibility!</button>  
  </form>  
  `, 
  controller: ["$location", "MatchPercent", function($location, MatchPercent) {
    const vm = this;
    vm.getName = function(firstName, secondName) {
      const searchCriteria = {
        firstPerson: firstName,
        secondPerson: secondName

      };
    MatchPercent.searchMatch(searchCriteria).then(() => {
      $location.path("/resultComponent");
    });
    };
  }]
};


angular
  .module("loveMatch")
  .component("componentName", componentName);