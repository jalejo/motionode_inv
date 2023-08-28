function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  function eraseCookie(name) {
    document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }
  
  $(document).ready(function () {
    var code = getCookie("code");
    console.log(code);
    fullpage_api.setAllowScrolling(false);
    $("body").scrollTop(0);
    $(".invalid-code").hide();
    if (code) {
        const v1 = $("#passw01").val(code[0]);
        const v2 = $("#passw02").val(code[1]);
        const v3 = $("#passw03").val(code[2]);
  

    //   $(".passw_wrapper").hide();
    //   $("#startExperience").hide();
    //   fullpage_api.setAllowScrolling(true);
      // setTimeout(() => {
      //     fullpage_api.moveSectionDown();
      //   }, "2000");
    }
  
    function showCodeError(msg) {
      $(".invalid-code").html(msg);
      $(".invalid-code").show();
      $(".invalid-code").addClass("shake");
      setTimeout(() => {
        $(".invalid-code").removeClass("shake");
        $(".invalid-code").fadeOut("slow", function () {});
      }, "1200");
    }
  
    function onContinue(fullCode) {
      gtag("event", "access", {
        code: fullCode,
      });
      fullpage_api.setAllowScrolling(true);
      let r = fullCode + (Math.random() + 1).toString(36).substring(7);
      setCookie("code", r, 7);
      $(".passw_wrapper").fadeOut("slow", function () {});
      $("#startExperience").fadeOut("slow", function () {});
      fullpage_api.setAllowScrolling(true);
      setTimeout(() => {
        fullpage_api.moveSectionDown();
      }, "1200");
    }
  
    $("#startExperience").on("click", function () {
      const v1 = $("#passw01").val();
      const v2 = $("#passw02").val();
      const v3 = $("#passw03").val();
  
      const fullCode = v1 + v2 + v3;
  
      if (fullCode.length < 3) {
        showCodeError("Invalid code. Please try again.");
        return;
      }
  
   

      $.ajax({
        url: "https://api.motionode.com/api/v1/accounts/validateCode",
        method: "POST",
        data: {
          code: fullCode,
        },
        success: function (data) {
          if (data.success) {
            onContinue(fullCode);
          } else {
            showCodeError("Invalid code. Please try again.");
          }
        },
        error: function (data) {
          showCodeError("Server error. Please try again.");
        },
      });


    });

  });
  