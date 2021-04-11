/*
 COMPLICADO: Pon la fuente de color verde (color:green) a todos los elementos que contengan en el texto el símbolo „€‟

9.2. Ejercicio 2
Vuelve a descomprimir el archivo carrito.zip en una nueva carpeta. En esta nueva versión del carrito sin modificar, resuelve los siguientes ejercicios:
 Al cargar la página debe aparecer el primer producto de la lista de artículos dentro del carrito, simulando que se ha comprado un artículo camiseta 1. Para ello, sigue los siguientes pasos:
o Añade al archivo carro.js un IIFE, dentro del cual, realizarás el resto del ejercicio.
o Utilizando las funciones del DOM, haz una copia del artículo. Como esta copia la tienes que introducir en el carrito, para evitar tener un id duplicado añádele al atributo id una “c” delante.
 Construye el id de la siguiente forma: “c” + id. No puedes usar innerHTML.
o Oculta el elemento de la clase stock (para hacer esto, puedes añadirle el estilo display: none).
o Cambia la propiedad css cursor del elemento y de todos sus hijos al valor default.
o Añade al principio del artículo un enlace (lo utilizaremos para eliminar el artículo del carrito). El enlace creado debe tener este código: <a href="" class="delete"></a>
o Añade la copia creada al principio del contenedor de artículos comprados del carrito (elemento con id cart_items).
o Resta 1 al stock del primer artículo de la lista.
o Resta 1 al número de artículos disponibles (stock) del primer artículo. Si después de disminuir el stock no quedan más artículos disponibles, le añadiremos al elemento de la clase stock del artículo la clase agotado. Esto hará que el stock aparezca tachado. Comprueba esta funcionalidad poniendo 1 al stock del primer artículo antes de cargar la página.
o Incrementa en 1 el número de artículos comprados. Para acceder al valor que contiene un input, puedes utilizar la propiedad value (es de lectura/escritura).
o Actualiza el precio total de la compra sumándole el precio del artículo.

3.1. Ejercicio 1
Si en el tema anterior añadíamos el primer artículo de la lista al carrito al cargar la página, ahora no haremos nada al cargar la página. En lugar de esto, añadiremos un artículo al carrito cuando el usuario haga doble click sobre él, siguiendo las instrucciones que se indicaron en el tema anterior.
A tener en cuenta:
 Debes añadir un manejador para el evento load de la página.
 En este manejador de evento, debes obtener todos los artículos de la lista y añadirle, a cada uno de ellos, un manejador para el evento dblclick.
 En el manejador del evento dblclick haremos los mismo que hicimos en el ejercicio del tema anterior, pero utilizando el ítem sobre el que se haya hecho dblclick.
 Tienes que comprobar si quedan artículos disponibles. El stock debe ser mayor que 0, si no es así no se podrá introducir el artículo en el carrito.
 De momento sólo se verán en el carrito los cuatro primeros artículos añadidos, pero más adelante solucionaremos este problema.

3.2. Ejercicio 2
Para eliminar un producto del carrito se debe pulsar sobre el enlace que se ha creado al introducirlo, por lo tanto, tendremos que asociar un manejador de evento al enlace delete que creamos dinámicamente. Esto lo haremos con el evento click visto durante el tema.
Al pulsar sobre el enlace debes hacer lo siguiente:
 Obtén el id del elemento padre, es decir, el artículo que hay dentro del carrito, y a partir de éste, obtén el id de la lista de artículos a comprar.
 Como esto lo haces desde el evento click del enlace, puedes acceder a él mediante this1, y al artículo del carrito mediante this.parentNode. Una vez obtenido el id del artículo del carrito que quieres eliminar, puedes obtener el de la lista de artículos eliminando la letra c que añadiste al insertarlo al carrito.
 A partir del id obtenido incrementa el stock disponible del artículo que se elimina del carrito. Si el stock estaba a cero elimina la clase agotado del mismo.
 Actualiza el total de productos comprados restándole uno.
 Actualiza el precio total de la compra restándole el precio del artículo eliminado.
 Elimina el artículo del carro de la compra.
 Como la acción por defecto de un enlace al hacer click sobre él es navegar a otra página, debes evitar este comportamiento. Para hacerlo llama al método preventDefault del objeto event.

3.3. Ejercicio 3
Al pulsar sobre el botón btn_clear debes vaciar el carrito, pero no sólo eso, también tienes que actualizar los stocks disponibles de los artículos, el número de artículos comprados y el precio total de la compra.
Esto puede parecer engorroso, pero si aprovechas las funcionalidades que ya tienes implementadas, puedes hacerlo de una forma muy sencilla.
¿Cómo vaciarías el carrito si no existiera el botón vaciar y tuvieras que hacerlo de forma manual? Tendrías que pulsar con el ratón sobre el botón delete de todos los artículos del carrito, ¿y esto actualizaría todos los elementos que hemos comentado? Sí. Pues ya está, lo que tienes que hacer al pulsar el botón vaciar, es lanzar por código un evento de click del ratón sobre el botón delete de todos los artículos del carrito.
Simplemente, selecciona los elementos delete y lanza el evento correspondiente llamando al método .click().

2.1. Color de fondo del carrito
Cuando el carrito esté vacío, el color de fondo del mismo debe cambiar, cada segundo, de rojo a amarillo y viceversa (utiliza la función setInterval vista en el tema). Cuando se añada un artículo al carrito, el color de fondo que esté activo en ese momento se quedará fijo, y si el carrito se vuelve a quedar vacío, volverá a comenzar el parpadeo de color.
Debes mantener una variable global en la que almacenes el id del timer para poder activarlo y desactivarlo cuando corresponda.

2.2. Botones de desplazamiento
Veamos ahora como debes implementar la funcionalidad de moverte por los artículos del carrito con los botones de desplazamiento:
 Lo primero que debes tener en cuenta es que un artículo en el carrito tiene un ancho de unos 120 píxeles y que en el ancho inicial del carrito caben 4 artículos. Por lo tanto, cuando se añade un producto al carrito, debes comprobar si hay más de cuatro artículos añadidos, en cuyo caso, aumentarás el ancho del contenedor de artículos del carrito (id cart_items) en 120 píxeles.
Para saber cuántos artículos hay en el carrito puedes obtener los hijos del mismo con la propiedad children y acceder a su propiedad length.
 Cuando se pulsa el botón anterior (id btn_prev), debes desplazar el contenedor de artículos del carrito (id cart_items) 50 píxeles a la derecha (suma 50 a la propiedad left).
 Cuando pulsas el botón siguiente (id btn_next), debes desplazar el contenedor de artículos del carrito (id cart_items) 50 píxeles a la izquierda (resta 50 a la propiedad left).
 Si el contenedor de artículos llega al borde del carrito, por la izquierda o por la derecha, no debes seguir desplazándolo aunque se siga pulsando el botón de desplazamiento. Para controlar esto guarda el rectángulo incial del carrito (carrito.getBoundingClientRect()1). Después, controla lo siguiente:
o La posición izquierda del carrito actual después de desplazarlo no debe ser nunca mayor que la posición izquierda inicial del mismo. En caso de darse esa situación pon el carrito en su posición inicial. Para ello, haz lo siguiente:
carrito.style.left = '0px';
o La posición derecha actual del carrito no debe ser nunca menor que la posición derecha inicial del mismo. En caso de darse esa situación pon el borde derecho del carrito en el mismo lugar que estaba inicialmente. Para ello, haz lo siguiente:
carrito.style.left = -(rectCarrito.width - rectCarritoInicial.width) + 'px';
 Por último, al eliminar un artículo del carrito, tienes que comprobar si el número de artículos restante es mayor de 4, y, si es así, disminuir el ancho del carrito 120 píxeles. Al hacer esto también debes comprobar si la posición derecha actual del carrito es menor que la posición derecha inicial del mismo, al igual que hacías en el punto anterior.
 Debes crear constantes para los datos fijos de la aplicación, ancho artículo, máximo de artículos visibles en el carro y desplazamiento.
Importante: Cuando obtenemos desde javascript una propiedad de estilo que se ha modificado desde css, no obtendremos el valor computado de la misma. Para poder acceder al valor computado, debes utilizar el método getComputedStyle (puedes consultar la ayuda de esta función en el siguiente enlace:
https://developer.mozilla.org/es/docs/Web/API/Window/getComputedStyle.
Por ejemplo, para obtener la propiedad left computada del carrito haremos lo siguiente: let carrito = document.getElementById('cart_items'); let style = window.getComputedStyle(carrito, ''); let left = parseInt(style.left);
*/




