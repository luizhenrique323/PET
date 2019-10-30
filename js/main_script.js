
(function ($) {
    "use strict";
    $("p.painelDescricao").hide();
    $("p.painelDescricao").hide();


    /*==================================================================
    [ Logar ]*/
    $('.login100-form-btn').click(function(){
        var login = $('input#iInputLogin').val();
        var pass  = $('input#iInputSenha').val();
        if (login == 'Admin@admin.com' && pass == 'Admin') {
            window.location.href = "main.html";
        }
        $('input#iInputLogin').val('');
    });  

    /*==================================================================
    [ Limpando Tela de Cadastro ]*/
    $('a#iBtnCadastro').click(function(){
        $('div#modalCrud input').val('');
        $('div#modalCrud div#iContainerGenero input.form-check-input').prop('checked', false);
    });

    /*==================================================================
    [ Conteiner de Informações ]*/
    $('div#iPainelInf').mouseenter(function(){
        $('div#iPainelInf p.painelDescricao').show(500);
        $(this).css("border-radius", "2px");
        $(this).css("height", "100%");
        $('div#iPainelInf img').attr("src", "images/down-arrow.png");
    });
    $('div#iPainelAdocao').mouseenter(function(){
        $('div#iPainelAdocao p.painelDescricao').show(500);
        $(this).css("border-radius", "2px");
        $(this).css("height", "100%");
        $('div#iPainelAdocao img').attr("src", "images/down-arrow.png");
    });
    $('div#iPainelTinder').mouseenter(function(){
        $('div#iPainelTinder p.painelDescricao').show(500);
        $(this).css("border-radius", "2px");
        $(this).css("height", "100%");
        $('div#iPainelTinder img').attr("src", "images/down-arrow.png");
    });

    $('div#iPainelInf').mouseleave(function(){
        $('div#iPainelInf p.painelDescricao').hide(100);
        $(this).css("border-radius", "10px");
        $(this).css("height", "60px");
        $('div#iPainelInf img').attr("src", "images/up-arrow.png");
    });
    $('div#iPainelAdocao').mouseleave(function(){
        $('div#iPainelAdocao p.painelDescricao').hide(100);
        $(this).css("border-radius", "10px");
        $(this).css("height", "60px");
        $('div#iPainelAdocao img').attr("src", "images/up-arrow.png");
    });
    $('div#iPainelTinder').mouseleave(function(){
        $('div#iPainelTinder p.painelDescricao').hide(100);
        $(this).css("border-radius", "10px");
        $(this).css("height", "60px");
        $('div#iPainelTinder img').attr("src", "images/up-arrow.png");
    });


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    

})(jQuery);