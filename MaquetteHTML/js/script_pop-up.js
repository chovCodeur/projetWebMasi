/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function() {
    $('.fa-user-circle').click(function (e) { 
        $('#page_accueil').removeClass('blur-out');
        $('#page_accueil').addClass('blur-in');
        $('.pop-up').fadeIn(1000);
        $('.pop-up').show();
            $('.close-button').click(function (e) { 
            $('.pop-up').fadeOut(700);
            $('#page_accueil').removeClass('blur-in');
            $('#page_accueil').addClass('blur-out');
            e.stopPropagation();

        });
    });
});
 
 $(function() {
    $('.promoteIcon').click(function (e) { 
        $('aside,section').removeClass('blur-out');
        $('aside,section').addClass('blur-in');
        $('.pop-up').fadeIn(1000);
        $('.pop-up').show();
            $('.close-button').click(function (e) { 
            $('.pop-up').fadeOut(700);
            $('aside,section').removeClass('blur-in');
            $('aside,section').addClass('blur-out');
            e.stopPropagation();

        });
    });
});
