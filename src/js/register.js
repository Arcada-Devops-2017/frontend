/*
@dev should be working.
*/
$(document).ready(function(){
    $("button[class*='signupbtn']").click(function(){
      /*
      @dev set the authentication.
      */
      var auth = "http://auth.arcada.nitor.zone/";

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
         type: "POST",
         data: JSON.stringify(input),
         contentType: "text/plain",
         success: function (result) {
           /*
           @dev if success then redirect to homepage or login page for example.
           */
           console.log(result);
           var obj = JSON.parse(result);
           alert("You have succefully registered through auth API.\nHTTP response status: " + obj.status);
           window.location.href = "http://frontend.arcada.nitor.zone/index.html";
		 },
         error: function(result){
           console.log(result);
           var obj = JSON.parse(result);
           alert("Failed to registered through auth API.\nHTTP response status: " + obj.status);
           /*
           @dev should alert the failure data.
           */
          }
      });
    });
});
