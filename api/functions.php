<?php

function send_mail($mail, $message, $to, $subject){		
	$host = 'mail.agrosavvy.com';
	$username = 'support@agrosavvy.com';
	$passwd   = 'GoGetter21';
	$mailfrom = 'support@agrosavvy.com';
	$sendername = 'Agrosavvy Ltd.';
	$img_link = 'agrosavvy.com/uploads/';
	// $img_link = '../uploads/';
	// $mail->SMTPDebug = 3;                            // Enable verbose debug output

	$mail->isSMTP();                                      // Set mailer to use SMTP
	$mail->Host = $host;                                  // Specify main and backup SMTP servers
	$mail->SMTPAuth = true;   															 // Enable SMTP authentication
	$mail->SMTPKeepAlive = true;  // SMTP connection will not close after each email sent, reduces SMTP overhead
	$mail->Username = $username;                          // SMTP username
	$mail->Password = $passwd;                           // SMTP password
	$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
	$mail->Port = 465;                                    // TCP port to connect to

	$mail->setFrom($mailfrom, $sendername);

	$mail->isHTML(true);                                  // Set email format to HTML

	$mail->Subject = $subject;
	
	$mail->addAddress($to, ucwords($subject));     // Add a recipient
	$mail->Body = '
		<!DOCTYPE html>
		<html lang="en">
		<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<style>
		html, body {				
				margin: 0px;
				padding: 0px;
			}
			.text-center {
				text-align: center;
			}
			.thm-text {
				color:  #ff5722;
			}
			.bg-dark {
				background-color:  #000;
			}
			.row {
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				align-items: center;
			}
			.col {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
			img {
				max-width: 100%;
			}			
			.container{
				margin-left: auto;
				margin-right: auto;
				padding-left: 1rem;
				padding-right: 1rem;
			}
      .link {
        color: blue;
      }
		</style>
		<title>'.ucwords($subject).'</title>
		</head>
		<body>
			<header class="bg-dark text-center">
				<img src="'.$img_link.'logo2.png" alt="Agrosavvy Logo">
			</header>
			<main class="container">
				<h4>'.ucwords($subject).'</h4>

				<p>'. $message .'</p>	
			</main>
			</body>
		</html>

    ';
		$mail->AltBody = "{$message}";

    if(!$mail->send()) {
        $msg = 'Mail could not be sent.';
        $msg .= 'Mailer Error: ' . $mail->ErrorInfo;
        $mailsent = 0;
    } else {
      $msg = 'Mail Sent Successfully.';
      $mailsent = 1;
    }
		return ['mailsent'=>$mailsent, 'message'=>$msg];
    // echo $mail->Body;
	}
?>

