/*
@dev not sure if this is working. refreshes all the time!
*/
products();

function productStrings(products, i) {
  var products = "
      <div class='flex-item' onclick='document.getElementById('product"+products[i].id+"').style.display='block'' style='width:auto;'>\
        <p class='price'>"+products[i].price+"</p>\
        <div class='align-middle'>\
            <div class='product-image'>"+products[i].picture+"</div>\
            <p class='product-name'>"+products[i].name+"</p>\
            <p class='product-origin'></p>\
            <p class='product-category'>"+products[i].category+"</p>\
        </div>\
        <div id='product"+products[i].id+"' class='modal'>\
          <div class='modal-content animate'>\
            <div class='container'>\
                <div class='preview-image'>"+products[i].picture+"</div>\
              <div class='information-box'>\
                  <h1 class='price-preview'>"+products[i].price+"</h1>\
                  <p class='product-name-preview'>"+products[i].name+"</p>\
                  <p class='product-category-preview'>"+products[i].category+"</p>\
                  <p class='product-origin-preview'></p>\
                  <p class='description'>"+products[i].description+"</p>\
                  <p class='tags'>"+products[i].tags+"</p>\
                <div class='availability'>\
                  <h3>Available in</h3>\
                    <ul>\
                      <li class='green' onload='checkAvailable();'>hurr hurr - shop</li>\
                      <li class='red' onload='checkAvailable();'>hurr hurr2 - shop</li>\
                    </ul>\
                </div>\
              </div>\
                <button type='button' class='button' onclick='addToCart();'>Buy</button>\
            </div>\
          </div>\
        </div>\
      </div>\
      ";
      return products;
}


function products(){

  /*
  @dev display all the products on html id list_products.
       iterate through the existing list of products.
  */
  var url = "http://product.arcada.nitor.zone/";

  /*
  @dev get json from url, specify the data on which row on .each.
       function executed will list on id, the current name, ... ~
       data.products (read from json products)
  */
  $.getJSON(url + "api/list-products.php", function(data) {
    var products = data.products;

    for(var i in products) {

        $("div[class*='flex-container wrap']").append(productStrings(products, i));
    }
  });
}
