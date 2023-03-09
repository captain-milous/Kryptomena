$(document).ready(function(){

  setInterval(getTime(), 1000);

  setInterval(update(), 10000);

  /*function(){
    $("#btn-reload").click()
  }*/


});

  function getTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var timeString = hours + ':' + zeroPad(minutes) + ':' + zeroPad(seconds);
    $('#aktualni-cas').text(timeString);
  }

  function zeroPad(num) {
    if (num < 10) {
      return '0' + num;
    } else {
      return num;
    }
  }

  var BTC = {id:1, symbol:"BTC", name:"Bitcoin", price:0};
  var ETH = {id:2, symbol:"ETH", name:"Ethereum", price:0};
  var APE = {id:3, symbol:"APE", name:"ApeCoin", price:0};
  var UNI = {id:4, symbol:"UNI", name:"Uniswap", price:0};

  var krypto = [BTC,ETH,APE,UNI];

  function update() {

    var listRows = [];

    for(let i = 0; i < krypto.length; i++) {
      var id = '<th scope="row">' + krypto[i].id + '</th>';
      var symbol = '<td>' + krypto[i].symbol + '</td>';
      var name = '<td>' + krypto[i].name + '</td>';
      var price = '<td>' + krypto[i].price + '</td>';

      var row = $("<tr></tr>").text(id + symbol + name + price);
      listRows.push(row);
      console.log(listRows[i]);
    }

    for(let i = 0; i < listRows.length; i++) {
      
      var tbody = $("<tbody></tbody>").text(listRows[i]);
      listRows.push(row);
    }
    $("#my-crypto").prepend(listRows, "</tbody>");
    console.log(listRows);

    var row1 = $("<i></i>").text("love ");
    var row2 = $("<i></i>").text("love ");
    var row3 = $("<i></i>").text("love ");
    var row4

    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var timeString = 'Last update:' + hours + ':' + zeroPad(minutes) + ':' + zeroPad(seconds);
    $('#last-update').text(timeString);
  }