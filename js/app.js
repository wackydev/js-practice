const Phone = 100;
const Accessories = 50;
const Tax = 4.40;
const Spending = 500;
var name = prompt('Please! Enter your name');
var bankBalance = prompt('Please! Enter your bank balance');
var amount = 0;
var phonePurchased = 0;
var accPurchased = 0;

while(amount < bankBalance) {
  amount += Phone;
	phonePurchased += 1;
  if(amount < Spending) {
    amount += Accessories;
		accPurchased += 1;
  }
}

function calculateTax(amount) {
  return amount += Tax;
}
function formatAmount(amount) {
  return "$" + amount;
}
function capitalize(name) {
	var firstLetter = name.charAt(0).toUpperCase();
	var nameSlice = name.slice(1);
	return firstLetter + nameSlice;
}

amount = calculateTax(amount);

if(amount < bankBalance) {
  console.log('Congrats! Thanks for purchasing');
} else {
  console.log("Sorry! you can't afford");
}
console.log('Mr/Mrs ' + capitalize(name));
console.log('Total Phone Purchased: ' + phonePurchased);
console.log('Total Accessories Purchased: ' + accPurchased);
console.log('Your Bank Balance:' + formatAmount(bankBalance));
console.log("Total Purchased Amount: " + formatAmount(amount));
