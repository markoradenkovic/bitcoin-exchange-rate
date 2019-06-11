import Chart from 'chart.js';

window.onload = function () {
  // Fetch the current bitcoin price
  getBitcoinPrice();
  // Fetch the last 31 days price history
  getPriceHistory();
};


const axios = require('axios');

function getBitcoinPrice(){
  var price;
  axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(function (response) {
    // handle success
    price = response.data.bpi.USD.rate;
    price = price.split('.')[0];
    console.log("Bitcoin Price: "+price+" $");
    document.getElementById("btc-price").textContent = price+" $";
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
    return price;
  });
}

function getPriceHistory(){
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?')
  .then(function (response) {
    // handle success
    var dates = [];
    var priceHistory = [];
    var target = response.data.bpi;
    console.log(target);
    for (var k in target){
      if (target.hasOwnProperty(k)) {
        var date = k;
        date = date.replace('-','');
        date = date.replace('-','');

        dates.push(date);
        priceHistory.push(target[k]);
        // console.log("Key is " + k + ", value is " + target[k]);
       }
    }
    loadChart(dates, priceHistory);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}

function loadChart(dates, priceHistory){
  // Load the line chart with default mockup bitcoin values
  var myChart = new Chart(document.getElementById("myChart"), {
  type: 'line',
  data: {
    labels: dates,
    datasets: [{
        data: priceHistory,
        label: "Past 31 Days",
        borderColor: "#3e95cd",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Bitcoin Price History Powered by CoinDesk (USD)'
    }
  }
  });
}
