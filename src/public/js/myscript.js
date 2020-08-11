
$(document).foundation()
/*--------------------- index----------------------------  */
/*----------------------------- sliders------------------------------- */
$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper(document.getElementById('sw-especies'), {
        // Optional parameters
        speed: 100,
        slidesPerView: 3,
        spaceBetween: 200,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        /* pagination: {
             el: '.swiper-pagination',
             clickable: true,
         },
         navigation: {
             nextEl: '.swiper-button-next',
             prevEl: '.swiper-button-prev',
         }, */
    })

});
$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper2 = new Swiper(document.getElementById('sw-desc-services'), {
        // Optional parameters
        speed: 100,
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        /* pagination: {
             el: '.swiper-pagination',
             clickable: true,
         },
         navigation: {
             nextEl: '.swiper-button-next',
             prevEl: '.swiper-button-prev',
         }, */
    })

});
$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper3 = new Swiper(document.getElementById('sw-img-services'), {
        // Optional parameters
        speed: 100,
        slidesPerView: 1,
        //spaceBetween: 200,
        spaceBetween: 30,
        loop: true,
           autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      },
        /* pagination: {
             el: '.swiper-pagination',
             clickable: true,
         },
         navigation: {
             nextEl: '.swiper-button-next',
             prevEl: '.swiper-button-prev',
         }, */
    })

});
/*----------------------------- sliders------------------------------- */
/* modal--------------------------------- */
$('#botonver').click(function () {
    especie = document.getElementById('especie').innerText;
    console.log('soy el item numero x');
    console.log(especie);
});

$('#botonver').click(function (e) {
    const clickeado = document.getElementById('especie')
    console.log(e.target.parentElement);
    const data = e.target.parentElement
    console.log(data.children[0]);
})

$('#Modificpet').click(function (e) {
    click = e.target.id;
    console.log(click);
    const form = document.getElementById('formularioModificarp');
    form.setAttribute('action', "/user/modific_pet/" + e.target.id + "?_method=PUT")
    ListadodeAnimal();
})
$('#Newcitepet').click(function (e) {
    click = e.target.id;
    console.log(click);
    href = "/user/modific_pet/" + e.target.id + "?_method=PUT"
    const form = document.getElementById('formularionuevacita');
    form.setAttribute('action', "/user/new_cite/" + e.target.id + "")
    ListadodeServis();
})

/* modal--------------------------------- */
ListadodeServis = async () => {
    console.log('ejecuta listado de servicios');

    a = await fetch('http://localhost:4000/listadeservicios')
    b = await a.json();
    console.log(b);
    const select = document.getElementById('selectdeservicios');
    select.innerHTML = `<option value=""></option>`
    await b.forEach(element => {
        select.innerHTML += `<option value="${element._id}">${element.Nombre}</option>`
    });
}
ListadodeAnimal = async () => {
    console.log('ejecuta listado de animales');

    lisa = await fetch('http://localhost:4000/listadeanimales')
    lisb = await lisa.json();
    console.log(lisb);
    const select = document.getElementById('selectModificarp');
    select.innerHTML = `<option value=""></option>`
    lisb.forEach(element => {
        select.innerHTML += `<option value="${element._id}">${element.tipo}</option>`
    });
}



/*--------------------- index----------------------------  */




console.log('hola');


