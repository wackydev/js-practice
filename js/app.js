const Phone = 100;
const Accessories = 50;
const Tax = 4.40;
const Spending = 500;
var bankBalance = prompt('Please! Enter your bank balance');
var amount = 0;

while(amount < bankBalance) {
  amount += Phone;
  if(amount < Spending) {
    amount += Accessories;
  }
}

function calculateTax(amount) {
  return amount += Tax;
}
function formatAmount(amount) {
  return "$" + amount;
}

amount = calculateTax(amount);

if(amount < bankBalance) {
  console.log('Congrats! Thanks for purchasing');
} else {
  console.log("Sorry! you can't afford");
}
console.log(formatAmount(amount));
