document.addEventListener('DOMContentLoaded', function (e) {

    console.log('lol');

    $("div.go-up").hide();
    window.addEventListener('scroll', function () {
        if(document.querySelector('html').scrollTop > 180 && window.innerWidth <= 768){

            $("div.go-up").fadeIn(200);


        }
        else{
            $("div.go-up").fadeOut(200);
        }
    });



    document.querySelector('div.go-up').addEventListener('click', function (e) {

        window.scroll({
            top:0,
            behavior: "smooth"
        })

    })

});