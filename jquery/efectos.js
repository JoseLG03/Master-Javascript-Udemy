$(document).ready(function(){
    console.log("Efecto cargado");

    let caja = $("#caja");

    $("#btn_ocultar").click(function(){
        caja.fadeIn("slow");
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
        }, "slow");
    });
});