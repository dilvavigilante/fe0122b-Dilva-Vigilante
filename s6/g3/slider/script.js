

$(() => {
    let carosello = $('#img-l');

    //tasto sinistro 

    $('#l-btn').on('click', () => {
        let lProp = parseInt(carosello.css('left'))

        let newlProp = 0;
        if (lProp - 300 >= -1400) {
            newlProp = lProp - 300

        }
        carosello.animate({
            left: newlProp
        })

    });



    //ripeti su tasto destro 

    /*
        $('#r-btn').on('click', () => {
            let lProp = parseInt(carosello.css('left'))
    
            let newlProp = 0;
            if (lProp + 300 >= + 1400) {
    
                newlProp = lProp + 300
                console.log(lProp)
            }
            carosello.animate({
                left: newlProp
            })
    
        }); */




    // TASTO DESTRO     

    $('#r-btn').on('click', () => {
        let lProp = parseInt(carosello.css('left'))
        let newlProp = 0;
        if (lProp + 300 >= -1400) {
            newlProp = lProp + 300
        } if (lProp == 0) {
            newlProp = lProp - 1200
        }
        carosello.animate({
            left: newlProp
        });



    });
});
