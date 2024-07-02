function makeTransaction(quantity, pricePerDroid) {
  return quantity * pricePerDroid;
}

const totalPrice = makeTransaction(5, 3000);
console.log("You ordered " + "droids worth 15000 credits!");
