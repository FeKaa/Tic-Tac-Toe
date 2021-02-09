$(document).ready(function () {
    
    if (localStorage.getItem('Puntaje'.valueOf(true))) {
        
        $('#puntaje').css('display','table')
    
        var move = 1;
        var play = true;

        tabla = $('#table1 tr td')

        //PUNTAJE X
        var x = 4
        if (sessionStorage.getItem('PrimeraRonda', 'X')) {
            $('#x1').append('X')
            x--
        }
        if (sessionStorage.getItem('SegundaRonda', 'X')) {
            $('#x2').append('X')
            x--
        }
        if (sessionStorage.getItem('TerceraRonda', 'X')) {
            $('#x3').append('X')
            $('body').append('<div class="winner"<span>Winner</span> X</div>')
            $('.winner').css('background', '#61892f')
            setTimeout(() => {
                sessionStorage.clear()
                location.reload()
            }, 1200);
        }

        //PUNTAJE O
        var o = 4
        if (sessionStorage.getItem('1Ronda', 'O')) {
            $('#o1').append('O')
            o--
        }
        if (sessionStorage.getItem('2Ronda', 'O')) {
            $('#o2').append('O')
            o--
        }
        if (sessionStorage.getItem('3Ronda', 'O')) {

            $('#o3').append('O')
            $('body').append('<div class="winner"<span>Winner</span> O</div>')
            $('.winner').css('background', '#e85a4f')
            setTimeout(() => {
                sessionStorage.clear()
                location.reload()
            }, 1200);

        }

        //JUEGO
        tabla.click(function () {
            that = $(this)

            if (that.html() == "" && play) {
                if ((move % 2) == 1) {
                    that.append('X');
                    that.css('color', '#61892f')
                } else {
                    that.append('O')
                    that.css('color', '#e85a4f')
                }
                move++;
                if (findWinner() != -1 && findWinner() != "") {
                    if (findWinner() == 'X') {

                        $('body').append('<button onclick="location.reload()"id="reload" ><i class="fas fa-redo-alt"></i></button>')
                        $('button').css('color', '#61892f')
                        $('nav span').css('text-decoration-color', '#61892f')


                        //RELOAD


                        $('#reload').click(function () {

                            x--
                            sessionStorage.setItem('RondaX', x)

                            if (x == 3 && x > 1) {
                                sessionStorage.setItem('PrimeraRonda', 'X')

                            } else if (x == 2 && x > 1) {
                                sessionStorage.setItem('SegundaRonda', 'X')
                            } else if (x == 1) {
                                sessionStorage.setItem('TerceraRonda', 'X')
                            }

                        });



                    } else {
                        $('body').append('<button onclick="location.reload()" id="reload"><i class="fas fa-redo-alt"></i></button>')
                        $('button').css('color', '#e85a4f')
                        $('nav span').css('text-decoration-color', '#e85a4f')

                        console.log('Entro en O')
                        $('#reload').click(function () {

                            o--
                            sessionStorage.setItem('RondaO', o)

                            if (o == 3 && o > 1) {
                                sessionStorage.setItem('1Ronda', 'O')

                            } else if (o == 2 && o > 1) {
                                sessionStorage.setItem('2Ronda', 'O')
                            } else if (o == 1) {
                                sessionStorage.setItem('3Ronda', 'O')
                            }

                        });

                    }
                    play = false;
                } else if (sp1 != "" && sp2 != "" && sp3 != "" && sp4 != "" && sp5 != "" && sp6 != "" && sp7 != "" && sp8 != "" && sp9 != "") {
                    $('body').append('<div class="winner"<span>Tie</span></div>')
                    $('body').append('<button onclick="location.reload()">Play Again</button>')
                    $('.winner').css('background', 'rgb(10, 160, 219)')
                    $('button').css('color', 'rgb(10, 160, 219)')
                    $('nav span').css('text-decoration-color', 'rgb(10, 160, 219)')


                }


            }



        });

        function findWinner() {
            sp1 = $('#table1 tr:nth-child(1) td:nth-child(1)').text();
            sp2 = $('#table1 tr:nth-child(1) td:nth-child(2)').text();
            sp3 = $('#table1 tr:nth-child(1) td:nth-child(3)').text();
            sp4 = $('#table1 tr:nth-child(2) td:nth-child(1)').text();
            sp5 = $('#table1 tr:nth-child(2) td:nth-child(2)').text();
            sp6 = $('#table1 tr:nth-child(2) td:nth-child(3)').text();
            sp7 = $('#table1 tr:nth-child(3) td:nth-child(1)').text();
            sp8 = $('#table1 tr:nth-child(3) td:nth-child(2)').text();
            sp9 = $('#table1 tr:nth-child(3) td:nth-child(3)').text();


            // Check Rows

            if ((sp1 == sp2) && (sp2 == sp3) && sp1 != "") {
                $('#tr1').append('<div id="horizontalLine"></div>')
                return sp3
            } else if ((sp4 == sp5) && (sp5 == sp6) && sp4 != "") {
                $('#tr2').append('<div id="horizontalLine"></div>')
                return sp6
            } else if ((sp7 == sp8) && (sp8 == sp9) && sp7 != "") {
                $('#tr3').append('<div id="horizontalLine"></div>')
                return sp9
            }

            //Check Columns
            else if ((sp1 == sp4) && (sp4 == sp7) && sp1 != "") {
                $('#tr1').append('<div id="verticalLine1"></div>')
                return sp7
            } else if ((sp2 == sp5) && (sp5 == sp8) && sp2 != "") {
                $('#tr1').append('<div id="verticalLine2"></div>')
                return sp8
            } else if ((sp3 == sp6) && (sp6 == sp9) && sp3 != "") {
                $('#tr1').append('<div id="verticalLine3"></div>')
                return sp9
            }

            // Check Diagonals
            else if ((sp1 == sp5) && (sp5 == sp9) && sp1 != "") {
                $('#tr1').append('<div id="diagonalLine1"></div>')
                return sp9
            } else if ((sp3 == sp5) && (sp5 == sp7) && sp3 != "") {
                $('#tr1').append('<div id="diagonalLine2"></div>')
                return sp7
            }

            //No Winner
            return -1;

        }
    } else {
        console.log('Tabla Inactiva')
        var move = 1;
        var play = true;

        tabla = $('#table1 tr td')

        //JUEGO
        tabla.click(function () {
            that = $(this)

            if (that.html() == "" && play) {
                if ((move % 2) == 1) {
                    that.append('X');
                    that.css('color', '#61892f')
                } else {
                    that.append('O')
                    that.css('color', '#e85a4f')
                }
                move++;

                if (findWinner() != -1 && findWinner() != "") {
                    if (findWinner() == 'X') {
                        $('body').append('<div class="winner"<span>Winner</span> X</div>')
                        $('body').append('<button onclick="location.reload()"id="reload" ><i class="fas fa-redo-alt"></i></button>')
                        $('button').css('color', '#61892f')
                        $('nav span').css('text-decoration-color', '#61892f')
                        $('.winner').css('background', '#61892f')

                    } else {
                        $('body').append('<div class="winner"<span>Winner</span> O</div>')
                        $('body').append('<button onclick="location.reload()" id="reload"><i class="fas fa-redo-alt"></i></button>')
                        $('button').css('color', '#e85a4f')
                        $('nav span').css('text-decoration-color', '#e85a4f')
                        $('.winner').css('background', '#e85a4f')

                    }

                    play = false;
                } else if (sp1 != "" && sp2 != "" && sp3 != "" && sp4 != "" && sp5 != "" && sp6 != "" && sp7 != "" && sp8 != "" && sp9 != "") {

                    $('body').append('<div class="winner"<span>Tie</span></div>')
                    $('body').append('<button onclick="location.reload()">Play Again</button>')
                    $('.winner').css('background', 'rgb(10, 160, 219)')
                    $('button').css('color', 'rgb(10, 160, 219)')
                    $('nav span').css('text-decoration-color', 'rgb(10, 160, 219)')

                }


            }



        });

        function findWinner() {
            sp1 = $('#table1 tr:nth-child(1) td:nth-child(1)').text();
            sp2 = $('#table1 tr:nth-child(1) td:nth-child(2)').text();
            sp3 = $('#table1 tr:nth-child(1) td:nth-child(3)').text();
            sp4 = $('#table1 tr:nth-child(2) td:nth-child(1)').text();
            sp5 = $('#table1 tr:nth-child(2) td:nth-child(2)').text();
            sp6 = $('#table1 tr:nth-child(2) td:nth-child(3)').text();
            sp7 = $('#table1 tr:nth-child(3) td:nth-child(1)').text();
            sp8 = $('#table1 tr:nth-child(3) td:nth-child(2)').text();
            sp9 = $('#table1 tr:nth-child(3) td:nth-child(3)').text();


            // Check Rows

            if ((sp1 == sp2) && (sp2 == sp3) && sp1 != "") {
                $('#tr1').append('<div id="horizontalLine"></div>')
                return sp3
            } else if ((sp4 == sp5) && (sp5 == sp6) && sp4 != "") {
                $('#tr2').append('<div id="horizontalLine"></div>')
                return sp6
            } else if ((sp7 == sp8) && (sp8 == sp9) && sp7 != "") {
                $('#tr3').append('<div id="horizontalLine"></div>')
                return sp9
            }

            //Check Columns
            else if ((sp1 == sp4) && (sp4 == sp7) && sp1 != "") {
                $('#tr1').append('<div id="verticalLine1"></div>')
                return sp7
            } else if ((sp2 == sp5) && (sp5 == sp8) && sp2 != "") {
                $('#tr1').append('<div id="verticalLine2"></div>')
                return sp8
            } else if ((sp3 == sp6) && (sp6 == sp9) && sp3 != "") {
                $('#tr1').append('<div id="verticalLine3"></div>')
                return sp9
            }

            // Check Diagonals
            else if ((sp1 == sp5) && (sp5 == sp9) && sp1 != "") {
                $('#tr1').append('<div id="diagonalLine1"></div>')
                return sp9
            } else if ((sp3 == sp5) && (sp5 == sp7) && sp3 != "") {
                $('#tr1').append('<div id="diagonalLine2"></div>')
                return sp7
            }

            //No Winner
            return -1;

        }

    }

});