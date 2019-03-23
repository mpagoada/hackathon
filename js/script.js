/* global $ */

console.log('hi');

$('h1').click(function(){
    $('h1').css('color', 'green');
    $('h1').text('Website');
});




$("h1").hover (
    function () { 
        $(this).addClass("hover");
    }, function (){
        $ (this).removeClass ("hover");
    }
 );
 
