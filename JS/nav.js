$(document).ready(function () {

    menu = $('#menu')
    fondo = $('#fondo')

    // Abrir menu
    menu.click(function () {

        $('#menu1').toggle('slide', 'slow');
        $('#menu1').animate({
            width: '35%'
        }, function () {
            $('#menu1 ul li').animate({
                width: '80%'
            }, function () {
                $('#x-decline').css('display', 'inline-block')
                $('#accept').css('display', 'inline-block')
            })
        })



    });


    //Cerrar menu
    $('#x-cerrar').click(function () {
        $('#menu1 ul li').animate({
            width: '40%'
        })

        $('#x-decline').css('display', 'none')
        $('#accept').css('display', 'none')

        $('#menu1').animate({
            width: '0'
        }, function () {
            $('#menu1').css("display", 'none')
        })


    });

    /*$('html').mouseup(function () {
       $('#menu1').animate({
           width: '0'
       }, function () {
           $('#menu1').css("display", 'none')
       })
       $('#menu1 ul li').animate({
           width: '40%'
       })
    })*/

    //Cambiar fondo
    fondo.click(function () {

        if ($('#fondo i').hasClass('fas fa-moon')) {

            $('#fondo i').animate({
                marginTop: '20px',
                opacity: '0'
            }, function () {
                $('#fondo i').removeClass('fas fa-moon');
                $('#fondo i').addClass('fas fa-sun');

                $('#fondo i').animate({
                    marginTop: '-20px',
                    opacity: '1'
                })
            })

            /*$('#fondo i').fadeTo('slow', 0, function () {
                $('#fondo i').removeClass('fas fa-moon');
                $('#fondo i').addClass('fas fa-sun');
                $('#fondo i').fadeTo('slow', 1)
                
            })*/

        } else {

            $('#fondo i').animate({
                marginTop: '20px',
                opacity: '0'
            }, function () {
                $('#fondo i').removeClass('fas fa-sun');
                $('#fondo i').addClass('fas fa-moon');

                $('#fondo i').animate({
                    marginTop: '-20px',
                    opacity: '1'
                })
            })


            /* $('#fondo i').fadeTo('slow', 0, function () {
                 $('#fondo i').removeClass('fas fa-sun');
                 $('#fondo i').addClass('fas fa-moon');
                 $('#fondo i').fadeTo('slow', 1)
             })*/

        }


    });

    $('#boton-puntaje').hover(function () {

        $('#x-decline').css('color', 'black')
        $('#accept').css('color', 'black')
    }, function () {

        $('#x-decline').css('color', 'white')
        $('#accept').css('color', 'white')
    });

    $('#accept').hover(function () {
        $('#accept').css('color', 'green')
    }, function () {
        $('#accept').css('color', 'black')
    });

    $('#x-decline').hover(function () {
        $('#x-decline').css('color', 'red')
    }, function () {
        $('#x-decline').css('color', 'black')
    });

    $('#activarAdv').click(function () {
        localStorage.setItem('Aviso', 'True')
    })

    $('#activarAdv').hover(function () {
        // over
        $('#cancelarJuego').css('display', 'block')
        $('#cancelarJuego').css('opacity', '0.5')
    }, function () {
        $('#cancelarJuego').css('display', 'none')
        $('#cancelarJuego').css('opacity', '1')
    });

    $('#accept').click(function () {
        if (sessionStorage.getItem('PrimeraRonda', 'X') || sessionStorage.getItem('1Ronda', 'O')) {
            $('#cargarJuego').css('display', 'block')

            let confirm = $('#confirm')
            confirm.click(function () {
                $('#puntaje').css('display', 'table')
                localStorage.setItem('Puntaje', 'True')
                location.reload()
            });

            if (localStorage.getItem('Aviso', 'True')) {
                localStorage.setItem('Aviso', 'True')
            }


            let cancel = $('#cancel')
            cancel.click(function () {

                /*sessionStorage.clear()
                $('#puntaje').css('display', 'table')
                localStorage.setItem('Puntaje', 'True')*/


                if (localStorage.getItem('Aviso', 'True')) {
                    $('#cancelarJuego').css('display', 'block')
                } else {
                    $('#cancelarJuego').css('display', 'none')

                    sessionStorage.clear()
                    $('#puntaje').css('display', 'table')
                    localStorage.setItem('Puntaje', 'True')
                    location.reload()
                }


                // CheckBox del segundo pop-up

                var checkBox = $('#noMostrar')

                function myFunction() {

                    if (checkBox.attr('checked')) {
                        checkBox.removeAttr('checked');
                    } else {
                        checkBox.attr('checked', '');
                    }

                }

                checkBox.click(function () {
                    myFunction()
                })

                // Confirm del segundo pop-up
                $('#confirm1').click(function () {


                    sessionStorage.clear()
                    $('#puntaje').css('display', 'table')
                    localStorage.setItem('Puntaje', 'True')
                    location.reload()




                    if (checkBox.attr('checked')) {
                        localStorage.removeItem('Aviso', 'True')
                    } else {
                        $('#cancelarJuego').css('display', 'none')
                        $('#cargarJuego').css('display', 'none')

                    }


                })

                //Cancel del segundo pop-up
                $('#cancel1').click(function () {
                    $('#cancelarJuego').css('display', 'none')
                    $('#cargarJuego').css('display', 'block')
                })
            });


        } else {

            $('#puntaje').css('display', 'table')
            localStorage.setItem('Puntaje', 'True')
            location.reload()
        }


    })

    $('#x-decline').click(function () {
        $('#puntaje').css('display', 'none')
        localStorage.removeItem('Puntaje', 'True')
        location.reload()
    })



});