<?php
//VALIDACIÓN DE CMAPOS
if(empty($_REQUEST['nombre']) || empty($_REQUEST['correo']) || empty($_REQUEST['asunto']) || empty($_REQUEST['mensaje']))
{
	echo "<script> window.location ='contacto.html';</script>";
}else{
		//RECEPCIÓN DE DATOS
		$nom=$_POST['nombre'];
		$email=$_POST['correo'];
		$asu=$_POST['asunto'];
		$msj=$_POST['mensaje'];

		//CORREO DESTINO
		$cor="wilmerpachon197@gmail.com";
		
		//ENVIO DE CORREO
		$de .="MIME-Version: 1.0\n"; 
		$de .= "Content-type: text/html; charset=iso-8859-1\r\n";
		$de .= "Content-type: text/html; charset=UTF-8\r\n"; 
		$de .="From: WWW.ABELOSH.COM <info@abelosh.com>\r\n";
		//ASUNTO
		$asunto="Usuario en contacto.";
		
		//MENSAJE
		$mensaje="
					Mensaje de:<b>".$nom."</b>
					<br><br>
					<b>DATOS DE CONTACTO</b><br>
					Nombre: <b>".$nom."</b><br>
					Correo: <b>".$email."</b><br>
					Asunto: <b>".$asu."</b><br><br>
					Mensaje: <b>".$msj."</b><br><br>
					<hr>
					<a href='blog.html' target='_blank'>blog.html</a>
				";

		//ENVIO DE CORREO
		mail($cor, $asunto, $mensaje, $de) or die('Hubo un error');	
		header('location:index.html')
		
		//SCRIPT DE CONFIRMACIÓN
		echo "<script>alert(\"Su mensaje ha sido enviado, gracias por contactarnos, pronto estaremos en contacto con usted.\\n|| www.constcity.abelosh.com ||\");</script>";
		echo "<script> window.location='contacto.html';</script>";
	}
?>