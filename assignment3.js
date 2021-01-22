
// Github_Link:https://github.com/mdazim14/Assignment-3


// problem solving no-1 ************start************

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}


// problem solving no-2 ************start************


function budgetCalculator( wacth, phone, laptop ) {
   var watchPrice = wacth*50;
   var phonePrice = phone*100;
   var laptopPrice = laptop*500;
   return totalPrice = watchPrice + phonePrice + laptopPrice;
}


// problem solving no-3 ************start************

function animalCalculator(day) {  
var amount = 0;
if(day<=10){
    amount = day*100;
}
else if(day<=20){
    var firstPart = 10 * 100;
    var remaining = day - 10;
    var secondPart = remaining  * 80;
    amount = firstPart + secondPart;
}
else{
    var firstPart = 10*100;
    var secondPart = 10*80;
    var remaining = day - 20;
    var thirdPart = remaining * 50;
    amount = firstPart + secondPart + thirdPart;
}
return amount;
}


// problem solving no-4 ************start************

function megaFriend(names) {
var lgth = 0;
var longest;
for (var i = 0; i < names.length; i++) {
    if (names[i].length > lgth) {
      var lgth = names[i].length;
      longest = names[i];
    }
  }
  return longest;
}