jQuery(document).ready(function ($) {

    $(document).on('click', '.like', function () {
        if ($(this).hasClass('fa-heart-o')) {
            $(this).removeClass('fa-heart-o').addClass('fa-heart')
        } else {
            $(this).addClass('fa-heart-o').removeClass('fa-heart')
        }
    })

    var columns = $('.about_box');

    function setEqualHeight(columns) {
        var tallestcolumn = 0;
        columns.each(function () {
            currentHeight = $(this).height();
            if (currentHeight > tallestcolumn) {
                tallestcolumn = currentHeight;
            }
        });
        columns.height(tallestcolumn);
    }

    setEqualHeight(columns);

    $(window).resize(function () {
        setEqualHeight(columns);
    });


});