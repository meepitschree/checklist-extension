$(function() {
    $('#font').fontselect().change(function() {
        var font = $(this).val().replace(/\+/g,' ');
        font = font.split(':');
        $('body').css('font-family', font[0]);
        $('button').css('font-family', font[0]);
    });
});