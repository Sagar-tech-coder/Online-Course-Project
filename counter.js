/*
$(document).ready(function() {

    var counters = $(".counter");
    var countersQuantity = counters.length;
    var counter = [];
  
    for (i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }
  
    var count = function(start, value, id) {
      var localStart = start;
      setInterval(function() {
        if (localStart < value) {
          localStart++;
          counters[id].innerHTML = localStart;
        }
      }, 40);
    }
  
    for (j = 0; j < countersQuantity; j++) {
      count(0, counter[j], j);
    }
  });
  */

//   #####################################################################################

let count = document.getElementsByClassName("counter");
let increment = [];
function counterFunction (){
    for (let i=0; i<count.length; i++){
        increment.push(1);
        console.log(increment);
    }
}

counterFunction();