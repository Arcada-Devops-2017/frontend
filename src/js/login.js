/*
@dev in progress.
     variable that holds retrieved token.
*/
$(document).ready(function(){
    $("button[id*='loginbtn']").click(function(){

      /*
      @dev set the authentication url, only works local (Arcada's network).
      */
      var auth = "http://auth.arcada.nitor.zone/";

      /*
      @dev get input information from html fields.
      */
      var input = {
        username: $("input[name*='username']").val(),
        password: $("input[name*='password']").val()
      }

      /*
      @dev connect to url, convert data to JSON, post data.
           wait for request to come back if true then proceed.
           window.localStorage.getItem(key); - get the token.
      */
      $.ajax({
         url: auth + "login.php",
         type: "POST",
         data: JSON.stringify(input),
         contentType: "text/plain",
         success: function (result) {
           console.log(result);
           var obj = JSON.parse(result);
           window.localStorage.setItem("authToken", obj.token);
           alert("Successful login, here is your token: " + obj.token);
         },
         error: function (result) {
           console.log(result);
           var obj = JSON.parse(result);
           alert("Failed login");
         }
         });
    });
});
