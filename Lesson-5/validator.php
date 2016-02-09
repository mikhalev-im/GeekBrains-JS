<?php
require "gump.class.php";

$validator = new GUMP();

$_POST = $validator->sanitize($_POST);

$rules = array(
	'username'    => 'required|alpha_numeric|max_len,100|min_len,6',
	'password'    => 'required|max_len,100|min_len,6',
	'email'       => 'required|valid_email',
	'gender'      => 'required|exact_len,1',
	'credit_card' => 'required|valid_cc',
	'bio'		  => 'required'
);

$validated = $validator->validate(
	$_POST, $rules
);
if($validated === TRUE) {
	die("true");
} else {
	die("false");
}
?>