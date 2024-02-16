document.getElementById('mobile-menu').addEventListener('click', function() {
  var menu = document.querySelector('.menu');
  menu.classList.toggle('active');

  var icon = document.getElementById('mobile-menu-icon');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');

  var menuToggle = document.querySelector('.menu-toggle');
  menuToggle.classList.toggle('active');
});

function sendComment() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var comment = document.getElementById("comment").value;

  var body = "Name: " + name + "\n";
  body += "Email: " + email + "\n";
  body += "Comment: " + comment;

  window.location.href = "mailto:chaseishere25@gmail.com?subject=New Comment&body=" + encodeURIComponent(body);
}

var ourServicesButton = document.getElementById('our-services-button-desktop');

ourServicesButton.addEventListener('click', function() {
  console.log('Button clicked');
  var whatWeDoSection = document.getElementById('what-we-do-section');
  console.log(whatWeDoSection);
  whatWeDoSection.scrollIntoView({ behavior: 'smooth' });
});

var ourServicesButton = document.getElementById('our-services-button-mbl');

ourServicesButton.addEventListener('click', function() {
  console.log('Button clicked');
  var whatWeDoSection = document.getElementById('what-we-do-section-mbl');
  console.log(whatWeDoSection);
  whatWeDoSection.scrollIntoView({ behavior: 'smooth' });
});