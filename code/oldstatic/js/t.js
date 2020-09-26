! function(a, b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = !!a && "length" in a && a.length,
            c = na.type(a);
        return "function" === c || na.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function d(a, b, c) {
        if (na.isFunction(b)) return na.grep(a, function(a, d) { return !!b.call(a, d, a) !== c });
        if (b.nodeType) return na.grep(a, function(a) { return a === b !== c });
        if ("string" == typeof b) {
            if (xa.test(b)) return na.filter(b, a, c);
            b = na.filter(b, a)
        }
        return na.grep(a, function(a) { return na.inArray(a, b) > -1 !== c })
    }

    function e(a, b) { do { a = a[b] } while (a && 1 !== a.nodeType); return a }

    function f(a) { var b = {}; return na.each(a.match(Da) || [], function(a, c) { b[c] = !0 }), b }

    function g() { da.addEventListener ? (da.removeEventListener("DOMContentLoaded", h), a.removeEventListener("load", h)) : (da.detachEvent("onreadystatechange", h), a.detachEvent("onload", h)) }

    function h() {
        (da.addEventListener || "load" === a.event.type || "complete" === da.readyState) && (g(), na.ready())
    }

    function i(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(Ia, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try { c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : Ha.test(c) ? na.parseJSON(c) : c } catch (e) {}
                na.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function j(a) {
        var b;
        for (b in a)
            if (("data" !== b || !na.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function k(a, b, c, d) {
        if (Ga(a)) {
            var e, f, g = na.expando,
                h = a.nodeType,
                i = h ? na.cache : a,
                j = h ? a[g] : a[g] && g;
            if (j && i[j] && (d || i[j].data) || void 0 !== c || "string" != typeof b) return j || (j = h ? a[g] = ca.pop() || na.guid++ : g), i[j] || (i[j] = h ? {} : { toJSON: na.noop }), "object" != typeof b && "function" != typeof b || (d ? i[j] = na.extend(i[j], b) : i[j].data = na.extend(i[j].data, b)), f = i[j], d || (f.data || (f.data = {}), f = f.data), void 0 !== c && (f[na.camelCase(b)] = c), "string" == typeof b ? (e = f[b], null == e && (e = f[na.camelCase(b)])) : e = f, e
        }
    }

    function l(a, b, c) {
        if (Ga(a)) {
            var d, e, f = a.nodeType,
                g = f ? na.cache : a,
                h = f ? a[na.expando] : na.expando;
            if (g[h]) { if (b && (d = c ? g[h] : g[h].data)) { na.isArray(b) ? b = b.concat(na.map(b, na.camelCase)) : b in d ? b = [b] : (b = na.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length; for (; e--;) delete d[b[e]]; if (c ? !j(d) : !na.isEmptyObject(d)) return }(c || (delete g[h].data, j(g[h]))) && (f ? na.cleanData([a], !0) : la.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0) }
        }
    }

    function m(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() { return d.cur() } : function() { return na.css(a, b, "") },
            i = h(),
            j = c && c[3] || (na.cssNumber[b] ? "" : "px"),
            k = (na.cssNumber[b] || "px" !== j && +i) && Ka.exec(na.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do { f = f || ".5", k /= f, na.style(a, b, k + j) } while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }

    function n(a) {
        var b = Sa.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            for (; b.length;) c.createElement(b.pop());
        return c
    }

    function o(a, b) {
        var c, d, e = 0,
            f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || na.nodeName(d, b) ? f.push(d) : na.merge(f, o(d, b));
        return void 0 === b || b && na.nodeName(a, b) ? na.merge([a], f) : f
    }

    function p(a, b) { for (var c, d = 0; null != (c = a[d]); d++) na._data(c, "globalEval", !b || na._data(b[d], "globalEval")) }

    function q(a) { Oa.test(a.type) && (a.defaultChecked = a.checked) }

    function r(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l, m = a.length, r = n(b), s = [], t = 0; m > t; t++)
            if (g = a[t], g || 0 === g)
                if ("object" === na.type(g)) na.merge(s, g.nodeType ? [g] : g);
                else if (Ua.test(g)) {
            for (i = i || r.appendChild(b.createElement("div")), j = (Pa.exec(g) || ["", ""])[1].toLowerCase(), l = Ta[j] || Ta._default, i.innerHTML = l[1] + na.htmlPrefilter(g) + l[2], f = l[0]; f--;) i = i.lastChild;
            if (!la.leadingWhitespace && Ra.test(g) && s.push(b.createTextNode(Ra.exec(g)[0])), !la.tbody)
                for (g = "table" !== j || Va.test(g) ? "<table>" !== l[1] || Va.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length; f--;) na.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k);
            for (na.merge(s, i.childNodes), i.textContent = ""; i.firstChild;) i.removeChild(i.firstChild);
            i = r.lastChild
        } else s.push(b.createTextNode(g));
        for (i && r.removeChild(i), la.appendChecked || na.grep(o(s, "input"), q), t = 0; g = s[t++];)
            if (d && na.inArray(g, d) > -1) e && e.push(g);
            else if (h = na.contains(g.ownerDocument, g), i = o(r.appendChild(g), "script"), h && p(i), c)
            for (f = 0; g = i[f++];) Qa.test(g.type || "") && c.push(g);
        return i = null, r
    }

    function s() { return !0 }

    function t() { return !1 }

    function u() { try { return da.activeElement } catch (a) {} }

    function v(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) { "string" != typeof c && (d = d || c, c = void 0); for (h in b) v(a, h, c, d, b[h], f); return a }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = t;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) { return na().off(a), g.apply(this, arguments) }, e.guid = g.guid || (g.guid = na.guid++)), a.each(function() { na.event.add(this, b, e, d, c) })
    }

    function w(a, b) { return na.nodeName(a, "table") && na.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a }

    function x(a) { return a.type = (null !== na.find.attr(a, "type")) + "/" + a.type, a }

    function y(a) { var b = eb.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a }

    function z(a, b) {
        if (1 === b.nodeType && na.hasData(a)) {
            var c, d, e, f = na._data(a),
                g = na._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) na.event.add(b, c, h[c][d])
            }
            g.data && (g.data = na.extend({}, g.data))
        }
    }

    function A(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !la.noCloneEvent && b[na.expando]) {
                e = na._data(b);
                for (d in e.events) na.removeEvent(b, d, e.handle);
                b.removeAttribute(na.expando)
            }
            "script" === c && b.text !== a.text ? (x(b).text = a.text, y(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), la.html5Clone && a.innerHTML && !na.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Oa.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }
    }

    function B(a, b, c, d) {
        b = fa.apply([], b);
        var e, f, g, h, i, j, k = 0,
            l = a.length,
            m = l - 1,
            n = b[0],
            p = na.isFunction(n);
        if (p || l > 1 && "string" == typeof n && !la.checkClone && db.test(n)) return a.each(function(e) {
            var f = a.eq(e);
            p && (b[0] = n.call(this, e, f.html())), B(f, b, c, d)
        });
        if (l && (j = r(b, a[0].ownerDocument, !1, a, d), e = j.firstChild, 1 === j.childNodes.length && (j = e), e || d)) {
            for (h = na.map(o(j, "script"), x), g = h.length; l > k; k++) f = j, k !== m && (f = na.clone(f, !0, !0), g && na.merge(h, o(f, "script"))), c.call(a[k], f, k);
            if (g)
                for (i = h[h.length - 1].ownerDocument, na.map(h, y), k = 0; g > k; k++) f = h[k], Qa.test(f.type || "") && !na._data(f, "globalEval") && na.contains(i, f) && (f.src ? na._evalUrl && na._evalUrl(f.src) : na.globalEval((f.text || f.textContent || f.innerHTML || "").replace(fb, "")));
            j = e = null
        }
        return a
    }

    function C(a, b, c) { for (var d, e = b ? na.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || na.cleanData(o(d)), d.parentNode && (c && na.contains(d.ownerDocument, d) && p(o(d, "script")), d.parentNode.removeChild(d)); return a }

    function D(a, b) {
        var c = na(b.createElement(a)).appendTo(b.body),
            d = na.css(c[0], "display");
        return c.detach(), d
    }

    function E(a) {
        var b = da,
            c = jb[a];
        return c || (c = D(a, b), "none" !== c && c || (ib = (ib || na("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (ib[0].contentWindow || ib[0].contentDocument).document, b.write(), b.close(), c = D(a, b), ib.detach()), jb[a] = c), c
    }

    function F(a, b) { return { get: function() { return a() ? void delete this.get : (this.get = b).apply(this, arguments) } } }

    function G(a) {
        if (a in yb) return a;
        for (var b = a.charAt(0).toUpperCase() + a.slice(1), c = xb.length; c--;)
            if (a = xb[c] + b, a in yb) return a
    }

    function H(a, b) { for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = na._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && Ma(d) && (f[g] = na._data(d, "olddisplay", E(d.nodeName)))) : (e = Ma(d), (c && "none" !== c || !e) && na._data(d, "olddisplay", e ? c : na.css(d, "display")))); for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none")); return a }

    function I(a, b, c) { var d = ub.exec(b); return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b }

    function J(a, b, c, d, e) { for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += na.css(a, c + La[f], !0, e)), d ? ("content" === c && (g -= na.css(a, "padding" + La[f], !0, e)), "margin" !== c && (g -= na.css(a, "border" + La[f] + "Width", !0, e))) : (g += na.css(a, "padding" + La[f], !0, e), "padding" !== c && (g += na.css(a, "border" + La[f] + "Width", !0, e))); return g }

    function K(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = ob(a),
            g = la.boxSizing && "border-box" === na.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = pb(a, b, f), (0 > e || null == e) && (e = a.style[b]), lb.test(e)) return e;
            d = g && (la.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + J(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function L(a, b, c, d, e) { return new L.prototype.init(a, b, c, d, e) }

    function M() { return a.setTimeout(function() { zb = void 0 }), zb = na.now() }

    function N(a, b) {
        var c, d = { height: a },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = La[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function O(a, b, c) {
        for (var d, e = (R.tweeners[b] || []).concat(R.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function P(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            n = a.style,
            o = a.nodeType && Ma(a),
            p = na._data(a, "fxshow");
        c.queue || (h = na._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() { h.unqueued || i() }), h.unqueued++, l.always(function() { l.always(function() { h.unqueued--, na.queue(a, "fx").length || h.empty.fire() }) })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = na.css(a, "display"), k = "none" === j ? na._data(a, "olddisplay") || E(a.nodeName) : j, "inline" === k && "none" === na.css(a, "float") && (la.inlineBlockNeedsLayout && "inline" !== E(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")), c.overflow && (n.overflow = "hidden", la.shrinkWrapBlocks() || l.always(function() { n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2] }));
        for (d in b)
            if (e = b[d], Bb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                    if ("show" !== e || !p || void 0 === p[d]) continue;
                    o = !0
                }
                m[d] = p && p[d] || na.style(a, d)
            } else j = void 0;
        if (na.isEmptyObject(m)) "inline" === ("none" === j ? E(a.nodeName) : j) && (n.display = j);
        else {
            p ? "hidden" in p && (o = p.hidden) : p = na._data(a, "fxshow", {}), f && (p.hidden = !o), o ? na(a).show() : l.done(function() { na(a).hide() }), l.done(function() {
                var b;
                na._removeData(a, "fxshow");
                for (b in m) na.style(a, b, m[b])
            });
            for (d in m) g = O(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function Q(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = na.camelCase(c), e = b[d], f = a[c], na.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = na.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e
    }

    function R(a, b, c) {
        var d, e, f = 0,
            g = R.prefilters.length,
            h = na.Deferred().always(function() { delete i.elem }),
            i = function() { if (e) return !1; for (var b = zb || M(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1) },
            j = h.promise({
                elem: a,
                props: na.extend({}, b),
                opts: na.extend(!0, { specialEasing: {}, easing: na.easing._default }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: zb || M(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) { var d = na.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (Q(k, j.opts.specialEasing); g > f; f++)
            if (d = R.prefilters[f].call(j, a, k, j.opts)) return na.isFunction(d.stop) && (na._queueHooks(j.elem, j.opts.queue).stop = na.proxy(d.stop, d)), d;
        return na.map(k, O, j), na.isFunction(j.opts.start) && j.opts.start.call(a, j), na.fx.timer(na.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function S(a) { return na.attr(a, "class") || "" }

    function T(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(Da) || [];
            if (na.isFunction(c))
                for (; d = f[e++];) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function U(a, b, c, d) {
        function e(h) { var i; return f[h] = !0, na.each(a[h] || [], function(a, h) { var j = h(b, c, d); return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1) }), i }
        var f = {},
            g = a === $b;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function V(a, b) { var c, d, e = na.ajaxSettings.flatOptions || {}; for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]); return c && na.extend(!0, a, c), a }

    function W(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes;
            "*" === i[0];) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) { i.unshift(g); break }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) { f = g; break }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function X(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } }
        }
        return { state: "success", data: b }
    }

    function Y(a) { return a.style && a.style.display || na.css(a, "display") }

    function Z(a) {
        if (!na.contains(a.ownerDocument || da, a)) return !0;
        for (; a && 1 === a.nodeType;) {
            if ("none" === Y(a) || "hidden" === a.type) return !0;
            a = a.parentNode
        }
        return !1
    }

    function $(a, b, c, d) {
        var e;
        if (na.isArray(b)) na.each(b, function(b, e) { c || dc.test(a) ? d(a, e) : $(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d) });
        else if (c || "object" !== na.type(b)) d(a, b);
        else
            for (e in b) $(a + "[" + e + "]", b[e], c, d)
    }

    function _() { try { return new a.XMLHttpRequest } catch (b) {} }

    function aa() { try { return new a.ActiveXObject("Microsoft.XMLHTTP") } catch (b) {} }

    function ba(a) { return na.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1 }
    var ca = [],
        da = a.document,
        ea = ca.slice,
        fa = ca.concat,
        ga = ca.push,
        ha = ca.indexOf,
        ia = {},
        ja = ia.toString,
        ka = ia.hasOwnProperty,
        la = {},
        ma = "1.12.4",
        na = function(a, b) { return new na.fn.init(a, b) },
        oa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        pa = /^-ms-/,
        qa = /-([\da-z])/gi,
        ra = function(a, b) { return b.toUpperCase() };
    na.fn = na.prototype = {
        jquery: ma,
        constructor: na,
        selector: "",
        length: 0,
        toArray: function() { return ea.call(this) },
        get: function(a) { return null != a ? 0 > a ? this[a + this.length] : this[a] : ea.call(this) },
        pushStack: function(a) { var b = na.merge(this.constructor(), a); return b.prevObject = this, b.context = this.context, b },
        each: function(a) { return na.each(this, a) },
        map: function(a) { return this.pushStack(na.map(this, function(b, c) { return a.call(b, c, b) })) },
        slice: function() { return this.pushStack(ea.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() { return this.prevObject || this.constructor() },
        push: ga,
        sort: ca.sort,
        splice: ca.splice
    }, na.extend = na.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || na.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (na.isPlainObject(c) || (b = na.isArray(c))) ? (b ? (b = !1, f = a && na.isArray(a) ? a : []) : f = a && na.isPlainObject(a) ? a : {}, g[d] = na.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, na.extend({
        expando: "jQuery" + (ma + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) { throw new Error(a) },
        noop: function() {},
        isFunction: function(a) { return "function" === na.type(a) },
        isArray: Array.isArray || function(a) { return "array" === na.type(a) },
        isWindow: function(a) { return null != a && a == a.window },
        isNumeric: function(a) { var b = a && a.toString(); return !na.isArray(a) && b - parseFloat(b) + 1 >= 0 },
        isEmptyObject: function(a) { var b; for (b in a) return !1; return !0 },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== na.type(a) || a.nodeType || na.isWindow(a)) return !1;
            try { if (a.constructor && !ka.call(a, "constructor") && !ka.call(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 }
            if (!la.ownFirst)
                for (b in a) return ka.call(a, b);
            for (b in a);
            return void 0 === b || ka.call(a, b)
        },
        type: function(a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? ia[ja.call(a)] || "object" : typeof a },
        globalEval: function(b) { b && na.trim(b) && (a.execScript || function(b) { a.eval.call(a, b) })(b) },
        camelCase: function(a) { return a.replace(pa, "ms-").replace(qa, ra) },
        nodeName: function(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() },
        each: function(a, b) {
            var d, e = 0;
            if (c(a))
                for (d = a.length; d > e && b.call(a[e], e, a[e]) !== !1; e++);
            else
                for (e in a)
                    if (b.call(a[e], e, a[e]) === !1) break; return a
        },
        trim: function(a) { return null == a ? "" : (a + "").replace(oa, "") },
        makeArray: function(a, b) { var d = b || []; return null != a && (c(Object(a)) ? na.merge(d, "string" == typeof a ? [a] : a) : ga.call(d, a)), d },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (ha) return ha.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d;) a[e++] = b[d++];
            if (c !== c)
                for (; void 0 !== b[d];) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]); return e },
        map: function(a, b, d) {
            var e, f, g = 0,
                h = [];
            if (c(a))
                for (e = a.length; e > g; g++) f = b(a[g], g, d), null != f && h.push(f);
            else
                for (g in a) f = b(a[g], g, d), null != f && h.push(f);
            return fa.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) { var c, d, e; return "string" == typeof b && (e = a[b], b = a, a = e), na.isFunction(a) ? (c = ea.call(arguments, 2), d = function() { return a.apply(b || this, c.concat(ea.call(arguments))) }, d.guid = a.guid = a.guid || na.guid++, d) : void 0 },
        now: function() { return +new Date },
        support: la
    }), "function" == typeof Symbol && (na.fn[Symbol.iterator] = ca[Symbol.iterator]), na.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) { ia["[object " + b + "]"] = b.toLowerCase() });
    var sa = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o = b && b.ownerDocument,
                p = b ? b.nodeType : 9;
            if (c = c || [], "string" != typeof a || !a || 1 !== p && 9 !== p && 11 !== p) return c;
            if (!d && ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, I)) {
                if (11 !== p && (j = ra.exec(a)))
                    if (e = j[1]) { if (9 === p) { if (!(g = b.getElementById(e))) return c; if (g.id === e) return c.push(g), c } else if (o && (g = o.getElementById(e)) && M(b, g) && g.id === e) return c.push(g), c } else { if (j[2]) return $.apply(c, b.getElementsByTagName(a)), c; if ((e = j[3]) && v.getElementsByClassName && b.getElementsByClassName) return $.apply(c, b.getElementsByClassName(e)), c }
                if (v.qsa && !T[a + " "] && (!J || !J.test(a))) {
                    if (1 !== p) o = b, n = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        for ((h = b.getAttribute("id")) ? h = h.replace(ta, "\\$&") : b.setAttribute("id", h = N), l = z(a), f = l.length, i = ma.test(h) ? "#" + h : "[id='" + h + "']"; f--;) l[f] = i + " " + m(l[f]);
                        n = l.join(","), o = sa.test(a) && k(b.parentNode) || b
                    }
                    if (n) try { return $.apply(c, o.querySelectorAll(n)), c } catch (q) {} finally { h === N && b.removeAttribute("id") }
                }
            }
            return B(a.replace(ha, "$1"), b, c, d)
        }

        function c() {
            function a(c, d) { return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d }
            var b = [];
            return a
        }

        function d(a) { return a[N] = !0, a }

        function e(a) { var b = G.createElement("div"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } }

        function f(a, b) { for (var c = a.split("|"), d = c.length; d--;) w.attrHandle[c[d]] = b }

        function g(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function h(a) { return function(b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } }

        function i(a) { return function(b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } }

        function j(a) { return d(function(b) { return b = +b, d(function(c, d) { for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) }

        function k(a) { return a && "undefined" != typeof a.getElementsByTagName && a }

        function l() {}

        function m(a) { for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value; return d }

        function n(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = Q++;
            return b.first ? function(b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j, k = [P, f];
                if (g) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) { if (j = b[N] || (b[N] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === P && h[1] === f) return k[2] = h[2]; if (i[d] = k, k[2] = a(b, c, g)) return !0 }
            }
        }

        function o(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function p(a, c, d) { for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d); return d }

        function q(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h))); return g }

        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    r = d || p(b || "*", h.nodeType ? [h] : h, []),
                    s = !a || !d && b ? r : q(r, m, a, h, i),
                    t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e)
                    for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
            })
        }

        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) { return a === b }, g, !0), j = n(function(a) { return aa(b, a) > -1 }, g, !0), k = [function(a, c, d) { var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d)); return b = null, e }]; e > h; h++)
                if (c = w.relative[a[h].type]) k = [n(o(k), c)];
                else {
                    if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) { for (d = ++h; e > d && !w.relative[a[d].type]; d++); return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({ value: " " === a[h - 2].type ? "*" : "" })).replace(ha, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a)) }
                    k.push(c)
                }
            return o(k)
        }

        function t(a, c) {
            var e = c.length > 0,
                f = a.length > 0,
                g = function(d, g, h, i, j) {
                    var k, l, m, n = 0,
                        o = "0",
                        p = d && [],
                        r = [],
                        s = C,
                        t = d || f && w.find.TAG("*", j),
                        u = P += null == s ? 1 : Math.random() || .1,
                        v = t.length;
                    for (j && (C = g === G || g || j); o !== v && null != (k = t[o]); o++) {
                        if (f && k) {
                            for (l = 0, g || k.ownerDocument === G || (F(k), h = !I); m = a[l++];)
                                if (m(k, g || G, h)) { i.push(k); break }
                            j && (P = u)
                        }
                        e && ((k = !m && k) && n--, d && p.push(k))
                    }
                    if (n += o, e && o !== n) {
                        for (l = 0; m = c[l++];) m(p, r, g, h);
                        if (d) {
                            if (n > 0)
                                for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
                            r = q(r)
                        }
                        $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                    }
                    return j && (P = u, C = s), p
                };
            return e ? d(g) : g
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
            O = a.document,
            P = 0,
            Q = 0,
            R = c(),
            S = c(),
            T = c(),
            U = function(a, b) { return a === b && (E = !0), 0 },
            V = 1 << 31,
            W = {}.hasOwnProperty,
            X = [],
            Y = X.pop,
            Z = X.push,
            $ = X.push,
            _ = X.slice,
            aa = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ca = "[\\x20\\t\\r\\n\\f]",
            da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ea = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + da + "))|)" + ca + "*\\]",
            fa = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ea + ")*)|.*)\\)|)",
            ga = new RegExp(ca + "+", "g"),
            ha = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
            ia = new RegExp("^" + ca + "*," + ca + "*"),
            ja = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
            ka = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
            la = new RegExp(fa),
            ma = new RegExp("^" + da + "$"),
            na = { ID: new RegExp("^#(" + da + ")"), CLASS: new RegExp("^\\.(" + da + ")"), TAG: new RegExp("^(" + da + "|[*])"), ATTR: new RegExp("^" + ea), PSEUDO: new RegExp("^" + fa), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"), bool: new RegExp("^(?:" + ba + ")$", "i"), needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i") },
            oa = /^(?:input|select|textarea|button)$/i,
            pa = /^h\d$/i,
            qa = /^[^{]+\{\s*\[native \w/,
            ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            sa = /[+~]/,
            ta = /'|\\/g,
            ua = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
            va = function(a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) },
            wa = function() { F() };
        try { $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType } catch (xa) {
            $ = {
                apply: X.length ? function(a, b) { Z.apply(a, _.call(b)) } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        v = b.support = {}, y = b.isXML = function(a) { var b = a && (a.ownerDocument || a).documentElement; return b ? "HTML" !== b.nodeName : !1 }, F = b.setDocument = function(a) {
            var b, c, d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = G.documentElement, I = !y(G), (c = G.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", wa, !1) : c.attachEvent && c.attachEvent("onunload", wa)), v.attributes = e(function(a) { return a.className = "i", !a.getAttribute("className") }), v.getElementsByTagName = e(function(a) { return a.appendChild(G.createComment("")), !a.getElementsByTagName("*").length }), v.getElementsByClassName = qa.test(G.getElementsByClassName), v.getById = e(function(a) { return H.appendChild(a).id = N, !G.getElementsByName || !G.getElementsByName(N).length }), v.getById ? (w.find.ID = function(a, b) { if ("undefined" != typeof b.getElementById && I) { var c = b.getElementById(a); return c ? [c] : [] } }, w.filter.ID = function(a) { var b = a.replace(ua, va); return function(a) { return a.getAttribute("id") === b } }) : (delete w.find.ID, w.filter.ID = function(a) { var b = a.replace(ua, va); return function(a) { var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id"); return c && c.value === b } }), w.find.TAG = v.getElementsByTagName ? function(a, b) { return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0 } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) { for (; c = f[e++];) 1 === c.nodeType && d.push(c); return d }
                return f
            }, w.find.CLASS = v.getElementsByClassName && function(a, b) { return "undefined" != typeof b.getElementsByClassName && I ? b.getElementsByClassName(a) : void 0 }, K = [], J = [], (v.qsa = qa.test(G.querySelectorAll)) && (e(function(a) { H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]") }), e(function(a) {
                var b = G.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
            })), (v.matchesSelector = qa.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) { v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", fa) }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = qa.test(H.compareDocumentPosition), M = b || qa.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, U = b ? function(a, b) { if (a === b) return E = !0, 0; var c = !a.compareDocumentPosition - !b.compareDocumentPosition; return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === G || a.ownerDocument === O && M(O, a) ? -1 : b === G || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1) } : function(a, b) {
                if (a === b) return E = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    h = [a],
                    i = [b];
                if (!e || !f) return a === G ? -1 : b === G ? 1 : e ? -1 : f ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                if (e === f) return g(a, b);
                for (c = a; c = c.parentNode;) h.unshift(c);
                for (c = b; c = c.parentNode;) i.unshift(c);
                for (; h[d] === i[d];) d++;
                return d ? g(h[d], i[d]) : h[d] === O ? -1 : i[d] === O ? 1 : 0
            }, G) : G
        }, b.matches = function(a, c) { return b(a, null, null, c) }, b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(ka, "='$1']"), v.matchesSelector && I && !T[c + " "] && (!K || !K.test(c)) && (!J || !J.test(c))) try { var d = L.call(a, c); if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) {}
            return b(c, G, null, [a]).length > 0
        }, b.contains = function(a, b) { return (a.ownerDocument || a) !== G && F(a), M(a, b) }, b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()],
                d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, b.error = function(a) { throw new Error("Syntax error, unrecognized expression: " + a) }, b.uniqueSort = function(a) {
            var b, c = [],
                d = 0,
                e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) { for (; b = a[e++];) b === a[e] && (d = c.push(e)); for (; d--;) a.splice(c[d], 1) }
            return D = null, a
        }, x = b.getText = function(a) {
            var b, c = "",
                d = 0,
                e = a.nodeType;
            if (e) { if (1 === e || 9 === e || 11 === e) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += x(a) } else if (3 === e || 4 === e) return a.nodeValue } else
                for (; b = a[d++];) c += x(b);
            return c
        }, w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: na,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: { ATTR: function(a) { return a[1] = a[1].replace(ua, va), a[3] = (a[3] || a[4] || a[5] || "").replace(ua, va), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function(a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a }, PSEUDO: function(a) { var b, c = !a[6] && a[2]; return na.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && la.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } },
            filter: {
                TAG: function(a) { var b = a.replace(ua, va).toLowerCase(); return "*" === a ? function() { return !0 } : function(a) { return a.nodeName && a.nodeName.toLowerCase() === b } },
                CLASS: function(a) { var b = R[a + " "]; return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) { return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "") }) },
                ATTR: function(a, c, d) { return function(e) { var f = b.attr(e, a); return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ga, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0 } },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) { return !!a.parentNode } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (m = b; m = m[p];)
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (m = q, l = m[N] || (m[N] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === P && j[1], t = n && j[2], m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop();)
                                    if (1 === m.nodeType && ++t && m === b) { k[a] = [P, n, t]; break }
                            } else if (s && (m = b, l = m[N] || (m[N] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === P && j[1], t = n), t === !1)
                                for (;
                                    (m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && (l = m[N] || (m[N] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [P, t]), m !== b)););
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, c) { var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a); return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) { for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g]) }) : function(a) { return f(a, 0, e) }) : f }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [],
                        c = [],
                        e = A(a.replace(ha, "$1"));
                    return e[N] ? d(function(a, b, c, d) { for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f)) }) : function(a, d, f) { return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop() }
                }),
                has: d(function(a) { return function(c) { return b(a, c).length > 0 } }),
                contains: d(function(a) {
                    return a = a.replace(ua, va),
                        function(b) { return (b.textContent || b.innerText || x(b)).indexOf(a) > -1 }
                }),
                lang: d(function(a) {
                    return ma.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(ua, va).toLowerCase(),
                        function(b) {
                            var c;
                            do { if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-") } while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id },
                root: function(a) { return a === H },
                focus: function(a) { return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) },
                enabled: function(a) { return a.disabled === !1 },
                disabled: function(a) { return a.disabled === !0 },
                checked: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected },
                selected: function(a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) { return !w.pseudos.empty(a) },
                header: function(a) { return pa.test(a.nodeName) },
                input: function(a) { return oa.test(a.nodeName) },
                button: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b },
                text: function(a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) },
                first: j(function() { return [0] }),
                last: j(function(a, b) { return [b - 1] }),
                eq: j(function(a, b, c) { return [0 > c ? c + b : c] }),
                even: j(function(a, b) { for (var c = 0; b > c; c += 2) a.push(c); return a }),
                odd: j(function(a, b) { for (var c = 1; b > c; c += 2) a.push(c); return a }),
                lt: j(function(a, b, c) { for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d); return a }),
                gt: j(function(a, b, c) { for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d); return a })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (u in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) w.pseudos[u] = h(u);
        for (u in { submit: !0, reset: !0 }) w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) { var d, e, f, g, h, i, j, k = S[a + " "]; if (k) return c ? 0 : k.slice(0); for (h = a, i = [], j = w.preFilter; h;) { d && !(e = ia.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ja.exec(h)) && (d = e.shift(), f.push({ value: d, type: e[0].replace(ha, " ") }), h = h.slice(d.length)); for (g in w.filter) !(e = na[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({ value: d, type: g, matches: e }), h = h.slice(d.length)); if (!d) break } return c ? h.length : h ? b.error(a) : S(a, i).slice(0) }, A = b.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)), f.selector = a
            }
            return f
        }, B = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a,
                l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(ua, va), b) || [])[0], !b) return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                }
                for (e = na.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
                    if ((i = w.find[h]) && (d = i(g.matches[0].replace(ua, va), sa.test(f[0].type) && k(b.parentNode) || b))) { if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c; break }
            }
            return (j || A(a, l))(d, b, !I, c, !b || sa.test(a) && k(b.parentNode) || b), c
        }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function(a) { return 1 & a.compareDocumentPosition(G.createElement("div")) }), e(function(a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || f("type|href|height|width", function(a, b, c) { return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), v.attributes && e(function(a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || f("value", function(a, b, c) { return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue }), e(function(a) { return null == a.getAttribute("disabled") }) || f(ba, function(a, b, c) { var d; return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), b
    }(a);
    na.find = sa, na.expr = sa.selectors, na.expr[":"] = na.expr.pseudos, na.uniqueSort = na.unique = sa.uniqueSort, na.text = sa.getText, na.isXMLDoc = sa.isXML, na.contains = sa.contains;
    var ta = function(a, b, c) {
            for (var d = [], e = void 0 !== c;
                (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (e && na(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        ua = function(a, b) { for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a); return c },
        va = na.expr.match.needsContext,
        wa = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        xa = /^.[^:#\[\.,]*$/;
    na.filter = function(a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? na.find.matchesSelector(d, a) ? [d] : [] : na.find.matches(a, na.grep(b, function(a) { return 1 === a.nodeType })) }, na.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(na(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (na.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) na.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? na.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) { return this.pushStack(d(this, a || [], !1)) },
        not: function(a) { return this.pushStack(d(this, a || [], !0)) },
        is: function(a) { return !!d(this, "string" == typeof a && va.test(a) ? na(a) : a || [], !1).length }
    });
    var ya, za = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        Aa = na.fn.init = function(a, b, c) {
            var d, e;
            if (!a) return this;
            if (c = c || ya, "string" == typeof a) {
                if (d = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : za.exec(a), !d || !d[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (d[1]) {
                    if (b = b instanceof na ? b[0] : b, na.merge(this, na.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : da, !0)), wa.test(d[1]) && na.isPlainObject(b))
                        for (d in b) na.isFunction(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
                    return this
                }
                if (e = da.getElementById(d[2]), e && e.parentNode) {
                    if (e.id !== d[2]) return ya.find(a);
                    this.length = 1, this[0] = e
                }
                return this.context = da, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : na.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(na) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), na.makeArray(a, this))
        };
    Aa.prototype = na.fn, ya = na(da);
    var Ba = /^(?:parents|prev(?:Until|All))/,
        Ca = { children: !0, contents: !0, next: !0, prev: !0 };
    na.fn.extend({
        has: function(a) {
            var b, c = na(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (na.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = va.test(a) || "string" != typeof a ? na(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && na.find.matchesSelector(c, a))) { f.push(c); break }
            return this.pushStack(f.length > 1 ? na.uniqueSort(f) : f)
        },
        index: function(a) { return a ? "string" == typeof a ? na.inArray(this[0], na(a)) : na.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(a, b) { return this.pushStack(na.uniqueSort(na.merge(this.get(), na(a, b)))) },
        addBack: function(a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) }
    }), na.each({ parent: function(a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function(a) { return ta(a, "parentNode") }, parentsUntil: function(a, b, c) { return ta(a, "parentNode", c) }, next: function(a) { return e(a, "nextSibling") }, prev: function(a) { return e(a, "previousSibling") }, nextAll: function(a) { return ta(a, "nextSibling") }, prevAll: function(a) { return ta(a, "previousSibling") }, nextUntil: function(a, b, c) { return ta(a, "nextSibling", c) }, prevUntil: function(a, b, c) { return ta(a, "previousSibling", c) }, siblings: function(a) { return ua((a.parentNode || {}).firstChild, a) }, children: function(a) { return ua(a.firstChild) }, contents: function(a) { return na.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : na.merge([], a.childNodes) } }, function(a, b) { na.fn[a] = function(c, d) { var e = na.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = na.filter(d, e)), this.length > 1 && (Ca[a] || (e = na.uniqueSort(e)), Ba.test(a) && (e = e.reverse())), this.pushStack(e) } });
    var Da = /\S+/g;
    na.Callbacks = function(a) {
        a = "string" == typeof a ? f(a) : na.extend({}, a);
        var b, c, d, e, g = [],
            h = [],
            i = -1,
            j = function() {
                for (e = a.once, d = b = !0; h.length; i = -1)
                    for (c = h.shift(); ++i < g.length;) g[i].apply(c[0], c[1]) === !1 && a.stopOnFalse && (i = g.length, c = !1);
                a.memory || (c = !1), b = !1, e && (g = c ? [] : "")
            },
            k = {
                add: function() { return g && (c && !b && (i = g.length - 1, h.push(c)), function d(b) { na.each(b, function(b, c) { na.isFunction(c) ? a.unique && k.has(c) || g.push(c) : c && c.length && "string" !== na.type(c) && d(c) }) }(arguments), c && !b && j()), this },
                remove: function() {
                    return na.each(arguments, function(a, b) {
                        for (var c;
                            (c = na.inArray(b, g, c)) > -1;) g.splice(c, 1), i >= c && i--
                    }), this
                },
                has: function(a) { return a ? na.inArray(a, g) > -1 : g.length > 0 },
                empty: function() { return g && (g = []), this },
                disable: function() { return e = h = [], g = c = "", this },
                disabled: function() { return !g },
                lock: function() { return e = !0, c || k.disable(), this },
                locked: function() { return !!e },
                fireWith: function(a, c) { return e || (c = c || [], c = [a, c.slice ? c.slice() : c], h.push(c), b || j()), this },
                fire: function() { return k.fireWith(this, arguments), this },
                fired: function() { return !!d }
            };
        return k
    }, na.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", na.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", na.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", na.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() { return c },
                    always: function() { return e.done(arguments).fail(arguments), this },
                    then: function() {
                        var a = arguments;
                        return na.Deferred(function(c) {
                            na.each(b, function(b, f) {
                                var g = na.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && na.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) { return null != a ? na.extend(a, d) : d }
                },
                e = {};
            return d.pipe = d.then, na.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() { c = h }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() { return e[f[0] + "With"](this === e ? d : this, arguments), this }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b, c, d, e = 0,
                f = ea.call(arguments),
                g = f.length,
                h = 1 !== g || a && na.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : na.Deferred(),
                j = function(a, c, d) { return function(e) { c[a] = this, d[a] = arguments.length > 1 ? ea.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d) } };
            if (g > 1)
                for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && na.isFunction(f[e].promise) ? f[e].promise().progress(j(e, c, b)).done(j(e, d, f)).fail(i.reject) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    });
    var Ea;
    na.fn.ready = function(a) { return na.ready.promise().done(a), this }, na.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) { a ? na.readyWait++ : na.ready(!0) },
        ready: function(a) {
            (a === !0 ? --na.readyWait : na.isReady) || (na.isReady = !0, a !== !0 && --na.readyWait > 0 || (Ea.resolveWith(da, [na]), na.fn.triggerHandler && (na(da).triggerHandler("ready"), na(da).off("ready"))))
        }
    }), na.ready.promise = function(b) {
        if (!Ea)
            if (Ea = na.Deferred(), "complete" === da.readyState || "loading" !== da.readyState && !da.documentElement.doScroll) a.setTimeout(na.ready);
            else if (da.addEventListener) da.addEventListener("DOMContentLoaded", h), a.addEventListener("load", h);
        else {
            da.attachEvent("onreadystatechange", h), a.attachEvent("onload", h);
            var c = !1;
            try { c = null == a.frameElement && da.documentElement } catch (d) {}
            c && c.doScroll && ! function e() {
                if (!na.isReady) {
                    try { c.doScroll("left") } catch (b) { return a.setTimeout(e, 50) }
                    g(), na.ready()
                }
            }()
        }
        return Ea.promise(b)
    }, na.ready.promise();
    var Fa;
    for (Fa in na(la)) break;
    la.ownFirst = "0" === Fa, la.inlineBlockNeedsLayout = !1, na(function() {
            var a, b, c, d;
            c = da.getElementsByTagName("body")[0], c && c.style && (b = da.createElement("div"), d = da.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", la.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
        }),
        function() {
            var a = da.createElement("div");
            la.deleteExpando = !0;
            try { delete a.test } catch (b) { la.deleteExpando = !1 }
            a = null
        }();
    var Ga = function(a) {
            var b = na.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        },
        Ha = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ia = /([A-Z])/g;
    na.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(a) { return a = a.nodeType ? na.cache[a[na.expando]] : a[na.expando], !!a && !j(a) }, data: function(a, b, c) { return k(a, b, c) }, removeData: function(a, b) { return l(a, b) }, _data: function(a, b, c) { return k(a, b, c, !0) }, _removeData: function(a, b) { return l(a, b, !0) } }), na.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = na.data(f), 1 === f.nodeType && !na._data(f, "parsedAttrs"))) {
                        for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = na.camelCase(d.slice(5)), i(f, d, e[d])));
                        na._data(f, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() { na.data(this, a) }) : arguments.length > 1 ? this.each(function() { na.data(this, a, b) }) : f ? i(f, a, na.data(f, a)) : void 0
            },
            removeData: function(a) { return this.each(function() { na.removeData(this, a) }) }
        }), na.extend({
            queue: function(a, b, c) { var d; return a ? (b = (b || "fx") + "queue", d = na._data(a, b), c && (!d || na.isArray(c) ? d = na._data(a, b, na.makeArray(c)) : d.push(c)), d || []) : void 0 },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = na.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = na._queueHooks(a, b),
                    g = function() { na.dequeue(a, b) };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) { var c = b + "queueHooks"; return na._data(a, c) || na._data(a, c, { empty: na.Callbacks("once memory").add(function() { na._removeData(a, b + "queue"), na._removeData(a, c) }) }) }
        }), na.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? na.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = na.queue(this, a, b);
                    na._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && na.dequeue(this, a)
                })
            },
            dequeue: function(a) { return this.each(function() { na.dequeue(this, a) }) },
            clearQueue: function(a) { return this.queue(a || "fx", []) },
            promise: function(a, b) {
                var c, d = 1,
                    e = na.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {--d || e.resolveWith(f, [f]) };
                for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = na._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        }),
        function() {
            var a;
            la.shrinkWrapBlocks = function() {
                if (null != a) return a;
                a = !1;
                var b, c, d;
                return c = da.getElementsByTagName("body")[0], c && c.style ? (b = da.createElement("div"), d = da.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(da.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
            }
        }();
    var Ja = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ka = new RegExp("^(?:([+-])=|)(" + Ja + ")([a-z%]*)$", "i"),
        La = ["Top", "Right", "Bottom", "Left"],
        Ma = function(a, b) { return a = b || a, "none" === na.css(a, "display") || !na.contains(a.ownerDocument, a) },
        Na = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === na.type(c)) { e = !0; for (h in c) Na(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, na.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) { return j.call(na(a), c) })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        Oa = /^(?:checkbox|radio)$/i,
        Pa = /<([\w:-]+)/,
        Qa = /^$|\/(?:java|ecma)script/i,
        Ra = /^\s+/,
        Sa = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    ! function() {
        var a = da.createElement("div"),
            b = da.createDocumentFragment(),
            c = da.createElement("input");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", la.leadingWhitespace = 3 === a.firstChild.nodeType, la.tbody = !a.getElementsByTagName("tbody").length, la.htmlSerialize = !!a.getElementsByTagName("link").length, la.html5Clone = "<:nav></:nav>" !== da.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), la.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", la.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = da.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), la.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, la.noCloneEvent = !!a.addEventListener, a[na.expando] = 1, la.attributes = !a.getAttribute(na.expando)
    }();
    var Ta = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: la.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] };
    Ta.optgroup = Ta.option, Ta.tbody = Ta.tfoot = Ta.colgroup = Ta.caption = Ta.thead, Ta.th = Ta.td;
    var Ua = /<|&#?\w+;/,
        Va = /<tbody/i;
    ! function() {
        var b, c, d = da.createElement("div");
        for (b in { submit: !0, change: !0, focusin: !0 }) c = "on" + b, (la[b] = c in a) || (d.setAttribute(c, "t"), la[b] = d.attributes[c].expando === !1);
        d = null
    }();
    var Wa = /^(?:input|select|textarea)$/i,
        Xa = /^key/,
        Ya = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Za = /^(?:focusinfocus|focusoutblur)$/,
        $a = /^([^.]*)(?:\.(.+)|)/;
    na.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = na._data(a);
            if (q) {
                for (c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = na.guid++), (g = q.events) || (g = q.events = {}), (k = q.handle) || (k = q.handle = function(a) { return "undefined" == typeof na || a && na.event.triggered === a.type ? void 0 : na.event.dispatch.apply(k.elem, arguments) }, k.elem = a), b = (b || "").match(Da) || [""], h = b.length; h--;) f = $a.exec(b[h]) || [], n = p = f[1], o = (f[2] || "").split(".").sort(), n && (j = na.event.special[n] || {}, n = (e ? j.delegateType : j.bindType) || n, j = na.event.special[n] || {}, l = na.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && na.expr.match.needsContext.test(e), namespace: o.join(".") }, i), (m = g[n]) || (m = g[n] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, o, k) !== !1 || (a.addEventListener ? a.addEventListener(n, k, !1) : a.attachEvent && a.attachEvent("on" + n, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), na.event.global[n] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = na.hasData(a) && na._data(a);
            if (q && (k = q.events)) {
                for (b = (b || "").match(Da) || [""], j = b.length; j--;)
                    if (h = $a.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = na.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;) g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || na.removeEvent(a, n, q.handle), delete k[n])
                    } else
                        for (n in k) na.event.remove(a, n + b[j], c, d, !0);
                na.isEmptyObject(k) && (delete q.handle, na._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || da],
                n = ka.call(b, "type") ? b.type : b,
                o = ka.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = k = d = d || da, 3 !== d.nodeType && 8 !== d.nodeType && !Za.test(n + na.event.triggered) && (n.indexOf(".") > -1 && (o = n.split("."), n = o.shift(), o.sort()), g = n.indexOf(":") < 0 && "on" + n, b = b[na.expando] ? b : new na.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : na.makeArray(c, [b]), j = na.event.special[n] || {}, e || !j.trigger || j.trigger.apply(d, c) !== !1)) {
                if (!e && !j.noBubble && !na.isWindow(d)) {
                    for (i = j.delegateType || n, Za.test(i + n) || (h = h.parentNode); h; h = h.parentNode) m.push(h), k = h;
                    k === (d.ownerDocument || da) && m.push(k.defaultView || k.parentWindow || a)
                }
                for (l = 0;
                    (h = m[l++]) && !b.isPropagationStopped();) b.type = l > 1 ? i : j.bindType || n, f = (na._data(h, "events") || {})[b.type] && na._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && Ga(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = n, !e && !b.isDefaultPrevented() && (!j._default || j._default.apply(m.pop(), c) === !1) && Ga(d) && g && d[n] && !na.isWindow(d)) {
                    k = d[g], k && (d[g] = null), na.event.triggered = n;
                    try { d[n]() } catch (p) {}
                    na.event.triggered = void 0, k && (d[g] = k)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = na.event.fix(a);
            var b, c, d, e, f, g = [],
                h = ea.call(arguments),
                i = (na._data(this, "events") || {})[a.type] || [],
                j = na.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = na.event.handlers.call(this, a, i), b = 0;
                    (e = g[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = e.elem, c = 0;
                        (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(f.namespace) || (a.handleObj = f, a.data = f.data, d = ((na.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? na(e, this).index(i) > -1 : na.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({ elem: i, handlers: d })
                    }
            return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g
        },
        fix: function(a) {
            if (a[na.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Ya.test(e) ? this.mouseHooks : Xa.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new na.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || da), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(a, b) { return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a } },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button,
                    g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || da, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== u() && this.focus) try { return this.focus(), !1 } catch (a) {} }, delegateType: "focusin" }, blur: { trigger: function() { return this === u() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() { return na.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0 }, _default: function(a) { return na.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function(a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } },
        simulate: function(a, b, c) {
            var d = na.extend(new na.Event, c, { type: a, isSimulated: !0 });
            na.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
        }
    }, na.removeEvent = da.removeEventListener ? function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c) } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
    }, na.Event = function(a, b) { return this instanceof na.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? s : t) : this.type = a, b && na.extend(this, b), this.timeStamp = a && a.timeStamp || na.now(), void(this[na.expando] = !0)) : new na.Event(a, b) }, na.Event.prototype = {
        constructor: na.Event,
        isDefaultPrevented: t,
        isPropagationStopped: t,
        isImmediatePropagationStopped: t,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = s, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = s, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = s, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, na.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(a, b) {
        na.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || na.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), la.submit || (na.event.special.submit = {
        setup: function() {
            return na.nodeName(this, "form") ? !1 : void na.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = na.nodeName(b, "input") || na.nodeName(b, "button") ? na.prop(b, "form") : void 0;
                c && !na._data(c, "submit") && (na.event.add(c, "submit._submit", function(a) { a._submitBubble = !0 }), na._data(c, "submit", !0))
            })
        },
        postDispatch: function(a) { a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && na.event.simulate("submit", this.parentNode, a)) },
        teardown: function() { return na.nodeName(this, "form") ? !1 : void na.event.remove(this, "._submit") }
    }), la.change || (na.event.special.change = {
        setup: function() {
            return Wa.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (na.event.add(this, "propertychange._change", function(a) { "checked" === a.originalEvent.propertyName && (this._justChanged = !0) }), na.event.add(this, "click._change", function(a) { this._justChanged && !a.isTrigger && (this._justChanged = !1), na.event.simulate("change", this, a) })), !1) : void na.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                Wa.test(b.nodeName) && !na._data(b, "change") && (na.event.add(b, "change._change", function(a) {!this.parentNode || a.isSimulated || a.isTrigger || na.event.simulate("change", this.parentNode, a) }), na._data(b, "change", !0))
            })
        },
        handle: function(a) { var b = a.target; return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0 },
        teardown: function() { return na.event.remove(this, "._change"), !Wa.test(this.nodeName) }
    }), la.focusin || na.each({ focus: "focusin", blur: "focusout" }, function(a, b) {
        var c = function(a) { na.event.simulate(b, a.target, na.event.fix(a)) };
        na.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = na._data(d, b);
                e || d.addEventListener(a, c, !0), na._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = na._data(d, b) - 1;
                e ? na._data(d, b, e) : (d.removeEventListener(a, c, !0), na._removeData(d, b))
            }
        }
    }), na.fn.extend({ on: function(a, b, c, d) { return v(this, a, b, c, d) }, one: function(a, b, c, d) { return v(this, a, b, c, d, 1) }, off: function(a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, na(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = t), this.each(function() { na.event.remove(this, a, c, b) }) }, trigger: function(a, b) { return this.each(function() { na.event.trigger(a, b, this) }) }, triggerHandler: function(a, b) { var c = this[0]; return c ? na.event.trigger(a, b, c, !0) : void 0 } });
    var _a = / jQuery\d+="(?:null|\d+)"/g,
        ab = new RegExp("<(?:" + Sa + ")[\\s/>]", "i"),
        bb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        cb = /<script|<style|<link/i,
        db = /checked\s*(?:[^=]|=\s*.checked.)/i,
        eb = /^true\/(.*)/,
        fb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        gb = n(da),
        hb = gb.appendChild(da.createElement("div"));
    na.extend({
        htmlPrefilter: function(a) { return a.replace(bb, "<$1></$2>") },
        clone: function(a, b, c) {
            var d, e, f, g, h, i = na.contains(a.ownerDocument, a);
            if (la.html5Clone || na.isXMLDoc(a) || !ab.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (hb.innerHTML = a.outerHTML, hb.removeChild(f = hb.firstChild)), !(la.noCloneEvent && la.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || na.isXMLDoc(a)))
                for (d = o(f), h = o(a), g = 0; null != (e = h[g]); ++g) d[g] && A(e, d[g]);
            if (b)
                if (c)
                    for (h = h || o(a), d = d || o(f), g = 0; null != (e = h[g]); g++) z(e, d[g]);
                else z(a, f);
            return d = o(f, "script"), d.length > 0 && p(d, !i && o(a, "script")), d = h = e = null, f
        },
        cleanData: function(a, b) {
            for (var c, d, e, f, g = 0, h = na.expando, i = na.cache, j = la.attributes, k = na.event.special; null != (c = a[g]); g++)
                if ((b || Ga(c)) && (e = c[h], f = e && i[e])) {
                    if (f.events)
                        for (d in f.events) k[d] ? na.event.remove(c, d) : na.removeEvent(c, d, f.handle);
                    i[e] && (delete i[e], j || "undefined" == typeof c.removeAttribute ? c[h] = void 0 : c.removeAttribute(h), ca.push(e))
                }
        }
    }), na.fn.extend({
        domManip: B,
        detach: function(a) { return C(this, a, !0) },
        remove: function(a) { return C(this, a) },
        text: function(a) { return Na(this, function(a) { return void 0 === a ? na.text(this) : this.empty().append((this[0] && this[0].ownerDocument || da).createTextNode(a)) }, null, a, arguments.length) },
        append: function() {
            return B(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = w(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return B(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = w(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() { return B(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this) }) },
        after: function() { return B(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && na.cleanData(o(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                a.options && na.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) { return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() { return na.clone(this, a, b) }) },
        html: function(a) {
            return Na(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(_a, "") : void 0;
                if ("string" == typeof a && !cb.test(a) && (la.htmlSerialize || !ab.test(a)) && (la.leadingWhitespace || !Ra.test(a)) && !Ta[(Pa.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = na.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (na.cleanData(o(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return B(this, arguments, function(b) {
                var c = this.parentNode;
                na.inArray(this, a) < 0 && (na.cleanData(o(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), na.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a, b) { na.fn[a] = function(a) { for (var c, d = 0, e = [], f = na(a), g = f.length - 1; g >= d; d++) c = d === g ? this : this.clone(!0), na(f[d])[b](c), ga.apply(e, c.get()); return this.pushStack(e) } });
    var ib, jb = { HTML: "block", BODY: "block" },
        kb = /^margin/,
        lb = new RegExp("^(" + Ja + ")(?!px)[a-z%]+$", "i"),
        mb = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        nb = da.documentElement;
    ! function() {
        function b() {
            var b, k, l = da.documentElement;
            l.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", c = e = h = !1, d = g = !0, a.getComputedStyle && (k = a.getComputedStyle(j), c = "1%" !== (k || {}).top, h = "2px" === (k || {}).marginLeft, e = "4px" === (k || { width: "4px" }).width, j.style.marginRight = "50%", d = "4px" === (k || { marginRight: "4px" }).marginRight, b = j.appendChild(da.createElement("div")), b.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", b.style.marginRight = b.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(b) || {}).marginRight), j.removeChild(b)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", b = j.getElementsByTagName("td"), b[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === b[0].offsetHeight, f && (b[0].style.display = "", b[1].style.display = "none", f = 0 === b[0].offsetHeight)), l.removeChild(i)
        }
        var c, d, e, f, g, h, i = da.createElement("div"),
            j = da.createElement("div");
        j.style && (j.style.cssText = "float:left;opacity:.5", la.opacity = "0.5" === j.style.opacity, la.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", la.clearCloneStyle = "content-box" === j.style.backgroundClip, i = da.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), la.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, na.extend(la, { reliableHiddenOffsets: function() { return null == c && b(), f }, boxSizingReliable: function() { return null == c && b(), e }, pixelMarginRight: function() { return null == c && b(), d }, pixelPosition: function() { return null == c && b(), c }, reliableMarginRight: function() { return null == c && b(), g }, reliableMarginLeft: function() { return null == c && b(), h } }))
    }();
    var ob, pb, qb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (ob = function(b) { var c = b.ownerDocument.defaultView; return c && c.opener || (c = a), c.getComputedStyle(b) }, pb = function(a, b, c) { var d, e, f, g, h = a.style; return c = c || ob(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || na.contains(a.ownerDocument, a) || (g = na.style(a, b)), c && !la.pixelMarginRight() && lb.test(g) && kb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + "" }) : nb.currentStyle && (ob = function(a) { return a.currentStyle }, pb = function(a, b, c) { var d, e, f, g, h = a.style; return c = c || ob(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), lb.test(g) && !qb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto" });
    var rb = /alpha\([^)]*\)/i,
        sb = /opacity\s*=\s*([^)]*)/i,
        tb = /^(none|table(?!-c[ea]).+)/,
        ub = new RegExp("^(" + Ja + ")(.*)$", "i"),
        vb = { position: "absolute", visibility: "hidden", display: "block" },
        wb = { letterSpacing: "0", fontWeight: "400" },
        xb = ["Webkit", "O", "Moz", "ms"],
        yb = da.createElement("div").style;
    na.extend({
        cssHooks: { opacity: { get: function(a, b) { if (b) { var c = pb(a, "opacity"); return "" === c ? "1" : c } } } },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { float: la.cssFloat ? "cssFloat" : "styleFloat" },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = na.camelCase(b),
                    i = a.style;
                if (b = na.cssProps[h] || (na.cssProps[h] = G(h) || h), g = na.cssHooks[b] || na.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Ka.exec(c)) && e[1] && (c = m(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (na.cssNumber[h] ? "" : "px")), la.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try { i[b] = c } catch (j) {}
            }
        },
        css: function(a, b, c, d) { var e, f, g, h = na.camelCase(b); return b = na.cssProps[h] || (na.cssProps[h] = G(h) || h), g = na.cssHooks[b] || na.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = pb(a, b, d)), "normal" === f && b in wb && (f = wb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f }
    }), na.each(["height", "width"], function(a, b) { na.cssHooks[b] = { get: function(a, c, d) { return c ? tb.test(na.css(a, "display")) && 0 === a.offsetWidth ? mb(a, vb, function() { return K(a, b, d) }) : K(a, b, d) : void 0 }, set: function(a, c, d) { var e = d && ob(a); return I(a, c, d ? J(a, b, d, la.boxSizing && "border-box" === na.css(a, "boxSizing", !1, e), e) : 0) } } }), la.opacity || (na.cssHooks.opacity = {
        get: function(a, b) { return sb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "" },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = na.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === na.trim(f.replace(rb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = rb.test(f) ? f.replace(rb, e) : f + " " + e)
        }
    }), na.cssHooks.marginRight = F(la.reliableMarginRight, function(a, b) { return b ? mb(a, { display: "inline-block" }, pb, [a, "marginRight"]) : void 0 }), na.cssHooks.marginLeft = F(la.reliableMarginLeft, function(a, b) { return b ? (parseFloat(pb(a, "marginLeft")) || (na.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - mb(a, { marginLeft: 0 }, function() { return a.getBoundingClientRect().left }) : 0)) + "px" : void 0 }), na.each({ margin: "", padding: "", border: "Width" }, function(a, b) { na.cssHooks[a + b] = { expand: function(c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + La[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, kb.test(a) || (na.cssHooks[a + b].set = I) }), na.fn.extend({
        css: function(a, b) {
            return Na(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (na.isArray(b)) { for (d = ob(a), e = b.length; e > g; g++) f[b[g]] = na.css(a, b[g], !1, d); return f }
                return void 0 !== c ? na.style(a, b, c) : na.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() { return H(this, !0) },
        hide: function() { return H(this) },
        toggle: function(a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() { Ma(this) ? na(this).show() : na(this).hide() }) }
    }), na.Tween = L, L.prototype = { constructor: L, init: function(a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || na.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (na.cssNumber[c] ? "" : "px") }, cur: function() { var a = L.propHooks[this.prop]; return a && a.get ? a.get(this) : L.propHooks._default.get(this) }, run: function(a) { var b, c = L.propHooks[this.prop]; return this.options.duration ? this.pos = b = na.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : L.propHooks._default.set(this), this } }, L.prototype.init.prototype = L.prototype, L.propHooks = { _default: { get: function(a) { var b; return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = na.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) }, set: function(a) { na.fx.step[a.prop] ? na.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[na.cssProps[a.prop]] && !na.cssHooks[a.prop] ? a.elem[a.prop] = a.now : na.style(a.elem, a.prop, a.now + a.unit) } } }, L.propHooks.scrollTop = L.propHooks.scrollLeft = { set: function(a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, na.easing = { linear: function(a) { return a }, swing: function(a) { return .5 - Math.cos(a * Math.PI) / 2 }, _default: "swing" }, na.fx = L.prototype.init, na.fx.step = {};
    var zb, Ab, Bb = /^(?:toggle|show|hide)$/,
        Cb = /queueHooks$/;
    na.Animation = na.extend(R, { tweeners: { "*": [function(a, b) { var c = this.createTween(a, b); return m(c.elem, a, Ka.exec(b), c), c }] }, tweener: function(a, b) { na.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(Da); for (var c, d = 0, e = a.length; e > d; d++) c = a[d], R.tweeners[c] = R.tweeners[c] || [], R.tweeners[c].unshift(b) }, prefilters: [P], prefilter: function(a, b) { b ? R.prefilters.unshift(a) : R.prefilters.push(a) } }), na.speed = function(a, b, c) { var d = a && "object" == typeof a ? na.extend({}, a) : { complete: c || !c && b || na.isFunction(a) && a, duration: a, easing: c && b || b && !na.isFunction(b) && b }; return d.duration = na.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in na.fx.speeds ? na.fx.speeds[d.duration] : na.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() { na.isFunction(d.old) && d.old.call(this), d.queue && na.dequeue(this, d.queue) }, d }, na.fn.extend({
            fadeTo: function(a, b, c, d) { return this.filter(Ma).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) },
            animate: function(a, b, c, d) {
                var e = na.isEmptyObject(a),
                    f = na.speed(b, c, d),
                    g = function() {
                        var b = R(this, na.extend({}, a), f);
                        (e || na._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = na.timers,
                        g = na._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && Cb.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || na.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = na._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = na.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, na.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), na.each(["toggle", "show", "hide"], function(a, b) {
            var c = na.fn[b];
            na.fn[b] = function(a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(N(b, !0), a, d, e) }
        }), na.each({ slideDown: N("show"), slideUp: N("hide"), slideToggle: N("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a, b) { na.fn[a] = function(a, c, d) { return this.animate(b, a, c, d) } }), na.timers = [], na.fx.tick = function() {
            var a, b = na.timers,
                c = 0;
            for (zb = na.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || na.fx.stop(), zb = void 0
        }, na.fx.timer = function(a) { na.timers.push(a), a() ? na.fx.start() : na.timers.pop() }, na.fx.interval = 13, na.fx.start = function() { Ab || (Ab = a.setInterval(na.fx.tick, na.fx.interval)) }, na.fx.stop = function() { a.clearInterval(Ab), Ab = null }, na.fx.speeds = { slow: 600, fast: 200, _default: 400 }, na.fn.delay = function(b, c) {
            return b = na.fx ? na.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() { a.clearTimeout(e) }
            })
        },
        function() {
            var a, b = da.createElement("input"),
                c = da.createElement("div"),
                d = da.createElement("select"),
                e = d.appendChild(da.createElement("option"));
            c = da.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", la.getSetAttribute = "t" !== c.className, la.style = /top/.test(a.getAttribute("style")), la.hrefNormalized = "/a" === a.getAttribute("href"), la.checkOn = !!b.value, la.optSelected = e.selected, la.enctype = !!da.createElement("form").enctype, d.disabled = !0, la.optDisabled = !e.disabled, b = da.createElement("input"), b.setAttribute("value", ""), la.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), la.radioValue = "t" === b.value
        }();
    var Db = /\r/g,
        Eb = /[\x20\t\r\n\f]+/g;
    na.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = na.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, na(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : na.isArray(e) && (e = na.map(e, function(a) { return null == a ? "" : a + "" })), b = na.valHooks[this.type] || na.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            })) : e ? (b = na.valHooks[e.type] || na.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(Db, "") : null == c ? "" : c)) : void 0
        }
    }), na.extend({
        valHooks: {
            option: { get: function(a) { var b = na.find.attr(a, "value"); return null != b ? b : na.trim(na.text(a)).replace(Eb, " ") } },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && (la.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !na.nodeName(c.parentNode, "optgroup"))) {
                            if (b = na(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = na.makeArray(b), g = e.length; g--;)
                        if (d = e[g], na.inArray(na.valHooks.option.get(d), f) > -1) try { d.selected = c = !0 } catch (h) { d.scrollHeight } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), na.each(["radio", "checkbox"], function() { na.valHooks[this] = { set: function(a, b) { return na.isArray(b) ? a.checked = na.inArray(na(a).val(), b) > -1 : void 0 } }, la.checkOn || (na.valHooks[this].get = function(a) { return null === a.getAttribute("value") ? "on" : a.value }) });
    var Fb, Gb, Hb = na.expr.attrHandle,
        Ib = /^(?:checked|selected)$/i,
        Jb = la.getSetAttribute,
        Kb = la.input;
    na.fn.extend({ attr: function(a, b) { return Na(this, na.attr, a, b, arguments.length > 1) }, removeAttr: function(a) { return this.each(function() { na.removeAttr(this, a) }) } }), na.extend({
        attr: function(a, b, c) { var d, e, f = a.nodeType; return 3 !== f && 8 !== f && 2 !== f ? "undefined" == typeof a.getAttribute ? na.prop(a, b, c) : (1 === f && na.isXMLDoc(a) || (b = b.toLowerCase(), e = na.attrHooks[b] || (na.expr.match.bool.test(b) ? Gb : Fb)), void 0 !== c ? null === c ? void na.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = na.find.attr(a, b), null == d ? void 0 : d)) : void 0 },
        attrHooks: { type: { set: function(a, b) { if (!la.radioValue && "radio" === b && na.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(Da);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = na.propFix[c] || c, na.expr.match.bool.test(c) ? Kb && Jb || !Ib.test(c) ? a[d] = !1 : a[na.camelCase("default-" + c)] = a[d] = !1 : na.attr(a, c, ""), a.removeAttribute(Jb ? c : d)
        }
    }), Gb = { set: function(a, b, c) { return b === !1 ? na.removeAttr(a, c) : Kb && Jb || !Ib.test(c) ? a.setAttribute(!Jb && na.propFix[c] || c, c) : a[na.camelCase("default-" + c)] = a[c] = !0, c } }, na.each(na.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = Hb[b] || na.find.attr;
        Kb && Jb || !Ib.test(b) ? Hb[b] = function(a, b, d) { var e, f; return d || (f = Hb[b], Hb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, Hb[b] = f), e } : Hb[b] = function(a, b, c) { return c ? void 0 : a[na.camelCase("default-" + b)] ? b.toLowerCase() : null }
    }), Kb && Jb || (na.attrHooks.value = { set: function(a, b, c) { return na.nodeName(a, "input") ? void(a.defaultValue = b) : Fb && Fb.set(a, b, c) } }), Jb || (Fb = { set: function(a, b, c) { var d = a.getAttributeNode(c); return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0 } }, Hb.id = Hb.name = Hb.coords = function(a, b, c) { var d; return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null }, na.valHooks.button = { get: function(a, b) { var c = a.getAttributeNode(b); return c && c.specified ? c.value : void 0 }, set: Fb.set }, na.attrHooks.contenteditable = { set: function(a, b, c) { Fb.set(a, "" === b ? !1 : b, c) } }, na.each(["width", "height"], function(a, b) { na.attrHooks[b] = { set: function(a, c) { return "" === c ? (a.setAttribute(b, "auto"), c) : void 0 } } })), la.style || (na.attrHooks.style = { get: function(a) { return a.style.cssText || void 0 }, set: function(a, b) { return a.style.cssText = b + "" } });
    var Lb = /^(?:input|select|textarea|button|object)$/i,
        Mb = /^(?:a|area)$/i;
    na.fn.extend({ prop: function(a, b) { return Na(this, na.prop, a, b, arguments.length > 1) }, removeProp: function(a) { return a = na.propFix[a] || a, this.each(function() { try { this[a] = void 0, delete this[a] } catch (b) {} }) } }), na.extend({ prop: function(a, b, c) { var d, e, f = a.nodeType; return 3 !== f && 8 !== f && 2 !== f ? (1 === f && na.isXMLDoc(a) || (b = na.propFix[b] || b, e = na.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0 }, propHooks: { tabIndex: { get: function(a) { var b = na.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : Lb.test(a.nodeName) || Mb.test(a.nodeName) && a.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), la.hrefNormalized || na.each(["href", "src"], function(a, b) { na.propHooks[b] = { get: function(a) { return a.getAttribute(b, 4) } } }), la.optSelected || (na.propHooks.selected = {
        get: function(a) { var b = a.parentNode; return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), na.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { na.propFix[this.toLowerCase()] = this }), la.enctype || (na.propFix.enctype = "encoding");
    var Nb = /[\t\r\n\f]/g;
    na.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (na.isFunction(a)) return this.each(function(b) { na(this).addClass(a.call(this, b, S(this))) });
            if ("string" == typeof a && a)
                for (b = a.match(Da) || []; c = this[i++];)
                    if (e = S(c), d = 1 === c.nodeType && (" " + e + " ").replace(Nb, " ")) {
                        for (g = 0; f = b[g++];) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = na.trim(d), e !== h && na.attr(c, "class", h)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (na.isFunction(a)) return this.each(function(b) { na(this).removeClass(a.call(this, b, S(this))) });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a)
                for (b = a.match(Da) || []; c = this[i++];)
                    if (e = S(c), d = 1 === c.nodeType && (" " + e + " ").replace(Nb, " ")) {
                        for (g = 0; f = b[g++];)
                            for (; d.indexOf(" " + f + " ") > -1;) d = d.replace(" " + f + " ", " ");
                        h = na.trim(d), e !== h && na.attr(c, "class", h)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : na.isFunction(a) ? this.each(function(c) { na(this).toggleClass(a.call(this, c, S(this), b), b) }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c)
                    for (d = 0, e = na(this), f = a.match(Da) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else void 0 !== a && "boolean" !== c || (b = S(this), b && na._data(this, "__className__", b), na.attr(this, "class", b || a === !1 ? "" : na._data(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            for (b = " " + a + " "; c = this[d++];)
                if (1 === c.nodeType && (" " + S(c) + " ").replace(Nb, " ").indexOf(b) > -1) return !0;
            return !1
        }
    }), na.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) { na.fn[b] = function(a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), na.fn.extend({ hover: function(a, b) { return this.mouseenter(a).mouseleave(b || a) } });
    var Ob = a.location,
        Pb = na.now(),
        Qb = /\?/,
        Rb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    na.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = na.trim(b + "");
        return e && !na.trim(e.replace(Rb, function(a, b, e, f) { return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "") })) ? Function("return " + e)() : na.error("Invalid JSON: " + b)
    }, na.parseXML = function(b) { var c, d; if (!b || "string" != typeof b) return null; try { a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b)) } catch (e) { c = void 0 } return c && c.documentElement && !c.getElementsByTagName("parsererror").length || na.error("Invalid XML: " + b), c };
    var Sb = /#.*$/,
        Tb = /([?&])_=[^&]*/,
        Ub = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Vb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Wb = /^(?:GET|HEAD)$/,
        Xb = /^\/\//,
        Yb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Zb = {},
        $b = {},
        _b = "*/".concat("*"),
        ac = Ob.href,
        bc = Yb.exec(ac.toLowerCase()) || [];
    na.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: ac, type: "GET", isLocal: Vb.test(bc[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": _b, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": na.parseJSON, "text xml": na.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(a, b) { return b ? V(V(a, na.ajaxSettings), b) : V(na.ajaxSettings, a) },
        ajaxPrefilter: T(Zb),
        ajaxTransport: T($b),
        ajax: function(b, c) {
            function d(b, c, d, e) {
                var f, l, s, t, v, x = c;
                2 !== u && (u = 2, i && a.clearTimeout(i), k = void 0, h = e || "", w.readyState = b > 0 ? 4 : 0, f = b >= 200 && 300 > b || 304 === b, d && (t = W(m, w, d)), t = X(m, t, w, f), f ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (na.lastModified[g] = v), v = w.getResponseHeader("etag"), v && (na.etag[g] = v)), 204 === b || "HEAD" === m.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = t.state, l = t.data, s = t.error, f = !s)) : (s = x, !b && x || (x = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || x) + "", f ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = void 0, j && o.trigger(f ? "ajaxSuccess" : "ajaxError", [w, m, f ? l : s]), q.fireWith(n, [w, x]), j && (o.trigger("ajaxComplete", [w, m]), --na.active || na.event.trigger("ajaxStop")))
            }
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m = na.ajaxSetup({}, c),
                n = m.context || m,
                o = m.context && (n.nodeType || n.jquery) ? na(n) : na.event,
                p = na.Deferred(),
                q = na.Callbacks("once memory"),
                r = m.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === u) {
                            if (!l)
                                for (l = {}; b = Ub.exec(h);) l[b[1].toLowerCase()] = b[2];
                            b = l[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() { return 2 === u ? h : null },
                    setRequestHeader: function(a, b) { var c = a.toLowerCase(); return u || (a = t[c] = t[c] || a, s[a] = b), this },
                    overrideMimeType: function(a) { return u || (m.mimeType = a), this },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > u)
                                for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                        return this
                    },
                    abort: function(a) { var b = a || v; return k && k.abort(b), d(0, b), this }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((b || m.url || ac) + "").replace(Sb, "").replace(Xb, bc[1] + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = na.trim(m.dataType || "*").toLowerCase().match(Da) || [""], null == m.crossDomain && (e = Yb.exec(m.url.toLowerCase()), m.crossDomain = !(!e || e[1] === bc[1] && e[2] === bc[2] && (e[3] || ("http:" === e[1] ? "80" : "443")) === (bc[3] || ("http:" === bc[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = na.param(m.data, m.traditional)), U(Zb, m, c, w), 2 === u) return w;
            j = na.event && m.global, j && 0 === na.active++ && na.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Wb.test(m.type), g = m.url, m.hasContent || (m.data && (g = m.url += (Qb.test(g) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = Tb.test(g) ? g.replace(Tb, "$1_=" + Pb++) : g + (Qb.test(g) ? "&" : "?") + "_=" + Pb++)), m.ifModified && (na.lastModified[g] && w.setRequestHeader("If-Modified-Since", na.lastModified[g]), na.etag[g] && w.setRequestHeader("If-None-Match", na.etag[g])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + _b + "; q=0.01" : "") : m.accepts["*"]);
            for (f in m.headers) w.setRequestHeader(f, m.headers[f]);
            if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (f in { success: 1, error: 1, complete: 1 }) w[f](m[f]);
            if (k = U($b, m, c, w)) {
                if (w.readyState = 1, j && o.trigger("ajaxSend", [w, m]), 2 === u) return w;
                m.async && m.timeout > 0 && (i = a.setTimeout(function() { w.abort("timeout") }, m.timeout));
                try { u = 1, k.send(s, d) } catch (x) {
                    if (!(2 > u)) throw x;
                    d(-1, x)
                }
            } else d(-1, "No Transport");
            return w
        },
        getJSON: function(a, b, c) { return na.get(a, b, c, "json") },
        getScript: function(a, b) { return na.get(a, void 0, b, "script") }
    }), na.each(["get", "post"], function(a, b) { na[b] = function(a, c, d, e) { return na.isFunction(c) && (e = e || d, d = c, c = void 0), na.ajax(na.extend({ url: a, type: b, dataType: e, data: c, success: d }, na.isPlainObject(a) && a)) } }), na._evalUrl = function(a) { return na.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 }) }, na.fn.extend({
        wrapAll: function(a) {
            if (na.isFunction(a)) return this.each(function(b) { na(this).wrapAll(a.call(this, b)) });
            if (this[0]) {
                var b = na(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() { for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild; return a }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return na.isFunction(a) ? this.each(function(b) { na(this).wrapInner(a.call(this, b)) }) : this.each(function() {
                var b = na(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) { var b = na.isFunction(a); return this.each(function(c) { na(this).wrapAll(b ? a.call(this, c) : a) }) },
        unwrap: function() { return this.parent().each(function() { na.nodeName(this, "body") || na(this).replaceWith(this.childNodes) }).end() }
    }), na.expr.filters.hidden = function(a) { return la.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Z(a) }, na.expr.filters.visible = function(a) { return !na.expr.filters.hidden(a) };
    var cc = /%20/g,
        dc = /\[\]$/,
        ec = /\r?\n/g,
        fc = /^(?:submit|button|image|reset|file)$/i,
        gc = /^(?:input|select|textarea|keygen)/i;
    na.param = function(a, b) {
        var c, d = [],
            e = function(a, b) { b = na.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) };
        if (void 0 === b && (b = na.ajaxSettings && na.ajaxSettings.traditional), na.isArray(a) || a.jquery && !na.isPlainObject(a)) na.each(a, function() { e(this.name, this.value) });
        else
            for (c in a) $(c, a[c], b, e);
        return d.join("&").replace(cc, "+")
    }, na.fn.extend({ serialize: function() { return na.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var a = na.prop(this, "elements"); return a ? na.makeArray(a) : this }).filter(function() { var a = this.type; return this.name && !na(this).is(":disabled") && gc.test(this.nodeName) && !fc.test(a) && (this.checked || !Oa.test(a)) }).map(function(a, b) { var c = na(this).val(); return null == c ? null : na.isArray(c) ? na.map(c, function(a) { return { name: b.name, value: a.replace(ec, "\r\n") } }) : { name: b.name, value: c.replace(ec, "\r\n") } }).get() } }), na.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() { return this.isLocal ? aa() : da.documentMode > 8 ? _() : /^(get|post|head|put|delete|options)$/i.test(this.type) && _() || aa() } : _;
    var hc = 0,
        ic = {},
        jc = na.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() { for (var a in ic) ic[a](void 0, !0) }), la.cors = !!jc && "withCredentials" in jc, jc = la.ajax = !!jc, jc && na.ajaxTransport(function(b) {
        if (!b.crossDomain || la.cors) {
            var c;
            return {
                send: function(d, e) {
                    var f, g = b.xhr(),
                        h = ++hc;
                    if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                        for (f in b.xhrFields) g[f] = b.xhrFields[f];
                    b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                    g.send(b.hasContent && b.data || null), c = function(a, d) {
                        var f, i, j;
                        if (c && (d || 4 === g.readyState))
                            if (delete ic[h], c = void 0, g.onreadystatechange = na.noop, d) 4 !== g.readyState && g.abort();
                            else {
                                j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
                                try { i = g.statusText } catch (k) { i = "" }
                                f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                            }
                        j && e(f, i, j, g.getAllResponseHeaders())
                    }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = ic[h] = c : c()
                },
                abort: function() { c && c(void 0, !0) }
            }
        }
    }), na.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(a) { return na.globalEval(a), a } } }), na.ajaxPrefilter("script", function(a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1) }), na.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = da.head || na("head")[0] || da.documentElement;
            return {
                send: function(d, e) {
                    b = da.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() { b && b.onload(void 0, !0) }
            }
        }
    });
    var kc = [],
        lc = /(=)\?(?=&|$)|\?\?/;
    na.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var a = kc.pop() || na.expando + "_" + Pb++; return this[a] = !0, a } }), na.ajaxPrefilter("json jsonp", function(b, c, d) { var e, f, g, h = b.jsonp !== !1 && (lc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && lc.test(b.data) && "data"); return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = na.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(lc, "$1" + e) : b.jsonp !== !1 && (b.url += (Qb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() { return g || na.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function() { g = arguments }, d.always(function() { void 0 === f ? na(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, kc.push(e)), g && na.isFunction(f) && f(g[0]), g = f = void 0 }), "script") : void 0 }), na.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || da;
        var d = wa.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = r([a], b, e), e && e.length && na(e).remove(), na.merge([], d.childNodes))
    };
    var mc = na.fn.load;
    na.fn.load = function(a, b, c) {
        if ("string" != typeof a && mc) return mc.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = na.trim(a.slice(h, a.length)), a = a.slice(0, h)), na.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && na.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function(a) { f = arguments, g.html(d ? na("<div>").append(na.parseHTML(a)).find(d) : a) }).always(c && function(a, b) { g.each(function() { c.apply(this, f || [a.responseText, b, a]) }) }), this
    }, na.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) { na.fn[b] = function(a) { return this.on(b, a) } }), na.expr.filters.animated = function(a) { return na.grep(na.timers, function(b) { return a === b.elem }).length }, na.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = na.css(a, "position"),
                l = na(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = na.css(a, "top"), i = na.css(a, "left"), j = ("absolute" === k || "fixed" === k) && na.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), na.isFunction(b) && (b = b.call(a, c, na.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, na.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) { na.offset.setOffset(this, a, b) });
            var b, c, d = { top: 0, left: 0 },
                e = this[0],
                f = e && e.ownerDocument;
            return f ? (b = f.documentElement, na.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = ba(f), { top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) }) : d) : void 0
        },
        position: function() {
            if (this[0]) {
                var a, b, c = { top: 0, left: 0 },
                    d = this[0];
                return "fixed" === na.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), na.nodeName(a[0], "html") || (c = a.offset()), c.top += na.css(a[0], "borderTopWidth", !0), c.left += na.css(a[0], "borderLeftWidth", !0)), { top: b.top - c.top - na.css(d, "marginTop", !0), left: b.left - c.left - na.css(d, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { for (var a = this.offsetParent; a && !na.nodeName(a, "html") && "static" === na.css(a, "position");) a = a.offsetParent; return a || nb }) }
    }), na.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(a, b) {
        var c = /Y/.test(b);
        na.fn[a] = function(d) { return Na(this, function(a, d, e) { var f = ba(a); return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? na(f).scrollLeft() : e, c ? e : na(f).scrollTop()) : a[d] = e) }, a, d, arguments.length, null) }
    }), na.each(["top", "left"], function(a, b) { na.cssHooks[b] = F(la.pixelPosition, function(a, c) { return c ? (c = pb(a, b), lb.test(c) ? na(a).position()[b] + "px" : c) : void 0 }) }), na.each({ Height: "height", Width: "width" }, function(a, b) {
        na.each({ padding: "inner" + a, content: b, "": "outer" + a }, function(c, d) {
            na.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return Na(this, function(b, c, d) { var e; return na.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? na.css(b, c, g) : na.style(b, c, d, g) }, b, f ? d : void 0, f, null)
            }
        })
    }), na.fn.extend({ bind: function(a, b, c) { return this.on(a, null, b, c) }, unbind: function(a, b) { return this.off(a, null, b) }, delegate: function(a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function(a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } }), na.fn.size = function() { return this.length }, na.fn.andSelf = na.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() { return na });
    var nc = a.jQuery,
        oc = a.$;
    return na.noConflict = function(b) { return a.$ === na && (a.$ = oc), b && a.jQuery === na && (a.jQuery = nc), na }, b || (a.jQuery = a.$ = na), na
});
(function($) {
    var methods = {
        init: function(options) {
            var o = $.extend({ items: 1, itemsOnPage: 1, pages: 0, displayedPages: 5, edges: 2, currentPage: 0, hrefTextPrefix: "#page-", hrefTextSuffix: "", prevText: "Prev", nextText: "Next", ellipseText: "&hellip;", cssStyle: "light-theme", listStyle: "", labelMap: [], selectOnClick: true, nextAtFront: false, invertPageOrder: false, useStartEdge: true, useEndEdge: true, onPageClick: function(pageNumber, event) {}, onInit: function() {} }, options || {});
            var self = this;
            o.pages = o.pages ? o.pages : Math.ceil(o.items / o.itemsOnPage) ? Math.ceil(o.items / o.itemsOnPage) : 1;
            if (o.currentPage) o.currentPage = o.currentPage - 1;
            else o.currentPage = !o.invertPageOrder ? 0 : o.pages - 1;
            o.halfDisplayed = o.displayedPages / 2;
            this.each(function() {
                self.addClass(o.cssStyle + " simple-pagination").data("pagination", o);
                methods._draw.call(self)
            });
            o.onInit();
            return this
        },
        selectPage: function(page) { methods._selectPage.call(this, page - 1); return this },
        prevPage: function() { var o = this.data("pagination"); if (!o.invertPageOrder) { if (o.currentPage > 0) { methods._selectPage.call(this, o.currentPage - 1) } } else { if (o.currentPage < o.pages - 1) { methods._selectPage.call(this, o.currentPage + 1) } } return this },
        nextPage: function() { var o = this.data("pagination"); if (!o.invertPageOrder) { if (o.currentPage < o.pages - 1) { methods._selectPage.call(this, o.currentPage + 1) } } else { if (o.currentPage > 0) { methods._selectPage.call(this, o.currentPage - 1) } } return this },
        getPagesCount: function() { return this.data("pagination").pages },
        setPagesCount: function(count) { this.data("pagination").pages = count },
        getCurrentPage: function() { return this.data("pagination").currentPage + 1 },
        destroy: function() { this.empty(); return this },
        drawPage: function(page) {
            var o = this.data("pagination");
            o.currentPage = page - 1;
            this.data("pagination", o);
            methods._draw.call(this);
            return this
        },
        redraw: function() { methods._draw.call(this); return this },
        disable: function() {
            var o = this.data("pagination");
            o.disabled = true;
            this.data("pagination", o);
            methods._draw.call(this);
            return this
        },
        enable: function() {
            var o = this.data("pagination");
            o.disabled = false;
            this.data("pagination", o);
            methods._draw.call(this);
            return this
        },
        updateItems: function(newItems) {
            var o = this.data("pagination");
            o.items = newItems;
            o.pages = methods._getPages(o);
            this.data("pagination", o);
            methods._draw.call(this)
        },
        updateItemsOnPage: function(itemsOnPage) {
            var o = this.data("pagination");
            o.itemsOnPage = itemsOnPage;
            o.pages = methods._getPages(o);
            this.data("pagination", o);
            methods._selectPage.call(this, 0);
            return this
        },
        getItemsOnPage: function() { return this.data("pagination").itemsOnPage },
        _draw: function() {
            var o = this.data("pagination"),
                interval = methods._getInterval(o),
                i, tagName;
            methods.destroy.call(this);
            tagName = typeof this.prop === "function" ? this.prop("tagName") : this.attr("tagName");
            var $panel = tagName === "UL" ? this : $("<ul" + (o.listStyle ? ' class="' + o.listStyle + '"' : "") + "></ul>").appendTo(this);
            if (o.prevText) { methods._appendItem.call(this, !o.invertPageOrder ? o.currentPage - 1 : o.currentPage + 1, { text: o.prevText, classes: "prev" }) }
            if (o.nextText && o.nextAtFront) { methods._appendItem.call(this, !o.invertPageOrder ? o.currentPage + 1 : o.currentPage - 1, { text: o.nextText, classes: "next" }) }
            if (!o.invertPageOrder) { if (interval.start > 0 && o.edges > 0) { if (o.useStartEdge) { var end = Math.min(o.edges, interval.start); for (i = 0; i < end; i++) { methods._appendItem.call(this, i) } } if (o.edges < interval.start && interval.start - o.edges != 1) { $panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + "</span></li>") } else if (interval.start - o.edges == 1) { methods._appendItem.call(this, o.edges) } } } else { if (interval.end < o.pages && o.edges > 0) { if (o.useStartEdge) { var begin = Math.max(o.pages - o.edges, interval.end); for (i = o.pages - 1; i >= begin; i--) { methods._appendItem.call(this, i) } } if (o.pages - o.edges > interval.end && o.pages - o.edges - interval.end != 1) { $panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + "</span></li>") } else if (o.pages - o.edges - interval.end == 1) { methods._appendItem.call(this, interval.end) } } }
            if (!o.invertPageOrder) { for (i = interval.start; i < interval.end; i++) { methods._appendItem.call(this, i) } } else { for (i = interval.end - 1; i >= interval.start; i--) { methods._appendItem.call(this, i) } }
            if (!o.invertPageOrder) { if (interval.end < o.pages && o.edges > 0) { if (o.pages - o.edges > interval.end && o.pages - o.edges - interval.end != 1) { $panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + "</span></li>") } else if (o.pages - o.edges - interval.end == 1) { methods._appendItem.call(this, interval.end) } if (o.useEndEdge) { var begin = Math.max(o.pages - o.edges, interval.end); for (i = begin; i < o.pages; i++) { methods._appendItem.call(this, i) } } } } else { if (interval.start > 0 && o.edges > 0) { if (o.edges < interval.start && interval.start - o.edges != 1) { $panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + "</span></li>") } else if (interval.start - o.edges == 1) { methods._appendItem.call(this, o.edges) } if (o.useEndEdge) { var end = Math.min(o.edges, interval.start); for (i = end - 1; i >= 0; i--) { methods._appendItem.call(this, i) } } } }
            if (o.nextText && !o.nextAtFront) { methods._appendItem.call(this, !o.invertPageOrder ? o.currentPage + 1 : o.currentPage - 1, { text: o.nextText, classes: "next" }) }
        },
        _getPages: function(o) { var pages = Math.ceil(o.items / o.itemsOnPage); return pages || 1 },
        _getInterval: function(o) { return { start: Math.ceil(o.currentPage > o.halfDisplayed ? Math.max(Math.min(o.currentPage - o.halfDisplayed, o.pages - o.displayedPages), 0) : 0), end: Math.ceil(o.currentPage > o.halfDisplayed ? Math.min(o.currentPage + o.halfDisplayed, o.pages) : Math.min(o.displayedPages, o.pages)) } },
        _appendItem: function(pageIndex, opts) {
            var self = this,
                options, $link, o = self.data("pagination"),
                $linkWrapper = $("<li></li>"),
                $ul = self.find("ul");
            pageIndex = pageIndex < 0 ? 0 : pageIndex < o.pages ? pageIndex : o.pages - 1;
            options = { text: pageIndex + 1, classes: "" };
            if (o.labelMap.length && o.labelMap[pageIndex]) { options.text = o.labelMap[pageIndex] }
            options = $.extend(options, opts || {});
            if (pageIndex == o.currentPage || o.disabled) {
                if (o.disabled || options.classes === "prev" || options.classes === "next") { $linkWrapper.addClass("disabled") } else { $linkWrapper.addClass("active") }
                $link = $('<span class="current">' + options.text + "</span>")
            } else {
                $link = $('<a href="' + o.hrefTextPrefix + (pageIndex + 1) + o.hrefTextSuffix + '" class="page-link">' + options.text + "</a>");
                $link.click(function(event) { return methods._selectPage.call(self, pageIndex, event) })
            }
            if (options.classes) { $link.addClass(options.classes) }
            $linkWrapper.append($link);
            if ($ul.length) { $ul.append($linkWrapper) } else { self.append($linkWrapper) }
        },
        _selectPage: function(pageIndex, event) {
            var o = this.data("pagination");
            o.currentPage = pageIndex;
            if (o.selectOnClick) { methods._draw.call(this) }
            return o.onPageClick(pageIndex + 1, event)
        }
    };
    $.fn.pagination = function(method) { if (methods[method] && method.charAt(0) != "_") { return methods[method].apply(this, Array.prototype.slice.call(arguments, 1)) } else if (typeof method === "object" || !method) { return methods.init.apply(this, arguments) } else { $.error("Method " + method + " does not exist on jQuery.pagination") } }
})(jQuery);
(function($) {
    $.extend({
        tablesorter: new function() {
            var parsers = [],
                widgets = [];
            this.defaults = { cssHeader: "header", cssAsc: "headerSortUp", cssDesc: "headerSortDown", cssChildRow: "expand-child", sortInitialOrder: "asc", sortMultiSortKey: "shiftKey", sortForce: null, sortAppend: null, sortLocaleCompare: true, textExtraction: "simple", parsers: {}, widgets: [], widgetZebra: { css: ["even", "odd"] }, headers: {}, widthFixed: false, cancelSelection: true, sortList: [], headerList: [], dateFormat: "us", decimal: "/.|,/g", onRenderHeader: null, selectorHeaders: "thead th", debug: false };

            function benchmark(s, d) { log(s + "," + ((new Date).getTime() - d.getTime()) + "ms") }
            this.benchmark = benchmark;

            function log(s) { if (typeof console != "undefined" && typeof console.debug != "undefined") { console.log(s) } else { alert(s) } }

            function buildParserCache(table, $headers) {
                if (table.config.debug) { var parsersDebug = "" }
                if (table.tBodies.length == 0) return;
                var rows = table.tBodies[0].rows;
                if (rows[0]) {
                    var list = [],
                        cells = rows[0].cells,
                        l = cells.length;
                    for (var i = 0; i < l; i++) {
                        var p = false;
                        if ($.metadata && ($($headers[i]).metadata() && $($headers[i]).metadata().sorter)) { p = getParserById($($headers[i]).metadata().sorter) } else if (table.config.headers[i] && table.config.headers[i].sorter) { p = getParserById(table.config.headers[i].sorter) }
                        if (!p) { p = detectParserForColumn(table, rows, -1, i) }
                        if (table.config.debug) { parsersDebug += "column:" + i + " parser:" + p.id + "\n" }
                        list.push(p)
                    }
                }
                if (table.config.debug) { log(parsersDebug) }
                return list
            }

            function detectParserForColumn(table, rows, rowIndex, cellIndex) {
                var l = parsers.length,
                    node = false,
                    nodeValue = false,
                    keepLooking = true;
                while (nodeValue == "" && keepLooking) {
                    rowIndex++;
                    if (rows[rowIndex]) {
                        node = getNodeFromRowAndCellIndex(rows, rowIndex, cellIndex);
                        nodeValue = trimAndGetNodeText(table.config, node);
                        if (table.config.debug) { log("Checking if value was empty on row:" + rowIndex) }
                    } else { keepLooking = false }
                }
                for (var i = 1; i < l; i++) { if (parsers[i].is(nodeValue, table, node)) { return parsers[i] } }
                return parsers[0]
            }

            function getNodeFromRowAndCellIndex(rows, rowIndex, cellIndex) { return rows[rowIndex].cells[cellIndex] }

            function trimAndGetNodeText(config, node) { return $.trim(getElementText(config, node)) }

            function getParserById(name) { var l = parsers.length; for (var i = 0; i < l; i++) { if (parsers[i].id.toLowerCase() == name.toLowerCase()) { return parsers[i] } } return false }

            function buildCache(table) {
                if (table.config.debug) { var cacheTime = new Date }
                var totalRows = table.tBodies[0] && table.tBodies[0].rows.length || 0,
                    totalCells = table.tBodies[0].rows[0] && table.tBodies[0].rows[0].cells.length || 0,
                    parsers = table.config.parsers,
                    cache = { row: [], normalized: [] };
                for (var i = 0; i < totalRows; ++i) {
                    var c = $(table.tBodies[0].rows[i]),
                        cols = [];
                    if (c.hasClass(table.config.cssChildRow)) { cache.row[cache.row.length - 1] = cache.row[cache.row.length - 1].add(c); continue }
                    cache.row.push(c);
                    for (var j = 0; j < totalCells; ++j) { cols.push(parsers[j].format(getElementText(table.config, c[0].cells[j]), table, c[0].cells[j])) }
                    cols.push(cache.normalized.length);
                    cache.normalized.push(cols);
                    cols = null
                }
                if (table.config.debug) { benchmark("Building cache for " + totalRows + " rows:", cacheTime) }
                return cache
            }

            function getElementText(config, node) { var text = ""; if (!node) return ""; if (!config.supportsTextContent) config.supportsTextContent = node.textContent || false; if (config.textExtraction == "simple") { if (config.supportsTextContent) { text = node.textContent } else { if (node.childNodes[0] && node.childNodes[0].hasChildNodes()) { text = node.childNodes[0].innerHTML } else { text = node.innerHTML } } } else { if (typeof config.textExtraction == "function") { text = config.textExtraction(node) } else { text = $(node).text() } } return text }

            function appendToTable(table, cache) {
                if (table.config.debug) { var appendTime = new Date }
                var c = cache,
                    r = c.row,
                    n = c.normalized,
                    totalRows = n.length,
                    checkCell = n[0].length - 1,
                    tableBody = $(table.tBodies[0]),
                    rows = [];
                for (var i = 0; i < totalRows; i++) {
                    var pos = n[i][checkCell];
                    rows.push(r[pos]);
                    if (!table.config.appender) { var l = r[pos].length; for (var j = 0; j < l; j++) { tableBody[0].appendChild(r[pos][j]) } }
                }
                if (table.config.appender) { table.config.appender(table, rows) }
                rows = null;
                if (table.config.debug) { benchmark("Rebuilt table:", appendTime) }
                applyWidget(table);
                setTimeout(function() { $(table).trigger("sortEnd") }, 0)
            }

            function buildHeaders(table) {
                if (table.config.debug) { var time = new Date }
                var meta = $.metadata ? true : false;
                var header_index = computeTableHeaderCellIndexes(table);
                $tableHeaders = $(table.config.selectorHeaders, table).each(function(index) {
                    this.column = header_index[this.parentNode.rowIndex + "-" + this.cellIndex];
                    this.order = formatSortingOrder(table.config.sortInitialOrder);
                    this.count = this.order;
                    if (checkHeaderMetadata(this) || checkHeaderOptions(table, index)) this.sortDisabled = true;
                    if (checkHeaderOptionsSortingLocked(table, index)) this.order = this.lockedOrder = checkHeaderOptionsSortingLocked(table, index);
                    if (!this.sortDisabled) { var $th = $(this).addClass(table.config.cssHeader); if (table.config.onRenderHeader) table.config.onRenderHeader.apply($th) }
                    table.config.headerList[index] = this
                });
                if (table.config.debug) {
                    benchmark("Built headers:", time);
                    log($tableHeaders)
                }
                return $tableHeaders
            }

            function computeTableHeaderCellIndexes(t) {
                var matrix = [];
                var lookup = {};
                var thead = t.getElementsByTagName("THEAD")[0];
                var trs = thead.getElementsByTagName("TR");
                for (var i = 0; i < trs.length; i++) {
                    var cells = trs[i].cells;
                    for (var j = 0; j < cells.length; j++) {
                        var c = cells[j];
                        var rowIndex = c.parentNode.rowIndex;
                        var cellId = rowIndex + "-" + c.cellIndex;
                        var rowSpan = c.rowSpan || 1;
                        var colSpan = c.colSpan || 1;
                        var firstAvailCol;
                        if (typeof matrix[rowIndex] == "undefined") { matrix[rowIndex] = [] }
                        for (var k = 0; k < matrix[rowIndex].length + 1; k++) { if (typeof matrix[rowIndex][k] == "undefined") { firstAvailCol = k; break } }
                        lookup[cellId] = firstAvailCol;
                        for (var k = rowIndex; k < rowIndex + rowSpan; k++) { if (typeof matrix[k] == "undefined") { matrix[k] = [] } var matrixrow = matrix[k]; for (var l = firstAvailCol; l < firstAvailCol + colSpan; l++) { matrixrow[l] = "x" } }
                    }
                }
                return lookup
            }

            function checkCellColSpan(table, rows, row) {
                var arr = [],
                    r = table.tHead.rows,
                    c = r[row].cells;
                for (var i = 0; i < c.length; i++) { var cell = c[i]; if (cell.colSpan > 1) { arr = arr.concat(checkCellColSpan(table, headerArr, row++)) } else { if (table.tHead.length == 1 || (cell.rowSpan > 1 || !r[row + 1])) { arr.push(cell) } } }
                return arr
            }

            function checkHeaderMetadata(cell) { if ($.metadata && $(cell).metadata().sorter === false) { return true } return false }

            function checkHeaderOptions(table, i) { if (table.config.headers[i] && table.config.headers[i].sorter === false) { return true } return false }

            function checkHeaderOptionsSortingLocked(table, i) { if (table.config.headers[i] && table.config.headers[i].lockedOrder) return table.config.headers[i].lockedOrder; return false }

            function applyWidget(table) { var c = table.config.widgets; var l = c.length; for (var i = 0; i < l; i++) { getWidgetById(c[i]).format(table) } }

            function getWidgetById(name) { var l = widgets.length; for (var i = 0; i < l; i++) { if (widgets[i].id.toLowerCase() == name.toLowerCase()) { return widgets[i] } } }

            function formatSortingOrder(v) { if (typeof v != "Number") { return v.toLowerCase() == "desc" ? 1 : 0 } else { return v == 1 ? 1 : 0 } }

            function isValueInArray(v, a) { var l = a.length; for (var i = 0; i < l; i++) { if (a[i][0] == v) { return true } } return false }

            function setHeadersCss(table, $headers, list, css) {
                $headers.removeClass(css[0]).removeClass(css[1]);
                var h = [];
                $headers.each(function(offset) { if (!this.sortDisabled) { h[this.column] = $(this) } });
                var l = list.length;
                for (var i = 0; i < l; i++) { h[list[i][0]].addClass(css[list[i][1]]) }
            }

            function fixColumnWidth(table, $headers) {
                var c = table.config;
                if (c.widthFixed) {
                    var colgroup = $("<colgroup>");
                    $("tr:first td", table.tBodies[0]).each(function() { colgroup.append($("<col>").css("width", $(this).width())) });
                    $(table).prepend(colgroup)
                }
            }

            function updateHeaderSortCount(table, sortList) {
                var c = table.config,
                    l = sortList.length;
                for (var i = 0; i < l; i++) {
                    var s = sortList[i],
                        o = c.headerList[s[0]];
                    o.count = s[1];
                    o.count++
                }
            }

            function multisort(table, sortList, cache) {
                if (table.config.debug) { var sortTime = new Date }
                var dynamicExp = "var sortWrapper = function(a,b) {",
                    l = sortList.length;
                for (var i = 0; i < l; i++) {
                    var c = sortList[i][0];
                    var order = sortList[i][1];
                    var s = table.config.parsers[c].type == "text" ? order == 0 ? makeSortFunction("text", "asc", c) : makeSortFunction("text", "desc", c) : order == 0 ? makeSortFunction("numeric", "asc", c) : makeSortFunction("numeric", "desc", c);
                    var e = "e" + i;
                    dynamicExp += "var " + e + " = " + s;
                    dynamicExp += "if(" + e + ") { return " + e + "; } ";
                    dynamicExp += "else { "
                }
                var orgOrderCol = cache.normalized[0].length - 1;
                dynamicExp += "return a[" + orgOrderCol + "]-b[" + orgOrderCol + "];";
                for (var i = 0; i < l; i++) { dynamicExp += "}; " }
                dynamicExp += "return 0; ";
                dynamicExp += "}; ";
                if (table.config.debug) { benchmark("Evaling expression:" + dynamicExp, new Date) }
                eval(dynamicExp);
                cache.normalized.sort(sortWrapper);
                if (table.config.debug) { benchmark("Sorting on " + sortList.toString() + " and dir " + order + " time:", sortTime) }
                return cache
            }

            function makeSortFunction(type, direction, index) {
                var a = "a[" + index + "]",
                    b = "b[" + index + "]";
                if (type == "text" && direction == "asc") { return "(" + a + " == " + b + " ? 0 : (" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : (" + a + " < " + b + ") ? -1 : 1 )));" } else if (type == "text" && direction == "desc") { return "(" + a + " == " + b + " ? 0 : (" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : (" + b + " < " + a + ") ? -1 : 1 )));" } else if (type == "numeric" && direction == "asc") { return "(" + a + " === null && " + b + " === null) ? 0 :(" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : " + a + " - " + b + "));" } else if (type == "numeric" && direction == "desc") { return "(" + a + " === null && " + b + " === null) ? 0 :(" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : " + b + " - " + a + "));" }
            }

            function makeSortText(i) { return "((a[" + i + "] < b[" + i + "]) ? -1 : ((a[" + i + "] > b[" + i + "]) ? 1 : 0));" }

            function makeSortTextDesc(i) { return "((b[" + i + "] < a[" + i + "]) ? -1 : ((b[" + i + "] > a[" + i + "]) ? 1 : 0));" }

            function makeSortNumeric(i) { return "a[" + i + "]-b[" + i + "];" }

            function makeSortNumericDesc(i) { return "b[" + i + "]-a[" + i + "];" }

            function sortText(a, b) { if (table.config.sortLocaleCompare) return a.localeCompare(b); return a < b ? -1 : a > b ? 1 : 0 }

            function sortTextDesc(a, b) { if (table.config.sortLocaleCompare) return b.localeCompare(a); return b < a ? -1 : b > a ? 1 : 0 }

            function sortNumeric(a, b) { return a - b }

            function sortNumericDesc(a, b) { return b - a }

            function getCachedSortType(parsers, i) { return parsers[i].type }
            this.construct = function(settings) {
                return this.each(function() {
                    if (!this.tHead || !this.tBodies) return;
                    var $this, $document, $headers, cache, config, shiftDown = 0,
                        sortOrder;
                    this.config = {};
                    config = $.extend(this.config, $.tablesorter.defaults, settings);
                    $this = $(this);
                    $.data(this, "tablesorter", config);
                    $headers = buildHeaders(this);
                    this.config.parsers = buildParserCache(this, $headers);
                    cache = buildCache(this);
                    var sortCSS = [config.cssDesc, config.cssAsc];
                    fixColumnWidth(this);
                    $headers.click(function(e) {
                        var totalRows = $this[0].tBodies[0] && $this[0].tBodies[0].rows.length || 0;
                        if (!this.sortDisabled && totalRows > 0) {
                            $this.trigger("sortStart");
                            var $cell = $(this);
                            var i = this.column;
                            this.order = this.count++ % 2;
                            if (this.lockedOrder) this.order = this.lockedOrder;
                            if (!e[config.sortMultiSortKey]) {
                                config.sortList = [];
                                if (config.sortForce != null) { var a = config.sortForce; for (var j = 0; j < a.length; j++) { if (a[j][0] != i) { config.sortList.push(a[j]) } } }
                                config.sortList.push([i, this.order])
                            } else {
                                if (isValueInArray(i, config.sortList)) {
                                    for (var j = 0; j < config.sortList.length; j++) {
                                        var s = config.sortList[j],
                                            o = config.headerList[s[0]];
                                        if (s[0] == i) {
                                            o.count = s[1];
                                            o.count++;
                                            s[1] = o.count % 2
                                        }
                                    }
                                } else { config.sortList.push([i, this.order]) }
                            }
                            setTimeout(function() {
                                setHeadersCss($this[0], $headers, config.sortList, sortCSS);
                                appendToTable($this[0], multisort($this[0], config.sortList, cache))
                            }, 1);
                            return false
                        }
                    }).mousedown(function() { if (config.cancelSelection) { this.onselectstart = function() { return false }; return false } });
                    $this.bind("update", function() {
                        var me = this;
                        setTimeout(function() {
                            me.config.parsers = buildParserCache(me, $headers);
                            cache = buildCache(me)
                        }, 1)
                    }).bind("updateCell", function(e, cell) {
                        var config = this.config;
                        var pos = [cell.parentNode.rowIndex - 1, cell.cellIndex];
                        cache.normalized[pos[0]][pos[1]] = config.parsers[pos[1]].format(getElementText(config, cell), cell)
                    }).bind("sorton", function(e, list) {
                        $(this).trigger("sortStart");
                        config.sortList = list;
                        var sortList = config.sortList;
                        updateHeaderSortCount(this, sortList);
                        setHeadersCss(this, $headers, sortList, sortCSS);
                        appendToTable(this, multisort(this, sortList, cache))
                    }).bind("appendCache", function() { appendToTable(this, cache) }).bind("applyWidgetId", function(e, id) { getWidgetById(id).format(this) }).bind("applyWidgets", function() { applyWidget(this) });
                    if ($.metadata && ($(this).metadata() && $(this).metadata().sortlist)) { config.sortList = $(this).metadata().sortlist }
                    if (config.sortList.length > 0) { $this.trigger("sorton", [config.sortList]) }
                    applyWidget(this)
                })
            };
            this.addParser = function(parser) {
                var l = parsers.length,
                    a = true;
                for (var i = 0; i < l; i++) { if (parsers[i].id.toLowerCase() == parser.id.toLowerCase()) { a = false } }
                if (a) { parsers.push(parser) }
            };
            this.addWidget = function(widget) { widgets.push(widget) };
            this.formatFloat = function(s) { var i = parseFloat(s); return isNaN(i) ? 0 : i };
            this.formatInt = function(s) { var i = parseInt(s); return isNaN(i) ? 0 : i };
            this.isDigit = function(s, config) { return /^[-+]?\d*$/.test($.trim(s.replace(/[,.']/g, ""))) };
            this.clearTableBody = function(table) {
                if ($.browser.msie) {
                    function empty() { while (this.firstChild) this.removeChild(this.firstChild) }
                    empty.apply(table.tBodies[0])
                } else { table.tBodies[0].innerHTML = "" }
            }
        }
    });
    $.fn.extend({ tablesorter: $.tablesorter.construct });
    var ts = $.tablesorter;
    ts.addParser({ id: "text", is: function(s) { return true }, format: function(s) { return $.trim(s.toLocaleLowerCase()) }, type: "text" });
    ts.addParser({ id: "digit", is: function(s, table) { var c = table.config; return $.tablesorter.isDigit(s, c) }, format: function(s) { return $.tablesorter.formatFloat(s) }, type: "numeric" });
    ts.addParser({ id: "currency", is: function(s) { return /^[Â£$â‚¬?.]/.test(s) }, format: function(s) { return $.tablesorter.formatFloat(s.replace(new RegExp(/[Â£$â‚¬]/g), "")) }, type: "numeric" });
    ts.addParser({
        id: "ipAddress",
        is: function(s) { return /^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/.test(s) },
        format: function(s) {
            var a = s.split("."),
                r = "",
                l = a.length;
            for (var i = 0; i < l; i++) { var item = a[i]; if (item.length == 2) { r += "0" + item } else { r += item } }
            return $.tablesorter.formatFloat(r)
        },
        type: "numeric"
    });
    ts.addParser({ id: "url", is: function(s) { return /^(https?|ftp|file):\/\/$/.test(s) }, format: function(s) { return jQuery.trim(s.replace(new RegExp(/(https?|ftp|file):\/\//), "")) }, type: "text" });
    ts.addParser({ id: "isoDate", is: function(s) { return /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(s) }, format: function(s) { return $.tablesorter.formatFloat(s != "" ? new Date(s.replace(new RegExp(/-/g), "/")).getTime() : "0") }, type: "numeric" });
    ts.addParser({ id: "percent", is: function(s) { return /\%$/.test($.trim(s)) }, format: function(s) { return $.tablesorter.formatFloat(s.replace(new RegExp(/%/g), "")) }, type: "numeric" });
    ts.addParser({ id: "usLongDate", is: function(s) { return s.match(new RegExp(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/)) }, format: function(s) { return $.tablesorter.formatFloat(new Date(s).getTime()) }, type: "numeric" });
    ts.addParser({
        id: "shortDate",
        is: function(s) { return /\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(s) },
        format: function(s, table) {
            var c = table.config;
            s = s.replace(/\-/g, "/");
            if (c.dateFormat == "us") { s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$1/$2") } else if (c.dateFormat == "pt") { s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$2/$1") } else if (c.dateFormat == "uk") { s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$2/$1") } else if (c.dateFormat == "dd/mm/yy" || c.dateFormat == "dd-mm-yy") { s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/, "$1/$2/$3") }
            return $.tablesorter.formatFloat(new Date(s).getTime())
        },
        type: "numeric"
    });
    ts.addParser({ id: "time", is: function(s) { return /^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/.test(s) }, format: function(s) { return $.tablesorter.formatFloat(new Date("2000/01/01 " + s).getTime()) }, type: "numeric" });
    ts.addParser({
        id: "metadata",
        is: function(s) { return false },
        format: function(s, table, cell) {
            var c = table.config,
                p = !c.parserMetadataName ? "sortValue" : c.parserMetadataName;
            return $(cell).metadata()[p]
        },
        type: "numeric"
    });
    ts.addWidget({
        id: "zebra",
        format: function(table) {
            if (table.config.debug) { var time = new Date }
            var $tr, row = -1,
                odd;
            $("tr:visible", table.tBodies[0]).each(function(i) {
                $tr = $(this);
                if (!$tr.hasClass(table.config.cssChildRow)) row++;
                odd = row % 2 == 0;
                $tr.removeClass(table.config.widgetZebra.css[odd ? 0 : 1]).addClass(table.config.widgetZebra.css[odd ? 1 : 0])
            });
            if (table.config.debug) { $.tablesorter.benchmark("Applying Zebra widget", time) }
        }
    })
})(jQuery);
(function(global, factory) { typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global.moment = factory() })(this, function() {
    "use strict";
    var hookCallback;

    function hooks() { return hookCallback.apply(null, arguments) }

    function setHookCallback(callback) { hookCallback = callback }

    function isArray(input) { return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]" }

    function isObject(input) { return input != null && Object.prototype.toString.call(input) === "[object Object]" }

    function isObjectEmpty(obj) { var k; for (k in obj) { return false } return true }

    function isUndefined(input) { return input === void 0 }

    function isNumber(input) { return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]" }

    function isDate(input) { return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]" }

    function map(arr, fn) {
        var res = [],
            i;
        for (i = 0; i < arr.length; ++i) { res.push(fn(arr[i], i)) }
        return res
    }

    function hasOwnProp(a, b) { return Object.prototype.hasOwnProperty.call(a, b) }

    function extend(a, b) { for (var i in b) { if (hasOwnProp(b, i)) { a[i] = b[i] } } if (hasOwnProp(b, "toString")) { a.toString = b.toString } if (hasOwnProp(b, "valueOf")) { a.valueOf = b.valueOf } return a }

    function createUTC(input, format, locale, strict) { return createLocalOrUTC(input, format, locale, strict, true).utc() }

    function defaultParsingFlags() { return { empty: false, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: false, invalidMonth: null, invalidFormat: false, userInvalidated: false, iso: false, parsedDateParts: [], meridiem: null, rfc2822: false, weekdayMismatch: false } }

    function getParsingFlags(m) { if (m._pf == null) { m._pf = defaultParsingFlags() } return m._pf }
    var some;
    if (Array.prototype.some) { some = Array.prototype.some } else { some = function(fun) { var t = Object(this); var len = t.length >>> 0; for (var i = 0; i < len; i++) { if (i in t && fun.call(this, t[i], i, t)) { return true } } return false } }
    var some$1 = some;

    function isValid(m) { if (m._isValid == null) { var flags = getParsingFlags(m); var parsedParts = some$1.call(flags.parsedDateParts, function(i) { return i != null }); var isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.invalidWeekday && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts); if (m._strict) { isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined } if (Object.isFrozen == null || !Object.isFrozen(m)) { m._isValid = isNowValid } else { return isNowValid } } return m._isValid }

    function createInvalid(flags) { var m = createUTC(NaN); if (flags != null) { extend(getParsingFlags(m), flags) } else { getParsingFlags(m).userInvalidated = true } return m }
    var momentProperties = hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;
        if (!isUndefined(from._isAMomentObject)) { to._isAMomentObject = from._isAMomentObject }
        if (!isUndefined(from._i)) { to._i = from._i }
        if (!isUndefined(from._f)) { to._f = from._f }
        if (!isUndefined(from._l)) { to._l = from._l }
        if (!isUndefined(from._strict)) { to._strict = from._strict }
        if (!isUndefined(from._tzm)) { to._tzm = from._tzm }
        if (!isUndefined(from._isUTC)) { to._isUTC = from._isUTC }
        if (!isUndefined(from._offset)) { to._offset = from._offset }
        if (!isUndefined(from._pf)) { to._pf = getParsingFlags(from) }
        if (!isUndefined(from._locale)) { to._locale = from._locale }
        if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) { to[prop] = val }
            }
        }
        return to
    }
    var updateInProgress = false;

    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) { this._d = new Date(NaN) }
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false
        }
    }

    function isMoment(obj) { return obj instanceof Moment || obj != null && obj._isAMomentObject != null }

    function absFloor(number) { if (number < 0) { return Math.ceil(number) || 0 } else { return Math.floor(number) } }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;
        if (coercedNumber !== 0 && isFinite(coercedNumber)) { value = absFloor(coercedNumber) }
        return value
    }

    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) { if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) { diffs++ } }
        return diffs + lengthDiff
    }

    function warn(msg) { if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) { console.warn("Deprecation warning: " + msg) } }

    function deprecate(msg, fn) {
        var firstTime = true;
        return extend(function() {
            if (hooks.deprecationHandler != null) { hooks.deprecationHandler(null, msg) }
            if (firstTime) {
                var args = [];
                var arg;
                for (var i = 0; i < arguments.length; i++) {
                    arg = "";
                    if (typeof arguments[i] === "object") {
                        arg += "\n[" + i + "] ";
                        for (var key in arguments[0]) { arg += key + ": " + arguments[0][key] + ", " }
                        arg = arg.slice(0, -2)
                    } else { arg = arguments[i] }
                    args.push(arg)
                }
                warn(msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + (new Error).stack);
                firstTime = false
            }
            return fn.apply(this, arguments)
        }, fn)
    }
    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) { hooks.deprecationHandler(name, msg) }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true
        }
    }
    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) { return input instanceof Function || Object.prototype.toString.call(input) === "[object Function]" }

    function set(config) {
        var prop, i;
        for (i in config) { prop = config[i]; if (isFunction(prop)) { this[i] = prop } else { this["_" + i] = prop } }
        this._config = config;
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig),
            prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop])
                } else if (childConfig[prop] != null) { res[prop] = childConfig[prop] } else { delete res[prop] }
            }
        }
        for (prop in parentConfig) { if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) { res[prop] = extend({}, res[prop]) } }
        return res
    }

    function Locale(config) { if (config != null) { this.set(config) } }
    var keys;
    if (Object.keys) { keys = Object.keys } else { keys = function(obj) { var i, res = []; for (i in obj) { if (hasOwnProp(obj, i)) { res.push(i) } } return res } }
    var keys$1 = keys;
    var defaultCalendar = { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" };

    function calendar(key, mom, now) { var output = this._calendar[key] || this._calendar["sameElse"]; return isFunction(output) ? output.call(mom, now) : output }
    var defaultLongDateFormat = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };

    function longDateFormat(key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];
        if (format || !formatUpper) { return format }
        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function(val) { return val.slice(1) });
        return this._longDateFormat[key]
    }
    var defaultInvalidDate = "Invalid date";

    function invalidDate() { return this._invalidDate }
    var defaultOrdinal = "%d";
    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal(number) { return this._ordinal.replace("%d", number) }
    var defaultRelativeTime = { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };

    function relativeTime(number, withoutSuffix, string, isFuture) { var output = this._relativeTime[string]; return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number) }

    function pastFuture(diff, output) { var format = this._relativeTime[diff > 0 ? "future" : "past"]; return isFunction(format) ? format(output) : format.replace(/%s/i, output) }
    var aliases = {};

    function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = unit
    }

    function normalizeUnits(units) { return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : undefined }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp, prop;
        for (prop in inputObject) { if (hasOwnProp(inputObject, prop)) { normalizedProp = normalizeUnits(prop); if (normalizedProp) { normalizedInput[normalizedProp] = inputObject[prop] } } }
        return normalizedInput
    }
    var priorities = {};

    function addUnitPriority(unit, priority) { priorities[unit] = priority }

    function getPrioritizedUnits(unitsObj) {
        var units = [];
        for (var u in unitsObj) { units.push({ unit: u, priority: priorities[u] }) }
        units.sort(function(a, b) { return a.priority - b.priority });
        return units
    }

    function makeGetSet(unit, keepTime) {
        return function(value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this
            } else { return get(this, unit) }
        }
    }

    function get(mom, unit) { return mom.isValid() ? mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]() : NaN }

    function set$1(mom, unit, value) { if (mom.isValid()) { mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value) } }

    function stringGet(units) { units = normalizeUnits(units); if (isFunction(this[units])) { return this[units]() } return this }

    function stringSet(units, value) { if (typeof units === "object") { units = normalizeObjectUnits(units); var prioritized = getPrioritizedUnits(units); for (var i = 0; i < prioritized.length; i++) { this[prioritized[i].unit](units[prioritized[i].unit]) } } else { units = normalizeUnits(units); if (isFunction(this[units])) { return this[units](value) } } return this }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = "" + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber
    }
    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
    var formatFunctions = {};
    var formatTokenFunctions = {};

    function addFormatToken(token, padded, ordinal, callback) { var func = callback; if (typeof callback === "string") { func = function() { return this[callback]() } } if (token) { formatTokenFunctions[token] = func } if (padded) { formatTokenFunctions[padded[0]] = function() { return zeroFill(func.apply(this, arguments), padded[1], padded[2]) } } if (ordinal) { formatTokenFunctions[ordinal] = function() { return this.localeData().ordinal(func.apply(this, arguments), token) } } }

    function removeFormattingTokens(input) { if (input.match(/\[[\s\S]/)) { return input.replace(/^\[|\]$/g, "") } return input.replace(/\\/g, "") }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens),
            i, length;
        for (i = 0, length = array.length; i < length; i++) { if (formatTokenFunctions[array[i]]) { array[i] = formatTokenFunctions[array[i]] } else { array[i] = removeFormattingTokens(array[i]) } }
        return function(mom) {
            var output = "",
                i;
            for (i = 0; i < length; i++) { output += isFunction(array[i]) ? array[i].call(mom, format) : array[i] }
            return output
        }
    }

    function formatMoment(m, format) {
        if (!m.isValid()) { return m.localeData().invalidDate() }
        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
        return formatFunctions[format](m)
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) { return locale.longDateFormat(input) || input }
        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1
        }
        return format
    }
    var match1 = /\d/;
    var match2 = /\d\d/;
    var match3 = /\d{3}/;
    var match4 = /\d{4}/;
    var match6 = /[+-]?\d{6}/;
    var match1to2 = /\d\d?/;
    var match3to4 = /\d\d\d\d?/;
    var match5to6 = /\d\d\d\d\d\d?/;
    var match1to3 = /\d{1,3}/;
    var match1to4 = /\d{1,4}/;
    var match1to6 = /[+-]?\d{1,6}/;
    var matchUnsigned = /\d+/;
    var matchSigned = /[+-]?\d+/;
    var matchOffset = /Z|[+-]\d\d:?\d\d/gi;
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi;
    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/;
    var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
    var regexes = {};

    function addRegexToken(token, regex, strictRegex) { regexes[token] = isFunction(regex) ? regex : function(isStrict, localeData) { return isStrict && strictRegex ? strictRegex : regex } }

    function getParseRegexForToken(token, config) { if (!hasOwnProp(regexes, token)) { return new RegExp(unescapeFormat(token)) } return regexes[token](config._strict, config._locale) }

    function unescapeFormat(s) { return regexEscape(s.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(matched, p1, p2, p3, p4) { return p1 || p2 || p3 || p4 })) }

    function regexEscape(s) { return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") }
    var tokens = {};

    function addParseToken(token, callback) { var i, func = callback; if (typeof token === "string") { token = [token] } if (isNumber(callback)) { func = function(input, array) { array[callback] = toInt(input) } } for (i = 0; i < token.length; i++) { tokens[token[i]] = func } }

    function addWeekParseToken(token, callback) {
        addParseToken(token, function(input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token)
        })
    }

    function addTimeToArrayFromToken(token, input, config) { if (input != null && hasOwnProp(tokens, token)) { tokens[token](input, config._a, config, token) } }
    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;
    var indexOf;
    if (Array.prototype.indexOf) { indexOf = Array.prototype.indexOf } else { indexOf = function(o) { var i; for (i = 0; i < this.length; ++i) { if (this[i] === o) { return i } } return -1 } }
    var indexOf$1 = indexOf;

    function daysInMonth(year, month) { return new Date(Date.UTC(year, month + 1, 0)).getUTCDate() }
    addFormatToken("M", ["MM", 2], "Mo", function() { return this.month() + 1 });
    addFormatToken("MMM", 0, 0, function(format) { return this.localeData().monthsShort(this, format) });
    addFormatToken("MMMM", 0, 0, function(format) { return this.localeData().months(this, format) });
    addUnitAlias("month", "M");
    addUnitPriority("month", 8);
    addRegexToken("M", match1to2);
    addRegexToken("MM", match1to2, match2);
    addRegexToken("MMM", function(isStrict, locale) { return locale.monthsShortRegex(isStrict) });
    addRegexToken("MMMM", function(isStrict, locale) { return locale.monthsRegex(isStrict) });
    addParseToken(["M", "MM"], function(input, array) { array[MONTH] = toInt(input) - 1 });
    addParseToken(["MMM", "MMMM"], function(input, array, config, token) { var month = config._locale.monthsParse(input, token, config._strict); if (month != null) { array[MONTH] = month } else { getParsingFlags(config).invalidMonth = input } });
    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");

    function localeMonths(m, format) { if (!m) { return isArray(this._months) ? this._months : this._months["standalone"] } return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? "format" : "standalone"][m.month()] }
    var defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

    function localeMonthsShort(m, format) { if (!m) { return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"] } return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? "format" : "standalone"][m.month()] }

    function handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2e3, i]);
                this._shortMonthsParse[i] = this.monthsShort(mom, "").toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase()
            }
        }
        if (strict) { if (format === "MMM") { ii = indexOf$1.call(this._shortMonthsParse, llc); return ii !== -1 ? ii : null } else { ii = indexOf$1.call(this._longMonthsParse, llc); return ii !== -1 ? ii : null } } else {
            if (format === "MMM") {
                ii = indexOf$1.call(this._shortMonthsParse, llc);
                if (ii !== -1) { return ii }
                ii = indexOf$1.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null
            } else {
                ii = indexOf$1.call(this._longMonthsParse, llc);
                if (ii !== -1) { return ii }
                ii = indexOf$1.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null
            }
        }
    }

    function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;
        if (this._monthsParseExact) { return handleStrictParse.call(this, monthName, format, strict) }
        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = []
        }
        for (i = 0; i < 12; i++) {
            mom = createUTC([2e3, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp("^" + this.months(mom, "").replace(".", "") + "$", "i");
                this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(mom, "").replace(".", "") + "$", "i")
            }
            if (!strict && !this._monthsParse[i]) {
                regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
                this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i")
            }
            if (strict && format === "MMMM" && this._longMonthsParse[i].test(monthName)) { return i } else if (strict && format === "MMM" && this._shortMonthsParse[i].test(monthName)) { return i } else if (!strict && this._monthsParse[i].test(monthName)) { return i }
        }
    }

    function setMonth(mom, value) {
        var dayOfMonth;
        if (!mom.isValid()) { return mom }
        if (typeof value === "string") { if (/^\d+$/.test(value)) { value = toInt(value) } else { value = mom.localeData().monthsParse(value); if (!isNumber(value)) { return mom } } }
        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value, dayOfMonth);
        return mom
    }

    function getSetMonth(value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this
        } else { return get(this, "Month") }
    }

    function getDaysInMonth() { return daysInMonth(this.year(), this.month()) }
    var defaultMonthsShortRegex = matchWord;

    function monthsShortRegex(isStrict) { if (this._monthsParseExact) { if (!hasOwnProp(this, "_monthsRegex")) { computeMonthsParse.call(this) } if (isStrict) { return this._monthsShortStrictRegex } else { return this._monthsShortRegex } } else { if (!hasOwnProp(this, "_monthsShortRegex")) { this._monthsShortRegex = defaultMonthsShortRegex } return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex } }
    var defaultMonthsRegex = matchWord;

    function monthsRegex(isStrict) { if (this._monthsParseExact) { if (!hasOwnProp(this, "_monthsRegex")) { computeMonthsParse.call(this) } if (isStrict) { return this._monthsStrictRegex } else { return this._monthsRegex } } else { if (!hasOwnProp(this, "_monthsRegex")) { this._monthsRegex = defaultMonthsRegex } return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex } }

    function computeMonthsParse() {
        function cmpLenRev(a, b) { return b.length - a.length }
        var shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i, mom;
        for (i = 0; i < 12; i++) {
            mom = createUTC([2e3, i]);
            shortPieces.push(this.monthsShort(mom, ""));
            longPieces.push(this.months(mom, ""));
            mixedPieces.push(this.months(mom, ""));
            mixedPieces.push(this.monthsShort(mom, ""))
        }
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i])
        }
        for (i = 0; i < 24; i++) { mixedPieces[i] = regexEscape(mixedPieces[i]) }
        this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp("^(" + longPieces.join("|") + ")", "i");
        this._monthsShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")", "i")
    }
    addFormatToken("Y", 0, 0, function() { var y = this.year(); return y <= 9999 ? "" + y : "+" + y });
    addFormatToken(0, ["YY", 2], 0, function() { return this.year() % 100 });
    addFormatToken(0, ["YYYY", 4], 0, "year");
    addFormatToken(0, ["YYYYY", 5], 0, "year");
    addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
    addUnitAlias("year", "y");
    addUnitPriority("year", 1);
    addRegexToken("Y", matchSigned);
    addRegexToken("YY", match1to2, match2);
    addRegexToken("YYYY", match1to4, match4);
    addRegexToken("YYYYY", match1to6, match6);
    addRegexToken("YYYYYY", match1to6, match6);
    addParseToken(["YYYYY", "YYYYYY"], YEAR);
    addParseToken("YYYY", function(input, array) { array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input) });
    addParseToken("YY", function(input, array) { array[YEAR] = hooks.parseTwoDigitYear(input) });
    addParseToken("Y", function(input, array) { array[YEAR] = parseInt(input, 10) });

    function daysInYear(year) { return isLeapYear(year) ? 366 : 365 }

    function isLeapYear(year) { return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 }
    hooks.parseTwoDigitYear = function(input) { return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3) };
    var getSetYear = makeGetSet("FullYear", true);

    function getIsLeapYear() { return isLeapYear(this.year()) }

    function createDate(y, m, d, h, M, s, ms) { var date = new Date(y, m, d, h, M, s, ms); if (y < 100 && y >= 0 && isFinite(date.getFullYear())) { date.setFullYear(y) } return date }

    function createUTCDate(y) { var date = new Date(Date.UTC.apply(null, arguments)); if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) { date.setUTCFullYear(y) } return date }

    function firstWeekOffset(year, dow, doy) {
        var fwd = 7 + dow - doy,
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
        return -fwdlw + fwd - 1
    }

    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear, resDayOfYear;
        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year)
        } else {
            resYear = year;
            resDayOfYear = dayOfYear
        }
        return { year: resYear, dayOfYear: resDayOfYear }
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek, resYear;
        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy)
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1
        } else {
            resYear = mom.year();
            resWeek = week
        }
        return { week: resWeek, year: resYear }
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7
    }
    addFormatToken("w", ["ww", 2], "wo", "week");
    addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
    addUnitAlias("week", "w");
    addUnitAlias("isoWeek", "W");
    addUnitPriority("week", 5);
    addUnitPriority("isoWeek", 5);
    addRegexToken("w", match1to2);
    addRegexToken("ww", match1to2, match2);
    addRegexToken("W", match1to2);
    addRegexToken("WW", match1to2, match2);
    addWeekParseToken(["w", "ww", "W", "WW"], function(input, week, config, token) { week[token.substr(0, 1)] = toInt(input) });

    function localeWeek(mom) { return weekOfYear(mom, this._week.dow, this._week.doy).week }
    var defaultLocaleWeek = { dow: 0, doy: 6 };

    function localeFirstDayOfWeek() { return this._week.dow }

    function localeFirstDayOfYear() { return this._week.doy }

    function getSetWeek(input) { var week = this.localeData().week(this); return input == null ? week : this.add((input - week) * 7, "d") }

    function getSetISOWeek(input) { var week = weekOfYear(this, 1, 4).week; return input == null ? week : this.add((input - week) * 7, "d") }
    addFormatToken("d", 0, "do", "day");
    addFormatToken("dd", 0, 0, function(format) { return this.localeData().weekdaysMin(this, format) });
    addFormatToken("ddd", 0, 0, function(format) { return this.localeData().weekdaysShort(this, format) });
    addFormatToken("dddd", 0, 0, function(format) { return this.localeData().weekdays(this, format) });
    addFormatToken("e", 0, 0, "weekday");
    addFormatToken("E", 0, 0, "isoWeekday");
    addUnitAlias("day", "d");
    addUnitAlias("weekday", "e");
    addUnitAlias("isoWeekday", "E");
    addUnitPriority("day", 11);
    addUnitPriority("weekday", 11);
    addUnitPriority("isoWeekday", 11);
    addRegexToken("d", match1to2);
    addRegexToken("e", match1to2);
    addRegexToken("E", match1to2);
    addRegexToken("dd", function(isStrict, locale) { return locale.weekdaysMinRegex(isStrict) });
    addRegexToken("ddd", function(isStrict, locale) { return locale.weekdaysShortRegex(isStrict) });
    addRegexToken("dddd", function(isStrict, locale) { return locale.weekdaysRegex(isStrict) });
    addWeekParseToken(["dd", "ddd", "dddd"], function(input, week, config, token) { var weekday = config._locale.weekdaysParse(input, token, config._strict); if (weekday != null) { week.d = weekday } else { getParsingFlags(config).invalidWeekday = input } });
    addWeekParseToken(["d", "e", "E"], function(input, week, config, token) { week[token] = toInt(input) });

    function parseWeekday(input, locale) {
        if (typeof input !== "string") { return input }
        if (!isNaN(input)) { return parseInt(input, 10) }
        input = locale.weekdaysParse(input);
        if (typeof input === "number") { return input }
        return null
    }

    function parseIsoWeekday(input, locale) { if (typeof input === "string") { return locale.weekdaysParse(input) % 7 || 7 } return isNaN(input) ? null : input }
    var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");

    function localeWeekdays(m, format) { if (!m) { return isArray(this._weekdays) ? this._weekdays : this._weekdays["standalone"] } return isArray(this._weekdays) ? this._weekdays[m.day()] : this._weekdays[this._weekdays.isFormat.test(format) ? "format" : "standalone"][m.day()] }
    var defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");

    function localeWeekdaysShort(m) { return m ? this._weekdaysShort[m.day()] : this._weekdaysShort }
    var defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");

    function localeWeekdaysMin(m) { return m ? this._weekdaysMin[m.day()] : this._weekdaysMin }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];
            for (i = 0; i < 7; ++i) {
                mom = createUTC([2e3, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, "").toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, "").toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, "").toLocaleLowerCase()
            }
        }
        if (strict) { if (format === "dddd") { ii = indexOf$1.call(this._weekdaysParse, llc); return ii !== -1 ? ii : null } else if (format === "ddd") { ii = indexOf$1.call(this._shortWeekdaysParse, llc); return ii !== -1 ? ii : null } else { ii = indexOf$1.call(this._minWeekdaysParse, llc); return ii !== -1 ? ii : null } } else {
            if (format === "dddd") {
                ii = indexOf$1.call(this._weekdaysParse, llc);
                if (ii !== -1) { return ii }
                ii = indexOf$1.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) { return ii }
                ii = indexOf$1.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null
            } else if (format === "ddd") {
                ii = indexOf$1.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) { return ii }
                ii = indexOf$1.call(this._weekdaysParse, llc);
                if (ii !== -1) { return ii }
                ii = indexOf$1.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null
            } else {
                ii = indexOf$1.call(this._minWeekdaysParse, llc);
                if (ii !== -1) { return ii }
                ii = indexOf$1.call(this._weekdaysParse, llc);
                if (ii !== -1) { return ii }
                ii = indexOf$1.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null
            }
        }
    }

    function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex;
        if (this._weekdaysParseExact) { return handleStrictParse$1.call(this, weekdayName, format, strict) }
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = []
        }
        for (i = 0; i < 7; i++) {
            mom = createUTC([2e3, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(mom, "").replace(".", ".?") + "$", "i");
                this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(mom, "").replace(".", ".?") + "$", "i");
                this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(mom, "").replace(".", ".?") + "$", "i")
            }
            if (!this._weekdaysParse[i]) {
                regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
                this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i")
            }
            if (strict && format === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) { return i } else if (strict && format === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) { return i } else if (strict && format === "dd" && this._minWeekdaysParse[i].test(weekdayName)) { return i } else if (!strict && this._weekdaysParse[i].test(weekdayName)) { return i }
        }
    }

    function getSetDayOfWeek(input) { if (!this.isValid()) { return input != null ? this : NaN } var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); if (input != null) { input = parseWeekday(input, this.localeData()); return this.add(input - day, "d") } else { return day } }

    function getSetLocaleDayOfWeek(input) { if (!this.isValid()) { return input != null ? this : NaN } var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7; return input == null ? weekday : this.add(input - weekday, "d") }

    function getSetISODayOfWeek(input) { if (!this.isValid()) { return input != null ? this : NaN } if (input != null) { var weekday = parseIsoWeekday(input, this.localeData()); return this.day(this.day() % 7 ? weekday : weekday - 7) } else { return this.day() || 7 } }
    var defaultWeekdaysRegex = matchWord;

    function weekdaysRegex(isStrict) { if (this._weekdaysParseExact) { if (!hasOwnProp(this, "_weekdaysRegex")) { computeWeekdaysParse.call(this) } if (isStrict) { return this._weekdaysStrictRegex } else { return this._weekdaysRegex } } else { if (!hasOwnProp(this, "_weekdaysRegex")) { this._weekdaysRegex = defaultWeekdaysRegex } return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex } }
    var defaultWeekdaysShortRegex = matchWord;

    function weekdaysShortRegex(isStrict) { if (this._weekdaysParseExact) { if (!hasOwnProp(this, "_weekdaysRegex")) { computeWeekdaysParse.call(this) } if (isStrict) { return this._weekdaysShortStrictRegex } else { return this._weekdaysShortRegex } } else { if (!hasOwnProp(this, "_weekdaysShortRegex")) { this._weekdaysShortRegex = defaultWeekdaysShortRegex } return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex } }
    var defaultWeekdaysMinRegex = matchWord;

    function weekdaysMinRegex(isStrict) { if (this._weekdaysParseExact) { if (!hasOwnProp(this, "_weekdaysRegex")) { computeWeekdaysParse.call(this) } if (isStrict) { return this._weekdaysMinStrictRegex } else { return this._weekdaysMinRegex } } else { if (!hasOwnProp(this, "_weekdaysMinRegex")) { this._weekdaysMinRegex = defaultWeekdaysMinRegex } return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex } }

    function computeWeekdaysParse() {
        function cmpLenRev(a, b) { return b.length - a.length }
        var minPieces = [],
            shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
            mom = createUTC([2e3, 1]).day(i);
            minp = this.weekdaysMin(mom, "");
            shortp = this.weekdaysShort(mom, "");
            longp = this.weekdays(mom, "");
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp)
        }
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i])
        }
        this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp("^(" + longPieces.join("|") + ")", "i");
        this._weekdaysShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")", "i");
        this._weekdaysMinStrictRegex = new RegExp("^(" + minPieces.join("|") + ")", "i")
    }

    function hFormat() { return this.hours() % 12 || 12 }

    function kFormat() { return this.hours() || 24 }
    addFormatToken("H", ["HH", 2], 0, "hour");
    addFormatToken("h", ["hh", 2], 0, hFormat);
    addFormatToken("k", ["kk", 2], 0, kFormat);
    addFormatToken("hmm", 0, 0, function() { return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) });
    addFormatToken("hmmss", 0, 0, function() { return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2) });
    addFormatToken("Hmm", 0, 0, function() { return "" + this.hours() + zeroFill(this.minutes(), 2) });
    addFormatToken("Hmmss", 0, 0, function() { return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2) });

    function meridiem(token, lowercase) { addFormatToken(token, 0, 0, function() { return this.localeData().meridiem(this.hours(), this.minutes(), lowercase) }) }
    meridiem("a", true);
    meridiem("A", false);
    addUnitAlias("hour", "h");
    addUnitPriority("hour", 13);

    function matchMeridiem(isStrict, locale) { return locale._meridiemParse }
    addRegexToken("a", matchMeridiem);
    addRegexToken("A", matchMeridiem);
    addRegexToken("H", match1to2);
    addRegexToken("h", match1to2);
    addRegexToken("k", match1to2);
    addRegexToken("HH", match1to2, match2);
    addRegexToken("hh", match1to2, match2);
    addRegexToken("kk", match1to2, match2);
    addRegexToken("hmm", match3to4);
    addRegexToken("hmmss", match5to6);
    addRegexToken("Hmm", match3to4);
    addRegexToken("Hmmss", match5to6);
    addParseToken(["H", "HH"], HOUR);
    addParseToken(["k", "kk"], function(input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput
    });
    addParseToken(["a", "A"], function(input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input
    });
    addParseToken(["h", "hh"], function(input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true
    });
    addParseToken("hmm", function(input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true
    });
    addParseToken("hmmss", function(input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true
    });
    addParseToken("Hmm", function(input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos))
    });
    addParseToken("Hmmss", function(input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2))
    });

    function localeIsPM(input) { return (input + "").toLowerCase().charAt(0) === "p" }
    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;

    function localeMeridiem(hours, minutes, isLower) { if (hours > 11) { return isLower ? "pm" : "PM" } else { return isLower ? "am" : "AM" } }
    var getSetHour = makeGetSet("Hours", true);
    var baseConfig = { calendar: defaultCalendar, longDateFormat: defaultLongDateFormat, invalidDate: defaultInvalidDate, ordinal: defaultOrdinal, dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse, relativeTime: defaultRelativeTime, months: defaultLocaleMonths, monthsShort: defaultLocaleMonthsShort, week: defaultLocaleWeek, weekdays: defaultLocaleWeekdays, weekdaysMin: defaultLocaleWeekdaysMin, weekdaysShort: defaultLocaleWeekdaysShort, meridiemParse: defaultLocaleMeridiemParse };
    var locales = {};
    var localeFamilies = {};
    var globalLocale;

    function normalizeLocale(key) { return key ? key.toLowerCase().replace("_", "-") : key }

    function chooseLocale(names) {
        var i = 0,
            j, next, locale, split;
        while (i < names.length) {
            split = normalizeLocale(names[i]).split("-");
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split("-") : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join("-"));
                if (locale) { return locale }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) { break }
                j--
            }
            i++
        }
        return null
    }

    function loadLocale(name) {
        var oldLocale = null;
        if (!locales[name] && typeof module !== "undefined" && module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                require("./locale/" + name);
                getSetGlobalLocale(oldLocale)
            } catch (e) {}
        }
        return locales[name]
    }

    function getSetGlobalLocale(key, values) { var data; if (key) { if (isUndefined(values)) { data = getLocale(key) } else { data = defineLocale(key, values) } if (data) { globalLocale = data } } return globalLocale._abbr }

    function defineLocale(name, config) {
        if (config !== null) {
            var parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change " + "an existing locale. moment.defineLocale(localeName, " + "config) should only be used for creating a new locale " + "See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
                parentConfig = locales[name]._config
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) { parentConfig = locales[config.parentLocale]._config } else {
                    if (!localeFamilies[config.parentLocale]) { localeFamilies[config.parentLocale] = [] }
                    localeFamilies[config.parentLocale].push({ name: name, config: config });
                    return null
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));
            if (localeFamilies[name]) { localeFamilies[name].forEach(function(x) { defineLocale(x.name, x.config) }) }
            getSetGlobalLocale(name);
            return locales[name]
        } else { delete locales[name]; return null }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale, parentConfig = baseConfig;
            if (locales[name] != null) { parentConfig = locales[name]._config }
            config = mergeConfigs(parentConfig, config);
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;
            getSetGlobalLocale(name)
        } else { if (locales[name] != null) { if (locales[name].parentLocale != null) { locales[name] = locales[name].parentLocale } else if (locales[name] != null) { delete locales[name] } } }
        return locales[name]
    }

    function getLocale(key) {
        var locale;
        if (key && key._locale && key._locale._abbr) { key = key._locale._abbr }
        if (!key) { return globalLocale }
        if (!isArray(key)) {
            locale = loadLocale(key);
            if (locale) { return locale }
            key = [key]
        }
        return chooseLocale(key)
    }

    function listLocales() { return keys$1(locales) }

    function checkOverflow(m) {
        var overflow;
        var a = m._a;
        if (a && getParsingFlags(m).overflow === -2) {
            overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) { overflow = DATE }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) { overflow = WEEK }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) { overflow = WEEKDAY }
            getParsingFlags(m).overflow = overflow
        }
        return m
    }
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
    var isoDates = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
        ["YYYY-DDD", /\d{4}-\d{3}/],
        ["YYYY-MM", /\d{4}-\d\d/, false],
        ["YYYYYYMMDD", /[+-]\d{10}/],
        ["YYYYMMDD", /\d{8}/],
        ["GGGG[W]WWE", /\d{4}W\d{3}/],
        ["GGGG[W]WW", /\d{4}W\d{2}/, false],
        ["YYYYDDD", /\d{7}/]
    ];
    var isoTimes = [
        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
        ["HH:mm", /\d\d:\d\d/],
        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
        ["HHmmss", /\d\d\d\d\d\d/],
        ["HHmm", /\d\d\d\d/],
        ["HH", /\d\d/]
    ];
    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    function configFromISO(config) {
        var i, l, string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime, dateFormat, timeFormat, tzFormat;
        if (match) {
            getParsingFlags(config).iso = true;
            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break
                }
            }
            if (dateFormat == null) { config._isValid = false; return }
            if (match[3]) { for (i = 0, l = isoTimes.length; i < l; i++) { if (isoTimes[i][1].exec(match[3])) { timeFormat = (match[2] || " ") + isoTimes[i][0]; break } } if (timeFormat == null) { config._isValid = false; return } }
            if (!allowTime && timeFormat != null) { config._isValid = false; return }
            if (match[4]) { if (tzRegex.exec(match[4])) { tzFormat = "Z" } else { config._isValid = false; return } }
            config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
            configFromStringAndFormat(config)
        } else { config._isValid = false }
    }
    var basicRfcRegex = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;

    function configFromRFC2822(config) {
        var string, match, dayFormat, dateFormat, timeFormat, tzFormat;
        var timezones = { " GMT": " +0000", " EDT": " -0400", " EST": " -0500", " CDT": " -0500", " CST": " -0600", " MDT": " -0600", " MST": " -0700", " PDT": " -0700", " PST": " -0800" };
        var military = "YXWVUTSRQPONZABCDEFGHIKLM";
        var timezone, timezoneIndex;
        string = config._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, "");
        match = basicRfcRegex.exec(string);
        if (match) {
            dayFormat = match[1] ? "ddd" + (match[1].length === 5 ? ", " : " ") : "";
            dateFormat = "D MMM " + (match[2].length > 10 ? "YYYY " : "YY ");
            timeFormat = "HH:mm" + (match[4] ? ":ss" : "");
            if (match[1]) {
                var momentDate = new Date(match[2]);
                var momentDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][momentDate.getDay()];
                if (match[1].substr(0, 3) !== momentDay) {
                    getParsingFlags(config).weekdayMismatch = true;
                    config._isValid = false;
                    return
                }
            }
            switch (match[5].length) {
                case 2:
                    if (timezoneIndex === 0) { timezone = " +0000" } else {
                        timezoneIndex = military.indexOf(match[5][1].toUpperCase()) - 12;
                        timezone = (timezoneIndex < 0 ? " -" : " +") + ("" + timezoneIndex).replace(/^-?/, "0").match(/..$/)[0] + "00"
                    }
                    break;
                case 4:
                    timezone = timezones[match[5]];
                    break;
                default:
                    timezone = timezones[" GMT"]
            }
            match[5] = timezone;
            config._i = match.splice(1).join("");
            tzFormat = " ZZ";
            config._f = dayFormat + dateFormat + timeFormat + tzFormat;
            configFromStringAndFormat(config);
            getParsingFlags(config).rfc2822 = true
        } else { config._isValid = false }
    }

    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);
        if (matched !== null) { config._d = new Date(+matched[1]); return }
        configFromISO(config);
        if (config._isValid === false) { delete config._isValid } else { return }
        configFromRFC2822(config);
        if (config._isValid === false) { delete config._isValid } else { return }
        hooks.createFromInputFallback(config)
    }
    hooks.createFromInputFallback = deprecate("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), " + "which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are " + "discouraged and will be removed in an upcoming major release. Please refer to " + "http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(config) { config._d = new Date(config._i + (config._useUTC ? " UTC" : "")) });

    function defaults(a, b, c) { if (a != null) { return a } if (b != null) { return b } return c }

    function currentDateArray(config) { var nowValue = new Date(hooks.now()); if (config._useUTC) { return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()] } return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()] }

    function configFromArray(config) {
        var i, date, input = [],
            currentDate, yearToUse;
        if (config._d) { return }
        currentDate = currentDateArray(config);
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) { dayOfYearFromWeekInfo(config) }
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) { getParsingFlags(config)._overflowDayOfYear = true }
            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate()
        }
        for (i = 0; i < 3 && config._a[i] == null; ++i) { config._a[i] = input[i] = currentDate[i] }
        for (; i < 7; i++) { config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i] }
        if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0
        }
        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        if (config._tzm != null) { config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm) }
        if (config._nextDay) { config._a[HOUR] = 24 }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;
        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) { weekdayOverflow = true }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;
            var curWeek = weekOfYear(createLocal(), dow, doy);
            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
            week = defaults(w.w, curWeek.week);
            if (w.d != null) { weekday = w.d; if (weekday < 0 || weekday > 6) { weekdayOverflow = true } } else if (w.e != null) { weekday = w.e + dow; if (w.e < 0 || w.e > 6) { weekdayOverflow = true } } else { weekday = dow }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) { getParsingFlags(config)._overflowWeeks = true } else if (weekdayOverflow != null) { getParsingFlags(config)._overflowWeekday = true } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear
        }
    }
    hooks.ISO_8601 = function() {};
    hooks.RFC_2822 = function() {};

    function configFromStringAndFormat(config) {
        if (config._f === hooks.ISO_8601) { configFromISO(config); return }
        if (config._f === hooks.RFC_2822) { configFromRFC2822(config); return }
        config._a = [];
        getParsingFlags(config).empty = true;
        var string = "" + config._i,
            i, parsedInput, tokens, token, skipped, stringLength = string.length,
            totalParsedInputLength = 0;
        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) { getParsingFlags(config).unusedInput.push(skipped) }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length
            }
            if (formatTokenFunctions[token]) {
                if (parsedInput) { getParsingFlags(config).empty = false } else { getParsingFlags(config).unusedTokens.push(token) }
                addTimeToArrayFromToken(token, parsedInput, config)
            } else if (config._strict && !parsedInput) { getParsingFlags(config).unusedTokens.push(token) }
        }
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) { getParsingFlags(config).unusedInput.push(string) }
        if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) { getParsingFlags(config).bigHour = undefined }
        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
        configFromArray(config);
        checkOverflow(config)
    }

    function meridiemFixWrap(locale, hour, meridiem) { var isPm; if (meridiem == null) { return hour } if (locale.meridiemHour != null) { return locale.meridiemHour(hour, meridiem) } else if (locale.isPM != null) { isPm = locale.isPM(meridiem); if (isPm && hour < 12) { hour += 12 } if (!isPm && hour === 12) { hour = 0 } return hour } else { return hour } }

    function configFromStringAndArray(config) {
        var tempConfig, bestMoment, scoreToBeat, i, currentScore;
        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return
        }
        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) { tempConfig._useUTC = config._useUTC }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);
            if (!isValid(tempConfig)) { continue }
            currentScore += getParsingFlags(tempConfig).charsLeftOver;
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
            getParsingFlags(tempConfig).score = currentScore;
            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig
            }
        }
        extend(config, bestMoment || tempConfig)
    }

    function configFromObject(config) {
        if (config._d) { return }
        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function(obj) { return obj && parseInt(obj, 10) });
        configFromArray(config)
    }

    function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            res.add(1, "d");
            res._nextDay = undefined
        }
        return res
    }

    function prepareConfig(config) {
        var input = config._i,
            format = config._f;
        config._locale = config._locale || getLocale(config._l);
        if (input === null || format === undefined && input === "") { return createInvalid({ nullInput: true }) }
        if (typeof input === "string") { config._i = input = config._locale.preparse(input) }
        if (isMoment(input)) { return new Moment(checkOverflow(input)) } else if (isDate(input)) { config._d = input } else if (isArray(format)) { configFromStringAndArray(config) } else if (format) { configFromStringAndFormat(config) } else { configFromInput(config) }
        if (!isValid(config)) { config._d = null }
        return config
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) { config._d = new Date(hooks.now()) } else if (isDate(input)) { config._d = new Date(input.valueOf()) } else if (typeof input === "string") { configFromString(config) } else if (isArray(input)) {
            config._a = map(input.slice(0), function(obj) { return parseInt(obj, 10) });
            configFromArray(config)
        } else if (isObject(input)) { configFromObject(config) } else if (isNumber(input)) { config._d = new Date(input) } else { hooks.createFromInputFallback(config) }
    }

    function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {};
        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined
        }
        if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) { input = undefined }
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;
        return createFromConfig(c)
    }

    function createLocal(input, format, locale, strict) { return createLocalOrUTC(input, format, locale, strict, false) }
    var prototypeMin = deprecate("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var other = createLocal.apply(null, arguments); if (this.isValid() && other.isValid()) { return other < this ? this : other } else { return createInvalid() } });
    var prototypeMax = deprecate("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var other = createLocal.apply(null, arguments); if (this.isValid() && other.isValid()) { return other > this ? this : other } else { return createInvalid() } });

    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) { moments = moments[0] }
        if (!moments.length) { return createLocal() }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) { if (!moments[i].isValid() || moments[i][fn](res)) { res = moments[i] } }
        return res
    }

    function min() { var args = [].slice.call(arguments, 0); return pickBy("isBefore", args) }

    function max() { var args = [].slice.call(arguments, 0); return pickBy("isAfter", args) }
    var now = function() { return Date.now ? Date.now() : +new Date };
    var ordering = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

    function isDurationValid(m) { for (var key in m) { if (!(ordering.indexOf(key) !== -1 && (m[key] == null || !isNaN(m[key])))) { return false } } var unitHasDecimal = false; for (var i = 0; i < ordering.length; ++i) { if (m[ordering[i]]) { if (unitHasDecimal) { return false } if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) { unitHasDecimal = true } } } return true }

    function isValid$1() { return this._isValid }

    function createInvalid$1() { return createDuration(NaN) }

    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;
        this._isValid = isDurationValid(normalizedInput);
        this._milliseconds = +milliseconds + seconds * 1e3 + minutes * 6e4 + hours * 1e3 * 60 * 60;
        this._days = +days + weeks * 7;
        this._months = +months + quarters * 3 + years * 12;
        this._data = {};
        this._locale = getLocale();
        this._bubble()
    }

    function isDuration(obj) { return obj instanceof Duration }

    function absRound(number) { if (number < 0) { return Math.round(-1 * number) * -1 } else { return Math.round(number) } }

    function offset(token, separator) {
        addFormatToken(token, 0, 0, function() {
            var offset = this.utcOffset();
            var sign = "+";
            if (offset < 0) {
                offset = -offset;
                sign = "-"
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2)
        })
    }
    offset("Z", ":");
    offset("ZZ", "");
    addRegexToken("Z", matchShortOffset);
    addRegexToken("ZZ", matchShortOffset);
    addParseToken(["Z", "ZZ"], function(input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input)
    });
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) { var matches = (string || "").match(matcher); if (matches === null) { return null } var chunk = matches[matches.length - 1] || []; var parts = (chunk + "").match(chunkOffset) || ["-", 0, 0]; var minutes = +(parts[1] * 60) + toInt(parts[2]); return minutes === 0 ? 0 : parts[0] === "+" ? minutes : -minutes }

    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res
        } else { return createLocal(input).local() }
    }

    function getDateOffset(m) { return -Math.round(m._d.getTimezoneOffset() / 15) * 15 }
    hooks.updateOffset = function() {};

    function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) { return input != null ? this : NaN }
        if (input != null) {
            if (typeof input === "string") { input = offsetFromString(matchShortOffset, input); if (input === null) { return this } } else if (Math.abs(input) < 16 && !keepMinutes) { input = input * 60 }
            if (!this._isUTC && keepLocalTime) { localAdjust = getDateOffset(this) }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) { this.add(localAdjust, "m") }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) { addSubtract(this, createDuration(input - offset, "m"), 1, false) } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null
                }
            }
            return this
        } else { return this._isUTC ? offset : getDateOffset(this) }
    }

    function getSetZone(input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== "string") { input = -input }
            this.utcOffset(input, keepLocalTime);
            return this
        } else { return -this.utcOffset() }
    }

    function setOffsetToUTC(keepLocalTime) { return this.utcOffset(0, keepLocalTime) }

    function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;
            if (keepLocalTime) { this.subtract(getDateOffset(this), "m") }
        }
        return this
    }

    function setOffsetToParsedOffset() { if (this._tzm != null) { this.utcOffset(this._tzm, false, true) } else if (typeof this._i === "string") { var tZone = offsetFromString(matchOffset, this._i); if (tZone != null) { this.utcOffset(tZone) } else { this.utcOffset(0, true) } } return this }

    function hasAlignedHourOffset(input) {
        if (!this.isValid()) { return false }
        input = input ? createLocal(input).utcOffset() : 0;
        return (this.utcOffset() - input) % 60 === 0
    }

    function isDaylightSavingTime() { return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset() }

    function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) { return this._isDSTShifted }
        var c = {};
        copyConfig(c, this);
        c = prepareConfig(c);
        if (c._a) {
            var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0
        } else { this._isDSTShifted = false }
        return this._isDSTShifted
    }

    function isLocal() { return this.isValid() ? !this._isUTC : false }

    function isUtcOffset() { return this.isValid() ? this._isUTC : false }

    function isUtc() { return this.isValid() ? this._isUTC && this._offset === 0 : false }
    var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;
    var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

    function createDuration(input, key) {
        var duration = input,
            match = null,
            sign, ret, diffRes;
        if (isDuration(input)) { duration = { ms: input._milliseconds, d: input._days, M: input._months } } else if (isNumber(input)) { duration = {}; if (key) { duration[key] = input } else { duration.milliseconds = input } } else if (!!(match = aspNetRegex.exec(input))) {
            sign = match[1] === "-" ? -1 : 1;
            duration = { y: 0, d: toInt(match[DATE]) * sign, h: toInt(match[HOUR]) * sign, m: toInt(match[MINUTE]) * sign, s: toInt(match[SECOND]) * sign, ms: toInt(absRound(match[MILLISECOND] * 1e3)) * sign }
        } else if (!!(match = isoRegex.exec(input))) {
            sign = match[1] === "-" ? -1 : 1;
            duration = { y: parseIso(match[2], sign), M: parseIso(match[3], sign), w: parseIso(match[4], sign), d: parseIso(match[5], sign), h: parseIso(match[6], sign), m: parseIso(match[7], sign), s: parseIso(match[8], sign) }
        } else if (duration == null) { duration = {} } else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months
        }
        ret = new Duration(duration);
        if (isDuration(input) && hasOwnProp(input, "_locale")) { ret._locale = input._locale }
        return ret
    }
    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso(inp, sign) { var res = inp && parseFloat(inp.replace(",", ".")); return (isNaN(res) ? 0 : res) * sign }

    function positiveMomentsDifference(base, other) {
        var res = { milliseconds: 0, months: 0 };
        res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, "M").isAfter(other)) {--res.months }
        res.milliseconds = +other - +base.clone().add(res.months, "M");
        return res
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) { return { milliseconds: 0, months: 0 } }
        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) { res = positiveMomentsDifference(base, other) } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months
        }
        return res
    }

    function createAdder(direction, name) {
        return function(val, period) {
            var dur, tmp;
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). " + "See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.");
                tmp = val;
                val = period;
                period = tmp
            }
            val = typeof val === "string" ? +val : val;
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this
        }
    }

    function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);
        if (!mom.isValid()) { return }
        updateOffset = updateOffset == null ? true : updateOffset;
        if (milliseconds) { mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding) }
        if (days) { set$1(mom, "Date", get(mom, "Date") + days * isAdding) }
        if (months) { setMonth(mom, get(mom, "Month") + months * isAdding) }
        if (updateOffset) { hooks.updateOffset(mom, days || months) }
    }
    var add = createAdder(1, "add");
    var subtract = createAdder(-1, "subtract");

    function getCalendarFormat(myMoment, now) { var diff = myMoment.diff(now, "days", true); return diff < -6 ? "sameElse" : diff < -1 ? "lastWeek" : diff < 0 ? "lastDay" : diff < 1 ? "sameDay" : diff < 2 ? "nextDay" : diff < 7 ? "nextWeek" : "sameElse" }

    function calendar$1(time, formats) {
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf("day"),
            format = hooks.calendarFormat(this, sod) || "sameElse";
        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);
        return this.format(output || this.localeData().calendar(format, this, createLocal(now)))
    }

    function clone() { return new Moment(this) }

    function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) { return false }
        units = normalizeUnits(!isUndefined(units) ? units : "millisecond");
        if (units === "millisecond") { return this.valueOf() > localInput.valueOf() } else { return localInput.valueOf() < this.clone().startOf(units).valueOf() }
    }

    function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) { return false }
        units = normalizeUnits(!isUndefined(units) ? units : "millisecond");
        if (units === "millisecond") { return this.valueOf() < localInput.valueOf() } else { return this.clone().endOf(units).valueOf() < localInput.valueOf() }
    }

    function isBetween(from, to, units, inclusivity) { inclusivity = inclusivity || "()"; return (inclusivity[0] === "(" ? this.isAfter(from, units) : !this.isBefore(from, units)) && (inclusivity[1] === ")" ? this.isBefore(to, units) : !this.isAfter(to, units)) }

    function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) { return false }
        units = normalizeUnits(units || "millisecond");
        if (units === "millisecond") { return this.valueOf() === localInput.valueOf() } else { inputMs = localInput.valueOf(); return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf() }
    }

    function isSameOrAfter(input, units) { return this.isSame(input, units) || this.isAfter(input, units) }

    function isSameOrBefore(input, units) { return this.isSame(input, units) || this.isBefore(input, units) }

    function diff(input, units, asFloat) {
        var that, zoneDelta, delta, output;
        if (!this.isValid()) { return NaN }
        that = cloneWithOffset(input, this);
        if (!that.isValid()) { return NaN }
        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
        units = normalizeUnits(units);
        if (units === "year" || units === "month" || units === "quarter") { output = monthDiff(this, that); if (units === "quarter") { output = output / 3 } else if (units === "year") { output = output / 12 } } else {
            delta = this - that;
            output = units === "second" ? delta / 1e3 : units === "minute" ? delta / 6e4 : units === "hour" ? delta / 36e5 : units === "day" ? (delta - zoneDelta) / 864e5 : units === "week" ? (delta - zoneDelta) / 6048e5 : delta
        }
        return asFloat ? output : absFloor(output)
    }

    function monthDiff(a, b) {
        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
            anchor = a.clone().add(wholeMonthDiff, "months"),
            anchor2, adjust;
        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
            adjust = (b - anchor) / (anchor - anchor2)
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
            adjust = (b - anchor) / (anchor2 - anchor)
        }
        return -(wholeMonthDiff + adjust) || 0
    }
    hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";

    function toString() { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") }

    function toISOString() { if (!this.isValid()) { return null } var m = this.clone().utc(); if (m.year() < 0 || m.year() > 9999) { return formatMoment(m, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") } if (isFunction(Date.prototype.toISOString)) { return this.toDate().toISOString() } return formatMoment(m, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") }

    function inspect() {
        if (!this.isValid()) { return "moment.invalid(/* " + this._i + " */)" }
        var func = "moment";
        var zone = "";
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
            zone = "Z"
        }
        var prefix = "[" + func + '("]';
        var year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
        var datetime = "-MM-DD[T]HH:mm:ss.SSS";
        var suffix = zone + '[")]';
        return this.format(prefix + year + datetime + suffix)
    }

    function format(inputString) { if (!inputString) { inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat } var output = formatMoment(this, inputString); return this.localeData().postformat(output) }

    function from(time, withoutSuffix) { if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) { return createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix) } else { return this.localeData().invalidDate() } }

    function fromNow(withoutSuffix) { return this.from(createLocal(), withoutSuffix) }

    function to(time, withoutSuffix) { if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) { return createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix) } else { return this.localeData().invalidDate() } }

    function toNow(withoutSuffix) { return this.to(createLocal(), withoutSuffix) }

    function locale(key) { var newLocaleData; if (key === undefined) { return this._locale._abbr } else { newLocaleData = getLocale(key); if (newLocaleData != null) { this._locale = newLocaleData } return this } }
    var lang = deprecate("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(key) { if (key === undefined) { return this.localeData() } else { return this.locale(key) } });

    function localeData() { return this._locale }

    function startOf(units) {
        units = normalizeUnits(units);
        switch (units) {
            case "year":
                this.month(0);
            case "quarter":
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
            case "date":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
        }
        if (units === "week") { this.weekday(0) }
        if (units === "isoWeek") { this.isoWeekday(1) }
        if (units === "quarter") { this.month(Math.floor(this.month() / 3) * 3) }
        return this
    }

    function endOf(units) { units = normalizeUnits(units); if (units === undefined || units === "millisecond") { return this } if (units === "date") { units = "day" } return this.startOf(units).add(1, units === "isoWeek" ? "week" : units).subtract(1, "ms") }

    function valueOf() { return this._d.valueOf() - (this._offset || 0) * 6e4 }

    function unix() { return Math.floor(this.valueOf() / 1e3) }

    function toDate() { return new Date(this.valueOf()) }

    function toArray() { var m = this; return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()] }

    function toObject() { var m = this; return { years: m.year(), months: m.month(), date: m.date(), hours: m.hours(), minutes: m.minutes(), seconds: m.seconds(), milliseconds: m.milliseconds() } }

    function toJSON() { return this.isValid() ? this.toISOString() : null }

    function isValid$2() { return isValid(this) }

    function parsingFlags() { return extend({}, getParsingFlags(this)) }

    function invalidAt() { return getParsingFlags(this).overflow }

    function creationData() { return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict } }
    addFormatToken(0, ["gg", 2], 0, function() { return this.weekYear() % 100 });
    addFormatToken(0, ["GG", 2], 0, function() { return this.isoWeekYear() % 100 });

    function addWeekYearFormatToken(token, getter) { addFormatToken(0, [token, token.length], 0, getter) }
    addWeekYearFormatToken("gggg", "weekYear");
    addWeekYearFormatToken("ggggg", "weekYear");
    addWeekYearFormatToken("GGGG", "isoWeekYear");
    addWeekYearFormatToken("GGGGG", "isoWeekYear");
    addUnitAlias("weekYear", "gg");
    addUnitAlias("isoWeekYear", "GG");
    addUnitPriority("weekYear", 1);
    addUnitPriority("isoWeekYear", 1);
    addRegexToken("G", matchSigned);
    addRegexToken("g", matchSigned);
    addRegexToken("GG", match1to2, match2);
    addRegexToken("gg", match1to2, match2);
    addRegexToken("GGGG", match1to4, match4);
    addRegexToken("gggg", match1to4, match4);
    addRegexToken("GGGGG", match1to6, match6);
    addRegexToken("ggggg", match1to6, match6);
    addWeekParseToken(["gggg", "ggggg", "GGGG", "GGGGG"], function(input, week, config, token) { week[token.substr(0, 2)] = toInt(input) });
    addWeekParseToken(["gg", "GG"], function(input, week, config, token) { week[token] = hooks.parseTwoDigitYear(input) });

    function getSetWeekYear(input) { return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy) }

    function getSetISOWeekYear(input) { return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4) }

    function getISOWeeksInYear() { return weeksInYear(this.year(), 1, 4) }

    function getWeeksInYear() { var weekInfo = this.localeData()._week; return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy) }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) { var weeksTarget; if (input == null) { return weekOfYear(this, dow, doy).year } else { weeksTarget = weeksInYear(input, dow, doy); if (week > weeksTarget) { week = weeksTarget } return setWeekAll.call(this, input, week, weekday, dow, doy) } }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this
    }
    addFormatToken("Q", 0, "Qo", "quarter");
    addUnitAlias("quarter", "Q");
    addUnitPriority("quarter", 7);
    addRegexToken("Q", match1);
    addParseToken("Q", function(input, array) { array[MONTH] = (toInt(input) - 1) * 3 });

    function getSetQuarter(input) { return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3) }
    addFormatToken("D", ["DD", 2], "Do", "date");
    addUnitAlias("date", "D");
    addUnitPriority("date", 9);
    addRegexToken("D", match1to2);
    addRegexToken("DD", match1to2, match2);
    addRegexToken("Do", function(isStrict, locale) { return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient });
    addParseToken(["D", "DD"], DATE);
    addParseToken("Do", function(input, array) { array[DATE] = toInt(input.match(match1to2)[0], 10) });
    var getSetDayOfMonth = makeGetSet("Date", true);
    addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
    addUnitAlias("dayOfYear", "DDD");
    addUnitPriority("dayOfYear", 4);
    addRegexToken("DDD", match1to3);
    addRegexToken("DDDD", match3);
    addParseToken(["DDD", "DDDD"], function(input, array, config) { config._dayOfYear = toInt(input) });

    function getSetDayOfYear(input) { var dayOfYear = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1; return input == null ? dayOfYear : this.add(input - dayOfYear, "d") }
    addFormatToken("m", ["mm", 2], 0, "minute");
    addUnitAlias("minute", "m");
    addUnitPriority("minute", 14);
    addRegexToken("m", match1to2);
    addRegexToken("mm", match1to2, match2);
    addParseToken(["m", "mm"], MINUTE);
    var getSetMinute = makeGetSet("Minutes", false);
    addFormatToken("s", ["ss", 2], 0, "second");
    addUnitAlias("second", "s");
    addUnitPriority("second", 15);
    addRegexToken("s", match1to2);
    addRegexToken("ss", match1to2, match2);
    addParseToken(["s", "ss"], SECOND);
    var getSetSecond = makeGetSet("Seconds", false);
    addFormatToken("S", 0, 0, function() { return ~~(this.millisecond() / 100) });
    addFormatToken(0, ["SS", 2], 0, function() { return ~~(this.millisecond() / 10) });
    addFormatToken(0, ["SSS", 3], 0, "millisecond");
    addFormatToken(0, ["SSSS", 4], 0, function() { return this.millisecond() * 10 });
    addFormatToken(0, ["SSSSS", 5], 0, function() { return this.millisecond() * 100 });
    addFormatToken(0, ["SSSSSS", 6], 0, function() { return this.millisecond() * 1e3 });
    addFormatToken(0, ["SSSSSSS", 7], 0, function() { return this.millisecond() * 1e4 });
    addFormatToken(0, ["SSSSSSSS", 8], 0, function() { return this.millisecond() * 1e5 });
    addFormatToken(0, ["SSSSSSSSS", 9], 0, function() { return this.millisecond() * 1e6 });
    addUnitAlias("millisecond", "ms");
    addUnitPriority("millisecond", 16);
    addRegexToken("S", match1to3, match1);
    addRegexToken("SS", match1to3, match2);
    addRegexToken("SSS", match1to3, match3);
    var token;
    for (token = "SSSS"; token.length <= 9; token += "S") { addRegexToken(token, matchUnsigned) }

    function parseMs(input, array) { array[MILLISECOND] = toInt(("0." + input) * 1e3) }
    for (token = "S"; token.length <= 9; token += "S") { addParseToken(token, parseMs) }
    var getSetMillisecond = makeGetSet("Milliseconds", false);
    addFormatToken("z", 0, 0, "zoneAbbr");
    addFormatToken("zz", 0, 0, "zoneName");

    function getZoneAbbr() { return this._isUTC ? "UTC" : "" }

    function getZoneName() { return this._isUTC ? "Coordinated Universal Time" : "" }
    var proto = Moment.prototype;
    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff;
    proto.endOf = endOf;
    proto.format = format;
    proto.from = from;
    proto.fromNow = fromNow;
    proto.to = to;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates = deprecate("dates accessor is deprecated. Use date instead.", getSetDayOfMonth);
    proto.months = deprecate("months accessor is deprecated. Use month instead", getSetMonth);
    proto.years = deprecate("years accessor is deprecated. Use year instead", getSetYear);
    proto.zone = deprecate("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", getSetZone);
    proto.isDSTShifted = deprecate("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", isDaylightSavingTimeShifted);

    function createUnix(input) { return createLocal(input * 1e3) }

    function createInZone() { return createLocal.apply(null, arguments).parseZone() }

    function preParsePostFormat(string) { return string }
    var proto$1 = Locale.prototype;
    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set;
    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;
    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;
    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;
    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1(format, index, field, setter) { var locale = getLocale(); var utc = createUTC().set(setter, index); return locale[field](utc, format) }

    function listMonthsImpl(format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined
        }
        format = format || "";
        if (index != null) { return get$1(format, index, field, "month") }
        var i;
        var out = [];
        for (i = 0; i < 12; i++) { out[i] = get$1(format, i, field, "month") }
        return out
    }

    function listWeekdaysImpl(localeSorted, format, index, field) {
        if (typeof localeSorted === "boolean") {
            if (isNumber(format)) {
                index = format;
                format = undefined
            }
            format = format || ""
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;
            if (isNumber(format)) {
                index = format;
                format = undefined
            }
            format = format || ""
        }
        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0;
        if (index != null) { return get$1(format, (index + shift) % 7, field, "day") }
        var i;
        var out = [];
        for (i = 0; i < 7; i++) { out[i] = get$1(format, (i + shift) % 7, field, "day") }
        return out
    }

    function listMonths(format, index) { return listMonthsImpl(format, index, "months") }

    function listMonthsShort(format, index) { return listMonthsImpl(format, index, "monthsShort") }

    function listWeekdays(localeSorted, format, index) { return listWeekdaysImpl(localeSorted, format, index, "weekdays") }

    function listWeekdaysShort(localeSorted, format, index) { return listWeekdaysImpl(localeSorted, format, index, "weekdaysShort") }

    function listWeekdaysMin(localeSorted, format, index) { return listWeekdaysImpl(localeSorted, format, index, "weekdaysMin") }
    getSetGlobalLocale("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(number) {
            var b = number % 10,
                output = toInt(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
            return number + output
        }
    });
    hooks.lang = deprecate("moment.lang is deprecated. Use moment.locale instead.", getSetGlobalLocale);
    hooks.langData = deprecate("moment.langData is deprecated. Use moment.localeData instead.", getLocale);
    var mathAbs = Math.abs;

    function abs() {
        var data = this._data;
        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);
        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);
        return this
    }

    function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);
        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;
        return duration._bubble()
    }

    function add$1(input, value) { return addSubtract$1(this, input, value, 1) }

    function subtract$1(input, value) { return addSubtract$1(this, input, value, -1) }

    function absCeil(number) { if (number < 0) { return Math.floor(number) } else { return Math.ceil(number) } }

    function bubble() {
        var milliseconds = this._milliseconds;
        var days = this._days;
        var months = this._months;
        var data = this._data;
        var seconds, minutes, hours, years, monthsFromDays;
        if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0
        }
        data.milliseconds = milliseconds % 1e3;
        seconds = absFloor(milliseconds / 1e3);
        data.seconds = seconds % 60;
        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;
        hours = absFloor(minutes / 60);
        data.hours = hours % 24;
        days += absFloor(hours / 24);
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));
        years = absFloor(months / 12);
        months %= 12;
        data.days = days;
        data.months = months;
        data.years = years;
        return this
    }

    function daysToMonths(days) { return days * 4800 / 146097 }

    function monthsToDays(months) { return months * 146097 / 4800 }

    function as(units) {
        if (!this.isValid()) { return NaN }
        var days;
        var months;
        var milliseconds = this._milliseconds;
        units = normalizeUnits(units);
        if (units === "month" || units === "year") {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            return units === "month" ? months : months / 12
        } else {
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case "week":
                    return days / 7 + milliseconds / 6048e5;
                case "day":
                    return days + milliseconds / 864e5;
                case "hour":
                    return days * 24 + milliseconds / 36e5;
                case "minute":
                    return days * 1440 + milliseconds / 6e4;
                case "second":
                    return days * 86400 + milliseconds / 1e3;
                case "millisecond":
                    return Math.floor(days * 864e5) + milliseconds;
                default:
                    throw new Error("Unknown unit " + units)
            }
        }
    }

    function valueOf$1() { if (!this.isValid()) { return NaN } return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6 }

    function makeAs(alias) { return function() { return this.as(alias) } }
    var asMilliseconds = makeAs("ms");
    var asSeconds = makeAs("s");
    var asMinutes = makeAs("m");
    var asHours = makeAs("h");
    var asDays = makeAs("d");
    var asWeeks = makeAs("w");
    var asMonths = makeAs("M");
    var asYears = makeAs("y");

    function get$2(units) { units = normalizeUnits(units); return this.isValid() ? this[units + "s"]() : NaN }

    function makeGetter(name) { return function() { return this.isValid() ? this._data[name] : NaN } }
    var milliseconds = makeGetter("milliseconds");
    var seconds = makeGetter("seconds");
    var minutes = makeGetter("minutes");
    var hours = makeGetter("hours");
    var days = makeGetter("days");
    var months = makeGetter("months");
    var years = makeGetter("years");

    function weeks() { return absFloor(this.days() / 7) }
    var round = Math.round;
    var thresholds = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 };

    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) { return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture) }

    function relativeTime$1(posNegDuration, withoutSuffix, locale) {
        var duration = createDuration(posNegDuration).abs();
        var seconds = round(duration.as("s"));
        var minutes = round(duration.as("m"));
        var hours = round(duration.as("h"));
        var days = round(duration.as("d"));
        var months = round(duration.as("M"));
        var years = round(duration.as("y"));
        var a = seconds <= thresholds.ss && ["s", seconds] || seconds < thresholds.s && ["ss", seconds] || minutes <= 1 && ["m"] || minutes < thresholds.m && ["mm", minutes] || hours <= 1 && ["h"] || hours < thresholds.h && ["hh", hours] || days <= 1 && ["d"] || days < thresholds.d && ["dd", days] || months <= 1 && ["M"] || months < thresholds.M && ["MM", months] || years <= 1 && ["y"] || ["yy", years];
        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a)
    }

    function getSetRelativeTimeRounding(roundingFunction) { if (roundingFunction === undefined) { return round } if (typeof roundingFunction === "function") { round = roundingFunction; return true } return false }

    function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === undefined) { return false }
        if (limit === undefined) { return thresholds[threshold] }
        thresholds[threshold] = limit;
        if (threshold === "s") { thresholds.ss = limit - 1 }
        return true
    }

    function humanize(withSuffix) { if (!this.isValid()) { return this.localeData().invalidDate() } var locale = this.localeData(); var output = relativeTime$1(this, !withSuffix, locale); if (withSuffix) { output = locale.pastFuture(+this, output) } return locale.postformat(output) }
    var abs$1 = Math.abs;

    function toISOString$1() {
        if (!this.isValid()) { return this.localeData().invalidDate() }
        var seconds = abs$1(this._milliseconds) / 1e3;
        var days = abs$1(this._days);
        var months = abs$1(this._months);
        var minutes, hours, years;
        minutes = absFloor(seconds / 60);
        hours = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;
        years = absFloor(months / 12);
        months %= 12;
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds;
        var total = this.asSeconds();
        if (!total) { return "P0D" }
        return (total < 0 ? "-" : "") + "P" + (Y ? Y + "Y" : "") + (M ? M + "M" : "") + (D ? D + "D" : "") + (h || m || s ? "T" : "") + (h ? h + "H" : "") + (m ? m + "M" : "") + (s ? s + "S" : "")
    }
    var proto$2 = Duration.prototype;
    proto$2.isValid = isValid$1;
    proto$2.abs = abs;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.get = get$2;
    proto$2.milliseconds = milliseconds;
    proto$2.seconds = seconds;
    proto$2.minutes = minutes;
    proto$2.hours = hours;
    proto$2.days = days;
    proto$2.weeks = weeks;
    proto$2.months = months;
    proto$2.years = years;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale;
    proto$2.localeData = localeData;
    proto$2.toIsoString = deprecate("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", toISOString$1);
    proto$2.lang = lang;
    addFormatToken("X", 0, 0, "unix");
    addFormatToken("x", 0, 0, "valueOf");
    addRegexToken("x", matchSigned);
    addRegexToken("X", matchTimestamp);
    addParseToken("X", function(input, array, config) { config._d = new Date(parseFloat(input, 10) * 1e3) });
    addParseToken("x", function(input, array, config) { config._d = new Date(toInt(input)) });
    hooks.version = "2.18.1";
    setHookCallback(createLocal);
    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto;
    return hooks
});
! function(a, b) { "object" == typeof exports && "object" == typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define([], b) : "object" == typeof exports ? exports.template = b() : a.template = b() }(this, function() {
    return function(a) {
        function b(d) { if (c[d]) return c[d].exports; var e = c[d] = { i: d, l: !1, exports: {} }; return a[d].call(e.exports, e, e.exports, b), e.l = !0, e.exports }
        var c = {};
        return b.m = a, b.c = c, b.d = function(a, c, d) { b.o(a, c) || Object.defineProperty(a, c, { configurable: !1, enumerable: !0, get: d }) }, b.n = function(a) { var c = a && a.__esModule ? function() { return a.default } : function() { return a }; return b.d(c, "a", c), c }, b.o = function(a, b) { return Object.prototype.hasOwnProperty.call(a, b) }, b.p = "", b(b.s = 6)
    }([function(a, b, c) {
        (function(b) { a.exports = !1; try { a.exports = "[object process]" === Object.prototype.toString.call(b.process) } catch (a) {} }).call(b, c(4))
    }, function(a, b, c) {
        "use strict";
        var d = c(8),
            e = c(3),
            f = c(23),
            g = function(a, b) { b.onerror(a, b); var c = function() { return "{Template Error}" }; return c.mappings = [], c.sourcesContent = [], c },
            h = function a(b) {
                var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                "string" != typeof b ? c = b : c.source = b, c = e.$extend(c), b = c.source, !0 === c.debug && (c.cache = !1, c.minimize = !1, c.compileDebug = !0), c.compileDebug && (c.minimize = !1), c.filename && (c.filename = c.resolveFilename(c.filename, c));
                var h = c.filename,
                    i = c.cache,
                    j = c.caches;
                if (i && h) { var k = j.get(h); if (k) return k }
                if (!b) try { b = c.loader(h, c), c.source = b } catch (a) { var l = new f({ name: "CompileError", path: h, message: "template not found: " + a.message, stack: a.stack }); if (c.bail) throw l; return g(l, c) }
                var m = void 0,
                    n = new d(c);
                try { m = n.build() } catch (l) { if (l = new f(l), c.bail) throw l; return g(l, c) }
                var o = function(b, d) { try { return m(b, d) } catch (e) { if (!c.compileDebug) return c.cache = !1, c.compileDebug = !0, a(c)(b, d); if (e = new f(e), c.bail) throw e; return g(e, c)() } };
                return o.mappings = m.mappings, o.sourcesContent = m.sourcesContent, o.toString = function() { return m.toString() }, i && h && j.set(h, o), o
            };
        h.Compiler = d, a.exports = h
    }, function(a, b) { Object.defineProperty(b, "__esModule", { value: !0 }), b.default = /((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyu]{1,5}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g, b.matchToToken = function(a) { var b = { type: "invalid", value: a[0] }; return a[1] ? (b.type = "string", b.closed = !(!a[3] && !a[4])) : a[5] ? b.type = "comment" : a[6] ? (b.type = "comment", b.closed = !!a[7]) : a[8] ? b.type = "regex" : a[9] ? b.type = "number" : a[10] ? b.type = "name" : a[11] ? b.type = "punctuator" : a[12] && (b.type = "whitespace"), b } }, function(a, b, c) {
        "use strict";

        function d() { this.$extend = function(a) { return a = a || {}, g(a, a instanceof d ? a : this) } }
        var e = c(0),
            f = c(12),
            g = c(13),
            h = c(14),
            i = c(15),
            j = c(16),
            k = c(17),
            l = c(18),
            m = c(19),
            n = c(20),
            o = c(22),
            p = { source: null, filename: null, rules: [m, l], escape: !0, debug: !!e && "production" !== process.env.NODE_ENV, bail: !0, cache: !0, minimize: !0, compileDebug: !1, resolveFilename: o, include: h, htmlMinifier: n, htmlMinifierOptions: { collapseWhitespace: !0, minifyCSS: !0, minifyJS: !0, ignoreCustomFragments: [] }, onerror: i, loader: k, caches: j, root: "/", extname: ".art", ignore: [], imports: f };
        d.prototype = p, a.exports = new d
    }, function(a, b) {
        var c;
        c = function() { return this }();
        try { c = c || Function("return this")() || (0, eval)("this") } catch (a) { "object" == typeof window && (c = window) }
        a.exports = c
    }, function(a, b) {}, function(a, b, c) {
        "use strict";
        var d = c(7),
            e = c(1),
            f = c(24),
            g = function(a, b) { return b instanceof Object ? d({ filename: a }, b) : e({ filename: a, source: b }) };
        g.render = d, g.compile = e, g.defaults = f, a.exports = g
    }, function(a, b, c) {
        "use strict";
        var d = c(1),
            e = function(a, b, c) { return d(a, c)(b) };
        a.exports = e
    }, function(a, b, c) {
        "use strict";

        function d(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") }
        var e = c(9),
            f = c(11),
            g = "$data",
            h = "$imports",
            i = "print",
            j = "include",
            k = "extend",
            l = "block",
            m = "$$out",
            n = "$$line",
            o = "$$blocks",
            p = "$$slice",
            q = "$$from",
            r = "$$options",
            s = function(a, b) { return a.hasOwnProperty(b) },
            t = JSON.stringify,
            u = function() {
                function a(b) {
                    var c, e, s = this;
                    d(this, a);
                    var t = b.source,
                        u = b.minimize,
                        v = b.htmlMinifier;
                    if (this.options = b, this.stacks = [], this.context = [], this.scripts = [], this.CONTEXT_MAP = {}, this.ignore = [g, h, r].concat(b.ignore), this.internal = (c = {}, c[m] = "''", c[n] = "[0,0]", c[o] = "arguments[1]||{}", c[q] = "null", c[i] = "function(){var s=''.concat.apply('',arguments);" + m + "+=s;return s}", c[j] = "function(src,data){var s=" + r + ".include(src,data||" + g + ",arguments[2]||" + o + "," + r + ");" + m + "+=s;return s}", c[k] = "function(from){" + q + "=from}", c[p] = "function(c,p,s){p=" + m + ";" + m + "='';c();s=" + m + ";" + m + "=p+s;return s}", c[l] = "function(){var a=arguments,s;if(typeof a[0]==='function'){return " + p + "(a[0])}else if(" + q + "){" + o + "[a[0]]=" + p + "(a[1])}else{s=" + o + "[a[0]];if(typeof s==='string'){" + m + "+=s}else{s=" + p + "(a[1])}return s}}", c), this.dependencies = (e = {}, e[i] = [m], e[j] = [m, r, g, o], e[k] = [q, j], e[l] = [p, q, m, o], e), this.importContext(m), b.compileDebug && this.importContext(n), u) try { t = v(t, b) } catch (a) {}
                    this.source = t, this.getTplTokens(t, b.rules, this).forEach(function(a) { a.type === f.TYPE_STRING ? s.parseString(a) : s.parseExpression(a) })
                }
                return a.prototype.getTplTokens = function() { return f.apply(void 0, arguments) }, a.prototype.getEsTokens = function(a) { return e(a) }, a.prototype.getVariables = function(a) { var b = !1; return a.filter(function(a) { return "whitespace" !== a.type && "comment" !== a.type }).filter(function(a) { return "name" === a.type && !b || (b = "punctuator" === a.type && "." === a.value, !1) }).map(function(a) { return a.value }) }, a.prototype.importContext = function(a) {
                    var b = this,
                        c = "",
                        d = this.internal,
                        e = this.dependencies,
                        f = this.ignore,
                        i = this.context,
                        j = this.options,
                        k = j.imports,
                        l = this.CONTEXT_MAP;
                    s(l, a) || -1 !== f.indexOf(a) || (s(d, a) ? (c = d[a], s(e, a) && e[a].forEach(function(a) { return b.importContext(a) })) : c = "$escape" === a || "$each" === a || s(k, a) ? h + "." + a : g + "." + a, l[a] = c, i.push({ name: a, value: c }))
                }, a.prototype.parseString = function(a) {
                    var b = a.value;
                    if (b) {
                        var c = m + "+=" + t(b);
                        this.scripts.push({ source: b, tplToken: a, code: c })
                    }
                }, a.prototype.parseExpression = function(a) {
                    var b = this,
                        c = a.value,
                        d = a.script,
                        e = d.output,
                        g = this.options.escape,
                        h = d.code;
                    e && (h = !1 === g || e === f.TYPE_RAW ? m + "+=" + d.code : m + "+=$escape(" + d.code + ")");
                    var i = this.getEsTokens(h);
                    this.getVariables(i).forEach(function(a) { return b.importContext(a) }), this.scripts.push({ source: c, tplToken: a, code: h })
                }, a.prototype.checkExpression = function(a) {
                    for (var b = [
                            [/^\s*}[\w\W]*?{?[\s;]*$/, ""],
                            [/(^[\w\W]*?\([\w\W]*?(?:=>|\([\w\W]*?\))\s*{[\s;]*$)/, "$1})"],
                            [/(^[\w\W]*?\([\w\W]*?\)\s*{[\s;]*$)/, "$1}"]
                        ], c = 0; c < b.length;) {
                        if (b[c][0].test(a)) {
                            var d;
                            a = (d = a).replace.apply(d, b[c]);
                            break
                        }
                        c++
                    }
                    try { return new Function(a), !0 } catch (a) { return !1 }
                }, a.prototype.build = function() {
                    var a = this.options,
                        b = this.context,
                        c = this.scripts,
                        d = this.stacks,
                        e = this.source,
                        i = a.filename,
                        l = a.imports,
                        p = [],
                        u = s(this.CONTEXT_MAP, k),
                        v = 0,
                        w = function(a, b) {
                            var c = b.line,
                                e = b.start,
                                f = { generated: { line: d.length + v + 1, column: 1 }, original: { line: c + 1, column: e + 1 } };
                            return v += a.split(/\n/).length - 1, f
                        },
                        x = function(a) { return a.replace(/^[\t ]+|[\t ]$/g, "") };
                    d.push("function(" + g + "){"), d.push("'use strict'"), d.push(g + "=" + g + "||{}"), d.push("var " + b.map(function(a) { return a.name + "=" + a.value }).join(",")), a.compileDebug ? (d.push("try{"), c.forEach(function(a) { a.tplToken.type === f.TYPE_EXPRESSION && d.push(n + "=[" + [a.tplToken.line, a.tplToken.start].join(",") + "]"), p.push(w(a.code, a.tplToken)), d.push(x(a.code)) }), d.push("}catch(error){"), d.push("throw {" + ["name:'RuntimeError'", "path:" + t(i), "message:error.message", "line:" + n + "[0]+1", "column:" + n + "[1]+1", "source:" + t(e), "stack:error.stack"].join(",") + "}"), d.push("}")) : c.forEach(function(a) { p.push(w(a.code, a.tplToken)), d.push(x(a.code)) }), u && (d.push(m + "=''"), d.push(j + "(" + q + "," + g + "," + o + ")")), d.push("return " + m), d.push("}");
                    var y = d.join("\n");
                    try { var z = new Function(h, r, "return " + y)(l, a); return z.mappings = p, z.sourcesContent = [e], z } catch (a) {
                        for (var A = 0, B = 0, C = 0, D = void 0; A < c.length;) {
                            var E = c[A];
                            if (!this.checkExpression(E.code)) { B = E.tplToken.line, C = E.tplToken.start, D = E.code; break }
                            A++
                        }
                        throw { name: "CompileError", path: i, message: a.message, line: B + 1, column: C + 1, source: e, generated: D, stack: a.stack }
                    }
                }, a
            }();
        u.CONSTS = { DATA: g, IMPORTS: h, PRINT: i, INCLUDE: j, EXTEND: k, BLOCK: l, OPTIONS: r, OUT: m, LINE: n, BLOCKS: o, SLICE: p, FROM: q, ESCAPE: "$escape", EACH: "$each" }, a.exports = u
    }, function(a, b, c) {
        "use strict";
        var d = c(10),
            e = c(2).default,
            f = c(2).matchToToken,
            g = function(a) { return a.match(e).map(function(a) { return e.lastIndex = 0, f(e.exec(a)) }).map(function(a) { return "name" === a.type && d(a.value) && (a.type = "keyword"), a }) };
        a.exports = g
    }, function(a, b, c) {
        "use strict";
        var d = { abstract: !0, await: !0, boolean: !0, break: !0, byte: !0, case: !0, catch: !0, char: !0, class: !0, const: !0, continue: !0, debugger: !0, default: !0, delete: !0, do: !0, double: !0, else: !0, enum: !0, export: !0, extends: !0, false: !0, final: !0, finally: !0, float: !0, for: !0, function: !0, goto: !0, if: !0, implements: !0, import: !0, in: !0, instanceof: !0, int: !0, interface: !0, let: !0, long: !0, native: !0, new: !0, null: !0, package: !0, private: !0, protected: !0, public: !0, return: !0, short: !0, static: !0, super: !0, switch: !0, synchronized: !0, this: !0, throw: !0, transient: !0, true: !0, try: !0, typeof: !0, var: !0, void: !0, volatile: !0, while: !0, with: !0, yield: !0 };
        a.exports = function(a) { return d.hasOwnProperty(a) }
    }, function(a, b, c) {
        "use strict";

        function d(a, b, c, d) { var e = new String(a); return e.line = b, e.start = c, e.end = d, e }
        var e = function(a, b) {
            for (var c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, e = [{ type: "string", value: a, line: 0, start: 0, end: a.length }], f = 0; f < b.length; f++) ! function(a) {
                for (var b = a.test.ignoreCase ? "ig" : "g", f = a.test.source + "|^$|[\\w\\W]", g = new RegExp(f, b), h = 0; h < e.length; h++)
                    if ("string" === e[h].type) {
                        for (var i = e[h].line, j = e[h].start, k = e[h].end, l = e[h].value.match(g), m = [], n = 0; n < l.length; n++) {
                            var o = l[n];
                            a.test.lastIndex = 0;
                            var p = a.test.exec(o),
                                q = p ? "expression" : "string",
                                r = m[m.length - 1],
                                s = r || e[h],
                                t = s.value;
                            j = s.line === i ? r ? r.end : j : t.length - t.lastIndexOf("\n") - 1, k = j + o.length;
                            var u = { type: q, value: o, line: i, start: j, end: k };
                            if ("string" === q) r && "string" === r.type ? (r.value += o, r.end += o.length) : m.push(u);
                            else {
                                p[0] = new d(p[0], i, j, k);
                                var v = a.use.apply(c, p);
                                u.script = v, m.push(u)
                            }
                            i += o.split(/\n/).length - 1
                        }
                        e.splice.apply(e, [h, 1].concat(m)), h += m.length - 1
                    }
            }(b[f]);
            return e
        };
        e.TYPE_STRING = "string", e.TYPE_EXPRESSION = "expression", e.TYPE_RAW = "raw", e.TYPE_ESCAPE = "escape", a.exports = e
    }, function(a, b, c) {
        "use strict";
        (function(b) {
            function d(a) { return "string" != typeof a && (a = void 0 === a || null === a ? "" : "function" == typeof a ? d(a.call(a)) : JSON.stringify(a)), a }

            function e(a) {
                var b = "" + a,
                    c = h.exec(b);
                if (!c) return a;
                var d = "",
                    e = void 0,
                    f = void 0,
                    g = void 0;
                for (e = c.index, f = 0; e < b.length; e++) {
                    switch (b.charCodeAt(e)) {
                        case 34:
                            g = "&#34;";
                            break;
                        case 38:
                            g = "&#38;";
                            break;
                        case 39:
                            g = "&#39;";
                            break;
                        case 60:
                            g = "&#60;";
                            break;
                        case 62:
                            g = "&#62;";
                            break;
                        default:
                            continue
                    }
                    f !== e && (d += b.substring(f, e)), f = e + 1, d += g
                }
                return f !== e ? d + b.substring(f, e) : d
            }
            var f = c(0),
                g = Object.create(f ? b : window),
                h = /["&'<>]/;
            g.$escape = function(a) { return e(d(a)) }, g.$each = function(a, b) {
                if (Array.isArray(a))
                    for (var c = 0, d = a.length; c < d; c++) b(a[c], c);
                else
                    for (var e in a) b(a[e], e)
            }, a.exports = g
        }).call(b, c(4))
    }, function(a, b, c) {
        "use strict";
        var d = Object.prototype.toString,
            e = function(a) { return null === a ? "Null" : d.call(a).slice(8, -1) },
            f = function a(b, c) {
                var d = void 0,
                    f = e(b);
                if ("Object" === f ? d = Object.create(c || {}) : "Array" === f && (d = [].concat(c || [])), d) { for (var g in b) b.hasOwnProperty(g) && (d[g] = a(b[g], d[g])); return d }
                return b
            };
        a.exports = f
    }, function(a, b, c) {
        "use strict";
        var d = function(a, b, d, e) { var f = c(1); return e = e.$extend({ filename: e.resolveFilename(a, e), bail: !0, source: null }), f(e)(b, d) };
        a.exports = d
    }, function(a, b, c) {
        "use strict";
        var d = function(a) { console.error(a.name, a.message) };
        a.exports = d
    }, function(a, b, c) {
        "use strict";
        var d = { __data: Object.create(null), set: function(a, b) { this.__data[a] = b }, get: function(a) { return this.__data[a] }, reset: function() { this.__data = {} } };
        a.exports = d
    }, function(a, b, c) {
        "use strict";
        var d = c(0),
            e = function(a) { if (d) return c(5).readFileSync(a, "utf8"); var b = document.getElementById(a); return b.value || b.innerHTML };
        a.exports = e
    }, function(a, b, c) {
        "use strict";
        var d = {
            test: /{{([@#]?)[ \t]*(\/?)([\w\W]*?)[ \t]*}}/,
            use: function(a, b, c, e) {
                var f = this,
                    g = f.options,
                    h = f.getEsTokens(e),
                    i = h.map(function(a) { return a.value }),
                    j = {},
                    k = void 0,
                    l = !!b && "raw",
                    m = c + i.shift(),
                    n = function(b, c) { console.warn((g.filename || "anonymous") + ":" + (a.line + 1) + ":" + (a.start + 1) + "\nTemplate upgrade: {{" + b + "}} -> {{" + c + "}}") };
                switch ("#" === b && n("#value", "@value"), m) {
                    case "set":
                        e = "var " + i.join("").trim();
                        break;
                    case "if":
                        e = "if(" + i.join("").trim() + "){";
                        break;
                    case "else":
                        var o = i.indexOf("if");
                        ~o ? (i.splice(0, o + 1), e = "}else if(" + i.join("").trim() + "){") : e = "}else{";
                        break;
                    case "/if":
                        e = "}";
                        break;
                    case "each":
                        k = d._split(h), k.shift(), "as" === k[1] && (n("each object as value index", "each object value index"), k.splice(1, 1)), e = "$each(" + (k[0] || "$data") + ",function(" + (k[1] || "$value") + "," + (k[2] || "$index") + "){";
                        break;
                    case "/each":
                        e = "})";
                        break;
                    case "block":
                        k = d._split(h), k.shift(), e = "block(" + k.join(",").trim() + ",function(){";
                        break;
                    case "/block":
                        e = "})";
                        break;
                    case "echo":
                        m = "print", n("echo value", "value");
                    case "print":
                    case "include":
                    case "extend":
                        if (0 !== i.join("").trim().indexOf("(")) { k = d._split(h), k.shift(), e = m + "(" + k.join(",") + ")"; break }
                    default:
                        if (~i.indexOf("|")) {
                            var p = h.reduce(function(a, b) {
                                var c = b.value,
                                    d = b.type;
                                return "|" === c ? a.push([]) : "whitespace" !== d && "comment" !== d && (a.length || a.push([]), ":" === c && 1 === a[a.length - 1].length ? n("value | filter: argv", "value | filter argv") : a[a.length - 1].push(b)), a
                            }, []).map(function(a) { return d._split(a) });
                            e = p.reduce(function(a, b) { var c = b.shift(); return b.unshift(a), "$imports." + c + "(" + b.join(",") + ")" }, p.shift().join(" ").trim())
                        }
                        l = l || "escape"
                }
                return j.code = e, j.output = l, j
            },
            _split: function(a) {
                a = a.filter(function(a) { var b = a.type; return "whitespace" !== b && "comment" !== b });
                for (var b = 0, c = a.shift(), d = /\]|\)/, e = [
                        [c]
                    ]; b < a.length;) { var f = a[b]; "punctuator" === f.type || "punctuator" === c.type && !d.test(c.value) ? e[e.length - 1].push(f) : e.push([f]), c = f, b++ }
                return e.map(function(a) { return a.map(function(a) { return a.value }).join("") })
            }
        };
        a.exports = d
    }, function(a, b, c) {
        "use strict";
        var d = { test: /<%(#?)((?:==|=#|[=-])?)[ \t]*([\w\W]*?)[ \t]*(-?)%>/, use: function(a, b, c, d) { return c = { "-": "raw", "=": "escape", "": !1, "==": "raw", "=#": "raw" }[c], b && (d = "/*" + d + "*/", c = !1), { code: d, output: c } } };
        a.exports = d
    }, function(a, b, c) {
        "use strict";
        var d = c(0),
            e = function(a, b) {
                if (d) {
                    var e, f = c(21).minify,
                        g = b.htmlMinifierOptions,
                        h = b.rules.map(function(a) { return a.test });
                    (e = g.ignoreCustomFragments).push.apply(e, h), a = f(a, g)
                }
                return a
            };
        a.exports = e
    }, function(a, b) {! function(a) { a.noop = function() {} }("object" == typeof a && "object" == typeof a.exports ? a.exports : window) }, function(a, b, c) {
        "use strict";
        var d = c(0),
            e = /^\.+\//,
            f = function(a, b) {
                if (d) {
                    var f = c(5),
                        g = b.root,
                        h = b.extname;
                    if (e.test(a)) {
                        var i = b.filename,
                            j = !i || a === i,
                            k = j ? g : f.dirname(i);
                        a = f.resolve(k, a)
                    } else a = f.resolve(g, a);
                    f.extname(a) || (a += h)
                }
                return a
            };
        a.exports = f
    }, function(a, b, c) {
        "use strict";

        function d(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") }

        function e(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b }

        function f(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }

        function g(a) {
            var b = a.name,
                c = a.source,
                d = a.path,
                e = a.line,
                f = a.column,
                g = a.generated,
                h = a.message;
            if (!c) return h;
            var i = c.split(/\n/),
                j = Math.max(e - 3, 0),
                k = Math.min(i.length, e + 3),
                l = i.slice(j, k).map(function(a, b) { var c = b + j + 1; return (c === e ? " >> " : "    ") + c + "| " + a }).join("\n");
            return (d || "anonymous") + ":" + e + ":" + f + "\n" + l + "\n\n" + b + ": " + h + (g ? "\n   generated: " + g : "")
        }
        var h = function(a) {
            function b(c) { d(this, b); var f = e(this, a.call(this, c.message)); return f.name = "TemplateError", f.message = g(c), Error.captureStackTrace && Error.captureStackTrace(f, f.constructor), f }
            return f(b, a), b
        }(Error);
        a.exports = h
    }, function(a, b, c) {
        "use strict";
        a.exports = c(3)
    }])
});
! function(a) {
    var b = "undefined" != typeof window,
        c = b ? window : this,
        d = function() { return a(b, c) };
    "undefined" != typeof define && define.amd ? define("IDValidator", [], d) : "function" == typeof define && define.cmd ? define(function(d, e, f) { f.exports = a(b, c) }) : "undefined" != typeof module && module.exports ? module.exports = a(b, c) : c.IDValidator = a(b, c)
}(function(a, b) {
    var c = { error: { longNumber: "é•¿æ•°å­—å­˜åœ¨ç²¾åº¦é—®é¢˜ï¼Œè¯·ä½¿ç”¨å­—ç¬¦ä¸²ä¼ å€¼ï¼ Long number is not allowed, because the precision of the Number In JavaScript." } },
        d = {
            checkArg: function(a, b) {
                var d = typeof a;
                switch (d) {
                    case "number":
                        if (a = a.toString(), a.length > 15) return this.error(c.error.longNumber), !1;
                        break;
                    case "string":
                        break;
                    default:
                        return !1
                }
                if (a = a.toUpperCase(), b && !isNaN(b) && (b = parseInt(b), a.length !== b)) return !1;
                var e = null;
                if (18 === a.length) e = { body: a.slice(0, 17), checkBit: a.slice(-1), type: 18 };
                else {
                    if (15 !== a.length) return !1;
                    e = { body: a, type: 15 }
                }
                return e
            },
            checkAddr: function(a, b) { var c = this.getAddrInfo(a, b); return c !== !1 },
            getAddrInfo: function(a, b) { if (b = b || null, null === b) return a; if (b.hasOwnProperty(a)) return b[a]; var c; return c = a.slice(0, 4) + "00", b.hasOwnProperty(c) ? b[c] + "æœªçŸ¥åœ°åŒº" : (c = a.slice(0, 2) + "0000", b.hasOwnProperty(c) ? b[c] + "æœªçŸ¥åœ°åŒº" : !1) },
            checkBirth: function(a) {
                var b, c, d;
                if (8 == a.length) b = parseInt(a.slice(0, 4), 10), c = parseInt(a.slice(4, 6), 10), d = parseInt(a.slice(-2), 10);
                else {
                    if (6 != a.length) return !1;
                    b = parseInt("19" + a.slice(0, 2), 10), c = parseInt(a.slice(2, 4), 10), d = parseInt(a.slice(-2), 10)
                }
                return !(c > 12 || 0 === c || d > 31 || 0 === d)
            },
            checkOrder: function(a) { return !0 },
            weight: function(a) { return Math.pow(2, a - 1) % 11 },
            rand: function(a, b) { return b = b || 1, Math.round(Math.random() * (a - b)) + b },
            str_pad: function(a, b, c, d) { if (a = a.toString(), b = b || 2, c = c || "0", d = d || !1, a.length >= b) return a; for (var e = 0, f = b - a.length; f > e; e++) d ? a += c : a = c + a; return a },
            error: function(a) { var b = new Error; throw b.message = "IDValidator: " + a, b }
        },
        e = function(a) { "undefined" != typeof a && (this.GB2260 = a), this.cache = {} };
    return e.prototype = {
        isValid: function(a, b) {
            var c = this.GB2260 || null,
                e = d.checkArg(a, b);
            if (e === !1) return !1;
            if (this.cache.hasOwnProperty(a) && "undefined" != typeof this.cache[a].valid) return this.cache[a].valid;
            this.cache.hasOwnProperty(a) || (this.cache[a] = {});
            var f = e.body.slice(0, 6),
                g = 18 === e.type ? e.body.slice(6, 14) : e.body.slice(6, 12),
                h = e.body.slice(-3);
            if (!(d.checkAddr(f, c) && d.checkBirth(g) && d.checkOrder(h))) return this.cache[a].valid = !1, !1;
            if (15 === e.type) return this.cache[a].valid = !0, !0;
            for (var i = [], j = 18; j > 1; j--) {
                var k = d.weight(j);
                i[j] = k
            }
            for (var l = 0, m = e.body.split(""), n = 0; n < m.length; n++) l += parseInt(m[n], 10) * i[18 - n];
            var o = 12 - l % 11;
            return 10 == o ? o = "X" : o > 10 && (o %= 11), o = "number" == typeof o ? o.toString() : o, o !== e.checkBit ? (this.cache[a].valid = !1, !1) : (this.cache[a].valid = !0, !0)
        },
        getInfo: function(a, b) {
            var c = this.GB2260 || null;
            if (this.isValid(a, b) === !1) return !1;
            var e = d.checkArg(a);
            if ("undefined" != typeof this.cache[a].info) return this.cache[a].info;
            var f = e.body.slice(0, 6),
                g = 18 === e.type ? e.body.slice(6, 14) : e.body.slice(6, 12),
                h = e.body.slice(-3),
                i = {};
            return i.addrCode = f, null !== c && (i.addr = d.getAddrInfo(f, c)), i.birth = 18 === e.type ? [g.slice(0, 4), g.slice(4, 6), g.slice(-2)].join("-") : ["19" + g.slice(0, 2), g.slice(2, 4), g.slice(-2)].join("-"), i.sex = h % 2 === 0 ? 0 : 1, i.length = e.type, 18 === e.type && (i.checkBit = e.checkBit), this.cache[a].info = i, i
        },
        makeID: function(a) {
            var b = this.GB2260 || null,
                c = null;
            if (null !== b)
                for (var e = 0; null === c;) {
                    if (e > 10) { c = 110101; break }
                    var f = d.str_pad(d.rand(50), 2, "0"),
                        g = d.str_pad(d.rand(20), 2, "0"),
                        h = d.str_pad(d.rand(20), 2, "0"),
                        i = [f, g, h].join("");
                    if (b[i]) { c = i; break }
                } else c = 110101;
            var j = d.str_pad(d.rand(99, 50), 2, "0"),
                k = d.str_pad(d.rand(12, 1), 2, "0"),
                l = d.str_pad(d.rand(28, 1), 2, "0");
            if (a) return c + j + k + l + d.str_pad(d.rand(999, 1), 3, "1");
            j = "19" + j;
            for (var m = c + j + k + l + d.str_pad(d.rand(999, 1), 3, "1"), n = [], o = 18; o > 1; o--) {
                var p = d.weight(o);
                n[o] = p
            }
            for (var q = 0, r = m.split(""), s = 0; s < r.length; s++) q += parseInt(r[s], 10) * n[18 - s];
            var t = 12 - q % 11;
            return 10 == t ? t = "X" : t > 10 && (t %= 11), t = "number" == typeof t ? t.toString() : t, m + t
        }
    }, e
});
! function(a) {
    var b = "undefined" != typeof window,
        c = b ? window : this;
    "undefined" != typeof define && define.amd ? define([], a()) : "function" == typeof define && define.cmd ? define(function(b, c, d) { d.exports = a() }) : "undefined" != typeof module && module.exports ? module.exports = a() : c.GB2260 = a()
}(function() { var a = { 11e4: "åŒ—äº¬å¸‚", 110100: "åŒ—äº¬å¸‚å¸‚è¾–åŒº", 110101: "åŒ—äº¬å¸‚ä¸œåŸŽåŒº", 110102: "åŒ—äº¬å¸‚è¥¿åŸŽåŒº", 110103: "åŒ—äº¬å¸‚å´‡æ–‡åŒº", 110104: "åŒ—äº¬å¸‚å®£æ­¦åŒº", 110105: "åŒ—äº¬å¸‚æœé˜³åŒº", 110106: "åŒ—äº¬å¸‚ä¸°å°åŒº", 110107: "åŒ—äº¬å¸‚çŸ³æ™¯å±±åŒº", 110108: "åŒ—äº¬å¸‚æµ·æ·€åŒº", 110109: "åŒ—äº¬å¸‚é—¨å¤´æ²ŸåŒº", 110111: "åŒ—äº¬å¸‚æˆ¿å±±åŒº", 110112: "åŒ—äº¬å¸‚é€šå·žåŒº", 110113: "åŒ—äº¬å¸‚é¡ºä¹‰åŒº", 110200: "åŒ—äº¬å¸‚åŽ¿", 110221: "åŒ—äº¬å¸‚æ˜Œå¹³åŽ¿", 110224: "åŒ—äº¬å¸‚å¤§å…´åŽ¿", 110226: "åŒ—äº¬å¸‚å¹³è°·åŽ¿", 110227: "åŒ—äº¬å¸‚æ€€æŸ”åŽ¿", 110228: "åŒ—äº¬å¸‚å¯†äº‘åŽ¿", 110229: "åŒ—äº¬å¸‚å»¶åº†åŽ¿", 12e4: "å¤©æ´¥å¸‚", 120100: "å¤©æ´¥å¸‚å¸‚è¾–åŒº", 120101: "å¤©æ´¥å¸‚å’Œå¹³åŒº", 120102: "å¤©æ´¥å¸‚æ²³ä¸œåŒº", 120103: "å¤©æ´¥å¸‚æ²³è¥¿åŒº", 120104: "å¤©æ´¥å¸‚å—å¼€åŒº", 120105: "å¤©æ´¥å¸‚æ²³åŒ—åŒº", 120106: "å¤©æ´¥å¸‚çº¢æ¡¥åŒº", 120107: "å¤©æ´¥å¸‚å¡˜æ²½åŒº", 120108: "å¤©æ´¥å¸‚æ±‰æ²½åŒº", 120109: "å¤©æ´¥å¸‚å¤§æ¸¯åŒº", 120110: "å¤©æ´¥å¸‚ä¸œä¸½åŒº", 120111: "å¤©æ´¥å¸‚è¥¿é’åŒº", 120112: "å¤©æ´¥å¸‚æ´¥å—åŒº", 120113: "å¤©æ´¥å¸‚åŒ—è¾°åŒº", 120200: "å¤©æ´¥å¸‚åŽ¿", 120221: "å¤©æ´¥å¸‚å®æ²³åŽ¿", 120222: "å¤©æ´¥å¸‚æ­¦æ¸…åŽ¿", 120223: "å¤©æ´¥å¸‚é™æµ·åŽ¿", 120224: "å¤©æ´¥å¸‚å®å»åŽ¿", 120225: "å¤©æ´¥å¸‚è“ŸåŽ¿", 13e4: "æ²³åŒ—çœ", 130100: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚", 130101: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚å¸‚è¾–åŒº", 130102: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚é•¿å®‰åŒº", 130103: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚æ¡¥ä¸œåŒº", 130104: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚æ¡¥è¥¿åŒº", 130105: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚æ–°åŽåŒº", 130106: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚éƒŠåŒº", 130107: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚äº•é™‰çŸ¿åŒº", 130121: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚äº•é™‰åŽ¿", 130123: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚æ­£å®šåŽ¿", 130124: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚æ ¾åŸŽåŽ¿", 130125: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚è¡Œå”åŽ¿", 130126: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚çµå¯¿åŽ¿", 130127: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚é«˜é‚‘åŽ¿", 130128: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚æ·±æ³½åŽ¿", 130129: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚èµžçš‡åŽ¿", 130130: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚æ— æžåŽ¿", 130131: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚å¹³å±±åŽ¿", 130132: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚å…ƒæ°åŽ¿", 130133: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚èµµåŽ¿", 130181: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚è¾›é›†å¸‚", 130182: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚è—åŸŽå¸‚", 130183: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚æ™‹å·žå¸‚", 130184: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚æ–°ä¹å¸‚", 130185: "æ²³åŒ—çœçŸ³å®¶åº„å¸‚é¹¿æ³‰å¸‚", 130200: "æ²³åŒ—çœå”å±±å¸‚", 130201: "æ²³åŒ—çœå”å±±å¸‚å¸‚è¾–åŒº", 130202: "æ²³åŒ—çœå”å±±å¸‚è·¯å—åŒº", 130203: "æ²³åŒ—çœå”å±±å¸‚è·¯åŒ—åŒº", 130204: "æ²³åŒ—çœå”å±±å¸‚å¤å†¶åŒº", 130205: "æ²³åŒ—çœå”å±±å¸‚å¼€å¹³åŒº", 130206: "æ²³åŒ—çœå”å±±å¸‚æ–°åŒº", 130221: "æ²³åŒ—çœå”å±±å¸‚ä¸°æ¶¦åŽ¿", 130223: "æ²³åŒ—çœå”å±±å¸‚æ»¦åŽ¿", 130224: "æ²³åŒ—çœå”å±±å¸‚æ»¦å—åŽ¿", 130225: "æ²³åŒ—çœå”å±±å¸‚ä¹äº­åŽ¿", 130227: "æ²³åŒ—çœå”å±±å¸‚è¿è¥¿åŽ¿", 130229: "æ²³åŒ—çœå”å±±å¸‚çŽ‰ç”°åŽ¿", 130230: "æ²³åŒ—çœå”å±±å¸‚å”æµ·åŽ¿", 130281: "æ²³åŒ—çœå”å±±å¸‚éµåŒ–å¸‚", 130282: "æ²³åŒ—çœå”å±±å¸‚ä¸°å—å¸‚", 130283: "æ²³åŒ—çœå”å±±å¸‚è¿å®‰å¸‚", 130300: "æ²³åŒ—çœç§¦çš‡å²›å¸‚ç§¦çš‡å²›å¸‚", 130301: "æ²³åŒ—çœç§¦çš‡å²›å¸‚å¸‚è¾–åŒº", 130302: "æ²³åŒ—çœç§¦çš‡å²›å¸‚æµ·æ¸¯åŒº", 130303: "æ²³åŒ—çœç§¦çš‡å²›å¸‚å±±æµ·å…³åŒº", 130304: "æ²³åŒ—çœç§¦çš‡å²›å¸‚åŒ—æˆ´æ²³åŒº", 130321: "æ²³åŒ—çœç§¦çš‡å²›å¸‚é’é¾™æ»¡æ—è‡ªæ²»åŽ¿", 130322: "æ²³åŒ—çœç§¦çš‡å²›å¸‚æ˜Œé»ŽåŽ¿", 130323: "æ²³åŒ—çœç§¦çš‡å²›å¸‚æŠšå®åŽ¿", 130324: "æ²³åŒ—çœç§¦çš‡å²›å¸‚å¢é¾™åŽ¿", 130400: "æ²³åŒ—çœé‚¯éƒ¸å¸‚é‚¯éƒ¸å¸‚", 130401: "æ²³åŒ—çœé‚¯éƒ¸å¸‚å¸‚è¾–åŒº", 130402: "æ²³åŒ—çœé‚¯éƒ¸å¸‚é‚¯å±±åŒº", 130403: "æ²³åŒ—çœé‚¯éƒ¸å¸‚ä¸›å°åŒº", 130404: "æ²³åŒ—çœé‚¯éƒ¸å¸‚å¤å…´åŒº", 130406: "æ²³åŒ—çœé‚¯éƒ¸å¸‚å³°å³°çŸ¿åŒº", 130421: "æ²³åŒ—çœé‚¯éƒ¸å¸‚é‚¯éƒ¸åŽ¿", 130423: "æ²³åŒ—çœé‚¯éƒ¸å¸‚ä¸´æ¼³åŽ¿", 130424: "æ²³åŒ—çœé‚¯éƒ¸å¸‚æˆå®‰åŽ¿", 130425: "æ²³åŒ—çœé‚¯éƒ¸å¸‚å¤§ååŽ¿", 130426: "æ²³åŒ—çœé‚¯éƒ¸å¸‚æ¶‰åŽ¿", 130427: "æ²³åŒ—çœé‚¯éƒ¸å¸‚ç£åŽ¿", 130428: "æ²³åŒ—çœé‚¯éƒ¸å¸‚è‚¥ä¹¡åŽ¿", 130429: "æ²³åŒ—çœé‚¯éƒ¸å¸‚æ°¸å¹´åŽ¿", 130430: "æ²³åŒ—çœé‚¯éƒ¸å¸‚é‚±åŽ¿", 130431: "æ²³åŒ—çœé‚¯éƒ¸å¸‚é¸¡æ³½åŽ¿", 130432: "æ²³åŒ—çœé‚¯éƒ¸å¸‚å¹¿å¹³åŽ¿", 130433: "æ²³åŒ—çœé‚¯éƒ¸å¸‚é¦†é™¶åŽ¿", 130434: "æ²³åŒ—çœé‚¯éƒ¸å¸‚é­åŽ¿", 130435: "æ²³åŒ—çœé‚¯éƒ¸å¸‚æ›²å‘¨åŽ¿", 130481: "æ²³åŒ—çœé‚¯éƒ¸å¸‚æ­¦å®‰å¸‚", 130500: "æ²³åŒ—çœé‚¢å°å¸‚", 130501: "æ²³åŒ—çœé‚¢å°å¸‚å¸‚è¾–åŒº", 130502: "æ²³åŒ—çœé‚¢å°å¸‚æ¡¥ä¸œåŒº", 130503: "æ²³åŒ—çœé‚¢å°å¸‚æ¡¥è¥¿åŒº", 130521: "æ²³åŒ—çœé‚¢å°å¸‚é‚¢å°åŽ¿", 130522: "æ²³åŒ—çœé‚¢å°å¸‚ä¸´åŸŽåŽ¿", 130523: "æ²³åŒ—çœé‚¢å°å¸‚å†…ä¸˜åŽ¿", 130524: "æ²³åŒ—çœé‚¢å°å¸‚æŸä¹¡åŽ¿", 130525: "æ²³åŒ—çœé‚¢å°å¸‚éš†å°§åŽ¿", 130526: "æ²³åŒ—çœé‚¢å°å¸‚ä»»åŽ¿", 130527: "æ²³åŒ—çœé‚¢å°å¸‚å—å’ŒåŽ¿", 130528: "æ²³åŒ—çœé‚¢å°å¸‚å®æ™‹åŽ¿", 130529: "æ²³åŒ—çœé‚¢å°å¸‚å·¨é¹¿åŽ¿", 130530: "æ²³åŒ—çœé‚¢å°å¸‚æ–°æ²³åŽ¿", 130531: "æ²³åŒ—çœé‚¢å°å¸‚å¹¿å®—åŽ¿", 130532: "æ²³åŒ—çœé‚¢å°å¸‚å¹³ä¹¡åŽ¿", 130533: "æ²³åŒ—çœé‚¢å°å¸‚å¨åŽ¿", 130534: "æ²³åŒ—çœé‚¢å°å¸‚æ¸…æ²³åŽ¿", 130535: "æ²³åŒ—çœé‚¢å°å¸‚ä¸´è¥¿åŽ¿", 130581: "æ²³åŒ—çœé‚¢å°å¸‚å—å®«å¸‚", 130582: "æ²³åŒ—çœé‚¢å°å¸‚æ²™æ²³å¸‚", 130600: "æ²³åŒ—çœä¿å®šå¸‚", 130601: "æ²³åŒ—çœä¿å®šå¸‚å¸‚è¾–åŒº", 130602: "æ²³åŒ—çœä¿å®šå¸‚æ–°å¸‚åŒº", 130603: "æ²³åŒ—çœä¿å®šå¸‚åŒ—å¸‚åŒº", 130604: "æ²³åŒ—çœä¿å®šå¸‚å—å¸‚åŒº", 130621: "æ²³åŒ—çœä¿å®šå¸‚æ»¡åŸŽåŽ¿", 130622: "æ²³åŒ—çœä¿å®šå¸‚æ¸…è‹‘åŽ¿", 130623: "æ²³åŒ—çœä¿å®šå¸‚æ¶žæ°´åŽ¿", 130624: "æ²³åŒ—çœä¿å®šå¸‚é˜œå¹³åŽ¿", 130625: "æ²³åŒ—çœä¿å®šå¸‚å¾æ°´åŽ¿", 130626: "æ²³åŒ—çœä¿å®šå¸‚å®šå…´åŽ¿", 130627: "æ²³åŒ—çœä¿å®šå¸‚å”åŽ¿", 130628: "æ²³åŒ—çœä¿å®šå¸‚é«˜é˜³åŽ¿", 130629: "æ²³åŒ—çœä¿å®šå¸‚å®¹åŸŽåŽ¿", 130630: "æ²³åŒ—çœä¿å®šå¸‚æ¶žæºåŽ¿", 130631: "æ²³åŒ—çœä¿å®šå¸‚æœ›éƒ½åŽ¿", 130632: "æ²³åŒ—çœä¿å®šå¸‚å®‰æ–°åŽ¿", 130633: "æ²³åŒ—çœä¿å®šå¸‚æ˜“åŽ¿", 130634: "æ²³åŒ—çœä¿å®šå¸‚æ›²é˜³åŽ¿", 130635: "æ²³åŒ—çœä¿å®šå¸‚è ¡åŽ¿", 130636: "æ²³åŒ—çœä¿å®šå¸‚é¡ºå¹³åŽ¿", 130637: "æ²³åŒ—çœä¿å®šå¸‚åšé‡ŽåŽ¿", 130638: "æ²³åŒ—çœä¿å®šå¸‚é›„åŽ¿", 130681: "æ²³åŒ—çœä¿å®šå¸‚æ¶¿å·žå¸‚", 130682: "æ²³åŒ—çœä¿å®šå¸‚å®šå·žå¸‚", 130683: "æ²³åŒ—çœä¿å®šå¸‚å®‰å›½å¸‚", 130684: "æ²³åŒ—çœä¿å®šå¸‚é«˜ç¢‘åº—å¸‚", 130700: "æ²³åŒ—çœå¼ å®¶å£å¸‚", 130701: "æ²³åŒ—çœå¼ å®¶å£å¸‚å¸‚è¾–åŒº", 130702: "æ²³åŒ—çœå¼ å®¶å£å¸‚æ¡¥ä¸œåŒº", 130703: "æ²³åŒ—çœå¼ å®¶å£å¸‚æ¡¥è¥¿åŒº", 130705: "æ²³åŒ—çœå¼ å®¶å£å¸‚å®£åŒ–åŒº", 130706: "æ²³åŒ—çœå¼ å®¶å£å¸‚ä¸‹èŠ±å›­åŒº", 130721: "æ²³åŒ—çœå¼ å®¶å£å¸‚å®£åŒ–åŽ¿", 130722: "æ²³åŒ—çœå¼ å®¶å£å¸‚å¼ åŒ—åŽ¿", 130723: "æ²³åŒ—çœå¼ å®¶å£å¸‚åº·ä¿åŽ¿", 130724: "æ²³åŒ—çœå¼ å®¶å£å¸‚æ²½æºåŽ¿", 130725: "æ²³åŒ—çœå¼ å®¶å£å¸‚å°šä¹‰åŽ¿", 130726: "æ²³åŒ—çœå¼ å®¶å£å¸‚è”šåŽ¿", 130727: "æ²³åŒ—çœå¼ å®¶å£å¸‚é˜³åŽŸåŽ¿", 130728: "æ²³åŒ—çœå¼ å®¶å£å¸‚æ€€å®‰åŽ¿", 130729: "æ²³åŒ—çœå¼ å®¶å£å¸‚ä¸‡å…¨åŽ¿", 130730: "æ²³åŒ—çœå¼ å®¶å£å¸‚æ€€æ¥åŽ¿", 130731: "æ²³åŒ—çœå¼ å®¶å£å¸‚æ¶¿é¹¿åŽ¿", 130732: "æ²³åŒ—çœå¼ å®¶å£å¸‚èµ¤åŸŽåŽ¿", 130733: "æ²³åŒ—çœå¼ å®¶å£å¸‚å´‡ç¤¼åŽ¿", 130800: "æ²³åŒ—çœæ‰¿å¾·å¸‚", 130801: "æ²³åŒ—çœæ‰¿å¾·å¸‚å¸‚è¾–åŒº", 130802: "æ²³åŒ—çœæ‰¿å¾·å¸‚åŒæ¡¥åŒº", 130803: "æ²³åŒ—çœæ‰¿å¾·å¸‚åŒæ»¦åŒº", 130804: "æ²³åŒ—çœæ‰¿å¾·å¸‚é¹°æ‰‹è¥å­çŸ¿åŒº", 130821: "æ²³åŒ—çœæ‰¿å¾·å¸‚æ‰¿å¾·åŽ¿", 130822: "æ²³åŒ—çœæ‰¿å¾·å¸‚å…´éš†åŽ¿", 130823: "æ²³åŒ—çœæ‰¿å¾·å¸‚å¹³æ³‰åŽ¿", 130824: "æ²³åŒ—çœæ‰¿å¾·å¸‚æ»¦å¹³åŽ¿", 130825: "æ²³åŒ—çœæ‰¿å¾·å¸‚éš†åŒ–åŽ¿", 130826: "æ²³åŒ—çœæ‰¿å¾·å¸‚ä¸°å®æ»¡æ—è‡ªæ²»åŽ¿", 130827: "æ²³åŒ—çœæ‰¿å¾·å¸‚å®½åŸŽæ»¡æ—è‡ªæ²»åŽ¿", 130828: "æ²³åŒ—çœæ‰¿å¾·å¸‚å›´åœºæ»¡æ—è’™å¤æ—è‡ªæ²»åŽ¿", 130900: "æ²³åŒ—çœæ²§å·žå¸‚", 130901: "æ²³åŒ—çœæ²§å·žå¸‚å¸‚è¾–åŒº", 130902: "æ²³åŒ—çœæ²§å·žå¸‚æ–°åŽåŒº", 130903: "æ²³åŒ—çœæ²§å·žå¸‚è¿æ²³åŒº", 130921: "æ²³åŒ—çœæ²§å·žå¸‚æ²§åŽ¿", 130922: "æ²³åŒ—çœæ²§å·žå¸‚é’åŽ¿", 130923: "æ²³åŒ—çœæ²§å·žå¸‚ä¸œå…‰åŽ¿", 130924: "æ²³åŒ—çœæ²§å·žå¸‚æµ·å…´åŽ¿", 130925: "æ²³åŒ—çœæ²§å·žå¸‚ç›å±±åŽ¿", 130926: "æ²³åŒ—çœæ²§å·žå¸‚è‚ƒå®åŽ¿", 130927: "æ²³åŒ—çœæ²§å·žå¸‚å—çš®åŽ¿", 130928: "æ²³åŒ—çœæ²§å·žå¸‚å´æ¡¥åŽ¿", 130929: "æ²³åŒ—çœæ²§å·žå¸‚çŒ®åŽ¿", 130930: "æ²³åŒ—çœæ²§å·žå¸‚å­Ÿæ‘å›žæ—è‡ªæ²»åŽ¿", 130981: "æ²³åŒ—çœæ²§å·žå¸‚æ³Šå¤´å¸‚", 130982: "æ²³åŒ—çœæ²§å·žå¸‚ä»»ä¸˜å¸‚", 130983: "æ²³åŒ—çœæ²§å·žå¸‚é»„éª…å¸‚", 130984: "æ²³åŒ—çœæ²§å·žå¸‚æ²³é—´å¸‚", 131e3: "æ²³åŒ—çœå»ŠåŠå¸‚", 131001: "æ²³åŒ—çœå»ŠåŠå¸‚å¸‚è¾–åŒº", 131002: "æ²³åŒ—çœå»ŠåŠå¸‚å®‰æ¬¡åŒº", 131022: "æ²³åŒ—çœå»ŠåŠå¸‚å›ºå®‰åŽ¿", 131023: "æ²³åŒ—çœå»ŠåŠå¸‚æ°¸æ¸…åŽ¿", 131024: "æ²³åŒ—çœå»ŠåŠå¸‚é¦™æ²³åŽ¿", 131025: "æ²³åŒ—çœå»ŠåŠå¸‚å¤§åŸŽåŽ¿", 131026: "æ²³åŒ—çœå»ŠåŠå¸‚æ–‡å®‰åŽ¿", 131028: "æ²³åŒ—çœå»ŠåŠå¸‚å¤§åŽ‚å›žæ—è‡ªæ²»åŽ¿", 131081: "æ²³åŒ—çœå»ŠåŠå¸‚éœ¸å·žå¸‚", 131082: "æ²³åŒ—çœå»ŠåŠå¸‚ä¸‰æ²³å¸‚", 131100: "æ²³åŒ—çœè¡¡æ°´å¸‚", 131101: "æ²³åŒ—çœè¡¡æ°´å¸‚å¸‚è¾–åŒº", 131102: "æ²³åŒ—çœè¡¡æ°´å¸‚æ¡ƒåŸŽåŒº", 131121: "æ²³åŒ—çœè¡¡æ°´å¸‚æž£å¼ºåŽ¿", 131122: "æ²³åŒ—çœè¡¡æ°´å¸‚æ­¦é‚‘åŽ¿", 131123: "æ²³åŒ—çœè¡¡æ°´å¸‚æ­¦å¼ºåŽ¿", 131124: "æ²³åŒ—çœè¡¡æ°´å¸‚é¥¶é˜³åŽ¿", 131125: "æ²³åŒ—çœè¡¡æ°´å¸‚å®‰å¹³åŽ¿", 131126: "æ²³åŒ—çœè¡¡æ°´å¸‚æ•…åŸŽåŽ¿", 131127: "æ²³åŒ—çœè¡¡æ°´å¸‚æ™¯åŽ¿", 131128: "æ²³åŒ—çœè¡¡æ°´å¸‚é˜œåŸŽåŽ¿", 131181: "æ²³åŒ—çœè¡¡æ°´å¸‚å†€å·žå¸‚", 131182: "æ²³åŒ—çœè¡¡æ°´å¸‚æ·±å·žå¸‚", 14e4: "å±±è¥¿çœ", 140100: "å±±è¥¿çœå¤ªåŽŸå¸‚", 140101: "å±±è¥¿çœå¤ªåŽŸå¸‚å¸‚è¾–åŒº", 140105: "å±±è¥¿çœå¤ªåŽŸå¸‚å°åº—åŒº", 140106: "å±±è¥¿çœå¤ªåŽŸå¸‚è¿Žæ³½åŒº", 140107: "å±±è¥¿çœå¤ªåŽŸå¸‚æèŠ±å²­åŒº", 140108: "å±±è¥¿çœå¤ªåŽŸå¸‚å°–è‰åªåŒº", 140109: "å±±è¥¿çœå¤ªåŽŸå¸‚ä¸‡æŸæž—åŒº", 140110: "å±±è¥¿çœå¤ªåŽŸå¸‚æ™‹æºåŒº", 140121: "å±±è¥¿çœå¤ªåŽŸå¸‚æ¸…å¾åŽ¿", 140122: "å±±è¥¿çœå¤ªåŽŸå¸‚é˜³æ›²åŽ¿", 140123: "å±±è¥¿çœå¤ªåŽŸå¸‚å¨„çƒ¦åŽ¿", 140181: "å±±è¥¿çœå¤ªåŽŸå¸‚å¤äº¤å¸‚", 140200: "å±±è¥¿çœå¤§åŒå¸‚", 140201: "å±±è¥¿çœå¤§åŒå¸‚å¸‚è¾–åŒº", 140202: "å±±è¥¿çœå¤§åŒå¸‚åŸŽåŒº", 140203: "å±±è¥¿çœå¤§åŒå¸‚çŸ¿åŒº", 140211: "å±±è¥¿çœå¤§åŒå¸‚å—éƒŠåŒº", 140212: "å±±è¥¿çœå¤§åŒå¸‚æ–°è£åŒº", 140221: "å±±è¥¿çœå¤§åŒå¸‚é˜³é«˜åŽ¿", 140222: "å±±è¥¿çœå¤§åŒå¸‚å¤©é•‡åŽ¿", 140223: "å±±è¥¿çœå¤§åŒå¸‚å¹¿çµåŽ¿", 140224: "å±±è¥¿çœå¤§åŒå¸‚çµä¸˜åŽ¿", 140225: "å±±è¥¿çœå¤§åŒå¸‚æµ‘æºåŽ¿", 140226: "å±±è¥¿çœå¤§åŒå¸‚å·¦äº‘åŽ¿", 140227: "å±±è¥¿çœå¤§åŒå¸‚å¤§åŒåŽ¿", 140300: "å±±è¥¿çœé˜³æ³‰å¸‚", 140301: "å±±è¥¿çœé˜³æ³‰å¸‚å¸‚è¾–åŒº", 140302: "å±±è¥¿çœé˜³æ³‰å¸‚åŸŽåŒº", 140303: "å±±è¥¿çœé˜³æ³‰å¸‚çŸ¿åŒº", 140311: "å±±è¥¿çœé˜³æ³‰å¸‚éƒŠåŒº", 140321: "å±±è¥¿çœé˜³æ³‰å¸‚å¹³å®šåŽ¿", 140322: "å±±è¥¿çœé˜³æ³‰å¸‚ç›‚åŽ¿", 140400: "å±±è¥¿çœé•¿æ²»å¸‚", 140401: "å±±è¥¿çœé•¿æ²»å¸‚å¸‚è¾–åŒº", 140402: "å±±è¥¿çœé•¿æ²»å¸‚åŸŽåŒº", 140411: "å±±è¥¿çœé•¿æ²»å¸‚éƒŠåŒº", 140421: "å±±è¥¿çœé•¿æ²»å¸‚é•¿æ²»åŽ¿", 140423: "å±±è¥¿çœé•¿æ²»å¸‚è¥„åž£åŽ¿", 140424: "å±±è¥¿çœé•¿æ²»å¸‚å±¯ç•™åŽ¿", 140425: "å±±è¥¿çœé•¿æ²»å¸‚å¹³é¡ºåŽ¿", 140426: "å±±è¥¿çœé•¿æ²»å¸‚é»ŽåŸŽåŽ¿", 140427: "å±±è¥¿çœé•¿æ²»å¸‚å£¶å…³åŽ¿", 140428: "å±±è¥¿çœé•¿æ²»å¸‚é•¿å­åŽ¿", 140429: "å±±è¥¿çœé•¿æ²»å¸‚æ­¦ä¹¡åŽ¿", 140430: "å±±è¥¿çœé•¿æ²»å¸‚æ²åŽ¿", 140431: "å±±è¥¿çœé•¿æ²»å¸‚æ²æºåŽ¿", 140481: "å±±è¥¿çœé•¿æ²»å¸‚æ½žåŸŽå¸‚", 140500: "å±±è¥¿çœæ™‹åŸŽå¸‚", 140501: "å±±è¥¿çœæ™‹åŸŽå¸‚å¸‚è¾–åŒº", 140502: "å±±è¥¿çœæ™‹åŸŽå¸‚åŸŽåŒº", 140521: "å±±è¥¿çœæ™‹åŸŽå¸‚æ²æ°´åŽ¿", 140522: "å±±è¥¿çœæ™‹åŸŽå¸‚é˜³åŸŽåŽ¿", 140524: "å±±è¥¿çœæ™‹åŸŽå¸‚é™µå·åŽ¿", 140525: "å±±è¥¿çœæ™‹åŸŽå¸‚æ³½å·žåŽ¿", 140581: "å±±è¥¿çœæ™‹åŸŽå¸‚é«˜å¹³å¸‚", 140600: "å±±è¥¿çœæ™‹åŸŽå¸‚æœ”å·žå¸‚", 140601: "å±±è¥¿çœæ™‹åŸŽå¸‚å¸‚è¾–åŒº", 140602: "å±±è¥¿çœæ™‹åŸŽå¸‚æœ”åŸŽåŒº", 140603: "å±±è¥¿çœæ™‹åŸŽå¸‚å¹³é²åŒº", 140621: "å±±è¥¿çœæ™‹åŸŽå¸‚å±±é˜´åŽ¿", 140622: "å±±è¥¿çœæ™‹åŸŽå¸‚åº”åŽ¿", 140623: "å±±è¥¿çœæ™‹åŸŽå¸‚å³çŽ‰åŽ¿", 140624: "å±±è¥¿çœæ™‹åŸŽå¸‚æ€€ä»åŽ¿", 142200: "å±±è¥¿çœå¿»å·žåœ°åŒº", 142201: "å±±è¥¿çœå¿»å·žåœ°åŒºå¿»å·žå¸‚", 142202: "å±±è¥¿çœå¿»å·žåœ°åŒºåŽŸå¹³å¸‚", 142222: "å±±è¥¿çœå¿»å·žåœ°åŒºå®šè¥„åŽ¿", 142223: "å±±è¥¿çœå¿»å·žåœ°åŒºäº”å°åŽ¿", 142225: "å±±è¥¿çœå¿»å·žåœ°åŒºä»£åŽ¿", 142226: "å±±è¥¿çœå¿»å·žåœ°åŒºç¹å³™åŽ¿", 142227: "å±±è¥¿çœå¿»å·žåœ°åŒºå®æ­¦åŽ¿", 142228: "å±±è¥¿çœå¿»å·žåœ°åŒºé™ä¹åŽ¿", 142229: "å±±è¥¿çœå¿»å·žåœ°åŒºç¥žæ± åŽ¿", 142230: "å±±è¥¿çœå¿»å·žåœ°åŒºäº”å¯¨åŽ¿", 142231: "å±±è¥¿çœå¿»å·žåœ°åŒºå²¢å²šåŽ¿", 142232: "å±±è¥¿çœå¿»å·žåœ°åŒºæ²³æ›²åŽ¿", 142233: "å±±è¥¿çœå¿»å·žåœ°åŒºä¿å¾·åŽ¿", 142234: "å±±è¥¿çœå¿»å·žåœ°åŒºåå…³åŽ¿", 142300: "å±±è¥¿çœå¿»å·žåœ°åŒºå•æ¢åœ°åŒº", 142301: "å±±è¥¿çœå¿»å·žåœ°åŒºå­ä¹‰å¸‚", 142302: "å±±è¥¿çœå¿»å·žåœ°åŒºç¦»çŸ³å¸‚", 142303: "å±±è¥¿çœå¿»å·žåœ°åŒºæ±¾é˜³å¸‚", 142322: "å±±è¥¿çœå¿»å·žåœ°åŒºæ–‡æ°´åŽ¿", 142323: "å±±è¥¿çœå¿»å·žåœ°åŒºäº¤åŸŽåŽ¿", 142325: "å±±è¥¿çœå¿»å·žåœ°åŒºå…´åŽ¿", 142326: "å±±è¥¿çœå¿»å·žåœ°åŒºä¸´åŽ¿", 142327: "å±±è¥¿çœå¿»å·žåœ°åŒºæŸ³æž—åŽ¿", 142328: "å±±è¥¿çœå¿»å·žåœ°åŒºçŸ³æ¥¼åŽ¿", 142329: "å±±è¥¿çœå¿»å·žåœ°åŒºå²šåŽ¿", 142330: "å±±è¥¿çœå¿»å·žåœ°åŒºæ–¹å±±åŽ¿", 142332: "å±±è¥¿çœå¿»å·žåœ°åŒºä¸­é˜³åŽ¿", 142333: "å±±è¥¿çœå¿»å·žåœ°åŒºäº¤å£åŽ¿", 142400: "å±±è¥¿çœæ™‹ä¸­åœ°åŒº", 142401: "å±±è¥¿çœæ™‹ä¸­åœ°åŒºæ¦†æ¬¡å¸‚", 142402: "å±±è¥¿çœæ™‹ä¸­åœ°åŒºä»‹ä¼‘å¸‚", 142421: "å±±è¥¿çœæ™‹ä¸­åœ°åŒºæ¦†ç¤¾åŽ¿", 142422: "å±±è¥¿çœæ™‹ä¸­åœ°åŒºå·¦æƒåŽ¿", 142423: "å±±è¥¿çœæ™‹ä¸­åœ°åŒºå’Œé¡ºåŽ¿", 142424: "å±±è¥¿çœæ™‹ä¸­åœ°åŒºæ˜”é˜³åŽ¿", 142427: "å±±è¥¿çœæ™‹ä¸­åœ°åŒºå¯¿é˜³åŽ¿", 142429: "å±±è¥¿çœæ™‹ä¸­åœ°åŒºå¤ªè°·åŽ¿", 142430: "å±±è¥¿çœæ™‹ä¸­åœ°åŒºç¥åŽ¿", 142431: "å±±è¥¿çœæ™‹ä¸­åœ°åŒºå¹³é¥åŽ¿", 142433: "å±±è¥¿çœæ™‹ä¸­åœ°åŒºçµçŸ³åŽ¿", 142600: "å±±è¥¿çœä¸´æ±¾åœ°åŒº", 142601: "å±±è¥¿çœä¸´æ±¾åœ°åŒºä¸´æ±¾å¸‚", 142602: "å±±è¥¿çœä¸´æ±¾åœ°åŒºä¾¯é©¬å¸‚", 142603: "å±±è¥¿çœä¸´æ±¾åœ°åŒºéœå·žå¸‚", 142621: "å±±è¥¿çœä¸´æ±¾åœ°åŒºæ›²æ²ƒåŽ¿", 142622: "å±±è¥¿çœä¸´æ±¾åœ°åŒºç¿¼åŸŽåŽ¿", 142623: "å±±è¥¿çœä¸´æ±¾åœ°åŒºè¥„æ±¾åŽ¿", 142625: "å±±è¥¿çœä¸´æ±¾åœ°åŒºæ´ªæ´žåŽ¿", 142627: "å±±è¥¿çœä¸´æ±¾åœ°åŒºå¤åŽ¿", 142628: "å±±è¥¿çœä¸´æ±¾åœ°åŒºå®‰æ³½åŽ¿", 142629: "å±±è¥¿çœä¸´æ±¾åœ°åŒºæµ®å±±åŽ¿", 142630: "å±±è¥¿çœä¸´æ±¾åœ°åŒºå‰åŽ¿", 142631: "å±±è¥¿çœä¸´æ±¾åœ°åŒºä¹¡å®åŽ¿", 142632: "å±±è¥¿çœä¸´æ±¾åœ°åŒºè’²åŽ¿", 142633: "å±±è¥¿çœä¸´æ±¾åœ°åŒºå¤§å®åŽ¿", 142634: "å±±è¥¿çœä¸´æ±¾åœ°åŒºæ°¸å’ŒåŽ¿", 142635: "å±±è¥¿çœä¸´æ±¾åœ°åŒºéš°åŽ¿", 142636: "å±±è¥¿çœä¸´æ±¾åœ°åŒºæ±¾è¥¿åŽ¿", 142700: "å±±è¥¿çœè¿åŸŽåœ°åŒº", 142701: "å±±è¥¿çœè¿åŸŽåœ°åŒºè¿åŸŽå¸‚", 142702: "å±±è¥¿çœè¿åŸŽåœ°åŒºæ°¸æµŽå¸‚", 142703: "å±±è¥¿çœè¿åŸŽåœ°åŒºæ²³æ´¥å¸‚", 142723: "å±±è¥¿çœè¿åŸŽåœ°åŒºèŠ®åŸŽåŽ¿", 142724: "å±±è¥¿çœè¿åŸŽåœ°åŒºä¸´çŒ—åŽ¿", 142725: "å±±è¥¿çœè¿åŸŽåœ°åŒºä¸‡è£åŽ¿", 142726: "å±±è¥¿çœè¿åŸŽåœ°åŒºæ–°ç»›åŽ¿", 142727: "å±±è¥¿çœè¿åŸŽåœ°åŒºç¨·å±±åŽ¿", 142729: "å±±è¥¿çœè¿åŸŽåœ°åŒºé—»å–œåŽ¿", 142730: "å±±è¥¿çœè¿åŸŽåœ°åŒºå¤åŽ¿", 142731: "å±±è¥¿çœè¿åŸŽåœ°åŒºç»›åŽ¿", 142732: "å±±è¥¿çœè¿åŸŽåœ°åŒºå¹³é™†åŽ¿", 142733: "å±±è¥¿çœè¿åŸŽåœ°åŒºåž£æ›²åŽ¿", 15e4: "å†…è’™å¤è‡ªæ²»åŒº", 150100: "å†…è’™å¤è‡ªæ²»åŒºå‘¼å’Œæµ©ç‰¹å¸‚", 150101: "å†…è’™å¤è‡ªæ²»åŒºå‘¼å’Œæµ©ç‰¹å¸‚å¸‚è¾–åŒº", 150102: "å†…è’™å¤è‡ªæ²»åŒºå‘¼å’Œæµ©ç‰¹å¸‚æ–°åŸŽåŒº", 150103: "å†…è’™å¤è‡ªæ²»åŒºå‘¼å’Œæµ©ç‰¹å¸‚å›žæ°‘åŒº", 150104: "å†…è’™å¤è‡ªæ²»åŒºå‘¼å’Œæµ©ç‰¹å¸‚çŽ‰æ³‰åŒº", 150105: "å†…è’™å¤è‡ªæ²»åŒºå‘¼å’Œæµ©ç‰¹å¸‚éƒŠåŒº", 150121: "å†…è’™å¤è‡ªæ²»åŒºå‘¼å’Œæµ©ç‰¹å¸‚åœŸé»˜ç‰¹å·¦æ——", 150122: "å†…è’™å¤è‡ªæ²»åŒºå‘¼å’Œæµ©ç‰¹å¸‚æ‰˜å…‹æ‰˜åŽ¿", 150123: "å†…è’™å¤è‡ªæ²»åŒºå‘¼å’Œæµ©ç‰¹å¸‚å’Œæž—æ ¼å°”åŽ¿", 150124: "å†…è’™å¤è‡ªæ²»åŒºå‘¼å’Œæµ©ç‰¹å¸‚æ¸…æ°´æ²³åŽ¿", 150125: "å†…è’™å¤è‡ªæ²»åŒºå‘¼å’Œæµ©ç‰¹å¸‚æ­¦å·åŽ¿", 150200: "å†…è’™å¤è‡ªæ²»åŒºåŒ…å¤´å¸‚", 150201: "å†…è’™å¤è‡ªæ²»åŒºåŒ…å¤´å¸‚å¸‚è¾–åŒº", 150202: "å†…è’™å¤è‡ªæ²»åŒºåŒ…å¤´å¸‚ä¸œæ²³åŒº", 150203: "å†…è’™å¤è‡ªæ²»åŒºåŒ…å¤´å¸‚æ˜†éƒ½ä¼¦åŒº", 150204: "å†…è’™å¤è‡ªæ²»åŒºåŒ…å¤´å¸‚é’å±±åŒº", 150205: "å†…è’™å¤è‡ªæ²»åŒºåŒ…å¤´å¸‚çŸ³æ‹çŸ¿åŒº", 150206: "å†…è’™å¤è‡ªæ²»åŒºåŒ…å¤´å¸‚ç™½äº‘çŸ¿åŒº", 150207: "å†…è’™å¤è‡ªæ²»åŒºåŒ…å¤´å¸‚éƒŠåŒº", 150221: "å†…è’™å¤è‡ªæ²»åŒºåŒ…å¤´å¸‚åœŸé»˜ç‰¹å³æ——", 150222: "å†…è’™å¤è‡ªæ²»åŒºåŒ…å¤´å¸‚å›ºé˜³åŽ¿", 150223: "å†…è’™å¤è‡ªæ²»åŒºåŒ…å¤´å¸‚è¾¾å°”ç½•èŒ‚æ˜Žå®‰è”åˆæ——", 150300: "å†…è’™å¤è‡ªæ²»åŒºä¹Œæµ·å¸‚", 150301: "å†…è’™å¤è‡ªæ²»åŒºä¹Œæµ·å¸‚å¸‚è¾–åŒº", 150302: "å†…è’™å¤è‡ªæ²»åŒºä¹Œæµ·å¸‚æµ·å‹ƒæ¹¾åŒº", 150303: "å†…è’™å¤è‡ªæ²»åŒºä¹Œæµ·å¸‚æµ·å—åŒº", 150304: "å†…è’™å¤è‡ªæ²»åŒºä¹Œæµ·å¸‚ä¹Œè¾¾åŒº", 150400: "å†…è’™å¤è‡ªæ²»åŒºèµ¤å³°å¸‚", 150401: "å†…è’™å¤è‡ªæ²»åŒºèµ¤å³°å¸‚å¸‚è¾–åŒº", 150402: "å†…è’™å¤è‡ªæ²»åŒºèµ¤å³°å¸‚çº¢å±±åŒº", 150403: "å†…è’™å¤è‡ªæ²»åŒºèµ¤å³°å¸‚å…ƒå®å±±åŒº", 150404: "å†…è’™å¤è‡ªæ²»åŒºèµ¤å³°å¸‚æ¾å±±åŒº", 150421: "å†…è’™å¤è‡ªæ²»åŒºèµ¤å³°å¸‚é˜¿é²ç§‘å°”æ²æ——", 150422: "å†…è’™å¤è‡ªæ²»åŒºèµ¤å³°å¸‚å·´æž—å·¦æ——", 150423: "å†…è’™å¤è‡ªæ²»åŒºèµ¤å³°å¸‚å·´æž—å³æ——", 150424: "å†…è’™å¤è‡ªæ²»åŒºèµ¤å³°å¸‚æž—è¥¿åŽ¿", 150425: "å†…è’™å¤è‡ªæ²»åŒºèµ¤å³°å¸‚å…‹ä»€å…‹è…¾æ——", 150426: "å†…è’™å¤è‡ªæ²»åŒºèµ¤å³°å¸‚ç¿ç‰›ç‰¹æ——", 150428: "å†…è’™å¤è‡ªæ²»åŒºèµ¤å³°å¸‚å–€å–‡æ²æ——", 150429: "å†…è’™å¤è‡ªæ²»åŒºèµ¤å³°å¸‚å®åŸŽåŽ¿", 150430: "å†…è’™å¤è‡ªæ²»åŒºèµ¤å³°å¸‚æ•–æ±‰æ——", 152100: "å†…è’™å¤è‡ªæ²»åŒºå‘¼ä¼¦è´å°”ç›Ÿ", 152101: "å†…è’™å¤è‡ªæ²»åŒºå‘¼ä¼¦è´å°”ç›Ÿæµ·æ‹‰å°”å¸‚", 152102: "å†…è’™å¤è‡ªæ²»åŒºå‘¼ä¼¦è´å°”ç›Ÿæ»¡æ´²é‡Œå¸‚", 152103: "å†…è’™å¤è‡ªæ²»åŒºå‘¼ä¼¦è´å°”ç›Ÿæ‰Žå…°å±¯å¸‚", 152104: "å†…è’™å¤è‡ªæ²»åŒºå‘¼ä¼¦è´å°”ç›Ÿç‰™å…‹çŸ³å¸‚", 152105: "å†…è’™å¤è‡ªæ²»åŒºå‘¼ä¼¦è´å°”ç›Ÿæ ¹æ²³å¸‚", 152106: "å†…è’™å¤è‡ªæ²»åŒºå‘¼ä¼¦è´å°”ç›Ÿé¢å°”å¤çº³å¸‚", 152122: "å†…è’™å¤è‡ªæ²»åŒºå‘¼ä¼¦è´å°”ç›Ÿé˜¿è£æ——", 152123: "å†…è’™å¤è‡ªæ²»åŒºå‘¼ä¼¦è´å°”ç›ŸèŽ«åŠ›è¾¾ç“¦è¾¾æ–¡å°”æ—è‡ªæ²»æ——", 152127: "å†…è’™å¤è‡ªæ²»åŒºå‘¼ä¼¦è´å°”ç›Ÿé„‚ä¼¦æ˜¥è‡ªæ²»æ——", 152128: "å†…è’™å¤è‡ªæ²»åŒºå‘¼ä¼¦è´å°”ç›Ÿé„‚æ¸©å…‹æ—è‡ªæ²»æ——", 152129: "å†…è’™å¤è‡ªæ²»åŒºå‘¼ä¼¦è´å°”ç›Ÿæ–°å·´å°”è™Žå³æ——", 152130: "å†…è’™å¤è‡ªæ²»åŒºå‘¼ä¼¦è´å°”ç›Ÿæ–°å·´å°”è™Žå·¦æ——", 152131: "å†…è’™å¤è‡ªæ²»åŒºå‘¼ä¼¦è´å°”ç›Ÿé™ˆå·´å°”è™Žæ——", 152200: "å†…è’™å¤è‡ªæ²»åŒºå…´å®‰ç›Ÿ", 152201: "å†…è’™å¤è‡ªæ²»åŒºå…´å®‰ç›Ÿä¹Œå…°æµ©ç‰¹å¸‚", 152202: "å†…è’™å¤è‡ªæ²»åŒºå…´å®‰ç›Ÿé˜¿å°”å±±å¸‚", 152221: "å†…è’™å¤è‡ªæ²»åŒºå…´å®‰ç›Ÿç§‘å°”æ²å³ç¿¼å‰æ——", 152222: "å†…è’™å¤è‡ªæ²»åŒºå…´å®‰ç›Ÿç§‘å°”æ²å³ç¿¼ä¸­æ——", 152223: "å†…è’™å¤è‡ªæ²»åŒºå…´å®‰ç›Ÿæ‰Žèµ‰ç‰¹æ——", 152224: "å†…è’™å¤è‡ªæ²»åŒºå…´å®‰ç›Ÿçªæ³‰åŽ¿", 152300: "å†…è’™å¤è‡ªæ²»åŒºå“²é‡Œæœ¨ç›Ÿ", 152301: "å†…è’™å¤è‡ªæ²»åŒºå“²é‡Œæœ¨ç›Ÿé€šè¾½å¸‚", 152302: "å†…è’™å¤è‡ªæ²»åŒºå“²é‡Œæœ¨ç›Ÿéœæž—éƒ­å‹’å¸‚", 152322: "å†…è’™å¤è‡ªæ²»åŒºå“²é‡Œæœ¨ç›Ÿç§‘å°”æ²å·¦ç¿¼ä¸­æ——", 152323: "å†…è’™å¤è‡ªæ²»åŒºå“²é‡Œæœ¨ç›Ÿç§‘å°”æ²å·¦ç¿¼åŽæ——", 152324: "å†…è’™å¤è‡ªæ²»åŒºå“²é‡Œæœ¨ç›Ÿå¼€é²åŽ¿", 152325: "å†…è’™å¤è‡ªæ²»åŒºå“²é‡Œæœ¨ç›Ÿåº“ä¼¦æ——", 152326: "å†…è’™å¤è‡ªæ²»åŒºå“²é‡Œæœ¨ç›Ÿå¥ˆæ›¼æ——", 152327: "å†…è’™å¤è‡ªæ²»åŒºå“²é‡Œæœ¨ç›Ÿæ‰Žé²ç‰¹æ——", 152500: "å†…è’™å¤è‡ªæ²»åŒºé”¡æž—éƒ­å‹’ç›Ÿ", 152501: "å†…è’™å¤è‡ªæ²»åŒºé”¡æž—éƒ­å‹’ç›ŸäºŒè¿žæµ©ç‰¹å¸‚", 152502: "å†…è’™å¤è‡ªæ²»åŒºé”¡æž—éƒ­å‹’ç›Ÿé”¡æž—æµ©ç‰¹å¸‚", 152522: "å†…è’™å¤è‡ªæ²»åŒºé”¡æž—éƒ­å‹’ç›Ÿé˜¿å·´å˜Žæ——", 152523: "å†…è’™å¤è‡ªæ²»åŒºé”¡æž—éƒ­å‹’ç›Ÿè‹å°¼ç‰¹å·¦æ——", 152524: "å†…è’™å¤è‡ªæ²»åŒºé”¡æž—éƒ­å‹’ç›Ÿè‹å°¼ç‰¹å³æ——", 152525: "å†…è’™å¤è‡ªæ²»åŒºé”¡æž—éƒ­å‹’ç›Ÿä¸œä¹Œç ç©†æ²æ——", 152526: "å†…è’™å¤è‡ªæ²»åŒºé”¡æž—éƒ­å‹’ç›Ÿè¥¿ä¹Œç ç©†æ²æ——", 152527: "å†…è’™å¤è‡ªæ²»åŒºé”¡æž—éƒ­å‹’ç›Ÿå¤ªä»†å¯ºæ——", 152528: "å†…è’™å¤è‡ªæ²»åŒºé”¡æž—éƒ­å‹’ç›Ÿé•¶é»„æ——", 152529: "å†…è’™å¤è‡ªæ²»åŒºé”¡æž—éƒ­å‹’ç›Ÿæ­£é•¶ç™½æ——", 152530: "å†…è’™å¤è‡ªæ²»åŒºé”¡æž—éƒ­å‹’ç›Ÿæ­£è“æ——", 152531: "å†…è’™å¤è‡ªæ²»åŒºé”¡æž—éƒ­å‹’ç›Ÿå¤šä¼¦åŽ¿", 152600: "å†…è’™å¤è‡ªæ²»åŒºä¹Œå…°å¯Ÿå¸ƒç›Ÿ", 152601: "å†…è’™å¤è‡ªæ²»åŒºä¹Œå…°å¯Ÿå¸ƒç›Ÿé›†å®å¸‚", 152602: "å†…è’™å¤è‡ªæ²»åŒºä¹Œå…°å¯Ÿå¸ƒç›Ÿä¸°é•‡å¸‚", 152624: "å†…è’™å¤è‡ªæ²»åŒºä¹Œå…°å¯Ÿå¸ƒç›Ÿå“èµ„åŽ¿", 152625: "å†…è’™å¤è‡ªæ²»åŒºä¹Œå…°å¯Ÿå¸ƒç›ŸåŒ–å¾·åŽ¿", 152626: "å†…è’™å¤è‡ªæ²»åŒºä¹Œå…°å¯Ÿå¸ƒç›Ÿå•†éƒ½åŽ¿", 152627: "å†…è’™å¤è‡ªæ²»åŒºä¹Œå…°å¯Ÿå¸ƒç›Ÿå…´å’ŒåŽ¿", 152629: "å†…è’™å¤è‡ªæ²»åŒºä¹Œå…°å¯Ÿå¸ƒç›Ÿå‡‰åŸŽåŽ¿", 152630: "å†…è’™å¤è‡ªæ²»åŒºä¹Œå…°å¯Ÿå¸ƒç›Ÿå¯Ÿå“ˆå°”å³ç¿¼å‰æ——", 152631: "å†…è’™å¤è‡ªæ²»åŒºä¹Œå…°å¯Ÿå¸ƒç›Ÿå¯Ÿå“ˆå°”å³ç¿¼ä¸­æ——", 152632: "å†…è’™å¤è‡ªæ²»åŒºä¹Œå…°å¯Ÿå¸ƒç›Ÿå¯Ÿå“ˆå°”å³ç¿¼åŽæ——", 152634: "å†…è’™å¤è‡ªæ²»åŒºä¹Œå…°å¯Ÿå¸ƒç›Ÿå››å­çŽ‹æ——", 152700: "å†…è’™å¤è‡ªæ²»åŒºä¼Šå…‹æ˜­ç›Ÿ", 152701: "å†…è’™å¤è‡ªæ²»åŒºä¼Šå…‹æ˜­ç›Ÿä¸œèƒœå¸‚", 152722: "å†…è’™å¤è‡ªæ²»åŒºä¼Šå…‹æ˜­ç›Ÿè¾¾æ‹‰ç‰¹æ——", 152723: "å†…è’™å¤è‡ªæ²»åŒºä¼Šå…‹æ˜­ç›Ÿå‡†æ ¼å°”æ——", 152724: "å†…è’™å¤è‡ªæ²»åŒºä¼Šå…‹æ˜­ç›Ÿé„‚æ‰˜å…‹å‰æ——", 152725: "å†…è’™å¤è‡ªæ²»åŒºä¼Šå…‹æ˜­ç›Ÿé„‚æ‰˜å…‹æ——", 152726: "å†…è’™å¤è‡ªæ²»åŒºä¼Šå…‹æ˜­ç›Ÿæ­é”¦æ——", 152727: "å†…è’™å¤è‡ªæ²»åŒºä¼Šå…‹æ˜­ç›Ÿä¹Œå®¡æ——", 152728: "å†…è’™å¤è‡ªæ²»åŒºä¼Šå…‹æ˜­ç›Ÿä¼Šé‡‘éœæ´›æ——", 152800: "å†…è’™å¤è‡ªæ²»åŒºå·´å½¦æ·–å°”ç›Ÿ", 152801: "å†…è’™å¤è‡ªæ²»åŒºå·´å½¦æ·–å°”ç›Ÿä¸´æ²³å¸‚", 152822: "å†…è’™å¤è‡ªæ²»åŒºå·´å½¦æ·–å°”ç›Ÿäº”åŽŸåŽ¿", 152823: "å†…è’™å¤è‡ªæ²»åŒºå·´å½¦æ·–å°”ç›Ÿç£´å£åŽ¿", 152824: "å†…è’™å¤è‡ªæ²»åŒºå·´å½¦æ·–å°”ç›Ÿä¹Œæ‹‰ç‰¹å‰æ——", 152825: "å†…è’™å¤è‡ªæ²»åŒºå·´å½¦æ·–å°”ç›Ÿä¹Œæ‹‰ç‰¹ä¸­æ——", 152826: "å†…è’™å¤è‡ªæ²»åŒºå·´å½¦æ·–å°”ç›Ÿä¹Œæ‹‰ç‰¹åŽæ——", 152827: "å†…è’™å¤è‡ªæ²»åŒºå·´å½¦æ·–å°”ç›Ÿæ­é”¦åŽæ——", 152900: "å†…è’™å¤è‡ªæ²»åŒºé˜¿æ‹‰å–„ç›Ÿ", 152921: "å†…è’™å¤è‡ªæ²»åŒºé˜¿æ‹‰å–„ç›Ÿé˜¿æ‹‰å–„å·¦æ——", 152922: "å†…è’™å¤è‡ªæ²»åŒºé˜¿æ‹‰å–„ç›Ÿé˜¿æ‹‰å–„å³æ——", 152923: "å†…è’™å¤è‡ªæ²»åŒºé˜¿æ‹‰å–„ç›Ÿé¢æµŽçº³æ——", 21e4: "è¾½å®çœ", 210100: "è¾½å®çœæ²ˆé˜³å¸‚", 210101: "è¾½å®çœæ²ˆé˜³å¸‚å¸‚è¾–åŒº", 210102: "è¾½å®çœæ²ˆé˜³å¸‚å’Œå¹³åŒº", 210103: "è¾½å®çœæ²ˆé˜³å¸‚æ²ˆæ²³åŒº", 210104: "è¾½å®çœæ²ˆé˜³å¸‚å¤§ä¸œåŒº", 210105: "è¾½å®çœæ²ˆé˜³å¸‚çš‡å§‘åŒº", 210106: "è¾½å®çœæ²ˆé˜³å¸‚é“è¥¿åŒº", 210111: "è¾½å®çœæ²ˆé˜³å¸‚è‹å®¶å±¯åŒº", 210112: "è¾½å®çœæ²ˆé˜³å¸‚ä¸œé™µåŒº", 210113: "è¾½å®çœæ²ˆé˜³å¸‚æ–°åŸŽå­åŒº", 210114: "è¾½å®çœæ²ˆé˜³å¸‚äºŽæ´ªåŒº", 210122: "è¾½å®çœæ²ˆé˜³å¸‚è¾½ä¸­åŽ¿", 210123: "è¾½å®çœæ²ˆé˜³å¸‚åº·å¹³åŽ¿", 210124: "è¾½å®çœæ²ˆé˜³å¸‚æ³•åº“åŽ¿", 210181: "è¾½å®çœæ²ˆé˜³å¸‚æ–°æ°‘å¸‚", 210200: "è¾½å®çœå¤§è¿žå¸‚", 210201: "è¾½å®çœå¤§è¿žå¸‚å¸‚è¾–åŒº", 210202: "è¾½å®çœå¤§è¿žå¸‚ä¸­å±±åŒº", 210203: "è¾½å®çœå¤§è¿žå¸‚è¥¿å²—åŒº", 210204: "è¾½å®çœå¤§è¿žå¸‚æ²™æ²³å£åŒº", 210211: "è¾½å®çœå¤§è¿žå¸‚ç”˜äº•å­åŒº", 210212: "è¾½å®çœå¤§è¿žå¸‚æ—…é¡ºå£åŒº", 210213: "è¾½å®çœå¤§è¿žå¸‚é‡‘å·žåŒº", 210224: "è¾½å®çœå¤§è¿žå¸‚é•¿æµ·åŽ¿", 210281: "è¾½å®çœå¤§è¿žå¸‚ç“¦æˆ¿åº—å¸‚", 210282: "è¾½å®çœå¤§è¿žå¸‚æ™®å…°åº—å¸‚", 210283: "è¾½å®çœå¤§è¿žå¸‚åº„æ²³å¸‚", 210300: "è¾½å®çœéžå±±å¸‚", 210301: "è¾½å®çœéžå±±å¸‚å¸‚è¾–åŒº", 210302: "è¾½å®çœéžå±±å¸‚é“ä¸œåŒº", 210303: "è¾½å®çœéžå±±å¸‚é“è¥¿åŒº", 210304: "è¾½å®çœéžå±±å¸‚ç«‹å±±åŒº", 210311: "è¾½å®çœéžå±±å¸‚åƒå±±åŒº", 210321: "è¾½å®çœéžå±±å¸‚å°å®‰åŽ¿", 210323: "è¾½å®çœéžå±±å¸‚å²«å²©æ»¡æ—è‡ªæ²»åŽ¿", 210381: "è¾½å®çœéžå±±å¸‚æµ·åŸŽå¸‚", 210400: "è¾½å®çœæŠšé¡ºå¸‚", 210401: "è¾½å®çœæŠšé¡ºå¸‚å¸‚è¾–åŒº", 210402: "è¾½å®çœæŠšé¡ºå¸‚æ–°æŠšåŒº", 210403: "è¾½å®çœæŠšé¡ºå¸‚éœ²å¤©åŒº", 210404: "è¾½å®çœæŠšé¡ºå¸‚æœ›èŠ±åŒº", 210411: "è¾½å®çœæŠšé¡ºå¸‚é¡ºåŸŽåŒº", 210421: "è¾½å®çœæŠšé¡ºå¸‚æŠšé¡ºåŽ¿", 210422: "è¾½å®çœæŠšé¡ºå¸‚æ–°å®¾æ»¡æ—è‡ªæ²»åŽ¿", 210423: "è¾½å®çœæŠšé¡ºå¸‚æ¸…åŽŸæ»¡æ—è‡ªæ²»åŽ¿", 210500: "è¾½å®çœæœ¬æºªå¸‚", 210501: "è¾½å®çœæœ¬æºªå¸‚å¸‚è¾–åŒº", 210502: "è¾½å®çœæœ¬æºªå¸‚å¹³å±±åŒº", 210503: "è¾½å®çœæœ¬æºªå¸‚æºªæ¹–åŒº", 210504: "è¾½å®çœæœ¬æºªå¸‚æ˜Žå±±åŒº", 210505: "è¾½å®çœæœ¬æºªå¸‚å—èŠ¬åŒº", 210521: "è¾½å®çœæœ¬æºªå¸‚æœ¬æºªæ»¡æ—è‡ªæ²»åŽ¿", 210522: "è¾½å®çœæœ¬æºªå¸‚æ¡“ä»æ»¡æ—è‡ªæ²»åŽ¿", 210600: "è¾½å®çœä¸¹ä¸œå¸‚", 210601: "è¾½å®çœä¸¹ä¸œå¸‚å¸‚è¾–åŒº", 210602: "è¾½å®çœä¸¹ä¸œå¸‚å…ƒå®åŒº", 210603: "è¾½å®çœä¸¹ä¸œå¸‚æŒ¯å…´åŒº", 210604: "è¾½å®çœä¸¹ä¸œå¸‚æŒ¯å®‰åŒº", 210624: "è¾½å®çœä¸¹ä¸œå¸‚å®½ç”¸æ»¡æ—è‡ªæ²»åŽ¿", 210681: "è¾½å®çœä¸¹ä¸œå¸‚ä¸œæ¸¯å¸‚", 210682: "è¾½å®çœä¸¹ä¸œå¸‚å‡¤åŸŽå¸‚", 210700: "è¾½å®çœé”¦å·žå¸‚", 210701: "è¾½å®çœé”¦å·žå¸‚å¸‚è¾–åŒº", 210702: "è¾½å®çœé”¦å·žå¸‚å¤å¡”åŒº", 210703: "è¾½å®çœé”¦å·žå¸‚å‡Œæ²³åŒº", 210711: "è¾½å®çœé”¦å·žå¸‚å¤ªå’ŒåŒº", 210726: "è¾½å®çœé”¦å·žå¸‚é»‘å±±åŽ¿", 210727: "è¾½å®çœé”¦å·žå¸‚ä¹‰åŽ¿", 210781: "è¾½å®çœé”¦å·žå¸‚å‡Œæµ·å¸‚", 210782: "è¾½å®çœé”¦å·žå¸‚åŒ—å®å¸‚", 210800: "è¾½å®çœè¥å£å¸‚", 210801: "è¾½å®çœè¥å£å¸‚å¸‚è¾–åŒº", 210802: "è¾½å®çœè¥å£å¸‚ç«™å‰åŒº", 210803: "è¾½å®çœè¥å£å¸‚è¥¿å¸‚åŒº", 210804: "è¾½å®çœè¥å£å¸‚é²…é±¼åœˆåŒº", 210811: "è¾½å®çœè¥å£å¸‚è€è¾¹åŒº", 210881: "è¾½å®çœè¥å£å¸‚ç›–å·žå¸‚", 210882: "è¾½å®çœè¥å£å¸‚å¤§çŸ³æ¡¥å¸‚", 210900: "è¾½å®çœé˜œæ–°å¸‚", 210901: "è¾½å®çœé˜œæ–°å¸‚å¸‚è¾–åŒº", 210902: "è¾½å®çœé˜œæ–°å¸‚æµ·å·žåŒº", 210903: "è¾½å®çœé˜œæ–°å¸‚æ–°é‚±åŒº", 210904: "è¾½å®çœé˜œæ–°å¸‚å¤ªå¹³åŒº", 210905: "è¾½å®çœé˜œæ–°å¸‚æ¸…æ²³é—¨åŒº", 210911: "è¾½å®çœé˜œæ–°å¸‚ç»†æ²³åŒº", 210921: "è¾½å®çœé˜œæ–°å¸‚é˜œæ–°è’™å¤æ—è‡ªæ²»åŽ¿", 210922: "è¾½å®çœé˜œæ–°å¸‚å½°æ­¦åŽ¿", 211e3: "è¾½å®çœè¾½é˜³å¸‚", 211001: "è¾½å®çœè¾½é˜³å¸‚å¸‚è¾–åŒº", 211002: "è¾½å®çœè¾½é˜³å¸‚ç™½å¡”åŒº", 211003: "è¾½å®çœè¾½é˜³å¸‚æ–‡åœ£åŒº", 211004: "è¾½å®çœè¾½é˜³å¸‚å®ä¼ŸåŒº", 211005: "è¾½å®çœè¾½é˜³å¸‚å¼“é•¿å²­åŒº", 211011: "è¾½å®çœè¾½é˜³å¸‚å¤ªå­æ²³åŒº", 211021: "è¾½å®çœè¾½é˜³å¸‚è¾½é˜³åŽ¿", 211081: "è¾½å®çœè¾½é˜³å¸‚ç¯å¡”å¸‚", 211100: "è¾½å®çœç›˜é”¦å¸‚", 211101: "è¾½å®çœç›˜é”¦å¸‚å¸‚è¾–åŒº", 211102: "è¾½å®çœç›˜é”¦å¸‚åŒå°å­åŒº", 211103: "è¾½å®çœç›˜é”¦å¸‚å…´éš†å°åŒº", 211121: "è¾½å®çœç›˜é”¦å¸‚å¤§æ´¼åŽ¿", 211122: "è¾½å®çœç›˜é”¦å¸‚ç›˜å±±åŽ¿", 211200: "è¾½å®çœé“å²­å¸‚", 211201: "è¾½å®çœé“å²­å¸‚å¸‚è¾–åŒº", 211202: "è¾½å®çœé“å²­å¸‚é“¶å·žåŒº", 211204: "è¾½å®çœé“å²­å¸‚æ¸…æ²³åŒº", 211221: "è¾½å®çœé“å²­å¸‚é“å²­åŽ¿", 211223: "è¾½å®çœé“å²­å¸‚è¥¿ä¸°åŽ¿", 211224: "è¾½å®çœé“å²­å¸‚æ˜Œå›¾åŽ¿", 211281: "è¾½å®çœé“å²­å¸‚é“æ³•å¸‚", 211282: "è¾½å®çœé“å²­å¸‚å¼€åŽŸå¸‚", 211300: "è¾½å®çœæœé˜³å¸‚", 211301: "è¾½å®çœæœé˜³å¸‚å¸‚è¾–åŒº", 211302: "è¾½å®çœæœé˜³å¸‚åŒå¡”åŒº", 211303: "è¾½å®çœæœé˜³å¸‚é¾™åŸŽåŒº", 211321: "è¾½å®çœæœé˜³å¸‚æœé˜³åŽ¿", 211322: "è¾½å®çœæœé˜³å¸‚å»ºå¹³åŽ¿", 211324: "è¾½å®çœæœé˜³å¸‚å–€å–‡æ²å·¦ç¿¼è’™å¤æ—è‡ªæ²»åŽ¿", 211381: "è¾½å®çœæœé˜³å¸‚åŒ—ç¥¨å¸‚", 211382: "è¾½å®çœæœé˜³å¸‚å‡Œæºå¸‚", 211400: "è¾½å®çœè‘«èŠ¦å²›å¸‚", 211401: "è¾½å®çœè‘«èŠ¦å²›å¸‚å¸‚è¾–åŒº", 211402: "è¾½å®çœè‘«èŠ¦å²›å¸‚è¿žå±±åŒº", 211403: "è¾½å®çœè‘«èŠ¦å²›å¸‚é¾™æ¸¯åŒº", 211404: "è¾½å®çœè‘«èŠ¦å²›å¸‚å—ç¥¨åŒº", 211421: "è¾½å®çœè‘«èŠ¦å²›å¸‚ç»¥ä¸­åŽ¿", 211422: "è¾½å®çœè‘«èŠ¦å²›å¸‚å»ºæ˜ŒåŽ¿", 211481: "è¾½å®çœè‘«èŠ¦å²›å¸‚å…´åŸŽå¸‚", 22e4: "å‰æž—çœ", 220100: "å‰æž—çœé•¿æ˜¥å¸‚", 220101: "å‰æž—çœé•¿æ˜¥å¸‚å¸‚è¾–åŒº", 220102: "å‰æž—çœé•¿æ˜¥å¸‚å—å…³åŒº", 220103: "å‰æž—çœé•¿æ˜¥å¸‚å®½åŸŽåŒº", 220104: "å‰æž—çœé•¿æ˜¥å¸‚æœé˜³åŒº", 220105: "å‰æž—çœé•¿æ˜¥å¸‚äºŒé“åŒº", 220106: "å‰æž—çœé•¿æ˜¥å¸‚ç»¿å›­åŒº", 220112: "å‰æž—çœé•¿æ˜¥å¸‚åŒé˜³åŒº", 220122: "å‰æž—çœé•¿æ˜¥å¸‚å†œå®‰åŽ¿", 220181: "å‰æž—çœé•¿æ˜¥å¸‚ä¹å°å¸‚", 220182: "å‰æž—çœé•¿æ˜¥å¸‚æ¦†æ ‘å¸‚", 220183: "å‰æž—çœé•¿æ˜¥å¸‚å¾·æƒ å¸‚", 220200: "å‰æž—çœå‰æž—å¸‚", 220201: "å‰æž—çœå‰æž—å¸‚å¸‚è¾–åŒº", 220202: "å‰æž—çœå‰æž—å¸‚æ˜Œé‚‘åŒº", 220203: "å‰æž—çœå‰æž—å¸‚é¾™æ½­åŒº", 220204: "å‰æž—çœå‰æž—å¸‚èˆ¹è¥åŒº", 220211: "å‰æž—çœå‰æž—å¸‚ä¸°æ»¡åŒº", 220221: "å‰æž—çœå‰æž—å¸‚æ°¸å‰åŽ¿", 220281: "å‰æž—çœå‰æž—å¸‚è›Ÿæ²³å¸‚", 220282: "å‰æž—çœå‰æž—å¸‚æ¡¦ç”¸å¸‚", 220283: "å‰æž—çœå‰æž—å¸‚èˆ’å…°å¸‚", 220284: "å‰æž—çœå‰æž—å¸‚ç£çŸ³å¸‚", 220300: "å‰æž—çœå››å¹³å¸‚", 220301: "å‰æž—çœå››å¹³å¸‚å¸‚è¾–åŒº", 220302: "å‰æž—çœå››å¹³å¸‚é“è¥¿åŒº", 220303: "å‰æž—çœå››å¹³å¸‚é“ä¸œåŒº", 220322: "å‰æž—çœå››å¹³å¸‚æ¢¨æ ‘åŽ¿", 220323: "å‰æž—çœå››å¹³å¸‚ä¼Šé€šæ»¡æ—è‡ªæ²»åŽ¿", 220381: "å‰æž—çœå››å¹³å¸‚å…¬ä¸»å²­å¸‚", 220382: "å‰æž—çœå››å¹³å¸‚åŒè¾½å¸‚", 220400: "å‰æž—çœè¾½æºå¸‚", 220401: "å‰æž—çœè¾½æºå¸‚å¸‚è¾–åŒº", 220402: "å‰æž—çœè¾½æºå¸‚é¾™å±±åŒº", 220403: "å‰æž—çœè¾½æºå¸‚è¥¿å®‰åŒº", 220421: "å‰æž—çœè¾½æºå¸‚ä¸œä¸°åŽ¿", 220422: "å‰æž—çœè¾½æºå¸‚ä¸œè¾½åŽ¿", 220500: "å‰æž—çœé€šåŒ–å¸‚", 220501: "å‰æž—çœé€šåŒ–å¸‚å¸‚è¾–åŒº", 220502: "å‰æž—çœé€šåŒ–å¸‚ä¸œæ˜ŒåŒº", 220503: "å‰æž—çœé€šåŒ–å¸‚äºŒé“æ±ŸåŒº", 220521: "å‰æž—çœé€šåŒ–å¸‚é€šåŒ–åŽ¿", 220523: "å‰æž—çœé€šåŒ–å¸‚è¾‰å—åŽ¿", 220524: "å‰æž—çœé€šåŒ–å¸‚æŸ³æ²³åŽ¿", 220581: "å‰æž—çœé€šåŒ–å¸‚æ¢…æ²³å£å¸‚", 220582: "å‰æž—çœé€šåŒ–å¸‚é›†å®‰å¸‚", 220600: "å‰æž—çœç™½å±±å¸‚", 220601: "å‰æž—çœç™½å±±å¸‚å¸‚è¾–åŒº", 220602: "å‰æž—çœç™½å±±å¸‚å…«é“æ±ŸåŒº", 220621: "å‰æž—çœç™½å±±å¸‚æŠšæ¾åŽ¿", 220622: "å‰æž—çœç™½å±±å¸‚é–å®‡åŽ¿", 220623: "å‰æž—çœç™½å±±å¸‚é•¿ç™½æœé²œæ—è‡ªæ²»åŽ¿", 220625: "å‰æž—çœç™½å±±å¸‚æ±ŸæºåŽ¿", 220681: "å‰æž—çœç™½å±±å¸‚ä¸´æ±Ÿå¸‚", 220700: "å‰æž—çœæ¾åŽŸå¸‚", 220701: "å‰æž—çœæ¾åŽŸå¸‚å¸‚è¾–åŒº", 220702: "å‰æž—çœæ¾åŽŸå¸‚å®æ±ŸåŒº", 220721: "å‰æž—çœæ¾åŽŸå¸‚å‰éƒ­å°”ç½—æ–¯è’™å¤æ—è‡ªæ²»åŽ¿", 220722: "å‰æž—çœæ¾åŽŸå¸‚é•¿å²­åŽ¿", 220723: "å‰æž—çœæ¾åŽŸå¸‚ä¹¾å®‰åŽ¿", 220724: "å‰æž—çœæ¾åŽŸå¸‚æ‰¶ä½™åŽ¿", 220800: "å‰æž—çœç™½åŸŽå¸‚", 220801: "å‰æž—çœç™½åŸŽå¸‚å¸‚è¾–åŒº", 220802: "å‰æž—çœç™½åŸŽå¸‚æ´®åŒ—åŒº", 220821: "å‰æž—çœç™½åŸŽå¸‚é•‡èµ‰åŽ¿", 220822: "å‰æž—çœç™½åŸŽå¸‚é€šæ¦†åŽ¿", 220881: "å‰æž—çœç™½åŸŽå¸‚æ´®å—å¸‚", 220882: "å‰æž—çœç™½åŸŽå¸‚å¤§å®‰å¸‚", 222400: "å‰æž—çœå»¶è¾¹æœé²œæ—è‡ªæ²»å·ž", 222401: "å‰æž—çœå»¶è¾¹æœé²œæ—è‡ªæ²»å·žå»¶å‰å¸‚", 222402: "å‰æž—çœå»¶è¾¹æœé²œæ—è‡ªæ²»å·žå›¾ä»¬å¸‚", 222403: "å‰æž—çœå»¶è¾¹æœé²œæ—è‡ªæ²»å·žæ•¦åŒ–å¸‚", 222404: "å‰æž—çœå»¶è¾¹æœé²œæ—è‡ªæ²»å·žç²æ˜¥å¸‚", 222405: "å‰æž—çœå»¶è¾¹æœé²œæ—è‡ªæ²»å·žé¾™äº•å¸‚", 222406: "å‰æž—çœå»¶è¾¹æœé²œæ—è‡ªæ²»å·žå’Œé¾™å¸‚", 222424: "å‰æž—çœå»¶è¾¹æœé²œæ—è‡ªæ²»å·žæ±ªæ¸…åŽ¿", 222426: "å‰æž—çœå»¶è¾¹æœé²œæ—è‡ªæ²»å·žå®‰å›¾åŽ¿", 23e4: "é»‘é¾™æ±Ÿçœ", 230100: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚", 230101: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚å¸‚è¾–åŒº", 230102: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚é“é‡ŒåŒº", 230103: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚å—å²—åŒº", 230104: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚é“å¤–åŒº", 230105: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚å¤ªå¹³åŒº", 230106: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚é¦™åŠåŒº", 230107: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚åŠ¨åŠ›åŒº", 230108: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚å¹³æˆ¿åŒº", 230121: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚å‘¼å…°åŽ¿", 230123: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚ä¾å…°åŽ¿", 230124: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚æ–¹æ­£åŽ¿", 230125: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚å®¾åŽ¿", 230126: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚å·´å½¦åŽ¿", 230127: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚æœ¨å…°åŽ¿", 230128: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚é€šæ²³åŽ¿", 230129: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚å»¶å¯¿åŽ¿", 230181: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚é˜¿åŸŽå¸‚", 230182: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚åŒåŸŽå¸‚", 230183: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚å°šå¿—å¸‚", 230184: "é»‘é¾™æ±Ÿçœå“ˆå°”æ»¨å¸‚äº”å¸¸å¸‚", 230200: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚", 230201: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚å¸‚è¾–åŒº", 230202: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚é¾™æ²™åŒº", 230203: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚å»ºåŽåŒº", 230204: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚é“é”‹åŒº", 230205: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚æ˜‚æ˜‚æºªåŒº", 230206: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚å¯Œæ‹‰å°”åŸºåŒº", 230207: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚ç¢¾å­å±±åŒº", 230208: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚æ¢…é‡Œæ–¯è¾¾æ–¡å°”æ—åŒº", 230221: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚é¾™æ±ŸåŽ¿", 230223: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚ä¾å®‰åŽ¿", 230224: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚æ³°æ¥åŽ¿", 230225: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚ç”˜å—åŽ¿", 230227: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚å¯Œè£•åŽ¿", 230229: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚å…‹å±±åŽ¿", 230230: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚å…‹ä¸œåŽ¿", 230231: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚æ‹œæ³‰åŽ¿", 230281: "é»‘é¾™æ±Ÿçœé½é½å“ˆå°”å¸‚è®·æ²³å¸‚", 230300: "é»‘é¾™æ±Ÿçœé¸¡è¥¿å¸‚", 230301: "é»‘é¾™æ±Ÿçœé¸¡è¥¿å¸‚å¸‚è¾–åŒº", 230302: "é»‘é¾™æ±Ÿçœé¸¡è¥¿å¸‚é¸¡å† åŒº", 230303: "é»‘é¾™æ±Ÿçœé¸¡è¥¿å¸‚æ’å±±åŒº", 230304: "é»‘é¾™æ±Ÿçœé¸¡è¥¿å¸‚æ»´é“åŒº", 230305: "é»‘é¾™æ±Ÿçœé¸¡è¥¿å¸‚æ¢¨æ ‘åŒº", 230306: "é»‘é¾™æ±Ÿçœé¸¡è¥¿å¸‚åŸŽå­æ²³åŒº", 230307: "é»‘é¾™æ±Ÿçœé¸¡è¥¿å¸‚éº»å±±åŒº", 230321: "é»‘é¾™æ±Ÿçœé¸¡è¥¿å¸‚é¸¡ä¸œåŽ¿", 230381: "é»‘é¾™æ±Ÿçœé¸¡è¥¿å¸‚è™Žæž—å¸‚", 230382: "é»‘é¾™æ±Ÿçœé¸¡è¥¿å¸‚å¯†å±±å¸‚", 230400: "é»‘é¾™æ±Ÿçœé¹¤å²—å¸‚", 230401: "é»‘é¾™æ±Ÿçœé¹¤å²—å¸‚å¸‚è¾–åŒº", 230402: "é»‘é¾™æ±Ÿçœé¹¤å²—å¸‚å‘é˜³åŒº", 230403: "é»‘é¾™æ±Ÿçœé¹¤å²—å¸‚å·¥å†œåŒº", 230404: "é»‘é¾™æ±Ÿçœé¹¤å²—å¸‚å—å±±åŒº", 230405: "é»‘é¾™æ±Ÿçœé¹¤å²—å¸‚å…´å®‰åŒº", 230406: "é»‘é¾™æ±Ÿçœé¹¤å²—å¸‚ä¸œå±±åŒº", 230407: "é»‘é¾™æ±Ÿçœé¹¤å²—å¸‚å…´å±±åŒº", 230421: "é»‘é¾™æ±Ÿçœé¹¤å²—å¸‚èåŒ—åŽ¿", 230422: "é»‘é¾™æ±Ÿçœé¹¤å²—å¸‚ç»¥æ»¨åŽ¿", 230500: "é»‘é¾™æ±ŸçœåŒé¸­å±±å¸‚", 230501: "é»‘é¾™æ±ŸçœåŒé¸­å±±å¸‚å¸‚è¾–åŒº", 230502: "é»‘é¾™æ±ŸçœåŒé¸­å±±å¸‚å°–å±±åŒº", 230503: "é»‘é¾™æ±ŸçœåŒé¸­å±±å¸‚å²­ä¸œåŒº", 230505: "é»‘é¾™æ±ŸçœåŒé¸­å±±å¸‚å››æ–¹å°åŒº", 230506: "é»‘é¾™æ±ŸçœåŒé¸­å±±å¸‚å®å±±åŒº", 230521: "é»‘é¾™æ±ŸçœåŒé¸­å±±å¸‚é›†è´¤åŽ¿", 230522: "é»‘é¾™æ±ŸçœåŒé¸­å±±å¸‚å‹è°ŠåŽ¿", 230523: "é»‘é¾™æ±ŸçœåŒé¸­å±±å¸‚å®æ¸…åŽ¿", 230524: "é»‘é¾™æ±ŸçœåŒé¸­å±±å¸‚é¥¶æ²³åŽ¿", 230600: "é»‘é¾™æ±Ÿçœå¤§åº†å¸‚", 230601: "é»‘é¾™æ±Ÿçœå¤§åº†å¸‚å¸‚è¾–åŒº", 230602: "é»‘é¾™æ±Ÿçœå¤§åº†å¸‚è¨å°”å›¾åŒº", 230603: "é»‘é¾™æ±Ÿçœå¤§åº†å¸‚é¾™å‡¤åŒº", 230604: "é»‘é¾™æ±Ÿçœå¤§åº†å¸‚è®©èƒ¡è·¯åŒº", 230605: "é»‘é¾™æ±Ÿçœå¤§åº†å¸‚çº¢å²—åŒº", 230606: "é»‘é¾™æ±Ÿçœå¤§åº†å¸‚å¤§åŒåŒº", 230621: "é»‘é¾™æ±Ÿçœå¤§åº†å¸‚è‚‡å·žåŽ¿", 230622: "é»‘é¾™æ±Ÿçœå¤§åº†å¸‚è‚‡æºåŽ¿", 230623: "é»‘é¾™æ±Ÿçœå¤§åº†å¸‚æž—ç”¸åŽ¿", 230624: "é»‘é¾™æ±Ÿçœå¤§åº†å¸‚æœå°”ä¼¯ç‰¹è’™å¤æ—è‡ªæ²»åŽ¿", 230700: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚", 230701: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚å¸‚è¾–åŒº", 230702: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚ä¼Šæ˜¥åŒº", 230703: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚å—å²”åŒº", 230704: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚å‹å¥½åŒº", 230705: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚è¥¿æž—åŒº", 230706: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚ç¿ å³¦åŒº", 230707: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚æ–°é’åŒº", 230708: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚ç¾ŽæºªåŒº", 230709: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚é‡‘å±±å±¯åŒº", 230710: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚äº”è¥åŒº", 230711: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚ä¹Œé©¬æ²³åŒº", 230712: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚æ±¤æ—ºæ²³åŒº", 230713: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚å¸¦å²­åŒº", 230714: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚ä¹Œä¼Šå²­åŒº", 230715: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚çº¢æ˜ŸåŒº", 230716: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚ä¸Šç”˜å²­åŒº", 230722: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚å˜‰è«åŽ¿", 230781: "é»‘é¾™æ±Ÿçœä¼Šæ˜¥å¸‚é“åŠ›å¸‚", 230800: "é»‘é¾™æ±Ÿçœä½³æœ¨æ–¯å¸‚", 230801: "é»‘é¾™æ±Ÿçœä½³æœ¨æ–¯å¸‚å¸‚è¾–åŒº", 230802: "é»‘é¾™æ±Ÿçœä½³æœ¨æ–¯å¸‚æ°¸çº¢åŒº", 230803: "é»‘é¾™æ±Ÿçœä½³æœ¨æ–¯å¸‚å‘é˜³åŒº", 230804: "é»‘é¾™æ±Ÿçœä½³æœ¨æ–¯å¸‚å‰è¿›åŒº", 230805: "é»‘é¾™æ±Ÿçœä½³æœ¨æ–¯å¸‚ä¸œé£ŽåŒº", 230811: "é»‘é¾™æ±Ÿçœä½³æœ¨æ–¯å¸‚éƒŠåŒº", 230822: "é»‘é¾™æ±Ÿçœä½³æœ¨æ–¯å¸‚æ¡¦å—åŽ¿", 230826: "é»‘é¾™æ±Ÿçœä½³æœ¨æ–¯å¸‚æ¡¦å·åŽ¿", 230828: "é»‘é¾™æ±Ÿçœä½³æœ¨æ–¯å¸‚æ±¤åŽŸåŽ¿", 230833: "é»‘é¾™æ±Ÿçœä½³æœ¨æ–¯å¸‚æŠšè¿œåŽ¿", 230881: "é»‘é¾™æ±Ÿçœä½³æœ¨æ–¯å¸‚åŒæ±Ÿå¸‚", 230882: "é»‘é¾™æ±Ÿçœä½³æœ¨æ–¯å¸‚å¯Œé”¦å¸‚", 230900: "é»‘é¾™æ±Ÿçœä¸ƒå°æ²³å¸‚", 230901: "é»‘é¾™æ±Ÿçœä¸ƒå°æ²³å¸‚å¸‚è¾–åŒº", 230902: "é»‘é¾™æ±Ÿçœä¸ƒå°æ²³å¸‚æ–°å…´åŒº", 230903: "é»‘é¾™æ±Ÿçœä¸ƒå°æ²³å¸‚æ¡ƒå±±åŒº", 230904: "é»‘é¾™æ±Ÿçœä¸ƒå°æ²³å¸‚èŒ„å­æ²³åŒº", 230921: "é»‘é¾™æ±Ÿçœä¸ƒå°æ²³å¸‚å‹ƒåˆ©åŽ¿", 231e3: "é»‘é¾™æ±Ÿçœç‰¡ä¸¹æ±Ÿå¸‚", 231001: "é»‘é¾™æ±Ÿçœç‰¡ä¸¹æ±Ÿå¸‚å¸‚è¾–åŒº", 231002: "é»‘é¾™æ±Ÿçœç‰¡ä¸¹æ±Ÿå¸‚ä¸œå®‰åŒº", 231003: "é»‘é¾™æ±Ÿçœç‰¡ä¸¹æ±Ÿå¸‚é˜³æ˜ŽåŒº", 231004: "é»‘é¾™æ±Ÿçœç‰¡ä¸¹æ±Ÿå¸‚çˆ±æ°‘åŒº", 231005: "é»‘é¾™æ±Ÿçœç‰¡ä¸¹æ±Ÿå¸‚è¥¿å®‰åŒº", 231024: "é»‘é¾™æ±Ÿçœç‰¡ä¸¹æ±Ÿå¸‚ä¸œå®åŽ¿", 231025: "é»‘é¾™æ±Ÿçœç‰¡ä¸¹æ±Ÿå¸‚æž—å£åŽ¿", 231081: "é»‘é¾™æ±Ÿçœç‰¡ä¸¹æ±Ÿå¸‚ç»¥èŠ¬æ²³å¸‚", 231083: "é»‘é¾™æ±Ÿçœç‰¡ä¸¹æ±Ÿå¸‚æµ·æž—å¸‚", 231084: "é»‘é¾™æ±Ÿçœç‰¡ä¸¹æ±Ÿå¸‚å®å®‰å¸‚", 231085: "é»‘é¾™æ±Ÿçœç‰¡ä¸¹æ±Ÿå¸‚ç©†æ£±å¸‚", 231100: "é»‘é¾™æ±Ÿçœé»‘æ²³å¸‚", 231101: "é»‘é¾™æ±Ÿçœé»‘æ²³å¸‚å¸‚è¾–åŒº", 231102: "é»‘é¾™æ±Ÿçœé»‘æ²³å¸‚çˆ±è¾‰åŒº", 231121: "é»‘é¾™æ±Ÿçœé»‘æ²³å¸‚å«©æ±ŸåŽ¿", 231123: "é»‘é¾™æ±Ÿçœé»‘æ²³å¸‚é€Šå…‹åŽ¿", 231124: "é»‘é¾™æ±Ÿçœé»‘æ²³å¸‚å­™å´åŽ¿", 231181: "é»‘é¾™æ±Ÿçœé»‘æ²³å¸‚åŒ—å®‰å¸‚", 231182: "é»‘é¾™æ±Ÿçœé»‘æ²³å¸‚äº”å¤§è¿žæ± å¸‚", 232300: "é»‘é¾™æ±Ÿçœç»¥åŒ–åœ°åŒº", 232301: "é»‘é¾™æ±Ÿçœç»¥åŒ–åœ°åŒºç»¥åŒ–å¸‚", 232302: "é»‘é¾™æ±Ÿçœç»¥åŒ–åœ°åŒºå®‰è¾¾å¸‚", 232303: "é»‘é¾™æ±Ÿçœç»¥åŒ–åœ°åŒºè‚‡ä¸œå¸‚", 232304: "é»‘é¾™æ±Ÿçœç»¥åŒ–åœ°åŒºæµ·ä¼¦å¸‚", 232324: "é»‘é¾™æ±Ÿçœç»¥åŒ–åœ°åŒºæœ›å¥ŽåŽ¿", 232325: "é»‘é¾™æ±Ÿçœç»¥åŒ–åœ°åŒºå…°è¥¿åŽ¿", 232326: "é»‘é¾™æ±Ÿçœç»¥åŒ–åœ°åŒºé’å†ˆåŽ¿", 232330: "é»‘é¾™æ±Ÿçœç»¥åŒ–åœ°åŒºåº†å®‰åŽ¿", 232331: "é»‘é¾™æ±Ÿçœç»¥åŒ–åœ°åŒºæ˜Žæ°´åŽ¿", 232332: "é»‘é¾™æ±Ÿçœç»¥åŒ–åœ°åŒºç»¥æ£±åŽ¿", 232700: "é»‘é¾™æ±Ÿçœå¤§å…´å®‰å²­åœ°åŒº", 232721: "é»‘é¾™æ±Ÿçœå¤§å…´å®‰å²­åœ°åŒºå‘¼çŽ›åŽ¿", 232722: "é»‘é¾™æ±Ÿçœå¤§å…´å®‰å²­åœ°åŒºå¡”æ²³åŽ¿", 232723: "é»‘é¾™æ±Ÿçœå¤§å…´å®‰å²­åœ°åŒºæ¼ æ²³åŽ¿", 31e4: "ä¸Šæµ·å¸‚", 310100: "ä¸Šæµ·å¸‚å¸‚è¾–åŒº", 310101: "ä¸Šæµ·å¸‚é»„æµ¦åŒº", 310102: "ä¸Šæµ·å¸‚å—å¸‚åŒº", 310103: "ä¸Šæµ·å¸‚å¢æ¹¾åŒº", 310104: "ä¸Šæµ·å¸‚å¾æ±‡åŒº", 310105: "ä¸Šæµ·å¸‚é•¿å®åŒº", 310106: "ä¸Šæµ·å¸‚é™å®‰åŒº", 310107: "ä¸Šæµ·å¸‚æ™®é™€åŒº", 310108: "ä¸Šæµ·å¸‚é—¸åŒ—åŒº", 310109: "ä¸Šæµ·å¸‚è™¹å£åŒº", 310110: "ä¸Šæµ·å¸‚æ¨æµ¦åŒº", 310112: "ä¸Šæµ·å¸‚é—µè¡ŒåŒº", 310113: "ä¸Šæµ·å¸‚å®å±±åŒº", 310114: "ä¸Šæµ·å¸‚å˜‰å®šåŒº", 310115: "ä¸Šæµ·å¸‚æµ¦ä¸œæ–°åŒº", 310116: "ä¸Šæµ·å¸‚é‡‘å±±åŒº", 310117: "ä¸Šæµ·å¸‚æ¾æ±ŸåŒº", 310200: "ä¸Šæµ·å¸‚åŽ¿", 310225: "ä¸Šæµ·å¸‚å—æ±‡åŽ¿", 310226: "ä¸Šæµ·å¸‚å¥‰è´¤åŽ¿", 310229: "ä¸Šæµ·å¸‚é’æµ¦åŽ¿", 310230: "ä¸Šæµ·å¸‚å´‡æ˜ŽåŽ¿", 32e4: "æ±Ÿè‹çœ", 320100: "æ±Ÿè‹çœå—äº¬å¸‚", 320101: "æ±Ÿè‹çœå—äº¬å¸‚å¸‚è¾–åŒº", 320102: "æ±Ÿè‹çœå—äº¬å¸‚çŽ„æ­¦åŒº", 320103: "æ±Ÿè‹çœå—äº¬å¸‚ç™½ä¸‹åŒº", 320104: "æ±Ÿè‹çœå—äº¬å¸‚ç§¦æ·®åŒº", 320105: "æ±Ÿè‹çœå—äº¬å¸‚å»ºé‚ºåŒº", 320106: "æ±Ÿè‹çœå—äº¬å¸‚é¼“æ¥¼åŒº", 320107: "æ±Ÿè‹çœå—äº¬å¸‚ä¸‹å…³åŒº", 320111: "æ±Ÿè‹çœå—äº¬å¸‚æµ¦å£åŒº", 320112: "æ±Ÿè‹çœå—äº¬å¸‚å¤§åŽ‚åŒº", 320113: "æ±Ÿè‹çœå—äº¬å¸‚æ –éœžåŒº", 320114: "æ±Ÿè‹çœå—äº¬å¸‚é›¨èŠ±å°åŒº", 320121: "æ±Ÿè‹çœå—äº¬å¸‚æ±Ÿå®åŽ¿", 320122: "æ±Ÿè‹çœå—äº¬å¸‚æ±Ÿæµ¦åŽ¿", 320123: "æ±Ÿè‹çœå—äº¬å¸‚å…­åˆåŽ¿", 320124: "æ±Ÿè‹çœå—äº¬å¸‚æº§æ°´åŽ¿", 320125: "æ±Ÿè‹çœå—äº¬å¸‚é«˜æ·³åŽ¿", 320200: "æ±Ÿè‹çœæ— é”¡å¸‚", 320201: "æ±Ÿè‹çœæ— é”¡å¸‚å¸‚è¾–åŒº", 320202: "æ±Ÿè‹çœæ— é”¡å¸‚å´‡å®‰åŒº", 320203: "æ±Ÿè‹çœæ— é”¡å¸‚å—é•¿åŒº", 320204: "æ±Ÿè‹çœæ— é”¡å¸‚åŒ—å¡˜åŒº", 320211: "æ±Ÿè‹çœæ— é”¡å¸‚éƒŠåŒº", 320281: "æ±Ÿè‹çœæ— é”¡å¸‚æ±Ÿé˜´å¸‚", 320282: "æ±Ÿè‹çœæ— é”¡å¸‚å®œå…´å¸‚", 320283: "æ±Ÿè‹çœæ— é”¡å¸‚é”¡å±±å¸‚", 320300: "æ±Ÿè‹çœå¾å·žå¸‚", 320301: "æ±Ÿè‹çœå¾å·žå¸‚å¸‚è¾–åŒº", 320302: "æ±Ÿè‹çœå¾å·žå¸‚é¼“æ¥¼åŒº", 320303: "æ±Ÿè‹çœå¾å·žå¸‚äº‘é¾™åŒº", 320304: "æ±Ÿè‹çœå¾å·žå¸‚ä¹é‡ŒåŒº", 320305: "æ±Ÿè‹çœå¾å·žå¸‚è´¾æ±ªåŒº", 320311: "æ±Ÿè‹çœå¾å·žå¸‚æ³‰å±±åŒº", 320321: "æ±Ÿè‹çœå¾å·žå¸‚ä¸°åŽ¿", 320322: "æ±Ÿè‹çœå¾å·žå¸‚æ²›åŽ¿", 320323: "æ±Ÿè‹çœå¾å·žå¸‚é“œå±±åŽ¿", 320324: "æ±Ÿè‹çœå¾å·žå¸‚ç¢å®åŽ¿", 320381: "æ±Ÿè‹çœå¾å·žå¸‚æ–°æ²‚å¸‚", 320382: "æ±Ÿè‹çœå¾å·žå¸‚é‚³å·žå¸‚", 320400: "æ±Ÿè‹çœå¸¸å·žå¸‚", 320401: "æ±Ÿè‹çœå¸¸å·žå¸‚å¸‚è¾–åŒº", 320402: "æ±Ÿè‹çœå¸¸å·žå¸‚å¤©å®åŒº", 320404: "æ±Ÿè‹çœå¸¸å·žå¸‚é’Ÿæ¥¼åŒº", 320405: "æ±Ÿè‹çœå¸¸å·žå¸‚æˆšå¢…å °åŒº", 320411: "æ±Ÿè‹çœå¸¸å·žå¸‚éƒŠåŒº", 320481: "æ±Ÿè‹çœå¸¸å·žå¸‚æº§é˜³å¸‚", 320482: "æ±Ÿè‹çœå¸¸å·žå¸‚é‡‘å›å¸‚", 320483: "æ±Ÿè‹çœå¸¸å·žå¸‚æ­¦è¿›å¸‚", 320500: "æ±Ÿè‹çœè‹å·žå¸‚", 320501: "æ±Ÿè‹çœè‹å·žå¸‚å¸‚è¾–åŒº", 320502: "æ±Ÿè‹çœè‹å·žå¸‚æ²§æµªåŒº", 320503: "æ±Ÿè‹çœè‹å·žå¸‚å¹³æ±ŸåŒº", 320504: "æ±Ÿè‹çœè‹å·žå¸‚é‡‘é˜ŠåŒº", 320511: "æ±Ÿè‹çœè‹å·žå¸‚éƒŠåŒº", 320581: "æ±Ÿè‹çœè‹å·žå¸‚å¸¸ç†Ÿå¸‚", 320582: "æ±Ÿè‹çœè‹å·žå¸‚å¼ å®¶æ¸¯å¸‚", 320583: "æ±Ÿè‹çœè‹å·žå¸‚æ˜†å±±å¸‚", 320584: "æ±Ÿè‹çœè‹å·žå¸‚å´æ±Ÿå¸‚", 320585: "æ±Ÿè‹çœè‹å·žå¸‚å¤ªä»“å¸‚", 320586: "æ±Ÿè‹çœè‹å·žå¸‚å´åŽ¿å¸‚", 320600: "æ±Ÿè‹çœå—é€šå¸‚", 320601: "æ±Ÿè‹çœå—é€šå¸‚å¸‚è¾–åŒº", 320602: "æ±Ÿè‹çœå—é€šå¸‚å´‡å·åŒº", 320611: "æ±Ÿè‹çœå—é€šå¸‚æ¸¯é—¸åŒº", 320621: "æ±Ÿè‹çœå—é€šå¸‚æµ·å®‰åŽ¿", 320623: "æ±Ÿè‹çœå—é€šå¸‚å¦‚ä¸œåŽ¿", 320681: "æ±Ÿè‹çœå—é€šå¸‚å¯ä¸œå¸‚", 320682: "æ±Ÿè‹çœå—é€šå¸‚å¦‚çš‹å¸‚", 320683: "æ±Ÿè‹çœå—é€šå¸‚é€šå·žå¸‚", 320684: "æ±Ÿè‹çœå—é€šå¸‚æµ·é—¨å¸‚", 320700: "æ±Ÿè‹çœè¿žäº‘æ¸¯å¸‚", 320701: "æ±Ÿè‹çœè¿žäº‘æ¸¯å¸‚å¸‚è¾–åŒº", 320703: "æ±Ÿè‹çœè¿žäº‘æ¸¯å¸‚è¿žäº‘åŒº", 320704: "æ±Ÿè‹çœè¿žäº‘æ¸¯å¸‚äº‘å°åŒº", 320705: "æ±Ÿè‹çœè¿žäº‘æ¸¯å¸‚æ–°æµ¦åŒº", 320706: "æ±Ÿè‹çœè¿žäº‘æ¸¯å¸‚æµ·å·žåŒº", 320721: "æ±Ÿè‹çœè¿žäº‘æ¸¯å¸‚èµ£æ¦†åŽ¿", 320722: "æ±Ÿè‹çœè¿žäº‘æ¸¯å¸‚ä¸œæµ·åŽ¿", 320723: "æ±Ÿè‹çœè¿žäº‘æ¸¯å¸‚çŒäº‘åŽ¿", 320724: "æ±Ÿè‹çœè¿žäº‘æ¸¯å¸‚çŒå—åŽ¿", 320800: "æ±Ÿè‹çœæ·®é˜´å¸‚", 320801: "æ±Ÿè‹çœæ·®é˜´å¸‚å¸‚è¾–åŒº", 320802: "æ±Ÿè‹çœæ·®é˜´å¸‚æ¸…æ²³åŒº", 320811: "æ±Ÿè‹çœæ·®é˜´å¸‚æ¸…æµ¦åŒº", 320821: "æ±Ÿè‹çœæ·®é˜´å¸‚æ·®é˜´åŽ¿", 320826: "æ±Ÿè‹çœæ·®é˜´å¸‚æ¶Ÿæ°´åŽ¿", 320829: "æ±Ÿè‹çœæ·®é˜´å¸‚æ´ªæ³½åŽ¿", 320830: "æ±Ÿè‹çœæ·®é˜´å¸‚ç›±çœ™åŽ¿", 320831: "æ±Ÿè‹çœæ·®é˜´å¸‚é‡‘æ¹–åŽ¿", 320882: "æ±Ÿè‹çœæ·®é˜´å¸‚æ·®å®‰å¸‚", 320900: "æ±Ÿè‹çœç›åŸŽå¸‚", 320901: "æ±Ÿè‹çœç›åŸŽå¸‚å¸‚è¾–åŒº", 320902: "æ±Ÿè‹çœç›åŸŽå¸‚åŸŽåŒº", 320921: "æ±Ÿè‹çœç›åŸŽå¸‚å“æ°´åŽ¿", 320922: "æ±Ÿè‹çœç›åŸŽå¸‚æ»¨æµ·åŽ¿", 320923: "æ±Ÿè‹çœç›åŸŽå¸‚é˜œå®åŽ¿", 320924: "æ±Ÿè‹çœç›åŸŽå¸‚å°„é˜³åŽ¿", 320925: "æ±Ÿè‹çœç›åŸŽå¸‚å»ºæ¹–åŽ¿", 320928: "æ±Ÿè‹çœç›åŸŽå¸‚ç›éƒ½åŽ¿", 320981: "æ±Ÿè‹çœç›åŸŽå¸‚ä¸œå°å¸‚", 320982: "æ±Ÿè‹çœç›åŸŽå¸‚å¤§ä¸°å¸‚", 321e3: "æ±Ÿè‹çœæ‰¬å·žå¸‚", 321001: "æ±Ÿè‹çœæ‰¬å·žå¸‚å¸‚è¾–åŒº", 321002: "æ±Ÿè‹çœæ‰¬å·žå¸‚å¹¿é™µåŒº", 321011: "æ±Ÿè‹çœæ‰¬å·žå¸‚éƒŠåŒº", 321023: "æ±Ÿè‹çœæ‰¬å·žå¸‚å®åº”åŽ¿", 321027: "æ±Ÿè‹çœæ‰¬å·žå¸‚é‚—æ±ŸåŽ¿", 321081: "æ±Ÿè‹çœæ‰¬å·žå¸‚ä»ªå¾å¸‚", 321084: "æ±Ÿè‹çœæ‰¬å·žå¸‚é«˜é‚®å¸‚", 321088: "æ±Ÿè‹çœæ‰¬å·žå¸‚æ±Ÿéƒ½å¸‚", 321100: "æ±Ÿè‹çœé•‡æ±Ÿå¸‚", 321101: "æ±Ÿè‹çœé•‡æ±Ÿå¸‚å¸‚è¾–åŒº", 321102: "æ±Ÿè‹çœé•‡æ±Ÿå¸‚äº¬å£åŒº", 321111: "æ±Ÿè‹çœé•‡æ±Ÿå¸‚æ¶¦å·žåŒº", 321121: "æ±Ÿè‹çœé•‡æ±Ÿå¸‚ä¸¹å¾’åŽ¿", 321181: "æ±Ÿè‹çœé•‡æ±Ÿå¸‚ä¸¹é˜³å¸‚", 321182: "æ±Ÿè‹çœé•‡æ±Ÿå¸‚æ‰¬ä¸­å¸‚", 321183: "æ±Ÿè‹çœé•‡æ±Ÿå¸‚å¥å®¹å¸‚", 321200: "æ±Ÿè‹çœæ³°å·žå¸‚", 321201: "æ±Ÿè‹çœæ³°å·žå¸‚å¸‚è¾–åŒº", 321202: "æ±Ÿè‹çœæ³°å·žå¸‚æµ·é™µåŒº", 321203: "æ±Ÿè‹çœæ³°å·žå¸‚é«˜æ¸¯åŒº", 321281: "æ±Ÿè‹çœæ³°å·žå¸‚å…´åŒ–å¸‚", 321282: "æ±Ÿè‹çœæ³°å·žå¸‚é–æ±Ÿå¸‚", 321283: "æ±Ÿè‹çœæ³°å·žå¸‚æ³°å…´å¸‚", 321284: "æ±Ÿè‹çœæ³°å·žå¸‚å§œå °å¸‚", 321300: "æ±Ÿè‹çœå®¿è¿å¸‚", 321301: "æ±Ÿè‹çœå®¿è¿å¸‚å¸‚è¾–åŒº", 321302: "æ±Ÿè‹çœå®¿è¿å¸‚å®¿åŸŽåŒº", 321321: "æ±Ÿè‹çœå®¿è¿å¸‚å®¿è±«åŽ¿", 321322: "æ±Ÿè‹çœå®¿è¿å¸‚æ²­é˜³åŽ¿", 321323: "æ±Ÿè‹çœå®¿è¿å¸‚æ³—é˜³åŽ¿", 321324: "æ±Ÿè‹çœå®¿è¿å¸‚æ³—æ´ªåŽ¿", 33e4: "æµ™æ±Ÿçœ", 330100: "æµ™æ±Ÿçœæ­å·žå¸‚", 330101: "æµ™æ±Ÿçœæ­å·žå¸‚å¸‚è¾–åŒº", 330102: "æµ™æ±Ÿçœæ­å·žå¸‚ä¸ŠåŸŽåŒº", 330103: "æµ™æ±Ÿçœæ­å·žå¸‚ä¸‹åŸŽåŒº", 330104: "æµ™æ±Ÿçœæ­å·žå¸‚æ±Ÿå¹²åŒº", 330105: "æµ™æ±Ÿçœæ­å·žå¸‚æ‹±å¢…åŒº", 330106: "æµ™æ±Ÿçœæ­å·žå¸‚è¥¿æ¹–åŒº", 330108: "æµ™æ±Ÿçœæ­å·žå¸‚æ»¨æ±ŸåŒº", 330122: "æµ™æ±Ÿçœæ­å·žå¸‚æ¡åºåŽ¿", 330127: "æµ™æ±Ÿçœæ­å·žå¸‚æ·³å®‰åŽ¿", 330181: "æµ™æ±Ÿçœæ­å·žå¸‚è§å±±å¸‚", 330182: "æµ™æ±Ÿçœæ­å·žå¸‚å»ºå¾·å¸‚", 330183: "æµ™æ±Ÿçœæ­å·žå¸‚å¯Œé˜³å¸‚", 330184: "æµ™æ±Ÿçœæ­å·žå¸‚ä½™æ­å¸‚", 330185: "æµ™æ±Ÿçœæ­å·žå¸‚ä¸´å®‰å¸‚", 330200: "æµ™æ±Ÿçœå®æ³¢å¸‚", 330201: "æµ™æ±Ÿçœå®æ³¢å¸‚å¸‚è¾–åŒº", 330203: "æµ™æ±Ÿçœå®æ³¢å¸‚æµ·æ›™åŒº", 330204: "æµ™æ±Ÿçœå®æ³¢å¸‚æ±Ÿä¸œåŒº", 330205: "æµ™æ±Ÿçœå®æ³¢å¸‚æ±ŸåŒ—åŒº", 330206: "æµ™æ±Ÿçœå®æ³¢å¸‚åŒ—ä»‘åŒº", 330211: "æµ™æ±Ÿçœå®æ³¢å¸‚é•‡æµ·åŒº", 330225: "æµ™æ±Ÿçœå®æ³¢å¸‚è±¡å±±åŽ¿", 330226: "æµ™æ±Ÿçœå®æ³¢å¸‚å®æµ·åŽ¿", 330227: "æµ™æ±Ÿçœå®æ³¢å¸‚é„žåŽ¿", 330281: "æµ™æ±Ÿçœå®æ³¢å¸‚ä½™å§šå¸‚", 330282: "æµ™æ±Ÿçœå®æ³¢å¸‚æ…ˆæºªå¸‚", 330283: "æµ™æ±Ÿçœå®æ³¢å¸‚å¥‰åŒ–å¸‚", 330300: "æµ™æ±Ÿçœæ¸©å·žå¸‚", 330301: "æµ™æ±Ÿçœæ¸©å·žå¸‚å¸‚è¾–åŒº", 330302: "æµ™æ±Ÿçœæ¸©å·žå¸‚é¹¿åŸŽåŒº", 330303: "æµ™æ±Ÿçœæ¸©å·žå¸‚é¾™æ¹¾åŒº", 330304: "æµ™æ±Ÿçœæ¸©å·žå¸‚ç“¯æµ·åŒº", 330322: "æµ™æ±Ÿçœæ¸©å·žå¸‚æ´žå¤´åŽ¿", 330324: "æµ™æ±Ÿçœæ¸©å·žå¸‚æ°¸å˜‰åŽ¿", 330326: "æµ™æ±Ÿçœæ¸©å·žå¸‚å¹³é˜³åŽ¿", 330327: "æµ™æ±Ÿçœæ¸©å·žå¸‚è‹å—åŽ¿", 330328: "æµ™æ±Ÿçœæ¸©å·žå¸‚æ–‡æˆåŽ¿", 330329: "æµ™æ±Ÿçœæ¸©å·žå¸‚æ³°é¡ºåŽ¿", 330381: "æµ™æ±Ÿçœæ¸©å·žå¸‚ç‘žå®‰å¸‚", 330382: "æµ™æ±Ÿçœæ¸©å·žå¸‚ä¹æ¸…å¸‚", 330400: "æµ™æ±Ÿçœå˜‰å…´å¸‚", 330401: "æµ™æ±Ÿçœå˜‰å…´å¸‚å¸‚è¾–åŒº", 330402: "æµ™æ±Ÿçœå˜‰å…´å¸‚ç§€åŸŽåŒº", 330411: "æµ™æ±Ÿçœå˜‰å…´å¸‚éƒŠåŒº", 330421: "æµ™æ±Ÿçœå˜‰å…´å¸‚å˜‰å–„åŽ¿", 330424: "æµ™æ±Ÿçœå˜‰å…´å¸‚æµ·ç›åŽ¿", 330481: "æµ™æ±Ÿçœå˜‰å…´å¸‚æµ·å®å¸‚", 330482: "æµ™æ±Ÿçœå˜‰å…´å¸‚å¹³æ¹–å¸‚", 330483: "æµ™æ±Ÿçœå˜‰å…´å¸‚æ¡ä¹¡å¸‚", 330500: "æµ™æ±Ÿçœæ¹–å·žå¸‚", 330501: "æµ™æ±Ÿçœæ¹–å·žå¸‚å¸‚è¾–åŒº", 330521: "æµ™æ±Ÿçœæ¹–å·žå¸‚å¾·æ¸…åŽ¿", 330522: "æµ™æ±Ÿçœæ¹–å·žå¸‚é•¿å…´åŽ¿", 330523: "æµ™æ±Ÿçœæ¹–å·žå¸‚å®‰å‰åŽ¿", 330600: "æµ™æ±Ÿçœç»å…´å¸‚", 330601: "æµ™æ±Ÿçœç»å…´å¸‚å¸‚è¾–åŒº", 330602: "æµ™æ±Ÿçœç»å…´å¸‚è¶ŠåŸŽåŒº", 330621: "æµ™æ±Ÿçœç»å…´å¸‚ç»å…´åŽ¿", 330624: "æµ™æ±Ÿçœç»å…´å¸‚æ–°æ˜ŒåŽ¿", 330681: "æµ™æ±Ÿçœç»å…´å¸‚è¯¸æš¨å¸‚", 330682: "æµ™æ±Ÿçœç»å…´å¸‚ä¸Šè™žå¸‚", 330683: "æµ™æ±Ÿçœç»å…´å¸‚åµŠå·žå¸‚", 330700: "æµ™æ±Ÿçœé‡‘åŽå¸‚", 330701: "æµ™æ±Ÿçœé‡‘åŽå¸‚å¸‚è¾–åŒº", 330702: "æµ™æ±Ÿçœé‡‘åŽå¸‚å©ºåŸŽåŒº", 330721: "æµ™æ±Ÿçœé‡‘åŽå¸‚é‡‘åŽåŽ¿", 330723: "æµ™æ±Ÿçœé‡‘åŽå¸‚æ­¦ä¹‰åŽ¿", 330726: "æµ™æ±Ÿçœé‡‘åŽå¸‚æµ¦æ±ŸåŽ¿", 330727: "æµ™æ±Ÿçœé‡‘åŽå¸‚ç£å®‰åŽ¿", 330781: "æµ™æ±Ÿçœé‡‘åŽå¸‚å…°æºªå¸‚", 330782: "æµ™æ±Ÿçœé‡‘åŽå¸‚ä¹‰ä¹Œå¸‚", 330783: "æµ™æ±Ÿçœé‡‘åŽå¸‚ä¸œé˜³å¸‚", 330784: "æµ™æ±Ÿçœé‡‘åŽå¸‚æ°¸åº·å¸‚", 330800: "æµ™æ±Ÿçœè¡¢å·žå¸‚", 330801: "æµ™æ±Ÿçœè¡¢å·žå¸‚å¸‚è¾–åŒº", 330802: "æµ™æ±Ÿçœè¡¢å·žå¸‚æŸ¯åŸŽåŒº", 330821: "æµ™æ±Ÿçœè¡¢å·žå¸‚è¡¢åŽ¿", 330822: "æµ™æ±Ÿçœè¡¢å·žå¸‚å¸¸å±±åŽ¿", 330824: "æµ™æ±Ÿçœè¡¢å·žå¸‚å¼€åŒ–åŽ¿", 330825: "æµ™æ±Ÿçœè¡¢å·žå¸‚é¾™æ¸¸åŽ¿", 330881: "æµ™æ±Ÿçœè¡¢å·žå¸‚æ±Ÿå±±å¸‚", 330900: "æµ™æ±ŸçœèˆŸå±±å¸‚", 330901: "æµ™æ±ŸçœèˆŸå±±å¸‚å¸‚è¾–åŒº", 330902: "æµ™æ±ŸçœèˆŸå±±å¸‚å®šæµ·åŒº", 330903: "æµ™æ±ŸçœèˆŸå±±å¸‚æ™®é™€åŒº", 330921: "æµ™æ±ŸçœèˆŸå±±å¸‚å²±å±±åŽ¿", 330922: "æµ™æ±ŸçœèˆŸå±±å¸‚åµŠæ³—åŽ¿", 331e3: "æµ™æ±Ÿçœå°å·žå¸‚", 331001: "æµ™æ±Ÿçœå°å·žå¸‚å¸‚è¾–åŒº", 331002: "æµ™æ±Ÿçœå°å·žå¸‚æ¤’æ±ŸåŒº", 331003: "æµ™æ±Ÿçœå°å·žå¸‚é»„å²©åŒº", 331004: "æµ™æ±Ÿçœå°å·žå¸‚è·¯æ¡¥åŒº", 331021: "æµ™æ±Ÿçœå°å·žå¸‚çŽ‰çŽ¯åŽ¿", 331022: "æµ™æ±Ÿçœå°å·žå¸‚ä¸‰é—¨åŽ¿", 331023: "æµ™æ±Ÿçœå°å·žå¸‚å¤©å°åŽ¿", 331024: "æµ™æ±Ÿçœå°å·žå¸‚ä»™å±…åŽ¿", 331081: "æµ™æ±Ÿçœå°å·žå¸‚æ¸©å²­å¸‚", 331082: "æµ™æ±Ÿçœå°å·žå¸‚ä¸´æµ·å¸‚", 332500: "æµ™æ±Ÿçœä¸½æ°´åœ°åŒº", 332501: "æµ™æ±Ÿçœä¸½æ°´åœ°åŒºä¸½æ°´å¸‚", 332502: "æµ™æ±Ÿçœä¸½æ°´åœ°åŒºé¾™æ³‰å¸‚", 332522: "æµ™æ±Ÿçœä¸½æ°´åœ°åŒºé’ç”°åŽ¿", 332523: "æµ™æ±Ÿçœä¸½æ°´åœ°åŒºäº‘å’ŒåŽ¿", 332525: "æµ™æ±Ÿçœä¸½æ°´åœ°åŒºåº†å…ƒåŽ¿", 332526: "æµ™æ±Ÿçœä¸½æ°´åœ°åŒºç¼™äº‘åŽ¿", 332527: "æµ™æ±Ÿçœä¸½æ°´åœ°åŒºé‚æ˜ŒåŽ¿", 332528: "æµ™æ±Ÿçœä¸½æ°´åœ°åŒºæ¾é˜³åŽ¿", 332529: "æµ™æ±Ÿçœä¸½æ°´åœ°åŒºæ™¯å®ç•²æ—è‡ªæ²»åŽ¿", 34e4: "å®‰å¾½çœ", 340100: "å®‰å¾½çœåˆè‚¥å¸‚", 340101: "å®‰å¾½çœåˆè‚¥å¸‚å¸‚è¾–åŒº", 340102: "å®‰å¾½çœåˆè‚¥å¸‚ä¸œå¸‚åŒº", 340103: "å®‰å¾½çœåˆè‚¥å¸‚ä¸­å¸‚åŒº", 340104: "å®‰å¾½çœåˆè‚¥å¸‚è¥¿å¸‚åŒº", 340111: "å®‰å¾½çœåˆè‚¥å¸‚éƒŠåŒº", 340121: "å®‰å¾½çœåˆè‚¥å¸‚é•¿ä¸°åŽ¿", 340122: "å®‰å¾½çœåˆè‚¥å¸‚è‚¥ä¸œåŽ¿", 340123: "å®‰å¾½çœåˆè‚¥å¸‚è‚¥è¥¿åŽ¿", 340200: "å®‰å¾½çœèŠœæ¹–å¸‚", 340201: "å®‰å¾½çœèŠœæ¹–å¸‚å¸‚è¾–åŒº", 340202: "å®‰å¾½çœèŠœæ¹–å¸‚é•œæ¹–åŒº", 340203: "å®‰å¾½çœèŠœæ¹–å¸‚é©¬å¡˜åŒº", 340204: "å®‰å¾½çœèŠœæ¹–å¸‚æ–°èŠœåŒº", 340207: "å®‰å¾½çœèŠœæ¹–å¸‚é¸ æ±ŸåŒº", 340221: "å®‰å¾½çœèŠœæ¹–å¸‚èŠœæ¹–åŽ¿", 340222: "å®‰å¾½çœèŠœæ¹–å¸‚ç¹æ˜ŒåŽ¿", 340223: "å®‰å¾½çœèŠœæ¹–å¸‚å—é™µåŽ¿", 340300: "å®‰å¾½çœèšŒåŸ å¸‚", 340301: "å®‰å¾½çœèšŒåŸ å¸‚å¸‚è¾–åŒº", 340302: "å®‰å¾½çœèšŒåŸ å¸‚ä¸œå¸‚åŒº", 340303: "å®‰å¾½çœèšŒåŸ å¸‚ä¸­å¸‚åŒº", 340304: "å®‰å¾½çœèšŒåŸ å¸‚è¥¿å¸‚åŒº", 340311: "å®‰å¾½çœèšŒåŸ å¸‚éƒŠåŒº", 340321: "å®‰å¾½çœèšŒåŸ å¸‚æ€€è¿œåŽ¿", 340322: "å®‰å¾½çœèšŒåŸ å¸‚äº”æ²³åŽ¿", 340323: "å®‰å¾½çœèšŒåŸ å¸‚å›ºé•‡åŽ¿", 340400: "å®‰å¾½çœæ·®å—å¸‚", 340401: "å®‰å¾½çœæ·®å—å¸‚å¸‚è¾–åŒº", 340402: "å®‰å¾½çœæ·®å—å¸‚å¤§é€šåŒº", 340403: "å®‰å¾½çœæ·®å—å¸‚ç”°å®¶åºµåŒº", 340404: "å®‰å¾½çœæ·®å—å¸‚è°¢å®¶é›†åŒº", 340405: "å®‰å¾½çœæ·®å—å¸‚å…«å…¬å±±åŒº", 340406: "å®‰å¾½çœæ·®å—å¸‚æ½˜é›†åŒº", 340421: "å®‰å¾½çœæ·®å—å¸‚å‡¤å°åŽ¿", 340500: "å®‰å¾½çœé©¬éžå±±å¸‚", 340501: "å®‰å¾½çœé©¬éžå±±å¸‚å¸‚è¾–åŒº", 340502: "å®‰å¾½çœé©¬éžå±±å¸‚é‡‘å®¶åº„åŒº", 340503: "å®‰å¾½çœé©¬éžå±±å¸‚èŠ±å±±åŒº", 340504: "å®‰å¾½çœé©¬éžå±±å¸‚é›¨å±±åŒº", 340505: "å®‰å¾½çœé©¬éžå±±å¸‚å‘å±±åŒº", 340521: "å®‰å¾½çœé©¬éžå±±å¸‚å½“æ¶‚åŽ¿", 340600: "å®‰å¾½çœæ·®åŒ—å¸‚", 340601: "å®‰å¾½çœæ·®åŒ—å¸‚å¸‚è¾–åŒº", 340602: "å®‰å¾½çœæ·®åŒ—å¸‚æœé›†åŒº", 340603: "å®‰å¾½çœæ·®åŒ—å¸‚ç›¸å±±åŒº", 340604: "å®‰å¾½çœæ·®åŒ—å¸‚çƒˆå±±åŒº", 340621: "å®‰å¾½çœæ·®åŒ—å¸‚æ¿‰æºªåŽ¿", 340700: "å®‰å¾½çœé“œé™µå¸‚", 340701: "å®‰å¾½çœé“œé™µå¸‚å¸‚è¾–åŒº", 340702: "å®‰å¾½çœé“œé™µå¸‚é“œå®˜å±±åŒº", 340703: "å®‰å¾½çœé“œé™µå¸‚ç‹®å­å±±åŒº", 340711: "å®‰å¾½çœé“œé™µå¸‚éƒŠåŒº", 340721: "å®‰å¾½çœé“œé™µå¸‚é“œé™µåŽ¿", 340800: "å®‰å¾½çœå®‰åº†å¸‚", 340801: "å®‰å¾½çœå®‰åº†å¸‚å¸‚è¾–åŒº", 340802: "å®‰å¾½çœå®‰åº†å¸‚è¿Žæ±ŸåŒº", 340803: "å®‰å¾½çœå®‰åº†å¸‚å¤§è§‚åŒº", 340811: "å®‰å¾½çœå®‰åº†å¸‚éƒŠåŒº", 340822: "å®‰å¾½çœå®‰åº†å¸‚æ€€å®åŽ¿", 340823: "å®‰å¾½çœå®‰åº†å¸‚æžžé˜³åŽ¿", 340824: "å®‰å¾½çœå®‰åº†å¸‚æ½œå±±åŽ¿", 340825: "å®‰å¾½çœå®‰åº†å¸‚å¤ªæ¹–åŽ¿", 340826: "å®‰å¾½çœå®‰åº†å¸‚å®¿æ¾åŽ¿", 340827: "å®‰å¾½çœå®‰åº†å¸‚æœ›æ±ŸåŽ¿", 340828: "å®‰å¾½çœå®‰åº†å¸‚å²³è¥¿åŽ¿", 340881: "å®‰å¾½çœå®‰åº†å¸‚æ¡åŸŽå¸‚", 341e3: "å®‰å¾½çœé»„å±±å¸‚", 341001: "å®‰å¾½çœé»„å±±å¸‚å¸‚è¾–åŒº", 341002: "å®‰å¾½çœé»„å±±å¸‚å±¯æºªåŒº", 341003: "å®‰å¾½çœé»„å±±å¸‚é»„å±±åŒº", 341004: "å®‰å¾½çœé»„å±±å¸‚å¾½å·žåŒº", 341021: "å®‰å¾½çœé»„å±±å¸‚æ­™åŽ¿", 341022: "å®‰å¾½çœé»„å±±å¸‚ä¼‘å®åŽ¿", 341023: "å®‰å¾½çœé»„å±±å¸‚é»ŸåŽ¿", 341024: "å®‰å¾½çœé»„å±±å¸‚ç¥é—¨åŽ¿", 341100: "å®‰å¾½çœæ»å·žå¸‚", 341101: "å®‰å¾½çœæ»å·žå¸‚å¸‚è¾–åŒº", 341102: "å®‰å¾½çœæ»å·žå¸‚ç…çŠåŒº", 341103: "å®‰å¾½çœæ»å·žå¸‚å—è°¯åŒº", 341122: "å®‰å¾½çœæ»å·žå¸‚æ¥å®‰åŽ¿", 341124: "å®‰å¾½çœæ»å·žå¸‚å…¨æ¤’åŽ¿", 341125: "å®‰å¾½çœæ»å·žå¸‚å®šè¿œåŽ¿", 341126: "å®‰å¾½çœæ»å·žå¸‚å‡¤é˜³åŽ¿", 341181: "å®‰å¾½çœæ»å·žå¸‚å¤©é•¿å¸‚", 341182: "å®‰å¾½çœæ»å·žå¸‚æ˜Žå…‰å¸‚", 341200: "å®‰å¾½çœé˜œé˜³å¸‚", 341201: "å®‰å¾½çœé˜œé˜³å¸‚å¸‚è¾–åŒº", 341202: "å®‰å¾½çœé˜œé˜³å¸‚é¢å·žåŒº", 341203: "å®‰å¾½çœé˜œé˜³å¸‚é¢ä¸œåŒº", 341204: "å®‰å¾½çœé˜œé˜³å¸‚é¢æ³‰åŒº", 341221: "å®‰å¾½çœé˜œé˜³å¸‚ä¸´æ³‰åŽ¿", 341222: "å®‰å¾½çœé˜œé˜³å¸‚å¤ªå’ŒåŽ¿", 341223: "å®‰å¾½çœé˜œé˜³å¸‚æ¶¡é˜³åŽ¿", 341224: "å®‰å¾½çœé˜œé˜³å¸‚è’™åŸŽåŽ¿", 341225: "å®‰å¾½çœé˜œé˜³å¸‚é˜œå—åŽ¿", 341226: "å®‰å¾½çœé˜œé˜³å¸‚é¢ä¸ŠåŽ¿", 341227: "å®‰å¾½çœé˜œé˜³å¸‚åˆ©è¾›åŽ¿", 341281: "å®‰å¾½çœé˜œé˜³å¸‚äº³å·žå¸‚", 341282: "å®‰å¾½çœé˜œé˜³å¸‚ç•Œé¦–å¸‚", 341300: "å®‰å¾½çœå®¿å·žå¸‚", 341301: "å®‰å¾½çœå®¿å·žå¸‚å¸‚è¾–åŒº", 341302: "å®‰å¾½çœå®¿å·žå¸‚ç”¬æ¡¥åŒº", 341321: "å®‰å¾½çœå®¿å·žå¸‚ç €å±±åŽ¿", 341322: "å®‰å¾½çœå®¿å·žå¸‚è§åŽ¿", 341323: "å®‰å¾½çœå®¿å·žå¸‚çµç’§åŽ¿", 341324: "å®‰å¾½çœå®¿å·žå¸‚æ³—åŽ¿", 342400: "å®‰å¾½çœå…­å®‰åœ°åŒº", 342401: "å®‰å¾½çœå…­å®‰åœ°åŒºå…­å®‰å¸‚", 342422: "å®‰å¾½çœå…­å®‰åœ°åŒºå¯¿åŽ¿", 342423: "å®‰å¾½çœå…­å®‰åœ°åŒºéœé‚±åŽ¿", 342425: "å®‰å¾½çœå…­å®‰åœ°åŒºèˆ’åŸŽåŽ¿", 342426: "å®‰å¾½çœå…­å®‰åœ°åŒºé‡‘å¯¨åŽ¿", 342427: "å®‰å¾½çœå…­å®‰åœ°åŒºéœå±±åŽ¿", 342500: "å®‰å¾½çœå®£åŸŽåœ°åŒº", 342501: "å®‰å¾½çœå®£åŸŽåœ°åŒºå®£å·žå¸‚", 342502: "å®‰å¾½çœå®£åŸŽåœ°åŒºå®å›½å¸‚", 342522: "å®‰å¾½çœå®£åŸŽåœ°åŒºéƒŽæºªåŽ¿", 342523: "å®‰å¾½çœå®£åŸŽåœ°åŒºå¹¿å¾·åŽ¿", 342529: "å®‰å¾½çœå®£åŸŽåœ°åŒºæ³¾åŽ¿", 342530: "å®‰å¾½çœå®£åŸŽåœ°åŒºæ—Œå¾·åŽ¿", 342531: "å®‰å¾½çœå®£åŸŽåœ°åŒºç»©æºªåŽ¿", 342600: "å®‰å¾½çœå·¢æ¹–åœ°åŒº", 342601: "å®‰å¾½çœå·¢æ¹–åœ°åŒºå·¢æ¹–å¸‚", 342622: "å®‰å¾½çœå·¢æ¹–åœ°åŒºåºæ±ŸåŽ¿", 342623: "å®‰å¾½çœå·¢æ¹–åœ°åŒºæ— ä¸ºåŽ¿", 342625: "å®‰å¾½çœå·¢æ¹–åœ°åŒºå«å±±åŽ¿", 342626: "å®‰å¾½çœå·¢æ¹–åœ°åŒºå’ŒåŽ¿", 342900: "å®‰å¾½çœæ± å·žåœ°åŒº", 342901: "å®‰å¾½çœæ± å·žåœ°åŒºè´µæ± å¸‚", 342921: "å®‰å¾½çœæ± å·žåœ°åŒºä¸œè‡³åŽ¿", 342922: "å®‰å¾½çœæ± å·žåœ°åŒºçŸ³å°åŽ¿", 342923: "å®‰å¾½çœæ± å·žåœ°åŒºé’é˜³åŽ¿", 35e4: "ç¦å»ºçœ", 350100: "ç¦å»ºçœç¦å·žå¸‚", 350101: "ç¦å»ºçœç¦å·žå¸‚å¸‚è¾–åŒº", 350102: "ç¦å»ºçœç¦å·žå¸‚é¼“æ¥¼åŒº", 350103: "ç¦å»ºçœç¦å·žå¸‚å°æ±ŸåŒº", 350104: "ç¦å»ºçœç¦å·žå¸‚ä»“å±±åŒº", 350105: "ç¦å»ºçœç¦å·žå¸‚é©¬å°¾åŒº", 350111: "ç¦å»ºçœç¦å·žå¸‚æ™‹å®‰åŒº", 350121: "ç¦å»ºçœç¦å·žå¸‚é—½ä¾¯åŽ¿", 350122: "ç¦å»ºçœç¦å·žå¸‚è¿žæ±ŸåŽ¿", 350123: "ç¦å»ºçœç¦å·žå¸‚ç½—æºåŽ¿", 350124: "ç¦å»ºçœç¦å·žå¸‚é—½æ¸…åŽ¿", 350125: "ç¦å»ºçœç¦å·žå¸‚æ°¸æ³°åŽ¿", 350128: "ç¦å»ºçœç¦å·žå¸‚å¹³æ½­åŽ¿", 350181: "ç¦å»ºçœç¦å·žå¸‚ç¦æ¸…å¸‚", 350182: "ç¦å»ºçœç¦å·žå¸‚é•¿ä¹å¸‚", 350200: "ç¦å»ºçœåŽ¦é—¨å¸‚", 350201: "ç¦å»ºçœåŽ¦é—¨å¸‚å¸‚è¾–åŒº", 350202: "ç¦å»ºçœåŽ¦é—¨å¸‚é¼“æµªå±¿åŒº", 350203: "ç¦å»ºçœåŽ¦é—¨å¸‚æ€æ˜ŽåŒº", 350204: "ç¦å»ºçœåŽ¦é—¨å¸‚å¼€å…ƒåŒº", 350205: "ç¦å»ºçœåŽ¦é—¨å¸‚ææž—åŒº", 350206: "ç¦å»ºçœåŽ¦é—¨å¸‚æ¹–é‡ŒåŒº", 350211: "ç¦å»ºçœåŽ¦é—¨å¸‚é›†ç¾ŽåŒº", 350212: "ç¦å»ºçœåŽ¦é—¨å¸‚åŒå®‰åŒº", 350300: "ç¦å»ºçœèŽ†ç”°å¸‚", 350301: "ç¦å»ºçœèŽ†ç”°å¸‚å¸‚è¾–åŒº", 350302: "ç¦å»ºçœèŽ†ç”°å¸‚åŸŽåŽ¢åŒº", 350303: "ç¦å»ºçœèŽ†ç”°å¸‚æ¶µæ±ŸåŒº", 350321: "ç¦å»ºçœèŽ†ç”°å¸‚èŽ†ç”°åŽ¿", 350322: "ç¦å»ºçœèŽ†ç”°å¸‚ä»™æ¸¸åŽ¿", 350400: "ç¦å»ºçœä¸‰æ˜Žå¸‚", 350401: "ç¦å»ºçœä¸‰æ˜Žå¸‚å¸‚è¾–åŒº", 350402: "ç¦å»ºçœä¸‰æ˜Žå¸‚æ¢…åˆ—åŒº", 350403: "ç¦å»ºçœä¸‰æ˜Žå¸‚ä¸‰å…ƒåŒº", 350421: "ç¦å»ºçœä¸‰æ˜Žå¸‚æ˜ŽæºªåŽ¿", 350423: "ç¦å»ºçœä¸‰æ˜Žå¸‚æ¸…æµåŽ¿", 350424: "ç¦å»ºçœä¸‰æ˜Žå¸‚å®åŒ–åŽ¿", 350425: "ç¦å»ºçœä¸‰æ˜Žå¸‚å¤§ç”°åŽ¿", 350426: "ç¦å»ºçœä¸‰æ˜Žå¸‚å°¤æºªåŽ¿", 350427: "ç¦å»ºçœä¸‰æ˜Žå¸‚æ²™åŽ¿", 350428: "ç¦å»ºçœä¸‰æ˜Žå¸‚å°†ä¹åŽ¿", 350429: "ç¦å»ºçœä¸‰æ˜Žå¸‚æ³°å®åŽ¿", 350430: "ç¦å»ºçœä¸‰æ˜Žå¸‚å»ºå®åŽ¿", 350481: "ç¦å»ºçœä¸‰æ˜Žå¸‚æ°¸å®‰å¸‚", 350500: "ç¦å»ºçœæ³‰å·žå¸‚", 350501: "ç¦å»ºçœæ³‰å·žå¸‚å¸‚è¾–åŒº", 350502: "ç¦å»ºçœæ³‰å·žå¸‚é²¤åŸŽåŒº", 350503: "ç¦å»ºçœæ³‰å·žå¸‚ä¸°æ³½åŒº", 350504: "ç¦å»ºçœæ³‰å·žå¸‚æ´›æ±ŸåŒº", 350521: "ç¦å»ºçœæ³‰å·žå¸‚æƒ å®‰åŽ¿", 350524: "ç¦å»ºçœæ³‰å·žå¸‚å®‰æºªåŽ¿", 350525: "ç¦å»ºçœæ³‰å·žå¸‚æ°¸æ˜¥åŽ¿", 350526: "ç¦å»ºçœæ³‰å·žå¸‚å¾·åŒ–åŽ¿", 350527: "ç¦å»ºçœæ³‰å·žå¸‚é‡‘é—¨åŽ¿", 350581: "ç¦å»ºçœæ³‰å·žå¸‚çŸ³ç‹®å¸‚", 350582: "ç¦å»ºçœæ³‰å·žå¸‚æ™‹æ±Ÿå¸‚", 350583: "ç¦å»ºçœæ³‰å·žå¸‚å—å®‰å¸‚", 350600: "ç¦å»ºçœæ¼³å·žå¸‚", 350601: "ç¦å»ºçœæ¼³å·žå¸‚å¸‚è¾–åŒº", 350602: "ç¦å»ºçœæ¼³å·žå¸‚èŠ—åŸŽåŒº", 350603: "ç¦å»ºçœæ¼³å·žå¸‚é¾™æ–‡åŒº", 350622: "ç¦å»ºçœæ¼³å·žå¸‚äº‘éœ„åŽ¿", 350623: "ç¦å»ºçœæ¼³å·žå¸‚æ¼³æµ¦åŽ¿", 350624: "ç¦å»ºçœæ¼³å·žå¸‚è¯å®‰åŽ¿", 350625: "ç¦å»ºçœæ¼³å·žå¸‚é•¿æ³°åŽ¿", 350626: "ç¦å»ºçœæ¼³å·žå¸‚ä¸œå±±åŽ¿", 350627: "ç¦å»ºçœæ¼³å·žå¸‚å—é–åŽ¿", 350628: "ç¦å»ºçœæ¼³å·žå¸‚å¹³å’ŒåŽ¿", 350629: "ç¦å»ºçœæ¼³å·žå¸‚åŽå®‰åŽ¿", 350681: "ç¦å»ºçœæ¼³å·žå¸‚é¾™æµ·å¸‚", 350700: "ç¦å»ºçœå—å¹³å¸‚", 350701: "ç¦å»ºçœå—å¹³å¸‚å¸‚è¾–åŒº", 350702: "ç¦å»ºçœå—å¹³å¸‚å»¶å¹³åŒº", 350721: "ç¦å»ºçœå—å¹³å¸‚é¡ºæ˜ŒåŽ¿", 350722: "ç¦å»ºçœå—å¹³å¸‚æµ¦åŸŽåŽ¿", 350723: "ç¦å»ºçœå—å¹³å¸‚å…‰æ³½åŽ¿", 350724: "ç¦å»ºçœå—å¹³å¸‚æ¾æºªåŽ¿", 350725: "ç¦å»ºçœå—å¹³å¸‚æ”¿å’ŒåŽ¿", 350781: "ç¦å»ºçœå—å¹³å¸‚é‚µæ­¦å¸‚", 350782: "ç¦å»ºçœå—å¹³å¸‚æ­¦å¤·å±±å¸‚", 350783: "ç¦å»ºçœå—å¹³å¸‚å»ºç“¯å¸‚", 350784: "ç¦å»ºçœå—å¹³å¸‚å»ºé˜³å¸‚", 350800: "ç¦å»ºçœé¾™å²©å¸‚", 350801: "ç¦å»ºçœé¾™å²©å¸‚å¸‚è¾–åŒº", 350802: "ç¦å»ºçœé¾™å²©å¸‚æ–°ç½—åŒº", 350821: "ç¦å»ºçœé¾™å²©å¸‚é•¿æ±€åŽ¿", 350822: "ç¦å»ºçœé¾™å²©å¸‚æ°¸å®šåŽ¿", 350823: "ç¦å»ºçœé¾™å²©å¸‚ä¸Šæ­åŽ¿", 350824: "ç¦å»ºçœé¾™å²©å¸‚æ­¦å¹³åŽ¿", 350825: "ç¦å»ºçœé¾™å²©å¸‚è¿žåŸŽåŽ¿", 350881: "ç¦å»ºçœé¾™å²©å¸‚æ¼³å¹³å¸‚", 352200: "ç¦å»ºçœå®å¾·åœ°åŒº", 352201: "ç¦å»ºçœå®å¾·åœ°åŒºå®å¾·å¸‚", 352202: "ç¦å»ºçœå®å¾·åœ°åŒºç¦å®‰å¸‚", 352203: "ç¦å»ºçœå®å¾·åœ°åŒºç¦é¼Žå¸‚", 352225: "ç¦å»ºçœå®å¾·åœ°åŒºéœžæµ¦åŽ¿", 352227: "ç¦å»ºçœå®å¾·åœ°åŒºå¤ç”°åŽ¿", 352228: "ç¦å»ºçœå®å¾·åœ°åŒºå±å—åŽ¿", 352229: "ç¦å»ºçœå®å¾·åœ°åŒºå¯¿å®åŽ¿", 352230: "ç¦å»ºçœå®å¾·åœ°åŒºå‘¨å®åŽ¿", 352231: "ç¦å»ºçœå®å¾·åœ°åŒºæŸ˜è£åŽ¿", 36e4: "æ±Ÿè¥¿çœ", 360100: "æ±Ÿè¥¿çœå—æ˜Œå¸‚", 360101: "æ±Ÿè¥¿çœå—æ˜Œå¸‚å¸‚è¾–åŒº", 360102: "æ±Ÿè¥¿çœå—æ˜Œå¸‚ä¸œæ¹–åŒº", 360103: "æ±Ÿè¥¿çœå—æ˜Œå¸‚è¥¿æ¹–åŒº", 360104: "æ±Ÿè¥¿çœå—æ˜Œå¸‚é’äº‘è°±åŒº", 360105: "æ±Ÿè¥¿çœå—æ˜Œå¸‚æ¹¾é‡ŒåŒº", 360111: "æ±Ÿè¥¿çœå—æ˜Œå¸‚éƒŠåŒº", 360121: "æ±Ÿè¥¿çœå—æ˜Œå¸‚å—æ˜ŒåŽ¿", 360122: "æ±Ÿè¥¿çœå—æ˜Œå¸‚æ–°å»ºåŽ¿", 360123: "æ±Ÿè¥¿çœå—æ˜Œå¸‚å®‰ä¹‰åŽ¿", 360124: "æ±Ÿè¥¿çœå—æ˜Œå¸‚è¿›è´¤åŽ¿", 360200: "æ±Ÿè¥¿çœæ™¯å¾·é•‡å¸‚", 360201: "æ±Ÿè¥¿çœæ™¯å¾·é•‡å¸‚å¸‚è¾–åŒº", 360202: "æ±Ÿè¥¿çœæ™¯å¾·é•‡å¸‚æ˜Œæ±ŸåŒº", 360203: "æ±Ÿè¥¿çœæ™¯å¾·é•‡å¸‚ç å±±åŒº", 360222: "æ±Ÿè¥¿çœæ™¯å¾·é•‡å¸‚æµ®æ¢åŽ¿", 360281: "æ±Ÿè¥¿çœæ™¯å¾·é•‡å¸‚ä¹å¹³å¸‚", 360300: "æ±Ÿè¥¿çœèä¹¡å¸‚", 360301: "æ±Ÿè¥¿çœèä¹¡å¸‚å¸‚è¾–åŒº", 360302: "æ±Ÿè¥¿çœèä¹¡å¸‚å®‰æºåŒº", 360313: "æ±Ÿè¥¿çœèä¹¡å¸‚æ¹˜ä¸œåŒº", 360321: "æ±Ÿè¥¿çœèä¹¡å¸‚èŽ²èŠ±åŽ¿", 360322: "æ±Ÿè¥¿çœèä¹¡å¸‚ä¸Šæ —åŽ¿", 360323: "æ±Ÿè¥¿çœèä¹¡å¸‚èŠ¦æºªåŽ¿", 360400: "æ±Ÿè¥¿çœä¹æ±Ÿå¸‚", 360401: "æ±Ÿè¥¿çœä¹æ±Ÿå¸‚å¸‚è¾–åŒº", 360402: "æ±Ÿè¥¿çœä¹æ±Ÿå¸‚åºå±±åŒº", 360403: "æ±Ÿè¥¿çœä¹æ±Ÿå¸‚æµ”é˜³åŒº", 360421: "æ±Ÿè¥¿çœä¹æ±Ÿå¸‚ä¹æ±ŸåŽ¿", 360423: "æ±Ÿè¥¿çœä¹æ±Ÿå¸‚æ­¦å®åŽ¿", 360424: "æ±Ÿè¥¿çœä¹æ±Ÿå¸‚ä¿®æ°´åŽ¿", 360425: "æ±Ÿè¥¿çœä¹æ±Ÿå¸‚æ°¸ä¿®åŽ¿", 360426: "æ±Ÿè¥¿çœä¹æ±Ÿå¸‚å¾·å®‰åŽ¿", 360427: "æ±Ÿè¥¿çœä¹æ±Ÿå¸‚æ˜Ÿå­åŽ¿", 360428: "æ±Ÿè¥¿çœä¹æ±Ÿå¸‚éƒ½æ˜ŒåŽ¿", 360429: "æ±Ÿè¥¿çœä¹æ±Ÿå¸‚æ¹–å£åŽ¿", 360430: "æ±Ÿè¥¿çœä¹æ±Ÿå¸‚å½­æ³½åŽ¿", 360481: "æ±Ÿè¥¿çœä¹æ±Ÿå¸‚ç‘žæ˜Œå¸‚", 360500: "æ±Ÿè¥¿çœæ–°ä½™å¸‚", 360501: "æ±Ÿè¥¿çœæ–°ä½™å¸‚å¸‚è¾–åŒº", 360502: "æ±Ÿè¥¿çœæ–°ä½™å¸‚æ¸æ°´åŒº", 360521: "æ±Ÿè¥¿çœæ–°ä½™å¸‚åˆ†å®œåŽ¿", 360600: "æ±Ÿè¥¿çœé¹°æ½­å¸‚", 360601: "æ±Ÿè¥¿çœé¹°æ½­å¸‚å¸‚è¾–åŒº", 360602: "æ±Ÿè¥¿çœé¹°æ½­å¸‚æœˆæ¹–åŒº", 360622: "æ±Ÿè¥¿çœé¹°æ½­å¸‚ä½™æ±ŸåŽ¿", 360681: "æ±Ÿè¥¿çœé¹°æ½­å¸‚è´µæºªå¸‚", 360700: "æ±Ÿè¥¿çœèµ£å·žå¸‚", 360701: "æ±Ÿè¥¿çœèµ£å·žå¸‚å¸‚è¾–åŒº", 360702: "æ±Ÿè¥¿çœèµ£å·žå¸‚ç« è´¡åŒº", 360721: "æ±Ÿè¥¿çœèµ£å·žå¸‚èµ£åŽ¿", 360722: "æ±Ÿè¥¿çœèµ£å·žå¸‚ä¿¡ä¸°åŽ¿", 360723: "æ±Ÿè¥¿çœèµ£å·žå¸‚å¤§ä½™åŽ¿", 360724: "æ±Ÿè¥¿çœèµ£å·žå¸‚ä¸ŠçŠ¹åŽ¿", 360725: "æ±Ÿè¥¿çœèµ£å·žå¸‚å´‡ä¹‰åŽ¿", 360726: "æ±Ÿè¥¿çœèµ£å·žå¸‚å®‰è¿œåŽ¿", 360727: "æ±Ÿè¥¿çœèµ£å·žå¸‚é¾™å—åŽ¿", 360728: "æ±Ÿè¥¿çœèµ£å·žå¸‚å®šå—åŽ¿", 360729: "æ±Ÿè¥¿çœèµ£å·žå¸‚å…¨å—åŽ¿", 360730: "æ±Ÿè¥¿çœèµ£å·žå¸‚å®éƒ½åŽ¿", 360731: "æ±Ÿè¥¿çœèµ£å·žå¸‚äºŽéƒ½åŽ¿", 360732: "æ±Ÿè¥¿çœèµ£å·žå¸‚å…´å›½åŽ¿", 360733: "æ±Ÿè¥¿çœèµ£å·žå¸‚ä¼šæ˜ŒåŽ¿", 360734: "æ±Ÿè¥¿çœèµ£å·žå¸‚å¯»ä¹ŒåŽ¿", 360735: "æ±Ÿè¥¿çœèµ£å·žå¸‚çŸ³åŸŽåŽ¿", 360781: "æ±Ÿè¥¿çœèµ£å·žå¸‚ç‘žé‡‘å¸‚", 360782: "æ±Ÿè¥¿çœèµ£å·žå¸‚å—åº·å¸‚", 362200: "æ±Ÿè¥¿çœå®œæ˜¥åœ°åŒº", 362201: "æ±Ÿè¥¿çœå®œæ˜¥åœ°åŒºå®œæ˜¥å¸‚", 362202: "æ±Ÿè¥¿çœå®œæ˜¥åœ°åŒºä¸°åŸŽå¸‚", 362203: "æ±Ÿè¥¿çœå®œæ˜¥åœ°åŒºæ¨Ÿæ ‘å¸‚", 362204: "æ±Ÿè¥¿çœå®œæ˜¥åœ°åŒºé«˜å®‰å¸‚", 362226: "æ±Ÿè¥¿çœå®œæ˜¥åœ°åŒºå¥‰æ–°åŽ¿", 362227: "æ±Ÿè¥¿çœå®œæ˜¥åœ°åŒºä¸‡è½½åŽ¿", 362228: "æ±Ÿè¥¿çœå®œæ˜¥åœ°åŒºä¸Šé«˜åŽ¿", 362229: "æ±Ÿè¥¿çœå®œæ˜¥åœ°åŒºå®œä¸°åŽ¿", 362232: "æ±Ÿè¥¿çœå®œæ˜¥åœ°åŒºé–å®‰åŽ¿", 362233: "æ±Ÿè¥¿çœå®œæ˜¥åœ°åŒºé“œé¼“åŽ¿", 362300: "æ±Ÿè¥¿çœä¸Šé¥¶åœ°åŒº", 362301: "æ±Ÿè¥¿çœä¸Šé¥¶åœ°åŒºä¸Šé¥¶å¸‚", 362302: "æ±Ÿè¥¿çœä¸Šé¥¶åœ°åŒºå¾·å…´å¸‚", 362321: "æ±Ÿè¥¿çœä¸Šé¥¶åœ°åŒºä¸Šé¥¶åŽ¿", 362322: "æ±Ÿè¥¿çœä¸Šé¥¶åœ°åŒºå¹¿ä¸°åŽ¿", 362323: "æ±Ÿè¥¿çœä¸Šé¥¶åœ°åŒºçŽ‰å±±åŽ¿", 362324: "æ±Ÿè¥¿çœä¸Šé¥¶åœ°åŒºé“…å±±åŽ¿", 362325: "æ±Ÿè¥¿çœä¸Šé¥¶åœ°åŒºæ¨ªå³°åŽ¿", 362326: "æ±Ÿè¥¿çœä¸Šé¥¶åœ°åŒºå¼‹é˜³åŽ¿", 362329: "æ±Ÿè¥¿çœä¸Šé¥¶åœ°åŒºä½™å¹²åŽ¿", 362330: "æ±Ÿè¥¿çœä¸Šé¥¶åœ°åŒºæ³¢é˜³åŽ¿", 362331: "æ±Ÿè¥¿çœä¸Šé¥¶åœ°åŒºä¸‡å¹´åŽ¿", 362334: "æ±Ÿè¥¿çœä¸Šé¥¶åœ°åŒºå©ºæºåŽ¿", 362400: "æ±Ÿè¥¿çœå‰å®‰åœ°åŒº", 362401: "æ±Ÿè¥¿çœå‰å®‰åœ°åŒºå‰å®‰å¸‚", 362402: "æ±Ÿè¥¿çœå‰å®‰åœ°åŒºäº•å†ˆå±±å¸‚", 362421: "æ±Ÿè¥¿çœå‰å®‰åœ°åŒºå‰å®‰åŽ¿", 362422: "æ±Ÿè¥¿çœå‰å®‰åœ°åŒºå‰æ°´åŽ¿", 362423: "æ±Ÿè¥¿çœå‰å®‰åœ°åŒºå³¡æ±ŸåŽ¿", 362424: "æ±Ÿè¥¿çœå‰å®‰åœ°åŒºæ–°å¹²åŽ¿", 362425: "æ±Ÿè¥¿çœå‰å®‰åœ°åŒºæ°¸ä¸°åŽ¿", 362426: "æ±Ÿè¥¿çœå‰å®‰åœ°åŒºæ³°å’ŒåŽ¿", 362427: "æ±Ÿè¥¿çœå‰å®‰åœ°åŒºé‚å·åŽ¿", 362428: "æ±Ÿè¥¿çœå‰å®‰åœ°åŒºä¸‡å®‰åŽ¿", 362429: "æ±Ÿè¥¿çœå‰å®‰åœ°åŒºå®‰ç¦åŽ¿", 362430: "æ±Ÿè¥¿çœå‰å®‰åœ°åŒºæ°¸æ–°åŽ¿", 362432: "æ±Ÿè¥¿çœå‰å®‰åœ°åŒºå®å†ˆåŽ¿", 362500: "æ±Ÿè¥¿çœæŠšå·žåœ°åŒº", 362502: "æ±Ÿè¥¿çœæŠšå·žåœ°åŒºä¸´å·å¸‚", 362522: "æ±Ÿè¥¿çœæŠšå·žåœ°åŒºå—åŸŽåŽ¿", 362523: "æ±Ÿè¥¿çœæŠšå·žåœ°åŒºé»Žå·åŽ¿", 362524: "æ±Ÿè¥¿çœæŠšå·žåœ°åŒºå—ä¸°åŽ¿", 362525: "æ±Ÿè¥¿çœæŠšå·žåœ°åŒºå´‡ä»åŽ¿", 362526: "æ±Ÿè¥¿çœæŠšå·žåœ°åŒºä¹å®‰åŽ¿", 362527: "æ±Ÿè¥¿çœæŠšå·žåœ°åŒºå®œé»„åŽ¿", 362528: "æ±Ÿè¥¿çœæŠšå·žåœ°åŒºé‡‘æºªåŽ¿", 362529: "æ±Ÿè¥¿çœæŠšå·žåœ°åŒºèµ„æºªåŽ¿", 362531: "æ±Ÿè¥¿çœæŠšå·žåœ°åŒºä¸œä¹¡åŽ¿", 362532: "æ±Ÿè¥¿çœæŠšå·žåœ°åŒºå¹¿æ˜ŒåŽ¿", 37e4: "å±±ä¸œçœ", 370100: "å±±ä¸œçœæµŽå—å¸‚", 370101: "å±±ä¸œçœæµŽå—å¸‚å¸‚è¾–åŒº", 370102: "å±±ä¸œçœæµŽå—å¸‚åŽ†ä¸‹åŒº", 370103: "å±±ä¸œçœæµŽå—å¸‚å¸‚ä¸­åŒº", 370104: "å±±ä¸œçœæµŽå—å¸‚æ§è«åŒº", 370105: "å±±ä¸œçœæµŽå—å¸‚å¤©æ¡¥åŒº", 370112: "å±±ä¸œçœæµŽå—å¸‚åŽ†åŸŽåŒº", 370123: "å±±ä¸œçœæµŽå—å¸‚é•¿æ¸…åŽ¿", 370124: "å±±ä¸œçœæµŽå—å¸‚å¹³é˜´åŽ¿", 370125: "å±±ä¸œçœæµŽå—å¸‚æµŽé˜³åŽ¿", 370126: "å±±ä¸œçœæµŽå—å¸‚å•†æ²³åŽ¿", 370181: "å±±ä¸œçœæµŽå—å¸‚ç« ä¸˜å¸‚", 370200: "å±±ä¸œçœé’å²›å¸‚", 370201: "å±±ä¸œçœé’å²›å¸‚å¸‚è¾–åŒº", 370202: "å±±ä¸œçœé’å²›å¸‚å¸‚å—åŒº", 370203: "å±±ä¸œçœé’å²›å¸‚å¸‚åŒ—åŒº", 370205: "å±±ä¸œçœé’å²›å¸‚å››æ–¹åŒº", 370211: "å±±ä¸œçœé’å²›å¸‚é»„å²›åŒº", 370212: "å±±ä¸œçœé’å²›å¸‚å´‚å±±åŒº", 370213: "å±±ä¸œçœé’å²›å¸‚æŽæ²§åŒº", 370214: "å±±ä¸œçœé’å²›å¸‚åŸŽé˜³åŒº", 370281: "å±±ä¸œçœé’å²›å¸‚èƒ¶å·žå¸‚", 370282: "å±±ä¸œçœé’å²›å¸‚å³å¢¨å¸‚", 370283: "å±±ä¸œçœé’å²›å¸‚å¹³åº¦å¸‚", 370284: "å±±ä¸œçœé’å²›å¸‚èƒ¶å—å¸‚", 370285: "å±±ä¸œçœé’å²›å¸‚èŽ±è¥¿å¸‚", 370300: "å±±ä¸œçœæ·„åšå¸‚", 370301: "å±±ä¸œçœæ·„åšå¸‚å¸‚è¾–åŒº", 370302: "å±±ä¸œçœæ·„åšå¸‚æ·„å·åŒº", 370303: "å±±ä¸œçœæ·„åšå¸‚å¼ åº—åŒº", 370304: "å±±ä¸œçœæ·„åšå¸‚åšå±±åŒº", 370305: "å±±ä¸œçœæ·„åšå¸‚ä¸´æ·„åŒº", 370306: "å±±ä¸œçœæ·„åšå¸‚å‘¨æ‘åŒº", 370321: "å±±ä¸œçœæ·„åšå¸‚æ¡“å°åŽ¿", 370322: "å±±ä¸œçœæ·„åšå¸‚é«˜é’åŽ¿", 370323: "å±±ä¸œçœæ·„åšå¸‚æ²‚æºåŽ¿", 370400: "å±±ä¸œçœæž£åº„å¸‚", 370401: "å±±ä¸œçœæž£åº„å¸‚å¸‚è¾–åŒº", 370402: "å±±ä¸œçœæž£åº„å¸‚å¸‚ä¸­åŒº", 370403: "å±±ä¸œçœæž£åº„å¸‚è–›åŸŽåŒº", 370404: "å±±ä¸œçœæž£åº„å¸‚å³„åŸŽåŒº", 370405: "å±±ä¸œçœæž£åº„å¸‚å°å„¿åº„åŒº", 370406: "å±±ä¸œçœæž£åº„å¸‚å±±äº­åŒº", 370481: "å±±ä¸œçœæž£åº„å¸‚æ»•å·žå¸‚", 370500: "å±±ä¸œçœä¸œè¥å¸‚", 370501: "å±±ä¸œçœä¸œè¥å¸‚å¸‚è¾–åŒº", 370502: "å±±ä¸œçœä¸œè¥å¸‚ä¸œè¥åŒº", 370503: "å±±ä¸œçœä¸œè¥å¸‚æ²³å£åŒº", 370521: "å±±ä¸œçœä¸œè¥å¸‚åž¦åˆ©åŽ¿", 370522: "å±±ä¸œçœä¸œè¥å¸‚åˆ©æ´¥åŽ¿", 370523: "å±±ä¸œçœä¸œè¥å¸‚å¹¿é¥¶åŽ¿", 370600: "å±±ä¸œçœçƒŸå°å¸‚", 370601: "å±±ä¸œçœçƒŸå°å¸‚å¸‚è¾–åŒº", 370602: "å±±ä¸œçœçƒŸå°å¸‚èŠç½˜åŒº", 370611: "å±±ä¸œçœçƒŸå°å¸‚ç¦å±±åŒº", 370612: "å±±ä¸œçœçƒŸå°å¸‚ç‰Ÿå¹³åŒº", 370613: "å±±ä¸œçœçƒŸå°å¸‚èŽ±å±±åŒº", 370634: "å±±ä¸œçœçƒŸå°å¸‚é•¿å²›åŽ¿", 370681: "å±±ä¸œçœçƒŸå°å¸‚é¾™å£å¸‚", 370682: "å±±ä¸œçœçƒŸå°å¸‚èŽ±é˜³å¸‚", 370683: "å±±ä¸œçœçƒŸå°å¸‚èŽ±å·žå¸‚", 370684: "å±±ä¸œçœçƒŸå°å¸‚è“¬èŽ±å¸‚", 370685: "å±±ä¸œçœçƒŸå°å¸‚æ‹›è¿œå¸‚", 370686: "å±±ä¸œçœçƒŸå°å¸‚æ –éœžå¸‚", 370687: "å±±ä¸œçœçƒŸå°å¸‚æµ·é˜³å¸‚", 370700: "å±±ä¸œçœæ½åŠå¸‚", 370701: "å±±ä¸œçœæ½åŠå¸‚å¸‚è¾–åŒº", 370702: "å±±ä¸œçœæ½åŠå¸‚æ½åŸŽåŒº", 370703: "å±±ä¸œçœæ½åŠå¸‚å¯’äº­åŒº", 370704: "å±±ä¸œçœæ½åŠå¸‚åŠå­åŒº", 370705: "å±±ä¸œçœæ½åŠå¸‚å¥Žæ–‡åŒº", 370724: "å±±ä¸œçœæ½åŠå¸‚ä¸´æœåŽ¿", 370725: "å±±ä¸œçœæ½åŠå¸‚æ˜Œä¹åŽ¿", 370781: "å±±ä¸œçœæ½åŠå¸‚é’å·žå¸‚", 370782: "å±±ä¸œçœæ½åŠå¸‚è¯¸åŸŽå¸‚", 370783: "å±±ä¸œçœæ½åŠå¸‚å¯¿å…‰å¸‚", 370784: "å±±ä¸œçœæ½åŠå¸‚å®‰ä¸˜å¸‚", 370785: "å±±ä¸œçœæ½åŠå¸‚é«˜å¯†å¸‚", 370786: "å±±ä¸œçœæ½åŠå¸‚æ˜Œé‚‘å¸‚", 370800: "å±±ä¸œçœæµŽå®å¸‚", 370801: "å±±ä¸œçœæµŽå®å¸‚å¸‚è¾–åŒº", 370802: "å±±ä¸œçœæµŽå®å¸‚å¸‚ä¸­åŒº", 370811: "å±±ä¸œçœæµŽå®å¸‚ä»»åŸŽåŒº", 370826: "å±±ä¸œçœæµŽå®å¸‚å¾®å±±åŽ¿", 370827: "å±±ä¸œçœæµŽå®å¸‚é±¼å°åŽ¿", 370828: "å±±ä¸œçœæµŽå®å¸‚é‡‘ä¹¡åŽ¿", 370829: "å±±ä¸œçœæµŽå®å¸‚å˜‰ç¥¥åŽ¿", 370830: "å±±ä¸œçœæµŽå®å¸‚æ±¶ä¸ŠåŽ¿", 370831: "å±±ä¸œçœæµŽå®å¸‚æ³—æ°´åŽ¿", 370832: "å±±ä¸œçœæµŽå®å¸‚æ¢å±±åŽ¿", 370881: "å±±ä¸œçœæµŽå®å¸‚æ›²é˜œå¸‚", 370882: "å±±ä¸œçœæµŽå®å¸‚å…–å·žå¸‚", 370883: "å±±ä¸œçœæµŽå®å¸‚é‚¹åŸŽå¸‚", 370900: "å±±ä¸œçœæ³°å®‰å¸‚", 370901: "å±±ä¸œçœæ³°å®‰å¸‚å¸‚è¾–åŒº", 370902: "å±±ä¸œçœæ³°å®‰å¸‚æ³°å±±åŒº", 370911: "å±±ä¸œçœæ³°å®‰å¸‚éƒŠåŒº", 370921: "å±±ä¸œçœæ³°å®‰å¸‚å®é˜³åŽ¿", 370923: "å±±ä¸œçœæ³°å®‰å¸‚ä¸œå¹³åŽ¿", 370982: "å±±ä¸œçœæ³°å®‰å¸‚æ–°æ³°å¸‚", 370983: "å±±ä¸œçœæ³°å®‰å¸‚è‚¥åŸŽå¸‚", 371e3: "å±±ä¸œçœå¨æµ·å¸‚", 371001: "å±±ä¸œçœå¨æµ·å¸‚å¸‚è¾–åŒº", 371002: "å±±ä¸œçœå¨æµ·å¸‚çŽ¯ç¿ åŒº", 371081: "å±±ä¸œçœå¨æµ·å¸‚æ–‡ç™»å¸‚", 371082: "å±±ä¸œçœå¨æµ·å¸‚è£æˆå¸‚", 371083: "å±±ä¸œçœå¨æµ·å¸‚ä¹³å±±å¸‚", 371100: "å±±ä¸œçœæ—¥ç…§å¸‚", 371101: "å±±ä¸œçœæ—¥ç…§å¸‚å¸‚è¾–åŒº", 371102: "å±±ä¸œçœæ—¥ç…§å¸‚ä¸œæ¸¯åŒº", 371121: "å±±ä¸œçœæ—¥ç…§å¸‚äº”èŽ²åŽ¿", 371122: "å±±ä¸œçœæ—¥ç…§å¸‚èŽ’åŽ¿", 371200: "å±±ä¸œçœèŽ±èŠœå¸‚", 371201: "å±±ä¸œçœèŽ±èŠœå¸‚å¸‚è¾–åŒº", 371202: "å±±ä¸œçœèŽ±èŠœå¸‚èŽ±åŸŽåŒº", 371203: "å±±ä¸œçœèŽ±èŠœå¸‚é’¢åŸŽåŒº", 371300: "å±±ä¸œçœä¸´æ²‚å¸‚", 371301: "å±±ä¸œçœä¸´æ²‚å¸‚å¸‚è¾–åŒº", 371302: "å±±ä¸œçœä¸´æ²‚å¸‚å…°å±±åŒº", 371311: "å±±ä¸œçœä¸´æ²‚å¸‚ç½—åº„åŒº", 371312: "å±±ä¸œçœä¸´æ²‚å¸‚æ²³ä¸œåŒº", 371321: "å±±ä¸œçœä¸´æ²‚å¸‚æ²‚å—åŽ¿", 371322: "å±±ä¸œçœä¸´æ²‚å¸‚éƒ¯åŸŽåŽ¿", 371323: "å±±ä¸œçœä¸´æ²‚å¸‚æ²‚æ°´åŽ¿", 371324: "å±±ä¸œçœä¸´æ²‚å¸‚è‹å±±åŽ¿", 371325: "å±±ä¸œçœä¸´æ²‚å¸‚è´¹åŽ¿", 371326: "å±±ä¸œçœä¸´æ²‚å¸‚å¹³é‚‘åŽ¿", 371327: "å±±ä¸œçœä¸´æ²‚å¸‚èŽ’å—åŽ¿", 371328: "å±±ä¸œçœä¸´æ²‚å¸‚è’™é˜´åŽ¿", 371329: "å±±ä¸œçœä¸´æ²‚å¸‚ä¸´æ²­åŽ¿", 371400: "å±±ä¸œçœå¾·å·žå¸‚", 371401: "å±±ä¸œçœå¾·å·žå¸‚å¸‚è¾–åŒº", 371402: "å±±ä¸œçœå¾·å·žå¸‚å¾·åŸŽåŒº", 371421: "å±±ä¸œçœå¾·å·žå¸‚é™µåŽ¿", 371422: "å±±ä¸œçœå¾·å·žå¸‚å®æ´¥åŽ¿", 371423: "å±±ä¸œçœå¾·å·žå¸‚åº†äº‘åŽ¿", 371424: "å±±ä¸œçœå¾·å·žå¸‚ä¸´é‚‘åŽ¿", 371425: "å±±ä¸œçœå¾·å·žå¸‚é½æ²³åŽ¿", 371426: "å±±ä¸œçœå¾·å·žå¸‚å¹³åŽŸåŽ¿", 371427: "å±±ä¸œçœå¾·å·žå¸‚å¤æ´¥åŽ¿", 371428: "å±±ä¸œçœå¾·å·žå¸‚æ­¦åŸŽåŽ¿", 371481: "å±±ä¸œçœå¾·å·žå¸‚ä¹é™µå¸‚", 371482: "å±±ä¸œçœå¾·å·žå¸‚ç¦¹åŸŽå¸‚", 371500: "å±±ä¸œçœèŠåŸŽå¸‚", 371501: "å±±ä¸œçœèŠåŸŽå¸‚å¸‚è¾–åŒº", 371502: "å±±ä¸œçœèŠåŸŽå¸‚ä¸œæ˜ŒåºœåŒº", 371521: "å±±ä¸œçœèŠåŸŽå¸‚é˜³è°·åŽ¿", 371522: "å±±ä¸œçœèŠåŸŽå¸‚èŽ˜åŽ¿", 371523: "å±±ä¸œçœèŠåŸŽå¸‚èŒŒå¹³åŽ¿", 371524: "å±±ä¸œçœèŠåŸŽå¸‚ä¸œé˜¿åŽ¿", 371525: "å±±ä¸œçœèŠåŸŽå¸‚å† åŽ¿", 371526: "å±±ä¸œçœèŠåŸŽå¸‚é«˜å”åŽ¿", 371581: "å±±ä¸œçœèŠåŸŽå¸‚ä¸´æ¸…å¸‚", 372300: "å±±ä¸œçœæ»¨å·žåœ°åŒº", 372301: "å±±ä¸œçœæ»¨å·žåœ°åŒºæ»¨å·žå¸‚", 372321: "å±±ä¸œçœæ»¨å·žåœ°åŒºæƒ æ°‘åŽ¿", 372323: "å±±ä¸œçœæ»¨å·žåœ°åŒºé˜³ä¿¡åŽ¿", 372324: "å±±ä¸œçœæ»¨å·žåœ°åŒºæ— æ££åŽ¿", 372325: "å±±ä¸œçœæ»¨å·žåœ°åŒºæ²¾åŒ–åŽ¿", 372328: "å±±ä¸œçœæ»¨å·žåœ°åŒºåšå…´åŽ¿", 372330: "å±±ä¸œçœæ»¨å·žåœ°åŒºé‚¹å¹³åŽ¿", 372900: "å±±ä¸œçœèæ³½åœ°åŒº", 372901: "å±±ä¸œçœèæ³½åœ°åŒºèæ³½å¸‚", 372922: "å±±ä¸œçœèæ³½åœ°åŒºæ›¹åŽ¿", 372923: "å±±ä¸œçœèæ³½åœ°åŒºå®šé™¶åŽ¿", 372924: "å±±ä¸œçœèæ³½åœ°åŒºæˆæ­¦åŽ¿", 372925: "å±±ä¸œçœèæ³½åœ°åŒºå•åŽ¿", 372926: "å±±ä¸œçœèæ³½åœ°åŒºå·¨é‡ŽåŽ¿", 372928: "å±±ä¸œçœèæ³½åœ°åŒºéƒ“åŸŽåŽ¿", 372929: "å±±ä¸œçœèæ³½åœ°åŒºé„„åŸŽåŽ¿", 372930: "å±±ä¸œçœèæ³½åœ°åŒºä¸œæ˜ŽåŽ¿", 41e4: "æ²³å—çœ", 410100: "æ²³å—çœéƒ‘å·žå¸‚", 410101: "æ²³å—çœéƒ‘å·žå¸‚å¸‚è¾–åŒº", 410102: "æ²³å—çœéƒ‘å·žå¸‚ä¸­åŽŸåŒº", 410103: "æ²³å—çœéƒ‘å·žå¸‚äºŒä¸ƒåŒº", 410104: "æ²³å—çœéƒ‘å·žå¸‚ç®¡åŸŽå›žæ—åŒº", 410105: "æ²³å—çœéƒ‘å·žå¸‚é‡‘æ°´åŒº", 410106: "æ²³å—çœéƒ‘å·žå¸‚ä¸Šè¡—åŒº", 410108: "æ²³å—çœéƒ‘å·žå¸‚é‚™å±±åŒº", 410122: "æ²³å—çœéƒ‘å·žå¸‚ä¸­ç‰ŸåŽ¿", 410181: "æ²³å—çœéƒ‘å·žå¸‚å·©ä¹‰å¸‚", 410182: "æ²³å—çœéƒ‘å·žå¸‚è¥é˜³å¸‚", 410183: "æ²³å—çœéƒ‘å·žå¸‚æ–°å¯†å¸‚", 410184: "æ²³å—çœéƒ‘å·žå¸‚æ–°éƒ‘å¸‚", 410185: "æ²³å—çœéƒ‘å·žå¸‚ç™»å°å¸‚", 410200: "æ²³å—çœå¼€å°å¸‚", 410201: "æ²³å—çœå¼€å°å¸‚å¸‚è¾–åŒº", 410202: "æ²³å—çœå¼€å°å¸‚é¾™äº­åŒº", 410203: "æ²³å—çœå¼€å°å¸‚é¡ºæ²³å›žæ—åŒº", 410204: "æ²³å—çœå¼€å°å¸‚é¼“æ¥¼åŒº", 410205: "æ²³å—çœå¼€å°å¸‚å—å…³åŒº", 410211: "æ²³å—çœå¼€å°å¸‚éƒŠåŒº", 410221: "æ²³å—çœå¼€å°å¸‚æžåŽ¿", 410222: "æ²³å—çœå¼€å°å¸‚é€šè®¸åŽ¿", 410223: "æ²³å—çœå¼€å°å¸‚å°‰æ°åŽ¿", 410224: "æ²³å—çœå¼€å°å¸‚å¼€å°åŽ¿", 410225: "æ²³å—çœå¼€å°å¸‚å…°è€ƒåŽ¿", 410300: "æ²³å—çœæ´›é˜³å¸‚", 410301: "æ²³å—çœæ´›é˜³å¸‚å¸‚è¾–åŒº", 410302: "æ²³å—çœæ´›é˜³å¸‚è€åŸŽåŒº", 410303: "æ²³å—çœæ´›é˜³å¸‚è¥¿å·¥åŒº", 410304: "æ²³å—çœæ´›é˜³å¸‚å»›æ²³å›žæ—åŒº", 410305: "æ²³å—çœæ´›é˜³å¸‚æ¶§è¥¿åŒº", 410306: "æ²³å—çœæ´›é˜³å¸‚å‰åˆ©åŒº", 410311: "æ²³å—çœæ´›é˜³å¸‚éƒŠåŒº", 410322: "æ²³å—çœæ´›é˜³å¸‚å­Ÿæ´¥åŽ¿", 410323: "æ²³å—çœæ´›é˜³å¸‚æ–°å®‰åŽ¿", 410324: "æ²³å—çœæ´›é˜³å¸‚æ ¾å·åŽ¿", 410325: "æ²³å—çœæ´›é˜³å¸‚åµ©åŽ¿", 410326: "æ²³å—çœæ´›é˜³å¸‚æ±é˜³åŽ¿", 410327: "æ²³å—çœæ´›é˜³å¸‚å®œé˜³åŽ¿", 410328: "æ²³å—çœæ´›é˜³å¸‚æ´›å®åŽ¿", 410329: "æ²³å—çœæ´›é˜³å¸‚ä¼Šå·åŽ¿", 410381: "æ²³å—çœæ´›é˜³å¸‚åƒå¸ˆå¸‚", 410400: "æ²³å—çœå¹³é¡¶å±±å¸‚", 410401: "æ²³å—çœå¹³é¡¶å±±å¸‚å¸‚è¾–åŒº", 410402: "æ²³å—çœå¹³é¡¶å±±å¸‚æ–°åŽåŒº", 410403: "æ²³å—çœå¹³é¡¶å±±å¸‚å«ä¸œåŒº", 410404: "æ²³å—çœå¹³é¡¶å±±å¸‚çŸ³é¾™åŒº", 410411: "æ²³å—çœå¹³é¡¶å±±å¸‚æ¹›æ²³åŒº", 410421: "æ²³å—çœå¹³é¡¶å±±å¸‚å®ä¸°åŽ¿", 410422: "æ²³å—çœå¹³é¡¶å±±å¸‚å¶åŽ¿", 410423: "æ²³å—çœå¹³é¡¶å±±å¸‚é²å±±åŽ¿", 410425: "æ²³å—çœå¹³é¡¶å±±å¸‚éƒåŽ¿", 410481: "æ²³å—çœå¹³é¡¶å±±å¸‚èˆžé’¢å¸‚", 410482: "æ²³å—çœå¹³é¡¶å±±å¸‚æ±å·žå¸‚", 410500: "æ²³å—çœå®‰é˜³å¸‚", 410501: "æ²³å—çœå®‰é˜³å¸‚å¸‚è¾–åŒº", 410502: "æ²³å—çœå®‰é˜³å¸‚æ–‡å³°åŒº", 410503: "æ²³å—çœå®‰é˜³å¸‚åŒ—å…³åŒº", 410504: "æ²³å—çœå®‰é˜³å¸‚é“è¥¿åŒº", 410511: "æ²³å—çœå®‰é˜³å¸‚éƒŠåŒº", 410522: "æ²³å—çœå®‰é˜³å¸‚å®‰é˜³åŽ¿", 410523: "æ²³å—çœå®‰é˜³å¸‚æ±¤é˜´åŽ¿", 410526: "æ²³å—çœå®‰é˜³å¸‚æ»‘åŽ¿", 410527: "æ²³å—çœå®‰é˜³å¸‚å†…é»„åŽ¿", 410581: "æ²³å—çœå®‰é˜³å¸‚æž—å·žå¸‚", 410600: "æ²³å—çœé¹¤å£å¸‚", 410601: "æ²³å—çœé¹¤å£å¸‚å¸‚è¾–åŒº", 410602: "æ²³å—çœé¹¤å£å¸‚é¹¤å±±åŒº", 410603: "æ²³å—çœé¹¤å£å¸‚å±±åŸŽåŒº", 410611: "æ²³å—çœé¹¤å£å¸‚éƒŠåŒº", 410621: "æ²³å—çœé¹¤å£å¸‚æµšåŽ¿", 410622: "æ²³å—çœé¹¤å£å¸‚æ·‡åŽ¿", 410700: "æ²³å—çœæ–°ä¹¡å¸‚", 410701: "æ²³å—çœæ–°ä¹¡å¸‚å¸‚è¾–åŒº", 410702: "æ²³å—çœæ–°ä¹¡å¸‚çº¢æ——åŒº", 410703: "æ²³å—çœæ–°ä¹¡å¸‚æ–°åŽåŒº", 410704: "æ²³å—çœæ–°ä¹¡å¸‚åŒ—ç«™åŒº", 410711: "æ²³å—çœæ–°ä¹¡å¸‚éƒŠåŒº", 410721: "æ²³å—çœæ–°ä¹¡å¸‚æ–°ä¹¡åŽ¿", 410724: "æ²³å—çœæ–°ä¹¡å¸‚èŽ·å˜‰åŽ¿", 410725: "æ²³å—çœæ–°ä¹¡å¸‚åŽŸé˜³åŽ¿", 410726: "æ²³å—çœæ–°ä¹¡å¸‚å»¶æ´¥åŽ¿", 410727: "æ²³å—çœæ–°ä¹¡å¸‚å°ä¸˜åŽ¿", 410728: "æ²³å—çœæ–°ä¹¡å¸‚é•¿åž£åŽ¿", 410781: "æ²³å—çœæ–°ä¹¡å¸‚å«è¾‰å¸‚", 410782: "æ²³å—çœæ–°ä¹¡å¸‚è¾‰åŽ¿å¸‚", 410800: "æ²³å—çœç„¦ä½œå¸‚", 410801: "æ²³å—çœç„¦ä½œå¸‚å¸‚è¾–åŒº", 410802: "æ²³å—çœç„¦ä½œå¸‚è§£æ”¾åŒº", 410803: "æ²³å—çœç„¦ä½œå¸‚ä¸­ç«™åŒº", 410804: "æ²³å—çœç„¦ä½œå¸‚é©¬æ‘åŒº", 410811: "æ²³å—çœç„¦ä½œå¸‚å±±é˜³åŒº", 410821: "æ²³å—çœç„¦ä½œå¸‚ä¿®æ­¦åŽ¿", 410822: "æ²³å—çœç„¦ä½œå¸‚åšçˆ±åŽ¿", 410823: "æ²³å—çœç„¦ä½œå¸‚æ­¦é™ŸåŽ¿", 410825: "æ²³å—çœç„¦ä½œå¸‚æ¸©åŽ¿", 410881: "æ²³å—çœç„¦ä½œå¸‚æµŽæºå¸‚", 410882: "æ²³å—çœç„¦ä½œå¸‚æ²é˜³å¸‚", 410883: "æ²³å—çœç„¦ä½œå¸‚å­Ÿå·žå¸‚", 410900: "æ²³å—çœæ¿®é˜³å¸‚", 410901: "æ²³å—çœæ¿®é˜³å¸‚å¸‚è¾–åŒº", 410902: "æ²³å—çœæ¿®é˜³å¸‚å¸‚åŒº", 410922: "æ²³å—çœæ¿®é˜³å¸‚æ¸…ä¸°åŽ¿", 410923: "æ²³å—çœæ¿®é˜³å¸‚å—ä¹åŽ¿", 410926: "æ²³å—çœæ¿®é˜³å¸‚èŒƒåŽ¿", 410927: "æ²³å—çœæ¿®é˜³å¸‚å°å‰åŽ¿", 410928: "æ²³å—çœæ¿®é˜³å¸‚æ¿®é˜³åŽ¿", 411e3: "æ²³å—çœè®¸æ˜Œå¸‚", 411001: "æ²³å—çœè®¸æ˜Œå¸‚å¸‚è¾–åŒº", 411002: "æ²³å—çœè®¸æ˜Œå¸‚é­éƒ½åŒº", 411023: "æ²³å—çœè®¸æ˜Œå¸‚è®¸æ˜ŒåŽ¿", 411024: "æ²³å—çœè®¸æ˜Œå¸‚é„¢é™µåŽ¿", 411025: "æ²³å—çœè®¸æ˜Œå¸‚è¥„åŸŽåŽ¿", 411081: "æ²³å—çœè®¸æ˜Œå¸‚ç¦¹å·žå¸‚", 411082: "æ²³å—çœè®¸æ˜Œå¸‚é•¿è‘›å¸‚", 411100: "æ²³å—çœæ¼¯æ²³å¸‚", 411101: "æ²³å—çœæ¼¯æ²³å¸‚å¸‚è¾–åŒº", 411102: "æ²³å—çœæ¼¯æ²³å¸‚æºæ±‡åŒº", 411121: "æ²³å—çœæ¼¯æ²³å¸‚èˆžé˜³åŽ¿", 411122: "æ²³å—çœæ¼¯æ²³å¸‚ä¸´é¢åŽ¿", 411123: "æ²³å—çœæ¼¯æ²³å¸‚éƒ¾åŸŽåŽ¿", 411200: "æ²³å—çœä¸‰é—¨å³¡å¸‚", 411201: "æ²³å—çœä¸‰é—¨å³¡å¸‚å¸‚è¾–åŒº", 411202: "æ²³å—çœä¸‰é—¨å³¡å¸‚æ¹–æ»¨åŒº", 411221: "æ²³å—çœä¸‰é—¨å³¡å¸‚æ¸‘æ± åŽ¿", 411222: "æ²³å—çœä¸‰é—¨å³¡å¸‚é™•åŽ¿", 411224: "æ²³å—çœä¸‰é—¨å³¡å¸‚å¢æ°åŽ¿", 411281: "æ²³å—çœä¸‰é—¨å³¡å¸‚ä¹‰é©¬å¸‚", 411282: "æ²³å—çœä¸‰é—¨å³¡å¸‚çµå®å¸‚", 411300: "æ²³å—çœå—é˜³å¸‚", 411301: "æ²³å—çœå—é˜³å¸‚å¸‚è¾–åŒº", 411302: "æ²³å—çœå—é˜³å¸‚å®›åŸŽåŒº", 411303: "æ²³å—çœå—é˜³å¸‚å§é¾™åŒº", 411321: "æ²³å—çœå—é˜³å¸‚å—å¬åŽ¿", 411322: "æ²³å—çœå—é˜³å¸‚æ–¹åŸŽåŽ¿", 411323: "æ²³å—çœå—é˜³å¸‚è¥¿å³¡åŽ¿", 411324: "æ²³å—çœå—é˜³å¸‚é•‡å¹³åŽ¿", 411325: "æ²³å—çœå—é˜³å¸‚å†…ä¹¡åŽ¿", 411326: "æ²³å—çœå—é˜³å¸‚æ·…å·åŽ¿", 411327: "æ²³å—çœå—é˜³å¸‚ç¤¾æ——åŽ¿", 411328: "æ²³å—çœå—é˜³å¸‚å”æ²³åŽ¿", 411329: "æ²³å—çœå—é˜³å¸‚æ–°é‡ŽåŽ¿", 411330: "æ²³å—çœå—é˜³å¸‚æ¡æŸåŽ¿", 411381: "æ²³å—çœå—é˜³å¸‚é‚“å·žå¸‚", 411400: "æ²³å—çœå•†ä¸˜å¸‚", 411401: "æ²³å—çœå•†ä¸˜å¸‚å¸‚è¾–åŒº", 411402: "æ²³å—çœå•†ä¸˜å¸‚æ¢å›­åŒº", 411403: "æ²³å—çœå•†ä¸˜å¸‚ç¢é˜³åŒº", 411421: "æ²³å—çœå•†ä¸˜å¸‚æ°‘æƒåŽ¿", 411422: "æ²³å—çœå•†ä¸˜å¸‚ç¢åŽ¿", 411423: "æ²³å—çœå•†ä¸˜å¸‚å®é™µåŽ¿", 411424: "æ²³å—çœå•†ä¸˜å¸‚æŸ˜åŸŽåŽ¿", 411425: "æ²³å—çœå•†ä¸˜å¸‚è™žåŸŽåŽ¿", 411426: "æ²³å—çœå•†ä¸˜å¸‚å¤é‚‘åŽ¿", 411481: "æ²³å—çœå•†ä¸˜å¸‚æ°¸åŸŽå¸‚", 411500: "æ²³å—çœä¿¡é˜³å¸‚", 411501: "æ²³å—çœä¿¡é˜³å¸‚å¸‚è¾–åŒº", 411502: "æ²³å—çœä¿¡é˜³å¸‚å¸ˆæ²³åŒº", 411503: "æ²³å—çœä¿¡é˜³å¸‚å¹³æ¡¥åŒº", 411521: "æ²³å—çœä¿¡é˜³å¸‚ç½—å±±åŽ¿", 411522: "æ²³å—çœä¿¡é˜³å¸‚å…‰å±±åŽ¿", 411523: "æ²³å—çœä¿¡é˜³å¸‚æ–°åŽ¿", 411524: "æ²³å—çœä¿¡é˜³å¸‚å•†åŸŽåŽ¿", 411525: "æ²³å—çœä¿¡é˜³å¸‚å›ºå§‹åŽ¿", 411526: "æ²³å—çœä¿¡é˜³å¸‚æ½¢å·åŽ¿", 411527: "æ²³å—çœä¿¡é˜³å¸‚æ·®æ»¨åŽ¿", 411528: "æ²³å—çœä¿¡é˜³å¸‚æ¯åŽ¿", 412700: "æ²³å—çœå‘¨å£åœ°åŒº", 412701: "æ²³å—çœå‘¨å£åœ°åŒºå‘¨å£å¸‚", 412702: "æ²³å—çœå‘¨å£åœ°åŒºé¡¹åŸŽå¸‚", 412721: "æ²³å—çœå‘¨å£åœ°åŒºæ‰¶æ²ŸåŽ¿", 412722: "æ²³å—çœå‘¨å£åœ°åŒºè¥¿åŽåŽ¿", 412723: "æ²³å—çœå‘¨å£åœ°åŒºå•†æ°´åŽ¿", 412724: "æ²³å—çœå‘¨å£åœ°åŒºå¤ªåº·åŽ¿", 412725: "æ²³å—çœå‘¨å£åœ°åŒºé¹¿é‚‘åŽ¿", 412726: "æ²³å—çœå‘¨å£åœ°åŒºéƒ¸åŸŽåŽ¿", 412727: "æ²³å—çœå‘¨å£åœ°åŒºæ·®é˜³åŽ¿", 412728: "æ²³å—çœå‘¨å£åœ°åŒºæ²ˆä¸˜åŽ¿", 412800: "æ²³å—çœé©»é©¬åº—åœ°åŒº", 412801: "æ²³å—çœé©»é©¬åº—åœ°åŒºé©»é©¬åº—å¸‚", 412821: "æ²³å—çœé©»é©¬åº—åœ°åŒºç¡®å±±åŽ¿", 412822: "æ²³å—çœé©»é©¬åº—åœ°åŒºæ³Œé˜³åŽ¿", 412823: "æ²³å—çœé©»é©¬åº—åœ°åŒºé‚å¹³åŽ¿", 412824: "æ²³å—çœé©»é©¬åº—åœ°åŒºè¥¿å¹³åŽ¿", 412825: "æ²³å—çœé©»é©¬åº—åœ°åŒºä¸Šè”¡åŽ¿", 412826: "æ²³å—çœé©»é©¬åº—åœ°åŒºæ±å—åŽ¿", 412827: "æ²³å—çœé©»é©¬åº—åœ°åŒºå¹³èˆ†åŽ¿", 412828: "æ²³å—çœé©»é©¬åº—åœ°åŒºæ–°è”¡åŽ¿", 412829: "æ²³å—çœé©»é©¬åº—åœ°åŒºæ­£é˜³åŽ¿", 42e4: "æ¹–åŒ—çœ", 420100: "æ¹–åŒ—çœæ­¦æ±‰å¸‚", 420101: "æ¹–åŒ—çœæ­¦æ±‰å¸‚å¸‚è¾–åŒº", 420102: "æ¹–åŒ—çœæ­¦æ±‰å¸‚æ±Ÿå²¸åŒº", 420103: "æ¹–åŒ—çœæ­¦æ±‰å¸‚æ±Ÿæ±‰åŒº", 420104: "æ¹–åŒ—çœæ­¦æ±‰å¸‚ä¹”å£åŒº", 420105: "æ¹–åŒ—çœæ­¦æ±‰å¸‚æ±‰é˜³åŒº", 420106: "æ¹–åŒ—çœæ­¦æ±‰å¸‚æ­¦æ˜ŒåŒº", 420107: "æ¹–åŒ—çœæ­¦æ±‰å¸‚é’å±±åŒº", 420111: "æ¹–åŒ—çœæ­¦æ±‰å¸‚æ´ªå±±åŒº", 420112: "æ¹–åŒ—çœæ­¦æ±‰å¸‚ä¸œè¥¿æ¹–åŒº", 420113: "æ¹–åŒ—çœæ­¦æ±‰å¸‚æ±‰å—åŒº", 420114: "æ¹–åŒ—çœæ­¦æ±‰å¸‚è”¡ç”¸åŒº", 420115: "æ¹–åŒ—çœæ­¦æ±‰å¸‚æ±Ÿå¤åŒº", 420116: "æ¹–åŒ—çœæ­¦æ±‰å¸‚é»„é™‚åŒº", 420117: "æ¹–åŒ—çœæ­¦æ±‰å¸‚æ–°æ´²åŒº", 420200: "æ¹–åŒ—çœé»„çŸ³å¸‚", 420201: "æ¹–åŒ—çœé»„çŸ³å¸‚å¸‚è¾–åŒº", 420202: "æ¹–åŒ—çœé»„çŸ³å¸‚é»„çŸ³æ¸¯åŒº", 420203: "æ¹–åŒ—çœé»„çŸ³å¸‚çŸ³ç°çª‘åŒº", 420204: "æ¹–åŒ—çœé»„çŸ³å¸‚ä¸‹é™†åŒº", 420205: "æ¹–åŒ—çœé»„çŸ³å¸‚é“å±±åŒº", 420222: "æ¹–åŒ—çœé»„çŸ³å¸‚é˜³æ–°åŽ¿", 420281: "æ¹–åŒ—çœé»„çŸ³å¸‚å¤§å†¶å¸‚", 420300: "æ¹–åŒ—çœåå °å¸‚", 420301: "æ¹–åŒ—çœåå °å¸‚å¸‚è¾–åŒº", 420302: "æ¹–åŒ—çœåå °å¸‚èŒ…ç®­åŒº", 420303: "æ¹–åŒ—çœåå °å¸‚å¼ æ¹¾åŒº", 420321: "æ¹–åŒ—çœåå °å¸‚éƒ§åŽ¿", 420322: "æ¹–åŒ—çœåå °å¸‚éƒ§è¥¿åŽ¿", 420323: "æ¹–åŒ—çœåå °å¸‚ç«¹å±±åŽ¿", 420324: "æ¹–åŒ—çœåå °å¸‚ç«¹æºªåŽ¿", 420325: "æ¹–åŒ—çœåå °å¸‚æˆ¿åŽ¿", 420381: "æ¹–åŒ—çœåå °å¸‚ä¸¹æ±Ÿå£å¸‚", 420500: "æ¹–åŒ—çœå®œæ˜Œå¸‚", 420501: "æ¹–åŒ—çœå®œæ˜Œå¸‚å¸‚è¾–åŒº", 420502: "æ¹–åŒ—çœå®œæ˜Œå¸‚è¥¿é™µåŒº", 420503: "æ¹–åŒ—çœå®œæ˜Œå¸‚ä¼å®¶å²—åŒº", 420504: "æ¹–åŒ—çœå®œæ˜Œå¸‚ç‚¹å†›åŒº", 420505: "æ¹–åŒ—çœå®œæ˜Œå¸‚è™Žäº­åŒº", 420521: "æ¹–åŒ—çœå®œæ˜Œå¸‚å®œæ˜ŒåŽ¿", 420525: "æ¹–åŒ—çœå®œæ˜Œå¸‚è¿œå®‰åŽ¿", 420526: "æ¹–åŒ—çœå®œæ˜Œå¸‚å…´å±±åŽ¿", 420527: "æ¹–åŒ—çœå®œæ˜Œå¸‚ç§­å½’åŽ¿", 420528: "æ¹–åŒ—çœå®œæ˜Œå¸‚é•¿é˜³åœŸå®¶æ—è‡ªæ²»åŽ¿", 420529: "æ¹–åŒ—çœå®œæ˜Œå¸‚äº”å³°åœŸå®¶æ—è‡ªæ²»åŽ¿", 420581: "æ¹–åŒ—çœå®œæ˜Œå¸‚å®œéƒ½å¸‚", 420582: "æ¹–åŒ—çœå®œæ˜Œå¸‚å½“é˜³å¸‚", 420583: "æ¹–åŒ—çœå®œæ˜Œå¸‚æžæ±Ÿå¸‚", 420600: "æ¹–åŒ—çœè¥„æ¨Šå¸‚", 420601: "æ¹–åŒ—çœè¥„æ¨Šå¸‚å¸‚è¾–åŒº", 420602: "æ¹–åŒ—çœè¥„æ¨Šå¸‚è¥„åŸŽåŒº", 420606: "æ¹–åŒ—çœè¥„æ¨Šå¸‚æ¨ŠåŸŽåŒº", 420621: "æ¹–åŒ—çœè¥„æ¨Šå¸‚è¥„é˜³åŽ¿", 420624: "æ¹–åŒ—çœè¥„æ¨Šå¸‚å—æ¼³åŽ¿", 420625: "æ¹–åŒ—çœè¥„æ¨Šå¸‚è°·åŸŽåŽ¿", 420626: "æ¹–åŒ—çœè¥„æ¨Šå¸‚ä¿åº·åŽ¿", 420682: "æ¹–åŒ—çœè¥„æ¨Šå¸‚è€æ²³å£å¸‚", 420683: "æ¹–åŒ—çœè¥„æ¨Šå¸‚æž£é˜³å¸‚", 420684: "æ¹–åŒ—çœè¥„æ¨Šå¸‚å®œåŸŽå¸‚", 420700: "æ¹–åŒ—çœé„‚å·žå¸‚", 420701: "æ¹–åŒ—çœé„‚å·žå¸‚å¸‚è¾–åŒº", 420702: "æ¹–åŒ—çœé„‚å·žå¸‚æ¢å­æ¹–åŒº", 420703: "æ¹–åŒ—çœé„‚å·žå¸‚åŽå®¹åŒº", 420704: "æ¹–åŒ—çœé„‚å·žå¸‚é„‚åŸŽåŒº", 420800: "æ¹–åŒ—çœè†é—¨å¸‚", 420801: "æ¹–åŒ—çœè†é—¨å¸‚å¸‚è¾–åŒº", 420802: "æ¹–åŒ—çœè†é—¨å¸‚ä¸œå®åŒº", 420821: "æ¹–åŒ—çœè†é—¨å¸‚äº¬å±±åŽ¿", 420822: "æ¹–åŒ—çœè†é—¨å¸‚æ²™æ´‹åŽ¿", 420881: "æ¹–åŒ—çœè†é—¨å¸‚é’Ÿç¥¥å¸‚", 420900: "æ¹–åŒ—çœå­æ„Ÿå¸‚", 420901: "æ¹–åŒ—çœå­æ„Ÿå¸‚å¸‚è¾–åŒº", 420902: "æ¹–åŒ—çœå­æ„Ÿå¸‚å­å—åŒº", 420921: "æ¹–åŒ—çœå­æ„Ÿå¸‚å­æ˜ŒåŽ¿", 420922: "æ¹–åŒ—çœå­æ„Ÿå¸‚å¤§æ‚ŸåŽ¿", 420923: "æ¹–åŒ—çœå­æ„Ÿå¸‚äº‘æ¢¦åŽ¿", 420981: "æ¹–åŒ—çœå­æ„Ÿå¸‚åº”åŸŽå¸‚", 420982: "æ¹–åŒ—çœå­æ„Ÿå¸‚å®‰é™†å¸‚", 420983: "æ¹–åŒ—çœå­æ„Ÿå¸‚å¹¿æ°´å¸‚", 420984: "æ¹–åŒ—çœå­æ„Ÿå¸‚æ±‰å·å¸‚", 421e3: "æ¹–åŒ—çœè†å·žå¸‚", 421001: "æ¹–åŒ—çœè†å·žå¸‚å¸‚è¾–åŒº", 421002: "æ¹–åŒ—çœè†å·žå¸‚æ²™å¸‚åŒº", 421003: "æ¹–åŒ—çœè†å·žå¸‚è†å·žåŒº", 421022: "æ¹–åŒ—çœè†å·žå¸‚å…¬å®‰åŽ¿", 421023: "æ¹–åŒ—çœè†å·žå¸‚ç›‘åˆ©åŽ¿", 421024: "æ¹–åŒ—çœè†å·žå¸‚æ±Ÿé™µåŽ¿", 421081: "æ¹–åŒ—çœè†å·žå¸‚çŸ³é¦–å¸‚", 421083: "æ¹–åŒ—çœè†å·žå¸‚æ´ªæ¹–å¸‚", 421087: "æ¹–åŒ—çœè†å·žå¸‚æ¾æ»‹å¸‚", 421100: "æ¹–åŒ—çœé»„å†ˆå¸‚", 421101: "æ¹–åŒ—çœé»„å†ˆå¸‚å¸‚è¾–åŒº", 421102: "æ¹–åŒ—çœé»„å†ˆå¸‚é»„å·žåŒº", 421121: "æ¹–åŒ—çœé»„å†ˆå¸‚å›¢é£ŽåŽ¿", 421122: "æ¹–åŒ—çœé»„å†ˆå¸‚çº¢å®‰åŽ¿", 421123: "æ¹–åŒ—çœé»„å†ˆå¸‚ç½—ç”°åŽ¿", 421124: "æ¹–åŒ—çœé»„å†ˆå¸‚è‹±å±±åŽ¿", 421125: "æ¹–åŒ—çœé»„å†ˆå¸‚æµ æ°´åŽ¿", 421126: "æ¹–åŒ—çœé»„å†ˆå¸‚è•²æ˜¥åŽ¿", 421127: "æ¹–åŒ—çœé»„å†ˆå¸‚é»„æ¢…åŽ¿", 421181: "æ¹–åŒ—çœé»„å†ˆå¸‚éº»åŸŽå¸‚", 421182: "æ¹–åŒ—çœé»„å†ˆå¸‚æ­¦ç©´å¸‚", 421200: "æ¹–åŒ—çœå’¸å®å¸‚", 421201: "æ¹–åŒ—çœå’¸å®å¸‚å¸‚è¾–åŒº", 421202: "æ¹–åŒ—çœå’¸å®å¸‚å’¸å®‰åŒº", 421221: "æ¹–åŒ—çœå’¸å®å¸‚å˜‰é±¼åŽ¿", 421222: "æ¹–åŒ—çœå’¸å®å¸‚é€šåŸŽåŽ¿", 421223: "æ¹–åŒ—çœå’¸å®å¸‚å´‡é˜³åŽ¿", 421224: "æ¹–åŒ—çœå’¸å®å¸‚é€šå±±åŽ¿", 422800: "æ¹–åŒ—çœæ–½åœŸå®¶æ—è‹—æ—è‡ªæ²»å·ž", 422801: "æ¹–åŒ—çœæ©æ–½åœŸå®¶æ—è‹—æ—è‡ªæ²»å·žæ©æ–½åŽ¿", 422802: "æ¹–åŒ—çœæ©æ–½åœŸå®¶æ—è‹—æ—è‡ªæ²»å·žåˆ©å·å¸‚", 422822: "æ¹–åŒ—çœæ©æ–½åœŸå®¶æ—è‹—æ—è‡ªæ²»å·žå»ºå§‹åŽ¿", 422823: "æ¹–åŒ—çœæ©æ–½åœŸå®¶æ—è‹—æ—è‡ªæ²»å·žå·´ä¸œåŽ¿", 422825: "æ¹–åŒ—çœæ©æ–½åœŸå®¶æ—è‹—æ—è‡ªæ²»å·žå®£æ©åŽ¿", 422826: "æ¹–åŒ—çœæ©æ–½åœŸå®¶æ—è‹—æ—è‡ªæ²»å·žå’¸ä¸°åŽ¿", 422827: "æ¹–åŒ—çœæ©æ–½åœŸå®¶æ—è‹—æ—è‡ªæ²»å·žæ¥å‡¤åŽ¿", 422828: "æ¹–åŒ—çœæ©æ–½åœŸå®¶æ—è‹—æ—è‡ªæ²»å·žé¹¤å³°åŽ¿", 429e3: "æ¹–åŒ—çœçœç›´è¾–åŽ¿çº§è¡Œæ”¿å•ä½", 429001: "æ¹–åŒ—çœéšå·žå¸‚", 429004: "æ¹–åŒ—çœä»™æ¡ƒå¸‚", 429005: "æ¹–åŒ—çœæ½œæ±Ÿå¸‚", 429006: "æ¹–åŒ—çœå¤©é—¨å¸‚", 429021: "æ¹–åŒ—çœç¥žå†œæž¶æž—åŒº", 43e4: "æ¹–å—çœ", 430100: "æ¹–å—çœé•¿æ²™å¸‚", 430101: "æ¹–å—çœé•¿æ²™å¸‚å¸‚è¾–åŒº", 430102: "æ¹–å—çœé•¿æ²™å¸‚èŠ™è“‰åŒº", 430103: "æ¹–å—çœé•¿æ²™å¸‚å¤©å¿ƒåŒº", 430104: "æ¹–å—çœé•¿æ²™å¸‚å²³éº“åŒº", 430105: "æ¹–å—çœé•¿æ²™å¸‚å¼€ç¦åŒº", 430111: "æ¹–å—çœé•¿æ²™å¸‚é›¨èŠ±åŒº", 430121: "æ¹–å—çœé•¿æ²™å¸‚é•¿æ²™åŽ¿", 430122: "æ¹–å—çœé•¿æ²™å¸‚æœ›åŸŽåŽ¿", 430124: "æ¹–å—çœé•¿æ²™å¸‚å®ä¹¡åŽ¿", 430181: "æ¹–å—çœé•¿æ²™å¸‚æµé˜³å¸‚", 430200: "æ¹–å—çœæ ªæ´²å¸‚", 430201: "æ¹–å—çœæ ªæ´²å¸‚å¸‚è¾–åŒº", 430202: "æ¹–å—çœæ ªæ´²å¸‚è·å¡˜åŒº", 430203: "æ¹–å—çœæ ªæ´²å¸‚èŠ¦æ·žåŒº", 430204: "æ¹–å—çœæ ªæ´²å¸‚çŸ³å³°åŒº", 430211: "æ¹–å—çœæ ªæ´²å¸‚å¤©å…ƒåŒº", 430221: "æ¹–å—çœæ ªæ´²å¸‚æ ªæ´²åŽ¿", 430223: "æ¹–å—çœæ ªæ´²å¸‚æ”¸åŽ¿", 430224: "æ¹–å—çœæ ªæ´²å¸‚èŒ¶é™µåŽ¿", 430225: "æ¹–å—çœæ ªæ´²å¸‚ç‚Žé™µåŽ¿", 430281: "æ¹–å—çœæ ªæ´²å¸‚é†´é™µå¸‚", 430300: "æ¹–å—çœæ¹˜æ½­å¸‚", 430301: "æ¹–å—çœæ¹˜æ½­å¸‚å¸‚è¾–åŒº", 430302: "æ¹–å—çœæ¹˜æ½­å¸‚é›¨æ¹–åŒº", 430304: "æ¹–å—çœæ¹˜æ½­å¸‚å²³å¡˜åŒº", 430321: "æ¹–å—çœæ¹˜æ½­å¸‚æ¹˜æ½­åŽ¿", 430381: "æ¹–å—çœæ¹˜æ½­å¸‚æ¹˜ä¹¡å¸‚", 430382: "æ¹–å—çœæ¹˜æ½­å¸‚éŸ¶å±±å¸‚", 430400: "æ¹–å—çœè¡¡é˜³å¸‚", 430401: "æ¹–å—çœè¡¡é˜³å¸‚å¸‚è¾–åŒº", 430402: "æ¹–å—çœè¡¡é˜³å¸‚æ±Ÿä¸œåŒº", 430403: "æ¹–å—çœè¡¡é˜³å¸‚åŸŽå—åŒº", 430404: "æ¹–å—çœè¡¡é˜³å¸‚åŸŽåŒ—åŒº", 430411: "æ¹–å—çœè¡¡é˜³å¸‚éƒŠåŒº", 430412: "æ¹–å—çœè¡¡é˜³å¸‚å—å²³åŒº", 430421: "æ¹–å—çœè¡¡é˜³å¸‚è¡¡é˜³åŽ¿", 430422: "æ¹–å—çœè¡¡é˜³å¸‚è¡¡å—åŽ¿", 430423: "æ¹–å—çœè¡¡é˜³å¸‚è¡¡å±±åŽ¿", 430424: "æ¹–å—çœè¡¡é˜³å¸‚è¡¡ä¸œåŽ¿", 430426: "æ¹–å—çœè¡¡é˜³å¸‚ç¥ä¸œåŽ¿", 430481: "æ¹–å—çœè¡¡é˜³å¸‚è€’é˜³å¸‚", 430482: "æ¹–å—çœè¡¡é˜³å¸‚å¸¸å®å¸‚", 430500: "æ¹–å—çœé‚µé˜³å¸‚", 430501: "æ¹–å—çœé‚µé˜³å¸‚å¸‚è¾–åŒº", 430502: "æ¹–å—çœé‚µé˜³å¸‚åŒæ¸…åŒº", 430503: "æ¹–å—çœé‚µé˜³å¸‚å¤§ç¥¥åŒº", 430511: "æ¹–å—çœé‚µé˜³å¸‚åŒ—å¡”åŒº", 430521: "æ¹–å—çœé‚µé˜³å¸‚é‚µä¸œåŽ¿", 430522: "æ¹–å—çœé‚µé˜³å¸‚æ–°é‚µåŽ¿", 430523: "æ¹–å—çœé‚µé˜³å¸‚é‚µé˜³åŽ¿", 430524: "æ¹–å—çœé‚µé˜³å¸‚éš†å›žåŽ¿", 430525: "æ¹–å—çœé‚µé˜³å¸‚æ´žå£åŽ¿", 430527: "æ¹–å—çœé‚µé˜³å¸‚ç»¥å®åŽ¿", 430528: "æ¹–å—çœé‚µé˜³å¸‚æ–°å®åŽ¿", 430529: "æ¹–å—çœé‚µé˜³å¸‚åŸŽæ­¥è‹—æ—è‡ªæ²»åŽ¿", 430581: "æ¹–å—çœé‚µé˜³å¸‚æ­¦å†ˆå¸‚", 430600: "æ¹–å—çœå²³é˜³å¸‚", 430601: "æ¹–å—çœå²³é˜³å¸‚å¸‚è¾–åŒº", 430602: "æ¹–å—çœå²³é˜³å¸‚å²³é˜³æ¥¼åŒº", 430603: "æ¹–å—çœå²³é˜³å¸‚äº‘æºªåŒº", 430611: "æ¹–å—çœå²³é˜³å¸‚å›å±±åŒº", 430621: "æ¹–å—çœå²³é˜³å¸‚å²³é˜³åŽ¿", 430623: "æ¹–å—çœå²³é˜³å¸‚åŽå®¹åŽ¿", 430624: "æ¹–å—çœå²³é˜³å¸‚æ¹˜é˜´åŽ¿", 430626: "æ¹–å—çœå²³é˜³å¸‚å¹³æ±ŸåŽ¿", 430681: "æ¹–å—çœå²³é˜³å¸‚æ±¨ç½—å¸‚", 430682: "æ¹–å—çœå²³é˜³å¸‚ä¸´æ¹˜å¸‚", 430700: "æ¹–å—çœå¸¸å¾·å¸‚", 430701: "æ¹–å—çœå¸¸å¾·å¸‚å¸‚è¾–åŒº", 430702: "æ¹–å—çœå¸¸å¾·å¸‚æ­¦é™µåŒº", 430703: "æ¹–å—çœå¸¸å¾·å¸‚é¼ŽåŸŽåŒº", 430721: "æ¹–å—çœå¸¸å¾·å¸‚å®‰ä¹¡åŽ¿", 430722: "æ¹–å—çœå¸¸å¾·å¸‚æ±‰å¯¿åŽ¿", 430723: "æ¹–å—çœå¸¸å¾·å¸‚æ¾§åŽ¿", 430724: "æ¹–å—çœå¸¸å¾·å¸‚ä¸´æ¾§åŽ¿", 430725: "æ¹–å—çœå¸¸å¾·å¸‚æ¡ƒæºåŽ¿", 430726: "æ¹–å—çœå¸¸å¾·å¸‚çŸ³é—¨åŽ¿", 430781: "æ¹–å—çœå¸¸å¾·å¸‚æ´¥å¸‚å¸‚", 430800: "æ¹–å—çœå¼ å®¶ç•Œå¸‚", 430801: "æ¹–å—çœå¼ å®¶ç•Œå¸‚å¸‚è¾–åŒº", 430802: "æ¹–å—çœå¼ å®¶ç•Œå¸‚æ°¸å®šåŒº", 430811: "æ¹–å—çœå¼ å®¶ç•Œå¸‚æ­¦é™µæºåŒº", 430821: "æ¹–å—çœå¼ å®¶ç•Œå¸‚æ…ˆåˆ©åŽ¿", 430822: "æ¹–å—çœå¼ å®¶ç•Œå¸‚æ¡‘æ¤åŽ¿", 430900: "æ¹–å—çœç›Šé˜³å¸‚", 430901: "æ¹–å—çœç›Šé˜³å¸‚å¸‚è¾–åŒº", 430902: "æ¹–å—çœç›Šé˜³å¸‚èµ„é˜³åŒº", 430903: "æ¹–å—çœç›Šé˜³å¸‚èµ«å±±åŒº", 430921: "æ¹–å—çœç›Šé˜³å¸‚å—åŽ¿", 430922: "æ¹–å—çœç›Šé˜³å¸‚æ¡ƒæ±ŸåŽ¿", 430923: "æ¹–å—çœç›Šé˜³å¸‚å®‰åŒ–åŽ¿", 430981: "æ¹–å—çœç›Šé˜³å¸‚æ²…æ±Ÿå¸‚", 431e3: "æ¹–å—çœéƒ´å·žå¸‚", 431001: "æ¹–å—çœéƒ´å·žå¸‚å¸‚è¾–åŒº", 431002: "æ¹–å—çœéƒ´å·žå¸‚åŒ—æ¹–åŒº", 431003: "æ¹–å—çœéƒ´å·žå¸‚è‹ä»™åŒº", 431021: "æ¹–å—çœéƒ´å·žå¸‚æ¡‚é˜³åŽ¿", 431022: "æ¹–å—çœéƒ´å·žå¸‚å®œç« åŽ¿", 431023: "æ¹–å—çœéƒ´å·žå¸‚æ°¸å…´åŽ¿", 431024: "æ¹–å—çœéƒ´å·žå¸‚å˜‰ç¦¾åŽ¿", 431025: "æ¹–å—çœéƒ´å·žå¸‚ä¸´æ­¦åŽ¿", 431026: "æ¹–å—çœéƒ´å·žå¸‚æ±åŸŽåŽ¿", 431027: "æ¹–å—çœéƒ´å·žå¸‚æ¡‚ä¸œåŽ¿", 431028: "æ¹–å—çœéƒ´å·žå¸‚å®‰ä»åŽ¿", 431081: "æ¹–å—çœéƒ´å·žå¸‚èµ„å…´å¸‚", 431100: "æ¹–å—çœæ°¸å·žå¸‚", 431101: "æ¹–å—çœæ°¸å·žå¸‚å¸‚è¾–åŒº", 431102: "æ¹–å—çœæ°¸å·žå¸‚èŠå±±åŒº", 431103: "æ¹–å—çœæ°¸å·žå¸‚å†·æ°´æ»©åŒº", 431121: "æ¹–å—çœæ°¸å·žå¸‚ç¥é˜³åŽ¿", 431122: "æ¹–å—çœæ°¸å·žå¸‚ä¸œå®‰åŽ¿", 431123: "æ¹–å—çœæ°¸å·žå¸‚åŒç‰ŒåŽ¿", 431124: "æ¹–å—çœæ°¸å·žå¸‚é“åŽ¿", 431125: "æ¹–å—çœæ°¸å·žå¸‚æ±Ÿæ°¸åŽ¿", 431126: "æ¹–å—çœæ°¸å·žå¸‚å®è¿œåŽ¿", 431127: "æ¹–å—çœæ°¸å·žå¸‚è“å±±åŽ¿", 431128: "æ¹–å—çœæ°¸å·žå¸‚æ–°ç”°åŽ¿", 431129: "æ¹–å—çœæ°¸å·žå¸‚æ±ŸåŽç‘¶æ—è‡ªæ²»åŽ¿", 431200: "æ¹–å—çœæ€€åŒ–å¸‚", 431201: "æ¹–å—çœæ€€åŒ–å¸‚å¸‚è¾–åŒº", 431202: "æ¹–å—çœæ€€åŒ–å¸‚é¹¤åŸŽåŒº", 431221: "æ¹–å—çœæ€€åŒ–å¸‚ä¸­æ–¹åŽ¿", 431222: "æ¹–å—çœæ€€åŒ–å¸‚æ²…é™µåŽ¿", 431223: "æ¹–å—çœæ€€åŒ–å¸‚è¾°æºªåŽ¿", 431224: "æ¹–å—çœæ€€åŒ–å¸‚æº†æµ¦åŽ¿", 431225: "æ¹–å—çœæ€€åŒ–å¸‚ä¼šåŒåŽ¿", 431226: "æ¹–å—çœæ€€åŒ–å¸‚éº»é˜³è‹—æ—è‡ªæ²»åŽ¿", 431227: "æ¹–å—çœæ€€åŒ–å¸‚æ–°æ™ƒä¾—æ—è‡ªæ²»åŽ¿", 431228: "æ¹–å—çœæ€€åŒ–å¸‚èŠ·æ±Ÿä¾—æ—è‡ªæ²»åŽ¿", 431229: "æ¹–å—çœæ€€åŒ–å¸‚é–å·žè‹—æ—ä¾—æ—è‡ªæ²»åŽ¿", 431230: "æ¹–å—çœæ€€åŒ–å¸‚é€šé“ä¾—æ—è‡ªæ²»åŽ¿", 431281: "æ¹–å—çœæ€€åŒ–å¸‚æ´ªæ±Ÿå¸‚", 432500: "æ¹–å—çœå¨„åº•åœ°åŒº", 432501: "æ¹–å—çœå¨„åº•åœ°åŒºå¨„åº•å¸‚", 432502: "æ¹–å—çœå¨„åº•åœ°åŒºå†·æ°´æ±Ÿå¸‚", 432503: "æ¹–å—çœå¨„åº•åœ°åŒºæ¶Ÿæºå¸‚", 432522: "æ¹–å—çœå¨„åº•åœ°åŒºåŒå³°åŽ¿", 432524: "æ¹–å—çœå¨„åº•åœ°åŒºæ–°åŒ–åŽ¿", 433e3: "æ¹–å—çœæ€€åŒ–å¸‚", 433001: "æ¹–å—çœæ€€åŒ–å¸‚", 433100: "æ¹–å—çœæ¹˜è¥¿åœŸå®¶æ—è‹—æ—è‡ªæ²»å·ž", 433101: "æ¹–å—çœæ¹˜è¥¿åœŸå®¶æ—è‹—æ—è‡ªæ²»å·žå‰é¦–å¸‚", 433122: "æ¹–å—çœæ¹˜è¥¿åœŸå®¶æ—è‹—æ—è‡ªæ²»å·žæ³¸æºªåŽ¿", 433123: "æ¹–å—çœæ¹˜è¥¿åœŸå®¶æ—è‹—æ—è‡ªæ²»å·žå‡¤å‡°åŽ¿", 433124: "æ¹–å—çœæ¹˜è¥¿åœŸå®¶æ—è‹—æ—è‡ªæ²»å·žèŠ±åž£åŽ¿", 433125: "æ¹–å—çœæ¹˜è¥¿åœŸå®¶æ—è‹—æ—è‡ªæ²»å·žä¿é–åŽ¿", 433126: "æ¹–å—çœæ¹˜è¥¿åœŸå®¶æ—è‹—æ—è‡ªæ²»å·žå¤ä¸ˆåŽ¿", 433127: "æ¹–å—çœæ¹˜è¥¿åœŸå®¶æ—è‹—æ—è‡ªæ²»å·žæ°¸é¡ºåŽ¿", 433130: "æ¹–å—çœæ¹˜è¥¿åœŸå®¶æ—è‹—æ—è‡ªæ²»å·žé¾™å±±åŽ¿", 44e4: "å¹¿ä¸œçœ", 440100: "å¹¿ä¸œçœå¹¿å·žå¸‚", 440101: "å¹¿ä¸œçœå¹¿å·žå¸‚å¸‚è¾–åŒº", 440102: "å¹¿ä¸œçœå¹¿å·žå¸‚ä¸œå±±åŒº", 440103: "å¹¿ä¸œçœå¹¿å·žå¸‚è”æ¹¾åŒº", 440104: "å¹¿ä¸œçœå¹¿å·žå¸‚è¶Šç§€åŒº", 440105: "å¹¿ä¸œçœå¹¿å·žå¸‚æµ·ç åŒº", 440106: "å¹¿ä¸œçœå¹¿å·žå¸‚å¤©æ²³åŒº", 440107: "å¹¿ä¸œçœå¹¿å·žå¸‚èŠ³æ‘åŒº", 440111: "å¹¿ä¸œçœå¹¿å·žå¸‚ç™½äº‘åŒº", 440112: "å¹¿ä¸œçœå¹¿å·žå¸‚é»„åŸ”åŒº", 440181: "å¹¿ä¸œçœå¹¿å·žå¸‚ç•ªç¦ºå¸‚", 440182: "å¹¿ä¸œçœå¹¿å·žå¸‚èŠ±éƒ½å¸‚", 440183: "å¹¿ä¸œçœå¹¿å·žå¸‚å¢žåŸŽå¸‚", 440184: "å¹¿ä¸œçœå¹¿å·žå¸‚ä»ŽåŒ–å¸‚", 440200: "å¹¿ä¸œçœéŸ¶å…³å¸‚", 440201: "å¹¿ä¸œçœéŸ¶å…³å¸‚å¸‚è¾–åŒº", 440202: "å¹¿ä¸œçœéŸ¶å…³å¸‚åŒ—æ±ŸåŒº", 440203: "å¹¿ä¸œçœéŸ¶å…³å¸‚æ­¦æ±ŸåŒº", 440204: "å¹¿ä¸œçœéŸ¶å…³å¸‚æµˆæ±ŸåŒº", 440221: "å¹¿ä¸œçœéŸ¶å…³å¸‚æ›²æ±ŸåŽ¿", 440222: "å¹¿ä¸œçœéŸ¶å…³å¸‚å§‹å…´åŽ¿", 440224: "å¹¿ä¸œçœéŸ¶å…³å¸‚ä»åŒ–åŽ¿", 440229: "å¹¿ä¸œçœéŸ¶å…³å¸‚ç¿æºåŽ¿", 440232: "å¹¿ä¸œçœéŸ¶å…³å¸‚ä¹³æºç‘¶æ—è‡ªæ²»åŽ¿", 440233: "å¹¿ä¸œçœéŸ¶å…³å¸‚æ–°ä¸°åŽ¿", 440281: "å¹¿ä¸œçœéŸ¶å…³å¸‚ä¹æ˜Œå¸‚", 440282: "å¹¿ä¸œçœéŸ¶å…³å¸‚å—é›„å¸‚", 440300: "å¹¿ä¸œçœæ·±åœ³å¸‚", 440301: "å¹¿ä¸œçœæ·±åœ³å¸‚å¸‚è¾–åŒº", 440303: "å¹¿ä¸œçœæ·±åœ³å¸‚ç½—æ¹–åŒº", 440304: "å¹¿ä¸œçœæ·±åœ³å¸‚ç¦ç”°åŒº", 440305: "å¹¿ä¸œçœæ·±åœ³å¸‚å—å±±åŒº", 440306: "å¹¿ä¸œçœæ·±åœ³å¸‚å®å®‰åŒº", 440307: "å¹¿ä¸œçœæ·±åœ³å¸‚é¾™å²—åŒº", 440308: "å¹¿ä¸œçœæ·±åœ³å¸‚ç›ç”°åŒº", 440400: "å¹¿ä¸œçœç æµ·å¸‚", 440401: "å¹¿ä¸œçœç æµ·å¸‚å¸‚è¾–åŒº", 440402: "å¹¿ä¸œçœç æµ·å¸‚é¦™æ´²åŒº", 440421: "å¹¿ä¸œçœç æµ·å¸‚æ–—é—¨åŽ¿", 440500: "å¹¿ä¸œçœæ±•å¤´å¸‚", 440501: "å¹¿ä¸œçœæ±•å¤´å¸‚å¸‚è¾–åŒº", 440506: "å¹¿ä¸œçœæ±•å¤´å¸‚è¾¾æ¿ åŒº", 440507: "å¹¿ä¸œçœæ±•å¤´å¸‚é¾™æ¹–åŒº", 440508: "å¹¿ä¸œçœæ±•å¤´å¸‚é‡‘å›­åŒº", 440509: "å¹¿ä¸œçœæ±•å¤´å¸‚å‡å¹³åŒº", 440510: "å¹¿ä¸œçœæ±•å¤´å¸‚æ²³æµ¦åŒº", 440523: "å¹¿ä¸œçœæ±•å¤´å¸‚å—æ¾³åŽ¿", 440582: "å¹¿ä¸œçœæ±•å¤´å¸‚æ½®é˜³å¸‚", 440583: "å¹¿ä¸œçœæ±•å¤´å¸‚æ¾„æµ·å¸‚", 440600: "å¹¿ä¸œçœä½›å±±å¸‚", 440601: "å¹¿ä¸œçœä½›å±±å¸‚å¸‚è¾–åŒº", 440602: "å¹¿ä¸œçœä½›å±±å¸‚åŸŽåŒº", 440603: "å¹¿ä¸œçœä½›å±±å¸‚çŸ³æ¹¾åŒº", 440681: "å¹¿ä¸œçœä½›å±±å¸‚é¡ºå¾·å¸‚", 440682: "å¹¿ä¸œçœä½›å±±å¸‚å—æµ·å¸‚", 440683: "å¹¿ä¸œçœä½›å±±å¸‚ä¸‰æ°´å¸‚", 440684: "å¹¿ä¸œçœä½›å±±å¸‚é«˜æ˜Žå¸‚", 440700: "å¹¿ä¸œçœæ±Ÿé—¨å¸‚", 440701: "å¹¿ä¸œçœæ±Ÿé—¨å¸‚å¸‚è¾–åŒº", 440703: "å¹¿ä¸œçœæ±Ÿé—¨å¸‚è“¬æ±ŸåŒº", 440704: "å¹¿ä¸œçœæ±Ÿé—¨å¸‚æ±Ÿæµ·åŒº", 440781: "å¹¿ä¸œçœæ±Ÿé—¨å¸‚å°å±±å¸‚", 440782: "å¹¿ä¸œçœæ±Ÿé—¨å¸‚æ–°ä¼šå¸‚", 440783: "å¹¿ä¸œçœæ±Ÿé—¨å¸‚å¼€å¹³å¸‚", 440784: "å¹¿ä¸œçœæ±Ÿé—¨å¸‚é¹¤å±±å¸‚", 440785: "å¹¿ä¸œçœæ±Ÿé—¨å¸‚æ©å¹³å¸‚", 440800: "å¹¿ä¸œçœæ¹›æ±Ÿå¸‚", 440801: "å¹¿ä¸œçœæ¹›æ±Ÿå¸‚å¸‚è¾–åŒº", 440802: "å¹¿ä¸œçœæ¹›æ±Ÿå¸‚èµ¤åŽåŒº", 440803: "å¹¿ä¸œçœæ¹›æ±Ÿå¸‚éœžå±±åŒº", 440804: "å¹¿ä¸œçœæ¹›æ±Ÿå¸‚å¡å¤´åŒº", 440811: "å¹¿ä¸œçœæ¹›æ±Ÿå¸‚éº»ç« åŒº", 440823: "å¹¿ä¸œçœæ¹›æ±Ÿå¸‚é‚æºªåŽ¿", 440825: "å¹¿ä¸œçœæ¹›æ±Ÿå¸‚å¾é—»åŽ¿", 440881: "å¹¿ä¸œçœæ¹›æ±Ÿå¸‚å»‰æ±Ÿå¸‚", 440882: "å¹¿ä¸œçœæ¹›æ±Ÿå¸‚é›·å·žå¸‚", 440883: "å¹¿ä¸œçœæ¹›æ±Ÿå¸‚å´å·å¸‚", 440900: "å¹¿ä¸œçœèŒ‚åå¸‚", 440901: "å¹¿ä¸œçœèŒ‚åå¸‚å¸‚è¾–åŒº", 440902: "å¹¿ä¸œçœèŒ‚åå¸‚èŒ‚å—åŒº", 440923: "å¹¿ä¸œçœèŒ‚åå¸‚ç”µç™½åŽ¿", 440981: "å¹¿ä¸œçœèŒ‚åå¸‚é«˜å·žå¸‚", 440982: "å¹¿ä¸œçœèŒ‚åå¸‚åŒ–å·žå¸‚", 440983: "å¹¿ä¸œçœèŒ‚åå¸‚ä¿¡å®œå¸‚", 441200: "å¹¿ä¸œçœè‚‡åº†å¸‚", 441201: "å¹¿ä¸œçœè‚‡åº†å¸‚å¸‚è¾–åŒº", 441202: "å¹¿ä¸œçœè‚‡åº†å¸‚ç«¯å·žåŒº", 441203: "å¹¿ä¸œçœè‚‡åº†å¸‚é¼Žæ¹–åŒº", 441223: "å¹¿ä¸œçœè‚‡åº†å¸‚å¹¿å®åŽ¿", 441224: "å¹¿ä¸œçœè‚‡åº†å¸‚æ€€é›†åŽ¿", 441225: "å¹¿ä¸œçœè‚‡åº†å¸‚å°å¼€åŽ¿", 441226: "å¹¿ä¸œçœè‚‡åº†å¸‚å¾·åº†åŽ¿", 441283: "å¹¿ä¸œçœè‚‡åº†å¸‚é«˜è¦å¸‚", 441284: "å¹¿ä¸œçœè‚‡åº†å¸‚å››ä¼šå¸‚", 441300: "å¹¿ä¸œçœæƒ å·žå¸‚", 441301: "å¹¿ä¸œçœæƒ å·žå¸‚å¸‚è¾–åŒº", 441302: "å¹¿ä¸œçœæƒ å·žå¸‚æƒ åŸŽåŒº", 441322: "å¹¿ä¸œçœæƒ å·žå¸‚åšç½—åŽ¿", 441323: "å¹¿ä¸œçœæƒ å·žå¸‚æƒ ä¸œåŽ¿", 441324: "å¹¿ä¸œçœæƒ å·žå¸‚é¾™é—¨åŽ¿", 441381: "å¹¿ä¸œçœæƒ å·žå¸‚æƒ é˜³å¸‚", 441400: "å¹¿ä¸œçœæ¢…å·žå¸‚", 441401: "å¹¿ä¸œçœæ¢…å·žå¸‚å¸‚è¾–åŒº", 441402: "å¹¿ä¸œçœæ¢…å·žå¸‚æ¢…æ±ŸåŒº", 441421: "å¹¿ä¸œçœæ¢…å·žå¸‚æ¢…åŽ¿", 441422: "å¹¿ä¸œçœæ¢…å·žå¸‚å¤§åŸ”åŽ¿", 441423: "å¹¿ä¸œçœæ¢…å·žå¸‚ä¸°é¡ºåŽ¿", 441424: "å¹¿ä¸œçœæ¢…å·žå¸‚äº”åŽåŽ¿", 441426: "å¹¿ä¸œçœæ¢…å·žå¸‚å¹³è¿œåŽ¿", 441427: "å¹¿ä¸œçœæ¢…å·žå¸‚è•‰å²­åŽ¿", 441481: "å¹¿ä¸œçœæ¢…å·žå¸‚å…´å®å¸‚", 441500: "å¹¿ä¸œçœæ±•å°¾å¸‚", 441501: "å¹¿ä¸œçœæ±•å°¾å¸‚å¸‚è¾–åŒº", 441502: "å¹¿ä¸œçœæ±•å°¾å¸‚åŸŽåŒº", 441521: "å¹¿ä¸œçœæ±•å°¾å¸‚æµ·ä¸°åŽ¿", 441523: "å¹¿ä¸œçœæ±•å°¾å¸‚é™†æ²³åŽ¿", 441581: "å¹¿ä¸œçœæ±•å°¾å¸‚é™†ä¸°å¸‚", 441600: "å¹¿ä¸œçœæ²³æºå¸‚", 441601: "å¹¿ä¸œçœæ²³æºå¸‚å¸‚è¾–åŒº", 441602: "å¹¿ä¸œçœæ²³æºå¸‚æºåŸŽåŒº", 441621: "å¹¿ä¸œçœæ²³æºå¸‚ç´«é‡‘åŽ¿", 441622: "å¹¿ä¸œçœæ²³æºå¸‚é¾™å·åŽ¿", 441623: "å¹¿ä¸œçœæ²³æºå¸‚è¿žå¹³åŽ¿", 441624: "å¹¿ä¸œçœæ²³æºå¸‚å’Œå¹³åŽ¿", 441625: "å¹¿ä¸œçœæ²³æºå¸‚ä¸œæºåŽ¿", 441700: "å¹¿ä¸œçœé˜³æ±Ÿå¸‚", 441701: "å¹¿ä¸œçœé˜³æ±Ÿå¸‚å¸‚è¾–åŒº", 441702: "å¹¿ä¸œçœé˜³æ±Ÿå¸‚æ±ŸåŸŽåŒº", 441721: "å¹¿ä¸œçœé˜³æ±Ÿå¸‚é˜³è¥¿åŽ¿", 441723: "å¹¿ä¸œçœé˜³æ±Ÿå¸‚é˜³ä¸œåŽ¿", 441781: "å¹¿ä¸œçœé˜³æ±Ÿå¸‚é˜³æ˜¥å¸‚", 441800: "å¹¿ä¸œçœæ¸…è¿œå¸‚", 441801: "å¹¿ä¸œçœæ¸…è¿œå¸‚å¸‚è¾–åŒº", 441802: "å¹¿ä¸œçœæ¸…è¿œå¸‚æ¸…åŸŽåŒº", 441821: "å¹¿ä¸œçœæ¸…è¿œå¸‚ä½›å†ˆåŽ¿", 441823: "å¹¿ä¸œçœæ¸…è¿œå¸‚é˜³å±±åŽ¿", 441825: "å¹¿ä¸œçœæ¸…è¿œå¸‚è¿žå±±å£®æ—ç‘¶æ—è‡ªæ²»åŽ¿", 441826: "å¹¿ä¸œçœæ¸…è¿œå¸‚è¿žå—ç‘¶æ—è‡ªæ²»åŽ¿", 441827: "å¹¿ä¸œçœæ¸…è¿œå¸‚æ¸…æ–°åŽ¿", 441881: "å¹¿ä¸œçœæ¸…è¿œå¸‚è‹±å¾·å¸‚", 441882: "å¹¿ä¸œçœæ¸…è¿œå¸‚è¿žå·žå¸‚", 441900: "å¹¿ä¸œçœä¸œèŽžå¸‚", 441901: "å¹¿ä¸œçœä¸œèŽžå¸‚å¸‚è¾–åŒº", 442e3: "å¹¿ä¸œçœä¸­å±±å¸‚", 442001: "å¹¿ä¸œçœä¸­å±±å¸‚å¸‚è¾–åŒº", 445100: "å¹¿ä¸œçœæ½®å·žå¸‚", 445101: "å¹¿ä¸œçœæ½®å·žå¸‚å¸‚è¾–åŒº", 445102: "å¹¿ä¸œçœæ½®å·žå¸‚æ¹˜æ¡¥åŒº", 445121: "å¹¿ä¸œçœæ½®å·žå¸‚æ½®å®‰åŽ¿", 445122: "å¹¿ä¸œçœæ½®å·žå¸‚é¥¶å¹³åŽ¿", 445200: "å¹¿ä¸œçœæ­é˜³å¸‚", 445201: "å¹¿ä¸œçœæ­é˜³å¸‚å¸‚è¾–åŒº", 445202: "å¹¿ä¸œçœæ­é˜³å¸‚æ¦•åŸŽåŒº", 445221: "å¹¿ä¸œçœæ­é˜³å¸‚æ­ä¸œåŽ¿", 445222: "å¹¿ä¸œçœæ­é˜³å¸‚æ­è¥¿åŽ¿", 445224: "å¹¿ä¸œçœæ­é˜³å¸‚æƒ æ¥åŽ¿", 445281: "å¹¿ä¸œçœæ­é˜³å¸‚æ™®å®å¸‚", 445300: "å¹¿ä¸œçœäº‘æµ®å¸‚", 445301: "å¹¿ä¸œçœäº‘æµ®å¸‚å¸‚è¾–åŒº", 445302: "å¹¿ä¸œçœäº‘æµ®å¸‚äº‘åŸŽåŒº", 445321: "å¹¿ä¸œçœäº‘æµ®å¸‚æ–°å…´åŽ¿", 445322: "å¹¿ä¸œçœäº‘æµ®å¸‚éƒå—åŽ¿", 445323: "å¹¿ä¸œçœäº‘æµ®å¸‚äº‘å®‰åŽ¿", 445381: "å¹¿ä¸œçœäº‘æµ®å¸‚ç½—å®šå¸‚", 45e4: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒº", 450100: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®å¸‚", 450101: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®å¸‚å¸‚è¾–åŒº", 450102: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®å¸‚å…´å®åŒº", 450103: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®å¸‚æ–°åŸŽåŒº", 450104: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®å¸‚åŸŽåŒ—åŒº", 450105: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®å¸‚æ±Ÿå—åŒº", 450106: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®å¸‚æ°¸æ–°åŒº", 450111: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®å¸‚å¸‚éƒŠåŒº", 450121: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®å¸‚é‚•å®åŽ¿", 450122: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®å¸‚æ­¦é¸£åŽ¿", 450200: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žå¸‚", 450201: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žå¸‚å¸‚è¾–åŒº", 450202: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žå¸‚åŸŽä¸­åŒº", 450203: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žå¸‚é±¼å³°åŒº", 450204: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žå¸‚æŸ³å—åŒº", 450205: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žå¸‚æŸ³åŒ—åŒº", 450211: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žå¸‚å¸‚éƒŠåŒº", 450221: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žå¸‚æŸ³æ±ŸåŽ¿", 450222: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žå¸‚æŸ³åŸŽåŽ¿", 450300: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚", 450301: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚å¸‚è¾–åŒº", 450302: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚ç§€å³°åŒº", 450303: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚å å½©åŒº", 450304: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚è±¡å±±åŒº", 450305: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚ä¸ƒæ˜ŸåŒº", 450311: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚é›å±±åŒº", 450321: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚é˜³æœ”åŽ¿", 450322: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚ä¸´æ¡‚åŽ¿", 450323: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚çµå·åŽ¿", 450324: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚å…¨å·žåŽ¿", 450325: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚å…´å®‰åŽ¿", 450326: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚æ°¸ç¦åŽ¿", 450327: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚çŒé˜³åŽ¿", 450328: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚é¾™èƒœå„æ—è‡ªæ²»åŽ¿", 450329: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚èµ„æºåŽ¿", 450330: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚å¹³ä¹åŽ¿", 450331: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚è”æµ¦åŽ¿", 450332: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¡‚æž—å¸‚æ­åŸŽç‘¶æ—è‡ªæ²»åŽ¿", 450400: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¢§å·žå¸‚", 450401: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¢§å·žå¸‚å¸‚è¾–åŒº", 450403: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¢§å·žå¸‚ä¸‡ç§€åŒº", 450404: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¢§å·žå¸‚è¶å±±åŒº", 450411: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¢§å·žå¸‚å¸‚éƒŠåŒº", 450421: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¢§å·žå¸‚è‹æ¢§åŽ¿", 450422: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¢§å·žå¸‚è—¤åŽ¿", 450423: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¢§å·žå¸‚è’™å±±åŽ¿", 450481: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ¢§å·žå¸‚å²‘æºªå¸‚", 450500: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºåŒ—æµ·å¸‚", 450501: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºåŒ—æµ·å¸‚å¸‚è¾–åŒº", 450502: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºåŒ—æµ·å¸‚æµ·åŸŽåŒº", 450503: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºåŒ—æµ·å¸‚é“¶æµ·åŒº", 450512: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºåŒ—æµ·å¸‚é“å±±æ¸¯åŒº", 450521: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºåŒ—æµ·å¸‚åˆæµ¦åŽ¿", 450600: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºé˜²åŸŽæ¸¯å¸‚", 450601: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºé˜²åŸŽæ¸¯å¸‚å¸‚è¾–åŒº", 450602: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºé˜²åŸŽæ¸¯å¸‚æ¸¯å£åŒº", 450603: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºé˜²åŸŽæ¸¯å¸‚é˜²åŸŽåŒº", 450621: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºé˜²åŸŽæ¸¯å¸‚ä¸Šæ€åŽ¿", 450681: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºé˜²åŸŽæ¸¯å¸‚ä¸œå…´å¸‚", 450700: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºé’¦å·žå¸‚", 450701: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºé’¦å·žå¸‚å¸‚è¾–åŒº", 450702: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºé’¦å·žå¸‚é’¦å—åŒº", 450703: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºé’¦å·žå¸‚é’¦åŒ—åŒº", 450721: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºé’¦å·žå¸‚çµå±±åŽ¿", 450722: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºé’¦å·žå¸‚æµ¦åŒ—åŽ¿", 450800: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºè´µæ¸¯å¸‚", 450801: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºè´µæ¸¯å¸‚å¸‚è¾–åŒº", 450802: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºè´µæ¸¯å¸‚æ¸¯åŒ—åŒº", 450803: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºè´µæ¸¯å¸‚æ¸¯å—åŒº", 450821: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºè´µæ¸¯å¸‚å¹³å—åŽ¿", 450881: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºè´µæ¸¯å¸‚æ¡‚å¹³å¸‚", 450900: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºçŽ‰æž—å¸‚", 450901: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºçŽ‰æž—å¸‚å¸‚è¾–åŒº", 450902: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºçŽ‰æž—å¸‚çŽ‰å·žåŒº", 450921: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºçŽ‰æž—å¸‚å®¹åŽ¿", 450922: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºçŽ‰æž—å¸‚é™†å·åŽ¿", 450923: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºçŽ‰æž—å¸‚åšç™½åŽ¿", 450924: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºçŽ‰æž—å¸‚å…´ä¸šåŽ¿", 450981: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºçŽ‰æž—å¸‚åŒ—æµå¸‚", 452100: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®åœ°åŒº", 452101: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®åœ°åŒºå‡­ç¥¥å¸‚", 452122: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®åœ°åŒºæ¨ªåŽ¿", 452123: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®åœ°åŒºå®¾é˜³åŽ¿", 452124: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®åœ°åŒºä¸Šæž—åŽ¿", 452126: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®åœ°åŒºéš†å®‰åŽ¿", 452127: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®åœ°åŒºé©¬å±±åŽ¿", 452128: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®åœ°åŒºæ‰¶ç»¥åŽ¿", 452129: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®åœ°åŒºå´‡å·¦åŽ¿", 452130: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®åœ°åŒºå¤§æ–°åŽ¿", 452131: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®åœ°åŒºå¤©ç­‰åŽ¿", 452132: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®åœ°åŒºå®æ˜ŽåŽ¿", 452133: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºå—å®åœ°åŒºé¾™å·žåŽ¿", 452200: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žåœ°åŒº", 452201: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žåœ°åŒºåˆå±±å¸‚", 452223: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žåœ°åŒºé¹¿å¯¨åŽ¿", 452224: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žåœ°åŒºè±¡å·žåŽ¿", 452225: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žåœ°åŒºæ­¦å®£åŽ¿", 452226: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žåœ°åŒºæ¥å®¾åŽ¿", 452227: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žåœ°åŒºèžå®‰åŽ¿", 452228: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žåœ°åŒºä¸‰æ±Ÿä¾—æ—è‡ªæ²»åŽ¿", 452229: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žåœ°åŒºèžæ°´è‹—æ—è‡ªæ²»åŽ¿", 452230: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žåœ°åŒºé‡‘ç§€ç‘¶æ—è‡ªæ²»åŽ¿", 452231: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæŸ³å·žåœ°åŒºå¿»åŸŽåŽ¿", 452400: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºè´ºå·žåœ°åŒº", 452402: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºè´ºå·žåœ°åŒºè´ºå·žå¸‚", 452424: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºè´ºå·žåœ°åŒºæ˜­å¹³åŽ¿", 452427: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºè´ºå·žåœ°åŒºé’Ÿå±±åŽ¿", 452428: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºè´ºå·žåœ°åŒºå¯Œå·ç‘¶æ—è‡ªæ²»åŽ¿", 452600: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºç™¾è‰²åœ°åŒº", 452601: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºç™¾è‰²åœ°åŒºç™¾è‰²å¸‚", 452622: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºç™¾è‰²åœ°åŒºç”°é˜³åŽ¿", 452623: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºç™¾è‰²åœ°åŒºç”°ä¸œåŽ¿", 452624: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºç™¾è‰²åœ°åŒºå¹³æžœåŽ¿", 452625: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºç™¾è‰²åœ°åŒºå¾·ä¿åŽ¿", 452626: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºç™¾è‰²åœ°åŒºé–è¥¿åŽ¿", 452627: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºç™¾è‰²åœ°åŒºé‚£å¡åŽ¿", 452628: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºç™¾è‰²åœ°åŒºå‡Œäº‘åŽ¿", 452629: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºç™¾è‰²åœ°åŒºä¹ä¸šåŽ¿", 452630: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºç™¾è‰²åœ°åŒºç”°æž—åŽ¿", 452631: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºç™¾è‰²åœ°åŒºéš†æž—å„æ—è‡ªæ²»åŽ¿", 452632: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºç™¾è‰²åœ°åŒºè¥¿æž—åŽ¿", 452700: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ²³æ± åœ°åŒº", 452701: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ²³æ± åœ°åŒºæ²³æ± å¸‚", 452702: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ²³æ± åœ°åŒºå®œå·žå¸‚", 452723: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ²³æ± åœ°åŒºç½—åŸŽä»«ä½¬æ—è‡ªæ²»åŽ¿", 452724: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ²³æ± åœ°åŒºçŽ¯æ±Ÿæ¯›å—æ—è‡ªæ²»åŽ¿", 452725: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ²³æ± åœ°åŒºå—ä¸¹åŽ¿", 452726: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ²³æ± åœ°åŒºå¤©å³¨åŽ¿", 452727: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ²³æ± åœ°åŒºå‡¤å±±åŽ¿", 452728: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ²³æ± åœ°åŒºä¸œå…°åŽ¿", 452729: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ²³æ± åœ°åŒºå·´é©¬ç‘¶æ—è‡ªæ²»åŽ¿", 452730: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ²³æ± åœ°åŒºéƒ½å®‰ç‘¶æ—è‡ªæ²»åŽ¿", 452731: "å¹¿è¥¿å£®æ—è‡ªæ²»åŒºæ²³æ± åœ°åŒºå¤§åŒ–ç‘¶æ—è‡ªæ²»åŽ¿", 46e4: "æµ·å—çœ", 460001: "æµ·å—çœä¸‰äºšå¸‚é€šä»€å¸‚", 460002: "æµ·å—çœä¸‰äºšå¸‚ç¼æµ·å¸‚", 460003: "æµ·å—çœä¸‰äºšå¸‚å„‹å·žå¸‚", 460004: "æµ·å—çœä¸‰äºšå¸‚ç¼å±±å¸‚", 460005: "æµ·å—çœä¸‰äºšå¸‚æ–‡æ˜Œå¸‚", 460006: "æµ·å—çœä¸‰äºšå¸‚ä¸‡å®å¸‚", 460007: "æµ·å—çœä¸‰äºšå¸‚ä¸œæ–¹å¸‚", 460025: "æµ·å—çœä¸‰äºšå¸‚å®šå®‰åŽ¿", 460026: "æµ·å—çœä¸‰äºšå¸‚å±¯æ˜ŒåŽ¿", 460027: "æµ·å—çœä¸‰äºšå¸‚æ¾„è¿ˆåŽ¿", 460028: "æµ·å—çœä¸‰äºšå¸‚ä¸´é«˜åŽ¿", 460030: "æµ·å—çœä¸‰äºšå¸‚ç™½æ²™é»Žæ—è‡ªæ²»åŽ¿", 460031: "æµ·å—çœä¸‰äºšå¸‚æ˜Œæ±Ÿé»Žæ—è‡ªæ²»åŽ¿", 460033: "æµ·å—çœä¸‰äºšå¸‚ä¹ä¸œé»Žæ—è‡ªæ²»åŽ¿", 460034: "æµ·å—çœä¸‰äºšå¸‚é™µæ°´é»Žæ—è‡ªæ²»åŽ¿", 460035: "æµ·å—çœä¸‰äºšå¸‚ä¿äº­é»Žæ—è‹—æ—è‡ªæ²»åŽ¿", 460036: "æµ·å—çœä¸‰äºšå¸‚ç¼ä¸­é»Žæ—è‹—æ—è‡ªæ²»åŽ¿", 460037: "æµ·å—çœè¥¿æ²™ç¾¤å²›", 460038: "æµ·å—çœå—æ²™ç¾¤å²›", 460039: "æµ·å—çœä¸­æ²™ç¾¤å²›çš„å²›ç¤åŠå…¶æµ·åŸŸ", 460100: "æµ·å—çœæµ·å£å¸‚", 460101: "æµ·å—çœæµ·å£å¸‚å¸‚è¾–åŒº", 460102: "æµ·å—çœæµ·å£å¸‚æŒ¯ä¸œåŒº", 460103: "æµ·å—çœæµ·å£å¸‚æ–°åŽåŒº", 460104: "æµ·å—çœæµ·å£å¸‚ç§€è‹±åŒº", 460200: "æµ·å—çœä¸‰äºšå¸‚", 460201: "æµ·å—çœä¸‰äºšå¸‚å¸‚è¾–åŒº", 5e5: "é‡åº†å¸‚", 500100: "é‡åº†å¸‚å¸‚è¾–åŒº", 500101: "é‡åº†å¸‚ä¸‡å·žåŒº", 500102: "é‡åº†å¸‚æ¶ªé™µåŒº", 500103: "é‡åº†å¸‚æ¸ä¸­åŒº", 500104: "é‡åº†å¸‚å¤§æ¸¡å£åŒº", 500105: "é‡åº†å¸‚æ±ŸåŒ—åŒº", 500106: "é‡åº†å¸‚æ²™åªååŒº", 500107: "é‡åº†å¸‚ä¹é¾™å¡åŒº", 500108: "é‡åº†å¸‚å—å²¸åŒº", 500109: "é‡åº†å¸‚åŒ—ç¢šåŒº", 500110: "é‡åº†å¸‚ä¸‡ç››åŒº", 500111: "é‡åº†å¸‚åŒæ¡¥åŒº", 500112: "é‡åº†å¸‚æ¸åŒ—åŒº", 500113: "é‡åº†å¸‚å·´å—åŒº", 500200: "é‡åº†å¸‚åŽ¿", 500221: "é‡åº†å¸‚é•¿å¯¿åŽ¿", 500222: "é‡åº†å¸‚ç¶¦æ±ŸåŽ¿", 500223: "é‡åº†å¸‚æ½¼å—åŽ¿", 500224: "é‡åº†å¸‚é“œæ¢åŽ¿", 500225: "é‡åº†å¸‚å¤§è¶³åŽ¿", 500226: "é‡åº†å¸‚è£æ˜ŒåŽ¿", 500227: "é‡åº†å¸‚ç’§å±±åŽ¿", 500228: "é‡åº†å¸‚æ¢å¹³åŽ¿", 500229: "é‡åº†å¸‚åŸŽå£åŽ¿", 500230: "é‡åº†å¸‚ä¸°éƒ½åŽ¿", 500231: "é‡åº†å¸‚åž«æ±ŸåŽ¿", 500232: "é‡åº†å¸‚æ­¦éš†åŽ¿", 500233: "é‡åº†å¸‚å¿ åŽ¿", 500234: "é‡åº†å¸‚å¼€åŽ¿", 500235: "é‡åº†å¸‚äº‘é˜³åŽ¿", 500236: "é‡åº†å¸‚å¥‰èŠ‚åŽ¿", 500237: "é‡åº†å¸‚å·«å±±åŽ¿", 500238: "é‡åº†å¸‚å·«æºªåŽ¿", 500239: "é‡åº†å¸‚é»”æ±ŸåœŸå®¶æ—è‹—æ—è‡ªæ²»åŽ¿", 500240: "é‡åº†å¸‚çŸ³æŸ±åœŸå®¶æ—è‡ªæ²»åŽ¿", 500241: "é‡åº†å¸‚ç§€å±±åœŸå®¶æ—è‹—æ—è‡ªæ²»åŽ¿", 500242: "é‡åº†å¸‚é…‰é˜³åœŸå®¶æ—è‹—æ—è‡ªæ²»åŽ¿", 500243: "é‡åº†å¸‚å½­æ°´è‹—æ—åœŸå®¶æ—è‡ªæ²»åŽ¿", 500300: "é‡åº†å¸‚(å¸‚)", 500381: "é‡åº†å¸‚æ±Ÿæ´¥å¸‚", 500382: "é‡åº†å¸‚åˆå·å¸‚", 500383: "é‡åº†å¸‚æ°¸å·å¸‚", 500384: "é‡åº†å¸‚å—å·å¸‚", 51e4: "å››å·çœ", 510100: "å››å·çœæˆéƒ½å¸‚", 510101: "å››å·çœæˆéƒ½å¸‚å¸‚è¾–åŒº", 510104: "å››å·çœæˆéƒ½å¸‚é”¦æ±ŸåŒº", 510105: "å››å·çœæˆéƒ½å¸‚é’ç¾ŠåŒº", 510106: "å››å·çœæˆéƒ½å¸‚é‡‘ç‰›åŒº", 510107: "å››å·çœæˆéƒ½å¸‚æ­¦ä¾¯åŒº", 510108: "å››å·çœæˆéƒ½å¸‚æˆåŽåŒº", 510112: "å››å·çœæˆéƒ½å¸‚é¾™æ³‰é©¿åŒº", 510113: "å››å·çœæˆéƒ½å¸‚é’ç™½æ±ŸåŒº", 510121: "å››å·çœæˆéƒ½å¸‚é‡‘å ‚åŽ¿", 510122: "å››å·çœæˆéƒ½å¸‚åŒæµåŽ¿", 510123: "å››å·çœæˆéƒ½å¸‚æ¸©æ±ŸåŽ¿", 510124: "å››å·çœæˆéƒ½å¸‚éƒ«åŽ¿", 510125: "å››å·çœæˆéƒ½å¸‚æ–°éƒ½åŽ¿", 510129: "å››å·çœæˆéƒ½å¸‚å¤§é‚‘åŽ¿", 510131: "å››å·çœæˆéƒ½å¸‚è’²æ±ŸåŽ¿", 510132: "å››å·çœæˆéƒ½å¸‚æ–°æ´¥åŽ¿", 510181: "å››å·çœæˆéƒ½å¸‚éƒ½æ±Ÿå °å¸‚", 510182: "å››å·çœæˆéƒ½å¸‚å½­å·žå¸‚", 510183: "å››å·çœæˆéƒ½å¸‚é‚›å´ƒå¸‚", 510184: "å››å·çœæˆéƒ½å¸‚å´‡å·žå¸‚", 510300: "å››å·çœè‡ªè´¡å¸‚", 510301: "å››å·çœè‡ªè´¡å¸‚å¸‚è¾–åŒº", 510302: "å››å·çœè‡ªè´¡å¸‚è‡ªæµäº•åŒº", 510303: "å››å·çœè‡ªè´¡å¸‚è´¡äº•åŒº", 510304: "å››å·çœè‡ªè´¡å¸‚å¤§å®‰åŒº", 510311: "å››å·çœè‡ªè´¡å¸‚æ²¿æ»©åŒº", 510321: "å››å·çœè‡ªè´¡å¸‚è£åŽ¿", 510322: "å››å·çœè‡ªè´¡å¸‚å¯Œé¡ºåŽ¿", 510400: "å››å·çœæ”€æžèŠ±å¸‚", 510401: "å››å·çœæ”€æžèŠ±å¸‚å¸‚è¾–åŒº", 510402: "å››å·çœæ”€æžèŠ±å¸‚ä¸œåŒº", 510403: "å››å·çœæ”€æžèŠ±å¸‚è¥¿åŒº", 510411: "å››å·çœæ”€æžèŠ±å¸‚ä»å’ŒåŒº", 510421: "å››å·çœæ”€æžèŠ±å¸‚ç±³æ˜“åŽ¿", 510422: "å››å·çœæ”€æžèŠ±å¸‚ç›è¾¹åŽ¿", 510500: "å››å·çœæ³¸å·žå¸‚", 510501: "å››å·çœæ³¸å·žå¸‚å¸‚è¾–åŒº", 510502: "å››å·çœæ³¸å·žå¸‚æ±Ÿé˜³åŒº", 510503: "å››å·çœæ³¸å·žå¸‚çº³æºªåŒº", 510504: "å››å·çœæ³¸å·žå¸‚é¾™é©¬æ½­åŒº", 510521: "å››å·çœæ³¸å·žå¸‚æ³¸åŽ¿", 510522: "å››å·çœæ³¸å·žå¸‚åˆæ±ŸåŽ¿", 510524: "å››å·çœæ³¸å·žå¸‚å™æ°¸åŽ¿", 510525: "å››å·çœæ³¸å·žå¸‚å¤è”ºåŽ¿", 510600: "å››å·çœå¾·é˜³å¸‚", 510601: "å››å·çœå¾·é˜³å¸‚å¸‚è¾–åŒº", 510603: "å››å·çœå¾·é˜³å¸‚æ—Œé˜³åŒº", 510623: "å››å·çœå¾·é˜³å¸‚ä¸­æ±ŸåŽ¿", 510626: "å››å·çœå¾·é˜³å¸‚ç½—æ±ŸåŽ¿", 510681: "å››å·çœå¾·é˜³å¸‚å¹¿æ±‰å¸‚", 510682: "å››å·çœå¾·é˜³å¸‚ä»€é‚¡å¸‚", 510683: "å››å·çœå¾·é˜³å¸‚ç»µç«¹å¸‚", 510700: "å››å·çœç»µé˜³å¸‚", 510701: "å››å·çœç»µé˜³å¸‚å¸‚è¾–åŒº", 510703: "å››å·çœç»µé˜³å¸‚æ¶ªåŸŽåŒº", 510704: "å››å·çœç»µé˜³å¸‚æ¸¸ä»™åŒº", 510722: "å››å·çœç»µé˜³å¸‚ä¸‰å°åŽ¿", 510723: "å››å·çœç»µé˜³å¸‚ç›äº­åŽ¿", 510724: "å››å·çœç»µé˜³å¸‚å®‰åŽ¿", 510725: "å››å·çœç»µé˜³å¸‚æ¢“æ½¼åŽ¿", 510726: "å››å·çœç»µé˜³å¸‚åŒ—å·åŽ¿", 510727: "å››å·çœç»µé˜³å¸‚å¹³æ­¦åŽ¿", 510781: "å››å·çœç»µé˜³å¸‚æ±Ÿæ²¹å¸‚", 510800: "å››å·çœå¹¿å…ƒå¸‚", 510801: "å››å·çœå¹¿å…ƒå¸‚å¸‚è¾–åŒº", 510802: "å››å·çœå¹¿å…ƒå¸‚å¸‚ä¸­åŒº", 510811: "å››å·çœå¹¿å…ƒå¸‚å…ƒååŒº", 510812: "å››å·çœå¹¿å…ƒå¸‚æœå¤©åŒº", 510821: "å››å·çœå¹¿å…ƒå¸‚æ—ºè‹åŽ¿", 510822: "å››å·çœå¹¿å…ƒå¸‚é’å·åŽ¿", 510823: "å››å·çœå¹¿å…ƒå¸‚å‰‘é˜åŽ¿", 510824: "å››å·çœå¹¿å…ƒå¸‚è‹æºªåŽ¿", 510900: "å››å·çœé‚å®å¸‚", 510901: "å››å·çœé‚å®å¸‚å¸‚è¾–åŒº", 510902: "å››å·çœé‚å®å¸‚å¸‚ä¸­åŒº", 510921: "å››å·çœé‚å®å¸‚è“¬æºªåŽ¿", 510922: "å››å·çœé‚å®å¸‚å°„æ´ªåŽ¿", 510923: "å››å·çœé‚å®å¸‚å¤§è‹±åŽ¿", 511e3: "å››å·çœå†…æ±Ÿå¸‚", 511001: "å››å·çœå†…æ±Ÿå¸‚å¸‚è¾–åŒº", 511002: "å››å·çœå†…æ±Ÿå¸‚å¸‚ä¸­åŒº", 511011: "å››å·çœå†…æ±Ÿå¸‚ä¸œå…´åŒº", 511024: "å››å·çœå†…æ±Ÿå¸‚å¨è¿œåŽ¿", 511025: "å››å·çœå†…æ±Ÿå¸‚èµ„ä¸­åŽ¿", 511028: "å››å·çœå†…æ±Ÿå¸‚éš†æ˜ŒåŽ¿", 511100: "å››å·çœä¹å±±å¸‚", 511101: "å››å·çœä¹å±±å¸‚å¸‚è¾–åŒº", 511102: "å››å·çœä¹å±±å¸‚å¸‚ä¸­åŒº", 511111: "å››å·çœä¹å±±å¸‚æ²™æ¹¾åŒº", 511112: "å››å·çœä¹å±±å¸‚äº”é€šæ¡¥åŒº", 511113: "å››å·çœä¹å±±å¸‚é‡‘å£æ²³åŒº", 511123: "å››å·çœä¹å±±å¸‚çŠä¸ºåŽ¿", 511124: "å››å·çœä¹å±±å¸‚äº•ç ”åŽ¿", 511126: "å››å·çœä¹å±±å¸‚å¤¹æ±ŸåŽ¿", 511129: "å››å·çœä¹å±±å¸‚æ²å·åŽ¿", 511132: "å››å·çœä¹å±±å¸‚å³¨è¾¹å½æ—è‡ªæ²»åŽ¿", 511133: "å››å·çœä¹å±±å¸‚é©¬è¾¹å½æ—è‡ªæ²»åŽ¿", 511181: "å››å·çœä¹å±±å¸‚å³¨çœ‰å±±å¸‚", 511300: "å››å·çœå—å……å¸‚", 511301: "å››å·çœå—å……å¸‚å¸‚è¾–åŒº", 511302: "å››å·çœå—å……å¸‚é¡ºåº†åŒº", 511303: "å››å·çœå—å……å¸‚é«˜åªåŒº", 511304: "å››å·çœå—å……å¸‚å˜‰é™µåŒº", 511321: "å››å·çœå—å……å¸‚å—éƒ¨åŽ¿", 511322: "å››å·çœå—å……å¸‚è¥å±±åŽ¿", 511323: "å››å·çœå—å……å¸‚è“¬å®‰åŽ¿", 511324: "å››å·çœå—å……å¸‚ä»ªé™‡åŽ¿", 511325: "å››å·çœå—å……å¸‚è¥¿å……åŽ¿", 511381: "å››å·çœå—å……å¸‚é˜†ä¸­å¸‚", 511500: "å››å·çœå®œå®¾å¸‚", 511501: "å››å·çœå®œå®¾å¸‚å¸‚è¾–åŒº", 511502: "å››å·çœå®œå®¾å¸‚ç¿ å±åŒº", 511521: "å››å·çœå®œå®¾å¸‚å®œå®¾åŽ¿", 511522: "å››å·çœå®œå®¾å¸‚å—æºªåŽ¿", 511523: "å››å·çœå®œå®¾å¸‚æ±Ÿå®‰åŽ¿", 511524: "å››å·çœå®œå®¾å¸‚é•¿å®åŽ¿", 511525: "å››å·çœå®œå®¾å¸‚é«˜åŽ¿", 511526: "å››å·çœå®œå®¾å¸‚ç™åŽ¿", 511527: "å››å·çœå®œå®¾å¸‚ç­ è¿žåŽ¿", 511528: "å››å·çœå®œå®¾å¸‚å…´æ–‡åŽ¿", 511529: "å››å·çœå®œå®¾å¸‚å±å±±åŽ¿", 511600: "å››å·çœå¹¿å®‰å¸‚", 511601: "å››å·çœå¹¿å®‰å¸‚å¸‚è¾–åŒº", 511602: "å››å·çœå¹¿å®‰å¸‚å¹¿å®‰åŒº", 511621: "å››å·çœå¹¿å®‰å¸‚å²³æ± åŽ¿", 511622: "å››å·çœå¹¿å®‰å¸‚æ­¦èƒœåŽ¿", 511623: "å››å·çœå¹¿å®‰å¸‚é‚»æ°´åŽ¿", 511681: "å››å·çœå¹¿å®‰å¸‚åŽè“¥å¸‚", 513e3: "å››å·çœè¾¾å·åœ°åŒº", 513001: "å››å·çœè¾¾å·åœ°åŒºè¾¾å·å¸‚", 513002: "å››å·çœè¾¾å·åœ°åŒºä¸‡æºå¸‚", 513021: "å››å·çœè¾¾å·åœ°åŒºè¾¾åŽ¿", 513022: "å››å·çœè¾¾å·åœ°åŒºå®£æ±‰åŽ¿", 513023: "å››å·çœè¾¾å·åœ°åŒºå¼€æ±ŸåŽ¿", 513029: "å››å·çœè¾¾å·åœ°åŒºå¤§ç«¹åŽ¿", 513030: "å››å·çœè¾¾å·åœ°åŒºæ¸ åŽ¿", 513100: "å››å·çœé›…å®‰åœ°åŒº", 513101: "å››å·çœé›…å®‰åœ°åŒºé›…å®‰å¸‚", 513122: "å››å·çœé›…å®‰åœ°åŒºåå±±åŽ¿", 513123: "å››å·çœé›…å®‰åœ°åŒºè¥ç»åŽ¿", 513124: "å››å·çœé›…å®‰åœ°åŒºæ±‰æºåŽ¿", 513125: "å››å·çœé›…å®‰åœ°åŒºçŸ³æ£‰åŽ¿", 513126: "å››å·çœé›…å®‰åœ°åŒºå¤©å…¨åŽ¿", 513127: "å››å·çœé›…å®‰åœ°åŒºèŠ¦å±±åŽ¿", 513128: "å››å·çœé›…å®‰åœ°åŒºå®å…´åŽ¿", 513200: "å››å·çœé˜¿åè—æ—ç¾Œæ—è‡ªæ²»å·ž", 513221: "å››å·çœé˜¿åè—æ—ç¾Œæ—è‡ªæ²»å·žæ±¶å·åŽ¿", 513222: "å››å·çœé˜¿åè—æ—ç¾Œæ—è‡ªæ²»å·žç†åŽ¿", 513223: "å››å·çœé˜¿åè—æ—ç¾Œæ—è‡ªæ²»å·žèŒ‚åŽ¿", 513224: "å››å·çœé˜¿åè—æ—ç¾Œæ—è‡ªæ²»å·žæ¾æ½˜åŽ¿", 513225: "å››å·çœé˜¿åè—æ—ç¾Œæ—è‡ªæ²»å·žä¹å¯¨æ²ŸåŽ¿", 513226: "å››å·çœé˜¿åè—æ—ç¾Œæ—è‡ªæ²»å·žé‡‘å·åŽ¿", 513227: "å››å·çœé˜¿åè—æ—ç¾Œæ—è‡ªæ²»å·žå°é‡‘åŽ¿", 513228: "å››å·çœé˜¿åè—æ—ç¾Œæ—è‡ªæ²»å·žé»‘æ°´åŽ¿", 513229: "å››å·çœé˜¿åè—æ—ç¾Œæ—è‡ªæ²»å·žé©¬å°”åº·åŽ¿", 513230: "å››å·çœé˜¿åè—æ—ç¾Œæ—è‡ªæ²»å·žå£¤å¡˜åŽ¿", 513231: "å››å·çœé˜¿åè—æ—ç¾Œæ—è‡ªæ²»å·žé˜¿ååŽ¿", 513232: "å››å·çœé˜¿åè—æ—ç¾Œæ—è‡ªæ²»å·žè‹¥å°”ç›–åŽ¿", 513233: "å››å·çœé˜¿åè—æ—ç¾Œæ—è‡ªæ²»å·žçº¢åŽŸåŽ¿", 513300: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·ž", 513321: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žåº·å®šåŽ¿", 513322: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žæ³¸å®šåŽ¿", 513323: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žä¸¹å·´åŽ¿", 513324: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žä¹é¾™åŽ¿", 513325: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žé›…æ±ŸåŽ¿", 513326: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žé“å­šåŽ¿", 513327: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žç‚‰éœåŽ¿", 513328: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žç”˜å­œåŽ¿", 513329: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žæ–°é¾™åŽ¿", 513330: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žå¾·æ ¼åŽ¿", 513331: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žç™½çŽ‰åŽ¿", 513332: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žçŸ³æ¸ åŽ¿", 513333: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žè‰²è¾¾åŽ¿", 513334: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žç†å¡˜åŽ¿", 513335: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žå·´å¡˜åŽ¿", 513336: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žä¹¡åŸŽåŽ¿", 513337: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žç¨»åŸŽåŽ¿", 513338: "å››å·çœç”˜å­œè—æ—è‡ªæ²»å·žå¾—è£åŽ¿", 513400: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·ž", 513401: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·žè¥¿æ˜Œå¸‚", 513422: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·žæœ¨é‡Œè—æ—è‡ªæ²»åŽ¿", 513423: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·žç›æºåŽ¿", 513424: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·žå¾·æ˜ŒåŽ¿", 513425: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·žä¼šç†åŽ¿", 513426: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·žä¼šä¸œåŽ¿", 513427: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·žå®å—åŽ¿", 513428: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·žæ™®æ ¼åŽ¿", 513429: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·žå¸ƒæ‹–åŽ¿", 513430: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·žé‡‘é˜³åŽ¿", 513431: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·žæ˜­è§‰åŽ¿", 513432: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·žå–œå¾·åŽ¿", 513433: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·žå†•å®åŽ¿", 513434: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·žè¶Šè¥¿åŽ¿", 513435: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·žç”˜æ´›åŽ¿", 513436: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·žç¾Žå§‘åŽ¿", 513437: "å››å·çœå‡‰å±±å½æ—è‡ªæ²»å·žé›·æ³¢åŽ¿", 513700: "å››å·çœå·´ä¸­åœ°åŒº", 513701: "å››å·çœå·´ä¸­åœ°åŒºå·´ä¸­å¸‚", 513721: "å››å·çœå·´ä¸­åœ°åŒºé€šæ±ŸåŽ¿", 513722: "å››å·çœå·´ä¸­åœ°åŒºå—æ±ŸåŽ¿", 513723: "å››å·çœå·´ä¸­åœ°åŒºå¹³æ˜ŒåŽ¿", 513800: "å››å·çœçœ‰å±±åœ°åŒº", 513821: "å››å·çœçœ‰å±±åœ°åŒºçœ‰å±±åŽ¿", 513822: "å››å·çœçœ‰å±±åœ°åŒºä»å¯¿åŽ¿", 513823: "å››å·çœçœ‰å±±åœ°åŒºå½­å±±åŽ¿", 513824: "å››å·çœçœ‰å±±åœ°åŒºæ´ªé›…åŽ¿", 513825: "å››å·çœçœ‰å±±åœ°åŒºä¸¹æ£±åŽ¿", 513826: "å››å·çœçœ‰å±±åœ°åŒºé’ç¥žåŽ¿", 513900: "å››å·çœçœ‰å±±åœ°åŒºèµ„é˜³åœ°åŒº", 513901: "å››å·çœçœ‰å±±åœ°åŒºèµ„é˜³å¸‚", 513902: "å››å·çœçœ‰å±±åœ°åŒºç®€é˜³å¸‚", 513921: "å››å·çœçœ‰å±±åœ°åŒºå®‰å²³åŽ¿", 513922: "å››å·çœçœ‰å±±åœ°åŒºä¹è‡³åŽ¿", 52e4: "è´µå·žçœ", 520100: "è´µå·žçœè´µé˜³å¸‚", 520101: "è´µå·žçœè´µé˜³å¸‚å¸‚è¾–åŒº", 520102: "è´µå·žçœè´µé˜³å¸‚å—æ˜ŽåŒº", 520103: "è´µå·žçœè´µé˜³å¸‚äº‘å²©åŒº", 520111: "è´µå·žçœè´µé˜³å¸‚èŠ±æºªåŒº", 520112: "è´µå·žçœè´µé˜³å¸‚ä¹Œå½“åŒº", 520113: "è´µå·žçœè´µé˜³å¸‚ç™½äº‘åŒº", 520121: "è´µå·žçœè´µé˜³å¸‚å¼€é˜³åŽ¿", 520122: "è´µå·žçœè´µé˜³å¸‚æ¯çƒ½åŽ¿", 520123: "è´µå·žçœè´µé˜³å¸‚ä¿®æ–‡åŽ¿", 520181: "è´µå·žçœè´µé˜³å¸‚æ¸…é•‡å¸‚", 520200: "è´µå·žçœå…­ç›˜æ°´å¸‚", 520201: "è´µå·žçœå…­ç›˜æ°´å¸‚é’Ÿå±±åŒº", 520202: "è´µå·žçœå…­ç›˜æ°´å¸‚ç›˜åŽ¿ç‰¹åŒº", 520203: "è´µå·žçœå…­ç›˜æ°´å¸‚å…­æžç‰¹åŒº", 520221: "è´µå·žçœå…­ç›˜æ°´å¸‚æ°´åŸŽåŽ¿", 520300: "è´µå·žçœéµä¹‰å¸‚", 520301: "è´µå·žçœéµä¹‰å¸‚å¸‚è¾–åŒº", 520302: "è´µå·žçœéµä¹‰å¸‚çº¢èŠ±å²—åŒº", 520321: "è´µå·žçœéµä¹‰å¸‚éµä¹‰åŽ¿", 520322: "è´µå·žçœéµä¹‰å¸‚æ¡æ¢“åŽ¿", 520323: "è´µå·žçœéµä¹‰å¸‚ç»¥é˜³åŽ¿", 520324: "è´µå·žçœéµä¹‰å¸‚æ­£å®‰åŽ¿", 520325: "è´µå·žçœéµä¹‰å¸‚é“çœŸä»¡ä½¬æ—è‹—æ—è‡ªæ²»åŽ¿", 520326: "è´µå·žçœéµä¹‰å¸‚åŠ¡å·ä»¡ä½¬æ—è‹—æ—è‡ªæ²»åŽ¿", 520327: "è´µå·žçœéµä¹‰å¸‚å‡¤å†ˆåŽ¿", 520328: "è´µå·žçœéµä¹‰å¸‚æ¹„æ½­åŽ¿", 520329: "è´µå·žçœéµä¹‰å¸‚ä½™åº†åŽ¿", 520330: "è´µå·žçœéµä¹‰å¸‚ä¹ æ°´åŽ¿", 520381: "è´µå·žçœéµä¹‰å¸‚èµ¤æ°´å¸‚", 520382: "è´µå·žçœéµä¹‰å¸‚ä»æ€€å¸‚", 522200: "è´µå·žçœé“œä»åœ°åŒº", 522201: "è´µå·žçœé“œä»åœ°åŒºé“œä»å¸‚", 522222: "è´µå·žçœé“œä»åœ°åŒºæ±Ÿå£åŽ¿", 522223: "è´µå·žçœé“œä»åœ°åŒºçŽ‰å±ä¾—æ—è‡ªæ²»åŽ¿", 522224: "è´µå·žçœé“œä»åœ°åŒºçŸ³é˜¡åŽ¿", 522225: "è´µå·žçœé“œä»åœ°åŒºæ€å—åŽ¿", 522226: "è´µå·žçœé“œä»åœ°åŒºå°æ±ŸåœŸå®¶æ—è‹—æ—è‡ªæ²»åŽ¿", 522227: "è´µå·žçœé“œä»åœ°åŒºå¾·æ±ŸåŽ¿", 522228: "è´µå·žçœé“œä»åœ°åŒºæ²¿æ²³åœŸå®¶æ—è‡ªæ²»åŽ¿", 522229: "è´µå·žçœé“œä»åœ°åŒºæ¾æ¡ƒè‹—æ—è‡ªæ²»åŽ¿", 522230: "è´µå·žçœé“œä»åœ°åŒºä¸‡å±±ç‰¹åŒº", 522300: "è´µå·žçœé»”è¥¿å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·ž", 522301: "è´µå·žçœé»”è¥¿å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žå…´ä¹‰å¸‚", 522322: "è´µå·žçœé»”è¥¿å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žå…´ä»åŽ¿", 522323: "è´µå·žçœé»”è¥¿å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žæ™®å®‰åŽ¿", 522324: "è´µå·žçœé»”è¥¿å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žæ™´éš†åŽ¿", 522325: "è´µå·žçœé»”è¥¿å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žè´žä¸°åŽ¿", 522326: "è´µå·žçœé»”è¥¿å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žæœ›è°ŸåŽ¿", 522327: "è´µå·žçœé»”è¥¿å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žå†Œäº¨åŽ¿", 522328: "è´µå·žçœé»”è¥¿å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žå®‰é¾™åŽ¿", 522400: "è´µå·žçœæ¯•èŠ‚åœ°åŒº", 522401: "è´µå·žçœæ¯•èŠ‚åœ°åŒºæ¯•èŠ‚å¸‚", 522422: "è´µå·žçœæ¯•èŠ‚åœ°åŒºå¤§æ–¹åŽ¿", 522423: "è´µå·žçœæ¯•èŠ‚åœ°åŒºé»”è¥¿åŽ¿", 522424: "è´µå·žçœæ¯•èŠ‚åœ°åŒºé‡‘æ²™åŽ¿", 522425: "è´µå·žçœæ¯•èŠ‚åœ°åŒºç»‡é‡‘åŽ¿", 522426: "è´µå·žçœæ¯•èŠ‚åœ°åŒºçº³é›åŽ¿", 522427: "è´µå·žçœæ¯•èŠ‚åœ°åŒºå¨å®å½æ—å›žæ—è‹—æ—è‡ªæ²»åŽ¿", 522428: "è´µå·žçœæ¯•èŠ‚åœ°åŒºèµ«ç« åŽ¿", 522500: "è´µå·žçœå®‰é¡ºåœ°åŒº", 522501: "è´µå·žçœå®‰é¡ºåœ°åŒºå®‰é¡ºå¸‚", 522526: "è´µå·žçœå®‰é¡ºåœ°åŒºå¹³ååŽ¿", 522527: "è´µå·žçœå®‰é¡ºåœ°åŒºæ™®å®šåŽ¿", 522528: "è´µå·žçœå®‰é¡ºåœ°åŒºå…³å²­å¸ƒä¾æ—è‹—æ—è‡ªæ²»åŽ¿", 522529: "è´µå·žçœå®‰é¡ºåœ°åŒºé•‡å®å¸ƒä¾æ—è‹—æ—è‡ªæ²»åŽ¿", 522530: "è´µå·žçœå®‰é¡ºåœ°åŒºç´«äº‘è‹—æ—å¸ƒä¾æ—è‡ªæ²»åŽ¿", 522600: "è´µå·žçœé»”ä¸œå—è‹—æ—ä¾—æ—è‡ªæ²»å·ž", 522601: "è´µå·žçœé»”ä¸œå—è‹—æ—ä¾—æ—è‡ªæ²»å·žå‡¯é‡Œå¸‚", 522622: "è´µå·žçœé»”ä¸œå—è‹—æ—ä¾—æ—è‡ªæ²»å·žé»„å¹³åŽ¿", 522623: "è´µå·žçœé»”ä¸œå—è‹—æ—ä¾—æ—è‡ªæ²»å·žæ–½ç§‰åŽ¿", 522624: "è´µå·žçœé»”ä¸œå—è‹—æ—ä¾—æ—è‡ªæ²»å·žä¸‰ç©—åŽ¿", 522625: "è´µå·žçœé»”ä¸œå—è‹—æ—ä¾—æ—è‡ªæ²»å·žé•‡è¿œåŽ¿", 522626: "è´µå·žçœé»”ä¸œå—è‹—æ—ä¾—æ—è‡ªæ²»å·žå²‘å·©åŽ¿", 522627: "è´µå·žçœé»”ä¸œå—è‹—æ—ä¾—æ—è‡ªæ²»å·žå¤©æŸ±åŽ¿", 522628: "è´µå·žçœé»”ä¸œå—è‹—æ—ä¾—æ—è‡ªæ²»å·žé”¦å±åŽ¿", 522629: "è´µå·žçœé»”ä¸œå—è‹—æ—ä¾—æ—è‡ªæ²»å·žå‰‘æ²³åŽ¿", 522630: "è´µå·žçœé»”ä¸œå—è‹—æ—ä¾—æ—è‡ªæ²»å·žå°æ±ŸåŽ¿", 522631: "è´µå·žçœé»”ä¸œå—è‹—æ—ä¾—æ—è‡ªæ²»å·žé»Žå¹³åŽ¿", 522632: "è´µå·žçœé»”ä¸œå—è‹—æ—ä¾—æ—è‡ªæ²»å·žæ¦•æ±ŸåŽ¿", 522633: "è´µå·žçœé»”ä¸œå—è‹—æ—ä¾—æ—è‡ªæ²»å·žä»Žæ±ŸåŽ¿", 522634: "è´µå·žçœé»”ä¸œå—è‹—æ—ä¾—æ—è‡ªæ²»å·žé›·å±±åŽ¿", 522635: "è´µå·žçœé»”ä¸œå—è‹—æ—ä¾—æ—è‡ªæ²»å·žéº»æ±ŸåŽ¿", 522636: "è´µå·žçœé»”ä¸œå—è‹—æ—ä¾—æ—è‡ªæ²»å·žä¸¹å¯¨åŽ¿", 522700: "è´µå·žçœé»”å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·ž", 522701: "è´µå·žçœé»”å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žéƒ½åŒ€å¸‚", 522702: "è´µå·žçœé»”å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žç¦æ³‰å¸‚", 522722: "è´µå·žçœé»”å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žè”æ³¢åŽ¿", 522723: "è´µå·žçœé»”å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žè´µå®šåŽ¿", 522725: "è´µå·žçœé»”å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žç“®å®‰åŽ¿", 522726: "è´µå·žçœé»”å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žç‹¬å±±åŽ¿", 522727: "è´µå·žçœé»”å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žå¹³å¡˜åŽ¿", 522728: "è´µå·žçœé»”å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žç½—ç”¸åŽ¿", 522729: "è´µå·žçœé»”å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žé•¿é¡ºåŽ¿", 522730: "è´µå·žçœé»”å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žé¾™é‡ŒåŽ¿", 522731: "è´µå·žçœé»”å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žæƒ æ°´åŽ¿", 522732: "è´µå·žçœé»”å—å¸ƒä¾æ—è‹—æ—è‡ªæ²»å·žä¸‰éƒ½æ°´æ—è‡ªæ²»åŽ¿", 53e4: "äº‘å—çœ", 530100: "äº‘å—çœæ˜†æ˜Žå¸‚", 530101: "äº‘å—çœæ˜†æ˜Žå¸‚å¸‚è¾–åŒº", 530102: "äº‘å—çœæ˜†æ˜Žå¸‚äº”åŽåŒº", 530103: "äº‘å—çœæ˜†æ˜Žå¸‚ç›˜é¾™åŒº", 530111: "äº‘å—çœæ˜†æ˜Žå¸‚å®˜æ¸¡åŒº", 530112: "äº‘å—çœæ˜†æ˜Žå¸‚è¥¿å±±åŒº", 530113: "äº‘å—çœæ˜†æ˜Žå¸‚ä¸œå·åŒº", 530121: "äº‘å—çœæ˜†æ˜Žå¸‚å‘ˆè´¡åŽ¿", 530122: "äº‘å—çœæ˜†æ˜Žå¸‚æ™‹å®åŽ¿", 530124: "äº‘å—çœæ˜†æ˜Žå¸‚å¯Œæ°‘åŽ¿", 530125: "äº‘å—çœæ˜†æ˜Žå¸‚å®œè‰¯åŽ¿", 530126: "äº‘å—çœæ˜†æ˜Žå¸‚çŸ³æž—å½æ—è‡ªæ²»åŽ¿", 530127: "äº‘å—çœæ˜†æ˜Žå¸‚åµ©æ˜ŽåŽ¿", 530128: "äº‘å—çœæ˜†æ˜Žå¸‚ç¦„åŠå½æ—è‹—æ—è‡ªæ²»åŽ¿", 530129: "äº‘å—çœæ˜†æ˜Žå¸‚å¯»ç”¸å›žæ—å½æ—è‡ªæ²»åŽ¿", 530181: "äº‘å—çœæ˜†æ˜Žå¸‚å®‰å®å¸‚", 530300: "äº‘å—çœæ›²é–å¸‚", 530301: "äº‘å—çœæ›²é–å¸‚å¸‚è¾–åŒº", 530302: "äº‘å—çœæ›²é–å¸‚éº’éºŸåŒº", 530321: "äº‘å—çœæ›²é–å¸‚é©¬é¾™åŽ¿", 530322: "äº‘å—çœæ›²é–å¸‚é™†è‰¯åŽ¿", 530323: "äº‘å—çœæ›²é–å¸‚å¸ˆå®—åŽ¿", 530324: "äº‘å—çœæ›²é–å¸‚ç½—å¹³åŽ¿", 530325: "äº‘å—çœæ›²é–å¸‚å¯ŒæºåŽ¿", 530326: "äº‘å—çœæ›²é–å¸‚ä¼šæ³½åŽ¿", 530328: "äº‘å—çœæ›²é–å¸‚æ²¾ç›ŠåŽ¿", 530381: "äº‘å—çœæ›²é–å¸‚å®£å¨å¸‚", 530400: "äº‘å—çœçŽ‰æºªå¸‚", 530401: "äº‘å—çœçŽ‰æºªå¸‚å¸‚è¾–åŒº", 530402: "äº‘å—çœçŽ‰æºªå¸‚çº¢å¡”åŒº", 530421: "äº‘å—çœçŽ‰æºªå¸‚æ±Ÿå·åŽ¿", 530422: "äº‘å—çœçŽ‰æºªå¸‚æ¾„æ±ŸåŽ¿", 530423: "äº‘å—çœçŽ‰æºªå¸‚é€šæµ·åŽ¿", 530424: "äº‘å—çœçŽ‰æºªå¸‚åŽå®åŽ¿", 530425: "äº‘å—çœçŽ‰æºªå¸‚æ˜“é—¨åŽ¿", 530426: "äº‘å—çœçŽ‰æºªå¸‚å³¨å±±å½æ—è‡ªæ²»åŽ¿", 530427: "äº‘å—çœçŽ‰æºªå¸‚æ–°å¹³å½æ—å‚£æ—è‡ªæ²»åŽ¿", 530428: "äº‘å—çœçŽ‰æºªå¸‚å…ƒæ±Ÿå“ˆå°¼æ—å½æ—å‚£æ—è‡ªæ²»åŽ¿", 532100: "äº‘å—çœæ˜­é€šåœ°åŒº", 532101: "äº‘å—çœæ˜­é€šåœ°åŒºæ˜­é€šå¸‚", 532122: "äº‘å—çœæ˜­é€šåœ°åŒºé²ç”¸åŽ¿", 532123: "äº‘å—çœæ˜­é€šåœ°åŒºå·§å®¶åŽ¿", 532124: "äº‘å—çœæ˜­é€šåœ°åŒºç›æ´¥åŽ¿", 532125: "äº‘å—çœæ˜­é€šåœ°åŒºå¤§å…³åŽ¿", 532126: "äº‘å—çœæ˜­é€šåœ°åŒºæ°¸å–„åŽ¿", 532127: "äº‘å—çœæ˜­é€šåœ°åŒºç»¥æ±ŸåŽ¿", 532128: "äº‘å—çœæ˜­é€šåœ°åŒºé•‡é›„åŽ¿", 532129: "äº‘å—çœæ˜­é€šåœ°åŒºå½è‰¯åŽ¿", 532130: "äº‘å—çœæ˜­é€šåœ°åŒºå¨ä¿¡åŽ¿", 532131: "äº‘å—çœæ˜­é€šåœ°åŒºæ°´å¯ŒåŽ¿", 532300: "äº‘å—çœæ¥šé›„å½æ—è‡ªæ²»å·ž", 532301: "äº‘å—çœæ¥šé›„å½æ—è‡ªæ²»å·žæ¥šé›„å¸‚", 532322: "äº‘å—çœæ¥šé›„å½æ—è‡ªæ²»å·žåŒæŸåŽ¿", 532323: "äº‘å—çœæ¥šé›„å½æ—è‡ªæ²»å·žç‰Ÿå®šåŽ¿", 532324: "äº‘å—çœæ¥šé›„å½æ—è‡ªæ²»å·žå—åŽåŽ¿", 532325: "äº‘å—çœæ¥šé›„å½æ—è‡ªæ²»å·žå§šå®‰åŽ¿", 532326: "äº‘å—çœæ¥šé›„å½æ—è‡ªæ²»å·žå¤§å§šåŽ¿", 532327: "äº‘å—çœæ¥šé›„å½æ—è‡ªæ²»å·žæ°¸ä»åŽ¿", 532328: "äº‘å—çœæ¥šé›„å½æ—è‡ªæ²»å·žå…ƒè°‹åŽ¿", 532329: "äº‘å—çœæ¥šé›„å½æ—è‡ªæ²»å·žæ­¦å®šåŽ¿", 532331: "äº‘å—çœæ¥šé›„å½æ—è‡ªæ²»å·žç¦„ä¸°åŽ¿", 532500: "äº‘å—çœçº¢æ²³å“ˆå°¼æ—å½æ—è‡ªæ²»å·ž", 532501: "äº‘å—çœçº¢æ²³å“ˆå°¼æ—å½æ—è‡ªæ²»å·žä¸ªæ—§å¸‚", 532502: "äº‘å—çœçº¢æ²³å“ˆå°¼æ—å½æ—è‡ªæ²»å·žå¼€è¿œå¸‚", 532522: "äº‘å—çœçº¢æ²³å“ˆå°¼æ—å½æ—è‡ªæ²»å·žè’™è‡ªåŽ¿", 532523: "äº‘å—çœçº¢æ²³å“ˆå°¼æ—å½æ—è‡ªæ²»å·žå±è¾¹è‹—æ—è‡ªæ²»åŽ¿", 532524: "äº‘å—çœçº¢æ²³å“ˆå°¼æ—å½æ—è‡ªæ²»å·žå»ºæ°´åŽ¿", 532525: "äº‘å—çœçº¢æ²³å“ˆå°¼æ—å½æ—è‡ªæ²»å·žçŸ³å±åŽ¿", 532526: "äº‘å—çœçº¢æ²³å“ˆå°¼æ—å½æ—è‡ªæ²»å·žå¼¥å‹’åŽ¿", 532527: "äº‘å—çœçº¢æ²³å“ˆå°¼æ—å½æ—è‡ªæ²»å·žæ³¸è¥¿åŽ¿", 532528: "äº‘å—çœçº¢æ²³å“ˆå°¼æ—å½æ—è‡ªæ²»å·žå…ƒé˜³åŽ¿", 532529: "äº‘å—çœçº¢æ²³å“ˆå°¼æ—å½æ—è‡ªæ²»å·žçº¢æ²³åŽ¿", 532530: "äº‘å—çœçº¢æ²³å“ˆå°¼æ—å½æ—è‡ªæ²»å·žé‡‘å¹³è‹—æ—ç‘¶æ—å‚£æ—è‡ªæ²»åŽ¿", 532531: "äº‘å—çœçº¢æ²³å“ˆå°¼æ—å½æ—è‡ªæ²»å·žç»¿æ˜¥åŽ¿", 532532: "äº‘å—çœçº¢æ²³å“ˆå°¼æ—å½æ—è‡ªæ²»å·žæ²³å£ç‘¶æ—è‡ªæ²»åŽ¿", 532600: "äº‘å—çœæ–‡å±±å£®æ—è‹—æ—è‡ªæ²»å·ž", 532621: "äº‘å—çœæ–‡å±±å£®æ—è‹—æ—è‡ªæ²»å·žæ–‡å±±åŽ¿", 532622: "äº‘å—çœæ–‡å±±å£®æ—è‹—æ—è‡ªæ²»å·žç šå±±åŽ¿", 532623: "äº‘å—çœæ–‡å±±å£®æ—è‹—æ—è‡ªæ²»å·žè¥¿ç•´åŽ¿", 532624: "äº‘å—çœæ–‡å±±å£®æ—è‹—æ—è‡ªæ²»å·žéº»æ —å¡åŽ¿", 532625: "äº‘å—çœæ–‡å±±å£®æ—è‹—æ—è‡ªæ²»å·žé©¬å…³åŽ¿", 532626: "äº‘å—çœæ–‡å±±å£®æ—è‹—æ—è‡ªæ²»å·žä¸˜åŒ—åŽ¿", 532627: "äº‘å—çœæ–‡å±±å£®æ—è‹—æ—è‡ªæ²»å·žå¹¿å—åŽ¿", 532628: "äº‘å—çœæ–‡å±±å£®æ—è‹—æ—è‡ªæ²»å·žå¯Œå®åŽ¿", 532700: "äº‘å—çœæ€èŒ…åœ°åŒº", 532701: "äº‘å—çœæ€èŒ…åœ°åŒºæ€èŒ…å¸‚", 532722: "äº‘å—çœæ€èŒ…åœ°åŒºæ™®æ´±å“ˆå°¼æ—å½æ—è‡ªæ²»åŽ¿", 532723: "äº‘å—çœæ€èŒ…åœ°åŒºå¢¨æ±Ÿå“ˆå°¼æ—è‡ªæ²»åŽ¿", 532724: "äº‘å—çœæ€èŒ…åœ°åŒºæ™¯ä¸œå½æ—è‡ªæ²»åŽ¿", 532725: "äº‘å—çœæ€èŒ…åœ°åŒºæ™¯è°·å‚£æ—å½æ—è‡ªæ²»åŽ¿", 532726: "äº‘å—çœæ€èŒ…åœ°åŒºé•‡æ²…å½æ—å“ˆå°¼æ—æ‹‰ç¥œæ—è‡ªæ²»åŽ¿", 532727: "äº‘å—çœæ€èŒ…åœ°åŒºæ±ŸåŸŽå“ˆå°¼æ—å½æ—è‡ªæ²»åŽ¿", 532728: "äº‘å—çœæ€èŒ…åœ°åŒºå­Ÿè¿žå‚£æ—æ‹‰ç¥œæ—ä½¤æ—è‡ªæ²»åŽ¿", 532729: "äº‘å—çœæ€èŒ…åœ°åŒºæ¾œæ²§æ‹‰ç¥œæ—è‡ªæ²»åŽ¿", 532730: "äº‘å—çœæ€èŒ…åœ°åŒºè¥¿ç›Ÿä½¤æ—è‡ªæ²»åŽ¿", 532800: "äº‘å—çœè¥¿åŒç‰ˆçº³å‚£æ—è‡ªæ²»å·ž", 532801: "äº‘å—çœè¥¿åŒç‰ˆçº³å‚£æ—è‡ªæ²»å·žæ™¯æ´ªå¸‚", 532822: "äº‘å—çœè¥¿åŒç‰ˆçº³å‚£æ—è‡ªæ²»å·žå‹æµ·åŽ¿", 532823: "äº‘å—çœè¥¿åŒç‰ˆçº³å‚£æ—è‡ªæ²»å·žå‹è…ŠåŽ¿", 532900: "äº‘å—çœå¤§ç†ç™½æ—è‡ªæ²»å·ž", 532901: "äº‘å—çœå¤§ç†ç™½æ—è‡ªæ²»å·žå¤§ç†å¸‚", 532922: "äº‘å—çœå¤§ç†ç™½æ—è‡ªæ²»å·žæ¼¾æ¿žå½æ—è‡ªæ²»åŽ¿", 532923: "äº‘å—çœå¤§ç†ç™½æ—è‡ªæ²»å·žç¥¥äº‘åŽ¿", 532924: "äº‘å—çœå¤§ç†ç™½æ—è‡ªæ²»å·žå®¾å·åŽ¿", 532925: "äº‘å—çœå¤§ç†ç™½æ—è‡ªæ²»å·žå¼¥æ¸¡åŽ¿", 532926: "äº‘å—çœå¤§ç†ç™½æ—è‡ªæ²»å·žå—æ¶§å½æ—è‡ªæ²»åŽ¿", 532927: "äº‘å—çœå¤§ç†ç™½æ—è‡ªæ²»å·žå·å±±å½æ—å›žæ—è‡ªæ²»åŽ¿", 532928: "äº‘å—çœå¤§ç†ç™½æ—è‡ªæ²»å·žæ°¸å¹³åŽ¿", 532929: "äº‘å—çœå¤§ç†ç™½æ—è‡ªæ²»å·žäº‘é¾™åŽ¿", 532930: "äº‘å—çœå¤§ç†ç™½æ—è‡ªæ²»å·žæ´±æºåŽ¿", 532931: "äº‘å—çœå¤§ç†ç™½æ—è‡ªæ²»å·žå‰‘å·åŽ¿", 532932: "äº‘å—çœå¤§ç†ç™½æ—è‡ªæ²»å·žé¹¤åº†åŽ¿", 533e3: "äº‘å—çœä¿å±±åœ°åŒº", 533001: "äº‘å—çœä¿å±±åœ°åŒºä¿å±±å¸‚", 533022: "äº‘å—çœä¿å±±åœ°åŒºæ–½ç”¸åŽ¿", 533023: "äº‘å—çœä¿å±±åœ°åŒºè…¾å†²åŽ¿", 533024: "äº‘å—çœä¿å±±åœ°åŒºé¾™é™µåŽ¿", 533025: "äº‘å—çœä¿å±±åœ°åŒºæ˜Œå®åŽ¿", 533100: "äº‘å—çœå¾·å®å‚£æ—æ™¯é¢‡æ—è‡ªæ²»å·ž", 533101: "äº‘å—çœå¾·å®å‚£æ—æ™¯é¢‡æ—è‡ªæ²»å·žç•¹ç”ºå¸‚", 533102: "äº‘å—çœå¾·å®å‚£æ—æ™¯é¢‡æ—è‡ªæ²»å·žç‘žä¸½å¸‚", 533103: "äº‘å—çœå¾·å®å‚£æ—æ™¯é¢‡æ—è‡ªæ²»å·žæ½žè¥¿å¸‚", 533122: "äº‘å—çœå¾·å®å‚£æ—æ™¯é¢‡æ—è‡ªæ²»å·žæ¢æ²³åŽ¿", 533123: "äº‘å—çœå¾·å®å‚£æ—æ™¯é¢‡æ—è‡ªæ²»å·žç›ˆæ±ŸåŽ¿", 533124: "äº‘å—çœå¾·å®å‚£æ—æ™¯é¢‡æ—è‡ªæ²»å·žé™‡å·åŽ¿", 533200: "äº‘å—çœä¸½æ±Ÿåœ°åŒº", 533221: "äº‘å—çœä¸½æ±Ÿåœ°åŒºä¸½æ±Ÿçº³è¥¿æ—è‡ªæ²»åŽ¿", 533222: "äº‘å—çœä¸½æ±Ÿåœ°åŒºæ°¸èƒœåŽ¿", 533223: "äº‘å—çœä¸½æ±Ÿåœ°åŒºåŽåªåŽ¿", 533224: "äº‘å—çœä¸½æ±Ÿåœ°åŒºå®è’—å½æ—è‡ªæ²»åŽ¿", 533300: "äº‘å—çœæ€’æ±Ÿå‚ˆåƒ³æ—è‡ªæ²»å·ž", 533321: "äº‘å—çœæ€’æ±Ÿå‚ˆåƒ³æ—è‡ªæ²»å·žæ³¸æ°´åŽ¿", 533323: "äº‘å—çœæ€’æ±Ÿå‚ˆåƒ³æ—è‡ªæ²»å·žç¦è´¡åŽ¿", 533324: "äº‘å—çœæ€’æ±Ÿå‚ˆåƒ³æ—è‡ªæ²»å·žè´¡å±±ç‹¬é¾™æ—æ€’æ—è‡ªæ²»åŽ¿", 533325: "äº‘å—çœæ€’æ±Ÿå‚ˆåƒ³æ—è‡ªæ²»å·žå…°åªç™½æ—æ™®ç±³æ—è‡ªæ²»åŽ¿", 533400: "äº‘å—çœè¿ªåº†è—æ—è‡ªæ²»å·ž", 533421: "äº‘å—çœè¿ªåº†è—æ—è‡ªæ²»å·žä¸­ç”¸åŽ¿", 533422: "äº‘å—çœè¿ªåº†è—æ—è‡ªæ²»å·žå¾·é’¦åŽ¿", 533423: "äº‘å—çœè¿ªåº†è—æ—è‡ªæ²»å·žç»´è¥¿å‚ˆåƒ³æ—è‡ªæ²»åŽ¿", 533500: "äº‘å—çœä¸´æ²§åœ°åŒº", 533521: "äº‘å—çœä¸´æ²§åœ°åŒºä¸´æ²§åŽ¿", 533522: "äº‘å—çœä¸´æ²§åœ°åŒºå‡¤åº†åŽ¿", 533523: "äº‘å—çœä¸´æ²§åœ°åŒºäº‘åŽ¿", 533524: "äº‘å—çœä¸´æ²§åœ°åŒºæ°¸å¾·åŽ¿", 533525: "äº‘å—çœä¸´æ²§åœ°åŒºé•‡åº·åŽ¿", 533526: "äº‘å—çœä¸´æ²§åœ°åŒºåŒæ±Ÿæ‹‰ç¥œæ—ä½¤æ—å¸ƒæœ—æ—å‚£æ—è‡ªæ²»åŽ¿", 533527: "äº‘å—çœä¸´æ²§åœ°åŒºè€¿é©¬å‚£æ—ä½¤æ—è‡ªæ²»åŽ¿", 533528: "äº‘å—çœä¸´æ²§åœ°åŒºæ²§æºä½¤æ—è‡ªæ²»åŽ¿", 54e4: "è¥¿è—è‡ªæ²»åŒº", 540100: "è¥¿è—è‡ªæ²»åŒºæ‹‰è¨å¸‚", 540101: "è¥¿è—è‡ªæ²»åŒºæ‹‰è¨å¸‚å¸‚è¾–åŒº", 540102: "è¥¿è—è‡ªæ²»åŒºæ‹‰è¨å¸‚åŸŽå…³åŒº", 540121: "è¥¿è—è‡ªæ²»åŒºæ‹‰è¨å¸‚æž—å‘¨åŽ¿", 540122: "è¥¿è—è‡ªæ²»åŒºæ‹‰è¨å¸‚å½“é›„åŽ¿", 540123: "è¥¿è—è‡ªæ²»åŒºæ‹‰è¨å¸‚å°¼æœ¨åŽ¿", 540124: "è¥¿è—è‡ªæ²»åŒºæ‹‰è¨å¸‚æ›²æ°´åŽ¿", 540125: "è¥¿è—è‡ªæ²»åŒºæ‹‰è¨å¸‚å †é¾™å¾·åº†åŽ¿", 540126: "è¥¿è—è‡ªæ²»åŒºæ‹‰è¨å¸‚è¾¾å­œåŽ¿", 540127: "è¥¿è—è‡ªæ²»åŒºæ‹‰è¨å¸‚å¢¨ç«¹å·¥å¡åŽ¿", 542100: "è¥¿è—è‡ªæ²»åŒºæ˜Œéƒ½åœ°åŒº", 542121: "è¥¿è—è‡ªæ²»åŒºæ˜Œéƒ½åœ°åŒºæ˜Œéƒ½åŽ¿", 542122: "è¥¿è—è‡ªæ²»åŒºæ˜Œéƒ½åœ°åŒºæ±Ÿè¾¾åŽ¿", 542123: "è¥¿è—è‡ªæ²»åŒºæ˜Œéƒ½åœ°åŒºè´¡è§‰åŽ¿", 542124: "è¥¿è—è‡ªæ²»åŒºæ˜Œéƒ½åœ°åŒºç±»ä¹Œé½åŽ¿", 542125: "è¥¿è—è‡ªæ²»åŒºæ˜Œéƒ½åœ°åŒºä¸é’åŽ¿", 542126: "è¥¿è—è‡ªæ²»åŒºæ˜Œéƒ½åœ°åŒºå¯Ÿé›…åŽ¿", 542127: "è¥¿è—è‡ªæ²»åŒºæ˜Œéƒ½åœ°åŒºå…«å®¿åŽ¿", 542128: "è¥¿è—è‡ªæ²»åŒºæ˜Œéƒ½åœ°åŒºå·¦è´¡åŽ¿", 542129: "è¥¿è—è‡ªæ²»åŒºæ˜Œéƒ½åœ°åŒºèŠ’åº·åŽ¿", 542132: "è¥¿è—è‡ªæ²»åŒºæ˜Œéƒ½åœ°åŒºæ´›éš†åŽ¿", 542133: "è¥¿è—è‡ªæ²»åŒºæ˜Œéƒ½åœ°åŒºè¾¹ååŽ¿", 542134: "è¥¿è—è‡ªæ²»åŒºæ˜Œéƒ½åœ°åŒºç›äº•åŽ¿", 542135: "è¥¿è—è‡ªæ²»åŒºæ˜Œéƒ½åœ°åŒºç¢§åœŸåŽ¿", 542136: "è¥¿è—è‡ªæ²»åŒºæ˜Œéƒ½åœ°åŒºå¦¥ååŽ¿", 542137: "è¥¿è—è‡ªæ²»åŒºæ˜Œéƒ½åœ°åŒºç”Ÿè¾¾åŽ¿", 542200: "è¥¿è—è‡ªæ²»åŒºå±±å—åœ°åŒº", 542221: "è¥¿è—è‡ªæ²»åŒºå±±å—åœ°åŒºä¹ƒä¸œåŽ¿", 542222: "è¥¿è—è‡ªæ²»åŒºå±±å—åœ°åŒºæ‰Žå›ŠåŽ¿", 542223: "è¥¿è—è‡ªæ²»åŒºå±±å—åœ°åŒºè´¡å˜ŽåŽ¿", 542224: "è¥¿è—è‡ªæ²»åŒºå±±å—åœ°åŒºæ¡‘æ—¥åŽ¿", 542225: "è¥¿è—è‡ªæ²»åŒºå±±å—åœ°åŒºç¼ç»“åŽ¿", 542226: "è¥¿è—è‡ªæ²»åŒºå±±å—åœ°åŒºæ›²æ¾åŽ¿", 542227: "è¥¿è—è‡ªæ²»åŒºå±±å—åœ°åŒºæŽªç¾ŽåŽ¿", 542228: "è¥¿è—è‡ªæ²»åŒºå±±å—åœ°åŒºæ´›æ‰ŽåŽ¿", 542229: "è¥¿è—è‡ªæ²»åŒºå±±å—åœ°åŒºåŠ æŸ¥åŽ¿", 542231: "è¥¿è—è‡ªæ²»åŒºå±±å—åœ°åŒºéš†å­åŽ¿", 542232: "è¥¿è—è‡ªæ²»åŒºå±±å—åœ°åŒºé”™é‚£åŽ¿", 542233: "è¥¿è—è‡ªæ²»åŒºå±±å—åœ°åŒºæµªå¡å­åŽ¿", 542300: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒº", 542301: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºæ—¥å–€åˆ™å¸‚", 542322: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºå—æœ¨æž—åŽ¿", 542323: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºæ±Ÿå­œåŽ¿", 542324: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºå®šæ—¥åŽ¿", 542325: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºè¨è¿¦åŽ¿", 542326: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºæ‹‰å­œåŽ¿", 542327: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºæ˜‚ä»åŽ¿", 542328: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºè°¢é€šé—¨åŽ¿", 542329: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºç™½æœ—åŽ¿", 542330: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºä»å¸ƒåŽ¿", 542331: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºåº·é©¬åŽ¿", 542332: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºå®šç»“åŽ¿", 542333: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºä»²å·´åŽ¿", 542334: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºäºšä¸œåŽ¿", 542335: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºå‰éš†åŽ¿", 542336: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºè‚æ‹‰æœ¨åŽ¿", 542337: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºè¨å˜ŽåŽ¿", 542338: "è¥¿è—è‡ªæ²»åŒºæ—¥å–€åˆ™åœ°åŒºå²—å·´åŽ¿", 542400: "è¥¿è—è‡ªæ²»åŒºé‚£æ›²åœ°åŒº", 542421: "è¥¿è—è‡ªæ²»åŒºé‚£æ›²åœ°åŒºé‚£æ›²åŽ¿", 542422: "è¥¿è—è‡ªæ²»åŒºé‚£æ›²åœ°åŒºå˜‰é»ŽåŽ¿", 542423: "è¥¿è—è‡ªæ²»åŒºé‚£æ›²åœ°åŒºæ¯”å¦‚åŽ¿", 542424: "è¥¿è—è‡ªæ²»åŒºé‚£æ›²åœ°åŒºè‚è£åŽ¿", 542425: "è¥¿è—è‡ªæ²»åŒºé‚£æ›²åœ°åŒºå®‰å¤šåŽ¿", 542426: "è¥¿è—è‡ªæ²»åŒºé‚£æ›²åœ°åŒºç”³æ‰ŽåŽ¿", 542427: "è¥¿è—è‡ªæ²»åŒºé‚£æ›²åœ°åŒºç´¢åŽ¿", 542428: "è¥¿è—è‡ªæ²»åŒºé‚£æ›²åœ°åŒºç­æˆˆåŽ¿", 542429: "è¥¿è—è‡ªæ²»åŒºé‚£æ›²åœ°åŒºå·´é’åŽ¿", 542430: "è¥¿è—è‡ªæ²»åŒºé‚£æ›²åœ°åŒºå°¼çŽ›åŽ¿", 542500: "è¥¿è—è‡ªæ²»åŒºé˜¿é‡Œåœ°åŒº", 542521: "è¥¿è—è‡ªæ²»åŒºé˜¿é‡Œåœ°åŒºæ™®å…°åŽ¿", 542522: "è¥¿è—è‡ªæ²»åŒºé˜¿é‡Œåœ°åŒºæœ­è¾¾åŽ¿", 542523: "è¥¿è—è‡ªæ²»åŒºé˜¿é‡Œåœ°åŒºå™¶å°”åŽ¿", 542524: "è¥¿è—è‡ªæ²»åŒºé˜¿é‡Œåœ°åŒºæ—¥åœŸåŽ¿", 542525: "è¥¿è—è‡ªæ²»åŒºé˜¿é‡Œåœ°åŒºé©å‰åŽ¿", 542526: "è¥¿è—è‡ªæ²»åŒºé˜¿é‡Œåœ°åŒºæ”¹åˆ™åŽ¿", 542527: "è¥¿è—è‡ªæ²»åŒºé˜¿é‡Œåœ°åŒºæŽªå‹¤åŽ¿", 542528: "è¥¿è—è‡ªæ²»åŒºé˜¿é‡Œåœ°åŒºéš†æ ¼å°”åŽ¿", 542600: "è¥¿è—è‡ªæ²»åŒºæž—èŠåœ°åŒº", 542621: "è¥¿è—è‡ªæ²»åŒºæž—èŠåœ°åŒºæž—èŠåŽ¿", 542622: "è¥¿è—è‡ªæ²»åŒºæž—èŠåœ°åŒºå·¥å¸ƒæ±Ÿè¾¾åŽ¿", 542623: "è¥¿è—è‡ªæ²»åŒºæž—èŠåœ°åŒºç±³æž—åŽ¿", 542624: "è¥¿è—è‡ªæ²»åŒºæž—èŠåœ°åŒºå¢¨è„±åŽ¿", 542625: "è¥¿è—è‡ªæ²»åŒºæž—èŠåœ°åŒºæ³¢å¯†åŽ¿", 542626: "è¥¿è—è‡ªæ²»åŒºæž—èŠåœ°åŒºå¯Ÿéš…åŽ¿", 542627: "è¥¿è—è‡ªæ²»åŒºæž—èŠåœ°åŒºæœ—åŽ¿", 61e4: "é™•è¥¿çœ", 610100: "é™•è¥¿çœè¥¿å®‰å¸‚", 610101: "é™•è¥¿çœè¥¿å®‰å¸‚å¸‚è¾–åŒº", 610102: "é™•è¥¿çœè¥¿å®‰å¸‚æ–°åŸŽåŒº", 610103: "é™•è¥¿çœè¥¿å®‰å¸‚ç¢‘æž—åŒº", 610104: "é™•è¥¿çœè¥¿å®‰å¸‚èŽ²æ¹–åŒº", 610111: "é™•è¥¿çœè¥¿å®‰å¸‚çžæ¡¥åŒº", 610112: "é™•è¥¿çœè¥¿å®‰å¸‚æœªå¤®åŒº", 610113: "é™•è¥¿çœè¥¿å®‰å¸‚é›å¡”åŒº", 610114: "é™•è¥¿çœè¥¿å®‰å¸‚é˜Žè‰¯åŒº", 610115: "é™•è¥¿çœè¥¿å®‰å¸‚ä¸´æ½¼åŒº", 610121: "é™•è¥¿çœè¥¿å®‰å¸‚é•¿å®‰åŽ¿", 610122: "é™•è¥¿çœè¥¿å®‰å¸‚è“ç”°åŽ¿", 610124: "é™•è¥¿çœè¥¿å®‰å¸‚å‘¨è‡³åŽ¿", 610125: "é™•è¥¿çœè¥¿å®‰å¸‚æˆ·åŽ¿", 610126: "é™•è¥¿çœè¥¿å®‰å¸‚é«˜é™µåŽ¿", 610200: "é™•è¥¿çœé“œå·å¸‚", 610201: "é™•è¥¿çœé“œå·å¸‚å¸‚è¾–åŒº", 610202: "é™•è¥¿çœé“œå·å¸‚åŸŽåŒº", 610203: "é™•è¥¿çœé“œå·å¸‚éƒŠåŒº", 610221: "é™•è¥¿çœé“œå·å¸‚è€€åŽ¿", 610222: "é™•è¥¿çœé“œå·å¸‚å®œå›åŽ¿", 610300: "é™•è¥¿çœå®é¸¡å¸‚", 610301: "é™•è¥¿çœå®é¸¡å¸‚å¸‚è¾–åŒº", 610302: "é™•è¥¿çœå®é¸¡å¸‚æ¸­æ»¨åŒº", 610303: "é™•è¥¿çœå®é¸¡å¸‚é‡‘å°åŒº", 610321: "é™•è¥¿çœå®é¸¡å¸‚å®é¸¡åŽ¿", 610322: "é™•è¥¿çœå®é¸¡å¸‚å‡¤ç¿”åŽ¿", 610323: "é™•è¥¿çœå®é¸¡å¸‚å²å±±åŽ¿", 610324: "é™•è¥¿çœå®é¸¡å¸‚æ‰¶é£ŽåŽ¿", 610326: "é™•è¥¿çœå®é¸¡å¸‚çœ‰åŽ¿", 610327: "é™•è¥¿çœå®é¸¡å¸‚é™‡åŽ¿", 610328: "é™•è¥¿çœå®é¸¡å¸‚åƒé˜³åŽ¿", 610329: "é™•è¥¿çœå®é¸¡å¸‚éºŸæ¸¸åŽ¿", 610330: "é™•è¥¿çœå®é¸¡å¸‚å‡¤åŽ¿", 610331: "é™•è¥¿çœå®é¸¡å¸‚å¤ªç™½åŽ¿", 610400: "é™•è¥¿çœå’¸é˜³å¸‚", 610401: "é™•è¥¿çœå’¸é˜³å¸‚å¸‚è¾–åŒº", 610402: "é™•è¥¿çœå’¸é˜³å¸‚ç§¦éƒ½åŒº", 610403: "é™•è¥¿çœå’¸é˜³å¸‚æ¨é™µåŒº", 610404: "é™•è¥¿çœå’¸é˜³å¸‚æ¸­åŸŽåŒº", 610422: "é™•è¥¿çœå’¸é˜³å¸‚ä¸‰åŽŸåŽ¿", 610423: "é™•è¥¿çœå’¸é˜³å¸‚æ³¾é˜³åŽ¿", 610424: "é™•è¥¿çœå’¸é˜³å¸‚ä¹¾åŽ¿", 610425: "é™•è¥¿çœå’¸é˜³å¸‚ç¤¼æ³‰åŽ¿", 610426: "é™•è¥¿çœå’¸é˜³å¸‚æ°¸å¯¿åŽ¿", 610427: "é™•è¥¿çœå’¸é˜³å¸‚å½¬åŽ¿", 610428: "é™•è¥¿çœå’¸é˜³å¸‚é•¿æ­¦åŽ¿", 610429: "é™•è¥¿çœå’¸é˜³å¸‚æ—¬é‚‘åŽ¿", 610430: "é™•è¥¿çœå’¸é˜³å¸‚æ·³åŒ–åŽ¿", 610431: "é™•è¥¿çœå’¸é˜³å¸‚æ­¦åŠŸåŽ¿", 610481: "é™•è¥¿çœå’¸é˜³å¸‚å…´å¹³å¸‚", 610500: "é™•è¥¿çœæ¸­å—å¸‚", 610501: "é™•è¥¿çœæ¸­å—å¸‚å¸‚è¾–åŒº", 610502: "é™•è¥¿çœæ¸­å—å¸‚ä¸´æ¸­åŒº", 610521: "é™•è¥¿çœæ¸­å—å¸‚åŽåŽ¿", 610522: "é™•è¥¿çœæ¸­å—å¸‚æ½¼å…³åŽ¿", 610523: "é™•è¥¿çœæ¸­å—å¸‚å¤§è”åŽ¿", 610524: "é™•è¥¿çœæ¸­å—å¸‚åˆé˜³åŽ¿", 610525: "é™•è¥¿çœæ¸­å—å¸‚æ¾„åŸŽåŽ¿", 610526: "é™•è¥¿çœæ¸­å—å¸‚è’²åŸŽåŽ¿", 610527: "é™•è¥¿çœæ¸­å—å¸‚ç™½æ°´åŽ¿", 610528: "é™•è¥¿çœæ¸­å—å¸‚å¯Œå¹³åŽ¿", 610581: "é™•è¥¿çœæ¸­å—å¸‚éŸ©åŸŽå¸‚", 610582: "é™•è¥¿çœæ¸­å—å¸‚åŽé˜´å¸‚", 610600: "é™•è¥¿çœå»¶å®‰å¸‚", 610601: "é™•è¥¿çœå»¶å®‰å¸‚å¸‚è¾–åŒº", 610602: "é™•è¥¿çœå»¶å®‰å¸‚å®å¡”åŒº", 610621: "é™•è¥¿çœå»¶å®‰å¸‚å»¶é•¿åŽ¿", 610622: "é™•è¥¿çœå»¶å®‰å¸‚å»¶å·åŽ¿", 610623: "é™•è¥¿çœå»¶å®‰å¸‚å­é•¿åŽ¿", 610624: "é™•è¥¿çœå»¶å®‰å¸‚å®‰å¡žåŽ¿", 610625: "é™•è¥¿çœå»¶å®‰å¸‚å¿—ä¸¹åŽ¿", 610626: "é™•è¥¿çœå»¶å®‰å¸‚å´æ——åŽ¿", 610627: "é™•è¥¿çœå»¶å®‰å¸‚ç”˜æ³‰åŽ¿", 610628: "é™•è¥¿çœå»¶å®‰å¸‚å¯ŒåŽ¿", 610629: "é™•è¥¿çœå»¶å®‰å¸‚æ´›å·åŽ¿", 610630: "é™•è¥¿çœå»¶å®‰å¸‚å®œå·åŽ¿", 610631: "é™•è¥¿çœå»¶å®‰å¸‚é»„é¾™åŽ¿", 610632: "é™•è¥¿çœå»¶å®‰å¸‚é»„é™µåŽ¿", 610700: "é™•è¥¿çœæ±‰ä¸­å¸‚", 610701: "é™•è¥¿çœæ±‰ä¸­å¸‚å¸‚è¾–åŒº", 610702: "é™•è¥¿çœæ±‰ä¸­å¸‚æ±‰å°åŒº", 610721: "é™•è¥¿çœæ±‰ä¸­å¸‚å—éƒ‘åŽ¿", 610722: "é™•è¥¿çœæ±‰ä¸­å¸‚åŸŽå›ºåŽ¿", 610723: "é™•è¥¿çœæ±‰ä¸­å¸‚æ´‹åŽ¿", 610724: "é™•è¥¿çœæ±‰ä¸­å¸‚è¥¿ä¹¡åŽ¿", 610725: "é™•è¥¿çœæ±‰ä¸­å¸‚å‹‰åŽ¿", 610726: "é™•è¥¿çœæ±‰ä¸­å¸‚å®å¼ºåŽ¿", 610727: "é™•è¥¿çœæ±‰ä¸­å¸‚ç•¥é˜³åŽ¿", 610728: "é™•è¥¿çœæ±‰ä¸­å¸‚é•‡å·´åŽ¿", 610729: "é™•è¥¿çœæ±‰ä¸­å¸‚ç•™ååŽ¿", 610730: "é™•è¥¿çœæ±‰ä¸­å¸‚ä½›åªåŽ¿", 612400: "é™•è¥¿çœå®‰åº·åœ°åŒº", 612401: "é™•è¥¿çœå®‰åº·åœ°åŒºå®‰åº·å¸‚", 612422: "é™•è¥¿çœå®‰åº·åœ°åŒºæ±‰é˜´åŽ¿", 612423: "é™•è¥¿çœå®‰åº·åœ°åŒºçŸ³æ³‰åŽ¿", 612424: "é™•è¥¿çœå®‰åº·åœ°åŒºå®é™•åŽ¿", 612425: "é™•è¥¿çœå®‰åº·åœ°åŒºç´«é˜³åŽ¿", 612426: "é™•è¥¿çœå®‰åº·åœ°åŒºå²šçš‹åŽ¿", 612427: "é™•è¥¿çœå®‰åº·åœ°åŒºå¹³åˆ©åŽ¿", 612428: "é™•è¥¿çœå®‰åº·åœ°åŒºé•‡åªåŽ¿", 612429: "é™•è¥¿çœå®‰åº·åœ°åŒºæ—¬é˜³åŽ¿", 612430: "é™•è¥¿çœå®‰åº·åœ°åŒºç™½æ²³åŽ¿", 612500: "é™•è¥¿çœå•†æ´›åœ°åŒº", 612501: "é™•è¥¿çœå•†æ´›åœ°åŒºå•†å·žå¸‚", 612522: "é™•è¥¿çœå•†æ´›åœ°åŒºæ´›å—åŽ¿", 612523: "é™•è¥¿çœå•†æ´›åœ°åŒºä¸¹å‡¤åŽ¿", 612524: "é™•è¥¿çœå•†æ´›åœ°åŒºå•†å—åŽ¿", 612525: "é™•è¥¿çœå•†æ´›åœ°åŒºå±±é˜³åŽ¿", 612526: "é™•è¥¿çœå•†æ´›åœ°åŒºé•‡å®‰åŽ¿", 612527: "é™•è¥¿çœå•†æ´›åœ°åŒºæŸžæ°´åŽ¿", 612700: "é™•è¥¿çœæ¦†æž—åœ°åŒº", 612701: "é™•è¥¿çœæ¦†æž—åœ°åŒºæ¦†æž—å¸‚", 612722: "é™•è¥¿çœæ¦†æž—åœ°åŒºç¥žæœ¨åŽ¿", 612723: "é™•è¥¿çœæ¦†æž—åœ°åŒºåºœè°·åŽ¿", 612724: "é™•è¥¿çœæ¦†æž—åœ°åŒºæ¨ªå±±åŽ¿", 612725: "é™•è¥¿çœæ¦†æž—åœ°åŒºé–è¾¹åŽ¿", 612726: "é™•è¥¿çœæ¦†æž—åœ°åŒºå®šè¾¹åŽ¿", 612727: "é™•è¥¿çœæ¦†æž—åœ°åŒºç»¥å¾·åŽ¿", 612728: "é™•è¥¿çœæ¦†æž—åœ°åŒºç±³è„‚åŽ¿", 612729: "é™•è¥¿çœæ¦†æž—åœ°åŒºä½³åŽ¿", 612730: "é™•è¥¿çœæ¦†æž—åœ°åŒºå´å ¡åŽ¿", 612731: "é™•è¥¿çœæ¦†æž—åœ°åŒºæ¸…æ¶§åŽ¿", 612732: "é™•è¥¿çœæ¦†æž—åœ°åŒºå­æ´²åŽ¿", 62e4: "ç”˜è‚ƒçœ", 620100: "ç”˜è‚ƒçœå…°å·žå¸‚", 620101: "ç”˜è‚ƒçœå…°å·žå¸‚å¸‚è¾–åŒº", 620102: "ç”˜è‚ƒçœå…°å·žå¸‚åŸŽå…³åŒº", 620103: "ç”˜è‚ƒçœå…°å·žå¸‚ä¸ƒé‡Œæ²³åŒº", 620104: "ç”˜è‚ƒçœå…°å·žå¸‚è¥¿å›ºåŒº", 620105: "ç”˜è‚ƒçœå…°å·žå¸‚å®‰å®åŒº", 620111: "ç”˜è‚ƒçœå…°å·žå¸‚çº¢å¤åŒº", 620121: "ç”˜è‚ƒçœå…°å·žå¸‚æ°¸ç™»åŽ¿", 620122: "ç”˜è‚ƒçœå…°å·žå¸‚çš‹å…°åŽ¿", 620123: "ç”˜è‚ƒçœå…°å·žå¸‚æ¦†ä¸­åŽ¿", 620200: "ç”˜è‚ƒçœå˜‰å³ªå…³å¸‚", 620201: "ç”˜è‚ƒçœå˜‰å³ªå…³å¸‚å¸‚è¾–åŒº", 620300: "ç”˜è‚ƒçœå˜‰å³ªå…³å¸‚é‡‘æ˜Œå¸‚", 620301: "ç”˜è‚ƒçœå˜‰å³ªå…³å¸‚å¸‚è¾–åŒº", 620302: "ç”˜è‚ƒçœå˜‰å³ªå…³å¸‚é‡‘å·åŒº", 620321: "ç”˜è‚ƒçœå˜‰å³ªå…³å¸‚æ°¸æ˜ŒåŽ¿", 620400: "ç”˜è‚ƒçœç™½é“¶å¸‚", 620401: "ç”˜è‚ƒçœç™½é“¶å¸‚å¸‚è¾–åŒº", 620402: "ç”˜è‚ƒçœç™½é“¶å¸‚ç™½é“¶åŒº", 620403: "ç”˜è‚ƒçœç™½é“¶å¸‚å¹³å·åŒº", 620421: "ç”˜è‚ƒçœç™½é“¶å¸‚é–è¿œåŽ¿", 620422: "ç”˜è‚ƒçœç™½é“¶å¸‚ä¼šå®åŽ¿", 620423: "ç”˜è‚ƒçœç™½é“¶å¸‚æ™¯æ³°åŽ¿", 620500: "ç”˜è‚ƒçœå¤©æ°´å¸‚", 620501: "ç”˜è‚ƒçœå¤©æ°´å¸‚å¸‚è¾–åŒº", 620502: "ç”˜è‚ƒçœå¤©æ°´å¸‚ç§¦åŸŽåŒº", 620503: "ç”˜è‚ƒçœå¤©æ°´å¸‚åŒ—é“åŒº", 620521: "ç”˜è‚ƒçœå¤©æ°´å¸‚æ¸…æ°´åŽ¿", 620522: "ç”˜è‚ƒçœå¤©æ°´å¸‚ç§¦å®‰åŽ¿", 620523: "ç”˜è‚ƒçœå¤©æ°´å¸‚ç”˜è°·åŽ¿", 620524: "ç”˜è‚ƒçœå¤©æ°´å¸‚æ­¦å±±åŽ¿", 620525: "ç”˜è‚ƒçœå¤©æ°´å¸‚å¼ å®¶å·å›žæ—è‡ªæ²»åŽ¿", 622100: "ç”˜è‚ƒçœé…’æ³‰åœ°åŒº", 622101: "ç”˜è‚ƒçœé…’æ³‰åœ°åŒºçŽ‰é—¨å¸‚", 622102: "ç”˜è‚ƒçœé…’æ³‰åœ°åŒºé…’æ³‰å¸‚", 622103: "ç”˜è‚ƒçœé…’æ³‰åœ°åŒºæ•¦ç…Œå¸‚", 622123: "ç”˜è‚ƒçœé…’æ³‰åœ°åŒºé‡‘å¡”åŽ¿", 622124: "ç”˜è‚ƒçœé…’æ³‰åœ°åŒºè‚ƒåŒ—è’™å¤æ—è‡ªæ²»åŽ¿", 622125: "ç”˜è‚ƒçœé…’æ³‰åœ°åŒºé˜¿å…‹å¡žå“ˆè¨å…‹æ—è‡ªæ²»åŽ¿", 622126: "ç”˜è‚ƒçœé…’æ³‰åœ°åŒºå®‰è¥¿åŽ¿", 622200: "ç”˜è‚ƒçœå¼ æŽ–åœ°åŒº", 622201: "ç”˜è‚ƒçœå¼ æŽ–åœ°åŒºå¼ æŽ–å¸‚", 622222: "ç”˜è‚ƒçœå¼ æŽ–åœ°åŒºè‚ƒå—è£•å›ºæ—è‡ªæ²»åŽ¿", 622223: "ç”˜è‚ƒçœå¼ æŽ–åœ°åŒºæ°‘ä¹åŽ¿", 622224: "ç”˜è‚ƒçœå¼ æŽ–åœ°åŒºä¸´æ³½åŽ¿", 622225: "ç”˜è‚ƒçœå¼ æŽ–åœ°åŒºé«˜å°åŽ¿", 622226: "ç”˜è‚ƒçœå¼ æŽ–åœ°åŒºå±±ä¸¹åŽ¿", 622300: "ç”˜è‚ƒçœæ­¦å¨åœ°åŒº", 622301: "ç”˜è‚ƒçœæ­¦å¨åœ°åŒºæ­¦å¨å¸‚", 622322: "ç”˜è‚ƒçœæ­¦å¨åœ°åŒºæ°‘å‹¤åŽ¿", 622323: "ç”˜è‚ƒçœæ­¦å¨åœ°åŒºå¤æµªåŽ¿", 622326: "ç”˜è‚ƒçœæ­¦å¨åœ°åŒºå¤©ç¥è—æ—è‡ªæ²»åŽ¿", 622400: "ç”˜è‚ƒçœå®šè¥¿åœ°åŒº", 622421: "ç”˜è‚ƒçœå®šè¥¿åœ°åŒºå®šè¥¿åŽ¿", 622424: "ç”˜è‚ƒçœå®šè¥¿åœ°åŒºé€šæ¸­åŽ¿", 622425: "ç”˜è‚ƒçœå®šè¥¿åœ°åŒºé™‡è¥¿åŽ¿", 622426: "ç”˜è‚ƒçœå®šè¥¿åœ°åŒºæ¸­æºåŽ¿", 622427: "ç”˜è‚ƒçœå®šè¥¿åœ°åŒºä¸´æ´®åŽ¿", 622428: "ç”˜è‚ƒçœå®šè¥¿åœ°åŒºæ¼³åŽ¿", 622429: "ç”˜è‚ƒçœå®šè¥¿åœ°åŒºå²·åŽ¿", 622600: "ç”˜è‚ƒçœé™‡å—åœ°åŒº", 622621: "ç”˜è‚ƒçœé™‡å—åœ°åŒºæ­¦éƒ½åŽ¿", 622623: "ç”˜è‚ƒçœé™‡å—åœ°åŒºå®•æ˜ŒåŽ¿", 622624: "ç”˜è‚ƒçœé™‡å—åœ°åŒºæˆåŽ¿", 622625: "ç”˜è‚ƒçœé™‡å—åœ°åŒºåº·åŽ¿", 622626: "ç”˜è‚ƒçœé™‡å—åœ°åŒºæ–‡åŽ¿", 622627: "ç”˜è‚ƒçœé™‡å—åœ°åŒºè¥¿å’ŒåŽ¿", 622628: "ç”˜è‚ƒçœé™‡å—åœ°åŒºç¤¼åŽ¿", 622629: "ç”˜è‚ƒçœé™‡å—åœ°åŒºä¸¤å½“åŽ¿", 622630: "ç”˜è‚ƒçœé™‡å—åœ°åŒºå¾½åŽ¿", 622700: "ç”˜è‚ƒçœå¹³å‡‰åœ°åŒº", 622701: "ç”˜è‚ƒçœå¹³å‡‰åœ°åŒºå¹³å‡‰å¸‚", 622722: "ç”˜è‚ƒçœå¹³å‡‰åœ°åŒºæ³¾å·åŽ¿", 622723: "ç”˜è‚ƒçœå¹³å‡‰åœ°åŒºçµå°åŽ¿", 622724: "ç”˜è‚ƒçœå¹³å‡‰åœ°åŒºå´‡ä¿¡åŽ¿", 622725: "ç”˜è‚ƒçœå¹³å‡‰åœ°åŒºåŽäº­åŽ¿", 622726: "ç”˜è‚ƒçœå¹³å‡‰åœ°åŒºåº„æµªåŽ¿", 622727: "ç”˜è‚ƒçœå¹³å‡‰åœ°åŒºé™å®åŽ¿", 622800: "ç”˜è‚ƒçœåº†é˜³åœ°åŒº", 622801: "ç”˜è‚ƒçœåº†é˜³åœ°åŒºè¥¿å³°å¸‚", 622821: "ç”˜è‚ƒçœåº†é˜³åœ°åŒºåº†é˜³åŽ¿", 622822: "ç”˜è‚ƒçœåº†é˜³åœ°åŒºçŽ¯åŽ¿", 622823: "ç”˜è‚ƒçœåº†é˜³åœ°åŒºåŽæ± åŽ¿", 622824: "ç”˜è‚ƒçœåº†é˜³åœ°åŒºåˆæ°´åŽ¿", 622825: "ç”˜è‚ƒçœåº†é˜³åœ°åŒºæ­£å®åŽ¿", 622826: "ç”˜è‚ƒçœåº†é˜³åœ°åŒºå®åŽ¿", 622827: "ç”˜è‚ƒçœåº†é˜³åœ°åŒºé•‡åŽŸåŽ¿", 622900: "ç”˜è‚ƒçœä¸´å¤å›žæ—è‡ªæ²»å·ž", 622901: "ç”˜è‚ƒçœä¸´å¤å›žæ—è‡ªæ²»å·žä¸´å¤å¸‚", 622921: "ç”˜è‚ƒçœä¸´å¤å›žæ—è‡ªæ²»å·žä¸´å¤åŽ¿", 622922: "ç”˜è‚ƒçœä¸´å¤å›žæ—è‡ªæ²»å·žåº·ä¹åŽ¿", 622923: "ç”˜è‚ƒçœä¸´å¤å›žæ—è‡ªæ²»å·žæ°¸é–åŽ¿", 622924: "ç”˜è‚ƒçœä¸´å¤å›žæ—è‡ªæ²»å·žå¹¿æ²³åŽ¿", 622925: "ç”˜è‚ƒçœä¸´å¤å›žæ—è‡ªæ²»å·žå’Œæ”¿åŽ¿", 622926: "ç”˜è‚ƒçœä¸´å¤å›žæ—è‡ªæ²»å·žä¸œä¹¡æ—è‡ªæ²»åŽ¿", 622927: "ç”˜è‚ƒçœä¸´å¤å›žæ—è‡ªæ²»å·žç§¯çŸ³å±±ä¿å®‰æ—ä¸œä¹¡æ—æ’’æ‹‰æ—è‡ªæ²»åŽ¿", 623e3: "ç”˜è‚ƒçœç”˜å—è—æ—è‡ªæ²»å·ž", 623001: "ç”˜è‚ƒçœç”˜å—è—æ—è‡ªæ²»å·žåˆä½œå¸‚", 623021: "ç”˜è‚ƒçœç”˜å—è—æ—è‡ªæ²»å·žä¸´æ½­åŽ¿", 623022: "ç”˜è‚ƒçœç”˜å—è—æ—è‡ªæ²»å·žå“å°¼åŽ¿", 623023: "ç”˜è‚ƒçœç”˜å—è—æ—è‡ªæ²»å·žèˆŸæ›²åŽ¿", 623024: "ç”˜è‚ƒçœç”˜å—è—æ—è‡ªæ²»å·žè¿­éƒ¨åŽ¿", 623025: "ç”˜è‚ƒçœç”˜å—è—æ—è‡ªæ²»å·žçŽ›æ›²åŽ¿", 623026: "ç”˜è‚ƒçœç”˜å—è—æ—è‡ªæ²»å·žç¢Œæ›²åŽ¿", 623027: "ç”˜è‚ƒçœç”˜å—è—æ—è‡ªæ²»å·žå¤æ²³åŽ¿", 63e4: "é’æµ·çœ", 630100: "é’æµ·çœè¥¿å®å¸‚", 630101: "é’æµ·çœè¥¿å®å¸‚å¸‚è¾–åŒº", 630102: "é’æµ·çœè¥¿å®å¸‚åŸŽä¸œåŒº", 630103: "é’æµ·çœè¥¿å®å¸‚åŸŽä¸­åŒº", 630104: "é’æµ·çœè¥¿å®å¸‚åŸŽè¥¿åŒº", 630105: "é’æµ·çœè¥¿å®å¸‚åŸŽåŒ—åŒº", 630121: "é’æµ·çœè¥¿å®å¸‚å¤§é€šå›žæ—åœŸæ—è‡ªæ²»åŽ¿", 632100: "é’æµ·çœæµ·ä¸œåœ°åŒº", 632121: "é’æµ·çœæµ·ä¸œåœ°åŒºå¹³å®‰åŽ¿", 632122: "é’æµ·çœæµ·ä¸œåœ°åŒºæ°‘å’Œå›žæ—åœŸæ—è‡ªæ²»åŽ¿", 632123: "é’æµ·çœæµ·ä¸œåœ°åŒºä¹éƒ½åŽ¿", 632124: "é’æµ·çœæµ·ä¸œåœ°åŒºæ¹Ÿä¸­åŽ¿", 632125: "é’æµ·çœæµ·ä¸œåœ°åŒºæ¹ŸæºåŽ¿", 632126: "é’æµ·çœæµ·ä¸œåœ°åŒºäº’åŠ©åœŸæ—è‡ªæ²»åŽ¿", 632127: "é’æµ·çœæµ·ä¸œåœ°åŒºåŒ–éš†å›žæ—è‡ªæ²»åŽ¿", 632128: "é’æµ·çœæµ·ä¸œåœ°åŒºå¾ªåŒ–æ’’æ‹‰æ—è‡ªæ²»åŽ¿", 632200: "é’æµ·çœæµ·åŒ—è—æ—è‡ªæ²»å·ž", 632221: "é’æµ·çœæµ·åŒ—è—æ—è‡ªæ²»å·žé—¨æºå›žæ—è‡ªæ²»åŽ¿", 632222: "é’æµ·çœæµ·åŒ—è—æ—è‡ªæ²»å·žç¥è¿žåŽ¿", 632223: "é’æµ·çœæµ·åŒ—è—æ—è‡ªæ²»å·žæµ·æ™åŽ¿", 632224: "é’æµ·çœæµ·åŒ—è—æ—è‡ªæ²»å·žåˆšå¯ŸåŽ¿", 632300: "é’æµ·çœé»„å—è—æ—è‡ªæ²»å·ž", 632321: "é’æµ·çœé»„å—è—æ—è‡ªæ²»å·žåŒä»åŽ¿", 632322: "é’æµ·çœé»„å—è—æ—è‡ªæ²»å·žå°–æ‰ŽåŽ¿", 632323: "é’æµ·çœé»„å—è—æ—è‡ªæ²»å·žæ³½åº“åŽ¿", 632324: "é’æµ·çœé»„å—è—æ—è‡ªæ²»å·žæ²³å—è’™å¤æ—è‡ªæ²»åŽ¿", 632500: "é’æµ·çœæµ·å—è—æ—è‡ªæ²»å·ž", 632521: "é’æµ·çœæµ·å—è—æ—è‡ªæ²»å·žå…±å’ŒåŽ¿", 632522: "é’æµ·çœæµ·å—è—æ—è‡ªæ²»å·žåŒå¾·åŽ¿", 632523: "é’æµ·çœæµ·å—è—æ—è‡ªæ²»å·žè´µå¾·åŽ¿", 632524: "é’æµ·çœæµ·å—è—æ—è‡ªæ²»å·žå…´æµ·åŽ¿", 632525: "é’æµ·çœæµ·å—è—æ—è‡ªæ²»å·žè´µå—åŽ¿", 632600: "é’æµ·çœæžœæ´›è—æ—è‡ªæ²»å·ž", 632621: "é’æµ·çœæžœæ´›è—æ—è‡ªæ²»å·žçŽ›æ²åŽ¿", 632622: "é’æµ·çœæžœæ´›è—æ—è‡ªæ²»å·žç­çŽ›åŽ¿", 632623: "é’æµ·çœæžœæ´›è—æ—è‡ªæ²»å·žç”˜å¾·åŽ¿", 632624: "é’æµ·çœæžœæ´›è—æ—è‡ªæ²»å·žè¾¾æ—¥åŽ¿", 632625: "é’æµ·çœæžœæ´›è—æ—è‡ªæ²»å·žä¹…æ²»åŽ¿", 632626: "é’æµ·çœæžœæ´›è—æ—è‡ªæ²»å·žçŽ›å¤šåŽ¿", 632700: "é’æµ·çœçŽ‰æ ‘è—æ—è‡ªæ²»å·ž", 632721: "é’æµ·çœçŽ‰æ ‘è—æ—è‡ªæ²»å·žçŽ‰æ ‘åŽ¿", 632722: "é’æµ·çœçŽ‰æ ‘è—æ—è‡ªæ²»å·žæ‚å¤šåŽ¿", 632723: "é’æµ·çœçŽ‰æ ‘è—æ—è‡ªæ²»å·žç§°å¤šåŽ¿", 632724: "é’æµ·çœçŽ‰æ ‘è—æ—è‡ªæ²»å·žæ²»å¤šåŽ¿", 632725: "é’æµ·çœçŽ‰æ ‘è—æ—è‡ªæ²»å·žå›Šè°¦åŽ¿", 632726: "é’æµ·çœçŽ‰æ ‘è—æ—è‡ªæ²»å·žæ›²éº»èŽ±åŽ¿", 632800: "é’æµ·çœæµ·è¥¿è’™å¤æ—è—æ—è‡ªæ²»å·ž", 632801: "é’æµ·çœæµ·è¥¿è’™å¤æ—è—æ—è‡ªæ²»å·žæ ¼å°”æœ¨å¸‚", 632802: "é’æµ·çœæµ·è¥¿è’™å¤æ—è—æ—è‡ªæ²»å·žå¾·ä»¤å“ˆå¸‚", 632821: "é’æµ·çœæµ·è¥¿è’™å¤æ—è—æ—è‡ªæ²»å·žä¹Œå…°åŽ¿", 632822: "é’æµ·çœæµ·è¥¿è’™å¤æ—è—æ—è‡ªæ²»å·žéƒ½å…°åŽ¿", 632823: "é’æµ·çœæµ·è¥¿è’™å¤æ—è—æ—è‡ªæ²»å·žå¤©å³»åŽ¿", 64e4: "å®å¤å›žæ—è‡ªæ²»åŒº", 640100: "å®å¤å›žæ—è‡ªæ²»åŒºé“¶å·å¸‚", 640101: "å®å¤å›žæ—è‡ªæ²»åŒºé“¶å·å¸‚å¸‚è¾–åŒº", 640102: "å®å¤å›žæ—è‡ªæ²»åŒºé“¶å·å¸‚åŸŽåŒº", 640103: "å®å¤å›žæ—è‡ªæ²»åŒºé“¶å·å¸‚æ–°åŸŽåŒº", 640111: "å®å¤å›žæ—è‡ªæ²»åŒºé“¶å·å¸‚éƒŠåŒº", 640121: "å®å¤å›žæ—è‡ªæ²»åŒºé“¶å·å¸‚æ°¸å®åŽ¿", 640122: "å®å¤å›žæ—è‡ªæ²»åŒºé“¶å·å¸‚è´ºå…°åŽ¿", 640200: "å®å¤å›žæ—è‡ªæ²»åŒºçŸ³å˜´å±±å¸‚", 640201: "å®å¤å›žæ—è‡ªæ²»åŒºçŸ³å˜´å±±å¸‚å¸‚è¾–åŒº", 640202: "å®å¤å›žæ—è‡ªæ²»åŒºçŸ³å˜´å±±å¸‚å¤§æ­¦å£åŒº", 640203: "å®å¤å›žæ—è‡ªæ²»åŒºçŸ³å˜´å±±å¸‚çŸ³å˜´å±±åŒº", 640204: "å®å¤å›žæ—è‡ªæ²»åŒºçŸ³å˜´å±±å¸‚çŸ³ç‚­äº•åŒº", 640221: "å®å¤å›žæ—è‡ªæ²»åŒºçŸ³å˜´å±±å¸‚å¹³ç½—åŽ¿", 640222: "å®å¤å›žæ—è‡ªæ²»åŒºçŸ³å˜´å±±å¸‚é™¶ä¹åŽ¿", 640223: "å®å¤å›žæ—è‡ªæ²»åŒºçŸ³å˜´å±±å¸‚æƒ å†œåŽ¿", 640300: "å®å¤å›žæ—è‡ªæ²»åŒºå´å¿ å¸‚", 640301: "å®å¤å›žæ—è‡ªæ²»åŒºå´å¿ å¸‚å¸‚è¾–åŒº", 640302: "å®å¤å›žæ—è‡ªæ²»åŒºå´å¿ å¸‚åˆ©é€šåŒº", 640321: "å®å¤å›žæ—è‡ªæ²»åŒºå´å¿ å¸‚ä¸­å«åŽ¿", 640322: "å®å¤å›žæ—è‡ªæ²»åŒºå´å¿ å¸‚ä¸­å®åŽ¿", 640323: "å®å¤å›žæ—è‡ªæ²»åŒºå´å¿ å¸‚ç›æ± åŽ¿", 640324: "å®å¤å›žæ—è‡ªæ²»åŒºå´å¿ å¸‚åŒå¿ƒåŽ¿", 640381: "å®å¤å›žæ—è‡ªæ²»åŒºå´å¿ å¸‚é’é“œå³¡å¸‚", 640382: "å®å¤å›žæ—è‡ªæ²»åŒºå´å¿ å¸‚çµæ­¦å¸‚", 642200: "å®å¤å›žæ—è‡ªæ²»åŒºå›ºåŽŸåœ°åŒº", 642221: "å®å¤å›žæ—è‡ªæ²»åŒºå›ºåŽŸåœ°åŒºå›ºåŽŸåŽ¿", 642222: "å®å¤å›žæ—è‡ªæ²»åŒºå›ºåŽŸåœ°åŒºæµ·åŽŸåŽ¿", 642223: "å®å¤å›žæ—è‡ªæ²»åŒºå›ºåŽŸåœ°åŒºè¥¿å‰åŽ¿", 642224: "å®å¤å›žæ—è‡ªæ²»åŒºå›ºåŽŸåœ°åŒºéš†å¾·åŽ¿", 642225: "å®å¤å›žæ—è‡ªæ²»åŒºå›ºåŽŸåœ°åŒºæ³¾æºåŽ¿", 642226: "å®å¤å›žæ—è‡ªæ²»åŒºå›ºåŽŸåœ°åŒºå½­é˜³åŽ¿", 65e4: "æ–°ç–†ç»´å¾å°”è‡ªæ²»åŒº", 650100: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¹Œé²æœ¨é½å¸‚", 650101: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¹Œé²æœ¨é½å¸‚å¸‚è¾–åŒº", 650102: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¹Œé²æœ¨é½å¸‚å¤©å±±åŒº", 650103: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¹Œé²æœ¨é½å¸‚æ²™ä¾å·´å…‹åŒº", 650104: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¹Œé²æœ¨é½å¸‚æ–°å¸‚åŒº", 650105: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¹Œé²æœ¨é½å¸‚æ°´ç£¨æ²ŸåŒº", 650106: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¹Œé²æœ¨é½å¸‚å¤´å±¯æ²³åŒº", 650107: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¹Œé²æœ¨é½å¸‚å—å±±çŸ¿åŒº", 650108: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¹Œé²æœ¨é½å¸‚ä¸œå±±åŒº", 650121: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¹Œé²æœ¨é½å¸‚ä¹Œé²æœ¨é½åŽ¿", 650200: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå…‹æ‹‰çŽ›ä¾å¸‚", 650201: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå…‹æ‹‰çŽ›ä¾å¸‚å¸‚è¾–åŒº", 650202: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå…‹æ‹‰çŽ›ä¾å¸‚ç‹¬å±±å­åŒº", 650203: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå…‹æ‹‰çŽ›ä¾å¸‚å…‹æ‹‰çŽ›ä¾åŒº", 650204: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå…‹æ‹‰çŽ›ä¾å¸‚ç™½ç¢±æ»©åŒº", 650205: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå…‹æ‹‰çŽ›ä¾å¸‚ä¹Œå°”ç¦¾åŒº", 652100: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºåé²ç•ªåœ°åŒº", 652101: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºåé²ç•ªåœ°åŒºåé²ç•ªå¸‚", 652122: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºåé²ç•ªåœ°åŒºé„¯å–„åŽ¿", 652123: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºåé²ç•ªåœ°åŒºæ‰˜å…‹é€ŠåŽ¿", 652200: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå“ˆå¯†åœ°åŒº", 652201: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå“ˆå¯†åœ°åŒºå“ˆå¯†å¸‚", 652222: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå“ˆå¯†åœ°åŒºå·´é‡Œå¤å“ˆè¨å…‹è‡ªæ²»åŽ¿", 652223: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå“ˆå¯†åœ°åŒºä¼Šå¾åŽ¿", 652300: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºæ˜Œå‰å›žæ—è‡ªæ²»å·ž", 652301: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºæ˜Œå‰å›žæ—è‡ªæ²»å·žæ˜Œå‰å¸‚", 652302: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºæ˜Œå‰å›žæ—è‡ªæ²»å·žé˜œåº·å¸‚", 652303: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºæ˜Œå‰å›žæ—è‡ªæ²»å·žç±³æ³‰å¸‚", 652323: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºæ˜Œå‰å›žæ—è‡ªæ²»å·žå‘¼å›¾å£åŽ¿", 652324: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºæ˜Œå‰å›žæ—è‡ªæ²»å·žçŽ›çº³æ–¯åŽ¿", 652325: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºæ˜Œå‰å›žæ—è‡ªæ²»å·žå¥‡å°åŽ¿", 652327: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºæ˜Œå‰å›žæ—è‡ªæ²»å·žå‰æœ¨è¨å°”åŽ¿", 652328: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºæ˜Œå‰å›žæ—è‡ªæ²»å·žæœ¨åž’å“ˆè¨å…‹è‡ªæ²»åŽ¿", 652700: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºåšå°”å¡”æ‹‰è’™å¤è‡ªæ²»å·ž", 652701: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºåšå°”å¡”æ‹‰è’™å¤è‡ªæ²»å·žåšä¹å¸‚", 652722: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºåšå°”å¡”æ‹‰è’™å¤è‡ªæ²»å·žç²¾æ²³åŽ¿", 652723: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºåšå°”å¡”æ‹‰è’™å¤è‡ªæ²»å·žæ¸©æ³‰åŽ¿", 652800: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå·´éŸ³éƒ­æ¥žè’™å¤è‡ªæ²»å·ž", 652801: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå·´éŸ³éƒ­æ¥žè’™å¤è‡ªæ²»å·žåº“å°”å‹’å¸‚", 652822: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå·´éŸ³éƒ­æ¥žè’™å¤è‡ªæ²»å·žè½®å°åŽ¿", 652823: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå·´éŸ³éƒ­æ¥žè’™å¤è‡ªæ²»å·žå°‰çŠåŽ¿", 652824: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå·´éŸ³éƒ­æ¥žè’™å¤è‡ªæ²»å·žè‹¥ç¾ŒåŽ¿", 652825: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå·´éŸ³éƒ­æ¥žè’™å¤è‡ªæ²»å·žä¸”æœ«åŽ¿", 652826: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå·´éŸ³éƒ­æ¥žè’™å¤è‡ªæ²»å·žç„‰è€†å›žæ—è‡ªæ²»åŽ¿", 652827: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå·´éŸ³éƒ­æ¥žè’™å¤è‡ªæ²»å·žå’Œé™åŽ¿", 652828: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå·´éŸ³éƒ­æ¥žè’™å¤è‡ªæ²»å·žå’Œç¡•åŽ¿", 652829: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå·´éŸ³éƒ­æ¥žè’™å¤è‡ªæ²»å·žåšæ¹–åŽ¿", 652900: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å…‹è‹åœ°åŒº", 652901: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å…‹è‹åœ°åŒºé˜¿å…‹è‹å¸‚", 652922: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å…‹è‹åœ°åŒºæ¸©å®¿åŽ¿", 652923: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å…‹è‹åœ°åŒºåº“è½¦åŽ¿", 652924: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å…‹è‹åœ°åŒºæ²™é›…åŽ¿", 652925: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å…‹è‹åœ°åŒºæ–°å’ŒåŽ¿", 652926: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å…‹è‹åœ°åŒºæ‹œåŸŽåŽ¿", 652927: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å…‹è‹åœ°åŒºä¹Œä»€åŽ¿", 652928: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å…‹è‹åœ°åŒºé˜¿ç“¦æåŽ¿", 652929: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å…‹è‹åœ°åŒºæŸ¯åªåŽ¿", 653e3: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå…‹å­œå‹’è‹æŸ¯å°”å…‹å­œè‡ªæ²»å·ž", 653001: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå…‹å­œå‹’è‹æŸ¯å°”å…‹å­œè‡ªæ²»å·žé˜¿å›¾ä»€å¸‚", 653022: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå…‹å­œå‹’è‹æŸ¯å°”å…‹å­œè‡ªæ²»å·žé˜¿å…‹é™¶åŽ¿", 653023: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå…‹å­œå‹’è‹æŸ¯å°”å…‹å­œè‡ªæ²»å·žé˜¿åˆå¥‡åŽ¿", 653024: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå…‹å­œå‹’è‹æŸ¯å°”å…‹å­œè‡ªæ²»å·žä¹Œæ°åŽ¿", 653100: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå–€ä»€åœ°åŒº", 653101: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå–€ä»€åœ°åŒºå–€ä»€å¸‚", 653121: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå–€ä»€åœ°åŒºç–é™„åŽ¿", 653122: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå–€ä»€åœ°åŒºç–å‹’åŽ¿", 653123: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå–€ä»€åœ°åŒºè‹±å‰æ²™åŽ¿", 653124: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå–€ä»€åœ°åŒºæ³½æ™®åŽ¿", 653125: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå–€ä»€åœ°åŒºèŽŽè½¦åŽ¿", 653126: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå–€ä»€åœ°åŒºå¶åŸŽåŽ¿", 653127: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå–€ä»€åœ°åŒºéº¦ç›–æåŽ¿", 653128: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå–€ä»€åœ°åŒºå²³æ™®æ¹–åŽ¿", 653129: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå–€ä»€åœ°åŒºä¼½å¸ˆåŽ¿", 653130: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå–€ä»€åœ°åŒºå·´æ¥šåŽ¿", 653131: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå–€ä»€åœ°åŒºå¡”ä»€åº“å°”å¹²å¡”å‰å…‹è‡ªæ²»åŽ¿", 653200: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå’Œç”°åœ°åŒº", 653201: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå’Œç”°åœ°åŒºå’Œç”°å¸‚", 653221: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå’Œç”°åœ°åŒºå’Œç”°åŽ¿", 653222: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå’Œç”°åœ°åŒºå¢¨çŽ‰åŽ¿", 653223: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå’Œç”°åœ°åŒºçš®å±±åŽ¿", 653224: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå’Œç”°åœ°åŒºæ´›æµ¦åŽ¿", 653225: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå’Œç”°åœ°åŒºç­–å‹’åŽ¿", 653226: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå’Œç”°åœ°åŒºäºŽç”°åŽ¿", 653227: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå’Œç”°åœ°åŒºæ°‘ä¸°åŽ¿", 654e3: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¼ŠçŠå“ˆè¨å…‹è‡ªæ²»å·ž", 654001: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¼ŠçŠå“ˆè¨å…‹è‡ªæ²»å·žå¥Žå±¯å¸‚", 654100: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¼ŠçŠå“ˆè¨å…‹è‡ªæ²»å·žä¼ŠçŠåœ°åŒº", 654101: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¼ŠçŠå“ˆè¨å…‹è‡ªæ²»å·žä¼Šå®å¸‚", 654121: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¼ŠçŠå“ˆè¨å…‹è‡ªæ²»å·žä¼Šå®åŽ¿", 654122: "æ–°ç–†è‡ªæ²»åŒºä¼ŠçŠå“ˆè¨å…‹è‡ªæ²»å·žå¯Ÿå¸ƒæŸ¥å°”é”¡ä¼¯è‡ªæ²»åŽ¿", 654123: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¼ŠçŠå“ˆè¨å…‹è‡ªæ²»å·žéœåŸŽåŽ¿", 654124: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¼ŠçŠå“ˆè¨å…‹è‡ªæ²»å·žå·©ç•™åŽ¿", 654125: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¼ŠçŠå“ˆè¨å…‹è‡ªæ²»å·žæ–°æºåŽ¿", 654126: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¼ŠçŠå“ˆè¨å…‹è‡ªæ²»å·žæ˜­è‹åŽ¿", 654127: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¼ŠçŠå“ˆè¨å…‹è‡ªæ²»å·žç‰¹å…‹æ–¯åŽ¿", 654128: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºä¼ŠçŠå“ˆè¨å…‹è‡ªæ²»å·žå°¼å‹’å…‹åŽ¿", 654200: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå¡”åŸŽåœ°åŒº", 654201: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå¡”åŸŽåœ°åŒºå¡”åŸŽå¸‚", 654202: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå¡”åŸŽåœ°åŒºä¹Œè‹å¸‚", 654221: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå¡”åŸŽåœ°åŒºé¢æ•åŽ¿", 654223: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå¡”åŸŽåœ°åŒºæ²™æ¹¾åŽ¿", 654224: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå¡”åŸŽåœ°åŒºæ‰˜é‡ŒåŽ¿", 654225: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå¡”åŸŽåœ°åŒºè£•æ°‘åŽ¿", 654226: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºå¡”åŸŽåœ°åŒºå’Œå¸ƒå…‹èµ›å°”è’™å¤è‡ªæ²»åŽ¿", 654300: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å‹’æ³°åœ°åŒº", 654301: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å‹’æ³°åœ°åŒºé˜¿å‹’æ³°å¸‚", 654321: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å‹’æ³°åœ°åŒºå¸ƒå°”æ´¥åŽ¿", 654322: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å‹’æ³°åœ°åŒºå¯Œè•´åŽ¿", 654323: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å‹’æ³°åœ°åŒºç¦æµ·åŽ¿", 654324: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å‹’æ³°åœ°åŒºå“ˆå·´æ²³åŽ¿", 654325: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å‹’æ³°åœ°åŒºé’æ²³åŽ¿", 654326: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºé˜¿å‹’æ³°åœ°åŒºå‰æœ¨ä¹ƒåŽ¿", 659e3: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºç›´è¾–åŽ¿çº§è¡Œæ”¿å•ä½", 659001: "æ–°ç–†ç»´å¾å°”æ—è‡ªæ²»åŒºçŸ³æ²³å­å¸‚" }; return a });
! function(a, b) { "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.PhotoSwipe = b() }(this, function() {
    "use strict";
    var a = function(a, b, c, d) {
        var e = {
            features: null,
            bind: function(a, b, c, d) {
                var e = (d ? "remove" : "add") + "EventListener";
                b = b.split(" ");
                for (var f = 0; f < b.length; f++) b[f] && a[e](b[f], c, !1)
            },
            isArray: function(a) { return a instanceof Array },
            createEl: function(a, b) { var c = document.createElement(b || "div"); return a && (c.className = a), c },
            getScrollY: function() { var a = window.pageYOffset; return void 0 !== a ? a : document.documentElement.scrollTop },
            unbind: function(a, b, c) { e.bind(a, b, c, !0) },
            removeClass: function(a, b) {
                var c = new RegExp("(\\s|^)" + b + "(\\s|$)");
                a.className = a.className.replace(c, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            },
            addClass: function(a, b) { e.hasClass(a, b) || (a.className += (a.className ? " " : "") + b) },
            hasClass: function(a, b) { return a.className && new RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className) },
            getChildByClass: function(a, b) {
                for (var c = a.firstChild; c;) {
                    if (e.hasClass(c, b)) return c;
                    c = c.nextSibling
                }
            },
            arraySearch: function(a, b, c) {
                for (var d = a.length; d--;)
                    if (a[d][c] === b) return d;
                return -1
            },
            extend: function(a, b, c) {
                for (var d in b)
                    if (b.hasOwnProperty(d)) {
                        if (c && a.hasOwnProperty(d)) continue;
                        a[d] = b[d]
                    }
            },
            easing: { sine: { out: function(a) { return Math.sin(a * (Math.PI / 2)) }, inOut: function(a) { return -(Math.cos(Math.PI * a) - 1) / 2 } }, cubic: { out: function(a) { return --a * a * a + 1 } } },
            detectFeatures: function() {
                if (e.features) return e.features;
                var a = e.createEl(),
                    b = a.style,
                    c = "",
                    d = {};
                if (d.oldIE = document.all && !document.addEventListener, d.touch = "ontouchstart" in window, window.requestAnimationFrame && (d.raf = window.requestAnimationFrame, d.caf = window.cancelAnimationFrame), d.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !d.pointerEvent) {
                    var f = navigator.userAgent;
                    if (/iP(hone|od)/.test(navigator.platform)) {
                        var g = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                        g && g.length > 0 && (g = parseInt(g[1], 10), g >= 1 && g < 8 && (d.isOldIOSPhone = !0))
                    }
                    var h = f.match(/Android\s([0-9\.]*)/),
                        i = h ? h[1] : 0;
                    i = parseFloat(i), i >= 1 && (i < 4.4 && (d.isOldAndroid = !0), d.androidVersion = i), d.isMobileOpera = /opera mini|opera mobi/i.test(f)
                }
                for (var j, k, l = ["transform", "perspective", "animationName"], m = ["", "webkit", "Moz", "ms", "O"], n = 0; n < 4; n++) {
                    c = m[n];
                    for (var o = 0; o < 3; o++) j = l[o], k = c + (c ? j.charAt(0).toUpperCase() + j.slice(1) : j), !d[j] && k in b && (d[j] = k);
                    c && !d.raf && (c = c.toLowerCase(), d.raf = window[c + "RequestAnimationFrame"], d.raf && (d.caf = window[c + "CancelAnimationFrame"] || window[c + "CancelRequestAnimationFrame"]))
                }
                if (!d.raf) {
                    var p = 0;
                    d.raf = function(a) {
                        var b = (new Date).getTime(),
                            c = Math.max(0, 16 - (b - p)),
                            d = window.setTimeout(function() { a(b + c) }, c);
                        return p = b + c, d
                    }, d.caf = function(a) { clearTimeout(a) }
                }
                return d.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, e.features = d, d
            }
        };
        e.detectFeatures(), e.features.oldIE && (e.bind = function(a, b, c, d) {
            b = b.split(" ");
            for (var e, f = (d ? "detach" : "attach") + "Event", g = function() { c.handleEvent.call(c) }, h = 0; h < b.length; h++)
                if (e = b[h])
                    if ("object" == typeof c && c.handleEvent) {
                        if (d) { if (!c["oldIE" + e]) return !1 } else c["oldIE" + e] = g;
                        a[f]("on" + e, c["oldIE" + e])
                    } else a[f]("on" + e, c)
        });
        var f = this,
            g = 25,
            h = 3,
            i = { allowPanToNext: !0, spacing: .12, bgOpacity: 1, mouseUsed: !1, loop: !0, pinchToClose: !0, closeOnScroll: !0, closeOnVerticalDrag: !0, verticalDragRange: .75, hideAnimationDuration: 333, showAnimationDuration: 333, showHideOpacity: !1, focus: !0, escKey: !0, arrowKeys: !0, mainScrollEndFriction: .35, panEndFriction: .35, isClickableElement: function(a) { return "A" === a.tagName }, getDoubleTapZoom: function(a, b) { return a ? 1 : b.initialZoomLevel < .7 ? 1 : 1.33 }, maxSpreadZoom: 1.33, modal: !0, scaleMode: "fit" };
        e.extend(i, d);
        var j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, aa, ba, ca, da, ea, fa, ga, ha, ia, ja, ka, la, ma = function() { return { x: 0, y: 0 } },
            na = ma(),
            oa = ma(),
            pa = ma(),
            qa = {},
            ra = 0,
            sa = {},
            ta = ma(),
            ua = 0,
            va = !0,
            wa = [],
            xa = {},
            ya = !1,
            za = function(a, b) { e.extend(f, b.publicMethods), wa.push(a) },
            Aa = function(a) { var b = ac(); return a > b - 1 ? a - b : a < 0 ? b + a : a },
            Ba = {},
            Ca = function(a, b) { return Ba[a] || (Ba[a] = []), Ba[a].push(b) },
            Da = function(a) {
                var b = Ba[a];
                if (b) {
                    var c = Array.prototype.slice.call(arguments);
                    c.shift();
                    for (var d = 0; d < b.length; d++) b[d].apply(f, c)
                }
            },
            Ea = function() { return (new Date).getTime() },
            Fa = function(a) { ja = a, f.bg.style.opacity = a * i.bgOpacity },
            Ga = function(a, b, c, d, e) {
                (!ya || e && e !== f.currItem) && (d /= e ? e.fitRatio : f.currItem.fitRatio), a[E] = u + b + "px, " + c + "px" + v + " scale(" + d + ")"
            },
            Ha = function(a) { ea && (a && (s > f.currItem.fitRatio ? ya || (mc(f.currItem, !1, !0), ya = !0) : ya && (mc(f.currItem), ya = !1)), Ga(ea, pa.x, pa.y, s)) },
            Ia = function(a) { a.container && Ga(a.container.style, a.initialPosition.x, a.initialPosition.y, a.initialZoomLevel, a) },
            Ja = function(a, b) { b[E] = u + a + "px, 0px" + v },
            Ka = function(a, b) {
                if (!i.loop && b) {
                    var c = m + (ta.x * ra - a) / ta.x,
                        d = Math.round(a - tb.x);
                    (c < 0 && d > 0 || c >= ac() - 1 && d < 0) && (a = tb.x + d * i.mainScrollEndFriction)
                }
                tb.x = a, Ja(a, n)
            },
            La = function(a, b) { var c = ub[a] - sa[a]; return oa[a] + na[a] + c - c * (b / t) },
            Ma = function(a, b) { a.x = b.x, a.y = b.y, b.id && (a.id = b.id) },
            Na = function(a) { a.x = Math.round(a.x), a.y = Math.round(a.y) },
            Oa = null,
            Pa = function() { Oa && (e.unbind(document, "mousemove", Pa), e.addClass(a, "pswp--has_mouse"), i.mouseUsed = !0, Da("mouseUsed")), Oa = setTimeout(function() { Oa = null }, 100) },
            Qa = function() { e.bind(document, "keydown", f), N.transform && e.bind(f.scrollWrap, "click", f), i.mouseUsed || e.bind(document, "mousemove", Pa), e.bind(window, "resize scroll orientationchange", f), Da("bindEvents") },
            Ra = function() { e.unbind(window, "resize scroll orientationchange", f), e.unbind(window, "scroll", r.scroll), e.unbind(document, "keydown", f), e.unbind(document, "mousemove", Pa), N.transform && e.unbind(f.scrollWrap, "click", f), V && e.unbind(window, p, f), clearTimeout(O), Da("unbindEvents") },
            Sa = function(a, b) { var c = ic(f.currItem, qa, a); return b && (da = c), c },
            Ta = function(a) { return a || (a = f.currItem), a.initialZoomLevel },
            Ua = function(a) { return a || (a = f.currItem), a.w > 0 ? i.maxSpreadZoom : 1 },
            Va = function(a, b, c, d) { return d === f.currItem.initialZoomLevel ? (c[a] = f.currItem.initialPosition[a], !0) : (c[a] = La(a, d), c[a] > b.min[a] ? (c[a] = b.min[a], !0) : c[a] < b.max[a] && (c[a] = b.max[a], !0)) },
            Wa = function() {
                if (E) { var b = N.perspective && !G; return u = "translate" + (b ? "3d(" : "("), void(v = N.perspective ? ", 0px)" : ")") }
                E = "left", e.addClass(a, "pswp--ie"), Ja = function(a, b) { b.left = a + "px" }, Ia = function(a) {
                    var b = a.fitRatio > 1 ? 1 : a.fitRatio,
                        c = a.container.style,
                        d = b * a.w,
                        e = b * a.h;
                    c.width = d + "px", c.height = e + "px", c.left = a.initialPosition.x + "px", c.top = a.initialPosition.y + "px"
                }, Ha = function() {
                    if (ea) {
                        var a = ea,
                            b = f.currItem,
                            c = b.fitRatio > 1 ? 1 : b.fitRatio,
                            d = c * b.w,
                            e = c * b.h;
                        a.width = d + "px", a.height = e + "px", a.left = pa.x + "px", a.top = pa.y + "px"
                    }
                }
            },
            Xa = function(a) {
                var b = "";
                i.escKey && 27 === a.keyCode ? b = "close" : i.arrowKeys && (37 === a.keyCode ? b = "prev" : 39 === a.keyCode && (b = "next")), b && (a.ctrlKey || a.altKey || a.shiftKey || a.metaKey || (a.preventDefault ? a.preventDefault() : a.returnValue = !1, f[b]()))
            },
            Ya = function(a) { a && (Y || X || fa || T) && (a.preventDefault(), a.stopPropagation()) },
            Za = function() { f.setScrollOffset(0, e.getScrollY()) },
            $a = {},
            _a = 0,
            ab = function(a) { $a[a] && ($a[a].raf && I($a[a].raf), _a--, delete $a[a]) },
            bb = function(a) { $a[a] && ab(a), $a[a] || (_a++, $a[a] = {}) },
            cb = function() { for (var a in $a) $a.hasOwnProperty(a) && ab(a) },
            db = function(a, b, c, d, e, f, g) {
                var h, i = Ea();
                bb(a);
                var j = function() {
                    if ($a[a]) {
                        if (h = Ea() - i, h >= d) return ab(a), f(c), void(g && g());
                        f((c - b) * e(h / d) + b), $a[a].raf = H(j)
                    }
                };
                j()
            },
            eb = {
                shout: Da,
                listen: Ca,
                viewportSize: qa,
                options: i,
                isMainScrollAnimating: function() { return fa },
                getZoomLevel: function() { return s },
                getCurrentIndex: function() { return m },
                isDragging: function() { return V },
                isZooming: function() { return aa },
                setScrollOffset: function(a, b) { sa.x = a, M = sa.y = b, Da("updateScrollOffset", sa) },
                applyZoomPan: function(a, b, c, d) { pa.x = b, pa.y = c, s = a, Ha(d) },
                init: function() {
                    if (!j && !k) {
                        var c;
                        f.framework = e, f.template = a, f.bg = e.getChildByClass(a, "pswp__bg"), J = a.className, j = !0, N = e.detectFeatures(), H = N.raf, I = N.caf, E = N.transform, L = N.oldIE, f.scrollWrap = e.getChildByClass(a, "pswp__scroll-wrap"), f.container = e.getChildByClass(f.scrollWrap, "pswp__container"), n = f.container.style, f.itemHolders = y = [{ el: f.container.children[0], wrap: 0, index: -1 }, { el: f.container.children[1], wrap: 0, index: -1 }, { el: f.container.children[2], wrap: 0, index: -1 }], y[0].el.style.display = y[2].el.style.display = "none", Wa(), r = { resize: f.updateSize, orientationchange: function() { clearTimeout(O), O = setTimeout(function() { qa.x !== f.scrollWrap.clientWidth && f.updateSize() }, 500) }, scroll: Za, keydown: Xa, click: Ya };
                        var d = N.isOldIOSPhone || N.isOldAndroid || N.isMobileOpera;
                        for (N.animationName && N.transform && !d || (i.showAnimationDuration = i.hideAnimationDuration = 0), c = 0; c < wa.length; c++) f["init" + wa[c]]();
                        if (b) {
                            var g = f.ui = new b(f, e);
                            g.init()
                        }
                        Da("firstUpdate"), m = m || i.index || 0, (isNaN(m) || m < 0 || m >= ac()) && (m = 0), f.currItem = _b(m), (N.isOldIOSPhone || N.isOldAndroid) && (va = !1), a.setAttribute("aria-hidden", "false"), i.modal && (va ? a.style.position = "fixed" : (a.style.position = "absolute", a.style.top = e.getScrollY() + "px")), void 0 === M && (Da("initialLayout"), M = K = e.getScrollY());
                        var l = "pswp--open ";
                        for (i.mainClass && (l += i.mainClass + " "), i.showHideOpacity && (l += "pswp--animate_opacity "), l += G ? "pswp--touch" : "pswp--notouch", l += N.animationName ? " pswp--css_animation" : "", l += N.svg ? " pswp--svg" : "", e.addClass(a, l), f.updateSize(), o = -1, ua = null, c = 0; c < h; c++) Ja((c + o) * ta.x, y[c].el.style);
                        L || e.bind(f.scrollWrap, q, f), Ca("initialZoomInEnd", function() { f.setContent(y[0], m - 1), f.setContent(y[2], m + 1), y[0].el.style.display = y[2].el.style.display = "block", i.focus && a.focus(), Qa() }), f.setContent(y[1], m), f.updateCurrItem(), Da("afterInit"), va || (w = setInterval(function() { _a || V || aa || s !== f.currItem.initialZoomLevel || f.updateSize() }, 1e3)), e.addClass(a, "pswp--visible")
                    }
                },
                close: function() { j && (j = !1, k = !0, Da("close"), Ra(), cc(f.currItem, null, !0, f.destroy)) },
                destroy: function() { Da("destroy"), Xb && clearTimeout(Xb), a.setAttribute("aria-hidden", "true"), a.className = J, w && clearInterval(w), e.unbind(f.scrollWrap, q, f), e.unbind(window, "scroll", f), zb(), cb(), Ba = null },
                panTo: function(a, b, c) { c || (a > da.min.x ? a = da.min.x : a < da.max.x && (a = da.max.x), b > da.min.y ? b = da.min.y : b < da.max.y && (b = da.max.y)), pa.x = a, pa.y = b, Ha() },
                handleEvent: function(a) { a = a || window.event, r[a.type] && r[a.type](a) },
                goTo: function(a) {
                    a = Aa(a);
                    var b = a - m;
                    ua = b, m = a, f.currItem = _b(m), ra -= b, Ka(ta.x * ra), cb(), fa = !1, f.updateCurrItem()
                },
                next: function() { f.goTo(m + 1) },
                prev: function() { f.goTo(m - 1) },
                updateCurrZoomItem: function(a) {
                    if (a && Da("beforeChange", 0), y[1].el.children.length) {
                        var b = y[1].el.children[0];
                        ea = e.hasClass(b, "pswp__zoom-wrap") ? b.style : null
                    } else ea = null;
                    da = f.currItem.bounds, t = s = f.currItem.initialZoomLevel, pa.x = da.center.x, pa.y = da.center.y, a && Da("afterChange")
                },
                invalidateCurrItems: function() { x = !0; for (var a = 0; a < h; a++) y[a].item && (y[a].item.needsUpdate = !0) },
                updateCurrItem: function(a) {
                    if (0 !== ua) {
                        var b, c = Math.abs(ua);
                        if (!(a && c < 2)) {
                            f.currItem = _b(m), ya = !1, Da("beforeChange", ua), c >= h && (o += ua + (ua > 0 ? -h : h), c = h);
                            for (var d = 0; d < c; d++) ua > 0 ? (b = y.shift(), y[h - 1] = b, o++, Ja((o + 2) * ta.x, b.el.style), f.setContent(b, m - c + d + 1 + 1)) : (b = y.pop(), y.unshift(b), o--, Ja(o * ta.x, b.el.style), f.setContent(b, m + c - d - 1 - 1));
                            if (ea && 1 === Math.abs(ua)) {
                                var e = _b(z);
                                e.initialZoomLevel !== s && (ic(e, qa), mc(e), Ia(e))
                            }
                            ua = 0, f.updateCurrZoomItem(), z = m, Da("afterChange")
                        }
                    }
                },
                updateSize: function(b) {
                    if (!va && i.modal) {
                        var c = e.getScrollY();
                        if (M !== c && (a.style.top = c + "px", M = c), !b && xa.x === window.innerWidth && xa.y === window.innerHeight) return;
                        xa.x = window.innerWidth, xa.y = window.innerHeight, a.style.height = xa.y + "px"
                    }
                    if (qa.x = f.scrollWrap.clientWidth, qa.y = f.scrollWrap.clientHeight, Za(), ta.x = qa.x + Math.round(qa.x * i.spacing), ta.y = qa.y, Ka(ta.x * ra), Da("beforeResize"), void 0 !== o) {
                        for (var d, g, j, k = 0; k < h; k++) d = y[k], Ja((k + o) * ta.x, d.el.style), j = m + k - 1, i.loop && ac() > 2 && (j = Aa(j)), g = _b(j), g && (x || g.needsUpdate || !g.bounds) ? (f.cleanSlide(g), f.setContent(d, j), 1 === k && (f.currItem = g, f.updateCurrZoomItem(!0)), g.needsUpdate = !1) : d.index === -1 && j >= 0 && f.setContent(d, j), g && g.container && (ic(g, qa), mc(g), Ia(g));
                        x = !1
                    }
                    t = s = f.currItem.initialZoomLevel, da = f.currItem.bounds, da && (pa.x = da.center.x, pa.y = da.center.y, Ha(!0)), Da("resize")
                },
                zoomTo: function(a, b, c, d, f) {
                    b && (t = s, ub.x = Math.abs(b.x) - pa.x, ub.y = Math.abs(b.y) - pa.y, Ma(oa, pa));
                    var g = Sa(a, !1),
                        h = {};
                    Va("x", g, h, a), Va("y", g, h, a);
                    var i = s,
                        j = { x: pa.x, y: pa.y };
                    Na(h);
                    var k = function(b) { 1 === b ? (s = a, pa.x = h.x, pa.y = h.y) : (s = (a - i) * b + i, pa.x = (h.x - j.x) * b + j.x, pa.y = (h.y - j.y) * b + j.y), f && f(b), Ha(1 === b) };
                    c ? db("customZoomTo", 0, 1, c, d || e.easing.sine.inOut, k) : k(1)
                }
            },
            fb = 30,
            gb = 10,
            hb = {},
            ib = {},
            jb = {},
            kb = {},
            lb = {},
            mb = [],
            nb = {},
            ob = [],
            pb = {},
            qb = 0,
            rb = ma(),
            sb = 0,
            tb = ma(),
            ub = ma(),
            vb = ma(),
            wb = function(a, b) { return a.x === b.x && a.y === b.y },
            xb = function(a, b) { return Math.abs(a.x - b.x) < g && Math.abs(a.y - b.y) < g },
            yb = function(a, b) { return pb.x = Math.abs(a.x - b.x), pb.y = Math.abs(a.y - b.y), Math.sqrt(pb.x * pb.x + pb.y * pb.y) },
            zb = function() { Z && (I(Z), Z = null) },
            Ab = function() { V && (Z = H(Ab), Qb()) },
            Bb = function() { return !("fit" === i.scaleMode && s === f.currItem.initialZoomLevel) },
            Cb = function(a, b) { return !(!a || a === document) && (!(a.getAttribute("class") && a.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (b(a) ? a : Cb(a.parentNode, b))) },
            Db = {},
            Eb = function(a, b) { return Db.prevent = !Cb(a.target, i.isClickableElement), Da("preventDragEvent", a, b, Db), Db.prevent },
            Fb = function(a, b) { return b.x = a.pageX, b.y = a.pageY, b.id = a.identifier, b },
            Gb = function(a, b, c) { c.x = .5 * (a.x + b.x), c.y = .5 * (a.y + b.y) },
            Hb = function(a, b, c) {
                if (a - Q > 50) {
                    var d = ob.length > 2 ? ob.shift() : {};
                    d.x = b, d.y = c, ob.push(d), Q = a
                }
            },
            Ib = function() { var a = pa.y - f.currItem.initialPosition.y; return 1 - Math.abs(a / (qa.y / 2)) },
            Jb = {},
            Kb = {},
            Lb = [],
            Mb = function(a) { for (; Lb.length > 0;) Lb.pop(); return F ? (la = 0, mb.forEach(function(a) { 0 === la ? Lb[0] = a : 1 === la && (Lb[1] = a), la++ })) : a.type.indexOf("touch") > -1 ? a.touches && a.touches.length > 0 && (Lb[0] = Fb(a.touches[0], Jb), a.touches.length > 1 && (Lb[1] = Fb(a.touches[1], Kb))) : (Jb.x = a.pageX, Jb.y = a.pageY, Jb.id = "", Lb[0] = Jb), Lb },
            Nb = function(a, b) {
                var c, d, e, g, h = 0,
                    j = pa[a] + b[a],
                    k = b[a] > 0,
                    l = tb.x + b.x,
                    m = tb.x - nb.x;
                return c = j > da.min[a] || j < da.max[a] ? i.panEndFriction : 1, j = pa[a] + b[a] * c, !i.allowPanToNext && s !== f.currItem.initialZoomLevel || (ea ? "h" !== ga || "x" !== a || X || (k ? (j > da.min[a] && (c = i.panEndFriction, h = da.min[a] - j, d = da.min[a] - oa[a]), (d <= 0 || m < 0) && ac() > 1 ? (g = l, m < 0 && l > nb.x && (g = nb.x)) : da.min.x !== da.max.x && (e = j)) : (j < da.max[a] && (c = i.panEndFriction, h = j - da.max[a], d = oa[a] - da.max[a]), (d <= 0 || m > 0) && ac() > 1 ? (g = l, m > 0 && l < nb.x && (g = nb.x)) : da.min.x !== da.max.x && (e = j))) : g = l, "x" !== a) ? void(fa || $ || s > f.currItem.fitRatio && (pa[a] += b[a] * c)) : (void 0 !== g && (Ka(g, !0), $ = g !== nb.x), da.min.x !== da.max.x && (void 0 !== e ? pa.x = e : $ || (pa.x += b.x * c)), void 0 !== g)
            },
            Ob = function(a) {
                if (!("mousedown" === a.type && a.button > 0)) {
                    if ($b) return void a.preventDefault();
                    if (!U || "mousedown" !== a.type) {
                        if (Eb(a, !0) && a.preventDefault(), Da("pointerDown"), F) {
                            var b = e.arraySearch(mb, a.pointerId, "id");
                            b < 0 && (b = mb.length), mb[b] = { x: a.pageX, y: a.pageY, id: a.pointerId }
                        }
                        var c = Mb(a),
                            d = c.length;
                        _ = null, cb(), V && 1 !== d || (V = ha = !0, e.bind(window, p, f), S = ka = ia = T = $ = Y = W = X = !1, ga = null, Da("firstTouchStart", c), Ma(oa, pa), na.x = na.y = 0, Ma(kb, c[0]), Ma(lb, kb), nb.x = ta.x * ra, ob = [{ x: kb.x, y: kb.y }], Q = P = Ea(), Sa(s, !0), zb(), Ab()), !aa && d > 1 && !fa && !$ && (t = s, X = !1, aa = W = !0, na.y = na.x = 0, Ma(oa, pa), Ma(hb, c[0]), Ma(ib, c[1]), Gb(hb, ib, vb), ub.x = Math.abs(vb.x) - pa.x, ub.y = Math.abs(vb.y) - pa.y, ba = ca = yb(hb, ib))
                    }
                }
            },
            Pb = function(a) {
                if (a.preventDefault(), F) {
                    var b = e.arraySearch(mb, a.pointerId, "id");
                    if (b > -1) {
                        var c = mb[b];
                        c.x = a.pageX, c.y = a.pageY
                    }
                }
                if (V) {
                    var d = Mb(a);
                    if (ga || Y || aa) _ = d;
                    else if (tb.x !== ta.x * ra) ga = "h";
                    else {
                        var f = Math.abs(d[0].x - kb.x) - Math.abs(d[0].y - kb.y);
                        Math.abs(f) >= gb && (ga = f > 0 ? "h" : "v", _ = d)
                    }
                }
            },
            Qb = function() {
                if (_) {
                    var a = _.length;
                    if (0 !== a)
                        if (Ma(hb, _[0]), jb.x = hb.x - kb.x, jb.y = hb.y - kb.y, aa && a > 1) {
                            if (kb.x = hb.x, kb.y = hb.y, !jb.x && !jb.y && wb(_[1], ib)) return;
                            Ma(ib, _[1]), X || (X = !0, Da("zoomGestureStarted"));
                            var b = yb(hb, ib),
                                c = Vb(b);
                            c > f.currItem.initialZoomLevel + f.currItem.initialZoomLevel / 15 && (ka = !0);
                            var d = 1,
                                e = Ta(),
                                g = Ua();
                            if (c < e)
                                if (i.pinchToClose && !ka && t <= f.currItem.initialZoomLevel) {
                                    var h = e - c,
                                        j = 1 - h / (e / 1.2);
                                    Fa(j), Da("onPinchClose", j), ia = !0
                                } else d = (e - c) / e, d > 1 && (d = 1), c = e - d * (e / 3);
                            else c > g && (d = (c - g) / (6 * e), d > 1 && (d = 1), c = g + d * e);
                            d < 0 && (d = 0), ba = b, Gb(hb, ib, rb), na.x += rb.x - vb.x, na.y += rb.y - vb.y, Ma(vb, rb), pa.x = La("x", c), pa.y = La("y", c), S = c > s, s = c, Ha()
                        } else {
                            if (!ga) return;
                            if (ha && (ha = !1, Math.abs(jb.x) >= gb && (jb.x -= _[0].x - lb.x), Math.abs(jb.y) >= gb && (jb.y -= _[0].y - lb.y)), kb.x = hb.x, kb.y = hb.y, 0 === jb.x && 0 === jb.y) return;
                            if ("v" === ga && i.closeOnVerticalDrag && !Bb()) { na.y += jb.y, pa.y += jb.y; var k = Ib(); return T = !0, Da("onVerticalDrag", k), Fa(k), void Ha() }
                            Hb(Ea(), hb.x, hb.y), Y = !0, da = f.currItem.bounds;
                            var l = Nb("x", jb);
                            l || (Nb("y", jb), Na(pa), Ha())
                        }
                }
            },
            Rb = function(a) {
                if (N.isOldAndroid) {
                    if (U && "mouseup" === a.type) return;
                    a.type.indexOf("touch") > -1 && (clearTimeout(U), U = setTimeout(function() { U = 0 }, 600))
                }
                Da("pointerUp"), Eb(a, !1) && a.preventDefault();
                var b;
                if (F) {
                    var c = e.arraySearch(mb, a.pointerId, "id");
                    if (c > -1)
                        if (b = mb.splice(c, 1)[0], navigator.pointerEnabled) b.type = a.pointerType || "mouse";
                        else {
                            var d = { 4: "mouse", 2: "touch", 3: "pen" };
                            b.type = d[a.pointerType], b.type || (b.type = a.pointerType || "mouse")
                        }
                }
                var g, h = Mb(a),
                    j = h.length;
                if ("mouseup" === a.type && (j = 0), 2 === j) return _ = null, !0;
                1 === j && Ma(lb, h[0]), 0 !== j || ga || fa || (b || ("mouseup" === a.type ? b = { x: a.pageX, y: a.pageY, type: "mouse" } : a.changedTouches && a.changedTouches[0] && (b = { x: a.changedTouches[0].pageX, y: a.changedTouches[0].pageY, type: "touch" })), Da("touchRelease", a, b));
                var k = -1;
                if (0 === j && (V = !1, e.unbind(window, p, f), zb(), aa ? k = 0 : sb !== -1 && (k = Ea() - sb)), sb = 1 === j ? Ea() : -1, g = k !== -1 && k < 150 ? "zoom" : "swipe", aa && j < 2 && (aa = !1, 1 === j && (g = "zoomPointerUp"), Da("zoomGestureEnded")), _ = null, Y || X || fa || T)
                    if (cb(), R || (R = Sb()), R.calculateSwipeSpeed("x"), T) {
                        var l = Ib();
                        if (l < i.verticalDragRange) f.close();
                        else {
                            var m = pa.y,
                                n = ja;
                            db("verticalDrag", 0, 1, 300, e.easing.cubic.out, function(a) { pa.y = (f.currItem.initialPosition.y - m) * a + m, Fa((1 - n) * a + n), Ha() }), Da("onVerticalDrag", 1)
                        }
                    } else {
                        if (($ || fa) && 0 === j) {
                            var o = Ub(g, R);
                            if (o) return;
                            g = "zoomPointerUp"
                        }
                        if (!fa) return "swipe" !== g ? void Wb() : void(!$ && s > f.currItem.fitRatio && Tb(R))
                    }
            },
            Sb = function() { var a, b, c = { lastFlickOffset: {}, lastFlickDist: {}, lastFlickSpeed: {}, slowDownRatio: {}, slowDownRatioReverse: {}, speedDecelerationRatio: {}, speedDecelerationRatioAbs: {}, distanceOffset: {}, backAnimDestination: {}, backAnimStarted: {}, calculateSwipeSpeed: function(d) { ob.length > 1 ? (a = Ea() - Q + 50, b = ob[ob.length - 2][d]) : (a = Ea() - P, b = lb[d]), c.lastFlickOffset[d] = kb[d] - b, c.lastFlickDist[d] = Math.abs(c.lastFlickOffset[d]), c.lastFlickDist[d] > 20 ? c.lastFlickSpeed[d] = c.lastFlickOffset[d] / a : c.lastFlickSpeed[d] = 0, Math.abs(c.lastFlickSpeed[d]) < .1 && (c.lastFlickSpeed[d] = 0), c.slowDownRatio[d] = .95, c.slowDownRatioReverse[d] = 1 - c.slowDownRatio[d], c.speedDecelerationRatio[d] = 1 }, calculateOverBoundsAnimOffset: function(a, b) { c.backAnimStarted[a] || (pa[a] > da.min[a] ? c.backAnimDestination[a] = da.min[a] : pa[a] < da.max[a] && (c.backAnimDestination[a] = da.max[a]), void 0 !== c.backAnimDestination[a] && (c.slowDownRatio[a] = .7, c.slowDownRatioReverse[a] = 1 - c.slowDownRatio[a], c.speedDecelerationRatioAbs[a] < .05 && (c.lastFlickSpeed[a] = 0, c.backAnimStarted[a] = !0, db("bounceZoomPan" + a, pa[a], c.backAnimDestination[a], b || 300, e.easing.sine.out, function(b) { pa[a] = b, Ha() })))) }, calculateAnimOffset: function(a) { c.backAnimStarted[a] || (c.speedDecelerationRatio[a] = c.speedDecelerationRatio[a] * (c.slowDownRatio[a] + c.slowDownRatioReverse[a] - c.slowDownRatioReverse[a] * c.timeDiff / 10), c.speedDecelerationRatioAbs[a] = Math.abs(c.lastFlickSpeed[a] * c.speedDecelerationRatio[a]), c.distanceOffset[a] = c.lastFlickSpeed[a] * c.speedDecelerationRatio[a] * c.timeDiff, pa[a] += c.distanceOffset[a]) }, panAnimLoop: function() { if ($a.zoomPan && ($a.zoomPan.raf = H(c.panAnimLoop), c.now = Ea(), c.timeDiff = c.now - c.lastNow, c.lastNow = c.now, c.calculateAnimOffset("x"), c.calculateAnimOffset("y"), Ha(), c.calculateOverBoundsAnimOffset("x"), c.calculateOverBoundsAnimOffset("y"), c.speedDecelerationRatioAbs.x < .05 && c.speedDecelerationRatioAbs.y < .05)) return pa.x = Math.round(pa.x), pa.y = Math.round(pa.y), Ha(), void ab("zoomPan") } }; return c },
            Tb = function(a) { return a.calculateSwipeSpeed("y"), da = f.currItem.bounds, a.backAnimDestination = {}, a.backAnimStarted = {}, Math.abs(a.lastFlickSpeed.x) <= .05 && Math.abs(a.lastFlickSpeed.y) <= .05 ? (a.speedDecelerationRatioAbs.x = a.speedDecelerationRatioAbs.y = 0, a.calculateOverBoundsAnimOffset("x"), a.calculateOverBoundsAnimOffset("y"), !0) : (bb("zoomPan"), a.lastNow = Ea(), void a.panAnimLoop()) },
            Ub = function(a, b) {
                var c;
                fa || (qb = m);
                var d;
                if ("swipe" === a) {
                    var g = kb.x - lb.x,
                        h = b.lastFlickDist.x < 10;
                    g > fb && (h || b.lastFlickOffset.x > 20) ? d = -1 : g < -fb && (h || b.lastFlickOffset.x < -20) && (d = 1)
                }
                var j;
                d && (m += d, m < 0 ? (m = i.loop ? ac() - 1 : 0, j = !0) : m >= ac() && (m = i.loop ? 0 : ac() - 1, j = !0), j && !i.loop || (ua += d, ra -= d, c = !0));
                var k, l = ta.x * ra,
                    n = Math.abs(l - tb.x);
                return c || l > tb.x == b.lastFlickSpeed.x > 0 ? (k = Math.abs(b.lastFlickSpeed.x) > 0 ? n / Math.abs(b.lastFlickSpeed.x) : 333, k = Math.min(k, 400), k = Math.max(k, 250)) : k = 333, qb === m && (c = !1), fa = !0, Da("mainScrollAnimStart"), db("mainScroll", tb.x, l, k, e.easing.cubic.out, Ka, function() { cb(), fa = !1, qb = -1, (c || qb !== m) && f.updateCurrItem(), Da("mainScrollAnimComplete") }), c && f.updateCurrItem(!0), c
            },
            Vb = function(a) { return 1 / ca * a * t },
            Wb = function() {
                var a = s,
                    b = Ta(),
                    c = Ua();
                s < b ? a = b : s > c && (a = c);
                var d, g = 1,
                    h = ja;
                return ia && !S && !ka && s < b ? (f.close(), !0) : (ia && (d = function(a) { Fa((g - h) * a + h) }), f.zoomTo(a, 0, 200, e.easing.cubic.out, d), !0)
            };
        za("Gestures", {
            publicMethods: {
                initGestures: function() {
                    var a = function(a, b, c, d, e) { A = a + b, B = a + c, C = a + d, D = e ? a + e : "" };
                    F = N.pointerEvent, F && N.touch && (N.touch = !1), F ? navigator.pointerEnabled ? a("pointer", "down", "move", "up", "cancel") : a("MSPointer", "Down", "Move", "Up", "Cancel") : N.touch ? (a("touch", "start", "move", "end", "cancel"), G = !0) : a("mouse", "down", "move", "up"), p = B + " " + C + " " + D, q = A, F && !G && (G = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), f.likelyTouchDevice = G, r[A] = Ob, r[B] = Pb, r[C] = Rb, D && (r[D] = r[C]), N.touch && (q += " mousedown", p += " mousemove mouseup", r.mousedown = r[A], r.mousemove = r[B], r.mouseup = r[C]), G || (i.allowPanToNext = !1)
                }
            }
        });
        var Xb, Yb, Zb, $b, _b, ac, bc, cc = function(b, c, d, g) {
                Xb && clearTimeout(Xb), $b = !0, Zb = !0;
                var h;
                b.initialLayout ? (h = b.initialLayout, b.initialLayout = null) : h = i.getThumbBoundsFn && i.getThumbBoundsFn(m);
                var j = d ? i.hideAnimationDuration : i.showAnimationDuration,
                    k = function() { ab("initialZoom"), d ? (f.template.removeAttribute("style"), f.bg.removeAttribute("style")) : (Fa(1), c && (c.style.display = "block"), e.addClass(a, "pswp--animated-in"), Da("initialZoom" + (d ? "OutEnd" : "InEnd"))), g && g(), $b = !1 };
                if (!j || !h || void 0 === h.x) return Da("initialZoom" + (d ? "Out" : "In")), s = b.initialZoomLevel, Ma(pa, b.initialPosition), Ha(), a.style.opacity = d ? 0 : 1, Fa(1), void(j ? setTimeout(function() { k() }, j) : k());
                var n = function() {
                    var c = l,
                        g = !f.currItem.src || f.currItem.loadError || i.showHideOpacity;
                    b.miniImg && (b.miniImg.style.webkitBackfaceVisibility = "hidden"), d || (s = h.w / b.w, pa.x = h.x, pa.y = h.y - K, f[g ? "template" : "bg"].style.opacity = .001, Ha()), bb("initialZoom"), d && !c && e.removeClass(a, "pswp--animated-in"), g && (d ? e[(c ? "remove" : "add") + "Class"](a, "pswp--animate_opacity") : setTimeout(function() { e.addClass(a, "pswp--animate_opacity") }, 30)), Xb = setTimeout(function() {
                        if (Da("initialZoom" + (d ? "Out" : "In")), d) {
                            var f = h.w / b.w,
                                i = { x: pa.x, y: pa.y },
                                l = s,
                                m = ja,
                                n = function(b) { 1 === b ? (s = f, pa.x = h.x, pa.y = h.y - M) : (s = (f - l) * b + l, pa.x = (h.x - i.x) * b + i.x, pa.y = (h.y - M - i.y) * b + i.y), Ha(), g ? a.style.opacity = 1 - b : Fa(m - b * m) };
                            c ? db("initialZoom", 0, 1, j, e.easing.cubic.out, n, k) : (n(1), Xb = setTimeout(k, j + 20))
                        } else s = b.initialZoomLevel, Ma(pa, b.initialPosition), Ha(), Fa(1), g ? a.style.opacity = 1 : Fa(1), Xb = setTimeout(k, j + 20)
                    }, d ? 25 : 90)
                };
                n()
            },
            dc = {},
            ec = [],
            fc = { index: 0, errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>', forceProgressiveLoading: !1, preload: [1, 1], getNumItemsFn: function() { return Yb.length } },
            gc = function() { return { center: { x: 0, y: 0 }, max: { x: 0, y: 0 }, min: { x: 0, y: 0 } } },
            hc = function(a, b, c) {
                var d = a.bounds;
                d.center.x = Math.round((dc.x - b) / 2), d.center.y = Math.round((dc.y - c) / 2) + a.vGap.top, d.max.x = b > dc.x ? Math.round(dc.x - b) : d.center.x, d.max.y = c > dc.y ? Math.round(dc.y - c) + a.vGap.top : d.center.y, d.min.x = b > dc.x ? 0 : d.center.x, d.min.y = c > dc.y ? a.vGap.top : d.center.y
            },
            ic = function(a, b, c) {
                if (a.src && !a.loadError) {
                    var d = !c;
                    if (d && (a.vGap || (a.vGap = { top: 0, bottom: 0 }), Da("parseVerticalMargin", a)), dc.x = b.x, dc.y = b.y - a.vGap.top - a.vGap.bottom, d) {
                        var e = dc.x / a.w,
                            f = dc.y / a.h;
                        a.fitRatio = e < f ? e : f;
                        var g = i.scaleMode;
                        "orig" === g ? c = 1 : "fit" === g && (c = a.fitRatio), c > 1 && (c = 1), a.initialZoomLevel = c, a.bounds || (a.bounds = gc())
                    }
                    if (!c) return;
                    return hc(a, a.w * c, a.h * c), d && c === a.initialZoomLevel && (a.initialPosition = a.bounds.center), a.bounds
                }
                return a.w = a.h = 0, a.initialZoomLevel = a.fitRatio = 1, a.bounds = gc(), a.initialPosition = a.bounds.center, a.bounds
            },
            jc = function(a, b, c, d, e, g) { b.loadError || d && (b.imageAppended = !0, mc(b, d, b === f.currItem && ya), c.appendChild(d), g && setTimeout(function() { b && b.loaded && b.placeholder && (b.placeholder.style.display = "none", b.placeholder = null) }, 500)) },
            kc = function(a) {
                a.loading = !0, a.loaded = !1;
                var b = a.img = e.createEl("pswp__img", "img"),
                    c = function() { a.loading = !1, a.loaded = !0, a.loadComplete ? a.loadComplete(a) : a.img = null, b.onload = b.onerror = null, b = null };
                return b.onload = c, b.onerror = function() { a.loadError = !0, c() }, b.src = a.src, b
            },
            lc = function(a, b) { if (a.src && a.loadError && a.container) return b && (a.container.innerHTML = ""), a.container.innerHTML = i.errorMsg.replace("%url%", a.src), !0 },
            mc = function(a, b, c) {
                if (a.src) {
                    b || (b = a.container.lastChild);
                    var d = c ? a.w : Math.round(a.w * a.fitRatio),
                        e = c ? a.h : Math.round(a.h * a.fitRatio);
                    a.placeholder && !a.loaded && (a.placeholder.style.width = d + "px", a.placeholder.style.height = e + "px"), b.style.width = d + "px", b.style.height = e + "px"
                }
            },
            nc = function() {
                if (ec.length) {
                    for (var a, b = 0; b < ec.length; b++) a = ec[b], a.holder.index === a.index && jc(a.index, a.item, a.baseDiv, a.img, !1, a.clearPlaceholder);
                    ec = []
                }
            };
        za("Controller", {
            publicMethods: {
                lazyLoadItem: function(a) {
                    a = Aa(a);
                    var b = _b(a);
                    b && (!b.loaded && !b.loading || x) && (Da("gettingData", a, b), b.src && kc(b))
                },
                initController: function() {
                    e.extend(i, fc, !0), f.items = Yb = c, _b = f.getItemAt, ac = i.getNumItemsFn, bc = i.loop, ac() < 3 && (i.loop = !1), Ca("beforeChange", function(a) {
                        var b, c = i.preload,
                            d = null === a || a >= 0,
                            e = Math.min(c[0], ac()),
                            g = Math.min(c[1], ac());
                        for (b = 1; b <= (d ? g : e); b++) f.lazyLoadItem(m + b);
                        for (b = 1; b <= (d ? e : g); b++) f.lazyLoadItem(m - b)
                    }), Ca("initialLayout", function() { f.currItem.initialLayout = i.getThumbBoundsFn && i.getThumbBoundsFn(m) }), Ca("mainScrollAnimComplete", nc), Ca("initialZoomInEnd", nc), Ca("destroy", function() {
                        for (var a, b = 0; b < Yb.length; b++) a = Yb[b], a.container && (a.container = null), a.placeholder && (a.placeholder = null), a.img && (a.img = null), a.preloader && (a.preloader = null), a.loadError && (a.loaded = a.loadError = !1);
                        ec = null
                    })
                },
                getItemAt: function(a) { return a >= 0 && (void 0 !== Yb[a] && Yb[a]) },
                allowProgressiveImg: function() { return i.forceProgressiveLoading || !G || i.mouseUsed || screen.width > 1200 },
                setContent: function(a, b) {
                    i.loop && (b = Aa(b));
                    var c = f.getItemAt(a.index);
                    c && (c.container = null);
                    var d, g = f.getItemAt(b);
                    if (!g) return void(a.el.innerHTML = "");
                    Da("gettingData", b, g), a.index = b, a.item = g;
                    var h = g.container = e.createEl("pswp__zoom-wrap");
                    if (!g.src && g.html && (g.html.tagName ? h.appendChild(g.html) : h.innerHTML = g.html), lc(g), ic(g, qa), !g.src || g.loadError || g.loaded) g.src && !g.loadError && (d = e.createEl("pswp__img", "img"), d.style.opacity = 1, d.src = g.src, mc(g, d), jc(b, g, h, d, !0));
                    else {
                        if (g.loadComplete = function(c) {
                                if (j) {
                                    if (a && a.index === b) {
                                        if (lc(c, !0)) return c.loadComplete = c.img = null, ic(c, qa), Ia(c), void(a.index === m && f.updateCurrZoomItem());
                                        c.imageAppended ? !$b && c.placeholder && (c.placeholder.style.display = "none", c.placeholder = null) : N.transform && (fa || $b) ? ec.push({ item: c, baseDiv: h, img: c.img, index: b, holder: a, clearPlaceholder: !0 }) : jc(b, c, h, c.img, fa || $b, !0)
                                    }
                                    c.loadComplete = null, c.img = null, Da("imageLoadComplete", b, c)
                                }
                            }, e.features.transform) {
                            var k = "pswp__img pswp__img--placeholder";
                            k += g.msrc ? "" : " pswp__img--placeholder--blank";
                            var l = e.createEl(k, g.msrc ? "img" : "");
                            g.msrc && (l.src = g.msrc), mc(g, l), h.appendChild(l), g.placeholder = l
                        }
                        g.loading || kc(g), f.allowProgressiveImg() && (!Zb && N.transform ? ec.push({ item: g, baseDiv: h, img: g.img, index: b, holder: a }) : jc(b, g, h, g.img, !0, !0))
                    }
                    Zb || b !== m ? Ia(g) : (ea = h.style, cc(g, d || g.img)), a.el.innerHTML = "", a.el.appendChild(h)
                },
                cleanSlide: function(a) { a.img && (a.img.onload = a.img.onerror = null), a.loaded = a.loading = a.img = a.imageAppended = !1 }
            }
        });
        var oc, pc = {},
            qc = function(a, b, c) {
                var d = document.createEvent("CustomEvent"),
                    e = { origEvent: a, target: a.target, releasePoint: b, pointerType: c || "touch" };
                d.initCustomEvent("pswpTap", !0, !0, e), a.target.dispatchEvent(d)
            };
        za("Tap", {
            publicMethods: {
                initTap: function() { Ca("firstTouchStart", f.onTapStart), Ca("touchRelease", f.onTapRelease), Ca("destroy", function() { pc = {}, oc = null }) },
                onTapStart: function(a) { a.length > 1 && (clearTimeout(oc), oc = null) },
                onTapRelease: function(a, b) {
                    if (b && !Y && !W && !_a) {
                        var c = b;
                        if (oc && (clearTimeout(oc), oc = null, xb(c, pc))) return void Da("doubleTap", c);
                        if ("mouse" === b.type) return void qc(a, b, "mouse");
                        var d = a.target.tagName.toUpperCase();
                        if ("BUTTON" === d || e.hasClass(a.target, "pswp__single-tap")) return void qc(a, b);
                        Ma(pc, c), oc = setTimeout(function() { qc(a, b), oc = null }, 300)
                    }
                }
            }
        });
        var rc;
        za("DesktopZoom", {
            publicMethods: {
                initDesktopZoom: function() { L || (G ? Ca("mouseUsed", function() { f.setupDesktopZoom() }) : f.setupDesktopZoom(!0)) },
                setupDesktopZoom: function(b) {
                    rc = {};
                    var c = "wheel mousewheel DOMMouseScroll";
                    Ca("bindEvents", function() { e.bind(a, c, f.handleMouseWheel) }), Ca("unbindEvents", function() { rc && e.unbind(a, c, f.handleMouseWheel) }), f.mouseZoomedIn = !1;
                    var d, g = function() { f.mouseZoomedIn && (e.removeClass(a, "pswp--zoomed-in"), f.mouseZoomedIn = !1), s < 1 ? e.addClass(a, "pswp--zoom-allowed") : e.removeClass(a, "pswp--zoom-allowed"), h() },
                        h = function() { d && (e.removeClass(a, "pswp--dragging"), d = !1) };
                    Ca("resize", g), Ca("afterChange", g), Ca("pointerDown", function() { f.mouseZoomedIn && (d = !0, e.addClass(a, "pswp--dragging")) }), Ca("pointerUp", h), b || g()
                },
                handleMouseWheel: function(a) {
                    if (s <= f.currItem.fitRatio) return i.modal && (!i.closeOnScroll || _a || V ? a.preventDefault() : E && Math.abs(a.deltaY) > 2 && (l = !0, f.close())), !0;
                    if (a.stopPropagation(), rc.x = 0, "deltaX" in a) 1 === a.deltaMode ? (rc.x = 18 * a.deltaX, rc.y = 18 * a.deltaY) : (rc.x = a.deltaX, rc.y = a.deltaY);
                    else if ("wheelDelta" in a) a.wheelDeltaX && (rc.x = -.16 * a.wheelDeltaX), a.wheelDeltaY ? rc.y = -.16 * a.wheelDeltaY : rc.y = -.16 * a.wheelDelta;
                    else {
                        if (!("detail" in a)) return;
                        rc.y = a.detail
                    }
                    Sa(s, !0);
                    var b = pa.x - rc.x,
                        c = pa.y - rc.y;
                    (i.modal || b <= da.min.x && b >= da.max.x && c <= da.min.y && c >= da.max.y) && a.preventDefault(), f.panTo(b, c)
                },
                toggleDesktopZoom: function(b) {
                    b = b || { x: qa.x / 2 + sa.x, y: qa.y / 2 + sa.y };
                    var c = i.getDoubleTapZoom(!0, f.currItem),
                        d = s === c;
                    f.mouseZoomedIn = !d, f.zoomTo(d ? f.currItem.initialZoomLevel : c, b, 333), e[(d ? "remove" : "add") + "Class"](a, "pswp--zoomed-in")
                }
            }
        });
        var sc, tc, uc, vc, wc, xc, yc, zc, Ac, Bc, Cc, Dc, Ec = { history: !0, galleryUID: 1 },
            Fc = function() { return Cc.hash.substring(1) },
            Gc = function() { sc && clearTimeout(sc), uc && clearTimeout(uc) },
            Hc = function() {
                var a = Fc(),
                    b = {};
                if (a.length < 5) return b;
                var c, d = a.split("&");
                for (c = 0; c < d.length; c++)
                    if (d[c]) {
                        var e = d[c].split("=");
                        e.length < 2 || (b[e[0]] = e[1])
                    }
                if (i.galleryPIDs) {
                    var f = b.pid;
                    for (b.pid = 0, c = 0; c < Yb.length; c++)
                        if (Yb[c].pid === f) { b.pid = c; break }
                } else b.pid = parseInt(b.pid, 10) - 1;
                return b.pid < 0 && (b.pid = 0), b
            },
            Ic = function() {
                if (uc && clearTimeout(uc), _a || V) return void(uc = setTimeout(Ic, 500));
                vc ? clearTimeout(tc) : vc = !0;
                var a = m + 1,
                    b = _b(m);
                b.hasOwnProperty("pid") && (a = b.pid);
                var c = yc + "&gid=" + i.galleryUID + "&pid=" + a;
                zc || Cc.hash.indexOf(c) === -1 && (Bc = !0);
                var d = Cc.href.split("#")[0] + "#" + c;
                Dc ? "#" + c !== window.location.hash && history[zc ? "replaceState" : "pushState"]("", document.title, d) : zc ? Cc.replace(d) : Cc.hash = c, zc = !0, tc = setTimeout(function() { vc = !1 }, 60)
            };
        za("History", {
            publicMethods: {
                initHistory: function() {
                    if (e.extend(i, Ec, !0), i.history) {
                        Cc = window.location, Bc = !1, Ac = !1, zc = !1, yc = Fc(), Dc = "pushState" in history, yc.indexOf("gid=") > -1 && (yc = yc.split("&gid=")[0], yc = yc.split("?gid=")[0]), Ca("afterChange", f.updateURL), Ca("unbindEvents", function() { e.unbind(window, "hashchange", f.onHashChange) });
                        var a = function() { xc = !0, Ac || (Bc ? history.back() : yc ? Cc.hash = yc : Dc ? history.pushState("", document.title, Cc.pathname + Cc.search) : Cc.hash = ""), Gc() };
                        Ca("unbindEvents", function() { l && a() }), Ca("destroy", function() { xc || a() }), Ca("firstUpdate", function() { m = Hc().pid });
                        var b = yc.indexOf("pid=");
                        b > -1 && (yc = yc.substring(0, b), "&" === yc.slice(-1) && (yc = yc.slice(0, -1))), setTimeout(function() { j && e.bind(window, "hashchange", f.onHashChange) }, 40)
                    }
                },
                onHashChange: function() { return Fc() === yc ? (Ac = !0, void f.close()) : void(vc || (wc = !0, f.goTo(Hc().pid), wc = !1)) },
                updateURL: function() { Gc(), wc || (zc ? sc = setTimeout(Ic, 800) : Ic()) }
            }
        }), e.extend(f, eb)
    };
    return a
});
! function(a, b) { "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.PhotoSwipeUI_Default = b() }(this, function() {
    "use strict";
    var a = function(a, b) {
        var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = this,
            w = !1,
            x = !0,
            y = !0,
            z = { barsSize: { top: 44, bottom: "auto" }, closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"], timeToIdle: 4e3, timeToIdleOutside: 1e3, loadingIndicatorDelay: 1e3, addCaptionHTMLFn: function(a, b) { return a.title ? (b.children[0].innerHTML = a.title, !0) : (b.children[0].innerHTML = "", !1) }, closeEl: !0, captionEl: !0, fullscreenEl: !0, zoomEl: !0, shareEl: !0, counterEl: !0, arrowEl: !0, preloaderEl: !0, tapToClose: !1, tapToToggleControls: !0, clickToCloseNonZoomable: !0, shareButtons: [{ id: "facebook", label: "Share on Facebook", url: "https://www.facebook.com/sharer/sharer.php?u={{url}}" }, { id: "twitter", label: "Tweet", url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}" }, { id: "pinterest", label: "Pin it", url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}" }, { id: "download", label: "Download image", url: "{{raw_image_url}}", download: !0 }], getImageURLForShare: function() { return a.currItem.src || "" }, getPageURLForShare: function() { return window.location.href }, getTextForShare: function() { return a.currItem.title || "" }, indexIndicatorSep: " / ", fitControlsWidth: 1200 },
            A = function(a) {
                if (r) return !0;
                a = a || window.event, q.timeToIdle && q.mouseUsed && !k && K();
                for (var c, d, e = a.target || a.srcElement, f = e.getAttribute("class") || "", g = 0; g < S.length; g++) c = S[g], c.onTap && f.indexOf("pswp__" + c.name) > -1 && (c.onTap(), d = !0);
                if (d) {
                    a.stopPropagation && a.stopPropagation(), r = !0;
                    var h = b.features.isOldAndroid ? 600 : 30;
                    s = setTimeout(function() { r = !1 }, h)
                }
            },
            B = function() { return !a.likelyTouchDevice || q.mouseUsed || screen.width > q.fitControlsWidth },
            C = function(a, c, d) { b[(d ? "add" : "remove") + "Class"](a, "pswp__" + c) },
            D = function() {
                var a = 1 === q.getNumItemsFn();
                a !== p && (C(d, "ui--one-slide", a), p = a)
            },
            E = function() { C(i, "share-modal--hidden", y) },
            F = function() { return y = !y, y ? (b.removeClass(i, "pswp__share-modal--fade-in"), setTimeout(function() { y && E() }, 300)) : (E(), setTimeout(function() { y || b.addClass(i, "pswp__share-modal--fade-in") }, 30)), y || H(), !1 },
            G = function(b) { b = b || window.event; var c = b.target || b.srcElement; return a.shout("shareLinkClick", b, c), !!c.href && (!!c.hasAttribute("download") || (window.open(c.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), y || F(), !1)) },
            H = function() {
                for (var a, b, c, d, e, f = "", g = 0; g < q.shareButtons.length; g++) a = q.shareButtons[g], c = q.getImageURLForShare(a), d = q.getPageURLForShare(a), e = q.getTextForShare(a), b = a.url.replace("{{url}}", encodeURIComponent(d)).replace("{{image_url}}", encodeURIComponent(c)).replace("{{raw_image_url}}", c).replace("{{text}}", encodeURIComponent(e)), f += '<a href="' + b + '" target="_blank" class="pswp__share--' + a.id + '"' + (a.download ? "download" : "") + ">" + a.label + "</a>", q.parseShareButtonOut && (f = q.parseShareButtonOut(a, f));
                i.children[0].innerHTML = f, i.children[0].onclick = G
            },
            I = function(a) {
                for (var c = 0; c < q.closeElClasses.length; c++)
                    if (b.hasClass(a, "pswp__" + q.closeElClasses[c])) return !0
            },
            J = 0,
            K = function() { clearTimeout(u), J = 0, k && v.setIdle(!1) },
            L = function(a) {
                a = a ? a : window.event;
                var b = a.relatedTarget || a.toElement;
                b && "HTML" !== b.nodeName || (clearTimeout(u), u = setTimeout(function() { v.setIdle(!0) }, q.timeToIdleOutside))
            },
            M = function() { q.fullscreenEl && !b.features.isOldAndroid && (c || (c = v.getFullscreenAPI()), c ? (b.bind(document, c.eventK, v.updateFullscreen), v.updateFullscreen(), b.addClass(a.template, "pswp--supports-fs")) : b.removeClass(a.template, "pswp--supports-fs")) },
            N = function() { q.preloaderEl && (O(!0), l("beforeChange", function() { clearTimeout(o), o = setTimeout(function() { a.currItem && a.currItem.loading ? (!a.allowProgressiveImg() || a.currItem.img && !a.currItem.img.naturalWidth) && O(!1) : O(!0) }, q.loadingIndicatorDelay) }), l("imageLoadComplete", function(b, c) { a.currItem === c && O(!0) })) },
            O = function(a) { n !== a && (C(m, "preloader--active", !a), n = a) },
            P = function(a) {
                var c = a.vGap;
                if (B()) {
                    var g = q.barsSize;
                    if (q.captionEl && "auto" === g.bottom)
                        if (f || (f = b.createEl("pswp__caption pswp__caption--fake"), f.appendChild(b.createEl("pswp__caption__center")), d.insertBefore(f, e), b.addClass(d, "pswp__ui--fit")), q.addCaptionHTMLFn(a, f, !0)) {
                            var h = f.clientHeight;
                            c.bottom = parseInt(h, 10) || 44
                        } else c.bottom = g.top;
                    else c.bottom = "auto" === g.bottom ? 0 : g.bottom;
                    c.top = g.top
                } else c.top = c.bottom = 0
            },
            Q = function() { q.timeToIdle && l("mouseUsed", function() { b.bind(document, "mousemove", K), b.bind(document, "mouseout", L), t = setInterval(function() { J++, 2 === J && v.setIdle(!0) }, q.timeToIdle / 2) }) },
            R = function() {
                l("onVerticalDrag", function(a) { x && a < .95 ? v.hideControls() : !x && a >= .95 && v.showControls() });
                var a;
                l("onPinchClose", function(b) { x && b < .9 ? (v.hideControls(), a = !0) : a && !x && b > .9 && v.showControls() }), l("zoomGestureEnded", function() { a = !1, a && !x && v.showControls() })
            },
            S = [{ name: "caption", option: "captionEl", onInit: function(a) { e = a } }, { name: "share-modal", option: "shareEl", onInit: function(a) { i = a }, onTap: function() { F() } }, { name: "button--share", option: "shareEl", onInit: function(a) { h = a }, onTap: function() { F() } }, { name: "button--zoom", option: "zoomEl", onTap: a.toggleDesktopZoom }, { name: "counter", option: "counterEl", onInit: function(a) { g = a } }, { name: "button--close", option: "closeEl", onTap: a.close }, { name: "button--arrow--left", option: "arrowEl", onTap: a.prev }, { name: "button--arrow--right", option: "arrowEl", onTap: a.next }, { name: "button--fs", option: "fullscreenEl", onTap: function() { c.isFullscreen() ? c.exit() : c.enter() } }, { name: "preloader", option: "preloaderEl", onInit: function(a) { m = a } }],
            T = function() {
                var a, c, e, f = function(d) {
                    if (d)
                        for (var f = d.length, g = 0; g < f; g++) { a = d[g], c = a.className; for (var h = 0; h < S.length; h++) e = S[h], c.indexOf("pswp__" + e.name) > -1 && (q[e.option] ? (b.removeClass(a, "pswp__element--disabled"), e.onInit && e.onInit(a)) : b.addClass(a, "pswp__element--disabled")) }
                };
                f(d.children);
                var g = b.getChildByClass(d, "pswp__top-bar");
                g && f(g.children)
            };
        v.init = function() {
            b.extend(a.options, z, !0), q = a.options, d = b.getChildByClass(a.scrollWrap, "pswp__ui"), l = a.listen, R(), l("beforeChange", v.update), l("doubleTap", function(b) {
                var c = a.currItem.initialZoomLevel;
                a.getZoomLevel() !== c ? a.zoomTo(c, b, 333) : a.zoomTo(q.getDoubleTapZoom(!1, a.currItem), b, 333)
            }), l("preventDragEvent", function(a, b, c) {
                var d = a.target || a.srcElement;
                d && d.getAttribute("class") && a.type.indexOf("mouse") > -1 && (d.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(d.tagName)) && (c.prevent = !1)
            }), l("bindEvents", function() { b.bind(d, "pswpTap click", A), b.bind(a.scrollWrap, "pswpTap", v.onGlobalTap), a.likelyTouchDevice || b.bind(a.scrollWrap, "mouseover", v.onMouseOver) }), l("unbindEvents", function() { y || F(), t && clearInterval(t), b.unbind(document, "mouseout", L), b.unbind(document, "mousemove", K), b.unbind(d, "pswpTap click", A), b.unbind(a.scrollWrap, "pswpTap", v.onGlobalTap), b.unbind(a.scrollWrap, "mouseover", v.onMouseOver), c && (b.unbind(document, c.eventK, v.updateFullscreen), c.isFullscreen() && (q.hideAnimationDuration = 0, c.exit()), c = null) }), l("destroy", function() { q.captionEl && (f && d.removeChild(f), b.removeClass(e, "pswp__caption--empty")), i && (i.children[0].onclick = null), b.removeClass(d, "pswp__ui--over-close"), b.addClass(d, "pswp__ui--hidden"), v.setIdle(!1) }), q.showAnimationDuration || b.removeClass(d, "pswp__ui--hidden"), l("initialZoomIn", function() { q.showAnimationDuration && b.removeClass(d, "pswp__ui--hidden") }), l("initialZoomOut", function() { b.addClass(d, "pswp__ui--hidden") }), l("parseVerticalMargin", P), T(), q.shareEl && h && i && (y = !0), D(), Q(), M(), N()
        }, v.setIdle = function(a) { k = a, C(d, "ui--idle", a) }, v.update = function() { x && a.currItem ? (v.updateIndexIndicator(), q.captionEl && (q.addCaptionHTMLFn(a.currItem, e), C(e, "caption--empty", !a.currItem.title)), w = !0) : w = !1, y || F(), D() }, v.updateFullscreen = function(d) { d && setTimeout(function() { a.setScrollOffset(0, b.getScrollY()) }, 50), b[(c.isFullscreen() ? "add" : "remove") + "Class"](a.template, "pswp--fs") }, v.updateIndexIndicator = function() { q.counterEl && (g.innerHTML = a.getCurrentIndex() + 1 + q.indexIndicatorSep + q.getNumItemsFn()) }, v.onGlobalTap = function(c) {
            c = c || window.event;
            var d = c.target || c.srcElement;
            if (!r)
                if (c.detail && "mouse" === c.detail.pointerType) {
                    if (I(d)) return void a.close();
                    b.hasClass(d, "pswp__img") && (1 === a.getZoomLevel() && a.getZoomLevel() <= a.currItem.fitRatio ? q.clickToCloseNonZoomable && a.close() : a.toggleDesktopZoom(c.detail.releasePoint))
                } else if (q.tapToToggleControls && (x ? v.hideControls() : v.showControls()), q.tapToClose && (b.hasClass(d, "pswp__img") || I(d))) return void a.close()
        }, v.onMouseOver = function(a) {
            a = a || window.event;
            var b = a.target || a.srcElement;
            C(d, "ui--over-close", I(b))
        }, v.hideControls = function() { b.addClass(d, "pswp__ui--hidden"), x = !1 }, v.showControls = function() { x = !0, w || v.update(), b.removeClass(d, "pswp__ui--hidden") }, v.supportsFullscreen = function() { var a = document; return !!(a.exitFullscreen || a.mozCancelFullScreen || a.webkitExitFullscreen || a.msExitFullscreen) }, v.getFullscreenAPI = function() {
            var b, c = document.documentElement,
                d = "fullscreenchange";
            return c.requestFullscreen ? b = { enterK: "requestFullscreen", exitK: "exitFullscreen", elementK: "fullscreenElement", eventK: d } : c.mozRequestFullScreen ? b = { enterK: "mozRequestFullScreen", exitK: "mozCancelFullScreen", elementK: "mozFullScreenElement", eventK: "moz" + d } : c.webkitRequestFullscreen ? b = { enterK: "webkitRequestFullscreen", exitK: "webkitExitFullscreen", elementK: "webkitFullscreenElement", eventK: "webkit" + d } : c.msRequestFullscreen && (b = { enterK: "msRequestFullscreen", exitK: "msExitFullscreen", elementK: "msFullscreenElement", eventK: "MSFullscreenChange" }), b && (b.enter = function() { return j = q.closeOnScroll, q.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? a.template[this.enterK]() : void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT) }, b.exit = function() { return q.closeOnScroll = j, document[this.exitK]() }, b.isFullscreen = function() { return document[this.elementK] }), b
        }
    };
    return a
});
var QRCode;
! function() {
    function a(a) {
        this.mode = c.MODE_8BIT_BYTE, this.data = a, this.parsedData = [];
        for (var b = [], d = 0, e = this.data.length; e > d; d++) {
            var f = this.data.charCodeAt(d);
            f > 65536 ? (b[0] = 240 | (1835008 & f) >>> 18, b[1] = 128 | (258048 & f) >>> 12, b[2] = 128 | (4032 & f) >>> 6, b[3] = 128 | 63 & f) : f > 2048 ? (b[0] = 224 | (61440 & f) >>> 12, b[1] = 128 | (4032 & f) >>> 6, b[2] = 128 | 63 & f) : f > 128 ? (b[0] = 192 | (1984 & f) >>> 6, b[1] = 128 | 63 & f) : b[0] = f, this.parsedData = this.parsedData.concat(b)
        }
        this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239))
    }

    function b(a, b) { this.typeNumber = a, this.errorCorrectLevel = b, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = [] }

    function i(a, b) {
        if (void 0 == a.length) throw new Error(a.length + "/" + b);
        for (var c = 0; c < a.length && 0 == a[c];) c++;
        this.num = new Array(a.length - c + b);
        for (var d = 0; d < a.length - c; d++) this.num[d] = a[d + c]
    }

    function j(a, b) { this.totalCount = a, this.dataCount = b }

    function k() { this.buffer = [], this.length = 0 }

    function m() { return "undefined" != typeof CanvasRenderingContext2D }

    function n() {
        var a = !1,
            b = navigator.userAgent;
        return /android/i.test(b) && (a = !0, aMat = b.toString().match(/android ([0-9]\.[0-9])/i), aMat && aMat[1] && (a = parseFloat(aMat[1]))), a
    }

    function r(a, b) {
        for (var c = 1, e = s(a), f = 0, g = l.length; g >= f; f++) {
            var h = 0;
            switch (b) {
                case d.L:
                    h = l[f][0];
                    break;
                case d.M:
                    h = l[f][1];
                    break;
                case d.Q:
                    h = l[f][2];
                    break;
                case d.H:
                    h = l[f][3]
            }
            if (h >= e) break;
            c++
        }
        if (c > l.length) throw new Error("Too long data");
        return c
    }

    function s(a) { var b = encodeURI(a).toString().replace(/\%[0-9a-fA-F]{2}/g, "a"); return b.length + (b.length != a ? 3 : 0) }
    a.prototype = { getLength: function() { return this.parsedData.length }, write: function(a) { for (var b = 0, c = this.parsedData.length; c > b; b++) a.put(this.parsedData[b], 8) } }, b.prototype = {
        addData: function(b) {
            var c = new a(b);
            this.dataList.push(c), this.dataCache = null
        },
        isDark: function(a, b) { if (0 > a || this.moduleCount <= a || 0 > b || this.moduleCount <= b) throw new Error(a + "," + b); return this.modules[a][b] },
        getModuleCount: function() { return this.moduleCount },
        make: function() { this.makeImpl(!1, this.getBestMaskPattern()) },
        makeImpl: function(a, c) {
            this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
            for (var d = 0; d < this.moduleCount; d++) { this.modules[d] = new Array(this.moduleCount); for (var e = 0; e < this.moduleCount; e++) this.modules[d][e] = null }
            this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(a, c), this.typeNumber >= 7 && this.setupTypeNumber(a), null == this.dataCache && (this.dataCache = b.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, c)
        },
        setupPositionProbePattern: function(a, b) {
            for (var c = -1; 7 >= c; c++)
                if (!(-1 >= a + c || this.moduleCount <= a + c))
                    for (var d = -1; 7 >= d; d++) - 1 >= b + d || this.moduleCount <= b + d || (this.modules[a + c][b + d] = c >= 0 && 6 >= c && (0 == d || 6 == d) || d >= 0 && 6 >= d && (0 == c || 6 == c) || c >= 2 && 4 >= c && d >= 2 && 4 >= d ? !0 : !1)
        },
        getBestMaskPattern: function() {
            for (var a = 0, b = 0, c = 0; 8 > c; c++) {
                this.makeImpl(!0, c);
                var d = f.getLostPoint(this);
                (0 == c || a > d) && (a = d, b = c)
            }
            return b
        },
        createMovieClip: function(a, b, c) {
            var d = a.createEmptyMovieClip(b, c),
                e = 1;
            this.make();
            for (var f = 0; f < this.modules.length; f++)
                for (var g = f * e, h = 0; h < this.modules[f].length; h++) {
                    var i = h * e,
                        j = this.modules[f][h];
                    j && (d.beginFill(0, 100), d.moveTo(i, g), d.lineTo(i + e, g), d.lineTo(i + e, g + e), d.lineTo(i, g + e), d.endFill())
                }
            return d
        },
        setupTimingPattern: function() { for (var a = 8; a < this.moduleCount - 8; a++) null == this.modules[a][6] && (this.modules[a][6] = 0 == a % 2); for (var b = 8; b < this.moduleCount - 8; b++) null == this.modules[6][b] && (this.modules[6][b] = 0 == b % 2) },
        setupPositionAdjustPattern: function() {
            for (var a = f.getPatternPosition(this.typeNumber), b = 0; b < a.length; b++)
                for (var c = 0; c < a.length; c++) {
                    var d = a[b],
                        e = a[c];
                    if (null == this.modules[d][e])
                        for (var g = -2; 2 >= g; g++)
                            for (var h = -2; 2 >= h; h++) this.modules[d + g][e + h] = -2 == g || 2 == g || -2 == h || 2 == h || 0 == g && 0 == h ? !0 : !1
                }
        },
        setupTypeNumber: function(a) {
            for (var b = f.getBCHTypeNumber(this.typeNumber), c = 0; 18 > c; c++) {
                var d = !a && 1 == (1 & b >> c);
                this.modules[Math.floor(c / 3)][c % 3 + this.moduleCount - 8 - 3] = d
            }
            for (var c = 0; 18 > c; c++) {
                var d = !a && 1 == (1 & b >> c);
                this.modules[c % 3 + this.moduleCount - 8 - 3][Math.floor(c / 3)] = d
            }
        },
        setupTypeInfo: function(a, b) {
            for (var c = this.errorCorrectLevel << 3 | b, d = f.getBCHTypeInfo(c), e = 0; 15 > e; e++) {
                var g = !a && 1 == (1 & d >> e);
                6 > e ? this.modules[e][8] = g : 8 > e ? this.modules[e + 1][8] = g : this.modules[this.moduleCount - 15 + e][8] = g
            }
            for (var e = 0; 15 > e; e++) {
                var g = !a && 1 == (1 & d >> e);
                8 > e ? this.modules[8][this.moduleCount - e - 1] = g : 9 > e ? this.modules[8][15 - e - 1 + 1] = g : this.modules[8][15 - e - 1] = g
            }
            this.modules[this.moduleCount - 8][8] = !a
        },
        mapData: function(a, b) {
            for (var c = -1, d = this.moduleCount - 1, e = 7, g = 0, h = this.moduleCount - 1; h > 0; h -= 2)
                for (6 == h && h--;;) {
                    for (var i = 0; 2 > i; i++)
                        if (null == this.modules[d][h - i]) {
                            var j = !1;
                            g < a.length && (j = 1 == (1 & a[g] >>> e));
                            var k = f.getMask(b, d, h - i);
                            k && (j = !j), this.modules[d][h - i] = j, e--, -1 == e && (g++, e = 7)
                        }
                    if (d += c, 0 > d || this.moduleCount <= d) { d -= c, c = -c; break }
                }
        }
    }, b.PAD0 = 236, b.PAD1 = 17, b.createData = function(a, c, d) {
        for (var e = j.getRSBlocks(a, c), g = new k, h = 0; h < d.length; h++) {
            var i = d[h];
            g.put(i.mode, 4), g.put(i.getLength(), f.getLengthInBits(i.mode, a)), i.write(g)
        }
        for (var l = 0, h = 0; h < e.length; h++) l += e[h].dataCount;
        if (g.getLengthInBits() > 8 * l) throw new Error("code length overflow. (" + g.getLengthInBits() + ">" + 8 * l + ")");
        for (g.getLengthInBits() + 4 <= 8 * l && g.put(0, 4); 0 != g.getLengthInBits() % 8;) g.putBit(!1);
        for (;;) {
            if (g.getLengthInBits() >= 8 * l) break;
            if (g.put(b.PAD0, 8), g.getLengthInBits() >= 8 * l) break;
            g.put(b.PAD1, 8)
        }
        return b.createBytes(g, e)
    }, b.createBytes = function(a, b) {
        for (var c = 0, d = 0, e = 0, g = new Array(b.length), h = new Array(b.length), j = 0; j < b.length; j++) {
            var k = b[j].dataCount,
                l = b[j].totalCount - k;
            d = Math.max(d, k), e = Math.max(e, l), g[j] = new Array(k);
            for (var m = 0; m < g[j].length; m++) g[j][m] = 255 & a.buffer[m + c];
            c += k;
            var n = f.getErrorCorrectPolynomial(l),
                o = new i(g[j], n.getLength() - 1),
                p = o.mod(n);
            h[j] = new Array(n.getLength() - 1);
            for (var m = 0; m < h[j].length; m++) {
                var q = m + p.getLength() - h[j].length;
                h[j][m] = q >= 0 ? p.get(q) : 0
            }
        }
        for (var r = 0, m = 0; m < b.length; m++) r += b[m].totalCount;
        for (var s = new Array(r), t = 0, m = 0; d > m; m++)
            for (var j = 0; j < b.length; j++) m < g[j].length && (s[t++] = g[j][m]);
        for (var m = 0; e > m; m++)
            for (var j = 0; j < b.length; j++) m < h[j].length && (s[t++] = h[j][m]);
        return s
    };
    for (var c = { MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8 }, d = { L: 1, M: 0, Q: 3, H: 2 }, e = { PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7 }, f = {
            PATTERN_POSITION_TABLE: [
                [],
                [6, 18],
                [6, 22],
                [6, 26],
                [6, 30],
                [6, 34],
                [6, 22, 38],
                [6, 24, 42],
                [6, 26, 46],
                [6, 28, 50],
                [6, 30, 54],
                [6, 32, 58],
                [6, 34, 62],
                [6, 26, 46, 66],
                [6, 26, 48, 70],
                [6, 26, 50, 74],
                [6, 30, 54, 78],
                [6, 30, 56, 82],
                [6, 30, 58, 86],
                [6, 34, 62, 90],
                [6, 28, 50, 72, 94],
                [6, 26, 50, 74, 98],
                [6, 30, 54, 78, 102],
                [6, 28, 54, 80, 106],
                [6, 32, 58, 84, 110],
                [6, 30, 58, 86, 114],
                [6, 34, 62, 90, 118],
                [6, 26, 50, 74, 98, 122],
                [6, 30, 54, 78, 102, 126],
                [6, 26, 52, 78, 104, 130],
                [6, 30, 56, 82, 108, 134],
                [6, 34, 60, 86, 112, 138],
                [6, 30, 58, 86, 114, 142],
                [6, 34, 62, 90, 118, 146],
                [6, 30, 54, 78, 102, 126, 150],
                [6, 24, 50, 76, 102, 128, 154],
                [6, 28, 54, 80, 106, 132, 158],
                [6, 32, 58, 84, 110, 136, 162],
                [6, 26, 54, 82, 110, 138, 166],
                [6, 30, 58, 86, 114, 142, 170]
            ],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function(a) { for (var b = a << 10; f.getBCHDigit(b) - f.getBCHDigit(f.G15) >= 0;) b ^= f.G15 << f.getBCHDigit(b) - f.getBCHDigit(f.G15); return (a << 10 | b) ^ f.G15_MASK },
            getBCHTypeNumber: function(a) { for (var b = a << 12; f.getBCHDigit(b) - f.getBCHDigit(f.G18) >= 0;) b ^= f.G18 << f.getBCHDigit(b) - f.getBCHDigit(f.G18); return a << 12 | b },
            getBCHDigit: function(a) { for (var b = 0; 0 != a;) b++, a >>>= 1; return b },
            getPatternPosition: function(a) { return f.PATTERN_POSITION_TABLE[a - 1] },
            getMask: function(a, b, c) {
                switch (a) {
                    case e.PATTERN000:
                        return 0 == (b + c) % 2;
                    case e.PATTERN001:
                        return 0 == b % 2;
                    case e.PATTERN010:
                        return 0 == c % 3;
                    case e.PATTERN011:
                        return 0 == (b + c) % 3;
                    case e.PATTERN100:
                        return 0 == (Math.floor(b / 2) + Math.floor(c / 3)) % 2;
                    case e.PATTERN101:
                        return 0 == b * c % 2 + b * c % 3;
                    case e.PATTERN110:
                        return 0 == (b * c % 2 + b * c % 3) % 2;
                    case e.PATTERN111:
                        return 0 == (b * c % 3 + (b + c) % 2) % 2;
                    default:
                        throw new Error("bad maskPattern:" + a)
                }
            },
            getErrorCorrectPolynomial: function(a) { for (var b = new i([1], 0), c = 0; a > c; c++) b = b.multiply(new i([1, g.gexp(c)], 0)); return b },
            getLengthInBits: function(a, b) {
                if (b >= 1 && 10 > b) switch (a) {
                    case c.MODE_NUMBER:
                        return 10;
                    case c.MODE_ALPHA_NUM:
                        return 9;
                    case c.MODE_8BIT_BYTE:
                        return 8;
                    case c.MODE_KANJI:
                        return 8;
                    default:
                        throw new Error("mode:" + a)
                } else if (27 > b) switch (a) {
                    case c.MODE_NUMBER:
                        return 12;
                    case c.MODE_ALPHA_NUM:
                        return 11;
                    case c.MODE_8BIT_BYTE:
                        return 16;
                    case c.MODE_KANJI:
                        return 10;
                    default:
                        throw new Error("mode:" + a)
                } else {
                    if (!(41 > b)) throw new Error("type:" + b);
                    switch (a) {
                        case c.MODE_NUMBER:
                            return 14;
                        case c.MODE_ALPHA_NUM:
                            return 13;
                        case c.MODE_8BIT_BYTE:
                            return 16;
                        case c.MODE_KANJI:
                            return 12;
                        default:
                            throw new Error("mode:" + a)
                    }
                }
            },
            getLostPoint: function(a) {
                for (var b = a.getModuleCount(), c = 0, d = 0; b > d; d++)
                    for (var e = 0; b > e; e++) {
                        for (var f = 0, g = a.isDark(d, e), h = -1; 1 >= h; h++)
                            if (!(0 > d + h || d + h >= b))
                                for (var i = -1; 1 >= i; i++) 0 > e + i || e + i >= b || (0 != h || 0 != i) && g == a.isDark(d + h, e + i) && f++;
                        f > 5 && (c += 3 + f - 5)
                    }
                for (var d = 0; b - 1 > d; d++)
                    for (var e = 0; b - 1 > e; e++) {
                        var j = 0;
                        a.isDark(d, e) && j++, a.isDark(d + 1, e) && j++, a.isDark(d, e + 1) && j++, a.isDark(d + 1, e + 1) && j++, (0 == j || 4 == j) && (c += 3)
                    }
                for (var d = 0; b > d; d++)
                    for (var e = 0; b - 6 > e; e++) a.isDark(d, e) && !a.isDark(d, e + 1) && a.isDark(d, e + 2) && a.isDark(d, e + 3) && a.isDark(d, e + 4) && !a.isDark(d, e + 5) && a.isDark(d, e + 6) && (c += 40);
                for (var e = 0; b > e; e++)
                    for (var d = 0; b - 6 > d; d++) a.isDark(d, e) && !a.isDark(d + 1, e) && a.isDark(d + 2, e) && a.isDark(d + 3, e) && a.isDark(d + 4, e) && !a.isDark(d + 5, e) && a.isDark(d + 6, e) && (c += 40);
                for (var k = 0, e = 0; b > e; e++)
                    for (var d = 0; b > d; d++) a.isDark(d, e) && k++;
                var l = Math.abs(100 * k / b / b - 50) / 5;
                return c += 10 * l
            }
        }, g = { glog: function(a) { if (1 > a) throw new Error("glog(" + a + ")"); return g.LOG_TABLE[a] }, gexp: function(a) { for (; 0 > a;) a += 255; for (; a >= 256;) a -= 255; return g.EXP_TABLE[a] }, EXP_TABLE: new Array(256), LOG_TABLE: new Array(256) }, h = 0; 8 > h; h++) g.EXP_TABLE[h] = 1 << h;
    for (var h = 8; 256 > h; h++) g.EXP_TABLE[h] = g.EXP_TABLE[h - 4] ^ g.EXP_TABLE[h - 5] ^ g.EXP_TABLE[h - 6] ^ g.EXP_TABLE[h - 8];
    for (var h = 0; 255 > h; h++) g.LOG_TABLE[g.EXP_TABLE[h]] = h;
    i.prototype = {
        get: function(a) { return this.num[a] },
        getLength: function() { return this.num.length },
        multiply: function(a) {
            for (var b = new Array(this.getLength() + a.getLength() - 1), c = 0; c < this.getLength(); c++)
                for (var d = 0; d < a.getLength(); d++) b[c + d] ^= g.gexp(g.glog(this.get(c)) + g.glog(a.get(d)));
            return new i(b, 0)
        },
        mod: function(a) { if (this.getLength() - a.getLength() < 0) return this; for (var b = g.glog(this.get(0)) - g.glog(a.get(0)), c = new Array(this.getLength()), d = 0; d < this.getLength(); d++) c[d] = this.get(d); for (var d = 0; d < a.getLength(); d++) c[d] ^= g.gexp(g.glog(a.get(d)) + b); return new i(c, 0).mod(a) }
    }, j.RS_BLOCK_TABLE = [
        [1, 26, 19],
        [1, 26, 16],
        [1, 26, 13],
        [1, 26, 9],
        [1, 44, 34],
        [1, 44, 28],
        [1, 44, 22],
        [1, 44, 16],
        [1, 70, 55],
        [1, 70, 44],
        [2, 35, 17],
        [2, 35, 13],
        [1, 100, 80],
        [2, 50, 32],
        [2, 50, 24],
        [4, 25, 9],
        [1, 134, 108],
        [2, 67, 43],
        [2, 33, 15, 2, 34, 16],
        [2, 33, 11, 2, 34, 12],
        [2, 86, 68],
        [4, 43, 27],
        [4, 43, 19],
        [4, 43, 15],
        [2, 98, 78],
        [4, 49, 31],
        [2, 32, 14, 4, 33, 15],
        [4, 39, 13, 1, 40, 14],
        [2, 121, 97],
        [2, 60, 38, 2, 61, 39],
        [4, 40, 18, 2, 41, 19],
        [4, 40, 14, 2, 41, 15],
        [2, 146, 116],
        [3, 58, 36, 2, 59, 37],
        [4, 36, 16, 4, 37, 17],
        [4, 36, 12, 4, 37, 13],
        [2, 86, 68, 2, 87, 69],
        [4, 69, 43, 1, 70, 44],
        [6, 43, 19, 2, 44, 20],
        [6, 43, 15, 2, 44, 16],
        [4, 101, 81],
        [1, 80, 50, 4, 81, 51],
        [4, 50, 22, 4, 51, 23],
        [3, 36, 12, 8, 37, 13],
        [2, 116, 92, 2, 117, 93],
        [6, 58, 36, 2, 59, 37],
        [4, 46, 20, 6, 47, 21],
        [7, 42, 14, 4, 43, 15],
        [4, 133, 107],
        [8, 59, 37, 1, 60, 38],
        [8, 44, 20, 4, 45, 21],
        [12, 33, 11, 4, 34, 12],
        [3, 145, 115, 1, 146, 116],
        [4, 64, 40, 5, 65, 41],
        [11, 36, 16, 5, 37, 17],
        [11, 36, 12, 5, 37, 13],
        [5, 109, 87, 1, 110, 88],
        [5, 65, 41, 5, 66, 42],
        [5, 54, 24, 7, 55, 25],
        [11, 36, 12],
        [5, 122, 98, 1, 123, 99],
        [7, 73, 45, 3, 74, 46],
        [15, 43, 19, 2, 44, 20],
        [3, 45, 15, 13, 46, 16],
        [1, 135, 107, 5, 136, 108],
        [10, 74, 46, 1, 75, 47],
        [1, 50, 22, 15, 51, 23],
        [2, 42, 14, 17, 43, 15],
        [5, 150, 120, 1, 151, 121],
        [9, 69, 43, 4, 70, 44],
        [17, 50, 22, 1, 51, 23],
        [2, 42, 14, 19, 43, 15],
        [3, 141, 113, 4, 142, 114],
        [3, 70, 44, 11, 71, 45],
        [17, 47, 21, 4, 48, 22],
        [9, 39, 13, 16, 40, 14],
        [3, 135, 107, 5, 136, 108],
        [3, 67, 41, 13, 68, 42],
        [15, 54, 24, 5, 55, 25],
        [15, 43, 15, 10, 44, 16],
        [4, 144, 116, 4, 145, 117],
        [17, 68, 42],
        [17, 50, 22, 6, 51, 23],
        [19, 46, 16, 6, 47, 17],
        [2, 139, 111, 7, 140, 112],
        [17, 74, 46],
        [7, 54, 24, 16, 55, 25],
        [34, 37, 13],
        [4, 151, 121, 5, 152, 122],
        [4, 75, 47, 14, 76, 48],
        [11, 54, 24, 14, 55, 25],
        [16, 45, 15, 14, 46, 16],
        [6, 147, 117, 4, 148, 118],
        [6, 73, 45, 14, 74, 46],
        [11, 54, 24, 16, 55, 25],
        [30, 46, 16, 2, 47, 17],
        [8, 132, 106, 4, 133, 107],
        [8, 75, 47, 13, 76, 48],
        [7, 54, 24, 22, 55, 25],
        [22, 45, 15, 13, 46, 16],
        [10, 142, 114, 2, 143, 115],
        [19, 74, 46, 4, 75, 47],
        [28, 50, 22, 6, 51, 23],
        [33, 46, 16, 4, 47, 17],
        [8, 152, 122, 4, 153, 123],
        [22, 73, 45, 3, 74, 46],
        [8, 53, 23, 26, 54, 24],
        [12, 45, 15, 28, 46, 16],
        [3, 147, 117, 10, 148, 118],
        [3, 73, 45, 23, 74, 46],
        [4, 54, 24, 31, 55, 25],
        [11, 45, 15, 31, 46, 16],
        [7, 146, 116, 7, 147, 117],
        [21, 73, 45, 7, 74, 46],
        [1, 53, 23, 37, 54, 24],
        [19, 45, 15, 26, 46, 16],
        [5, 145, 115, 10, 146, 116],
        [19, 75, 47, 10, 76, 48],
        [15, 54, 24, 25, 55, 25],
        [23, 45, 15, 25, 46, 16],
        [13, 145, 115, 3, 146, 116],
        [2, 74, 46, 29, 75, 47],
        [42, 54, 24, 1, 55, 25],
        [23, 45, 15, 28, 46, 16],
        [17, 145, 115],
        [10, 74, 46, 23, 75, 47],
        [10, 54, 24, 35, 55, 25],
        [19, 45, 15, 35, 46, 16],
        [17, 145, 115, 1, 146, 116],
        [14, 74, 46, 21, 75, 47],
        [29, 54, 24, 19, 55, 25],
        [11, 45, 15, 46, 46, 16],
        [13, 145, 115, 6, 146, 116],
        [14, 74, 46, 23, 75, 47],
        [44, 54, 24, 7, 55, 25],
        [59, 46, 16, 1, 47, 17],
        [12, 151, 121, 7, 152, 122],
        [12, 75, 47, 26, 76, 48],
        [39, 54, 24, 14, 55, 25],
        [22, 45, 15, 41, 46, 16],
        [6, 151, 121, 14, 152, 122],
        [6, 75, 47, 34, 76, 48],
        [46, 54, 24, 10, 55, 25],
        [2, 45, 15, 64, 46, 16],
        [17, 152, 122, 4, 153, 123],
        [29, 74, 46, 14, 75, 47],
        [49, 54, 24, 10, 55, 25],
        [24, 45, 15, 46, 46, 16],
        [4, 152, 122, 18, 153, 123],
        [13, 74, 46, 32, 75, 47],
        [48, 54, 24, 14, 55, 25],
        [42, 45, 15, 32, 46, 16],
        [20, 147, 117, 4, 148, 118],
        [40, 75, 47, 7, 76, 48],
        [43, 54, 24, 22, 55, 25],
        [10, 45, 15, 67, 46, 16],
        [19, 148, 118, 6, 149, 119],
        [18, 75, 47, 31, 76, 48],
        [34, 54, 24, 34, 55, 25],
        [20, 45, 15, 61, 46, 16]
    ], j.getRSBlocks = function(a, b) {
        var c = j.getRsBlockTable(a, b);
        if (void 0 == c) throw new Error("bad rs block @ typeNumber:" + a + "/errorCorrectLevel:" + b);
        for (var d = c.length / 3, e = [], f = 0; d > f; f++)
            for (var g = c[3 * f + 0], h = c[3 * f + 1], i = c[3 * f + 2], k = 0; g > k; k++) e.push(new j(h, i));
        return e
    }, j.getRsBlockTable = function(a, b) {
        switch (b) {
            case d.L:
                return j.RS_BLOCK_TABLE[4 * (a - 1) + 0];
            case d.M:
                return j.RS_BLOCK_TABLE[4 * (a - 1) + 1];
            case d.Q:
                return j.RS_BLOCK_TABLE[4 * (a - 1) + 2];
            case d.H:
                return j.RS_BLOCK_TABLE[4 * (a - 1) + 3];
            default:
                return void 0
        }
    }, k.prototype = {
        get: function(a) { var b = Math.floor(a / 8); return 1 == (1 & this.buffer[b] >>> 7 - a % 8) },
        put: function(a, b) { for (var c = 0; b > c; c++) this.putBit(1 == (1 & a >>> b - c - 1)) },
        getLengthInBits: function() { return this.length },
        putBit: function(a) {
            var b = Math.floor(this.length / 8);
            this.buffer.length <= b && this.buffer.push(0), a && (this.buffer[b] |= 128 >>> this.length % 8), this.length++
        }
    };
    var l = [
            [17, 14, 11, 7],
            [32, 26, 20, 14],
            [53, 42, 32, 24],
            [78, 62, 46, 34],
            [106, 84, 60, 44],
            [134, 106, 74, 58],
            [154, 122, 86, 64],
            [192, 152, 108, 84],
            [230, 180, 130, 98],
            [271, 213, 151, 119],
            [321, 251, 177, 137],
            [367, 287, 203, 155],
            [425, 331, 241, 177],
            [458, 362, 258, 194],
            [520, 412, 292, 220],
            [586, 450, 322, 250],
            [644, 504, 364, 280],
            [718, 560, 394, 310],
            [792, 624, 442, 338],
            [858, 666, 482, 382],
            [929, 711, 509, 403],
            [1003, 779, 565, 439],
            [1091, 857, 611, 461],
            [1171, 911, 661, 511],
            [1273, 997, 715, 535],
            [1367, 1059, 751, 593],
            [1465, 1125, 805, 625],
            [1528, 1190, 868, 658],
            [1628, 1264, 908, 698],
            [1732, 1370, 982, 742],
            [1840, 1452, 1030, 790],
            [1952, 1538, 1112, 842],
            [2068, 1628, 1168, 898],
            [2188, 1722, 1228, 958],
            [2303, 1809, 1283, 983],
            [2431, 1911, 1351, 1051],
            [2563, 1989, 1423, 1093],
            [2699, 2099, 1499, 1139],
            [2809, 2213, 1579, 1219],
            [2953, 2331, 1663, 1273]
        ],
        o = function() {
            var a = function(a, b) { this._el = a, this._htOption = b };
            return a.prototype.draw = function(a) {
                function g(a, b) { var c = document.createElementNS("http://www.w3.org/2000/svg", a); for (var d in b) b.hasOwnProperty(d) && c.setAttribute(d, b[d]); return c }
                var b = this._htOption,
                    c = this._el,
                    d = a.getModuleCount();
                Math.floor(b.width / d), Math.floor(b.height / d), this.clear();
                var h = g("svg", { viewBox: "0 0 " + String(d) + " " + String(d), width: "100%", height: "100%", fill: b.colorLight });
                h.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), c.appendChild(h), h.appendChild(g("rect", { fill: b.colorDark, width: "1", height: "1", id: "template" }));
                for (var i = 0; d > i; i++)
                    for (var j = 0; d > j; j++)
                        if (a.isDark(i, j)) {
                            var k = g("use", { x: String(i), y: String(j) });
                            k.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"), h.appendChild(k)
                        }
            }, a.prototype.clear = function() { for (; this._el.hasChildNodes();) this._el.removeChild(this._el.lastChild) }, a
        }(),
        p = "svg" === document.documentElement.tagName.toLowerCase(),
        q = p ? o : m() ? function() {
            function a() { this._elImage.src = this._elCanvas.toDataURL("image/png"), this._elImage.style.display = "block", this._elCanvas.style.display = "none" }

            function d(a, b) {
                var c = this;
                if (c._fFail = b, c._fSuccess = a, null === c._bSupportDataURI) {
                    var d = document.createElement("img"),
                        e = function() { c._bSupportDataURI = !1, c._fFail && _fFail.call(c) },
                        f = function() { c._bSupportDataURI = !0, c._fSuccess && c._fSuccess.call(c) };
                    return d.onabort = e, d.onerror = e, d.onload = f, d.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==", void 0
                }
                c._bSupportDataURI === !0 && c._fSuccess ? c._fSuccess.call(c) : c._bSupportDataURI === !1 && c._fFail && c._fFail.call(c)
            }
            if (this._android && this._android <= 2.1) {
                var b = 1 / window.devicePixelRatio,
                    c = CanvasRenderingContext2D.prototype.drawImage;
                CanvasRenderingContext2D.prototype.drawImage = function(a, d, e, f, g, h, i, j) {
                    if ("nodeName" in a && /img/i.test(a.nodeName))
                        for (var l = arguments.length - 1; l >= 1; l--) arguments[l] = arguments[l] * b;
                    else "undefined" == typeof j && (arguments[1] *= b, arguments[2] *= b, arguments[3] *= b, arguments[4] *= b);
                    c.apply(this, arguments)
                }
            }
            var e = function(a, b) { this._bIsPainted = !1, this._android = n(), this._htOption = b, this._elCanvas = document.createElement("canvas"), this._elCanvas.width = b.width, this._elCanvas.height = b.height, a.appendChild(this._elCanvas), this._el = a, this._oContext = this._elCanvas.getContext("2d"), this._bIsPainted = !1, this._elImage = document.createElement("img"), this._elImage.style.display = "none", this._el.appendChild(this._elImage), this._bSupportDataURI = null };
            return e.prototype.draw = function(a) {
                var b = this._elImage,
                    c = this._oContext,
                    d = this._htOption,
                    e = a.getModuleCount(),
                    f = d.width / e,
                    g = d.height / e,
                    h = Math.round(f),
                    i = Math.round(g);
                b.style.display = "none", this.clear();
                for (var j = 0; e > j; j++)
                    for (var k = 0; e > k; k++) {
                        var l = a.isDark(j, k),
                            m = k * f,
                            n = j * g;
                        c.strokeStyle = l ? d.colorDark : d.colorLight, c.lineWidth = 1, c.fillStyle = l ? d.colorDark : d.colorLight, c.fillRect(m, n, f, g), c.strokeRect(Math.floor(m) + .5, Math.floor(n) + .5, h, i), c.strokeRect(Math.ceil(m) - .5, Math.ceil(n) - .5, h, i)
                    }
                this._bIsPainted = !0
            }, e.prototype.makeImage = function() { this._bIsPainted && d.call(this, a) }, e.prototype.isPainted = function() { return this._bIsPainted }, e.prototype.clear = function() { this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1 }, e.prototype.round = function(a) { return a ? Math.floor(1e3 * a) / 1e3 : a }, e
        }() : function() {
            var a = function(a, b) { this._el = a, this._htOption = b };
            return a.prototype.draw = function(a) {
                for (var b = this._htOption, c = this._el, d = a.getModuleCount(), e = Math.floor(b.width / d), f = Math.floor(b.height / d), g = ['<table style="border:0;border-collapse:collapse;">'], h = 0; d > h; h++) {
                    g.push("<tr>");
                    for (var i = 0; d > i; i++) g.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + e + "px;height:" + f + "px;background-color:" + (a.isDark(h, i) ? b.colorDark : b.colorLight) + ';"></td>');
                    g.push("</tr>")
                }
                g.push("</table>"), c.innerHTML = g.join("");
                var j = c.childNodes[0],
                    k = (b.width - j.offsetWidth) / 2,
                    l = (b.height - j.offsetHeight) / 2;
                k > 0 && l > 0 && (j.style.margin = l + "px " + k + "px")
            }, a.prototype.clear = function() { this._el.innerHTML = "" }, a
        }();
    QRCode = function(a, b) {
        if (this._htOption = { width: 256, height: 256, typeNumber: 4, colorDark: "#000000", colorLight: "#ffffff", correctLevel: d.H }, "string" == typeof b && (b = { text: b }), b)
            for (var c in b) this._htOption[c] = b[c];
        "string" == typeof a && (a = document.getElementById(a)), this._android = n(), this._el = a, this._oQRCode = null, this._oDrawing = new q(this._el, this._htOption), this._htOption.text && this.makeCode(this._htOption.text)
    }, QRCode.prototype.makeCode = function(a) { this._oQRCode = new b(r(a, this._htOption.correctLevel), this._htOption.correctLevel), this._oQRCode.addData(a), this._oQRCode.make(), this._el.title = a, this._oDrawing.draw(this._oQRCode), this.makeImage() }, QRCode.prototype.makeImage = function() { "function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage() }, QRCode.prototype.clear = function() { this._oDrawing.clear() }, QRCode.CorrectLevel = d
}();
"use strict";

function _typeof(t) { return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }! function(t, e) { "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? module.exports = e(t): "function" == typeof define && define.amd ? define([], e) : t.LazyLoad = e(t) }("undefined" != typeof global ? global : window, function(t) {
    "function" == typeof define && define.amd && (t = window);
    var e = { src: "data-original", srcset: "data-srcset", selector: ".lazyload", root: null, rootMargin: "0px", threshold: 0 },
        o = function t() {
            var e = {},
                o = !1,
                r = 0,
                n = arguments.length;
            "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (o = arguments[0], r++);
            for (var s = function(r) { for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (o && "[object Object]" === Object.prototype.toString.call(r[n]) ? e[n] = t(!0, e[n], r[n]) : e[n] = r[n]) }; r < n; r++) { s(arguments[r]) }
            return e
        };

    function r(t, r) { this.settings = o(e, r || {}), this.images = t || document.querySelectorAll(this.settings.selector), this.observer = null, this.init() }
    if (r.prototype = {
            init: function() {
                if (t.IntersectionObserver) {
                    var e = this,
                        o = { root: this.settings.root, rootMargin: this.settings.rootMargin, threshold: [this.settings.threshold] };
                    this.observer = new IntersectionObserver(function(t) {
                        Array.prototype.forEach.call(t, function(t) {
                            if (t.isIntersecting) {
                                e.observer.unobserve(t.target);
                                var o = t.target.getAttribute(e.settings.src),
                                    r = t.target.getAttribute(e.settings.srcset);
                                "img" === t.target.tagName.toLowerCase() ? (o && (t.target.src = o), r && (t.target.srcset = r)) : t.target.style.backgroundImage = "url(" + o + ")"
                            }
                        })
                    }, o), Array.prototype.forEach.call(this.images, function(t) { e.observer.observe(t) })
                } else this.loadImages()
            },
            loadAndDestroy: function() { this.settings && (this.loadImages(), this.destroy()) },
            loadImages: function() {
                if (this.settings) {
                    var t = this;
                    Array.prototype.forEach.call(this.images, function(e) {
                        var o = e.getAttribute(t.settings.src),
                            r = e.getAttribute(t.settings.srcset);
                        "img" === e.tagName.toLowerCase() ? (o && (e.src = o), r && (e.srcset = r)) : e.style.backgroundImage = "url('" + o + "')"
                    })
                }
            },
            destroy: function() { this.settings && (this.observer.disconnect(), this.settings = null) }
        }, t.lazyload = function(t, e) { return new r(t, e) }, t.jQuery) {
        var n = t.jQuery;
        n.fn.lazyload = function(t) { return (t = t || {}).attribute = t.attribute || "data-original", new r(n.makeArray(this), t), this }
    }
    return r
});