let Ejercicio1 = {};

(function(Ejercicio1) {

    Ejercicio1.itemcChangeBackgroudColor = function()
        {  
           /* Aquí declaras la variable para que contenga los elementos segun la clase el id o lo que sea */  
           let miElemento = document.getElementsByClassName("item");
           /* Esos elemento no son un Array, así que aquí con la primera parte transformo mi variable en una array y con un forEach modifico los atributos que quiera de los elementos*/
            Array.from(miElemento).forEach(x => x.style.background = '#cecece');
           
        }
    Ejercicio1.borderStyle = function ()
    {
        let miBorder = document.getElementById("cart_items");
        miBorder.style.border = "4px solid black";
    }

    Ejercicio1.imagesStyle = function()
    {
        let miImagenBorder = document.getElementsByTagName("img");
        Array.from(miImagenBorder).forEach(x => x.style.border = "1px solid blue");

    }

    Ejercicio1.underLineLabels = function()
    {
        let underLineLabel = document.querySelectorAll("div.item > label");
        Array.from(underLineLabel).forEach(x => x.style.textDecoration = "underline");
    }

    Ejercicio1.colorButton = function()
    {
        let colorButtons = document.querySelectorAll("#cart_container button");
        Array.from(colorButtons).forEach(x => x.style.color = 'red');
    }

    Ejercicio1.colorLabel = function()
    {
        let colorLabels = document.querySelectorAll("div.item  label");
        Array.from(colorLabels).forEach(x => x.style.color = 'white');
    }

    Ejercicio1.colorBackgroundYellow = function()
    {
        let backgroundYellow = document.querySelectorAll("div :empty");
        Array.from(backgroundYellow).forEach(x => x.style.background = 'yellow');
    }

    Ejercicio1.colorFirstItem = function()
    {
        let colorFirst = document.getElementsByClassName("item")[0];
        let colorLast = document.getElementsByClassName("item");
        colorFirst.style.background = 'red';
        colorLast[colorLast.length - 1].style.background = 'red'
    }
    
    Ejercicio1.colorFirstItem = function()
    {
        let colorFirst = document.getElementsByClassName("item")[0];
        let colorLast = document.getElementsByClassName("item");
        colorFirst.style.background = 'red';
        colorLast[colorLast.length - 1].style.background = 'red'
    }

    Ejercicio1.colorCamisetas = function()
    {
        let colorCamiseta = document.querySelectorAll("img[src*=camiseta]");
        Array.from(colorCamiseta).forEach(x => x.style.borderColor = 'green');
       
    }

    Ejercicio1.inputColor = function()
    {
        let inputColors = document.getElementsByTagName("input");
        Array.from(inputColors).forEach(x => x.style.color = 'green');
       
    }
    
    Ejercicio1.colorEuro = function()
    {
        let colorEuros = document.getElementsByTagName("label > price ");
        Array.from(colorEuros).forEach(x => x.style.color = 'green');
       
    }
    

})(Ejercicio1);




