/*jslint nomen: true, regexp: true*/
/*global $, _, sliderDestroy, console, alert, google, boolean, History, SF,
         setBackgroundImage, put, loader, $sliderPages, navigation, slideTitles, getClientHeight, getDocumentHeight,
         initHistory, showBlogItem, initBlogSlick, ga, yaCounter28119891*/

function fixateConversion(elem) {
    "use strict";
    if (ga && yaCounter28119891) {
        var event = $(elem).find('[name="event"]').attr('value');
        ga('send', 'event', event);
        yaCounter28119891.reachGoal(event);
    }
}

function onInvalidValidation(elem) {
    "use strict";
    setTimeout(function () {
        $(elem).find('.has-error').removeClass('has-error');
        $(elem).find('.error').removeClass('error');
    }, 3000);
}

function tabInit() {
    'use strict';

    function reInitTabSlider($context, isFirst) {
        console.log('reInitTabSlider >>', $context);
        var slickPreview = $context.find('.slick-preview');

        $(window).one('shown.bs.tab', function () {
            console.log("SHOWN BS TAB >>>", arguments);
            slickPreview.slickRefresh();
        });

        if (isFirst) {
            $(window).one('sliderPages-onAfterChange', function () {
                console.log("PREVIEW >>>>>", slickPreview);
                slickPreview.slickRefresh();
            });
        }

        if ($context.find('.slick-preview').getSlick() === undefined) {
            if ($context.attr('id') === 'tab-floristics') {
                $context.sliderWithPreview('35%', ['33%', '28%', '28%']);
            } else if ($context.attr('id') === 'tab-ideas') {
                $context.sliderWithPreview('35%', ['33%', '28%', '28%']);
            } else if ($context.attr('id') === 'tab-sketches') {
                $context.sliderWithPreview('34%', ['33%', '28%', '28%']);
            } else if ($context.attr('id') === 'tab-workshop') {
                $context.sliderWithPreview('34%', ['33%', '28%', '28%']);
            } else {
                $context.sliderWithPreview();
            }
        }
    }

    reInitTabSlider($('.decor-tab-content .active'), true);

    if (tabInit.prototype.tabBinded !== true) {
        $(window).on('sliderPages-onBeforeChange', function () {
            tabInit.prototype.screenPosition = 0;
        });

        $('.decor-nav-tabs .nav-tabs [data-toggle="tab"]').on('click', function () {
            tabInit.prototype.screenPosition = $('.aside-decor').parent().scrollTop();
        }).on('show.bs.tab', function () {
            $($(this).attr('href')).each(function () {
                reInitTabSlider($(this));
            });
            $(window).on('sliderWithPreview-onInit', function () {
                if (tabInit.prototype.screenPosition !== undefined) {
                    $('.aside-decor').parent().scrollTop(tabInit.prototype.screenPosition);
                }
            });
        });

        tabInit.prototype.tabBinded = true;
    }
}

/**
 * [Slider to change the slides that are pages]
 */
function initSwitcherPagesSlider() {
    "use strict";
    var slider = $('.slider-pages');
    slider.slick({
        accessibility : false,
        arrows        : false,
        infinite      : false,
        dots          : false,
        swipe         : false,
        draggable     : false,
        swipeToSlide  : true,
        slidesToShow  : 1,
        slidesToScroll: 1,
        speed         : 600,
        adaptiveHeight: true,
        onBeforeChange: function () {
            try {
                $(window).trigger('sliderPages-onBeforeChange');
                navigation.hide();
            } catch (e) {
                console.error(this.declaredClass, arguments, e);
                throw e;
            }
        },

        onAfterChange : function () {
            $(window).trigger('sliderPages-onAfterChange');
            if (this.currentSlide !== 0) {
                navigation.hide();
            } else if (this.currentSlide === 0) {
                $('.slider-pages').slickUnfilter();
                $('.portfolio-container .slick-initialized').slickRefresh();
                $('.news-container .slick-initialized').slickRefresh();
                navigation.detect(true);
            }
            $(window).trigger('sliderPages-onAfterChange-Done');
        }
    });
}

