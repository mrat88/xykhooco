<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $subject = htmlspecialchars($_POST['formSubject']);
    $name = htmlspecialchars(strip_tags(trim($_POST['formName'])));
    $businessname = htmlspecialchars(strip_tags(trim($_POST['formBusinessName'])));
    $email = filter_var(trim($_POST['formEmail']), FILTER_SANITIZE_EMAIL);
    $mobile = htmlspecialchars(strip_tags(trim($_POST['formMobile'])));
    $message = htmlspecialchars(strip_tags(trim($_POST['formMessage'])));

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    // Prepare email content
    $to = "cindykhoo@xykhoo.co"; // Replace with your email
    $subject = "[FROM Website] $subject";
    $body = "Name: $name\nBusiness Name: $businessname\nEmail: $email\nMobile: $mobile\nMessage: $message";
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        // echo "<script>alert('Thank you! Your message has been sent.'); window.location.href = '../';</script>";
        $status = "success";
        $message = "Thank you! Your message has been sent.";
    } else {
        // echo "<script>alert('Sorry, there was an error sending your message. Please try again later.'); window.history.back();</script>";
        $status = "error";
        $message = "Sorry, there was an error sending your message. Please try again later.";
    }

    echo "<script>window.location.href = '../?status=$status&message=" . urlencode($message) . "';</script>";
}
?>