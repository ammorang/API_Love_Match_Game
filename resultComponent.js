"use strict";

const resultComponent = {
  template: `
  <div class="result">
    <p>The compatibility of {{ $ctrl.result.data.fname }} and {{ $ctrl.result.data.sname }} is {{ $ctrl.result.data.percentage }}%.</p>
    <p> {{ $ctrl.result.data.result }} </p>
    <p> Try your luck with someone else? </p>
  </div>
  `,
  controller: ["MatchPercent", function(MatchPercent) {
    const vm = this;
    vm.result = MatchPercent.returnResults();
    console.log(vm.result);
  }]
}

angular
  .module("loveMatch")
  .component("resultComponent", resultComponent);