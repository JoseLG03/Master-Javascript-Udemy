'use strict'

$(document).ready(function(){
    console.log("jQuery cargado");
    
    //mouse over y mouse out
    let caja = $("#caja");

    function cambia_rojo(){
        $(this).css("background", "red");
    };

    function cambia_blueviolet(){
        $(this).css("background", "blueviolet");
    };

    caja.hover(cambia_rojo,cambia_blueviolet);

    caja.click(function(){
        $(this).css("background", "yellow")
               .css("color", "green");
    });

    caja.dblclick(function(){
        $(this).css("background", "violet")
               .css("color", "red")
               .css("font-size", "20px");
    });

    let input = $("#nombre");

    input.focus(function(){
        $(this).css("border", "2px solid green");
    });

    input.blur(function(){
        $(this).css("border","1px solid #ccc");
        $("#datos").text($(this).val()).show();
    });
});