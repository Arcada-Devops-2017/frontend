/*
@dev in progress.
     variable that holds retrieved token.
*/
$(document).ready(function(){
    $("button[type*='submit']").click(function(){

      /*
      @dev set the authentication url, only works local (Arcada's network).
      */
      var auth = "http://auth.arcada.nitor.zone/";

      /*
      @dev get input information from html fields.
      */
      var input = {
        username: $("input[name*='username']").val(),
        password: $("input[name*='lastname']").val()
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
         dataType: 'application/json',
         contentType: "application/json",
         success: function (result) {
           window.localStorage.setItem(AuthToken, result.token);
           console.log(result)
           alert("Successful execution.")
         },
         error: function (result) {
           console.log(result)
           alert("Failure to execute:" + result.status)
         }
         });
    });
});
