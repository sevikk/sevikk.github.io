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
        // columns.height();
        columns.each(function () {
            currentHeight = $(this).height();
            if (currentHeight > tallestcolumn) {
                tallestcolumn = currentHeight;
            }
        });
        columns.height(tallestcolumn);
    }

    setEqualHeight(columns);
    setTimeout(setEqualHeight, columns, 100);


    // $(document).ready(function () {
    //     setEqualHeight(columns);
    //     orient();
    //     setTimeout(setEqualHeight, columns, 100);
    // });


});
jQuery(window).resize(function () {
    setEqualHeight(columns);
    setTimeout(setEqualHeight, columns, 100);
});