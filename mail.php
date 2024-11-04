<?php
// Get data from form 
$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$service = $_POST['service'];
$project_type = $_POST['project_type'];
$location = $_POST['location'];

$to = "info@fitoutbureau.com, anaz@fitoutbureau.com";
$subject = "New Enquiry from https://fitoutbureau.com/";

// The following text will be sent
$txt = "Name = " . $name . "\r\n  Email = " . $email . "\r\nTel = " . $tel . "\r\nService = " . $service . "\r\nType of Project = " . $project_type . "\r\nLocation = " . $location;

$headers = "From: no-reply@fitoutbureau.com";
if ($email != NULL) {
    mail($to, $subject, $txt, $headers);
}

// Redirect to
header("Location:success.php");
?> 