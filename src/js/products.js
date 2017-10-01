/*
@dev not sure if this is working. refreshes all the time!
*/
products();

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
      $("div[class*='flex-container wrap']")
      .append("<div class='flex-item' onclick='document.getElementById('product"+products[i].id+"').style.display='block'' style='width:auto;'>")
      .append("<p class='price'>"+products[i].price+"</p>")
      .append("<div class='align-middle'>")
      .append("<div class='product-image'>"+products[i].picture"</div>")
      .append("<p class='product-name'>"+products[i].name+"</p>")
      .append("<p class='product-origin'></p>")
      .append("<p class='product-category'>"+products[i].category"</p>")
      .append("</div>")
      .append("<div id='product"+products[i].id+"' class='modal'>")
      .append("<div class='modal-content animate'>")
      .append("<div class='container'>")
      .append("<div class='preview-image'></div>")
      .append("<div class='information-box'>")
      .append("<h1 class='price-preview'>"+products[i].price"</h1>")
      .append("<p class='product-name-preview'>"+products[i].name+"</p>")
      .append("<p class='product-category-preview'>"+products[i].category"</p>")
      .append("<p class='product-origin-preview'></p>")
      .append("<p class='description'>"+products[i].description+"</p>")
      .append("<p class='tags'>"+products[i].tags+"</p>")
      .append("<div class='availability'>")
      .append("<h3>Available in</h3>")
      .append("<ul>")
      .append("<li class='green' onload='checkAvailable()'>hurr hurr - shop</li>")
      .append("<li class='red' onload='checkAvailable()'>hurr hurr - shop</li>")
      .append("</ul>")
      .append("</div>")
      .append("</div>")
      .append("<button type='button' class='button' onclick='addToCart()'>Buy</button>")
      .append("</div>")
      .append("</div>")
      .append("</div>")
      .append("</div>");
    }
  });
}
