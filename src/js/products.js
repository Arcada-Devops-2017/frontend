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
      var $image = $('<img src>').text(this.picture);
      var $name = $('<h4>').text(this.price);
      var $price = $('<span>').text(this.price);
      var $description = this.description;


      $("ul[class*='product_gallery']")
      .append("<li>")
      .append($image)
      .append("<div class='product_information'>")
      .append($name)
      .append($price)
      .append("</div>")
      .append("<div class='product_description'>")
      .append("<p>"+$description+"</p>")
      .append("<a href='#' class='buy now'>Buy now</a>")
      .append("</div>")
      .append("</li>");
    });
  });
}