let Ejercicio2 = {};

(function(Ejercicio2) {

    Ejercicio2.duplicarCamiseta = function ()
    {
        /** Primero encontramos el articulo que quiero clonar */
        let camiseta = document.getElementById("i1");
        /* Y uso el cloneNode para copiar el id de camiseta en una nueva id que es el camisetaCarrito. el true es para pillar 
        todo lo relacionado con es id  los llamados "hijos" */
        let camisetaCarrito = camiseta.cloneNode(true);
        /* Aqui cambiamos el id del clon porque no puede haber 2 id iguales y lo hacemos con loa formula  d c + camiseta para que podamos usar otros id */
        camisetaCarrito.id = "c" + camiseta.id;
        /*Aquí invocamos al carrito */
        let carrito = document.getElementById("cart_items");
        /*El append este es para pegar enganchar al carrito el nuevo id */
        carrito.append(camisetaCarrito);


    }
})(Ejercicio2);

window.onload = function() {
    Ejercicio1.itemcChangeBackgroudColor();
    Ejercicio1.borderStyle();
    Ejercicio1.imagesStyle();
    Ejercicio1.underLineLabels();
    Ejercicio1.colorButton();
    Ejercicio1.colorLabel();
    Ejercicio1.colorBackgroundYellow();
    Ejercicio1.colorFirstItem();
    Ejercicio1.colorCamisetas();
    Ejercicio1.inputColor();
    Ejercicio1.colorEuro();

    Ejercicio2.duplicarCamiseta();
};



