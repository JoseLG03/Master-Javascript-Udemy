$(document).ready(function(){

    $("#rojo").css("background","red")
              .css("color","white");  

    $(".punteado").css("border","2px dashed black"); 
    
    $(".sin_borde").click(function(){
        console.log("Click dado");
        $(this).addClass("punteado");
    });

    var parrafo = $("p");

    parrafo.click(function(){
        $(this).removeClass("sin_borde");
    });
});