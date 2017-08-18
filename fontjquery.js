var currFont = window.getComputedStyle(document.body, null).getPropertyValue('font-family');

$(function() {
    $('#font').fontselect().change(function() {
        var font = $(this).val().replace(/\+/g,' ');
        font = font.split(':');
        $('body').css('font-family', font[0]);
        $('button').css('font-family', font[0]);
        chrome.storage.sync.set({currFont: font[0]}, function() {
          console.log("font saved" + font[0]);
        });
    });
});