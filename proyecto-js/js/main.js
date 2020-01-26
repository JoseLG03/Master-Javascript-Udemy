  $(document).ready(function(){
    //slider
    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
      });

    //post
    var post =[
        {
            tittle:"Titulo de prueba 1",
            date: moment().format("DD MMMM YYYY"),
            content: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printingand typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type andscrambled it to make a type specimen book. It hassurvived not only five centuries, but also the leapinto electronic typesetting, remaining essentially  unchanged. It was popularised in the 1960s with therelease of Letraset sheets containing Lorem Ipsumpassages, and more recently with desktop publishingsoftware like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            tittle:"Titulo de prueba 2",
            date: moment().format("DD MMMM YYYY"),
            content: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printingand typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type andscrambled it to make a type specimen book. It hassurvived not only five centuries, but also the leapinto electronic typesetting, remaining essentially  unchanged. It was popularised in the 1960s with therelease of Letraset sheets containing Lorem Ipsumpassages, and more recently with desktop publishingsoftware like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            tittle:"Titulo de prueba 3",
            date: moment().format("DD MMMM YYYY"),
            content: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printingand typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type andscrambled it to make a type specimen book. It hassurvived not only five centuries, but also the leapinto electronic typesetting, remaining essentially  unchanged. It was popularised in the 1960s with therelease of Letraset sheets containing Lorem Ipsumpassages, and more recently with desktop publishingsoftware like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            tittle:"Titulo de prueba 4",
            date: moment().format("DD MMMM YYYY"),
            content: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printingand typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type andscrambled it to make a type specimen book. It hassurvived not only five centuries, but also the leapinto electronic typesetting, remaining essentially  unchanged. It was popularised in the 1960s with therelease of Letraset sheets containing Lorem Ipsumpassages, and more recently with desktop publishingsoftware like Aldus PageMaker including versions of Lorem Ipsum."
        }
    ]  

    console.log(post);
  });
