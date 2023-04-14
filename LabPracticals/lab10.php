<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lab 10</title>
    <style>
        body{
            background-color: aliceblue;
        }
    </style>
</head>

<body>
    <!-- Write a program using PHP and HTML to create a form and display the details entered by the
    User. -->
    <h2>Enter your details: </h2>
    <form method="POST">
        <div>
            <label>Please enter your first name : </label>
            <input type="text" name="f_name"><br><br>
        </div>
        <div>
            <label>Please enter your last name : </label>
            <input type="text" name="l_name"><br><br>
        </div>
        <div>
            <label>Please enter your email : </label>
            <input type="text" name="email"><br><br>
        </div>
        <div>
            <label>Please enter your contact : </label>
            <input type="text" name="contact"><br><br>
        </div>
        <div>
            <label>Please enter your address : </label>
            <input type="text" name="address"><br><br>
        </div>
        <div>
            <input type="submit" value="Display Details" name="submit">
        </div>
    </form>
</body>

</html>

<?php

// When the submit button is clicked
if (isset($_POST['submit'])) {

    // Creating variables and 
    // storing values in it
    $f_name = $_POST['f_name'];
    $l_name = $_POST['l_name'];
    $email = $_POST['email'];
    $contact = $_POST['contact'];
    $address = $_POST['address'];

    echo "<h1><i> Hi, $f_name $l_name. <br> Your email address is $email. <br>You live in $address. <br>Your contact number is $contact. </i></h1>";
}
?>


<!-- http://localhost/LabPracticals/lab10.php -->