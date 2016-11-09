/*jslint nomen: true, regexp: true*/
/*global $, console, alert */
(function ($) {
    "use strict";

    $.fn.slickRefresh = function () {
        try {
            return this.each(function () {
                if ($(this).getSlick !== undefined) {
                    $(this).getSlick().refresh();
                    $(this).getSlick().updateDots();
                    $(this).getSlick().updateArrows();
                }
            });
        } catch (e) {
            console.log(e);
        }
    };
}(jQuery));
