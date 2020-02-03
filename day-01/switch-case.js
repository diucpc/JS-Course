/*
  (c) Copyright - Mehedi Hasan Likhon
  (c) Copyright - DIU CPC
  Date: 02 February 2020
*/

var choose = '1';

switch (choose) {
  case 1:
    cashIn();
    break;

  case 2:
    checkBalance();
    break;

  case 3:
    cashOut();
    break;

  default:
    return `Wrong Input!`;
}

// Functions
var getAmount = (amount) => amount;
var getPIN = (PIN) => PIN;

function cashIn(recieverNumber, amount = getAmount(10000), PIN = getPIN(8880)) {
  if (recieverNumber == true) {
    if (amount <= 10000) {
      if (PIN == 8880) {
        return `Cash In Succeed!`;
      }
    }
  }
}
