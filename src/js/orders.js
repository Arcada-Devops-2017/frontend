/*
@dev not sure if this is working.
*/
function orders(token){

  /*
  @dev nuff said. specify the domain which has the api.
  */

  var token = window.localStorage.getItem(AuthToken);
  var url = "orders.arcada.nitor.zone/";

  /*
  @dev the function require a token in the parameter.
       after using the token, all orders for specific token should be displayed.
       the shipping information is displayed in a html id named shipping_info.
  */
  $.getJSON(url + "api/FetchAll?AuthToken='" + token + "'", function(result) {
    $('#order_info').append(result.orderId + ":" + result.orderDate);
    $.each(result.product, function() {
      $('#order_list').append(
        this.id + " "
        + this.storeId + " "
        + this.amount + " "
        + this.price
      );
    });
    $('shipping_info').append(
      result.shippingInfo[0].firstName + " "
      + result.shippingInfo[0].lastName + " "
      + result.shippingInfo[0].phoneNumber + " "
      + result.shippingInfo[0].address + " "
      + result.shippingInfo[0].postalCode + " "
      + result.shippingInfo[0].country + " "
      + result.shippingInfo[0].eta);
  });
}
