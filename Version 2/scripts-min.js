function bringToFront(t) {
    var e = t.attr("data-z"),
        a = t.attr("data-y"),
        n = t.attr("data-x");
    e = void 0 === e ? 0 : parseInt(e), a = void 0 === a ? 0 : parseInt(a), n = void 0 === n ? 0 : parseInt(n), e = z + 20, z = e;
    var r = "translate3d(" + n + "px, " + a + "px, " + e + "px)";
    t.attr("data-z", e), t.css({
        transform: r,
        "-webkit-transform": r
    })
}

function nextZ(t) {
    var e = t.target;
    z += 20
}

function bubbleZ() {}

function dragMoveListener(t) {
    var e = t.target,
        a = (parseFloat(e.getAttribute("data-x")) || 0) + t.dx,
        n = (parseFloat(e.getAttribute("data-y")) || 0) + t.dy;
    e.setAttribute("data-moved", 1), e.style.webkitTransform = e.style.transform = "translate3d(" + a + "px, " + n + "px, " + z + "px)", e.setAttribute("data-x", a), e.setAttribute("data-y", n), e.setAttribute("data-z", z)
}

function blink() {
    $(".big-toggle").find(".big-svg-wrapper").toggle(), $("#big-msg").toggleClass("blink")
}

function setBlinkTimer(t) {
    timer = setInterval("blink()", t)
}
var z = 0;
$(document).ready(function() {
    $("html").on("click", ".desktop .window-os .icon-close3", function(t) {
        t.preventDefault();
        var e = $(this).parent().parent().attr("id");
        $("#" + e).addClass("closed"), $(".menu-bar").append('<div class="menu-bar-item" data-window-id="' + e + '"><div class="inner">' + $("#" + e).find("header").html() + "</div></div>")
    }), $(".menu-bar").on("click", ".menu-bar-item", function(t) {
        t.preventDefault();
        var e = $(this).attr("data-window-id");
        $("#" + e).removeClass("closed"), $(this).remove(), bringToFront($("#" + e))
    }), $(".draggable a").on("mousedown", function(t) {
        t.preventDefault(), $(this).parent().attr("data-moved", 0)
    }), $(".draggable a").on("click", function(t) {
        1 == $(this).parent().attr("data-moved") && t.preventDefault()
    }), $(".draggable").on("mousedown", function(t) {
        bringToFront($(this))
    })
}), interact(".draggable").draggable({
    inertia: !0,
    restrict: {
        restriction: "parent",
        endOnly: !0,
        elementRect: {
            top: 0,
            left: 0,
            bottom: 1,
            right: 1
        }
    },
    autoScroll: !0,
    onstart: nextZ,
    onmove: dragMoveListener,
    onend: function(t) {
        bubbleZ();
        var e = t.target.querySelector("p");
        e && (e.textContent = "moved a distance of " + (0 | Math.sqrt(t.dx * t.dx + t.dy * t.dy)) + "px")
    }
}), window.dragMoveListener = dragMoveListener;
var toggle = !1,
    timer;
