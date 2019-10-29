$(document).ready(function(){
  $("#confEmail").hide();
  $("#confPassword").hide();

  $("#iInputConfEmail, #iInputEmail").focusout(function(){
    var email = $("#iInputEmail").val();
    var confEmail = $("#iInputConfEmail").val();
    if (email != '' && confEmail != '') {
      if (email != confEmail) {
        $("#confEmail").show();
      }
      else {
        $("#confEmail").hide();
      }
    }
  });

  $("#iInputConfPassword, #iInputPassword").focusout(function(){
  	var pass = $("#iInputPassword").val();
    var confPass = $("#iInputConfPassword").val();
    if (pass != '' && confPass != '') {
      if (pass != confPass) {
      	$("#confPassword").show();
      }
      else {
      	$("#confPassword").hide();
      }
    }
  });

 
  $("#iInputPhone").keypress(function( event ){
    var phone  = $(this).val();
    var qtd    = phone.length;
    var index  = qtd - 1;
    var key = event.which; 

    if (!((key >= 48) && (key <= 57))) {
        return false;
    }

    if (index == 0) {
      $(this).val('(' + phone);
    }
    else if (index == 2) {
      $(this).val(phone + ')');
    }
    else if (index == 8) {
      $(this).val(phone + '-');
    }
    
  });
});

