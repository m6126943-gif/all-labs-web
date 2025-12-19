<?php
$servername = "127.0.0.1";
$dbname = "nady";
$username = "root";
$password = "";
$dsn = "mysql:host=$servername;dbname=$dbname;charset=utf8mb4";

$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
];
try {
    $pdo = new PDO($dsn, $username, $password, $options);
}catch (PDOException $e) {
    echo "<p>Connection failed: " . $e->getMessage() . "</p>";
    exit;
}
