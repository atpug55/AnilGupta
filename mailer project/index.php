
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us - PHPMailer Tutorial</title>
    
    <!-- Link to external CSS stylesheet -->
    <!-- This separates our styling from HTML structure for better code organization -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <!-- Main container that holds everything centered on the page -->
    <div class="container">
        
        <!-- Contact form card -->
        <div class="contact-card">
            
            <!-- Form heading -->
            <h1>Contact Us</h1>
            <p class="subtitle">Send us a message and we'll get back to you soon!</p>
            
            <!-- Success/Error Message Display Area -->
            <!-- This section shows messages after form submission -->
            <?php
            // Check if there's a success message in the URL
            if (isset($_GET['status']) && $_GET['status'] == 'success') {
                echo '<div class="message success">✓ Message sent successfully! We will contact you soon.</div>';
            }
            
            // Check if there's an error message in the URL
            if (isset($_GET['status']) && $_GET['status'] == 'error') {
                echo '<div class="message error">✗ Failed to send message. Please try again.</div>';
            }
            ?>
            
            <!-- HTML Form -->
            <!-- action="send.php" - This tells the browser where to send form data when submitted -->
            <!-- method="POST" - This sends data securely in the HTTP body (not visible in URL) -->
            <form action="send.php" method="POST" id="contactForm">
                
                <!-- Name Field -->
                <div class="form-group">
                    <label for="name">Full Name</label>
                    <!-- required attribute ensures field cannot be empty -->
                    <!-- placeholder shows hint text when field is empty -->
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Enter your full name" 
                        required
                    >
                </div>
                
                <!-- Email Field -->
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <!-- type="email" provides built-in browser validation for email format -->
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Enter your email address" 
                        required
                    >
                </div>
                
                <!-- Message Field -->
                <div class="form-group">
                    <label for="message">Your Message</label>
                    <!-- textarea allows multi-line text input -->
                    <textarea 
                        id="message" 
                        name="message" 
                        rows="6" 
                        placeholder="Type your message here..." 
                        required
                    ></textarea>
                </div>
                
                <!-- Button Group -->
                <div class="button-group">
                    <!-- Submit Button -->
                    <!-- Sends the form data to send.php -->
                    <button type="submit" class="btn btn-primary">Send Message</button>
                    
                    <!-- Reset Button -->
                    <!-- Clears all form fields -->
                    <button type="reset" class="btn btn-secondary">Reset</button>
                </div>
                
            </form>
            
        </div>
        
    </div>
    
    <!-- Optional: Simple JavaScript for additional client-side validation -->
    <script>
        // Get the form element
        const form = document.getElementById('contactForm');
        
        // Add submit event listener
        form.addEventListener('submit', function(e) {
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Basic validation
            if (name.length < 2) {
                alert('Please enter a valid name (at least 2 characters)');
                e.preventDefault(); // Stop form submission
                return;
            }
            
            if (message.length < 10) {
                alert('Please enter a message with at least 10 characters');
                e.preventDefault(); // Stop form submission
                return;
            }
            
            // If all validations pass, form will submit normally
        });
    </script>
    
</body>
</html>
