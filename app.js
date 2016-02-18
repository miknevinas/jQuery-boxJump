$(document).ready(function(){
    
    
    $('.score').hide();
    $('.restart').hide();
//Click to start
    var interval = null;
     $(".start").on('click',function(){
       loop();
     $('.start').hide();
     $('.score').show();
     $('.restart').show();
      var score = 0;
         
//Obstacle animation    
     function loop(){
        interval =  setInterval(function() {
             $(".obstacle").animate({left: '0px'}, Math.floor((Math.random()*1000)+500)).animate({left: '960px'},   Math.floor((Math.random()*100)+1000));  
        score++;
        $(".score").html(score);
          }, 1000);
        }

//Jump-box animation
     $(".jump-box").on('click', function(){
       jump();
      });
      function jump() {
       $(".jump-box").animate({top: '80px'}, 400).animate({top: '220px'}, {duration:400, complete: function(){}})
       };
         
//Collision Detection
     var collide;
     function collision($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;

      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
         return false;
       }
      else {
         clearInterval(interval);
         return true;
      }
   }
         
    window.setInterval(function() {
    $('#result').text(collision($('.jump-box'), $('.obstacle')));
    }, 0);
         
//New Game         
  
     function newGame() {
        score = 0;
        loop();
        collision();
    }
         
    $(".restart").on('click',function(){
       newGame();
    });
         
//end start funtion
    });

});
