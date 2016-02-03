  var hero = new Hero(100, 8, 3);
  var troll = new Troll(100, 7, 2);
$(document).ready(function(){
  console.log(attack(troll, hero));
  // console.log(troll.attack())


  $(".attack").on("click", function(){
    buttonsOff();
    $(".text").html(messages.heroAttack + attack(hero, troll));
    setTimeout(function() {$(".text").html(messages.trollAttack + attack(troll, hero));}, 2000);
    setTimeout(function() {$(".text").html("Choose an action");}, 4000);
    setTimeout(function() {buttonsOn()}, 4010);
    console.log("ji")
  });


});



function buttonsOff() {
  $("button").prop("disabled", true);
}

function buttonsOn() {
  $("button").prop("disabled", false);
}

function timeout() {
  console.log("timeout");
  return
}
