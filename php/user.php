<?php
include "db.php";

$expName = "/^[A-Za-z0-9. ]*$/";
$expMail = "/^[A-Za-z0-9.@]*$/";
$expPass = "/^[A-Za-z0-9 ]*$/";

if ($_POST["type"] === "login") {
	getUser($_POST["username"]);
}

function addUser($username, $password) {
	$query = "INSERT INTO users (username, password)
	VALUES ('$username', '$password')";

	$result = mysqli_query($connection, $query);

	if (!$result) {
		echo "Error: " . $query . "<br>" . mysqli_error($connection);
	} else {
		echo "ok";
	}
}

function getUser ($username) {
	global $connection;

	$query = "SELECT * FROM users WHERE username = '$username'";
	$result = mysqli_query($connection, $query);
	
	if (!$result) {
		die("Something went really wrong!" . mysqli_error());
		echo "nay";
	} else {
		// echo "yay ";

		while ($data = mysqli_fetch_assoc($result)) {
			if ($username === $data["username"]) {
				echo "*** " . $data["username"] . " *** " . $data["username"] . " *** " . $data["email"];
			}
		}
	}

	mysqli_close($conn);
}