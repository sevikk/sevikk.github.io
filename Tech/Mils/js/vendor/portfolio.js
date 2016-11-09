/*jslint nomen: true, regexp: true*/
/*global $, _, sliderDestroy, console, History, put */
function portfolioSliderInit() {
    "use strict";

    portfolioSliderInit.prototype.sliderSwitching = false;

    $('.portfolio-widget').slick({
        centerMode    : false,
        slidesToShow  : 1,
        arrows        : false,
        dots          : true,
        speed         : 500,
        infinite      : false,
        touchThreshold: 999999,
        focusOnSelect : true,
        draggable     : false,
        onBeforeChange: function () {
            portfolioSliderInit.prototype.sliderSwitching = true;
        },
        onAfterChange: function () {
            portfolioSliderInit.prototype.sliderSwitching = false;
        },
        responsive    : [
            {
                breakpoint: 980,
                settings  : {
                    centerMode    : false,
                    slidesToShow  : 1,
                    arrows        : false,
                    dots          : true,
                    speed         : 500,
                    touchThreshold: 999999,
                    infinite      : false
                }
            },
            {
                breakpoint: 767,
                settings  : {
                    arrows        : true,
                    dots          : false,
                    centerMode    : false,
                    slidesToShow  : 1,
                    touchThreshold: 999999,
                    nextArrow     : "<div class='slick-next'><svg><use xlink:href='#svg-icon-next'></use></svg></div>",
                    prevArrow     : "<div class='slick-prev'><svg><use xlink:href='#svg-icon-prev'></use></svg></div>"
                }
            }
        ]
    });
}

// Show backgrounds that are stored in the data attributes
function setBackgroundImage() {
    'use strict';
    $('[data-image]').each(function () {
        var $selector = $(this).find('.zoom-image');
        if (!$selector.length) {
            $selector = $(this);
        }
        $selector.css({
            'background': 'url(' + $(this).attr('data-image') + ')'
        });
    });
}

