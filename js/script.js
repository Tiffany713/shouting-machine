$(document).ready(function() {
  $("#meow").click(function() {
    $("ul#textcat").append("<li>meow</li>");
    $("ul#textdog").append("<li>BARK</li>");
  });

  $("#bark").click(function() {
    $("ul#textcat").append("<li>meow</li>");
    $("ul#textdog").append("<li>BARK</li>");
  });
  $("img#dog").click(function() {
    $("img#dog").before("<img src='img/dog2.png'>");
  });
  $("img#cat").click(function() {
    $("img#cat").before("<img id='cat2' src='img/cat2.jpg'>");
  });
  $("#cat2").click(function() {
    $(this).remove();
  });
});
