$(document).ready(function(){
    console.log("Efecto cargado");

    let datos = $("#datos");    
    //load
    //datos.load("https://reqres.in");

    $.get("https://reqres.in/api/users", {page: 2}, function(response){
        console.log(response.data[3]);
        response.data.forEach((element, index) =>{
            datos.append("<p>"+element.first_name+" "+ element.last_name+"</p>");
        });
    })

    $("#formulario").submit(function(e){
        e.preventDefault();

        let usuario = {
            name: $('input[id = "input_nombre"]').val(),
            age: $('input[id = "input_edad"]').val()
        };
        $.post($(this).attr("action"), usuario, function(response){
            console.log(response);
        }).done(function(){
            alert("Usuario registrado correctamente.");
        });
        
        $.ajax({
            type: 'POST',
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function(){
                console.log("Enviando usuario...");
            },
            success: function(response){
                console.log(response);
            },
            error: function(){
                console.log("Error");
            },
            timeout: 1000,
        });

        return false;
    });
});