$(window).load(function () {
    "use strict";
    $('.loader').loader.stop();


    // IMPROVE THIS
    $('.abroad-description .social-likes').on('ready.social-likes', function () {
        $(this).parent().find('.social-likes__icon.social-likes__icon_single')
                                       .attr('data-like-text', $(this).data('like-text'));
    });

    if ($('.social-likes').socialLikes) {
        $('.social-likes').socialLikes({
            zeroes: true
        });

        $('.social-likes').on('popup_closed.social-likes', function () {
            $(this).socialLikes({
                forceUpdate: true
            });
        });
    }

    $('#blog, #portfolio-container, ' +
        '#main-head,  #main-head div, #acquaintance, #about, #services, ' +
          '.have-everything, .subscribe, .marketing-banner, .school-administrators').
                removeClass('do-not-load-bg-images');

    $('img.lazy-main').trigger('load-init');

    if (window.currentScrollPosition) {
        setTimeout(function () {
            navigation.scrollToBlock(window.currentScrollPosition);
        }, 1);
    }

    if (!$('.service-item .mocking-svg').hasClass('hidden')) {
        $('.service-item .org-img').one('load', function () {
            $(this).removeClass('hidden');
            $('.service-item .mocking-svg').addClass('hidden');
        });
    }

    $('.phone, .email-adress')
        .click(function () {
            if (ga && yaCounter28119891) {
                ga('send', 'event', 'contacts-click');
                yaCounter28119891.reachGoal('contacts-click');
            }
        });

    $('.open-contacts').click(function () {
        if (ga && yaCounter28119891) {
            ga('send', 'event', 'button');
            yaCounter28119891.reachGoal('button');
        }
    });
});


$(document).ready(function () {
    'use strict';

    $('.logo-on-main-back').click(function () {
        History.pushState(null, null, "/");
    });

    $('.loader').loader();

    $('input[type="tel"]').inputmask({
        mask: '+38 (999) 999-99-99',
        placeholder: ' '
    });

    $('input[type="email"]').inputmask({
        alias: 'email',
        placeholder: ' '
    });

    $.validate({
        form: '#form-contacts',
        onSuccess: fixateConversion,
        scrollToTopOnError: false,
        validateOnBlur: false,
        onError: onInvalidValidation
    });

    $.validate({
        form: '#registration-form',
        onSuccess: fixateConversion,
        scrollToTopOnError: false,
        validateOnBlur: false,
        onError: onInvalidValidation
    });

    $('.organization-w').click(function () {
        History.pushState(null, slideTitles['/organization'], '/organization');
    });

    $('.decor-w').click(function () {
        History.pushState(null, slideTitles['/decor'], '/decor');
    });

    $('.abroad-w').click(function () {
        History.pushState(null, slideTitles['/abroad'], '/abroad');
    });

    $('.backTo').click(function () {
        History.pushState(null, slideTitles['/services'], '/services');
    });

    $('svg.close-abroad').click(function () {
        History.pushState(null, slideTitles['/abroad'], '/abroad');
    });

    $('.news.carousel a.ajax-blog-link').each(function () {
        var $item = $(this),
            load = function () {
                if ($item.closest('.slick-slide').hasClass('slick-active')) {
                    showBlogItem($item);
                }
            };
        $(this).parent().find('.title-blog-link').click(load);
        $(this).click(load);
    });

    window.stateChangeIsLocal = false;

    initSwitcherPagesSlider();

    // Establish Variables
    var History = window.History, // Note: We are using a capital H instead of a lower h
        lazyLayout = _.debounce(SF(), 300);

    // Log Initial State
    History.log('initial:', null, null, window.location.origin);

    $("img.lazy-services, img.lazy-main").lazyload({
        event: "load-init",
        effect: "fadeIn"
    });

    initHistory();

    $.initNavigationControl();

    if (location && location.hash) {
        if (location.hash.indexOf("success") !== -1) {
            $.fn.showPopupSuccess();
            location.hash = '';
        } else if (location.hash.indexOf("error") !== -1) {
            $.fn.showPopupError();
        }
    }

    //(function checkDayOfWeek() {
    //
    //    var date = new Date(),
    //        day = date.getDay();
    //
    //    if ((day === 6) || (day === 0) || (day === 5)) {
    //        $('a.phone').text('(066) 882-73-75')
    //                    .attr('href', 'tel: (066) 882-73-75');
    //    } else {
    //        $('a.phone').text('(044) 568-50-27')
    //                    .attr('href', 'tel: (044) 568-50-27');
    //    }
    //    setTimeout(checkDayOfWeek, ((1000 * 60) * 60));
    //}());

    // Back to site in click to button in popup
    $('.back-to-site').click(function () {
        $.magnificPopup.close();
    });

    $(window).resize(lazyLayout);


    if (navigator.appVersion.indexOf("Win") !== -1) {
        if (navigator.userAgent.indexOf("Firefox") > 0) {
            $('#success p').css({'font-weight': '300'});
        }
    }

    // SET BACKGROUND IMAGES IN SLIDERS
    setBackgroundImage();

    initBlogSlick();
});
