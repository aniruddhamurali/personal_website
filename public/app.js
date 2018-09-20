$(document).ready(function(){
  $(".home").show();
  $(".about").hide();
  $(".awards").hide();
  $(".experience").hide();
  $(".blog").hide();
  $(".contact").hide();

  $('.ui .item').on('click', function() {
    $("a").removeClass('active');
    $(this).addClass('active');
    if ($(this).text() == "Home") {
      $(".home").show();
      $(".about").hide();
      $(".awards").hide();
      $(".experience").hide();
      $(".blog").hide();
      $(".contact").hide();
    }
    if ($(this).text() == "About") {
      $(".about").show();
      $(".home").hide();
      $(".awards").hide();
      $(".experience").hide();
      $(".blog").hide();
      $(".contact").hide();
    }
    else if ($(this).text() == "Awards") {
      $(".awards").show();
      $(".home").hide();
      $(".about").hide();
      $(".experience").hide();
      $(".blog").hide();
      $(".contact").hide();
    }
    else if ($(this).text() == "Experience") {
      $(".experience").show();
      $(".home").hide();
      $(".about").hide();
      $(".awards").hide();
      $(".blog").hide();
      $(".contact").hide();
    }
    else if ($(this).text() == "Blog") {
      $(".blog").show();
      $(".home").hide();
      $(".about").hide();
      $(".awards").hide();
      $(".experience").hide();
      $(".contact").hide();
    }
    else if ($(this).text() == "Contact") {
      $(".contact").show();
      $(".home").hide();
      $(".about").hide();
      $(".awards").hide();
      $(".experience").hide();
      $(".blog").hide();
    }
  });
});
