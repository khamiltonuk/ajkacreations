$(function() {

    //http://nicinabox.com/superslides/#1
    $('#slides').superslides({
    hashchange: true
    });

    //http://instafeedjs.com/
    var userFeed = new Instafeed({
        get: 'user',
        userId: 1460878990,
        accessToken: '1460878990.467ede5.f3f7b2d8ebae4b6b9704aeaead4acc23',
        success: function(){
            var prox = $('#instafeed'),
    scroller = $('<div></div>', {
        id: "scroller"
    });

    var pointerText = "Use your pointer to scroll, moving to the  edge scrolls faster!",
        keyboardMessage = "Use your arrow keys to scroll the images!",
        message = $('<p></p>', {
            id: "message",
            text: keyboardMessage
        });

    prox.addClass("slider").wrapInner('<div id="scroller"></div>')//.append(message);

    var middle = prox.width() / 2;

    scroller = $("#scroller");

    scroller.width(function () {
        var total = 0;
        scroller.children().each(function (i, val) {
        var el = $(this);
        total = total + (el.outerWidth() + parseInt(el.css("marginLeft")));
    });

    return total;
    }).css("left", "-" + (scroller.width() / 2 - middle) + "px");

    function goAnim(e) {
        var offset = prox.offset(),
            resetOffset = e.pageX - offset.left - middle,
            normalizedDuration = (resetOffset > 0) ? resetOffset : -resetOffset,
            duration = (middle - normalizedDuration) * 100;

            scroller.stop().animate({
                left: (resetOffset < 0) ? 0 : "-" + (parseInt(scroller.width()) - parseInt(prox.width()))
            }, duration, "linear");
    }

    prox.mouseenter(function (e) {
        message.text(pointerText).delay(1000).fadeOut("slow");
        goAnim(e);
        prox.mousemove(function (ev) {
            goAnim(ev);
        });
    });

    prox.mouseleave(function () {
        scroller.stop();
        prox.unbind("mousemove");
    });

    $(document).keydown(function (e) {
        if (e.keyCode === 37 || e.keyCode === 39) {

            message.fadeOut("slow");

        if (!scroller.is(":animated")) {
            scroller.stop().animate({
            left: (e.keyCode === 37) ? 0 : -(scroller.width() - prox.width())
                }, 6000, "linear");
            }
            }
            }).keyup(function () {
            scroller.stop();
    });
        }
    });
    userFeed.run();

    //
    
});