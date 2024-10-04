

$(document).ready(function() {
    let isScrolling;
    const navbar = $('.navbar-menu');

    // Initially hide the navbar
    navbar.hide();

    $(window).on('scroll', function() {
        // Show the navbar while scrolling
        navbar.fadeIn();

        // Clear the timeout if the user is scrolling
        clearTimeout(isScrolling);

        // Set a timeout to hide the navbar after scrolling stops
        isScrolling = setTimeout(function() {
            navbar.fadeOut(); // Hide the navbar after 2 seconds of inactivity
        }, 2000); // 2000 milliseconds = 2 seconds

        // Highlight the active section link
        const currentScrollTop = $(this).scrollTop();
        $('section').each(function() {
            const sectionTop = $(this).offset().top;
            const sectionHeight = $(this).outerHeight();
            if (currentScrollTop >= sectionTop - 100 && currentScrollTop < sectionTop + sectionHeight) {
                const id = $(this).attr('id');
                $('.navbar-menu ul li a').removeClass('active');
                $(`.navbar-menu ul li a[href='#${id}']`).addClass('active');
            }
        });
    });

    // Handle page load to show the navbar immediately
    setTimeout(() => {
        navbar.fadeIn(); // Show after a short delay if there was no scroll
    }, 2000); // Optional initial delay before showing navbar
});


document.addEventListener("DOMContentLoaded", function() {
    const cubes = document.querySelectorAll('.cube');
    let currentIndex = 0;

    function updateCubes() {
        cubes.forEach((cube, index) => {
            cube.style.display = index === currentIndex ? 'flex' : 'none';
        });
    }

    // Initialize display
    updateCubes();

    // Cycle through cubes every few seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % cubes.length;
        updateCubes();
    }, 4000); // Change cube every 3 seconds

    // Add click event for manual cycling
    cubes.forEach((cube) => {
        cube.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % cubes.length;
            updateCubes();
        });
    });
});


    // <script>
    // Function to set error (red border)
    function setError(input) {
    input.style.borderColor = 'red';
    }
    
    // Function to set success (green border)
    function setSuccess(input) {
    input.style.borderColor = 'green';
    }
    
    // Function to validate name (alphabets only)
    function validateName(name) {
    const nameRegex = /^[A-Za-z\s]+$/; // Only alphabets and spaces allowed
    if (nameRegex.test(name.value.trim())) {
    setSuccess(name);
    } else {
    setError(name);
    }
    }
    
    // Function to validate email format
    function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email.value.trim())) {
    setSuccess(email);
    } else {
    setError(email);
    }
    }
    
    // Function to validate phone (optional, should be 10 digits if filled)
    function validatePhone(phone) {
    if (phone.value.trim() === '' || /^\d{10}$/.test(phone.value.trim())) {
    setSuccess(phone);
    } else {
    setError(phone);
    }
    }
    
    // Function to validate message (should not be empty)
    function validateMessage(message) {
    if (message.value.trim() !== '') {
    setSuccess(message);
    } else {
    setError(message);
    }
    }
    
    // Modal functionality
    const modal = document.getElementById('successModal');
    const closeButton = document.querySelector('.close-button');
    
    closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    });
    
    window.addEventListener('click', (event) => {
    if (event.target === modal) {
    modal.style.display = 'none';
    }
    });
    
    // Add event listeners to inputs for real-time validation
    document.getElementById('name').addEventListener('input', function () {
    validateName(this);
    });
    
    document.getElementById('email').addEventListener('input', function () {
    validateEmail(this);
    });
    
    document.getElementById('phone').addEventListener('input', function () {
    validatePhone(this);
    });
    
    document.getElementById('message').addEventListener('input', function () {
    validateMessage(this);
    });
    
    // Form submission handling
    document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    
    // Validate all fields before submitting
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');
    
    let isValid = true;
    
    validateName(name);
    validateEmail(email);
    validatePhone(phone);
    validateMessage(message);
    
    if (name.style.borderColor === 'red' ||
    email.style.borderColor === 'red' ||
    phone.style.borderColor === 'red' ||
    message.style.borderColor === 'red') {
    isValid = false;
    }
    
    if (isValid) {
    // Show the modal
    modal.style.display = 'block';
    
    // Reset form and styles
    this.reset();
    [name, email, phone, message].forEach(input => input.style.borderColor = '');
    }
    });
  //  </script>
    
    
    document.addEventListener('DOMContentLoaded', function () {
    const navbarMenu = document.querySelector('.navbar-menu');
    
    // Hide navbar menu when an input element is focused (assuming virtual keyboard is active)
    const inputs = document.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
    input.addEventListener('focus', function () {
    // Hide the navbar-menu on input focus
    navbarMenu.style.display = 'none';
    });
    
    input.addEventListener('blur', function () {
    // Show the navbar-menu again when input loses focus
    navbarMenu.style.display = 'flex';
    });
    });
    });
    
    

