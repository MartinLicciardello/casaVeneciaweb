/*Aqui ha creado la seccion de preguntas frecuentes */

$(".faq").append(`<div><h2>¿Hacen envios? <button id="respA" type="button" class="btn btn-info">Ver</button></h2>
                <p class="respuestaA" style= "display:none";>Si, hacemos envios gratuitos si se encuentra por la zona.
            <h2>¿Estan asociados a mercado pago?<button  id="respB" type="button" class="btn btn-info">Ver</button></h2>
            <p class="respuestaB" style= "display:none";>No, no estamos asociados a mercado pago</p>
            <h2>Se me rompio un producto,¿tengo garantia? <button id="respC" type="button" class="btn btn-info">Ver</button></h2>
            <p class="respuestaC" style= "display:none";>Si, tiene garantía de 6 meses</p>
            <h2>¿Puedo hacer la compra por teléfono? <button id="respD" type="button" class="btn btn-info">Ver</button></h2>
            <p class="respuestaD" style= "display:none";>No, las compras se realizan en el local</p>
            <h2>¿Se puede señar? <button id="respE" type="button" class="btn btn-info">Ver</button></h2>
            <p class="respuestaE" style= "display:none";>No, no hay señas, contamos con el stock de los productos publicados en el sitio, asi que podes venir y llevarlo cuando quieras</p>
        </div>`)
//Toggle permite mostrar y esconder un msg 
$("#respA").css("font-size","22px").click(() =>{  //Boton con estilo y el metodo toggle
            $(".respuestaA").css("color","red").toggle("fast");  
      })    
$("#respB").css("font-size","22px").click(() =>{  //Boton con estilo y el metodo toggle
        $(".respuestaB").css("color","red").toggle("fast");  
  })   
$("#respC").css("font-size","22px").click(() =>{  //Boton con estilo y el metodo toggle
    $(".respuestaC").css("color","red").toggle("fast");  
})   
$("#respD").css("font-size","22px").click(() =>{  //Boton con estilo y el metodo toggle
    $(".respuestaD").css("color","red").toggle("fast");  
})    
$("#respE").css("font-size","22px").click(() =>{  //Boton con estilo y el metodo toggle
    $(".respuestaE").css("color","red").toggle("fast");  
})          
$(".faq").css("margin-top","22px");





// $("input[type='text']").keypress(function (event) {
//     //filtrar para que sólo se active cuando aprietan Enter
//     if (event.key == "Enter") {
//         $(".lostado").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + $(this).val() + "</li>");
//         // se borra el contenido del input
//         $(this).val("");
//         event.stopPropagation();
//     }
//   });
//     $("ul .listado").on("click", "li", function () {
//         $(this).toggleClass("completado")
//     });
//  // Borrar los items completados
//     $("ul .listado").on("click", "span", function (event) {
//         $(this).parent().fadeOut(500, function () {
//             $(this).remove();
//         });
//         event.stopPropagation();
//     });

    


