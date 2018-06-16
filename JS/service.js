"use strict";

function MatchPercent($http) {
  let finalData = {};
  const searchMatch = (searchCriteria) => {
    return $http({
      method: "GET",
      // url: 'https://love-calculator.p.mashape.com/getPercentage?fname=John&sname=Alice',
      url: `https://love-calculator.p.mashape.com/getPercentage?fname=${searchCriteria.firstPerson}&sname=${searchCriteria.secondPerson}`,
      headers: {
        "X-Mashape-Key": "t7UAg02pzOmshoPhFE5nHZN3yYc9p1O316AjsniyCiNI0yATp4",
        "Accept": "application/json"
      }
    }).then((response) => {
      finalData = response
      return response;
    }, (error) => {
      console.log(error);
    });
  };
  const returnResults = () => { return finalData; };
    return {
      returnResults,
      searchMatch
    };
}



angular
  .module("loveMatch")
  .factory("MatchPercent", ["$http", MatchPercent]);