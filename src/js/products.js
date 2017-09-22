/*
@dev not sure if this is working.
*/
function products(){

  /*
  @dev display all the products on html id list_products.
       iterate through the existing list of products.
  */
  var url = "product.arcada.nitor.zone/";

  /*
  @dev get json from url, specify the data on which row on .each.
       function executed will list on id, the current name, ... ~
       data.products (read from json products)
  */
  $.getJSON(url + "api/list-products.php", function(data) {
    $.each(data.products, function() {
      $('#list_products').append(
        this.id + " "
        + this.name + " "
        + this.price + " "
        + this.description + " "
        + this.category + " "
        + this.picture + " "
        + this.tags
      );
    });
  });
}
