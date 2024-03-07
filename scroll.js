let lastScrollTop = 0;
window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // Scroll down
        document.getElementById("mainNavigation").classList.add("scroll-hide");
    } else {
        // Scroll up
        document.getElementById("mainNavigation").classList.remove("scroll-hide");
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Get the form element
const contactForm = document.getElementById('contactForm');

// Add event listener for form submission
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the form data
    const formData = new FormData(this);

    // Send the form data to FormSubmit.co
    fetch('https://formsubmit.co/ajax/xplore.fitece@gmail.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            alert('Email sent successfully!');
            contactForm.reset(); // Reset the form
        } else {
            alert('Error sending email: ' + data.message);
        }
    })
    .catch(error => {
        alert('Error sending email: ' + error);
    });
});

function scrollToNextSection() {
    const aboutSection = document.getElementById('About');
    aboutSection.scrollIntoView({ behavior:'smooth'});
}

document.addEventListener('DOMContentLoaded', function () {
    const zoomableImages = document.querySelectorAll('.zoomable-image');

    zoomableImages.forEach(function (image) {
        image.addEventListener('click', function () {
            if (image.classList.contains('zoomed')) {
                image.classList.remove('zoomed');
            } else {
                image.classList.add('zoomed');
            }
        });
    });
});
 // Set the date we're counting down to
var countDownDate = new Date("April 4, 2024 10:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the time remaining
    var distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown timer
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);