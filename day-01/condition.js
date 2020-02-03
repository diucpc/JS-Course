/*
  (c) Copyright - Mehedi Hasan Likhon
  (c) Copyright - DIU CPC
  Date: 02 February 2020
*/

var username = 'lifeoflikhon';
var password = '123456';

if (password == '123456') {
  console.log('Weak Password. Reset password please...');
} else if (password != '123456') {
  console.log(`${username}, you are logged in!`);
} else {
  console.log(`By the way! Who are you?`);
}
