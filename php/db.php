<?php

$host = "localhost";
$user = "kashch45_sc";
$pass = "rw493mMzSPfxhce";
$db = "kashch45_scorester";

/*$host = "localhost";
$user = "root";
$pass = "";
$db = "yourecipe";*/

$connection = mysqli_connect($host, $user, $pass, $db);

if (!$connection) {
	die("Alas the server hath failed thee. ". mysqli_connect_error($connection));
}