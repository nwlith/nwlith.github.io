/*! VelocityJS.org (1.5.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
! function(t) {
    "use strict";

    function e(t) {
        var e = t.length,
            i = $.type(t);
        return "function" !== i && !$.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
    }
    if (!t.jQuery) {
        var $ = function(t, e) {
            return new $.fn.init(t, e)
        };
        $.isWindow = function(t) {
            return t && t === t.window
        }, $.type = function(t) {
            return t ? "object" == typeof t || "function" == typeof t ? r[s.call(t)] || "object" : typeof t : t + ""
        }, $.isArray = Array.isArray || function(t) {
            return "array" === $.type(t)
        }, $.isPlainObject = function(t) {
            var e;
            if (!t || "object" !== $.type(t) || t.nodeType || $.isWindow(t)) return !1;
            try {
                if (t.constructor && !n.call(t, "constructor") && !n.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (t) {
                return !1
            }
            for (e in t);
            return void 0 === e || n.call(t, e)
        }, $.each = function(t, i, r) {
            var n, s = 0,
                a = t.length,
                o = e(t);
            if (r) {
                if (o)
                    for (; s < a && !1 !== (n = i.apply(t[s], r)); s++);
                else
                    for (s in t)
                        if (t.hasOwnProperty(s) && !1 === (n = i.apply(t[s], r))) break
            } else if (o)
                for (; s < a && !1 !== (n = i.call(t[s], s, t[s])); s++);
            else
                for (s in t)
                    if (t.hasOwnProperty(s) && !1 === (n = i.call(t[s], s, t[s]))) break;
            return t
        }, $.data = function(t, e, r) {
            if (void 0 === r) {
                var n = t[$.expando],
                    s = n && i[n];
                if (void 0 === e) return s;
                if (s && e in s) return s[e]
            } else if (void 0 !== e) {
                var a = t[$.expando] || (t[$.expando] = ++$.uuid);
                return i[a] = i[a] || {}, i[a][e] = r, r
            }
        }, $.removeData = function(t, e) {
            var r = t[$.expando],
                n = r && i[r];
            n && (e ? $.each(e, function(t, e) {
                delete n[e]
            }) : delete i[r])
        }, $.extend = function() {
            var t, e, i, r, n, s, a = arguments[0] || {},
                o = 1,
                l = arguments.length,
                h = !1;
            for ("boolean" == typeof a && (h = a, a = arguments[o] || {}, o++), "object" != typeof a && "function" !== $.type(a) && (a = {}), o === l && (a = this, o--); o < l; o++)
                if (n = arguments[o])
                    for (r in n) n.hasOwnProperty(r) && (t = a[r], i = n[r], a !== i && (h && i && ($.isPlainObject(i) || (e = $.isArray(i))) ? (e ? (e = !1, s = t && $.isArray(t) ? t : []) : s = t && $.isPlainObject(t) ? t : {}, a[r] = $.extend(h, s, i)) : void 0 !== i && (a[r] = i)));
            return a
        }, $.queue = function(t, i, r) {
            function n(t, i) {
                var r = i || [];
                return t && (e(Object(t)) ? function(t, e) {
                    for (var i = +e.length, r = 0, n = t.length; r < i;) t[n++] = e[r++];
                    if (i !== i)
                        for (; void 0 !== e[r];) t[n++] = e[r++];
                    t.length = n
                }(r, "string" == typeof t ? [t] : t) : [].push.call(r, t)), r
            }
            if (t) {
                i = (i || "fx") + "queue";
                var s = $.data(t, i);
                return r ? (!s || $.isArray(r) ? s = $.data(t, i, n(r)) : s.push(r), s) : s || []
            }
        }, $.dequeue = function(t, e) {
            $.each(t.nodeType ? [t] : t, function(t, i) {
                e = e || "fx";
                var r = $.queue(i, e),
                    n = r.shift();
                "inprogress" === n && (n = r.shift()), n && ("fx" === e && r.unshift("inprogress"), n.call(i, function() {
                    $.dequeue(i, e)
                }))
            })
        }, $.fn = $.prototype = {
            init: function(t) {
                if (t.nodeType) return this[0] = t, this;
                throw new Error("Not a DOM node.")
            },
            offset: function() {
                var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function() {
                function t(t) {
                    for (var e = t.offsetParent; e && "html" !== e.nodeName.toLowerCase() && e.style && "static" === e.style.position;) e = e.offsetParent;
                    return e || document
                }
                var e = this[0],
                    i = t(e),
                    r = this.offset(),
                    n = /^(?:body|html)$/i.test(i.nodeName) ? {
                        top: 0,
                        left: 0
                    } : $(i).offset();
                return r.top -= parseFloat(e.style.marginTop) || 0, r.left -= parseFloat(e.style.marginLeft) || 0, i.style && (n.top += parseFloat(i.style.borderTopWidth) || 0, n.left += parseFloat(i.style.borderLeftWidth) || 0), {
                    top: r.top - n.top,
                    left: r.left - n.left
                }
            }
        };
        var i = {};
        $.expando = "velocity" + (new Date).getTime(), $.uuid = 0;
        for (var r = {}, n = r.hasOwnProperty, s = r.toString, a = "Boolean Number String Function Array Date RegExp Object Error".split(" "), o = 0; o < a.length; o++) r["[object " + a[o] + "]"] = a[o].toLowerCase();
        $.fn.init.prototype = $.fn, t.Velocity = {
            Utilities: $
        }
    }
}(window),
function(t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : t()
}(function() {
    "use strict";
    return function(t, e, i, r) {
        function n(t) {
            for (var e = -1, i = t ? t.length : 0, r = []; ++e < i;) {
                var n = t[e];
                n && r.push(n)
            }
            return r
        }

        function s(t) {
            return y.isWrapped(t) ? t = v.call(t) : y.isNode(t) && (t = [t]), t
        }

        function a(t) {
            var e = $.data(t, "velocity");
            return null === e ? r : e
        }

        function o(t, e) {
            var i = a(t);
            i && i.delayTimer && !i.delayPaused && (i.delayRemaining = i.delay - e + i.delayBegin, i.delayPaused = !0, clearTimeout(i.delayTimer.setTimeout))
        }

        function l(t, e) {
            var i = a(t);
            i && i.delayTimer && i.delayPaused && (i.delayPaused = !1, i.delayTimer.setTimeout = setTimeout(i.delayTimer.next, i.delayRemaining))
        }

        function h(t) {
            return function(e) {
                return Math.round(e * t) * (1 / t)
            }
        }

        function c(t, i, r, n) {
            function s(t, e) {
                return 1 - 3 * e + 3 * t
            }

            function a(t, e) {
                return 3 * e - 6 * t
            }

            function o(t) {
                return 3 * t
            }

            function l(t, e, i) {
                return ((s(e, i) * t + a(e, i)) * t + o(e)) * t
            }

            function h(t, e, i) {
                return 3 * s(e, i) * t * t + 2 * a(e, i) * t + o(e)
            }

            function c(e, i) {
                for (var n = 0; n < g; ++n) {
                    var s = h(i, t, r);
                    if (0 === s) return i;
                    i -= (l(i, t, r) - e) / s
                }
                return i
            }

            function u() {
                for (var e = 0; e < y; ++e) T[e] = l(e * x, t, r)
            }

            function p(e, i, n) {
                var s, a, o = 0;
                do {
                    a = i + (n - i) / 2, s = l(a, t, r) - e, s > 0 ? n = a : i = a
                } while (Math.abs(s) > v && ++o < _);
                return a
            }

            function f(e) {
                for (var i = 0, n = 1, s = y - 1; n !== s && T[n] <= e; ++n) i += x;
                --n;
                var a = (e - T[n]) / (T[n + 1] - T[n]),
                    o = i + a * x,
                    l = h(o, t, r);
                return l >= m ? c(e, o) : 0 === l ? o : p(e, i, i + x)
            }

            function d() {
                S = !0, t === i && r === n || u()
            }
            var g = 4,
                m = .001,
                v = 1e-7,
                _ = 10,
                y = 11,
                x = 1 / (y - 1),
                b = "Float32Array" in e;
            if (4 !== arguments.length) return !1;
            for (var w = 0; w < 4; ++w)
                if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
            t = Math.min(t, 1), r = Math.min(r, 1), t = Math.max(t, 0), r = Math.max(r, 0);
            var T = b ? new Float32Array(y) : new Array(y),
                S = !1,
                P = function(e) {
                    return S || d(), t === i && r === n ? e : 0 === e ? 0 : 1 === e ? 1 : l(f(e), i, n)
                };
            P.getControlPoints = function() {
                return [{
                    x: t,
                    y: i
                }, {
                    x: r,
                    y: n
                }]
            };
            var O = "generateBezier(" + [t, i, r, n] + ")";
            return P.toString = function() {
                return O
            }, P
        }

        function u(t, e) {
            var i = t;
            return y.isString(t) ? T.Easings[t] || (i = !1) : i = y.isArray(t) && 1 === t.length ? h.apply(null, t) : y.isArray(t) && 2 === t.length ? S.apply(null, t.concat([e])) : !(!y.isArray(t) || 4 !== t.length) && c.apply(null, t), !1 === i && (i = T.Easings[T.defaults.easing] ? T.defaults.easing : w), i
        }

        function p(t) {
            if (t) {
                var e = T.timestamp && !0 !== t ? t : m.now(),
                    i = T.State.calls.length;
                i > 1e4 && (T.State.calls = n(T.State.calls), i = T.State.calls.length);
                for (var s = 0; s < i; s++)
                    if (T.State.calls[s]) {
                        var o = T.State.calls[s],
                            l = o[0],
                            h = o[2],
                            c = o[3],
                            u = !!c,
                            g = null,
                            v = o[5],
                            _ = o[6];
                        if (c || (c = T.State.calls[s][3] = e - 16), v) {
                            if (!0 !== v.resume) continue;
                            c = o[3] = Math.round(e - _ - 16), o[5] = null
                        }
                        _ = o[6] = e - c;
                        for (var x = Math.min(_ / h.duration, 1), b = 0, w = l.length; b < w; b++) {
                            var S = l[b],
                                O = S.element;
                            if (a(O)) {
                                var C = !1;
                                if (h.display !== r && null !== h.display && "none" !== h.display) {
                                    if ("flex" === h.display) {
                                        var D = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                        $.each(D, function(t, e) {
                                            P.setPropertyValue(O, "display", e)
                                        })
                                    }
                                    P.setPropertyValue(O, "display", h.display)
                                }
                                h.visibility !== r && "hidden" !== h.visibility && P.setPropertyValue(O, "visibility", h.visibility);
                                for (var E in S)
                                    if (S.hasOwnProperty(E) && "element" !== E) {
                                        var A = S[E],
                                            R, M = y.isString(A.easing) ? T.Easings[A.easing] : A.easing;
                                        if (y.isString(A.pattern)) {
                                            var X = 1 === x ? function(t, e, i) {
                                                var r = A.endValue[e];
                                                return i ? Math.round(r) : r
                                            } : function(t, e, i) {
                                                var r = A.startValue[e],
                                                    n = A.endValue[e] - r,
                                                    s = r + n * M(x, h, n);
                                                return i ? Math.round(s) : s
                                            };
                                            R = A.pattern.replace(/{(\d+)(!)?}/g, X)
                                        } else if (1 === x) R = A.endValue;
                                        else {
                                            var z = A.endValue - A.startValue;
                                            R = A.startValue + z * M(x, h, z)
                                        }
                                        if (!u && R === A.currentValue) continue;
                                        if (A.currentValue = R, "tween" === E) g = R;
                                        else {
                                            var Y;
                                            if (P.Hooks.registered[E]) {
                                                Y = P.Hooks.getRoot(E);
                                                var F = a(O).rootPropertyValueCache[Y];
                                                F && (A.rootPropertyValue = F)
                                            }
                                            var N = P.setPropertyValue(O, E, A.currentValue + (d < 9 && 0 === parseFloat(R) ? "" : A.unitType), A.rootPropertyValue, A.scrollData);
                                            P.Hooks.registered[E] && (P.Normalizations.registered[Y] ? a(O).rootPropertyValueCache[Y] = P.Normalizations.registered[Y]("extract", null, N[1]) : a(O).rootPropertyValueCache[Y] = N[1]), "transform" === N[0] && (C = !0)
                                        }
                                    }
                                h.mobileHA && a(O).transformCache.translate3d === r && (a(O).transformCache.translate3d = "(0px, 0px, 0px)", C = !0), C && P.flushTransformCache(O)
                            }
                        }
                        h.display !== r && "none" !== h.display && (T.State.calls[s][2].display = !1), h.visibility !== r && "hidden" !== h.visibility && (T.State.calls[s][2].visibility = !1), h.progress && h.progress.call(o[1], o[1], x, Math.max(0, c + h.duration - e), c, g), 1 === x && f(s)
                    }
            }
            T.State.isTicking && k(p)
        }

        function f(t, e) {
            if (!T.State.calls[t]) return !1;
            for (var i = T.State.calls[t][0], n = T.State.calls[t][1], s = T.State.calls[t][2], o = T.State.calls[t][4], l = !1, h = 0, c = i.length; h < c; h++) {
                var u = i[h].element;
                e || s.loop || ("none" === s.display && P.setPropertyValue(u, "display", s.display), "hidden" === s.visibility && P.setPropertyValue(u, "visibility", s.visibility));
                var p = a(u);
                if (!0 !== s.loop && ($.queue(u)[1] === r || !/\.velocityQueueEntryFlag/i.test($.queue(u)[1])) && p) {
                    p.isAnimating = !1, p.rootPropertyValueCache = {};
                    var f = !1;
                    $.each(P.Lists.transforms3D, function(t, e) {
                        var i = /^scale/.test(e) ? 1 : 0,
                            n = p.transformCache[e];
                        p.transformCache[e] !== r && new RegExp("^\\(" + i + "[^.]").test(n) && (f = !0, delete p.transformCache[e])
                    }), s.mobileHA && (f = !0, delete p.transformCache.translate3d), f && P.flushTransformCache(u), P.Values.removeClass(u, "velocity-animating")
                }
                if (!e && s.complete && !s.loop && h === c - 1) try {
                    s.complete.call(n, n)
                } catch (t) {
                    setTimeout(function() {
                        throw t
                    }, 1)
                }
                o && !0 !== s.loop && o(n), p && !0 === s.loop && !e && ($.each(p.tweensContainer, function(t, e) {
                    if (/^rotate/.test(t) && (parseFloat(e.startValue) - parseFloat(e.endValue)) % 360 == 0) {
                        var i = e.startValue;
                        e.startValue = e.endValue, e.endValue = i
                    }
                    /^backgroundPosition/.test(t) && 100 === parseFloat(e.endValue) && "%" === e.unitType && (e.endValue = 0, e.startValue = 100)
                }), T(u, "reverse", {
                    loop: !0,
                    delay: s.delay
                })), !1 !== s.queue && $.dequeue(u, s.queue)
            }
            T.State.calls[t] = !1;
            for (var d = 0, g = T.State.calls.length; d < g; d++)
                if (!1 !== T.State.calls[d]) {
                    l = !0;
                    break
                }!1 === l && (T.State.isTicking = !1, delete T.State.calls, T.State.calls = [])
        }
        var d = function() {
                if (i.documentMode) return i.documentMode;
                for (var t = 7; t > 4; t--) {
                    var e = i.createElement("div");
                    if (e.innerHTML = "<!--[if IE " + t + "]><span></span><![endif]-->", e.getElementsByTagName("span").length) return e = null, t
                }
                return r
            }(),
            g = function() {
                var t = 0;
                return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function(e) {
                    var i = (new Date).getTime(),
                        r;
                    return r = Math.max(0, 16 - (i - t)), t = i + r, setTimeout(function() {
                        e(i + r)
                    }, r)
                }
            }(),
            m = function() {
                var t = e.performance || {};
                if ("function" != typeof t.now) {
                    var i = t.timing && t.timing.navigationStart ? t.timing.navigationStart : (new Date).getTime();
                    t.now = function() {
                        return (new Date).getTime() - i
                    }
                }
                return t
            }(),
            v = function() {
                var t = Array.prototype.slice;
                try {
                    return t.call(i.documentElement), t
                } catch (e) {
                    return function(e, i) {
                        var r = this.length;
                        if ("number" != typeof e && (e = 0), "number" != typeof i && (i = r), this.slice) return t.call(this, e, i);
                        var n, s = [],
                            a = e >= 0 ? e : Math.max(0, r + e),
                            o = i < 0 ? r + i : Math.min(i, r),
                            l = o - a;
                        if (l > 0)
                            if (s = new Array(l), this.charAt)
                                for (n = 0; n < l; n++) s[n] = this.charAt(a + n);
                            else
                                for (n = 0; n < l; n++) s[n] = this[a + n];
                        return s
                    }
                }
            }(),
            _ = function() {
                return Array.prototype.includes ? function(t, e) {
                    return t.includes(e)
                } : Array.prototype.indexOf ? function(t, e) {
                    return t.indexOf(e) >= 0
                } : function(t, e) {
                    for (var i = 0; i < t.length; i++)
                        if (t[i] === e) return !0;
                    return !1
                }
            },
            y = {
                isNumber: function(t) {
                    return "number" == typeof t
                },
                isString: function(t) {
                    return "string" == typeof t
                },
                isArray: Array.isArray || function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                },
                isFunction: function(t) {
                    return "[object Function]" === Object.prototype.toString.call(t)
                },
                isNode: function(t) {
                    return t && t.nodeType
                },
                isWrapped: function(t) {
                    return t && t !== e && y.isNumber(t.length) && !y.isString(t) && !y.isFunction(t) && !y.isNode(t) && (0 === t.length || y.isNode(t[0]))
                },
                isSVG: function(t) {
                    return e.SVGElement && t instanceof e.SVGElement
                },
                isEmptyObject: function(t) {
                    for (var e in t)
                        if (t.hasOwnProperty(e)) return !1;
                    return !0
                }
            },
            $, x = !1;
        if (t.fn && t.fn.jquery ? ($ = t, x = !0) : $ = e.Velocity.Utilities, d <= 8 && !x) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (d <= 7) return void(jQuery.fn.velocity = jQuery.fn.animate);
        var b = 400,
            w = "swing",
            T = {
                State: {
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    isAndroid: /Android/i.test(navigator.userAgent),
                    isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                    isChrome: e.chrome,
                    isFirefox: /Firefox/i.test(navigator.userAgent),
                    prefixElement: i.createElement("div"),
                    prefixMatches: {},
                    scrollAnchor: null,
                    scrollPropertyLeft: null,
                    scrollPropertyTop: null,
                    isTicking: !1,
                    calls: [],
                    delayedElements: {
                        count: 0
                    }
                },
                CSS: {},
                Utilities: $,
                Redirects: {},
                Easings: {},
                Promise: e.Promise,
                defaults: {
                    queue: "",
                    duration: b,
                    easing: w,
                    begin: r,
                    complete: r,
                    progress: r,
                    display: r,
                    visibility: r,
                    loop: !1,
                    delay: !1,
                    mobileHA: !0,
                    _cacheValues: !0,
                    promiseRejectEmpty: !0
                },
                init: function(t) {
                    $.data(t, "velocity", {
                        isSVG: y.isSVG(t),
                        isAnimating: !1,
                        computedStyle: null,
                        tweensContainer: null,
                        rootPropertyValueCache: {},
                        transformCache: {}
                    })
                },
                hook: null,
                mock: !1,
                version: {
                    major: 1,
                    minor: 5,
                    patch: 0
                },
                debug: !1,
                timestamp: !0,
                pauseAll: function(t) {
                    var e = (new Date).getTime();
                    $.each(T.State.calls, function(e, i) {
                        if (i) {
                            if (t !== r && (i[2].queue !== t || !1 === i[2].queue)) return !0;
                            i[5] = {
                                resume: !1
                            }
                        }
                    }), $.each(T.State.delayedElements, function(t, i) {
                        i && o(i, e)
                    })
                },
                resumeAll: function(t) {
                    var e = (new Date).getTime();
                    $.each(T.State.calls, function(e, i) {
                        if (i) {
                            if (t !== r && (i[2].queue !== t || !1 === i[2].queue)) return !0;
                            i[5] && (i[5].resume = !0)
                        }
                    }), $.each(T.State.delayedElements, function(t, i) {
                        i && l(i, e)
                    })
                }
            };
        e.pageYOffset !== r ? (T.State.scrollAnchor = e, T.State.scrollPropertyLeft = "pageXOffset", T.State.scrollPropertyTop = "pageYOffset") : (T.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, T.State.scrollPropertyLeft = "scrollLeft", T.State.scrollPropertyTop = "scrollTop");
        var S = function() {
            function t(t) {
                return -t.tension * t.x - t.friction * t.v
            }

            function e(e, i, r) {
                var n = {
                    x: e.x + r.dx * i,
                    v: e.v + r.dv * i,
                    tension: e.tension,
                    friction: e.friction
                };
                return {
                    dx: n.v,
                    dv: t(n)
                }
            }

            function i(i, r) {
                var n = {
                        dx: i.v,
                        dv: t(i)
                    },
                    s = e(i, .5 * r, n),
                    a = e(i, .5 * r, s),
                    o = e(i, r, a),
                    l = 1 / 6 * (n.dx + 2 * (s.dx + a.dx) + o.dx),
                    h = 1 / 6 * (n.dv + 2 * (s.dv + a.dv) + o.dv);
                return i.x = i.x + l * r, i.v = i.v + h * r, i
            }
            return function t(e, r, n) {
                var s = {
                        x: -1,
                        v: 0,
                        tension: null,
                        friction: null
                    },
                    a = [0],
                    o = 0,
                    l = 1e-4,
                    h = .016,
                    c, u, p;
                for (e = parseFloat(e) || 500, r = parseFloat(r) || 20, n = n || null, s.tension = e, s.friction = r, c = null !== n, c ? (o = t(e, r), u = o / n * .016) : u = .016;;)
                    if (p = i(p || s, u), a.push(1 + p.x), o += 16, !(Math.abs(p.x) > 1e-4 && Math.abs(p.v) > 1e-4)) break;
                return c ? function(t) {
                    return a[t * (a.length - 1) | 0]
                } : o
            }
        }();
        T.Easings = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            spring: function(t) {
                return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t)
            }
        }, $.each([
            ["ease", [.25, .1, .25, 1]],
            ["ease-in", [.42, 0, 1, 1]],
            ["ease-out", [0, 0, .58, 1]],
            ["ease-in-out", [.42, 0, .58, 1]],
            ["easeInSine", [.47, 0, .745, .715]],
            ["easeOutSine", [.39, .575, .565, 1]],
            ["easeInOutSine", [.445, .05, .55, .95]],
            ["easeInQuad", [.55, .085, .68, .53]],
            ["easeOutQuad", [.25, .46, .45, .94]],
            ["easeInOutQuad", [.455, .03, .515, .955]],
            ["easeInCubic", [.55, .055, .675, .19]],
            ["easeOutCubic", [.215, .61, .355, 1]],
            ["easeInOutCubic", [.645, .045, .355, 1]],
            ["easeInQuart", [.895, .03, .685, .22]],
            ["easeOutQuart", [.165, .84, .44, 1]],
            ["easeInOutQuart", [.77, 0, .175, 1]],
            ["easeInQuint", [.755, .05, .855, .06]],
            ["easeOutQuint", [.23, 1, .32, 1]],
            ["easeInOutQuint", [.86, 0, .07, 1]],
            ["easeInExpo", [.95, .05, .795, .035]],
            ["easeOutExpo", [.19, 1, .22, 1]],
            ["easeInOutExpo", [1, 0, 0, 1]],
            ["easeInCirc", [.6, .04, .98, .335]],
            ["easeOutCirc", [.075, .82, .165, 1]],
            ["easeInOutCirc", [.785, .135, .15, .86]]
        ], function(t, e) {
            T.Easings[e[0]] = c.apply(null, e[1])
        });
        var P = T.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
                units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"],
                colorNames: {
                    aliceblue: "240,248,255",
                    antiquewhite: "250,235,215",
                    aquamarine: "127,255,212",
                    aqua: "0,255,255",
                    azure: "240,255,255",
                    beige: "245,245,220",
                    bisque: "255,228,196",
                    black: "0,0,0",
                    blanchedalmond: "255,235,205",
                    blueviolet: "138,43,226",
                    blue: "0,0,255",
                    brown: "165,42,42",
                    burlywood: "222,184,135",
                    cadetblue: "95,158,160",
                    chartreuse: "127,255,0",
                    chocolate: "210,105,30",
                    coral: "255,127,80",
                    cornflowerblue: "100,149,237",
                    cornsilk: "255,248,220",
                    crimson: "220,20,60",
                    cyan: "0,255,255",
                    darkblue: "0,0,139",
                    darkcyan: "0,139,139",
                    darkgoldenrod: "184,134,11",
                    darkgray: "169,169,169",
                    darkgrey: "169,169,169",
                    darkgreen: "0,100,0",
                    darkkhaki: "189,183,107",
                    darkmagenta: "139,0,139",
                    darkolivegreen: "85,107,47",
                    darkorange: "255,140,0",
                    darkorchid: "153,50,204",
                    darkred: "139,0,0",
                    darksalmon: "233,150,122",
                    darkseagreen: "143,188,143",
                    darkslateblue: "72,61,139",
                    darkslategray: "47,79,79",
                    darkturquoise: "0,206,209",
                    darkviolet: "148,0,211",
                    deeppink: "255,20,147",
                    deepskyblue: "0,191,255",
                    dimgray: "105,105,105",
                    dimgrey: "105,105,105",
                    dodgerblue: "30,144,255",
                    firebrick: "178,34,34",
                    floralwhite: "255,250,240",
                    forestgreen: "34,139,34",
                    fuchsia: "255,0,255",
                    gainsboro: "220,220,220",
                    ghostwhite: "248,248,255",
                    gold: "255,215,0",
                    goldenrod: "218,165,32",
                    gray: "128,128,128",
                    grey: "128,128,128",
                    greenyellow: "173,255,47",
                    green: "0,128,0",
                    honeydew: "240,255,240",
                    hotpink: "255,105,180",
                    indianred: "205,92,92",
                    indigo: "75,0,130",
                    ivory: "255,255,240",
                    khaki: "240,230,140",
                    lavenderblush: "255,240,245",
                    lavender: "230,230,250",
                    lawngreen: "124,252,0",
                    lemonchiffon: "255,250,205",
                    lightblue: "173,216,230",
                    lightcoral: "240,128,128",
                    lightcyan: "224,255,255",
                    lightgoldenrodyellow: "250,250,210",
                    lightgray: "211,211,211",
                    lightgrey: "211,211,211",
                    lightgreen: "144,238,144",
                    lightpink: "255,182,193",
                    lightsalmon: "255,160,122",
                    lightseagreen: "32,178,170",
                    lightskyblue: "135,206,250",
                    lightslategray: "119,136,153",
                    lightsteelblue: "176,196,222",
                    lightyellow: "255,255,224",
                    limegreen: "50,205,50",
                    lime: "0,255,0",
                    linen: "250,240,230",
                    magenta: "255,0,255",
                    maroon: "128,0,0",
                    mediumaquamarine: "102,205,170",
                    mediumblue: "0,0,205",
                    mediumorchid: "186,85,211",
                    mediumpurple: "147,112,219",
                    mediumseagreen: "60,179,113",
                    mediumslateblue: "123,104,238",
                    mediumspringgreen: "0,250,154",
                    mediumturquoise: "72,209,204",
                    mediumvioletred: "199,21,133",
                    midnightblue: "25,25,112",
                    mintcream: "245,255,250",
                    mistyrose: "255,228,225",
                    moccasin: "255,228,181",
                    navajowhite: "255,222,173",
                    navy: "0,0,128",
                    oldlace: "253,245,230",
                    olivedrab: "107,142,35",
                    olive: "128,128,0",
                    orangered: "255,69,0",
                    orange: "255,165,0",
                    orchid: "218,112,214",
                    palegoldenrod: "238,232,170",
                    palegreen: "152,251,152",
                    paleturquoise: "175,238,238",
                    palevioletred: "219,112,147",
                    papayawhip: "255,239,213",
                    peachpuff: "255,218,185",
                    peru: "205,133,63",
                    pink: "255,192,203",
                    plum: "221,160,221",
                    powderblue: "176,224,230",
                    purple: "128,0,128",
                    red: "255,0,0",
                    rosybrown: "188,143,143",
                    royalblue: "65,105,225",
                    saddlebrown: "139,69,19",
                    salmon: "250,128,114",
                    sandybrown: "244,164,96",
                    seagreen: "46,139,87",
                    seashell: "255,245,238",
                    sienna: "160,82,45",
                    silver: "192,192,192",
                    skyblue: "135,206,235",
                    slateblue: "106,90,205",
                    slategray: "112,128,144",
                    snow: "255,250,250",
                    springgreen: "0,255,127",
                    steelblue: "70,130,180",
                    tan: "210,180,140",
                    teal: "0,128,128",
                    thistle: "216,191,216",
                    tomato: "255,99,71",
                    turquoise: "64,224,208",
                    violet: "238,130,238",
                    wheat: "245,222,179",
                    whitesmoke: "245,245,245",
                    white: "255,255,255",
                    yellowgreen: "154,205,50",
                    yellow: "255,255,0"
                }
            },
            Hooks: {
                templates: {
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0px"],
                    perspectiveOrigin: ["X Y", "50% 50%"]
                },
                registered: {},
                register: function() {
                    for (var t = 0; t < P.Lists.colors.length; t++) {
                        var e = "color" === P.Lists.colors[t] ? "0 0 0 1" : "255 255 255 1";
                        P.Hooks.templates[P.Lists.colors[t]] = ["Red Green Blue Alpha", e]
                    }
                    var i, r, n;
                    if (d)
                        for (i in P.Hooks.templates)
                            if (P.Hooks.templates.hasOwnProperty(i)) {
                                r = P.Hooks.templates[i], n = r[0].split(" ");
                                var s = r[1].match(P.RegEx.valueSplit);
                                "Color" === n[0] && (n.push(n.shift()), s.push(s.shift()), P.Hooks.templates[i] = [n.join(" "), s.join(" ")])
                            }
                    for (i in P.Hooks.templates)
                        if (P.Hooks.templates.hasOwnProperty(i)) {
                            r = P.Hooks.templates[i], n = r[0].split(" ");
                            for (var a in n)
                                if (n.hasOwnProperty(a)) {
                                    var o = i + n[a],
                                        l = a;
                                    P.Hooks.registered[o] = [i, l]
                                }
                        }
                },
                getRoot: function(t) {
                    var e = P.Hooks.registered[t];
                    return e ? e[0] : t
                },
                getUnit: function(t, e) {
                    var i = (t.substr(e || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
                    return i && _(P.Lists.units, i) ? i : ""
                },
                fixColors: function(t) {
                    return t.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function(t, e, i) {
                        return P.Lists.colorNames.hasOwnProperty(i) ? (e || "rgba(") + P.Lists.colorNames[i] + (e ? "" : ",1)") : e + i
                    })
                },
                cleanRootPropertyValue: function(t, e) {
                    return P.RegEx.valueUnwrap.test(e) && (e = e.match(P.RegEx.valueUnwrap)[1]), P.Values.isCSSNullValue(e) && (e = P.Hooks.templates[t][1]), e
                },
                extractValue: function(t, e) {
                    var i = P.Hooks.registered[t];
                    if (i) {
                        var r = i[0],
                            n = i[1];
                        return e = P.Hooks.cleanRootPropertyValue(r, e), e.toString().match(P.RegEx.valueSplit)[n]
                    }
                    return e
                },
                injectValue: function(t, e, i) {
                    var r = P.Hooks.registered[t];
                    if (r) {
                        var n = r[0],
                            s = r[1],
                            a, o;
                        return i = P.Hooks.cleanRootPropertyValue(n, i), a = i.toString().match(P.RegEx.valueSplit), a[s] = e, o = a.join(" ")
                    }
                    return i
                }
            },
            Normalizations: {
                registered: {
                    clip: function(t, e, i) {
                        switch (t) {
                            case "name":
                                return "clip";
                            case "extract":
                                var r;
                                return P.RegEx.wrappedValueAlreadyExtracted.test(i) ? r = i : (r = i.toString().match(P.RegEx.valueUnwrap), r = r ? r[1].replace(/,(\s+)?/g, " ") : i), r;
                            case "inject":
                                return "rect(" + i + ")"
                        }
                    },
                    blur: function(t, e, i) {
                        switch (t) {
                            case "name":
                                return T.State.isFirefox ? "filter" : "-webkit-filter";
                            case "extract":
                                var r = parseFloat(i);
                                if (!r && 0 !== r) {
                                    var n = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    r = n ? n[1] : 0
                                }
                                return r;
                            case "inject":
                                return parseFloat(i) ? "blur(" + i + ")" : "none"
                        }
                    },
                    opacity: function(t, e, i) {
                        if (d <= 8) switch (t) {
                            case "name":
                                return "filter";
                            case "extract":
                                var r = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                return i = r ? r[1] / 100 : 1;
                            case "inject":
                                return e.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                        } else switch (t) {
                            case "name":
                                return "opacity";
                            case "extract":
                                return i;
                            case "inject":
                                return i
                        }
                    }
                },
                register: function() {
                    function t(t, e, i) {
                        if ("border-box" === P.getPropertyValue(e, "boxSizing").toString().toLowerCase() === (i || !1)) {
                            var r, n, s = 0,
                                a = "width" === t ? ["Left", "Right"] : ["Top", "Bottom"],
                                o = ["padding" + a[0], "padding" + a[1], "border" + a[0] + "Width", "border" + a[1] + "Width"];
                            for (r = 0; r < o.length; r++) n = parseFloat(P.getPropertyValue(e, o[r])), isNaN(n) || (s += n);
                            return i ? -s : s
                        }
                        return 0
                    }

                    function e(e, i) {
                        return function(r, n, s) {
                            switch (r) {
                                case "name":
                                    return e;
                                case "extract":
                                    return parseFloat(s) + t(e, n, i);
                                case "inject":
                                    return parseFloat(s) - t(e, n, i) + "px"
                            }
                        }
                    }
                    d && !(d > 9) || T.State.isGingerbread || (P.Lists.transformsBase = P.Lists.transformsBase.concat(P.Lists.transforms3D));
                    for (var i = 0; i < P.Lists.transformsBase.length; i++) ! function() {
                        var t = P.Lists.transformsBase[i];
                        P.Normalizations.registered[t] = function(e, i, n) {
                            switch (e) {
                                case "name":
                                    return "transform";
                                case "extract":
                                    return a(i) === r || a(i).transformCache[t] === r ? /^scale/i.test(t) ? 1 : 0 : a(i).transformCache[t].replace(/[()]/g, "");
                                case "inject":
                                    var s = !1;
                                    switch (t.substr(0, t.length - 1)) {
                                        case "translate":
                                            s = !/(%|px|em|rem|vw|vh|\d)$/i.test(n);
                                            break;
                                        case "scal":
                                        case "scale":
                                            T.State.isAndroid && a(i).transformCache[t] === r && n < 1 && (n = 1), s = !/(\d)$/i.test(n);
                                            break;
                                        case "skew":
                                            s = !/(deg|\d)$/i.test(n);
                                            break;
                                        case "rotate":
                                            s = !/(deg|\d)$/i.test(n);
                                            break
                                    }
                                    return s || (a(i).transformCache[t] = "(" + n + ")"), a(i).transformCache[t]
                            }
                        }
                    }();
                    for (var n = 0; n < P.Lists.colors.length; n++) ! function() {
                        var t = P.Lists.colors[n];
                        P.Normalizations.registered[t] = function(e, i, n) {
                            switch (e) {
                                case "name":
                                    return t;
                                case "extract":
                                    var s;
                                    if (P.RegEx.wrappedValueAlreadyExtracted.test(n)) s = n;
                                    else {
                                        var a, o = {
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            red: "rgb(255, 0, 0)",
                                            white: "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(n) ? a = o[n] !== r ? o[n] : o.black : P.RegEx.isHex.test(n) ? a = "rgb(" + P.Values.hexToRgb(n).join(" ") + ")" : /^rgba?\(/i.test(n) || (a = o.black), s = (a || n).toString().match(P.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                    }
                                    return (!d || d > 8) && 3 === s.split(" ").length && (s += " 1"), s;
                                case "inject":
                                    return /^rgb/.test(n) ? n : (d <= 8 ? 4 === n.split(" ").length && (n = n.split(/\s+/).slice(0, 3).join(" ")) : 3 === n.split(" ").length && (n += " 1"), (d <= 8 ? "rgb" : "rgba") + "(" + n.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")")
                            }
                        }
                    }();
                    P.Normalizations.registered.innerWidth = e("width", !0), P.Normalizations.registered.innerHeight = e("height", !0), P.Normalizations.registered.outerWidth = e("width"), P.Normalizations.registered.outerHeight = e("height")
                }
            },
            Names: {
                camelCase: function(t) {
                    return t.replace(/-(\w)/g, function(t, e) {
                        return e.toUpperCase()
                    })
                },
                SVGAttribute: function(t) {
                    var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (d || T.State.isAndroid && !T.State.isChrome) && (e += "|transform"), new RegExp("^(" + e + ")$", "i").test(t)
                },
                prefixCheck: function(t) {
                    if (T.State.prefixMatches[t]) return [T.State.prefixMatches[t], !0];
                    for (var e = ["", "Webkit", "Moz", "ms", "O"], i = 0, r = e.length; i < r; i++) {
                        var n;
                        if (n = 0 === i ? t : e[i] + t.replace(/^\w/, function(t) {
                                return t.toUpperCase()
                            }), y.isString(T.State.prefixElement.style[n])) return T.State.prefixMatches[t] = n, [n, !0]
                    }
                    return [t, !1]
                }
            },
            Values: {
                hexToRgb: function(t) {
                    var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                        i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
                        r;
                    return t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, e, i, r) {
                        return e + e + i + i + r + r
                    }), r = i.exec(t), r ? [parseInt(r[1], 16), parseInt(r[2], 16), parseInt(r[3], 16)] : [0, 0, 0]
                },
                isCSSNullValue: function(t) {
                    return !t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)
                },
                getUnitType: function(t) {
                    return /^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px"
                },
                getDisplayType: function(t) {
                    var e = t && t.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : /^(table)$/i.test(e) ? "table" : /^(tbody)$/i.test(e) ? "table-row-group" : "block"
                },
                addClass: function(t, e) {
                    if (t)
                        if (t.classList) t.classList.add(e);
                        else if (y.isString(t.className)) t.className += (t.className.length ? " " : "") + e;
                    else {
                        var i = t.getAttribute(d <= 7 ? "className" : "class") || "";
                        t.setAttribute("class", i + (i ? " " : "") + e)
                    }
                },
                removeClass: function(t, e) {
                    if (t)
                        if (t.classList) t.classList.remove(e);
                        else if (y.isString(t.className)) t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)", "gi"), " ");
                    else {
                        var i = t.getAttribute(d <= 7 ? "className" : "class") || "";
                        t.setAttribute("class", i.replace(new RegExp("(^|s)" + e.split(" ").join("|") + "(s|$)", "gi"), " "))
                    }
                }
            },
            getPropertyValue: function(t, i, n, s) {
                function o(t, i) {
                    var n = 0;
                    if (d <= 8) n = $.css(t, i);
                    else {
                        var l = !1;
                        /^(width|height)$/.test(i) && 0 === P.getPropertyValue(t, "display") && (l = !0, P.setPropertyValue(t, "display", P.Values.getDisplayType(t)));
                        var h = function() {
                            l && P.setPropertyValue(t, "display", "none")
                        };
                        if (!s) {
                            if ("height" === i && "border-box" !== P.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                var c = t.offsetHeight - (parseFloat(P.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(P.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(P.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(P.getPropertyValue(t, "paddingBottom")) || 0);
                                return h(), c
                            }
                            if ("width" === i && "border-box" !== P.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                var u = t.offsetWidth - (parseFloat(P.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(P.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(P.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(P.getPropertyValue(t, "paddingRight")) || 0);
                                return h(), u
                            }
                        }
                        var p;
                        p = a(t) === r ? e.getComputedStyle(t, null) : a(t).computedStyle ? a(t).computedStyle : a(t).computedStyle = e.getComputedStyle(t, null), "borderColor" === i && (i = "borderTopColor"), n = 9 === d && "filter" === i ? p.getPropertyValue(i) : p[i], "" !== n && null !== n || (n = t.style[i]), h()
                    }
                    if ("auto" === n && /^(top|right|bottom|left)$/i.test(i)) {
                        var f = o(t, "position");
                        ("fixed" === f || "absolute" === f && /top|left/i.test(i)) && (n = $(t).position()[i] + "px")
                    }
                    return n
                }
                var l;
                if (P.Hooks.registered[i]) {
                    var h = i,
                        c = P.Hooks.getRoot(h);
                    n === r && (n = P.getPropertyValue(t, P.Names.prefixCheck(c)[0])), P.Normalizations.registered[c] && (n = P.Normalizations.registered[c]("extract", t, n)), l = P.Hooks.extractValue(h, n)
                } else if (P.Normalizations.registered[i]) {
                    var u, p;
                    u = P.Normalizations.registered[i]("name", t), "transform" !== u && (p = o(t, P.Names.prefixCheck(u)[0]), P.Values.isCSSNullValue(p) && P.Hooks.templates[i] && (p = P.Hooks.templates[i][1])), l = P.Normalizations.registered[i]("extract", t, p)
                }
                if (!/^[\d-]/.test(l)) {
                    var f = a(t);
                    if (f && f.isSVG && P.Names.SVGAttribute(i))
                        if (/^(height|width)$/i.test(i)) try {
                            l = t.getBBox()[i]
                        } catch (t) {
                            l = 0
                        } else l = t.getAttribute(i);
                        else l = o(t, P.Names.prefixCheck(i)[0])
                }
                return P.Values.isCSSNullValue(l) && (l = 0), T.debug >= 2 && console.log("Get " + i + ": " + l), l
            },
            setPropertyValue: function(t, i, r, n, s) {
                var o = i;
                if ("scroll" === i) s.container ? s.container["scroll" + s.direction] = r : "Left" === s.direction ? e.scrollTo(r, s.alternateValue) : e.scrollTo(s.alternateValue, r);
                else if (P.Normalizations.registered[i] && "transform" === P.Normalizations.registered[i]("name", t)) P.Normalizations.registered[i]("inject", t, r), o = "transform", r = a(t).transformCache[i];
                else {
                    if (P.Hooks.registered[i]) {
                        var l = i,
                            h = P.Hooks.getRoot(i);
                        n = n || P.getPropertyValue(t, h), r = P.Hooks.injectValue(l, r, n), i = h
                    }
                    if (P.Normalizations.registered[i] && (r = P.Normalizations.registered[i]("inject", t, r), i = P.Normalizations.registered[i]("name", t)), o = P.Names.prefixCheck(i)[0], d <= 8) try {
                        t.style[o] = r
                    } catch (t) {
                        T.debug && console.log("Browser does not support [" + r + "] for [" + o + "]")
                    } else {
                        var c = a(t);
                        c && c.isSVG && P.Names.SVGAttribute(i) ? t.setAttribute(i, r) : t.style[o] = r
                    }
                    T.debug >= 2 && console.log("Set " + i + " (" + o + "): " + r)
                }
                return [o, r]
            },
            flushTransformCache: function(t) {
                var e = "",
                    i = a(t);
                if ((d || T.State.isAndroid && !T.State.isChrome) && i && i.isSVG) {
                    var r = function(e) {
                            return parseFloat(P.getPropertyValue(t, e))
                        },
                        n = {
                            translate: [r("translateX"), r("translateY")],
                            skewX: [r("skewX")],
                            skewY: [r("skewY")],
                            scale: 1 !== r("scale") ? [r("scale"), r("scale")] : [r("scaleX"), r("scaleY")],
                            rotate: [r("rotateZ"), 0, 0]
                        };
                    $.each(a(t).transformCache, function(t) {
                        /^translate/i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"), n[t] && (e += t + "(" + n[t].join(" ") + ") ", delete n[t])
                    })
                } else {
                    var s, o;
                    $.each(a(t).transformCache, function(i) {
                        if (s = a(t).transformCache[i], "transformPerspective" === i) return o = s, !0;
                        9 === d && "rotateZ" === i && (i = "rotate"), e += i + s + " "
                    }), o && (e = "perspective" + o + " " + e)
                }
                P.setPropertyValue(t, "transform", e)
            }
        };
        P.Hooks.register(), P.Normalizations.register(), T.hook = function(t, e, i) {
            var n;
            return t = s(t), $.each(t, function(t, s) {
                if (a(s) === r && T.init(s), i === r) n === r && (n = P.getPropertyValue(s, e));
                else {
                    var o = P.setPropertyValue(s, e, i);
                    "transform" === o[0] && T.CSS.flushTransformCache(s), n = o
                }
            }), n
        };
        var O = function() {
            function t() {
                return d ? S.promise || null : g
            }

            function n(t, n) {
                function s(s) {
                    var c, f;
                    if (o.begin && 0 === C) try {
                        o.begin.call(v, v)
                    } catch (t) {
                        setTimeout(function() {
                            throw t
                        }, 1)
                    }
                    if ("scroll" === A) {
                        var d = /^x$/i.test(o.axis) ? "Left" : "Top",
                            g = parseFloat(o.offset) || 0,
                            m, b, O;
                        o.container ? y.isWrapped(o.container) || y.isNode(o.container) ? (o.container = o.container[0] || o.container, m = o.container["scroll" + d], O = m + $(t).position()[d.toLowerCase()] + g) : o.container = null : (m = T.State.scrollAnchor[T.State["scrollProperty" + d]], b = T.State.scrollAnchor[T.State["scrollProperty" + ("Left" === d ? "Top" : "Left")]], O = $(t).offset()[d.toLowerCase()] + g), l = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: m,
                                currentValue: m,
                                endValue: O,
                                unitType: "",
                                easing: o.easing,
                                scrollData: {
                                    container: o.container,
                                    direction: d,
                                    alternateValue: b
                                }
                            },
                            element: t
                        }, T.debug && console.log("tweensContainer (scroll): ", l.scroll, t)
                    } else if ("reverse" === A) {
                        if (!(c = a(t))) return;
                        if (!c.tweensContainer) return void $.dequeue(t, o.queue);
                        "none" === c.opts.display && (c.opts.display = "auto"), "hidden" === c.opts.visibility && (c.opts.visibility = "visible"), c.opts.loop = !1, c.opts.begin = null, c.opts.complete = null, w.easing || delete o.easing, w.duration || delete o.duration, o = $.extend({}, c.opts, o), f = $.extend(!0, {}, c ? c.tweensContainer : null);
                        for (var D in f)
                            if (f.hasOwnProperty(D) && "element" !== D) {
                                var E = f[D].startValue;
                                f[D].startValue = f[D].currentValue = f[D].endValue, f[D].endValue = E, y.isEmptyObject(w) || (f[D].easing = o.easing), T.debug && console.log("reverse tweensContainer (" + D + "): " + JSON.stringify(f[D]), t)
                            }
                        l = f
                    } else if ("start" === A) {
                        c = a(t), c && c.tweensContainer && !0 === c.isAnimating && (f = c.tweensContainer);
                        var R = function(e, i) {
                                var r, s, a;
                                return y.isFunction(e) && (e = e.call(t, n, k)), y.isArray(e) ? (r = e[0], !y.isArray(e[1]) && /^[\d-]/.test(e[1]) || y.isFunction(e[1]) || P.RegEx.isHex.test(e[1]) ? a = e[1] : y.isString(e[1]) && !P.RegEx.isHex.test(e[1]) && T.Easings[e[1]] || y.isArray(e[1]) ? (s = i ? e[1] : u(e[1], o.duration), a = e[2]) : a = e[1] || e[2]) : r = e, i || (s = s || o.easing), y.isFunction(r) && (r = r.call(t, n, k)), y.isFunction(a) && (a = a.call(t, n, k)), [r || 0, s, a]
                            },
                            M = function(n, s) {
                                var a = P.Hooks.getRoot(n),
                                    u = !1,
                                    p = s[0],
                                    d = s[1],
                                    g = s[2],
                                    m;
                                if (!(c && c.isSVG || "tween" === a || !1 !== P.Names.prefixCheck(a)[1] || P.Normalizations.registered[a] !== r)) return void(T.debug && console.log("Skipping [" + a + "] due to a lack of browser support."));
                                (o.display !== r && null !== o.display && "none" !== o.display || o.visibility !== r && "hidden" !== o.visibility) && /opacity|filter/.test(n) && !g && 0 !== p && (g = 0), o._cacheValues && f && f[n] ? (g === r && (g = f[n].endValue + f[n].unitType), u = c.rootPropertyValueCache[a]) : P.Hooks.registered[n] ? g === r ? (u = P.getPropertyValue(t, a), g = P.getPropertyValue(t, n, u)) : u = P.Hooks.templates[a][1] : g === r && (g = P.getPropertyValue(t, n));
                                var v, _, x, b = !1,
                                    w = function(t, e) {
                                        var i, r;
                                        return r = (e || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(t) {
                                            return i = t, ""
                                        }), i || (i = P.Values.getUnitType(t)), [r, i]
                                    };
                                if (g !== p && y.isString(g) && y.isString(p)) {
                                    m = "";
                                    var S = 0,
                                        O = 0,
                                        k = [],
                                        C = [],
                                        D = 0,
                                        E = 0,
                                        A = 0;
                                    for (g = P.Hooks.fixColors(g), p = P.Hooks.fixColors(p); S < g.length && O < p.length;) {
                                        var R = g[S],
                                            M = p[O];
                                        if (/[\d\.-]/.test(R) && /[\d\.-]/.test(M)) {
                                            for (var X = R, z = M, Y = ".", N = "."; ++S < g.length;) {
                                                if ((R = g[S]) === Y) Y = "..";
                                                else if (!/\d/.test(R)) break;
                                                X += R
                                            }
                                            for (; ++O < p.length;) {
                                                if ((M = p[O]) === N) N = "..";
                                                else if (!/\d/.test(M)) break;
                                                z += M
                                            }
                                            var I = P.Hooks.getUnit(g, S),
                                                L = P.Hooks.getUnit(p, O);
                                            if (S += I.length, O += L.length, I === L) X === z ? m += X + I : (m += "{" + k.length + (E ? "!" : "") + "}" + I, k.push(parseFloat(X)), C.push(parseFloat(z)));
                                            else {
                                                var V = parseFloat(X),
                                                    B = parseFloat(z);
                                                m += (D < 5 ? "calc" : "") + "(" + (V ? "{" + k.length + (E ? "!" : "") + "}" : "0") + I + " + " + (B ? "{" + (k.length + (V ? 1 : 0)) + (E ? "!" : "") + "}" : "0") + L + ")", V && (k.push(V), C.push(0)), B && (k.push(0), C.push(B))
                                            }
                                        } else {
                                            if (R !== M) {
                                                D = 0;
                                                break
                                            }
                                            m += R, S++, O++, 0 === D && "c" === R || 1 === D && "a" === R || 2 === D && "l" === R || 3 === D && "c" === R || D >= 4 && "(" === R ? D++ : (D && D < 5 || D >= 4 && ")" === R && --D < 5) && (D = 0), 0 === E && "r" === R || 1 === E && "g" === R || 2 === E && "b" === R || 3 === E && "a" === R || E >= 3 && "(" === R ? (3 === E && "a" === R && (A = 1), E++) : A && "," === R ? ++A > 3 && (E = A = 0) : (A && E < (A ? 5 : 4) || E >= (A ? 4 : 3) && ")" === R && --E < (A ? 5 : 4)) && (E = A = 0)
                                        }
                                    }
                                    S === g.length && O === p.length || (T.debug && console.error('Trying to pattern match mis-matched strings ["' + p + '", "' + g + '"]'), m = r), m && (k.length ? (T.debug && console.log('Pattern found "' + m + '" -> ', k, C, "[" + g + "," + p + "]"), g = k, p = C, _ = x = "") : m = r)
                                }
                                m || (v = w(n, g), g = v[0], x = v[1], v = w(n, p), p = v[0].replace(/^([+-\/*])=/, function(t, e) {
                                    return b = e, ""
                                }), _ = v[1], g = parseFloat(g) || 0, p = parseFloat(p) || 0, "%" === _ && (/^(fontSize|lineHeight)$/.test(n) ? (p /= 100, _ = "em") : /^scale/.test(n) ? (p /= 100, _ = "") : /(Red|Green|Blue)$/i.test(n) && (p = p / 100 * 255, _ = "")));
                                var j = function() {
                                    var r = {
                                            myParent: t.parentNode || i.body,
                                            position: P.getPropertyValue(t, "position"),
                                            fontSize: P.getPropertyValue(t, "fontSize")
                                        },
                                        n = r.position === F.lastPosition && r.myParent === F.lastParent,
                                        s = r.fontSize === F.lastFontSize;
                                    F.lastParent = r.myParent, F.lastPosition = r.position, F.lastFontSize = r.fontSize;
                                    var a = 100,
                                        o = {};
                                    if (s && n) o.emToPx = F.lastEmToPx, o.percentToPxWidth = F.lastPercentToPxWidth, o.percentToPxHeight = F.lastPercentToPxHeight;
                                    else {
                                        var l = c && c.isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                                        T.init(l), r.myParent.appendChild(l), $.each(["overflow", "overflowX", "overflowY"], function(t, e) {
                                            T.CSS.setPropertyValue(l, e, "hidden")
                                        }), T.CSS.setPropertyValue(l, "position", r.position), T.CSS.setPropertyValue(l, "fontSize", r.fontSize), T.CSS.setPropertyValue(l, "boxSizing", "content-box"), $.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(t, e) {
                                            T.CSS.setPropertyValue(l, e, "100%")
                                        }), T.CSS.setPropertyValue(l, "paddingLeft", "100em"), o.percentToPxWidth = F.lastPercentToPxWidth = (parseFloat(P.getPropertyValue(l, "width", null, !0)) || 1) / 100, o.percentToPxHeight = F.lastPercentToPxHeight = (parseFloat(P.getPropertyValue(l, "height", null, !0)) || 1) / 100, o.emToPx = F.lastEmToPx = (parseFloat(P.getPropertyValue(l, "paddingLeft")) || 1) / 100, r.myParent.removeChild(l)
                                    }
                                    return null === F.remToPx && (F.remToPx = parseFloat(P.getPropertyValue(i.body, "fontSize")) || 16), null === F.vwToPx && (F.vwToPx = parseFloat(e.innerWidth) / 100, F.vhToPx = parseFloat(e.innerHeight) / 100), o.remToPx = F.remToPx, o.vwToPx = F.vwToPx, o.vhToPx = F.vhToPx, T.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(o), t), o
                                };
                                if (/[\/*]/.test(b)) _ = x;
                                else if (x !== _ && 0 !== g)
                                    if (0 === p) _ = x;
                                    else {
                                        h = h || j();
                                        var q = /margin|padding|left|right|width|text|word|letter/i.test(n) || /X$/.test(n) || "x" === n ? "x" : "y";
                                        switch (x) {
                                            case "%":
                                                g *= "x" === q ? h.percentToPxWidth : h.percentToPxHeight;
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                g *= h[x + "ToPx"]
                                        }
                                        switch (_) {
                                            case "%":
                                                g *= 1 / ("x" === q ? h.percentToPxWidth : h.percentToPxHeight);
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                g *= 1 / h[_ + "ToPx"]
                                        }
                                    }
                                switch (b) {
                                    case "+":
                                        p = g + p;
                                        break;
                                    case "-":
                                        p = g - p;
                                        break;
                                    case "*":
                                        p *= g;
                                        break;
                                    case "/":
                                        p = g / p;
                                        break
                                }
                                l[n] = {
                                    rootPropertyValue: u,
                                    startValue: g,
                                    currentValue: g,
                                    endValue: p,
                                    unitType: _,
                                    easing: d
                                }, m && (l[n].pattern = m), T.debug && console.log("tweensContainer (" + n + "): " + JSON.stringify(l[n]), t)
                            };
                        for (var X in x)
                            if (x.hasOwnProperty(X)) {
                                var z = P.Names.camelCase(X),
                                    Y = R(x[X]);
                                if (_(P.Lists.colors, z)) {
                                    var I = Y[0],
                                        L = Y[1],
                                        V = Y[2];
                                    if (P.RegEx.isHex.test(I)) {
                                        for (var B = ["Red", "Green", "Blue"], j = P.Values.hexToRgb(I), q = V ? P.Values.hexToRgb(V) : r, H = 0; H < B.length; H++) {
                                            var W = [j[H]];
                                            L && W.push(L), q !== r && W.push(q[H]), M(z + B[H], W)
                                        }
                                        continue
                                    }
                                }
                                M(z, Y)
                            }
                        l.element = t
                    }
                    l.element && (P.Values.addClass(t, "velocity-animating"), N.push(l), c = a(t), c && ("" === o.queue && (c.tweensContainer = l, c.opts = o), c.isAnimating = !0), C === k - 1 ? (T.State.calls.push([N, v, o, null, S.resolver, null, 0]), !1 === T.State.isTicking && (T.State.isTicking = !0, p())) : C++)
                }
                var o = $.extend({}, T.defaults, w),
                    l = {},
                    h;
                switch (a(t) === r && T.init(t), parseFloat(o.delay) && !1 !== o.queue && $.queue(t, o.queue, function(e) {
                    T.velocityQueueEntryFlag = !0;
                    var i = T.State.delayedElements.count++;
                    T.State.delayedElements[i] = t;
                    var r = function(t) {
                        return function() {
                            T.State.delayedElements[t] = !1, e()
                        }
                    }(i);
                    a(t).delayBegin = (new Date).getTime(), a(t).delay = parseFloat(o.delay), a(t).delayTimer = {
                        setTimeout: setTimeout(e, parseFloat(o.delay)),
                        next: r
                    }
                }), o.duration.toString().toLowerCase()) {
                    case "fast":
                        o.duration = 200;
                        break;
                    case "normal":
                        o.duration = b;
                        break;
                    case "slow":
                        o.duration = 600;
                        break;
                    default:
                        o.duration = parseFloat(o.duration) || 1
                }
                if (!1 !== T.mock && (!0 === T.mock ? o.duration = o.delay = 1 : (o.duration *= parseFloat(T.mock) || 1, o.delay *= parseFloat(T.mock) || 1)), o.easing = u(o.easing, o.duration), o.begin && !y.isFunction(o.begin) && (o.begin = null), o.progress && !y.isFunction(o.progress) && (o.progress = null), o.complete && !y.isFunction(o.complete) && (o.complete = null), o.display !== r && null !== o.display && (o.display = o.display.toString().toLowerCase(), "auto" === o.display && (o.display = T.CSS.Values.getDisplayType(t))), o.visibility !== r && null !== o.visibility && (o.visibility = o.visibility.toString().toLowerCase()), o.mobileHA = o.mobileHA && T.State.isMobile && !T.State.isGingerbread, !1 === o.queue)
                    if (o.delay) {
                        var c = T.State.delayedElements.count++;
                        T.State.delayedElements[c] = t;
                        var f = function(t) {
                            return function() {
                                T.State.delayedElements[t] = !1, s()
                            }
                        }(c);
                        a(t).delayBegin = (new Date).getTime(), a(t).delay = parseFloat(o.delay), a(t).delayTimer = {
                            setTimeout: setTimeout(s, parseFloat(o.delay)),
                            next: f
                        }
                    } else s();
                else $.queue(t, o.queue, function(t, e) {
                    if (!0 === e) return S.promise && S.resolver(v), !0;
                    T.velocityQueueEntryFlag = !0, s(t)
                });
                "" !== o.queue && "fx" !== o.queue || "inprogress" === $.queue(t)[0] || $.dequeue(t)
            }
            var h, c = arguments[0] && (arguments[0].p || $.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || y.isString(arguments[0].properties)),
                d, g, m, v, x, w;
            y.isWrapped(this) ? (d = !1, m = 0, v = this, g = this) : (d = !0, m = 1, v = c ? arguments[0].elements || arguments[0].e : arguments[0]);
            var S = {
                promise: null,
                resolver: null,
                rejecter: null
            };
            if (d && T.Promise && (S.promise = new T.Promise(function(t, e) {
                    S.resolver = t, S.rejecter = e
                })), c ? (x = arguments[0].properties || arguments[0].p, w = arguments[0].options || arguments[0].o) : (x = arguments[m], w = arguments[m + 1]), !(v = s(v))) return void(S.promise && (x && w && !1 === w.promiseRejectEmpty ? S.resolver() : S.rejecter()));
            var k = v.length,
                C = 0;
            if (!/^(stop|finish|finishAll|pause|resume)$/i.test(x) && !$.isPlainObject(w)) {
                var D = m + 1;
                w = {};
                for (var E = D; E < arguments.length; E++) y.isArray(arguments[E]) || !/^(fast|normal|slow)$/i.test(arguments[E]) && !/^\d/.test(arguments[E]) ? y.isString(arguments[E]) || y.isArray(arguments[E]) ? w.easing = arguments[E] : y.isFunction(arguments[E]) && (w.complete = arguments[E]) : w.duration = arguments[E]
            }
            var A;
            switch (x) {
                case "scroll":
                    A = "scroll";
                    break;
                case "reverse":
                    A = "reverse";
                    break;
                case "pause":
                    var R = (new Date).getTime();
                    return $.each(v, function(t, e) {
                        o(e, R)
                    }), $.each(T.State.calls, function(t, e) {
                        var i = !1;
                        e && $.each(e[1], function(t, n) {
                            var s = w === r ? "" : w;
                            return !0 !== s && e[2].queue !== s && (w !== r || !1 !== e[2].queue) || ($.each(v, function(t, r) {
                                if (r === n) return e[5] = {
                                    resume: !1
                                }, i = !0, !1
                            }), !i && void 0)
                        })
                    }), t();
                case "resume":
                    return $.each(v, function(t, e) {
                        l(e, R)
                    }), $.each(T.State.calls, function(t, e) {
                        var i = !1;
                        e && $.each(e[1], function(t, n) {
                            var s = w === r ? "" : w;
                            return !0 !== s && e[2].queue !== s && (w !== r || !1 !== e[2].queue) || (!e[5] || ($.each(v, function(t, r) {
                                if (r === n) return e[5].resume = !0, i = !0, !1
                            }), !i && void 0))
                        })
                    }), t();
                case "finish":
                case "finishAll":
                case "stop":
                    $.each(v, function(t, e) {
                        a(e) && a(e).delayTimer && (clearTimeout(a(e).delayTimer.setTimeout), a(e).delayTimer.next && a(e).delayTimer.next(), delete a(e).delayTimer), "finishAll" !== x || !0 !== w && !y.isString(w) || ($.each($.queue(e, y.isString(w) ? w : ""), function(t, e) {
                            y.isFunction(e) && e()
                        }), $.queue(e, y.isString(w) ? w : "", []))
                    });
                    var M = [];
                    return $.each(T.State.calls, function(t, e) {
                        e && $.each(e[1], function(i, n) {
                            var s = w === r ? "" : w;
                            if (!0 !== s && e[2].queue !== s && (w !== r || !1 !== e[2].queue)) return !0;
                            $.each(v, function(i, r) {
                                if (r === n)
                                    if ((!0 === w || y.isString(w)) && ($.each($.queue(r, y.isString(w) ? w : ""), function(t, e) {
                                            y.isFunction(e) && e(null, !0)
                                        }), $.queue(r, y.isString(w) ? w : "", [])), "stop" === x) {
                                        var o = a(r);
                                        o && o.tweensContainer && !1 !== s && $.each(o.tweensContainer, function(t, e) {
                                            e.endValue = e.currentValue
                                        }), M.push(t)
                                    } else "finish" !== x && "finishAll" !== x || (e[2].duration = 1)
                            })
                        })
                    }), "stop" === x && ($.each(M, function(t, e) {
                        f(e, !0)
                    }), S.promise && S.resolver(v)), t();
                default:
                    if (!$.isPlainObject(x) || y.isEmptyObject(x)) {
                        if (y.isString(x) && T.Redirects[x]) {
                            h = $.extend({}, w);
                            var X = h.duration,
                                z = h.delay || 0;
                            return !0 === h.backwards && (v = $.extend(!0, [], v).reverse()), $.each(v, function(t, e) {
                                parseFloat(h.stagger) ? h.delay = z + parseFloat(h.stagger) * t : y.isFunction(h.stagger) && (h.delay = z + h.stagger.call(e, t, k)), h.drag && (h.duration = parseFloat(X) || (/^(callout|transition)/.test(x) ? 1e3 : b), h.duration = Math.max(h.duration * (h.backwards ? 1 - t / k : (t + 1) / k), .75 * h.duration, 200)), T.Redirects[x].call(e, e, h || {}, t, k, v, S.promise ? S : r)
                            }), t()
                        }
                        var Y = "Velocity: First argument (" + x + ") was not a property map, a known action, or a registered redirect. Aborting.";
                        return S.promise ? S.rejecter(new Error(Y)) : e.console && console.log(Y), t()
                    }
                    A = "start"
            }
            var F = {
                    lastParent: null,
                    lastPosition: null,
                    lastFontSize: null,
                    lastPercentToPxWidth: null,
                    lastPercentToPxHeight: null,
                    lastEmToPx: null,
                    remToPx: null,
                    vwToPx: null,
                    vhToPx: null
                },
                N = [];
            $.each(v, function(t, e) {
                y.isNode(e) && n(e, t)
            }), h = $.extend({}, T.defaults, w), h.loop = parseInt(h.loop, 10);
            var I = 2 * h.loop - 1;
            if (h.loop)
                for (var L = 0; L < I; L++) {
                    var V = {
                        delay: h.delay,
                        progress: h.progress
                    };
                    L === I - 1 && (V.display = h.display, V.visibility = h.visibility, V.complete = h.complete), O(v, "reverse", V)
                }
            return t()
        };
        T = $.extend(O, T), T.animate = O;
        var k = e.requestAnimationFrame || g;
        if (!T.State.isMobile && i.hidden !== r) {
            var C = function() {
                i.hidden ? (k = function(t) {
                    return setTimeout(function() {
                        t(!0)
                    }, 16)
                }, p()) : k = e.requestAnimationFrame || g
            };
            C(), i.addEventListener("visibilitychange", C)
        }
        return t.Velocity = T, t !== e && (t.fn.velocity = O, t.fn.velocity.defaults = T.defaults), $.each(["Down", "Up"], function(t, e) {
            T.Redirects["slide" + e] = function(t, i, n, s, a, o) {
                var l = $.extend({}, i),
                    h = l.begin,
                    c = l.complete,
                    u = {},
                    p = {
                        height: "",
                        marginTop: "",
                        marginBottom: "",
                        paddingTop: "",
                        paddingBottom: ""
                    };
                l.display === r && (l.display = "Down" === e ? "inline" === T.CSS.Values.getDisplayType(t) ? "inline-block" : "block" : "none"), l.begin = function() {
                    0 === n && h && h.call(a, a);
                    for (var i in p)
                        if (p.hasOwnProperty(i)) {
                            u[i] = t.style[i];
                            var r = P.getPropertyValue(t, i);
                            p[i] = "Down" === e ? [r, 0] : [0, r]
                        }
                    u.overflow = t.style.overflow, t.style.overflow = "hidden"
                }, l.complete = function() {
                    for (var e in u) u.hasOwnProperty(e) && (t.style[e] = u[e]);
                    n === s - 1 && (c && c.call(a, a), o && o.resolver(a))
                }, T(t, p, l)
            }
        }), $.each(["In", "Out"], function(t, e) {
            T.Redirects["fade" + e] = function(t, i, n, s, a, o) {
                var l = $.extend({}, i),
                    h = l.complete,
                    c = {
                        opacity: "In" === e ? 1 : 0
                    };
                0 !== n && (l.begin = null), l.complete = n !== s - 1 ? null : function() {
                    h && h.call(a, a), o && o.resolver(a)
                }, l.display === r && (l.display = "In" === e ? "auto" : "none"), T(this, c, l)
            }
        }), T
    }(window.jQuery || window.Zepto || window, window, window ? window.document : void 0)
}), /* VelocityJS.org UI Pack (5.2.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License. Portions copyright Daniel Eden, Christian Pucci. */
function(t) {
    "use strict";
    "function" == typeof require && "object" == typeof exports ? module.exports = t() : "function" == typeof define && define.amd ? define(["velocity"], t) : t()
}(function() {
    "use strict";
    return function(t, e, i, r) {
        function n(t, e) {
            var i = [];
            return !(!t || !e) && ($.each([t, e], function(t, e) {
                var r = [];
                $.each(e, function(t, e) {
                    for (; e.toString().length < 5;) e = "0" + e;
                    r.push(e)
                }), i.push(r.join(""))
            }), parseFloat(i[0]) > parseFloat(i[1]))
        }
        var s = t.Velocity;
        if (!s || !s.Utilities) return void(e.console && console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));
        var $ = s.Utilities;
        if (n({
                major: 1,
                minor: 1,
                patch: 0
            }, s.version)) {
            var a = "Velocity UI Pack: You need to update Velocity (velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
            throw alert(a), new Error(a)
        }
        s.RegisterEffect = s.RegisterUI = function(t, e) {
            function i(t, e, i, r) {
                var n = 0,
                    a;
                $.each(t.nodeType ? [t] : t, function(t, e) {
                    r && (i += t * r), a = e.parentNode;
                    var o = ["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"];
                    "border-box" === s.CSS.getPropertyValue(e, "boxSizing").toString().toLowerCase() && (o = ["height"]), $.each(o, function(t, i) {
                        n += parseFloat(s.CSS.getPropertyValue(e, i))
                    })
                }), s.animate(a, {
                    height: ("In" === e ? "+" : "-") + "=" + n
                }, {
                    queue: !1,
                    easing: "ease-in-out",
                    duration: i * ("In" === e ? .6 : 1)
                })
            }
            return s.Redirects[t] = function(r, n, a, o, l, h, c) {
                var u = a === o - 1,
                    p = 0;
                c = c || e.loop, "function" == typeof e.defaultDuration ? e.defaultDuration = e.defaultDuration.call(l, l) : e.defaultDuration = parseFloat(e.defaultDuration);
                for (var f = 0; f < e.calls.length; f++) "number" == typeof(_ = e.calls[f][1]) && (p += _);
                var d = p >= 1 ? 0 : e.calls.length ? (1 - p) / e.calls.length : 1;
                for (f = 0; f < e.calls.length; f++) {
                    var g = e.calls[f],
                        m = g[0],
                        v = 1e3,
                        _ = g[1],
                        y = g[2] || {},
                        x = {};
                    if (void 0 !== n.duration ? v = n.duration : void 0 !== e.defaultDuration && (v = e.defaultDuration), x.duration = v * ("number" == typeof _ ? _ : d), x.queue = n.queue || "", x.easing = y.easing || "ease", x.delay = parseFloat(y.delay) || 0, x.loop = !e.loop && y.loop, x._cacheValues = y._cacheValues || !0, 0 === f) {
                        if (x.delay += parseFloat(n.delay) || 0, 0 === a && (x.begin = function() {
                                n.begin && n.begin.call(l, l);
                                var e = t.match(/(In|Out)$/);
                                e && "In" === e[0] && void 0 !== m.opacity && $.each(l.nodeType ? [l] : l, function(t, e) {
                                    s.CSS.setPropertyValue(e, "opacity", 0)
                                }), n.animateParentHeight && e && i(l, e[0], v + x.delay, n.stagger)
                            }), null !== n.display)
                            if (void 0 !== n.display && "none" !== n.display) x.display = n.display;
                            else if (/In$/.test(t)) {
                            var b = s.CSS.Values.getDisplayType(r);
                            x.display = "inline" === b ? "inline-block" : b
                        }
                        n.visibility && "hidden" !== n.visibility && (x.visibility = n.visibility)
                    }
                    if (f === e.calls.length - 1) {
                        var w = function() {
                            void 0 !== n.display && "none" !== n.display || !/Out$/.test(t) || $.each(l.nodeType ? [l] : l, function(t, e) {
                                s.CSS.setPropertyValue(e, "display", "none")
                            }), n.complete && n.complete.call(l, l), h && h.resolver(l || r)
                        };
                        x.complete = function() {
                            if (c && s.Redirects[t](r, n, a, o, l, h, !0 === c || Math.max(0, c - 1)), e.reset) {
                                for (var i in e.reset)
                                    if (e.reset.hasOwnProperty(i)) {
                                        var p = e.reset[i];
                                        void 0 !== s.CSS.Hooks.registered[i] || "string" != typeof p && "number" != typeof p || (e.reset[i] = [e.reset[i], e.reset[i]])
                                    }
                                var f = {
                                    duration: 0,
                                    queue: !1
                                };
                                u && (f.complete = w), s.animate(r, e.reset, f)
                            } else u && w()
                        }, "hidden" === n.visibility && (x.visibility = n.visibility)
                    }
                    s.animate(r, m, x)
                }
            }, s
        }, s.RegisterEffect.packagedEffects = {
            "callout.bounce": {
                defaultDuration: 550,
                calls: [
                    [{
                        translateY: -30
                    }, .25],
                    [{
                        translateY: 0
                    }, .125],
                    [{
                        translateY: -15
                    }, .125],
                    [{
                        translateY: 0
                    }, .25]
                ]
            },
            "callout.shake": {
                defaultDuration: 800,
                calls: [
                    [{
                        translateX: -11
                    }],
                    [{
                        translateX: 11
                    }],
                    [{
                        translateX: -11
                    }],
                    [{
                        translateX: 11
                    }],
                    [{
                        translateX: -11
                    }],
                    [{
                        translateX: 11
                    }],
                    [{
                        translateX: -11
                    }],
                    [{
                        translateX: 0
                    }]
                ]
            },
            "callout.flash": {
                defaultDuration: 1100,
                calls: [
                    [{
                        opacity: [0, "easeInOutQuad", 1]
                    }],
                    [{
                        opacity: [1, "easeInOutQuad"]
                    }],
                    [{
                        opacity: [0, "easeInOutQuad"]
                    }],
                    [{
                        opacity: [1, "easeInOutQuad"]
                    }]
                ]
            },
            "callout.pulse": {
                defaultDuration: 825,
                calls: [
                    [{
                        scaleX: 1.1,
                        scaleY: 1.1
                    }, .5, {
                        easing: "easeInExpo"
                    }],
                    [{
                        scaleX: 1,
                        scaleY: 1
                    }, .5]
                ]
            },
            "callout.swing": {
                defaultDuration: 950,
                calls: [
                    [{
                        rotateZ: 15
                    }],
                    [{
                        rotateZ: -10
                    }],
                    [{
                        rotateZ: 5
                    }],
                    [{
                        rotateZ: -5
                    }],
                    [{
                        rotateZ: 0
                    }]
                ]
            },
            "callout.tada": {
                defaultDuration: 1e3,
                calls: [
                    [{
                        scaleX: .9,
                        scaleY: .9,
                        rotateZ: -3
                    }, .1],
                    [{
                        scaleX: 1.1,
                        scaleY: 1.1,
                        rotateZ: 3
                    }, .1],
                    [{
                        scaleX: 1.1,
                        scaleY: 1.1,
                        rotateZ: -3
                    }, .1],
                    ["reverse", .125],
                    ["reverse", .125],
                    ["reverse", .125],
                    ["reverse", .125],
                    ["reverse", .125],
                    [{
                        scaleX: 1,
                        scaleY: 1,
                        rotateZ: 0
                    }, .2]
                ]
            },
            "transition.fadeIn": {
                defaultDuration: 500,
                calls: [
                    [{
                        opacity: [1, 0]
                    }]
                ]
            },
            "transition.fadeOut": {
                defaultDuration: 500,
                calls: [
                    [{
                        opacity: [0, 1]
                    }]
                ]
            },
            "transition.flipXIn": {
                defaultDuration: 700,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [800, 800],
                        rotateY: [0, -55]
                    }]
                ],
                reset: {
                    transformPerspective: 0
                }
            },
            "transition.flipXOut": {
                defaultDuration: 700,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformPerspective: [800, 800],
                        rotateY: 55
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    rotateY: 0
                }
            },
            "transition.flipYIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [800, 800],
                        rotateX: [0, -45]
                    }]
                ],
                reset: {
                    transformPerspective: 0
                }
            },
            "transition.flipYOut": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformPerspective: [800, 800],
                        rotateX: 25
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    rotateX: 0
                }
            },
            "transition.flipBounceXIn": {
                defaultDuration: 900,
                calls: [
                    [{
                        opacity: [.725, 0],
                        transformPerspective: [400, 400],
                        rotateY: [-10, 90]
                    }, .5],
                    [{
                        opacity: .8,
                        rotateY: 10
                    }, .25],
                    [{
                        opacity: 1,
                        rotateY: 0
                    }, .25]
                ],
                reset: {
                    transformPerspective: 0
                }
            },
            "transition.flipBounceXOut": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [.9, 1],
                        transformPerspective: [400, 400],
                        rotateY: -10
                    }],
                    [{
                        opacity: 0,
                        rotateY: 90
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    rotateY: 0
                }
            },
            "transition.flipBounceYIn": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [.725, 0],
                        transformPerspective: [400, 400],
                        rotateX: [-10, 90]
                    }, .5],
                    [{
                        opacity: .8,
                        rotateX: 10
                    }, .25],
                    [{
                        opacity: 1,
                        rotateX: 0
                    }, .25]
                ],
                reset: {
                    transformPerspective: 0
                }
            },
            "transition.flipBounceYOut": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [.9, 1],
                        transformPerspective: [400, 400],
                        rotateX: -15
                    }],
                    [{
                        opacity: 0,
                        rotateX: 90
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    rotateX: 0
                }
            },
            "transition.swoopIn": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformOriginX: ["100%", "50%"],
                        transformOriginY: ["100%", "100%"],
                        scaleX: [1, 0],
                        scaleY: [1, 0],
                        translateX: [0, -700],
                        translateZ: 0
                    }]
                ],
                reset: {
                    transformOriginX: "50%",
                    transformOriginY: "50%"
                }
            },
            "transition.swoopOut": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformOriginX: ["50%", "100%"],
                        transformOriginY: ["100%", "100%"],
                        scaleX: 0,
                        scaleY: 0,
                        translateX: -700,
                        translateZ: 0
                    }]
                ],
                reset: {
                    transformOriginX: "50%",
                    transformOriginY: "50%",
                    scaleX: 1,
                    scaleY: 1,
                    translateX: 0
                }
            },
            "transition.whirlIn": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: [1, 0],
                        scaleY: [1, 0],
                        rotateY: [0, 160]
                    }, 1, {
                        easing: "easeInOutSine"
                    }]
                ]
            },
            "transition.whirlOut": {
                defaultDuration: 750,
                calls: [
                    [{
                        opacity: [0, "easeInOutQuint", 1],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: 0,
                        scaleY: 0,
                        rotateY: 160
                    }, 1, {
                        easing: "swing"
                    }]
                ],
                reset: {
                    scaleX: 1,
                    scaleY: 1,
                    rotateY: 0
                }
            },
            "transition.shrinkIn": {
                defaultDuration: 750,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: [1, 1.5],
                        scaleY: [1, 1.5],
                        translateZ: 0
                    }]
                ]
            },
            "transition.shrinkOut": {
                defaultDuration: 600,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: 1.3,
                        scaleY: 1.3,
                        translateZ: 0
                    }]
                ],
                reset: {
                    scaleX: 1,
                    scaleY: 1
                }
            },
            "transition.expandIn": {
                defaultDuration: 700,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: [1, .625],
                        scaleY: [1, .625],
                        translateZ: 0
                    }]
                ]
            },
            "transition.expandOut": {
                defaultDuration: 700,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: .5,
                        scaleY: .5,
                        translateZ: 0
                    }]
                ],
                reset: {
                    scaleX: 1,
                    scaleY: 1
                }
            },
            "transition.bounceIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        scaleX: [1.05, .3],
                        scaleY: [1.05, .3]
                    }, .35],
                    [{
                        scaleX: .9,
                        scaleY: .9,
                        translateZ: 0
                    }, .2],
                    [{
                        scaleX: 1,
                        scaleY: 1
                    }, .45]
                ]
            },
            "transition.bounceOut": {
                defaultDuration: 800,
                calls: [
                    [{
                        scaleX: .95,
                        scaleY: .95
                    }, .35],
                    [{
                        scaleX: 1.1,
                        scaleY: 1.1,
                        translateZ: 0
                    }, .35],
                    [{
                        opacity: [0, 1],
                        scaleX: .3,
                        scaleY: .3
                    }, .3]
                ],
                reset: {
                    scaleX: 1,
                    scaleY: 1
                }
            },
            "transition.bounceUpIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateY: [-30, 1e3]
                    }, .6, {
                        easing: "easeOutCirc"
                    }],
                    [{
                        translateY: 10
                    }, .2],
                    [{
                        translateY: 0
                    }, .2]
                ]
            },
            "transition.bounceUpOut": {
                defaultDuration: 1e3,
                calls: [
                    [{
                        translateY: 20
                    }, .2],
                    [{
                        opacity: [0, "easeInCirc", 1],
                        translateY: -1e3
                    }, .8]
                ],
                reset: {
                    translateY: 0
                }
            },
            "transition.bounceDownIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateY: [30, -1e3]
                    }, .6, {
                        easing: "easeOutCirc"
                    }],
                    [{
                        translateY: -10
                    }, .2],
                    [{
                        translateY: 0
                    }, .2]
                ]
            },
            "transition.bounceDownOut": {
                defaultDuration: 1e3,
                calls: [
                    [{
                        translateY: -20
                    }, .2],
                    [{
                        opacity: [0, "easeInCirc", 1],
                        translateY: 1e3
                    }, .8]
                ],
                reset: {
                    translateY: 0
                }
            },
            "transition.bounceLeftIn": {
                defaultDuration: 750,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateX: [30, -1250]
                    }, .6, {
                        easing: "easeOutCirc"
                    }],
                    [{
                        translateX: -10
                    }, .2],
                    [{
                        translateX: 0
                    }, .2]
                ]
            },
            "transition.bounceLeftOut": {
                defaultDuration: 750,
                calls: [
                    [{
                        translateX: 30
                    }, .2],
                    [{
                        opacity: [0, "easeInCirc", 1],
                        translateX: -1250
                    }, .8]
                ],
                reset: {
                    translateX: 0
                }
            },
            "transition.bounceRightIn": {
                defaultDuration: 750,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateX: [-30, 1250]
                    }, .6, {
                        easing: "easeOutCirc"
                    }],
                    [{
                        translateX: 10
                    }, .2],
                    [{
                        translateX: 0
                    }, .2]
                ]
            },
            "transition.bounceRightOut": {
                defaultDuration: 750,
                calls: [
                    [{
                        translateX: -30
                    }, .2],
                    [{
                        opacity: [0, "easeInCirc", 1],
                        translateX: 1250
                    }, .8]
                ],
                reset: {
                    translateX: 0
                }
            },
            "transition.slideUpIn": {
                defaultDuration: 900,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateY: [0, 20],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideUpOut": {
                defaultDuration: 900,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateY: -20,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateY: 0
                }
            },
            "transition.slideDownIn": {
                defaultDuration: 900,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateY: [0, -20],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideDownOut": {
                defaultDuration: 900,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateY: 20,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateY: 0
                }
            },
            "transition.slideLeftIn": {
                defaultDuration: 1e3,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateX: [0, -20],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideLeftOut": {
                defaultDuration: 1050,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateX: -20,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateX: 0
                }
            },
            "transition.slideRightIn": {
                defaultDuration: 1e3,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateX: [0, 20],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideRightOut": {
                defaultDuration: 1050,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateX: 20,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateX: 0
                }
            },
            "transition.slideUpBigIn": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateY: [0, 75],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideUpBigOut": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateY: -75,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateY: 0
                }
            },
            "transition.slideDownBigIn": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateY: [0, -75],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideDownBigOut": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateY: 75,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateY: 0
                }
            },
            "transition.slideLeftBigIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateX: [0, -75],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideLeftBigOut": {
                defaultDuration: 750,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateX: -75,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateX: 0
                }
            },
            "transition.slideRightBigIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        translateX: [0, 75],
                        translateZ: 0
                    }]
                ]
            },
            "transition.slideRightBigOut": {
                defaultDuration: 750,
                calls: [
                    [{
                        opacity: [0, 1],
                        translateX: 75,
                        translateZ: 0
                    }]
                ],
                reset: {
                    translateX: 0
                }
            },
            "transition.perspectiveUpIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [800, 800],
                        transformOriginX: [0, 0],
                        transformOriginY: ["100%", "100%"],
                        rotateX: [0, -180]
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%"
                }
            },
            "transition.perspectiveUpOut": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformPerspective: [800, 800],
                        transformOriginX: [0, 0],
                        transformOriginY: ["100%", "100%"],
                        rotateX: -180
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%",
                    rotateX: 0
                }
            },
            "transition.perspectiveDownIn": {
                defaultDuration: 800,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [800, 800],
                        transformOriginX: [0, 0],
                        transformOriginY: [0, 0],
                        rotateX: [0, 180]
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%"
                }
            },
            "transition.perspectiveDownOut": {
                defaultDuration: 850,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformPerspective: [800, 800],
                        transformOriginX: [0, 0],
                        transformOriginY: [0, 0],
                        rotateX: 180
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%",
                    rotateX: 0
                }
            },
            "transition.perspectiveLeftIn": {
                defaultDuration: 950,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [2e3, 2e3],
                        transformOriginX: [0, 0],
                        transformOriginY: [0, 0],
                        rotateY: [0, -180]
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%"
                }
            },
            "transition.perspectiveLeftOut": {
                defaultDuration: 950,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformPerspective: [2e3, 2e3],
                        transformOriginX: [0, 0],
                        transformOriginY: [0, 0],
                        rotateY: -180
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%",
                    rotateY: 0
                }
            },
            "transition.perspectiveRightIn": {
                defaultDuration: 950,
                calls: [
                    [{
                        opacity: [1, 0],
                        transformPerspective: [2e3, 2e3],
                        transformOriginX: ["100%", "100%"],
                        transformOriginY: [0, 0],
                        rotateY: [0, 180]
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%"
                }
            },
            "transition.perspectiveRightOut": {
                defaultDuration: 950,
                calls: [
                    [{
                        opacity: [0, 1],
                        transformPerspective: [2e3, 2e3],
                        transformOriginX: ["100%", "100%"],
                        transformOriginY: [0, 0],
                        rotateY: 180
                    }]
                ],
                reset: {
                    transformPerspective: 0,
                    transformOriginX: "50%",
                    transformOriginY: "50%",
                    rotateY: 0
                }
            }
        };
        for (var o in s.RegisterEffect.packagedEffects) s.RegisterEffect.packagedEffects.hasOwnProperty(o) && s.RegisterEffect(o, s.RegisterEffect.packagedEffects[o]);
        s.RunSequence = function(t) {
            var e = $.extend(!0, [], t);
            e.length > 1 && ($.each(e.reverse(), function(t, i) {
                var r = e[t + 1];
                if (r) {
                    var n = i.o || i.options,
                        a = r.o || r.options,
                        o = n && !1 === n.sequenceQueue ? "begin" : "complete",
                        l = a && a[o],
                        h = {};
                    h[o] = function() {
                        var t = r.e || r.elements,
                            e = t.nodeType ? [t] : t;
                        l && l.call(e, e), s(i)
                    }, r.o ? r.o = $.extend({}, a, h) : r.options = $.extend({}, a, h)
                }
            }), e.reverse()), s(e[0])
        }
    }(window.jQuery || window.Zepto || window, window, window ? window.document : void 0)
});
/*!
 * VERSION: 1.19.1
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var r = function(t) {
                        var e = [],
                            i = t.length,
                            r;
                        for (r = 0; r !== i; e.push(t[r++]));
                        return e
                    },
                    n = function(t, e, i) {
                        var r = t.cycle,
                            n, s;
                        for (n in r) s = r[n], t[n] = "function" == typeof s ? s(i, e[i]) : s[i % s.length];
                        delete t.cycle
                    },
                    s = function(t, e, r) {
                        i.call(this, t, e, r), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = s.prototype.render
                    },
                    a = 1e-10,
                    o = i._internals,
                    l = o.isSelector,
                    h = o.isArray,
                    c = s.prototype = i.to({}, .1, {}),
                    u = [];
                s.version = "1.19.1", c.constructor = s, c.kill()._gc = !1, s.killTweensOf = s.killDelayedCallsTo = i.killTweensOf, s.getTweensOf = i.getTweensOf, s.lagSmoothing = i.lagSmoothing, s.ticker = i.ticker, s.render = i.render, c.invalidate = function() {
                    return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, c.updateTo = function(t, e) {
                    var r = this.ratio,
                        n = this.vars.immediateRender || t.immediateRender,
                        s;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (s in t) this.vars[s] = t[s];
                    if (this._initted || n)
                        if (e) this._initted = !1, n && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var a = this._totalTime;
                        this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
                    } else if (this._initted = !1, this._init(), this._time > 0 || n)
                        for (var o = 1 / (1 - r), l = this._firstPT, h; l;) h = l.s + l.c, l.c *= o, l.s = h - l.c, l = l._next;
                    return this
                }, c.render = function(t, e, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var r = this._dirty ? this.totalDuration() : this._totalDuration,
                        n = this._time,
                        s = this._totalTime,
                        a = this._cycle,
                        l = this._duration,
                        h = this._rawPrevTime,
                        c, u, p, f, d, g, m, v;
                    if (t >= r - 1e-7 && t >= 0 ? (this._totalTime = r, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (c = !0, u = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (h < 0 || t <= 0 && t >= -1e-7 || 1e-10 === h && "isPause" !== this.data) && h !== t && (i = !0, h > 1e-10 && (u = "onReverseComplete")), this._rawPrevTime = v = !e || t || h === t ? t : 1e-10)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== s || 0 === l && h > 0) && (u = "onReverseComplete", c = this._reversed), t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (i = !0), this._rawPrevTime = v = !e || t || h === t ? t : 1e-10)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (f = l + this._repeatDelay, this._cycle = this._totalTime / f >> 0, 0 !== this._cycle && this._cycle === this._totalTime / f && s <= t && this._cycle--, this._time = this._totalTime - this._cycle * f, this._yoyo && 0 != (1 & this._cycle) && (this._time = l - this._time), this._time > l ? this._time = l : this._time < 0 && (this._time = 0)), this._easeType ? (d = this._time / l, g = this._easeType, m = this._easePower, (1 === g || 3 === g && d >= .5) && (d = 1 - d), 3 === g && (d *= 2), 1 === m ? d *= d : 2 === m ? d *= d * d : 3 === m ? d *= d * d * d : 4 === m && (d *= d * d * d * d), 1 === g ? this.ratio = 1 - d : 2 === g ? this.ratio = d : this._time / l < .5 ? this.ratio = d / 2 : this.ratio = 1 - d / 2) : this.ratio = this._ease.getRatio(this._time / l)), n === this._time && !i && a === this._cycle) return void(s !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = n, this._totalTime = s, this._rawPrevTime = h, this._cycle = a, o.lazyTweens.push(this), void(this._lazy = [t, e]);
                        this._time && !c ? this.ratio = this._ease.getRatio(this._time / l) : c && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== n && t >= 0 && (this._active = !0), 0 === s && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : u || (u = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== l || e || this._callback("onStart"))), p = this._firstPT; p;) p.f ? p.t[p.p](p.c * this.ratio + p.s) : p.t[p.p] = p.c * this.ratio + p.s, p = p._next;
                    this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== s || u) && this._callback("onUpdate")), this._cycle !== a && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), u && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), c && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[u] && this._callback(u), 0 === l && 1e-10 === this._rawPrevTime && 1e-10 !== v && (this._rawPrevTime = 0)))
                }, s.to = function(t, e, i) {
                    return new s(t, e, i)
                }, s.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new s(t, e, i)
                }, s.fromTo = function(t, e, i, r) {
                    return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, new s(t, e, r)
                }, s.staggerTo = s.allTo = function(t, e, a, o, c, p, f) {
                    o = o || 0;
                    var d = 0,
                        g = [],
                        m = function() {
                            a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments), c.apply(f || a.callbackScope || this, p || u)
                        },
                        v = a.cycle,
                        _ = a.startAt && a.startAt.cycle,
                        y, x, b, w;
                    for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = r(t))), t = t || [], o < 0 && (t = r(t), t.reverse(), o *= -1), y = t.length - 1, b = 0; b <= y; b++) {
                        x = {};
                        for (w in a) x[w] = a[w];
                        if (v && (n(x, t, b), null != x.duration && (e = x.duration, delete x.duration)), _) {
                            _ = x.startAt = {};
                            for (w in a.startAt) _[w] = a.startAt[w];
                            n(x.startAt, t, b)
                        }
                        x.delay = d + (x.delay || 0), b === y && c && (x.onComplete = m), g[b] = new s(t[b], e, x), d += o
                    }
                    return g
                }, s.staggerFrom = s.allFrom = function(t, e, i, r, n, a, o) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, s.staggerTo(t, e, i, r, n, a, o)
                }, s.staggerFromTo = s.allFromTo = function(t, e, i, r, n, a, o, l) {
                    return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, s.staggerTo(t, e, r, n, a, o, l)
                }, s.delayedCall = function(t, e, i, r, n) {
                    return new s(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        callbackScope: r,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        useFrames: n,
                        overwrite: 0
                    })
                }, s.set = function(t, e) {
                    return new s(t, 0, e)
                }, s.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var p = function(t, e) {
                        for (var r = [], n = 0, s = t._first; s;) s instanceof i ? r[n++] = s : (e && (r[n++] = s), r = r.concat(p(s, e)), n = r.length), s = s._next;
                        return r
                    },
                    f = s.getAllTweens = function(e) {
                        return p(t._rootTimeline, e).concat(p(t._rootFramesTimeline, e))
                    };
                s.killAll = function(t, i, r, n) {
                    null == i && (i = !0), null == r && (r = !0);
                    var s = f(0 != n),
                        a = s.length,
                        o = i && r && n,
                        l, h, c;
                    for (c = 0; c < a; c++) h = s[c], (o || h instanceof e || (l = h.target === h.vars.onComplete) && r || i && !l) && (t ? h.totalTime(h._reversed ? 0 : h.totalDuration()) : h._enabled(!1, !1))
                }, s.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var n = o.tweenLookup,
                            a, c, u, p, f;
                        if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = r(t)), h(t))
                            for (p = t.length; --p > -1;) s.killChildTweensOf(t[p], e);
                        else {
                            a = [];
                            for (u in n)
                                for (c = n[u].target.parentNode; c;) c === t && (a = a.concat(n[u].tweens)), c = c.parentNode;
                            for (f = a.length, p = 0; p < f; p++) e && a[p].totalTime(a[p].totalDuration()), a[p]._enabled(!1, !1)
                        }
                    }
                };
                var d = function(t, i, r, n) {
                    i = !1 !== i, r = !1 !== r, n = !1 !== n;
                    for (var s = f(n), a = i && r && n, o = s.length, l, h; --o > -1;) h = s[o], (a || h instanceof e || (l = h.target === h.vars.onComplete) && r || i && !l) && h.paused(t)
                };
                return s.pauseAll = function(t, e, i) {
                    d(!0, t, e, i)
                }, s.resumeAll = function(t, e, i) {
                    d(!1, t, e, i)
                }, s.globalTimeScale = function(e) {
                    var r = t._rootTimeline,
                        n = i.ticker.time;
                    return arguments.length ? (e = e || 1e-10, r._startTime = n - (n - r._startTime) * r._timeScale / e, r = t._rootFramesTimeline, n = i.ticker.frame, r._startTime = n - (n - r._startTime) * r._timeScale / e, r._timeScale = t._rootTimeline._timeScale = e, e) : r._timeScale
                }, c.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, c.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, c.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, c.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, c.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, c.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, c.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, c.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, s
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var r = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i = this.vars,
                            r, n;
                        for (n in i) r = i[n], l(r) && -1 !== r.join("").indexOf("{self}") && (i[n] = this._swapSelfInParams(r));
                        l(i.tweens) && this.add(i.tweens, 0, i.align, i.stagger)
                    },
                    n = 1e-10,
                    s = i._internals,
                    a = r._internals = {},
                    o = s.isSelector,
                    l = s.isArray,
                    h = s.lazyTweens,
                    c = s.lazyRender,
                    u = _gsScope._gsDefine.globals,
                    p = function(t) {
                        var e = {},
                            i;
                        for (i in t) e[i] = t[i];
                        return e
                    },
                    f = function(t, e, i) {
                        var r = t.cycle,
                            n, s;
                        for (n in r) s = r[n], t[n] = "function" == typeof s ? s(i, e[i]) : s[i % s.length];
                        delete t.cycle
                    },
                    d = a.pauseCallback = function() {},
                    g = function(t) {
                        var e = [],
                            i = t.length,
                            r;
                        for (r = 0; r !== i; e.push(t[r++]));
                        return e
                    },
                    m = r.prototype = new e;
                return r.version = "1.19.1", m.constructor = r, m.kill()._gc = m._forcingPlayhead = m._hasPause = !1, m.to = function(t, e, r, n) {
                    var s = r.repeat && u.TweenMax || i;
                    return e ? this.add(new s(t, e, r), n) : this.set(t, r, n)
                }, m.from = function(t, e, r, n) {
                    return this.add((r.repeat && u.TweenMax || i).from(t, e, r), n)
                }, m.fromTo = function(t, e, r, n, s) {
                    var a = n.repeat && u.TweenMax || i;
                    return e ? this.add(a.fromTo(t, e, r, n), s) : this.set(t, n, s)
                }, m.staggerTo = function(t, e, n, s, a, l, h, c) {
                    var u = new r({
                            onComplete: l,
                            onCompleteParams: h,
                            callbackScope: c,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        d = n.cycle,
                        m, v;
                    for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = g(t)), s = s || 0, s < 0 && (t = g(t), t.reverse(), s *= -1), v = 0; v < t.length; v++) m = p(n), m.startAt && (m.startAt = p(m.startAt), m.startAt.cycle && f(m.startAt, t, v)), d && (f(m, t, v), null != m.duration && (e = m.duration, delete m.duration)), u.to(t[v], e, m, v * s);
                    return this.add(u, a)
                }, m.staggerFrom = function(t, e, i, r, n, s, a, o) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, r, n, s, a, o)
                }, m.staggerFromTo = function(t, e, i, r, n, s, a, o, l) {
                    return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, r, n, s, a, o, l)
                }, m.call = function(t, e, r, n) {
                    return this.add(i.delayedCall(0, t, e, r), n)
                }, m.set = function(t, e, r) {
                    return r = this._parseTimeOrLabel(r, 0, !0), null == e.immediateRender && (e.immediateRender = r === this._time && !this._paused), this.add(new i(t, 0, e), r)
                }, r.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var n = new r(t),
                        s = n._timeline,
                        a, o;
                    for (null == e && (e = !0), s._remove(n, !0), n._startTime = 0, n._rawPrevTime = n._time = n._totalTime = s._time, a = s._first; a;) o = a._next, e && a instanceof i && a.target === a.vars.onComplete || n.add(a, a._startTime - a._delay), a = o;
                    return s.add(n, 0), n
                }, m.add = function(n, s, a, o) {
                    var h, c, u, p, f, d;
                    if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, n)), !(n instanceof t)) {
                        if (n instanceof Array || n && n.push && l(n)) {
                            for (a = a || "normal", o = o || 0, h = s, c = n.length, u = 0; u < c; u++) l(p = n[u]) && (p = new r({
                                tweens: p
                            })), this.add(p, h), "string" != typeof p && "function" != typeof p && ("sequence" === a ? h = p._startTime + p.totalDuration() / p._timeScale : "start" === a && (p._startTime -= p.delay())), h += o;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof n) return this.addLabel(n, s);
                        if ("function" != typeof n) throw "Cannot add " + n + " into the timeline; it is not a tween, timeline, function, or string.";
                        n = i.delayedCall(0, n)
                    }
                    if (e.prototype.add.call(this, n, s), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (f = this, d = f.rawTime() > n._startTime; f._timeline;) d && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1), f = f._timeline;
                    return this
                }, m.remove = function(e) {
                    if (e instanceof t) {
                        this._remove(e, !1);
                        var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                        return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                    }
                    if (e instanceof Array || e && e.push && l(e)) {
                        for (var r = e.length; --r > -1;) this.remove(e[r]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, m._remove = function(t, i) {
                    return e.prototype._remove.call(this, t, i), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, m.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, m.insert = m.insertMultiple = function(t, e, i, r) {
                    return this.add(t, e || 0, i, r)
                }, m.appendMultiple = function(t, e, i, r) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, r)
                }, m.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, m.addPause = function(t, e, r, n) {
                    var s = i.delayedCall(0, d, r, n || this);
                    return s.vars.onComplete = s.vars.onReverseComplete = e, s.data = "isPause", this._hasPause = !0, this.add(s, t)
                }, m.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, m.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, m._parseTimeOrLabel = function(e, i, r, n) {
                    var s;
                    if (n instanceof t && n.timeline === this) this.remove(n);
                    else if (n && (n instanceof Array || n.push && l(n)))
                        for (s = n.length; --s > -1;) n[s] instanceof t && n[s].timeline === this && this.remove(n[s]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, r && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, r);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (-1 === (s = e.indexOf("="))) return null == this._labels[e] ? r ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(s - 1) + "1", 10) * Number(e.substr(s + 1)), e = s > 1 ? this._parseTimeOrLabel(e.substr(0, s - 1), 0, r) : this.duration()
                    }
                    return Number(e) + i
                }, m.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
                }, m.stop = function() {
                    return this.paused(!0)
                }, m.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, m.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, m.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var r = this._dirty ? this.totalDuration() : this._totalDuration,
                        n = this._time,
                        s = this._startTime,
                        a = this._timeScale,
                        o = this._paused,
                        l, u, p, f, d, g, m;
                    if (t >= r - 1e-7 && t >= 0) this._totalTime = this._time = r, this._reversed || this._hasPausedChild() || (u = !0, f = "onComplete", d = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || this._rawPrevTime < 0 || 1e-10 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (d = !0, this._rawPrevTime > 1e-10 && (f = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, t = r + 1e-4;
                    else if (t < 1e-7)
                        if (this._totalTime = this._time = 0, (0 !== n || 0 === this._duration && 1e-10 !== this._rawPrevTime && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (f = "onReverseComplete", u = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (d = u = !0, f = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (d = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && u)
                                for (l = this._first; l && 0 === l._startTime;) l._duration || (u = !1), l = l._next;
                            t = 0, this._initted || (d = !0)
                        }
                    else {
                        if (this._hasPause && !this._forcingPlayhead && !e) {
                            if (t >= n)
                                for (l = this._first; l && l._startTime <= t && !g;) l._duration || "isPause" !== l.data || l.ratio || 0 === l._startTime && 0 === this._rawPrevTime || (g = l), l = l._next;
                            else
                                for (l = this._last; l && l._startTime >= t && !g;) l._duration || "isPause" === l.data && l._rawPrevTime > 0 && (g = l), l = l._prev;
                            g && (this._time = t = g._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = t
                    }
                    if (this._time !== n && this._first || i || d || g) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== n && t > 0 && (this._active = !0), 0 === n && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (m = this._time) >= n)
                            for (l = this._first; l && (p = l._next, m === this._time && (!this._paused || o));)(l._active || l._startTime <= m && !l._paused && !l._gc) && (g === l && this.pause(), l._reversed ? l.render((l._dirty ? l.totalDuration() : l._totalDuration) - (t - l._startTime) * l._timeScale, e, i) : l.render((t - l._startTime) * l._timeScale, e, i)), l = p;
                        else
                            for (l = this._last; l && (p = l._prev, m === this._time && (!this._paused || o));) {
                                if (l._active || l._startTime <= n && !l._paused && !l._gc) {
                                    if (g === l) {
                                        for (g = l._prev; g && g.endTime() > this._time;) g.render(g._reversed ? g.totalDuration() - (t - g._startTime) * g._timeScale : (t - g._startTime) * g._timeScale, e, i), g = g._prev;
                                        g = null, this.pause()
                                    }
                                    l._reversed ? l.render((l._dirty ? l.totalDuration() : l._totalDuration) - (t - l._startTime) * l._timeScale, e, i) : l.render((t - l._startTime) * l._timeScale, e, i)
                                }
                                l = p
                            }
                        this._onUpdate && (e || (h.length && c(), this._callback("onUpdate"))), f && (this._gc || s !== this._startTime && a === this._timeScale || (0 === this._time || r >= this.totalDuration()) && (u && (h.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[f] && this._callback(f)))
                    }
                }, m._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof r && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, m.getChildren = function(t, e, r, n) {
                    n = n || -9999999999;
                    for (var s = [], a = this._first, o = 0; a;) a._startTime < n || (a instanceof i ? !1 !== e && (s[o++] = a) : (!1 !== r && (s[o++] = a), !1 !== t && (s = s.concat(a.getChildren(!0, e, r)), o = s.length))), a = a._next;
                    return s
                }, m.getTweensOf = function(t, e) {
                    var r = this._gc,
                        n = [],
                        s = 0,
                        a, o;
                    for (r && this._enabled(!0, !0), a = i.getTweensOf(t), o = a.length; --o > -1;)(a[o].timeline === this || e && this._contains(a[o])) && (n[s++] = a[o]);
                    return r && this._enabled(!1, !0), n
                }, m.recent = function() {
                    return this._recent
                }, m._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, m.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var r = this._first, n = this._labels, s; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (s in n) n[s] >= i && (n[s] += t);
                    return this._uncache(!0)
                }, m._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), r = i.length, n = !1; --r > -1;) i[r]._kill(t, e) && (n = !0);
                    return n
                }, m.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return !1 !== t && (this._labels = {}), this._uncache(!0)
                }, m.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, m._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var r = this._first; r;) r._enabled(t, !0), r = r._next;
                    return e.prototype._enabled.call(this, t, i)
                }, m.totalTime = function(e, i, r) {
                    this._forcingPlayhead = !0;
                    var n = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, n
                }, m.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, m.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e = 0, i = this._last, r = 999999999999, n, s; i;) n = i._prev, i._dirty && i.totalDuration(), i._startTime > r && this._sortChildren && !i._paused ? this.add(i, i._startTime - i._delay) : r = i._startTime, i._startTime < 0 && !i._paused && (e -= i._startTime, this._timeline.smoothChildTiming && (this._startTime += i._startTime / this._timeScale), this.shiftChildren(-i._startTime, !1, -9999999999), r = 0), s = i._startTime + i._totalDuration / i._timeScale, s > e && (e = s), i = n;
                            this._duration = this._totalDuration = e, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                }, m.paused = function(e) {
                    if (!e)
                        for (var i = this._first, r = this._time; i;) i._startTime === r && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return t.prototype.paused.apply(this, arguments)
                }, m.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, m.rawTime = function(t) {
                    return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
                }, r
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var r = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
                    },
                    n = 1e-10,
                    s = e._internals,
                    a = s.lazyTweens,
                    o = s.lazyRender,
                    l = _gsScope._gsDefine.globals,
                    h = new i(null, null, 1, 0),
                    c = r.prototype = new t;
                return c.constructor = r, c.kill()._gc = !1, r.version = "1.19.1", c.invalidate = function() {
                    return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, c.addCallback = function(t, i, r, n) {
                    return this.add(e.delayedCall(0, t, r, n), i)
                }, c.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), r = i.length, n = this._parseTimeOrLabel(e); --r > -1;) i[r]._startTime === n && i[r]._enabled(!1, !1);
                    return this
                }, c.removePause = function(e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, c.tweenTo = function(t, i) {
                    i = i || {};
                    var r = {
                            ease: h,
                            useFrames: this.usesFrames(),
                            immediateRender: !1
                        },
                        n = i.repeat && l.TweenMax || e,
                        s, a, o;
                    for (a in i) r[a] = i[a];
                    return r.time = this._parseTimeOrLabel(t), s = Math.abs(Number(r.time) - this._time) / this._timeScale || .001, o = new n(this, s, r), r.onStart = function() {
                        o.target.paused(!0), o.vars.time !== o.target.time() && s === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || o, i.onStartParams || [])
                    }, o
                }, c.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        callbackScope: this
                    }, i.immediateRender = !1 !== i.immediateRender;
                    var r = this.tweenTo(e, i);
                    return r.duration(Math.abs(r.vars.time - t) / this._timeScale || .001)
                }, c.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var r = this._dirty ? this.totalDuration() : this._totalDuration,
                        n = this._duration,
                        s = this._time,
                        l = this._totalTime,
                        h = this._startTime,
                        c = this._timeScale,
                        u = this._rawPrevTime,
                        p = this._paused,
                        f = this._cycle,
                        d, g, m, v, _, y, x, b;
                    if (t >= r - 1e-7 && t >= 0) this._locked || (this._totalTime = r, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (g = !0, v = "onComplete", _ = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || u < 0 || 1e-10 === u) && u !== t && this._first && (_ = !0, u > 1e-10 && (v = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = n, t = n + 1e-4);
                    else if (t < 1e-7)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== s || 0 === n && 1e-10 !== u && (u > 0 || t < 0 && u >= 0) && !this._locked) && (v = "onReverseComplete", g = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (_ = g = !0, v = "onReverseComplete") : u >= 0 && this._first && (_ = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = n || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && g)
                                for (d = this._first; d && 0 === d._startTime;) d._duration || (g = !1), d = d._next;
                            t = 0, this._initted || (_ = !0)
                        }
                    else if (0 === n && u < 0 && (_ = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (y = n + this._repeatDelay, this._cycle = this._totalTime / y >> 0, 0 !== this._cycle && this._cycle === this._totalTime / y && l <= t && this._cycle--, this._time = this._totalTime - this._cycle * y, this._yoyo && 0 != (1 & this._cycle) && (this._time = n - this._time), this._time > n ? (this._time = n, t = n + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e && t < n) {
                        if ((t = this._time) >= s || this._repeat && f !== this._cycle)
                            for (d = this._first; d && d._startTime <= t && !x;) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (x = d), d = d._next;
                        else
                            for (d = this._last; d && d._startTime >= t && !x;) d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (x = d), d = d._prev;
                        x && (this._time = t = x._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== f && !this._locked) {
                        var w = this._yoyo && 0 != (1 & f),
                            T = w === (this._yoyo && 0 != (1 & this._cycle)),
                            S = this._totalTime,
                            P = this._cycle,
                            O = this._rawPrevTime,
                            k = this._time;
                        if (this._totalTime = f * n, this._cycle < f ? w = !w : this._totalTime += n, this._time = s, this._rawPrevTime = 0 === n ? u - 1e-4 : u, this._cycle = f, this._locked = !0, s = w ? 0 : n, this.render(s, e, 0 === n), e || this._gc || this.vars.onRepeat && (this._cycle = P, this._locked = !1, this._callback("onRepeat")), s !== this._time) return;
                        if (T && (this._cycle = f, this._locked = !0, s = w ? n + 1e-4 : -1e-4, this.render(s, !0, !1)), this._locked = !1, this._paused && !p) return;
                        this._time = k, this._totalTime = S, this._cycle = P, this._rawPrevTime = O
                    }
                    if (!(this._time !== s && this._first || i || _ || x)) return void(l !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== l && t > 0 && (this._active = !0), 0 === l && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (b = this._time) >= s)
                        for (d = this._first; d && (m = d._next, b === this._time && (!this._paused || p));)(d._active || d._startTime <= this._time && !d._paused && !d._gc) && (x === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (t - d._startTime) * d._timeScale, e, i) : d.render((t - d._startTime) * d._timeScale, e, i)), d = m;
                    else
                        for (d = this._last; d && (m = d._prev, b === this._time && (!this._paused || p));) {
                            if (d._active || d._startTime <= s && !d._paused && !d._gc) {
                                if (x === d) {
                                    for (x = d._prev; x && x.endTime() > this._time;) x.render(x._reversed ? x.totalDuration() - (t - x._startTime) * x._timeScale : (t - x._startTime) * x._timeScale, e, i), x = x._prev;
                                    x = null, this.pause()
                                }
                                d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (t - d._startTime) * d._timeScale, e, i) : d.render((t - d._startTime) * d._timeScale, e, i)
                            }
                            d = m
                        }
                    this._onUpdate && (e || (a.length && o(), this._callback("onUpdate"))), v && (this._locked || this._gc || h !== this._startTime && c === this._timeScale || (0 === this._time || r >= this.totalDuration()) && (g && (a.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[v] && this._callback(v)))
                }, c.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var r = [],
                        n = this.getChildren(t, e, i),
                        s = 0,
                        a = n.length,
                        o, l;
                    for (o = 0; o < a; o++) l = n[o], l.isActive() && (r[s++] = l);
                    return r
                }, c.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e = this.getLabelsArray(),
                        i = e.length,
                        r;
                    for (r = 0; r < i; r++)
                        if (e[r].time > t) return e[r].name;
                    return null
                }, c.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (e[i].time < t) return e[i].name;
                    return null
                }, c.getLabelsArray = function() {
                    var t = [],
                        e = 0,
                        i;
                    for (i in this._labels) t[e++] = {
                        time: this._labels[i],
                        name: i
                    };
                    return t.sort(function(t, e) {
                        return t.time - e.time
                    }), t
                }, c.invalidate = function() {
                    return this._locked = !1, t.prototype.invalidate.call(this)
                }, c.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, c.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, c.totalDuration = function(e) {
                    return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, c.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, c.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, c.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, c.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, c.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, r
            }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    r = [],
                    n = {},
                    s = _gsScope._gsDefine.globals,
                    a = function(t, e, i, r) {
                        i === r && (i = r - (r - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = r, this.da = r - t, this.ca = i - t, this.ba = e - t
                    },
                    o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    l = function(t, e, i, r) {
                        var n = {
                                a: t
                            },
                            s = {},
                            a = {},
                            o = {
                                c: r
                            },
                            l = (t + e) / 2,
                            h = (e + i) / 2,
                            c = (i + r) / 2,
                            u = (l + h) / 2,
                            p = (h + c) / 2,
                            f = (p - u) / 8;
                        return n.b = l + (t - l) / 4, s.b = u + f, n.c = s.a = (n.b + s.b) / 2, s.c = a.a = (u + p) / 2, a.b = p - f, o.b = c + (r - c) / 4, a.c = o.a = (a.b + o.b) / 2, [n, s, a, o]
                    },
                    h = function(t, n, s, a, o) {
                        var h = t.length - 1,
                            c = 0,
                            u = t[0].a,
                            p, f, d, g, m, v, _, y, x, b, w, T, S;
                        for (p = 0; p < h; p++) m = t[c], f = m.a, d = m.d, g = t[c + 1].d, o ? (w = e[p], T = i[p], S = (T + w) * n * .25 / (a ? .5 : r[p] || .5), v = d - (d - f) * (a ? .5 * n : 0 !== w ? S / w : 0), _ = d + (g - d) * (a ? .5 * n : 0 !== T ? S / T : 0), y = d - (v + ((_ - v) * (3 * w / (w + T) + .5) / 4 || 0))) : (v = d - (d - f) * n * .5, _ = d + (g - d) * n * .5, y = d - (v + _) / 2), v += y, _ += y, m.c = x = v, m.b = 0 !== p ? u : u = m.a + .6 * (m.c - m.a), m.da = d - f, m.ca = x - f, m.ba = u - f, s ? (b = l(f, u, x, d), t.splice(c, 1, b[0], b[1], b[2], b[3]), c += 4) : c++, u = _;
                        m = t[c], m.b = u, m.c = u + .4 * (m.d - u), m.da = m.d - m.a, m.ca = m.c - m.a, m.ba = u - m.a, s && (b = l(m.a, u, m.c, m.d), t.splice(c, 1, b[0], b[1], b[2], b[3]))
                    },
                    c = function(t, r, n, s) {
                        var o = [],
                            l, h, c, u, p, f;
                        if (s)
                            for (t = [s].concat(t), h = t.length; --h > -1;) "string" == typeof(f = t[h][r]) && "=" === f.charAt(1) && (t[h][r] = s[r] + Number(f.charAt(0) + f.substr(2)));
                        if ((l = t.length - 2) < 0) return o[0] = new a(t[0][r], 0, 0, t[l < -1 ? 0 : 1][r]), o;
                        for (h = 0; h < l; h++) c = t[h][r], u = t[h + 1][r], o[h] = new a(c, 0, 0, u), n && (p = t[h + 2][r], e[h] = (e[h] || 0) + (u - c) * (u - c), i[h] = (i[h] || 0) + (p - u) * (p - u));
                        return o[h] = new a(t[h][r], 0, 0, t[h + 1][r]), o
                    },
                    u = function(t, s, a, o, l, u) {
                        var p = {},
                            f = [],
                            d = u || t[0],
                            g, m, v, _, y, x, b, w;
                        l = "string" == typeof l ? "," + l + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == s && (s = 1);
                        for (m in t[0]) f.push(m);
                        if (t.length > 1) {
                            for (w = t[t.length - 1], b = !0, g = f.length; --g > -1;)
                                if (m = f[g], Math.abs(d[m] - w[m]) > .05) {
                                    b = !1;
                                    break
                                }
                            b && (t = t.concat(), u && t.unshift(u), t.push(t[1]), u = t[t.length - 3])
                        }
                        for (e.length = i.length = r.length = 0, g = f.length; --g > -1;) m = f[g], n[m] = -1 !== l.indexOf("," + m + ","), p[m] = c(t, m, n[m], u);
                        for (g = e.length; --g > -1;) e[g] = Math.sqrt(e[g]), i[g] = Math.sqrt(i[g]);
                        if (!o) {
                            for (g = f.length; --g > -1;)
                                if (n[m])
                                    for (v = p[f[g]], x = v.length - 1, _ = 0; _ < x; _++) y = v[_ + 1].da / i[_] + v[_].da / e[_] || 0, r[_] = (r[_] || 0) + y * y;
                            for (g = r.length; --g > -1;) r[g] = Math.sqrt(r[g])
                        }
                        for (g = f.length, _ = a ? 4 : 1; --g > -1;) m = f[g], v = p[m], h(v, s, a, o, n[m]), b && (v.splice(0, _), v.splice(v.length - _, _));
                        return p
                    },
                    p = function(t, e, i) {
                        e = e || "soft";
                        var r = {},
                            n = "cubic" === e ? 3 : 2,
                            s = "soft" === e,
                            o = [],
                            l, h, c, u, p, f, d, g, m, v, _;
                        if (s && i && (t = [i].concat(t)), null == t || t.length < n + 1) throw "invalid Bezier data";
                        for (m in t[0]) o.push(m);
                        for (f = o.length; --f > -1;) {
                            for (m = o[f], r[m] = p = [], v = 0, g = t.length, d = 0; d < g; d++) l = null == i ? t[d][m] : "string" == typeof(_ = t[d][m]) && "=" === _.charAt(1) ? i[m] + Number(_.charAt(0) + _.substr(2)) : Number(_), s && d > 1 && d < g - 1 && (p[v++] = (l + p[v - 2]) / 2), p[v++] = l;
                            for (g = v - n + 1, v = 0, d = 0; d < g; d += n) l = p[d],
                                h = p[d + 1], c = p[d + 2], u = 2 === n ? 0 : p[d + 3], p[v++] = _ = 3 === n ? new a(l, h, c, u) : new a(l, (2 * h + l) / 3, (2 * h + c) / 3, c);
                            p.length = v
                        }
                        return r
                    },
                    f = function(t, e, i) {
                        for (var r = 1 / i, n = t.length, s, a, o, l, h, c, u, p, f, d, g; --n > -1;)
                            for (d = t[n], o = d.a, l = d.d - o, h = d.c - o, c = d.b - o, s = a = 0, p = 1; p <= i; p++) u = r * p, f = 1 - u, s = a - (a = (u * u * l + 3 * f * (u * h + f * c)) * u), g = n * i + p - 1, e[g] = (e[g] || 0) + s * s
                    },
                    d = function(t, e) {
                        e = e >> 0 || 6;
                        var i = [],
                            r = [],
                            n = 0,
                            s = 0,
                            a = e - 1,
                            o = [],
                            l = [],
                            h, c, u, p;
                        for (h in t) f(t[h], i, e);
                        for (u = i.length, c = 0; c < u; c++) n += Math.sqrt(i[c]), p = c % e, l[p] = n, p === a && (s += n, p = c / e >> 0, o[p] = l, r[p] = s, n = 0, l = []);
                        return {
                            length: s,
                            lengths: r,
                            segments: o
                        }
                    },
                    g = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.7",
                        API: 2,
                        global: !0,
                        init: function(t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var r = e.values || [],
                                n = {},
                                s = r[0],
                                a = e.autoRotate || i.vars.orientToBezier,
                                o, l, h, c, f;
                            this._autoRotate = a ? a instanceof Array ? a : [
                                ["x", "y", "rotation", !0 === a ? 0 : Number(a) || 0]
                            ] : null;
                            for (o in s) this._props.push(o);
                            for (h = this._props.length; --h > -1;) o = this._props[h], this._overwriteProps.push(o), l = this._func[o] = "function" == typeof t[o], n[o] = l ? t[o.indexOf("set") || "function" != typeof t["get" + o.substr(3)] ? o : "get" + o.substr(3)]() : parseFloat(t[o]), f || n[o] !== r[0][o] && (f = n);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(r, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, f) : p(r, e.type, n), this._segCount = this._beziers[o].length, this._timeRes) {
                                var g = d(this._beziers, this._timeRes);
                                this._length = g.length, this._lengths = g.lengths, this._segments = g.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (a = this._autoRotate)
                                for (this._initialRotations = [], a[0] instanceof Array || (this._autoRotate = a = [a]), h = a.length; --h > -1;) {
                                    for (c = 0; c < 3; c++) o = a[h][c], this._func[o] = "function" == typeof t[o] && t[o.indexOf("set") || "function" != typeof t["get" + o.substr(3)] ? o : "get" + o.substr(3)];
                                    o = a[h][2], this._initialRotations[h] = (this._func[o] ? this._func[o].call(this._target) : this._target[o]) || 0, this._overwriteProps.push(o)
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(e) {
                            var i = this._segCount,
                                r = this._func,
                                n = this._target,
                                s = e !== this._startRatio,
                                a, o, l, h, c, u, p, f, d, g;
                            if (this._timeRes) {
                                if (d = this._lengths, g = this._curSeg, e *= this._length, l = this._li, e > this._l2 && l < i - 1) {
                                    for (f = i - 1; l < f && (this._l2 = d[++l]) <= e;);
                                    this._l1 = d[l - 1], this._li = l, this._curSeg = g = this._segments[l], this._s2 = g[this._s1 = this._si = 0]
                                } else if (e < this._l1 && l > 0) {
                                    for (; l > 0 && (this._l1 = d[--l]) >= e;);
                                    0 === l && e < this._l1 ? this._l1 = 0 : l++, this._l2 = d[l], this._li = l, this._curSeg = g = this._segments[l], this._s1 = g[(this._si = g.length - 1) - 1] || 0, this._s2 = g[this._si]
                                }
                                if (a = l, e -= this._l1, l = this._si, e > this._s2 && l < g.length - 1) {
                                    for (f = g.length - 1; l < f && (this._s2 = g[++l]) <= e;);
                                    this._s1 = g[l - 1], this._si = l
                                } else if (e < this._s1 && l > 0) {
                                    for (; l > 0 && (this._s1 = g[--l]) >= e;);
                                    0 === l && e < this._s1 ? this._s1 = 0 : l++, this._s2 = g[l], this._si = l
                                }
                                u = (l + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                            } else a = e < 0 ? 0 : e >= 1 ? i - 1 : i * e >> 0, u = (e - a * (1 / i)) * i;
                            for (o = 1 - u, l = this._props.length; --l > -1;) h = this._props[l], c = this._beziers[h][a], p = (u * u * c.da + 3 * o * (u * c.ca + o * c.ba)) * u + c.a, this._mod[h] && (p = this._mod[h](p, n)), r[h] ? n[h](p) : n[h] = p;
                            if (this._autoRotate) {
                                var m = this._autoRotate,
                                    v, _, y, x, b, w, T;
                                for (l = m.length; --l > -1;) h = m[l][2], w = m[l][3] || 0, T = !0 === m[l][4] ? 1 : t, c = this._beziers[m[l][0]], v = this._beziers[m[l][1]], c && v && (c = c[a], v = v[a], _ = c.a + (c.b - c.a) * u, x = c.b + (c.c - c.b) * u, _ += (x - _) * u, x += (c.c + (c.d - c.c) * u - x) * u, y = v.a + (v.b - v.a) * u, b = v.b + (v.c - v.b) * u, y += (b - y) * u, b += (v.c + (v.d - v.c) * u - b) * u, p = s ? Math.atan2(b - y, x - _) * T + w : this._initialRotations[l], this._mod[h] && (p = this._mod[h](p, n)), r[h] ? n[h](p) : n[h] = p)
                            }
                        }
                    }),
                    m = g.prototype;
                g.bezierThrough = u, g.cubicToQuadratic = l, g._autoCSS = !0, g.quadraticToCubic = function(t, e, i) {
                    return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, g._cssRegister = function() {
                    var t = s.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            r = e._setPluginRatio,
                            n = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function(t, e, s, a, o, l) {
                                e instanceof Array && (e = {
                                    values: e
                                }), l = new g;
                                var h = e.values,
                                    c = h.length - 1,
                                    u = [],
                                    p = {},
                                    f, d, m;
                                if (c < 0) return o;
                                for (f = 0; f <= c; f++) m = i(t, h[f], a, o, l, c !== f), u[f] = m.end;
                                for (d in e) p[d] = e[d];
                                return p.values = u, o = new n(t, "bezier", 0, 0, m.pt, 2), o.data = m, o.plugin = l, o.setRatio = r, 0 === p.autoRotate && (p.autoRotate = !0), !p.autoRotate || p.autoRotate instanceof Array || (f = !0 === p.autoRotate ? 0 : Number(p.autoRotate), p.autoRotate = null != m.end.left ? [
                                    ["left", "top", "rotation", f, !1]
                                ] : null != m.end.x && [
                                    ["x", "y", "rotation", f, !1]
                                ]), p.autoRotate && (a._transform || a._enableTransforms(!1), m.autoRotate = a._target._gsTransform, m.proxy.rotation = m.autoRotate.rotation || 0, a._overwriteProps.push("rotation")), l._onInitTween(m.proxy, p, a._tween), o
                            }
                        })
                    }
                }, m._mod = function(t) {
                    for (var e = this._overwriteProps, i = e.length, r; --i > -1;)(r = t[e[i]]) && "function" == typeof r && (this._mod[e[i]] = r)
                }, m._kill = function(t) {
                    var e = this._props,
                        i, r;
                    for (i in this._beziers)
                        if (i in t)
                            for (delete this._beziers[i], delete this._func[i], r = e.length; --r > -1;) e[r] === i && e.splice(r, 1);
                    if (e = this._autoRotate)
                        for (r = e.length; --r > -1;) t[e[r][2]] && e.splice(r, 1);
                    return this._super._kill.call(this, t)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = i.prototype.setRatio
                    },
                    r = _gsScope._gsDefine.globals,
                    n, s, a, o, l = {},
                    h = i.prototype = new t("css");
                h.constructor = i, i.version = "1.19.1", i.API = 2, i.defaultTransformPerspective = 0, i.defaultSkewType = "compensated", i.defaultSmoothOrigin = !0, h = "px", i.suffixMap = {
                    top: h,
                    right: h,
                    bottom: h,
                    left: h,
                    width: h,
                    height: h,
                    fontSize: h,
                    padding: h,
                    margin: h,
                    perspective: h,
                    lineHeight: ""
                };
                var c = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    u = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    p = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    f = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    d = /(?:\d|\-|\+|=|#|\.)*/g,
                    g = /opacity *= *([^)]*)/i,
                    m = /opacity:([^;]*)/i,
                    v = /alpha\(opacity *=.+?\)/i,
                    _ = /^(rgb|hsl)/,
                    y = /([A-Z])/g,
                    x = /-([a-z])/gi,
                    b = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    w = function(t, e) {
                        return e.toUpperCase()
                    },
                    T = /(?:Left|Right|Width)/i,
                    S = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    P = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    O = /,(?=[^\)]*(?:\(|$))/gi,
                    k = /[\s,\(]/i,
                    C = Math.PI / 180,
                    D = 180 / Math.PI,
                    E = {},
                    A = {
                        style: {}
                    },
                    R = _gsScope.document || {
                        createElement: function() {
                            return A
                        }
                    },
                    M = function(t, e) {
                        return R.createElementNS ? R.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : R.createElement(t)
                    },
                    X = M("div"),
                    z = M("img"),
                    Y = i._internals = {
                        _specialProps: l
                    },
                    F = (_gsScope.navigator || {}).userAgent || "",
                    N, I, L, V, B, j, q = function() {
                        var t = F.indexOf("Android"),
                            e = M("a");
                        return L = -1 !== F.indexOf("Safari") && -1 === F.indexOf("Chrome") && (-1 === t || parseFloat(F.substr(t + 8, 2)) > 3), B = L && parseFloat(F.substr(F.indexOf("Version/") + 8, 2)) < 6, V = -1 !== F.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(F) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(F)) && (j = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                    }(),
                    H = function(t) {
                        return g.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    W = function(t) {
                        _gsScope.console && console.log(t)
                    },
                    U, G, Z = "",
                    Q = "",
                    K = function(t, e) {
                        e = e || X;
                        var i = e.style,
                            r, n;
                        if (void 0 !== i[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), r = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === i[r[n] + t];);
                        return n >= 0 ? (Q = 3 === n ? "ms" : r[n], Z = "-" + Q.toLowerCase() + "-", Q + t) : null
                    },
                    J = R.defaultView ? R.defaultView.getComputedStyle : function() {},
                    tt = i.getStyle = function(t, e, i, r, n) {
                        var s;
                        return q || "opacity" !== e ? (!r && t.style[e] ? s = t.style[e] : (i = i || J(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(/([A-Z])/g, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == n || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : n) : H(t)
                    },
                    et = Y.convertToPixels = function(t, r, n, s, a) {
                        if ("px" === s || !s) return n;
                        if ("auto" === s || !n) return 0;
                        var o = T.test(r),
                            l = t,
                            h = X.style,
                            c = n < 0,
                            u = 1 === n,
                            p, f, d;
                        if (c && (n = -n), u && (n *= 100), "%" === s && -1 !== r.indexOf("border")) p = n / 100 * (o ? t.clientWidth : t.clientHeight);
                        else {
                            if (h.cssText = "border:0 solid red;position:" + tt(t, "position") + ";line-height:0;", "%" !== s && l.appendChild && "v" !== s.charAt(0) && "rem" !== s) h[o ? "borderLeftWidth" : "borderTopWidth"] = n + s;
                            else {
                                if (l = t.parentNode || R.body, f = l._gsCache, d = e.ticker.frame, f && o && f.time === d) return f.width * n / 100;
                                h[o ? "width" : "height"] = n + s
                            }
                            l.appendChild(X), p = parseFloat(X[o ? "offsetWidth" : "offsetHeight"]), l.removeChild(X), o && "%" === s && !1 !== i.cacheWidths && (f = l._gsCache = l._gsCache || {}, f.time = d, f.width = p / n * 100), 0 !== p || a || (p = et(t, r, n, s, !0))
                        }
                        return u && (p /= 100), c ? -p : p
                    },
                    it = Y.calculateOffset = function(t, e, i) {
                        if ("absolute" !== tt(t, "position", i)) return 0;
                        var r = "left" === e ? "Left" : "Top",
                            n = tt(t, "margin" + r, i);
                        return t["offset" + r] - (et(t, e, parseFloat(n), n.replace(d, "")) || 0)
                    },
                    rt = function(t, e) {
                        var i = {},
                            r, n, s;
                        if (e = e || J(t, null))
                            if (r = e.length)
                                for (; --r > -1;) s = e[r], -1 !== s.indexOf("-transform") && At !== s || (i[s.replace(/-([a-z])/gi, w)] = e.getPropertyValue(s));
                            else
                                for (r in e) - 1 !== r.indexOf("Transform") && Et !== r || (i[r] = e[r]);
                        else if (e = t.currentStyle || t.style)
                            for (r in e) "string" == typeof r && void 0 === i[r] && (i[r.replace(/-([a-z])/gi, w)] = e[r]);
                        return q || (i.opacity = H(t)), n = Wt(t, e, !1), i.rotation = n.rotation, i.skewX = n.skewX, i.scaleX = n.scaleX, i.scaleY = n.scaleY, i.x = n.x, i.y = n.y, Mt && (i.z = n.z, i.rotationX = n.rotationX, i.rotationY = n.rotationY, i.scaleZ = n.scaleZ), i.filters && delete i.filters, i
                    },
                    nt = function(t, e, i, r, n) {
                        var s = {},
                            a = t.style,
                            o, l, h;
                        for (l in i) "cssText" !== l && "length" !== l && isNaN(l) && (e[l] !== (o = i[l]) || n && n[l]) && -1 === l.indexOf("Origin") && ("number" != typeof o && "string" != typeof o || (s[l] = "auto" !== o || "left" !== l && "top" !== l ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[l] || "" === e[l].replace(f, "") ? o : 0 : it(t, l), void 0 !== a[l] && (h = new xt(a, l, a[l], h))));
                        if (r)
                            for (l in r) "className" !== l && (s[l] = r[l]);
                        return {
                            difs: s,
                            firstMPT: h
                        }
                    },
                    st = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    at = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    ot = function(t, e, i) {
                        if ("svg" === (t.nodeName + "").toLowerCase()) return (i || J(t))[e] || 0;
                        if (t.getCTM && jt(t)) return t.getBBox()[e] || 0;
                        var r = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            n = st[e],
                            s = n.length;
                        for (i = i || J(t, null); --s > -1;) r -= parseFloat(tt(t, "padding" + n[s], i, !0)) || 0, r -= parseFloat(tt(t, "border" + n[s] + "Width", i, !0)) || 0;
                        return r
                    },
                    lt = function(t, e) {
                        if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                        null != t && "" !== t || (t = "0 0");
                        var i = t.split(" "),
                            r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            n = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1],
                            s;
                        if (i.length > 3 && !e) {
                            for (i = t.split(", ").join(",").split(","), t = [], s = 0; s < i.length; s++) t.push(lt(i[s]));
                            return t.join(",")
                        }
                        return null == n ? n = "center" === r ? "50%" : "0" : "center" === n && (n = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + n + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== n.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === n.charAt(1), e.ox = parseFloat(r.replace(f, "")), e.oy = parseFloat(n.replace(f, "")), e.v = t), e || t
                    },
                    ht = function(t, e) {
                        return "function" == typeof t && (t = t(G, U)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                    },
                    ct = function(t, e) {
                        return "function" == typeof t && (t = t(G, U)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                    },
                    ut = function(t, e, i, r) {
                        var n = 1e-6,
                            s, a, o, l, h;
                        return "function" == typeof t && (t = t(G, U)), null == t ? l = e : "number" == typeof t ? l = t : (s = 360, a = t.split("_"), h = "=" === t.charAt(1), o = (h ? parseInt(t.charAt(0) + "1", 10) * parseFloat(a[0].substr(2)) : parseFloat(a[0])) * (-1 === t.indexOf("rad") ? 1 : D) - (h ? 0 : e), a.length && (r && (r[i] = e + o), -1 !== t.indexOf("short") && (o %= s) !== o % (s / 2) && (o = o < 0 ? o + s : o - s), -1 !== t.indexOf("_cw") && o < 0 ? o = (o + 9999999999 * s) % s - (o / s | 0) * s : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * s) % s - (o / s | 0) * s)), l = e + o), l < 1e-6 && l > -1e-6 && (l = 0), l
                    },
                    pt = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    ft = function(t, e, i) {
                        return t = t < 0 ? t + 1 : t > 1 ? t - 1 : t, 255 * (6 * t < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                    },
                    dt = i.parseColor = function(t, e) {
                        var i, r, n, s, a, o, l, h, p, f, d;
                        if (t)
                            if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                            else {
                                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), pt[t]) i = pt[t];
                                else if ("#" === t.charAt(0)) 4 === t.length && (r = t.charAt(1), n = t.charAt(2), s = t.charAt(3), t = "#" + r + r + n + n + s + s), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t];
                                else if ("hsl" === t.substr(0, 3))
                                    if (i = d = t.match(c), e) {
                                        if (-1 !== t.indexOf("=")) return t.match(u)
                                    } else a = Number(i[0]) % 360 / 360, o = Number(i[1]) / 100, l = Number(i[2]) / 100, n = l <= .5 ? l * (o + 1) : l + o - l * o, r = 2 * l - n, i.length > 3 && (i[3] = Number(t[3])), i[0] = ft(a + 1 / 3, r, n), i[1] = ft(a, r, n), i[2] = ft(a - 1 / 3, r, n);
                                else i = t.match(c) || pt.transparent;
                                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                            }
                        else i = pt.black;
                        return e && !d && (r = i[0] / 255, n = i[1] / 255, s = i[2] / 255, h = Math.max(r, n, s), p = Math.min(r, n, s), l = (h + p) / 2, h === p ? a = o = 0 : (f = h - p, o = l > .5 ? f / (2 - h - p) : f / (h + p), a = h === r ? (n - s) / f + (n < s ? 6 : 0) : h === n ? (s - r) / f + 2 : (r - n) / f + 4, a *= 60), i[0] = a + .5 | 0, i[1] = 100 * o + .5 | 0, i[2] = 100 * l + .5 | 0), i
                    },
                    gt = function(t, e) {
                        var i = t.match(mt) || [],
                            r = 0,
                            n = i.length ? "" : t,
                            s, a, o;
                        for (s = 0; s < i.length; s++) a = i[s], o = t.substr(r, t.indexOf(a, r) - r), r += o.length + a.length, a = dt(a, e), 3 === a.length && a.push(1), n += o + (e ? "hsla(" + a[0] + "," + a[1] + "%," + a[2] + "%," + a[3] : "rgba(" + a.join(",")) + ")";
                        return n + t.substr(r)
                    },
                    mt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (h in pt) mt += "|" + h + "\\b";
                mt = new RegExp(mt + ")", "gi"), i.colorStringFilter = function(t) {
                    var e = t[0] + t[1],
                        i;
                    mt.test(e) && (i = -1 !== e.indexOf("hsl(") || -1 !== e.indexOf("hsla("), t[0] = gt(t[0], i), t[1] = gt(t[1], i)), mt.lastIndex = 0
                }, e.defaultStringFilter || (e.defaultStringFilter = i.colorStringFilter);
                var vt = function(t, e, i, r) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var n = e ? (t.match(mt) || [""])[0] : "",
                            s = t.split(n).join("").match(p) || [],
                            a = t.substr(0, t.indexOf(s[0])),
                            o = ")" === t.charAt(t.length - 1) ? ")" : "",
                            l = -1 !== t.indexOf(" ") ? " " : ",",
                            h = s.length,
                            u = h > 0 ? s[0].replace(c, "") : "",
                            f;
                        return h ? f = e ? function(t) {
                            var e, c, d, g;
                            if ("number" == typeof t) t += u;
                            else if (r && O.test(t)) {
                                for (g = t.replace(O, "|").split("|"), d = 0; d < g.length; d++) g[d] = f(g[d]);
                                return g.join(",")
                            }
                            if (e = (t.match(mt) || [n])[0], c = t.split(e).join("").match(p) || [], d = c.length, h > d--)
                                for (; ++d < h;) c[d] = i ? c[(d - 1) / 2 | 0] : s[d];
                            return a + c.join(l) + l + e + o + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, n, c;
                            if ("number" == typeof t) t += u;
                            else if (r && O.test(t)) {
                                for (n = t.replace(O, "|").split("|"), c = 0; c < n.length; c++) n[c] = f(n[c]);
                                return n.join(",")
                            }
                            if (e = t.match(p) || [], c = e.length, h > c--)
                                for (; ++c < h;) e[c] = i ? e[(c - 1) / 2 | 0] : s[c];
                            return a + e.join(l) + o
                        } : function(t) {
                            return t
                        }
                    },
                    _t = function(t) {
                        return t = t.split(","),
                            function(e, i, r, n, s, a, o) {
                                var l = (i + "").split(" "),
                                    h;
                                for (o = {}, h = 0; h < 4; h++) o[t[h]] = l[h] = l[h] || l[(h - 1) / 2 >> 0];
                                return n.parse(e, o, s, a)
                            }
                    },
                    yt = Y._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e = this.data, i = e.proxy, r = e.firstMPT, n = 1e-6, s, a, o, l, h; r;) s = i[r.v], r.r ? s = Math.round(s) : s < 1e-6 && s > -1e-6 && (s = 0), r.t[r.p] = s, r = r._next;
                        if (e.autoRotate && (e.autoRotate.rotation = e.mod ? e.mod(i.rotation, this.t) : i.rotation), 1 === t || 0 === t)
                            for (r = e.firstMPT, h = 1 === t ? "e" : "b"; r;) {
                                if (a = r.t, a.type) {
                                    if (1 === a.type) {
                                        for (l = a.xs0 + a.s + a.xs1, o = 1; o < a.l; o++) l += a["xn" + o] + a["xs" + (o + 1)];
                                        a[h] = l
                                    }
                                } else a[h] = a.s + a.xs0;
                                r = r._next
                            }
                    },
                    xt = function(t, e, i, r, n) {
                        this.t = t, this.p = e, this.v = i, this.r = n, r && (r._prev = this, this._next = r)
                    },
                    bt = Y._parseToProxy = function(t, e, i, r, n, s) {
                        var a = r,
                            o = {},
                            l = {},
                            h = i._transform,
                            c = E,
                            u, p, f, d, g;
                        for (i._transform = null, E = e, r = g = i.parse(t, e, r, n), E = c, s && (i._transform = h, a && (a._prev = null, a._prev && (a._prev._next = null))); r && r !== a;) {
                            if (r.type <= 1 && (p = r.p, l[p] = r.s + r.c, o[p] = r.s, s || (d = new xt(r, "s", p, d, r.r), r.c = 0), 1 === r.type))
                                for (u = r.l; --u > 0;) f = "xn" + u, p = r.p + "_" + f, l[p] = r.data[f], o[p] = r[f], s || (d = new xt(r, f, p, d, r.rxp[f]));
                            r = r._next
                        }
                        return {
                            proxy: o,
                            end: l,
                            firstMPT: d,
                            pt: g
                        }
                    },
                    wt = Y.CSSPropTween = function(t, e, i, r, s, a, l, h, c, u, p) {
                        this.t = t, this.p = e, this.s = i, this.c = r, this.n = l || e, t instanceof wt || o.push(this.n), this.r = h, this.type = a || 0, c && (this.pr = c, n = !0), this.b = void 0 === u ? i : u, this.e = void 0 === p ? i + r : p, s && (this._next = s, s._prev = this)
                    },
                    Tt = function(t, e, i, r, n, s) {
                        var a = new wt(t, e, i, r - i, n, -1, s);
                        return a.b = i, a.e = a.xs0 = r, a
                    },
                    St = i.parseComplex = function(t, e, r, n, s, a, o, l, h, p) {
                        r = r || a || "", "function" == typeof n && (n = n(G, U)), o = new wt(t, e, 0, 0, o, p ? 2 : 1, null, !1, l, r, n), n += "", s && mt.test(n + r) && (n = [r, n], i.colorStringFilter(n), r = n[0], n = n[1]);
                        var f = r.split(", ").join(",").split(" "),
                            d = n.split(", ").join(",").split(" "),
                            g = f.length,
                            m = !1 !== N,
                            v, _, y, x, b, w, T, S, P, k, C, D, E;
                        for (-1 === n.indexOf(",") && -1 === r.indexOf(",") || (f = f.join(" ").replace(O, ", ").split(" "), d = d.join(" ").replace(O, ", ").split(" "), g = f.length), g !== d.length && (f = (a || "").split(" "), g = f.length), o.plugin = h, o.setRatio = p, mt.lastIndex = 0, v = 0; v < g; v++)
                            if (x = f[v], b = d[v], (S = parseFloat(x)) || 0 === S) o.appendXtra("", S, ht(b, S), b.replace(u, ""), m && -1 !== b.indexOf("px"), !0);
                            else if (s && mt.test(x)) D = b.indexOf(")") + 1, D = ")" + (D ? b.substr(D) : ""), E = -1 !== b.indexOf("hsl") && q, x = dt(x, E), b = dt(b, E), P = x.length + b.length > 6, P && !q && 0 === b[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(d[v]).join("transparent")) : (q || (P = !1), E ? o.appendXtra(P ? "hsla(" : "hsl(", x[0], ht(b[0], x[0]), ",", !1, !0).appendXtra("", x[1], ht(b[1], x[1]), "%,", !1).appendXtra("", x[2], ht(b[2], x[2]), P ? "%," : "%" + D, !1) : o.appendXtra(P ? "rgba(" : "rgb(", x[0], b[0] - x[0], ",", !0, !0).appendXtra("", x[1], b[1] - x[1], ",", !0).appendXtra("", x[2], b[2] - x[2], P ? "," : D, !0), P && (x = x.length < 4 ? 1 : x[3], o.appendXtra("", x, (b.length < 4 ? 1 : b[3]) - x, D, !1))), mt.lastIndex = 0;
                        else if (w = x.match(c)) {
                            if (!(T = b.match(u)) || T.length !== w.length) return o;
                            for (y = 0, _ = 0; _ < w.length; _++) C = w[_], k = x.indexOf(C, y), o.appendXtra(x.substr(y, k - y), Number(C), ht(T[_], C), "", m && "px" === x.substr(k + C.length, 2), 0 === _), y = k + C.length;
                            o["xs" + o.l] += x.substr(y)
                        } else o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + b : b;
                        if (-1 !== n.indexOf("=") && o.data) {
                            for (D = o.xs0 + o.data.s, v = 1; v < o.l; v++) D += o["xs" + v] + o.data["xn" + v];
                            o.e = D + o["xs" + v]
                        }
                        return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
                    },
                    Pt = 9;
                for (h = wt.prototype, h.l = h.pr = 0; --Pt > 0;) h["xn" + Pt] = 0, h["xs" + Pt] = "";
                h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(t, e, i, r, n, s) {
                    var a = this,
                        o = a.l;
                    return a["xs" + o] += s && (o || a["xs" + o]) ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = r || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = n, a["xn" + o] = e, a.plugin || (a.xfirst = new wt(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, n, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                        s: e + i
                    }, a.rxp = {}, a.s = e, a.c = i, a.r = n, a)) : (a["xs" + o] += e + (r || ""), a)
                };
                var Ot = function(t, e) {
                        e = e || {}, this.p = e.prefix ? K(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || vt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    kt = Y._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var r = t.split(","),
                            n = e.defaultValue,
                            s, a;
                        for (i = i || [n], s = 0; s < r.length; s++) e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || n, a = new Ot(r[s], e)
                    },
                    Ct = Y._registerPluginProp = function(t) {
                        if (!l[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            kt(t, {
                                parser: function(t, i, n, s, a, o, h) {
                                    var c = r.com.greensock.plugins[e];
                                    return c ? (c._cssRegister(), l[n].parse(t, i, n, s, a, o, h)) : (W("Error: " + e + " js file not loaded."), a)
                                }
                            })
                        }
                    };
                h = Ot.prototype, h.parseComplex = function(t, e, i, r, n, s) {
                    var a = this.keyword,
                        o, l, h, c, u, p;
                    if (this.multi && (O.test(i) || O.test(e) ? (l = e.replace(O, "|").split("|"), h = i.replace(O, "|").split("|")) : a && (l = [e], h = [i])), h) {
                        for (c = h.length > l.length ? h.length : l.length, o = 0; o < c; o++) e = l[o] = l[o] || this.dflt, i = h[o] = h[o] || this.dflt, a && (u = e.indexOf(a), p = i.indexOf(a), u !== p && (-1 === p ? l[o] = l[o].split(a).join("") : -1 === u && (l[o] += " " + a)));
                        e = l.join(", "), i = h.join(", ")
                    }
                    return St(t, this.p, e, i, this.clrs, this.dflt, r, this.pr, n, s)
                }, h.parse = function(t, e, i, r, n, s, o) {
                    return this.parseComplex(t.style, this.format(tt(t, this.p, a, !1, this.dflt)), this.format(e), n, s)
                }, i.registerSpecialProp = function(t, e, i) {
                    kt(t, {
                        parser: function(t, r, n, s, a, o, l) {
                            var h = new wt(t, n, 0, 0, a, 2, n, !1, i);
                            return h.plugin = o, h.setRatio = e(t, r, s._tween, n), h
                        },
                        priority: i
                    })
                }, i.useSVGTransformAttr = !0;
                var Dt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Et = K("transform"),
                    At = Z + "transform",
                    Rt = K("transformOrigin"),
                    Mt = null !== K("perspective"),
                    Xt = Y.Transform = function() {
                        this.perspective = parseFloat(i.defaultTransformPerspective) || 0, this.force3D = !(!1 === i.defaultForce3D || !Mt) && (i.defaultForce3D || "auto")
                    },
                    zt = _gsScope.SVGElement,
                    Yt, Ft = function(t, e, i) {
                        var r = R.createElementNS("http://www.w3.org/2000/svg", t),
                            n = /([a-z])([A-Z])/g,
                            s;
                        for (s in i) r.setAttributeNS(null, s.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), i[s]);
                        return e.appendChild(r), r
                    },
                    Nt = R.documentElement || {},
                    It = function() {
                        var t = j || /Android/i.test(F) && !_gsScope.chrome,
                            e, i, r;
                        return R.createElementNS && !t && (e = Ft("svg", Nt), i = Ft("rect", e, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), r = i.getBoundingClientRect().width, i.style[Rt] = "50% 50%", i.style[Et] = "scaleX(0.5)", t = r === i.getBoundingClientRect().width && !(V && Mt), Nt.removeChild(e)), t
                    }(),
                    Lt = function(t, e, r, n, s, a) {
                        var o = t._gsTransform,
                            l = Ht(t, !0),
                            h, c, u, p, f, d, g, m, v, _, y, x, b, w;
                        o && (b = o.xOrigin, w = o.yOrigin), (!n || (h = n.split(" ")).length < 2) && (g = t.getBBox(), 0 === g.x && 0 === g.y && g.width + g.height === 0 && (g = {
                            x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                            y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                            width: 0,
                            height: 0
                        }), e = lt(e).split(" "), h = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * g.width : parseFloat(e[0])) + g.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * g.height : parseFloat(e[1])) + g.y]), r.xOrigin = p = parseFloat(h[0]), r.yOrigin = f = parseFloat(h[1]), n && l !== qt && (d = l[0], g = l[1], m = l[2], v = l[3], _ = l[4], y = l[5], (x = d * v - g * m) && (c = p * (v / x) + f * (-m / x) + (m * y - v * _) / x, u = p * (-g / x) + f * (d / x) - (d * y - g * _) / x, p = r.xOrigin = h[0] = c, f = r.yOrigin = h[1] = u)), o && (a && (r.xOffset = o.xOffset, r.yOffset = o.yOffset, o = r), s || !1 !== s && !1 !== i.defaultSmoothOrigin ? (c = p - b, u = f - w, o.xOffset += c * l[0] + u * l[2] - c, o.yOffset += c * l[1] + u * l[3] - u) : o.xOffset = o.yOffset = 0), a || t.setAttribute("data-svg-origin", h.join(" "))
                    },
                    Vt = function(t) {
                        var e = M("svg", this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                            i = this.parentNode,
                            r = this.nextSibling,
                            n = this.style.cssText,
                            s;
                        if (Nt.appendChild(e), e.appendChild(this), this.style.display = "block", t) try {
                            s = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Vt
                        } catch (t) {} else this._originalGetBBox && (s = this._originalGetBBox());
                        return r ? i.insertBefore(this, r) : i.appendChild(this), Nt.removeChild(e), this.style.cssText = n, s
                    },
                    Bt = function(t) {
                        try {
                            return t.getBBox()
                        } catch (e) {
                            return Vt.call(t, !0)
                        }
                    },
                    jt = function(t) {
                        return !(!(zt && t.getCTM && Bt(t)) || t.parentNode && !t.ownerSVGElement)
                    },
                    qt = [1, 0, 0, 1, 0, 0],
                    Ht = function(t, e) {
                        var i = t._gsTransform || new Xt,
                            r = 1e5,
                            n = t.style,
                            s, a, o, l, h, u;
                        if (Et ? a = tt(t, At, null, !0) : t.currentStyle && (a = t.currentStyle.filter.match(/(M11|M12|M21|M22)=[\d\-\.e]+/gi), a = a && 4 === a.length ? [a[0].substr(4), Number(a[2].substr(4)), Number(a[1].substr(4)), a[3].substr(4), i.x || 0, i.y || 0].join(",") : ""), s = !a || "none" === a || "matrix(1, 0, 0, 1, 0, 0)" === a, s && Et && ((u = "none" === J(t).display) || !t.parentNode) && (u && (l = n.display, n.display = "block"), t.parentNode || (h = 1, Nt.appendChild(t)), a = tt(t, At, null, !0), s = !a || "none" === a || "matrix(1, 0, 0, 1, 0, 0)" === a, l ? n.display = l : u && $t(n, "display"), h && Nt.removeChild(t)), (i.svg || t.getCTM && jt(t)) && (s && -1 !== (n[Et] + "").indexOf("matrix") && (a = n[Et], s = 0), o = t.getAttribute("transform"), s && o && (-1 !== o.indexOf("matrix") ? (a = o, s = 0) : -1 !== o.indexOf("translate") && (a = "matrix(1,0,0,1," + o.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", s = 0))), s) return qt;
                        for (o = (a || "").match(c) || [], Pt = o.length; --Pt > -1;) l = Number(o[Pt]), o[Pt] = (h = l - (l |= 0)) ? (1e5 * h + (h < 0 ? -.5 : .5) | 0) / 1e5 + l : l;
                        return e && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o
                    },
                    Wt = Y.getTransform = function(t, r, n, s) {
                        if (t._gsTransform && n && !s) return t._gsTransform;
                        var a = n ? t._gsTransform || new Xt : new Xt,
                            o = a.scaleX < 0,
                            l = 2e-5,
                            h = 1e5,
                            c = Mt ? parseFloat(tt(t, Rt, r, !1, "0 0 0").split(" ")[2]) || a.zOrigin || 0 : 0,
                            u = parseFloat(i.defaultTransformPerspective) || 0,
                            p, f, d, g, m, v;
                        if (a.svg = !(!t.getCTM || !jt(t)), a.svg && (Lt(t, tt(t, Rt, r, !1, "50% 50%") + "", a, t.getAttribute("data-svg-origin")), Yt = i.useSVGTransformAttr || It), (p = Ht(t)) !== qt) {
                            if (16 === p.length) {
                                var _ = p[0],
                                    y = p[1],
                                    x = p[2],
                                    b = p[3],
                                    w = p[4],
                                    T = p[5],
                                    S = p[6],
                                    P = p[7],
                                    O = p[8],
                                    k = p[9],
                                    C = p[10],
                                    E = p[12],
                                    A = p[13],
                                    R = p[14],
                                    M = p[11],
                                    X = Math.atan2(S, C),
                                    z, Y, F, N, I, L;
                                a.zOrigin && (R = -a.zOrigin, E = O * R - p[12], A = k * R - p[13], R = C * R + a.zOrigin - p[14]), a.rotationX = X * D, X && (I = Math.cos(-X), L = Math.sin(-X), z = w * I + O * L, Y = T * I + k * L, F = S * I + C * L, O = w * -L + O * I, k = T * -L + k * I, C = S * -L + C * I, M = P * -L + M * I, w = z, T = Y, S = F), X = Math.atan2(-x, C), a.rotationY = X * D, X && (I = Math.cos(-X), L = Math.sin(-X), z = _ * I - O * L, Y = y * I - k * L, F = x * I - C * L, k = y * L + k * I, C = x * L + C * I, M = b * L + M * I, _ = z, y = Y, x = F), X = Math.atan2(y, _), a.rotation = X * D, X && (I = Math.cos(-X), L = Math.sin(-X), _ = _ * I + w * L, Y = y * I + T * L, T = y * -L + T * I, S = x * -L + S * I, y = Y), a.rotationX && Math.abs(a.rotationX) + Math.abs(a.rotation) > 359.9 && (a.rotationX = a.rotation = 0, a.rotationY = 180 - a.rotationY), a.scaleX = (1e5 * Math.sqrt(_ * _ + y * y) + .5 | 0) / 1e5, a.scaleY = (1e5 * Math.sqrt(T * T + k * k) + .5 | 0) / 1e5, a.scaleZ = (1e5 * Math.sqrt(S * S + C * C) + .5 | 0) / 1e5, a.rotationX || a.rotationY ? a.skewX = 0 : (a.skewX = w || T ? Math.atan2(w, T) * D + a.rotation : a.skewX || 0, Math.abs(a.skewX) > 90 && Math.abs(a.skewX) < 270 && (o ? (a.scaleX *= -1, a.skewX += a.rotation <= 0 ? 180 : -180, a.rotation += a.rotation <= 0 ? 180 : -180) : (a.scaleY *= -1, a.skewX += a.skewX <= 0 ? 180 : -180))), a.perspective = M ? 1 / (M < 0 ? -M : M) : 0, a.x = E, a.y = A, a.z = R, a.svg && (a.x -= a.xOrigin - (a.xOrigin * _ - a.yOrigin * w), a.y -= a.yOrigin - (a.yOrigin * y - a.xOrigin * T))
                            } else if (!Mt || s || !p.length || a.x !== p[4] || a.y !== p[5] || !a.rotationX && !a.rotationY) {
                                var V = p.length >= 6,
                                    B = V ? p[0] : 1,
                                    j = p[1] || 0,
                                    q = p[2] || 0,
                                    H = V ? p[3] : 1;
                                a.x = p[4] || 0, a.y = p[5] || 0, d = Math.sqrt(B * B + j * j), g = Math.sqrt(H * H + q * q), m = B || j ? Math.atan2(j, B) * D : a.rotation || 0, v = q || H ? Math.atan2(q, H) * D + m : a.skewX || 0, Math.abs(v) > 90 && Math.abs(v) < 270 && (o ? (d *= -1, v += m <= 0 ? 180 : -180, m += m <= 0 ? 180 : -180) : (g *= -1, v += v <= 0 ? 180 : -180)), a.scaleX = d, a.scaleY = g, a.rotation = m, a.skewX = v, Mt && (a.rotationX = a.rotationY = a.z = 0, a.perspective = u, a.scaleZ = 1), a.svg && (a.x -= a.xOrigin - (a.xOrigin * B + a.yOrigin * q), a.y -= a.yOrigin - (a.xOrigin * j + a.yOrigin * H))
                            }
                            a.zOrigin = c;
                            for (f in a) a[f] < 2e-5 && a[f] > -2e-5 && (a[f] = 0)
                        }
                        return n && (t._gsTransform = a, a.svg && (Yt && t.style[Et] ? e.delayedCall(.001, function() {
                            $t(t.style, Et)
                        }) : !Yt && t.getAttribute("transform") && e.delayedCall(.001, function() {
                            t.removeAttribute("transform")
                        }))), a
                    },
                    Ut = function(t) {
                        var e = this.data,
                            i = -e.rotation * C,
                            r = i + e.skewX * C,
                            n = 1e5,
                            s = (Math.cos(i) * e.scaleX * 1e5 | 0) / 1e5,
                            a = (Math.sin(i) * e.scaleX * 1e5 | 0) / 1e5,
                            o = (Math.sin(r) * -e.scaleY * 1e5 | 0) / 1e5,
                            l = (Math.cos(r) * e.scaleY * 1e5 | 0) / 1e5,
                            h = this.t.style,
                            c = this.t.currentStyle,
                            u, p;
                        if (c) {
                            p = a, a = -o, o = -p, u = c.filter, h.filter = "";
                            var f = this.t.offsetWidth,
                                m = this.t.offsetHeight,
                                v = "absolute" !== c.position,
                                _ = "progid:DXImageTransform.Microsoft.Matrix(M11=" + s + ", M12=" + a + ", M21=" + o + ", M22=" + l,
                                y = e.x + f * e.xPercent / 100,
                                x = e.y + m * e.yPercent / 100,
                                b, w;
                            if (null != e.ox && (b = (e.oxp ? f * e.ox * .01 : e.ox) - f / 2, w = (e.oyp ? m * e.oy * .01 : e.oy) - m / 2, y += b - (b * s + w * a), x += w - (b * o + w * l)), v ? (b = f / 2, w = m / 2, _ += ", Dx=" + (b - (b * s + w * a) + y) + ", Dy=" + (w - (b * o + w * l) + x) + ")") : _ += ", sizingMethod='auto expand')", -1 !== u.indexOf("DXImageTransform.Microsoft.Matrix(") ? h.filter = u.replace(/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, _) : h.filter = _ + " " + u, 0 !== t && 1 !== t || 1 === s && 0 === a && 0 === o && 1 === l && (v && -1 === _.indexOf("Dx=0, Dy=0") || g.test(u) && 100 !== parseFloat(RegExp.$1) || -1 === u.indexOf(u.indexOf("Alpha")) && h.removeAttribute("filter")), !v) {
                                var T = j < 8 ? 1 : -1,
                                    S, P, O;
                                for (b = e.ieOffsetX || 0, w = e.ieOffsetY || 0, e.ieOffsetX = Math.round((f - ((s < 0 ? -s : s) * f + (a < 0 ? -a : a) * m)) / 2 + y), e.ieOffsetY = Math.round((m - ((l < 0 ? -l : l) * m + (o < 0 ? -o : o) * f)) / 2 + x), Pt = 0; Pt < 4; Pt++) P = at[Pt], S = c[P], p = -1 !== S.indexOf("px") ? parseFloat(S) : et(this.t, P, parseFloat(S), S.replace(d, "")) || 0, O = p !== e[P] ? Pt < 2 ? -e.ieOffsetX : -e.ieOffsetY : Pt < 2 ? b - e.ieOffsetX : w - e.ieOffsetY, h[P] = (e[P] = Math.round(p - O * (0 === Pt || 2 === Pt ? 1 : T))) + "px"
                            }
                        }
                    },
                    Gt = Y.set3DTransformRatio = Y.setTransformRatio = function(t) {
                        var e = this.data,
                            i = this.t.style,
                            r = e.rotation,
                            n = e.rotationX,
                            s = e.rotationY,
                            a = e.scaleX,
                            o = e.scaleY,
                            l = e.scaleZ,
                            h = e.x,
                            c = e.y,
                            u = e.z,
                            p = e.svg,
                            f = e.perspective,
                            d = e.force3D,
                            g = e.skewY,
                            m = e.skewX,
                            v, _, y, x, b, w, T, S, P, O, k, D, E, A, R, M, X, z, Y, F, N, I, L;
                        if (g && (m += g, r += g), ((1 === t || 0 === t) && "auto" === d && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !d) && !u && !f && !s && !n && 1 === l || Yt && p || !Mt) return void(r || m || p ? (r *= C, I = m * C, L = 1e5, _ = Math.cos(r) * a, b = Math.sin(r) * a, y = Math.sin(r - I) * -o, w = Math.cos(r - I) * o, I && "simple" === e.skewType && (v = Math.tan(I - g * C), v = Math.sqrt(1 + v * v), y *= v, w *= v, g && (v = Math.tan(g * C), v = Math.sqrt(1 + v * v), _ *= v, b *= v)), p && (h += e.xOrigin - (e.xOrigin * _ + e.yOrigin * y) + e.xOffset, c += e.yOrigin - (e.xOrigin * b + e.yOrigin * w) + e.yOffset, Yt && (e.xPercent || e.yPercent) && (R = this.t.getBBox(), h += .01 * e.xPercent * R.width, c += .01 * e.yPercent * R.height), R = 1e-6, h < R && h > -R && (h = 0), c < R && c > -R && (c = 0)), Y = (_ * L | 0) / L + "," + (b * L | 0) / L + "," + (y * L | 0) / L + "," + (w * L | 0) / L + "," + h + "," + c + ")", p && Yt ? this.t.setAttribute("transform", "matrix(" + Y) : i[Et] = (e.xPercent || e.yPercent ? "translate(" + e.xPercent + "%," + e.yPercent + "%) matrix(" : "matrix(") + Y) : i[Et] = (e.xPercent || e.yPercent ? "translate(" + e.xPercent + "%," + e.yPercent + "%) matrix(" : "matrix(") + a + ",0,0," + o + "," + h + "," + c + ")");
                        if (V && (R = 1e-4, a < R && a > -R && (a = l = 2e-5), o < R && o > -R && (o = l = 2e-5), !f || e.z || e.rotationX || e.rotationY || (f = 0)), r || m) r *= C, M = _ = Math.cos(r), X = b = Math.sin(r), m && (r -= m * C, M = Math.cos(r), X = Math.sin(r), "simple" === e.skewType && (v = Math.tan((m - g) * C), v = Math.sqrt(1 + v * v), M *= v, X *= v, e.skewY && (v = Math.tan(g * C), v = Math.sqrt(1 + v * v), _ *= v, b *= v))), y = -X, w = M;
                        else {
                            if (!(s || n || 1 !== l || f || p)) return void(i[Et] = (e.xPercent || e.yPercent ? "translate(" + e.xPercent + "%," + e.yPercent + "%) translate3d(" : "translate3d(") + h + "px," + c + "px," + u + "px)" + (1 !== a || 1 !== o ? " scale(" + a + "," + o + ")" : ""));
                            _ = w = 1, y = b = 0
                        }
                        O = 1, x = T = S = P = k = D = 0, E = f ? -1 / f : 0, A = e.zOrigin, R = 1e-6, F = ",", N = "0", r = s * C, r && (M = Math.cos(r), X = Math.sin(r), S = -X, k = E * -X, x = _ * X, T = b * X, O = M, E *= M, _ *= M, b *= M), r = n * C, r && (M = Math.cos(r), X = Math.sin(r), v = y * M + x * X, z = w * M + T * X, P = O * X, D = E * X, x = y * -X + x * M, T = w * -X + T * M, O *= M, E *= M, y = v, w = z), 1 !== l && (x *= l, T *= l, O *= l, E *= l), 1 !== o && (y *= o, w *= o, P *= o, D *= o), 1 !== a && (_ *= a, b *= a, S *= a, k *= a), (A || p) && (A && (h += x * -A, c += T * -A, u += O * -A + A), p && (h += e.xOrigin - (e.xOrigin * _ + e.yOrigin * y) + e.xOffset, c += e.yOrigin - (e.xOrigin * b + e.yOrigin * w) + e.yOffset), h < R && h > -R && (h = N), c < R && c > -R && (c = N), u < R && u > -R && (u = 0)), Y = e.xPercent || e.yPercent ? "translate(" + e.xPercent + "%," + e.yPercent + "%) matrix3d(" : "matrix3d(", Y += (_ < R && _ > -R ? N : _) + F + (b < R && b > -R ? N : b) + F + (S < R && S > -R ? N : S), Y += F + (k < R && k > -R ? N : k) + F + (y < R && y > -R ? N : y) + F + (w < R && w > -R ? N : w), n || s || 1 !== l ? (Y += F + (P < R && P > -R ? N : P) + F + (D < R && D > -R ? N : D) + F + (x < R && x > -R ? N : x), Y += F + (T < R && T > -R ? N : T) + F + (O < R && O > -R ? N : O) + F + (E < R && E > -R ? N : E) + F) : Y += ",0,0,0,0,1,0,", Y += h + F + c + F + u + F + (f ? 1 + -u / f : 1) + ")", i[Et] = Y
                    };
                h = Xt.prototype, h.x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, h.scaleX = h.scaleY = h.scaleZ = 1, kt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(t, e, r, n, s, o, l) {
                        if (n._lastParsedTransform === l) return s;
                        n._lastParsedTransform = l;
                        var h = l.scale && "function" == typeof l.scale ? l.scale : 0,
                            c;
                        "function" == typeof l[r] && (c = l[r], l[r] = e), h && (l.scale = h(G, t));
                        var u = t._gsTransform,
                            p = t.style,
                            f = 1e-6,
                            d = Dt.length,
                            g = l,
                            m = {},
                            v = "transformOrigin",
                            _ = Wt(t, a, !0, g.parseTransform),
                            y = g.transform && ("function" == typeof g.transform ? g.transform(G, U) : g.transform),
                            x, b, w, T, S, P, O, k, C;
                        if (n._transform = _, y && "string" == typeof y && Et) b = X.style, b[Et] = y, b.display = "block", b.position = "absolute", R.body.appendChild(X), x = Wt(X, null, !1), _.svg && (P = _.xOrigin, O = _.yOrigin, x.x -= _.xOffset, x.y -= _.yOffset, (g.transformOrigin || g.svgOrigin) && (y = {}, Lt(t, lt(g.transformOrigin), y, g.svgOrigin, g.smoothOrigin, !0), P = y.xOrigin, O = y.yOrigin, x.x -= y.xOffset - _.xOffset, x.y -= y.yOffset - _.yOffset), (P || O) && (k = Ht(X, !0), x.x -= P - (P * k[0] + O * k[2]), x.y -= O - (P * k[1] + O * k[3]))),
                            R.body.removeChild(X), x.perspective || (x.perspective = _.perspective), null != g.xPercent && (x.xPercent = ct(g.xPercent, _.xPercent)), null != g.yPercent && (x.yPercent = ct(g.yPercent, _.yPercent));
                        else if ("object" == typeof g) {
                            if (x = {
                                    scaleX: ct(null != g.scaleX ? g.scaleX : g.scale, _.scaleX),
                                    scaleY: ct(null != g.scaleY ? g.scaleY : g.scale, _.scaleY),
                                    scaleZ: ct(g.scaleZ, _.scaleZ),
                                    x: ct(g.x, _.x),
                                    y: ct(g.y, _.y),
                                    z: ct(g.z, _.z),
                                    xPercent: ct(g.xPercent, _.xPercent),
                                    yPercent: ct(g.yPercent, _.yPercent),
                                    perspective: ct(g.transformPerspective, _.perspective)
                                }, null != (S = g.directionalRotation))
                                if ("object" == typeof S)
                                    for (b in S) g[b] = S[b];
                                else g.rotation = S;
                            "string" == typeof g.x && -1 !== g.x.indexOf("%") && (x.x = 0, x.xPercent = ct(g.x, _.xPercent)), "string" == typeof g.y && -1 !== g.y.indexOf("%") && (x.y = 0, x.yPercent = ct(g.y, _.yPercent)), x.rotation = ut("rotation" in g ? g.rotation : "shortRotation" in g ? g.shortRotation + "_short" : "rotationZ" in g ? g.rotationZ : _.rotation, _.rotation, "rotation", m), Mt && (x.rotationX = ut("rotationX" in g ? g.rotationX : "shortRotationX" in g ? g.shortRotationX + "_short" : _.rotationX || 0, _.rotationX, "rotationX", m), x.rotationY = ut("rotationY" in g ? g.rotationY : "shortRotationY" in g ? g.shortRotationY + "_short" : _.rotationY || 0, _.rotationY, "rotationY", m)), x.skewX = ut(g.skewX, _.skewX), x.skewY = ut(g.skewY, _.skewY)
                        }
                        for (Mt && null != g.force3D && (_.force3D = g.force3D, T = !0), _.skewType = g.skewType || _.skewType || i.defaultSkewType, w = _.force3D || _.z || _.rotationX || _.rotationY || x.z || x.rotationX || x.rotationY || x.perspective, w || null == g.scale || (x.scaleZ = 1); --d > -1;) C = Dt[d], ((y = x[C] - _[C]) > 1e-6 || y < -1e-6 || null != g[C] || null != E[C]) && (T = !0, s = new wt(_, C, _[C], y, s), C in m && (s.e = m[C]), s.xs0 = 0, s.plugin = o, n._overwriteProps.push(s.n));
                        return y = g.transformOrigin, _.svg && (y || g.svgOrigin) && (P = _.xOffset, O = _.yOffset, Lt(t, lt(y), x, g.svgOrigin, g.smoothOrigin), s = Tt(_, "xOrigin", (u ? _ : x).xOrigin, x.xOrigin, s, "transformOrigin"), s = Tt(_, "yOrigin", (u ? _ : x).yOrigin, x.yOrigin, s, "transformOrigin"), P === _.xOffset && O === _.yOffset || (s = Tt(_, "xOffset", u ? P : _.xOffset, _.xOffset, s, "transformOrigin"), s = Tt(_, "yOffset", u ? O : _.yOffset, _.yOffset, s, "transformOrigin")), y = "0px 0px"), (y || Mt && w && _.zOrigin) && (Et ? (T = !0, C = Rt, y = (y || tt(t, C, a, !1, "50% 50%")) + "", s = new wt(p, C, 0, 0, s, -1, "transformOrigin"), s.b = p[C], s.plugin = o, Mt ? (b = _.zOrigin, y = y.split(" "), _.zOrigin = (y.length > 2 && (0 === b || "0px" !== y[2]) ? parseFloat(y[2]) : b) || 0, s.xs0 = s.e = y[0] + " " + (y[1] || "50%") + " 0px", s = new wt(_, "zOrigin", 0, 0, s, -1, s.n), s.b = b, s.xs0 = s.e = _.zOrigin) : s.xs0 = s.e = y) : lt(y + "", _)), T && (n._transformType = _.svg && Yt || !w && 3 !== this._transformType ? 2 : 3), c && (l[r] = c), h && (l.scale = h), s
                    },
                    prefix: !0
                }), kt("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), kt("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, r, n, o) {
                        e = this.format(e);
                        var l = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            h = t.style,
                            c, u, p, f, d, g, m, v, _, y, x, b, w, T, S, P;
                        for (_ = parseFloat(t.offsetWidth), y = parseFloat(t.offsetHeight), c = e.split(" "), u = 0; u < l.length; u++) this.p.indexOf("border") && (l[u] = K(l[u])), d = f = tt(t, l[u], a, !1, "0px"), -1 !== d.indexOf(" ") && (f = d.split(" "), d = f[0], f = f[1]), g = p = c[u], m = parseFloat(d), b = d.substr((m + "").length), w = "=" === g.charAt(1), w ? (v = parseInt(g.charAt(0) + "1", 10), g = g.substr(2), v *= parseFloat(g), x = g.substr((v + "").length - (v < 0 ? 1 : 0)) || "") : (v = parseFloat(g), x = g.substr((v + "").length)), "" === x && (x = s[i] || b), x !== b && (T = et(t, "borderLeft", m, b), S = et(t, "borderTop", m, b), "%" === x ? (d = T / _ * 100 + "%", f = S / y * 100 + "%") : "em" === x ? (P = et(t, "borderLeft", 1, "em"), d = T / P + "em", f = S / P + "em") : (d = T + "px", f = S + "px"), w && (g = parseFloat(d) + v + x, p = parseFloat(f) + v + x)), n = St(h, l[u], d + " " + f, g + " " + p, !1, "0px", n);
                        return n
                    },
                    prefix: !0,
                    formatter: vt("0px 0px 0px 0px", !1, !0)
                }), kt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, r, n, s) {
                        return St(t.style, i, this.format(tt(t, i, a, !1, "0px 0px")), this.format(e), !1, "0px", n)
                    },
                    prefix: !0,
                    formatter: vt("0px 0px", !1, !0)
                }), kt("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, r, n, s) {
                        var o = "background-position",
                            l = a || J(t, null),
                            h = this.format((l ? j ? l.getPropertyValue(o + "-x") + " " + l.getPropertyValue(o + "-y") : l.getPropertyValue(o) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            c = this.format(e),
                            u, p, f, d, g, m;
                        if (-1 !== h.indexOf("%") != (-1 !== c.indexOf("%")) && c.split(",").length < 2 && (m = tt(t, "backgroundImage").replace(/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, "")) && "none" !== m) {
                            for (u = h.split(" "), p = c.split(" "), z.setAttribute("src", m), f = 2; --f > -1;) h = u[f], (d = -1 !== h.indexOf("%")) !== (-1 !== p[f].indexOf("%")) && (g = 0 === f ? t.offsetWidth - z.width : t.offsetHeight - z.height, u[f] = d ? parseFloat(h) / 100 * g + "px" : parseFloat(h) / g * 100 + "%");
                            h = u.join(" ")
                        }
                        return this.parseComplex(t.style, h, c, n, s)
                    },
                    formatter: lt
                }), kt("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: function(t) {
                        return t += "", lt(-1 === t.indexOf(" ") ? t + " " + t : t)
                    }
                }), kt("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), kt("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), kt("transformStyle", {
                    prefix: !0
                }), kt("backfaceVisibility", {
                    prefix: !0
                }), kt("userSelect", {
                    prefix: !0
                }), kt("margin", {
                    parser: _t("marginTop,marginRight,marginBottom,marginLeft")
                }), kt("padding", {
                    parser: _t("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), kt("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, r, n, s) {
                        var o, l, h;
                        return j < 9 ? (l = t.currentStyle, h = j < 8 ? " " : ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(tt(t, this.p, a, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, s)
                    }
                }), kt("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), kt("autoRound,strictUnits", {
                    parser: function(t, e, i, r, n) {
                        return n
                    }
                }), kt("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, r, n, s) {
                        var o = tt(t, "borderTopWidth", a, !1, "0px"),
                            l = this.format(e).split(" "),
                            h = l[0].replace(d, "");
                        return "px" !== h && (o = parseFloat(o) / et(t, "borderTopWidth", 1, h) + h), this.parseComplex(t.style, this.format(o + " " + tt(t, "borderTopStyle", a, !1, "solid") + " " + tt(t, "borderTopColor", a, !1, "#000")), l.join(" "), n, s)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(mt) || ["#000"])[0]
                    }
                }), kt("borderWidth", {
                    parser: _t("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), kt("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, r, n, s) {
                        var a = t.style,
                            o = "cssFloat" in a ? "cssFloat" : "styleFloat";
                        return new wt(a, o, 0, 0, n, -1, i, !1, 0, a[o], e)
                    }
                });
                var Zt = function(t) {
                    var e = this.t,
                        i = e.filter || tt(this.data, "filter") || "",
                        r = this.s + this.c * t | 0,
                        n;
                    100 === r && (-1 === i.indexOf("atrix(") && -1 === i.indexOf("radient(") && -1 === i.indexOf("oader(") ? (e.removeAttribute("filter"), n = !tt(this.data, "filter")) : (e.filter = i.replace(/alpha\(opacity *=.+?\)/i, ""), n = !0)), n || (this.xn1 && (e.filter = i = i || "alpha(opacity=" + r + ")"), -1 === i.indexOf("pacity") ? 0 === r && this.xn1 || (e.filter = i + " alpha(opacity=" + r + ")") : e.filter = i.replace(g, "opacity=" + r))
                };
                kt("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, r, n, s) {
                        var o = parseFloat(tt(t, "opacity", a, !1, "1")),
                            l = t.style,
                            h = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), h && 1 === o && "hidden" === tt(t, "visibility", a) && 0 !== e && (o = 0), q ? n = new wt(l, "opacity", o, e - o, n) : (n = new wt(l, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = h ? 1 : 0, l.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = s, n.setRatio = Zt), h && (n = new wt(l, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", r._overwriteProps.push(n.n), r._overwriteProps.push(i)), n
                    }
                });
                var $t = function(t, e) {
                        e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(/([A-Z])/g, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    Qt = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : $t(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                kt("className", {
                    parser: function(t, e, i, r, s, o, l) {
                        var h = t.getAttribute("class") || "",
                            c = t.style.cssText,
                            u, p, f, d, g;
                        if (s = r._classNamePT = new wt(t, i, 0, 0, s, 2), s.setRatio = Qt, s.pr = -11, n = !0, s.b = h, p = rt(t, a), f = t._gsClassPT) {
                            for (d = {}, g = f.data; g;) d[g.p] = 1, g = g._next;
                            f.setRatio(1)
                        }
                        return t._gsClassPT = s, s.e = "=" !== e.charAt(1) ? e : h.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", s.e), u = nt(t, p, rt(t), l, d), t.setAttribute("class", h), s.data = u.firstMPT, t.style.cssText = c, s = s.xfirst = r.parse(t, u.difs, s, o)
                    }
                });
                var Kt = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e = this.t.style,
                            i = l.transform.parse,
                            r, n, s, a, o;
                        if ("all" === this.e) e.cssText = "", a = !0;
                        else
                            for (r = this.e.split(" ").join("").split(","), s = r.length; --s > -1;) n = r[s], l[n] && (l[n].parse === i ? a = !0 : n = "transformOrigin" === n ? Rt : l[n].p), $t(e, n);
                        a && ($t(e, Et), (o = this.t._gsTransform) && (o.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (kt("clearProps", {
                        parser: function(t, e, i, r, s) {
                            return s = new wt(t, i, 0, 0, s, 2), s.setRatio = Kt, s.e = e, s.pr = -10, s.data = r._tween, n = !0, s
                        }
                    }), h = "bezier,throwProps,physicsProps,physics2D".split(","), Pt = h.length; Pt--;) Ct(h[Pt]);
                h = i.prototype, h._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function(t, e, r, h) {
                    if (!t.nodeType) return !1;
                    this._target = U = t, this._tween = r, this._vars = e, G = h, N = e.autoRound, n = !1, s = e.suffixMap || i.suffixMap, a = J(t, ""), o = this._overwriteProps;
                    var c = t.style,
                        u, p, f, d, g, v, _, y, x;
                    if (I && "" === c.zIndex && ("auto" !== (u = tt(t, "zIndex", a)) && "" !== u || this._addLazySet(c, "zIndex", 0)), "string" == typeof e && (d = c.cssText, u = rt(t, a), c.cssText = d + ";" + e, u = nt(t, u, rt(t)).difs, !q && m.test(e) && (u.opacity = parseFloat(RegExp.$1)), e = u, c.cssText = d), e.className ? this._firstPT = p = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = p = this.parse(t, e, null), this._transformType) {
                        for (x = 3 === this._transformType, Et ? L && (I = !0, "" === c.zIndex && ("auto" !== (_ = tt(t, "zIndex", a)) && "" !== _ || this._addLazySet(c, "zIndex", 0)), B && this._addLazySet(c, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden"))) : c.zoom = 1, f = p; f && f._next;) f = f._next;
                        y = new wt(t, "transform", 0, 0, null, 2), this._linkCSSP(y, null, f), y.setRatio = Et ? Gt : Ut, y.data = this._transform || Wt(t, a, !0), y.tween = r, y.pr = -1, o.pop()
                    }
                    if (n) {
                        for (; p;) {
                            for (v = p._next, f = d; f && f.pr > p.pr;) f = f._next;
                            (p._prev = f ? f._prev : g) ? p._prev._next = p: d = p, (p._next = f) ? f._prev = p : g = p, p = v
                        }
                        this._firstPT = d
                    }
                    return !0
                }, h.parse = function(t, e, i, r) {
                    var n = t.style,
                        o, h, c, u, p, f, g, m, v, y;
                    for (o in e) f = e[o], "function" == typeof f && (f = f(G, U)), h = l[o], h ? i = h.parse(t, f, o, this, i, r, e) : (p = tt(t, o, a) + "", v = "string" == typeof f, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || v && _.test(f) ? (v || (f = dt(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = St(n, o, p, f, !0, "transparent", i, 0, r)) : v && k.test(f) ? i = St(n, o, p, f, !0, null, i, 0, r) : (c = parseFloat(p), g = c || 0 === c ? p.substr((c + "").length) : "", "" !== p && "auto" !== p || ("width" === o || "height" === o ? (c = ot(t, o, a), g = "px") : "left" === o || "top" === o ? (c = it(t, o, a), g = "px") : (c = "opacity" !== o ? 0 : 1, g = "")), y = v && "=" === f.charAt(1), y ? (u = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), u *= parseFloat(f), m = f.replace(d, "")) : (u = parseFloat(f), m = v ? f.replace(d, "") : ""), "" === m && (m = o in s ? s[o] : g), f = u || 0 === u ? (y ? u + c : u) + m : e[o], g !== m && "" !== m && (u || 0 === u) && c && (c = et(t, o, c, g), "%" === m ? (c /= et(t, o, 100, "%") / 100, !0 !== e.strictUnits && (p = c + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? c /= et(t, o, 1, m) : "px" !== m && (u = et(t, o, u, m), m = "px"), y && (u || 0 === u) && (f = u + c + m)), y && (u += c), !c && 0 !== c || !u && 0 !== u ? void 0 !== n[o] && (f || f + "" != "NaN" && null != f) ? (i = new wt(n, o, u || c || 0, 0, i, -1, o, !1, 0, p, f), i.xs0 = "none" !== f || "display" !== o && -1 === o.indexOf("Style") ? f : p) : W("invalid " + o + " tween value: " + e[o]) : (i = new wt(n, o, c, u - c, i, 0, o, !1 !== N && ("px" === m || "zIndex" === o), 0, p, f), i.xs0 = m))), r && i && !i.plugin && (i.plugin = r);
                    return i
                }, h.setRatio = function(t) {
                    var e = this._firstPT,
                        i = 1e-6,
                        r, n, s;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                            for (; e;) {
                                if (r = e.c * t + e.s, e.r ? r = Math.round(r) : r < 1e-6 && r > -1e-6 && (r = 0), e.type)
                                    if (1 === e.type)
                                        if (2 === (s = e.l)) e.t[e.p] = e.xs0 + r + e.xs1 + e.xn1 + e.xs2;
                                        else if (3 === s) e.t[e.p] = e.xs0 + r + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                                else if (4 === s) e.t[e.p] = e.xs0 + r + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
                                else if (5 === s) e.t[e.p] = e.xs0 + r + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;
                                else {
                                    for (n = e.xs0 + r + e.xs1, s = 1; s < e.l; s++) n += e["xn" + s] + e["xs" + (s + 1)];
                                    e.t[e.p] = n
                                } else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(t);
                                else e.t[e.p] = r + e.xs0;
                                e = e._next
                            } else
                                for (; e;) 2 !== e.type ? e.t[e.p] = e.b : e.setRatio(t), e = e._next;
                        else
                            for (; e;) {
                                if (2 !== e.type)
                                    if (e.r && -1 !== e.type)
                                        if (r = Math.round(e.s + e.c), e.type) {
                                            if (1 === e.type) {
                                                for (s = e.l, n = e.xs0 + r + e.xs1, s = 1; s < e.l; s++) n += e["xn" + s] + e["xs" + (s + 1)];
                                                e.t[e.p] = n
                                            }
                                        } else e.t[e.p] = r + e.xs0;
                                else e.t[e.p] = e.e;
                                else e.setRatio(t);
                                e = e._next
                            }
                }, h._enableTransforms = function(t) {
                    this._transform = this._transform || Wt(this._target, a, !0), this._transformType = this._transform.svg && Yt || !t && 3 !== this._transformType ? 2 : 3
                };
                var Jt = function(t) {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                h._addLazySet = function(t, e, i) {
                    var r = this._firstPT = new wt(t, e, 0, 0, this._firstPT, 2);
                    r.e = i, r.setRatio = Jt, r.data = this
                }, h._linkCSSP = function(t, e, i, r) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, r = !0), i ? i._next = t : r || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, h._mod = function(t) {
                    for (var e = this._firstPT; e;) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
                }, h._kill = function(e) {
                    var i = e,
                        r, n, s;
                    if (e.autoAlpha || e.alpha) {
                        i = {};
                        for (n in e) i[n] = e[n];
                        i.opacity = 1, i.autoAlpha && (i.visibility = 1)
                    }
                    for (e.className && (r = this._classNamePT) && (s = r.xfirst, s && s._prev ? this._linkCSSP(s._prev, r._next, s._prev._prev) : s === this._firstPT && (this._firstPT = r._next), r._next && this._linkCSSP(r._next, r._next._next, s._prev), this._classNamePT = null), r = this._firstPT; r;) r.plugin && r.plugin !== n && r.plugin._kill && (r.plugin._kill(e), n = r.plugin), r = r._next;
                    return t.prototype._kill.call(this, i)
                };
                var te = function(t, e, i) {
                    var r, n, s, a;
                    if (t.slice)
                        for (n = t.length; --n > -1;) te(t[n], e, i);
                    else
                        for (r = t.childNodes, n = r.length; --n > -1;) s = r[n], a = s.type, s.style && (e.push(rt(s)), i && i.push(s)), 1 !== a && 9 !== a && 11 !== a || !s.childNodes.length || te(s, e, i)
                };
                return i.cascadeTo = function(t, i, r) {
                    var n = e.to(t, i, r),
                        s = [n],
                        a = [],
                        o = [],
                        l = [],
                        h = e._internals.reservedProps,
                        c, u, p, f;
                    for (t = n._targets || n.target, te(t, a, l), n.render(i, !0, !0), te(t, o), n.render(0, !0, !0), n._enabled(!0), c = l.length; --c > -1;)
                        if (u = nt(l[c], a[c], o[c]), u.firstMPT) {
                            u = u.difs;
                            for (p in r) h[p] && (u[p] = r[p]);
                            f = {};
                            for (p in u) f[p] = a[c][p];
                            s.push(e.fromTo(l[c], i, f, u))
                        }
                    return s
                }, t.activate([i]), i
            }, !0),
            function() {
                var t = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.6.0",
                        priority: -1,
                        API: 2,
                        init: function(t, e, i) {
                            return this._tween = i, !0
                        }
                    }),
                    e = function(t) {
                        for (; t;) t.f || t.blob || (t.m = Math.round), t = t._next
                    },
                    i = t.prototype;
                i._onInitAllProps = function() {
                    for (var t = this._tween, i = t.vars.roundProps.join ? t.vars.roundProps : t.vars.roundProps.split(","), r = i.length, n = {}, s = t._propLookup.roundProps, a, o, l; --r > -1;) n[i[r]] = Math.round;
                    for (r = i.length; --r > -1;)
                        for (a = i[r], o = t._firstPT; o;) l = o._next, o.pg ? o.t._mod(n) : o.n === a && (2 === o.f && o.t ? e(o.t._firstPT) : (this._add(o.t, a, o.s, o.c), l && (l._prev = o._prev), o._prev ? o._prev._next = l : t._firstPT === o && (t._firstPT = l), o._next = o._prev = null, t._propLookup[a] = s)), o = l;
                    return !1
                }, i._add = function(t, e, i, r) {
                    this._addTween(t, e, i, i + r, e, Math.round), this._overwriteProps.push(e)
                }
            }(),
            function() {
                _gsScope._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.6.0",
                    init: function(t, e, i, r) {
                        var n, s;
                        if ("function" != typeof t.setAttribute) return !1;
                        for (n in e) s = e[n], "function" == typeof s && (s = s(r, t)), this._addTween(t, "setAttribute", t.getAttribute(n) + "", s + "", n, !1, n), this._overwriteProps.push(n);
                        return !0
                    }
                })
            }(), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.3.0",
                API: 2,
                init: function(t, e, i, r) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var n = !0 === e.useRadians ? 2 * Math.PI : 360,
                        s = 1e-6,
                        a, o, l, h, c, u;
                    for (a in e) "useRadians" !== a && (h = e[a], "function" == typeof h && (h = h(r, t)), u = (h + "").split("_"), o = u[0], l = parseFloat("function" != typeof t[a] ? t[a] : t[a.indexOf("set") || "function" != typeof t["get" + a.substr(3)] ? a : "get" + a.substr(3)]()), h = this.finals[a] = "string" == typeof o && "=" === o.charAt(1) ? l + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) : Number(o) || 0, c = h - l, u.length && (o = u.join("_"), -1 !== o.indexOf("short") && (c %= n) !== c % (n / 2) && (c = c < 0 ? c + n : c - n), -1 !== o.indexOf("_cw") && c < 0 ? c = (c + 9999999999 * n) % n - (c / n | 0) * n : -1 !== o.indexOf("ccw") && c > 0 && (c = (c - 9999999999 * n) % n - (c / n | 0) * n)), (c > 1e-6 || c < -1e-6) && (this._addTween(t, a, l, l + c, a), this._overwriteProps.push(a)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e = _gsScope.GreenSockGlobals || _gsScope,
                    i = e.com.greensock,
                    r = 2 * Math.PI,
                    n = Math.PI / 2,
                    s = i._class,
                    a = function(e, i) {
                        var r = s("easing." + e, function() {}, !0),
                            n = r.prototype = new t;
                        return n.constructor = r, n.getRatio = i, r
                    },
                    o = t.register || function() {},
                    l = function(t, e, i, r, n) {
                        var a = s("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new r
                        }, !0);
                        return o(a, t), a
                    },
                    h = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    c = function(e, i) {
                        var r = s("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            n = r.prototype = new t;
                        return n.constructor = r, n.getRatio = i, n.config = function(t) {
                            return new r(t)
                        }, r
                    },
                    u = l("Back", c("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), c("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), c("BackInOut", function(t) {
                        return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    p = s("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
                    }, !0),
                    f = p.prototype = new t,
                    d, g, m;
                return f.constructor = p, f.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, p.ease = new p(.7, .7), f.config = p.config = function(t, e, i) {
                    return new p(t, e, i)
                }, d = s("easing.SteppedEase", function(t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), f = d.prototype = new t, f.constructor = d, f.getRatio = function(t) {
                    return t < 0 ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, f.config = d.config = function(t) {
                    return new d(t)
                }, g = s("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var i = e.taper || "none", r = [], n = 0, s = 0 | (e.points || 20), a = s, o = !1 !== e.randomize, l = !0 === e.clamp, c = e.template instanceof t ? e.template : null, u = "number" == typeof e.strength ? .4 * e.strength : .4, p, f, d, g, m, v; --a > -1;) p = o ? Math.random() : 1 / s * a, f = c ? c.getRatio(p) : p, "none" === i ? d = u : "out" === i ? (g = 1 - p, d = g * g * u) : "in" === i ? d = p * p * u : p < .5 ? (g = 2 * p, d = g * g * .5 * u) : (g = 2 * (1 - p), d = g * g * .5 * u), o ? f += Math.random() * d - .5 * d : a % 2 ? f += .5 * d : f -= .5 * d, l && (f > 1 ? f = 1 : f < 0 && (f = 0)), r[n++] = {
                        x: p,
                        y: f
                    };
                    for (r.sort(function(t, e) {
                            return t.x - e.x
                        }), v = new h(1, 1, null), a = s; --a > -1;) m = r[a], v = new h(m.x, m.y, v);
                    this._prev = new h(0, 0, 0 !== v.t ? v : v.next)
                }, !0), f = g.prototype = new t, f.constructor = g, f.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && t <= e.t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, f.config = function(t) {
                    return new g(t)
                }, g.ease = new g, l("Bounce", a("BounceOut", function(t) {
                    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), a("BounceIn", function(t) {
                    return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), a("BounceInOut", function(t) {
                    var e = t < .5;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), l("Circ", a("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), a("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), a("CircInOut", function(t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), m = function(e, i, n) {
                    var a = s("easing." + e, function(t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (t < 1 ? t : 1), this._p3 = this._p2 / r * (Math.asin(1 / this._p1) || 0), this._p2 = r / this._p2
                        }, !0),
                        o = a.prototype = new t;
                    return o.constructor = a, o.getRatio = i, o.config = function(t, e) {
                        return new a(t, e)
                    }, a
                }, l("Elastic", m("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), m("ElasticIn", function(t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1))) * Math.sin((t - this._p3) * this._p2)
                }, .3), m("ElasticInOut", function(t) {
                    return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                }, .45)), l("Expo", a("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), a("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), a("ExpoInOut", function(t) {
                    return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), l("Sine", a("SineOut", function(t) {
                    return Math.sin(t * n)
                }), a("SineIn", function(t) {
                    return 1 - Math.cos(t * n)
                }), a("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), s("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), o(e.SlowMo, "SlowMo", "ease,"), o(g, "RoughEase", "ease,"), o(d, "SteppedEase", "ease,"), u
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = {},
            r = t.document,
            n = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!n.TweenLite) {
            var s = function(t) {
                    var e = t.split("."),
                        i = n,
                        r;
                    for (r = 0; r < e.length; r++) i[e[r]] = i = i[e[r]] || {};
                    return i
                },
                a = s("com.greensock"),
                o = 1e-10,
                l = function(t) {
                    var e = [],
                        i = t.length,
                        r;
                    for (r = 0; r !== i; e.push(t[r++]));
                    return e
                },
                h = function() {},
                c = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                u, p, f, d, g, m = {},
                v = function(e, r, a, o) {
                    this.sc = m[e] ? m[e].sc : [], m[e] = this, this.gsClass = null, this.func = a;
                    var l = [];
                    this.check = function(h) {
                        for (var c = r.length, u = c, p, f, d, g, _; --c > -1;)(p = m[r[c]] || new v(r[c], [])).gsClass ? (l[c] = p.gsClass, u--) : h && p.sc.push(this);
                        if (0 === u && a) {
                            if (f = ("com.greensock." + e).split("."), d = f.pop(), g = s(f.join("."))[d] = this.gsClass = a.apply(a, l), o)
                                if (n[d] = i[d] = g, !(_ = "undefined" != typeof module && module.exports) && "function" == typeof define && define.amd) define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + e.split(".").pop(), [], function() {
                                    return g
                                });
                                else if (_)
                                if ("TweenMax" === e) {
                                    module.exports = i.TweenMax = g;
                                    for (c in i) g[c] = i[c]
                                } else i.TweenMax && (i.TweenMax[d] = g);
                            for (c = 0; c < this.sc.length; c++) this.sc[c].check()
                        }
                    }, this.check(!0)
                },
                _ = t._gsDefine = function(t, e, i, r) {
                    return new v(t, e, i, r)
                },
                y = a._class = function(t, e, i) {
                    return e = e || function() {}, _(t, [], function() {
                        return e
                    }, i), e
                };
            _.globals = n;
            var x = [0, 0, 1, 1],
                b = [],
                w = y("easing.Ease", function(t, e, i, r) {
                    this._func = t, this._type = i || 0, this._power = r || 0, this._params = e ? x.concat(e) : x
                }, !0),
                T = w.map = {},
                S = w.register = function(t, e, i, r) {
                    for (var n = e.split(","), s = n.length, o = (i || "easeIn,easeOut,easeInOut").split(","), l, h, c, u; --s > -1;)
                        for (h = n[s], l = r ? y("easing." + h, null, !0) : a.easing[h] || {}, c = o.length; --c > -1;) u = o[c], T[h + "." + u] = T[u + h] = l[u] = t.getRatio ? t : t[u] || new t
                };
            for (f = w.prototype, f._calcEnd = !1, f.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        r = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                    return 1 === i ? r *= r : 2 === i ? r *= r * r : 3 === i ? r *= r * r * r : 4 === i && (r *= r * r * r * r), 1 === e ? 1 - r : 2 === e ? r : t < .5 ? r / 2 : 1 - r / 2
                }, u = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], p = u.length; --p > -1;) f = u[p] + ",Power" + p, S(new w(null, null, 1, p), f, "easeOut", !0), S(new w(null, null, 2, p), f, "easeIn" + (0 === p ? ",easeNone" : "")), S(new w(null, null, 3, p), f, "easeInOut");
            T.linear = a.easing.Linear.easeIn, T.swing = a.easing.Quad.easeInOut;
            var P = y("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            f = P.prototype, f.addEventListener = function(t, e, i, r, n) {
                n = n || 0;
                var s = this._listeners[t],
                    a = 0,
                    o, l;
                for (this !== d || g || d.wake(), null == s && (this._listeners[t] = s = []), l = s.length; --l > -1;) o = s[l], o.c === e && o.s === i ? s.splice(l, 1) : 0 === a && o.pr < n && (a = l + 1);
                s.splice(a, 0, {
                    c: e,
                    s: i,
                    up: r,
                    pr: n
                })
            }, f.removeEventListener = function(t, e) {
                var i = this._listeners[t],
                    r;
                if (i)
                    for (r = i.length; --r > -1;)
                        if (i[r].c === e) return void i.splice(r, 1)
            }, f.dispatchEvent = function(t) {
                var e = this._listeners[t],
                    i, r, n;
                if (e)
                    for (i = e.length, i > 1 && (e = e.slice(0)), r = this._eventTarget; --i > -1;)(n = e[i]) && (n.up ? n.c.call(n.s || r, {
                        type: t,
                        target: r
                    }) : n.c.call(n.s || r))
            };
            var O = t.requestAnimationFrame,
                k = t.cancelAnimationFrame,
                C = Date.now || function() {
                    return (new Date).getTime()
                },
                D = C();
            for (u = ["ms", "moz", "webkit", "o"], p = u.length; --p > -1 && !O;) O = t[u[p] + "RequestAnimationFrame"], k = t[u[p] + "CancelAnimationFrame"] || t[u[p] + "CancelRequestAnimationFrame"];
            y("Ticker", function(t, e) {
                var i = this,
                    n = C(),
                    s = !(!1 === e || !O) && "auto",
                    a = 500,
                    o = 33,
                    l = "tick",
                    c, u, p, f, m, v = function(t) {
                        var e = C() - D,
                            r, s;
                        e > a && (n += e - o), D += e, i.time = (D - n) / 1e3, r = i.time - m, (!c || r > 0 || !0 === t) && (i.frame++, m += r + (r >= f ? .004 : f - r), s = !0), !0 !== t && (p = u(v)), s && i.dispatchEvent("tick")
                    };
                P.call(i), i.time = i.frame = 0, i.tick = function() {
                    v(!0)
                }, i.lagSmoothing = function(t, e) {
                    a = t || 1e10, o = Math.min(e, a, 0)
                }, i.sleep = function() {
                    null != p && (s && k ? k(p) : clearTimeout(p), u = h, p = null, i === d && (g = !1))
                }, i.wake = function(t) {
                    null !== p ? i.sleep() : t ? n += -D + (D = C()) : i.frame > 10 && (D = C() - a + 5), u = 0 === c ? h : s && O ? O : function(t) {
                        return setTimeout(t, 1e3 * (m - i.time) + 1 | 0)
                    }, i === d && (g = !0), v(2)
                }, i.fps = function(t) {
                    if (!arguments.length) return c;
                    c = t, f = 1 / (c || 60), m = this.time + f, i.wake()
                }, i.useRAF = function(t) {
                    if (!arguments.length) return s;
                    i.sleep(), s = t, i.fps(c)
                }, i.fps(t), setTimeout(function() {
                    "auto" === s && i.frame < 5 && "hidden" !== r.visibilityState && i.useRAF(!1)
                }, 1500)
            }), f = a.Ticker.prototype = new a.events.EventDispatcher, f.constructor = a.Ticker;
            var E = y("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, Z) {
                    g || d.wake();
                    var i = this.vars.useFrames ? G : Z;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            d = E.ticker = new a.Ticker, f = E.prototype, f._dirty = f._gc = f._initted = f._paused = !1, f._totalTime = f._time = 0, f._rawPrevTime = -1, f._next = f._last = f._onUpdate = f._timeline = f.timeline = null, f._paused = !1;
            var A = function() {
                g && C() - D > 2e3 && d.wake(), setTimeout(A, 2e3)
            };
            A(), f.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, f.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, f.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, f.seek = function(t, e) {
                return this.totalTime(Number(t), !1 !== e)
            }, f.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
            }, f.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, f.render = function(t, e, i) {}, f.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
            }, f.isActive = function() {
                var t = this._timeline,
                    e = this._startTime,
                    i;
                return !t || !this._gc && !this._paused && t.isActive() && (i = t.rawTime(!0)) >= e && i < e + this.totalDuration() / this._timeScale
            }, f._enabled = function(t, e) {
                return g || d.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, f._kill = function(t, e) {
                return this._enabled(!1, !1)
            }, f.kill = function(t, e) {
                return this._kill(t, e), this
            }, f._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, f._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, f._callback = function(t) {
                var e = this.vars,
                    i = e[t],
                    r = e[t + "Params"],
                    n = e[t + "Scope"] || e.callbackScope || this;
                switch (r ? r.length : 0) {
                    case 0:
                        i.call(n);
                        break;
                    case 1:
                        i.call(n, r[0]);
                        break;
                    case 2:
                        i.call(n, r[0], r[1]);
                        break;
                    default:
                        i.apply(n, r)
                }
            }, f.eventCallback = function(t, e, i, r) {
                if ("on" === (t || "").substr(0, 2)) {
                    var n = this.vars;
                    if (1 === arguments.length) return n[t];
                    null == e ? delete n[t] : (n[t] = e, n[t + "Params"] = c(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, n[t + "Scope"] = r), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, f.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, f.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, f.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, f.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, f.totalTime = function(t, e, i) {
                if (g || d.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var r = this._totalDuration,
                            n = this._timeline;
                        if (t > r && !i && (t = r), this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? r - t : t) / this._timeScale, n._dirty || this._uncache(!1), n._timeline)
                            for (; n._timeline;) n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), n = n._timeline
                    }
                    this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (Y.length && K(), this.render(t, e, !1), Y.length && K())
                }
                return this
            }, f.progress = f.totalProgress = function(t, e) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
            }, f.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, f.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, f.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || 1e-10, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, f.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, f.paused = function(t) {
                if (!arguments.length) return this._paused;
                var e = this._timeline,
                    i, r;
                return t != this._paused && e && (g || t || d.wake(), i = e.rawTime(), r = i - this._pauseTime, !t && e.smoothChildTiming && (this._startTime += r, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== r && this._initted && this.duration() && (i = e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, this.render(i, i === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
            };
            var R = y("core.SimpleTimeline", function(t) {
                E.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            f = R.prototype = new E, f.constructor = R, f.kill()._gc = !1, f._first = f._last = f._recent = null, f._sortChildren = !1, f.add = f.insert = function(t, e, i, r) {
                var n, s;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), n = this._last, this._sortChildren)
                    for (s = t._startTime; n && n._startTime > s;) n = n._prev;
                return n ? (t._next = n._next, n._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = n, this._recent = t, this._timeline && this._uncache(!0), this
            }, f._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, f.render = function(t, e, i) {
                var r = this._first,
                    n;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
            }, f.rawTime = function() {
                return g || d.wake(), this._totalTime
            };
            var M = y("TweenLite", function(e, i, r) {
                    if (E.call(this, i, r), this.render = M.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : M.selector(e) || e;
                    var n = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        s = this.vars.overwrite,
                        a, o, h;
                    if (this._overwrite = s = null == s ? U[M.defaultOverwrite] : "number" == typeof s ? s >> 0 : U[s], (n || e instanceof Array || e.push && c(e)) && "number" != typeof e[0])
                        for (this._targets = h = l(e), this._propLookup = [], this._siblings = [], a = 0; a < h.length; a++) o = h[a], o ? "string" != typeof o ? o.length && o !== t && o[0] && (o[0] === t || o[0].nodeType && o[0].style && !o.nodeType) ? (h.splice(a--, 1), this._targets = h = h.concat(l(o))) : (this._siblings[a] = J(o, this, !1), 1 === s && this._siblings[a].length > 1 && et(o, this, null, 1, this._siblings[a])) : "string" == typeof(o = h[a--] = M.selector(o)) && h.splice(a + 1, 1) : h.splice(a--, 1);
                    else this._propLookup = {}, this._siblings = J(e, this, !1), 1 === s && this._siblings.length > 1 && et(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-10, this.render(Math.min(0, -this._delay)))
                }, !0),
                X = function(e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                z = function(t, e) {
                    var i = {},
                        r;
                    for (r in t) W[r] || r in e && "transform" !== r && "x" !== r && "y" !== r && "width" !== r && "height" !== r && "className" !== r && "border" !== r || !(!j[r] || j[r] && j[r]._autoCSS) || (i[r] = t[r], delete t[r]);
                    t.css = i
                };
            f = M.prototype = new E, f.constructor = M, f.kill()._gc = !1, f.ratio = 0, f._firstPT = f._targets = f._overwrittenProps = f._startAt = null, f._notifyPluginsOfEnabled = f._lazy = !1, M.version = "1.19.1", M.defaultEase = f._ease = new w(null, null, 1, 1), M.defaultOverwrite = "auto", M.ticker = d, M.autoSleep = 120, M.lagSmoothing = function(t, e) {
                d.lagSmoothing(t, e)
            }, M.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (M.selector = i, i(e)) : void 0 === r ? e : r.querySelectorAll ? r.querySelectorAll(e) : r.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var Y = [],
                F = {},
                N = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                I = function(t) {
                    for (var e = this._firstPT, i = 1e-6, r; e;) r = e.blob ? 1 === t ? this.end : t ? this.join("") : this.start : e.c * t + e.s, e.m ? r = e.m(r, this._target || e.t) : r < 1e-6 && r > -1e-6 && !e.blob && (r = 0), e.f ? e.fp ? e.t[e.p](e.fp, r) : e.t[e.p](r) : e.t[e.p] = r, e = e._next
                },
                L = function(t, e, i, r) {
                    var n = [],
                        s = 0,
                        a = "",
                        o = 0,
                        l, h, c, u, p, f, d;
                    for (n.start = t, n.end = e, t = n[0] = t + "", e = n[1] = e + "", i && (i(n), t = n[0], e = n[1]), n.length = 0, l = t.match(N) || [], h = e.match(N) || [], r && (r._next = null, r.blob = 1, n._firstPT = n._applyPT = r), p = h.length, u = 0; u < p; u++) d = h[u], f = e.substr(s, e.indexOf(d, s) - s), a += f || !u ? f : ",", s += f.length, o ? o = (o + 1) % 5 : "rgba(" === f.substr(-5) && (o = 1), d === l[u] || l.length <= u ? a += d : (a && (n.push(a), a = ""), c = parseFloat(l[u]), n.push(c), n._firstPT = {
                        _next: n._firstPT,
                        t: n,
                        p: n.length - 1,
                        s: c,
                        c: ("=" === d.charAt(1) ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - c) || 0,
                        f: 0,
                        m: o && o < 4 ? Math.round : 0
                    }), s += d.length;
                    return a += e.substr(s), a && n.push(a), n.setRatio = I, n
                },
                V = function(t, e, i, r, n, s, a, o, l) {
                    "function" == typeof r && (r = r(l || 0, t));
                    var h = typeof t[e],
                        c = "function" !== h ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                        u = "get" !== i ? i : c ? a ? t[c](a) : t[c]() : t[e],
                        p = "string" == typeof r && "=" === r.charAt(1),
                        f = {
                            t: t,
                            p: e,
                            s: u,
                            f: "function" === h,
                            pg: 0,
                            n: n || e,
                            m: s ? "function" == typeof s ? s : Math.round : 0,
                            pr: 0,
                            c: p ? parseInt(r.charAt(0) + "1", 10) * parseFloat(r.substr(2)) : parseFloat(r) - u || 0
                        },
                        d;
                    if (("number" != typeof u || "number" != typeof r && !p) && (a || isNaN(u) || !p && isNaN(r) || "boolean" == typeof u || "boolean" == typeof r ? (f.fp = a, d = L(u, p ? f.s + f.c : r, o || M.defaultStringFilter, f), f = {
                            t: d,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 2,
                            pg: 0,
                            n: n || e,
                            pr: 0,
                            m: 0
                        }) : (f.s = parseFloat(u), p || (f.c = parseFloat(r) - f.s || 0))), f.c) return (f._next = this._firstPT) && (f._next._prev = f), this._firstPT = f, f
                },
                B = M._internals = {
                    isArray: c,
                    isSelector: X,
                    lazyTweens: Y,
                    blobDif: L
                },
                j = M._plugins = {},
                q = B.tweenLookup = {},
                H = 0,
                W = B.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1,
                    id: 1
                },
                U = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    true: 1,
                    false: 0
                },
                G = E._rootFramesTimeline = new R,
                Z = E._rootTimeline = new R,
                Q = 30,
                K = B.lazyRender = function() {
                    var t = Y.length,
                        e;
                    for (F = {}; --t > -1;)(e = Y[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
                    Y.length = 0
                };
            Z._startTime = d.time, G._startTime = d.frame, Z._active = G._active = !0, setTimeout(K, 1), E._updateRoot = M.render = function() {
                var t, e, i;
                if (Y.length && K(), Z.render((d.time - Z._startTime) * Z._timeScale, !1, !1), G.render((d.frame - G._startTime) * G._timeScale, !1, !1), Y.length && K(), d.frame >= Q) {
                    Q = d.frame + (parseInt(M.autoSleep, 10) || 120);
                    for (i in q) {
                        for (e = q[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete q[i]
                    }
                    if ((!(i = Z._first) || i._paused) && M.autoSleep && !G._first && 1 === d._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || d.sleep()
                    }
                }
            }, d.addEventListener("tick", E._updateRoot);
            var J = function(t, e, i) {
                    var r = t._gsTweenID,
                        n, s;
                    if (q[r || (t._gsTweenID = r = "t" + H++)] || (q[r] = {
                            target: t,
                            tweens: []
                        }), e && (n = q[r].tweens, n[s = n.length] = e, i))
                        for (; --s > -1;) n[s] === e && n.splice(s, 1);
                    return q[r].tweens
                },
                tt = function(t, e, i, r) {
                    var n = t.vars.onOverwrite,
                        s, a;
                    return n && (s = n(t, e, i, r)), n = M.onOverwrite, n && (a = n(t, e, i, r)), !1 !== s && !1 !== a
                },
                et = function(t, e, i, r, n) {
                    var s, a, o, l;
                    if (1 === r || r >= 4) {
                        for (l = n.length, s = 0; s < l; s++)
                            if ((o = n[s]) !== e) o._gc || o._kill(null, t, e) && (a = !0);
                            else if (5 === r) break;
                        return a
                    }
                    var h = e._startTime + 1e-10,
                        c = [],
                        u = 0,
                        p = 0 === e._duration,
                        f;
                    for (s = n.length; --s > -1;)(o = n[s]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (f = f || it(e, 0, p), 0 === it(o, f, p) && (c[u++] = o)) : o._startTime <= h && o._startTime + o.totalDuration() / o._timeScale > h && ((p || !o._initted) && h - o._startTime <= 2e-10 || (c[u++] = o)));
                    for (s = u; --s > -1;)
                        if (o = c[s], 2 === r && o._kill(i, t, e) && (a = !0), 2 !== r || !o._firstPT && o._initted) {
                            if (2 !== r && !tt(o, e)) continue;
                            o._enabled(!1, !1) && (a = !0)
                        }
                    return a
                },
                it = function(t, e, i) {
                    for (var r = t._timeline, n = r._timeScale, s = t._startTime; r._timeline;) {
                        if (s += r._startTime, n *= r._timeScale, r._paused) return -100;
                        r = r._timeline
                    }
                    return s /= n, s > e ? s - e : i && s === e || !t._initted && s - e < 2e-10 ? 1e-10 : (s += t.totalDuration() / t._timeScale / n) > e + 1e-10 ? 0 : s - e - 1e-10
                };
            f._init = function() {
                var t = this.vars,
                    e = this._overwrittenProps,
                    i = this._duration,
                    r = !!t.immediateRender,
                    n = t.ease,
                    s, a, o, l, h, c;
                if (t.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), h = {};
                    for (l in t.startAt) h[l] = t.startAt[l];
                    if (h.overwrite = !1, h.immediateRender = !0, h.lazy = r && !1 !== t.lazy, h.startAt = h.delay = null, this._startAt = M.to(this.target, 0, h), r)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== i) return
                } else if (t.runBackwards && 0 !== i)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (r = !1), o = {};
                        for (l in t) W[l] && "autoCSS" !== l || (o[l] = t[l]);
                        if (o.overwrite = 0, o.data = "isFromStart", o.lazy = r && !1 !== t.lazy, o.immediateRender = r, this._startAt = M.to(this.target, 0, o), r) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = n = n ? n instanceof w ? n : "function" == typeof n ? new w(n, t.easeParams) : T[n] || M.defaultEase : M.defaultEase, t.easeParams instanceof Array && n.config && (this._ease = n.config.apply(n, t.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (c = this._targets.length, s = 0; s < c; s++) this._initProps(this._targets[s], this._propLookup[s] = {}, this._siblings[s], e ? e[s] : null, s) && (a = !0);
                else a = this._initProps(this.target, this._propLookup, this._siblings, e, 0);
                if (a && M._onPluginEvent("_onInitAllProps", this), e && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), t.runBackwards)
                    for (o = this._firstPT; o;) o.s += o.c, o.c = -o.c, o = o._next;
                this._onUpdate = t.onUpdate, this._initted = !0
            }, f._initProps = function(e, i, r, n, s) {
                var a, o, l, h, u, p;
                if (null == e) return !1;
                F[e._gsTweenID] && K(), this.vars.css || e.style && e !== t && e.nodeType && j.css && !1 !== this.vars.autoCSS && z(this.vars, e);
                for (a in this.vars)
                    if (p = this.vars[a], W[a]) p && (p instanceof Array || p.push && c(p)) && -1 !== p.join("").indexOf("{self}") && (this.vars[a] = p = this._swapSelfInParams(p, this));
                    else if (j[a] && (h = new j[a])._onInitTween(e, this.vars[a], this, s)) {
                    for (this._firstPT = u = {
                            _next: this._firstPT,
                            t: h,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: a,
                            pg: 1,
                            pr: h._priority,
                            m: 0
                        }, o = h._overwriteProps.length; --o > -1;) i[h._overwriteProps[o]] = this._firstPT;
                    (h._priority || h._onInitAllProps) && (l = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u)
                } else i[a] = V.call(this, e, a, "get", p, a, 0, null, this.vars.stringFilter, s);
                return n && this._kill(n, e) ? this._initProps(e, i, r, n, s) : this._overwrite > 1 && this._firstPT && r.length > 1 && et(e, this, i, this._overwrite, r) ? (this._kill(i, e), this._initProps(e, i, r, n, s)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (F[e._gsTweenID] = !0), l)
            }, f.render = function(t, e, i) {
                var r = this._time,
                    n = this._duration,
                    s = this._rawPrevTime,
                    a, o, l, h;
                if (t >= n - 1e-7 && t >= 0) this._totalTime = this._time = n, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (a = !0, o = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === n && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (s < 0 || t <= 0 && t >= -1e-7 || 1e-10 === s && "isPause" !== this.data) && s !== t && (i = !0, s > 1e-10 && (o = "onReverseComplete")), this._rawPrevTime = h = !e || t || s === t ? t : 1e-10);
                else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== r || 0 === n && s > 0) && (o = "onReverseComplete", a = this._reversed), t < 0 && (this._active = !1, 0 === n && (this._initted || !this.vars.lazy || i) && (s >= 0 && (1e-10 !== s || "isPause" !== this.data) && (i = !0), this._rawPrevTime = h = !e || t || s === t ? t : 1e-10)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var c = t / n,
                        u = this._easeType,
                        p = this._easePower;
                    (1 === u || 3 === u && c >= .5) && (c = 1 - c), 3 === u && (c *= 2), 1 === p ? c *= c : 2 === p ? c *= c * c : 3 === p ? c *= c * c * c : 4 === p && (c *= c * c * c * c), this.ratio = 1 === u ? 1 - c : 2 === u ? c : t / n < .5 ? c / 2 : 1 - c / 2
                } else this.ratio = this._ease.getRatio(t / n);
                if (this._time !== r || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = r, this._rawPrevTime = s, Y.push(this), void(this._lazy = [t, e]);
                        this._time && !a ? this.ratio = this._ease.getRatio(this._time / n) : a && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== r && t >= 0 && (this._active = !0), 0 === r && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : o || (o = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== n || e || this._callback("onStart"))), l = this._firstPT; l;) l.f ? l.t[l.p](l.c * this.ratio + l.s) : l.t[l.p] = l.c * this.ratio + l.s, l = l._next;
                    this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, e, i), e || (this._time !== r || a || i) && this._callback("onUpdate")), o && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, e, i), a && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o), 0 === n && 1e-10 === this._rawPrevTime && 1e-10 !== h && (this._rawPrevTime = 0)))
                }
            }, f._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : M.selector(e) || e;
                var r = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline,
                    n, s, a, o, l, h, u, p, f;
                if ((c(e) || X(e)) && "number" != typeof e[0])
                    for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (h = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; --n > -1;)
                            if (e === this._targets[n]) {
                                l = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        l = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (l) {
                        if (u = t || l, p = t !== s && "all" !== s && t !== l && ("object" != typeof t || !t._tempKill), i && (M.onOverwrite || this.vars.onOverwrite)) {
                            for (a in u) l[a] && (f || (f = []), f.push(a));
                            if ((f || !t) && !tt(this, i, e, f)) return !1
                        }
                        for (a in u)(o = l[a]) && (r && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, h = !0), o.pg && o.t._kill(u) && (h = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete l[a]), p && (s[a] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return h
            }, f.invalidate = function() {
                return this._notifyPluginsOfEnabled && M._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], E.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-10, this.render(Math.min(0, -this._delay))), this
            }, f._enabled = function(t, e) {
                if (g || d.wake(), t && this._gc) {
                    var i = this._targets,
                        r;
                    if (i)
                        for (r = i.length; --r > -1;) this._siblings[r] = J(i[r], this, !0);
                    else this._siblings = J(this.target, this, !0)
                }
                return E.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && M._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            }, M.to = function(t, e, i) {
                return new M(t, e, i)
            }, M.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new M(t, e, i)
            }, M.fromTo = function(t, e, i, r) {
                return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, new M(t, e, r)
            }, M.delayedCall = function(t, e, i, r, n) {
                return new M(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: r,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: n,
                    overwrite: 0
                })
            }, M.set = function(t, e) {
                return new M(t, 0, e)
            }, M.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : M.selector(t) || t;
                var i, r, n, s;
                if ((c(t) || X(t)) && "number" != typeof t[0]) {
                    for (i = t.length, r = []; --i > -1;) r = r.concat(M.getTweensOf(t[i], e));
                    for (i = r.length; --i > -1;)
                        for (s = r[i], n = i; --n > -1;) s === r[n] && r.splice(i, 1)
                } else
                    for (r = J(t).concat(), i = r.length; --i > -1;)(r[i]._gc || e && !r[i].isActive()) && r.splice(i, 1);
                return r
            }, M.killTweensOf = M.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var r = M.getTweensOf(t, e), n = r.length; --n > -1;) r[n]._kill(i, t)
            };
            var rt = y("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = rt.prototype
            }, !0);
            if (f = rt.prototype, rt.version = "1.19.0", rt.API = 2, f._firstPT = null, f._addTween = V, f.setRatio = I, f._kill = function(t) {
                    var e = this._overwriteProps,
                        i = this._firstPT,
                        r;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (r = e.length; --r > -1;) null != t[e[r]] && e.splice(r, 1);
                    for (; i;) null != t[i.n] && (i._next && (i._next._prev = i._prev), i._prev ? (i._prev._next = i._next, i._prev = null) : this._firstPT === i && (this._firstPT = i._next)), i = i._next;
                    return !1
                }, f._mod = f._roundProps = function(t) {
                    for (var e = this._firstPT, i; e;) i = t[this._propName] || null != e.n && t[e.n.split(this._propName + "_").join("")], i && "function" == typeof i && (2 === e.f ? e.t._applyPT.m = i : e.m = i), e = e._next
                }, M._onPluginEvent = function(t, e) {
                    var i = e._firstPT,
                        r, n, s, a, o;
                    if ("_onInitAllProps" === t) {
                        for (; i;) {
                            for (o = i._next, n = s; n && n.pr > i.pr;) n = n._next;
                            (i._prev = n ? n._prev : a) ? i._prev._next = i: s = i, (i._next = n) ? n._prev = i : a = i, i = o
                        }
                        i = e._firstPT = s
                    }
                    for (; i;) i.pg && "function" == typeof i.t[t] && i.t[t]() && (r = !0), i = i._next;
                    return r
                }, rt.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === rt.API && (j[(new t[e])._propName] = t[e]);
                    return !0
                }, _.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e = t.propName,
                        i = t.priority || 0,
                        r = t.overwriteProps,
                        n = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_mod",
                            mod: "_mod",
                            initAll: "_onInitAllProps"
                        },
                        s = y("plugins." + e.charAt(0).toUpperCase() + e.substr(1) + "Plugin", function() {
                            rt.call(this, e, i), this._overwriteProps = r || []
                        }, !0 === t.global),
                        a = s.prototype = new rt(e),
                        o;
                    a.constructor = s, s.API = t.API;
                    for (o in n) "function" == typeof t[o] && (a[n[o]] = t[o]);
                    return s.version = t.version, rt.activate([s]), s
                }, u = t._gsQueue) {
                for (p = 0; p < u.length; p++) u[p]();
                for (f in m) m[f].func || t.console.log("GSAP encountered missing dependency: " + f)
            }
            g = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");
/*!
 * VERSION: 0.15.0
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Requires TweenLite and CSSPlugin version 1.17.0 or later (TweenMax contains both TweenLite and CSSPlugin). ThrowPropsPlugin is required for momentum-based continuation of movement after the mouse/touch is released (ThrowPropsPlugin is a membership benefit of Club GreenSock - http://greensock.com/club/).
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("utils.Draggable", ["events.EventDispatcher", "TweenLite", "plugins.CSSPlugin"], function(t, e, i) {
            var r = {
                    css: {}
                },
                n = {
                    css: {}
                },
                s = {
                    css: {}
                },
                a = {
                    css: {}
                },
                o = _gsScope._gsDefine.globals,
                l = {},
                h = {
                    style: {}
                },
                c = _gsScope.document || {
                    createElement: function() {
                        return h
                    }
                },
                u = c.documentElement || {},
                p = function(t) {
                    return c.createElementNS ? c.createElementNS("http://www.w3.org/1999/xhtml", t) : c.createElement(t)
                },
                f = p("div"),
                d = [],
                g = function() {
                    return !1
                },
                m = 180 / Math.PI,
                v = 999999999999999,
                _ = Date.now || function() {
                    return (new Date).getTime()
                },
                y = !(c.addEventListener || !c.all),
                x = c.createElement("div"),
                b = [],
                w = {},
                T = 0,
                S = /^(?:a|input|textarea|button|select)$/i,
                P = 0,
                O, k, C = -1 !== navigator.userAgent.toLowerCase().indexOf("android"),
                D = 0,
                E = {},
                A = {},
                R = function(t) {
                    if ("string" == typeof t && (t = e.selector(t)), !t || t.nodeType) return [t];
                    var i = [],
                        r = t.length,
                        n;
                    for (n = 0; n !== r; i.push(t[n++]));
                    return i
                },
                M = function(t, e) {
                    var i = {},
                        r;
                    if (e)
                        for (r in t) i[r] = t[r] * e;
                    else
                        for (r in t) i[r] = t[r];
                    return i
                },
                X, z = function() {
                    for (var t = b.length; --t > -1;) b[t]()
                },
                Y = function(t) {
                    b.push(t), 1 === b.length && e.ticker.addEventListener("tick", z, this, !1, 1)
                },
                F = function(t) {
                    for (var i = b.length; --i > -1;) b[i] === t && b.splice(i, 1);
                    e.to(N, 0, {
                        overwrite: "all",
                        delay: 15,
                        onComplete: N
                    })
                },
                N = function() {
                    b.length || e.ticker.removeEventListener("tick", z)
                },
                I = function(t, e) {
                    var i;
                    for (i in e) void 0 === t[i] && (t[i] = e[i]);
                    return t
                },
                L = function() {
                    return null != window.pageYOffset ? window.pageYOffset : null != c.scrollTop ? c.scrollTop : u.scrollTop || c.body.scrollTop || 0
                },
                V = function() {
                    return null != window.pageXOffset ? window.pageXOffset : null != c.scrollLeft ? c.scrollLeft : u.scrollLeft || c.body.scrollLeft || 0
                },
                B = function(t, e) {
                    zt(t, "scroll", e), q(t.parentNode) || B(t.parentNode, e)
                },
                j = function(t, e) {
                    Yt(t, "scroll", e), q(t.parentNode) || j(t.parentNode, e)
                },
                q = function(t) {
                    return !(t && t !== u && t !== c && t !== c.body && t !== window && t.nodeType && t.parentNode)
                },
                H = function(t, e) {
                    var i = "x" === e ? "Width" : "Height",
                        r = "scroll" + i,
                        n = "client" + i,
                        s = c.body;
                    return Math.max(0, q(t) ? Math.max(u[r], s[r]) - (window["inner" + i] || u[n] || s[n]) : t[r] - t[n])
                },
                W = function(t) {
                    var e = q(t),
                        i = H(t, "x"),
                        r = H(t, "y");
                    e ? t = A : W(t.parentNode), t._gsMaxScrollX = i, t._gsMaxScrollY = r, t._gsScrollX = t.scrollLeft || 0, t._gsScrollY = t.scrollTop || 0
                },
                U = function(t, e) {
                    return t = t || window.event, l.pageX = t.clientX + c.body.scrollLeft + u.scrollLeft, l.pageY = t.clientY + c.body.scrollTop + u.scrollTop, e && (t.returnValue = !1), l
                },
                G = function(t) {
                    return t ? ("string" == typeof t && (t = e.selector(t)), t.length && t !== window && t[0] && t[0].style && !t.nodeType && (t = t[0]), t === window || t.nodeType && t.style ? t : null) : t
                },
                Z = function(t, e) {
                    var i = t.style,
                        r, n, s;
                    if (void 0 === i[e]) {
                        for (s = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5, r = e.charAt(0).toUpperCase() + e.substr(1); --n > -1 && void 0 === i[s[n] + r];);
                        if (n < 0) return "";
                        O = 3 === n ? "ms" : s[n], e = O + r
                    }
                    return e
                },
                Q = function(t, e, i) {
                    var r = t.style;
                    r && (void 0 === r[e] && (e = Z(t, e)), null == i ? r.removeProperty ? r.removeProperty(e.replace(/([A-Z])/g, "-$1").toLowerCase()) : r.removeAttribute(e) : void 0 !== r[e] && (r[e] = i))
                },
                K = c.defaultView ? c.defaultView.getComputedStyle : g,
                J = /(?:Left|Right|Width)/i,
                tt = /(?:\d|\-|\+|=|#|\.)*/g,
                et = function(t, e, i, r, n) {
                    if ("px" === r || !r) return i;
                    if ("auto" === r || !i) return 0;
                    var s = J.test(e),
                        a = t,
                        o = f.style,
                        l = i < 0,
                        h;
                    return l && (i = -i), "%" === r && -1 !== e.indexOf("border") ? h = i / 100 * (s ? t.clientWidth : t.clientHeight) : (o.cssText = "border:0 solid red;position:" + rt(t, "position", !0) + ";line-height:0;", "%" !== r && a.appendChild ? o[s ? "borderLeftWidth" : "borderTopWidth"] = i + r : (a = t.parentNode || c.body, o[s ? "width" : "height"] = i + r), a.appendChild(f), h = parseFloat(f[s ? "offsetWidth" : "offsetHeight"]), a.removeChild(f), 0 !== h || n || (h = et(t, e, i, r, !0))), l ? -h : h
                },
                it = function(t, e) {
                    if ("absolute" !== rt(t, "position", !0)) return 0;
                    var i = "left" === e ? "Left" : "Top",
                        r = rt(t, "margin" + i, !0);
                    return t["offset" + i] - (et(t, e, parseFloat(r), (r + "").replace(/(?:\d|\-|\+|=|#|\.)*/g, "")) || 0)
                },
                rt = function(t, e, i) {
                    var r = (t._gsTransform || {})[e],
                        n;
                    return r || 0 === r ? r : (t.style[e] ? r = t.style[e] : (n = K(t)) ? (r = n.getPropertyValue(e.replace(/([A-Z])/g, "-$1").toLowerCase()), r = r || n.length ? r : n[e]) : t.currentStyle && (r = t.currentStyle[e]), "auto" !== r || "top" !== e && "left" !== e || (r = it(t, e)), i ? r : parseFloat(r) || 0)
                },
                nt = function(t, e, i) {
                    var r = t.vars,
                        n = r[i],
                        s = t._listeners[e];
                    "function" == typeof n && n.apply(r[i + "Scope"] || r.callbackScope || t, r[i + "Params"] || [t.pointerEvent]), s && t.dispatchEvent(e)
                },
                st = function(t, e) {
                    var i = G(t),
                        r, n, s;
                    return i ? Et(i, e) : void 0 !== t.left ? (s = St(e), {
                        left: t.left - s.x,
                        top: t.top - s.y,
                        width: t.width,
                        height: t.height
                    }) : (n = t.min || t.minX || t.minRotation || 0, r = t.min || t.minY || 0, {
                        left: n,
                        top: r,
                        width: (t.max || t.maxX || t.maxRotation || 0) - n,
                        height: (t.max || t.maxY || 0) - r
                    })
                },
                at, ot, lt, ht, ct, ut = function() {
                    if (!c.createElementNS) return at = 0, void(ot = !1);
                    var t = p("div"),
                        e = c.createElementNS("http://www.w3.org/2000/svg", "svg"),
                        i = p("div"),
                        r = t.style,
                        n = c.body || u,
                        s, a, o, l;
                    c.body && dt && (r.position = "absolute", n.appendChild(i), i.appendChild(t), l = t.offsetParent, i.style[dt] = "rotate(1deg)", ct = t.offsetParent === l, i.style.position = "absolute", r.height = "10px", l = t.offsetTop, i.style.border = "5px solid red", ht = l !== t.offsetTop, n.removeChild(i)), r = e.style, e.setAttributeNS(null, "width", "400px"), e.setAttributeNS(null, "height", "400px"), e.setAttributeNS(null, "viewBox", "0 0 400 400"), r.display = "block", r.boxSizing = "border-box", r.border = "0px solid red", r.transform = "none", t.style.cssText = "width:100px;height:100px;overflow:scroll;-ms-overflow-style:none;", n.appendChild(t), t.appendChild(e), o = e.createSVGPoint().matrixTransform(e.getScreenCTM()), a = o.y, t.scrollTop = 100, o.x = o.y = 0, o = o.matrixTransform(e.getScreenCTM()), lt = a - o.y < 100.1 ? 0 : a - o.y - 150, t.removeChild(e), n.removeChild(t), n.appendChild(e), s = e.getScreenCTM(), a = s.e, r.border = "50px solid red", s = e.getScreenCTM(), 0 === a && 0 === s.e && 0 === s.f && 1 === s.a ? (at = 1, ot = !0) : (at = a !== s.e ? 1 : 0, ot = 1 !== s.a), n.removeChild(e)
                },
                pt = "" !== Z(f, "perspective"),
                ft = Z(f, "transformOrigin").replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(),
                dt = Z(f, "transform"),
                gt = dt.replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(),
                mt = {},
                vt = {},
                _t = window.SVGElement,
                yt = function(t) {
                    return !!(_t && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
                },
                xt = (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent)) && parseFloat(RegExp.$1) < 11,
                bt = [],
                wt = [],
                Tt = function(t) {
                    if (!t.getBoundingClientRect || !t.parentNode || !dt) return {
                        offsetTop: 0,
                        offsetLeft: 0,
                        scaleX: 1,
                        scaleY: 1,
                        offsetParent: u
                    };
                    if (!1 !== Wt.cacheSVGData && t._dCache && t._dCache.lastUpdate === e.ticker.frame) return t._dCache;
                    var i = t,
                        r = Pt(t),
                        n, s, a, o, l, h, p, f, d, g, m, v;
                    if (r.lastUpdate = e.ticker.frame, t.getBBox && !r.isSVGRoot) {
                        for (i = t.parentNode, n = t.getBBox(); i && "svg" !== (i.nodeName + "").toLowerCase();) i = i.parentNode;
                        return o = Tt(i), r.offsetTop = n.y * o.scaleY, r.offsetLeft = n.x * o.scaleX, r.scaleX = o.scaleX, r.scaleY = o.scaleY, r.offsetParent = i || u, r
                    }
                    for (a = r.offsetParent, a === c.body && (a = u), wt.length = bt.length = 0; i && (l = rt(i, dt, !0), "matrix(1, 0, 0, 1, 0, 0)" !== l && "none" !== l && "translate3d(0px, 0px, 0px)" !== l && (wt.push(i), bt.push(i.style[dt]), i.style[dt] = "none"), i !== a);) i = i.parentNode;
                    for (s = a.getBoundingClientRect(), l = t.getScreenCTM(), f = t.createSVGPoint(), p = f.matrixTransform(l), f.x = f.y = 10, f = f.matrixTransform(l), r.scaleX = (f.x - p.x) / 10, r.scaleY = (f.y - p.y) / 10, void 0 === at && ut(), r.borderBox && !ot && t.getAttribute("width") && (o = K(t) || {}, d = parseFloat(o.borderLeftWidth) + parseFloat(o.borderRightWidth) || 0, g = parseFloat(o.borderTopWidth) + parseFloat(o.borderBottomWidth) || 0, m = parseFloat(o.width) || 0, v = parseFloat(o.height) || 0, r.scaleX *= (m - d) / m, r.scaleY *= (v - g) / v), lt ? (n = t.getBoundingClientRect(), r.offsetLeft = n.left - s.left, r.offsetTop = n.top - s.top) : (r.offsetLeft = p.x - s.left, r.offsetTop = p.y - s.top), r.offsetParent = a, h = wt.length; --h > -1;) wt[h].style[dt] = bt[h];
                    return r
                },
                St = function(t, i) {
                    if (i = i || {}, !t || t === u || !t.parentNode || t === window) return {
                        x: 0,
                        y: 0
                    };
                    var r = K(t),
                        n = ft && r ? r.getPropertyValue(ft) : "50% 50%",
                        s = n.split(" "),
                        a = -1 !== n.indexOf("left") ? "0%" : -1 !== n.indexOf("right") ? "100%" : s[0],
                        o = -1 !== n.indexOf("top") ? "0%" : -1 !== n.indexOf("bottom") ? "100%" : s[1];
                    return "center" !== o && null != o || (o = "50%"), ("center" === a || isNaN(parseFloat(a))) && (a = "50%"), t.getBBox && yt(t) ? (t._gsTransform || (e.set(t, {
                        x: "+=0",
                        overwrite: !1
                    }), void 0 === t._gsTransform.xOrigin && console.log("Draggable requires at least GSAP 1.17.0")), n = t.getBBox(), i.x = t._gsTransform.xOrigin - n.x, i.y = t._gsTransform.yOrigin - n.y) : (t.getBBox && -1 !== (a + o).indexOf("%") && (t = t.getBBox(), t = {
                        offsetWidth: t.width,
                        offsetHeight: t.height
                    }), i.x = -1 !== a.indexOf("%") ? t.offsetWidth * parseFloat(a) / 100 : parseFloat(a), i.y = -1 !== o.indexOf("%") ? t.offsetHeight * parseFloat(o) / 100 : parseFloat(o)), i
                },
                Pt = function(t) {
                    if (!1 !== Wt.cacheSVGData && t._dCache && t._dCache.lastUpdate === e.ticker.frame) return t._dCache;
                    var i = t._dCache = t._dCache || {},
                        r = K(t),
                        n = t.getBBox && yt(t),
                        s = "svg" === (t.nodeName + "").toLowerCase(),
                        a;
                    if (i.isSVG = n, i.isSVGRoot = s, i.borderBox = "border-box" === r.boxSizing, i.computedStyle = r, s) a = t.parentNode || u, a.insertBefore(f, t), i.offsetParent = f.offsetParent || u, a.removeChild(f);
                    else if (n) {
                        for (a = t.parentNode; a && "svg" !== (a.nodeName + "").toLowerCase();) a = a.parentNode;
                        i.offsetParent = a
                    } else i.offsetParent = t.offsetParent;
                    return i
                },
                Ot = function(t, e, i, r) {
                    if (t === window || !t || !t.style || !t.parentNode) return [1, 0, 0, 1, 0, 0];
                    var n = t._dCache || Pt(t),
                        s = t.parentNode,
                        a = s._dCache || Pt(s),
                        o = n.computedStyle,
                        l = n.isSVG ? a.offsetParent : s.offsetParent,
                        h, p, f, d, g, m, v, _, y, x, b, w, T, S;
                    return h = n.isSVG && -1 !== (t.style[dt] + "").indexOf("matrix") ? t.style[dt] : o ? o.getPropertyValue(gt) : t.currentStyle ? t.currentStyle[dt] : "1,0,0,1,0,0", t.getBBox && -1 !== (t.getAttribute("transform") + "").indexOf("matrix") && (h = t.getAttribute("transform")), h = (h + "").match(/(?:\-|\.|\b)(\d|\.|e\-)+/g) || [1, 0, 0, 1, 0, 0], h.length > 6 && (h = [h[0], h[1], h[4], h[5], h[12], h[13]]), r ? h[4] = h[5] = 0 : n.isSVG && (g = t._gsTransform) && (g.xOrigin || g.yOrigin) && (h[0] = parseFloat(h[0]), h[1] = parseFloat(h[1]), h[2] = parseFloat(h[2]), h[3] = parseFloat(h[3]), h[4] = parseFloat(h[4]) - (g.xOrigin - (g.xOrigin * h[0] + g.yOrigin * h[2])), h[5] = parseFloat(h[5]) - (g.yOrigin - (g.xOrigin * h[1] + g.yOrigin * h[3]))), e && (void 0 === at && ut(), f = n.isSVG || n.isSVGRoot ? Tt(t) : t, n.isSVG ? (d = t.getBBox(), x = a.isSVGRoot ? {
                        x: 0,
                        y: 0
                    } : s.getBBox(), f = {
                        offsetLeft: d.x - x.x,
                        offsetTop: d.y - x.y,
                        offsetParent: n.offsetParent
                    }) : n.isSVGRoot ? (b = parseInt(o.borderTopWidth, 10) || 0, w = parseInt(o.borderLeftWidth, 10) || 0, T = (h[0] - at) * w + h[2] * b, S = h[1] * w + (h[3] - at) * b, m = e.x, v = e.y, _ = m - (m * h[0] + v * h[2]), y = v - (m * h[1] + v * h[3]), h[4] = parseFloat(h[4]) + _, h[5] = parseFloat(h[5]) + y, e.x -= _, e.y -= y, m = f.scaleX, v = f.scaleY, e.x *= m, e.y *= v, h[0] *= m, h[1] *= v, h[2] *= m, h[3] *= v, xt || (e.x += T, e.y += S)) : !ht && t.offsetParent && (e.x += parseInt(rt(t.offsetParent, "borderLeftWidth"), 10) || 0, e.y += parseInt(rt(t.offsetParent, "borderTopWidth"), 10) || 0), p = s === u || s === c.body, h[4] = Number(h[4]) + e.x + (f.offsetLeft || 0) - i.x - (p ? 0 : s.scrollLeft || 0), h[5] = Number(h[5]) + e.y + (f.offsetTop || 0) - i.y - (p ? 0 : s.scrollTop || 0), s && "fixed" === rt(t, "position", o) && (h[4] += V(), h[5] += L()), !s || s === u || l !== f.offsetParent || a.isSVG || ct && "100100" !== Ot(s).join("") || (f = a.isSVGRoot ? Tt(s) : s, h[4] -= f.offsetLeft || 0, h[5] -= f.offsetTop || 0, ht || !a.offsetParent || n.isSVG || n.isSVGRoot || (h[4] -= parseInt(rt(a.offsetParent, "borderLeftWidth"), 10) || 0, h[5] -= parseInt(rt(a.offsetParent, "borderTopWidth"), 10) || 0))), h
                },
                kt = function(t, e) {
                    if (!t || t === window || !t.parentNode) return [1, 0, 0, 1, 0, 0];
                    for (var i = St(t, mt), r = St(t.parentNode, vt), n = Ot(t, i, r), s, a, o, l, h, c, p, f;
                        (t = t.parentNode) && t.parentNode && t !== u;) i = r, r = St(t.parentNode, i === mt ? vt : mt), p = Ot(t, i, r), s = n[0], a = n[1], o = n[2], l = n[3], h = n[4], c = n[5], n[0] = s * p[0] + a * p[2], n[1] = s * p[1] + a * p[3], n[2] = o * p[0] + l * p[2], n[3] = o * p[1] + l * p[3], n[4] = h * p[0] + c * p[2] + p[4], n[5] = h * p[1] + c * p[3] + p[5];
                    return e && (s = n[0], a = n[1], o = n[2], l = n[3], h = n[4], c = n[5], f = s * l - a * o, n[0] = l / f, n[1] = -a / f, n[2] = -o / f, n[3] = s / f, n[4] = (o * c - l * h) / f, n[5] = -(s * c - a * h) / f), n
                },
                Ct = function(t, e, i, r, n) {
                    t = G(t);
                    var s = kt(t, !1, n),
                        a = e.x,
                        o = e.y;
                    return i && (St(t, e), a -= e.x, o -= e.y), r = !0 === r ? e : r || {}, r.x = a * s[0] + o * s[2] + s[4], r.y = a * s[1] + o * s[3] + s[5], r
                },
                Dt = function(t, e, i) {
                    var r = t.x * e[0] + t.y * e[2] + e[4],
                        n = t.x * e[1] + t.y * e[3] + e[5];
                    return t.x = r * i[0] + n * i[2] + i[4], t.y = r * i[1] + n * i[3] + i[5], t
                },
                Et = function(t, e, i) {
                    if (!(t = G(t))) return null;
                    e = G(e);
                    var r = t.getBBox && yt(t),
                        n, s, a, o, l, h, p, f, d, g, m, v, _, x, b, w, T, S, P, O, k, C;
                    if (t === window) o = L(), s = V(), a = s + (u.clientWidth || t.innerWidth || c.body.clientWidth || 0), l = o + ((t.innerHeight || 0) - 20 < u.clientHeight ? u.clientHeight : t.innerHeight || c.body.clientHeight || 0);
                    else {
                        if (void 0 === e || e === window) return t.getBoundingClientRect();
                        n = St(t), s = -n.x, o = -n.y, r ? (v = t.getBBox(), _ = v.width, x = v.height) : "svg" !== (t.nodeName + "").toLowerCase() && t.offsetWidth ? (_ = t.offsetWidth, x = t.offsetHeight) : (k = K(t), _ = parseFloat(k.width), x = parseFloat(k.height)), a = s + _, l = o + x, "svg" !== t.nodeName.toLowerCase() || y || (b = Tt(t), C = b.computedStyle || {}, S = (t.getAttribute("viewBox") || "0 0").split(" "), P = parseFloat(S[0]), O = parseFloat(S[1]), w = parseFloat(C.borderLeftWidth) || 0, T = parseFloat(C.borderTopWidth) || 0, a -= _ - (_ - w) / b.scaleX - P, l -= x - (x - T) / b.scaleY - O, s -= w / b.scaleX - P, o -= T / b.scaleY - O, k && (a += (parseFloat(C.borderRightWidth) + w) / b.scaleX, l += (T + parseFloat(C.borderBottomWidth)) / b.scaleY))
                    }
                    return t === e ? {
                        left: s,
                        top: o,
                        width: a - s,
                        height: l - o
                    } : (h = kt(t), p = kt(e, !0), f = Dt({
                        x: s,
                        y: o
                    }, h, p), d = Dt({
                        x: a,
                        y: o
                    }, h, p), g = Dt({
                        x: a,
                        y: l
                    }, h, p), m = Dt({
                        x: s,
                        y: l
                    }, h, p), s = Math.min(f.x, d.x, g.x, m.x), o = Math.min(f.y, d.y, g.y, m.y), E.x = E.y = 0, i && St(e, E), {
                        left: s + E.x,
                        top: o + E.y,
                        width: Math.max(f.x, d.x, g.x, m.x) - s,
                        height: Math.max(f.y, d.y, g.y, m.y) - o
                    })
                },
                At = function(t) {
                    return !!(t && t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]))
                },
                Rt = function(t) {
                    var e = [],
                        i = t.length,
                        r, n, s;
                    for (r = 0; r < i; r++)
                        if (n = t[r], At(n))
                            for (s = n.length, s = 0; s < n.length; s++) e.push(n[s]);
                        else n && 0 !== n.length && e.push(n);
                    return e
                },
                Mt = "ontouchstart" in u && "orientation" in window,
                Xt = function(t) {
                    for (var e = t.split(","), i = (void 0 !== f.onpointerdown ? "pointerdown,pointermove,pointerup,pointercancel" : void 0 !== f.onmspointerdown ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : t).split(","), r = {}, n = 8; --n > -1;) r[e[n]] = i[n], r[i[n]] = e[n];
                    return r
                }("touchstart,touchmove,touchend,touchcancel"),
                zt = function(t, e, i, r) {
                    t.addEventListener ? t.addEventListener(Xt[e] || e, i, r) : t.attachEvent && t.attachEvent("on" + e, i)
                },
                Yt = function(t, e, i) {
                    t.removeEventListener ? t.removeEventListener(Xt[e] || e, i) : t.detachEvent && t.detachEvent("on" + e, i)
                },
                Ft = function(t, e) {
                    for (var i = t.length; --i > -1;)
                        if (t[i].identifier === e) return !0;
                    return !1
                },
                Nt = function(t) {
                    k = t.touches && P < t.touches.length, Yt(t.target, "touchend", Nt)
                },
                It = function(t) {
                    k = t.touches && P < t.touches.length, zt(t.target, "touchend", Nt)
                },
                Lt = function(t, e, i, r, n, s) {
                    var a = {},
                        o, l, h;
                    if (e)
                        if (1 !== n && e instanceof Array) {
                            if (a.end = o = [], h = e.length, "object" == typeof e[0])
                                for (l = 0; l < h; l++) o[l] = M(e[l], n);
                            else
                                for (l = 0; l < h; l++) o[l] = e[l] * n;
                            i += 1.1, r -= 1.1
                        } else a.end = "function" == typeof e ? function(i) {
                            var r = e.call(t, i),
                                s, a;
                            if (1 !== n && "object" == typeof r) {
                                s = {};
                                for (a in r) s[a] = r[a] * n;
                                r = s
                            }
                            return r
                        } : e;
                    return (i || 0 === i) && (a.max = i), (r || 0 === r) && (a.min = r), s && (a.velocity = 0), a
                },
                Vt = function(t) {
                    var e;
                    return !(!t || !t.getAttribute || "BODY" === t.nodeName) && (!("true" !== (e = t.getAttribute("data-clickable")) && ("false" === e || !t.onclick && !S.test(t.nodeName + "") && "true" !== t.getAttribute("contentEditable"))) || Vt(t.parentNode))
                },
                Bt = function(t, e) {
                    for (var i = t.length, r; --i > -1;) r = t[i], r.ondragstart = r.onselectstart = e ? null : g, Q(r, "userSelect", e ? "text" : "none")
                },
                jt, qt = function() {
                    var t = c.createElement("div"),
                        e = c.createElement("div"),
                        i = e.style,
                        r = c.body || f,
                        n;
                    return i.display = "inline-block", i.position = "relative", t.style.cssText = e.innerHTML = "width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden", t.appendChild(e), r.appendChild(t), jt = e.offsetHeight + 18 > t.scrollHeight, i.width = "100%", dt || (i.paddingRight = "500px", n = t.scrollLeft = t.scrollWidth - t.clientWidth, i.left = "-90px", n = n !== t.scrollLeft), r.removeChild(t), n
                }(),
                Ht = function(t, i) {
                    t = G(t), i = i || {};
                    var r = c.createElement("div"),
                        n = r.style,
                        s = t.firstChild,
                        a = 0,
                        o = 0,
                        l = t.scrollTop,
                        h = t.scrollLeft,
                        u = t.scrollWidth,
                        p = t.scrollHeight,
                        f = 0,
                        d = 0,
                        g = 0,
                        m, v, _, x, b, w;
                    pt && !1 !== i.force3D ? (b = "translate3d(", w = "px,0px)") : dt && (b = "translate(", w = "px)"), this.scrollTop = function(t, e) {
                        if (!arguments.length) return -this.top();
                        this.top(-t, e)
                    }, this.scrollLeft = function(t, e) {
                        if (!arguments.length) return -this.left();
                        this.left(-t, e)
                    }, this.left = function(r, s) {
                        if (!arguments.length) return -(t.scrollLeft + o);
                        var l = t.scrollLeft - h,
                            c = o;
                        if ((l > 2 || l < -2) && !s) return h = t.scrollLeft, e.killTweensOf(this, !0, {
                            left: 1,
                            scrollLeft: 1
                        }), this.left(-h), void(i.onKill && i.onKill());
                        r = -r, r < 0 ? (o = r - .5 | 0, r = 0) : r > d ? (o = r - d | 0, r = d) : o = 0, (o || c) && (b ? this._suspendTransforms || (n[dt] = b + -o + "px," + -a + w) : n.left = -o + "px", qt && o + f >= 0 && (n.paddingRight = o + f + "px")), t.scrollLeft = 0 | r, h = t.scrollLeft
                    }, this.top = function(r, s) {
                        if (!arguments.length) return -(t.scrollTop + a);
                        var h = t.scrollTop - l,
                            c = a;
                        if ((h > 2 || h < -2) && !s) return l = t.scrollTop, e.killTweensOf(this, !0, {
                            top: 1,
                            scrollTop: 1
                        }), this.top(-l), void(i.onKill && i.onKill());
                        r = -r, r < 0 ? (a = r - .5 | 0, r = 0) : r > g ? (a = r - g | 0, r = g) : a = 0, (a || c) && (b ? this._suspendTransforms || (n[dt] = b + -o + "px," + -a + w) : n.top = -a + "px"), t.scrollTop = 0 | r, l = t.scrollTop
                    }, this.maxScrollTop = function() {
                        return g
                    }, this.maxScrollLeft = function() {
                        return d
                    }, this.disable = function() {
                        for (s = r.firstChild; s;) x = s.nextSibling, t.appendChild(s), s = x;
                        t === r.parentNode && t.removeChild(r)
                    }, this.enable = function() {
                        if ((s = t.firstChild) !== r) {
                            for (; s;) x = s.nextSibling, r.appendChild(s), s = x;
                            t.appendChild(r), this.calibrate()
                        }
                    }, this.calibrate = function(e) {
                        var i = t.clientWidth === m,
                            s, c;
                        l = t.scrollTop, h = t.scrollLeft, i && t.clientHeight === v && r.offsetHeight === _ && u === t.scrollWidth && p === t.scrollHeight && !e || ((a || o) && (s = this.left(), c = this.top(), this.left(-t.scrollLeft), this.top(-t.scrollTop)), i && !e || (n.display = "block", n.width = "auto", n.paddingRight = "0px", (f = Math.max(0, t.scrollWidth - t.clientWidth)) && (f += rt(t, "paddingLeft") + (jt ? rt(t, "paddingRight") : 0))), n.display = "inline-block", n.position = "relative", n.overflow = "visible", n.verticalAlign = "top", n.width = "100%", n.paddingRight = f + "px", jt && (n.paddingBottom = rt(t, "paddingBottom", !0)), y && (n.zoom = "1"), m = t.clientWidth, v = t.clientHeight, u = t.scrollWidth, p = t.scrollHeight, d = t.scrollWidth - m, g = t.scrollHeight - v, _ = r.offsetHeight, n.display = "block", (s || c) && (this.left(s), this.top(c)))
                    }, this.content = r, this.element = t, this._suspendTransforms = !1, this.enable()
                },
                Wt = function(l, h) {
                    t.call(this, l), l = G(l), X || (X = o.com.greensock.plugins.ThrowPropsPlugin), this.vars = h = M(h || {}), this.target = l, this.x = this.y = this.rotation = 0, this.dragResistance = parseFloat(h.dragResistance) || 0, this.edgeResistance = isNaN(h.edgeResistance) ? 1 : parseFloat(h.edgeResistance) || 0, this.lockAxis = h.lockAxis, this.autoScroll = h.autoScroll || 0, this.lockedAxis = null, this.allowEventDefault = !!h.allowEventDefault;
                    var p = (h.type || (y ? "top,left" : "x,y")).toLowerCase(),
                        f = -1 !== p.indexOf("x") || -1 !== p.indexOf("y"),
                        g = -1 !== p.indexOf("rotation"),
                        b = g ? "rotation" : f ? "x" : "left",
                        S = f ? "y" : "top",
                        O = -1 !== p.indexOf("x") || -1 !== p.indexOf("left") || "scroll" === p,
                        z = -1 !== p.indexOf("y") || -1 !== p.indexOf("top") || "scroll" === p,
                        N = h.minimumMovement || 2,
                        L = this,
                        V = R(h.trigger || h.handle || l),
                        H = {},
                        Z = 0,
                        K = !1,
                        J = h.clickableTest || Vt,
                        tt = 0,
                        et, it, at, ot, lt, ht, ct, ut, pt, ft, dt, gt, mt, vt, _t, yt, xt, bt, wt, Tt, St, Pt, Ot, Dt, Et, At, Rt, Nt, jt, qt, Ut, Gt, Zt, Qt, Kt = function(t) {
                            if (L.autoScroll && L.isDragging && (K || bt)) {
                                var e = l,
                                    i = 15 * L.autoScroll,
                                    r, n, s, a, o, h, p, d;
                                for (K = !1, A.scrollTop = null != window.pageYOffset ? window.pageYOffset : null != u.scrollTop ? u.scrollTop : c.body.scrollTop, A.scrollLeft = null != window.pageXOffset ? window.pageXOffset : null != u.scrollLeft ? u.scrollLeft : c.body.scrollLeft, a = L.pointerX - A.scrollLeft, o = L.pointerY - A.scrollTop; e && !n;) n = q(e.parentNode), r = n ? A : e.parentNode, s = n ? {
                                    bottom: Math.max(u.clientHeight, window.innerHeight || 0),
                                    right: Math.max(u.clientWidth, window.innerWidth || 0),
                                    left: 0,
                                    top: 0
                                } : r.getBoundingClientRect(), h = p = 0, z && (d = r._gsMaxScrollY - r.scrollTop, d < 0 ? p = d : o > s.bottom - 40 && d ? (K = !0, p = Math.min(d, i * (1 - Math.max(0, s.bottom - o) / 40) | 0)) : o < s.top + 40 && r.scrollTop && (K = !0, p = -Math.min(r.scrollTop, i * (1 - Math.max(0, o - s.top) / 40) | 0)), p && (r.scrollTop += p)), O && (d = r._gsMaxScrollX - r.scrollLeft, d < 0 ? h = d : a > s.right - 40 && d ? (K = !0, h = Math.min(d, i * (1 - Math.max(0, s.right - a) / 40) | 0)) : a < s.left + 40 && r.scrollLeft && (K = !0, h = -Math.min(r.scrollLeft, i * (1 - Math.max(0, a - s.left) / 40) | 0)), h && (r.scrollLeft += h)), n && (h || p) && (window.scrollTo(r.scrollLeft, r.scrollTop), pe(L.pointerX + h, L.pointerY + p)), e = r
                            }
                            if (bt) {
                                var m = L.x,
                                    v = L.y,
                                    _ = 1e-6;
                                m < 1e-6 && m > -1e-6 && (m = 0), v < 1e-6 && v > -1e-6 && (v = 0), g ? (L.deltaX = m - jt.data.rotation, jt.data.rotation = L.rotation = m, jt.setRatio(1)) : it ? (z && (L.deltaY = v - it.top(), it.top(v)), O && (L.deltaX = m - it.left(), it.left(m))) : f ? (z && (L.deltaY = v - jt.data.y, jt.data.y = v), O && (L.deltaX = m - jt.data.x, jt.data.x = m), jt.setRatio(1)) : (z && (L.deltaY = v - parseFloat(l.style.top || 0), l.style.top = v + "px"), O && (L.deltaY = m - parseFloat(l.style.left || 0), l.style.left = m + "px")), !ut || t || Gt || (Gt = !0, nt(L, "drag", "onDrag"), Gt = !1)
                            }
                            bt = !1
                        },
                        Jt = function(t, i) {
                            var r = L.x,
                                n = L.y,
                                s;
                            l._gsTransform || !f && !g || e.set(l, {
                                x: "+=0",
                                overwrite: !1
                            }), f ? (L.y = l._gsTransform.y, L.x = l._gsTransform.x) : g ? L.x = L.rotation = l._gsTransform.rotation : it ? (L.y = it.top(), L.x = it.left()) : (L.y = parseInt(l.style.top, 10) || 0, L.x = parseInt(l.style.left, 10) || 0), (Tt || St || Pt) && !i && (L.isDragging || L.isThrowing) && (Pt && (E.x = L.x, E.y = L.y, s = Pt(E), s.x !== L.x && (L.x = s.x, bt = !0), s.y !== L.y && (L.y = s.y, bt = !0)), Tt && (s = Tt(L.x)) !== L.x && (L.x = s, g && (L.rotation = s), bt = !0), St && (s = St(L.y), s !== L.y && (L.y = s), bt = !0)), bt && Kt(!0), t || (L.deltaX = L.x - r, L.deltaY = L.y - n, nt(L, "throwupdate", "onThrowUpdate"))
                        },
                        te = function() {
                            var t, e, i, r;
                            ct = !1, it ? (it.calibrate(), L.minX = ft = -it.maxScrollLeft(), L.minY = gt = -it.maxScrollTop(), L.maxX = pt = L.maxY = dt = 0, ct = !0) : h.bounds && (t = st(h.bounds, l.parentNode), g ? (L.minX = ft = t.left, L.maxX = pt = t.left + t.width, L.minY = gt = L.maxY = dt = 0) : void 0 !== h.bounds.maxX || void 0 !== h.bounds.maxY ? (t = h.bounds, L.minX = ft = t.minX, L.minY = gt = t.minY, L.maxX = pt = t.maxX, L.maxY = dt = t.maxY) : (e = st(l, l.parentNode), L.minX = ft = rt(l, b) + t.left - e.left, L.minY = gt = rt(l, S) + t.top - e.top, L.maxX = pt = ft + (t.width - e.width), L.maxY = dt = gt + (t.height - e.height)), ft > pt && (L.minX = pt, L.maxX = pt = ft, ft = L.minX), gt > dt && (L.minY = dt, L.maxY = dt = gt, gt = L.minY), g && (L.minRotation = ft, L.maxRotation = pt), ct = !0), h.liveSnap && (i = !0 === h.liveSnap ? h.snap || {} : h.liveSnap, r = i instanceof Array || "function" == typeof i, g ? (Tt = le(r ? i : i.rotation, ft, pt, 1), St = null) : i.points ? Pt = he(r ? i : i.points, ft, pt, gt, dt, i.radius, it ? -1 : 1) : (O && (Tt = le(r ? i : i.x || i.left || i.scrollLeft, ft, pt, it ? -1 : 1)), z && (St = le(r ? i : i.y || i.top || i.scrollTop, gt, dt, it ? -1 : 1))))
                        },
                        ee = function() {
                            L.isThrowing = !1, nt(L, "throwcomplete", "onThrowComplete")
                        },
                        ie = function() {
                            L.isThrowing = !1
                        },
                        re = function(t, e) {
                            var i, r, n, s;
                            t && X ? (!0 === t && (i = h.snap || h.liveSnap || {}, r = i instanceof Array || "function" == typeof i, t = {
                                resistance: (h.throwResistance || h.resistance || 1e3) / (g ? 10 : 1)
                            }, g ? t.rotation = Lt(L, r ? i : i.rotation, pt, ft, 1, e) : (O && (t[b] = Lt(L, r ? i : i.points || i.x || i.left || i.scrollLeft, pt, ft, it ? -1 : 1, e || "x" === L.lockedAxis)), z && (t[S] = Lt(L, r ? i : i.points || i.y || i.top || i.scrollTop, dt, gt, it ? -1 : 1, e || "y" === L.lockedAxis)), (i.points || i instanceof Array && "object" == typeof i[0]) && (t.linkedProps = b + "," + S, t.radius = i.radius))), L.isThrowing = !0, s = isNaN(h.overshootTolerance) ? 1 === h.edgeResistance ? 0 : 1 - L.edgeResistance + .2 : h.overshootTolerance, L.tween = n = X.to(it || l, {
                                throwProps: t,
                                ease: h.ease || o.Power3.easeOut,
                                onComplete: ee,
                                onOverwrite: ie,
                                onUpdate: h.fastMode ? nt : Jt,
                                onUpdateParams: h.fastMode ? [L, "onthrowupdate", "onThrowUpdate"] : i && i.radius ? [!1, !0] : d
                            }, isNaN(h.maxDuration) ? 2 : h.maxDuration, isNaN(h.minDuration) ? 0 === s ? 0 : .5 : h.minDuration, s), h.fastMode || (it && (it._suspendTransforms = !0), n.render(n.duration(), !0, !0), Jt(!0, !0), L.endX = L.x, L.endY = L.y, g && (L.endRotation = L.x), n.play(0), Jt(!0, !0), it && (it._suspendTransforms = !1))) : ct && L.applyBounds()
                        },
                        ne = function(t) {
                            var e = Et || [1, 0, 0, 1, 0, 0],
                                i, r, n, s, a, o, h, c, u;
                            Et = kt(l.parentNode, !0), t && L.isPressed && e.join(",") !== Et.join(",") && (i = e[0], r = e[1], n = e[2], s = e[3], a = e[4], o = e[5], h = i * s - r * n, c = at * (s / h) + ot * (-n / h) + (n * o - s * a) / h, u = at * (-r / h) + ot * (i / h) + -(i * o - r * a) / h, ot = c * Et[1] + u * Et[3] + Et[5], at = c * Et[0] + u * Et[2] + Et[4]), Et[1] || Et[2] || 1 != Et[0] || 1 != Et[3] || 0 != Et[4] || 0 != Et[5] || (Et = null)
                        },
                        se = function() {
                            var t = 1 - L.edgeResistance;
                            ne(!1), Et && (at = L.pointerX * Et[0] + L.pointerY * Et[2] + Et[4], ot = L.pointerX * Et[1] + L.pointerY * Et[3] + Et[5]), bt && (pe(L.pointerX, L.pointerY), Kt(!0)), it ? (te(), ht = it.top(), lt = it.left()) : (ae() ? (Jt(!0, !0), te()) : L.applyBounds(), g ? (xt = Ct(l, {
                                x: 0,
                                y: 0
                            }), Jt(!0, !0), lt = L.x, ht = L.y = Math.atan2(xt.y - L.pointerY, L.pointerX - xt.x) * m) : (Rt = l.parentNode ? l.parentNode.scrollTop || 0 : 0, Nt = l.parentNode ? l.parentNode.scrollLeft || 0 : 0, ht = rt(l, S), lt = rt(l, b))), ct && t && (lt > pt ? lt = pt + (lt - pt) / t : lt < ft && (lt = ft - (ft - lt) / t), g || (ht > dt ? ht = dt + (ht - dt) / t : ht < gt && (ht = gt - (gt - ht) / t))), L.startX = lt, L.startY = ht
                        },
                        ae = function() {
                            return L.tween && L.tween.isActive()
                        },
                        oe = function() {
                            !x.parentNode || ae() || L.isDragging || x.parentNode.removeChild(x)
                        },
                        le = function(t, e, i, r) {
                            return "function" == typeof t ? function(n) {
                                var s = L.isPressed ? 1 - L.edgeResistance : 1;
                                return t.call(L, n > i ? i + (n - i) * s : n < e ? e + (n - e) * s : n) * r
                            } : t instanceof Array ? function(r) {
                                for (var n = t.length, s = 0, a = v, o, l; --n > -1;) o = t[n], l = o - r, l < 0 && (l = -l), l < a && o >= e && o <= i && (s = n, a = l);
                                return t[s]
                            } : isNaN(t) ? function(t) {
                                return t
                            } : function() {
                                return t * r
                            }
                        },
                        he = function(t, e, i, r, n, s, a) {
                            return s = s || v, "function" == typeof t ? function(o) {
                                var l = L.isPressed ? 1 - L.edgeResistance : 1,
                                    h = o.x,
                                    c = o.y,
                                    u, p, f;
                                return o.x = h = h > i ? i + (h - i) * l : h < e ? e + (h - e) * l : h, o.y = c = c > n ? n + (c - n) * l : c < r ? r + (c - r) * l : c, u = t.call(L, o), u !== o && (o.x = u.x, o.y = u.y), 1 !== a && (o.x *= a, o.y *= a), s < v && (p = o.x - h, f = o.y - c, Math.sqrt(p * p + f * f) > s && (o.x = h, o.y = c)), o
                            } : t instanceof Array ? function(e) {
                                for (var i = t.length, r = 0, n = v, a, o, l, h; --i > -1;) l = t[i], a = l.x - e.x, o = l.y - e.y, (h = Math.sqrt(a * a + o * o)) < n && (r = i, n = h);
                                return n <= s ? t[r] : e
                            } : function(t) {
                                return t
                            }
                        },
                        ce = function(t) {
                            var i;
                            if (!(!et || L.isPressed || !t || ("mousedown" === t.type || "pointerdown" === t.type) && _() - tt < 30 && Xt[L.pointerEvent.type])) {
                                if (At = ae(), L.pointerEvent = t, Xt[t.type] ? (Dt = -1 !== t.type.indexOf("touch") ? t.currentTarget || t.target : c, zt(Dt, "touchend", fe), zt(Dt, "touchmove", ue), zt(Dt, "touchcancel", fe), zt(c, "touchstart", It)) : (Dt = null, zt(c, "mousemove", ue)), Ut = null, zt(c, "mouseup", fe), t && t.target && zt(t.target, "mouseup", fe), Ot = J.call(L, t.target) && !h.dragClickables) return zt(t.target, "change", fe), nt(L, "press", "onPress"), void Bt(V, !0);
                                if (qt = !(!Dt || O === z || !1 === L.vars.allowNativeTouchScrolling) && (O ? "y" : "x"), y ? t = U(t, !0) : qt || L.allowEventDefault || (t.preventDefault(), t.preventManipulation && t.preventManipulation()), t.changedTouches ? (t = _t = t.changedTouches[0], yt = t.identifier) : t.pointerId ? yt = t.pointerId : _t = yt = null, P++, Y(Kt), ot = L.pointerY = t.pageY, at = L.pointerX = t.pageX, (qt || L.autoScroll) && W(l.parentNode), l.parentNode && (it || L.autoScroll && !g && l.parentNode._gsMaxScrollX && !x.parentNode) && !l.getBBox && (x.style.width = l.parentNode.scrollWidth + "px", l.parentNode.appendChild(x)), se(), L.tween && L.tween.kill(), L.isThrowing = !1, e.killTweensOf(it || l, !0, H), it && e.killTweensOf(l, !0, {
                                        scrollTo: 1
                                    }), L.tween = L.lockedAxis = null, (h.zIndexBoost || !g && !it && !1 !== h.zIndexBoost) && (l.style.zIndex = Wt.zIndex++), L.isPressed = !0, ut = !(!h.onDrag && !L._listeners.drag), !g)
                                    for (i = V.length; --i > -1;) Q(V[i], "cursor", h.cursor || "move");
                                nt(L, "press", "onPress")
                            }
                        },
                        ue = function(t) {
                            var e = t,
                                i, r, n, s, a, o;
                            if (et && !k && L.isPressed && t) {
                                if (L.pointerEvent = t, i = t.changedTouches) {
                                    if ((t = i[0]) !== _t && t.identifier !== yt) {
                                        for (s = i.length; --s > -1 && (t = i[s]).identifier !== yt;);
                                        if (s < 0) return
                                    }
                                } else if (t.pointerId && yt && t.pointerId !== yt) return;
                                if (y) t = U(t, !0);
                                else {
                                    if (Dt && qt && !Ut && (r = t.pageX, n = t.pageY, Et && (s = r * Et[0] + n * Et[2] + Et[4], n = r * Et[1] + n * Et[3] + Et[5], r = s), a = Math.abs(r - at), o = Math.abs(n - ot), (a !== o && (a > N || o > N) || C && qt === Ut) && (Ut = a > o && O ? "x" : "y", !1 !== L.vars.lockAxisOnTouchScroll && (L.lockedAxis = "x" === Ut ? "y" : "x", "function" == typeof L.vars.onLockAxis && L.vars.onLockAxis.call(L, e)), C && qt === Ut))) return void fe(e);
                                    L.allowEventDefault || qt && (!Ut || qt === Ut) || !1 === e.cancelable || (e.preventDefault(), e.preventManipulation && e.preventManipulation())
                                }
                                L.autoScroll && (K = !0), pe(t.pageX, t.pageY)
                            }
                        },
                        pe = function(t, e) {
                            var i = 1 - L.dragResistance,
                                r = 1 - L.edgeResistance,
                                n, s, a, o, l, h;
                            L.pointerX = t, L.pointerY = e, g ? (o = Math.atan2(xt.y - e, t - xt.x) * m, l = L.y - o, L.y = o, l > 180 ? ht -= 360 : l < -180 && (ht += 360), a = lt + (ht - o) * i) : (Et && (h = t * Et[0] + e * Et[2] + Et[4], e = t * Et[1] + e * Et[3] + Et[5], t = h), s = e - ot, n = t - at, s < N && s > -N && (s = 0), n < N && n > -N && (n = 0), (L.lockAxis || L.lockedAxis) && (n || s) && (h = L.lockedAxis, h || (L.lockedAxis = h = O && Math.abs(n) > Math.abs(s) ? "y" : z ? "x" : null, h && "function" == typeof L.vars.onLockAxis && L.vars.onLockAxis.call(L, L.pointerEvent)), "y" === h ? s = 0 : "x" === h && (n = 0)), a = lt + n * i, o = ht + s * i), (Tt || St || Pt) && (L.x !== a || L.y !== o && !g) ? (Pt && (E.x = a, E.y = o, h = Pt(E), a = h.x, o = h.y), Tt && (a = Tt(a)), St && (o = St(o))) : ct && (a > pt ? a = pt + (a - pt) * r : a < ft && (a = ft + (a - ft) * r), g || (o > dt ? o = dt + (o - dt) * r : o < gt && (o = gt + (o - gt) * r))), g || (a = Math.round(a), o = Math.round(o)), (L.x !== a || L.y !== o && !g) && (g ? (L.endRotation = L.x = L.endX = a, bt = !0) : (z && (L.y = L.endY = o, bt = !0), O && (L.x = L.endX = a, bt = !0)), !L.isDragging && L.isPressed && (L.isDragging = !0, nt(L, "dragstart", "onDragStart")))
                        },
                        fe = function(t, i) {
                            if (et && L.isPressed && (!t || null == yt || i || !(t.pointerId && t.pointerId !== yt || t.changedTouches && !Ft(t.changedTouches, yt)))) {
                                L.isPressed = !1;
                                var r = t,
                                    n = L.isDragging,
                                    s = e.delayedCall(.001, oe),
                                    a, o, u, p, f;
                                if (Dt ? (Yt(Dt, "touchend", fe), Yt(Dt, "touchmove", ue), Yt(Dt, "touchcancel", fe), Yt(c, "touchstart", It)) : Yt(c, "mousemove", ue), Yt(c, "mouseup", fe), t && t.target && Yt(t.target, "mouseup", fe), bt = !1, Ot) return t && Yt(t.target, "change", fe), Bt(V, !1), nt(L, "release", "onRelease"), nt(L, "click", "onClick"), void(Ot = !1);
                                if (F(Kt), !g)
                                    for (o = V.length; --o > -1;) Q(V[o], "cursor", h.cursor || "move");
                                if (n && (Z = D = _(), L.isDragging = !1), P--, t) {
                                    if (y && (t = U(t, !1)), (a = t.changedTouches) && (t = a[0]) !== _t && t.identifier !== yt) {
                                        for (o = a.length; --o > -1 && (t = a[o]).identifier !== yt;);
                                        if (o < 0) return
                                    }
                                    L.pointerEvent = r, L.pointerX = t.pageX, L.pointerY = t.pageY
                                }
                                return r && !n ? (At && (h.snap || h.bounds) && re(h.throwProps), nt(L, "release", "onRelease"), C && "touchmove" === r.type || (nt(L, "click", "onClick"), p = r.target || r.srcElement || l, tt = _(), f = function() {
                                    tt !== Zt && L.enabled() && !L.isPressed && (p.click ? p.click() : c.createEvent && (u = c.createEvent("MouseEvents"), u.initMouseEvent("click", !0, !0, window, 1, L.pointerEvent.screenX, L.pointerEvent.screenY, L.pointerX, L.pointerY, !1, !1, !1, !1, 0, null), p.dispatchEvent(u)))
                                }, C || r.defaultPrevented || e.delayedCall(1e-5, f))) : (re(h.throwProps), y || L.allowEventDefault || !r || !h.dragClickables && J.call(L, r.target) || !n || qt && (!Ut || qt !== Ut) || !1 === r.cancelable || (r.preventDefault(), r.preventManipulation && r.preventManipulation()), nt(L, "release", "onRelease")), ae() && s.duration(L.tween.duration()), n && nt(L, "dragend", "onDragEnd"), !0
                            }
                        },
                        de = function(t) {
                            if (t && L.isDragging && !it) {
                                var e = t.target || t.srcElement || l.parentNode,
                                    i = e.scrollLeft - e._gsScrollX,
                                    r = e.scrollTop - e._gsScrollY;
                                (i || r) && (Et ? (at -= i * Et[0] + r * Et[2], ot -= r * Et[3] + i * Et[1]) : (at -= i, ot -= r), e._gsScrollX += i, e._gsScrollY += r, pe(L.pointerX, L.pointerY))
                            }
                        },
                        ge = function(t) {
                            var e = _(),
                                i = e - tt < 40,
                                r = e - Z < 40,
                                n = i && Zt === tt,
                                s = !!t.preventDefault,
                                a = L.pointerEvent && L.pointerEvent.defaultPrevented,
                                o = i && Qt === tt,
                                l = t.isTrusted || null == t.isTrusted && i && n;
                            if (s && (n || r && !1 !== L.vars.suppressClickOnDrag) && t.stopImmediatePropagation(), i && (!L.pointerEvent || !L.pointerEvent.defaultPrevented) && (!n || l !== o)) return l && n && (Qt = tt), void(Zt = tt);
                            (L.isPressed || r || i) && (s ? l && t.detail && i && !a || (t.preventDefault(), t.preventManipulation && t.preventManipulation()) : t.returnValue = !1)
                        };
                    wt = Wt.get(this.target), wt && wt.kill(), this.startDrag = function(t) {
                        ce(t), L.isDragging || (L.isDragging = !0, nt(L, "dragstart", "onDragStart"))
                    }, this.drag = ue, this.endDrag = function(t) {
                        fe(t, !0)
                    }, this.timeSinceDrag = function() {
                        return L.isDragging ? 0 : (_() - Z) / 1e3
                    }, this.hitTest = function(t, e) {
                        return Wt.hitTest(L.target, t, e)
                    }, this.getDirection = function(t, e) {
                        var i = "velocity" === t && X ? t : "object" != typeof t || g ? "start" : "element",
                            r, n, s, a, o, l;
                        return "element" === i && (o = $t(L.target), l = $t(t)), r = "start" === i ? L.x - lt : "velocity" === i ? X.getVelocity(this.target, b) : o.left + o.width / 2 - (l.left + l.width / 2), g ? r < 0 ? "counter-clockwise" : "clockwise" : (e = e || 2, n = "start" === i ? L.y - ht : "velocity" === i ? X.getVelocity(this.target, S) : o.top + o.height / 2 - (l.top + l.height / 2), s = Math.abs(r / n), a = s < 1 / e ? "" : r < 0 ? "left" : "right", s < e && ("" !== a && (a += "-"), a += n < 0 ? "up" : "down"), a)
                    }, this.applyBounds = function(t) {
                        var e, i, r, n, s, a;
                        if (t && h.bounds !== t) return h.bounds = t, L.update(!0);
                        if (Jt(!0), te(), ct) {
                            if (e = L.x, i = L.y, e > pt ? e = pt : e < ft && (e = ft), i > dt ? i = dt : i < gt && (i = gt), (L.x !== e || L.y !== i) && (r = !0, L.x = L.endX = e, g ? L.endRotation = e : L.y = L.endY = i, bt = !0, Kt(!0), L.autoScroll && !L.isDragging))
                                for (W(l.parentNode), n = l, A.scrollTop = null != window.pageYOffset ? window.pageYOffset : null != u.scrollTop ? u.scrollTop : c.body.scrollTop,
                                    A.scrollLeft = null != window.pageXOffset ? window.pageXOffset : null != u.scrollLeft ? u.scrollLeft : c.body.scrollLeft; n && !a;) a = q(n.parentNode), s = a ? A : n.parentNode, z && s.scrollTop > s._gsMaxScrollY && (s.scrollTop = s._gsMaxScrollY), O && s.scrollLeft > s._gsMaxScrollX && (s.scrollLeft = s._gsMaxScrollX), n = s;
                            L.isThrowing && (r || L.endX > pt || L.endX < ft || L.endY > dt || L.endY < gt) && re(h.throwProps, r)
                        }
                        return L
                    }, this.update = function(t, e, i) {
                        var r = L.x,
                            n = L.y;
                        return ne(!e), t ? L.applyBounds() : (bt && i && Kt(!0), Jt(!0)), e && (pe(L.pointerX, L.pointerY), bt && Kt(!0)), L.isPressed && !e && (O && Math.abs(r - L.x) > .01 || z && Math.abs(n - L.y) > .01 && !g) && se(), L.autoScroll && (W(l.parentNode), K = L.isDragging, Kt(!0)), L.autoScroll && (j(l, de), B(l, de)), L
                    }, this.enable = function(t) {
                        var r, n, s;
                        if ("soft" !== t) {
                            for (n = V.length; --n > -1;) s = V[n], zt(s, "mousedown", ce), zt(s, "touchstart", ce), zt(s, "click", ge, !0), g || Q(s, "cursor", h.cursor || "move"), Q(s, "touchCallout", "none"), Q(s, "touchAction", O === z ? "none" : O ? "pan-y" : "pan-x");
                            Bt(V, !1)
                        }
                        return B(l, de), et = !0, X && "soft" !== t && X.track(it || l, f ? "x,y" : g ? "rotation" : "top,left"), it && it.enable(), l._gsDragID = r = "d" + T++, w[r] = this, it && (it.element._gsDragID = r), e.set(l, {
                            x: "+=0",
                            overwrite: !1
                        }), jt = {
                            t: l,
                            data: y ? vt : l._gsTransform,
                            tween: {},
                            setRatio: y ? function() {
                                e.set(l, mt)
                            } : i._internals.setTransformRatio || i._internals.set3DTransformRatio
                        }, se(), L.update(!0), L
                    }, this.disable = function(t) {
                        var e = L.isDragging,
                            i, r;
                        if (!g)
                            for (i = V.length; --i > -1;) Q(V[i], "cursor", null);
                        if ("soft" !== t) {
                            for (i = V.length; --i > -1;) r = V[i], Q(r, "touchCallout", null), Q(r, "touchAction", null), Yt(r, "mousedown", ce), Yt(r, "touchstart", ce), Yt(r, "click", ge);
                            Bt(V, !0), Dt && (Yt(Dt, "touchcancel", fe), Yt(Dt, "touchend", fe), Yt(Dt, "touchmove", ue)), Yt(c, "mouseup", fe), Yt(c, "mousemove", ue)
                        }
                        return j(l, de), et = !1, X && "soft" !== t && X.untrack(it || l, f ? "x,y" : g ? "rotation" : "top,left"), it && it.disable(), F(Kt), L.isDragging = L.isPressed = Ot = !1, e && nt(L, "dragend", "onDragEnd"), L
                    }, this.enabled = function(t, e) {
                        return arguments.length ? t ? L.enable(e) : L.disable(e) : et
                    }, this.kill = function() {
                        return L.isThrowing = !1, e.killTweensOf(it || l, !0, H), L.disable(), delete w[l._gsDragID], L
                    }, -1 !== p.indexOf("scroll") && (it = this.scrollProxy = new Ht(l, I({
                        onKill: function() {
                            L.isPressed && fe(null)
                        }
                    }, h)), l.style.overflowY = z && !Mt ? "auto" : "hidden", l.style.overflowX = O && !Mt ? "auto" : "hidden", l = it.content), !1 !== h.force3D && e.set(l, {
                        force3D: !0
                    }), g ? H.rotation = 1 : (O && (H[b] = 1), z && (H[S] = 1)), g ? (mt = a, vt = mt.css, mt.overwrite = !1) : f && (mt = O && z ? r : O ? n : s, vt = mt.css, mt.overwrite = !1), this.enable()
                },
                Ut = Wt.prototype = new t;
            Ut.constructor = Wt, Ut.pointerX = Ut.pointerY = Ut.startX = Ut.startY = Ut.deltaX = Ut.deltaY = 0, Ut.isDragging = Ut.isPressed = !1, Wt.version = "0.15.0", Wt.zIndex = 1e3, zt(c, "touchcancel", function() {}), zt(c, "contextmenu", function(t) {
                var e;
                for (e in w) w[e].isPressed && w[e].endDrag()
            }), Wt.create = function(t, i) {
                "string" == typeof t && (t = e.selector(t));
                for (var r = t && 0 !== t.length ? At(t) ? Rt(t) : [t] : [], n = r.length; --n > -1;) r[n] = new Wt(r[n], i);
                return r
            }, Wt.get = function(t) {
                return w[(G(t) || {})._gsDragID]
            }, Wt.timeSinceDrag = function() {
                return (_() - D) / 1e3
            };
            var Gt = {},
                Zt = function(t) {
                    var e = 0,
                        i = 0,
                        r, n;
                    for (t = G(t), r = t.offsetWidth, n = t.offsetHeight; t;) e += t.offsetTop, i += t.offsetLeft, t = t.offsetParent;
                    return {
                        top: e,
                        left: i,
                        width: r,
                        height: n
                    }
                },
                $t = function(t, e) {
                    if (t === window) return Gt.left = Gt.top = 0, Gt.width = Gt.right = u.clientWidth || t.innerWidth || c.body.clientWidth || 0, Gt.height = Gt.bottom = (t.innerHeight || 0) - 20 < u.clientHeight ? u.clientHeight : t.innerHeight || c.body.clientHeight || 0, Gt;
                    var i = t.pageX !== e ? {
                        left: t.pageX - V(),
                        top: t.pageY - L(),
                        right: t.pageX - V() + 1,
                        bottom: t.pageY - L() + 1
                    } : t.nodeType || t.left === e || t.top === e ? y ? Zt(t) : G(t).getBoundingClientRect() : t;
                    return i.right === e && i.width !== e ? (i.right = i.left + i.width, i.bottom = i.top + i.height) : i.width === e && (i = {
                        width: i.right - i.left,
                        height: i.bottom - i.top,
                        right: i.right,
                        left: i.left,
                        bottom: i.bottom,
                        top: i.top
                    }), i
                };
            return Wt.hitTest = function(t, e, i) {
                if (t === e) return !1;
                var r = $t(t),
                    n = $t(e),
                    s = n.left > r.right || n.right < r.left || n.top > r.bottom || n.bottom < r.top,
                    a, o, l;
                return s || !i ? !s : (l = -1 !== (i + "").indexOf("%"), i = parseFloat(i) || 0, a = {
                    left: Math.max(r.left, n.left),
                    top: Math.max(r.top, n.top)
                }, a.width = Math.min(r.right, n.right) - a.left, a.height = Math.min(r.bottom, n.bottom) - a.top, !(a.width < 0 || a.height < 0) && (l ? (i *= .01, (o = a.width * a.height) >= r.width * r.height * i || o >= n.width * n.height * i) : a.width > i && a.height > i))
            }, x.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;", Wt
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t) {
        "use strict";
        var e = function() {
            return (_gsScope.GreenSockGlobals || _gsScope).Draggable
        };
        "function" == typeof define && define.amd ? define(["TweenLite", "CSSPlugin"], e) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), require("../plugins/CSSPlugin.js"), module.exports = e())
    }("Draggable"),
    function(t) {
        "use strict";

        function e() {}

        function i(t) {
            if (!t || "object" != typeof t) return !1;
            var e = S(t) || gt;
            return /object|function/.test(typeof e.Element) ? t instanceof e.Element : 1 === t.nodeType && "string" == typeof t.nodeName
        }

        function r(t) {
            return t === gt || !(!t || !t.Window) && t instanceof t.Window
        }

        function n(t) {
            return !!t && t instanceof vt
        }

        function s(t) {
            return a(t) && void 0 !== typeof t.length && o(t.splice)
        }

        function a(t) {
            return !!t && "object" == typeof t
        }

        function o(t) {
            return "function" == typeof t
        }

        function l(t) {
            return "number" == typeof t
        }

        function h(t) {
            return "boolean" == typeof t
        }

        function c(t) {
            return "string" == typeof t
        }

        function u(t) {
            return !!c(t) && (mt.querySelector(t), !0)
        }

        function p(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function f(t, e) {
            for (var i in e) {
                var r = !1;
                for (var n in Qt)
                    if (0 === i.indexOf(n) && Qt[n].test(i)) {
                        r = !0;
                        break
                    }
                r || (t[i] = e[i])
            }
            return t
        }

        function d(t, e) {
            t.page = t.page || {}, t.page.x = e.page.x, t.page.y = e.page.y, t.client = t.client || {}, t.client.x = e.client.x, t.client.y = e.client.y, t.timeStamp = e.timeStamp
        }

        function g(t, e, i) {
            var r = e.length > 1 ? C(e) : e[0];
            y(r, Pt, i), t.page.x = Pt.x, t.page.y = Pt.y, x(r, Pt, i), t.client.x = Pt.x, t.client.y = Pt.y, t.timeStamp = (new Date).getTime()
        }

        function m(t, e, i) {
            t.page.x = i.page.x - e.page.x, t.page.y = i.page.y - e.page.y, t.client.x = i.client.x - e.client.x, t.client.y = i.client.y - e.client.y, t.timeStamp = (new Date).getTime() - e.timeStamp;
            var r = Math.max(t.timeStamp / 1e3, .001);
            t.page.speed = St(t.page.x, t.page.y) / r, t.page.vx = t.page.x / r, t.page.vy = t.page.y / r, t.client.speed = St(t.client.x, t.page.y) / r, t.client.vx = t.client.x / r, t.client.vy = t.client.y / r
        }

        function v(t) {
            return t instanceof gt.Event || Mt && gt.Touch && t instanceof gt.Touch
        }

        function _(t, e, i) {
            return i = i || {}, t = t || "page", i.x = e[t + "X"], i.y = e[t + "Y"], i
        }

        function y(t, e) {
            return e = e || {}, qt && v(t) ? (_("screen", t, e), e.x += gt.scrollX, e.y += gt.scrollY) : _("page", t, e), e
        }

        function x(t, e) {
            return e = e || {}, qt && v(t) ? _("screen", t, e) : _("client", t, e), e
        }

        function b(t) {
            return t = t || gt, {
                x: t.scrollX || t.document.documentElement.scrollLeft,
                y: t.scrollY || t.document.documentElement.scrollTop
            }
        }

        function w(t) {
            return l(t.pointerId) ? t.pointerId : t.identifier
        }

        function T(t) {
            return t instanceof xt ? t.correspondingUseElement : t
        }

        function S(t) {
            if (r(t)) return t;
            var e = t.ownerDocument || t;
            return e.defaultView || e.parentWindow || gt
        }

        function P(t) {
            var e = t instanceof _t ? t.getBoundingClientRect() : t.getClientRects()[0];
            return e && {
                left: e.left,
                right: e.right,
                top: e.top,
                bottom: e.bottom,
                width: e.width || e.right - e.left,
                height: e.height || e.bottom - e.top
            }
        }

        function O(t) {
            var e = P(t);
            if (!Ht && e) {
                var i = b(S(t));
                e.left += i.x, e.right += i.x, e.top += i.y, e.bottom += i.y
            }
            return e
        }

        function k(t) {
            var e = [];
            return s(t) ? (e[0] = t[0], e[1] = t[1]) : "touchend" === t.type ? 1 === t.touches.length ? (e[0] = t.touches[0], e[1] = t.changedTouches[0]) : 0 === t.touches.length && (e[0] = t.changedTouches[0], e[1] = t.changedTouches[1]) : (e[0] = t.touches[0], e[1] = t.touches[1]), e
        }

        function C(t) {
            for (var e = {
                    pageX: 0,
                    pageY: 0,
                    clientX: 0,
                    clientY: 0,
                    screenX: 0,
                    screenY: 0
                }, i, r = 0; r < t.length; r++)
                for (i in e) e[i] += t[r][i];
            for (i in e) e[i] /= t.length;
            return e
        }

        function D(t) {
            if (t.length || t.touches && t.touches.length > 1) {
                var e = k(t),
                    i = Math.min(e[0].pageX, e[1].pageX),
                    r = Math.min(e[0].pageY, e[1].pageY);
                return {
                    x: i,
                    y: r,
                    left: i,
                    top: r,
                    width: Math.max(e[0].pageX, e[1].pageX) - i,
                    height: Math.max(e[0].pageY, e[1].pageY) - r
                }
            }
        }

        function E(t, e) {
            e = e || At.deltaSource;
            var i = e + "X",
                r = e + "Y",
                n = k(t),
                s = n[0][i] - n[1][i],
                a = n[0][r] - n[1][r];
            return St(s, a)
        }

        function A(t, e, i) {
            i = i || At.deltaSource;
            var r = i + "X",
                n = i + "Y",
                s = k(t),
                a = s[0][r] - s[1][r],
                o = s[0][n] - s[1][n],
                h = 180 * Math.atan(o / a) / Math.PI;
            if (l(e)) {
                var c = h - e,
                    u = c % 360;
                u > 315 ? h -= 360 + h / 360 | 0 : u > 135 ? h -= 180 + h / 360 | 0 : u < -315 ? h += 360 + h / 360 | 0 : u < -135 && (h += 180 + h / 360 | 0)
            }
            return h
        }

        function R(t, e) {
            var r = t ? t.options.origin : At.origin;
            return "parent" === r ? r = N(e) : "self" === r ? r = t.getRect(e) : u(r) && (r = F(e, r) || {
                x: 0,
                y: 0
            }), o(r) && (r = r(t && e)), i(r) && (r = O(r)), r.x = "x" in r ? r.x : r.left, r.y = "y" in r ? r.y : r.top, r
        }

        function M(t, e, i, r) {
            var n = 1 - t;
            return n * n * e + 2 * n * t * i + t * t * r
        }

        function X(t, e, i, r, n, s, a) {
            return {
                x: M(a, t, i, n),
                y: M(a, e, r, s)
            }
        }

        function z(t, e, i, r) {
            return t /= r, -i * t * (t - 2) + e
        }

        function Y(t, e) {
            for (; e;) {
                if (e === t) return !0;
                e = e.parentNode
            }
            return !1
        }

        function F(t, e) {
            for (var r = N(t); i(r);) {
                if (ft(r, e)) return r;
                r = N(r)
            }
            return null
        }

        function N(t) {
            var e = t.parentNode;
            if (n(e)) {
                for (;
                    (e = e.host) && n(e););
                return e
            }
            return e
        }

        function I(t, e) {
            return t._context === e.ownerDocument || Y(t._context, e)
        }

        function L(t, e, r) {
            var n = t.options.ignoreFrom;
            return !(!n || !i(r)) && (c(n) ? dt(r, n, e) : !!i(n) && Y(n, r))
        }

        function V(t, e, r) {
            var n = t.options.allowFrom;
            return !n || !!i(r) && (c(n) ? dt(r, n, e) : !!i(n) && Y(n, r))
        }

        function B(t, e) {
            if (!e) return !1;
            var i = e.options.drag.axis;
            return "xy" === t || "xy" === i || i === t
        }

        function j(t, e) {
            var i = t.options;
            return /^resize/.test(e) && (e = "resize"), i[e].snap && i[e].snap.enabled
        }

        function q(t, e) {
            var i = t.options;
            return /^resize/.test(e) && (e = "resize"), i[e].restrict && i[e].restrict.enabled
        }

        function H(t, e) {
            var i = t.options;
            return /^resize/.test(e) && (e = "resize"), i[e].autoScroll && i[e].autoScroll.enabled
        }

        function W(t, e, i) {
            for (var r = t.options, n = r[i.name].max, s = r[i.name].maxPerElement, a = 0, o = 0, l = 0, h = 0, c = Ct.length; h < c; h++) {
                var u = Ct[h],
                    p = u.prepared.name;
                if (u.interacting()) {
                    if (++a >= Nt) return !1;
                    if (u.target === t) {
                        if ((o += p === i.name | 0) >= n) return !1;
                        if (u.element === e && (l++, p !== i.name || l >= s)) return !1
                    }
                }
            }
            return Nt > 0
        }

        function U(t) {
            var e, i = t[0],
                r = i ? 0 : -1,
                n, s = [],
                a = [],
                o, l, h;
            for (l = 1; l < t.length; l++)
                if ((e = t[l]) && e !== i)
                    if (i) {
                        if (e.parentNode !== e.ownerDocument)
                            if (i.parentNode !== e.ownerDocument) {
                                if (!s.length)
                                    for (n = i; n.parentNode && n.parentNode !== n.ownerDocument;) s.unshift(n), n = n.parentNode;
                                if (i instanceof bt && e instanceof _t && !(e instanceof yt)) {
                                    if (e === i.parentNode) continue;
                                    n = e.ownerSVGElement
                                } else n = e;
                                for (a = []; n.parentNode !== n.ownerDocument;) a.unshift(n), n = n.parentNode;
                                for (h = 0; a[h] && a[h] === s[h];) h++;
                                var c = [a[h - 1], a[h], s[h]];
                                for (o = c[0].lastChild; o;) {
                                    if (o === c[1]) {
                                        i = e, r = l, s = [];
                                        break
                                    }
                                    if (o === c[2]) break;
                                    o = o.previousSibling
                                }
                            } else i = e, r = l
                    } else i = e, r = l;
            return r
        }

        function G() {
            if (this.target = null, this.element = null, this.dropTarget = null, this.dropElement = null, this.prevDropTarget = null, this.prevDropElement = null, this.prepared = {
                    name: null,
                    axis: null,
                    edges: null
                }, this.matches = [], this.matchElements = [], this.inertiaStatus = {
                    active: !1,
                    smoothEnd: !1,
                    ending: !1,
                    startEvent: null,
                    upCoords: {},
                    xe: 0,
                    ye: 0,
                    sx: 0,
                    sy: 0,
                    t0: 0,
                    vx0: 0,
                    vys: 0,
                    duration: 0,
                    resumeDx: 0,
                    resumeDy: 0,
                    lambda_v0: 0,
                    one_ve_v0: 0,
                    i: null
                }, o(Function.prototype.bind)) this.boundInertiaFrame = this.inertiaFrame.bind(this), this.boundSmoothEndFrame = this.smoothEndFrame.bind(this);
            else {
                var t = this;
                this.boundInertiaFrame = function() {
                    return t.inertiaFrame()
                }, this.boundSmoothEndFrame = function() {
                    return t.smoothEndFrame()
                }
            }
            this.activeDrops = {
                dropzones: [],
                elements: [],
                rects: []
            }, this.pointers = [], this.pointerIds = [], this.downTargets = [], this.downTimes = [], this.holdTimers = [], this.prevCoords = {
                page: {
                    x: 0,
                    y: 0
                },
                client: {
                    x: 0,
                    y: 0
                },
                timeStamp: 0
            }, this.curCoords = {
                page: {
                    x: 0,
                    y: 0
                },
                client: {
                    x: 0,
                    y: 0
                },
                timeStamp: 0
            }, this.startCoords = {
                page: {
                    x: 0,
                    y: 0
                },
                client: {
                    x: 0,
                    y: 0
                },
                timeStamp: 0
            }, this.pointerDelta = {
                page: {
                    x: 0,
                    y: 0,
                    vx: 0,
                    vy: 0,
                    speed: 0
                },
                client: {
                    x: 0,
                    y: 0,
                    vx: 0,
                    vy: 0,
                    speed: 0
                },
                timeStamp: 0
            }, this.downEvent = null, this.downPointer = {}, this._eventTarget = null, this._curEventTarget = null, this.prevEvent = null, this.tapTime = 0, this.prevTap = null, this.startOffset = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, this.restrictOffset = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, this.snapOffsets = [], this.gesture = {
                start: {
                    x: 0,
                    y: 0
                },
                startDistance: 0,
                prevDistance: 0,
                distance: 0,
                scale: 1,
                startAngle: 0,
                prevAngle: 0
            }, this.snapStatus = {
                x: 0,
                y: 0,
                dx: 0,
                dy: 0,
                realX: 0,
                realY: 0,
                snappedX: 0,
                snappedY: 0,
                targets: [],
                locked: !1,
                changed: !1
            }, this.restrictStatus = {
                dx: 0,
                dy: 0,
                restrictedX: 0,
                restrictedY: 0,
                snap: null,
                restricted: !1,
                changed: !1
            }, this.restrictStatus.snap = this.snapStatus, this.pointerIsDown = !1, this.pointerWasMoved = !1, this.gesturing = !1, this.dragging = !1, this.resizing = !1, this.resizeAxes = "xy", this.mouse = !1, Ct.push(this)
        }

        function Z(t, e, i) {
            var r = 0,
                n = Ct.length,
                s = /mouse/i.test(t.pointerType || e) || 4 === t.pointerType,
                a, o = w(t);
            if (/down|start/i.test(e))
                for (r = 0; r < n; r++) {
                    a = Ct[r];
                    var l = i;
                    if (a.inertiaStatus.active && a.target.options[a.prepared.name].inertia.allowResume && a.mouse === s)
                        for (; l;) {
                            if (l === a.element) return a;
                            l = N(l)
                        }
                }
            if (s || !Mt && !Xt) {
                for (r = 0; r < n; r++)
                    if (Ct[r].mouse && !Ct[r].inertiaStatus.active) return Ct[r];
                for (r = 0; r < n; r++)
                    if (Ct[r].mouse && (!/down/.test(e) || !Ct[r].inertiaStatus.active)) return a;
                return a = new G, a.mouse = !0, a
            }
            for (r = 0; r < n; r++)
                if (pt(Ct[r].pointerIds, o)) return Ct[r];
            if (/up|end|out/i.test(e)) return null;
            for (r = 0; r < n; r++)
                if (a = Ct[r], (!a.prepared.name || a.target.options.gesture.enabled) && !a.interacting() && (s || !a.mouse)) return a;
            return new G
        }

        function Q(t) {
            return function(e) {
                var i, r = T(e.path ? e.path[0] : e.target),
                    n = T(e.currentTarget),
                    s;
                if (Mt && /touch/.test(e.type))
                    for (Ft = (new Date).getTime(), s = 0; s < e.changedTouches.length; s++) {
                        var a = e.changedTouches[s];
                        i = Z(a, e.type, r), i && (i._updateEventTargets(r, n), i[t](a, e, r, n))
                    } else {
                        if (!Xt && /mouse/.test(e.type)) {
                            for (s = 0; s < Ct.length; s++)
                                if (!Ct[s].mouse && Ct[s].pointerIsDown) return;
                            if ((new Date).getTime() - Ft < 500) return
                        }
                        if (!(i = Z(e, e.type, r))) return;
                        i._updateEventTargets(r, n), i[t](e, e, r, n)
                    }
            }
        }

        function K(t, e, i, r, n, s) {
            var a, o, l = t.target,
                h = t.snapStatus,
                c = t.restrictStatus,
                u = t.pointers,
                f = (l && l.options || At).deltaSource,
                d = f + "X",
                g = f + "Y",
                m = l ? l.options : At,
                v = R(l, n),
                _ = "start" === r,
                y = "end" === r,
                x = _ ? t.startCoords : t.curCoords;
            n = n || t.element, o = p({}, x.page), a = p({}, x.client), o.x -= v.x, o.y -= v.y, a.x -= v.x, a.y -= v.y;
            var b = m[i].snap && m[i].snap.relativePoints;
            !j(l, i) || _ && b && b.length || (this.snap = {
                range: h.range,
                locked: h.locked,
                x: h.snappedX,
                y: h.snappedY,
                realX: h.realX,
                realY: h.realY,
                dx: h.dx,
                dy: h.dy
            }, h.locked && (o.x += h.dx, o.y += h.dy, a.x += h.dx, a.y += h.dy)), !q(l, i) || _ && m[i].restrict.elementRect || !c.restricted || (o.x += c.dx, o.y += c.dy, a.x += c.dx, a.y += c.dy, this.restrict = {
                dx: c.dx,
                dy: c.dy
            }), this.pageX = o.x, this.pageY = o.y, this.clientX = a.x, this.clientY = a.y, this.x0 = t.startCoords.page.x - v.x, this.y0 = t.startCoords.page.y - v.y, this.clientX0 = t.startCoords.client.x - v.x, this.clientY0 = t.startCoords.client.y - v.y, this.ctrlKey = e.ctrlKey, this.altKey = e.altKey, this.shiftKey = e.shiftKey, this.metaKey = e.metaKey, this.button = e.button, this.buttons = e.buttons, this.target = n, this.t0 = t.downTimes[0], this.type = i + (r || ""), this.interaction = t, this.interactable = l;
            var w = t.inertiaStatus;
            if (w.active && (this.detail = "inertia"), s && (this.relatedTarget = s), y ? "client" === f ? (this.dx = a.x - t.startCoords.client.x, this.dy = a.y - t.startCoords.client.y) : (this.dx = o.x - t.startCoords.page.x, this.dy = o.y - t.startCoords.page.y) : _ ? (this.dx = 0, this.dy = 0) : "inertiastart" === r ? (this.dx = t.prevEvent.dx, this.dy = t.prevEvent.dy) : "client" === f ? (this.dx = a.x - t.prevEvent.clientX, this.dy = a.y - t.prevEvent.clientY) : (this.dx = o.x - t.prevEvent.pageX, this.dy = o.y - t.prevEvent.pageY), t.prevEvent && "inertia" === t.prevEvent.detail && !w.active && m[i].inertia && m[i].inertia.zeroResumeDelta && (w.resumeDx += this.dx, w.resumeDy += this.dy, this.dx = this.dy = 0), "resize" === i && t.resizeAxes ? m.resize.square ? ("y" === t.resizeAxes ? this.dx = this.dy : this.dy = this.dx, this.axes = "xy") : (this.axes = t.resizeAxes, "x" === t.resizeAxes ? this.dy = 0 : "y" === t.resizeAxes && (this.dx = 0)) : "gesture" === i && (this.touches = [u[0], u[1]], _ ? (this.distance = E(u, f), this.box = D(u), this.scale = 1, this.ds = 0, this.angle = A(u, void 0, f), this.da = 0) : y || e instanceof K ? (this.distance = t.prevEvent.distance, this.box = t.prevEvent.box, this.scale = t.prevEvent.scale, this.ds = this.scale - 1, this.angle = t.prevEvent.angle, this.da = this.angle - t.gesture.startAngle) : (this.distance = E(u, f), this.box = D(u), this.scale = this.distance / t.gesture.startDistance, this.angle = A(u, t.gesture.prevAngle, f), this.ds = this.scale - t.gesture.prevScale, this.da = this.angle - t.gesture.prevAngle)), _) this.timeStamp = t.downTimes[0], this.dt = 0, this.duration = 0, this.speed = 0, this.velocityX = 0, this.velocityY = 0;
            else if ("inertiastart" === r) this.timeStamp = t.prevEvent.timeStamp, this.dt = t.prevEvent.dt, this.duration = t.prevEvent.duration, this.speed = t.prevEvent.speed, this.velocityX = t.prevEvent.velocityX, this.velocityY = t.prevEvent.velocityY;
            else if (this.timeStamp = (new Date).getTime(), this.dt = this.timeStamp - t.prevEvent.timeStamp, this.duration = this.timeStamp - t.downTimes[0], e instanceof K) {
                var T = this[d] - t.prevEvent[d],
                    S = this[g] - t.prevEvent[g],
                    P = this.dt / 1e3;
                this.speed = St(T, S) / P, this.velocityX = T / P, this.velocityY = S / P
            } else this.speed = t.pointerDelta[f].speed, this.velocityX = t.pointerDelta[f].vx, this.velocityY = t.pointerDelta[f].vy;
            if ((y || "inertiastart" === r) && t.prevEvent.speed > 600 && this.timeStamp - t.prevEvent.timeStamp < 150) {
                var O = 180 * Math.atan2(t.prevEvent.velocityY, t.prevEvent.velocityX) / Math.PI,
                    k = 22.5;
                O < 0 && (O += 360);
                var C = 112.5 <= O && O < 247.5,
                    M = 202.5 <= O && O < 337.5,
                    X = !C && (292.5 <= O || O < 67.5),
                    z = !M && 22.5 <= O && O < 157.5;
                this.swipe = {
                    up: M,
                    down: z,
                    left: C,
                    right: X,
                    angle: O,
                    speed: t.prevEvent.speed,
                    velocity: {
                        x: t.prevEvent.velocityX,
                        y: t.prevEvent.velocityY
                    }
                }
            }
        }

        function J() {
            this.originalEvent.preventDefault()
        }

        function tt(t) {
            var e = "";
            if ("drag" === t.name && (e = It.drag), "resize" === t.name)
                if (t.axis) e = It[t.name + t.axis];
                else if (t.edges) {
                for (var i = "resize", r = ["top", "bottom", "left", "right"], n = 0; n < 4; n++) t.edges[r[n]] && (i += r[n]);
                e = It[i]
            }
            return e
        }

        function et(t, e, r, n, s, a, o) {
            if (!e) return !1;
            if (!0 === e) {
                var h = l(a.width) ? a.width : a.right - a.left,
                    c = l(a.height) ? a.height : a.bottom - a.top;
                if (h < 0 && ("left" === t ? t = "right" : "right" === t && (t = "left")), c < 0 && ("top" === t ? t = "bottom" : "bottom" === t && (t = "top")), "left" === t) return r.x < (h >= 0 ? a.left : a.right) + o;
                if ("top" === t) return r.y < (c >= 0 ? a.top : a.bottom) + o;
                if ("right" === t) return r.x > (h >= 0 ? a.right : a.left) - o;
                if ("bottom" === t) return r.y > (c >= 0 ? a.bottom : a.top) - o
            }
            return !!i(n) && (i(e) ? e === n : dt(n, e, s))
        }

        function it(t, e, i) {
            var r = this.getRect(i),
                n = !1,
                s = null,
                o = null,
                l, h = p({}, e.curCoords.page),
                c = this.options;
            if (!r) return null;
            if (Lt.resize && c.resize.enabled) {
                var u = c.resize;
                if (l = {
                        left: !1,
                        right: !1,
                        top: !1,
                        bottom: !1
                    }, a(u.edges)) {
                    for (var f in l) l[f] = et(f, u.edges[f], h, e._eventTarget, i, r, u.margin || zt);
                    l.left = l.left && !l.right, l.top = l.top && !l.bottom, n = l.left || l.right || l.top || l.bottom
                } else {
                    var d = "y" !== c.resize.axis && h.x > r.right - zt,
                        g = "x" !== c.resize.axis && h.y > r.bottom - zt;
                    n = d || g, o = (d ? "x" : "") + (g ? "y" : "")
                }
            }
            return s = n ? "resize" : Lt.drag && c.drag.enabled ? "drag" : null, Lt.gesture && e.pointerIds.length >= 2 && !e.dragging && !e.resizing && (s = "gesture"), s ? {
                name: s,
                axis: o,
                edges: l
            } : null
        }

        function rt(t, e) {
            if (!a(t)) return null;
            var i = t.name,
                r = e.options;
            return ("resize" === i && r.resize.enabled || "drag" === i && r.drag.enabled || "gesture" === i && r.gesture.enabled) && Lt[i] ? ("resize" !== i && "resizeyx" !== i || (i = "resizexy"), t) : null
        }

        function nt(t, e) {
            var r = {},
                n = Et[t.type],
                s = T(t.path ? t.path[0] : t.target),
                a = s;
            e = !!e;
            for (var o in t) r[o] = t[o];
            for (r.originalEvent = t, r.preventDefault = J; i(a);) {
                for (var l = 0; l < n.selectors.length; l++) {
                    var h = n.selectors[l],
                        c = n.contexts[l];
                    if (ft(a, h) && Y(c, s) && Y(c, a)) {
                        var u = n.listeners[l];
                        r.currentTarget = a;
                        for (var p = 0; p < u.length; p++) u[p][1] === e && u[p][0](r)
                    }
                }
                a = N(a)
            }
        }

        function st(t) {
            return nt.call(this, t, !0)
        }

        function at(t, e) {
            return kt.get(t, e) || new ot(t, e)
        }

        function ot(t, e) {
            this._element = t, this._iEvents = this._iEvents || {};
            var r;
            if (u(t)) {
                this.selector = t;
                var n = e && e.context;
                r = n ? S(n) : gt, n && (r.Node ? n instanceof r.Node : i(n) || n === r.document) && (this._context = n)
            } else r = S(t), i(t, r) && (Xt ? ($t.add(this._element, Tt.down, Kt.pointerDown), $t.add(this._element, Tt.move, Kt.pointerHover)) : ($t.add(this._element, "mousedown", Kt.pointerDown), $t.add(this._element, "mousemove", Kt.pointerHover), $t.add(this._element, "touchstart", Kt.pointerDown), $t.add(this._element, "touchmove", Kt.pointerHover)));
            this._doc = r.document, pt(Ot, this._doc) || ct(this._doc), kt.push(this), this.set(e)
        }

        function lt(t, e) {
            var i = !1;
            return function() {
                return i || (gt.console.warn(e), i = !0), t.apply(this, arguments)
            }
        }

        function ht(t) {
            for (var e = 0; e < Ct.length; e++) Ct[e].pointerEnd(t, t)
        }

        function ct(t) {
            if (!pt(Ot, t)) {
                var e = t.defaultView || t.parentWindow;
                for (var i in Et) $t.add(t, i, nt), $t.add(t, i, st, !0);
                Xt ? (Tt = wt === e.MSPointerEvent ? {
                    up: "MSPointerUp",
                    down: "MSPointerDown",
                    over: "mouseover",
                    out: "mouseout",
                    move: "MSPointerMove",
                    cancel: "MSPointerCancel"
                } : {
                    up: "pointerup",
                    down: "pointerdown",
                    over: "pointerover",
                    out: "pointerout",
                    move: "pointermove",
                    cancel: "pointercancel"
                }, $t.add(t, Tt.down, Kt.selectorDown), $t.add(t, Tt.move, Kt.pointerMove), $t.add(t, Tt.over, Kt.pointerOver), $t.add(t, Tt.out, Kt.pointerOut), $t.add(t, Tt.up, Kt.pointerUp), $t.add(t, Tt.cancel, Kt.pointerCancel), $t.add(t, Tt.move, Kt.autoScrollMove)) : ($t.add(t, "mousedown", Kt.selectorDown), $t.add(t, "mousemove", Kt.pointerMove), $t.add(t, "mouseup", Kt.pointerUp), $t.add(t, "mouseover", Kt.pointerOver), $t.add(t, "mouseout", Kt.pointerOut), $t.add(t, "touchstart", Kt.selectorDown), $t.add(t, "touchmove", Kt.pointerMove), $t.add(t, "touchend", Kt.pointerUp), $t.add(t, "touchcancel", Kt.pointerCancel), $t.add(t, "mousemove", Kt.autoScrollMove), $t.add(t, "touchmove", Kt.autoScrollMove)), $t.add(e, "blur", ht);
                try {
                    if (e.frameElement) {
                        var r = e.frameElement.ownerDocument,
                            n = r.defaultView;
                        $t.add(r, "mouseup", Kt.pointerEnd), $t.add(r, "touchend", Kt.pointerEnd), $t.add(r, "touchcancel", Kt.pointerEnd), $t.add(r, "pointerup", Kt.pointerEnd), $t.add(r, "MSPointerUp", Kt.pointerEnd), $t.add(n, "blur", ht)
                    }
                } catch (t) {
                    at.windowParentError = t
                }
                $t.add(t, "dragstart", function(t) {
                    for (var e = 0; e < Ct.length; e++) {
                        var i = Ct[e];
                        if (i.element && (i.element === t.target || Y(i.element, t.target))) return void i.checkAndPreventDefault(t, i.target, i.element)
                    }
                }), $t.useAttachEvent && ($t.add(t, "selectstart", function(t) {
                    var e = Ct[0];
                    e.currentAction() && e.checkAndPreventDefault(t)
                }), $t.add(t, "dblclick", Q("ie8Dblclick"))), Ot.push(t)
            }
        }

        function ut(t, e) {
            for (var i = 0, r = t.length; i < r; i++)
                if (t[i] === e) return i;
            return -1
        }

        function pt(t, e) {
            return -1 !== ut(t, e)
        }

        function ft(e, i, r) {
            return Ut ? Ut(e, i, r) : (gt !== t && (i = i.replace(/\/deep\//g, " ")), e[Wt](i))
        }

        function dt(t, e, r) {
            for (; i(t);) {
                if (ft(t, e)) return !0;
                if ((t = N(t)) === r) return ft(t, e)
            }
            return !1
        }
        if (t) {
            var gt = function() {
                    var e = t.document.createTextNode("");
                    return e.ownerDocument !== t.document && "function" == typeof t.wrap && t.wrap(e) === e ? t.wrap(t) : t
                }(),
                mt = gt.document,
                vt = gt.DocumentFragment || e,
                _t = gt.SVGElement || e,
                yt = gt.SVGSVGElement || e,
                xt = gt.SVGElementInstance || e,
                bt = gt.HTMLElement || gt.Element,
                wt = gt.PointerEvent || gt.MSPointerEvent,
                Tt, St = Math.hypot || function(t, e) {
                    return Math.sqrt(t * t + e * e)
                },
                Pt = {},
                Ot = [],
                kt = [],
                Ct = [],
                Dt = !1,
                Et = {},
                At = {
                    base: {
                        accept: null,
                        actionChecker: null,
                        styleCursor: !0,
                        preventDefault: "auto",
                        origin: {
                            x: 0,
                            y: 0
                        },
                        deltaSource: "page",
                        allowFrom: null,
                        ignoreFrom: null,
                        _context: mt,
                        dropChecker: null
                    },
                    drag: {
                        enabled: !1,
                        manualStart: !0,
                        max: 1 / 0,
                        maxPerElement: 1,
                        snap: null,
                        restrict: null,
                        inertia: null,
                        autoScroll: null,
                        axis: "xy"
                    },
                    drop: {
                        enabled: !1,
                        accept: null,
                        overlap: "pointer"
                    },
                    resize: {
                        enabled: !1,
                        manualStart: !1,
                        max: 1 / 0,
                        maxPerElement: 1,
                        snap: null,
                        restrict: null,
                        inertia: null,
                        autoScroll: null,
                        square: !1,
                        preserveAspectRatio: !1,
                        axis: "xy",
                        margin: NaN,
                        edges: null,
                        invert: "none"
                    },
                    gesture: {
                        manualStart: !1,
                        enabled: !1,
                        max: 1 / 0,
                        maxPerElement: 1,
                        restrict: null
                    },
                    perAction: {
                        manualStart: !1,
                        max: 1 / 0,
                        maxPerElement: 1,
                        snap: {
                            enabled: !1,
                            endOnly: !1,
                            range: 1 / 0,
                            targets: null,
                            offsets: null,
                            relativePoints: null
                        },
                        restrict: {
                            enabled: !1,
                            endOnly: !1
                        },
                        autoScroll: {
                            enabled: !1,
                            container: null,
                            margin: 60,
                            speed: 300
                        },
                        inertia: {
                            enabled: !1,
                            resistance: 10,
                            minSpeed: 100,
                            endSpeed: 10,
                            allowResume: !0,
                            zeroResumeDelta: !0,
                            smoothEndDuration: 300
                        }
                    },
                    _holdDuration: 600
                },
                Rt = {
                    interaction: null,
                    i: null,
                    x: 0,
                    y: 0,
                    scroll: function() {
                        var t = Rt.interaction.target.options[Rt.interaction.prepared.name].autoScroll,
                            e = t.container || S(Rt.interaction.element),
                            i = (new Date).getTime(),
                            n = (i - Rt.prevTimeX) / 1e3,
                            s = (i - Rt.prevTimeY) / 1e3,
                            a, o, l, h;
                        t.velocity ? (a = t.velocity.x, o = t.velocity.y) : a = o = t.speed, l = a * n, h = o * s, (l >= 1 || h >= 1) && (r(e) ? e.scrollBy(Rt.x * l, Rt.y * h) : e && (e.scrollLeft += Rt.x * l, e.scrollTop += Rt.y * h), l >= 1 && (Rt.prevTimeX = i), h >= 1 && (Rt.prevTimeY = i)), Rt.isScrolling && (Zt(Rt.i), Rt.i = Gt(Rt.scroll))
                    },
                    isScrolling: !1,
                    prevTimeX: 0,
                    prevTimeY: 0,
                    start: function(t) {
                        Rt.isScrolling = !0, Zt(Rt.i), Rt.interaction = t, Rt.prevTimeX = (new Date).getTime(), Rt.prevTimeY = (new Date).getTime(), Rt.i = Gt(Rt.scroll)
                    },
                    stop: function() {
                        Rt.isScrolling = !1, Zt(Rt.i)
                    }
                },
                Mt = "ontouchstart" in gt || gt.DocumentTouch && mt instanceof gt.DocumentTouch,
                Xt = wt && !/Chrome/.test(navigator.userAgent),
                zt = Mt || Xt ? 20 : 10,
                Yt = 1,
                Ft = 0,
                Nt = 1 / 0,
                It = mt.all && !gt.atob ? {
                    drag: "move",
                    resizex: "e-resize",
                    resizey: "s-resize",
                    resizexy: "se-resize",
                    resizetop: "n-resize",
                    resizeleft: "w-resize",
                    resizebottom: "s-resize",
                    resizeright: "e-resize",
                    resizetopleft: "se-resize",
                    resizebottomright: "se-resize",
                    resizetopright: "ne-resize",
                    resizebottomleft: "ne-resize",
                    gesture: ""
                } : {
                    drag: "move",
                    resizex: "ew-resize",
                    resizey: "ns-resize",
                    resizexy: "nwse-resize",
                    resizetop: "ns-resize",
                    resizeleft: "ew-resize",
                    resizebottom: "ns-resize",
                    resizeright: "ew-resize",
                    resizetopleft: "nwse-resize",
                    resizebottomright: "nwse-resize",
                    resizetopright: "nesw-resize",
                    resizebottomleft: "nesw-resize",
                    gesture: ""
                },
                Lt = {
                    drag: !0,
                    resize: !0,
                    gesture: !0
                },
                Vt = "onmousewheel" in mt ? "mousewheel" : "wheel",
                Bt = ["dragstart", "dragmove", "draginertiastart", "dragend", "dragenter", "dragleave", "dropactivate", "dropdeactivate", "dropmove", "drop", "resizestart", "resizemove", "resizeinertiastart", "resizeend", "gesturestart", "gesturemove", "gestureinertiastart", "gestureend", "down", "move", "up", "cancel", "tap", "doubletap", "hold"],
                jt = {},
                qt = "Opera" == navigator.appName && Mt && navigator.userAgent.match("Presto"),
                Ht = /iP(hone|od|ad)/.test(navigator.platform) && /OS 7[^\d]/.test(navigator.appVersion),
                Wt = "matches" in Element.prototype ? "matches" : "webkitMatchesSelector" in Element.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in Element.prototype ? "mozMatchesSelector" : "oMatchesSelector" in Element.prototype ? "oMatchesSelector" : "msMatchesSelector",
                Ut, Gt = t.requestAnimationFrame,
                Zt = t.cancelAnimationFrame,
                $t = function() {
                    function t(t, e, o, p) {
                        var f = ut(h, t),
                            d = c[f];
                        if (d || (d = {
                                events: {},
                                typeCount: 0
                            }, f = h.push(t) - 1, c.push(d), u.push(s ? {
                                supplied: [],
                                wrapped: [],
                                useCount: []
                            } : null)), d.events[e] || (d.events[e] = [], d.typeCount++), !pt(d.events[e], o)) {
                            var g;
                            if (s) {
                                var m = u[f],
                                    v = ut(m.supplied, o),
                                    _ = m.wrapped[v] || function(e) {
                                        e.immediatePropagationStopped || (e.target = e.srcElement, e.currentTarget = t, e.preventDefault = e.preventDefault || i, e.stopPropagation = e.stopPropagation || r, e.stopImmediatePropagation = e.stopImmediatePropagation || n, /mouse|click/.test(e.type) && (e.pageX = e.clientX + S(t).document.documentElement.scrollLeft, e.pageY = e.clientY + S(t).document.documentElement.scrollTop), o(e))
                                    };
                                g = t[a](l + e, _, Boolean(p)), -1 === v ? (m.supplied.push(o), m.wrapped.push(_), m.useCount.push(1)) : m.useCount[v]++
                            } else g = t[a](e, o, p || !1);
                            return d.events[e].push(o), g
                        }
                    }

                    function e(t, i, r, n) {
                        var a, p = ut(h, t),
                            f = c[p],
                            d, g, m = r;
                        if (f && f.events)
                            if (s && (d = u[p], g = ut(d.supplied, r), m = d.wrapped[g]), "all" !== i) {
                                if (f.events[i]) {
                                    var v = f.events[i].length;
                                    if ("all" === r) {
                                        for (a = 0; a < v; a++) e(t, i, f.events[i][a], Boolean(n));
                                        return
                                    }
                                    for (a = 0; a < v; a++)
                                        if (f.events[i][a] === r) {
                                            t[o](l + i, m, n || !1), f.events[i].splice(a, 1), s && d && 0 === --d.useCount[g] && (d.supplied.splice(g, 1), d.wrapped.splice(g, 1), d.useCount.splice(g, 1));
                                            break
                                        }
                                    f.events[i] && 0 === f.events[i].length && (f.events[i] = null, f.typeCount--)
                                }
                                f.typeCount || (c.splice(p, 1), h.splice(p, 1), u.splice(p, 1))
                            } else
                                for (i in f.events) f.events.hasOwnProperty(i) && e(t, i, "all")
                    }

                    function i() {
                        this.returnValue = !1
                    }

                    function r() {
                        this.cancelBubble = !0
                    }

                    function n() {
                        this.cancelBubble = !0, this.immediatePropagationStopped = !0
                    }
                    var s = "attachEvent" in gt && !("addEventListener" in gt),
                        a = s ? "attachEvent" : "addEventListener",
                        o = s ? "detachEvent" : "removeEventListener",
                        l = s ? "on" : "",
                        h = [],
                        c = [],
                        u = [];
                    return {
                        add: t,
                        remove: e,
                        useAttachEvent: s,
                        _elements: h,
                        _targets: c,
                        _attachedListeners: u
                    }
                }(),
                Qt = {
                    webkit: /(Movement[XY]|Radius[XY]|RotationAngle|Force)$/
                };
            G.prototype = {
                getPageXY: function(t, e) {
                    return y(t, e, this)
                },
                getClientXY: function(t, e) {
                    return x(t, e, this)
                },
                setEventXY: function(t, e) {
                    return g(t, e, this)
                },
                pointerOver: function(t, e, i) {
                    function r(t, e) {
                        t && I(t, i) && !L(t, i, i) && V(t, i, i) && ft(i, e) && (n.push(t), s.push(i))
                    }
                    if (!this.prepared.name && this.mouse) {
                        var n = [],
                            s = [],
                            a = this.element;
                        this.addPointer(t), !this.target || !L(this.target, this.element, i) && V(this.target, this.element, i) || (this.target = null, this.element = null, this.matches = [], this.matchElements = []);
                        var o = kt.get(i),
                            l = o && !L(o, i, i) && V(o, i, i) && rt(o.getAction(t, e, this, i), o);
                        l && !W(o, i, l) && (l = null), l ? (this.target = o, this.element = i, this.matches = [], this.matchElements = []) : (kt.forEachSelector(r), this.validateSelector(t, e, n, s) ? (this.matches = n, this.matchElements = s, this.pointerHover(t, e, this.matches, this.matchElements), $t.add(i, Xt ? Tt.move : "mousemove", Kt.pointerHover)) : this.target && (Y(a, i) ? (this.pointerHover(t, e, this.matches, this.matchElements), $t.add(this.element, Xt ? Tt.move : "mousemove", Kt.pointerHover)) : (this.target = null, this.element = null, this.matches = [], this.matchElements = [])))
                    }
                },
                pointerHover: function(t, e, i, r, n, s) {
                    var a = this.target;
                    if (!this.prepared.name && this.mouse) {
                        var o;
                        this.setEventXY(this.curCoords, [t]), n ? o = this.validateSelector(t, e, n, s) : a && (o = rt(a.getAction(this.pointers[0], e, this, this.element), this.target)), a && a.options.styleCursor && (a._doc.documentElement.style.cursor = o ? tt(o) : "")
                    } else this.prepared.name && this.checkAndPreventDefault(e, a, this.element)
                },
                pointerOut: function(t, e, i) {
                    this.prepared.name || (kt.get(i) || $t.remove(i, Xt ? Tt.move : "mousemove", Kt.pointerHover), this.target && this.target.options.styleCursor && !this.interacting() && (this.target._doc.documentElement.style.cursor = ""))
                },
                selectorDown: function(t, e, r, n) {
                    function s(t, e, i) {
                        var n = Ut ? i.querySelectorAll(e) : void 0;
                        I(t, l) && !L(t, l, r) && V(t, l, r) && ft(l, e, n) && (a.matches.push(t), a.matchElements.push(l))
                    }
                    var a = this,
                        o = $t.useAttachEvent ? p({}, e) : e,
                        l = r,
                        h = this.addPointer(t),
                        c;
                    if (this.holdTimers[h] = setTimeout(function() {
                            a.pointerHold($t.useAttachEvent ? o : t, o, r, n)
                        }, At._holdDuration), this.pointerIsDown = !0, this.inertiaStatus.active && this.target.selector)
                        for (; i(l);) {
                            if (l === this.element && rt(this.target.getAction(t, e, this, this.element), this.target).name === this.prepared.name) return Zt(this.inertiaStatus.i), this.inertiaStatus.active = !1, void this.collectEventTargets(t, e, r, "down");
                            l = N(l)
                        }
                    if (this.interacting()) return void this.collectEventTargets(t, e, r, "down");
                    for (this.setEventXY(this.curCoords, [t]), this.downEvent = e; i(l) && !c;) this.matches = [], this.matchElements = [], kt.forEachSelector(s), c = this.validateSelector(t, e, this.matches, this.matchElements), l = N(l);
                    if (c) return this.prepared.name = c.name, this.prepared.axis = c.axis, this.prepared.edges = c.edges, this.collectEventTargets(t, e, r, "down"), this.pointerDown(t, e, r, n, c);
                    this.downTimes[h] = (new Date).getTime(), this.downTargets[h] = r, f(this.downPointer, t), d(this.prevCoords, this.curCoords), this.pointerWasMoved = !1, this.collectEventTargets(t, e, r, "down")
                },
                pointerDown: function(t, e, i, r, n) {
                    if (!n && !this.inertiaStatus.active && this.pointerWasMoved && this.prepared.name) return void this.checkAndPreventDefault(e, this.target, this.element);
                    this.pointerIsDown = !0, this.downEvent = e;
                    var s = this.addPointer(t),
                        a;
                    if (this.pointerIds.length > 1 && this.target._element === this.element) {
                        var o = rt(n || this.target.getAction(t, e, this, this.element), this.target);
                        W(this.target, this.element, o) && (a = o), this.prepared.name = null
                    } else if (!this.prepared.name) {
                        var l = kt.get(r);
                        l && !L(l, r, i) && V(l, r, i) && (a = rt(n || l.getAction(t, e, this, r), l, i)) && W(l, r, a) && (this.target = l, this.element = r)
                    }
                    var h = this.target,
                        c = h && h.options;
                    if (!h || !n && this.prepared.name) this.inertiaStatus.active && r === this.element && rt(h.getAction(t, e, this, this.element), h).name === this.prepared.name && (Zt(this.inertiaStatus.i), this.inertiaStatus.active = !1, this.checkAndPreventDefault(e, h, this.element));
                    else {
                        if (a = a || rt(n || h.getAction(t, e, this, r), h, this.element), this.setEventXY(this.startCoords, this.pointers), !a) return;
                        c.styleCursor && (h._doc.documentElement.style.cursor = tt(a)), this.resizeAxes = "resize" === a.name ? a.axis : null, "gesture" === a && this.pointerIds.length < 2 && (a = null), this.prepared.name = a.name, this.prepared.axis = a.axis, this.prepared.edges = a.edges, this.snapStatus.snappedX = this.snapStatus.snappedY = this.restrictStatus.restrictedX = this.restrictStatus.restrictedY = NaN, this.downTimes[s] = (new Date).getTime(), this.downTargets[s] = i, f(this.downPointer, t),
                            d(this.prevCoords, this.startCoords), this.pointerWasMoved = !1, this.checkAndPreventDefault(e, h, this.element)
                    }
                },
                setModifications: function(t, e) {
                    var i = this.target,
                        r = !0,
                        n = j(i, this.prepared.name) && (!i.options[this.prepared.name].snap.endOnly || e),
                        s = q(i, this.prepared.name) && (!i.options[this.prepared.name].restrict.endOnly || e);
                    return n ? this.setSnapping(t) : this.snapStatus.locked = !1, s ? this.setRestriction(t) : this.restrictStatus.restricted = !1, n && this.snapStatus.locked && !this.snapStatus.changed ? r = s && this.restrictStatus.restricted && this.restrictStatus.changed : s && this.restrictStatus.restricted && !this.restrictStatus.changed && (r = !1), r
                },
                setStartOffsets: function(t, e, i) {
                    var r = e.getRect(i),
                        n = R(e, i),
                        s = e.options[this.prepared.name].snap,
                        a = e.options[this.prepared.name].restrict,
                        o, l;
                    r ? (this.startOffset.left = this.startCoords.page.x - r.left, this.startOffset.top = this.startCoords.page.y - r.top, this.startOffset.right = r.right - this.startCoords.page.x, this.startOffset.bottom = r.bottom - this.startCoords.page.y, o = "width" in r ? r.width : r.right - r.left, l = "height" in r ? r.height : r.bottom - r.top) : this.startOffset.left = this.startOffset.top = this.startOffset.right = this.startOffset.bottom = 0, this.snapOffsets.splice(0);
                    var h = s && "startCoords" === s.offset ? {
                        x: this.startCoords.page.x - n.x,
                        y: this.startCoords.page.y - n.y
                    } : s && s.offset || {
                        x: 0,
                        y: 0
                    };
                    if (r && s && s.relativePoints && s.relativePoints.length)
                        for (var c = 0; c < s.relativePoints.length; c++) this.snapOffsets.push({
                            x: this.startOffset.left - o * s.relativePoints[c].x + h.x,
                            y: this.startOffset.top - l * s.relativePoints[c].y + h.y
                        });
                    else this.snapOffsets.push(h);
                    r && a.elementRect ? (this.restrictOffset.left = this.startOffset.left - o * a.elementRect.left, this.restrictOffset.top = this.startOffset.top - l * a.elementRect.top, this.restrictOffset.right = this.startOffset.right - o * (1 - a.elementRect.right), this.restrictOffset.bottom = this.startOffset.bottom - l * (1 - a.elementRect.bottom)) : this.restrictOffset.left = this.restrictOffset.top = this.restrictOffset.right = this.restrictOffset.bottom = 0
                },
                start: function(t, e, i) {
                    this.interacting() || !this.pointerIsDown || this.pointerIds.length < ("gesture" === t.name ? 2 : 1) || (-1 === ut(Ct, this) && Ct.push(this), this.prepared.name || this.setEventXY(this.startCoords, this.pointers), this.prepared.name = t.name, this.prepared.axis = t.axis, this.prepared.edges = t.edges, this.target = e, this.element = i, this.setStartOffsets(t.name, e, i), this.setModifications(this.startCoords.page), this.prevEvent = this[this.prepared.name + "Start"](this.downEvent))
                },
                pointerMove: function(t, e, r, n, s) {
                    if (this.inertiaStatus.active) {
                        var a = this.inertiaStatus.upCoords.page,
                            o = this.inertiaStatus.upCoords.client,
                            l = {
                                pageX: a.x + this.inertiaStatus.sx,
                                pageY: a.y + this.inertiaStatus.sy,
                                clientX: o.x + this.inertiaStatus.sx,
                                clientY: o.y + this.inertiaStatus.sy
                            };
                        this.setEventXY(this.curCoords, [l])
                    } else this.recordPointer(t), this.setEventXY(this.curCoords, this.pointers);
                    var h = this.curCoords.page.x === this.prevCoords.page.x && this.curCoords.page.y === this.prevCoords.page.y && this.curCoords.client.x === this.prevCoords.client.x && this.curCoords.client.y === this.prevCoords.client.y,
                        c, u, p = this.mouse ? 0 : ut(this.pointerIds, w(t));
                    if (this.pointerIsDown && !this.pointerWasMoved && (c = this.curCoords.client.x - this.startCoords.client.x, u = this.curCoords.client.y - this.startCoords.client.y, this.pointerWasMoved = St(c, u) > Yt), h || this.pointerIsDown && !this.pointerWasMoved || (this.pointerIsDown && clearTimeout(this.holdTimers[p]), this.collectEventTargets(t, e, r, "move")), this.pointerIsDown) {
                        if (h && this.pointerWasMoved && !s) return void this.checkAndPreventDefault(e, this.target, this.element);
                        if (m(this.pointerDelta, this.prevCoords, this.curCoords), this.prepared.name) {
                            if (this.pointerWasMoved && (!this.inertiaStatus.active || t instanceof K && /inertiastart/.test(t.type))) {
                                if (!this.interacting() && (m(this.pointerDelta, this.prevCoords, this.curCoords), "drag" === this.prepared.name)) {
                                    var f = Math.abs(c),
                                        g = Math.abs(u),
                                        v = this.target.options.drag.axis,
                                        _ = f > g ? "x" : f < g ? "y" : "xy";
                                    if ("xy" !== _ && "xy" !== v && v !== _) {
                                        this.prepared.name = null;
                                        for (var y = r; i(y);) {
                                            var x = kt.get(y);
                                            if (x && x !== this.target && !x.options.drag.manualStart && "drag" === x.getAction(this.downPointer, this.downEvent, this, y).name && B(_, x)) {
                                                this.prepared.name = "drag", this.target = x, this.element = y;
                                                break
                                            }
                                            y = N(y)
                                        }
                                        if (!this.prepared.name) {
                                            var b = this,
                                                T = function(t, e, i) {
                                                    var n = Ut ? i.querySelectorAll(e) : void 0;
                                                    if (t !== b.target) return I(t, r) && !t.options.drag.manualStart && !L(t, y, r) && V(t, y, r) && ft(y, e, n) && "drag" === t.getAction(b.downPointer, b.downEvent, b, y).name && B(_, t) && W(t, y, "drag") ? t : void 0
                                                };
                                            for (y = r; i(y);) {
                                                var S = kt.forEachSelector(T);
                                                if (S) {
                                                    this.prepared.name = "drag", this.target = S, this.element = y;
                                                    break
                                                }
                                                y = N(y)
                                            }
                                        }
                                    }
                                }
                                var P = !!this.prepared.name && !this.interacting();
                                if (P && (this.target.options[this.prepared.name].manualStart || !W(this.target, this.element, this.prepared))) return void this.stop(e);
                                if (this.prepared.name && this.target) {
                                    P && this.start(this.prepared, this.target, this.element);
                                    (this.setModifications(this.curCoords.page, s) || P) && (this.prevEvent = this[this.prepared.name + "Move"](e)), this.checkAndPreventDefault(e, this.target, this.element)
                                }
                            }
                            d(this.prevCoords, this.curCoords), (this.dragging || this.resizing) && this.autoScrollMove(t)
                        }
                    }
                },
                dragStart: function(t) {
                    var e = new K(this, t, "drag", "start", this.element);
                    this.dragging = !0, this.target.fire(e), this.activeDrops.dropzones = [], this.activeDrops.elements = [], this.activeDrops.rects = [], this.dynamicDrop || this.setActiveDrops(this.element);
                    var i = this.getDropEvents(t, e);
                    return i.activate && this.fireActiveDrops(i.activate), e
                },
                dragMove: function(t) {
                    var e = this.target,
                        i = new K(this, t, "drag", "move", this.element),
                        r = this.element,
                        n = this.getDrop(i, t, r);
                    this.dropTarget = n.dropzone, this.dropElement = n.element;
                    var s = this.getDropEvents(t, i);
                    return e.fire(i), s.leave && this.prevDropTarget.fire(s.leave), s.enter && this.dropTarget.fire(s.enter), s.move && this.dropTarget.fire(s.move), this.prevDropTarget = this.dropTarget, this.prevDropElement = this.dropElement, i
                },
                resizeStart: function(t) {
                    var e = new K(this, t, "resize", "start", this.element);
                    if (this.prepared.edges) {
                        var i = this.target.getRect(this.element);
                        if (this.target.options.resize.square || this.target.options.resize.preserveAspectRatio) {
                            var r = p({}, this.prepared.edges);
                            r.top = r.top || r.left && !r.bottom, r.left = r.left || r.top && !r.right, r.bottom = r.bottom || r.right && !r.top, r.right = r.right || r.bottom && !r.left, this.prepared._linkedEdges = r
                        } else this.prepared._linkedEdges = null;
                        this.target.options.resize.preserveAspectRatio && (this.resizeStartAspectRatio = i.width / i.height), this.resizeRects = {
                            start: i,
                            current: p({}, i),
                            restricted: p({}, i),
                            previous: p({}, i),
                            delta: {
                                left: 0,
                                right: 0,
                                width: 0,
                                top: 0,
                                bottom: 0,
                                height: 0
                            }
                        }, e.rect = this.resizeRects.restricted, e.deltaRect = this.resizeRects.delta
                    }
                    return this.target.fire(e), this.resizing = !0, e
                },
                resizeMove: function(t) {
                    var e = new K(this, t, "resize", "move", this.element),
                        i = this.prepared.edges,
                        r = this.target.options.resize.invert,
                        n = "reposition" === r || "negate" === r;
                    if (i) {
                        var s = e.dx,
                            a = e.dy,
                            o = this.resizeRects.start,
                            l = this.resizeRects.current,
                            h = this.resizeRects.restricted,
                            c = this.resizeRects.delta,
                            u = p(this.resizeRects.previous, h),
                            f = i;
                        if (this.target.options.resize.preserveAspectRatio) {
                            var d = this.resizeStartAspectRatio;
                            i = this.prepared._linkedEdges, f.left && f.bottom || f.right && f.top ? a = -s / d : f.left || f.right ? a = s / d : (f.top || f.bottom) && (s = a * d)
                        } else this.target.options.resize.square && (i = this.prepared._linkedEdges, f.left && f.bottom || f.right && f.top ? a = -s : f.left || f.right ? a = s : (f.top || f.bottom) && (s = a));
                        if (i.top && (l.top += a), i.bottom && (l.bottom += a), i.left && (l.left += s), i.right && (l.right += s), n) {
                            if (p(h, l), "reposition" === r) {
                                var g;
                                h.top > h.bottom && (g = h.top, h.top = h.bottom, h.bottom = g), h.left > h.right && (g = h.left, h.left = h.right, h.right = g)
                            }
                        } else h.top = Math.min(l.top, o.bottom), h.bottom = Math.max(l.bottom, o.top), h.left = Math.min(l.left, o.right), h.right = Math.max(l.right, o.left);
                        h.width = h.right - h.left, h.height = h.bottom - h.top;
                        for (var m in h) c[m] = h[m] - u[m];
                        e.edges = this.prepared.edges, e.rect = h, e.deltaRect = c
                    }
                    return this.target.fire(e), e
                },
                gestureStart: function(t) {
                    var e = new K(this, t, "gesture", "start", this.element);
                    return e.ds = 0, this.gesture.startDistance = this.gesture.prevDistance = e.distance, this.gesture.startAngle = this.gesture.prevAngle = e.angle, this.gesture.scale = 1, this.gesturing = !0, this.target.fire(e), e
                },
                gestureMove: function(t) {
                    if (!this.pointerIds.length) return this.prevEvent;
                    var e;
                    return e = new K(this, t, "gesture", "move", this.element), e.ds = e.scale - this.gesture.scale, this.target.fire(e), this.gesture.prevAngle = e.angle, this.gesture.prevDistance = e.distance, e.scale === 1 / 0 || null === e.scale || void 0 === e.scale || isNaN(e.scale) || (this.gesture.scale = e.scale), e
                },
                pointerHold: function(t, e, i) {
                    this.collectEventTargets(t, e, i, "hold")
                },
                pointerUp: function(t, e, i, r) {
                    var n = this.mouse ? 0 : ut(this.pointerIds, w(t));
                    clearTimeout(this.holdTimers[n]), this.collectEventTargets(t, e, i, "up"), this.collectEventTargets(t, e, i, "tap"), this.pointerEnd(t, e, i, r), this.removePointer(t)
                },
                pointerCancel: function(t, e, i, r) {
                    var n = this.mouse ? 0 : ut(this.pointerIds, w(t));
                    clearTimeout(this.holdTimers[n]), this.collectEventTargets(t, e, i, "cancel"), this.pointerEnd(t, e, i, r), this.removePointer(t)
                },
                ie8Dblclick: function(t, e, i) {
                    this.prevTap && e.clientX === this.prevTap.clientX && e.clientY === this.prevTap.clientY && i === this.prevTap.target && (this.downTargets[0] = i, this.downTimes[0] = (new Date).getTime(), this.collectEventTargets(t, e, i, "tap"))
                },
                pointerEnd: function(t, e, i, r) {
                    var n, s = this.target,
                        a = s && s.options,
                        o = a && this.prepared.name && a[this.prepared.name].inertia,
                        l = this.inertiaStatus;
                    if (this.interacting()) {
                        if (l.active && !l.ending) return;
                        var h, c = (new Date).getTime(),
                            u = !1,
                            f = !1,
                            g = !1,
                            m = j(s, this.prepared.name) && a[this.prepared.name].snap.endOnly,
                            v = q(s, this.prepared.name) && a[this.prepared.name].restrict.endOnly,
                            _ = 0,
                            y = 0,
                            x;
                        if (h = this.dragging ? "x" === a.drag.axis ? Math.abs(this.pointerDelta.client.vx) : "y" === a.drag.axis ? Math.abs(this.pointerDelta.client.vy) : this.pointerDelta.client.speed : this.pointerDelta.client.speed, u = o && o.enabled && "gesture" !== this.prepared.name && e !== l.startEvent, f = u && c - this.curCoords.timeStamp < 50 && h > o.minSpeed && h > o.endSpeed, u && !f && (m || v)) {
                            var b = {};
                            b.snap = b.restrict = b, m && (this.setSnapping(this.curCoords.page, b), b.locked && (_ += b.dx, y += b.dy)), v && (this.setRestriction(this.curCoords.page, b), b.restricted && (_ += b.dx, y += b.dy)), (_ || y) && (g = !0)
                        }
                        if (f || g) {
                            if (d(l.upCoords, this.curCoords), this.pointers[0] = l.startEvent = x = new K(this, e, this.prepared.name, "inertiastart", this.element), l.t0 = c, s.fire(l.startEvent), f) {
                                l.vx0 = this.pointerDelta.client.vx, l.vy0 = this.pointerDelta.client.vy, l.v0 = h, this.calcInertia(l);
                                var w = p({}, this.curCoords.page),
                                    T = R(s, this.element),
                                    S;
                                if (w.x = w.x + l.xe - T.x, w.y = w.y + l.ye - T.y, S = {
                                        useStatusXY: !0,
                                        x: w.x,
                                        y: w.y,
                                        dx: 0,
                                        dy: 0,
                                        snap: null
                                    }, S.snap = S, _ = y = 0, m) {
                                    var P = this.setSnapping(this.curCoords.page, S);
                                    P.locked && (_ += P.dx, y += P.dy)
                                }
                                if (v) {
                                    var O = this.setRestriction(this.curCoords.page, S);
                                    O.restricted && (_ += O.dx, y += O.dy)
                                }
                                l.modifiedXe += _, l.modifiedYe += y, l.i = Gt(this.boundInertiaFrame)
                            } else l.smoothEnd = !0, l.xe = _, l.ye = y, l.sx = l.sy = 0, l.i = Gt(this.boundSmoothEndFrame);
                            return void(l.active = !0)
                        }(m || v) && this.pointerMove(t, e, i, r, !0)
                    }
                    if (this.dragging) {
                        n = new K(this, e, "drag", "end", this.element);
                        var k = this.element,
                            C = this.getDrop(n, e, k);
                        this.dropTarget = C.dropzone, this.dropElement = C.element;
                        var D = this.getDropEvents(e, n);
                        D.leave && this.prevDropTarget.fire(D.leave), D.enter && this.dropTarget.fire(D.enter), D.drop && this.dropTarget.fire(D.drop), D.deactivate && this.fireActiveDrops(D.deactivate), s.fire(n)
                    } else this.resizing ? (n = new K(this, e, "resize", "end", this.element), s.fire(n)) : this.gesturing && (n = new K(this, e, "gesture", "end", this.element), s.fire(n));
                    this.stop(e)
                },
                collectDrops: function(t) {
                    var e = [],
                        r = [],
                        n;
                    for (t = t || this.element, n = 0; n < kt.length; n++)
                        if (kt[n].options.drop.enabled) {
                            var s = kt[n],
                                a = s.options.drop.accept;
                            if (!(i(a) && a !== t || c(a) && !ft(t, a)))
                                for (var o = s.selector ? s._context.querySelectorAll(s.selector) : [s._element], l = 0, h = o.length; l < h; l++) {
                                    var u = o[l];
                                    u !== t && (e.push(s), r.push(u))
                                }
                        }
                    return {
                        dropzones: e,
                        elements: r
                    }
                },
                fireActiveDrops: function(t) {
                    var e, i, r, n;
                    for (e = 0; e < this.activeDrops.dropzones.length; e++) i = this.activeDrops.dropzones[e], r = this.activeDrops.elements[e], r !== n && (t.target = r, i.fire(t)), n = r
                },
                setActiveDrops: function(t) {
                    var e = this.collectDrops(t, !0);
                    this.activeDrops.dropzones = e.dropzones, this.activeDrops.elements = e.elements, this.activeDrops.rects = [];
                    for (var i = 0; i < this.activeDrops.dropzones.length; i++) this.activeDrops.rects[i] = this.activeDrops.dropzones[i].getRect(this.activeDrops.elements[i])
                },
                getDrop: function(t, e, i) {
                    var r = [];
                    Dt && this.setActiveDrops(i);
                    for (var n = 0; n < this.activeDrops.dropzones.length; n++) {
                        var s = this.activeDrops.dropzones[n],
                            a = this.activeDrops.elements[n],
                            o = this.activeDrops.rects[n];
                        r.push(s.dropCheck(t, e, this.target, i, a, o) ? a : null)
                    }
                    var l = U(r);
                    return {
                        dropzone: this.activeDrops.dropzones[l] || null,
                        element: this.activeDrops.elements[l] || null
                    }
                },
                getDropEvents: function(t, e) {
                    var i = {
                        enter: null,
                        leave: null,
                        activate: null,
                        deactivate: null,
                        move: null,
                        drop: null
                    };
                    return this.dropElement !== this.prevDropElement && (this.prevDropTarget && (i.leave = {
                        target: this.prevDropElement,
                        dropzone: this.prevDropTarget,
                        relatedTarget: e.target,
                        draggable: e.interactable,
                        dragEvent: e,
                        interaction: this,
                        timeStamp: e.timeStamp,
                        type: "dragleave"
                    }, e.dragLeave = this.prevDropElement, e.prevDropzone = this.prevDropTarget), this.dropTarget && (i.enter = {
                        target: this.dropElement,
                        dropzone: this.dropTarget,
                        relatedTarget: e.target,
                        draggable: e.interactable,
                        dragEvent: e,
                        interaction: this,
                        timeStamp: e.timeStamp,
                        type: "dragenter"
                    }, e.dragEnter = this.dropElement, e.dropzone = this.dropTarget)), "dragend" === e.type && this.dropTarget && (i.drop = {
                        target: this.dropElement,
                        dropzone: this.dropTarget,
                        relatedTarget: e.target,
                        draggable: e.interactable,
                        dragEvent: e,
                        interaction: this,
                        timeStamp: e.timeStamp,
                        type: "drop"
                    }, e.dropzone = this.dropTarget), "dragstart" === e.type && (i.activate = {
                        target: null,
                        dropzone: null,
                        relatedTarget: e.target,
                        draggable: e.interactable,
                        dragEvent: e,
                        interaction: this,
                        timeStamp: e.timeStamp,
                        type: "dropactivate"
                    }), "dragend" === e.type && (i.deactivate = {
                        target: null,
                        dropzone: null,
                        relatedTarget: e.target,
                        draggable: e.interactable,
                        dragEvent: e,
                        interaction: this,
                        timeStamp: e.timeStamp,
                        type: "dropdeactivate"
                    }), "dragmove" === e.type && this.dropTarget && (i.move = {
                        target: this.dropElement,
                        dropzone: this.dropTarget,
                        relatedTarget: e.target,
                        draggable: e.interactable,
                        dragEvent: e,
                        interaction: this,
                        dragmove: e,
                        timeStamp: e.timeStamp,
                        type: "dropmove"
                    }, e.dropzone = this.dropTarget), i
                },
                currentAction: function() {
                    return this.dragging && "drag" || this.resizing && "resize" || this.gesturing && "gesture" || null
                },
                interacting: function() {
                    return this.dragging || this.resizing || this.gesturing
                },
                clearTargets: function() {
                    this.target = this.element = null, this.dropTarget = this.dropElement = this.prevDropTarget = this.prevDropElement = null
                },
                stop: function(t) {
                    if (this.interacting()) {
                        Rt.stop(), this.matches = [], this.matchElements = [];
                        var e = this.target;
                        e.options.styleCursor && (e._doc.documentElement.style.cursor = ""), t && o(t.preventDefault) && this.checkAndPreventDefault(t, e, this.element), this.dragging && (this.activeDrops.dropzones = this.activeDrops.elements = this.activeDrops.rects = null)
                    }
                    this.clearTargets(), this.pointerIsDown = this.snapStatus.locked = this.dragging = this.resizing = this.gesturing = !1, this.prepared.name = this.prevEvent = null, this.inertiaStatus.resumeDx = this.inertiaStatus.resumeDy = 0;
                    for (var i = 0; i < this.pointers.length; i++) - 1 === ut(this.pointerIds, w(this.pointers[i])) && this.pointers.splice(i, 1)
                },
                inertiaFrame: function() {
                    var t = this.inertiaStatus,
                        e = this.target.options[this.prepared.name].inertia,
                        i = e.resistance,
                        r = (new Date).getTime() / 1e3 - t.t0;
                    if (r < t.te) {
                        var n = 1 - (Math.exp(-i * r) - t.lambda_v0) / t.one_ve_v0;
                        if (t.modifiedXe === t.xe && t.modifiedYe === t.ye) t.sx = t.xe * n, t.sy = t.ye * n;
                        else {
                            var s = X(0, 0, t.xe, t.ye, t.modifiedXe, t.modifiedYe, n);
                            t.sx = s.x, t.sy = s.y
                        }
                        this.pointerMove(t.startEvent, t.startEvent), t.i = Gt(this.boundInertiaFrame)
                    } else t.ending = !0, t.sx = t.modifiedXe, t.sy = t.modifiedYe, this.pointerMove(t.startEvent, t.startEvent), this.pointerEnd(t.startEvent, t.startEvent), t.active = t.ending = !1
                },
                smoothEndFrame: function() {
                    var t = this.inertiaStatus,
                        e = (new Date).getTime() - t.t0,
                        i = this.target.options[this.prepared.name].inertia.smoothEndDuration;
                    e < i ? (t.sx = z(e, 0, t.xe, i), t.sy = z(e, 0, t.ye, i), this.pointerMove(t.startEvent, t.startEvent), t.i = Gt(this.boundSmoothEndFrame)) : (t.ending = !0, t.sx = t.xe, t.sy = t.ye, this.pointerMove(t.startEvent, t.startEvent), this.pointerEnd(t.startEvent, t.startEvent), t.smoothEnd = t.active = t.ending = !1)
                },
                addPointer: function(t) {
                    var e = w(t),
                        i = this.mouse ? 0 : ut(this.pointerIds, e);
                    return -1 === i && (i = this.pointerIds.length), this.pointerIds[i] = e, this.pointers[i] = t, i
                },
                removePointer: function(t) {
                    var e = w(t),
                        i = this.mouse ? 0 : ut(this.pointerIds, e); - 1 !== i && (this.pointers.splice(i, 1), this.pointerIds.splice(i, 1), this.downTargets.splice(i, 1), this.downTimes.splice(i, 1), this.holdTimers.splice(i, 1))
                },
                recordPointer: function(t) {
                    var e = this.mouse ? 0 : ut(this.pointerIds, w(t)); - 1 !== e && (this.pointers[e] = t)
                },
                collectEventTargets: function(t, e, r, n) {
                    function s(t, e, s) {
                        var a = Ut ? s.querySelectorAll(e) : void 0;
                        t._iEvents[n] && i(h) && I(t, h) && !L(t, h, r) && V(t, h, r) && ft(h, e, a) && (o.push(t), l.push(h))
                    }
                    var a = this.mouse ? 0 : ut(this.pointerIds, w(t));
                    if ("tap" !== n || !this.pointerWasMoved && this.downTargets[a] && this.downTargets[a] === r) {
                        for (var o = [], l = [], h = r; h;) at.isSet(h) && at(h)._iEvents[n] && (o.push(at(h)), l.push(h)), kt.forEachSelector(s), h = N(h);
                        (o.length || "tap" === n) && this.firePointers(t, e, r, o, l, n)
                    }
                },
                firePointers: function(t, e, i, r, n, s) {
                    var a = this.mouse ? 0 : ut(this.pointerIds, w(t)),
                        o = {},
                        l, h, u;
                    for ("doubletap" === s ? o = t : (f(o, e), e !== t && f(o, t), o.preventDefault = J, o.stopPropagation = K.prototype.stopPropagation, o.stopImmediatePropagation = K.prototype.stopImmediatePropagation, o.interaction = this, o.timeStamp = (new Date).getTime(), o.originalEvent = e, o.originalPointer = t, o.type = s, o.pointerId = w(t), o.pointerType = this.mouse ? "mouse" : Xt ? c(t.pointerType) ? t.pointerType : [, , "touch", "pen", "mouse"][t.pointerType] : "touch"), "tap" === s && (o.dt = o.timeStamp - this.downTimes[a], h = o.timeStamp - this.tapTime, u = !!(this.prevTap && "doubletap" !== this.prevTap.type && this.prevTap.target === o.target && h < 500), o.double = u, this.tapTime = o.timeStamp), l = 0; l < r.length && (o.currentTarget = n[l], o.interactable = r[l], r[l].fire(o), !(o.immediatePropagationStopped || o.propagationStopped && n[l + 1] !== o.currentTarget)); l++);
                    if (u) {
                        var d = {};
                        p(d, o), d.dt = h, d.type = "doubletap", this.collectEventTargets(d, e, i, "doubletap"), this.prevTap = d
                    } else "tap" === s && (this.prevTap = o)
                },
                validateSelector: function(t, e, i, r) {
                    for (var n = 0, s = i.length; n < s; n++) {
                        var a = i[n],
                            o = r[n],
                            l = rt(a.getAction(t, e, this, o), a);
                        if (l && W(a, o, l)) return this.target = a, this.element = o, l
                    }
                },
                setSnapping: function(t, e) {
                    var i = this.target.options[this.prepared.name].snap,
                        r = [],
                        n, s, a;
                    if (e = e || this.snapStatus, e.useStatusXY) s = {
                        x: e.x,
                        y: e.y
                    };
                    else {
                        var h = R(this.target, this.element);
                        s = p({}, t), s.x -= h.x, s.y -= h.y
                    }
                    e.realX = s.x, e.realY = s.y, s.x = s.x - this.inertiaStatus.resumeDx, s.y = s.y - this.inertiaStatus.resumeDy;
                    for (var c = i.targets ? i.targets.length : 0, u = 0; u < this.snapOffsets.length; u++) {
                        var f = {
                            x: s.x - this.snapOffsets[u].x,
                            y: s.y - this.snapOffsets[u].y
                        };
                        for (a = 0; a < c; a++)(n = o(i.targets[a]) ? i.targets[a](f.x, f.y, this) : i.targets[a]) && r.push({
                            x: l(n.x) ? n.x + this.snapOffsets[u].x : f.x,
                            y: l(n.y) ? n.y + this.snapOffsets[u].y : f.y,
                            range: l(n.range) ? n.range : i.range
                        })
                    }
                    var d = {
                        target: null,
                        inRange: !1,
                        distance: 0,
                        range: 0,
                        dx: 0,
                        dy: 0
                    };
                    for (a = 0, c = r.length; a < c; a++) {
                        n = r[a];
                        var g = n.range,
                            m = n.x - s.x,
                            v = n.y - s.y,
                            _ = St(m, v),
                            y = _ <= g;
                        g === 1 / 0 && d.inRange && d.range !== 1 / 0 && (y = !1), d.target && !(y ? d.inRange && g !== 1 / 0 ? _ / g < d.distance / d.range : g === 1 / 0 && d.range !== 1 / 0 || _ < d.distance : !d.inRange && _ < d.distance) || (g === 1 / 0 && (y = !0), d.target = n, d.distance = _, d.range = g, d.inRange = y, d.dx = m, d.dy = v, e.range = g)
                    }
                    var x;
                    return d.target ? (x = e.snappedX !== d.target.x || e.snappedY !== d.target.y, e.snappedX = d.target.x, e.snappedY = d.target.y) : (x = !0, e.snappedX = NaN, e.snappedY = NaN), e.dx = d.dx, e.dy = d.dy, e.changed = x || d.inRange && !e.locked, e.locked = d.inRange, e
                },
                setRestriction: function(t, e) {
                    var r = this.target,
                        n = r && r.options[this.prepared.name].restrict,
                        s = n && n.restriction,
                        a;
                    if (!s) return e;
                    e = e || this.restrictStatus, a = a = e.useStatusXY ? {
                        x: e.x,
                        y: e.y
                    } : p({}, t), e.snap && e.snap.locked && (a.x += e.snap.dx || 0, a.y += e.snap.dy || 0), a.x -= this.inertiaStatus.resumeDx, a.y -= this.inertiaStatus.resumeDy, e.dx = 0, e.dy = 0, e.restricted = !1;
                    var l, h, u;
                    return c(s) && !(s = "parent" === s ? N(this.element) : "self" === s ? r.getRect(this.element) : F(this.element, s)) ? e : (o(s) && (s = s(a.x, a.y, this.element)), i(s) && (s = O(s)), l = s, s ? "x" in s && "y" in s ? (h = Math.max(Math.min(l.x + l.width - this.restrictOffset.right, a.x), l.x + this.restrictOffset.left), u = Math.max(Math.min(l.y + l.height - this.restrictOffset.bottom, a.y), l.y + this.restrictOffset.top)) : (h = Math.max(Math.min(l.right - this.restrictOffset.right, a.x), l.left + this.restrictOffset.left), u = Math.max(Math.min(l.bottom - this.restrictOffset.bottom, a.y), l.top + this.restrictOffset.top)) : (h = a.x, u = a.y), e.dx = h - a.x, e.dy = u - a.y, e.changed = e.restrictedX !== h || e.restrictedY !== u, e.restricted = !(!e.dx && !e.dy), e.restrictedX = h, e.restrictedY = u, e)
                },
                checkAndPreventDefault: function(t, e, i) {
                    if (e = e || this.target) {
                        var r = e.options,
                            n = r.preventDefault;
                        if ("auto" === n && i && !/^(input|select|textarea)$/i.test(t.target.nodeName)) {
                            if (/down|start/i.test(t.type) && "drag" === this.prepared.name && "xy" !== r.drag.axis) return;
                            if (r[this.prepared.name] && r[this.prepared.name].manualStart && !this.interacting()) return;
                            return void t.preventDefault()
                        }
                        return "always" === n ? void t.preventDefault() : void 0
                    }
                },
                calcInertia: function(t) {
                    var e = this.target.options[this.prepared.name].inertia,
                        i = e.resistance,
                        r = -Math.log(e.endSpeed / t.v0) / i;
                    t.x0 = this.prevEvent.pageX, t.y0 = this.prevEvent.pageY, t.t0 = t.startEvent.timeStamp / 1e3, t.sx = t.sy = 0, t.modifiedXe = t.xe = (t.vx0 - r) / i, t.modifiedYe = t.ye = (t.vy0 - r) / i, t.te = r, t.lambda_v0 = i / t.v0, t.one_ve_v0 = 1 - e.endSpeed / t.v0
                },
                autoScrollMove: function(t) {
                    if (this.interacting() && H(this.target, this.prepared.name)) {
                        if (this.inertiaStatus.active) return void(Rt.x = Rt.y = 0);
                        var e, i, n, s, a = this.target.options[this.prepared.name].autoScroll,
                            o = a.container || S(this.element);
                        if (r(o)) s = t.clientX < Rt.margin, e = t.clientY < Rt.margin, i = t.clientX > o.innerWidth - Rt.margin, n = t.clientY > o.innerHeight - Rt.margin;
                        else {
                            var l = P(o);
                            s = t.clientX < l.left + Rt.margin, e = t.clientY < l.top + Rt.margin, i = t.clientX > l.right - Rt.margin, n = t.clientY > l.bottom - Rt.margin
                        }
                        Rt.x = i ? 1 : s ? -1 : 0, Rt.y = n ? 1 : e ? -1 : 0, Rt.isScrolling || (Rt.margin = a.margin, Rt.speed = a.speed, Rt.start(this))
                    }
                },
                _updateEventTargets: function(t, e) {
                    this._eventTarget = t, this._curEventTarget = e
                }
            }, K.prototype = {
                preventDefault: e,
                stopImmediatePropagation: function() {
                    this.immediatePropagationStopped = this.propagationStopped = !0
                },
                stopPropagation: function() {
                    this.propagationStopped = !0
                }
            };
            for (var Kt = {}, Jt = ["dragStart", "dragMove", "resizeStart", "resizeMove", "gestureStart", "gestureMove", "pointerOver", "pointerOut", "pointerHover", "selectorDown", "pointerDown", "pointerMove", "pointerUp", "pointerCancel", "pointerEnd", "addPointer", "removePointer", "recordPointer", "autoScrollMove"], te = 0, ee = Jt.length; te < ee; te++) {
                var ie = Jt[te];
                Kt[ie] = Q(ie)
            }
            kt.indexOfElement = function t(e, i) {
                    i = i || mt;
                    for (var r = 0; r < this.length; r++) {
                        var n = this[r];
                        if (n.selector === e && n._context === i || !n.selector && n._element === e) return r
                    }
                    return -1
                }, kt.get = function t(e, i) {
                    return this[this.indexOfElement(e, i && i.context)]
                }, kt.forEachSelector = function(t) {
                    for (var e = 0; e < this.length; e++) {
                        var i = this[e];
                        if (i.selector) {
                            var r = t(i, i.selector, i._context, e, this);
                            if (void 0 !== r) return r
                        }
                    }
                }, ot.prototype = {
                    setOnEvents: function(t, e) {
                        return "drop" === t ? (o(e.ondrop) && (this.ondrop = e.ondrop), o(e.ondropactivate) && (this.ondropactivate = e.ondropactivate), o(e.ondropdeactivate) && (this.ondropdeactivate = e.ondropdeactivate), o(e.ondragenter) && (this.ondragenter = e.ondragenter), o(e.ondragleave) && (this.ondragleave = e.ondragleave), o(e.ondropmove) && (this.ondropmove = e.ondropmove)) : (t = "on" + t, o(e.onstart) && (this[t + "start"] = e.onstart), o(e.onmove) && (this[t + "move"] = e.onmove), o(e.onend) && (this[t + "end"] = e.onend), o(e.oninertiastart) && (this[t + "inertiastart"] = e.oninertiastart)), this
                    },
                    draggable: function(t) {
                        return a(t) ? (this.options.drag.enabled = !1 !== t.enabled, this.setPerAction("drag", t), this.setOnEvents("drag", t), /^x$|^y$|^xy$/.test(t.axis) ? this.options.drag.axis = t.axis : null === t.axis && delete this.options.drag.axis, this) : h(t) ? (this.options.drag.enabled = t, this) : this.options.drag
                    },
                    setPerAction: function(t, e) {
                        for (var i in e) i in At[t] && (a(e[i]) ? (this.options[t][i] = p(this.options[t][i] || {}, e[i]), a(At.perAction[i]) && "enabled" in At.perAction[i] && (this.options[t][i].enabled = !1 !== e[i].enabled)) : h(e[i]) && a(At.perAction[i]) ? this.options[t][i].enabled = e[i] : void 0 !== e[i] && (this.options[t][i] = e[i]))
                    },
                    dropzone: function(t) {
                        return a(t) ? (this.options.drop.enabled = !1 !== t.enabled, this.setOnEvents("drop", t), /^(pointer|center)$/.test(t.overlap) ? this.options.drop.overlap = t.overlap : l(t.overlap) && (this.options.drop.overlap = Math.max(Math.min(1, t.overlap), 0)), "accept" in t && (this.options.drop.accept = t.accept), "checker" in t && (this.options.drop.checker = t.checker), this) : h(t) ? (this.options.drop.enabled = t, this) : this.options.drop
                    },
                    dropCheck: function(t, e, i, r, n, s) {
                        var a = !1;
                        if (!(s = s || this.getRect(n))) return !!this.options.drop.checker && this.options.drop.checker(t, e, a, this, n, i, r);
                        var o = this.options.drop.overlap;
                        if ("pointer" === o) {
                            var h = y(t),
                                c = R(i, r),
                                u, p;
                            h.x += c.x, h.y += c.y, u = h.x > s.left && h.x < s.right, p = h.y > s.top && h.y < s.bottom, a = u && p
                        }
                        var f = i.getRect(r);
                        if ("center" === o) {
                            var d = f.left + f.width / 2,
                                g = f.top + f.height / 2;
                            a = d >= s.left && d <= s.right && g >= s.top && g <= s.bottom
                        }
                        if (l(o)) {
                            a = Math.max(0, Math.min(s.right, f.right) - Math.max(s.left, f.left)) * Math.max(0, Math.min(s.bottom, f.bottom) - Math.max(s.top, f.top)) / (f.width * f.height) >= o
                        }
                        return this.options.drop.checker && (a = this.options.drop.checker(t, e, a, this, n, i, r)), a
                    },
                    dropChecker: function(t) {
                        return o(t) ? (this.options.drop.checker = t, this) : null === t ? (delete this.options.getRect, this) : this.options.drop.checker
                    },
                    accept: function(t) {
                        return i(t) ? (this.options.drop.accept = t, this) : u(t) ? (this.options.drop.accept = t, this) : null === t ? (delete this.options.drop.accept, this) : this.options.drop.accept
                    },
                    resizable: function(t) {
                        return a(t) ? (this.options.resize.enabled = !1 !== t.enabled, this.setPerAction("resize", t), this.setOnEvents("resize", t), /^x$|^y$|^xy$/.test(t.axis) ? this.options.resize.axis = t.axis : null === t.axis && (this.options.resize.axis = At.resize.axis), h(t.preserveAspectRatio) ? this.options.resize.preserveAspectRatio = t.preserveAspectRatio : h(t.square) && (this.options.resize.square = t.square), this) : h(t) ? (this.options.resize.enabled = t, this) : this.options.resize
                    },
                    squareResize: function(t) {
                        return h(t) ? (this.options.resize.square = t, this) : null === t ? (delete this.options.resize.square, this) : this.options.resize.square
                    },
                    gesturable: function(t) {
                        return a(t) ? (this.options.gesture.enabled = !1 !== t.enabled, this.setPerAction("gesture", t), this.setOnEvents("gesture", t), this) : h(t) ? (this.options.gesture.enabled = t, this) : this.options.gesture
                    },
                    autoScroll: function(t) {
                        return a(t) ? t = p({
                            actions: ["drag", "resize"]
                        }, t) : h(t) && (t = {
                            actions: ["drag", "resize"],
                            enabled: t
                        }), this.setOptions("autoScroll", t)
                    },
                    snap: function(t) {
                        var e = this.setOptions("snap", t);
                        return e === this ? this : e.drag
                    },
                    setOptions: function(t, e) {
                        var i = e && s(e.actions) ? e.actions : ["drag"],
                            r;
                        if (a(e) || h(e)) {
                            for (r = 0; r < i.length; r++) {
                                var n = /resize/.test(i[r]) ? "resize" : i[r];
                                if (a(this.options[n])) {
                                    var o = this.options[n][t];
                                    a(e) ? (p(o, e), o.enabled = !1 !== e.enabled, "snap" === t && ("grid" === o.mode ? o.targets = [at.createSnapGrid(p({
                                        offset: o.gridOffset || {
                                            x: 0,
                                            y: 0
                                        }
                                    }, o.grid || {}))] : "anchor" === o.mode ? o.targets = o.anchors : "path" === o.mode && (o.targets = o.paths), "elementOrigin" in e && (o.relativePoints = [e.elementOrigin]))) : h(e) && (o.enabled = e)
                                }
                            }
                            return this
                        }
                        var l = {},
                            c = ["drag", "resize", "gesture"];
                        for (r = 0; r < c.length; r++) t in At[c[r]] && (l[c[r]] = this.options[c[r]][t]);
                        return l
                    },
                    inertia: function(t) {
                        var e = this.setOptions("inertia", t);
                        return e === this ? this : e.drag
                    },
                    getAction: function(t, e, i, r) {
                        var n = this.defaultActionChecker(t, i, r);
                        return this.options.actionChecker ? this.options.actionChecker(t, e, n, this, r, i) : n
                    },
                    defaultActionChecker: it,
                    actionChecker: function(t) {
                        return o(t) ? (this.options.actionChecker = t, this) : null === t ? (delete this.options.actionChecker, this) : this.options.actionChecker
                    },
                    getRect: function t(e) {
                        return e = e || this._element, this.selector && !i(e) && (e = this._context.querySelector(this.selector)), O(e)
                    },
                    rectChecker: function(t) {
                        return o(t) ? (this.getRect = t, this) : null === t ? (delete this.options.getRect, this) : this.getRect
                    },
                    styleCursor: function(t) {
                        return h(t) ? (this.options.styleCursor = t, this) : null === t ? (delete this.options.styleCursor, this) : this.options.styleCursor
                    },
                    preventDefault: function(t) {
                        return /^(always|never|auto)$/.test(t) ? (this.options.preventDefault = t, this) : h(t) ? (this.options.preventDefault = t ? "always" : "never", this) : this.options.preventDefault
                    },
                    origin: function(t) {
                        return u(t) ? (this.options.origin = t, this) : a(t) ? (this.options.origin = t, this) : this.options.origin
                    },
                    deltaSource: function(t) {
                        return "page" === t || "client" === t ? (this.options.deltaSource = t, this) : this.options.deltaSource
                    },
                    restrict: function(t) {
                        if (!a(t)) return this.setOptions("restrict", t);
                        for (var e = ["drag", "resize", "gesture"], i, r = 0; r < e.length; r++) {
                            var n = e[r];
                            if (n in t) {
                                var s = p({
                                    actions: [n],
                                    restriction: t[n]
                                }, t);
                                i = this.setOptions("restrict", s)
                            }
                        }
                        return i
                    },
                    context: function() {
                        return this._context
                    },
                    _context: mt,
                    ignoreFrom: function(t) {
                        return u(t) ? (this.options.ignoreFrom = t, this) : i(t) ? (this.options.ignoreFrom = t, this) : this.options.ignoreFrom
                    },
                    allowFrom: function(t) {
                        return u(t) ? (this.options.allowFrom = t, this) : i(t) ? (this.options.allowFrom = t, this) : this.options.allowFrom
                    },
                    element: function() {
                        return this._element
                    },
                    fire: function(t) {
                        if (!t || !t.type || !pt(Bt, t.type)) return this;
                        var e, i, r, n = "on" + t.type,
                            s = "";
                        if (t.type in this._iEvents)
                            for (e = this._iEvents[t.type], i = 0, r = e.length; i < r && !t.immediatePropagationStopped; i++) s = e[i].name, e[i](t);
                        if (o(this[n]) && (s = this[n].name, this[n](t)), t.type in jt && (e = jt[t.type]))
                            for (i = 0, r = e.length; i < r && !t.immediatePropagationStopped; i++) s = e[i].name, e[i](t);
                        return this
                    },
                    on: function(t, e, i) {
                        var r;
                        if (c(t) && -1 !== t.search(" ") && (t = t.trim().split(/ +/)), s(t)) {
                            for (r = 0; r < t.length; r++) this.on(t[r], e, i);
                            return this
                        }
                        if (a(t)) {
                            for (var n in t) this.on(n, t[n], e);
                            return this
                        }
                        if ("wheel" === t && (t = Vt), i = !!i, pt(Bt, t)) t in this._iEvents ? this._iEvents[t].push(e) : this._iEvents[t] = [e];
                        else if (this.selector) {
                            if (!Et[t])
                                for (Et[t] = {
                                        selectors: [],
                                        contexts: [],
                                        listeners: []
                                    }, r = 0; r < Ot.length; r++) $t.add(Ot[r], t, nt), $t.add(Ot[r], t, st, !0);
                            var o = Et[t],
                                l;
                            for (l = o.selectors.length - 1; l >= 0 && (o.selectors[l] !== this.selector || o.contexts[l] !== this._context); l--); - 1 === l && (l = o.selectors.length, o.selectors.push(this.selector), o.contexts.push(this._context), o.listeners.push([])), o.listeners[l].push([e, i])
                        } else $t.add(this._element, t, e, i);
                        return this
                    },
                    off: function(t, e, i) {
                        var r;
                        if (c(t) && -1 !== t.search(" ") && (t = t.trim().split(/ +/)), s(t)) {
                            for (r = 0; r < t.length; r++) this.off(t[r], e, i);
                            return this
                        }
                        if (a(t)) {
                            for (var n in t) this.off(n, t[n], e);
                            return this
                        }
                        var o, l = -1;
                        if (i = !!i, "wheel" === t && (t = Vt), pt(Bt, t))(o = this._iEvents[t]) && -1 !== (l = ut(o, e)) && this._iEvents[t].splice(l, 1);
                        else if (this.selector) {
                            var h = Et[t],
                                u = !1;
                            if (!h) return this;
                            for (l = h.selectors.length - 1; l >= 0; l--)
                                if (h.selectors[l] === this.selector && h.contexts[l] === this._context) {
                                    var p = h.listeners[l];
                                    for (r = p.length - 1; r >= 0; r--) {
                                        var f = p[r][0],
                                            d = p[r][1];
                                        if (f === e && d === i) {
                                            p.splice(r, 1), p.length || (h.selectors.splice(l, 1), h.contexts.splice(l, 1), h.listeners.splice(l, 1), $t.remove(this._context, t, nt), $t.remove(this._context, t, st, !0), h.selectors.length || (Et[t] = null)), u = !0;
                                            break
                                        }
                                    }
                                    if (u) break
                                }
                        } else $t.remove(this._element, t, e, i);
                        return this
                    },
                    set: function(t) {
                        a(t) || (t = {}), this.options = p({}, At.base);
                        var e, i = ["drag", "drop", "resize", "gesture"],
                            r = ["draggable", "dropzone", "resizable", "gesturable"],
                            n = p(p({}, At.perAction), t[s] || {});
                        for (e = 0; e < i.length; e++) {
                            var s = i[e];
                            this.options[s] = p({}, At[s]), this.setPerAction(s, n), this[r[e]](t[s])
                        }
                        var o = ["accept", "actionChecker", "allowFrom", "deltaSource", "dropChecker", "ignoreFrom", "origin", "preventDefault", "rectChecker", "styleCursor"];
                        for (e = 0, ee = o.length; e < ee; e++) {
                            var l = o[e];
                            this.options[l] = At.base[l], l in t && this[l](t[l])
                        }
                        return this
                    },
                    unset: function() {
                        if ($t.remove(this._element, "all"), c(this.selector))
                            for (var t in Et)
                                for (var e = Et[t], i = 0; i < e.selectors.length; i++) {
                                    e.selectors[i] === this.selector && e.contexts[i] === this._context && (e.selectors.splice(i, 1), e.contexts.splice(i, 1), e.listeners.splice(i, 1), e.selectors.length || (Et[t] = null)), $t.remove(this._context, t, nt), $t.remove(this._context, t, st, !0);
                                    break
                                } else $t.remove(this, "all"), this.options.styleCursor && (this._element.style.cursor = "");
                        return this.dropzone(!1), kt.splice(ut(kt, this), 1), at
                    }
                },
                ot.prototype.snap = lt(ot.prototype.snap, "Interactable#snap is deprecated. See the new documentation for snapping at http://interactjs.io/docs/snapping"), ot.prototype.restrict = lt(ot.prototype.restrict, "Interactable#restrict is deprecated. See the new documentation for resticting at http://interactjs.io/docs/restriction"), ot.prototype.inertia = lt(ot.prototype.inertia, "Interactable#inertia is deprecated. See the new documentation for inertia at http://interactjs.io/docs/inertia"), ot.prototype.autoScroll = lt(ot.prototype.autoScroll, "Interactable#autoScroll is deprecated. See the new documentation for autoScroll at http://interactjs.io/docs/#autoscroll"), ot.prototype.squareResize = lt(ot.prototype.squareResize, "Interactable#squareResize is deprecated. See http://interactjs.io/docs/#resize-square"), ot.prototype.accept = lt(ot.prototype.accept, "Interactable#accept is deprecated. use Interactable#dropzone({ accept: target }) instead"), ot.prototype.dropChecker = lt(ot.prototype.dropChecker, "Interactable#dropChecker is deprecated. use Interactable#dropzone({ dropChecker: checkerFunction }) instead"), ot.prototype.context = lt(ot.prototype.context, "Interactable#context as a method is deprecated. It will soon be a DOM Node instead"), at.isSet = function(t, e) {
                    return -1 !== kt.indexOfElement(t, e && e.context)
                }, at.on = function(t, e, i) {
                    if (c(t) && -1 !== t.search(" ") && (t = t.trim().split(/ +/)), s(t)) {
                        for (var r = 0; r < t.length; r++) at.on(t[r], e, i);
                        return at
                    }
                    if (a(t)) {
                        for (var n in t) at.on(n, t[n], e);
                        return at
                    }
                    return pt(Bt, t) ? jt[t] ? jt[t].push(e) : jt[t] = [e] : $t.add(mt, t, e, i), at
                }, at.off = function(t, e, i) {
                    if (c(t) && -1 !== t.search(" ") && (t = t.trim().split(/ +/)), s(t)) {
                        for (var r = 0; r < t.length; r++) at.off(t[r], e, i);
                        return at
                    }
                    if (a(t)) {
                        for (var n in t) at.off(n, t[n], e);
                        return at
                    }
                    if (pt(Bt, t)) {
                        var o;
                        t in jt && -1 !== (o = ut(jt[t], e)) && jt[t].splice(o, 1)
                    } else $t.remove(mt, t, e, i);
                    return at
                }, at.enableDragging = lt(function(t) {
                    return null !== t && void 0 !== t ? (Lt.drag = t, at) : Lt.drag
                }, "interact.enableDragging is deprecated and will soon be removed."), at.enableResizing = lt(function(t) {
                    return null !== t && void 0 !== t ? (Lt.resize = t, at) : Lt.resize
                }, "interact.enableResizing is deprecated and will soon be removed."), at.enableGesturing = lt(function(t) {
                    return null !== t && void 0 !== t ? (Lt.gesture = t, at) : Lt.gesture
                }, "interact.enableGesturing is deprecated and will soon be removed."), at.eventTypes = Bt, at.debug = function() {
                    var t = Ct[0] || new G;
                    return {
                        interactions: Ct,
                        target: t.target,
                        dragging: t.dragging,
                        resizing: t.resizing,
                        gesturing: t.gesturing,
                        prepared: t.prepared,
                        matches: t.matches,
                        matchElements: t.matchElements,
                        prevCoords: t.prevCoords,
                        startCoords: t.startCoords,
                        pointerIds: t.pointerIds,
                        pointers: t.pointers,
                        addPointer: Kt.addPointer,
                        removePointer: Kt.removePointer,
                        recordPointer: Kt.recordPointer,
                        snap: t.snapStatus,
                        restrict: t.restrictStatus,
                        inertia: t.inertiaStatus,
                        downTime: t.downTimes[0],
                        downEvent: t.downEvent,
                        downPointer: t.downPointer,
                        prevEvent: t.prevEvent,
                        Interactable: ot,
                        interactables: kt,
                        pointerIsDown: t.pointerIsDown,
                        defaultOptions: At,
                        defaultActionChecker: it,
                        actionCursors: It,
                        dragMove: Kt.dragMove,
                        resizeMove: Kt.resizeMove,
                        gestureMove: Kt.gestureMove,
                        pointerUp: Kt.pointerUp,
                        pointerDown: Kt.pointerDown,
                        pointerMove: Kt.pointerMove,
                        pointerHover: Kt.pointerHover,
                        eventTypes: Bt,
                        events: $t,
                        globalEvents: jt,
                        delegatedEvents: Et,
                        prefixedPropREs: Qt
                    }
                }, at.getPointerAverage = C, at.getTouchBBox = D, at.getTouchDistance = E, at.getTouchAngle = A, at.getElementRect = O, at.getElementClientRect = P, at.matchesSelector = ft, at.closest = F, at.margin = lt(function(t) {
                    return l(t) ? (zt = t, at) : zt
                }, "interact.margin is deprecated. Use interact(target).resizable({ margin: number }); instead."), at.supportsTouch = function() {
                    return Mt
                }, at.supportsPointerEvent = function() {
                    return Xt
                }, at.stop = function(t) {
                    for (var e = Ct.length - 1; e >= 0; e--) Ct[e].stop(t);
                    return at
                }, at.dynamicDrop = function(t) {
                    return h(t) ? (Dt = t, at) : Dt
                }, at.pointerMoveTolerance = function(t) {
                    return l(t) ? (Yt = t, this) : Yt
                }, at.maxInteractions = function(t) {
                    return l(t) ? (Nt = t, this) : Nt
                }, at.createSnapGrid = function(t) {
                    return function(e, i) {
                        var r = 0,
                            n = 0;
                        a(t.offset) && (r = t.offset.x, n = t.offset.y);
                        var s = Math.round((e - r) / t.x),
                            o = Math.round((i - n) / t.y);
                        return {
                            x: s * t.x + r,
                            y: o * t.y + n,
                            range: t.range
                        }
                    }
                }, ct(mt), Wt in Element.prototype && o(Element.prototype[Wt]) || (Ut = function(t, e, i) {
                    i = i || t.parentNode.querySelectorAll(e);
                    for (var r = 0, n = i.length; r < n; r++)
                        if (i[r] === t) return !0;
                    return !1
                }),
                function() {
                    for (var e = 0, i = ["ms", "moz", "webkit", "o"], r = 0; r < i.length && !t.requestAnimationFrame; ++r) Gt = t[i[r] + "RequestAnimationFrame"], Zt = t[i[r] + "CancelAnimationFrame"] || t[i[r] + "CancelRequestAnimationFrame"];
                    Gt || (Gt = function(t) {
                        var i = (new Date).getTime(),
                            r = Math.max(0, 16 - (i - e)),
                            n = setTimeout(function() {
                                t(i + r)
                            }, r);
                        return e = i + r, n
                    }), Zt || (Zt = function(t) {
                        clearTimeout(t)
                    })
                }(), "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = at), exports.interact = at) : "function" == typeof define && define.amd ? define("interact", function() {
                    return at
                }) : t.interact = at
        }
    }("undefined" == typeof window ? void 0 : window);
