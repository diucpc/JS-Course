// person = {
//   name: 'likhon',
//   age: 23,
//   institute: 'Dhaka International University',
//   bloodGroup: 'O+',

//   sleep: function() {
//     console.log('Sleep');
//   }
// };

likhonFBInfo = {
  IdName: 'Mehedi Hasan Likhon',
  userName: 'lifeoflikhon',
  friendsCount: 1005,
  postCount: 300,
  password: 'MKP&Likhon^100^100',
  friends: [
    (rahat = {
      userName: 'rahatKabir',
      mutualFreinds: 20,
      taggedPhotos: 502
    }),
    (ratul = {
      userName: 'rahatKabir',
      mutualFreinds: 20,
      taggedPhotos: 502
    }),
    'borhan',
    'subarna'
  ],

  deleteAccount: function(accountPassword) {
    if (accountPassword === this.password) {
      likhonFBInfo.delete();
    } else {
      return `You can not remove account!`;
    }
  }
};

console.log(likhonFBInfo.friends[1].mutualFreinds);
