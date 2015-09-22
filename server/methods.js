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