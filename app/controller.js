$(document).ready(function(){
  console.log("hello");
  $("button").on("click", function(){
    $(".text").html("change");
    console.log("it worked");
  });

});
