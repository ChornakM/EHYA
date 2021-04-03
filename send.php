<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
// Переменные
$name = $_POST["name"];
$phone = $_POST["phone"];
$message = $_POST["message"];
$email = $_POST["email"];


//формирование самого письма
// Настройки
$mail = new PHPMailer\PHPMailer\PHPMailer();
try{
  $mail->isSMTP();
  $mail->CharSet ="UTF-8";
  $mail->SMTPAuth = true;
  $mail->SMTPDebug = 2;
  $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};
  $mail->isHTML(true);

if (!empty($name) and !empty($phone) and !empty($email) and !empty($message)){
  $title = "Новий проект";
  $body = "
  <h2>Новый клиент</h2>
  <b>Имя:</b> $name<br>
  <b>Телефон:</b> $phone<br>
  <b>Имейл:</b> $email<br>
  <b>Сообщение:</b><br>$message
";
}
elseif (!empty($email) and empty($name)) {
  $title = "Новая подписка";
  $body = "
  <h2>Новое Имейл</h2>
  <b>Имейл:</и> $email<br>
  ";
} 
elseif (!empty($name) and !empty($phone) and !empty($message) and empty($email)) {
  $title = "Новое обращение";
  $body = "
  <h2>Новое сообщение</h2>
  <b>Имя:</b> $name<br>
  <b>Телефон:</b> $phone<br>
  <b>Сообщение:</b><br>$message
";
}

  //настройки вашей почты
  $mail->Host        ='smtp.mail.ru';
  $mail->Username    ='mykha1755@mail.ru';
  $mail->Password    ='Mm87655387';
  $mail->SMTPSecure  ='ssl';
  $mail->Port        = 465;
  $mail->setFrom('mykha1755@mail.ru', 'Mykhailo Chornak');  

  $mail->addAddress('chornak17@gmail.com');

  // Письмо
  $mail->isHTML(true); 
  $mail->Subject = $title; // Заголовок письма
  $mail->Body = $body; // Текст письма


  // Результат
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html');
?>
<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
// Переменные




//формирование самого письма
$title = "Ново";
$body = "
<h2>Новая подписка на рассылку/h2>
<b>Имейл:</b> $email<br>

";
// Настройки
$mail = new PHPMailer\PHPMailer\PHPMailer();
try{
  $mail->isSMTP();
  $mail->CharSet ="UTF-8";
  $mail->SMTPAuth = true;
  $mail->SMTPDebug = 2;
  $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};
  $mail->IsHTML(true);

  //настройки вашей почты
  $mail->Host        ='smtp.mail.ru';
  $mail->Username    ='mykha1755@mail.ru';
  $mail->Password    ='Mm87655387';
  $mail->SMTPSecure  ='ssl';
  $mail->Port        = 465;
  $mail->setFrom('mykha1755@mail.ru', 'Mykhailo Chornak');  

  $mail->addAddress('chornak17@gmail.com');

  // Письмо
  $mail->isHTML(true); 
  $mail->Subject = $title; // Заголовок письма
  $mail->Body = $body; // Текст письма


  // Результат
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
// header('Location: thankyou.html');
?>