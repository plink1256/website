$(document).ready(function () {


    $("div.test").on("mouseover",function () {

        $("p").css("right", "0").css("bottom", "0");
        $("div.fond").css("right", "0").css("bottom", "0");

    }).on("mouseout", function () {

        $("p").css("right", "-5px").css("bottom", "-5px");
        $("div.fond").css("right", "-10px").css("bottom", "-10px");

    });








});