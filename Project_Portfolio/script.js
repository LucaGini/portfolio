let menuVisible = false;
//Function thet shows the menu
function showMenu(){
  if (menuVisible){
    document.getElementById("nav").classList =""; //Hide the menu
    menuVisible = false;
  }else{
    document.getElementById("nav").classList ="responsive"; //Show the menu
    menuVisible = true;
  }
}

function select(){
  //hide menu once an option is selected
  document.getElementById("nav").classList =""; //Hide the menu
  menuVisible = false;
}

//function that applieas animations to skills
function skillsEffect(){
  let skills = document.getElementById("skills");
  let skillsDistance = window.innerHeight - skills.getBoundingClientRect().top;
  if (skillsDistance >= 300){
    let skills2 = document.getElementsByClassName("progress");
    for (let i = 0; i < skills2.length; i++) {
      skills2[i].classList.add(`skill-${i}`);
  }
}
}

//detect scrolling to aplly the animations to the progress bar
window.onscroll = function() {skillsEffect()};

const downloadButton = document.querySelector('button');
const downloadLink = document.querySelector('.hidden-link');

downloadButton.addEventListener('click', () => {
  downloadLink.click();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function typeEffect(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    const timer = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

(function() {
    emailjs.init(process.env.EMAILJS_PUBLIC_KEY); // Replace with your actual public key
})();

const THROTTLE_TIME = 60000; 
let lastEmailTime = 0;

function validateForm(name, email, message) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name.length < 2) return false;
    if (!emailRegex.test(email)) return false;
    if (message.length < 10) return false;
    return true;
}


function sendEmail(e) {
    e.preventDefault();

    const now = Date.now();
    if (now - lastEmailTime < THROTTLE_TIME) {
        alert('Please wait a minute before sending another message');
        return false;
    }

    lastEmailTime = now;   

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!validateForm(name, email, message)) {
        alert('Please fill all fields correctly');
        return false;
    }

    // Get form values
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    // Prepare template parameters
    const templateParams = {
        from_name: name,
        from_email: email,
        phone: phone,
        subject: subject,
        message: message,
        to_email: 'luca.gini26@gmail.com'
    };

    // Send email using EmailJS
    emailjs.send(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            document.getElementById('contactForm').reset();
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send message. Please try again.');
        });

    return false;
}

