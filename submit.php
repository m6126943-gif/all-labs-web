<?php
require_once __DIR__ . '/connect.php';

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || $email === '' || $message === '') {
	http_response_code(400);
	echo 'Please fill in all fields.';
	exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	http_response_code(400);
	echo 'Invalid email address.';
	exit;
}

try {
	$stmt = $pdo->prepare(
        'INSERT INTO user (name, email, message) 
        VALUES (:name, :email, :message)'
    );

	$stmt->execute([
		':name' => $name,
		':email' => $email,
		':message' => $message,
	]);

	echo "<h2>Thanks, $name - your message has been received!</h2>";
    echo "<p>
    <a href='lab3.html'>Back to Contact Form</a>
    </p>";
        
} catch (PDOException $e) {
	http_response_code(500);
	echo 'Failed to save message: ' . $e->getMessage();
}
?>
