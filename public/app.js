$(document).ready(function(){
  $(".about").show();
  $(".portfolio").hide();
  $(".awards").hide();
  $(".experience").hide();
  $(".blog").hide();
  $(".contact").hide();

  $('.ui .item').on('click', function() {
    $("a").removeClass('active');
    $(this).addClass('active');
    if ($(this).text() == "About") {
      window.location = "/../index.html";
      $(".about").show();
      $(".portfolio").hide();
      $(".awards").hide();
      $(".experience").hide();
      $(".blog").hide();
      $(".contact").hide();
    }
    if ($(this).text() == "Portfolio") {
      //window.location = "/../index.html";
      $(".portfolio").show();
      $(".about").hide();
      $(".awards").hide();
      $(".experience").hide();
      $(".blog").hide();
      $(".contact").hide();
    }
    else if ($(this).text() == "Awards") {
      //window.location = "/../index.html";
      $(".awards").show();
      $(".about").hide();
      $(".portfolio").hide();
      $(".experience").hide();
      $(".blog").hide();
      $(".contact").hide();
    }
    else if ($(this).text() == "Experience") {
      //window.location = "/../index.html";
      $(".experience").show();
      $(".about").hide();
      $(".portfolio").hide();
      $(".awards").hide();
      $(".blog").hide();
      $(".contact").hide();
    }
    else if ($(this).text() == "Blog") {
      //window.location = "/../index.html";
      $(".blog").show();
      $(".about").hide();
      $(".portfolio").hide();
      $(".awards").hide();
      $(".experience").hide();
      $(".contact").hide();
    }
    else if ($(this).text() == "Contact") {
      //window.location = "/../index.html";
      $(".contact").show();
      $(".about").hide();
      $(".portfolio").hide();
      $(".awards").hide();
      $(".experience").hide();
      $(".blog").hide();
    }
  });

});

//var mandrill = require('node-mandrill')('HFBmP6jNtGU6yd-aHiYiDQ');

function sendEmail (_email, _subject, _message) {
  mandrill('/messages/send', {
    message: {
      to: [{email: 'aniruddha.murali@gmail.com', name: "Aniruddha Murali"}],
      from_email: _email,
      subject: _subject,
      text: _message
    }
  }, function(error, response){
    if (error) console.log(error);
    else console.log(response);
  });
}



$('.ui .submit').on('click', function() {
  var name = document.getElementsByTagName("input")[0].value;
  var email = document.getElementsByTagName("input")[1].value;
  var message = document.getElementsByTagName("input")[2].value;
  console.log("Hello");
  window.location.href = "mailto:aniruddha.murali@gmail.com?body=yourBody";
});
