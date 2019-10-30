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

  $("#iInputPhone").focusout(function(){
    var phone  = $(this).val();
    var masc   = true;
    var qtd    = phone.length;
    var index  = qtd - 1;

    for (var i = 0; i < qtd; i++) {
        if (phone[i] != '(' && phone[i] != ')' && phone[i] != '-') {
          masc = false;
        }
    }

    var aux;
    var aux1;
    if (masc == false) {
      if (qtd == 10) {
        aux  = phone.substr(0, 2);
        aux1 = phone.substr(2 , (phone.length - 1));
        aux += '9';
        phone = aux + aux1;
      }
      if (phone[0] != '(') {
        aux = phone;
        phone = '(' + aux;
      }
      if (phone[3] != ')') {
        aux  = phone.substr(0, 3);
        aux1 = phone.substr(3, (phone.length - 1));
        aux += ')';
        phone = aux + aux1;
      }
      if (phone[9] != '-') {
        aux  = phone.substr(0, 9);
        aux1 = phone.substr(8, (phone.length - 1));
        aux += '-';
        phone = aux + aux1;
      }
      $(this).val(phone);
    }
  });

});

