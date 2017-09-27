/*
@dev retrieve the order list.
*/

$(document).ready(function(){
    $("button[type*='submit']").click(function(){ // has to be changed to match order.html

  /*
  @dev nuff said. specify the domain which has the api.
       token will be stored in var token
  */

  var token = window.localStorage.getItem(AuthToken);
  var url = "http://orders.arcada.nitor.zone/";
  var api = "api/FetchAll?AuthToken="

  /*
  @dev the function require a token in the parameter.
       after using the token, all orders for specific token should be displayed.
       the shipping information is displayed in a html id named shipping_info.
  */

  $.ajax({
     url: url + "" + api + "'" + token + "'",
     type: "GET",
     success: function (result) {
       $.each(result.product, function() {
         var $id = $('<h1>').text(this.id);
         var $storeId = $('<h1>').text(this.storeId);
         var $amount = $('<h1>').text(this.amount);
         var $price = $('<h1>').text(this.price);
         $('#order_list')
            .append($id)
            .append($storeId)
            .append($amount)
            .append($price);
       });
       console.log(result)
       alert("Successful execution.")
     },
     error: function (result) {
       console.log(result)
       alert("Failure to execute:" + result.status)
     }
     });
});
});
