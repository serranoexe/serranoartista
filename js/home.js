!(function () {
  function t(t) {
    return t && t.__esModule ? t.default : t;
  }
  var e =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : {},
    r = {},
    n = {},
    i = e.parcelRequire1f3e;
  function s(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function o(t, e) {
    (t.prototype = Object.create(e.prototype)),
      (t.prototype.constructor = t),
      (t.__proto__ = e);
  }
  /*!
   * GSAP 3.10.4
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ null == i &&
    (((i = function (t) {
      if (t in r) return r[t].exports;
      if (t in n) {
        var e = n[t];
        delete n[t];
        var i = { id: t, exports: {} };
        return (r[t] = i), e.call(i.exports, i, i.exports), i.exports;
      }
      var s = new Error("Cannot find module '" + t + "'");
      throw ((s.code = "MODULE_NOT_FOUND"), s);
    }).register = function (t, e) {
      n[t] = e;
    }),
    (e.parcelRequire1f3e = i)),
    i.register("hobco", function (t, e) {
      !(function (e, r) {
        t.exports ? (t.exports = r()) : (e.EvEmitter = r());
      })("undefined" != typeof window ? window : t.exports, function () {
        function t() {}
        let e = t.prototype;
        return (
          (e.on = function (t, e) {
            if (!t || !e) return this;
            let r = (this._events = this._events || {}),
              n = (r[t] = r[t] || []);
            return n.includes(e) || n.push(e), this;
          }),
          (e.once = function (t, e) {
            if (!t || !e) return this;
            this.on(t, e);
            let r = (this._onceEvents = this._onceEvents || {});
            return ((r[t] = r[t] || {})[e] = !0), this;
          }),
          (e.off = function (t, e) {
            let r = this._events && this._events[t];
            if (!r || !r.length) return this;
            let n = r.indexOf(e);
            return -1 != n && r.splice(n, 1), this;
          }),
          (e.emitEvent = function (t, e) {
            let r = this._events && this._events[t];
            if (!r || !r.length) return this;
            (r = r.slice(0)), (e = e || []);
            let n = this._onceEvents && this._onceEvents[t];
            for (let i of r) {
              n && n[i] && (this.off(t, i), delete n[i]), i.apply(this, e);
            }
            return this;
          }),
          (e.allOff = function () {
            return delete this._events, delete this._onceEvents, this;
          }),
          t
        );
      });
    });
  var a,
    u,
    h,
    l,
    c,
    f,
    d,
    p,
    _,
    m,
    g,
    v,
    y,
    b,
    x,
    w,
    T,
    O,
    M,
    D,
    k,
    C,
    E,
    A,
    S,
    P,
    I,
    L,
    R = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    z = { duration: 0.5, overwrite: !1, delay: 0 },
    F = 1e8,
    Y = 1e-8,
    B = 2 * Math.PI,
    q = B / 4,
    X = 0,
    N = Math.sqrt,
    j = Math.cos,
    U = Math.sin,
    V = function (t) {
      return "string" == typeof t;
    },
    W = function (t) {
      return "function" == typeof t;
    },
    G = function (t) {
      return "number" == typeof t;
    },
    H = function (t) {
      return void 0 === t;
    },
    Q = function (t) {
      return "object" == typeof t;
    },
    $ = function (t) {
      return !1 !== t;
    },
    Z = function () {
      return "undefined" != typeof window;
    },
    J = function (t) {
      return W(t) || V(t);
    },
    K =
      ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
      function () {},
    tt = Array.isArray,
    et = /(?:-?\.?\d|\.)+/gi,
    rt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    nt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    st = /[+-]=-?[.\d]+/,
    ot = /[^,'"\[\]\s]+/gi,
    at = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    ut = {},
    ht = {},
    lt = function (t) {
      return (ht = zt(t, ut)) && Mr;
    },
    ct = function (t, e) {
      return console.warn(
        "Invalid property",
        t,
        "set to",
        e,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    ft = function (t, e) {
      return !e && console.warn(t);
    },
    dt = function (t, e) {
      return (t && (ut[t] = e) && ht && (ht[t] = e)) || ut;
    },
    pt = function () {
      return 0;
    },
    _t = {},
    mt = [],
    gt = {},
    vt = {},
    yt = {},
    bt = 30,
    xt = [],
    wt = "",
    Tt = function (t) {
      var e,
        r,
        n = t[0];
      if ((Q(n) || W(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
        for (r = xt.length; r-- && !xt[r].targetTest(n); );
        e = xt[r];
      }
      for (r = t.length; r--; )
        (t[r] && (t[r]._gsap || (t[r]._gsap = new He(t[r], e)))) ||
          t.splice(r, 1);
      return t;
    },
    Ot = function (t) {
      return t._gsap || Tt(de(t))[0]._gsap;
    },
    Mt = function (t, e, r) {
      return (r = t[e]) && W(r)
        ? t[e]()
        : (H(r) && t.getAttribute && t.getAttribute(e)) || r;
    },
    Dt = function (t, e) {
      return (t = t.split(",")).forEach(e) || t;
    },
    kt = function (t) {
      return Math.round(1e5 * t) / 1e5 || 0;
    },
    Ct = function (t) {
      return Math.round(1e7 * t) / 1e7 || 0;
    },
    Et = function (t, e) {
      var r = e.charAt(0),
        n = parseFloat(e.substr(2));
      return (
        (t = parseFloat(t)),
        "+" === r ? t + n : "-" === r ? t - n : "*" === r ? t * n : t / n
      );
    },
    At = function (t, e) {
      for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r; );
      return n < r;
    },
    St = function () {
      var t,
        e,
        r = mt.length,
        n = mt.slice(0);
      for (gt = {}, mt.length = 0, t = 0; t < r; t++)
        (e = n[t]) &&
          e._lazy &&
          (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
    },
    Pt = function (t, e, r, n) {
      mt.length && St(), t.render(e, r, n), mt.length && St();
    },
    It = function (t) {
      var e = parseFloat(t);
      return (e || 0 === e) && (t + "").match(ot).length < 2
        ? e
        : V(t)
        ? t.trim()
        : t;
    },
    Lt = function (t) {
      return t;
    },
    Rt = function (t, e) {
      for (var r in e) r in t || (t[r] = e[r]);
      return t;
    },
    zt = function (t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    Ft = function t(e, r) {
      for (var n in r)
        "__proto__" !== n &&
          "constructor" !== n &&
          "prototype" !== n &&
          (e[n] = Q(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]);
      return e;
    },
    Yt = function (t, e) {
      var r,
        n = {};
      for (r in t) r in e || (n[r] = t[r]);
      return n;
    },
    Bt = function (t) {
      var e,
        r = t.parent || u,
        n = t.keyframes
          ? ((e = tt(t.keyframes)),
            function (t, r) {
              for (var n in r)
                n in t ||
                  ("duration" === n && e) ||
                  "ease" === n ||
                  (t[n] = r[n]);
            })
          : Rt;
      if ($(t.inherit))
        for (; r; ) n(t, r.vars.defaults), (r = r.parent || r._dp);
      return t;
    },
    qt = function (t, e, r, n, i) {
      void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
      var s,
        o = t[n];
      if (i) for (s = e[i]; o && o[i] > s; ) o = o._prev;
      return (
        o
          ? ((e._next = o._next), (o._next = e))
          : ((e._next = t[r]), (t[r] = e)),
        e._next ? (e._next._prev = e) : (t[n] = e),
        (e._prev = o),
        (e.parent = e._dp = t),
        e
      );
    },
    Xt = function (t, e, r, n) {
      void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
      var i = e._prev,
        s = e._next;
      i ? (i._next = s) : t[r] === e && (t[r] = s),
        s ? (s._prev = i) : t[n] === e && (t[n] = i),
        (e._next = e._prev = e.parent = null);
    },
    Nt = function (t, e) {
      t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
        (t._act = 0);
    },
    jt = function (t, e) {
      if (t && (!e || e._end > t._dur || e._start < 0))
        for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
      return t;
    },
    Ut = function (t) {
      for (var e = t.parent; e && e.parent; )
        (e._dirty = 1), e.totalDuration(), (e = e.parent);
      return t;
    },
    Vt = function t(e) {
      return !e || (e._ts && t(e.parent));
    },
    Wt = function (t) {
      return t._repeat ? Gt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
    },
    Gt = function (t, e) {
      var r = Math.floor((t /= e));
      return t && r === t ? r - 1 : r;
    },
    Ht = function (t, e) {
      return (
        (t - e._start) * e._ts +
        (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
      );
    },
    Qt = function (t) {
      return (t._end = Ct(
        t._start + (t._tDur / Math.abs(t._ts || t._rts || Y) || 0)
      ));
    },
    $t = function (t, e) {
      var r = t._dp;
      return (
        r &&
          r.smoothChildTiming &&
          t._ts &&
          ((t._start = Ct(
            r._time -
              (t._ts > 0
                ? e / t._ts
                : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
          )),
          Qt(t),
          r._dirty || jt(r, t)),
        t
      );
    },
    Zt = function (t, e) {
      var r;
      if (
        ((e._time || (e._initted && !e._dur)) &&
          ((r = Ht(t.rawTime(), e)),
          (!e._dur || he(0, e.totalDuration(), r) - e._tTime > Y) &&
            e.render(r, !0)),
        jt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
      ) {
        if (t._dur < t.duration())
          for (r = t; r._dp; )
            r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
        t._zTime = -1e-8;
      }
    },
    Jt = function (t, e, r, n) {
      return (
        e.parent && Nt(e),
        (e._start = Ct(
          (G(r) ? r : r || t !== u ? oe(t, r, e) : t._time) + e._delay
        )),
        (e._end = Ct(
          e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
        )),
        qt(t, e, "_first", "_last", t._sort ? "_start" : 0),
        re(e) || (t._recent = e),
        n || Zt(t, e),
        t
      );
    },
    Kt = function (t, e) {
      return (
        (ut.ScrollTrigger || ct("scrollTrigger", e)) &&
        ut.ScrollTrigger.create(e, t)
      );
    },
    te = function (t, e, r, n) {
      return (
        rr(t, e),
        t._initted
          ? !r &&
            t._pt &&
            ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
            d !== Re.frame
            ? (mt.push(t), (t._lazy = [e, n]), 1)
            : void 0
          : 1
      );
    },
    ee = function t(e) {
      var r = e.parent;
      return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r));
    },
    re = function (t) {
      var e = t.data;
      return "isFromStart" === e || "isStart" === e;
    },
    ne = function (t, e, r, n) {
      var i = t._repeat,
        s = Ct(e) || 0,
        o = t._tTime / t._tDur;
      return (
        o && !n && (t._time *= s / t._dur),
        (t._dur = s),
        (t._tDur = i ? (i < 0 ? 1e10 : Ct(s * (i + 1) + t._rDelay * i)) : s),
        o > 0 && !n ? $t(t, (t._tTime = t._tDur * o)) : t.parent && Qt(t),
        r || jt(t.parent, t),
        t
      );
    },
    ie = function (t) {
      return t instanceof $e ? jt(t) : ne(t, t._dur);
    },
    se = { _start: 0, endTime: pt, totalDuration: pt },
    oe = function t(e, r, n) {
      var i,
        s,
        o,
        a = e.labels,
        u = e._recent || se,
        h = e.duration() >= F ? u.endTime(!1) : e._dur;
      return V(r) && (isNaN(r) || r in a)
        ? ((s = r.charAt(0)),
          (o = "%" === r.substr(-1)),
          (i = r.indexOf("=")),
          "<" === s || ">" === s
            ? (i >= 0 && (r = r.replace(/=/, "")),
              ("<" === s ? u._start : u.endTime(u._repeat >= 0)) +
                (parseFloat(r.substr(1)) || 0) *
                  (o ? (i < 0 ? u : n).totalDuration() / 100 : 1))
            : i < 0
            ? (r in a || (a[r] = h), a[r])
            : ((s = parseFloat(r.charAt(i - 1) + r.substr(i + 1))),
              o && n && (s = (s / 100) * (tt(n) ? n[0] : n).totalDuration()),
              i > 1 ? t(e, r.substr(0, i - 1), n) + s : h + s))
        : null == r
        ? h
        : +r;
    },
    ae = function (t, e, r) {
      var n,
        i,
        s = G(e[1]),
        o = (s ? 2 : 1) + (t < 2 ? 0 : 1),
        a = e[o];
      if ((s && (a.duration = e[1]), (a.parent = r), t)) {
        for (n = a, i = r; i && !("immediateRender" in n); )
          (n = i.vars.defaults || {}), (i = $(i.vars.inherit) && i.parent);
        (a.immediateRender = $(n.immediateRender)),
          t < 2 ? (a.runBackwards = 1) : (a.startAt = e[o - 1]);
      }
      return new ar(e[0], a, e[o + 1]);
    },
    ue = function (t, e) {
      return t || 0 === t ? e(t) : e;
    },
    he = function (t, e, r) {
      return r < t ? t : r > e ? e : r;
    },
    le = function (t, e) {
      return V(t) && (e = at.exec(t)) ? e[1] : "";
    },
    ce = [].slice,
    fe = function (t, e) {
      return (
        t &&
        Q(t) &&
        "length" in t &&
        ((!e && !t.length) || (t.length - 1 in t && Q(t[0]))) &&
        !t.nodeType &&
        t !== h
      );
    },
    de = function (t, e, r) {
      return !V(t) || r || (!l && ze())
        ? tt(t)
          ? (function (t, e, r) {
              return (
                void 0 === r && (r = []),
                t.forEach(function (t) {
                  var n;
                  return (V(t) && !e) || fe(t, 1)
                    ? (n = r).push.apply(n, de(t))
                    : r.push(t);
                }) || r
              );
            })(t, r)
          : fe(t)
          ? ce.call(t, 0)
          : t
          ? [t]
          : []
        : ce.call((e || c).querySelectorAll(t), 0);
    },
    pe = function (t) {
      return t.sort(function () {
        return 0.5 - Math.random();
      });
    },
    _e = function (t) {
      if (W(t)) return t;
      var e = Q(t) ? t : { each: t },
        r = je(e.ease),
        n = e.from || 0,
        i = parseFloat(e.base) || 0,
        s = {},
        o = n > 0 && n < 1,
        a = isNaN(n) || o,
        u = e.axis,
        h = n,
        l = n;
      return (
        V(n)
          ? (h = l = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
          : !o && a && ((h = n[0]), (l = n[1])),
        function (t, o, c) {
          var f,
            d,
            p,
            _,
            m,
            g,
            v,
            y,
            b,
            x = (c || e).length,
            w = s[x];
          if (!w) {
            if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, F])[1])) {
              for (
                v = -1e8;
                v < (v = c[b++].getBoundingClientRect().left) && b < x;

              );
              b--;
            }
            for (
              w = s[x] = [],
                f = a ? Math.min(b, x) * h - 0.5 : n % b,
                d = b === F ? 0 : a ? (x * l) / b - 0.5 : (n / b) | 0,
                v = 0,
                y = F,
                g = 0;
              g < x;
              g++
            )
              (p = (g % b) - f),
                (_ = d - ((g / b) | 0)),
                (w[g] = m = u ? Math.abs("y" === u ? _ : p) : N(p * p + _ * _)),
                m > v && (v = m),
                m < y && (y = m);
            "random" === n && pe(w),
              (w.max = v - y),
              (w.min = y),
              (w.v = x =
                (parseFloat(e.amount) ||
                  parseFloat(e.each) *
                    (b > x
                      ? x - 1
                      : u
                      ? "y" === u
                        ? x / b
                        : b
                      : Math.max(b, x / b)) ||
                  0) * ("edges" === n ? -1 : 1)),
              (w.b = x < 0 ? i - x : i),
              (w.u = le(e.amount || e.each) || 0),
              (r = r && x < 0 ? Xe(r) : r);
          }
          return (
            (x = (w[t] - w.min) / w.max || 0),
            Ct(w.b + (r ? r(x) : x) * w.v) + w.u
          );
        }
      );
    },
    me = function (t) {
      var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
      return function (r) {
        var n = Math.round(parseFloat(r) / t) * t * e;
        return (n - (n % 1)) / e + (G(r) ? 0 : le(r));
      };
    },
    ge = function (t, e) {
      var r,
        n,
        i = tt(t);
      return (
        !i &&
          Q(t) &&
          ((r = i = t.radius || F),
          t.values
            ? ((t = de(t.values)), (n = !G(t[0])) && (r *= r))
            : (t = me(t.increment))),
        ue(
          e,
          i
            ? W(t)
              ? function (e) {
                  return (n = t(e)), Math.abs(n - e) <= r ? n : e;
                }
              : function (e) {
                  for (
                    var i,
                      s,
                      o = parseFloat(n ? e.x : e),
                      a = parseFloat(n ? e.y : 0),
                      u = F,
                      h = 0,
                      l = t.length;
                    l--;

                  )
                    (i = n
                      ? (i = t[l].x - o) * i + (s = t[l].y - a) * s
                      : Math.abs(t[l] - o)) < u && ((u = i), (h = l));
                  return (
                    (h = !r || u <= r ? t[h] : e),
                    n || h === e || G(e) ? h : h + le(e)
                  );
                }
            : me(t)
        )
      );
    },
    ve = function (t, e, r, n) {
      return ue(tt(t) ? !e : !0 === r ? ((r = 0), !1) : !n, function () {
        return tt(t)
          ? t[~~(Math.random() * t.length)]
          : (n = (r = r || 1e-5) < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r
                ) *
                  r *
                  n
              ) / n;
      });
    },
    ye = function (t, e, r) {
      return ue(r, function (r) {
        return t[~~e(r)];
      });
    },
    be = function (t) {
      for (var e, r, n, i, s = 0, o = ""; ~(e = t.indexOf("random(", s)); )
        (n = t.indexOf(")", e)),
          (i = "[" === t.charAt(e + 7)),
          (r = t.substr(e + 7, n - e - 7).match(i ? ot : et)),
          (o +=
            t.substr(s, e - s) +
            ve(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5)),
          (s = n + 1);
      return o + t.substr(s, t.length - s);
    },
    xe = function (t, e, r, n, i) {
      var s = e - t,
        o = n - r;
      return ue(i, function (e) {
        return r + (((e - t) / s) * o || 0);
      });
    },
    we = function (t, e, r) {
      var n,
        i,
        s,
        o = t.labels,
        a = F;
      for (n in o)
        (i = o[n] - e) < 0 == !!r &&
          i &&
          a > (i = Math.abs(i)) &&
          ((s = n), (a = i));
      return s;
    },
    Te = function (t, e, r) {
      var n,
        i,
        s = t.vars,
        o = s[e];
      if (o)
        return (
          (n = s[e + "Params"]),
          (i = s.callbackScope || t),
          r && mt.length && St(),
          n ? o.apply(i, n) : o.call(i)
        );
    },
    Oe = function (t) {
      return (
        Nt(t),
        t.scrollTrigger && t.scrollTrigger.kill(!1),
        t.progress() < 1 && Te(t, "onInterrupt"),
        t
      );
    },
    Me = function (t) {
      var e = (t = (!t.name && t.default) || t).name,
        r = W(t),
        n =
          e && !r && t.init
            ? function () {
                this._props = [];
              }
            : t,
        i = {
          init: pt,
          render: mr,
          add: tr,
          kill: vr,
          modifier: gr,
          rawVars: 0,
        },
        s = { targetTest: 0, get: 0, getSetter: fr, aliases: {}, register: 0 };
      if ((ze(), t !== n)) {
        if (vt[e]) return;
        Rt(n, Rt(Yt(t, i), s)),
          zt(n.prototype, zt(i, Yt(t, s))),
          (vt[(n.prop = e)] = n),
          t.targetTest && (xt.push(n), (_t[e] = 1)),
          (e =
            ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
            "Plugin");
      }
      dt(e, n), t.register && t.register(Mr, n, xr);
    },
    De = 255,
    ke = {
      aqua: [0, De, De],
      lime: [0, De, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, De],
      navy: [0, 0, 128],
      white: [De, De, De],
      olive: [128, 128, 0],
      yellow: [De, De, 0],
      orange: [De, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [De, 0, 0],
      pink: [De, 192, 203],
      cyan: [0, De, De],
      transparent: [De, De, De, 0],
    },
    Ce = function (t, e, r) {
      return (
        ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
          ? e + (r - e) * t * 6
          : t < 0.5
          ? r
          : 3 * t < 2
          ? e + (r - e) * (2 / 3 - t) * 6
          : e) *
          De +
          0.5) |
        0
      );
    },
    Ee = function (t, e, r) {
      var n,
        i,
        s,
        o,
        a,
        u,
        h,
        l,
        c,
        f,
        d = t ? (G(t) ? [t >> 16, (t >> 8) & De, t & De] : 0) : ke.black;
      if (!d) {
        if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ke[t]))
          d = ke[t];
        else if ("#" === t.charAt(0)) {
          if (
            (t.length < 6 &&
              ((n = t.charAt(1)),
              (i = t.charAt(2)),
              (s = t.charAt(3)),
              (t =
                "#" +
                n +
                n +
                i +
                i +
                s +
                s +
                (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
            9 === t.length)
          )
            return [
              (d = parseInt(t.substr(1, 6), 16)) >> 16,
              (d >> 8) & De,
              d & De,
              parseInt(t.substr(7), 16) / 255,
            ];
          d = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & De, t & De];
        } else if ("hsl" === t.substr(0, 3))
          if (((d = f = t.match(et)), e)) {
            if (~t.indexOf("="))
              return (d = t.match(rt)), r && d.length < 4 && (d[3] = 1), d;
          } else
            (o = (+d[0] % 360) / 360),
              (a = +d[1] / 100),
              (n =
                2 * (u = +d[2] / 100) -
                (i = u <= 0.5 ? u * (a + 1) : u + a - u * a)),
              d.length > 3 && (d[3] *= 1),
              (d[0] = Ce(o + 1 / 3, n, i)),
              (d[1] = Ce(o, n, i)),
              (d[2] = Ce(o - 1 / 3, n, i));
        else d = t.match(et) || ke.transparent;
        d = d.map(Number);
      }
      return (
        e &&
          !f &&
          ((n = d[0] / De),
          (i = d[1] / De),
          (s = d[2] / De),
          (u = ((h = Math.max(n, i, s)) + (l = Math.min(n, i, s))) / 2),
          h === l
            ? (o = a = 0)
            : ((c = h - l),
              (a = u > 0.5 ? c / (2 - h - l) : c / (h + l)),
              (o =
                h === n
                  ? (i - s) / c + (i < s ? 6 : 0)
                  : h === i
                  ? (s - n) / c + 2
                  : (n - i) / c + 4),
              (o *= 60)),
          (d[0] = ~~(o + 0.5)),
          (d[1] = ~~(100 * a + 0.5)),
          (d[2] = ~~(100 * u + 0.5))),
        r && d.length < 4 && (d[3] = 1),
        d
      );
    },
    Ae = function (t) {
      var e = [],
        r = [],
        n = -1;
      return (
        t.split(Pe).forEach(function (t) {
          var i = t.match(nt) || [];
          e.push.apply(e, i), r.push((n += i.length + 1));
        }),
        (e.c = r),
        e
      );
    },
    Se = function (t, e, r) {
      var n,
        i,
        s,
        o,
        a = "",
        u = (t + a).match(Pe),
        h = e ? "hsla(" : "rgba(",
        l = 0;
      if (!u) return t;
      if (
        ((u = u.map(function (t) {
          return (
            (t = Ee(t, e, 1)) &&
            h +
              (e
                ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                : t.join(",")) +
              ")"
          );
        })),
        r && ((s = Ae(t)), (n = r.c).join(a) !== s.c.join(a)))
      )
        for (o = (i = t.replace(Pe, "1").split(nt)).length - 1; l < o; l++)
          a +=
            i[l] +
            (~n.indexOf(l)
              ? u.shift() || h + "0,0,0,0)"
              : (s.length ? s : u.length ? u : r).shift());
      if (!i)
        for (o = (i = t.split(Pe)).length - 1; l < o; l++) a += i[l] + u[l];
      return a + i[o];
    },
    Pe = (function () {
      var t,
        e =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (t in ke) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    })(),
    Ie = /hsl[a]?\(/,
    Le = function (t) {
      var e,
        r = t.join(" ");
      if (((Pe.lastIndex = 0), Pe.test(r)))
        return (
          (e = Ie.test(r)),
          (t[1] = Se(t[1], e)),
          (t[0] = Se(t[0], e, Ae(t[1]))),
          !0
        );
    },
    Re =
      ((w = Date.now),
      (T = 500),
      (O = 33),
      (M = w()),
      (D = M),
      (C = k = 1e3 / 240),
      (A = function t(e) {
        var r,
          n,
          i,
          s,
          o = w() - D,
          a = !0 === e;
        if (
          (o > T && (M += o - O),
          ((r = (i = (D += o) - M) - C) > 0 || a) &&
            ((s = ++y.frame),
            (b = i - 1e3 * y.time),
            (y.time = i /= 1e3),
            (C += r + (r >= k ? 4 : k - r)),
            (n = 1)),
          a || (m = g(t)),
          n)
        )
          for (x = 0; x < E.length; x++) E[x](i, b, s, e);
      }),
      (y = {
        time: 0,
        frame: 0,
        tick: function () {
          A(!0);
        },
        deltaRatio: function (t) {
          return b / (1e3 / (t || 60));
        },
        wake: function () {
          f &&
            (!l &&
              Z() &&
              ((h = l = window),
              (c = h.document || {}),
              (ut.gsap = Mr),
              (h.gsapVersions || (h.gsapVersions = [])).push(Mr.version),
              lt(ht || h.GreenSockGlobals || (!h.gsap && h) || {}),
              (v = h.requestAnimationFrame)),
            m && y.sleep(),
            (g =
              v ||
              function (t) {
                return setTimeout(t, (C - 1e3 * y.time + 1) | 0);
              }),
            (_ = 1),
            A(2));
        },
        sleep: function () {
          (v ? h.cancelAnimationFrame : clearTimeout)(m), (_ = 0), (g = pt);
        },
        lagSmoothing: function (t, e) {
          (T = t || 1e8), (O = Math.min(e, T, 0));
        },
        fps: function (t) {
          (k = 1e3 / (t || 240)), (C = 1e3 * y.time + k);
        },
        add: function (t, e, r) {
          var n = e
            ? function (e, r, i, s) {
                t(e, r, i, s), y.remove(n);
              }
            : t;
          return y.remove(t), E[r ? "unshift" : "push"](n), ze(), n;
        },
        remove: function (t, e) {
          ~(e = E.indexOf(t)) && E.splice(e, 1) && x >= e && x--;
        },
        _listeners: (E = []),
      })),
    ze = function () {
      return !_ && Re.wake();
    },
    Fe = {},
    Ye = /^[\d.\-M][\d.\-,\s]/,
    Be = /["']/g,
    qe = function (t) {
      for (
        var e,
          r,
          n,
          i = {},
          s = t.substr(1, t.length - 3).split(":"),
          o = s[0],
          a = 1,
          u = s.length;
        a < u;
        a++
      )
        (r = s[a]),
          (e = a !== u - 1 ? r.lastIndexOf(",") : r.length),
          (n = r.substr(0, e)),
          (i[o] = isNaN(n) ? n.replace(Be, "").trim() : +n),
          (o = r.substr(e + 1).trim());
      return i;
    },
    Xe = function (t) {
      return function (e) {
        return 1 - t(1 - e);
      };
    },
    Ne = function t(e, r) {
      for (var n, i = e._first; i; )
        i instanceof $e
          ? t(i, r)
          : !i.vars.yoyoEase ||
            (i._yoyo && i._repeat) ||
            i._yoyo === r ||
            (i.timeline
              ? t(i.timeline, r)
              : ((n = i._ease),
                (i._ease = i._yEase),
                (i._yEase = n),
                (i._yoyo = r))),
          (i = i._next);
    },
    je = function (t, e) {
      return (
        (t &&
          (W(t)
            ? t
            : Fe[t] ||
              (function (t) {
                var e,
                  r,
                  n,
                  i,
                  s = (t + "").split("("),
                  o = Fe[s[0]];
                return o && s.length > 1 && o.config
                  ? o.config.apply(
                      null,
                      ~t.indexOf("{")
                        ? [qe(s[1])]
                        : ((e = t),
                          (r = e.indexOf("(") + 1),
                          (n = e.indexOf(")")),
                          (i = e.indexOf("(", r)),
                          e.substring(
                            r,
                            ~i && i < n ? e.indexOf(")", n + 1) : n
                          ))
                            .split(",")
                            .map(It)
                    )
                  : Fe._CE && Ye.test(t)
                  ? Fe._CE("", t)
                  : o;
              })(t))) ||
        e
      );
    },
    Ue = function (t, e, r, n) {
      void 0 === r &&
        (r = function (t) {
          return 1 - e(1 - t);
        }),
        void 0 === n &&
          (n = function (t) {
            return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
          });
      var i,
        s = { easeIn: e, easeOut: r, easeInOut: n };
      return (
        Dt(t, function (t) {
          for (var e in ((Fe[t] = ut[t] = s),
          (Fe[(i = t.toLowerCase())] = r),
          s))
            Fe[
              i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
            ] = Fe[t + "." + e] = s[e];
        }),
        s
      );
    },
    Ve = function (t) {
      return function (e) {
        return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
      };
    },
    We = function t(e, r, n) {
      var i = r >= 1 ? r : 1,
        s = (n || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
        o = (s / B) * (Math.asin(1 / i) || 0),
        a = function (t) {
          return 1 === t ? 1 : i * Math.pow(2, -10 * t) * U((t - o) * s) + 1;
        },
        u =
          "out" === e
            ? a
            : "in" === e
            ? function (t) {
                return 1 - a(1 - t);
              }
            : Ve(a);
      return (
        (s = B / s),
        (u.config = function (r, n) {
          return t(e, r, n);
        }),
        u
      );
    },
    Ge = function t(e, r) {
      void 0 === r && (r = 1.70158);
      var n = function (t) {
          return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
        },
        i =
          "out" === e
            ? n
            : "in" === e
            ? function (t) {
                return 1 - n(1 - t);
              }
            : Ve(n);
      return (
        (i.config = function (r) {
          return t(e, r);
        }),
        i
      );
    };
  Dt("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var r = e < 5 ? e + 1 : e;
    Ue(
      t + ",Power" + (r - 1),
      e
        ? function (t) {
            return Math.pow(t, r);
          }
        : function (t) {
            return t;
          },
      function (t) {
        return 1 - Math.pow(1 - t, r);
      },
      function (t) {
        return t < 0.5
          ? Math.pow(2 * t, r) / 2
          : 1 - Math.pow(2 * (1 - t), r) / 2;
      }
    );
  }),
    (Fe.Linear.easeNone = Fe.none = Fe.Linear.easeIn),
    Ue("Elastic", We("in"), We("out"), We()),
    (S = 7.5625),
    (I = 1 / (P = 2.75)),
    Ue(
      "Bounce",
      function (t) {
        return 1 - L(1 - t);
      },
      (L = function (t) {
        return t < I
          ? S * t * t
          : t < 0.7272727272727273
          ? S * Math.pow(t - 1.5 / P, 2) + 0.75
          : t < 0.9090909090909092
          ? S * (t -= 2.25 / P) * t + 0.9375
          : S * Math.pow(t - 2.625 / P, 2) + 0.984375;
      })
    ),
    Ue("Expo", function (t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0;
    }),
    Ue("Circ", function (t) {
      return -(N(1 - t * t) - 1);
    }),
    Ue("Sine", function (t) {
      return 1 === t ? 1 : 1 - j(t * q);
    }),
    Ue("Back", Ge("in"), Ge("out"), Ge()),
    (Fe.SteppedEase =
      Fe.steps =
      ut.SteppedEase =
        {
          config: function (t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
              n = t + (e ? 0 : 1),
              i = e ? 1 : 0;
            return function (t) {
              return (((n * he(0, 0.99999999, t)) | 0) + i) * r;
            };
          },
        }),
    (z.ease = Fe["quad.out"]),
    Dt(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (t) {
        return (wt += t + "," + t + "Params,");
      }
    );
  var He = function (t, e) {
      (this.id = X++),
        (t._gsap = this),
        (this.target = t),
        (this.harness = e),
        (this.get = e ? e.get : Mt),
        (this.set = e ? e.getSetter : fr);
    },
    Qe = (function () {
      function t(t) {
        (this.vars = t),
          (this._delay = +t.delay || 0),
          (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
            ((this._rDelay = t.repeatDelay || 0),
            (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
          (this._ts = 1),
          ne(this, +t.duration, 1, 1),
          (this.data = t.data),
          _ || Re.wake();
      }
      var e = t.prototype;
      return (
        (e.delay = function (t) {
          return t || 0 === t
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + t - this._delay),
              (this._delay = t),
              this)
            : this._delay;
        }),
        (e.duration = function (t) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
              )
            : this.totalDuration() && this._dur;
        }),
        (e.totalDuration = function (t) {
          return arguments.length
            ? ((this._dirty = 0),
              ne(
                this,
                this._repeat < 0
                  ? t
                  : (t - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (e.totalTime = function (t, e) {
          if ((ze(), !arguments.length)) return this._tTime;
          var r = this._dp;
          if (r && r.smoothChildTiming && this._ts) {
            for (
              $t(this, t), !r._dp || r.parent || Zt(r, this);
              r && r.parent;

            )
              r.parent._time !==
                r._start +
                  (r._ts >= 0
                    ? r._tTime / r._ts
                    : (r.totalDuration() - r._tTime) / -r._ts) &&
                r.totalTime(r._tTime, !0),
                (r = r.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((this._ts > 0 && t < this._tDur) ||
                (this._ts < 0 && t > 0) ||
                (!this._tDur && !t)) &&
              Jt(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== t ||
              (!this._dur && !e) ||
              (this._initted && Math.abs(this._zTime) === Y) ||
              (!t && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = t), Pt(this, t, e)),
            this
          );
        }),
        (e.time = function (t, e) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), t + Wt(this)) %
                  (this._dur + this._rDelay) || (t ? this._dur : 0),
                e
              )
            : this._time;
        }),
        (e.totalProgress = function (t, e) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * t, e)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.ratio;
        }),
        (e.progress = function (t, e) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                  Wt(this),
                e
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.ratio;
        }),
        (e.iteration = function (t, e) {
          var r = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (t - 1) * r, e)
            : this._repeat
            ? Gt(this._tTime, r) + 1
            : 1;
        }),
        (e.timeScale = function (t) {
          if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
          if (this._rts === t) return this;
          var e =
            this.parent && this._ts ? Ht(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +t || 0),
            (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
            this.totalTime(he(-this._delay, this._tDur, e), !0),
            Qt(this),
            Ut(this)
          );
        }),
        (e.paused = function (t) {
          return arguments.length
            ? (this._ps !== t &&
                ((this._ps = t),
                t
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (ze(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      1 === this.progress() &&
                        Math.abs(this._zTime) !== Y &&
                        (this._tTime -= Y)
                    ))),
              this)
            : this._ps;
        }),
        (e.startTime = function (t) {
          if (arguments.length) {
            this._start = t;
            var e = this.parent || this._dp;
            return (
              e && (e._sort || !this.parent) && Jt(e, this, t - this._delay),
              this
            );
          }
          return this._start;
        }),
        (e.endTime = function (t) {
          return (
            this._start +
            ($(t) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          );
        }),
        (e.rawTime = function (t) {
          var e = this.parent || this._dp;
          return e
            ? t &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? Ht(e.rawTime(t), this)
              : this._tTime
            : this._tTime;
        }),
        (e.globalTime = function (t) {
          for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
            (r = e._start + r / (e._ts || 1)), (e = e._dp);
          return r;
        }),
        (e.repeat = function (t) {
          return arguments.length
            ? ((this._repeat = t === 1 / 0 ? -2 : t), ie(this))
            : -2 === this._repeat
            ? 1 / 0
            : this._repeat;
        }),
        (e.repeatDelay = function (t) {
          if (arguments.length) {
            var e = this._time;
            return (this._rDelay = t), ie(this), e ? this.time(e) : this;
          }
          return this._rDelay;
        }),
        (e.yoyo = function (t) {
          return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
        }),
        (e.seek = function (t, e) {
          return this.totalTime(oe(this, t), $(e));
        }),
        (e.restart = function (t, e) {
          return this.play().totalTime(t ? -this._delay : 0, $(e));
        }),
        (e.play = function (t, e) {
          return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
        }),
        (e.reverse = function (t, e) {
          return (
            null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
          );
        }),
        (e.pause = function (t, e) {
          return null != t && this.seek(t, e), this.paused(!0);
        }),
        (e.resume = function () {
          return this.paused(!1);
        }),
        (e.reversed = function (t) {
          return arguments.length
            ? (!!t !== this.reversed() &&
                this.timeScale(-this._rts || (t ? -1e-8 : 0)),
              this)
            : this._rts < 0;
        }),
        (e.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
        }),
        (e.isActive = function () {
          var t,
            e = this.parent || this._dp,
            r = this._start;
          return !(
            e &&
            !(
              this._ts &&
              this._initted &&
              e.isActive() &&
              (t = e.rawTime(!0)) >= r &&
              t < this.endTime(!0) - Y
            )
          );
        }),
        (e.eventCallback = function (t, e, r) {
          var n = this.vars;
          return arguments.length > 1
            ? (e
                ? ((n[t] = e),
                  r && (n[t + "Params"] = r),
                  "onUpdate" === t && (this._onUpdate = e))
                : delete n[t],
              this)
            : n[t];
        }),
        (e.then = function (t) {
          var e = this;
          return new Promise(function (r) {
            var n = W(t) ? t : Lt,
              i = function () {
                var t = e.then;
                (e.then = null),
                  W(n) && (n = n(e)) && (n.then || n === e) && (e.then = t),
                  r(n),
                  (e.then = t);
              };
            (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
            (!e._tTime && e._ts < 0)
              ? i()
              : (e._prom = i);
          });
        }),
        (e.kill = function () {
          Oe(this);
        }),
        t
      );
    })();
  Rt(Qe.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -1e-8,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var $e = (function (t) {
    function e(e, r) {
      var n;
      return (
        void 0 === e && (e = {}),
        ((n = t.call(this, e) || this).labels = {}),
        (n.smoothChildTiming = !!e.smoothChildTiming),
        (n.autoRemoveChildren = !!e.autoRemoveChildren),
        (n._sort = $(e.sortChildren)),
        u && Jt(e.parent || u, s(n), r),
        e.reversed && n.reverse(),
        e.paused && n.paused(!0),
        e.scrollTrigger && Kt(s(n), e.scrollTrigger),
        n
      );
    }
    o(e, t);
    var r = e.prototype;
    return (
      (r.to = function (t, e, r) {
        return ae(0, arguments, this), this;
      }),
      (r.from = function (t, e, r) {
        return ae(1, arguments, this), this;
      }),
      (r.fromTo = function (t, e, r, n) {
        return ae(2, arguments, this), this;
      }),
      (r.set = function (t, e, r) {
        return (
          (e.duration = 0),
          (e.parent = this),
          Bt(e).repeatDelay || (e.repeat = 0),
          (e.immediateRender = !!e.immediateRender),
          new ar(t, e, oe(this, r), 1),
          this
        );
      }),
      (r.call = function (t, e, r) {
        return Jt(this, ar.delayedCall(0, t, e), r);
      }),
      (r.staggerTo = function (t, e, r, n, i, s, o) {
        return (
          (r.duration = e),
          (r.stagger = r.stagger || n),
          (r.onComplete = s),
          (r.onCompleteParams = o),
          (r.parent = this),
          new ar(t, r, oe(this, i)),
          this
        );
      }),
      (r.staggerFrom = function (t, e, r, n, i, s, o) {
        return (
          (r.runBackwards = 1),
          (Bt(r).immediateRender = $(r.immediateRender)),
          this.staggerTo(t, e, r, n, i, s, o)
        );
      }),
      (r.staggerFromTo = function (t, e, r, n, i, s, o, a) {
        return (
          (n.startAt = r),
          (Bt(n).immediateRender = $(n.immediateRender)),
          this.staggerTo(t, e, n, i, s, o, a)
        );
      }),
      (r.render = function (t, e, r) {
        var n,
          i,
          s,
          o,
          a,
          h,
          l,
          c,
          f,
          d,
          p,
          _,
          m = this._time,
          g = this._dirty ? this.totalDuration() : this._tDur,
          v = this._dur,
          y = t <= 0 ? 0 : Ct(t),
          b = this._zTime < 0 != t < 0 && (this._initted || !v);
        if (
          (this !== u && y > g && t >= 0 && (y = g),
          y !== this._tTime || r || b)
        ) {
          if (
            (m !== this._time &&
              v &&
              ((y += this._time - m), (t += this._time - m)),
            (n = y),
            (f = this._start),
            (h = !(c = this._ts)),
            b && (v || (m = this._zTime), (t || !e) && (this._zTime = t)),
            this._repeat)
          ) {
            if (
              ((p = this._yoyo),
              (a = v + this._rDelay),
              this._repeat < -1 && t < 0)
            )
              return this.totalTime(100 * a + t, e, r);
            if (
              ((n = Ct(y % a)),
              y === g
                ? ((o = this._repeat), (n = v))
                : ((o = ~~(y / a)) && o === y / a && ((n = v), o--),
                  n > v && (n = v)),
              (d = Gt(this._tTime, a)),
              !m && this._tTime && d !== o && (d = o),
              p && 1 & o && ((n = v - n), (_ = 1)),
              o !== d && !this._lock)
            ) {
              var x = p && 1 & d,
                w = x === (p && 1 & o);
              if (
                (o < d && (x = !x),
                (m = x ? 0 : v),
                (this._lock = 1),
                (this.render(m || (_ ? 0 : Ct(o * a)), e, !v)._lock = 0),
                (this._tTime = y),
                !e && this.parent && Te(this, "onRepeat"),
                this.vars.repeatRefresh && !_ && (this.invalidate()._lock = 1),
                (m && m !== this._time) ||
                  h !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((v = this._dur),
                (g = this._tDur),
                w &&
                  ((this._lock = 2),
                  (m = x ? v : -1e-4),
                  this.render(m, !0),
                  this.vars.repeatRefresh && !_ && this.invalidate()),
                (this._lock = 0),
                !this._ts && !h)
              )
                return this;
              Ne(this, _);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((l = (function (t, e, r) {
                var n;
                if (r > e)
                  for (n = t._first; n && n._start <= r; ) {
                    if ("isPause" === n.data && n._start > e) return n;
                    n = n._next;
                  }
                else
                  for (n = t._last; n && n._start >= r; ) {
                    if ("isPause" === n.data && n._start < e) return n;
                    n = n._prev;
                  }
              })(this, Ct(m), Ct(n))),
              l && (y -= n - (n = l._start))),
            (this._tTime = y),
            (this._time = n),
            (this._act = !c),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = t),
              (m = 0)),
            !m && n && !e && (Te(this, "onStart"), this._tTime !== y))
          )
            return this;
          if (n >= m && t >= 0)
            for (i = this._first; i; ) {
              if (
                ((s = i._next), (i._act || n >= i._start) && i._ts && l !== i)
              ) {
                if (i.parent !== this) return this.render(t, e, r);
                if (
                  (i.render(
                    i._ts > 0
                      ? (n - i._start) * i._ts
                      : (i._dirty ? i.totalDuration() : i._tDur) +
                          (n - i._start) * i._ts,
                    e,
                    r
                  ),
                  n !== this._time || (!this._ts && !h))
                ) {
                  (l = 0), s && (y += this._zTime = -1e-8);
                  break;
                }
              }
              i = s;
            }
          else {
            i = this._last;
            for (var T = t < 0 ? t : n; i; ) {
              if (
                ((s = i._prev), (i._act || T <= i._end) && i._ts && l !== i)
              ) {
                if (i.parent !== this) return this.render(t, e, r);
                if (
                  (i.render(
                    i._ts > 0
                      ? (T - i._start) * i._ts
                      : (i._dirty ? i.totalDuration() : i._tDur) +
                          (T - i._start) * i._ts,
                    e,
                    r
                  ),
                  n !== this._time || (!this._ts && !h))
                ) {
                  (l = 0), s && (y += this._zTime = T ? -1e-8 : Y);
                  break;
                }
              }
              i = s;
            }
          }
          if (
            l &&
            !e &&
            (this.pause(),
            (l.render(n >= m ? 0 : -1e-8)._zTime = n >= m ? 1 : -1),
            this._ts)
          )
            return (this._start = f), Qt(this), this.render(t, e, r);
          this._onUpdate && !e && Te(this, "onUpdate", !0),
            ((y === g && this._tTime >= this.totalDuration()) || (!y && m)) &&
              ((f !== this._start && Math.abs(c) === Math.abs(this._ts)) ||
                this._lock ||
                ((t || !v) &&
                  ((y === g && this._ts > 0) || (!y && this._ts < 0)) &&
                  Nt(this, 1),
                e ||
                  (t < 0 && !m) ||
                  (!y && !m && g) ||
                  (Te(
                    this,
                    y === g && t >= 0 ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  this._prom &&
                    !(y < g && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (r.add = function (t, e) {
        var r = this;
        if ((G(e) || (e = oe(this, e, t)), !(t instanceof Qe))) {
          if (tt(t))
            return (
              t.forEach(function (t) {
                return r.add(t, e);
              }),
              this
            );
          if (V(t)) return this.addLabel(t, e);
          if (!W(t)) return this;
          t = ar.delayedCall(0, t);
        }
        return this !== t ? Jt(this, t, e) : this;
      }),
      (r.getChildren = function (t, e, r, n) {
        void 0 === t && (t = !0),
          void 0 === e && (e = !0),
          void 0 === r && (r = !0),
          void 0 === n && (n = -1e8);
        for (var i = [], s = this._first; s; )
          s._start >= n &&
            (s instanceof ar
              ? e && i.push(s)
              : (r && i.push(s),
                t && i.push.apply(i, s.getChildren(!0, e, r)))),
            (s = s._next);
        return i;
      }),
      (r.getById = function (t) {
        for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
          if (e[r].vars.id === t) return e[r];
      }),
      (r.remove = function (t) {
        return V(t)
          ? this.removeLabel(t)
          : W(t)
          ? this.killTweensOf(t)
          : (Xt(this, t),
            t === this._recent && (this._recent = this._last),
            jt(this));
      }),
      (r.totalTime = function (e, r) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = Ct(
                Re.time -
                  (this._ts > 0
                    ? e / this._ts
                    : (this.totalDuration() - e) / -this._ts)
              )),
            t.prototype.totalTime.call(this, e, r),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (r.addLabel = function (t, e) {
        return (this.labels[t] = oe(this, e)), this;
      }),
      (r.removeLabel = function (t) {
        return delete this.labels[t], this;
      }),
      (r.addPause = function (t, e, r) {
        var n = ar.delayedCall(0, e || pt, r);
        return (
          (n.data = "isPause"), (this._hasPause = 1), Jt(this, n, oe(this, t))
        );
      }),
      (r.removePause = function (t) {
        var e = this._first;
        for (t = oe(this, t); e; )
          e._start === t && "isPause" === e.data && Nt(e), (e = e._next);
      }),
      (r.killTweensOf = function (t, e, r) {
        for (var n = this.getTweensOf(t, r), i = n.length; i--; )
          Ze !== n[i] && n[i].kill(t, e);
        return this;
      }),
      (r.getTweensOf = function (t, e) {
        for (var r, n = [], i = de(t), s = this._first, o = G(e); s; )
          s instanceof ar
            ? At(s._targets, i) &&
              (o
                ? (!Ze || (s._initted && s._ts)) &&
                  s.globalTime(0) <= e &&
                  s.globalTime(s.totalDuration()) > e
                : !e || s.isActive()) &&
              n.push(s)
            : (r = s.getTweensOf(i, e)).length && n.push.apply(n, r),
            (s = s._next);
        return n;
      }),
      (r.tweenTo = function (t, e) {
        e = e || {};
        var r,
          n = this,
          i = oe(n, t),
          s = e,
          o = s.startAt,
          a = s.onStart,
          u = s.onStartParams,
          h = s.immediateRender,
          l = ar.to(
            n,
            Rt(
              {
                ease: e.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: i,
                overwrite: "auto",
                duration:
                  e.duration ||
                  Math.abs(
                    (i - (o && "time" in o ? o.time : n._time)) / n.timeScale()
                  ) ||
                  Y,
                onStart: function () {
                  if ((n.pause(), !r)) {
                    var t =
                      e.duration ||
                      Math.abs(
                        (i - (o && "time" in o ? o.time : n._time)) /
                          n.timeScale()
                      );
                    l._dur !== t && ne(l, t, 0, 1).render(l._time, !0, !0),
                      (r = 1);
                  }
                  a && a.apply(l, u || []);
                },
              },
              e
            )
          );
        return h ? l.render(0) : l;
      }),
      (r.tweenFromTo = function (t, e, r) {
        return this.tweenTo(e, Rt({ startAt: { time: oe(this, t) } }, r));
      }),
      (r.recent = function () {
        return this._recent;
      }),
      (r.nextLabel = function (t) {
        return void 0 === t && (t = this._time), we(this, oe(this, t));
      }),
      (r.previousLabel = function (t) {
        return void 0 === t && (t = this._time), we(this, oe(this, t), 1);
      }),
      (r.currentLabel = function (t) {
        return arguments.length
          ? this.seek(t, !0)
          : this.previousLabel(this._time + Y);
      }),
      (r.shiftChildren = function (t, e, r) {
        void 0 === r && (r = 0);
        for (var n, i = this._first, s = this.labels; i; )
          i._start >= r && ((i._start += t), (i._end += t)), (i = i._next);
        if (e) for (n in s) s[n] >= r && (s[n] += t);
        return jt(this);
      }),
      (r.invalidate = function () {
        var e = this._first;
        for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
        return t.prototype.invalidate.call(this);
      }),
      (r.clear = function (t) {
        void 0 === t && (t = !0);
        for (var e, r = this._first; r; )
          (e = r._next), this.remove(r), (r = e);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          t && (this.labels = {}),
          jt(this)
        );
      }),
      (r.totalDuration = function (t) {
        var e,
          r,
          n,
          i = 0,
          s = this,
          o = s._last,
          a = F;
        if (arguments.length)
          return s.timeScale(
            (s._repeat < 0 ? s.duration() : s.totalDuration()) /
              (s.reversed() ? -t : t)
          );
        if (s._dirty) {
          for (n = s.parent; o; )
            (e = o._prev),
              o._dirty && o.totalDuration(),
              (r = o._start) > a && s._sort && o._ts && !s._lock
                ? ((s._lock = 1), (Jt(s, o, r - o._delay, 1)._lock = 0))
                : (a = r),
              r < 0 &&
                o._ts &&
                ((i -= r),
                ((!n && !s._dp) || (n && n.smoothChildTiming)) &&
                  ((s._start += r / s._ts), (s._time -= r), (s._tTime -= r)),
                s.shiftChildren(-r, !1, -1 / 0),
                (a = 0)),
              o._end > i && o._ts && (i = o._end),
              (o = e);
          ne(s, s === u && s._time > i ? s._time : i, 1, 1), (s._dirty = 0);
        }
        return s._tDur;
      }),
      (e.updateRoot = function (t) {
        if ((u._ts && (Pt(u, Ht(t, u)), (d = Re.frame)), Re.frame >= bt)) {
          bt += R.autoSleep || 120;
          var e = u._first;
          if ((!e || !e._ts) && R.autoSleep && Re._listeners.length < 2) {
            for (; e && !e._ts; ) e = e._next;
            e || Re.sleep();
          }
        }
      }),
      e
    );
  })(Qe);
  Rt($e.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Ze,
    Je,
    Ke = function (t, e, r, n, i, s, o) {
      var a,
        u,
        h,
        l,
        c,
        f,
        d,
        p,
        _ = new xr(this._pt, t, e, 0, 1, _r, null, i),
        m = 0,
        g = 0;
      for (
        _.b = r,
          _.e = n,
          r += "",
          (d = ~(n += "").indexOf("random(")) && (n = be(n)),
          s && (s((p = [r, n]), t, e), (r = p[0]), (n = p[1])),
          u = r.match(it) || [];
        (a = it.exec(n));

      )
        (l = a[0]),
          (c = n.substring(m, a.index)),
          h ? (h = (h + 1) % 5) : "rgba(" === c.substr(-5) && (h = 1),
          l !== u[g++] &&
            ((f = parseFloat(u[g - 1]) || 0),
            (_._pt = {
              _next: _._pt,
              p: c || 1 === g ? c : ",",
              s: f,
              c: "=" === l.charAt(1) ? Et(f, l) - f : parseFloat(l) - f,
              m: h && h < 4 ? Math.round : 0,
            }),
            (m = it.lastIndex));
      return (
        (_.c = m < n.length ? n.substring(m, n.length) : ""),
        (_.fp = o),
        (st.test(n) || d) && (_.e = 0),
        (this._pt = _),
        _
      );
    },
    tr = function (t, e, r, n, i, s, o, a, u) {
      W(n) && (n = n(i || 0, t, s));
      var h,
        l = t[e],
        c =
          "get" !== r
            ? r
            : W(l)
            ? u
              ? t[
                  e.indexOf("set") || !W(t["get" + e.substr(3)])
                    ? e
                    : "get" + e.substr(3)
                ](u)
              : t[e]()
            : l,
        f = W(l) ? (u ? lr : hr) : ur;
      if (
        (V(n) &&
          (~n.indexOf("random(") && (n = be(n)),
          "=" === n.charAt(1) &&
            ((h = Et(c, n) + (le(c) || 0)) || 0 === h) &&
            (n = h)),
        c !== n || Je)
      )
        return isNaN(c * n) || "" === n
          ? (!l && !(e in t) && ct(e, n),
            Ke.call(this, t, e, c, n, f, a || R.stringFilter, u))
          : ((h = new xr(
              this._pt,
              t,
              e,
              +c || 0,
              n - (c || 0),
              "boolean" == typeof l ? pr : dr,
              0,
              f
            )),
            u && (h.fp = u),
            o && h.modifier(o, this, t),
            (this._pt = h));
    },
    er = function (t, e, r, n, i, s) {
      var o, a, u, h;
      if (
        vt[t] &&
        !1 !==
          (o = new vt[t]()).init(
            i,
            o.rawVars
              ? e[t]
              : (function (t, e, r, n, i) {
                  if (
                    (W(t) && (t = ir(t, i, e, r, n)),
                    !Q(t) || (t.style && t.nodeType) || tt(t) || K(t))
                  )
                    return V(t) ? ir(t, i, e, r, n) : t;
                  var s,
                    o = {};
                  for (s in t) o[s] = ir(t[s], i, e, r, n);
                  return o;
                })(e[t], n, i, s, r),
            r,
            n,
            s
          ) &&
        ((r._pt = a = new xr(r._pt, i, t, 0, 1, o.render, o, 0, o.priority)),
        r !== p)
      )
        for (u = r._ptLookup[r._targets.indexOf(i)], h = o._props.length; h--; )
          u[o._props[h]] = a;
      return o;
    },
    rr = function t(e, r) {
      var n,
        i,
        s,
        o,
        h,
        l,
        c,
        f,
        d,
        p,
        _,
        m,
        g,
        v = e.vars,
        y = v.ease,
        b = v.startAt,
        x = v.immediateRender,
        w = v.lazy,
        T = v.onUpdate,
        O = v.onUpdateParams,
        M = v.callbackScope,
        D = v.runBackwards,
        k = v.yoyoEase,
        C = v.keyframes,
        E = v.autoRevert,
        A = e._dur,
        S = e._startAt,
        P = e._targets,
        I = e.parent,
        L = I && "nested" === I.data ? I.parent._targets : P,
        R = "auto" === e._overwrite && !a,
        B = e.timeline;
      if (
        (B && (!C || !y) && (y = "none"),
        (e._ease = je(y, z.ease)),
        (e._yEase = k ? Xe(je(!0 === k ? y : k, z.ease)) : 0),
        k &&
          e._yoyo &&
          !e._repeat &&
          ((k = e._yEase), (e._yEase = e._ease), (e._ease = k)),
        (e._from = !B && !!v.runBackwards),
        !B || (C && !v.stagger))
      ) {
        if (
          ((m = (f = P[0] ? Ot(P[0]).harness : 0) && v[f.prop]),
          (n = Yt(v, _t)),
          S && (Nt(S.render(-1, !0)), (S._lazy = 0)),
          b)
        )
          if (
            (Nt(
              (e._startAt = ar.set(
                P,
                Rt(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: I,
                    immediateRender: !0,
                    lazy: $(w),
                    startAt: null,
                    delay: 0,
                    onUpdate: T,
                    onUpdateParams: O,
                    callbackScope: M,
                    stagger: 0,
                  },
                  b
                )
              ))
            ),
            r < 0 && !x && !E && e._startAt.render(-1, !0),
            x)
          ) {
            if ((r > 0 && !E && (e._startAt = 0), A && r <= 0))
              return void (r && (e._zTime = r));
          } else !1 === E && (e._startAt = 0);
        else if (D && A)
          if (S) !E && (e._startAt = 0);
          else if (
            (r && (x = !1),
            (s = Rt(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: x && $(w),
                immediateRender: x,
                stagger: 0,
                parent: I,
              },
              n
            )),
            m && (s[f.prop] = m),
            Nt((e._startAt = ar.set(P, s))),
            r < 0 && e._startAt.render(-1, !0),
            (e._zTime = r),
            x)
          ) {
            if (!r) return;
          } else t(e._startAt, Y);
        for (
          e._pt = e._ptCache = 0, w = (A && $(w)) || (w && !A), i = 0;
          i < P.length;
          i++
        ) {
          if (
            ((c = (h = P[i])._gsap || Tt(P)[i]._gsap),
            (e._ptLookup[i] = p = {}),
            gt[c.id] && mt.length && St(),
            (_ = L === P ? i : L.indexOf(h)),
            f &&
              !1 !== (d = new f()).init(h, m || n, e, _, L) &&
              ((e._pt = o =
                new xr(e._pt, h, d.name, 0, 1, d.render, d, 0, d.priority)),
              d._props.forEach(function (t) {
                p[t] = o;
              }),
              d.priority && (l = 1)),
            !f || m)
          )
            for (s in n)
              vt[s] && (d = er(s, n, e, _, h, L))
                ? d.priority && (l = 1)
                : (p[s] = o =
                    tr.call(e, h, s, "get", n[s], _, L, 0, v.stringFilter));
          e._op && e._op[i] && e.kill(h, e._op[i]),
            R &&
              e._pt &&
              ((Ze = e),
              u.killTweensOf(h, p, e.globalTime(r)),
              (g = !e.parent),
              (Ze = 0)),
            e._pt && w && (gt[c.id] = 1);
        }
        l && br(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = T),
        (e._initted = (!e._op || e._pt) && !g),
        C && r <= 0 && B.render(F, !0, !0);
    },
    nr = function (t, e, r, n) {
      var i,
        s,
        o = e.ease || n || "power1.inOut";
      if (tt(e))
        (s = r[t] || (r[t] = [])),
          e.forEach(function (t, r) {
            return s.push({ t: (r / (e.length - 1)) * 100, v: t, e: o });
          });
      else
        for (i in e)
          (s = r[i] || (r[i] = [])),
            "ease" === i || s.push({ t: parseFloat(t), v: e[i], e: o });
    },
    ir = function (t, e, r, n, i) {
      return W(t)
        ? t.call(e, r, n, i)
        : V(t) && ~t.indexOf("random(")
        ? be(t)
        : t;
    },
    sr = wt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    or = {};
  Dt(sr + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
    return (or[t] = 1);
  });
  var ar = (function (t) {
    function e(e, r, n, i) {
      var o;
      "number" == typeof r && ((n.duration = r), (r = n), (n = null));
      var h,
        l,
        c,
        f,
        d,
        p,
        _,
        m,
        g = (o = t.call(this, i ? r : Bt(r)) || this).vars,
        v = g.duration,
        y = g.delay,
        b = g.immediateRender,
        x = g.stagger,
        w = g.overwrite,
        T = g.keyframes,
        O = g.defaults,
        M = g.scrollTrigger,
        D = g.yoyoEase,
        k = r.parent || u,
        C = (tt(e) || K(e) ? G(e[0]) : "length" in r) ? [e] : de(e);
      if (
        ((o._targets = C.length
          ? Tt(C)
          : ft(
              "GSAP target " + e + " not found. https://greensock.com",
              !R.nullTargetWarn
            ) || []),
        (o._ptLookup = []),
        (o._overwrite = w),
        T || x || J(v) || J(y))
      ) {
        if (
          ((r = o.vars),
          (h = o.timeline =
            new $e({ data: "nested", defaults: O || {} })).kill(),
          (h.parent = h._dp = s(o)),
          (h._start = 0),
          x || J(v) || J(y))
        ) {
          if (((f = C.length), (_ = x && _e(x)), Q(x)))
            for (d in x) ~sr.indexOf(d) && (m || (m = {}), (m[d] = x[d]));
          for (l = 0; l < f; l++)
            ((c = Yt(r, or)).stagger = 0),
              D && (c.yoyoEase = D),
              m && zt(c, m),
              (p = C[l]),
              (c.duration = +ir(v, s(o), l, p, C)),
              (c.delay = (+ir(y, s(o), l, p, C) || 0) - o._delay),
              !x &&
                1 === f &&
                c.delay &&
                ((o._delay = y = c.delay), (o._start += y), (c.delay = 0)),
              h.to(p, c, _ ? _(l, p, C) : 0),
              (h._ease = Fe.none);
          h.duration() ? (v = y = 0) : (o.timeline = 0);
        } else if (T) {
          Bt(Rt(h.vars.defaults, { ease: "none" })),
            (h._ease = je(T.ease || r.ease || "none"));
          var E,
            A,
            S,
            P = 0;
          if (tt(T))
            T.forEach(function (t) {
              return h.to(C, t, ">");
            });
          else {
            for (d in ((c = {}), T))
              "ease" === d || "easeEach" === d || nr(d, T[d], c, T.easeEach);
            for (d in c)
              for (
                E = c[d].sort(function (t, e) {
                  return t.t - e.t;
                }),
                  P = 0,
                  l = 0;
                l < E.length;
                l++
              )
                ((S = {
                  ease: (A = E[l]).e,
                  duration: ((A.t - (l ? E[l - 1].t : 0)) / 100) * v,
                })[d] = A.v),
                  h.to(C, S, P),
                  (P += S.duration);
            h.duration() < v && h.to({}, { duration: v - h.duration() });
          }
        }
        v || o.duration((v = h.duration()));
      } else o.timeline = 0;
      return (
        !0 !== w || a || ((Ze = s(o)), u.killTweensOf(C), (Ze = 0)),
        Jt(k, s(o), n),
        r.reversed && o.reverse(),
        r.paused && o.paused(!0),
        (b ||
          (!v &&
            !T &&
            o._start === Ct(k._time) &&
            $(b) &&
            Vt(s(o)) &&
            "nested" !== k.data)) &&
          ((o._tTime = -1e-8), o.render(Math.max(0, -y))),
        M && Kt(s(o), M),
        o
      );
    }
    o(e, t);
    var r = e.prototype;
    return (
      (r.render = function (t, e, r) {
        var n,
          i,
          s,
          o,
          a,
          u,
          h,
          l,
          c,
          f = this._time,
          d = this._tDur,
          p = this._dur,
          _ = t > d - Y && t >= 0 ? d : t < Y ? 0 : t;
        if (p) {
          if (
            _ !== this._tTime ||
            !t ||
            r ||
            (!this._initted && this._tTime) ||
            (this._startAt && this._zTime < 0 != t < 0)
          ) {
            if (((n = _), (l = this.timeline), this._repeat)) {
              if (((o = p + this._rDelay), this._repeat < -1 && t < 0))
                return this.totalTime(100 * o + t, e, r);
              if (
                ((n = Ct(_ % o)),
                _ === d
                  ? ((s = this._repeat), (n = p))
                  : ((s = ~~(_ / o)) && s === _ / o && ((n = p), s--),
                    n > p && (n = p)),
                (u = this._yoyo && 1 & s) && ((c = this._yEase), (n = p - n)),
                (a = Gt(this._tTime, o)),
                n === f && !r && this._initted)
              )
                return (this._tTime = _), this;
              s !== a &&
                (l && this._yEase && Ne(l, u),
                !this.vars.repeatRefresh ||
                  u ||
                  this._lock ||
                  ((this._lock = r = 1),
                  (this.render(Ct(o * s), !0).invalidate()._lock = 0)));
            }
            if (!this._initted) {
              if (te(this, t < 0 ? t : n, r, e)) return (this._tTime = 0), this;
              if (f !== this._time) return this;
              if (p !== this._dur) return this.render(t, e, r);
            }
            if (
              ((this._tTime = _),
              (this._time = n),
              !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
              (this.ratio = h = (c || this._ease)(n / p)),
              this._from && (this.ratio = h = 1 - h),
              n && !f && !e && (Te(this, "onStart"), this._tTime !== _))
            )
              return this;
            for (i = this._pt; i; ) i.r(h, i.d), (i = i._next);
            (l &&
              l.render(
                t < 0 ? t : !n && u ? -1e-8 : l._dur * l._ease(n / this._dur),
                e,
                r
              )) ||
              (this._startAt && (this._zTime = t)),
              this._onUpdate &&
                !e &&
                (t < 0 && this._startAt && this._startAt.render(t, !0, r),
                Te(this, "onUpdate")),
              this._repeat &&
                s !== a &&
                this.vars.onRepeat &&
                !e &&
                this.parent &&
                Te(this, "onRepeat"),
              (_ !== this._tDur && _) ||
                this._tTime !== _ ||
                (t < 0 &&
                  this._startAt &&
                  !this._onUpdate &&
                  this._startAt.render(t, !0, !0),
                (t || !p) &&
                  ((_ === this._tDur && this._ts > 0) ||
                    (!_ && this._ts < 0)) &&
                  Nt(this, 1),
                e ||
                  (t < 0 && !f) ||
                  (!_ && !f) ||
                  (Te(this, _ === d ? "onComplete" : "onReverseComplete", !0),
                  this._prom &&
                    !(_ < d && this.timeScale() > 0) &&
                    this._prom()));
          }
        } else
          !(function (t, e, r, n) {
            var i,
              s,
              o,
              a = t.ratio,
              u =
                e < 0 ||
                (!e &&
                  ((!t._start && ee(t) && (t._initted || !re(t))) ||
                    ((t._ts < 0 || t._dp._ts < 0) && !re(t))))
                  ? 0
                  : 1,
              h = t._rDelay,
              l = 0;
            if (
              (h &&
                t._repeat &&
                ((l = he(0, t._tDur, e)),
                (s = Gt(l, h)),
                t._yoyo && 1 & s && (u = 1 - u),
                s !== Gt(t._tTime, h) &&
                  ((a = 1 - u),
                  t.vars.repeatRefresh && t._initted && t.invalidate())),
              u !== a || n || t._zTime === Y || (!e && t._zTime))
            ) {
              if (!t._initted && te(t, e, n, r)) return;
              for (
                o = t._zTime,
                  t._zTime = e || (r ? Y : 0),
                  r || (r = e && !o),
                  t.ratio = u,
                  t._from && (u = 1 - u),
                  t._time = 0,
                  t._tTime = l,
                  i = t._pt;
                i;

              )
                i.r(u, i.d), (i = i._next);
              t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                t._onUpdate && !r && Te(t, "onUpdate"),
                l && t._repeat && !r && t.parent && Te(t, "onRepeat"),
                (e >= t._tDur || e < 0) &&
                  t.ratio === u &&
                  (u && Nt(t, 1),
                  r ||
                    (Te(t, u ? "onComplete" : "onReverseComplete", !0),
                    t._prom && t._prom()));
            } else t._zTime || (t._zTime = e);
          })(this, t, e, r);
        return this;
      }),
      (r.targets = function () {
        return this._targets;
      }),
      (r.invalidate = function () {
        return (
          (this._pt =
            this._op =
            this._startAt =
            this._onUpdate =
            this._lazy =
            this.ratio =
              0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(),
          t.prototype.invalidate.call(this)
        );
      }),
      (r.resetTo = function (t, e, r, n) {
        _ || Re.wake(), this._ts || this.play();
        var i = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
        return (
          this._initted || rr(this, i),
          (function (t, e, r, n, i, s, o) {
            var a,
              u,
              h,
              l = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
            if (!l)
              for (
                l = t._ptCache[e] = [], u = t._ptLookup, h = t._targets.length;
                h--;

              ) {
                if ((a = u[h][e]) && a.d && a.d._pt)
                  for (a = a.d._pt; a && a.p !== e; ) a = a._next;
                if (!a)
                  return (Je = 1), (t.vars[e] = "+=0"), rr(t, o), (Je = 0), 1;
                l.push(a);
              }
            for (h = l.length; h--; )
              ((a = l[h]).s =
                (!n && 0 !== n) || i ? a.s + (n || 0) + s * a.c : n),
                (a.c = r - a.s),
                a.e && (a.e = kt(r) + le(a.e)),
                a.b && (a.b = a.s + le(a.b));
          })(this, t, e, r, n, this._ease(i / this._dur), i)
            ? this.resetTo(t, e, r, n)
            : ($t(this, 0),
              this.parent ||
                qt(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (r.kill = function (t, e) {
        if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
          return (this._lazy = this._pt = 0), this.parent ? Oe(this) : this;
        if (this.timeline) {
          var r = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(t, e, Ze && !0 !== Ze.vars.overwrite)
              ._first || Oe(this),
            this.parent &&
              r !== this.timeline.totalDuration() &&
              ne(this, (this._dur * this.timeline._tDur) / r, 0, 1),
            this
          );
        }
        var n,
          i,
          s,
          o,
          a,
          u,
          h,
          l = this._targets,
          c = t ? de(t) : l,
          f = this._ptLookup,
          d = this._pt;
        if (
          (!e || "all" === e) &&
          (function (t, e) {
            for (
              var r = t.length, n = r === e.length;
              n && r-- && t[r] === e[r];

            );
            return r < 0;
          })(l, c)
        )
          return "all" === e && (this._pt = 0), Oe(this);
        for (
          n = this._op = this._op || [],
            "all" !== e &&
              (V(e) &&
                ((a = {}),
                Dt(e, function (t) {
                  return (a[t] = 1);
                }),
                (e = a)),
              (e = (function (t, e) {
                var r,
                  n,
                  i,
                  s,
                  o = t[0] ? Ot(t[0]).harness : 0,
                  a = o && o.aliases;
                if (!a) return e;
                for (n in ((r = zt({}, e)), a))
                  if ((n in r))
                    for (i = (s = a[n].split(",")).length; i--; )
                      r[s[i]] = r[n];
                return r;
              })(l, e))),
            h = l.length;
          h--;

        )
          if (~c.indexOf(l[h]))
            for (a in ((i = f[h]),
            "all" === e
              ? ((n[h] = e), (o = i), (s = {}))
              : ((s = n[h] = n[h] || {}), (o = e)),
            o))
              (u = i && i[a]) &&
                (("kill" in u.d && !0 !== u.d.kill(a)) || Xt(this, u, "_pt"),
                delete i[a]),
                "all" !== s && (s[a] = 1);
        return this._initted && !this._pt && d && Oe(this), this;
      }),
      (e.to = function (t, r) {
        return new e(t, r, arguments[2]);
      }),
      (e.from = function (t, e) {
        return ae(1, arguments);
      }),
      (e.delayedCall = function (t, r, n, i) {
        return new e(r, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: t,
          onComplete: r,
          onReverseComplete: r,
          onCompleteParams: n,
          onReverseCompleteParams: n,
          callbackScope: i,
        });
      }),
      (e.fromTo = function (t, e, r) {
        return ae(2, arguments);
      }),
      (e.set = function (t, r) {
        return (r.duration = 0), r.repeatDelay || (r.repeat = 0), new e(t, r);
      }),
      (e.killTweensOf = function (t, e, r) {
        return u.killTweensOf(t, e, r);
      }),
      e
    );
  })(Qe);
  Rt(ar.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    Dt("staggerTo,staggerFrom,staggerFromTo", function (t) {
      ar[t] = function () {
        var e = new $e(),
          r = ce.call(arguments, 0);
        return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r);
      };
    });
  var ur = function (t, e, r) {
      return (t[e] = r);
    },
    hr = function (t, e, r) {
      return t[e](r);
    },
    lr = function (t, e, r, n) {
      return t[e](n.fp, r);
    },
    cr = function (t, e, r) {
      return t.setAttribute(e, r);
    },
    fr = function (t, e) {
      return W(t[e]) ? hr : H(t[e]) && t.setAttribute ? cr : ur;
    },
    dr = function (t, e) {
      return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
    },
    pr = function (t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    _r = function (t, e) {
      var r = e._pt,
        n = "";
      if (!t && e.b) n = e.b;
      else if (1 === t && e.e) n = e.e;
      else {
        for (; r; )
          (n =
            r.p +
            (r.m
              ? r.m(r.s + r.c * t)
              : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
            n),
            (r = r._next);
        n += e.c;
      }
      e.set(e.t, e.p, n, e);
    },
    mr = function (t, e) {
      for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
    },
    gr = function (t, e, r, n) {
      for (var i, s = this._pt; s; )
        (i = s._next), s.p === n && s.modifier(t, e, r), (s = i);
    },
    vr = function (t) {
      for (var e, r, n = this._pt; n; )
        (r = n._next),
          (n.p === t && !n.op) || n.op === t
            ? Xt(this, n, "_pt")
            : n.dep || (e = 1),
          (n = r);
      return !e;
    },
    yr = function (t, e, r, n) {
      n.mSet(t, e, n.m.call(n.tween, r, n.mt), n);
    },
    br = function (t) {
      for (var e, r, n, i, s = t._pt; s; ) {
        for (e = s._next, r = n; r && r.pr > s.pr; ) r = r._next;
        (s._prev = r ? r._prev : i) ? (s._prev._next = s) : (n = s),
          (s._next = r) ? (r._prev = s) : (i = s),
          (s = e);
      }
      t._pt = n;
    },
    xr = (function () {
      function t(t, e, r, n, i, s, o, a, u) {
        (this.t = e),
          (this.s = n),
          (this.c = i),
          (this.p = r),
          (this.r = s || dr),
          (this.d = o || this),
          (this.set = a || ur),
          (this.pr = u || 0),
          (this._next = t),
          t && (t._prev = this);
      }
      return (
        (t.prototype.modifier = function (t, e, r) {
          (this.mSet = this.mSet || this.set),
            (this.set = yr),
            (this.m = t),
            (this.mt = r),
            (this.tween = e);
        }),
        t
      );
    })();
  Dt(
    wt +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (t) {
      return (_t[t] = 1);
    }
  ),
    (ut.TweenMax = ut.TweenLite = ar),
    (ut.TimelineLite = ut.TimelineMax = $e),
    (u = new $e({
      sortChildren: !1,
      defaults: z,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (R.stringFilter = Le);
  var wr = {
    registerPlugin: function () {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
        e[r] = arguments[r];
      e.forEach(function (t) {
        return Me(t);
      });
    },
    timeline: function (t) {
      return new $e(t);
    },
    getTweensOf: function (t, e) {
      return u.getTweensOf(t, e);
    },
    getProperty: function (t, e, r, n) {
      V(t) && (t = de(t)[0]);
      var i = Ot(t || {}).get,
        s = r ? Lt : It;
      return (
        "native" === r && (r = ""),
        t
          ? e
            ? s(((vt[e] && vt[e].get) || i)(t, e, r, n))
            : function (e, r, n) {
                return s(((vt[e] && vt[e].get) || i)(t, e, r, n));
              }
          : t
      );
    },
    quickSetter: function (t, e, r) {
      if ((t = de(t)).length > 1) {
        var n = t.map(function (t) {
            return Mr.quickSetter(t, e, r);
          }),
          i = n.length;
        return function (t) {
          for (var e = i; e--; ) n[e](t);
        };
      }
      t = t[0] || {};
      var s = vt[e],
        o = Ot(t),
        a = (o.harness && (o.harness.aliases || {})[e]) || e,
        u = s
          ? function (e) {
              var n = new s();
              (p._pt = 0),
                n.init(t, r ? e + r : e, p, 0, [t]),
                n.render(1, n),
                p._pt && mr(1, p);
            }
          : o.set(t, a);
      return s
        ? u
        : function (e) {
            return u(t, a, r ? e + r : e, o, 1);
          };
    },
    quickTo: function (t, e, r) {
      var n,
        i = Mr.to(
          t,
          zt((((n = {})[e] = "+=0.1"), (n.paused = !0), n), r || {})
        ),
        s = function (t, r, n) {
          return i.resetTo(e, t, r, n);
        };
      return (s.tween = i), s;
    },
    isTweening: function (t) {
      return u.getTweensOf(t, !0).length > 0;
    },
    defaults: function (t) {
      return t && t.ease && (t.ease = je(t.ease, z.ease)), Ft(z, t || {});
    },
    config: function (t) {
      return Ft(R, t || {});
    },
    registerEffect: function (t) {
      var e = t.name,
        r = t.effect,
        n = t.plugins,
        i = t.defaults,
        s = t.extendTimeline;
      (n || "").split(",").forEach(function (t) {
        return (
          t && !vt[t] && !ut[t] && ft(e + " effect requires " + t + " plugin.")
        );
      }),
        (yt[e] = function (t, e, n) {
          return r(de(t), Rt(e || {}, i), n);
        }),
        s &&
          ($e.prototype[e] = function (t, r, n) {
            return this.add(yt[e](t, Q(r) ? r : (n = r) && {}, this), n);
          });
    },
    registerEase: function (t, e) {
      Fe[t] = je(e);
    },
    parseEase: function (t, e) {
      return arguments.length ? je(t, e) : Fe;
    },
    getById: function (t) {
      return u.getById(t);
    },
    exportRoot: function (t, e) {
      void 0 === t && (t = {});
      var r,
        n,
        i = new $e(t);
      for (
        i.smoothChildTiming = $(t.smoothChildTiming),
          u.remove(i),
          i._dp = 0,
          i._time = i._tTime = u._time,
          r = u._first;
        r;

      )
        (n = r._next),
          (!e &&
            !r._dur &&
            r instanceof ar &&
            r.vars.onComplete === r._targets[0]) ||
            Jt(i, r, r._start - r._delay),
          (r = n);
      return Jt(u, i, 0), i;
    },
    utils: {
      wrap: function t(e, r, n) {
        var i = r - e;
        return tt(e)
          ? ye(e, t(0, e.length), r)
          : ue(n, function (t) {
              return ((i + ((t - e) % i)) % i) + e;
            });
      },
      wrapYoyo: function t(e, r, n) {
        var i = r - e,
          s = 2 * i;
        return tt(e)
          ? ye(e, t(0, e.length - 1), r)
          : ue(n, function (t) {
              return e + ((t = (s + ((t - e) % s)) % s || 0) > i ? s - t : t);
            });
      },
      distribute: _e,
      random: ve,
      snap: ge,
      normalize: function (t, e, r) {
        return xe(t, e, 0, 1, r);
      },
      getUnit: le,
      clamp: function (t, e, r) {
        return ue(r, function (r) {
          return he(t, e, r);
        });
      },
      splitColor: Ee,
      toArray: de,
      selector: function (t) {
        return (
          (t = de(t)[0] || ft("Invalid scope") || {}),
          function (e) {
            var r = t.current || t.nativeElement || t;
            return de(
              e,
              r.querySelectorAll
                ? r
                : r === t
                ? ft("Invalid scope") || c.createElement("div")
                : t
            );
          }
        );
      },
      mapRange: xe,
      pipe: function () {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function (t, e) {
        return function (r) {
          return t(parseFloat(r)) + (e || le(r));
        };
      },
      interpolate: function t(e, r, n, i) {
        var s = isNaN(e + r)
          ? 0
          : function (t) {
              return (1 - t) * e + t * r;
            };
        if (!s) {
          var o,
            a,
            u,
            h,
            l,
            c = V(e),
            f = {};
          if ((!0 === n && (i = 1) && (n = null), c))
            (e = { p: e }), (r = { p: r });
          else if (tt(e) && !tt(r)) {
            for (u = [], h = e.length, l = h - 2, a = 1; a < h; a++)
              u.push(t(e[a - 1], e[a]));
            h--,
              (s = function (t) {
                t *= h;
                var e = Math.min(l, ~~t);
                return u[e](t - e);
              }),
              (n = r);
          } else i || (e = zt(tt(e) ? [] : {}, e));
          if (!u) {
            for (o in r) tr.call(f, e, o, "get", r[o]);
            s = function (t) {
              return mr(t, f) || (c ? e.p : e);
            };
          }
        }
        return ue(n, s);
      },
      shuffle: pe,
    },
    install: lt,
    effects: yt,
    ticker: Re,
    updateRoot: $e.updateRoot,
    plugins: vt,
    globalTimeline: u,
    core: {
      PropTween: xr,
      globals: dt,
      Tween: ar,
      Timeline: $e,
      Animation: Qe,
      getCache: Ot,
      _removeLinkedListItem: Xt,
      suppressOverwrites: function (t) {
        return (a = t);
      },
    },
  };
  Dt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return (wr[t] = ar[t]);
  }),
    Re.add($e.updateRoot),
    (p = wr.to({}, { duration: 0 }));
  var Tr = function (t, e) {
      for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
        r = r._next;
      return r;
    },
    Or = function (t, e) {
      return {
        name: t,
        rawVars: 1,
        init: function (t, r, n) {
          n._onInit = function (t) {
            var n, i;
            if (
              (V(r) &&
                ((n = {}),
                Dt(r, function (t) {
                  return (n[t] = 1);
                }),
                (r = n)),
              e)
            ) {
              for (i in ((n = {}), r)) n[i] = e(r[i]);
              r = n;
            }
            !(function (t, e) {
              var r,
                n,
                i,
                s = t._targets;
              for (r in e)
                for (n = s.length; n--; )
                  (i = t._ptLookup[n][r]) &&
                    (i = i.d) &&
                    (i._pt && (i = Tr(i, r)),
                    i && i.modifier && i.modifier(e[r], t, s[n], r));
            })(t, r);
          };
        },
      };
    },
    Mr =
      wr.registerPlugin(
        {
          name: "attr",
          init: function (t, e, r, n, i) {
            var s, o;
            for (s in e)
              (o = this.add(
                t,
                "setAttribute",
                (t.getAttribute(s) || 0) + "",
                e[s],
                n,
                i,
                0,
                0,
                s
              )) && (o.op = s),
                this._props.push(s);
          },
        },
        {
          name: "endArray",
          init: function (t, e) {
            for (var r = e.length; r--; ) this.add(t, r, t[r] || 0, e[r]);
          },
        },
        Or("roundProps", me),
        Or("modifiers"),
        Or("snap", ge)
      ) || wr;
  (ar.version = $e.version = Mr.version = "3.10.4"), (f = 1), Z() && ze();
  Fe.Power0,
    Fe.Power1,
    Fe.Power2,
    Fe.Power3,
    Fe.Power4,
    Fe.Linear,
    Fe.Quad,
    Fe.Cubic,
    Fe.Quart,
    Fe.Quint,
    Fe.Strong,
    Fe.Elastic,
    Fe.Back,
    Fe.SteppedEase,
    Fe.Bounce,
    Fe.Sine,
    Fe.Expo,
    Fe.Circ;
  var Dr,
    kr,
    Cr,
    Er,
    Ar,
    Sr,
    Pr,
    Ir = {},
    Lr = 180 / Math.PI,
    Rr = Math.PI / 180,
    zr = Math.atan2,
    Fr = /([A-Z])/g,
    Yr = /(left|right|width|margin|padding|x)/i,
    Br = /[\s,\(]\S/,
    qr = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    Xr = function (t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
    },
    Nr = function (t, e) {
      return e.set(
        e.t,
        e.p,
        1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
        e
      );
    },
    jr = function (t, e) {
      return e.set(
        e.t,
        e.p,
        t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
        e
      );
    },
    Ur = function (t, e) {
      var r = e.s + e.c * t;
      e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
    },
    Vr = function (t, e) {
      return e.set(e.t, e.p, t ? e.e : e.b, e);
    },
    Wr = function (t, e) {
      return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
    },
    Gr = function (t, e, r) {
      return (t.style[e] = r);
    },
    Hr = function (t, e, r) {
      return t.style.setProperty(e, r);
    },
    Qr = function (t, e, r) {
      return (t._gsap[e] = r);
    },
    $r = function (t, e, r) {
      return (t._gsap.scaleX = t._gsap.scaleY = r);
    },
    Zr = function (t, e, r, n, i) {
      var s = t._gsap;
      (s.scaleX = s.scaleY = r), s.renderTransform(i, s);
    },
    Jr = function (t, e, r, n, i) {
      var s = t._gsap;
      (s[e] = r), s.renderTransform(i, s);
    },
    Kr = "transform",
    tn = Kr + "Origin",
    en = function (t, e) {
      var r = kr.createElementNS
        ? kr.createElementNS(
            (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            t
          )
        : kr.createElement(t);
      return r.style ? r : kr.createElement(t);
    },
    rn = function t(e, r, n) {
      var i = getComputedStyle(e);
      return (
        i[r] ||
        i.getPropertyValue(r.replace(Fr, "-$1").toLowerCase()) ||
        i.getPropertyValue(r) ||
        (!n && t(e, sn(r) || r, 1)) ||
        ""
      );
    },
    nn = "O,Moz,ms,Ms,Webkit".split(","),
    sn = function (t, e, r) {
      var n = (e || Ar).style,
        i = 5;
      if (t in n && !r) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        i-- && !(nn[i] + t in n);

      );
      return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? nn[i] : "") + t;
    },
    on = function () {
      "undefined" != typeof window &&
        window.document &&
        ((Dr = window),
        (kr = Dr.document),
        (Cr = kr.documentElement),
        (Ar = en("div") || { style: {} }),
        en("div"),
        (Kr = sn(Kr)),
        (tn = Kr + "Origin"),
        (Ar.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (Pr = !!sn("perspective")),
        (Er = 1));
    },
    an = function t(e) {
      var r,
        n = en(
          "svg",
          (this.ownerSVGElement &&
            this.ownerSVGElement.getAttribute("xmlns")) ||
            "http://www.w3.org/2000/svg"
        ),
        i = this.parentNode,
        s = this.nextSibling,
        o = this.style.cssText;
      if (
        (Cr.appendChild(n),
        n.appendChild(this),
        (this.style.display = "block"),
        e)
      )
        try {
          (r = this.getBBox()),
            (this._gsapBBox = this.getBBox),
            (this.getBBox = t);
        } catch (t) {}
      else this._gsapBBox && (r = this._gsapBBox());
      return (
        i && (s ? i.insertBefore(this, s) : i.appendChild(this)),
        Cr.removeChild(n),
        (this.style.cssText = o),
        r
      );
    },
    un = function (t, e) {
      for (var r = e.length; r--; )
        if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
    },
    hn = function (t) {
      var e;
      try {
        e = t.getBBox();
      } catch (r) {
        e = an.call(t, !0);
      }
      return (
        (e && (e.width || e.height)) ||
          t.getBBox === an ||
          (e = an.call(t, !0)),
        !e || e.width || e.x || e.y
          ? e
          : {
              x: +un(t, ["x", "cx", "x1"]) || 0,
              y: +un(t, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
      );
    },
    ln = function (t) {
      return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !hn(t));
    },
    cn = function (t, e) {
      if (e) {
        var r = t.style;
        e in Ir && e !== tn && (e = Kr),
          r.removeProperty
            ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                (e = "-" + e),
              r.removeProperty(e.replace(Fr, "-$1").toLowerCase()))
            : r.removeAttribute(e);
      }
    },
    fn = function (t, e, r, n, i, s) {
      var o = new xr(t._pt, e, r, 0, 1, s ? Wr : Vr);
      return (t._pt = o), (o.b = n), (o.e = i), t._props.push(r), o;
    },
    dn = { deg: 1, rad: 1, turn: 1 },
    pn = function t(e, r, n, i) {
      var s,
        o,
        a,
        u,
        h = parseFloat(n) || 0,
        l = (n + "").trim().substr((h + "").length) || "px",
        c = Ar.style,
        f = Yr.test(r),
        d = "svg" === e.tagName.toLowerCase(),
        p = (d ? "client" : "offset") + (f ? "Width" : "Height"),
        _ = 100,
        m = "px" === i,
        g = "%" === i;
      return i === l || !h || dn[i] || dn[l]
        ? h
        : ("px" !== l && !m && (h = t(e, r, n, "px")),
          (u = e.getCTM && ln(e)),
          (!g && "%" !== l) || (!Ir[r] && !~r.indexOf("adius"))
            ? ((c[f ? "width" : "height"] = _ + (m ? l : i)),
              (o =
                ~r.indexOf("adius") || ("em" === i && e.appendChild && !d)
                  ? e
                  : e.parentNode),
              u && (o = (e.ownerSVGElement || {}).parentNode),
              (o && o !== kr && o.appendChild) || (o = kr.body),
              (a = o._gsap) && g && a.width && f && a.time === Re.time
                ? kt((h / a.width) * _)
                : ((g || "%" === l) && (c.position = rn(e, "position")),
                  o === e && (c.position = "static"),
                  o.appendChild(Ar),
                  (s = Ar[p]),
                  o.removeChild(Ar),
                  (c.position = "absolute"),
                  f && g && (((a = Ot(o)).time = Re.time), (a.width = o[p])),
                  kt(m ? (s * h) / _ : s && h ? (_ / s) * h : 0)))
            : ((s = u ? e.getBBox()[f ? "width" : "height"] : e[p]),
              kt(g ? (h / s) * _ : (h / 100) * s)));
    },
    _n = function (t, e, r, n) {
      var i;
      return (
        Er || on(),
        e in qr &&
          "transform" !== e &&
          ~(e = qr[e]).indexOf(",") &&
          (e = e.split(",")[0]),
        Ir[e] && "transform" !== e
          ? ((i = Dn(t, n)),
            (i =
              "transformOrigin" !== e
                ? i[e]
                : i.svg
                ? i.origin
                : kn(rn(t, tn)) + " " + i.zOrigin + "px"))
          : (!(i = t.style[e]) ||
              "auto" === i ||
              n ||
              ~(i + "").indexOf("calc(")) &&
            (i =
              (yn[e] && yn[e](t, e, r)) ||
              rn(t, e) ||
              Mt(t, e) ||
              ("opacity" === e ? 1 : 0)),
        r && !~(i + "").trim().indexOf(" ") ? pn(t, e, i, r) + r : i
      );
    },
    mn = function (t, e, r, n) {
      if (!r || "none" === r) {
        var i = sn(e, t, 1),
          s = i && rn(t, i, 1);
        s && s !== r
          ? ((e = i), (r = s))
          : "borderColor" === e && (r = rn(t, "borderTopColor"));
      }
      var o,
        a,
        u,
        h,
        l,
        c,
        f,
        d,
        p,
        _,
        m,
        g = new xr(this._pt, t.style, e, 0, 1, _r),
        v = 0,
        y = 0;
      if (
        ((g.b = r),
        (g.e = n),
        (r += ""),
        "auto" === (n += "") &&
          ((t.style[e] = n), (n = rn(t, e) || n), (t.style[e] = r)),
        Le((o = [r, n])),
        (n = o[1]),
        (u = (r = o[0]).match(nt) || []),
        (n.match(nt) || []).length)
      ) {
        for (; (a = nt.exec(n)); )
          (f = a[0]),
            (p = n.substring(v, a.index)),
            l
              ? (l = (l + 1) % 5)
              : ("rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5)) ||
                (l = 1),
            f !== (c = u[y++] || "") &&
              ((h = parseFloat(c) || 0),
              (m = c.substr((h + "").length)),
              "=" === f.charAt(1) && (f = Et(h, f) + m),
              (d = parseFloat(f)),
              (_ = f.substr((d + "").length)),
              (v = nt.lastIndex - _.length),
              _ ||
                ((_ = _ || R.units[e] || m),
                v === n.length && ((n += _), (g.e += _))),
              m !== _ && (h = pn(t, e, c, _) || 0),
              (g._pt = {
                _next: g._pt,
                p: p || 1 === y ? p : ",",
                s: h,
                c: d - h,
                m: (l && l < 4) || "zIndex" === e ? Math.round : 0,
              }));
        g.c = v < n.length ? n.substring(v, n.length) : "";
      } else g.r = "display" === e && "none" === n ? Wr : Vr;
      return st.test(n) && (g.e = 0), (this._pt = g), g;
    },
    gn = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    vn = function (t, e) {
      if (e.tween && e.tween._time === e.tween._dur) {
        var r,
          n,
          i,
          s = e.t,
          o = s.style,
          a = e.u,
          u = s._gsap;
        if ("all" === a || !0 === a) (o.cssText = ""), (n = 1);
        else
          for (i = (a = a.split(",")).length; --i > -1; )
            (r = a[i]),
              Ir[r] && ((n = 1), (r = "transformOrigin" === r ? tn : Kr)),
              cn(s, r);
        n &&
          (cn(s, Kr),
          u &&
            (u.svg && s.removeAttribute("transform"),
            Dn(s, 1),
            (u.uncache = 1)));
      }
    },
    yn = {
      clearProps: function (t, e, r, n, i) {
        if ("isFromStart" !== i.data) {
          var s = (t._pt = new xr(t._pt, e, r, 0, 0, vn));
          return (s.u = n), (s.pr = -10), (s.tween = i), t._props.push(r), 1;
        }
      },
    },
    bn = [1, 0, 0, 1, 0, 0],
    xn = {},
    wn = function (t) {
      return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
    },
    Tn = function (t) {
      var e = rn(t, Kr);
      return wn(e) ? bn : e.substr(7).match(rt).map(kt);
    },
    On = function (t, e) {
      var r,
        n,
        i,
        s,
        o = t._gsap || Ot(t),
        a = t.style,
        u = Tn(t);
      return o.svg && t.getAttribute("transform")
        ? "1,0,0,1,0,0" ===
          (u = [
            (i = t.transform.baseVal.consolidate().matrix).a,
            i.b,
            i.c,
            i.d,
            i.e,
            i.f,
          ]).join(",")
          ? bn
          : u
        : (u !== bn ||
            t.offsetParent ||
            t === Cr ||
            o.svg ||
            ((i = a.display),
            (a.display = "block"),
            ((r = t.parentNode) && t.offsetParent) ||
              ((s = 1), (n = t.nextSibling), Cr.appendChild(t)),
            (u = Tn(t)),
            i ? (a.display = i) : cn(t, "display"),
            s &&
              (n
                ? r.insertBefore(t, n)
                : r
                ? r.appendChild(t)
                : Cr.removeChild(t))),
          e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
    },
    Mn = function (t, e, r, n, i, s) {
      var o,
        a,
        u,
        h = t._gsap,
        l = i || On(t, !0),
        c = h.xOrigin || 0,
        f = h.yOrigin || 0,
        d = h.xOffset || 0,
        p = h.yOffset || 0,
        _ = l[0],
        m = l[1],
        g = l[2],
        v = l[3],
        y = l[4],
        b = l[5],
        x = e.split(" "),
        w = parseFloat(x[0]) || 0,
        T = parseFloat(x[1]) || 0;
      r
        ? l !== bn &&
          (a = _ * v - m * g) &&
          ((u = w * (-m / a) + T * (_ / a) - (_ * b - m * y) / a),
          (w = w * (v / a) + T * (-g / a) + (g * b - v * y) / a),
          (T = u))
        : ((w = (o = hn(t)).x + (~x[0].indexOf("%") ? (w / 100) * o.width : w)),
          (T =
            o.y + (~(x[1] || x[0]).indexOf("%") ? (T / 100) * o.height : T))),
        n || (!1 !== n && h.smooth)
          ? ((y = w - c),
            (b = T - f),
            (h.xOffset = d + (y * _ + b * g) - y),
            (h.yOffset = p + (y * m + b * v) - b))
          : (h.xOffset = h.yOffset = 0),
        (h.xOrigin = w),
        (h.yOrigin = T),
        (h.smooth = !!n),
        (h.origin = e),
        (h.originIsAbsolute = !!r),
        (t.style[tn] = "0px 0px"),
        s &&
          (fn(s, h, "xOrigin", c, w),
          fn(s, h, "yOrigin", f, T),
          fn(s, h, "xOffset", d, h.xOffset),
          fn(s, h, "yOffset", p, h.yOffset)),
        t.setAttribute("data-svg-origin", w + " " + T);
    },
    Dn = function (t, e) {
      var r = t._gsap || new He(t);
      if ("x" in r && !e && !r.uncache) return r;
      var n,
        i,
        s,
        o,
        a,
        u,
        h,
        l,
        c,
        f,
        d,
        p,
        _,
        m,
        g,
        v,
        y,
        b,
        x,
        w,
        T,
        O,
        M,
        D,
        k,
        C,
        E,
        A,
        S,
        P,
        I,
        L,
        z = t.style,
        F = r.scaleX < 0,
        Y = "px",
        B = "deg",
        q = rn(t, tn) || "0";
      return (
        (n = i = s = u = h = l = c = f = d = 0),
        (o = a = 1),
        (r.svg = !(!t.getCTM || !ln(t))),
        (m = On(t, r.svg)),
        r.svg &&
          ((D =
            (!r.uncache || "0px 0px" === q) &&
            !e &&
            t.getAttribute("data-svg-origin")),
          Mn(t, D || q, !!D || r.originIsAbsolute, !1 !== r.smooth, m)),
        (p = r.xOrigin || 0),
        (_ = r.yOrigin || 0),
        m !== bn &&
          ((b = m[0]),
          (x = m[1]),
          (w = m[2]),
          (T = m[3]),
          (n = O = m[4]),
          (i = M = m[5]),
          6 === m.length
            ? ((o = Math.sqrt(b * b + x * x)),
              (a = Math.sqrt(T * T + w * w)),
              (u = b || x ? zr(x, b) * Lr : 0),
              (c = w || T ? zr(w, T) * Lr + u : 0) &&
                (a *= Math.abs(Math.cos(c * Rr))),
              r.svg && ((n -= p - (p * b + _ * w)), (i -= _ - (p * x + _ * T))))
            : ((L = m[6]),
              (P = m[7]),
              (E = m[8]),
              (A = m[9]),
              (S = m[10]),
              (I = m[11]),
              (n = m[12]),
              (i = m[13]),
              (s = m[14]),
              (h = (g = zr(L, S)) * Lr),
              g &&
                ((D = O * (v = Math.cos(-g)) + E * (y = Math.sin(-g))),
                (k = M * v + A * y),
                (C = L * v + S * y),
                (E = O * -y + E * v),
                (A = M * -y + A * v),
                (S = L * -y + S * v),
                (I = P * -y + I * v),
                (O = D),
                (M = k),
                (L = C)),
              (l = (g = zr(-w, S)) * Lr),
              g &&
                ((v = Math.cos(-g)),
                (I = T * (y = Math.sin(-g)) + I * v),
                (b = D = b * v - E * y),
                (x = k = x * v - A * y),
                (w = C = w * v - S * y)),
              (u = (g = zr(x, b)) * Lr),
              g &&
                ((D = b * (v = Math.cos(g)) + x * (y = Math.sin(g))),
                (k = O * v + M * y),
                (x = x * v - b * y),
                (M = M * v - O * y),
                (b = D),
                (O = k)),
              h &&
                Math.abs(h) + Math.abs(u) > 359.9 &&
                ((h = u = 0), (l = 180 - l)),
              (o = kt(Math.sqrt(b * b + x * x + w * w))),
              (a = kt(Math.sqrt(M * M + L * L))),
              (g = zr(O, M)),
              (c = Math.abs(g) > 2e-4 ? g * Lr : 0),
              (d = I ? 1 / (I < 0 ? -I : I) : 0)),
          r.svg &&
            ((D = t.getAttribute("transform")),
            (r.forceCSS = t.setAttribute("transform", "") || !wn(rn(t, Kr))),
            D && t.setAttribute("transform", D))),
        Math.abs(c) > 90 &&
          Math.abs(c) < 270 &&
          (F
            ? ((o *= -1),
              (c += u <= 0 ? 180 : -180),
              (u += u <= 0 ? 180 : -180))
            : ((a *= -1), (c += c <= 0 ? 180 : -180))),
        (e = e || r.uncache),
        (r.x =
          n -
          ((r.xPercent =
            n &&
            ((!e && r.xPercent) ||
              (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0)))
            ? (t.offsetWidth * r.xPercent) / 100
            : 0) +
          Y),
        (r.y =
          i -
          ((r.yPercent =
            i &&
            ((!e && r.yPercent) ||
              (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0)))
            ? (t.offsetHeight * r.yPercent) / 100
            : 0) +
          Y),
        (r.z = s + Y),
        (r.scaleX = kt(o)),
        (r.scaleY = kt(a)),
        (r.rotation = kt(u) + B),
        (r.rotationX = kt(h) + B),
        (r.rotationY = kt(l) + B),
        (r.skewX = c + B),
        (r.skewY = f + B),
        (r.transformPerspective = d + Y),
        (r.zOrigin = parseFloat(q.split(" ")[2]) || 0) && (z[tn] = kn(q)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = R.force3D),
        (r.renderTransform = r.svg ? Ln : Pr ? In : En),
        (r.uncache = 0),
        r
      );
    },
    kn = function (t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    Cn = function (t, e, r) {
      var n = le(e);
      return kt(parseFloat(e) + parseFloat(pn(t, "x", r + "px", n))) + n;
    },
    En = function (t, e) {
      (e.z = "0px"),
        (e.rotationY = e.rotationX = "0deg"),
        (e.force3D = 0),
        In(t, e);
    },
    An = "0deg",
    Sn = "0px",
    Pn = ") ",
    In = function (t, e) {
      var r = e || this,
        n = r.xPercent,
        i = r.yPercent,
        s = r.x,
        o = r.y,
        a = r.z,
        u = r.rotation,
        h = r.rotationY,
        l = r.rotationX,
        c = r.skewX,
        f = r.skewY,
        d = r.scaleX,
        p = r.scaleY,
        _ = r.transformPerspective,
        m = r.force3D,
        g = r.target,
        v = r.zOrigin,
        y = "",
        b = ("auto" === m && t && 1 !== t) || !0 === m;
      if (v && (l !== An || h !== An)) {
        var x,
          w = parseFloat(h) * Rr,
          T = Math.sin(w),
          O = Math.cos(w);
        (w = parseFloat(l) * Rr),
          (x = Math.cos(w)),
          (s = Cn(g, s, T * x * -v)),
          (o = Cn(g, o, -Math.sin(w) * -v)),
          (a = Cn(g, a, O * x * -v + v));
      }
      _ !== Sn && (y += "perspective(" + _ + Pn),
        (n || i) && (y += "translate(" + n + "%, " + i + "%) "),
        (b || s !== Sn || o !== Sn || a !== Sn) &&
          (y +=
            a !== Sn || b
              ? "translate3d(" + s + ", " + o + ", " + a + ") "
              : "translate(" + s + ", " + o + Pn),
        u !== An && (y += "rotate(" + u + Pn),
        h !== An && (y += "rotateY(" + h + Pn),
        l !== An && (y += "rotateX(" + l + Pn),
        (c === An && f === An) || (y += "skew(" + c + ", " + f + Pn),
        (1 === d && 1 === p) || (y += "scale(" + d + ", " + p + Pn),
        (g.style[Kr] = y || "translate(0, 0)");
    },
    Ln = function (t, e) {
      var r,
        n,
        i,
        s,
        o,
        a = e || this,
        u = a.xPercent,
        h = a.yPercent,
        l = a.x,
        c = a.y,
        f = a.rotation,
        d = a.skewX,
        p = a.skewY,
        _ = a.scaleX,
        m = a.scaleY,
        g = a.target,
        v = a.xOrigin,
        y = a.yOrigin,
        b = a.xOffset,
        x = a.yOffset,
        w = a.forceCSS,
        T = parseFloat(l),
        O = parseFloat(c);
      (f = parseFloat(f)),
        (d = parseFloat(d)),
        (p = parseFloat(p)) && ((d += p = parseFloat(p)), (f += p)),
        f || d
          ? ((f *= Rr),
            (d *= Rr),
            (r = Math.cos(f) * _),
            (n = Math.sin(f) * _),
            (i = Math.sin(f - d) * -m),
            (s = Math.cos(f - d) * m),
            d &&
              ((p *= Rr),
              (o = Math.tan(d - p)),
              (i *= o = Math.sqrt(1 + o * o)),
              (s *= o),
              p &&
                ((o = Math.tan(p)), (r *= o = Math.sqrt(1 + o * o)), (n *= o))),
            (r = kt(r)),
            (n = kt(n)),
            (i = kt(i)),
            (s = kt(s)))
          : ((r = _), (s = m), (n = i = 0)),
        ((T && !~(l + "").indexOf("px")) || (O && !~(c + "").indexOf("px"))) &&
          ((T = pn(g, "x", l, "px")), (O = pn(g, "y", c, "px"))),
        (v || y || b || x) &&
          ((T = kt(T + v - (v * r + y * i) + b)),
          (O = kt(O + y - (v * n + y * s) + x))),
        (u || h) &&
          ((o = g.getBBox()),
          (T = kt(T + (u / 100) * o.width)),
          (O = kt(O + (h / 100) * o.height))),
        (o =
          "matrix(" +
          r +
          "," +
          n +
          "," +
          i +
          "," +
          s +
          "," +
          T +
          "," +
          O +
          ")"),
        g.setAttribute("transform", o),
        w && (g.style[Kr] = o);
    },
    Rn = function (t, e, r, n, i) {
      var s,
        o,
        a = 360,
        u = V(i),
        h = parseFloat(i) * (u && ~i.indexOf("rad") ? Lr : 1) - n,
        l = n + h + "deg";
      return (
        u &&
          ("short" === (s = i.split("_")[1]) &&
            (h %= a) !== h % 180 &&
            (h += h < 0 ? a : -360),
          "cw" === s && h < 0
            ? (h = ((h + 36e9) % a) - ~~(h / a) * a)
            : "ccw" === s && h > 0 && (h = ((h - 36e9) % a) - ~~(h / a) * a)),
        (t._pt = o = new xr(t._pt, e, r, n, h, Nr)),
        (o.e = l),
        (o.u = "deg"),
        t._props.push(r),
        o
      );
    },
    zn = function (t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    Fn = function (t, e, r) {
      var n,
        i,
        s,
        o,
        a,
        u,
        h,
        l = zn({}, r._gsap),
        c = r.style;
      for (i in (l.svg
        ? ((s = r.getAttribute("transform")),
          r.setAttribute("transform", ""),
          (c[Kr] = e),
          (n = Dn(r, 1)),
          cn(r, Kr),
          r.setAttribute("transform", s))
        : ((s = getComputedStyle(r)[Kr]),
          (c[Kr] = e),
          (n = Dn(r, 1)),
          (c[Kr] = s)),
      Ir))
        (s = l[i]) !== (o = n[i]) &&
          "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
          ((a = le(s) !== (h = le(o)) ? pn(r, i, s, h) : parseFloat(s)),
          (u = parseFloat(o)),
          (t._pt = new xr(t._pt, n, i, a, u - a, Xr)),
          (t._pt.u = h || 0),
          t._props.push(i));
      zn(n, l);
    };
  Dt("padding,margin,Width,Radius", function (t, e) {
    var r = "Top",
      n = "Right",
      i = "Bottom",
      s = "Left",
      o = (e < 3 ? [r, n, i, s] : [r + s, r + n, i + n, i + s]).map(function (
        r
      ) {
        return e < 2 ? t + r : "border" + r + t;
      });
    yn[e > 1 ? "border" + t : t] = function (t, e, r, n, i) {
      var s, a;
      if (arguments.length < 4)
        return (
          (s = o.map(function (e) {
            return _n(t, e, r);
          })),
          5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a
        );
      (s = (n + "").split(" ")),
        (a = {}),
        o.forEach(function (t, e) {
          return (a[t] = s[e] = s[e] || s[((e - 1) / 2) | 0]);
        }),
        t.init(e, a, i);
    };
  });
  var Yn,
    Bn,
    qn,
    Xn = {
      name: "css",
      register: on,
      targetTest: function (t) {
        return t.style && t.nodeType;
      },
      init: function (t, e, r, n, i) {
        var s,
          o,
          a,
          u,
          h,
          l,
          c,
          f,
          d,
          p,
          _,
          m,
          g,
          v,
          y,
          b,
          x,
          w,
          T,
          O = this._props,
          M = t.style,
          D = r.vars.startAt;
        for (c in (Er || on(), e))
          if (
            "autoRound" !== c &&
            ((o = e[c]), !vt[c] || !er(c, e, r, n, t, i))
          )
            if (
              ((h = typeof o),
              (l = yn[c]),
              "function" === h && (h = typeof (o = o.call(r, n, t, i))),
              "string" === h && ~o.indexOf("random(") && (o = be(o)),
              l)
            )
              l(this, t, c, o, r) && (y = 1);
            else if ("--" === c.substr(0, 2))
              (s = (getComputedStyle(t).getPropertyValue(c) + "").trim()),
                (o += ""),
                (Pe.lastIndex = 0),
                Pe.test(s) || ((f = le(s)), (d = le(o))),
                d ? f !== d && (s = pn(t, c, s, d) + d) : f && (o += f),
                this.add(M, "setProperty", s, o, n, i, 0, 0, c),
                O.push(c);
            else if ("undefined" !== h) {
              if (
                (D && c in D
                  ? ((s =
                      "function" == typeof D[c] ? D[c].call(r, n, t, i) : D[c]),
                    V(s) && ~s.indexOf("random(") && (s = be(s)),
                    le(s + "") || (s += R.units[c] || le(_n(t, c)) || ""),
                    "=" === (s + "").charAt(1) && (s = _n(t, c)))
                  : (s = _n(t, c)),
                (u = parseFloat(s)),
                (p = "string" === h && "=" === o.charAt(1) && o.substr(0, 2)) &&
                  (o = o.substr(2)),
                (a = parseFloat(o)),
                c in qr &&
                  ("autoAlpha" === c &&
                    (1 === u &&
                      "hidden" === _n(t, "visibility") &&
                      a &&
                      (u = 0),
                    fn(
                      this,
                      M,
                      "visibility",
                      u ? "inherit" : "hidden",
                      a ? "inherit" : "hidden",
                      !a
                    )),
                  "scale" !== c &&
                    "transform" !== c &&
                    ~(c = qr[c]).indexOf(",") &&
                    (c = c.split(",")[0])),
                (_ = c in Ir))
              )
                if (
                  (m ||
                    (((g = t._gsap).renderTransform && !e.parseTransform) ||
                      Dn(t, e.parseTransform),
                    (v = !1 !== e.smoothOrigin && g.smooth),
                    ((m = this._pt =
                      new xr(
                        this._pt,
                        M,
                        Kr,
                        0,
                        1,
                        g.renderTransform,
                        g,
                        0,
                        -1
                      )).dep = 1)),
                  "scale" === c)
                )
                  (this._pt = new xr(
                    this._pt,
                    g,
                    "scaleY",
                    g.scaleY,
                    (p ? Et(g.scaleY, p + a) : a) - g.scaleY || 0
                  )),
                    O.push("scaleY", c),
                    (c += "X");
                else {
                  if ("transformOrigin" === c) {
                    (x = void 0),
                      (w = void 0),
                      (T = void 0),
                      (x = (b = o).split(" ")),
                      (w = x[0]),
                      (T = x[1] || "50%"),
                      ("top" !== w &&
                        "bottom" !== w &&
                        "left" !== T &&
                        "right" !== T) ||
                        ((b = w), (w = T), (T = b)),
                      (x[0] = gn[w] || w),
                      (x[1] = gn[T] || T),
                      (o = x.join(" ")),
                      g.svg
                        ? Mn(t, o, 0, v, 0, this)
                        : ((d = parseFloat(o.split(" ")[2]) || 0) !==
                            g.zOrigin && fn(this, g, "zOrigin", g.zOrigin, d),
                          fn(this, M, c, kn(s), kn(o)));
                    continue;
                  }
                  if ("svgOrigin" === c) {
                    Mn(t, o, 1, v, 0, this);
                    continue;
                  }
                  if (c in xn) {
                    Rn(this, g, c, u, p ? Et(u, p + o) : o);
                    continue;
                  }
                  if ("smoothOrigin" === c) {
                    fn(this, g, "smooth", g.smooth, o);
                    continue;
                  }
                  if ("force3D" === c) {
                    g[c] = o;
                    continue;
                  }
                  if ("transform" === c) {
                    Fn(this, o, t);
                    continue;
                  }
                }
              else c in M || (c = sn(c) || c);
              if (
                _ ||
                ((a || 0 === a) && (u || 0 === u) && !Br.test(o) && c in M)
              )
                a || (a = 0),
                  (f = (s + "").substr((u + "").length)) !==
                    (d = le(o) || (c in R.units ? R.units[c] : f)) &&
                    (u = pn(t, c, s, d)),
                  (this._pt = new xr(
                    this._pt,
                    _ ? g : M,
                    c,
                    u,
                    (p ? Et(u, p + a) : a) - u,
                    _ || ("px" !== d && "zIndex" !== c) || !1 === e.autoRound
                      ? Xr
                      : Ur
                  )),
                  (this._pt.u = d || 0),
                  f !== d && "%" !== d && ((this._pt.b = s), (this._pt.r = jr));
              else if (c in M) mn.call(this, t, c, s, p ? p + o : o);
              else {
                if (!(c in t)) {
                  ct(c, o);
                  continue;
                }
                this.add(t, c, s || t[c], p ? p + o : o, n, i);
              }
              O.push(c);
            }
        y && br(this);
      },
      get: _n,
      aliases: qr,
      getSetter: function (t, e, r) {
        var n = qr[e];
        return (
          n && n.indexOf(",") < 0 && (e = n),
          e in Ir && e !== tn && (t._gsap.x || _n(t, "x"))
            ? r && Sr === r
              ? "scale" === e
                ? $r
                : Qr
              : ((Sr = r || {}), "scale" === e ? Zr : Jr)
            : t.style && !H(t.style[e])
            ? Gr
            : ~e.indexOf("-")
            ? Hr
            : fr(t, e)
        );
      },
      core: { _removeProperty: cn, _getMatrix: On },
    };
  (Mr.utils.checkPrefix = sn),
    (qn = Dt(
      (Yn = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
        "," +
        (Bn = "rotation,rotationX,rotationY,skewX,skewY") +
        ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      function (t) {
        Ir[t] = 1;
      }
    )),
    Dt(Bn, function (t) {
      (R.units[t] = "deg"), (xn[t] = 1);
    }),
    (qr[qn[13]] = Yn + "," + Bn),
    Dt(
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
      function (t) {
        var e = t.split(":");
        qr[e[1]] = qn[e[0]];
      }
    ),
    Dt(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (t) {
        R.units[t] = "px";
      }
    ),
    Mr.registerPlugin(Xn);
  var Nn = Mr.registerPlugin(Xn) || Mr,
    jn = (Nn.core.Tween, {});
  jn = (function () {
    "use strict";
    var t = document,
      e = t.createTextNode.bind(t);
    function r(t, e, r) {
      t.style.setProperty(e, r);
    }
    function n(t, e) {
      return t.appendChild(e);
    }
    function i(e, r, i, s) {
      var o = t.createElement("span");
      return (
        r && (o.className = r),
        i && (!s && o.setAttribute("data-" + r, i), (o.textContent = i)),
        (e && n(e, o)) || o
      );
    }
    function s(t, e) {
      return t.getAttribute("data-" + e);
    }
    function o(e, r) {
      return e && 0 != e.length
        ? e.nodeName
          ? [e]
          : [].slice.call(e[0].nodeName ? e : (r || t).querySelectorAll(e))
        : [];
    }
    function a(t) {
      for (var e = []; t--; ) e[t] = [];
      return e;
    }
    function u(t, e) {
      t && t.some(e);
    }
    function h(t) {
      return function (e) {
        return t[e];
      };
    }
    function l(t, e, n) {
      var i = "--" + e,
        s = i + "-index";
      u(n, function (t, e) {
        Array.isArray(t)
          ? u(t, function (t) {
              r(t, s, e);
            })
          : r(t, s, e);
      }),
        r(t, i + "-total", n.length);
    }
    var c = {};
    function f(t, e, r) {
      var n = r.indexOf(t);
      if (-1 == n)
        r.unshift(t),
          u(c[t].depends, function (e) {
            f(e, t, r);
          });
      else {
        var i = r.indexOf(e);
        r.splice(n, 1), r.splice(i, 0, t);
      }
      return r;
    }
    function d(t, e, r, n) {
      return { by: t, depends: e, key: r, split: n };
    }
    function p(t) {
      return f(t, 0, []).map(h(c));
    }
    function _(t) {
      c[t.by] = t;
    }
    function m(t, r, s, a, h) {
      t.normalize();
      var l = [],
        c = document.createDocumentFragment();
      a && l.push(t.previousSibling);
      var f = [];
      return (
        o(t.childNodes).some(function (t) {
          if (!t.tagName || t.hasChildNodes()) {
            if (t.childNodes && t.childNodes.length)
              return f.push(t), void l.push.apply(l, m(t, r, s, a, h));
            var n = t.wholeText || "",
              o = n.trim();
            o.length &&
              (" " === n[0] && f.push(e(" ")),
              u(o.split(s), function (t, e) {
                e && h && f.push(i(c, "whitespace", " ", h));
                var n = i(c, r, t);
                l.push(n), f.push(n);
              }),
              " " === n[n.length - 1] && f.push(e(" ")));
          } else f.push(t);
        }),
        u(f, function (t) {
          n(c, t);
        }),
        (t.innerHTML = ""),
        n(t, c),
        l
      );
    }
    var g = 0;
    function v(t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    }
    var y = "words",
      b = d(y, g, "word", function (t) {
        return m(t, "word", /\s+/, 0, 1);
      }),
      x = "chars",
      w = d(x, [y], "char", function (t, e, r) {
        var n = [];
        return (
          u(r[y], function (t, r) {
            n.push.apply(n, m(t, "char", "", e.whitespace && r));
          }),
          n
        );
      });
    function T(t) {
      var e = (t = t || {}).key;
      return o(t.target || "[data-splitting]").map(function (r) {
        var n = r["🍌"];
        if (!t.force && n) return n;
        n = r["🍌"] = { el: r };
        var i = p(t.by || s(r, "splitting") || x),
          o = v({}, t);
        return (
          u(i, function (t) {
            if (t.split) {
              var i = t.by,
                s = (e ? "-" + e : "") + t.key,
                a = t.split(r, o, n);
              s && l(r, s, a), (n[i] = a), r.classList.add(i);
            }
          }),
          r.classList.add("splitting"),
          n
        );
      });
    }
    function O(t) {
      var e = ((t = t || {}).target = i());
      return (e.innerHTML = t.content), T(t), e.outerHTML;
    }
    function M(t, e, r) {
      var n = o(e.matching || t.children, t),
        i = {};
      return (
        u(n, function (t) {
          var e = Math.round(t[r]);
          (i[e] || (i[e] = [])).push(t);
        }),
        Object.keys(i).map(Number).sort(D).map(h(i))
      );
    }
    function D(t, e) {
      return t - e;
    }
    (T.html = O), (T.add = _);
    var k = d("lines", [y], "line", function (t, e, r) {
        return M(t, { matching: r[y] }, "offsetTop");
      }),
      C = d("items", g, "item", function (t, e) {
        return o(e.matching || t.children, t);
      }),
      E = d("rows", g, "row", function (t, e) {
        return M(t, e, "offsetTop");
      }),
      A = d("cols", g, "col", function (t, e) {
        return M(t, e, "offsetLeft");
      }),
      S = d("grid", ["rows", "cols"]),
      P = "layout",
      I = d(P, g, g, function (t, e) {
        var a = (e.rows = +(e.rows || s(t, "rows") || 1)),
          u = (e.columns = +(e.columns || s(t, "columns") || 1));
        if (
          ((e.image = e.image || s(t, "image") || t.currentSrc || t.src),
          e.image)
        ) {
          var h = o("img", t)[0];
          e.image = h && (h.currentSrc || h.src);
        }
        e.image && r(t, "background-image", "url(" + e.image + ")");
        for (var l = a * u, c = [], f = i(g, "cell-grid"); l--; ) {
          var d = i(f, "cell");
          i(d, "cell-inner"), c.push(d);
        }
        return n(t, f), c;
      }),
      L = d("cellRows", [P], "row", function (t, e, r) {
        var n = e.rows,
          i = a(n);
        return (
          u(r[P], function (t, e, r) {
            i[Math.floor(e / (r.length / n))].push(t);
          }),
          i
        );
      }),
      R = d("cellColumns", [P], "col", function (t, e, r) {
        var n = e.columns,
          i = a(n);
        return (
          u(r[P], function (t, e) {
            i[e % n].push(t);
          }),
          i
        );
      }),
      z = d("cells", ["cellRows", "cellColumns"], "cell", function (t, e, r) {
        return r[P];
      });
    return _(b), _(w), _(k), _(C), _(E), _(A), _(S), _(I), _(L), _(R), _(z), T;
  })();
  var Un,
    Vn,
    Wn = {};
  /*!
   * imagesLoaded v5.0.0
   * JavaScript is all like "You images are done yet or what?"
   * MIT License
   */ (Un = "undefined" != typeof window ? window : Wn),
    (Vn = function (t, e) {
      let r = t.jQuery,
        n = t.console;
      function i(t, e, s) {
        if (!(this instanceof i)) return new i(t, e, s);
        let o = t;
        var a;
        "string" == typeof t && (o = document.querySelectorAll(t)),
          o
            ? ((this.elements =
                ((a = o),
                Array.isArray(a)
                  ? a
                  : "object" == typeof a && "number" == typeof a.length
                  ? [...a]
                  : [a])),
              (this.options = {}),
              "function" == typeof e ? (s = e) : Object.assign(this.options, e),
              s && this.on("always", s),
              this.getImages(),
              r && (this.jqDeferred = new r.Deferred()),
              setTimeout(this.check.bind(this)))
            : n.error(`Bad element for imagesLoaded ${o || t}`);
      }
      (i.prototype = Object.create(e.prototype)),
        (i.prototype.getImages = function () {
          (this.images = []),
            this.elements.forEach(this.addElementImages, this);
        });
      const s = [1, 9, 11];
      i.prototype.addElementImages = function (t) {
        "IMG" === t.nodeName && this.addImage(t),
          !0 === this.options.background && this.addElementBackgroundImages(t);
        let { nodeType: e } = t;
        if (!e || !s.includes(e)) return;
        let r = t.querySelectorAll("img");
        for (let t of r) this.addImage(t);
        if ("string" == typeof this.options.background) {
          let e = t.querySelectorAll(this.options.background);
          for (let t of e) this.addElementBackgroundImages(t);
        }
      };
      const o = /url\((['"])?(.*?)\1\)/gi;
      function a(t) {
        this.img = t;
      }
      function u(t, e) {
        (this.url = t), (this.element = e), (this.img = new Image());
      }
      return (
        (i.prototype.addElementBackgroundImages = function (t) {
          let e = getComputedStyle(t);
          if (!e) return;
          let r = o.exec(e.backgroundImage);
          for (; null !== r; ) {
            let n = r && r[2];
            n && this.addBackground(n, t), (r = o.exec(e.backgroundImage));
          }
        }),
        (i.prototype.addImage = function (t) {
          let e = new a(t);
          this.images.push(e);
        }),
        (i.prototype.addBackground = function (t, e) {
          let r = new u(t, e);
          this.images.push(r);
        }),
        (i.prototype.check = function () {
          if (
            ((this.progressedCount = 0),
            (this.hasAnyBroken = !1),
            !this.images.length)
          )
            return void this.complete();
          let t = (t, e, r) => {
            setTimeout(() => {
              this.progress(t, e, r);
            });
          };
          this.images.forEach(function (e) {
            e.once("progress", t), e.check();
          });
        }),
        (i.prototype.progress = function (t, e, r) {
          this.progressedCount++,
            (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
            this.emitEvent("progress", [this, t, e]),
            this.jqDeferred &&
              this.jqDeferred.notify &&
              this.jqDeferred.notify(this, t),
            this.progressedCount === this.images.length && this.complete(),
            this.options.debug && n && n.log(`progress: ${r}`, t, e);
        }),
        (i.prototype.complete = function () {
          let t = this.hasAnyBroken ? "fail" : "done";
          if (
            ((this.isComplete = !0),
            this.emitEvent(t, [this]),
            this.emitEvent("always", [this]),
            this.jqDeferred)
          ) {
            let t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this);
          }
        }),
        (a.prototype = Object.create(e.prototype)),
        (a.prototype.check = function () {
          this.getIsImageComplete()
            ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
            : ((this.proxyImage = new Image()),
              this.img.crossOrigin &&
                (this.proxyImage.crossOrigin = this.img.crossOrigin),
              this.proxyImage.addEventListener("load", this),
              this.proxyImage.addEventListener("error", this),
              this.img.addEventListener("load", this),
              this.img.addEventListener("error", this),
              (this.proxyImage.src = this.img.currentSrc || this.img.src));
        }),
        (a.prototype.getIsImageComplete = function () {
          return this.img.complete && this.img.naturalWidth;
        }),
        (a.prototype.confirm = function (t, e) {
          this.isLoaded = t;
          let { parentNode: r } = this.img,
            n = "PICTURE" === r.nodeName ? r : this.img;
          this.emitEvent("progress", [this, n, e]);
        }),
        (a.prototype.handleEvent = function (t) {
          let e = "on" + t.type;
          this[e] && this[e](t);
        }),
        (a.prototype.onload = function () {
          this.confirm(!0, "onload"), this.unbindEvents();
        }),
        (a.prototype.onerror = function () {
          this.confirm(!1, "onerror"), this.unbindEvents();
        }),
        (a.prototype.unbindEvents = function () {
          this.proxyImage.removeEventListener("load", this),
            this.proxyImage.removeEventListener("error", this),
            this.img.removeEventListener("load", this),
            this.img.removeEventListener("error", this);
        }),
        (u.prototype = Object.create(a.prototype)),
        (u.prototype.check = function () {
          this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            (this.img.src = this.url),
            this.getIsImageComplete() &&
              (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
              this.unbindEvents());
        }),
        (u.prototype.unbindEvents = function () {
          this.img.removeEventListener("load", this),
            this.img.removeEventListener("error", this);
        }),
        (u.prototype.confirm = function (t, e) {
          (this.isLoaded = t),
            this.emitEvent("progress", [this, this.element, e]);
        }),
        (i.makeJQueryPlugin = function (e) {
          (e = e || t.jQuery) &&
            ((r = e),
            (r.fn.imagesLoaded = function (t, e) {
              return new i(this, t, e).jqDeferred.promise(r(this));
            }));
        }),
        i.makeJQueryPlugin(),
        i
      );
    }),
    Wn ? (Wn = Vn(Un, i("hobco"))) : (Un.imagesLoaded = Vn(Un, Un.EvEmitter));
  const Gn = (t, e, r) => (1 - r) * t + r * e,
    Hn = (t) => ({ x: t.clientX, y: t.clientY });
  function Qn(t, e, r) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = r),
      t
    );
  }
  let $n = { x: 0, y: 0 };
  window.addEventListener("mousemove", (t) => ($n = Hn(t)));
  class Zn {
    constructor(t) {
      Qn(this, "DOM", {
        el: null,
        inner: null,
        img: null,
        imgInner: null,
        content: null,
        contentImg: null,
        contentTexts: null,
      }),
        (this.DOM.el = t),
        (this.DOM.inner = this.DOM.el.querySelector(".slide__inner")),
        (this.DOM.img = this.DOM.el.querySelector(".slide__img")),
        (this.DOM.imgInner = this.DOM.el.querySelector(".slide__img-inner")),
        (this.DOM.content = this.DOM.el.querySelector(".slide__content")),
        (this.DOM.contentImg = this.DOM.content.querySelector(
          ".slide__content-img"
        )),
        (this.DOM.contentTexts = [...this.DOM.content.children].filter(
          (t) => t != this.DOM.contentImg
        ));
    }
  }
  function Jn(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  /*!
   * Observer 3.10.4
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var Kn,
    ti,
    ei,
    ri,
    ni,
    ii,
    si,
    oi,
    ai,
    ui,
    hi,
    li,
    ci = function () {
      return (
        Kn ||
        ("undefined" != typeof window &&
          (Kn = window.gsap) &&
          Kn.registerPlugin &&
          Kn)
      );
    },
    fi = 1,
    di = [],
    pi = [],
    _i = [],
    mi = Date.now,
    gi = function (t, e) {
      return e;
    },
    vi = function (t) {
      return !!~ui.indexOf(t);
    },
    yi = function (t, e, r, n, i) {
      return t.addEventListener(e, r, { passive: !n, capture: !!i });
    },
    bi = function (t, e, r, n) {
      return t.removeEventListener(e, r, !!n);
    },
    xi = "scrollLeft",
    wi = "scrollTop",
    Ti = function () {
      return (hi && hi.isPressed) || pi.cache++;
    },
    Oi = function (t, e) {
      var r = function r(n) {
        if (n || 0 === n) {
          fi && (ei.history.scrollRestoration = "manual");
          var i = hi && hi.isPressed;
          (n = r.v = Math.round(n) || (hi && hi.iOS ? 1 : 0)),
            t(n),
            (r.cacheID = pi.cache),
            i && gi("ss", n);
        } else
          (e || pi.cache !== r.cacheID || gi("ref")) &&
            ((r.cacheID = pi.cache), (r.v = t()));
        return r.v + r.offset;
      };
      return (r.offset = 0), t && r;
    },
    Mi = {
      s: xi,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: Oi(function (t) {
        return arguments.length
          ? ei.scrollTo(t, Di.sc())
          : ei.pageXOffset ||
              ri.scrollLeft ||
              ni.scrollLeft ||
              ii.scrollLeft ||
              0;
      }),
    },
    Di = {
      s: wi,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: Mi,
      sc: Oi(function (t) {
        return arguments.length
          ? ei.scrollTo(Mi.sc(), t)
          : ei.pageYOffset || ri.scrollTop || ni.scrollTop || ii.scrollTop || 0;
      }),
    },
    ki = function (t, e) {
      var r = e.s,
        n = e.sc,
        i = pi.indexOf(t),
        s = n === Di.sc ? 1 : 2;
      return (
        !~i && (i = pi.push(t) - 1),
        pi[i + s] ||
          (pi[i + s] =
            Oi(
              (function (t, e) {
                return ~_i.indexOf(t) && _i[_i.indexOf(t) + 1][e];
              })(t, r),
              !0
            ) ||
            (vi(t)
              ? n
              : Oi(function (e) {
                  return arguments.length ? (t[r] = e) : t[r];
                })))
      );
    },
    Ci = function (t, e, r) {
      var n = t,
        i = t,
        s = mi(),
        o = s,
        a = e || 50,
        u = Math.max(500, 3 * a),
        h = function (t, e) {
          var u = mi();
          e || u - s > a
            ? ((i = n), (n = t), (o = s), (s = u))
            : r
            ? (n += t)
            : (n = i + ((t - i) / (u - o)) * (s - o));
        };
      return {
        update: h,
        reset: function () {
          (i = n = r ? 0 : n), (o = s = 0);
        },
        getVelocity: function (t) {
          var e = o,
            a = i,
            l = mi();
          return (
            (t || 0 === t) && t !== n && h(t),
            s === o || l - o > u
              ? 0
              : ((n + (r ? a : -a)) / ((r ? l : s) - e)) * 1e3
          );
        },
      };
    },
    Ei = function (t, e) {
      return (
        e && !t._gsapAllow && t.preventDefault(),
        t.changedTouches ? t.changedTouches[0] : t
      );
    },
    Ai = function (t) {
      var e = Math.max.apply(Math, t),
        r = Math.min.apply(Math, t);
      return Math.abs(e) >= Math.abs(r) ? e : r;
    },
    Si = function () {
      var t, e, r, n;
      (ai = Kn.core.globals().ScrollTrigger) &&
        ai.core &&
        ((t = ai.core),
        (e = t.bridge || {}),
        (r = t._scrollers),
        (n = t._proxies),
        r.push.apply(r, pi),
        n.push.apply(n, _i),
        (pi = r),
        (_i = n),
        (gi = function (t, r) {
          return e[t](r);
        }));
    },
    Pi = function (t) {
      return (
        (Kn = t || ci()) &&
          "undefined" != typeof document &&
          document.body &&
          ((ei = window),
          (ri = document),
          (ni = ri.documentElement),
          (ii = ri.body),
          (ui = [ei, ri, ni, ii]),
          Kn.utils.clamp,
          (oi = "onpointerenter" in ii ? "pointer" : "mouse"),
          (si = Ii.isTouch =
            ei.matchMedia &&
            ei.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in ei ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (li = Ii.eventTypes =
            (
              "ontouchstart" in ni
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in ni
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (fi = 0);
          }, 500),
          Si(),
          (ti = 1)),
        ti
      );
    };
  (Mi.op = Di), (pi.cache = 0);
  var Ii = (function () {
    function t(t) {
      this.init(t);
    }
    var e, r, n;
    return (
      (t.prototype.init = function (t) {
        ti || Pi(Kn) || console.warn("Please gsap.registerPlugin(Observer)"),
          ai || Si();
        var e,
          r = t.tolerance,
          n = t.dragMinimum,
          i = t.type,
          s = t.target,
          o = t.lineHeight,
          a = t.debounce,
          u = t.preventDefault,
          h = t.onStop,
          l = t.onStopDelay,
          c = t.ignore,
          f = t.wheelSpeed,
          d = t.event,
          p = t.onDragStart,
          _ = t.onDragEnd,
          m = t.onDrag,
          g = t.onPress,
          v = t.onRelease,
          y = t.onRight,
          b = t.onLeft,
          x = t.onUp,
          w = t.onDown,
          T = t.onChangeX,
          O = t.onChangeY,
          M = t.onChange,
          D = t.onToggleX,
          k = t.onToggleY,
          C = t.onHover,
          E = t.onHoverEnd,
          A = t.onMove,
          S = t.ignoreCheck,
          P = t.isNormalizer,
          I = t.onGestureStart,
          L = t.onGestureEnd,
          R = t.onWheel,
          z = t.onEnable,
          F = t.onDisable,
          Y = t.onClick,
          B = t.scrollSpeed,
          q = t.capture,
          X = t.allowClicks,
          N = t.lockAxis,
          j = t.onLockAxis;
        (this.target =
          ((e = s),
          (s =
            Kn.utils.toArray(e)[0] ||
            ("string" == typeof e && !1 !== Kn.config().nullTargetWarn
              ? console.warn("Element not found:", e)
              : null) ||
            ni))),
          (this.vars = t),
          c && (c = Kn.utils.toArray(c)),
          (r = r || 0),
          (n = n || 0),
          (f = f || 1),
          (B = B || 1),
          (i = i || "wheel,touch,pointer"),
          (a = !1 !== a),
          o || (o = parseFloat(ei.getComputedStyle(ii).lineHeight) || 22);
        var U,
          V,
          W,
          G,
          H,
          Q,
          $,
          Z = this,
          J = 0,
          K = 0,
          tt = ki(s, Mi),
          et = ki(s, Di),
          rt = tt(),
          nt = et(),
          it =
            ~i.indexOf("touch") &&
            !~i.indexOf("pointer") &&
            "pointerdown" === li[0],
          st = vi(s),
          ot = s.ownerDocument || ri,
          at = [0, 0, 0],
          ut = [0, 0, 0],
          ht = 0,
          lt = function () {
            return (ht = mi());
          },
          ct = function (t, e) {
            return (
              ((Z.event = t) && c && ~c.indexOf(t.target)) ||
              (e && it && "touch" !== t.pointerType) ||
              (S && S(t, e))
            );
          },
          ft = function () {
            var t = (Z.deltaX = Ai(at)),
              e = (Z.deltaY = Ai(ut)),
              n = Math.abs(t) >= r,
              i = Math.abs(e) >= r;
            M && (n || i) && M(Z, t, e, at, ut),
              n &&
                (y && Z.deltaX > 0 && y(Z),
                b && Z.deltaX < 0 && b(Z),
                T && T(Z),
                D && Z.deltaX < 0 != J < 0 && D(Z),
                (J = Z.deltaX),
                (at[0] = at[1] = at[2] = 0)),
              i &&
                (w && Z.deltaY > 0 && w(Z),
                x && Z.deltaY < 0 && x(Z),
                O && O(Z),
                k && Z.deltaY < 0 != K < 0 && k(Z),
                (K = Z.deltaY),
                (ut[0] = ut[1] = ut[2] = 0)),
              (G || W) &&
                (A && A(Z),
                j && Q && j(Z),
                W && (m(Z), (W = !1)),
                (G = Q = !1)),
              H && (R(Z), (H = !1)),
              (U = 0);
          },
          dt = function (t, e, r) {
            (at[r] += t),
              (ut[r] += e),
              Z._vx.update(t),
              Z._vy.update(e),
              a ? U || (U = requestAnimationFrame(ft)) : ft();
          },
          pt = function (t, e) {
            "y" !== $ && ((at[2] += t), Z._vx.update(t, !0)),
              "x" !== $ && ((ut[2] += e), Z._vy.update(e, !0)),
              N &&
                !$ &&
                ((Z.axis = $ = Math.abs(t) > Math.abs(e) ? "x" : "y"),
                (Q = !0)),
              a ? U || (U = requestAnimationFrame(ft)) : ft();
          },
          _t = function (t) {
            if (!ct(t, 1)) {
              var e = (t = Ei(t, u)).clientX,
                r = t.clientY,
                i = e - Z.x,
                s = r - Z.y,
                o = Z.isDragging;
              (Z.x = e),
                (Z.y = r),
                (o ||
                  Math.abs(Z.startX - e) >= n ||
                  Math.abs(Z.startY - r) >= n) &&
                  (m && (W = !0),
                  o || (Z.isDragging = !0),
                  pt(i, s),
                  o || (p && p(Z)));
            }
          },
          mt = (Z.onPress = function (t) {
            ct(t, 1) ||
              ((Z.axis = $ = null),
              V.pause(),
              (Z.isPressed = !0),
              (t = Ei(t)),
              (J = K = 0),
              (Z.startX = Z.x = t.clientX),
              (Z.startY = Z.y = t.clientY),
              Z._vx.reset(),
              Z._vy.reset(),
              yi(P ? s : ot, li[1], _t, u, !0),
              (Z.deltaX = Z.deltaY = 0),
              g && g(Z));
          }),
          gt = function (t) {
            if (!ct(t, 1)) {
              bi(P ? s : ot, li[1], _t, !0);
              var e =
                  Z.isDragging &&
                  (Math.abs(Z.x - Z.startX) > 3 ||
                    Math.abs(Z.y - Z.startY) > 3),
                r = Ei(t);
              e ||
                (Z._vx.reset(),
                Z._vy.reset(),
                u &&
                  X &&
                  Kn.delayedCall(0.08, function () {
                    if (mi() - ht > 300 && !t.defaultPrevented)
                      if (t.target.click) t.target.click();
                      else if (ot.createEvent) {
                        var e = ot.createEvent("MouseEvents");
                        e.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          ei,
                          1,
                          r.screenX,
                          r.screenY,
                          r.clientX,
                          r.clientY,
                          !1,
                          !1,
                          !1,
                          !1,
                          0,
                          null
                        ),
                          t.target.dispatchEvent(e);
                      }
                  })),
                (Z.isDragging = Z.isGesturing = Z.isPressed = !1),
                h && !P && V.restart(!0),
                _ && e && _(Z),
                v && v(Z, e);
            }
          },
          vt = function (t) {
            return (
              t.touches &&
              t.touches.length > 1 &&
              (Z.isGesturing = !0) &&
              I(t, Z.isDragging)
            );
          },
          yt = function () {
            return (Z.isGesturing = !1), L(Z);
          },
          bt = function (t) {
            if (!ct(t)) {
              var e = tt(),
                r = et();
              dt((e - rt) * B, (r - nt) * B, 1),
                (rt = e),
                (nt = r),
                h && V.restart(!0);
            }
          },
          xt = function (t) {
            if (!ct(t)) {
              (t = Ei(t, u)), R && (H = !0);
              var e =
                (1 === t.deltaMode
                  ? o
                  : 2 === t.deltaMode
                  ? ei.innerHeight
                  : 1) * f;
              dt(t.deltaX * e, t.deltaY * e, 0), h && !P && V.restart(!0);
            }
          },
          wt = function (t) {
            if (!ct(t)) {
              var e = t.clientX,
                r = t.clientY,
                n = e - Z.x,
                i = r - Z.y;
              (Z.x = e), (Z.y = r), (G = !0), (n || i) && pt(n, i);
            }
          },
          Tt = function (t) {
            (Z.event = t), C(Z);
          },
          Ot = function (t) {
            (Z.event = t), E(Z);
          },
          Mt = function (t) {
            return ct(t) || (Ei(t, u) && Y(Z));
          };
        (V = Z._dc =
          Kn.delayedCall(l || 0.25, function () {
            Z._vx.reset(), Z._vy.reset(), V.pause(), h && h(Z);
          }).pause()),
          (Z.deltaX = Z.deltaY = 0),
          (Z._vx = Ci(0, 50, !0)),
          (Z._vy = Ci(0, 50, !0)),
          (Z.scrollX = tt),
          (Z.scrollY = et),
          (Z.isDragging = Z.isGesturing = Z.isPressed = !1),
          (Z.enable = function (t) {
            return (
              Z.isEnabled ||
                (yi(st ? ot : s, "scroll", Ti),
                i.indexOf("scroll") >= 0 && yi(st ? ot : s, "scroll", bt, u, q),
                i.indexOf("wheel") >= 0 && yi(s, "wheel", xt, u, q),
                ((i.indexOf("touch") >= 0 && si) ||
                  i.indexOf("pointer") >= 0) &&
                  (yi(s, li[0], mt, u, q),
                  yi(ot, li[2], gt),
                  yi(ot, li[3], gt),
                  X && yi(s, "click", lt, !1, !0),
                  Y && yi(s, "click", Mt),
                  I && yi(ot, "gesturestart", vt),
                  L && yi(ot, "gestureend", yt),
                  C && yi(s, oi + "enter", Tt),
                  E && yi(s, oi + "leave", Ot),
                  A && yi(s, oi + "move", wt)),
                (Z.isEnabled = !0),
                t && t.type && mt(t),
                z && z(Z)),
              Z
            );
          }),
          (Z.disable = function () {
            Z.isEnabled &&
              (di.filter(function (t) {
                return t !== Z && vi(t.target);
              }).length || bi(st ? ot : s, "scroll", Ti),
              Z.isPressed &&
                (Z._vx.reset(), Z._vy.reset(), bi(P ? s : ot, li[1], _t, !0)),
              bi(st ? ot : s, "scroll", bt, q),
              bi(s, "wheel", xt, q),
              bi(s, li[0], mt, q),
              bi(ot, li[2], gt),
              bi(ot, li[3], gt),
              bi(s, "click", lt, !0),
              bi(s, "click", Mt),
              bi(ot, "gesturestart", vt),
              bi(ot, "gestureend", yt),
              bi(s, oi + "enter", Tt),
              bi(s, oi + "leave", Ot),
              bi(s, oi + "move", wt),
              (Z.isEnabled = Z.isPressed = Z.isDragging = !1),
              F && F(Z));
          }),
          (Z.kill = function () {
            Z.disable();
            var t = di.indexOf(Z);
            t >= 0 && di.splice(t, 1), hi === Z && (hi = 0);
          }),
          di.push(Z),
          P && vi(s) && (hi = Z),
          Z.enable(d);
      }),
      (e = t),
      (r = [
        {
          key: "velocityX",
          get: function () {
            return this._vx.getVelocity();
          },
        },
        {
          key: "velocityY",
          get: function () {
            return this._vy.getVelocity();
          },
        },
      ]) && Jn(e.prototype, r),
      n && Jn(e, n),
      t
    );
  })();
  (Ii.version = "3.10.4"),
    (Ii.create = function (t) {
      return new Ii(t);
    }),
    (Ii.register = Pi),
    (Ii.getAll = function () {
      return di.slice();
    }),
    (Ii.getById = function (t) {
      return di.filter(function (e) {
        return e.vars.id === t;
      })[0];
    }),
    ci() && Kn.registerPlugin(Ii),
    Nn.registerPlugin(Ii),
    t(jn)();
  const Li = {
    slides: [...document.querySelectorAll(".slide")],
    cursor: document.querySelector(".cursor"),
    backCtrl: document.querySelector(".frame__back"),
    navigationItems: document.querySelectorAll(
      ".frame__nav > .frame__nav-button"
    ),
  };
  (Li.cursorChars = Li.cursor.querySelectorAll(".word > .char, .whitespace")),
    (Li.backChars = Li.backCtrl.querySelectorAll(".word > .char, .whitespace"));
  const Ri = Li.slides.length;
  let zi = [];
  Li.slides.forEach((t) => {
    zi.push(new Zn(t));
  });
  let Fi = -1,
    Yi = !1;
  const Bi = (t) => {
      (Yi = !0),
        Li.navigationItems[Fi].classList.remove("frame__nav-button--current"),
        Li.navigationItems[t].classList.add("frame__nav-button--current");
      const e =
          Fi < t
            ? 0 === Fi && t === Ri - 1
              ? "prev"
              : "next"
            : Fi === Ri - 1 && 0 === t
            ? "next"
            : "prev",
        r = zi[Fi];
      Fi = t;
      const n = zi[Fi];
      Nn.timeline({
        defaults: { duration: 1.6, ease: "power3.inOut" },
        onComplete: () => {
          r.DOM.el.classList.remove("slide--current"),
            r.isOpen && Ni(r),
            (Yi = !1);
        },
      })
        .addLabel("start", 0)
        .set(
          [r.DOM.imgInner, n.DOM.imgInner],
          { transformOrigin: "next" === e ? "50% 0%" : "50% 100%" },
          "start"
        )
        .set(n.DOM.el, { yPercent: "next" === e ? 100 : -100 }, "start")
        .set(n.DOM.inner, { yPercent: "next" === e ? -100 : 100 }, "start")
        .add(() => {
          n.DOM.el.classList.add("slide--current");
        }, "start")
        .add(() => {
          r.isOpen && qi();
        }, "start")
        .to(r.DOM.el, { yPercent: "next" === e ? -100 : 100 }, "start")
        .to(r.DOM.imgInner, { scaleY: 2 }, "start")
        .to([n.DOM.el, n.DOM.inner], { yPercent: 0 }, "start")
        .to(
          n.DOM.imgInner,
          { ease: "power2.inOut", startAt: { scaleY: 2 }, scaleY: 1 },
          "start"
        );
    },
    qi = (t) =>
      Nn.timeline({
        onStart: () => {
          Nn.set(Li.backChars, { opacity: t ? 0 : 1 }),
            t && Li.backCtrl.classList.add("frame__back--show");
        },
        onComplete: () => {
          Li.backCtrl.classList[t ? "add" : "remove"]("frame__back--show"),
            t || Li.backCtrl.classList.remove("frame__back--show");
        },
      })
        .to(Li.cursorChars, {
          duration: 0.1,
          ease: "expo",
          opacity: t ? 0 : 1,
          stagger: { amount: 0.5, grid: "auto", from: "random" },
        })
        .to(
          Li.backChars,
          {
            duration: 0.1,
            ease: "expo",
            opacity: t ? 1 : 0,
            stagger: { amount: 0.5, grid: "auto", from: "random" },
          },
          0
        ),
    Xi = (t) => {
      if (Yi) return;
      Yi = !0;
      const e = zi[t];
      (e.isOpen = !0),
        Nn.timeline({
          defaults: { duration: 1.6, ease: "power3.inOut" },
          onStart: () => {},
          onComplete: () => {
            Yi = !1;
          },
        })
          .addLabel("start", 0)
          .add(() => {
            qi("content");
          }, "start")
          .to(e.DOM.img, { yPercent: -100 }, "start")
          .set(e.DOM.imgInner, { transformOrigin: "50% 100%" }, "start")
          .to(e.DOM.imgInner, { yPercent: 100, scaleY: 2 }, "start")
          .to(
            e.DOM.contentImg,
            { startAt: { transformOrigin: "50% 0%", scaleY: 1.5 }, scaleY: 1 },
            "start"
          );
    },
    Ni = (t, e = !1) => {
      Yi = !0;
      const r = () => {
        (t.isOpen = !1), (Yi = !1);
      };
      e
        ? Nn.timeline({
            defaults: { duration: 1.6, ease: "power3.inOut" },
            onComplete: r,
          })
            .addLabel("start", 0)
            .to(t.DOM.img, { yPercent: 0 }, "start")
            .to(t.DOM.imgInner, { yPercent: 0, scaleY: 1 }, "start")
        : (Nn.set(t.DOM.img, { yPercent: 0 }),
          Nn.set(t.DOM.imgInner, { yPercent: 0, scaleY: 1 }),
          r());
    };
  var ji;
  (ji = 0),
    -1 !== Fi && zi[Fi].DOM.el.classList.remove("slide--current"),
    (Fi = ji),
    zi[Fi].DOM.el.classList.add("slide--current"),
    Li.navigationItems[Fi].classList.add("frame__nav-button--current"),
    new (class {
      render() {
        (this.renderedStyles.tx.current = $n.x + 20),
          (this.renderedStyles.ty.current = $n.y - this.bounds.height / 2);
        for (const t in this.renderedStyles)
          this.renderedStyles[t].previous = Gn(
            this.renderedStyles[t].previous,
            this.renderedStyles[t].current,
            this.renderedStyles[t].amt
          );
        (this.DOM.el.style.transform = `translateX(${this.renderedStyles.tx.previous}px) translateY(${this.renderedStyles.ty.previous}px)`),
          requestAnimationFrame(() => this.render());
      }
      constructor(t) {
        Qn(this, "DOM", { el: null, text: null }),
          Qn(this, "renderedStyles", {
            tx: { previous: 0, current: 0, amt: 0.15 },
            ty: { previous: 0, current: 0, amt: 0.15 },
          }),
          Qn(this, "bounds", void 0),
          (this.DOM.el = t),
          (this.DOM.text = this.DOM.el.querySelector(".cursor__text")),
          (this.DOM.el.style.opacity = 0),
          (this.bounds = this.DOM.el.getBoundingClientRect());
        for (const t in this.renderedStyles)
          this.renderedStyles[t].amt =
            this.DOM.el.dataset.amt || this.renderedStyles[t].amt;
        const e = () => {
          (this.renderedStyles.tx.previous = this.renderedStyles.tx.current =
            $n.x + 20),
            (this.renderedStyles.ty.previous = this.renderedStyles.ty.previous =
              $n.y - this.bounds.height / 2),
            (this.DOM.el.style.opacity = 1),
            requestAnimationFrame(() => this.render()),
            window.removeEventListener("mousemove", e);
        };
        window.addEventListener("mousemove", e);
      }
    })(Li.cursor),
    (() => {
      [...Li.navigationItems].forEach((t, e) => {
        t.addEventListener("click", () => {
          Fi === e || Yi || Bi(e);
        });
      }),
        Li.backCtrl.addEventListener("click", () => {
          Yi || ((Yi = !0), qi(), Ni(zi[Fi], !0));
        }),
        Ii.create({
          type: "wheel,touch,pointer",
          onDown: () => !Yi && void Bi(Fi > 0 ? Fi - 1 : Ri - 1),
          onUp: () => !Yi && void Bi(Fi < Ri - 1 ? Fi + 1 : 0),
          wheelSpeed: -1,
          tolerance: 10,
        });
      for (const [t, e] of zi.entries())
        e.DOM.img.addEventListener("click", () => {
          Xi(t);
        });
    })(),
    ((t = "img") =>
      new Promise((e) => {
        Wn(document.querySelectorAll(t), { background: !0 }, e);
      }))(".slide__img-inner").then((t) => {
      document.body.classList.remove("loading");
    });
})();
