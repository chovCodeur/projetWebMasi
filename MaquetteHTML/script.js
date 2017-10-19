/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function() {
  $('.pop-up').hide();
  $('.pop-up').fadeIn(1000);
  
      $('.close-button').click(function (e) { 

      $('.pop-up').fadeOut(700);
      $('#overlay').removeClass('blur-in');
      $('#overlay').addClass('blur-out');
      e.stopPropagation();
        
    });
 });
 
 