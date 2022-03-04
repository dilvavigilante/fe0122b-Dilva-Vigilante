
$(() => {

    $("#inizia").on("click", function () {
        $("#box").animate({
            width: "500px"
        }, {

            duration: 4000,
            easing: "linear",
            step: function (x) {
                $("#testo").text(Math.round(x * 100 / 500) + "%");
            }
        });
    });
     
    $("#box").text("loading...").css({color:
    "white", padding: "5px"});

});
