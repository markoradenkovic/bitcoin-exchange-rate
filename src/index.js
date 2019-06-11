import Chart from 'chart.js';

window.onload = function () {

  // Load the line chart with default mockup bitcoin values
  var myChart = new Chart(document.getElementById("myChart"), {
  type: 'line',
  data: {
    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    datasets: [{
        data: [4000,4500,5000,4400,7000,8800,7700,6900,7300, 7990],
        label: "Past 30 Days",
        borderColor: "#3e95cd",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Bitcoin Price History Powered by CoinDesk ($USD)'
    }
  }
});

  getPriceHistory();
  console.log("Window Loaded");
};

const axios = require('axios');

function getPriceHistory(){
  // Make a request for a user with a given ID
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-02-01&end=2019-02-28')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}

function getBitcoinPrice(){
  // Make a request for a user with a given ID
  axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}
