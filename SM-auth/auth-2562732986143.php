<?php


$users = [
  "mahi" => ["password" => "mahi", "redirect" => "/sm-5678972678/sm-auth656789098.html"],
  "shashikant" => ["password" => "mahi", "redirect" => "/sm-5678972678/sm-auth656789098.html"],
  "shashikant70560" => ["password" => "shashikant143", "redirect" => "/sm-admin/admin-1242.html"],
  "testuser" => ["password" => "12345", "redirect" => "/users/test-dashboard.html"]
];

$username = $_POST['username'];
$password = $_POST['password'];

if (isset($users[$username]) && $users[$username]['password'] === $password) {
  echo json_encode([
    "success" => true,
    "redirect" => $users[$username]['redirect']
  ]);
} else {
  echo json_encode([
    "success" => false
  ]);
}
?>