function SF() {
    "use strict";

    var getCurrentState = function () {

        if ($.isPc()) {
            return 'pc';
        }

        if ($.isTablet()) {
            return 'tablet';
        }

        if ($.isMobile()) {
            return 'mobile';
        }
    }, tabInit = function () {
        $('.portfolio-widget').find('.nav-tabs a').unbind('click');
        $('.portfolio-widget').find('.nav-tabs a').click(function (e) {
            e.preventDefault();
            $(this).tab('show');
        });
    }, switchers = {
        htmlBuilder : {
            getTitle: function (titlesArr) {
                return put('div.title div h4 $ < + div h4 $ <<', titlesArr[0], titlesArr[1]);
            },
            getBigImage: function (counter, reviewContent, browseContent, bigImageUrl, getTitle) {
                var bigImageNode = put('div.description-container'),
                    bigImageTabs,
                    bigImageTabContent;
                bigImageTabs = put('ul.nav.nav-tabs');

                put.addNamespace("svg", "http://www.w3.org/2000/svg");
                put.addNamespace("xlink", "http://www.w3.org/1999/xlink");


                put(bigImageTabs, 'li.active svg|svg svg|use[xlink|href="#svg-icon-crown"] << a[href=$] $ <',
                    '#review-' + counter,
                    'Отзыв пары');

                put(bigImageTabs, 'li svg|svg svg|use[xlink|href="#svg-icon-crown"] << a[href=$] $ <',
                    '#browse-' + counter,
                    'Изюминка свадьбы');

                bigImageTabContent = put('div.tab-content div.tab-pane.fade.in.active[id=$] svg|svg svg|use[xlink|href="#svg-icon-bracket"] << $ < div.tab-pane.fade[id=$] svg|svg svg|use[xlink|href="#svg-icon-bracket"] << $ <',
                    'review-' + counter,
                    reviewContent,
                    'browse-' + counter,
                    browseContent);

                put(bigImageNode, getTitle);
                put(bigImageNode, bigImageTabs);
                put(bigImageNode, bigImageTabContent);

                return put('div.big-image.col-md-7.col-sm-12', put(put(put('div[data-image=$]', bigImageUrl), bigImageNode),
                                                                   put(bigImageNode, 'div.blackout + div.zoom-image')));

            },
            getSmallImage: function (imageUrl, getTitle) {
                var div = put('div[data-image="$"]', imageUrl);
                put(div, getTitle);
                put(div, 'div.zoom-image');
                return div;
            },
            getMobileImage: function (imageUrl, getTitle) {
                return put(put('div[data-image=$]', imageUrl), put(put('div.description-container', getTitle)));
            },
            addLinkToImage: function (imageNode, iter) {
                var href = window.portfolioArr[iter].href,
                    title = window.portfolioArr[iter].title,
                    $selector = ($(imageNode).find('div[data-image]').length &&
                        $(imageNode).find('div[data-image]')) || $(imageNode);

                function openPortfolio() {
                    if ($selector.closest('.slick-slide').hasClass('slick-active')) {
                        History.pushState(null, title, href);
                    }
                }

                $selector.click(function (evt) {
                    if ($(this).closest('.slick-slide').hasClass('slick-active') &&
                            portfolioSliderInit.prototype.sliderSwitching === false) {
                        evt.stopPropagation();
                        openPortfolio();
                    }
                });

                $selector.find('div.title').click(function (evt) {
                    if ($(this).closest('.slick-slide').hasClass('slick-active') &&
                            portfolioSliderInit.prototype.sliderSwitching === false) {
                        evt.stopPropagation();
                        openPortfolio();
                    }
                });

                $selector.find('div.description-container').click(function (evt) {
                    evt.stopPropagation();
                });
                return imageNode;
            }
        },

        pc: function () {
            $('.portfolio-widget').unslick();
            $('.portfolio-widget > div').remove();
            var ObjLength = Object.keys(window.portfolioContent).length,
                i,
                portfolioItem,
                preview,
                bigImage,
                smallImage,
                link = function (node, iter) {
                    return switchers.htmlBuilder.addLinkToImage(node, iter);
                };
            for (i = 0; i < window.portfolioArr.length; i += 3) {
                if (i < ObjLength - (ObjLength % 3)) {
                    portfolioItem = put('div');
                    preview = put('div.preview.col-md-5.col-sm-12');
                    bigImage = switchers.htmlBuilder
                        .getBigImage(i,
                            window.portfolioArr[i].review,
                            window.portfolioArr[i].browse,
                            window.portfolioArr[i].bigImage,
                            switchers.htmlBuilder
                                .getTitle(window.portfolioArr[i].title));

                    put(portfolioItem, link(bigImage, i));

                    smallImage = switchers.htmlBuilder
                                          .getSmallImage(window.portfolioArr[(i + 1)].smallImage,
                                                         switchers.htmlBuilder
                                                                  .getTitle(window.portfolioArr[(i + 1)].title));
                    put(preview, link(smallImage, i + 1));

                    smallImage = switchers.htmlBuilder
                                          .getSmallImage(window.portfolioArr[(i + 2)].smallImage,
                                                         switchers.htmlBuilder
                                                                  .getTitle(window.portfolioArr[(i + 2)].title));
                    put(preview, link(smallImage, i + 2));



                    $('[data-content=portfolio]').append(put(portfolioItem, preview));
                }
            }

            setBackgroundImage();
            portfolioSliderInit();
            tabInit();
        },
        tablet: function () {
            $('.portfolio-widget').unslick();
            $('.portfolio-widget > div').remove();
            var ObjLength = Object.keys(window.portfolioContent).length,
                i,
                portfolioItem,
                preview,
                link = function (node, iter) {
                    return switchers.htmlBuilder.addLinkToImage(node, iter);
                };

            for (i = 0; i < window.portfolioArr.length; i += 3) {
                if (window.portfolioArr.hasOwnProperty(i)) {
                    if (i < ObjLength - (ObjLength % 3)) {
                        portfolioItem = put('div');
                        preview = put('div.preview.col-md-5.col-sm-12');
                        put(portfolioItem, link(switchers.htmlBuilder
                            .getBigImage(i, window.portfolioArr[i].review,
                                            window.portfolioArr[i].browse,
                                            window.portfolioArr[i].bigImage,
                                            switchers.htmlBuilder
                                                     .getTitle(window.portfolioArr[i]
                                                     .title)), i));

                        put(preview, link(switchers.htmlBuilder
                                                   .getSmallImage(window.portfolioArr[(i + 1)].smallImage,
                                          switchers.htmlBuilder
                                                   .getTitle(window.portfolioArr[(i + 1)]
                                                   .title)),
                                          i + 1));
                        put(preview,
                            link(switchers.htmlBuilder
                                          .getSmallImage(window.portfolioArr[(i + 2)].smallImage,
                                                         switchers.htmlBuilder
                                                                  .getTitle(window.portfolioArr[(i + 2)].title)),
                                 i + 2));

                        $('[data-content=portfolio]').append(portfolioItem);
                        $('[data-content=portfolio]').append(put(put('div', preview)));
                    }
                }
            }

            setBackgroundImage();
            portfolioSliderInit();
            tabInit();
        },
        mobile: function () {
            $('.portfolio-widget').unslick();
            $('.portfolio-widget > div').remove();
            var ObjLength = Object.keys(window.portfolioContent).length,
                i,
                link = function (node, iter) {
                    return switchers.htmlBuilder.addLinkToImage(node, iter);
                };

            for (i = 0; i < window.portfolioArr.length; i += 1) {
                if (window.portfolioArr.hasOwnProperty(i)) {
                    if (i < ObjLength - (ObjLength % 3)) {
                        $('[data-content=portfolio]')
                            .append(put(put('div.mobile-preview'),
                                link(put('div.col-xs-12',
                                    switchers.htmlBuilder
                                        .getMobileImage(window.portfolioArr[i].smallImage,
                                        switchers.htmlBuilder
                                            .getTitle(window.portfolioArr[i]
                                                .title))), i)));
                    }
                }
            }

            setBackgroundImage();
            portfolioSliderInit();
            tabInit();
        }
    };

    if (SF.prototype.currentState !== getCurrentState()) {
        SF.prototype.currentState = getCurrentState();
        switchers[SF.prototype.currentState]();
    }

    return SF;
}
