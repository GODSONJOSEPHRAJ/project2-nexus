<?php
$name = $_POST['name'];
$number = $_POST['number'];
$mail = $_POST['mail'];
$message = $_POST['message'];

// Database connection
$conn = new mysqli('localhost','root','','cust_info');
if($conn->connect_error){
    die('Connection Failed:'.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into information(name,number,mail,message)values(?, ?, ?, ?)");
    $stmt->bind_param("siss",$name, $number, $mail, $message);
    $stmt->execute();
    echo "Submitted Successfully...";
    $stmt->close();
    $conn->close();
}

?>