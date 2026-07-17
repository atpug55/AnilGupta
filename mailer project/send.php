
<?php
/**
 * send.php - PHPMailer Contact Form Handler
 * 
 * This file handles the form submission from index.php
 * It validates the input and sends an email using PHPMailer via Gmail SMTP
 */

// Start session to manage error/success messages (optional, for future use)
session_start();

// ============================================
// STEP 1: Require Composer Autoload
// ============================================
// This line loads the Composer autoloader
// It automatically includes all the PHPMailer classes we need
// Without this, PHP won't know where to find PHPMailer classes
require 'vendor/autoload.php';

// ============================================
// STEP 2: Import PHPMailer Classes
// ============================================
// These 'use' statements import the PHPMailer classes
// This allows us to use shorter class names (PHPMailer instead of full namespace)
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// ============================================
// STEP 3: Check if Form Was Submitted
// ============================================
// Check if the request method is POST (form was submitted)
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // ============================================
    // STEP 4: Collect and Sanitize Form Data
    // ============================================
    
    // Get name from form and sanitize it
    // trim() - removes whitespace from beginning and end
    // htmlspecialchars() - converts special characters to HTML entities (prevents XSS attacks)
    $name = trim(htmlspecialchars($_POST['name']));
    
    // Get email from form and sanitize it
    $email = trim(htmlspecialchars($_POST['email']));
    
    // Get message from form and sanitize it
    $message = trim(htmlspecialchars($_POST['message']));
    
    // ============================================
    // STEP 5: Server-Side Validation
    // ============================================
    
    // Initialize error array
    $errors = [];
    
    // Validate name - should not be empty and should be at least 2 characters
    if (empty($name) || strlen($name) < 2) {
        $errors[] = "Please enter a valid name (at least 2 characters)";
    }
    
    // Validate email using filter_var()
    // FILTER_VALIDATE_EMAIL checks if the email format is correct
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Please enter a valid email address";
    }
    
    // Validate message - should not be empty and should be at least 10 characters
    if (empty($message) || strlen($message) < 10) {
        $errors[] = "Please enter a message with at least 10 characters";
    }
    
    // ============================================
    // STEP 6: If Validation Fails, Redirect Back
    // ============================================
    if (!empty($errors)) {
        // Redirect back to index.php with error status
        header("Location: index.php?status=error");
        exit();
    }
    
    // ============================================
    // STEP 7: Send Email Using PHPMailer
    // ============================================
    try {
        // Create a new PHPMailer object
        // This creates an instance of the PHPMailer class
        $mail = new PHPMailer(true);
        
        // ============================================
        // STEP 8: SMTP Server Settings
        // ============================================
        
        // Tell PHPMailer to use SMTP
        // SMTP (Simple Mail Transfer Protocol) is the standard for sending emails
        $mail->isSMTP();
        
        // Enable SMTP debugging
        // 0 = off (for production use)
        // 1 = client messages
        // 2 = client and server messages
        $mail->SMTPDebug = 0; // Set to 0 for production, 2 for debugging
        
        // Set the hostname of the mail server
        // smtp.gmail.com is Gmail's SMTP server
        $mail->Host = 'smtp.gmail.com';
        
        // Use SMTP authentication (required for Gmail)
        // This means we need to provide username and password
        $mail->SMTPAuth = true;
        
        // SMTP username - your Gmail address
        // REPLACE THIS WITH YOUR GMAIL ADDRESS
        $mail->Username = 'guptaanish873@gmail.com';
        
        // SMTP password - your Gmail App Password
        // IMPORTANT: Use App Password, NOT your regular Gmail password
        // REPLACE THIS WITH YOUR GMAIL APP PASSWORD
        $mail->Password = 'trpo zwqx lvln ikts';
        
        // Enable TLS encryption
        // TLS (Transport Layer Security) encrypts the email for security
        // ssl_type can be 'tls' or 'ssl'
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        
        // TCP port to connect to
        // 587 is the standard port for TLS
        // 465 is for SSL
        $mail->Port = 587;
        
        // ============================================
        // STEP 9: Email Recipients
        // ============================================
        
        // Set who the message is to be sent from
        // This is the email address that will appear in the "From" field
        $mail->setFrom('your-email@gmail.com', $name);
        
        // Set an alternative reply-to address
        // When the recipient clicks "Reply", it will go to this address
        $mail->addReplyTo($email, $name);
        
        // Set who the message is to be sent to
        // This is your email address where you want to receive messages
        // REPLACE THIS WITH YOUR EMAIL ADDRESS
        // For testing, we'll send to the form submitter's email
        $mail->addAddress($email, $name);
        
        // ============================================
        // STEP 10: Email Content
        // ============================================
        
        // Set email subject
        $mail->Subject = 'New Contact Form Message from ' . $name;
        
        // Set email format to HTML
        // This allows us to use HTML tags in the email body
        $mail->isHTML(true);
        
        // Create the HTML email body
        // We use HTML to make the email look professional
        $mail->Body = "
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background-color: #4CAF50; color: white; padding: 20px; text-align: center; }
                    .content { background-color: #f9f9f9; padding: 20px; border-radius: 5px; }
                    .field { margin-bottom: 15px; }
                    .label { font-weight: bold; color: #4CAF50; }
                    .value { margin-top: 5px; }
                    .footer { margin-top: 20px; padding: 10px; text-align: center; color: #777; font-size: 12px; }
                </style>
            </head>
            <body>
                <div class='container'>
                    <div class='header'>
                        <h2>New Contact Form Message</h2>
                    </div>
                    <div class='content'>
                        <div class='field'>
                            <div class='label'>From:</div>
                            <div class='value'>$name</div>
                        </div>
                        <div class='field'>
                            <div class='label'>Email:</div>
                            <div class='value'>$email</div>
                        </div>
                        <div class='field'>
                            <div class='label'>Message:</div>
                            <div class='value'>$message</div>
                        </div>
                    </div>
                    <div class='footer'>
                        <p>This message was sent from your website contact form.</p>
                    </div>
                </div>
            </body>
            </html>
        ";
        
        // Set plain-text version of the email
        // This is for email clients that don't support HTML
        $mail->AltBody = "Name: $name\nEmail: $email\n\nMessage:\n$message";
        
        // ============================================
        // STEP 11: Send the Email
        // ============================================
        // The send() method actually sends the email
        // It returns true on success, false on failure
        $mail->send();
        
        // If email sent successfully, redirect to index.php with success status
        header("Location: index.php?status=success");
        exit();
        
    } catch (Exception $e) {
        // ============================================
        // STEP 12: Error Handling
        // ============================================
        // The try-catch block handles errors gracefully
        // If anything goes wrong, this code runs instead of crashing
        
        // $e->getMessage() gives us the error message from PHPMailer
        $error_message = "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        
        // For debugging, you can uncomment the line below to see the error
        // error_log($error_message);
        
        // Redirect back to index.php with error status
        header("Location: index.php?status=error");
        exit();
    }
    
} else {
    // If someone tries to access this file directly without submitting the form
    // Redirect them back to the contact form
    header("Location: index.php");
    exit();
}
?>
