<!DOCTYPE HTML>
<html>
<head>
  <meta charset='utf-8'>
  <title>{$name}</title>
  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-theme.min.css">
  <script src='//code.jquery.com/jquery-1.8.3.min.js'></script>
  <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
</head>
<body>
  <form method='POST' action='index.php'>
    <div class='jumbotron'>
      <div class='container'>
        <div class='row'>
          <div class='col-12 text-center'><h1>{$name}</h1>
          <hr />
          </div>
        </div>
        {include file=$main}
      </div>
    </div>
    <div class='container'>
      <div class='row'>
        <div class='col-lg-12 col-sm-12 text-muted visible-lg'>
        <a href='http://comment.cxm.tw/?url=https://raw.github.com/syuemingfang/{$repo}/master/comment.json'>Documentation</a> |
        <a href='http://html.cxm.tw/?url=https://raw.github.com/syuemingfang/{$repo}/master/example.html'>Example</a> |
        <a href='http://syue.cxm.tw'>Official Website</a> |
        <a href='mailto:syuemingfang@yahoo.com.tw'>Contact US</a>
        Made in Taiwan.<br />
        This license allows for redistribution, commercial and non-commercial, as long as it is passed along unchanged and in whole, with credit to you.
        </div>
     </div>
   </div>
  </form>
</body>
</html>


