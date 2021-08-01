<?php
    $destinatario = 'SucursalSoacha@distribucionesporras.com.co';
    $nombre = $_POST['names'] ;
    $correo = $_POST['email'] ;
    $asunto = $_POST['subject'] ;
    $mensaje = $_POST['message'] ;

    $header = "Enviado desde la pagina de Distribuciones porras";
    $mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre;

    mail($destinatario, $asunto, $mensajeCompleto, $header);
    echo "<script>alert('correo enviado exitosamente')</script>";
    echo "<script> setTimeout(\"location.href='Soacha.html'\",1000)</script>";
?>