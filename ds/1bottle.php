<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body>
<script>
    console.log( 'The product id is <?=@$_GET["product_id"]?>!' );
    console.log( 'The click id is <?=@$_GET["__clickid__"]?>!' );
    console.log( 'The click id is <?=@$_GET["__click_id__"]?>!' );
    console.log( 'The cid id is <?=@$_GET["__cid__"]?>!' );
    console.log( 'The tracking key is  <?=@$_GET["__trackingkey__"]?>!' );
    console.log( 'The custom is <?=@$_GET["__custom__"]?>!' );
</script>

<!-- Replace 123456 by your product id. Keep the GET parameter iframe! -->

<style> body { margin:0; } </style>
<script src='https://www.digistore24.com/service/js/orderform_widget.js'></script>
<iframe class='ds24_payIFrame' style='overflow: hidden; width: 100%; height: 100%; border: none; margin:0; padding: 0; background: transparent;' src='https://www.digistore24.com/product/389812?iframe=1' ></iframe>

</body>
</html>