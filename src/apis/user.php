<?php
include "db.php";

$expName = "/^[A-Za-z0-9. ]*$/";
$expMail = "/^[A-Za-z0-9.@]*$/";
$expPass = "/^[A-Za-z0-9 ]*$/";


$input = json_decode(file_get_contents('php://input'), true);

echo "yay";
echo $input;