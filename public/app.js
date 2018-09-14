$("a").click(function() {
  $("a").removeClass("active");
  $(this).addClass("active");
  if ($(this).text() == "About") {
    $(".about").show();
    $(".awards").hide();
    $(".experience").hide();
    $(".blog").hide();
    $(".contact").hide();
  }
  else if ($(this).text() == "Awards") {
    $(".awards").show();
    $(".about").hide();
    $(".experience").hide();
    $(".blog").hide();
    $(".contact").hide();
  }
  else if ($(this).text() == "Experience") {
    $(".experience").show();
    $(".about").hide();
    $(".awards").hide();
    $(".blog").hide();
    $(".contact").hide();
  }
  else if ($(this).text() == "Blog") {
    $(".blog").show();
    $(".about").hide();
    $(".awards").hide();
    $(".experience").hide();
    $(".contact").hide();
  }
  else if ($(this).text() == "Contact") {
    $(".contact").show();
    $(".about").hide();
    $(".awards").hide();
    $(".experience").hide();
    $(".blog").hide();
  }
});
