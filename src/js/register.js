/*
@dev not sure if this is working.
*/
function register(){
  /*
  @dev set the authentication.
  */
  var auth = "auth.arcada.nitor.zone/";

  /*
  @dev get input information from html fields.
  */
  var input = {
    first_name: $("first_name").val(),
    last_name: $("last_name").val(),
    username: $("username").val(),
    password: $("password").val()
  }

  /*
  @dev connect to url, convert data to JSON, post data.
  */
  $.ajax({
     url: auth + "register.php",
     method: "POST",
     data: JSON.stringify(input),
     dataType: 'application/json',
     contentType: "application/json",
     success: function (result) {
       /*
       @dev if success then redirect to homepage or login page for example.
       */
       alert(result.status);
     },
     error: function(){
       /*
       @dev should alert the failure data.
       */
     }
  });
}
