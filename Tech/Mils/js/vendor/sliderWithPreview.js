/*jslint nomen: true, regexp: true*/
/*global $, _, alert, console, put */
(function ($) {
    "use strict";
    $.fn.sliderWithPreview = function (centerPadding, responsiveArr) {
        var $context = $(this),
            slickNavigation = $context.find('.slick-navigation'),
            navTrack = $context.find('.navigation-track '),
            sliderPreview = $context.find('.slick-preview'),
            countSlides = slickNavigation.find('.slide').length,
            slickContainer = null,
            disableClickInThumbnail = false;

        if (sliderPreview.length > 1) {
            console.error("More then one slider will be initialized. Unexpected behaviour!!!!");
        }

        navTrack.find("img.lazy").lazyload({
            event : "slick-init",
            effect : "fadeIn"
        });

        function activateNavigation() {
            navTrack.find("img.lazy").trigger("slick-init");
        }

        function activateSlide(index) {
            var navSlideIndex = navTrack.find('.active').index(),
                nextSlide,
                prevSlide,
                slideItemWidth = 55,
                offset = 10;

            navTrack.find('.active').removeClass('active');
            navTrack.find('.slide').eq(index).addClass('active');

            if (index !== navSlideIndex) {

                if ((index !== 0) && (index !== (countSlides - 1))) {
                    nextSlide = slickNavigation.find('.active').next();
                    prevSlide = slickNavigation.find('.active').prev();

                    if ((nextSlide.offset().left + slideItemWidth) > (slickNavigation.offset().left + slickNavigation.width())) {
                        navTrack.animate({
                            'left': (navTrack.position().left - slideItemWidth) - offset
                        }, 300);
                    } else if (prevSlide.offset().left < (slickNavigation.offset().left - offset)) {
                        navTrack.animate({
                            'left': (navTrack.position().left + slideItemWidth) + offset
                        }, 300);
                    }
                }
            }
        }

        sliderPreview.on('changeSlide', function (event, currentSlide) {
            var currentIndex = currentSlide,
                currentNavigationSlideIndex = navTrack.find('.active').index();

            if (currentIndex !== currentNavigationSlideIndex) {
                activateSlide(currentIndex);
            } else {
                return false;
            }

            return event;
        });

        function showLoaderWhenImageNotLoaded(slideIndex) {
            var $slide = sliderPreview.find('.slick-slide').eq(slideIndex),
                $slideImage = $slide.find('img'),
                $preloaderNode;

            if (($slideImage.attr('src') === undefined) || (parseInt($slideImage.css('opacity'), 10) === 0)) {

                put.addNamespace("svg", "http://www.w3.org/2000/svg");
                put.addNamespace("xlink", "http://www.w3.org/1999/xlink");
                $preloaderNode = put('svg|svg svg|use[xlink|href="#SVG-Circus-49aa1a8c-f796-713c-d0c4-95d65a4b2d32"]<');

                sliderPreview.find('.slick-slide:eq(' + slideIndex + ') .description-wrapper')
                                                                            .append($preloaderNode);

                $slideImage.load(function () {
                    var timer = setInterval(function () {
                        if (parseInt($slideImage.css('opacity'), 10) === 1) {
                            sliderPreview.find('.slick-slide svg').remove();
                            clearInterval(timer);
                        }
                    }, 100);
                });
            } else if ($slideImage.attr('src') !== undefined) {

                if (sliderPreview.find('.slick-slide svg').is(':visible')) {
                    sliderPreview.find('.slick-slide svg').remove();
                }
            }
        }

        //################### portfolio slider ##############

        function initMainSlider() {
            return sliderPreview.slick({
                centerMode    : true,
                centerPadding : centerPadding || '22%',
                slidesToShow  : 1,
                slidesToScroll: 1,
                infinite      : false,
                speed         : 500,
                arrows        : true,
                prevArrow     : $context.find('.slider-arrow.slick-prev'),
                nextArrow     : $context.find('.slider-arrow.slick-next'),
                dots          : false,
                focusOnSelect : true,
                waitForAnimate: true,
                touchThreshold: 999999,
                draggable     : $.isTablet() || $.isMobile(),
                onInit: function () {
                    var currentSlick = this,
                        lazyImages,
                        lazyImagesCount,
                        loaderSlide;
                    activateNavigation();
                    activateSlide(this.currentSlide);

                    // Click in navigation slider item
                    $context.find('.navigation-track > .slide').click(function () {
                        if (!disableClickInThumbnail) {
                            sliderPreview.trigger('changeSlide', [$(this).index()]);
                            sliderPreview.slickGoTo($(this).index());
                        } else {
                            return false;
                        }

                        disableClickInThumbnail = true;
                    });

                    if ($context.find('[data-index="loader"]:not([data-watching])').length) {
                        lazyImages = $context.find('img');
                        lazyImagesCount = 0;
                        loaderSlide = $context.find('[data-index="loader"]:not([data-watching])');

                        loaderSlide.attr('data-watching', 1);
                        $context.addClass('loading');
                        lazyImages.each(function () {
                            if (!$(this).attr('data-lazy')) {
                                if ($(this).attr('src') &&
                                        $(this).attr('src').indexOf('data:image/svg') !== -1) {
                                    return;
                                }

                                $(this).attr('data-loaded', 0);
                                $(this).one('load', function () {
                                    lazyImagesCount -= 1;
                                    if (lazyImagesCount <= 0) {
                                        console.log("ALL IMAGES IN SLIDE ARE LOADED", currentSlick);
                                        if (loaderSlide.attr('index') === "0") {
                                            currentSlick.$slider.slickRemove(loaderSlide.attr('index'));
                                            currentSlick.$slider.slickRefresh();
                                            $context.removeClass('loading');
                                        }
                                    }
                                    $(this).attr('data-loaded', 1);
                                });
                                lazyImagesCount += 1;
                            }
                        });
                    }
                    $(window).trigger('sliderWithPreview-onInit');
                },
                onBeforeChange: function (slick, currentSlide, nextSlide) {
                    showLoaderWhenImageNotLoaded(nextSlide);
                    return [slick, currentSlide];
                },
                onAfterChange: function () {
                    sliderPreview.trigger('changeSlide', [this.currentSlide]);
                    $(window).trigger('sliderWithPreview-onAfterChange');
                    disableClickInThumbnail = false;
                },
                responsive: [
                    {
                        breakpoint: 1570,
                        settings: {
                            centerPadding: (responsiveArr && responsiveArr[0]) || '20%',
                            slidesToShow : 1
                        }
                    },

                    {
                        breakpoint: 1170,
                        settings: {
                            centerPadding: (responsiveArr && responsiveArr[1]) || '16%',
                            slidesToShow : 1
                        }
                    },
                    {
                        breakpoint: 780,
                        settings: {
                            centerPadding: (responsiveArr && responsiveArr[2]) || '12%',
                            slidesToShow : 1
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            centerPadding: (responsiveArr && responsiveArr[3]) || '5px',
                            slidesToShow : 1,
                            // Center mode should be disabled on mobile devices, when arrows appears.
                            centerMode: false
                        }
                    }
                ]
            });
        }

        // Shiwch slider Themes
        $context.find('.switch-themes').click(function () {
            $(this).parents('.slider-container').toggleClass('dark light');

            if ($(this).parents('.switch-media-slider').is(':visible')) {
                $(this).parents('.switch-media-slider').toggleClass('dark light');
            }
        });

        slickContainer = initMainSlider();

        return {
            destroy: function () {
                slickContainer.unslick();
            },

            getSlickContainer: function () {
                return slickContainer;
            },

            refresh: function () {
                sliderPreview.slickRefresh();
            }
        };
    };
}(jQuery));
