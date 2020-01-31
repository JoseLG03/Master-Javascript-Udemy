$(document).ready(function(){

    //slider
    if(window.location.href.indexOf("index") > -1){
    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
      });
    };

    //post
    if(window.location.href.indexOf("index") > -1){
        var post =[
            {
                tittle:"Titulo de prueba 1",
                date: "Publicado el " + moment().format("DD") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY") +".",
                content: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printingand typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type andscrambled it to make a type specimen book. It hassurvived not only five centuries, but also the leapinto electronic typesetting, remaining essentially  unchanged. It was popularised in the 1960s with therelease of Letraset sheets containing Lorem Ipsumpassages, and more recently with desktop publishingsoftware like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                tittle:"Titulo de prueba 2",
                date: "Publicado el " + moment().format("DD") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY") +".",
                content: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printingand typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type andscrambled it to make a type specimen book. It hassurvived not only five centuries, but also the leapinto electronic typesetting, remaining essentially  unchanged. It was popularised in the 1960s with therelease of Letraset sheets containing Lorem Ipsumpassages, and more recently with desktop publishingsoftware like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                tittle:"Titulo de prueba 3",
                date: "Publicado el " + moment().format("DD") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY") +".",
                content: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printingand typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type andscrambled it to make a type specimen book. It hassurvived not only five centuries, but also the leapinto electronic typesetting, remaining essentially  unchanged. It was popularised in the 1960s with therelease of Letraset sheets containing Lorem Ipsumpassages, and more recently with desktop publishingsoftware like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                tittle:"Titulo de prueba 4",
                date: "Publicado el " + moment().format("DD") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY") +".",
                content: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printingand typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type andscrambled it to make a type specimen book. It hassurvived not only five centuries, but also the leapinto electronic typesetting, remaining essentially  unchanged. It was popularised in the 1960s with therelease of Letraset sheets containing Lorem Ipsumpassages, and more recently with desktop publishingsoftware like Aldus PageMaker including versions of Lorem Ipsum."
            }
        ]  
        
        post.forEach((item, index) =>{
            var post = `
                <article id="post">
                    <h2>${item.tittle}</h2>
                    <span id="fecha">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="" class="leer_mas">Leer más</a>
                </article>   
            `;

            $("#post").append(post);        
        });
    };

        //Cambio de temas

        var tema = $("#estilo");

        $("#cambia_verde").click(function(){
            tema.attr("href", "css/verde.css");  
        });

        $("#cambia_azul").click(function(){
            tema.attr("href", "css/azul.css");  
        });

        $("#cambia_rojo").click(function(){
            tema.attr("href", "css/rojo.css");  
        });

        //regresar
        $(".subir").click(function(e){
            e.preventDefault();
            $("html,body").animate({
                scrollTop: 0
            },500);
            return false;
        });

        //login falso
        $("#form").submit(function(){
            let form_nombre = $("#input_nombre").val();
            localStorage.setItem("form_nombre", form_nombre);
        });

        let form_name = localStorage.getItem("form_nombre");
        let about = $("#about p");

        if(form_name != null){
            about.html("<br/><strong>Bienvenido "+ form_name+"</strong>");
            $("#login").hide();
            about.append("<br><a href='#' id='cerrar'>Cerrar sesión</a>");

            $("#cerrar").click(function(){
                localStorage.clear();
                location.reload();
            });
        };

        //acordeon
        if(window.location.href.indexOf("about") > -1){
            $("#acordeon").accordion();
        };
});


