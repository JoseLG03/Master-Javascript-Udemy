$("document").ready(function(){
    console.log("Interfaz cargada");

    $(".elemento").draggable();

    $(".elemento").resizable();

    //$(".lista").selectable();

    $(".lista").sortable({
        update: function(event, ui){
            console.log("Ha cambiado la lista");
        }
    });
});