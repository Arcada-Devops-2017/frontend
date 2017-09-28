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
    $.each(data.products, function() {
      $("div[class*='flex-container wrap']")
      .append("<div class='flex-item' onclick='document.getElementById('id01').style.display='block'' style='width:auto;'>")
      .append("<p class='price'>" + this.price +"</p>")
      .append("<div class='align-middle'>")
      .append("<div class='product-image'>"+ this.picture +"</div>")
      .append("<p class='product-name'>" + this.name +"</p>")
      .append("<p class='product-origin'>" + this.category + "</p>\n</div>\n</div>");
    });
  });
}
