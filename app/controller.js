$(document).ready(function(){

});


function attackButton() {
  $(".attack").on("click", function(){
    buttonsOff();
    $(".text").html(messages.heroAttack + attack(Hero, Troll));
    setTimeout(function() {$(".text").html(messages.trollAttack + attack(Troll, Hero));}, 2000);
    setTimeout(function() {$(".text").html("Choose an action");}, 4000);
    setTimeout(function() {buttonsOn()}, 4010);
  });
}

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
