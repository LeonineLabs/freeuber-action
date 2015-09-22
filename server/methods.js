Meteor.startup(function () {
//process.env.MAIL_URL = 'smtp://freeuber819381923:Uu2pm556@smtp.sendgrid.net:587';

console.log(process.env.MONGO_URL);
process.env.MAIL_URL = 'smtp://freeuber819381923:Uu2pm556@smtp.sendgrid.net:587';
//console.log(process.env.MONGO_URL);
    // "ROOT_URL": "http://action.freeuber.org",
    // "MONGO_URL": "mongodb://hiuiufhasdif:fR13hfiu215@candidate.50.mongolayer.com:10704,candidate.51.mongolayer.com:10566/freeuber?replicaSet=set-56013ce732a097e8e9001279",
    // "MAIL_URL": "smtp://freeuber819381923:Uu2pm556@smtp.sendgrid.net:587"
});

Meteor.methods({
  checkPrizePool: function () {
    this.unblock();
    return Meteor.http.call("GET", "https://blockchain.info/address/1Jyv7XuassQzR9QVHeHyk4ZEiKhtPnAjaX?format=json");
  },

  getBtcRate: function () {
    this.unblock();
    return Meteor.http.call("GET", "https://blockchain.info/ticker");
  }
});