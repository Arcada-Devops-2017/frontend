/*
@dev not sure if this is working.
*/
//function orders(token)
function orders(){

  /*
  @dev nuff said. specify the domain which has the api.
  */

  var token = window.localStorage.getItem(AuthToken);
  var url = 'orders.arcada.nitor.zone/api/FetchAll?AuthToken="'+token+'"';
  //var url = 'http://people.arcada.fi/~bomanbjo/DevOps/ordersReturnJson.json';

  /*
  @dev the function require a token in the parameter.
       after using the token, all orders for specific token should be displayed.
       the shipping information is displayed in a html id named shipping_info.
  */
  var jsonResponse;
  //makes the API-call for orders
  fetch(url).then(function(response) {
		// Convert to JSON   
		return response.json();
	}).then(function(orderResponse) {
		// orderResponse is a javascript json object
		console.log(orderResponse); 
		var jsonResponse = orderResponse.orderData;

		var myTable = ""; 
		
		//writes html code for boxes and tables into a 
		for(i = 0;i < orderResponse.orderData.length; i++){
				
			var productId = jsonResponse[i].product.id;
			var productAmount = jsonResponse[i].product.amount;
				
			//var url = 'http://people.arcada.fi/~bomanbjo/DevOps/productJsonId=' + productId + '.json';
			var url = 'http://product.arcada.nitor.zone/api/products.php?id=' + productId;
				
				
			//makes the API-call for products
			fetch(url).then(function(response2) {
				// Convert to JSON   
				return response2.json();
				
			}).then(function(productResponse) {
				
				//makes html code for floating boxes with tabeles in them 
				myTable+= '<div class="floating-box"><table><tr><th colspan="2">Product lable to make boxes constant width</td></tr><tr><td rowspan="5"><img src="';
				myTable+= productResponse.products[0].picture;//product image
				myTable+= '" alt="';
				myTable+= productResponse.products[0].name;//product image alt text
				myTable+= '"  style="height:150px;"></td></tr><tr><td>';
				myTable+= productResponse.products[0].name;//product name
				myTable+= '</td></tr><tr><td>';
				myTable+= test["test"];//origin
				myTable+= '</td></tr><tr><td>';
				myTable+= productResponse.products[0].price;//price
				myTable+= '€</td></tr><tr><td>Amount: ';
				myTable+= productAmount;// amount
				myTable+= 'pcs</td></tr><tr><td colspan="2">Total ';
				myTable+= productResponse.products[0].price * productAmount;// totalprice
				myTable+= '€</td></tr></table></div>';
				
				document.getElementById("orders-box").innerHTML = myTable;
			})
			
		}

	});
	
	/*
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
  });*/
}