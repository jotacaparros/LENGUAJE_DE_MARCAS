<?php
$articulos = [
	[
		'title' => '<label class="title">Camiseta 1</label>',
		'image' => '<img src="img/camiseta1.jpg">',
		'description' => '<alt="descripción i1">',
		'price' => '<label class="price">20 €</label>',
		'stock' => '<label class="stock">Stock 10</label>',
		'active' => True,

	],

	[
		'title' => '<label class="title">Reloj 2</label>',
		'image' => '<img src="img/reloj2.jpg">',
		'description' => '<alt="descripción i2">',
		'price' => '<label class="price">24 €</label>',
		'stock' => '<label class="stock">Stock 10</label>',
		'active' => True,
	],

	[
		'title' => '<label class="title">Camiseta 3</label>',
		'image' => '<img src="img/camiseta3.jpg">',
		'description' => '<alt="descripción i3">',
		'price' => '<label class="price">18 €</label>',
		'stock' => '<label class="stock">Stock 10</label>',
		'active' => True,
	],

	[

		'title' => '<label class="title">Reloj 4</label>',
		'image' => '<img src="img/reloj4.jpg">',
		'description' => '<alt="descripción i4">',
		'price' => '<label class="price">30 €</label>',
		'stock' => '<label class="stock">Stock 10</label>',
		'active' => True,
	],

	[
		'title' => '<label class="title">Reloj 5</label>',
		'image' => '<img src="img/reloj5.jpg">',
		'description' => '<alt="descripción i5">',
		'price' => '<label class="price">20 €</label>',
		'stock' => '<label class="stock">Stock 10</label>',
		'active' => True,
	],

	
];

for ($i = 0; $i < 5; $i++){

	if ($i == 0){	
		echo '<div id="item_container">';
	};
	echo '<div class="item" id="i' . $i .' ">'; // 
	
		if ($articulos[$i]['active'] == true){
			echo $articulos[$i]['title'];
			echo $articulos[$i]['image'];
			echo $articulos[$i]['description'];
			echo $articulos[$i]['price'];
			echo $articulos[$i]['stock'];
		}

	echo '</div>';

	if ($i == 4){
		echo '</div>';
	};

}
?>


<!DOCTYPE html>
<html lang="es">
<head>
	<title>Carro de la compra con Javascript</title>
	<meta charset="utf-8">
	<link rel="stylesheet" title="normal" href="css/carro.css" type="text/css" media="screen" >
	<script src= "carro.js"> </script>
</head>
<body>
	<div id="cart_container">
		<div id="cart_title">
			<span>Carrito</span>
			<div class="clear"></div>
		</div>
		<div id="cart_toolbar">
			<div id="cart_items" class="back"></div>
		</div>
		<div id="navigate">
			<div id="nav_left">
				<button id="btn_comprar" title="Confirma la compra de los artículos">Comprar</button>
				<button id="btn_prev" title="Desplaza el carrito hacia la izquierda">&lt;</button>
				<button id="btn_next" title="Desplaza el carrito hacia la derecha">&gt;</button>
				<button id="btn_clear" title="Vacia el carrito">Vaciar</button>
			</div>
			<div id="nav_right">
				<span class="sptext">
					<label>Compras </label><input id="citem" value="0" readonly title="Número de productos comprados">
				</span>
				<span class="sptext">
					<label>Precio </label><input id="cprice" value="0 €" readonly  title="Precio total de los productos comprados">
				</span>
			</div>
			<div class="clear"></div>
		</div>
	</div>
	<script src="scripts/carro.js"></script>
</body>
</html>
