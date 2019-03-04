$('#button-next').on('click', function(event){
var leftStyle = document.querySelector('.galary').offsetLeft
$('.galary').animate({"left": leftStyle-200 + "px"}, 'slow')

})