<?php
// Check if form data is set and not empty
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$tel = isset($_POST['tel']) ? trim($_POST['tel']) : '';
$service = isset($_POST['service']) ? trim($_POST['service']) : '';
$project_type = isset($_POST['project_type']) ? trim($_POST['project_type']) : '';
$location = isset($_POST['location']) ? trim($_POST['location']) : '';

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die('Invalid email format');
}

// Set recipient email and email subject
$to = "info@fitoutbureau.com, anaz@fitoutbureau.com","viveknhc@gmail.com";
$subject = "New Enquiry from https://fitoutbureau.com/";

// Construct the message body
$message = "Name: " . $name . "\r\n";
$message .= "Email: " . $email . "\r\n";
$message .= "Phone: " . $tel . "\r\n";
$message .= "Service: " . $service . "\r\n";
$message .= "Type of Project: " . $project_type . "\r\n";
$message .= "Location: " . $location;

// Set the email headers
$headers = "From: no-reply@fitoutbureau.com\r\n";
$headers .= "Reply-To: " . $email . "\r\n";

// Send the email
if (!empty($email)) {
    if (mail($to, $subject, $message, $headers)) {
        // Redirect to thank you page on success
        header("Location: thankyou.html");
        exit();
    } else {
        die("Email sending failed");
    }
} else {
    die("Email is required");
}
?>
