$(document).ready(function(){
  $("#confEmail").hide();
  $("#confPassword").hide();

  $("#iInputConfEmail").focusout(function(){
    var email = $("#iInputEmail").val();
    var confEmail = $("#iInputConfEmail").val();
    if (email != confEmail) {
    	$("#confEmail").show();
    }
    else {
    	$("#confEmail").hide();
    }
  });

  $("#iInputConfPassword").focusout(function(){
  	var pass = $("#iInputPassword").val();
    var confPass = $("#iInputConfPassword").val();
    if (pass != confPass) {
    	$("#confPassword").show();
    }
    else {
    	$("#confPassword").hide();
    }
  });
});

