<?php

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

$title = "Тема письма";
$c = true;

$title = "SDP: заявка с сайта";
foreach ($_POST as $key => $value) {
    if ($value != "" && $key != "project_name"  && $key != "admin_email" && $key != "form_subject") {
        $body .= "
        " . ( ( $c = !$c) ? '<tr>' : '<tr style="background-color: #f8f8f8;">') . "
        <td sryle='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b>:</td>
        <td sryle='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
        </tr>
        ";
    }
}

$body = "<table style='width: 100%'> $body </table>";

$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    $mail->isSMTP();                                      
    $mail->CharSet = 'utf-8';		        
    $mail->SMTPAuth = true; 
    $mail->Host = 'smtp.gmail.com';  			               
    $mail->Username = 'mailer9683@gmail.com';            
    $mail->Password = 'gmaozsvwvrixcigx';                  
    $mail->SMTPSecure = 'ssl';                                 
    $mail->Port = 465;                                         
    $mail->setFrom('mailer9683@gmail.com', 'PHPMailer'); 
    $mail->addAddress('john69683@gmail.com');                  
    $mail->addAddress('john_9683@mail.ru');                    
    $mail->isHTML(true);  
    $mail->Subject = $title;
    $mail->Body = $body;   
    $mail->send();  
} catch (Exception $e) {
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
?>
