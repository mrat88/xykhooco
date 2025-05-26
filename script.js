//AOS
AOS.init({
    offset: 100, // increase offset to trigger earlier
});

//Nav
$(window).scroll( function() {
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 500) {
        // $('nav.navbar').addClass('smaller');
        $('.navbar').slideDown();
    } else {
        // $('nav.navbar').removeClass('smaller');
        $('.navbar').slideUp();
    }
}); // scroll END

//ScrollSpy
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar'
})

//Form Submit
var $form = $("form"),
    $successMsg = $(".alert");
    $.validator.addMethod("letters", function(value, element) {
    return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
});

$form.validate({
    rules: {
        formName: {
            required: true,
            minlength: 3,
            letters: true
        },
        formEmail: {
            required: true,
            email: true
        },
        formMobile: {
            required: true,
        },
        formSubject: {
            required: true,
        },
        formMessage: {
            required: true,
        },
    },
    messages: {
        formName: "Please enter your name (Only letters and spaces are allowed)",
        formEmail: "Please enter a valid email address",
        formMobile: "Please enter your contact number",
        formSubject: "Please enter the subject",
        formMessage: "Enter your message here",
    },
    submitHandler: function(form) {
        // Submit the form via AJAX or just submit it normally
        form.submit();
    }
});

// Check if the URL contains the status and message parameters
$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('status') && urlParams.has('message')) {
        const status = urlParams.get('status');
        const message = urlParams.get('message');

        // Set the modal title and message based on the status
        if (status === 'success') {
            $('#statusModalLabel').text('Success');
            $('#statusMessage').text(message);
            $('#statusModalLabel').addClass('text-success');
        } else if (status === 'error') {
            $('#statusModalLabel').text('Error');
            $('#statusMessage').text(message);
            $('#statusModalLabel').addClass('text-danger');
        }

        // Show the modal
        $('#statusModal').modal('show');

        // Remove the query parameters from the URL
        const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        window.history.replaceState({ path: newUrl }, '', newUrl);
    };
});

$('.navbar-collapse a').click(function() {
    $('.navbar-collapse').collapse('hide');
});