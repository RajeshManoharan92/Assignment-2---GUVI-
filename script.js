var currency = new XMLHttpRequest();
currency.open ('GET','http://api.countrylayer.com/v2/currency/inr?access_key=f266d498bbd2ebc08dded9ec8347d149') ;
currency.send();
currency.onload = function() {
    console.log(JSON.parse(this.response));
}