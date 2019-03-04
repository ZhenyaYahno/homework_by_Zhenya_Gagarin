$('button').on('click', function(){
var value = $('#input').val();
var newItem = '<div class="newblock">' + value + '</div>'
$('.block').append(newItem);
})