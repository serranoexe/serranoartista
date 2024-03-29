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
  i.register("4hJWI", function (t, e) {
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
  x,
  b,
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
  F = 2 * Math.PI,
  Y = F / 4,
  B = 0,
  q = Math.sqrt,
  X = Math.cos,
  N = Math.sin,
  j = function (t) {
    return "string" == typeof t;
  },
  U = function (t) {
    return "function" == typeof t;
  },
  V = function (t) {
    return "number" == typeof t;
  },
  W = function (t) {
    return void 0 === t;
  },
  G = function (t) {
    return "object" == typeof t;
  },
  H = function (t) {
    return !1 !== t;
  },
  Q = function () {
    return "undefined" != typeof window;
  },
  $ = function (t) {
    return U(t) || j(t);
  },
  J =
    ("function" == typeof ArrayBuffer && ArrayBuffer.isView) || function () {},
  Z = Array.isArray,
  K = /(?:-?\.?\d|\.)+/gi,
  tt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  et = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  rt = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  nt = /[+-]=-?[.\d]+/,
  it = /[^,'"\[\]\s]+/gi,
  st = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  ot = {},
  at = {},
  ut = function (t) {
    return (at = Lt(t, ot)) && wr;
  },
  ht = function (t, e) {
    return console.warn(
      "Invalid property",
      t,
      "set to",
      e,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  lt = function (t, e) {
    return !e && console.warn(t);
  },
  ct = function (t, e) {
    return (t && (ot[t] = e) && at && (at[t] = e)) || ot;
  },
  ft = function () {
    return 0;
  },
  dt = {},
  pt = [],
  _t = {},
  mt = {},
  gt = {},
  vt = 30,
  yt = [],
  xt = "",
  bt = function (t) {
    var e,
      r,
      n = t[0];
    if ((G(n) || U(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
      for (r = yt.length; r-- && !yt[r].targetTest(n); );
      e = yt[r];
    }
    for (r = t.length; r--; )
      (t[r] && (t[r]._gsap || (t[r]._gsap = new Ve(t[r], e)))) ||
        t.splice(r, 1);
    return t;
  },
  wt = function (t) {
    return t._gsap || bt(ce(t))[0]._gsap;
  },
  Tt = function (t, e, r) {
    return (r = t[e]) && U(r)
      ? t[e]()
      : (W(r) && t.getAttribute && t.getAttribute(e)) || r;
  },
  Ot = function (t, e) {
    return (t = t.split(",")).forEach(e) || t;
  },
  Mt = function (t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  },
  Dt = function (t) {
    return Math.round(1e7 * t) / 1e7 || 0;
  },
  kt = function (t, e) {
    var r = e.charAt(0),
      n = parseFloat(e.substr(2));
    return (
      (t = parseFloat(t)),
      "+" === r ? t + n : "-" === r ? t - n : "*" === r ? t * n : t / n
    );
  },
  Ct = function (t, e) {
    for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r; );
    return n < r;
  },
  Et = function () {
    var t,
      e,
      r = pt.length,
      n = pt.slice(0);
    for (_t = {}, pt.length = 0, t = 0; t < r; t++)
      (e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
  },
  At = function (t, e, r, n) {
    pt.length && Et(), t.render(e, r, n), pt.length && Et();
  },
  St = function (t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(it).length < 2
      ? e
      : j(t)
      ? t.trim()
      : t;
  },
  Pt = function (t) {
    return t;
  },
  It = function (t, e) {
    for (var r in e) r in t || (t[r] = e[r]);
    return t;
  },
  Lt = function (t, e) {
    for (var r in e) t[r] = e[r];
    return t;
  },
  Rt = function t(e, r) {
    for (var n in r)
      "__proto__" !== n &&
        "constructor" !== n &&
        "prototype" !== n &&
        (e[n] = G(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]);
    return e;
  },
  zt = function (t, e) {
    var r,
      n = {};
    for (r in t) r in e || (n[r] = t[r]);
    return n;
  },
  Ft = function (t) {
    var e,
      r = t.parent || u,
      n = t.keyframes
        ? ((e = Z(t.keyframes)),
          function (t, r) {
            for (var n in r)
              n in t ||
                ("duration" === n && e) ||
                "ease" === n ||
                (t[n] = r[n]);
          })
        : It;
    if (H(t.inherit))
      for (; r; ) n(t, r.vars.defaults), (r = r.parent || r._dp);
    return t;
  },
  Yt = function (t, e, r, n, i) {
    void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
    var s,
      o = t[n];
    if (i) for (s = e[i]; o && o[i] > s; ) o = o._prev;
    return (
      o ? ((e._next = o._next), (o._next = e)) : ((e._next = t[r]), (t[r] = e)),
      e._next ? (e._next._prev = e) : (t[n] = e),
      (e._prev = o),
      (e.parent = e._dp = t),
      e
    );
  },
  Bt = function (t, e, r, n) {
    void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
    var i = e._prev,
      s = e._next;
    i ? (i._next = s) : t[r] === e && (t[r] = s),
      s ? (s._prev = i) : t[n] === e && (t[n] = i),
      (e._next = e._prev = e.parent = null);
  },
  qt = function (t, e) {
    t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
      (t._act = 0);
  },
  Xt = function (t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0))
      for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
    return t;
  },
  Nt = function (t) {
    for (var e = t.parent; e && e.parent; )
      (e._dirty = 1), e.totalDuration(), (e = e.parent);
    return t;
  },
  jt = function t(e) {
    return !e || (e._ts && t(e.parent));
  },
  Ut = function (t) {
    return t._repeat ? Vt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  },
  Vt = function (t, e) {
    var r = Math.floor((t /= e));
    return t && r === t ? r - 1 : r;
  },
  Wt = function (t, e) {
    return (
      (t - e._start) * e._ts +
      (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    );
  },
  Gt = function (t) {
    return (t._end = Dt(
      t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0)
    ));
  },
  Ht = function (t, e) {
    var r = t._dp;
    return (
      r &&
        r.smoothChildTiming &&
        t._ts &&
        ((t._start = Dt(
          r._time -
            (t._ts > 0
              ? e / t._ts
              : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
        )),
        Gt(t),
        r._dirty || Xt(r, t)),
      t
    );
  },
  Qt = function (t, e) {
    var r;
    if (
      ((e._time || (e._initted && !e._dur)) &&
        ((r = Wt(t.rawTime(), e)),
        (!e._dur || ae(0, e.totalDuration(), r) - e._tTime > 1e-8) &&
          e.render(r, !0)),
      Xt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
    ) {
      if (t._dur < t.duration())
        for (r = t; r._dp; )
          r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
      t._zTime = -1e-8;
    }
  },
  $t = function (t, e, r, n) {
    return (
      e.parent && qt(e),
      (e._start = Dt(
        (V(r) ? r : r || t !== u ? ie(t, r, e) : t._time) + e._delay
      )),
      (e._end = Dt(
        e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
      )),
      Yt(t, e, "_first", "_last", t._sort ? "_start" : 0),
      te(e) || (t._recent = e),
      n || Qt(t, e),
      t
    );
  },
  Jt = function (t, e) {
    return (
      (ot.ScrollTrigger || ht("scrollTrigger", e)) &&
      ot.ScrollTrigger.create(e, t)
    );
  },
  Zt = function (t, e, r, n) {
    return (
      Ke(t, e),
      t._initted
        ? !r &&
          t._pt &&
          ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
          d !== Pe.frame
          ? (pt.push(t), (t._lazy = [e, n]), 1)
          : void 0
        : 1
    );
  },
  Kt = function t(e) {
    var r = e.parent;
    return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r));
  },
  te = function (t) {
    var e = t.data;
    return "isFromStart" === e || "isStart" === e;
  },
  ee = function (t, e, r, n) {
    var i = t._repeat,
      s = Dt(e) || 0,
      o = t._tTime / t._tDur;
    return (
      o && !n && (t._time *= s / t._dur),
      (t._dur = s),
      (t._tDur = i ? (i < 0 ? 1e10 : Dt(s * (i + 1) + t._rDelay * i)) : s),
      o > 0 && !n ? Ht(t, (t._tTime = t._tDur * o)) : t.parent && Gt(t),
      r || Xt(t.parent, t),
      t
    );
  },
  re = function (t) {
    return t instanceof Ge ? Xt(t) : ee(t, t._dur);
  },
  ne = { _start: 0, endTime: ft, totalDuration: ft },
  ie = function t(e, r, n) {
    var i,
      s,
      o,
      a = e.labels,
      u = e._recent || ne,
      h = e.duration() >= 1e8 ? u.endTime(!1) : e._dur;
    return j(r) && (isNaN(r) || r in a)
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
            o && n && (s = (s / 100) * (Z(n) ? n[0] : n).totalDuration()),
            i > 1 ? t(e, r.substr(0, i - 1), n) + s : h + s))
      : null == r
      ? h
      : +r;
  },
  se = function (t, e, r) {
    var n,
      i,
      s = V(e[1]),
      o = (s ? 2 : 1) + (t < 2 ? 0 : 1),
      a = e[o];
    if ((s && (a.duration = e[1]), (a.parent = r), t)) {
      for (n = a, i = r; i && !("immediateRender" in n); )
        (n = i.vars.defaults || {}), (i = H(i.vars.inherit) && i.parent);
      (a.immediateRender = H(n.immediateRender)),
        t < 2 ? (a.runBackwards = 1) : (a.startAt = e[o - 1]);
    }
    return new ir(e[0], a, e[o + 1]);
  },
  oe = function (t, e) {
    return t || 0 === t ? e(t) : e;
  },
  ae = function (t, e, r) {
    return r < t ? t : r > e ? e : r;
  },
  ue = function (t, e) {
    return j(t) && (e = st.exec(t)) ? e[1] : "";
  },
  he = [].slice,
  le = function (t, e) {
    return (
      t &&
      G(t) &&
      "length" in t &&
      ((!e && !t.length) || (t.length - 1 in t && G(t[0]))) &&
      !t.nodeType &&
      t !== h
    );
  },
  ce = function (t, e, r) {
    return !j(t) || r || (!l && Ie())
      ? Z(t)
        ? (function (t, e, r) {
            return (
              void 0 === r && (r = []),
              t.forEach(function (t) {
                var n;
                return (j(t) && !e) || le(t, 1)
                  ? (n = r).push.apply(n, ce(t))
                  : r.push(t);
              }) || r
            );
          })(t, r)
        : le(t)
        ? he.call(t, 0)
        : t
        ? [t]
        : []
      : he.call((e || c).querySelectorAll(t), 0);
  },
  fe = function (t) {
    return t.sort(function () {
      return 0.5 - Math.random();
    });
  },
  de = function (t) {
    if (U(t)) return t;
    var e = G(t) ? t : { each: t },
      r = qe(e.ease),
      n = e.from || 0,
      i = parseFloat(e.base) || 0,
      s = {},
      o = n > 0 && n < 1,
      a = isNaN(n) || o,
      u = e.axis,
      h = n,
      l = n;
    return (
      j(n)
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
          x,
          b = (c || e).length,
          w = s[b];
        if (!w) {
          if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) {
            for (
              v = -1e8;
              v < (v = c[x++].getBoundingClientRect().left) && x < b;

            );
            x--;
          }
          for (
            w = s[b] = [],
              f = a ? Math.min(x, b) * h - 0.5 : n % x,
              d = 1e8 === x ? 0 : a ? (b * l) / x - 0.5 : (n / x) | 0,
              v = 0,
              y = 1e8,
              g = 0;
            g < b;
            g++
          )
            (p = (g % x) - f),
              (_ = d - ((g / x) | 0)),
              (w[g] = m = u ? Math.abs("y" === u ? _ : p) : q(p * p + _ * _)),
              m > v && (v = m),
              m < y && (y = m);
          "random" === n && fe(w),
            (w.max = v - y),
            (w.min = y),
            (w.v = b =
              (parseFloat(e.amount) ||
                parseFloat(e.each) *
                  (x > b
                    ? b - 1
                    : u
                    ? "y" === u
                      ? b / x
                      : x
                    : Math.max(x, b / x)) ||
                0) * ("edges" === n ? -1 : 1)),
            (w.b = b < 0 ? i - b : i),
            (w.u = ue(e.amount || e.each) || 0),
            (r = r && b < 0 ? Ye(r) : r);
        }
        return (
          (b = (w[t] - w.min) / w.max || 0),
          Dt(w.b + (r ? r(b) : b) * w.v) + w.u
        );
      }
    );
  },
  pe = function (t) {
    var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
    return function (r) {
      var n = Math.round(parseFloat(r) / t) * t * e;
      return (n - (n % 1)) / e + (V(r) ? 0 : ue(r));
    };
  },
  _e = function (t, e) {
    var r,
      n,
      i = Z(t);
    return (
      !i &&
        G(t) &&
        ((r = i = t.radius || 1e8),
        t.values
          ? ((t = ce(t.values)), (n = !V(t[0])) && (r *= r))
          : (t = pe(t.increment))),
      oe(
        e,
        i
          ? U(t)
            ? function (e) {
                return (n = t(e)), Math.abs(n - e) <= r ? n : e;
              }
            : function (e) {
                for (
                  var i,
                    s,
                    o = parseFloat(n ? e.x : e),
                    a = parseFloat(n ? e.y : 0),
                    u = 1e8,
                    h = 0,
                    l = t.length;
                  l--;

                )
                  (i = n
                    ? (i = t[l].x - o) * i + (s = t[l].y - a) * s
                    : Math.abs(t[l] - o)) < u && ((u = i), (h = l));
                return (
                  (h = !r || u <= r ? t[h] : e),
                  n || h === e || V(e) ? h : h + ue(e)
                );
              }
          : pe(t)
      )
    );
  },
  me = function (t, e, r, n) {
    return oe(Z(t) ? !e : !0 === r ? ((r = 0), !1) : !n, function () {
      return Z(t)
        ? t[~~(Math.random() * t.length)]
        : (n = (r = r || 1e-5) < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
            Math.floor(
              Math.round((t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r) *
                r *
                n
            ) / n;
    });
  },
  ge = function (t, e, r) {
    return oe(r, function (r) {
      return t[~~e(r)];
    });
  },
  ve = function (t) {
    for (var e, r, n, i, s = 0, o = ""; ~(e = t.indexOf("random(", s)); )
      (n = t.indexOf(")", e)),
        (i = "[" === t.charAt(e + 7)),
        (r = t.substr(e + 7, n - e - 7).match(i ? it : K)),
        (o +=
          t.substr(s, e - s) + me(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5)),
        (s = n + 1);
    return o + t.substr(s, t.length - s);
  },
  ye = function (t, e, r, n, i) {
    var s = e - t,
      o = n - r;
    return oe(i, function (e) {
      return r + (((e - t) / s) * o || 0);
    });
  },
  xe = function (t, e, r) {
    var n,
      i,
      s,
      o = t.labels,
      a = 1e8;
    for (n in o)
      (i = o[n] - e) < 0 == !!r &&
        i &&
        a > (i = Math.abs(i)) &&
        ((s = n), (a = i));
    return s;
  },
  be = function (t, e, r) {
    var n,
      i,
      s = t.vars,
      o = s[e];
    if (o)
      return (
        (n = s[e + "Params"]),
        (i = s.callbackScope || t),
        r && pt.length && Et(),
        n ? o.apply(i, n) : o.call(i)
      );
  },
  we = function (t) {
    return (
      qt(t),
      t.scrollTrigger && t.scrollTrigger.kill(!1),
      t.progress() < 1 && be(t, "onInterrupt"),
      t
    );
  },
  Te = function (t) {
    var e = (t = (!t.name && t.default) || t).name,
      r = U(t),
      n =
        e && !r && t.init
          ? function () {
              this._props = [];
            }
          : t,
      i = { init: ft, render: dr, add: Je, kill: _r, modifier: pr, rawVars: 0 },
      s = { targetTest: 0, get: 0, getSetter: hr, aliases: {}, register: 0 };
    if ((Ie(), t !== n)) {
      if (mt[e]) return;
      It(n, It(zt(t, i), s)),
        Lt(n.prototype, Lt(i, zt(t, s))),
        (mt[(n.prop = e)] = n),
        t.targetTest && (yt.push(n), (dt[e] = 1)),
        (e =
          ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
          "Plugin");
    }
    ct(e, n), t.register && t.register(wr, n, vr);
  },
  Oe = {
    aqua: [0, 255, 255],
    lime: [0, 255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, 255],
    navy: [0, 0, 128],
    white: [255, 255, 255],
    olive: [128, 128, 0],
    yellow: [255, 255, 0],
    orange: [255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [255, 0, 0],
    pink: [255, 192, 203],
    cyan: [0, 255, 255],
    transparent: [255, 255, 255, 0],
  },
  Me = function (t, e, r) {
    return (
      (255 *
        (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
          ? e + (r - e) * t * 6
          : t < 0.5
          ? r
          : 3 * t < 2
          ? e + (r - e) * (2 / 3 - t) * 6
          : e) +
        0.5) |
      0
    );
  },
  De = function (t, e, r) {
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
      d = t ? (V(t) ? [t >> 16, (t >> 8) & 255, 255 & t] : 0) : Oe.black;
    if (!d) {
      if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Oe[t]))
        d = Oe[t];
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
            (d >> 8) & 255,
            255 & d,
            parseInt(t.substr(7), 16) / 255,
          ];
        d = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & 255, 255 & t];
      } else if ("hsl" === t.substr(0, 3))
        if (((d = f = t.match(K)), e)) {
          if (~t.indexOf("="))
            return (d = t.match(tt)), r && d.length < 4 && (d[3] = 1), d;
        } else
          (o = (+d[0] % 360) / 360),
            (a = +d[1] / 100),
            (n =
              2 * (u = +d[2] / 100) -
              (i = u <= 0.5 ? u * (a + 1) : u + a - u * a)),
            d.length > 3 && (d[3] *= 1),
            (d[0] = Me(o + 1 / 3, n, i)),
            (d[1] = Me(o, n, i)),
            (d[2] = Me(o - 1 / 3, n, i));
      else d = t.match(K) || Oe.transparent;
      d = d.map(Number);
    }
    return (
      e &&
        !f &&
        ((n = d[0] / 255),
        (i = d[1] / 255),
        (s = d[2] / 255),
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
  ke = function (t) {
    var e = [],
      r = [],
      n = -1;
    return (
      t.split(Ee).forEach(function (t) {
        var i = t.match(et) || [];
        e.push.apply(e, i), r.push((n += i.length + 1));
      }),
      (e.c = r),
      e
    );
  },
  Ce = function (t, e, r) {
    var n,
      i,
      s,
      o,
      a = "",
      u = (t + a).match(Ee),
      h = e ? "hsla(" : "rgba(",
      l = 0;
    if (!u) return t;
    if (
      ((u = u.map(function (t) {
        return (
          (t = De(t, e, 1)) &&
          h +
            (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) +
            ")"
        );
      })),
      r && ((s = ke(t)), (n = r.c).join(a) !== s.c.join(a)))
    )
      for (o = (i = t.replace(Ee, "1").split(et)).length - 1; l < o; l++)
        a +=
          i[l] +
          (~n.indexOf(l)
            ? u.shift() || h + "0,0,0,0)"
            : (s.length ? s : u.length ? u : r).shift());
    if (!i) for (o = (i = t.split(Ee)).length - 1; l < o; l++) a += i[l] + u[l];
    return a + i[o];
  },
  Ee = (function () {
    var t,
      e =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
    for (t in Oe) e += "|" + t + "\\b";
    return new RegExp(e + ")", "gi");
  })(),
  Ae = /hsl[a]?\(/,
  Se = function (t) {
    var e,
      r = t.join(" ");
    if (((Ee.lastIndex = 0), Ee.test(r)))
      return (
        (e = Ae.test(r)),
        (t[1] = Ce(t[1], e)),
        (t[0] = Ce(t[0], e, ke(t[1]))),
        !0
      );
  },
  Pe =
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
          (x = i - 1e3 * y.time),
          (y.time = i /= 1e3),
          (C += r + (r >= k ? 4 : k - r)),
          (n = 1)),
        a || (m = g(t)),
        n)
      )
        for (b = 0; b < E.length; b++) E[b](i, x, s, e);
    }),
    (y = {
      time: 0,
      frame: 0,
      tick: function () {
        A(!0);
      },
      deltaRatio: function (t) {
        return x / (1e3 / (t || 60));
      },
      wake: function () {
        f &&
          (!l &&
            Q() &&
            ((h = l = window),
            (c = h.document || {}),
            (ot.gsap = wr),
            (h.gsapVersions || (h.gsapVersions = [])).push(wr.version),
            ut(at || h.GreenSockGlobals || (!h.gsap && h) || {}),
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
        (v ? h.cancelAnimationFrame : clearTimeout)(m), (_ = 0), (g = ft);
      },
      lagSmoothing: function (t, e) {
        (T = t || 1 / 1e-8), (O = Math.min(e, T, 0));
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
        return y.remove(t), E[r ? "unshift" : "push"](n), Ie(), n;
      },
      remove: function (t, e) {
        ~(e = E.indexOf(t)) && E.splice(e, 1) && b >= e && b--;
      },
      _listeners: (E = []),
    })),
  Ie = function () {
    return !_ && Pe.wake();
  },
  Le = {},
  Re = /^[\d.\-M][\d.\-,\s]/,
  ze = /["']/g,
  Fe = function (t) {
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
        (i[o] = isNaN(n) ? n.replace(ze, "").trim() : +n),
        (o = r.substr(e + 1).trim());
    return i;
  },
  Ye = function (t) {
    return function (e) {
      return 1 - t(1 - e);
    };
  },
  Be = function t(e, r) {
    for (var n, i = e._first; i; )
      i instanceof Ge
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
  qe = function (t, e) {
    return (
      (t &&
        (U(t)
          ? t
          : Le[t] ||
            (function (t) {
              var e,
                r,
                n,
                i,
                s = (t + "").split("("),
                o = Le[s[0]];
              return o && s.length > 1 && o.config
                ? o.config.apply(
                    null,
                    ~t.indexOf("{")
                      ? [Fe(s[1])]
                      : ((e = t),
                        (r = e.indexOf("(") + 1),
                        (n = e.indexOf(")")),
                        (i = e.indexOf("(", r)),
                        e.substring(r, ~i && i < n ? e.indexOf(")", n + 1) : n))
                          .split(",")
                          .map(St)
                  )
                : Le._CE && Re.test(t)
                ? Le._CE("", t)
                : o;
            })(t))) ||
      e
    );
  },
  Xe = function (t, e, r, n) {
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
      Ot(t, function (t) {
        for (var e in ((Le[t] = ot[t] = s), (Le[(i = t.toLowerCase())] = r), s))
          Le[
            i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
          ] = Le[t + "." + e] = s[e];
      }),
      s
    );
  },
  Ne = function (t) {
    return function (e) {
      return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
    };
  },
  je = function t(e, r, n) {
    var i = r >= 1 ? r : 1,
      s = (n || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
      o = (s / F) * (Math.asin(1 / i) || 0),
      a = function (t) {
        return 1 === t ? 1 : i * Math.pow(2, -10 * t) * N((t - o) * s) + 1;
      },
      u =
        "out" === e
          ? a
          : "in" === e
          ? function (t) {
              return 1 - a(1 - t);
            }
          : Ne(a);
    return (
      (s = F / s),
      (u.config = function (r, n) {
        return t(e, r, n);
      }),
      u
    );
  },
  Ue = function t(e, r) {
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
          : Ne(n);
    return (
      (i.config = function (r) {
        return t(e, r);
      }),
      i
    );
  };
Ot("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
  var r = e < 5 ? e + 1 : e;
  Xe(
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
  (Le.Linear.easeNone = Le.none = Le.Linear.easeIn),
  Xe("Elastic", je("in"), je("out"), je()),
  (S = 7.5625),
  (I = 1 / (P = 2.75)),
  Xe(
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
  Xe("Expo", function (t) {
    return t ? Math.pow(2, 10 * (t - 1)) : 0;
  }),
  Xe("Circ", function (t) {
    return -(q(1 - t * t) - 1);
  }),
  Xe("Sine", function (t) {
    return 1 === t ? 1 : 1 - X(t * Y);
  }),
  Xe("Back", Ue("in"), Ue("out"), Ue()),
  (Le.SteppedEase =
    Le.steps =
    ot.SteppedEase =
      {
        config: function (t, e) {
          void 0 === t && (t = 1);
          var r = 1 / t,
            n = t + (e ? 0 : 1),
            i = e ? 1 : 0;
          return function (t) {
            return (((n * ae(0, 0.99999999, t)) | 0) + i) * r;
          };
        },
      }),
  (z.ease = Le["quad.out"]),
  Ot(
    "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
    function (t) {
      return (xt += t + "," + t + "Params,");
    }
  );
var Ve = function (t, e) {
    (this.id = B++),
      (t._gsap = this),
      (this.target = t),
      (this.harness = e),
      (this.get = e ? e.get : Tt),
      (this.set = e ? e.getSetter : hr);
  },
  We = (function () {
    function t(t) {
      (this.vars = t),
        (this._delay = +t.delay || 0),
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
          ((this._rDelay = t.repeatDelay || 0),
          (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
        (this._ts = 1),
        ee(this, +t.duration, 1, 1),
        (this.data = t.data),
        _ || Pe.wake();
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
            ee(
              this,
              this._repeat < 0
                ? t
                : (t - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (e.totalTime = function (t, e) {
        if ((Ie(), !arguments.length)) return this._tTime;
        var r = this._dp;
        if (r && r.smoothChildTiming && this._ts) {
          for (Ht(this, t), !r._dp || r.parent || Qt(r, this); r && r.parent; )
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
            $t(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== t ||
            (!this._dur && !e) ||
            (this._initted && 1e-8 === Math.abs(this._zTime)) ||
            (!t && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = t), At(this, t, e)),
          this
        );
      }),
      (e.time = function (t, e) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), t + Ut(this)) %
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
                Ut(this),
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
          ? Vt(this._tTime, r) + 1
          : 1;
      }),
      (e.timeScale = function (t) {
        if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
        if (this._rts === t) return this;
        var e =
          this.parent && this._ts ? Wt(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +t || 0),
          (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
          this.totalTime(ae(-this._delay, this._tDur, e), !0),
          Gt(this),
          Nt(this)
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
                : (Ie(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    1 === this.progress() &&
                      1e-8 !== Math.abs(this._zTime) &&
                      (this._tTime -= 1e-8)
                  ))),
            this)
          : this._ps;
      }),
      (e.startTime = function (t) {
        if (arguments.length) {
          this._start = t;
          var e = this.parent || this._dp;
          return (
            e && (e._sort || !this.parent) && $t(e, this, t - this._delay), this
          );
        }
        return this._start;
      }),
      (e.endTime = function (t) {
        return (
          this._start +
          (H(t) ? this.totalDuration() : this.duration()) /
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
            ? Wt(e.rawTime(t), this)
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
          ? ((this._repeat = t === 1 / 0 ? -2 : t), re(this))
          : -2 === this._repeat
          ? 1 / 0
          : this._repeat;
      }),
      (e.repeatDelay = function (t) {
        if (arguments.length) {
          var e = this._time;
          return (this._rDelay = t), re(this), e ? this.time(e) : this;
        }
        return this._rDelay;
      }),
      (e.yoyo = function (t) {
        return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
      }),
      (e.seek = function (t, e) {
        return this.totalTime(ie(this, t), H(e));
      }),
      (e.restart = function (t, e) {
        return this.play().totalTime(t ? -this._delay : 0, H(e));
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
            t < this.endTime(!0) - 1e-8
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
          var n = U(t) ? t : Pt,
            i = function () {
              var t = e.then;
              (e.then = null),
                U(n) && (n = n(e)) && (n.then || n === e) && (e.then = t),
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
        we(this);
      }),
      t
    );
  })();
It(We.prototype, {
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
var Ge = (function (t) {
  function e(e, r) {
    var n;
    return (
      void 0 === e && (e = {}),
      ((n = t.call(this, e) || this).labels = {}),
      (n.smoothChildTiming = !!e.smoothChildTiming),
      (n.autoRemoveChildren = !!e.autoRemoveChildren),
      (n._sort = H(e.sortChildren)),
      u && $t(e.parent || u, s(n), r),
      e.reversed && n.reverse(),
      e.paused && n.paused(!0),
      e.scrollTrigger && Jt(s(n), e.scrollTrigger),
      n
    );
  }
  o(e, t);
  var r = e.prototype;
  return (
    (r.to = function (t, e, r) {
      return se(0, arguments, this), this;
    }),
    (r.from = function (t, e, r) {
      return se(1, arguments, this), this;
    }),
    (r.fromTo = function (t, e, r, n) {
      return se(2, arguments, this), this;
    }),
    (r.set = function (t, e, r) {
      return (
        (e.duration = 0),
        (e.parent = this),
        Ft(e).repeatDelay || (e.repeat = 0),
        (e.immediateRender = !!e.immediateRender),
        new ir(t, e, ie(this, r), 1),
        this
      );
    }),
    (r.call = function (t, e, r) {
      return $t(this, ir.delayedCall(0, t, e), r);
    }),
    (r.staggerTo = function (t, e, r, n, i, s, o) {
      return (
        (r.duration = e),
        (r.stagger = r.stagger || n),
        (r.onComplete = s),
        (r.onCompleteParams = o),
        (r.parent = this),
        new ir(t, r, ie(this, i)),
        this
      );
    }),
    (r.staggerFrom = function (t, e, r, n, i, s, o) {
      return (
        (r.runBackwards = 1),
        (Ft(r).immediateRender = H(r.immediateRender)),
        this.staggerTo(t, e, r, n, i, s, o)
      );
    }),
    (r.staggerFromTo = function (t, e, r, n, i, s, o, a) {
      return (
        (n.startAt = r),
        (Ft(n).immediateRender = H(n.immediateRender)),
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
        y = t <= 0 ? 0 : Dt(t),
        x = this._zTime < 0 != t < 0 && (this._initted || !v);
      if (
        (this !== u && y > g && t >= 0 && (y = g), y !== this._tTime || r || x)
      ) {
        if (
          (m !== this._time &&
            v &&
            ((y += this._time - m), (t += this._time - m)),
          (n = y),
          (f = this._start),
          (h = !(c = this._ts)),
          x && (v || (m = this._zTime), (t || !e) && (this._zTime = t)),
          this._repeat)
        ) {
          if (
            ((p = this._yoyo),
            (a = v + this._rDelay),
            this._repeat < -1 && t < 0)
          )
            return this.totalTime(100 * a + t, e, r);
          if (
            ((n = Dt(y % a)),
            y === g
              ? ((o = this._repeat), (n = v))
              : ((o = ~~(y / a)) && o === y / a && ((n = v), o--),
                n > v && (n = v)),
            (d = Vt(this._tTime, a)),
            !m && this._tTime && d !== o && (d = o),
            p && 1 & o && ((n = v - n), (_ = 1)),
            o !== d && !this._lock)
          ) {
            var b = p && 1 & d,
              w = b === (p && 1 & o);
            if (
              (o < d && (b = !b),
              (m = b ? 0 : v),
              (this._lock = 1),
              (this.render(m || (_ ? 0 : Dt(o * a)), e, !v)._lock = 0),
              (this._tTime = y),
              !e && this.parent && be(this, "onRepeat"),
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
                (m = b ? v : -1e-4),
                this.render(m, !0),
                this.vars.repeatRefresh && !_ && this.invalidate()),
              (this._lock = 0),
              !this._ts && !h)
            )
              return this;
            Be(this, _);
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
            })(this, Dt(m), Dt(n))),
            l && (y -= n - (n = l._start))),
          (this._tTime = y),
          (this._time = n),
          (this._act = !c),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = t),
            (m = 0)),
          !m && n && !e && (be(this, "onStart"), this._tTime !== y))
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
            if (((s = i._prev), (i._act || T <= i._end) && i._ts && l !== i)) {
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
                (l = 0), s && (y += this._zTime = T ? -1e-8 : 1e-8);
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
          return (this._start = f), Gt(this), this.render(t, e, r);
        this._onUpdate && !e && be(this, "onUpdate", !0),
          ((y === g && this._tTime >= this.totalDuration()) || (!y && m)) &&
            ((f !== this._start && Math.abs(c) === Math.abs(this._ts)) ||
              this._lock ||
              ((t || !v) &&
                ((y === g && this._ts > 0) || (!y && this._ts < 0)) &&
                qt(this, 1),
              e ||
                (t < 0 && !m) ||
                (!y && !m && g) ||
                (be(
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
      if ((V(e) || (e = ie(this, e, t)), !(t instanceof We))) {
        if (Z(t))
          return (
            t.forEach(function (t) {
              return r.add(t, e);
            }),
            this
          );
        if (j(t)) return this.addLabel(t, e);
        if (!U(t)) return this;
        t = ir.delayedCall(0, t);
      }
      return this !== t ? $t(this, t, e) : this;
    }),
    (r.getChildren = function (t, e, r, n) {
      void 0 === t && (t = !0),
        void 0 === e && (e = !0),
        void 0 === r && (r = !0),
        void 0 === n && (n = -1e8);
      for (var i = [], s = this._first; s; )
        s._start >= n &&
          (s instanceof ir
            ? e && i.push(s)
            : (r && i.push(s), t && i.push.apply(i, s.getChildren(!0, e, r)))),
          (s = s._next);
      return i;
    }),
    (r.getById = function (t) {
      for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
        if (e[r].vars.id === t) return e[r];
    }),
    (r.remove = function (t) {
      return j(t)
        ? this.removeLabel(t)
        : U(t)
        ? this.killTweensOf(t)
        : (Bt(this, t),
          t === this._recent && (this._recent = this._last),
          Xt(this));
    }),
    (r.totalTime = function (e, r) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = Dt(
              Pe.time -
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
      return (this.labels[t] = ie(this, e)), this;
    }),
    (r.removeLabel = function (t) {
      return delete this.labels[t], this;
    }),
    (r.addPause = function (t, e, r) {
      var n = ir.delayedCall(0, e || ft, r);
      return (
        (n.data = "isPause"), (this._hasPause = 1), $t(this, n, ie(this, t))
      );
    }),
    (r.removePause = function (t) {
      var e = this._first;
      for (t = ie(this, t); e; )
        e._start === t && "isPause" === e.data && qt(e), (e = e._next);
    }),
    (r.killTweensOf = function (t, e, r) {
      for (var n = this.getTweensOf(t, r), i = n.length; i--; )
        He !== n[i] && n[i].kill(t, e);
      return this;
    }),
    (r.getTweensOf = function (t, e) {
      for (var r, n = [], i = ce(t), s = this._first, o = V(e); s; )
        s instanceof ir
          ? Ct(s._targets, i) &&
            (o
              ? (!He || (s._initted && s._ts)) &&
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
        i = ie(n, t),
        s = e,
        o = s.startAt,
        a = s.onStart,
        u = s.onStartParams,
        h = s.immediateRender,
        l = ir.to(
          n,
          It(
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
                1e-8,
              onStart: function () {
                if ((n.pause(), !r)) {
                  var t =
                    e.duration ||
                    Math.abs(
                      (i - (o && "time" in o ? o.time : n._time)) /
                        n.timeScale()
                    );
                  l._dur !== t && ee(l, t, 0, 1).render(l._time, !0, !0),
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
      return this.tweenTo(e, It({ startAt: { time: ie(this, t) } }, r));
    }),
    (r.recent = function () {
      return this._recent;
    }),
    (r.nextLabel = function (t) {
      return void 0 === t && (t = this._time), xe(this, ie(this, t));
    }),
    (r.previousLabel = function (t) {
      return void 0 === t && (t = this._time), xe(this, ie(this, t), 1);
    }),
    (r.currentLabel = function (t) {
      return arguments.length
        ? this.seek(t, !0)
        : this.previousLabel(this._time + 1e-8);
    }),
    (r.shiftChildren = function (t, e, r) {
      void 0 === r && (r = 0);
      for (var n, i = this._first, s = this.labels; i; )
        i._start >= r && ((i._start += t), (i._end += t)), (i = i._next);
      if (e) for (n in s) s[n] >= r && (s[n] += t);
      return Xt(this);
    }),
    (r.invalidate = function () {
      var e = this._first;
      for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
      return t.prototype.invalidate.call(this);
    }),
    (r.clear = function (t) {
      void 0 === t && (t = !0);
      for (var e, r = this._first; r; ) (e = r._next), this.remove(r), (r = e);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        t && (this.labels = {}),
        Xt(this)
      );
    }),
    (r.totalDuration = function (t) {
      var e,
        r,
        n,
        i = 0,
        s = this,
        o = s._last,
        a = 1e8;
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
              ? ((s._lock = 1), ($t(s, o, r - o._delay, 1)._lock = 0))
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
        ee(s, s === u && s._time > i ? s._time : i, 1, 1), (s._dirty = 0);
      }
      return s._tDur;
    }),
    (e.updateRoot = function (t) {
      if ((u._ts && (At(u, Wt(t, u)), (d = Pe.frame)), Pe.frame >= vt)) {
        vt += R.autoSleep || 120;
        var e = u._first;
        if ((!e || !e._ts) && R.autoSleep && Pe._listeners.length < 2) {
          for (; e && !e._ts; ) e = e._next;
          e || Pe.sleep();
        }
      }
    }),
    e
  );
})(We);
It(Ge.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var He,
  Qe,
  $e = function (t, e, r, n, i, s, o) {
    var a,
      u,
      h,
      l,
      c,
      f,
      d,
      p,
      _ = new vr(this._pt, t, e, 0, 1, fr, null, i),
      m = 0,
      g = 0;
    for (
      _.b = r,
        _.e = n,
        r += "",
        (d = ~(n += "").indexOf("random(")) && (n = ve(n)),
        s && (s((p = [r, n]), t, e), (r = p[0]), (n = p[1])),
        u = r.match(rt) || [];
      (a = rt.exec(n));

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
            c: "=" === l.charAt(1) ? kt(f, l) - f : parseFloat(l) - f,
            m: h && h < 4 ? Math.round : 0,
          }),
          (m = rt.lastIndex));
    return (
      (_.c = m < n.length ? n.substring(m, n.length) : ""),
      (_.fp = o),
      (nt.test(n) || d) && (_.e = 0),
      (this._pt = _),
      _
    );
  },
  Je = function (t, e, r, n, i, s, o, a, u) {
    U(n) && (n = n(i || 0, t, s));
    var h,
      l = t[e],
      c =
        "get" !== r
          ? r
          : U(l)
          ? u
            ? t[
                e.indexOf("set") || !U(t["get" + e.substr(3)])
                  ? e
                  : "get" + e.substr(3)
              ](u)
            : t[e]()
          : l,
      f = U(l) ? (u ? ar : or) : sr;
    if (
      (j(n) &&
        (~n.indexOf("random(") && (n = ve(n)),
        "=" === n.charAt(1) &&
          ((h = kt(c, n) + (ue(c) || 0)) || 0 === h) &&
          (n = h)),
      c !== n || Qe)
    )
      return isNaN(c * n) || "" === n
        ? (!l && !(e in t) && ht(e, n),
          $e.call(this, t, e, c, n, f, a || R.stringFilter, u))
        : ((h = new vr(
            this._pt,
            t,
            e,
            +c || 0,
            n - (c || 0),
            "boolean" == typeof l ? cr : lr,
            0,
            f
          )),
          u && (h.fp = u),
          o && h.modifier(o, this, t),
          (this._pt = h));
  },
  Ze = function (t, e, r, n, i, s) {
    var o, a, u, h;
    if (
      mt[t] &&
      !1 !==
        (o = new mt[t]()).init(
          i,
          o.rawVars
            ? e[t]
            : (function (t, e, r, n, i) {
                if (
                  (U(t) && (t = er(t, i, e, r, n)),
                  !G(t) || (t.style && t.nodeType) || Z(t) || J(t))
                )
                  return j(t) ? er(t, i, e, r, n) : t;
                var s,
                  o = {};
                for (s in t) o[s] = er(t[s], i, e, r, n);
                return o;
              })(e[t], n, i, s, r),
          r,
          n,
          s
        ) &&
      ((r._pt = a = new vr(r._pt, i, t, 0, 1, o.render, o, 0, o.priority)),
      r !== p)
    )
      for (u = r._ptLookup[r._targets.indexOf(i)], h = o._props.length; h--; )
        u[o._props[h]] = a;
    return o;
  },
  Ke = function t(e, r) {
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
      x = v.startAt,
      b = v.immediateRender,
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
      F = e.timeline;
    if (
      (F && (!C || !y) && (y = "none"),
      (e._ease = qe(y, z.ease)),
      (e._yEase = k ? Ye(qe(!0 === k ? y : k, z.ease)) : 0),
      k &&
        e._yoyo &&
        !e._repeat &&
        ((k = e._yEase), (e._yEase = e._ease), (e._ease = k)),
      (e._from = !F && !!v.runBackwards),
      !F || (C && !v.stagger))
    ) {
      if (
        ((m = (f = P[0] ? wt(P[0]).harness : 0) && v[f.prop]),
        (n = zt(v, dt)),
        S && (qt(S.render(-1, !0)), (S._lazy = 0)),
        x)
      )
        if (
          (qt(
            (e._startAt = ir.set(
              P,
              It(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: I,
                  immediateRender: !0,
                  lazy: H(w),
                  startAt: null,
                  delay: 0,
                  onUpdate: T,
                  onUpdateParams: O,
                  callbackScope: M,
                  stagger: 0,
                },
                x
              )
            ))
          ),
          r < 0 && !b && !E && e._startAt.render(-1, !0),
          b)
        ) {
          if ((r > 0 && !E && (e._startAt = 0), A && r <= 0))
            return void (r && (e._zTime = r));
        } else !1 === E && (e._startAt = 0);
      else if (D && A)
        if (S) !E && (e._startAt = 0);
        else if (
          (r && (b = !1),
          (s = It(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: b && H(w),
              immediateRender: b,
              stagger: 0,
              parent: I,
            },
            n
          )),
          m && (s[f.prop] = m),
          qt((e._startAt = ir.set(P, s))),
          r < 0 && e._startAt.render(-1, !0),
          (e._zTime = r),
          b)
        ) {
          if (!r) return;
        } else t(e._startAt, 1e-8);
      for (
        e._pt = e._ptCache = 0, w = (A && H(w)) || (w && !A), i = 0;
        i < P.length;
        i++
      ) {
        if (
          ((c = (h = P[i])._gsap || bt(P)[i]._gsap),
          (e._ptLookup[i] = p = {}),
          _t[c.id] && pt.length && Et(),
          (_ = L === P ? i : L.indexOf(h)),
          f &&
            !1 !== (d = new f()).init(h, m || n, e, _, L) &&
            ((e._pt = o =
              new vr(e._pt, h, d.name, 0, 1, d.render, d, 0, d.priority)),
            d._props.forEach(function (t) {
              p[t] = o;
            }),
            d.priority && (l = 1)),
          !f || m)
        )
          for (s in n)
            mt[s] && (d = Ze(s, n, e, _, h, L))
              ? d.priority && (l = 1)
              : (p[s] = o =
                  Je.call(e, h, s, "get", n[s], _, L, 0, v.stringFilter));
        e._op && e._op[i] && e.kill(h, e._op[i]),
          R &&
            e._pt &&
            ((He = e),
            u.killTweensOf(h, p, e.globalTime(r)),
            (g = !e.parent),
            (He = 0)),
          e._pt && w && (_t[c.id] = 1);
      }
      l && gr(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = T),
      (e._initted = (!e._op || e._pt) && !g),
      C && r <= 0 && F.render(1e8, !0, !0);
  },
  tr = function (t, e, r, n) {
    var i,
      s,
      o = e.ease || n || "power1.inOut";
    if (Z(e))
      (s = r[t] || (r[t] = [])),
        e.forEach(function (t, r) {
          return s.push({ t: (r / (e.length - 1)) * 100, v: t, e: o });
        });
    else
      for (i in e)
        (s = r[i] || (r[i] = [])),
          "ease" === i || s.push({ t: parseFloat(t), v: e[i], e: o });
  },
  er = function (t, e, r, n, i) {
    return U(t)
      ? t.call(e, r, n, i)
      : j(t) && ~t.indexOf("random(")
      ? ve(t)
      : t;
  },
  rr = xt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  nr = {};
Ot(rr + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
  return (nr[t] = 1);
});
var ir = (function (t) {
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
      g = (o = t.call(this, i ? r : Ft(r)) || this).vars,
      v = g.duration,
      y = g.delay,
      x = g.immediateRender,
      b = g.stagger,
      w = g.overwrite,
      T = g.keyframes,
      O = g.defaults,
      M = g.scrollTrigger,
      D = g.yoyoEase,
      k = r.parent || u,
      C = (Z(e) || J(e) ? V(e[0]) : "length" in r) ? [e] : ce(e);
    if (
      ((o._targets = C.length
        ? bt(C)
        : lt(
            "GSAP target " + e + " not found. https://greensock.com",
            !R.nullTargetWarn
          ) || []),
      (o._ptLookup = []),
      (o._overwrite = w),
      T || b || $(v) || $(y))
    ) {
      if (
        ((r = o.vars),
        (h = o.timeline = new Ge({ data: "nested", defaults: O || {} })).kill(),
        (h.parent = h._dp = s(o)),
        (h._start = 0),
        b || $(v) || $(y))
      ) {
        if (((f = C.length), (_ = b && de(b)), G(b)))
          for (d in b) ~rr.indexOf(d) && (m || (m = {}), (m[d] = b[d]));
        for (l = 0; l < f; l++)
          ((c = zt(r, nr)).stagger = 0),
            D && (c.yoyoEase = D),
            m && Lt(c, m),
            (p = C[l]),
            (c.duration = +er(v, s(o), l, p, C)),
            (c.delay = (+er(y, s(o), l, p, C) || 0) - o._delay),
            !b &&
              1 === f &&
              c.delay &&
              ((o._delay = y = c.delay), (o._start += y), (c.delay = 0)),
            h.to(p, c, _ ? _(l, p, C) : 0),
            (h._ease = Le.none);
        h.duration() ? (v = y = 0) : (o.timeline = 0);
      } else if (T) {
        Ft(It(h.vars.defaults, { ease: "none" })),
          (h._ease = qe(T.ease || r.ease || "none"));
        var E,
          A,
          S,
          P = 0;
        if (Z(T))
          T.forEach(function (t) {
            return h.to(C, t, ">");
          });
        else {
          for (d in ((c = {}), T))
            "ease" === d || "easeEach" === d || tr(d, T[d], c, T.easeEach);
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
      !0 !== w || a || ((He = s(o)), u.killTweensOf(C), (He = 0)),
      $t(k, s(o), n),
      r.reversed && o.reverse(),
      r.paused && o.paused(!0),
      (x ||
        (!v &&
          !T &&
          o._start === Dt(k._time) &&
          H(x) &&
          jt(s(o)) &&
          "nested" !== k.data)) &&
        ((o._tTime = -1e-8), o.render(Math.max(0, -y))),
      M && Jt(s(o), M),
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
        _ = t > d - 1e-8 && t >= 0 ? d : t < 1e-8 ? 0 : t;
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
              ((n = Dt(_ % o)),
              _ === d
                ? ((s = this._repeat), (n = p))
                : ((s = ~~(_ / o)) && s === _ / o && ((n = p), s--),
                  n > p && (n = p)),
              (u = this._yoyo && 1 & s) && ((c = this._yEase), (n = p - n)),
              (a = Vt(this._tTime, o)),
              n === f && !r && this._initted)
            )
              return (this._tTime = _), this;
            s !== a &&
              (l && this._yEase && Be(l, u),
              !this.vars.repeatRefresh ||
                u ||
                this._lock ||
                ((this._lock = r = 1),
                (this.render(Dt(o * s), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (Zt(this, t < 0 ? t : n, r, e)) return (this._tTime = 0), this;
            if (f !== this._time) return this;
            if (p !== this._dur) return this.render(t, e, r);
          }
          if (
            ((this._tTime = _),
            (this._time = n),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = h = (c || this._ease)(n / p)),
            this._from && (this.ratio = h = 1 - h),
            n && !f && !e && (be(this, "onStart"), this._tTime !== _))
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
              be(this, "onUpdate")),
            this._repeat &&
              s !== a &&
              this.vars.onRepeat &&
              !e &&
              this.parent &&
              be(this, "onRepeat"),
            (_ !== this._tDur && _) ||
              this._tTime !== _ ||
              (t < 0 &&
                this._startAt &&
                !this._onUpdate &&
                this._startAt.render(t, !0, !0),
              (t || !p) &&
                ((_ === this._tDur && this._ts > 0) || (!_ && this._ts < 0)) &&
                qt(this, 1),
              e ||
                (t < 0 && !f) ||
                (!_ && !f) ||
                (be(this, _ === d ? "onComplete" : "onReverseComplete", !0),
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
                ((!t._start && Kt(t) && (t._initted || !te(t))) ||
                  ((t._ts < 0 || t._dp._ts < 0) && !te(t))))
                ? 0
                : 1,
            h = t._rDelay,
            l = 0;
          if (
            (h &&
              t._repeat &&
              ((l = ae(0, t._tDur, e)),
              (s = Vt(l, h)),
              t._yoyo && 1 & s && (u = 1 - u),
              s !== Vt(t._tTime, h) &&
                ((a = 1 - u),
                t.vars.repeatRefresh && t._initted && t.invalidate())),
            u !== a || n || 1e-8 === t._zTime || (!e && t._zTime))
          ) {
            if (!t._initted && Zt(t, e, n, r)) return;
            for (
              o = t._zTime,
                t._zTime = e || (r ? 1e-8 : 0),
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
              t._onUpdate && !r && be(t, "onUpdate"),
              l && t._repeat && !r && t.parent && be(t, "onRepeat"),
              (e >= t._tDur || e < 0) &&
                t.ratio === u &&
                (u && qt(t, 1),
                r ||
                  (be(t, u ? "onComplete" : "onReverseComplete", !0),
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
      _ || Pe.wake(), this._ts || this.play();
      var i = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
      return (
        this._initted || Ke(this, i),
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
                return (Qe = 1), (t.vars[e] = "+=0"), Ke(t, o), (Qe = 0), 1;
              l.push(a);
            }
          for (h = l.length; h--; )
            ((a = l[h]).s =
              (!n && 0 !== n) || i ? a.s + (n || 0) + s * a.c : n),
              (a.c = r - a.s),
              a.e && (a.e = Mt(r) + ue(a.e)),
              a.b && (a.b = a.s + ue(a.b));
        })(this, t, e, r, n, this._ease(i / this._dur), i)
          ? this.resetTo(t, e, r, n)
          : (Ht(this, 0),
            this.parent ||
              Yt(
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
        return (this._lazy = this._pt = 0), this.parent ? we(this) : this;
      if (this.timeline) {
        var r = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(t, e, He && !0 !== He.vars.overwrite)
            ._first || we(this),
          this.parent &&
            r !== this.timeline.totalDuration() &&
            ee(this, (this._dur * this.timeline._tDur) / r, 0, 1),
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
        c = t ? ce(t) : l,
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
        return "all" === e && (this._pt = 0), we(this);
      for (
        n = this._op = this._op || [],
          "all" !== e &&
            (j(e) &&
              ((a = {}),
              Ot(e, function (t) {
                return (a[t] = 1);
              }),
              (e = a)),
            (e = (function (t, e) {
              var r,
                n,
                i,
                s,
                o = t[0] ? wt(t[0]).harness : 0,
                a = o && o.aliases;
              if (!a) return e;
              for (n in ((r = Lt({}, e)), a))
                if ((n in r))
                  for (i = (s = a[n].split(",")).length; i--; ) r[s[i]] = r[n];
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
              (("kill" in u.d && !0 !== u.d.kill(a)) || Bt(this, u, "_pt"),
              delete i[a]),
              "all" !== s && (s[a] = 1);
      return this._initted && !this._pt && d && we(this), this;
    }),
    (e.to = function (t, r) {
      return new e(t, r, arguments[2]);
    }),
    (e.from = function (t, e) {
      return se(1, arguments);
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
      return se(2, arguments);
    }),
    (e.set = function (t, r) {
      return (r.duration = 0), r.repeatDelay || (r.repeat = 0), new e(t, r);
    }),
    (e.killTweensOf = function (t, e, r) {
      return u.killTweensOf(t, e, r);
    }),
    e
  );
})(We);
It(ir.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
  Ot("staggerTo,staggerFrom,staggerFromTo", function (t) {
    ir[t] = function () {
      var e = new Ge(),
        r = he.call(arguments, 0);
      return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r);
    };
  });
var sr = function (t, e, r) {
    return (t[e] = r);
  },
  or = function (t, e, r) {
    return t[e](r);
  },
  ar = function (t, e, r, n) {
    return t[e](n.fp, r);
  },
  ur = function (t, e, r) {
    return t.setAttribute(e, r);
  },
  hr = function (t, e) {
    return U(t[e]) ? or : W(t[e]) && t.setAttribute ? ur : sr;
  },
  lr = function (t, e) {
    return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
  },
  cr = function (t, e) {
    return e.set(e.t, e.p, !!(e.s + e.c * t), e);
  },
  fr = function (t, e) {
    var r = e._pt,
      n = "";
    if (!t && e.b) n = e.b;
    else if (1 === t && e.e) n = e.e;
    else {
      for (; r; )
        (n =
          r.p +
          (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
          n),
          (r = r._next);
      n += e.c;
    }
    e.set(e.t, e.p, n, e);
  },
  dr = function (t, e) {
    for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
  },
  pr = function (t, e, r, n) {
    for (var i, s = this._pt; s; )
      (i = s._next), s.p === n && s.modifier(t, e, r), (s = i);
  },
  _r = function (t) {
    for (var e, r, n = this._pt; n; )
      (r = n._next),
        (n.p === t && !n.op) || n.op === t
          ? Bt(this, n, "_pt")
          : n.dep || (e = 1),
        (n = r);
    return !e;
  },
  mr = function (t, e, r, n) {
    n.mSet(t, e, n.m.call(n.tween, r, n.mt), n);
  },
  gr = function (t) {
    for (var e, r, n, i, s = t._pt; s; ) {
      for (e = s._next, r = n; r && r.pr > s.pr; ) r = r._next;
      (s._prev = r ? r._prev : i) ? (s._prev._next = s) : (n = s),
        (s._next = r) ? (r._prev = s) : (i = s),
        (s = e);
    }
    t._pt = n;
  },
  vr = (function () {
    function t(t, e, r, n, i, s, o, a, u) {
      (this.t = e),
        (this.s = n),
        (this.c = i),
        (this.p = r),
        (this.r = s || lr),
        (this.d = o || this),
        (this.set = a || sr),
        (this.pr = u || 0),
        (this._next = t),
        t && (t._prev = this);
    }
    return (
      (t.prototype.modifier = function (t, e, r) {
        (this.mSet = this.mSet || this.set),
          (this.set = mr),
          (this.m = t),
          (this.mt = r),
          (this.tween = e);
      }),
      t
    );
  })();
Ot(
  xt +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (t) {
    return (dt[t] = 1);
  }
),
  (ot.TweenMax = ot.TweenLite = ir),
  (ot.TimelineLite = ot.TimelineMax = Ge),
  (u = new Ge({
    sortChildren: !1,
    defaults: z,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0,
  })),
  (R.stringFilter = Se);
var yr = {
  registerPlugin: function () {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    e.forEach(function (t) {
      return Te(t);
    });
  },
  timeline: function (t) {
    return new Ge(t);
  },
  getTweensOf: function (t, e) {
    return u.getTweensOf(t, e);
  },
  getProperty: function (t, e, r, n) {
    j(t) && (t = ce(t)[0]);
    var i = wt(t || {}).get,
      s = r ? Pt : St;
    return (
      "native" === r && (r = ""),
      t
        ? e
          ? s(((mt[e] && mt[e].get) || i)(t, e, r, n))
          : function (e, r, n) {
              return s(((mt[e] && mt[e].get) || i)(t, e, r, n));
            }
        : t
    );
  },
  quickSetter: function (t, e, r) {
    if ((t = ce(t)).length > 1) {
      var n = t.map(function (t) {
          return wr.quickSetter(t, e, r);
        }),
        i = n.length;
      return function (t) {
        for (var e = i; e--; ) n[e](t);
      };
    }
    t = t[0] || {};
    var s = mt[e],
      o = wt(t),
      a = (o.harness && (o.harness.aliases || {})[e]) || e,
      u = s
        ? function (e) {
            var n = new s();
            (p._pt = 0),
              n.init(t, r ? e + r : e, p, 0, [t]),
              n.render(1, n),
              p._pt && dr(1, p);
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
      i = wr.to(t, Lt((((n = {})[e] = "+=0.1"), (n.paused = !0), n), r || {})),
      s = function (t, r, n) {
        return i.resetTo(e, t, r, n);
      };
    return (s.tween = i), s;
  },
  isTweening: function (t) {
    return u.getTweensOf(t, !0).length > 0;
  },
  defaults: function (t) {
    return t && t.ease && (t.ease = qe(t.ease, z.ease)), Rt(z, t || {});
  },
  config: function (t) {
    return Rt(R, t || {});
  },
  registerEffect: function (t) {
    var e = t.name,
      r = t.effect,
      n = t.plugins,
      i = t.defaults,
      s = t.extendTimeline;
    (n || "").split(",").forEach(function (t) {
      return (
        t && !mt[t] && !ot[t] && lt(e + " effect requires " + t + " plugin.")
      );
    }),
      (gt[e] = function (t, e, n) {
        return r(ce(t), It(e || {}, i), n);
      }),
      s &&
        (Ge.prototype[e] = function (t, r, n) {
          return this.add(gt[e](t, G(r) ? r : (n = r) && {}, this), n);
        });
  },
  registerEase: function (t, e) {
    Le[t] = qe(e);
  },
  parseEase: function (t, e) {
    return arguments.length ? qe(t, e) : Le;
  },
  getById: function (t) {
    return u.getById(t);
  },
  exportRoot: function (t, e) {
    void 0 === t && (t = {});
    var r,
      n,
      i = new Ge(t);
    for (
      i.smoothChildTiming = H(t.smoothChildTiming),
        u.remove(i),
        i._dp = 0,
        i._time = i._tTime = u._time,
        r = u._first;
      r;

    )
      (n = r._next),
        (!e &&
          !r._dur &&
          r instanceof ir &&
          r.vars.onComplete === r._targets[0]) ||
          $t(i, r, r._start - r._delay),
        (r = n);
    return $t(u, i, 0), i;
  },
  utils: {
    wrap: function t(e, r, n) {
      var i = r - e;
      return Z(e)
        ? ge(e, t(0, e.length), r)
        : oe(n, function (t) {
            return ((i + ((t - e) % i)) % i) + e;
          });
    },
    wrapYoyo: function t(e, r, n) {
      var i = r - e,
        s = 2 * i;
      return Z(e)
        ? ge(e, t(0, e.length - 1), r)
        : oe(n, function (t) {
            return e + ((t = (s + ((t - e) % s)) % s || 0) > i ? s - t : t);
          });
    },
    distribute: de,
    random: me,
    snap: _e,
    normalize: function (t, e, r) {
      return ye(t, e, 0, 1, r);
    },
    getUnit: ue,
    clamp: function (t, e, r) {
      return oe(r, function (r) {
        return ae(t, e, r);
      });
    },
    splitColor: De,
    toArray: ce,
    selector: function (t) {
      return (
        (t = ce(t)[0] || lt("Invalid scope") || {}),
        function (e) {
          var r = t.current || t.nativeElement || t;
          return ce(
            e,
            r.querySelectorAll
              ? r
              : r === t
              ? lt("Invalid scope") || c.createElement("div")
              : t
          );
        }
      );
    },
    mapRange: ye,
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
        return t(parseFloat(r)) + (e || ue(r));
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
          c = j(e),
          f = {};
        if ((!0 === n && (i = 1) && (n = null), c))
          (e = { p: e }), (r = { p: r });
        else if (Z(e) && !Z(r)) {
          for (u = [], h = e.length, l = h - 2, a = 1; a < h; a++)
            u.push(t(e[a - 1], e[a]));
          h--,
            (s = function (t) {
              t *= h;
              var e = Math.min(l, ~~t);
              return u[e](t - e);
            }),
            (n = r);
        } else i || (e = Lt(Z(e) ? [] : {}, e));
        if (!u) {
          for (o in r) Je.call(f, e, o, "get", r[o]);
          s = function (t) {
            return dr(t, f) || (c ? e.p : e);
          };
        }
      }
      return oe(n, s);
    },
    shuffle: fe,
  },
  install: ut,
  effects: gt,
  ticker: Pe,
  updateRoot: Ge.updateRoot,
  plugins: mt,
  globalTimeline: u,
  core: {
    PropTween: vr,
    globals: ct,
    Tween: ir,
    Timeline: Ge,
    Animation: We,
    getCache: wt,
    _removeLinkedListItem: Bt,
    suppressOverwrites: function (t) {
      return (a = t);
    },
  },
};
Ot("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
  return (yr[t] = ir[t]);
}),
  Pe.add(Ge.updateRoot),
  (p = yr.to({}, { duration: 0 }));
var xr = function (t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
      r = r._next;
    return r;
  },
  br = function (t, e) {
    return {
      name: t,
      rawVars: 1,
      init: function (t, r, n) {
        n._onInit = function (t) {
          var n, i;
          if (
            (j(r) &&
              ((n = {}),
              Ot(r, function (t) {
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
                  (i._pt && (i = xr(i, r)),
                  i && i.modifier && i.modifier(e[r], t, s[n], r));
          })(t, r);
        };
      },
    };
  },
  wr =
    yr.registerPlugin(
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
      br("roundProps", pe),
      br("modifiers"),
      br("snap", _e)
    ) || yr;
(ir.version = Ge.version = wr.version = "3.10.4"), (f = 1), Q() && Ie();
Le.Power0,
  Le.Power1,
  Le.Power2,
  Le.Power3,
  Le.Power4,
  Le.Linear,
  Le.Quad,
  Le.Cubic,
  Le.Quart,
  Le.Quint,
  Le.Strong,
  Le.Elastic,
  Le.Back,
  Le.SteppedEase,
  Le.Bounce,
  Le.Sine,
  Le.Expo,
  Le.Circ;
var Tr,
  Or,
  Mr,
  Dr,
  kr,
  Cr,
  Er,
  Ar = {},
  Sr = 180 / Math.PI,
  Pr = Math.PI / 180,
  Ir = Math.atan2,
  Lr = /([A-Z])/g,
  Rr = /(left|right|width|margin|padding|x)/i,
  zr = /[\s,\(]\S/,
  Fr = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  Yr = function (t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  },
  Br = function (t, e) {
    return e.set(
      e.t,
      e.p,
      1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
      e
    );
  },
  qr = function (t, e) {
    return e.set(
      e.t,
      e.p,
      t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
      e
    );
  },
  Xr = function (t, e) {
    var r = e.s + e.c * t;
    e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
  },
  Nr = function (t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  },
  jr = function (t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
  },
  Ur = function (t, e, r) {
    return (t.style[e] = r);
  },
  Vr = function (t, e, r) {
    return t.style.setProperty(e, r);
  },
  Wr = function (t, e, r) {
    return (t._gsap[e] = r);
  },
  Gr = function (t, e, r) {
    return (t._gsap.scaleX = t._gsap.scaleY = r);
  },
  Hr = function (t, e, r, n, i) {
    var s = t._gsap;
    (s.scaleX = s.scaleY = r), s.renderTransform(i, s);
  },
  Qr = function (t, e, r, n, i) {
    var s = t._gsap;
    (s[e] = r), s.renderTransform(i, s);
  },
  $r = "transform",
  Jr = $r + "Origin",
  Zr = function (t, e) {
    var r = Or.createElementNS
      ? Or.createElementNS(
          (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          t
        )
      : Or.createElement(t);
    return r.style ? r : Or.createElement(t);
  },
  Kr = function t(e, r, n) {
    var i = getComputedStyle(e);
    return (
      i[r] ||
      i.getPropertyValue(r.replace(Lr, "-$1").toLowerCase()) ||
      i.getPropertyValue(r) ||
      (!n && t(e, en(r) || r, 1)) ||
      ""
    );
  },
  tn = "O,Moz,ms,Ms,Webkit".split(","),
  en = function (t, e, r) {
    var n = (e || kr).style,
      i = 5;
    if (t in n && !r) return t;
    for (
      t = t.charAt(0).toUpperCase() + t.substr(1);
      i-- && !(tn[i] + t in n);

    );
    return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? tn[i] : "") + t;
  },
  rn = function () {
    "undefined" != typeof window &&
      window.document &&
      ((Tr = window),
      (Or = Tr.document),
      (Mr = Or.documentElement),
      (kr = Zr("div") || { style: {} }),
      Zr("div"),
      ($r = en($r)),
      (Jr = $r + "Origin"),
      (kr.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Er = !!en("perspective")),
      (Dr = 1));
  },
  nn = function t(e) {
    var r,
      n = Zr(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      i = this.parentNode,
      s = this.nextSibling,
      o = this.style.cssText;
    if (
      (Mr.appendChild(n),
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
      Mr.removeChild(n),
      (this.style.cssText = o),
      r
    );
  },
  sn = function (t, e) {
    for (var r = e.length; r--; )
      if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
  },
  on = function (t) {
    var e;
    try {
      e = t.getBBox();
    } catch (r) {
      e = nn.call(t, !0);
    }
    return (
      (e && (e.width || e.height)) || t.getBBox === nn || (e = nn.call(t, !0)),
      !e || e.width || e.x || e.y
        ? e
        : {
            x: +sn(t, ["x", "cx", "x1"]) || 0,
            y: +sn(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
    );
  },
  an = function (t) {
    return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !on(t));
  },
  un = function (t, e) {
    if (e) {
      var r = t.style;
      e in Ar && e !== Jr && (e = $r),
        r.removeProperty
          ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
              (e = "-" + e),
            r.removeProperty(e.replace(Lr, "-$1").toLowerCase()))
          : r.removeAttribute(e);
    }
  },
  hn = function (t, e, r, n, i, s) {
    var o = new vr(t._pt, e, r, 0, 1, s ? jr : Nr);
    return (t._pt = o), (o.b = n), (o.e = i), t._props.push(r), o;
  },
  ln = { deg: 1, rad: 1, turn: 1 },
  cn = function t(e, r, n, i) {
    var s,
      o,
      a,
      u,
      h = parseFloat(n) || 0,
      l = (n + "").trim().substr((h + "").length) || "px",
      c = kr.style,
      f = Rr.test(r),
      d = "svg" === e.tagName.toLowerCase(),
      p = (d ? "client" : "offset") + (f ? "Width" : "Height"),
      _ = 100,
      m = "px" === i,
      g = "%" === i;
    return i === l || !h || ln[i] || ln[l]
      ? h
      : ("px" !== l && !m && (h = t(e, r, n, "px")),
        (u = e.getCTM && an(e)),
        (!g && "%" !== l) || (!Ar[r] && !~r.indexOf("adius"))
          ? ((c[f ? "width" : "height"] = _ + (m ? l : i)),
            (o =
              ~r.indexOf("adius") || ("em" === i && e.appendChild && !d)
                ? e
                : e.parentNode),
            u && (o = (e.ownerSVGElement || {}).parentNode),
            (o && o !== Or && o.appendChild) || (o = Or.body),
            (a = o._gsap) && g && a.width && f && a.time === Pe.time
              ? Mt((h / a.width) * _)
              : ((g || "%" === l) && (c.position = Kr(e, "position")),
                o === e && (c.position = "static"),
                o.appendChild(kr),
                (s = kr[p]),
                o.removeChild(kr),
                (c.position = "absolute"),
                f && g && (((a = wt(o)).time = Pe.time), (a.width = o[p])),
                Mt(m ? (s * h) / _ : s && h ? (_ / s) * h : 0)))
          : ((s = u ? e.getBBox()[f ? "width" : "height"] : e[p]),
            Mt(g ? (h / s) * _ : (h / 100) * s)));
  },
  fn = function (t, e, r, n) {
    var i;
    return (
      Dr || rn(),
      e in Fr &&
        "transform" !== e &&
        ~(e = Fr[e]).indexOf(",") &&
        (e = e.split(",")[0]),
      Ar[e] && "transform" !== e
        ? ((i = Tn(t, n)),
          (i =
            "transformOrigin" !== e
              ? i[e]
              : i.svg
              ? i.origin
              : On(Kr(t, Jr)) + " " + i.zOrigin + "px"))
        : (!(i = t.style[e]) ||
            "auto" === i ||
            n ||
            ~(i + "").indexOf("calc(")) &&
          (i =
            (mn[e] && mn[e](t, e, r)) ||
            Kr(t, e) ||
            Tt(t, e) ||
            ("opacity" === e ? 1 : 0)),
      r && !~(i + "").trim().indexOf(" ") ? cn(t, e, i, r) + r : i
    );
  },
  dn = function (t, e, r, n) {
    if (!r || "none" === r) {
      var i = en(e, t, 1),
        s = i && Kr(t, i, 1);
      s && s !== r
        ? ((e = i), (r = s))
        : "borderColor" === e && (r = Kr(t, "borderTopColor"));
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
      g = new vr(this._pt, t.style, e, 0, 1, fr),
      v = 0,
      y = 0;
    if (
      ((g.b = r),
      (g.e = n),
      (r += ""),
      "auto" === (n += "") &&
        ((t.style[e] = n), (n = Kr(t, e) || n), (t.style[e] = r)),
      Se((o = [r, n])),
      (n = o[1]),
      (u = (r = o[0]).match(et) || []),
      (n.match(et) || []).length)
    ) {
      for (; (a = et.exec(n)); )
        (f = a[0]),
          (p = n.substring(v, a.index)),
          l
            ? (l = (l + 1) % 5)
            : ("rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5)) || (l = 1),
          f !== (c = u[y++] || "") &&
            ((h = parseFloat(c) || 0),
            (m = c.substr((h + "").length)),
            "=" === f.charAt(1) && (f = kt(h, f) + m),
            (d = parseFloat(f)),
            (_ = f.substr((d + "").length)),
            (v = et.lastIndex - _.length),
            _ ||
              ((_ = _ || R.units[e] || m),
              v === n.length && ((n += _), (g.e += _))),
            m !== _ && (h = cn(t, e, c, _) || 0),
            (g._pt = {
              _next: g._pt,
              p: p || 1 === y ? p : ",",
              s: h,
              c: d - h,
              m: (l && l < 4) || "zIndex" === e ? Math.round : 0,
            }));
      g.c = v < n.length ? n.substring(v, n.length) : "";
    } else g.r = "display" === e && "none" === n ? jr : Nr;
    return nt.test(n) && (g.e = 0), (this._pt = g), g;
  },
  pn = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  _n = function (t, e) {
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
            Ar[r] && ((n = 1), (r = "transformOrigin" === r ? Jr : $r)),
            un(s, r);
      n &&
        (un(s, $r),
        u &&
          (u.svg && s.removeAttribute("transform"), Tn(s, 1), (u.uncache = 1)));
    }
  },
  mn = {
    clearProps: function (t, e, r, n, i) {
      if ("isFromStart" !== i.data) {
        var s = (t._pt = new vr(t._pt, e, r, 0, 0, _n));
        return (s.u = n), (s.pr = -10), (s.tween = i), t._props.push(r), 1;
      }
    },
  },
  gn = [1, 0, 0, 1, 0, 0],
  vn = {},
  yn = function (t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
  },
  xn = function (t) {
    var e = Kr(t, $r);
    return yn(e) ? gn : e.substr(7).match(tt).map(Mt);
  },
  bn = function (t, e) {
    var r,
      n,
      i,
      s,
      o = t._gsap || wt(t),
      a = t.style,
      u = xn(t);
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
        ? gn
        : u
      : (u !== gn ||
          t.offsetParent ||
          t === Mr ||
          o.svg ||
          ((i = a.display),
          (a.display = "block"),
          ((r = t.parentNode) && t.offsetParent) ||
            ((s = 1), (n = t.nextSibling), Mr.appendChild(t)),
          (u = xn(t)),
          i ? (a.display = i) : un(t, "display"),
          s &&
            (n
              ? r.insertBefore(t, n)
              : r
              ? r.appendChild(t)
              : Mr.removeChild(t))),
        e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
  },
  wn = function (t, e, r, n, i, s) {
    var o,
      a,
      u,
      h = t._gsap,
      l = i || bn(t, !0),
      c = h.xOrigin || 0,
      f = h.yOrigin || 0,
      d = h.xOffset || 0,
      p = h.yOffset || 0,
      _ = l[0],
      m = l[1],
      g = l[2],
      v = l[3],
      y = l[4],
      x = l[5],
      b = e.split(" "),
      w = parseFloat(b[0]) || 0,
      T = parseFloat(b[1]) || 0;
    r
      ? l !== gn &&
        (a = _ * v - m * g) &&
        ((u = w * (-m / a) + T * (_ / a) - (_ * x - m * y) / a),
        (w = w * (v / a) + T * (-g / a) + (g * x - v * y) / a),
        (T = u))
      : ((w = (o = on(t)).x + (~b[0].indexOf("%") ? (w / 100) * o.width : w)),
        (T = o.y + (~(b[1] || b[0]).indexOf("%") ? (T / 100) * o.height : T))),
      n || (!1 !== n && h.smooth)
        ? ((y = w - c),
          (x = T - f),
          (h.xOffset = d + (y * _ + x * g) - y),
          (h.yOffset = p + (y * m + x * v) - x))
        : (h.xOffset = h.yOffset = 0),
      (h.xOrigin = w),
      (h.yOrigin = T),
      (h.smooth = !!n),
      (h.origin = e),
      (h.originIsAbsolute = !!r),
      (t.style[Jr] = "0px 0px"),
      s &&
        (hn(s, h, "xOrigin", c, w),
        hn(s, h, "yOrigin", f, T),
        hn(s, h, "xOffset", d, h.xOffset),
        hn(s, h, "yOffset", p, h.yOffset)),
      t.setAttribute("data-svg-origin", w + " " + T);
  },
  Tn = function (t, e) {
    var r = t._gsap || new Ve(t);
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
      x,
      b,
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
      q = Kr(t, Jr) || "0";
    return (
      (n = i = s = u = h = l = c = f = d = 0),
      (o = a = 1),
      (r.svg = !(!t.getCTM || !an(t))),
      (m = bn(t, r.svg)),
      r.svg &&
        ((D =
          (!r.uncache || "0px 0px" === q) &&
          !e &&
          t.getAttribute("data-svg-origin")),
        wn(t, D || q, !!D || r.originIsAbsolute, !1 !== r.smooth, m)),
      (p = r.xOrigin || 0),
      (_ = r.yOrigin || 0),
      m !== gn &&
        ((x = m[0]),
        (b = m[1]),
        (w = m[2]),
        (T = m[3]),
        (n = O = m[4]),
        (i = M = m[5]),
        6 === m.length
          ? ((o = Math.sqrt(x * x + b * b)),
            (a = Math.sqrt(T * T + w * w)),
            (u = x || b ? Ir(b, x) * Sr : 0),
            (c = w || T ? Ir(w, T) * Sr + u : 0) &&
              (a *= Math.abs(Math.cos(c * Pr))),
            r.svg && ((n -= p - (p * x + _ * w)), (i -= _ - (p * b + _ * T))))
          : ((L = m[6]),
            (P = m[7]),
            (E = m[8]),
            (A = m[9]),
            (S = m[10]),
            (I = m[11]),
            (n = m[12]),
            (i = m[13]),
            (s = m[14]),
            (h = (g = Ir(L, S)) * Sr),
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
            (l = (g = Ir(-w, S)) * Sr),
            g &&
              ((v = Math.cos(-g)),
              (I = T * (y = Math.sin(-g)) + I * v),
              (x = D = x * v - E * y),
              (b = k = b * v - A * y),
              (w = C = w * v - S * y)),
            (u = (g = Ir(b, x)) * Sr),
            g &&
              ((D = x * (v = Math.cos(g)) + b * (y = Math.sin(g))),
              (k = O * v + M * y),
              (b = b * v - x * y),
              (M = M * v - O * y),
              (x = D),
              (O = k)),
            h &&
              Math.abs(h) + Math.abs(u) > 359.9 &&
              ((h = u = 0), (l = 180 - l)),
            (o = Mt(Math.sqrt(x * x + b * b + w * w))),
            (a = Mt(Math.sqrt(M * M + L * L))),
            (g = Ir(O, M)),
            (c = Math.abs(g) > 2e-4 ? g * Sr : 0),
            (d = I ? 1 / (I < 0 ? -I : I) : 0)),
        r.svg &&
          ((D = t.getAttribute("transform")),
          (r.forceCSS = t.setAttribute("transform", "") || !yn(Kr(t, $r))),
          D && t.setAttribute("transform", D))),
      Math.abs(c) > 90 &&
        Math.abs(c) < 270 &&
        (F
          ? ((o *= -1), (c += u <= 0 ? 180 : -180), (u += u <= 0 ? 180 : -180))
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
      (r.scaleX = Mt(o)),
      (r.scaleY = Mt(a)),
      (r.rotation = Mt(u) + B),
      (r.rotationX = Mt(h) + B),
      (r.rotationY = Mt(l) + B),
      (r.skewX = c + B),
      (r.skewY = f + B),
      (r.transformPerspective = d + Y),
      (r.zOrigin = parseFloat(q.split(" ")[2]) || 0) && (z[Jr] = On(q)),
      (r.xOffset = r.yOffset = 0),
      (r.force3D = R.force3D),
      (r.renderTransform = r.svg ? Cn : Er ? kn : Dn),
      (r.uncache = 0),
      r
    );
  },
  On = function (t) {
    return (t = t.split(" "))[0] + " " + t[1];
  },
  Mn = function (t, e, r) {
    var n = ue(e);
    return Mt(parseFloat(e) + parseFloat(cn(t, "x", r + "px", n))) + n;
  },
  Dn = function (t, e) {
    (e.z = "0px"),
      (e.rotationY = e.rotationX = "0deg"),
      (e.force3D = 0),
      kn(t, e);
  },
  kn = function (t, e) {
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
      x = ("auto" === m && t && 1 !== t) || !0 === m;
    if (v && ("0deg" !== l || "0deg" !== h)) {
      var b,
        w = parseFloat(h) * Pr,
        T = Math.sin(w),
        O = Math.cos(w);
      (w = parseFloat(l) * Pr),
        (b = Math.cos(w)),
        (s = Mn(g, s, T * b * -v)),
        (o = Mn(g, o, -Math.sin(w) * -v)),
        (a = Mn(g, a, O * b * -v + v));
    }
    "0px" !== _ && (y += "perspective(" + _ + ") "),
      (n || i) && (y += "translate(" + n + "%, " + i + "%) "),
      (x || "0px" !== s || "0px" !== o || "0px" !== a) &&
        (y +=
          "0px" !== a || x
            ? "translate3d(" + s + ", " + o + ", " + a + ") "
            : "translate(" + s + ", " + o + ") "),
      "0deg" !== u && (y += "rotate(" + u + ") "),
      "0deg" !== h && (y += "rotateY(" + h + ") "),
      "0deg" !== l && (y += "rotateX(" + l + ") "),
      ("0deg" === c && "0deg" === f) || (y += "skew(" + c + ", " + f + ") "),
      (1 === d && 1 === p) || (y += "scale(" + d + ", " + p + ") "),
      (g.style[$r] = y || "translate(0, 0)");
  },
  Cn = function (t, e) {
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
      x = a.xOffset,
      b = a.yOffset,
      w = a.forceCSS,
      T = parseFloat(l),
      O = parseFloat(c);
    (f = parseFloat(f)),
      (d = parseFloat(d)),
      (p = parseFloat(p)) && ((d += p = parseFloat(p)), (f += p)),
      f || d
        ? ((f *= Pr),
          (d *= Pr),
          (r = Math.cos(f) * _),
          (n = Math.sin(f) * _),
          (i = Math.sin(f - d) * -m),
          (s = Math.cos(f - d) * m),
          d &&
            ((p *= Pr),
            (o = Math.tan(d - p)),
            (i *= o = Math.sqrt(1 + o * o)),
            (s *= o),
            p &&
              ((o = Math.tan(p)), (r *= o = Math.sqrt(1 + o * o)), (n *= o))),
          (r = Mt(r)),
          (n = Mt(n)),
          (i = Mt(i)),
          (s = Mt(s)))
        : ((r = _), (s = m), (n = i = 0)),
      ((T && !~(l + "").indexOf("px")) || (O && !~(c + "").indexOf("px"))) &&
        ((T = cn(g, "x", l, "px")), (O = cn(g, "y", c, "px"))),
      (v || y || x || b) &&
        ((T = Mt(T + v - (v * r + y * i) + x)),
        (O = Mt(O + y - (v * n + y * s) + b))),
      (u || h) &&
        ((o = g.getBBox()),
        (T = Mt(T + (u / 100) * o.width)),
        (O = Mt(O + (h / 100) * o.height))),
      (o =
        "matrix(" + r + "," + n + "," + i + "," + s + "," + T + "," + O + ")"),
      g.setAttribute("transform", o),
      w && (g.style[$r] = o);
  },
  En = function (t, e, r, n, i) {
    var s,
      o,
      a = 360,
      u = j(i),
      h = parseFloat(i) * (u && ~i.indexOf("rad") ? Sr : 1) - n,
      l = n + h + "deg";
    return (
      u &&
        ("short" === (s = i.split("_")[1]) &&
          (h %= a) !== h % 180 &&
          (h += h < 0 ? a : -360),
        "cw" === s && h < 0
          ? (h = ((h + 36e9) % a) - ~~(h / a) * a)
          : "ccw" === s && h > 0 && (h = ((h - 36e9) % a) - ~~(h / a) * a)),
      (t._pt = o = new vr(t._pt, e, r, n, h, Br)),
      (o.e = l),
      (o.u = "deg"),
      t._props.push(r),
      o
    );
  },
  An = function (t, e) {
    for (var r in e) t[r] = e[r];
    return t;
  },
  Sn = function (t, e, r) {
    var n,
      i,
      s,
      o,
      a,
      u,
      h,
      l = An({}, r._gsap),
      c = r.style;
    for (i in (l.svg
      ? ((s = r.getAttribute("transform")),
        r.setAttribute("transform", ""),
        (c[$r] = e),
        (n = Tn(r, 1)),
        un(r, $r),
        r.setAttribute("transform", s))
      : ((s = getComputedStyle(r)[$r]),
        (c[$r] = e),
        (n = Tn(r, 1)),
        (c[$r] = s)),
    Ar))
      (s = l[i]) !== (o = n[i]) &&
        "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
        ((a = ue(s) !== (h = ue(o)) ? cn(r, i, s, h) : parseFloat(s)),
        (u = parseFloat(o)),
        (t._pt = new vr(t._pt, n, i, a, u - a, Yr)),
        (t._pt.u = h || 0),
        t._props.push(i));
    An(n, l);
  };
Ot("padding,margin,Width,Radius", function (t, e) {
  var r = "Top",
    n = "Right",
    i = "Bottom",
    s = "Left",
    o = (e < 3 ? [r, n, i, s] : [r + s, r + n, i + n, i + s]).map(function (r) {
      return e < 2 ? t + r : "border" + r + t;
    });
  mn[e > 1 ? "border" + t : t] = function (t, e, r, n, i) {
    var s, a;
    if (arguments.length < 4)
      return (
        (s = o.map(function (e) {
          return fn(t, e, r);
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
var Pn,
  In,
  Ln,
  Rn = {
    name: "css",
    register: rn,
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
        x,
        b,
        w,
        T,
        O = this._props,
        M = t.style,
        D = r.vars.startAt;
      for (c in (Dr || rn(), e))
        if ("autoRound" !== c && ((o = e[c]), !mt[c] || !Ze(c, e, r, n, t, i)))
          if (
            ((h = typeof o),
            (l = mn[c]),
            "function" === h && (h = typeof (o = o.call(r, n, t, i))),
            "string" === h && ~o.indexOf("random(") && (o = ve(o)),
            l)
          )
            l(this, t, c, o, r) && (y = 1);
          else if ("--" === c.substr(0, 2))
            (s = (getComputedStyle(t).getPropertyValue(c) + "").trim()),
              (o += ""),
              (Ee.lastIndex = 0),
              Ee.test(s) || ((f = ue(s)), (d = ue(o))),
              d ? f !== d && (s = cn(t, c, s, d) + d) : f && (o += f),
              this.add(M, "setProperty", s, o, n, i, 0, 0, c),
              O.push(c);
          else if ("undefined" !== h) {
            if (
              (D && c in D
                ? ((s =
                    "function" == typeof D[c] ? D[c].call(r, n, t, i) : D[c]),
                  j(s) && ~s.indexOf("random(") && (s = ve(s)),
                  ue(s + "") || (s += R.units[c] || ue(fn(t, c)) || ""),
                  "=" === (s + "").charAt(1) && (s = fn(t, c)))
                : (s = fn(t, c)),
              (u = parseFloat(s)),
              (p = "string" === h && "=" === o.charAt(1) && o.substr(0, 2)) &&
                (o = o.substr(2)),
              (a = parseFloat(o)),
              c in Fr &&
                ("autoAlpha" === c &&
                  (1 === u && "hidden" === fn(t, "visibility") && a && (u = 0),
                  hn(
                    this,
                    M,
                    "visibility",
                    u ? "inherit" : "hidden",
                    a ? "inherit" : "hidden",
                    !a
                  )),
                "scale" !== c &&
                  "transform" !== c &&
                  ~(c = Fr[c]).indexOf(",") &&
                  (c = c.split(",")[0])),
              (_ = c in Ar))
            )
              if (
                (m ||
                  (((g = t._gsap).renderTransform && !e.parseTransform) ||
                    Tn(t, e.parseTransform),
                  (v = !1 !== e.smoothOrigin && g.smooth),
                  ((m = this._pt =
                    new vr(
                      this._pt,
                      M,
                      $r,
                      0,
                      1,
                      g.renderTransform,
                      g,
                      0,
                      -1
                    )).dep = 1)),
                "scale" === c)
              )
                (this._pt = new vr(
                  this._pt,
                  g,
                  "scaleY",
                  g.scaleY,
                  (p ? kt(g.scaleY, p + a) : a) - g.scaleY || 0
                )),
                  O.push("scaleY", c),
                  (c += "X");
              else {
                if ("transformOrigin" === c) {
                  (b = void 0),
                    (w = void 0),
                    (T = void 0),
                    (b = (x = o).split(" ")),
                    (w = b[0]),
                    (T = b[1] || "50%"),
                    ("top" !== w &&
                      "bottom" !== w &&
                      "left" !== T &&
                      "right" !== T) ||
                      ((x = w), (w = T), (T = x)),
                    (b[0] = pn[w] || w),
                    (b[1] = pn[T] || T),
                    (o = b.join(" ")),
                    g.svg
                      ? wn(t, o, 0, v, 0, this)
                      : ((d = parseFloat(o.split(" ")[2]) || 0) !== g.zOrigin &&
                          hn(this, g, "zOrigin", g.zOrigin, d),
                        hn(this, M, c, On(s), On(o)));
                  continue;
                }
                if ("svgOrigin" === c) {
                  wn(t, o, 1, v, 0, this);
                  continue;
                }
                if (c in vn) {
                  En(this, g, c, u, p ? kt(u, p + o) : o);
                  continue;
                }
                if ("smoothOrigin" === c) {
                  hn(this, g, "smooth", g.smooth, o);
                  continue;
                }
                if ("force3D" === c) {
                  g[c] = o;
                  continue;
                }
                if ("transform" === c) {
                  Sn(this, o, t);
                  continue;
                }
              }
            else c in M || (c = en(c) || c);
            if (
              _ ||
              ((a || 0 === a) && (u || 0 === u) && !zr.test(o) && c in M)
            )
              a || (a = 0),
                (f = (s + "").substr((u + "").length)) !==
                  (d = ue(o) || (c in R.units ? R.units[c] : f)) &&
                  (u = cn(t, c, s, d)),
                (this._pt = new vr(
                  this._pt,
                  _ ? g : M,
                  c,
                  u,
                  (p ? kt(u, p + a) : a) - u,
                  _ || ("px" !== d && "zIndex" !== c) || !1 === e.autoRound
                    ? Yr
                    : Xr
                )),
                (this._pt.u = d || 0),
                f !== d && "%" !== d && ((this._pt.b = s), (this._pt.r = qr));
            else if (c in M) dn.call(this, t, c, s, p ? p + o : o);
            else {
              if (!(c in t)) {
                ht(c, o);
                continue;
              }
              this.add(t, c, s || t[c], p ? p + o : o, n, i);
            }
            O.push(c);
          }
      y && gr(this);
    },
    get: fn,
    aliases: Fr,
    getSetter: function (t, e, r) {
      var n = Fr[e];
      return (
        n && n.indexOf(",") < 0 && (e = n),
        e in Ar && e !== Jr && (t._gsap.x || fn(t, "x"))
          ? r && Cr === r
            ? "scale" === e
              ? Gr
              : Wr
            : ((Cr = r || {}), "scale" === e ? Hr : Qr)
          : t.style && !W(t.style[e])
          ? Ur
          : ~e.indexOf("-")
          ? Vr
          : hr(t, e)
      );
    },
    core: { _removeProperty: un, _getMatrix: bn },
  };
(wr.utils.checkPrefix = en),
  (Ln = Ot(
    (Pn = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
      "," +
      (In = "rotation,rotationX,rotationY,skewX,skewY") +
      ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
    function (t) {
      Ar[t] = 1;
    }
  )),
  Ot(In, function (t) {
    (R.units[t] = "deg"), (vn[t] = 1);
  }),
  (Fr[Ln[13]] = Pn + "," + In),
  Ot(
    "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
    function (t) {
      var e = t.split(":");
      Fr[e[1]] = Ln[e[0]];
    }
  ),
  Ot(
    "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
    function (t) {
      R.units[t] = "px";
    }
  ),
  wr.registerPlugin(Rn);
var zn = wr.registerPlugin(Rn) || wr,
  Fn = (zn.core.Tween, {});
Fn = (function () {
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
    x = d(y, g, "word", function (t) {
      return m(t, "word", /\s+/, 0, 1);
    }),
    b = "chars",
    w = d(b, [y], "char", function (t, e, r) {
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
      var i = p(t.by || s(r, "splitting") || b),
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
        ((e.image = e.image || s(t, "image") || t.currentSrc || t.src), e.image)
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
  return _(x), _(w), _(k), _(C), _(E), _(A), _(S), _(I), _(L), _(R), _(z), T;
})();
var Yn,
  Bn,
  qn = {};
/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */ (Yn = "undefined" != typeof window ? window : qn),
  (Bn = function (t, e) {
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
        (this.images = []), this.elements.forEach(this.addElementImages, this);
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
  qn ? (qn = Bn(Yn, i("4hJWI"))) : (Yn.imagesLoaded = Bn(Yn, Yn.EvEmitter));
const Xn = (t, e, r) => (1 - r) * t + r * e,
  Nn = (t) => ({ x: t.clientX, y: t.clientY });
function jn(t, e, r) {
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
let Un = { x: 0, y: 0 };
window.addEventListener("mousemove", (t) => (Un = Nn(t)));
class Vn {
  constructor(t) {
    jn(this, "DOM", {
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
function Wn(t, e) {
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
 */ var Gn,
  Hn,
  Qn,
  $n,
  Jn,
  Zn,
  Kn,
  ti,
  ei,
  ri,
  ni,
  ii,
  si = function () {
    return (
      Gn ||
      ("undefined" != typeof window &&
        (Gn = window.gsap) &&
        Gn.registerPlugin &&
        Gn)
    );
  },
  oi = 1,
  ai = [],
  ui = [],
  hi = [],
  li = Date.now,
  ci = function (t, e) {
    return e;
  },
  fi = function (t) {
    return !!~ri.indexOf(t);
  },
  di = function (t, e, r, n, i) {
    return t.addEventListener(e, r, { passive: !n, capture: !!i });
  },
  pi = function (t, e, r, n) {
    return t.removeEventListener(e, r, !!n);
  },
  _i = function () {
    return (ni && ni.isPressed) || ui.cache++;
  },
  mi = function (t, e) {
    var r = function r(n) {
      if (n || 0 === n) {
        oi && (Qn.history.scrollRestoration = "manual");
        var i = ni && ni.isPressed;
        (n = r.v = Math.round(n) || (ni && ni.iOS ? 1 : 0)),
          t(n),
          (r.cacheID = ui.cache),
          i && ci("ss", n);
      } else
        (e || ui.cache !== r.cacheID || ci("ref")) &&
          ((r.cacheID = ui.cache), (r.v = t()));
      return r.v + r.offset;
    };
    return (r.offset = 0), t && r;
  },
  gi = {
    s: "scrollLeft",
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: mi(function (t) {
      return arguments.length
        ? Qn.scrollTo(t, vi.sc())
        : Qn.pageXOffset ||
            $n.scrollLeft ||
            Jn.scrollLeft ||
            Zn.scrollLeft ||
            0;
    }),
  },
  vi = {
    s: "scrollTop",
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: gi,
    sc: mi(function (t) {
      return arguments.length
        ? Qn.scrollTo(gi.sc(), t)
        : Qn.pageYOffset || $n.scrollTop || Jn.scrollTop || Zn.scrollTop || 0;
    }),
  },
  yi = function (t, e) {
    var r = e.s,
      n = e.sc,
      i = ui.indexOf(t),
      s = n === vi.sc ? 1 : 2;
    return (
      !~i && (i = ui.push(t) - 1),
      ui[i + s] ||
        (ui[i + s] =
          mi(
            (function (t, e) {
              return ~hi.indexOf(t) && hi[hi.indexOf(t) + 1][e];
            })(t, r),
            !0
          ) ||
          (fi(t)
            ? n
            : mi(function (e) {
                return arguments.length ? (t[r] = e) : t[r];
              })))
    );
  },
  xi = function (t, e, r) {
    var n = t,
      i = t,
      s = li(),
      o = s,
      a = e || 50,
      u = Math.max(500, 3 * a),
      h = function (t, e) {
        var u = li();
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
          l = li();
        return (
          (t || 0 === t) && t !== n && h(t),
          s === o || l - o > u
            ? 0
            : ((n + (r ? a : -a)) / ((r ? l : s) - e)) * 1e3
        );
      },
    };
  },
  bi = function (t, e) {
    return (
      e && !t._gsapAllow && t.preventDefault(),
      t.changedTouches ? t.changedTouches[0] : t
    );
  },
  wi = function (t) {
    var e = Math.max.apply(Math, t),
      r = Math.min.apply(Math, t);
    return Math.abs(e) >= Math.abs(r) ? e : r;
  },
  Ti = function () {
    var t, e, r, n;
    (ei = Gn.core.globals().ScrollTrigger) &&
      ei.core &&
      ((t = ei.core),
      (e = t.bridge || {}),
      (r = t._scrollers),
      (n = t._proxies),
      r.push.apply(r, ui),
      n.push.apply(n, hi),
      (ui = r),
      (hi = n),
      (ci = function (t, r) {
        return e[t](r);
      }));
  },
  Oi = function (t) {
    return (
      (Gn = t || si()) &&
        "undefined" != typeof document &&
        document.body &&
        ((Qn = window),
        ($n = document),
        (Jn = $n.documentElement),
        (Zn = $n.body),
        (ri = [Qn, $n, Jn, Zn]),
        Gn.utils.clamp,
        (ti = "onpointerenter" in Zn ? "pointer" : "mouse"),
        (Kn = Mi.isTouch =
          Qn.matchMedia &&
          Qn.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in Qn ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (ii = Mi.eventTypes =
          (
            "ontouchstart" in Jn
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in Jn
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (oi = 0);
        }, 500),
        Ti(),
        (Hn = 1)),
      Hn
    );
  };
(gi.op = vi), (ui.cache = 0);
var Mi = (function () {
  function t(t) {
    this.init(t);
  }
  var e, r, n;
  return (
    (t.prototype.init = function (t) {
      Hn || Oi(Gn) || console.warn("Please gsap.registerPlugin(Observer)"),
        ei || Ti();
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
        x = t.onLeft,
        b = t.onUp,
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
          Gn.utils.toArray(e)[0] ||
          ("string" == typeof e && !1 !== Gn.config().nullTargetWarn
            ? console.warn("Element not found:", e)
            : null) ||
          Jn))),
        (this.vars = t),
        c && (c = Gn.utils.toArray(c)),
        (r = r || 0),
        (n = n || 0),
        (f = f || 1),
        (B = B || 1),
        (i = i || "wheel,touch,pointer"),
        (a = !1 !== a),
        o || (o = parseFloat(Qn.getComputedStyle(Zn).lineHeight) || 22);
      var U,
        V,
        W,
        G,
        H,
        Q,
        $,
        J = this,
        Z = 0,
        K = 0,
        tt = yi(s, gi),
        et = yi(s, vi),
        rt = tt(),
        nt = et(),
        it =
          ~i.indexOf("touch") &&
          !~i.indexOf("pointer") &&
          "pointerdown" === ii[0],
        st = fi(s),
        ot = s.ownerDocument || $n,
        at = [0, 0, 0],
        ut = [0, 0, 0],
        ht = 0,
        lt = function () {
          return (ht = li());
        },
        ct = function (t, e) {
          return (
            ((J.event = t) && c && ~c.indexOf(t.target)) ||
            (e && it && "touch" !== t.pointerType) ||
            (S && S(t, e))
          );
        },
        ft = function () {
          var t = (J.deltaX = wi(at)),
            e = (J.deltaY = wi(ut)),
            n = Math.abs(t) >= r,
            i = Math.abs(e) >= r;
          M && (n || i) && M(J, t, e, at, ut),
            n &&
              (y && J.deltaX > 0 && y(J),
              x && J.deltaX < 0 && x(J),
              T && T(J),
              D && J.deltaX < 0 != Z < 0 && D(J),
              (Z = J.deltaX),
              (at[0] = at[1] = at[2] = 0)),
            i &&
              (w && J.deltaY > 0 && w(J),
              b && J.deltaY < 0 && b(J),
              O && O(J),
              k && J.deltaY < 0 != K < 0 && k(J),
              (K = J.deltaY),
              (ut[0] = ut[1] = ut[2] = 0)),
            (G || W) &&
              (A && A(J), j && Q && j(J), W && (m(J), (W = !1)), (G = Q = !1)),
            H && (R(J), (H = !1)),
            (U = 0);
        },
        dt = function (t, e, r) {
          (at[r] += t),
            (ut[r] += e),
            J._vx.update(t),
            J._vy.update(e),
            a ? U || (U = requestAnimationFrame(ft)) : ft();
        },
        pt = function (t, e) {
          "y" !== $ && ((at[2] += t), J._vx.update(t, !0)),
            "x" !== $ && ((ut[2] += e), J._vy.update(e, !0)),
            N &&
              !$ &&
              ((J.axis = $ = Math.abs(t) > Math.abs(e) ? "x" : "y"), (Q = !0)),
            a ? U || (U = requestAnimationFrame(ft)) : ft();
        },
        _t = function (t) {
          if (!ct(t, 1)) {
            var e = (t = bi(t, u)).clientX,
              r = t.clientY,
              i = e - J.x,
              s = r - J.y,
              o = J.isDragging;
            (J.x = e),
              (J.y = r),
              (o ||
                Math.abs(J.startX - e) >= n ||
                Math.abs(J.startY - r) >= n) &&
                (m && (W = !0),
                o || (J.isDragging = !0),
                pt(i, s),
                o || (p && p(J)));
          }
        },
        mt = (J.onPress = function (t) {
          ct(t, 1) ||
            ((J.axis = $ = null),
            V.pause(),
            (J.isPressed = !0),
            (t = bi(t)),
            (Z = K = 0),
            (J.startX = J.x = t.clientX),
            (J.startY = J.y = t.clientY),
            J._vx.reset(),
            J._vy.reset(),
            di(P ? s : ot, ii[1], _t, u, !0),
            (J.deltaX = J.deltaY = 0),
            g && g(J));
        }),
        gt = function (t) {
          if (!ct(t, 1)) {
            pi(P ? s : ot, ii[1], _t, !0);
            var e =
                J.isDragging &&
                (Math.abs(J.x - J.startX) > 3 || Math.abs(J.y - J.startY) > 3),
              r = bi(t);
            e ||
              (J._vx.reset(),
              J._vy.reset(),
              u &&
                X &&
                Gn.delayedCall(0.08, function () {
                  if (li() - ht > 300 && !t.defaultPrevented)
                    if (t.target.click) t.target.click();
                    else if (ot.createEvent) {
                      var e = ot.createEvent("MouseEvents");
                      e.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        Qn,
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
              (J.isDragging = J.isGesturing = J.isPressed = !1),
              h && !P && V.restart(!0),
              _ && e && _(J),
              v && v(J, e);
          }
        },
        vt = function (t) {
          return (
            t.touches &&
            t.touches.length > 1 &&
            (J.isGesturing = !0) &&
            I(t, J.isDragging)
          );
        },
        yt = function () {
          return (J.isGesturing = !1), L(J);
        },
        xt = function (t) {
          if (!ct(t)) {
            var e = tt(),
              r = et();
            dt((e - rt) * B, (r - nt) * B, 1),
              (rt = e),
              (nt = r),
              h && V.restart(!0);
          }
        },
        bt = function (t) {
          if (!ct(t)) {
            (t = bi(t, u)), R && (H = !0);
            var e =
              (1 === t.deltaMode ? o : 2 === t.deltaMode ? Qn.innerHeight : 1) *
              f;
            dt(t.deltaX * e, t.deltaY * e, 0), h && !P && V.restart(!0);
          }
        },
        wt = function (t) {
          if (!ct(t)) {
            var e = t.clientX,
              r = t.clientY,
              n = e - J.x,
              i = r - J.y;
            (J.x = e), (J.y = r), (G = !0), (n || i) && pt(n, i);
          }
        },
        Tt = function (t) {
          (J.event = t), C(J);
        },
        Ot = function (t) {
          (J.event = t), E(J);
        },
        Mt = function (t) {
          return ct(t) || (bi(t, u) && Y(J));
        };
      (V = J._dc =
        Gn.delayedCall(l || 0.25, function () {
          J._vx.reset(), J._vy.reset(), V.pause(), h && h(J);
        }).pause()),
        (J.deltaX = J.deltaY = 0),
        (J._vx = xi(0, 50, !0)),
        (J._vy = xi(0, 50, !0)),
        (J.scrollX = tt),
        (J.scrollY = et),
        (J.isDragging = J.isGesturing = J.isPressed = !1),
        (J.enable = function (t) {
          return (
            J.isEnabled ||
              (di(st ? ot : s, "scroll", _i),
              i.indexOf("scroll") >= 0 && di(st ? ot : s, "scroll", xt, u, q),
              i.indexOf("wheel") >= 0 && di(s, "wheel", bt, u, q),
              ((i.indexOf("touch") >= 0 && Kn) || i.indexOf("pointer") >= 0) &&
                (di(s, ii[0], mt, u, q),
                di(ot, ii[2], gt),
                di(ot, ii[3], gt),
                X && di(s, "click", lt, !1, !0),
                Y && di(s, "click", Mt),
                I && di(ot, "gesturestart", vt),
                L && di(ot, "gestureend", yt),
                C && di(s, ti + "enter", Tt),
                E && di(s, ti + "leave", Ot),
                A && di(s, ti + "move", wt)),
              (J.isEnabled = !0),
              t && t.type && mt(t),
              z && z(J)),
            J
          );
        }),
        (J.disable = function () {
          J.isEnabled &&
            (ai.filter(function (t) {
              return t !== J && fi(t.target);
            }).length || pi(st ? ot : s, "scroll", _i),
            J.isPressed &&
              (J._vx.reset(), J._vy.reset(), pi(P ? s : ot, ii[1], _t, !0)),
            pi(st ? ot : s, "scroll", xt, q),
            pi(s, "wheel", bt, q),
            pi(s, ii[0], mt, q),
            pi(ot, ii[2], gt),
            pi(ot, ii[3], gt),
            pi(s, "click", lt, !0),
            pi(s, "click", Mt),
            pi(ot, "gesturestart", vt),
            pi(ot, "gestureend", yt),
            pi(s, ti + "enter", Tt),
            pi(s, ti + "leave", Ot),
            pi(s, ti + "move", wt),
            (J.isEnabled = J.isPressed = J.isDragging = !1),
            F && F(J));
        }),
        (J.kill = function () {
          J.disable();
          var t = ai.indexOf(J);
          t >= 0 && ai.splice(t, 1), ni === J && (ni = 0);
        }),
        ai.push(J),
        P && fi(s) && (ni = J),
        J.enable(d);
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
    ]) && Wn(e.prototype, r),
    n && Wn(e, n),
    t
  );
})();
(Mi.version = "3.10.4"),
  (Mi.create = function (t) {
    return new Mi(t);
  }),
  (Mi.register = Oi),
  (Mi.getAll = function () {
    return ai.slice();
  }),
  (Mi.getById = function (t) {
    return ai.filter(function (e) {
      return e.vars.id === t;
    })[0];
  }),
  si() && Gn.registerPlugin(Mi),
  zn.registerPlugin(Mi),
  t(Fn)();
const Di = {
  slides: [...document.querySelectorAll(".slide")],
  cursor: document.querySelector(".cursor"),
  backCtrl: document.querySelector(".frame__back"),
  navigationItems: document.querySelectorAll(
    ".frame__nav > .frame__nav-button"
  ),
};
(Di.cursorChars = Di.cursor.querySelectorAll(".word > .char, .whitespace")),
  (Di.backChars = Di.backCtrl.querySelectorAll(".word > .char, .whitespace"));
const ki = Di.slides.length;
let Ci = [];
Di.slides.forEach((t) => {
  Ci.push(new Vn(t));
});
let Ei = -1,
  Ai = !1;
const Si = (t) => {
    (Ai = !0),
      Di.navigationItems[Ei].classList.remove("frame__nav-button--current"),
      Di.navigationItems[t].classList.add("frame__nav-button--current");
    const e =
        Ei < t
          ? 0 === Ei && t === ki - 1
            ? "prev"
            : "next"
          : Ei === ki - 1 && 0 === t
          ? "next"
          : "prev",
      r = Ci[Ei];
    Ei = t;
    const n = Ci[Ei];
    zn.timeline({
      defaults: { duration: 1.6, ease: "power3.inOut" },
      onComplete: () => {
        r.DOM.el.classList.remove("slide--current"),
          r.isOpen && Li(r),
          (Ai = !1);
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
        r.isOpen && Pi();
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
  Pi = (t) =>
    zn
      .timeline({
        onStart: () => {
          zn.set(Di.backChars, { opacity: t ? 0 : 1 }),
            t && Di.backCtrl.classList.add("frame__back--show");
        },
        onComplete: () => {
          Di.backCtrl.classList[t ? "add" : "remove"]("frame__back--show"),
            t || Di.backCtrl.classList.remove("frame__back--show");
        },
      })
      .to(Di.cursorChars, {
        duration: 0.1,
        ease: "expo",
        opacity: t ? 0 : 1,
        stagger: { amount: 0.5, grid: "auto", from: "random" },
      })
      .to(
        Di.backChars,
        {
          duration: 0.1,
          ease: "expo",
          opacity: t ? 1 : 0,
          stagger: { amount: 0.5, grid: "auto", from: "random" },
        },
        0
      ),
  Ii = (t) => {
    if (Ai) return;
    Ai = !0;
    const e = Ci[t];
    (e.isOpen = !0),
      zn
        .timeline({
          defaults: { duration: 1.6, ease: "power3.inOut" },
          onStart: () => {},
          onComplete: () => {
            Ai = !1;
          },
        })
        .addLabel("start", 0)
        .add(() => {
          Pi("content");
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
  Li = (t, e = !1) => {
    Ai = !0;
    const r = () => {
      (t.isOpen = !1), (Ai = !1);
    };
    e
      ? zn
          .timeline({
            defaults: { duration: 1.6, ease: "power3.inOut" },
            onComplete: r,
          })
          .addLabel("start", 0)
          .to(t.DOM.img, { yPercent: 0 }, "start")
          .to(t.DOM.imgInner, { yPercent: 0, scaleY: 1 }, "start")
      : (zn.set(t.DOM.img, { yPercent: 0 }),
        zn.set(t.DOM.imgInner, { yPercent: 0, scaleY: 1 }),
        r());
  };
var Ri;
(Ri = 0),
  -1 !== Ei && Ci[Ei].DOM.el.classList.remove("slide--current"),
  (Ei = Ri),
  Ci[Ei].DOM.el.classList.add("slide--current"),
  Di.navigationItems[Ei].classList.add("frame__nav-button--current"),
  new (class {
    render() {
      (this.renderedStyles.tx.current = Un.x + 20),
        (this.renderedStyles.ty.current = Un.y - this.bounds.height / 2);
      for (const t in this.renderedStyles)
        this.renderedStyles[t].previous = Xn(
          this.renderedStyles[t].previous,
          this.renderedStyles[t].current,
          this.renderedStyles[t].amt
        );
      (this.DOM.el.style.transform = `translateX(${this.renderedStyles.tx.previous}px) translateY(${this.renderedStyles.ty.previous}px)`),
        requestAnimationFrame(() => this.render());
    }
    constructor(t) {
      jn(this, "DOM", { el: null, text: null }),
        jn(this, "renderedStyles", {
          tx: { previous: 0, current: 0, amt: 0.15 },
          ty: { previous: 0, current: 0, amt: 0.15 },
        }),
        jn(this, "bounds", void 0),
        (this.DOM.el = t),
        (this.DOM.text = this.DOM.el.querySelector(".cursor__text")),
        (this.DOM.el.style.opacity = 0),
        (this.bounds = this.DOM.el.getBoundingClientRect());
      for (const t in this.renderedStyles)
        this.renderedStyles[t].amt =
          this.DOM.el.dataset.amt || this.renderedStyles[t].amt;
      const e = () => {
        (this.renderedStyles.tx.previous = this.renderedStyles.tx.current =
          Un.x + 20),
          (this.renderedStyles.ty.previous = this.renderedStyles.ty.previous =
            Un.y - this.bounds.height / 2),
          (this.DOM.el.style.opacity = 1),
          requestAnimationFrame(() => this.render()),
          window.removeEventListener("mousemove", e);
      };
      window.addEventListener("mousemove", e);
    }
  })(Di.cursor),
  (() => {
    [...Di.navigationItems].forEach((t, e) => {
      t.addEventListener("click", () => {
        Ei === e || Ai || Si(e);
      });
    }),
      Di.backCtrl.addEventListener("click", () => {
        Ai || ((Ai = !0), Pi(), Li(Ci[Ei], !0));
      }),
      Mi.create({
        type: "wheel,touch,pointer",
        onDown: () => !Ai && void Si(Ei > 0 ? Ei - 1 : ki - 1),
        onUp: () => !Ai && void Si(Ei < ki - 1 ? Ei + 1 : 0),
        wheelSpeed: -1,
        tolerance: 10,
      });
    for (const [t, e] of Ci.entries())
      e.DOM.img.addEventListener("click", () => {
        Ii(t);
      });
  })(),
  ((t = "img") =>
    new Promise((e) => {
      qn(document.querySelectorAll(t), { background: !0 }, e);
    }))(".slide__img-inner").then((t) => {
    document.body.classList.remove("loading");
  });
