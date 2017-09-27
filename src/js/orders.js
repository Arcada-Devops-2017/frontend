/*
@dev not sure if this is working.
*/
//function orders(token)
function orders(){

  /*
  @dev nuff said. specify the domain which has the api.
  */

  //var token = window.localStorage.getItem(AuthToken);
  //var url = "orders.arcada.nitor.zone/";
  var url = 'http://people.arcada.fi/~bomanbjo/DevOps/ordersReturnJson.json';

  /*
  @dev the function require a token in the parameter.
       after using the token, all orders for specific token should be displayed.
       the shipping information is displayed in a html id named shipping_info.
  */
  var jsonResponse;
  fetch(url).then(function(response) {
		// Convert to JSON   
		
		return response.json();
	}).then(function(orderResponse) {
		// orderResponse is a javascript json object
		console.log(orderResponse); 
		var jsonResponse = orderResponse.orderData;
		
		console.log(orderResponse.orderData[0]);
		//document.getElementById("dummy").innerHTML = orderResponse.orderData[0].orderDate;
		
		//dummyn--->
		var test = {test:"origin"}; 
		var ordersBeer1 = {id:0, storeId:"Doe", amount:"46", price:"92"};//price? total or per item
		var productsBeer1 = {productName:"Corona", price:"2", picture:"media/corona.png"};
		//<---
		
		/*******/
		/**************/
		//http://www.9bitstudios.com/2016/01/asynchronous-processes-inside-of-a-loop-in-javascript/
		/**************/
		/*******/
		
		var myTable = ""; 
		for(i = 0;i < orderResponse.orderData.length; i++){
				
			var productId = jsonResponse[i].product.id;
			var productAmount = jsonResponse[i].product.amount;
			console.log("TEST 2: "+productAmount);
				
			//http://product.arcada.nitor.zone/api/products.php?id=0
			var url = 'http://people.arcada.fi/~bomanbjo/DevOps/productJsonId=' + productId + '.json';
				
			fetch(url).then(function(response2) {
				// Convert to JSON   
				return response2.json();
				
			}).then(function(productResponse) {
				console.log(productResponse); 
				console.log("TEST 2: "+productAmount);
				//console.log("TEST 3: "+jsonResponse[i].product.amount);
			
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
				
				document.getElementById("dummy").innerHTML = myTable;
			})
			
		}
		//var myTable = '<p>humbug</p>';
			
		
	});
	
  //$.getJSON(url /*+ "api/FetchAll?AuthToken='" + token + "'"*/, function(result) {
    /*$('#order_info').append(result.orderId + ":" + result.orderDate);
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