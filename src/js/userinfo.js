/*
@dev should be working.
*/
display_user();

function display_user() {
      /*
      @dev set the authentication.
      */
      var token = window.localStorage.getItem("authToken");
      var auth = "http://auth.arcada.nitor.zone/";
      var jsonToken = { token: token}

      /*
      @dev connect to url, convert data to JSON, post data.
      */
      $.ajax({
         url: auth + "userinfo.php",
         type: "POST",
         data: JSON.stringify(jsonToken),
         contentType: "text/plain",
         success: function (result) {
           /*
           @dev if success then redirect to homepage or login page for example.
           */

           var obj = JSON.parse(result)

           /*
           @dev only loops through the first.
           */
           $.each(obj, function() {
             $("div[id*='userinfo']")
             .append("<label><b>First Name</b></label>\n<p>"+obj.first_name+"</a></p>\n")
             .append("<label><b>Last Name</b></label>\n<p>"+obj.last_name+"</a></p>\n")
             .append("<label><b>Username</b></label>\n<p>"+obj.username+"</a></p>\n")
             .append("<label><b>Status</b></label>\n<p>"+obj.status+"</a></p>\n")
            return false;
           });
           /*
           console.log(result);
           var obj = JSON.parse(result);
           $("p[id*='first_name']").append(obj.FirstName);
           $("p[id*='last_name']").append(obj.LastName);
           $("p[id*='username_id']").append(obj.Username);
           */
        }
      });
    }
