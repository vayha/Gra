$(function () {

            'use strict'

            $("button").click(function () {
                $(this).fadeOut();

                var textpar = $('#napis').text();


                $('#kwadrat').on({
                    'click': function () {
                        $('.napis').text(textpar + ' WESOŁYCH ŚWIĄT ').fadeOut(15000);

                    },
                    'mouseover': function () {
                        var rand = Math.floor((Math.random() * 100));
                        var rand2 = Math.floor((Math.random() * 100));
                        $(this).hide(200).show(200).animate({
                            'left': rand + '%',
                            'top': rand2 + '%',
                            'background-color': 'green',
                            duration: 30});
                    },

                });
            });
});

        




//  .hide(5000).show(3000)   
    
//    $('p').each(function(index) {
//    var size = 10;
//    $(this).css('font-size', size*(index+1) + 'px');
//    
//    // dla każdego kolejnego p powieksz size o 10... wow
//} );
//    


//$("#kwadrat").css({"background-color": "red", "font-size": "200%"});

    /*
    var textpar = $('#napis').text();
    console.log(textpar);
    
    $('#napis').text(textpar + ' dodany');

*/



//
//var rand = Math.floor((Math.random() * 100));
//    
//$('h3').animate({'left' : rand + '%', 'top' : rand + '%'}, 2000, parBack);
//
//
//    top: 46%;
//    right: 46%;