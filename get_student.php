<?php
// Replace 'db_host', 'db_username', 'db_password', and 'db_name' with your actual database credentials
$connection = new mysqli('db_host', 'db_username', 'db_password', 'db_name');

if ($connection->connect_error) {
    die('Connection failed: ' . $connection->connect_error);
}

$query = "SELECT * FROM students";
$result = $connection->query($query);

if ($result->num_rows > 0) {
    $students = array();
    while ($row = $result->fetch_assoc()) {
        $students[] = $row;
    }
    echo json_encode($students);
} else {
    echo json_encode(array());
}

$connection->close();
?>
