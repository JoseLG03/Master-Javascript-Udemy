'use strict'

$(document).ready(function(){
    
    console.log("jQuery cargado");
    
    $("a").each(function(index){
        var enlace = $(this).attr("href");
        $(this).text(enlace);
    });
});