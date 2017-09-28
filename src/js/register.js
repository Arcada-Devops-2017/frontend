$(document).ready(function(){
    $("button[class*='signupbtn']").click(function(){
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
           console.log(result);
           alert("You have succefully registered through auth API.\nHTTP response status: "result.status)
        },
         error: function(result){
           console.log(result);
           alert("Failed to registered through auth API.\nHTTP response status: "result.status)
           /*
           @dev should alert the failure data.
           */
          }
      });
    });
});
