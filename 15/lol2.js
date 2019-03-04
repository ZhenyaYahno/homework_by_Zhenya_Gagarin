$('.button').on('click',function(){
   var $name = $('#firstname').val();
   var $surname = $('#surname').val();
   $('.helloname').text($name);
    $('.hellosurname').text($surname);
    $('.form').css("display", "none");
    $('.none').css("display", "block");
}) 