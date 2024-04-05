<<<<<<< HEAD



$( document ).ready(function() {
    var arr = ['bg_1.jpg','bg_2.jpg','bg_3.jpg'];
    
    var i = 0;
    setInterval(function(){
        if(i == arr.length - 1){
            i = 0;
        }else{
            i++;
        }
        var img = 'url(../assets/images/'+arr[i]+')';
        $(".full-bg").css('background-image',img); 
     
    }, 4000)

});



=======



$( document ).ready(function() {
    var arr = ['bg_1.jpg','bg_2.jpg','bg_3.jpg'];
    
    var i = 0;
    setInterval(function(){
        if(i == arr.length - 1){
            i = 0;
        }else{
            i++;
        }
        var img = 'url(../assets/images/'+arr[i]+')';
        $(".full-bg").css('background-image',img); 
     
    }, 4000)

});



>>>>>>> 66f8a4c3a5e692f4409ec1718a2d5427a771ed1a
