/*
@dev not sure if this is working.
*/
function stores(){

  /*
  @dev display all existing stores on html id list_stores.
       iterate through the existing list of stores.
  */
  var url = "http://stores.arcada.nitor.zone/";

  /*
  @dev get json from url, specify the data on which row on .each.
       function executed will list on id, the current name, ... ~
       data.info (read from json stores api)
  */
  $.getJSON(url + "api/stores.php", function(data) {
    $.each(data.info, function() {
      $('#list_stores').append(
        this.id + " "
        + this.name + " "
        + this.address + " "
        + this.phone + " "
        + this.email
      );
    });
  });
}
