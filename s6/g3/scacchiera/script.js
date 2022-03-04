//creo il contenitore della scacchiera 

$('<div></div>')
    .attr('id', 'scacchiera')
    .css({
        border: '1px solid #000',
        height: '800px',
        width: '800px',
        position: 'relative'
    })

    .prependTo('body')

//creo tutte le caselle

for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {

        let modulo = (x + y) % 2

        let bg = modulo !== 0 ? '#000' : '#fff'

        let w = 100;


        $('<div></div>')
            .css({
                height: w + 'px',
                width: w + 'px',
                top: x * 100 + 'px',
                left: y * 100 + 'px',
                backgroundColor: bg,
                position: 'absolute',
                border: '1px solid #000'
            })

            .appendTo('#scacchiera')


    }


}