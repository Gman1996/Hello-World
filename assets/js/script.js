// Animate Smooth Scroll

$('#explore').on('click', function() {
    const images = $('#start').position().top;

    $('html, body').animate(
        {
            scrollTop: images
        },
        900
    );
});$('#contact-info').on('click', function() {
    const images = $('#contacts').position().top;

    $('html, body').animate(
        {
            scrollTop: images
        },
        900
    );
});

$('#feature').on('click', function() {
    const images = $('#start').position().top;

    $('html, body').animate(
        {
            scrollTop: images
        },
        900
    );
});

$('#category').on('click', function() {
    const images = $('#categories').position().top;

    $('html, body').animate(
        {
            scrollTop: images
        },
        900
    );
});

$('#recommend').on('click', function() {
    const images = $('#recommended').position().top;

    $('html, body').animate(
        {
            scrollTop: images
        },
        900
    );
});

$(".burger-parent").click(function(){
    $('nav').toggle(1000, 'swing');
});


(function($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */

    $.fn.visible = function(partial) {

        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

})(jQuery);

var win = $(window);

var allMods = $(".slide");

allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
        el.addClass("already-visible");
    }
});

win.scroll(function(event) {

    allMods.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("come-in");
        }
    });

});
