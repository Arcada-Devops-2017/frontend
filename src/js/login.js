/*
@dev not sure if this is working.
     variable that holds retrieved token.
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
       window.localStorage.getItem(key); - get the token.
  */
  $.ajax({
     url: auth + "login.php",
     method: "POST",
     data: JSON.stringify(input),
     dataType: 'application/json',
     contentType: "application/json",
     success: function (result) {
       if(result.status == 200) {
       window.localStorage.setItem(AuthToken, result.token);
     } else {
       alert(result.status);
     }
     }
  });
}
