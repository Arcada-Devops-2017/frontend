/*
@dev not sure if this is working.
*/
//function orders(token)
function orders(){

	/*
	@dev nuff said. specify the domain which has the api.
	*/
		try{
			var token = window.localStorage.getItem("authToken");
			var url = 'http://orders.arcada.nitor.zone/api/FetchAll?AuthToken="' + token + '"';
		}catch(error){
			var errorMessageAuth = "<h1>An error has occured</h1></br><p>Please try again</br>Invalid authToken</br>You may not be logged in</p>";
		
			document.getElementById("orders-box").innerHTML = errorMessageAuth;
		
			console.log('There has been a problem in your ORDERS fetch operation: ' + error.message);
		}

	/*
	@dev the function require a token in the parameter.
		after using the token, all orders for specific token should be displayed.
		the shipping information is displayed in a html id named shipping_info.
	*/
	var jsonResponse;
	var myTable = ""; 
   
	//makes the API-call for orders
	fetch(url).then(function(response) {
		// Convert to JSON   
		return response.json();
	}).then(function(orderResponse) {
		// orderResponse is a javascript json object
		console.log(orderResponse); 
	
		var jsonResponse = orderResponse.orderData;
		
		
		//http://product.arcada.nitor.zone/api/products.php?id=0
		//var url = 'http://people.arcada.fi/~bomanbjo/DevOps/productJsonId=' + productId + '.json';
		
		//http://product.arcada.nitor.zone/api/list-products.php?sort="id"
		var url = 'http://people.arcada.fi/~bomanbjo/DevOps/productsReturnJson.json';
			
		//makes an Api-call to products to get the whole product-list
		fetch(url).then(function(responseProduct) {
			// Convert to JSON   
			return responseProduct.json();
				
		}).then(function(productResponse) {
			
			console.log(productResponse); 
				
			//loop for oldest order first
			/*for(i = 0;i < orderResponse.orderData.length; i++){
				var productId = jsonResponse[i].product.id;
				var productAmount = jsonResponse[i].product.amount;
				var storeId = orderResponse.orderData[i].product.storeId;
				*/
				
			//loop for newest order first
			//gets product information from product-list based on productId from orders
			for(i = orderResponse.orderData.length;i > 0; i--){
				var productId = orderResponse.orderData[i-1].product.id;
				var productAmount = orderResponse.orderData[i-1].product.amount;
				var storeId = orderResponse.orderData[i-1].product.storeId;
				
					
				//console.log("TEST: "+productResponse.products[productId].picture); 
			
				myTable+= '<div class="floating-box"><table><tr><th colspan="2">Product lable to make boxes constant width</td></tr><tr><td rowspan="5"><img src="';
				myTable+= productResponse.products[productId].picture;//product image
				myTable+= '" alt="';
				myTable+= productResponse.products[productId].name;//product image alt text
				myTable+= '"  style="height:150px;"></td></tr><tr><td>';
				myTable+= productResponse.products[productId].name;//product name
				myTable+= '</td></tr><tr><td>';
				myTable+= 'origin';//origin
				myTable+= '</td></tr><tr><td>';
				myTable+= productResponse.products[productId].price;//price
				myTable+= '€</td></tr><tr><td>Amount: ';
				myTable+= productAmount;// amount
				myTable+= 'pcs</td></tr><tr><td colspan="2">Total ';
				myTable+= orderResponse.orderData[i-1].product.price;// totalprice
				//myTable+= productResponse.products[productId].price * productAmount;// totalprice
				myTable+= '€</td></tr></table></div>';
				
				
			}
			
			//prints the list of orders
			document.getElementById("orders-box").innerHTML = myTable;
				
		}).catch(function(error) {
			
			var errorMessageProducts = "<h1>An error has occured</h1></br><p>Please try again</p>";
			document.getElementById("orders-box").innerHTML = errorMessageProducts;
			
			console.log('There has been a problem in your PRODUCTS fetch operation: ' + error.message);
		});
		
			
		
	}).catch(function(error) {
		
		var errorMessageOrders = "<h1>An error has occured</h1></br><p>Please try again</p>";
		
		document.getElementById("orders-box").innerHTML = errorMessageOrders;
		
		console.log('There has been a problem in your ORDERS fetch operation: ' + error.message);
		//return;
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