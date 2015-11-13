$(document).ready(function(){
  console.log("hello");
  $("body").on("click", function(){
    $(".text").html("change");
    console.log("it worked");
  });

});
