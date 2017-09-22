/*
@dev not sure if this is working.
*/
function login(){
  /*
  @dev set the authentication.
  */
  var auth = "auth.arcada.nitor.zone/";

  /*
  @dev get input information from html fields.
  */
  var input = {
    username: $("username").val(),
    password: $("password").val()
  }

  /*
  @dev connect to url, convert data to JSON, post data.
       wait for request to come back if true then proceed.
  */
  $.ajax({
     url: auth + "login.php",
     method: "POST",
     data: JSON.stringify(input),
     dataType: 'application/json',
     contentType: "application/json",
     statusCode: {
       200: function(data) {
         var token = data.token;
       },
       404: function(data) {
         alert("Error message: " + data.status)
       }
     }
  });
}
