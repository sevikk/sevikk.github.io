



$(document).ready(function(){
    var tabs = $('#tabs');
    $('.tabs-content > div', tabs).each(function(i){
        if ( i != 0 ) $(this).hide(0);
    });
    tabs.on('click', '.tabs a', function(e){
        e.preventDefault();
        var tabId = $(this).attr('href');
        $('.tabs a',tabs).removeClass();
        $(this).addClass('active');
        $('.tabs-content > div', tabs).hide(0);
        $(tabId).show();
    });
});
















$(function() {

    $('.form-group input').hover(showHelp, hideHelp);

function showHelp() {

    var $text = $(this).attr('title');
    var $elem = $(this).parent().parent();

    if(!$elem.find('.help').length) {
        $elem.append('<div class="col-sm-4 help"></div>');
        $elem.find('.help').text($text).animate({
            opacity: '1',
            },500);
    }
}

function hideHelp() {

    var $elem = $(this).parent().parent();

    $elem.find('.help').remove();
}

$('.btn-secondary').on('click', function(e) {
    e.preventDefault();
    if (!$('.help').length) {
    $('.form-group input').each(showHelp);
    }

});

});
