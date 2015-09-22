
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});





function formatCurrency(num)
{
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num))
    {
        num = "0";
    }

    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    cents = num % 100;
    num = Math.floor(num / 100).toString();

    if (cents < 10)
    {
        cents = "0" + cents;
    }
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
    {
        num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
    }

    return (((sign) ? '' : '-') + '$' + num + '.' + cents);
}


// counter starts at 0
Session.setDefault('counter', 0);

Template.registerHelper('prizepoolBTC',function(input){
  var satoshis = Session.get("prizepool");  
  var dispbalance = satoshis / 100000000;
  return dispbalance.toFixed(4);
});

Template.registerHelper('prizepoolUSD',function(input){
  var satoshis = Session.get("prizepool"); 
  var rate = Session.get("rate");
  var btc = satoshis / 100000000;
  var dollars = parseInt(rate) * btc;
  return formatCurrency(dollars);
});


var rate = Session.get("rate");


Meteor.startup(function () {
  // Grab the balance of that
  Meteor.call("checkPrizePool", function(error, results) {
    var prizepool = results.data.final_balance;
    Session.set('prizepool', prizepool);
    console.log("Fetched prize pool wallet balance: " + prizepool); 
  });

  Meteor.call("getBtcRate", function(error, results) {
    var rate = results.data.USD.last;
    Session.set('rate', rate);
    console.log("Fetched blockchain.info 'last' price: " + rate);
  });
});
