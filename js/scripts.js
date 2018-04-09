//backend & globals
var roomOneNarr =['','Its damp, earthy smell overtakes your senses.', 'You look around and notice two paths: one on your left and one on your right.', 'Which path will you choose?']

//front end
$(document).ready(function(){
  $("#start").submit(function(event) {
    var inputName = $("#name").val();
    var player = new User(inputName);
    var enemy = new Enemy();
    event.preventDefault();
    $("#attack").click(function() {
      enemy.userAttack();
      player.enemyAttack();
      if (player.special >= 30) {
        $("#special").show();
      }
    });
    $("#special").click(function() {
      enemy.special();
      console.log(enemy);
      $("#special").hide();
      player.special = 0;
    });
    $(".titleCard").slideUp();
    $(".adventureTime").slideDown();
  });
  var indexOne = 0;
  $(".nextText").click(function(event){
    event.preventDefault();
    indexOne+=1
    $(".textHere").text(roomOneNarr[indexOne]);
    // if(indexOne === 3){
    //   $()
  })
  })
