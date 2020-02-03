$(document).ready(function(){
    console.log("Efecto cargado");

    let caja = $("#caja");

    $("#btn_ocultar").click(function(){
        caja.fadeIn("slow", function(){
            console.log("boton ocultado");
        });
    });

    $("#btn_mostrar").click(function(){
        caja.fadeOut("slow");
    });

    $("#todo").click(function(){
        caja.toggle("fast");
    });

    $("#animame").click(function(){
        caja.animate({
            marginLeft: "300px",
            height: "200px",
        }, "slow")
        .animate({
            borderRadius:"900px",
            marginTop:"80px",
        }, "slow");
    });
});