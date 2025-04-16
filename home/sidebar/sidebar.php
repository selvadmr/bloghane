<!DOCTYPE html>
<html lang="en">
<head>
<link rel="stylesheet" href="sidebar.css" />
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
<?php include 'sidebar.php'; ?>
<div class="sidebar collapsed" id="sidebar">
    <div class="profile-section"></div>
    <br>
    <nav>
      <ul>
        <li>
          <a href="#">
            <img src="foto.png" alt="Profil Fotoğrafı" style="width:50px;height:50px;">
            <span>Hesabım</span>
          </a>
        </li>
        <li><a href="#"><i class="material-icons">home</i> <span>Ana Sayfa</span></a></li>
        <li><hr class="separator"></li>
        <li><hr class="separator"></li>
        <li>
          <a href="theme/theme.html" id="theme-toggle">
            <i class="material-icons">brightness_6</i>
            <span>Tema Değiştir</span>
          </a>
        </li>
        <br>
        <br>    
        <li class="account-header">Hesap</li>
        <li><a href="help/help.html"><i class="material-icons">help</i> <span>Yardım</span></a></li>
        <li>
          <a href="login/giris.html" class="login-in-button">
            <i class="material-icons">login</i>
            <span class="login-text">Giriş Yap</span>
          </a>
        </li>
       
      </ul>
    </nav>
  </div>
</body>
</html>