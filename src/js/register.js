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
    first_name: document.getElementById("first_name").value,
    last_name: document.getElementById("last_name").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value
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
     success: function (data) {
       /*
       @dev if success then redirect to homepage or login page for example.
       */
     },
     error: function(){
       /*
       @dev should alert the failure data.
       */
     }
  });
}
