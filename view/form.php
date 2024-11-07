<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../public/css/form.css">
    <link rel="stylesheet" href="../public/css/respons.css">
</head>
<body>
    <div class="forms">
<h1>送信完了しました。<br>ありがとうございます。</h1>
<div class="form-wrapper">
<div class="form-items">
    <h2>入力内容</h2>
    <div class="form-item">名前：
<?php echo $_POST['username'];?></div>
<div class="form-item">メールアドレス：
<?php echo $_POST['mail'];?></div>
<div class="form-item">コメント：
<?php echo $_POST['comment'];?></div>
</div>
</div>
<a href="http://localhost:8080/sheet/view/sheet.html">戻る</a>
</div>

   
</body>
</html>