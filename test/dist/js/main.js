jQuery(document).ready(function ($) {


    $(document).on('click', '#like', function () {
        if ($(this).hasClass('fa-heart-o')) {
            $(this).removeClass('fa-heart-o').addClass('fa-heart')
        } else {
            $(this).addClass('fa-heart-o').removeClass('fa-heart')
        }
    })


});