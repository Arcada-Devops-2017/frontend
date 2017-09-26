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
        first_name: $("firstname").val(),
        last_name: $("lastname").val(),
        username: $("email").val(),
        password: $("psw").val()
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
           if(result.status == 200) {
             alert("Status: " +result.status)
           } else {
             alert("Error, failed:" +result.status)
           }
        },
         error: function(){
           /*
           @dev should alert the failure data.
           */
         }
      });
    });
});
