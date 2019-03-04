$('.click-sidebar').on("click", function(event){
    if (event.target.style.left === "10px") {
        $('main').animate({'left':'196px'}, "slow"); 
        $('.click-sidebar').animate({'left':'206px'}, "slow");
        $('.sidebar').animate({'left':'0px'}, "slow");
    } else {
       $('main').animate({'left':'0px'}, "slow");
       $('.click-sidebar').animate({'left':'10px'}, "slow");
       $('.sidebar').animate({'left':'-196px'}, "slow"); 
    } 
    
   
})