$(document).ready(function(){
    $("#register_button").click(function(){
      /*
      @dev set the authentication.
      */
      var auth = "auth.arcada.nitor.zone/";

      /*
      @dev get input information from html fields.
      */
      var input = {
        first_name: $("input[name*='firstname']").val(),
        last_name: $("input[name*='lastname']").val(),
        username: $("input[name*='email']").val(),
        password: $("input[name*='psw']").val()
      }

      /*
      @dev connect to url, convert data to JSON, post data.
      */
      $.ajax({
         url: auth + "register.php",
         method: "POST",
         data: JSON.stringify(input),
         contentType: "application/json",
         success: function (result) {
           /*
           @dev if success then redirect to homepage or login page for example.
           */
           alert("Successfully connected, status: " + result.status)
        },
         error: function(result){
           alert("Error message: " + result.status)
           /*
           @dev should alert the failure data.
           */
          }
      });
    });
});
