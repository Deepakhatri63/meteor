"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [434],
  {
    6431: function (t, e, n) {
      var r,
        i,
        o,
        a = n(3454);
      Object.defineProperty(e, "__esModule", { value: !0 });
      var s = n(655),
        u = n(7294),
        l = n(4394),
        c = n(9722),
        d = n(9294),
        f = n(4839),
        p = n(497);
      function v(t) {
        return t && "object" == typeof t && "default" in t ? t : { default: t };
      }
      var h = (function (t) {
          if (t && t.__esModule) return t;
          var e = Object.create(null);
          return (
            t &&
              Object.keys(t).forEach(function (n) {
                if ("default" !== n) {
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  Object.defineProperty(
                    e,
                    n,
                    r.get
                      ? r
                      : {
                          enumerable: !0,
                          get: function () {
                            return t[n];
                          },
                        }
                  );
                }
              }),
            (e.default = t),
            Object.freeze(e)
          );
        })(u),
        m = v(u),
        g = v(f),
        y = (void 0 === a || a.env, "production"),
        x = function (t) {
          return {
            isEnabled: function (e) {
              return t.some(function (t) {
                return !!e[t];
              });
            },
          };
        },
        _ = {
          measureLayout: x(["layout", "layoutId", "drag"]),
          animation: x([
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
            "whileInView",
          ]),
          exit: x(["exit"]),
          drag: x(["drag", "dragControls"]),
          focus: x(["whileFocus"]),
          hover: x(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: x(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: x(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: x(["whileInView", "onViewportEnter", "onViewportLeave"]),
        };
      function E(t) {
        for (var e in t)
          null !== t[e] &&
            ("projectionNodeConstructor" === e
              ? (_.projectionNodeConstructor = t[e])
              : (_[e].Component = t[e]));
      }
      var A = u.createContext({ strict: !1 }),
        S = Object.keys(_),
        b = S.length,
        w = u.createContext({
          transformPagePoint: function (t) {
            return t;
          },
          isStatic: !1,
          reducedMotion: "never",
        }),
        P = u.createContext({});
      function T() {
        return u.useContext(P).visualElement;
      }
      var V = u.createContext(null),
        C = "undefined" != typeof document,
        R = C ? u.useLayoutEffect : u.useEffect,
        L = { current: null },
        k = !1;
      function D() {
        return (
          k ||
            (function () {
              if (((k = !0), C)) {
                if (window.matchMedia) {
                  var t = window.matchMedia("(prefers-reduced-motion)"),
                    e = function () {
                      return (L.current = t.matches);
                    };
                  t.addListener(e), e();
                } else L.current = !1;
              }
            })(),
          s.__read(u.useState(L.current), 1)[0]
        );
      }
      function M() {
        var t = D(),
          e = u.useContext(w).reducedMotion;
        return "never" !== e && ("always" === e || t);
      }
      function I(t) {
        return (
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function O(t) {
        return Array.isArray(t);
      }
      function F(t) {
        return "string" == typeof t || O(t);
      }
      function j(t, e, n, r, i) {
        var o;
        return (
          void 0 === r && (r = {}),
          void 0 === i && (i = {}),
          "function" == typeof e && (e = e(null != n ? n : t.custom, r, i)),
          "string" == typeof e &&
            (e = null === (o = t.variants) || void 0 === o ? void 0 : o[e]),
          "function" == typeof e && (e = e(null != n ? n : t.custom, r, i)),
          e
        );
      }
      function B(t, e, n) {
        var r,
          i,
          o = t.getProps();
        return j(
          o,
          e,
          null != n ? n : o.custom,
          ((r = {}),
          t.forEachValue(function (t, e) {
            return (r[e] = t.get());
          }),
          r),
          ((i = {}),
          t.forEachValue(function (t, e) {
            return (i[e] = t.getVelocity());
          }),
          i)
        );
      }
      function U(t) {
        var e;
        return (
          "function" ==
            typeof (null === (e = t.animate) || void 0 === e
              ? void 0
              : e.start) ||
          F(t.initial) ||
          F(t.animate) ||
          F(t.whileHover) ||
          F(t.whileDrag) ||
          F(t.whileTap) ||
          F(t.whileFocus) ||
          F(t.exit)
        );
      }
      function N(t) {
        return Boolean(U(t) || t.variants);
      }
      function z(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      function Y(t) {
        var e = u.useRef(null);
        return null === e.current && (e.current = t()), e.current;
      }
      var X = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
        H = 1,
        W = u.createContext({}),
        G = u.createContext({}),
        Z = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            s.__extends(e, t),
            (e.prototype.getSnapshotBeforeUpdate = function () {
              return this.updateProps(), null;
            }),
            (e.prototype.componentDidUpdate = function () {}),
            (e.prototype.updateProps = function () {
              var t = this.props,
                e = t.visualElement,
                n = t.props;
              e && e.setProps(n);
            }),
            (e.prototype.render = function () {
              return this.props.children;
            }),
            e
          );
        })(m.default.Component);
      function K(t) {
        var e = t.preloadedFeatures,
          n = t.createVisualElement,
          r = t.projectionNodeConstructor,
          i = t.useRender,
          o = t.useVisualState,
          a = t.Component;
        return (
          e && E(e),
          u.forwardRef(function (t, c) {
            var d,
              f,
              p,
              v,
              m,
              g,
              x,
              E,
              L,
              k,
              D,
              O,
              j,
              B,
              N,
              K,
              $,
              q,
              J,
              Q,
              tt,
              te,
              tn,
              tr,
              ti,
              to,
              ta =
                ((O = t.layoutId),
                (j =
                  null === (D = u.useContext(W)) || void 0 === D
                    ? void 0
                    : D.id) && void 0 !== O
                  ? j + "-" + O
                  : O);
            t = s.__assign(s.__assign({}, t), { layoutId: ta });
            var ts = u.useContext(w),
              tu = null,
              tl =
                ((N = (B = (function (t, e) {
                  if (U(t)) {
                    var n = t.initial,
                      r = t.animate;
                    return {
                      initial: !1 === n || F(n) ? n : void 0,
                      animate: F(r) ? r : void 0,
                    };
                  }
                  return !1 !== t.inherit ? e : {};
                })(t, u.useContext(P))).initial),
                (K = B.animate),
                u.useMemo(
                  function () {
                    return { initial: N, animate: K };
                  },
                  [z(N), z(K)]
                )),
              tc = ts.isStatic
                ? void 0
                : Y(function () {
                    if (X.hasEverUpdated) return H++;
                  }),
              td = o(t, ts.isStatic);
            return (
              !ts.isStatic &&
                C &&
                ((tl.visualElement =
                  (($ = s.__assign(s.__assign({}, ts), t)),
                  (q = n),
                  (J = u.useContext(A)),
                  (Q = T()),
                  (tt = u.useContext(V)),
                  (te = M()),
                  (tn = u.useRef(void 0)),
                  q || (q = J.renderer),
                  !tn.current &&
                    q &&
                    (tn.current = q(a, {
                      visualState: td,
                      parent: Q,
                      props: $,
                      presenceId: null == tt ? void 0 : tt.id,
                      blockInitialAnimation:
                        (null == tt ? void 0 : tt.initial) === !1,
                      shouldReduceMotion: te,
                    })),
                  (tr = tn.current),
                  R(function () {
                    null == tr || tr.syncRender();
                  }),
                  u.useEffect(function () {
                    var t;
                    null === (t = null == tr ? void 0 : tr.animationState) ||
                      void 0 === t ||
                      t.animateChanges();
                  }),
                  R(function () {
                    return function () {
                      return null == tr ? void 0 : tr.notifyUnmount();
                    };
                  }, []),
                  tr)),
                (d = t),
                (f = tl.visualElement),
                (p = r || _.projectionNodeConstructor),
                (m = d.layoutId),
                (g = d.layout),
                (x = d.drag),
                (E = d.dragConstraints),
                (L = d.layoutScroll),
                (k = u.useContext(G)),
                !p ||
                  !f ||
                  (null == f ? void 0 : f.projection) ||
                  ((f.projection = new p(
                    tc,
                    f.getLatestValues(),
                    null === (v = f.parent) || void 0 === v
                      ? void 0
                      : v.projection
                  )),
                  f.projection.setOptions({
                    layoutId: m,
                    layout: g,
                    alwaysMeasureLayout: Boolean(x) || (E && I(E)),
                    visualElement: f,
                    scheduleRender: function () {
                      return f.scheduleRender();
                    },
                    animationType: "string" == typeof g ? g : "both",
                    initialPromotionConfig: k,
                    layoutScroll: L,
                  })),
                (tu = (function (t, e, n) {
                  var r = [],
                    i = u.useContext(A);
                  if (!e) return null;
                  "production" !== y &&
                    n &&
                    i.strict &&
                    l.invariant(
                      !1,
                      "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead."
                    );
                  for (var o = 0; o < b; o++) {
                    var a = S[o],
                      c = _[a],
                      d = c.isEnabled,
                      f = c.Component;
                    d(t) &&
                      f &&
                      r.push(
                        h.createElement(
                          f,
                          s.__assign({ key: a }, t, { visualElement: e })
                        )
                      );
                  }
                  return r;
                })(t, tl.visualElement, e))),
              h.createElement(
                Z,
                {
                  visualElement: tl.visualElement,
                  props: s.__assign(s.__assign({}, ts), t),
                },
                tu,
                h.createElement(
                  P.Provider,
                  { value: tl },
                  i(
                    a,
                    t,
                    tc,
                    ((ti = tl.visualElement),
                    (to = c),
                    u.useCallback(
                      function (t) {
                        var e;
                        t &&
                          (null === (e = td.mount) ||
                            void 0 === e ||
                            e.call(td, t)),
                          ti && (t ? ti.mount(t) : ti.unmount()),
                          to &&
                            ("function" == typeof to
                              ? to(t)
                              : I(to) && (to.current = t));
                      },
                      [ti]
                    )),
                    td,
                    ts.isStatic,
                    tl.visualElement
                  )
                )
              )
            );
          })
        );
      }
      function $(t) {
        function e(e, n) {
          return void 0 === n && (n = {}), K(t(e, n));
        }
        if ("undefined" == typeof Proxy) return e;
        var n = new Map();
        return new Proxy(e, {
          get: function (t, r) {
            return n.has(r) || n.set(r, e(r)), n.get(r);
          },
        });
      }
      var q = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "svg",
        "switch",
        "symbol",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function J(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (q.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
        return !1;
      }
      var Q = {};
      function tt(t) {
        Object.assign(Q, t);
      }
      var te = ["", "X", "Y", "Z"],
        tn = ["transformPerspective", "x", "y", "z"];
      function tr(t, e) {
        return tn.indexOf(t) - tn.indexOf(e);
      }
      ["translate", "scale", "rotate", "skew"].forEach(function (t) {
        return te.forEach(function (e) {
          return tn.push(t + e);
        });
      });
      var ti = new Set(tn);
      function to(t) {
        return ti.has(t);
      }
      var ta = new Set(["originX", "originY", "originZ"]);
      function ts(t, e) {
        var n = e.layout,
          r = e.layoutId;
        return (
          to(t) ||
          ta.has(t) ||
          ((n || void 0 !== r) && (!!Q[t] || "opacity" === t))
        );
      }
      var tu = function (t) {
          return Boolean(null !== t && "object" == typeof t && t.getVelocity);
        },
        tl = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        };
      function tc(t) {
        return t.startsWith("--");
      }
      var td = s.__assign(s.__assign({}, c.number), { transform: Math.round }),
        tf = {
          borderWidth: c.px,
          borderTopWidth: c.px,
          borderRightWidth: c.px,
          borderBottomWidth: c.px,
          borderLeftWidth: c.px,
          borderRadius: c.px,
          radius: c.px,
          borderTopLeftRadius: c.px,
          borderTopRightRadius: c.px,
          borderBottomRightRadius: c.px,
          borderBottomLeftRadius: c.px,
          width: c.px,
          maxWidth: c.px,
          height: c.px,
          maxHeight: c.px,
          size: c.px,
          top: c.px,
          right: c.px,
          bottom: c.px,
          left: c.px,
          padding: c.px,
          paddingTop: c.px,
          paddingRight: c.px,
          paddingBottom: c.px,
          paddingLeft: c.px,
          margin: c.px,
          marginTop: c.px,
          marginRight: c.px,
          marginBottom: c.px,
          marginLeft: c.px,
          rotate: c.degrees,
          rotateX: c.degrees,
          rotateY: c.degrees,
          rotateZ: c.degrees,
          scale: c.scale,
          scaleX: c.scale,
          scaleY: c.scale,
          scaleZ: c.scale,
          skew: c.degrees,
          skewX: c.degrees,
          skewY: c.degrees,
          distance: c.px,
          translateX: c.px,
          translateY: c.px,
          translateZ: c.px,
          x: c.px,
          y: c.px,
          z: c.px,
          perspective: c.px,
          transformPerspective: c.px,
          opacity: c.alpha,
          originX: c.progressPercentage,
          originY: c.progressPercentage,
          originZ: c.px,
          zIndex: td,
          fillOpacity: c.alpha,
          strokeOpacity: c.alpha,
          numOctaves: td,
        };
      function tp(t, e, n, r) {
        var i,
          o,
          a,
          s,
          u = t.style,
          l = t.vars,
          c = t.transform,
          d = t.transformKeys,
          f = t.transformOrigin;
        d.length = 0;
        var p = !1,
          v = !1,
          h = !0;
        for (var m in e) {
          var g,
            y = e[m];
          if (tc(m)) {
            l[m] = y;
            continue;
          }
          var x = tf[m],
            _ = x && "number" == typeof y ? x.transform(y) : y;
          if (to(m)) {
            if (((p = !0), (c[m] = _), d.push(m), !h)) continue;
            y !== (null !== (s = x.default) && void 0 !== s ? s : 0) &&
              (h = !1);
          } else ((g = m), ta.has(g)) ? ((f[m] = _), (v = !0)) : (u[m] = _);
        }
        p
          ? (u.transform = (function (t, e, n, r) {
              var i = t.transform,
                o = t.transformKeys,
                a = e.enableHardwareAcceleration,
                s = e.allowTransformNone,
                u = "";
              o.sort(tr);
              for (var l = !1, c = o.length, d = 0; d < c; d++) {
                var f = o[d];
                (u += "".concat(tl[f] || f, "(").concat(i[f], ") ")),
                  "z" === f && (l = !0);
              }
              return (
                !l && (void 0 === a || a)
                  ? (u += "translateZ(0)")
                  : (u = u.trim()),
                r
                  ? (u = r(i, n ? "" : u))
                  : (void 0 === s || s) && n && (u = "none"),
                u
              );
            })(t, n, h, r))
          : r
          ? (u.transform = r({}, ""))
          : !e.transform && u.transform && (u.transform = "none"),
          v &&
            (u.transformOrigin =
              ((i = f.originX),
              (o = f.originY),
              (a = f.originZ),
              ""
                .concat(void 0 === i ? "50%" : i, " ")
                .concat(void 0 === o ? "50%" : o, " ")
                .concat(void 0 === a ? 0 : a)));
      }
      var tv = function () {
        return {
          style: {},
          transform: {},
          transformKeys: [],
          transformOrigin: {},
          vars: {},
        };
      };
      function th(t, e, n) {
        for (var r in e) tu(e[r]) || ts(r, n) || (t[r] = e[r]);
      }
      function tm(t, e, n) {
        var r,
          i,
          o = {},
          a =
            (th((r = {}), t.style || {}, t),
            Object.assign(
              r,
              ((i = t.transformTemplate),
              u.useMemo(
                function () {
                  var t = tv();
                  tp(t, e, { enableHardwareAcceleration: !n }, i);
                  var r = t.vars,
                    o = t.style;
                  return s.__assign(s.__assign({}, r), o);
                },
                [e]
              ))
            ),
            t.transformValues && (r = t.transformValues(r)),
            r);
        return (
          Boolean(t.drag) &&
            !1 !== t.dragListener &&
            ((o.draggable = !1),
            (a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none"),
            (a.touchAction =
              !0 === t.drag
                ? "none"
                : "pan-".concat("x" === t.drag ? "y" : "x"))),
          (o.style = a),
          o
        );
      }
      var tg = new Set([
        "initial",
        "animate",
        "exit",
        "style",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "layout",
        "layoutId",
        "layoutDependency",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "drag",
        "dragControls",
        "dragListener",
        "dragConstraints",
        "dragDirectionLock",
        "dragSnapToOrigin",
        "_dragX",
        "_dragY",
        "dragElastic",
        "dragMomentum",
        "dragPropagation",
        "dragTransition",
        "whileDrag",
        "onPan",
        "onPanStart",
        "onPanEnd",
        "onPanSessionStart",
        "onTap",
        "onTapStart",
        "onTapCancel",
        "onHoverStart",
        "onHoverEnd",
        "whileFocus",
        "whileTap",
        "whileHover",
        "whileInView",
        "onViewportEnter",
        "onViewportLeave",
        "viewport",
        "layoutScroll",
      ]);
      function ty(t) {
        return tg.has(t);
      }
      var tx = function (t) {
        return !ty(t);
      };
      function t_(t) {
        t &&
          (tx = function (e) {
            return e.startsWith("on") ? !ty(e) : t(e);
          });
      }
      try {
        t_(n(8208).Z);
      } catch (tE) {}
      function tA(t, e, n) {
        var r = {};
        for (var i in t)
          (tx(i) ||
            (!0 === n && ty(i)) ||
            (!e && !ty(i)) ||
            (t.draggable && i.startsWith("onDrag"))) &&
            (r[i] = t[i]);
        return r;
      }
      function tS(t, e, n) {
        return "string" == typeof t ? t : c.px.transform(e + n * t);
      }
      var tb = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        tw = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function tP(t, e, n, r) {
        var i,
          o,
          a,
          u,
          l,
          d,
          f,
          p,
          v,
          h = e.attrX,
          m = e.attrY,
          g = e.originX,
          y = e.originY,
          x = e.pathLength,
          _ = e.pathSpacing,
          E = e.pathOffset;
        tp(
          t,
          s.__rest(e, [
            "attrX",
            "attrY",
            "originX",
            "originY",
            "pathLength",
            "pathSpacing",
            "pathOffset",
          ]),
          n,
          r
        ),
          (t.attrs = t.style),
          (t.style = {});
        var A = t.attrs,
          S = t.style,
          b = t.dimensions;
        A.transform && (b && (S.transform = A.transform), delete A.transform),
          b &&
            (void 0 !== g || void 0 !== y || S.transform) &&
            (S.transformOrigin =
              ((i = tS(void 0 !== g ? g : 0.5, b.x, b.width)),
              (o = tS(void 0 !== y ? y : 0.5, b.y, b.height)),
              "".concat(i, " ").concat(o))),
          void 0 !== h && (A.x = h),
          void 0 !== m && (A.y = m),
          void 0 !== x &&
            ((a = A),
            (d = !1),
            void 0 === (u = void 0 === _ ? 1 : _) && (u = 1),
            void 0 === (l = void 0 === E ? 0 : E) && (l = 0),
            void 0 === d && (d = !0),
            (a.pathLength = 1),
            (a[(f = d ? tb : tw).offset] = c.px.transform(-l)),
            (p = c.px.transform(x)),
            (v = c.px.transform(u)),
            (a[f.array] = "".concat(p, " ").concat(v)));
      }
      var tT = function () {
        return s.__assign(s.__assign({}, tv()), { attrs: {} });
      };
      function tV(t, e) {
        var n = u.useMemo(
          function () {
            var n = tT();
            return (
              tP(n, e, { enableHardwareAcceleration: !1 }, t.transformTemplate),
              s.__assign(s.__assign({}, n.attrs), {
                style: s.__assign({}, n.style),
              })
            );
          },
          [e]
        );
        if (t.style) {
          var r = {};
          th(r, t.style, t), (n.style = s.__assign(s.__assign({}, r), n.style));
        }
        return n;
      }
      var tC = /([a-z])([A-Z])/g,
        tR = function (t) {
          return t.replace(tC, "$1-$2").toLowerCase();
        };
      function tL(t, e, n, r) {
        var i = e.style,
          o = e.vars;
        for (var a in (Object.assign(t.style, i, r && r.getProjectionStyles(n)),
        o))
          t.style.setProperty(a, o[a]);
      }
      var tk = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
      ]);
      function tD(t, e, n, r) {
        for (var i in (tL(t, e, void 0, r), e.attrs))
          t.setAttribute(tk.has(i) ? i : tR(i), e.attrs[i]);
      }
      function tM(t) {
        var e = t.style,
          n = {};
        for (var r in e) (tu(e[r]) || ts(r, t)) && (n[r] = e[r]);
        return n;
      }
      function tI(t) {
        var e = tM(t);
        for (var n in t)
          tu(t[n]) &&
            (e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n]);
        return e;
      }
      function tO(t) {
        return "object" == typeof t && "function" == typeof t.start;
      }
      var tF = function (t) {
          return Array.isArray(t);
        },
        tj = function (t) {
          return tF(t) ? t[t.length - 1] || 0 : t;
        };
      function tB(t) {
        var e = tu(t) ? t.get() : t;
        return Boolean(e && "object" == typeof e && e.mix && e.toValue)
          ? e.toValue()
          : e;
      }
      function tU(t, e, n, r) {
        var i = t.scrapeMotionValuesFromProps,
          o = t.createRenderState,
          a = t.onMount,
          u = {
            latestValues: (function (t, e, n, r) {
              var i = {},
                o = (null == n ? void 0 : n.initial) === !1,
                a = r(t);
              for (var u in a) i[u] = tB(a[u]);
              var l = t.initial,
                c = t.animate,
                d = U(t),
                f = N(t);
              e &&
                f &&
                !d &&
                !1 !== t.inherit &&
                (null != l || (l = e.initial), null != c || (c = e.animate));
              var p = o || !1 === l,
                v = p ? c : l;
              return (
                v &&
                  "boolean" != typeof v &&
                  !tO(v) &&
                  (Array.isArray(v) ? v : [v]).forEach(function (e) {
                    var n = j(t, e);
                    if (n) {
                      var r = n.transitionEnd;
                      n.transition;
                      var o = s.__rest(n, ["transitionEnd", "transition"]);
                      for (var a in o) {
                        var u = o[a];
                        if (Array.isArray(u)) {
                          var l = p ? u.length - 1 : 0;
                          u = u[l];
                        }
                        null !== u && (i[a] = u);
                      }
                      for (var a in r) i[a] = r[a];
                    }
                  }),
                i
              );
            })(e, n, r, i),
            renderState: o(),
          };
        return (
          a &&
            (u.mount = function (t) {
              return a(e, t, u);
            }),
          u
        );
      }
      var tN = function (t) {
          return function (e, n) {
            var r = u.useContext(P),
              i = u.useContext(V);
            return n
              ? tU(t, e, r, i)
              : Y(function () {
                  return tU(t, e, r, i);
                });
          };
        },
        tz = {
          useVisualState: tN({
            scrapeMotionValuesFromProps: tI,
            createRenderState: tT,
            onMount: function (t, e, n) {
              var r = n.renderState,
                i = n.latestValues;
              try {
                r.dimensions =
                  "function" == typeof e.getBBox
                    ? e.getBBox()
                    : e.getBoundingClientRect();
              } catch (o) {
                r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              tP(r, i, { enableHardwareAcceleration: !1 }, t.transformTemplate),
                tD(e, r);
            },
          }),
        },
        tY = {
          useVisualState: tN({
            scrapeMotionValuesFromProps: tM,
            createRenderState: tv,
          }),
        };
      function tX(t, e, n, r, i) {
        var o,
          a = e.forwardMotionProps,
          l = J(t) ? tz : tY;
        return s.__assign(s.__assign({}, l), {
          preloadedFeatures: n,
          useRender:
            (void 0 === (o = void 0 !== a && a) && (o = !1),
            function (t, e, n, r, i, a) {
              var l = i.latestValues,
                c = (J(t) ? tV : tm)(e, l, a),
                d = tA(e, "string" == typeof t, o),
                f = s.__assign(s.__assign(s.__assign({}, d), c), { ref: r });
              return n && (f["data-projection-id"] = n), u.createElement(t, f);
            }),
          createVisualElement: r,
          projectionNodeConstructor: i,
          Component: t,
        });
      }
      function tH(t, e, n, r) {
        return (
          void 0 === r && (r = { passive: !0 }),
          t.addEventListener(e, n, r),
          function () {
            return t.removeEventListener(e, n);
          }
        );
      }
      function tW(t, e, n, r) {
        u.useEffect(
          function () {
            var i = t.current;
            if (n && i) return tH(i, e, n, r);
          },
          [t, e, n, r]
        );
      }
      function tG(t) {
        return "undefined" != typeof PointerEvent && t instanceof PointerEvent
          ? !("mouse" !== t.pointerType)
          : t instanceof MouseEvent;
      }
      (e.AnimationType = void 0),
        ((r = e.AnimationType || (e.AnimationType = {})).Animate = "animate"),
        (r.Hover = "whileHover"),
        (r.Tap = "whileTap"),
        (r.Drag = "whileDrag"),
        (r.Focus = "whileFocus"),
        (r.InView = "whileInView"),
        (r.Exit = "exit");
      var tZ = { pageX: 0, pageY: 0 };
      function tK(t, e) {
        var n, r, i;
        return (
          void 0 === e && (e = "page"),
          {
            point: t.touches
              ? (void 0 === (n = e) && (n = "page"),
                {
                  x: (r = t.touches[0] || t.changedTouches[0] || tZ)[n + "X"],
                  y: r[n + "Y"],
                })
              : (void 0 === (i = e) && (i = "page"),
                { x: t[i + "X"], y: t[i + "Y"] }),
          }
        );
      }
      var t$ = function (t, e) {
          void 0 === e && (e = !1);
          var n = function (e) {
            return t(e, tK(e));
          };
          return e
            ? function (t) {
                var e = t instanceof MouseEvent;
                (!e || (e && 0 === t.button)) && n(t);
              }
            : n;
        },
        tq = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave",
        },
        tJ = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel",
        };
      function tQ(t) {
        if (C && null === window.onpointerdown);
        else if (C && null === window.ontouchstart) return tJ[t];
        else if (C && null === window.onmousedown) return tq[t];
        return t;
      }
      function t0(t, e, n, r) {
        return tH(t, tQ(e), t$(n, "pointerdown" === e), r);
      }
      function t1(t, e, n, r) {
        return tW(t, tQ(e), n && t$(n, "pointerdown" === e), r);
      }
      function t2(t) {
        var e = null;
        return function () {
          return (
            null === e &&
            ((e = t),
            function () {
              e = null;
            })
          );
        };
      }
      var t5 = t2("dragHorizontal"),
        t3 = t2("dragVertical");
      function t4(t) {
        var e = !1;
        if ("y" === t) e = t3();
        else if ("x" === t) e = t5();
        else {
          var n = t5(),
            r = t3();
          n && r
            ? (e = function () {
                n(), r();
              })
            : (n && n(), r && r());
        }
        return e;
      }
      function t9() {
        var t = t4(!0);
        return !t || (t(), !1);
      }
      function t7(t, n, r) {
        return function (i, o) {
          var a;
          !tG(i) ||
            t9() ||
            (null === (a = t.animationState) ||
              void 0 === a ||
              a.setActive(e.AnimationType.Hover, n),
            null == r || r(i, o));
        };
      }
      var t8 = function (t, e) {
        return !!e && (t === e || t8(t, e.parentElement));
      };
      function t6(t) {
        return u.useEffect(function () {
          return function () {
            return t();
          };
        }, []);
      }
      var et = new Set();
      function ee(t, e, n) {
        t || et.has(e) || (console.warn(e), n && console.warn(n), et.add(e));
      }
      var en = new WeakMap(),
        er = new WeakMap(),
        ei = function (t) {
          var e;
          null === (e = en.get(t.target)) || void 0 === e || e(t);
        },
        eo = function (t) {
          t.forEach(ei);
        },
        ea = { some: 0, all: 1 };
      function es(t, n, r, i) {
        var o = i.root,
          a = i.margin,
          l = i.amount,
          c = void 0 === l ? "some" : l,
          d = i.once;
        u.useEffect(
          function () {
            if (t) {
              var i,
                u,
                l,
                f,
                p,
                v,
                h,
                m = {
                  root: null == o ? void 0 : o.current,
                  rootMargin: a,
                  threshold: "number" == typeof c ? c : ea[c],
                };
              return (
                (i = r.getInstance()),
                (u = m.root),
                (l = s.__rest(m, ["root"])),
                (f = u || document),
                er.has(f) || er.set(f, {}),
                (p = er.get(f))[(v = JSON.stringify(l))] ||
                  (p[v] = new IntersectionObserver(
                    eo,
                    s.__assign({ root: u }, l)
                  )),
                (h = p[v]),
                en.set(i, function (t) {
                  var i,
                    o = t.isIntersecting;
                  if (n.isInView !== o) {
                    if (((n.isInView = o), d && !o && n.hasEnteredView)) return;
                    o && (n.hasEnteredView = !0),
                      null === (i = r.animationState) ||
                        void 0 === i ||
                        i.setActive(e.AnimationType.InView, o);
                    var a = r.getProps(),
                      s = o ? a.onViewportEnter : a.onViewportLeave;
                    null == s || s(t);
                  }
                }),
                h.observe(i),
                function () {
                  en.delete(i), h.unobserve(i);
                }
              );
            }
          },
          [t, o, a, c]
        );
      }
      function eu(t, n, r, i) {
        var o = i.fallback,
          a = void 0 === o || o;
        u.useEffect(
          function () {
            t &&
              a &&
              ("production" !== y &&
                ee(
                  !1,
                  "IntersectionObserver not available on this device. whileInView animations will trigger on mount."
                ),
              requestAnimationFrame(function () {
                n.hasEnteredView = !0;
                var t,
                  i = r.getProps().onViewportEnter;
                null == i || i(null),
                  null === (t = r.animationState) ||
                    void 0 === t ||
                    t.setActive(e.AnimationType.InView, !0);
              }));
          },
          [t]
        );
      }
      var el = function (t) {
          return function (e) {
            return t(e), null;
          };
        },
        ec = {
          inView: el(function (t) {
            var e = t.visualElement,
              n = t.whileInView,
              r = t.onViewportEnter,
              i = t.onViewportLeave,
              o = t.viewport,
              a = void 0 === o ? {} : o,
              s = u.useRef({ hasEnteredView: !1, isInView: !1 }),
              l = Boolean(n || r || i);
            a.once && s.current.hasEnteredView && (l = !1),
              ("undefined" == typeof IntersectionObserver ? eu : es)(
                l,
                s.current,
                e,
                a
              );
          }),
          tap: el(function (t) {
            var n = t.onTap,
              r = t.onTapStart,
              i = t.onTapCancel,
              o = t.whileTap,
              a = t.visualElement,
              s = u.useRef(!1),
              l = u.useRef(null),
              c = { passive: !(r || n || i || m) };
            function f() {
              var t;
              null === (t = l.current) || void 0 === t || t.call(l),
                (l.current = null);
            }
            function p() {
              var t;
              return (
                f(),
                (s.current = !1),
                null === (t = a.animationState) ||
                  void 0 === t ||
                  t.setActive(e.AnimationType.Tap, !1),
                !t9()
              );
            }
            function v(t, e) {
              p() &&
                (t8(a.getInstance(), t.target)
                  ? null == n || n(t, e)
                  : null == i || i(t, e));
            }
            function h(t, e) {
              p() && (null == i || i(t, e));
            }
            function m(t, n) {
              var i;
              f(),
                s.current ||
                  ((s.current = !0),
                  (l.current = d.pipe(
                    t0(window, "pointerup", v, c),
                    t0(window, "pointercancel", h, c)
                  )),
                  null === (i = a.animationState) ||
                    void 0 === i ||
                    i.setActive(e.AnimationType.Tap, !0),
                  null == r || r(t, n));
            }
            t1(a, "pointerdown", n || r || i || o ? m : void 0, c), t6(f);
          }),
          focus: el(function (t) {
            var n = t.whileFocus,
              r = t.visualElement;
            tW(
              r,
              "focus",
              n
                ? function () {
                    var t;
                    null === (t = r.animationState) ||
                      void 0 === t ||
                      t.setActive(e.AnimationType.Focus, !0);
                  }
                : void 0
            ),
              tW(
                r,
                "blur",
                n
                  ? function () {
                      var t;
                      null === (t = r.animationState) ||
                        void 0 === t ||
                        t.setActive(e.AnimationType.Focus, !1);
                    }
                  : void 0
              );
          }),
          hover: el(function (t) {
            var e = t.onHoverStart,
              n = t.onHoverEnd,
              r = t.whileHover,
              i = t.visualElement;
            t1(i, "pointerenter", e || r ? t7(i, !0, e) : void 0, {
              passive: !e,
            }),
              t1(i, "pointerleave", n || r ? t7(i, !1, n) : void 0, {
                passive: !n,
              });
          }),
        },
        ed = 0,
        ef = function () {
          return ed++;
        },
        ep = function () {
          return Y(ef);
        };
      function ev() {
        var t = u.useContext(V);
        if (null === t) return [!0, null];
        var e = t.isPresent,
          n = t.onExitComplete,
          r = t.register,
          i = ep();
        return (
          u.useEffect(function () {
            return r(i);
          }, []),
          !e && n
            ? [
                !1,
                function () {
                  return null == n ? void 0 : n(i);
                },
              ]
            : [!0]
        );
      }
      function eh(t, e) {
        if (!Array.isArray(e)) return !1;
        var n = e.length;
        if (n !== t.length) return !1;
        for (var r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      var em = function (t) {
          return 1e3 * t;
        },
        eg = {
          linear: d.linear,
          easeIn: d.easeIn,
          easeInOut: d.easeInOut,
          easeOut: d.easeOut,
          circIn: d.circIn,
          circInOut: d.circInOut,
          circOut: d.circOut,
          backIn: d.backIn,
          backInOut: d.backInOut,
          backOut: d.backOut,
          anticipate: d.anticipate,
          bounceIn: d.bounceIn,
          bounceInOut: d.bounceInOut,
          bounceOut: d.bounceOut,
        },
        ey = function (t) {
          if (Array.isArray(t)) {
            l.invariant(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            var e = s.__read(t, 4),
              n = e[0],
              r = e[1],
              i = e[2],
              o = e[3];
            return d.cubicBezier(n, r, i, o);
          }
          return "string" == typeof t
            ? (l.invariant(
                void 0 !== eg[t],
                "Invalid easing type '".concat(t, "'")
              ),
              eg[t])
            : t;
        },
        ex = function (t, e) {
          return (
            "zIndex" !== t &&
            !!(
              "number" == typeof e ||
              Array.isArray(e) ||
              ("string" == typeof e &&
                c.complex.test(e) &&
                !e.startsWith("url("))
            )
          );
        },
        e_ = function () {
          return { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 };
        },
        eE = function (t) {
          return {
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10,
          };
        },
        eA = function () {
          return { type: "keyframes", ease: "linear", duration: 0.3 };
        },
        eS = function (t) {
          return { type: "keyframes", duration: 0.8, values: t };
        },
        eb = {
          x: e_,
          y: e_,
          z: e_,
          rotate: e_,
          rotateX: e_,
          rotateY: e_,
          rotateZ: e_,
          scaleX: eE,
          scaleY: eE,
          scale: eE,
          opacity: eA,
          backgroundColor: eA,
          color: eA,
          default: eE,
        },
        ew = function (t, e) {
          var n;
          return (
            (n = tF(e) ? eS : eb[t] || eb.default), s.__assign({ to: e }, n(e))
          );
        },
        eP = s.__assign(s.__assign({}, tf), {
          color: c.color,
          backgroundColor: c.color,
          outlineColor: c.color,
          fill: c.color,
          stroke: c.color,
          borderColor: c.color,
          borderTopColor: c.color,
          borderRightColor: c.color,
          borderBottomColor: c.color,
          borderLeftColor: c.color,
          filter: c.filter,
          WebkitFilter: c.filter,
        }),
        eT = function (t) {
          return eP[t];
        };
      function eV(t, e) {
        var n,
          r = eT(t);
        return (
          r !== c.filter && (r = c.complex),
          null === (n = r.getAnimatableNone) || void 0 === n
            ? void 0
            : n.call(r, e)
        );
      }
      var eC = { current: !1 },
        eR = !1;
      function eL(t) {
        return (
          0 === t ||
          ("string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" "))
        );
      }
      function ek(t) {
        return "number" == typeof t ? 0 : eV("", t);
      }
      function eD(t, e) {
        return t[e] || t.default || t;
      }
      function eM(t, e, n, r) {
        return (
          void 0 === r && (r = {}),
          eC.current && (r = { type: !1 }),
          e.start(function (i) {
            var o,
              a,
              u,
              c,
              f,
              p,
              v,
              h,
              m,
              g,
              y,
              x =
                ((c = n),
                (v =
                  null !== (f = (p = eD(r, t)).from) && void 0 !== f
                    ? f
                    : e.get()),
                (h = ex(t, c)),
                "none" === v && h && "string" == typeof c
                  ? (v = eV(t, c))
                  : eL(v) && "string" == typeof c
                  ? (v = ek(c))
                  : !Array.isArray(c) &&
                    eL(c) &&
                    "string" == typeof v &&
                    (c = ek(v)),
                (m = ex(t, v)),
                l.warning(
                  m === h,
                  "You are trying to animate "
                    .concat(t, ' from "')
                    .concat(v, '" to "')
                    .concat(c, '". ')
                    .concat(
                      v,
                      " is not an animatable value - to enable this animation set "
                    )
                    .concat(v, " to a value animatable to ")
                    .concat(c, " via the `style` property.")
                ),
                m && h && !1 !== p.type
                  ? function () {
                      var n,
                        r,
                        o,
                        a,
                        u,
                        f,
                        h,
                        m,
                        g,
                        y,
                        x,
                        _,
                        E = {
                          from: v,
                          to: c,
                          velocity: e.getVelocity(),
                          onComplete: i,
                          onUpdate: function (t) {
                            return e.set(t);
                          },
                        };
                      return "inertia" === p.type || "decay" === p.type
                        ? d.inertia(s.__assign(s.__assign({}, E), p))
                        : d.animate(
                            s.__assign(
                              s.__assign(
                                {},
                                ((g = p),
                                Array.isArray(E.to) &&
                                  ((null !== (y = g.duration) &&
                                    void 0 !== y) ||
                                    (g.duration = 0.8)),
                                Array.isArray((x = E).to) &&
                                  null === x.to[0] &&
                                  ((x.to = s.__spreadArray(
                                    [],
                                    s.__read(x.to),
                                    !1
                                  )),
                                  (x.to[0] = x.from)),
                                (_ = g).when,
                                _.delay,
                                _.delayChildren,
                                _.staggerChildren,
                                _.staggerDirection,
                                _.repeat,
                                _.repeatType,
                                _.repeatDelay,
                                _.from,
                                Object.keys(
                                  s.__rest(_, [
                                    "when",
                                    "delay",
                                    "delayChildren",
                                    "staggerChildren",
                                    "staggerDirection",
                                    "repeat",
                                    "repeatType",
                                    "repeatDelay",
                                    "from",
                                  ])
                                ).length ||
                                  (g = s.__assign(
                                    s.__assign({}, g),
                                    ew(t, E.to)
                                  )),
                                s.__assign(
                                  s.__assign({}, E),
                                  ((r = (n = g).ease),
                                  (o = n.times),
                                  (a = n.yoyo),
                                  (u = n.flip),
                                  (f = n.loop),
                                  (h = s.__rest(n, [
                                    "ease",
                                    "times",
                                    "yoyo",
                                    "flip",
                                    "loop",
                                  ])),
                                  (m = s.__assign({}, h)),
                                  o && (m.offset = o),
                                  h.duration && (m.duration = em(h.duration)),
                                  h.repeatDelay &&
                                    (m.repeatDelay = em(h.repeatDelay)),
                                  r &&
                                    (m.ease =
                                      Array.isArray(r) &&
                                      "number" != typeof r[0]
                                        ? r.map(ey)
                                        : ey(r)),
                                  "tween" === h.type && (m.type = "keyframes"),
                                  (a || f || u) &&
                                    (l.warning(
                                      !eR,
                                      "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."
                                    ),
                                    (eR = !0),
                                    a
                                      ? (m.repeatType = "reverse")
                                      : f
                                      ? (m.repeatType = "loop")
                                      : u && (m.repeatType = "mirror"),
                                    (m.repeat = f || a || u || h.repeat)),
                                  "spring" !== h.type && (m.type = "keyframes"),
                                  m)
                                ))
                              ),
                              {
                                onUpdate: function (t) {
                                  var e;
                                  E.onUpdate(t),
                                    null === (e = p.onUpdate) ||
                                      void 0 === e ||
                                      e.call(p, t);
                                },
                                onComplete: function () {
                                  var t;
                                  E.onComplete(),
                                    null === (t = p.onComplete) ||
                                      void 0 === t ||
                                      t.call(p);
                                },
                              }
                            )
                          );
                    }
                  : function () {
                      var t,
                        n,
                        r = tj(c);
                      return (
                        e.set(r),
                        i(),
                        null === (t = null == p ? void 0 : p.onUpdate) ||
                          void 0 === t ||
                          t.call(p, r),
                        null === (n = null == p ? void 0 : p.onComplete) ||
                          void 0 === n ||
                          n.call(p),
                        { stop: function () {} }
                      );
                    }),
              _ =
                null !==
                  (u =
                    null !== (a = (eD((o = r), t) || {}).delay) && void 0 !== a
                      ? a
                      : o.delay) && void 0 !== u
                  ? u
                  : 0,
              E = function () {
                return (y = x());
              };
            return (
              _ ? (g = window.setTimeout(E, em(_))) : E(),
              function () {
                clearTimeout(g), null == y || y.stop();
              }
            );
          })
        );
      }
      function eI(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function eO(t, e) {
        var n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      var eF = (function () {
          function t() {
            this.subscriptions = [];
          }
          return (
            (t.prototype.add = function (t) {
              var e = this;
              return (
                eI(this.subscriptions, t),
                function () {
                  return eO(e.subscriptions, t);
                }
              );
            }),
            (t.prototype.notify = function (t, e, n) {
              var r = this.subscriptions.length;
              if (r) {
                if (1 === r) this.subscriptions[0](t, e, n);
                else
                  for (var i = 0; i < r; i++) {
                    var o = this.subscriptions[i];
                    o && o(t, e, n);
                  }
              }
            }),
            (t.prototype.getSize = function () {
              return this.subscriptions.length;
            }),
            (t.prototype.clear = function () {
              this.subscriptions.length = 0;
            }),
            t
          );
        })(),
        ej = (function () {
          function t(t) {
            var e = this;
            (this.version = "6.5.1"),
              (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.updateSubscribers = new eF()),
              (this.velocityUpdateSubscribers = new eF()),
              (this.renderSubscribers = new eF()),
              (this.canTrackVelocity = !1),
              (this.updateAndNotify = function (t, n) {
                void 0 === n && (n = !0), (e.prev = e.current), (e.current = t);
                var r = f.getFrameData(),
                  i = r.delta,
                  o = r.timestamp;
                e.lastUpdated !== o &&
                  ((e.timeDelta = i),
                  (e.lastUpdated = o),
                  g.default.postRender(e.scheduleVelocityCheck)),
                  e.prev !== e.current && e.updateSubscribers.notify(e.current),
                  e.velocityUpdateSubscribers.getSize() &&
                    e.velocityUpdateSubscribers.notify(e.getVelocity()),
                  n && e.renderSubscribers.notify(e.current);
              }),
              (this.scheduleVelocityCheck = function () {
                return g.default.postRender(e.velocityCheck);
              }),
              (this.velocityCheck = function (t) {
                t.timestamp !== e.lastUpdated &&
                  ((e.prev = e.current),
                  e.velocityUpdateSubscribers.notify(e.getVelocity()));
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = t),
              (this.canTrackVelocity = !isNaN(parseFloat(this.current)));
          }
          return (
            (t.prototype.onChange = function (t) {
              return this.updateSubscribers.add(t);
            }),
            (t.prototype.clearListeners = function () {
              this.updateSubscribers.clear();
            }),
            (t.prototype.onRenderRequest = function (t) {
              return t(this.get()), this.renderSubscribers.add(t);
            }),
            (t.prototype.attach = function (t) {
              this.passiveEffect = t;
            }),
            (t.prototype.set = function (t, e) {
              void 0 === e && (e = !0),
                e && this.passiveEffect
                  ? this.passiveEffect(t, this.updateAndNotify)
                  : this.updateAndNotify(t, e);
            }),
            (t.prototype.get = function () {
              return this.current;
            }),
            (t.prototype.getPrevious = function () {
              return this.prev;
            }),
            (t.prototype.getVelocity = function () {
              return this.canTrackVelocity
                ? d.velocityPerSecond(
                    parseFloat(this.current) - parseFloat(this.prev),
                    this.timeDelta
                  )
                : 0;
            }),
            (t.prototype.start = function (t) {
              var e = this;
              return (
                this.stop(),
                new Promise(function (n) {
                  (e.hasAnimated = !0), (e.stopAnimation = t(n));
                }).then(function () {
                  return e.clearAnimation();
                })
              );
            }),
            (t.prototype.stop = function () {
              this.stopAnimation && this.stopAnimation(), this.clearAnimation();
            }),
            (t.prototype.isAnimating = function () {
              return !!this.stopAnimation;
            }),
            (t.prototype.clearAnimation = function () {
              this.stopAnimation = null;
            }),
            (t.prototype.destroy = function () {
              this.updateSubscribers.clear(),
                this.renderSubscribers.clear(),
                this.stop();
            }),
            t
          );
        })();
      function eB(t) {
        return new ej(t);
      }
      var eU = function (t) {
          return function (e) {
            return e.test(t);
          };
        },
        eN = [
          c.number,
          c.px,
          c.percent,
          c.degrees,
          c.vw,
          c.vh,
          {
            test: function (t) {
              return "auto" === t;
            },
            parse: function (t) {
              return t;
            },
          },
        ],
        ez = function (t) {
          return eN.find(eU(t));
        },
        eY = s.__spreadArray(
          s.__spreadArray([], s.__read(eN), !1),
          [c.color, c.complex],
          !1
        );
      function eX(t, e) {
        var n = B(t, e),
          r = n ? t.makeTargetAnimatable(n, !1) : {},
          i = r.transitionEnd;
        r.transition;
        var o = s.__rest(r, ["transitionEnd", "transition"]);
        for (var a in (o = s.__assign(
          s.__assign({}, o),
          void 0 === i ? {} : i
        ))) {
          var u,
            l = tj(o[a]);
          (u = a), t.hasValue(u) ? t.getValue(u).set(l) : t.addValue(u, eB(l));
        }
      }
      function eH(t, e) {
        s.__spreadArray([], s.__read(e), !1)
          .reverse()
          .forEach(function (n) {
            var r,
              i = t.getVariant(n);
            i && eX(t, i),
              null === (r = t.variantChildren) ||
                void 0 === r ||
                r.forEach(function (t) {
                  eH(t, e);
                });
          });
      }
      function eW(t, e, n) {
        var r,
          i,
          o,
          a,
          s = Object.keys(e).filter(function (e) {
            return !t.hasValue(e);
          }),
          u = s.length;
        if (u)
          for (var l = 0; l < u; l++) {
            var d,
              f,
              p,
              v = s[l],
              h = e[v],
              m = null;
            Array.isArray(h) && (m = h[0]),
              null === m &&
                (m =
                  null !==
                    (i =
                      null !== (r = n[v]) && void 0 !== r
                        ? r
                        : t.readValue(v)) && void 0 !== i
                    ? i
                    : e[v]),
              null != m &&
                ("string" == typeof m &&
                ((d = m),
                /^\-?\d*\.?\d+$/.test(d) || ((f = m), /^0[^.\s]+$/.test(f)))
                  ? (m = parseFloat(m))
                  : ((p = m),
                    !eY.find(eU(p)) && c.complex.test(h) && (m = eV(v, h))),
                t.addValue(v, eB(m)),
                (null !== (o = (a = n)[v]) && void 0 !== o) || (a[v] = m),
                t.setBaseTarget(v, m));
          }
      }
      function eG(t, e, n) {
        var r,
          i,
          o = {};
        for (var a in t)
          o[a] =
            null !==
              (r = (function (t, e) {
                if (e) return (e[t] || e.default || e).from;
              })(a, e)) && void 0 !== r
              ? r
              : null === (i = n.getValue(a)) || void 0 === i
              ? void 0
              : i.get();
        return o;
      }
      function eZ(t, e, n) {
        if (
          (void 0 === n && (n = {}),
          t.notifyAnimationStart(e),
          Array.isArray(e))
        ) {
          var r;
          r = Promise.all(
            e.map(function (e) {
              return eK(t, e, n);
            })
          );
        } else if ("string" == typeof e) r = eK(t, e, n);
        else {
          var i = "function" == typeof e ? B(t, e, n.custom) : e;
          r = e$(t, i, n);
        }
        return r.then(function () {
          return t.notifyAnimationComplete(e);
        });
      }
      function eK(t, e, n) {
        void 0 === n && (n = {});
        var r,
          i = B(t, e, n.custom),
          o = (i || {}).transition,
          a = void 0 === o ? t.getDefaultTransition() || {} : o;
        n.transitionOverride && (a = n.transitionOverride);
        var u = i
            ? function () {
                return e$(t, i, n);
              }
            : function () {
                return Promise.resolve();
              },
          l = (
            null === (r = t.variantChildren) || void 0 === r ? void 0 : r.size
          )
            ? function (r) {
                void 0 === r && (r = 0);
                var i,
                  o,
                  u,
                  l,
                  c,
                  d,
                  f,
                  p = a.delayChildren,
                  v = a.staggerChildren,
                  h = a.staggerDirection;
                return (
                  (i = (void 0 === p ? 0 : p) + r),
                  (o = v),
                  (u = h),
                  (l = n),
                  void 0 === i && (i = 0),
                  void 0 === o && (o = 0),
                  void 0 === u && (u = 1),
                  (c = []),
                  (d = (t.variantChildren.size - 1) * o),
                  (f =
                    1 === u
                      ? function (t) {
                          return void 0 === t && (t = 0), t * o;
                        }
                      : function (t) {
                          return void 0 === t && (t = 0), d - t * o;
                        }),
                  Array.from(t.variantChildren)
                    .sort(eq)
                    .forEach(function (t, n) {
                      c.push(
                        eK(
                          t,
                          e,
                          s.__assign(s.__assign({}, l), { delay: i + f(n) })
                        ).then(function () {
                          return t.notifyAnimationComplete(e);
                        })
                      );
                    }),
                  Promise.all(c)
                );
              }
            : function () {
                return Promise.resolve();
              },
          c = a.when;
        if (!c) return Promise.all([u(), l(n.delay)]);
        var d = s.__read("beforeChildren" === c ? [u, l] : [l, u], 2),
          f = d[0],
          p = d[1];
        return f().then(p);
      }
      function e$(t, e, n) {
        var r,
          i = void 0 === n ? {} : n,
          o = i.delay,
          a = void 0 === o ? 0 : o,
          u = i.transitionOverride,
          l = i.type,
          c = t.makeTargetAnimatable(e),
          d = c.transition,
          f = void 0 === d ? t.getDefaultTransition() : d,
          p = c.transitionEnd,
          v = s.__rest(c, ["transition", "transitionEnd"]);
        u && (f = u);
        var h = [],
          m =
            l &&
            (null === (r = t.animationState) || void 0 === r
              ? void 0
              : r.getState()[l]);
        for (var g in v) {
          var y = t.getValue(g),
            x = v[g];
          if (
            !(
              !y ||
              void 0 === x ||
              (m &&
                (function (t, e) {
                  var n = t.protectedKeys,
                    r = t.needsAnimating,
                    i = n.hasOwnProperty(e) && !0 !== r[e];
                  return (r[e] = !1), i;
                })(m, g))
            )
          ) {
            var _ = s.__assign({ delay: a }, f);
            t.shouldReduceMotion &&
              to(g) &&
              (_ = s.__assign(s.__assign({}, _), { type: !1, delay: 0 }));
            var E = eM(g, y, x, _);
            h.push(E);
          }
        }
        return Promise.all(h).then(function () {
          p && eX(t, p);
        });
      }
      function eq(t, e) {
        return t.sortNodePosition(e);
      }
      var eJ = [
          e.AnimationType.Animate,
          e.AnimationType.InView,
          e.AnimationType.Focus,
          e.AnimationType.Hover,
          e.AnimationType.Tap,
          e.AnimationType.Drag,
          e.AnimationType.Exit,
        ],
        eQ = s.__spreadArray([], s.__read(eJ), !1).reverse(),
        e0 = eJ.length;
      function e1(t) {
        return (
          void 0 === t && (t = !1),
          {
            isActive: t,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {},
          }
        );
      }
      var e2 = {
          animation: el(function (t) {
            var n = t.visualElement,
              r = t.animate;
            n.animationState ||
              (n.animationState = (function (t) {
                var n,
                  r = function (e) {
                    return Promise.all(
                      e.map(function (e) {
                        return eZ(t, e.animation, e.options);
                      })
                    );
                  },
                  i =
                    (((n = {})[e.AnimationType.Animate] = e1(!0)),
                    (n[e.AnimationType.InView] = e1()),
                    (n[e.AnimationType.Hover] = e1()),
                    (n[e.AnimationType.Tap] = e1()),
                    (n[e.AnimationType.Drag] = e1()),
                    (n[e.AnimationType.Focus] = e1()),
                    (n[e.AnimationType.Exit] = e1()),
                    n),
                  o = {},
                  a = !0,
                  u = function (e, n) {
                    var r = B(t, n);
                    if (r) {
                      r.transition;
                      var i = r.transitionEnd,
                        o = s.__rest(r, ["transition", "transitionEnd"]);
                      e = s.__assign(s.__assign(s.__assign({}, e), o), i);
                    }
                    return e;
                  };
                function l(e, n) {
                  for (
                    var l,
                      c = t.getProps(),
                      d = t.getVariantContext(!0) || {},
                      f = [],
                      p = new Set(),
                      v = {},
                      h = 1 / 0,
                      m = 0;
                    m < e0;
                    m++
                  )
                    !(function (r) {
                      var o,
                        m = eQ[r],
                        g = i[m],
                        y = null !== (l = c[m]) && void 0 !== l ? l : d[m],
                        x = F(y),
                        _ = m === n ? g.isActive : null;
                      !1 === _ && (h = r);
                      var E = y === d[m] && y !== c[m] && x;
                      if (
                        (E && a && t.manuallyAnimateOnMount && (E = !1),
                        (g.protectedKeys = s.__assign({}, v)),
                        !(
                          (!g.isActive && null === _) ||
                          (!y && !g.prevProp) ||
                          tO(y)
                        ) && "boolean" != typeof y)
                      ) {
                        var A =
                            ((o = g.prevProp),
                            "string" == typeof y
                              ? y !== o
                              : !!O(y) && !eh(y, o)),
                          S =
                            A ||
                            (m === n && g.isActive && !E && x) ||
                            (r > h && x),
                          b = Array.isArray(y) ? y : [y],
                          w = b.reduce(u, {});
                        !1 === _ && (w = {});
                        var P = g.prevResolvedValues,
                          T = void 0 === P ? {} : P,
                          V = s.__assign(s.__assign({}, T), w),
                          C = function (t) {
                            (S = !0), p.delete(t), (g.needsAnimating[t] = !0);
                          };
                        for (var R in V) {
                          var L = w[R],
                            k = T[R];
                          v.hasOwnProperty(R) ||
                            (L !== k
                              ? tF(L) && tF(k)
                                ? !eh(L, k) || A
                                  ? C(R)
                                  : (g.protectedKeys[R] = !0)
                                : void 0 !== L
                                ? C(R)
                                : p.add(R)
                              : void 0 !== L && p.has(R)
                              ? C(R)
                              : (g.protectedKeys[R] = !0));
                        }
                        (g.prevProp = y),
                          (g.prevResolvedValues = w),
                          g.isActive && (v = s.__assign(s.__assign({}, v), w)),
                          a && t.blockInitialAnimation && (S = !1),
                          S &&
                            !E &&
                            f.push.apply(
                              f,
                              s.__spreadArray(
                                [],
                                s.__read(
                                  b.map(function (t) {
                                    return {
                                      animation: t,
                                      options: s.__assign({ type: m }, e),
                                    };
                                  })
                                ),
                                !1
                              )
                            );
                      }
                    })(m);
                  if (((o = s.__assign({}, v)), p.size)) {
                    var g = {};
                    p.forEach(function (e) {
                      var n = t.getBaseTarget(e);
                      void 0 !== n && (g[e] = n);
                    }),
                      f.push({ animation: g });
                  }
                  var y = Boolean(f.length);
                  return (
                    a &&
                      !1 === c.initial &&
                      !t.manuallyAnimateOnMount &&
                      (y = !1),
                    (a = !1),
                    y ? r(f) : Promise.resolve()
                  );
                }
                return {
                  isAnimated: function (t) {
                    return void 0 !== o[t];
                  },
                  animateChanges: l,
                  setActive: function (e, n, r) {
                    if (i[e].isActive === n) return Promise.resolve();
                    null === (o = t.variantChildren) ||
                      void 0 === o ||
                      o.forEach(function (t) {
                        var r;
                        return null === (r = t.animationState) || void 0 === r
                          ? void 0
                          : r.setActive(e, n);
                      }),
                      (i[e].isActive = n);
                    var o,
                      a = l(r, e);
                    for (var s in i) i[s].protectedKeys = {};
                    return a;
                  },
                  setAnimateFunction: function (e) {
                    r = e(t);
                  },
                  getState: function () {
                    return i;
                  },
                };
              })(n)),
              tO(r) &&
                u.useEffect(
                  function () {
                    return r.subscribe(n);
                  },
                  [r]
                );
          }),
          exit: el(function (t) {
            var n = t.custom,
              r = t.visualElement,
              i = s.__read(ev(), 2),
              o = i[0],
              a = i[1],
              l = u.useContext(V);
            u.useEffect(
              function () {
                r.isPresent = o;
                var t,
                  i,
                  s =
                    null === (t = r.animationState) || void 0 === t
                      ? void 0
                      : t.setActive(e.AnimationType.Exit, !o, {
                          custom:
                            null !== (i = null == l ? void 0 : l.custom) &&
                            void 0 !== i
                              ? i
                              : n,
                        });
                o || null == s || s.then(a);
              },
              [o]
            );
          }),
        },
        e5 = (function () {
          function t(t, e, n) {
            var r = this,
              i = (void 0 === n ? {} : n).transformPagePoint;
            if (
              ((this.startEvent = null),
              (this.lastMoveEvent = null),
              (this.lastMoveEventInfo = null),
              (this.handlers = {}),
              (this.updatePoint = function () {
                if (r.lastMoveEvent && r.lastMoveEventInfo) {
                  var t = e9(r.lastMoveEventInfo, r.history),
                    e = null !== r.startEvent,
                    n = d.distance(t.offset, { x: 0, y: 0 }) >= 3;
                  if (e || n) {
                    var i = t.point,
                      o = f.getFrameData().timestamp;
                    r.history.push(
                      s.__assign(s.__assign({}, i), { timestamp: o })
                    );
                    var a = r.handlers,
                      u = a.onStart,
                      l = a.onMove;
                    e ||
                      (u && u(r.lastMoveEvent, t),
                      (r.startEvent = r.lastMoveEvent)),
                      l && l(r.lastMoveEvent, t);
                  }
                }
              }),
              (this.handlePointerMove = function (t, e) {
                if (
                  ((r.lastMoveEvent = t),
                  (r.lastMoveEventInfo = e3(e, r.transformPagePoint)),
                  tG(t) && 0 === t.buttons)
                ) {
                  r.handlePointerUp(t, e);
                  return;
                }
                g.default.update(r.updatePoint, !0);
              }),
              (this.handlePointerUp = function (t, e) {
                r.end();
                var n = r.handlers,
                  i = n.onEnd,
                  o = n.onSessionEnd,
                  a = e9(e3(e, r.transformPagePoint), r.history);
                r.startEvent && i && i(t, a), o && o(t, a);
              }),
              !t.touches || !(t.touches.length > 1))
            ) {
              (this.handlers = e), (this.transformPagePoint = i);
              var o = e3(tK(t), this.transformPagePoint),
                a = o.point,
                u = f.getFrameData().timestamp;
              this.history = [s.__assign(s.__assign({}, a), { timestamp: u })];
              var l = e.onSessionStart;
              l && l(t, e9(o, this.history)),
                (this.removeListeners = d.pipe(
                  t0(window, "pointermove", this.handlePointerMove),
                  t0(window, "pointerup", this.handlePointerUp),
                  t0(window, "pointercancel", this.handlePointerUp)
                ));
            }
          }
          return (
            (t.prototype.updateHandlers = function (t) {
              this.handlers = t;
            }),
            (t.prototype.end = function () {
              this.removeListeners && this.removeListeners(),
                f.cancelSync.update(this.updatePoint);
            }),
            t
          );
        })();
      function e3(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function e4(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function e9(t, e) {
        var n = t.point;
        return {
          point: n,
          delta: e4(n, e7(e)),
          offset: e4(n, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            for (
              var n = t.length - 1, r = null, i = e7(t);
              n >= 0 && ((r = t[n]), !(i.timestamp - r.timestamp > em(0.1)));

            )
              n--;
            if (!r) return { x: 0, y: 0 };
            var o = (i.timestamp - r.timestamp) / 1e3;
            if (0 === o) return { x: 0, y: 0 };
            var a = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
            return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
          })(e, 0),
        };
      }
      function e7(t) {
        return t[t.length - 1];
      }
      function e8(t) {
        return t.max - t.min;
      }
      function e6(t, e, n) {
        return (
          void 0 === e && (e = 0),
          void 0 === n && (n = 0.01),
          d.distance(t, e) < n
        );
      }
      function nt(t, e, n, r) {
        void 0 === r && (r = 0.5),
          (t.origin = r),
          (t.originPoint = d.mix(e.min, e.max, t.origin)),
          (t.scale = e8(n) / e8(e)),
          (e6(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = d.mix(n.min, n.max, t.origin) - t.originPoint),
          (e6(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function ne(t, e, n, r) {
        nt(t.x, e.x, n.x, null == r ? void 0 : r.originX),
          nt(t.y, e.y, n.y, null == r ? void 0 : r.originY);
      }
      function nn(t, e, n) {
        (t.min = n.min + e.min), (t.max = t.min + e8(e));
      }
      function nr(t, e, n) {
        (t.min = e.min - n.min), (t.max = t.min + e8(e));
      }
      function ni(t, e, n) {
        nr(t.x, e.x, n.x), nr(t.y, e.y, n.y);
      }
      function no(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0,
        };
      }
      function na(t, e) {
        var n,
          r = e.min - t.min,
          i = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min &&
            ((r = (n = s.__read([i, r], 2))[0]), (i = n[1])),
          { min: r, max: i }
        );
      }
      function ns(t, e, n) {
        return { min: nu(t, e), max: nu(t, n) };
      }
      function nu(t, e) {
        var n;
        return "number" == typeof t
          ? t
          : null !== (n = t[e]) && void 0 !== n
          ? n
          : 0;
      }
      var nl = function () {
          return { translate: 0, scale: 1, origin: 0, originPoint: 0 };
        },
        nc = function () {
          return { x: nl(), y: nl() };
        },
        nd = function () {
          return { min: 0, max: 0 };
        },
        nf = function () {
          return { x: nd(), y: nd() };
        };
      function np(t) {
        return [t("x"), t("y")];
      }
      function nv(t) {
        var e = t.top;
        return {
          x: { min: t.left, max: t.right },
          y: { min: e, max: t.bottom },
        };
      }
      function nh(t) {
        return void 0 === t || 1 === t;
      }
      function nm(t) {
        var e = t.scale,
          n = t.scaleX,
          r = t.scaleY;
        return !nh(e) || !nh(n) || !nh(r);
      }
      function ng(t) {
        var e, n;
        return (
          nm(t) ||
          ((e = t.x) && "0%" !== e) ||
          ((n = t.y) && "0%" !== n) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY
        );
      }
      function ny(t, e, n, r, i) {
        return void 0 !== i && (t = r + i * (t - r)), r + n * (t - r) + e;
      }
      function nx(t, e, n, r, i) {
        void 0 === e && (e = 0),
          void 0 === n && (n = 1),
          (t.min = ny(t.min, e, n, r, i)),
          (t.max = ny(t.max, e, n, r, i));
      }
      function n_(t, e) {
        var n = e.x,
          r = e.y;
        nx(t.x, n.translate, n.scale, n.originPoint),
          nx(t.y, r.translate, r.scale, r.originPoint);
      }
      function nE(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function nA(t, e, n) {
        var r = s.__read(n, 3),
          i = r[0],
          o = r[1],
          a = r[2],
          u = void 0 !== e[a] ? e[a] : 0.5,
          l = d.mix(t.min, t.max, u);
        nx(t, e[i], e[o], l, e.scale);
      }
      var nS = ["x", "scaleX", "originX"],
        nb = ["y", "scaleY", "originY"];
      function nw(t, e) {
        nA(t.x, e, nS), nA(t.y, e, nb);
      }
      function nP(t, e) {
        return nv(
          (function (t, e) {
            if (!e) return t;
            var n = e({ x: t.left, y: t.top }),
              r = e({ x: t.right, y: t.bottom });
            return { top: n.y, left: n.x, bottom: r.y, right: r.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      var nT = new WeakMap(),
        nV = (function () {
          function t(t) {
            (this.openGlobalLock = null),
              (this.isDragging = !1),
              (this.currentDirection = null),
              (this.originPoint = { x: 0, y: 0 }),
              (this.constraints = !1),
              (this.hasMutatedConstraints = !1),
              (this.elastic = nf()),
              (this.visualElement = t);
          }
          return (
            (t.prototype.start = function (t, n) {
              var r = this,
                i = (void 0 === n ? {} : n).snapToCursor,
                o = void 0 !== i && i;
              !1 !== this.visualElement.isPresent &&
                (this.panSession = new e5(
                  t,
                  {
                    onSessionStart: function (t) {
                      r.stopAnimation(),
                        o && r.snapToCursor(tK(t, "page").point);
                    },
                    onStart: function (t, n) {
                      var i,
                        o = r.getProps(),
                        a = o.drag,
                        s = o.dragPropagation,
                        u = o.onDragStart;
                      (!a ||
                        s ||
                        (r.openGlobalLock && r.openGlobalLock(),
                        (r.openGlobalLock = t4(a)),
                        r.openGlobalLock)) &&
                        ((r.isDragging = !0),
                        (r.currentDirection = null),
                        r.resolveConstraints(),
                        r.visualElement.projection &&
                          ((r.visualElement.projection.isAnimationBlocked = !0),
                          (r.visualElement.projection.target = void 0)),
                        np(function (t) {
                          var e,
                            n,
                            i = r.getAxisMotionValue(t).get() || 0;
                          if (c.percent.test(i)) {
                            var o =
                              null ===
                                (n =
                                  null === (e = r.visualElement.projection) ||
                                  void 0 === e
                                    ? void 0
                                    : e.layout) || void 0 === n
                                ? void 0
                                : n.actual[t];
                            o && (i = e8(o) * (parseFloat(i) / 100));
                          }
                          r.originPoint[t] = i;
                        }),
                        null == u || u(t, n),
                        null === (i = r.visualElement.animationState) ||
                          void 0 === i ||
                          i.setActive(e.AnimationType.Drag, !0));
                    },
                    onMove: function (t, e) {
                      var n = r.getProps(),
                        i = n.dragPropagation,
                        o = n.dragDirectionLock,
                        a = n.onDirectionLock,
                        s = n.onDrag;
                      if (i || r.openGlobalLock) {
                        var u,
                          l,
                          c = e.offset;
                        if (o && null === r.currentDirection) {
                          (r.currentDirection =
                            (void 0 === u && (u = 10),
                            (l = null),
                            Math.abs(c.y) > u
                              ? (l = "y")
                              : Math.abs(c.x) > u && (l = "x"),
                            l)),
                            null !== r.currentDirection &&
                              (null == a || a(r.currentDirection));
                          return;
                        }
                        r.updateAxis("x", e.point, c),
                          r.updateAxis("y", e.point, c),
                          r.visualElement.syncRender(),
                          null == s || s(t, e);
                      }
                    },
                    onSessionEnd: function (t, e) {
                      return r.stop(t, e);
                    },
                  },
                  {
                    transformPagePoint:
                      this.visualElement.getTransformPagePoint(),
                  }
                ));
            }),
            (t.prototype.stop = function (t, e) {
              var n = this.isDragging;
              if ((this.cancel(), n)) {
                var r = e.velocity;
                this.startAnimation(r);
                var i = this.getProps().onDragEnd;
                null == i || i(t, e);
              }
            }),
            (t.prototype.cancel = function () {
              var t, n;
              (this.isDragging = !1),
                this.visualElement.projection &&
                  (this.visualElement.projection.isAnimationBlocked = !1),
                null === (t = this.panSession) || void 0 === t || t.end(),
                (this.panSession = void 0),
                !this.getProps().dragPropagation &&
                  this.openGlobalLock &&
                  (this.openGlobalLock(), (this.openGlobalLock = null)),
                null === (n = this.visualElement.animationState) ||
                  void 0 === n ||
                  n.setActive(e.AnimationType.Drag, !1);
            }),
            (t.prototype.updateAxis = function (t, e, n) {
              var r = this.getProps().drag;
              if (n && nC(t, r, this.currentDirection)) {
                var i,
                  o,
                  a,
                  s,
                  u,
                  l = this.getAxisMotionValue(t),
                  c = this.originPoint[t] + n[t];
                this.constraints &&
                  this.constraints[t] &&
                  ((i = c),
                  (o = this.constraints[t]),
                  (a = this.elastic[t]),
                  (s = o.min),
                  (u = o.max),
                  void 0 !== s && i < s
                    ? (i = a ? d.mix(s, i, a.min) : Math.max(i, s))
                    : void 0 !== u &&
                      i > u &&
                      (i = a ? d.mix(u, i, a.max) : Math.min(i, u)),
                  (c = i)),
                  l.set(c);
              }
            }),
            (t.prototype.resolveConstraints = function () {
              var t,
                e,
                n,
                r,
                i,
                o,
                a = this,
                s = this.getProps(),
                u = s.dragConstraints,
                l = s.dragElastic,
                c = (this.visualElement.projection || {}).layout,
                d = this.constraints;
              u && I(u)
                ? this.constraints ||
                  (this.constraints = this.resolveRefConstraints())
                : u && c
                ? (this.constraints =
                    ((t = c.actual),
                    (e = u.top),
                    (n = u.left),
                    (r = u.bottom),
                    (i = u.right),
                    { x: no(t.x, n, i), y: no(t.y, e, r) }))
                : (this.constraints = !1),
                (this.elastic =
                  (void 0 === (o = l) && (o = 0.35),
                  !1 === o ? (o = 0) : !0 === o && (o = 0.35),
                  { x: ns(o, "left", "right"), y: ns(o, "top", "bottom") })),
                d !== this.constraints &&
                  c &&
                  this.constraints &&
                  !this.hasMutatedConstraints &&
                  np(function (t) {
                    if (a.getAxisMotionValue(t)) {
                      var e, n, r;
                      a.constraints[t] =
                        ((e = c.actual[t]),
                        (n = a.constraints[t]),
                        (r = {}),
                        void 0 !== n.min && (r.min = n.min - e.min),
                        void 0 !== n.max && (r.max = n.max - e.min),
                        r);
                    }
                  });
            }),
            (t.prototype.resolveRefConstraints = function () {
              var t = this.getProps(),
                e = t.dragConstraints,
                n = t.onMeasureDragConstraints;
              if (!e || !I(e)) return !1;
              var r = e.current;
              l.invariant(
                null !== r,
                "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
              );
              var i = this.visualElement.projection;
              if (!i || !i.layout) return !1;
              var o =
                  ((s = i.root),
                  (u = nP(r, this.visualElement.getTransformPagePoint())),
                  (c = s.scroll) && (nE(u.x, c.x), nE(u.y, c.y)),
                  u),
                a = { x: na((d = i.layout.actual).x, o.x), y: na(d.y, o.y) };
              if (n) {
                var s,
                  u,
                  c,
                  d,
                  f,
                  p,
                  v,
                  h = n(
                    ((p = (f = a).x),
                    {
                      top: (v = f.y).min,
                      right: p.max,
                      bottom: v.max,
                      left: p.min,
                    })
                  );
                (this.hasMutatedConstraints = !!h), h && (a = nv(h));
              }
              return a;
            }),
            (t.prototype.startAnimation = function (t) {
              var e = this,
                n = this.getProps(),
                r = n.drag,
                i = n.dragMomentum,
                o = n.dragElastic,
                a = n.dragTransition,
                u = n.dragSnapToOrigin,
                l = n.onDragTransitionEnd,
                c = this.constraints || {};
              return Promise.all(
                np(function (n) {
                  if (nC(n, r, e.currentDirection)) {
                    var l,
                      d =
                        null !== (l = null == c ? void 0 : c[n]) && void 0 !== l
                          ? l
                          : {};
                    u && (d = { min: 0, max: 0 });
                    var f = s.__assign(
                      s.__assign(
                        {
                          type: "inertia",
                          velocity: i ? t[n] : 0,
                          bounceStiffness: o ? 200 : 1e6,
                          bounceDamping: o ? 40 : 1e7,
                          timeConstant: 750,
                          restDelta: 1,
                          restSpeed: 10,
                        },
                        a
                      ),
                      d
                    );
                    return e.startAxisValueAnimation(n, f);
                  }
                })
              ).then(l);
            }),
            (t.prototype.startAxisValueAnimation = function (t, e) {
              var n = this.getAxisMotionValue(t);
              return eM(t, n, 0, e);
            }),
            (t.prototype.stopAnimation = function () {
              var t = this;
              np(function (e) {
                return t.getAxisMotionValue(e).stop();
              });
            }),
            (t.prototype.getAxisMotionValue = function (t) {
              var e,
                n,
                r = "_drag" + t.toUpperCase();
              return (
                this.visualElement.getProps()[r] ||
                this.visualElement.getValue(
                  t,
                  null !==
                    (n =
                      null === (e = this.visualElement.getProps().initial) ||
                      void 0 === e
                        ? void 0
                        : e[t]) && void 0 !== n
                    ? n
                    : 0
                )
              );
            }),
            (t.prototype.snapToCursor = function (t) {
              var e = this;
              np(function (n) {
                if (nC(n, e.getProps().drag, e.currentDirection)) {
                  var r = e.visualElement.projection,
                    i = e.getAxisMotionValue(n);
                  if (r && r.layout) {
                    var o = r.layout.actual[n],
                      a = o.min,
                      s = o.max;
                    i.set(t[n] - d.mix(a, s, 0.5));
                  }
                }
              });
            }),
            (t.prototype.scalePositionWithinConstraints = function () {
              var t,
                e = this,
                n = this.getProps(),
                r = n.drag,
                i = n.dragConstraints,
                o = this.visualElement.projection;
              if (I(i) && o && this.constraints) {
                this.stopAnimation();
                var a = { x: 0, y: 0 };
                np(function (t) {
                  var n = e.getAxisMotionValue(t);
                  if (n) {
                    var r,
                      i,
                      o,
                      s,
                      u,
                      l = n.get();
                    a[t] =
                      ((r = { min: l, max: l }),
                      (i = e.constraints[t]),
                      (o = 0.5),
                      (s = e8(r)),
                      (u = e8(i)) > s
                        ? (o = d.progress(i.min, i.max - s, r.min))
                        : s > u && (o = d.progress(r.min, r.max - u, i.min)),
                      d.clamp(0, 1, o));
                  }
                });
                var s = this.visualElement.getProps().transformTemplate;
                (this.visualElement.getInstance().style.transform = s
                  ? s({}, "")
                  : "none"),
                  null === (t = o.root) || void 0 === t || t.updateScroll(),
                  o.updateLayout(),
                  this.resolveConstraints(),
                  np(function (t) {
                    if (nC(t, r, null)) {
                      var n = e.getAxisMotionValue(t),
                        i = e.constraints[t],
                        o = i.min,
                        s = i.max;
                      n.set(d.mix(o, s, a[t]));
                    }
                  });
              }
            }),
            (t.prototype.addListeners = function () {
              var t,
                e = this;
              nT.set(this.visualElement, this);
              var n = t0(
                  this.visualElement.getInstance(),
                  "pointerdown",
                  function (t) {
                    var n = e.getProps(),
                      r = n.drag,
                      i = n.dragListener;
                    r && (void 0 === i || i) && e.start(t);
                  }
                ),
                r = function () {
                  I(e.getProps().dragConstraints) &&
                    (e.constraints = e.resolveRefConstraints());
                },
                i = this.visualElement.projection,
                o = i.addEventListener("measure", r);
              i &&
                !i.layout &&
                (null === (t = i.root) || void 0 === t || t.updateScroll(),
                i.updateLayout()),
                r();
              var a = tH(window, "resize", function () {
                return e.scalePositionWithinConstraints();
              });
              return (
                i.addEventListener("didUpdate", function (t) {
                  var n = t.delta,
                    r = t.hasLayoutChanged;
                  e.isDragging &&
                    r &&
                    (np(function (t) {
                      var r = e.getAxisMotionValue(t);
                      r &&
                        ((e.originPoint[t] += n[t].translate),
                        r.set(r.get() + n[t].translate));
                    }),
                    e.visualElement.syncRender());
                }),
                function () {
                  a(), n(), o();
                }
              );
            }),
            (t.prototype.getProps = function () {
              var t = this.visualElement.getProps(),
                e = t.drag,
                n = t.dragDirectionLock,
                r = t.dragPropagation,
                i = t.dragConstraints,
                o = t.dragElastic,
                a = t.dragMomentum;
              return s.__assign(s.__assign({}, t), {
                drag: void 0 !== e && e,
                dragDirectionLock: void 0 !== n && n,
                dragPropagation: void 0 !== r && r,
                dragConstraints: void 0 !== i && i,
                dragElastic: void 0 === o ? 0.35 : o,
                dragMomentum: void 0 === a || a,
              });
            }),
            t
          );
        })();
      function nC(t, e, n) {
        return (!0 === e || e === t) && (null === n || n === t);
      }
      var nR = {
          pan: el(function (t) {
            var e = t.onPan,
              n = t.onPanStart,
              r = t.onPanEnd,
              i = t.onPanSessionStart,
              o = t.visualElement,
              a = u.useRef(null),
              s = u.useContext(w).transformPagePoint,
              l = {
                onSessionStart: i,
                onStart: n,
                onMove: e,
                onEnd: function (t, e) {
                  (a.current = null), r && r(t, e);
                },
              };
            u.useEffect(function () {
              null !== a.current && a.current.updateHandlers(l);
            }),
              t1(
                o,
                "pointerdown",
                (e || n || r || i) &&
                  function (t) {
                    a.current = new e5(t, l, { transformPagePoint: s });
                  }
              ),
              t6(function () {
                return a.current && a.current.end();
              });
          }),
          drag: el(function (t) {
            var e = t.dragControls,
              n = t.visualElement,
              r = Y(function () {
                return new nV(n);
              });
            u.useEffect(
              function () {
                return e && e.subscribe(r);
              },
              [r, e]
            ),
              u.useEffect(
                function () {
                  return r.addListeners();
                },
                [r]
              );
          }),
        },
        nL = [
          "LayoutMeasure",
          "BeforeLayoutMeasure",
          "LayoutUpdate",
          "ViewportBoxUpdate",
          "Update",
          "Render",
          "AnimationComplete",
          "LayoutAnimationComplete",
          "AnimationStart",
          "LayoutAnimationStart",
          "SetAxisTarget",
          "Unmount",
        ],
        nk = function (t) {
          var e = t.treeType,
            n = void 0 === e ? "" : e,
            r = t.build,
            i = t.getBaseTarget,
            o = t.makeTargetAnimatable,
            a = t.measureViewportBox,
            u = t.render,
            l = t.readValueFromInstance,
            c = t.removeValueFromRenderState,
            d = t.sortNodePosition,
            p = t.scrapeMotionValuesFromProps;
          return function (t, e) {
            var v,
              h,
              m,
              y,
              x,
              _ = t.parent,
              E = t.props,
              A = t.presenceId,
              S = t.blockInitialAnimation,
              b = t.visualState,
              w = t.shouldReduceMotion;
            void 0 === e && (e = {});
            var P = !1,
              T = b.latestValues,
              V = b.renderState,
              C =
                ((v = nL.map(function () {
                  return new eF();
                })),
                (h = {}),
                (m = {
                  clearAllListeners: function () {
                    return v.forEach(function (t) {
                      return t.clear();
                    });
                  },
                  updatePropListeners: function (t) {
                    nL.forEach(function (e) {
                      var n,
                        r = "on" + e,
                        i = t[r];
                      null === (n = h[e]) || void 0 === n || n.call(h),
                        i && (h[e] = m[r](i));
                    });
                  },
                }),
                v.forEach(function (t, e) {
                  (m["on" + nL[e]] = function (e) {
                    return t.add(e);
                  }),
                    (m["notify" + nL[e]] = function () {
                      for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                      return t.notify.apply(
                        t,
                        s.__spreadArray([], s.__read(e), !1)
                      );
                    });
                }),
                m),
              R = new Map(),
              L = new Map(),
              k = {},
              D = s.__assign({}, T);
            function M() {
              y && P && (I(), u(y, V, E.style, W.projection));
            }
            function I() {
              r(W, V, T, e, E);
            }
            function O() {
              C.notifyUpdate(T);
            }
            function j(t, e) {
              var n = e.onChange(function (e) {
                  (T[t] = e), E.onUpdate && g.default.update(O, !1, !0);
                }),
                r = e.onRenderRequest(W.scheduleRender);
              L.set(t, function () {
                n(), r();
              });
            }
            var B = p(E);
            for (var z in B) {
              var Y = B[z];
              void 0 !== T[z] && tu(Y) && Y.set(T[z], !1);
            }
            var X = U(E),
              H = N(E),
              W = s.__assign(
                s.__assign(
                  {
                    treeType: n,
                    current: null,
                    depth: _ ? _.depth + 1 : 0,
                    parent: _,
                    children: new Set(),
                    presenceId: A,
                    shouldReduceMotion: w,
                    variantChildren: H ? new Set() : void 0,
                    isVisible: void 0,
                    manuallyAnimateOnMount: Boolean(
                      null == _ ? void 0 : _.isMounted()
                    ),
                    blockInitialAnimation: S,
                    isMounted: function () {
                      return Boolean(y);
                    },
                    mount: function (t) {
                      (P = !0),
                        (y = W.current = t),
                        W.projection && W.projection.mount(t),
                        H &&
                          _ &&
                          !X &&
                          (x = null == _ ? void 0 : _.addVariantChild(W)),
                        R.forEach(function (t, e) {
                          return j(e, t);
                        }),
                        null == _ || _.children.add(W),
                        W.setProps(E);
                    },
                    unmount: function () {
                      var t;
                      null === (t = W.projection) ||
                        void 0 === t ||
                        t.unmount(),
                        f.cancelSync.update(O),
                        f.cancelSync.render(M),
                        L.forEach(function (t) {
                          return t();
                        }),
                        null == x || x(),
                        null == _ || _.children.delete(W),
                        C.clearAllListeners(),
                        (y = void 0),
                        (P = !1);
                    },
                    addVariantChild: function (t) {
                      var e,
                        n = W.getClosestVariantNode();
                      if (n)
                        return (
                          null === (e = n.variantChildren) ||
                            void 0 === e ||
                            e.add(t),
                          function () {
                            return n.variantChildren.delete(t);
                          }
                        );
                    },
                    sortNodePosition: function (t) {
                      return d && n === t.treeType
                        ? d(W.getInstance(), t.getInstance())
                        : 0;
                    },
                    getClosestVariantNode: function () {
                      return H
                        ? W
                        : null == _
                        ? void 0
                        : _.getClosestVariantNode();
                    },
                    getLayoutId: function () {
                      return E.layoutId;
                    },
                    getInstance: function () {
                      return y;
                    },
                    getStaticValue: function (t) {
                      return T[t];
                    },
                    setStaticValue: function (t, e) {
                      return (T[t] = e);
                    },
                    getLatestValues: function () {
                      return T;
                    },
                    setVisibility: function (t) {
                      W.isVisible !== t &&
                        ((W.isVisible = t), W.scheduleRender());
                    },
                    makeTargetAnimatable: function (t, e) {
                      return void 0 === e && (e = !0), o(W, t, E, e);
                    },
                    measureViewportBox: function () {
                      return a(y, E);
                    },
                    addValue: function (t, e) {
                      W.hasValue(t) && W.removeValue(t),
                        R.set(t, e),
                        (T[t] = e.get()),
                        j(t, e);
                    },
                    removeValue: function (t) {
                      var e;
                      R.delete(t),
                        null === (e = L.get(t)) || void 0 === e || e(),
                        L.delete(t),
                        delete T[t],
                        c(t, V);
                    },
                    hasValue: function (t) {
                      return R.has(t);
                    },
                    getValue: function (t, e) {
                      var n = R.get(t);
                      return (
                        void 0 === n &&
                          void 0 !== e &&
                          ((n = eB(e)), W.addValue(t, n)),
                        n
                      );
                    },
                    forEachValue: function (t) {
                      return R.forEach(t);
                    },
                    readValue: function (t) {
                      var n;
                      return null !== (n = T[t]) && void 0 !== n
                        ? n
                        : l(y, t, e);
                    },
                    setBaseTarget: function (t, e) {
                      D[t] = e;
                    },
                    getBaseTarget: function (t) {
                      if (i) {
                        var e = i(E, t);
                        if (void 0 !== e && !tu(e)) return e;
                      }
                      return D[t];
                    },
                  },
                  C
                ),
                {
                  build: function () {
                    return I(), V;
                  },
                  scheduleRender: function () {
                    g.default.render(M, !1, !0);
                  },
                  syncRender: M,
                  setProps: function (t) {
                    (t.transformTemplate || E.transformTemplate) &&
                      W.scheduleRender(),
                      (E = t),
                      C.updatePropListeners(t),
                      (k = (function (t, e, n) {
                        var r;
                        for (var i in e) {
                          var o = e[i],
                            a = n[i];
                          if (tu(o)) t.addValue(i, o);
                          else if (tu(a)) t.addValue(i, eB(o));
                          else if (a !== o) {
                            if (t.hasValue(i)) {
                              var s = t.getValue(i);
                              s.hasAnimated || s.set(o);
                            } else
                              t.addValue(
                                i,
                                eB(
                                  null !== (r = t.getStaticValue(i)) &&
                                    void 0 !== r
                                    ? r
                                    : o
                                )
                              );
                          }
                        }
                        for (var i in n) void 0 === e[i] && t.removeValue(i);
                        return e;
                      })(W, p(E), k));
                  },
                  getProps: function () {
                    return E;
                  },
                  getVariant: function (t) {
                    var e;
                    return null === (e = E.variants) || void 0 === e
                      ? void 0
                      : e[t];
                  },
                  getDefaultTransition: function () {
                    return E.transition;
                  },
                  getTransformPagePoint: function () {
                    return E.transformPagePoint;
                  },
                  getVariantContext: function (t) {
                    if ((void 0 === t && (t = !1), t))
                      return null == _ ? void 0 : _.getVariantContext();
                    if (!X) {
                      var e =
                        (null == _ ? void 0 : _.getVariantContext()) || {};
                      return void 0 !== E.initial && (e.initial = E.initial), e;
                    }
                    for (var n = {}, r = 0; r < nM; r++) {
                      var i = nD[r],
                        o = E[i];
                      (F(o) || !1 === o) && (n[i] = o);
                    }
                    return n;
                  },
                }
              );
            return W;
          };
        },
        nD = s.__spreadArray(["initial"], s.__read(eJ), !1),
        nM = nD.length;
      function nI(t) {
        return "string" == typeof t && t.startsWith("var(--");
      }
      var nO = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function nF(t, e, n) {
        void 0 === n && (n = 1),
          l.invariant(
            n <= 4,
            'Max CSS variable fallback depth detected in property "'.concat(
              t,
              '". This may indicate a circular fallback dependency.'
            )
          );
        var r = s.__read(
            (function (t) {
              var e = nO.exec(t);
              if (!e) return [,];
              var n = s.__read(e, 3);
              return [n[1], n[2]];
            })(t),
            2
          ),
          i = r[0],
          o = r[1];
        if (i) {
          var a = window.getComputedStyle(e).getPropertyValue(i);
          return a ? a.trim() : nI(o) ? nF(o, e, n + 1) : o;
        }
      }
      var nj = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        nB = function (t) {
          return nj.has(t);
        },
        nU = function (t, e) {
          t.set(e, !1), t.set(e);
        },
        nN = function (t) {
          return t === c.number || t === c.px;
        };
      ((i = o || (o = {})).width = "width"),
        (i.height = "height"),
        (i.left = "left"),
        (i.right = "right"),
        (i.top = "top"),
        (i.bottom = "bottom");
      var nz = function (t, e) {
          return parseFloat(t.split(", ")[e]);
        },
        nY = function (t, e) {
          return function (n, r) {
            var i = r.transform;
            if ("none" === i || !i) return 0;
            var o = i.match(/^matrix3d\((.+)\)$/);
            if (o) return nz(o[1], e);
            var a = i.match(/^matrix\((.+)\)$/);
            return a ? nz(a[1], t) : 0;
          };
        },
        nX = new Set(["x", "y", "z"]),
        nH = tn.filter(function (t) {
          return !nX.has(t);
        }),
        nW = {
          width: function (t, e) {
            var n = t.x,
              r = e.paddingLeft,
              i = e.paddingRight;
            return (
              n.max -
              n.min -
              parseFloat(void 0 === r ? "0" : r) -
              parseFloat(void 0 === i ? "0" : i)
            );
          },
          height: function (t, e) {
            var n = t.y,
              r = e.paddingTop,
              i = e.paddingBottom;
            return (
              n.max -
              n.min -
              parseFloat(void 0 === r ? "0" : r) -
              parseFloat(void 0 === i ? "0" : i)
            );
          },
          top: function (t, e) {
            return parseFloat(e.top);
          },
          left: function (t, e) {
            return parseFloat(e.left);
          },
          bottom: function (t, e) {
            var n = t.y;
            return parseFloat(e.top) + (n.max - n.min);
          },
          right: function (t, e) {
            var n = t.x;
            return parseFloat(e.left) + (n.max - n.min);
          },
          x: nY(4, 13),
          y: nY(5, 14),
        },
        nG = function (t, e, n) {
          var r = e.measureViewportBox(),
            i = e.getInstance(),
            o = getComputedStyle(i),
            a = o.display,
            s = {};
          "none" === a && e.setStaticValue("display", t.display || "block"),
            n.forEach(function (t) {
              s[t] = nW[t](r, o);
            }),
            e.syncRender();
          var u = e.measureViewportBox();
          return (
            n.forEach(function (n) {
              nU(e.getValue(n), s[n]), (t[n] = nW[n](u, o));
            }),
            t
          );
        },
        nZ = function (t, e, n, r) {
          void 0 === n && (n = {}),
            void 0 === r && (r = {}),
            (e = s.__assign({}, e)),
            (r = s.__assign({}, r));
          var i = Object.keys(e).filter(nB),
            o = [],
            a = !1,
            u = [];
          if (
            (i.forEach(function (i) {
              var s,
                d = t.getValue(i);
              if (t.hasValue(i)) {
                var f = n[i],
                  p = ez(f),
                  v = e[i];
                if (tF(v)) {
                  var h = v.length,
                    m = null === v[0] ? 1 : 0;
                  p = ez((f = v[m]));
                  for (var g = m; g < h; g++)
                    s
                      ? l.invariant(
                          ez(v[g]) === s,
                          "All keyframes must be of the same type"
                        )
                      : ((s = ez(v[g])),
                        l.invariant(
                          s === p || (nN(p) && nN(s)),
                          "Keyframes must be of the same dimension as the current value"
                        ));
                } else s = ez(v);
                if (p !== s) {
                  if (nN(p) && nN(s)) {
                    var y,
                      x = d.get();
                    "string" == typeof x && d.set(parseFloat(x)),
                      "string" == typeof v
                        ? (e[i] = parseFloat(v))
                        : Array.isArray(v) &&
                          s === c.px &&
                          (e[i] = v.map(parseFloat));
                  } else
                    (null == p ? void 0 : p.transform) &&
                    (null == s ? void 0 : s.transform) &&
                    (0 === f || 0 === v)
                      ? 0 === f
                        ? d.set(s.transform(f))
                        : (e[i] = p.transform(v))
                      : (a ||
                          ((y = []),
                          nH.forEach(function (e) {
                            var n = t.getValue(e);
                            void 0 !== n &&
                              (y.push([e, n.get()]),
                              n.set(e.startsWith("scale") ? 1 : 0));
                          }),
                          y.length && t.syncRender(),
                          (o = y),
                          (a = !0)),
                        u.push(i),
                        (r[i] = void 0 !== r[i] ? r[i] : e[i]),
                        nU(d, v));
                }
              }
            }),
            !u.length)
          )
            return { target: e, transitionEnd: r };
          var d = u.indexOf("height") >= 0 ? window.pageYOffset : null,
            f = nG(e, t, u);
          return (
            o.length &&
              o.forEach(function (e) {
                var n = s.__read(e, 2),
                  r = n[0],
                  i = n[1];
                t.getValue(r).set(i);
              }),
            t.syncRender(),
            null !== d && window.scrollTo({ top: d }),
            { target: f, transitionEnd: r }
          );
        },
        nK = function (t, e, n, r) {
          var i,
            o,
            a = (function (t, e, n) {
              var r,
                i = s.__rest(e, []),
                o = t.getInstance();
              if (!(o instanceof Element))
                return { target: i, transitionEnd: n };
              for (var a in (n && (n = s.__assign({}, n)),
              t.forEachValue(function (t) {
                var e = t.get();
                if (nI(e)) {
                  var n = nF(e, o);
                  n && t.set(n);
                }
              }),
              i)) {
                var u = i[a];
                if (nI(u)) {
                  var l = nF(u, o);
                  l &&
                    ((i[a] = l),
                    n && ((null !== (r = n[a]) && void 0 !== r) || (n[a] = u)));
                }
              }
              return { target: i, transitionEnd: n };
            })(t, e, r);
          return (
            (e = a.target),
            (r = a.transitionEnd),
            (i = e),
            (o = r),
            Object.keys(i).some(nB)
              ? nZ(t, i, n, o)
              : { target: i, transitionEnd: o }
          );
        },
        n$ = {
          treeType: "dom",
          readValueFromInstance: function (t, e) {
            if (to(e)) {
              var n = eT(e);
              return (n && n.default) || 0;
            }
            var r = window.getComputedStyle(t);
            return (tc(e) ? r.getPropertyValue(e) : r[e]) || 0;
          },
          sortNodePosition: function (t, e) {
            return 2 & t.compareDocumentPosition(e) ? 1 : -1;
          },
          getBaseTarget: function (t, e) {
            var n;
            return null === (n = t.style) || void 0 === n ? void 0 : n[e];
          },
          measureViewportBox: function (t, e) {
            return nP(t, e.transformPagePoint);
          },
          resetTransform: function (t, e, n) {
            var r = n.transformTemplate;
            (e.style.transform = r ? r({}, "") : "none"), t.scheduleRender();
          },
          restoreTransform: function (t, e) {
            t.style.transform = e.style.transform;
          },
          removeValueFromRenderState: function (t, e) {
            var n = e.vars,
              r = e.style;
            delete n[t], delete r[t];
          },
          makeTargetAnimatable: function (t, e, n, r) {
            var i = n.transformValues;
            void 0 === r && (r = !0);
            var o = e.transition,
              a = e.transitionEnd,
              u = s.__rest(e, ["transition", "transitionEnd"]),
              l = eG(u, o || {}, t);
            if ((i && (a && (a = i(a)), u && (u = i(u)), l && (l = i(l))), r)) {
              eW(t, u, l);
              var c = nK(t, u, l, a);
              (a = c.transitionEnd), (u = c.target);
            }
            return s.__assign({ transition: o, transitionEnd: a }, u);
          },
          scrapeMotionValuesFromProps: tM,
          build: function (t, e, n, r, i) {
            void 0 !== t.isVisible &&
              (e.style.visibility = t.isVisible ? "visible" : "hidden"),
              tp(e, n, r, i.transformTemplate);
          },
          render: tL,
        },
        nq = nk(n$),
        nJ = nk(
          s.__assign(s.__assign({}, n$), {
            getBaseTarget: function (t, e) {
              return t[e];
            },
            readValueFromInstance: function (t, e) {
              var n;
              return to(e)
                ? (null === (n = eT(e)) || void 0 === n ? void 0 : n.default) ||
                    0
                : ((e = tk.has(e) ? e : tR(e)), t.getAttribute(e));
            },
            scrapeMotionValuesFromProps: tI,
            build: function (t, e, n, r, i) {
              tP(e, n, r, i.transformTemplate);
            },
            render: tD,
          })
        ),
        nQ = function (t, e) {
          return J(t)
            ? nJ(e, { enableHardwareAcceleration: !1 })
            : nq(e, { enableHardwareAcceleration: !0 });
        };
      function n0(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      var n1 = {
          correct: function (t, e) {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!c.px.test(t)) return t;
              t = parseFloat(t);
            }
            var n = n0(t, e.target.x),
              r = n0(t, e.target.y);
            return "".concat(n, "% ").concat(r, "%");
          },
        },
        n2 = "_$css",
        n5 = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            s.__extends(e, t),
            (e.prototype.componentDidMount = function () {
              var t = this,
                e = this.props,
                n = e.visualElement,
                r = e.layoutGroup,
                i = e.switchLayoutGroup,
                o = e.layoutId,
                a = n.projection;
              tt(n3),
                a &&
                  ((null == r ? void 0 : r.group) && r.group.add(a),
                  (null == i ? void 0 : i.register) && o && i.register(a),
                  a.root.didUpdate(),
                  a.addEventListener("animationComplete", function () {
                    t.safeToRemove();
                  }),
                  a.setOptions(
                    s.__assign(s.__assign({}, a.options), {
                      onExitComplete: function () {
                        return t.safeToRemove();
                      },
                    })
                  )),
                (X.hasEverUpdated = !0);
            }),
            (e.prototype.getSnapshotBeforeUpdate = function (t) {
              var e = this,
                n = this.props,
                r = n.layoutDependency,
                i = n.visualElement,
                o = n.drag,
                a = n.isPresent,
                s = i.projection;
              return (
                s &&
                  ((s.isPresent = a),
                  o || t.layoutDependency !== r || void 0 === r
                    ? s.willUpdate()
                    : this.safeToRemove(),
                  t.isPresent === a ||
                    (a
                      ? s.promote()
                      : s.relegate() ||
                        g.default.postRender(function () {
                          var t;
                          (null === (t = s.getStack()) || void 0 === t
                            ? void 0
                            : t.members.length) || e.safeToRemove();
                        }))),
                null
              );
            }),
            (e.prototype.componentDidUpdate = function () {
              var t = this.props.visualElement.projection;
              t &&
                (t.root.didUpdate(),
                !t.currentAnimation && t.isLead() && this.safeToRemove());
            }),
            (e.prototype.componentWillUnmount = function () {
              var t = this.props,
                e = t.visualElement,
                n = t.layoutGroup,
                r = t.switchLayoutGroup,
                i = e.projection;
              i &&
                (i.scheduleCheckAfterUnmount(),
                (null == n ? void 0 : n.group) && n.group.remove(i),
                (null == r ? void 0 : r.deregister) && r.deregister(i));
            }),
            (e.prototype.safeToRemove = function () {
              var t = this.props.safeToRemove;
              null == t || t();
            }),
            (e.prototype.render = function () {
              return null;
            }),
            e
          );
        })(m.default.Component),
        n3 = {
          borderRadius: s.__assign(s.__assign({}, n1), {
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          }),
          borderTopLeftRadius: n1,
          borderTopRightRadius: n1,
          borderBottomLeftRadius: n1,
          borderBottomRightRadius: n1,
          boxShadow: {
            correct: function (t, e) {
              var n = e.treeScale,
                r = e.projectionDelta,
                i = t,
                o = t.includes("var("),
                a = [];
              o &&
                (t = t.replace(nO, function (t) {
                  return a.push(t), n2;
                }));
              var s = c.complex.parse(t);
              if (s.length > 5) return i;
              var u = c.complex.createTransformer(t),
                l = "number" != typeof s[0] ? 1 : 0,
                f = r.x.scale * n.x,
                p = r.y.scale * n.y;
              (s[0 + l] /= f), (s[1 + l] /= p);
              var v = d.mix(f, p, 0.5);
              "number" == typeof s[2 + l] && (s[2 + l] /= v),
                "number" == typeof s[3 + l] && (s[3 + l] /= v);
              var h = u(s);
              if (o) {
                var m = 0;
                h = h.replace(n2, function () {
                  var t = a[m];
                  return m++, t;
                });
              }
              return h;
            },
          },
        },
        n4 = {
          measureLayout: function (t) {
            var e = s.__read(ev(), 2),
              n = e[0],
              r = e[1],
              i = u.useContext(W);
            return m.default.createElement(
              n5,
              s.__assign({}, t, {
                layoutGroup: i,
                switchLayoutGroup: u.useContext(G),
                isPresent: n,
                safeToRemove: r,
              })
            );
          },
        };
      function n9(t, e, n) {
        void 0 === n && (n = {});
        var r = tu(t) ? t : eB(t);
        return (
          eM("", r, e, n),
          {
            stop: function () {
              return r.stop();
            },
            isAnimating: function () {
              return r.isAnimating();
            },
          }
        );
      }
      var n7 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        n8 = n7.length,
        n6 = function (t) {
          return "string" == typeof t ? parseFloat(t) : t;
        },
        rt = function (t) {
          return "number" == typeof t || c.px.test(t);
        };
      function re(t, e) {
        var n;
        return null !== (n = t[e]) && void 0 !== n ? n : t.borderRadius;
      }
      var rn = ri(0, 0.5, d.circOut),
        rr = ri(0.5, 0.95, d.linear);
      function ri(t, e, n) {
        return function (r) {
          return r < t ? 0 : r > e ? 1 : n(d.progress(t, e, r));
        };
      }
      function ro(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function ra(t, e) {
        ro(t.x, e.x), ro(t.y, e.y);
      }
      function rs(t, e, n, r, i) {
        return (
          (t -= e),
          (t = r + (1 / n) * (t - r)),
          void 0 !== i && (t = r + (1 / i) * (t - r)),
          t
        );
      }
      function ru(t, e, n, r, i) {
        var o = s.__read(n, 3),
          a = o[0],
          u = o[1],
          l = o[2];
        !(function (t, e, n, r, i, o, a) {
          if (
            (void 0 === e && (e = 0),
            void 0 === n && (n = 1),
            void 0 === r && (r = 0.5),
            void 0 === o && (o = t),
            void 0 === a && (a = t),
            c.percent.test(e) &&
              ((e = parseFloat(e)), (e = d.mix(a.min, a.max, e / 100) - a.min)),
            "number" == typeof e)
          ) {
            var s = d.mix(o.min, o.max, r);
            t === o && (s -= e),
              (t.min = rs(t.min, e, n, s, i)),
              (t.max = rs(t.max, e, n, s, i));
          }
        })(t, e[a], e[u], e[l], e.scale, r, i);
      }
      var rl = ["x", "scaleX", "originX"],
        rc = ["y", "scaleY", "originY"];
      function rd(t, e, n, r) {
        ru(t.x, e, rl, null == n ? void 0 : n.x, null == r ? void 0 : r.x),
          ru(t.y, e, rc, null == n ? void 0 : n.y, null == r ? void 0 : r.y);
      }
      function rf(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function rp(t) {
        return rf(t.x) && rf(t.y);
      }
      function rv(t, e) {
        return (
          t.x.min === e.x.min &&
          t.x.max === e.x.max &&
          t.y.min === e.y.min &&
          t.y.max === e.y.max
        );
      }
      var rh = (function () {
        function t() {
          this.members = [];
        }
        return (
          (t.prototype.add = function (t) {
            eI(this.members, t), t.scheduleRender();
          }),
          (t.prototype.remove = function (t) {
            if (
              (eO(this.members, t),
              t === this.prevLead && (this.prevLead = void 0),
              t === this.lead)
            ) {
              var e = this.members[this.members.length - 1];
              e && this.promote(e);
            }
          }),
          (t.prototype.relegate = function (t) {
            var e,
              n = this.members.findIndex(function (e) {
                return t === e;
              });
            if (0 === n) return !1;
            for (var r = n; r >= 0; r--) {
              var i = this.members[r];
              if (!1 !== i.isPresent) {
                e = i;
                break;
              }
            }
            return !!e && (this.promote(e), !0);
          }),
          (t.prototype.promote = function (t, e) {
            var n,
              r = this.lead;
            t !== r &&
              ((this.prevLead = r),
              (this.lead = t),
              t.show(),
              r &&
                (r.instance && r.scheduleRender(),
                t.scheduleRender(),
                (t.resumeFrom = r),
                e && (t.resumeFrom.preserveOpacity = !0),
                r.snapshot &&
                  ((t.snapshot = r.snapshot),
                  (t.snapshot.latestValues =
                    r.animationValues || r.latestValues),
                  (t.snapshot.isShared = !0)),
                (null === (n = t.root) || void 0 === n
                  ? void 0
                  : n.isUpdating) && (t.isLayoutDirty = !0),
                !1 === t.options.crossfade && r.hide()));
          }),
          (t.prototype.exitAnimationComplete = function () {
            this.members.forEach(function (t) {
              var e, n, r, i, o;
              null === (n = (e = t.options).onExitComplete) ||
                void 0 === n ||
                n.call(e),
                null ===
                  (o =
                    null === (r = t.resumingFrom) || void 0 === r
                      ? void 0
                      : (i = r.options).onExitComplete) ||
                  void 0 === o ||
                  o.call(i);
            });
          }),
          (t.prototype.scheduleRender = function () {
            this.members.forEach(function (t) {
              t.instance && t.scheduleRender(!1);
            });
          }),
          (t.prototype.removeLeadSnapshot = function () {
            this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
          }),
          t
        );
      })();
      function rm(t, e, n) {
        var r = t.x.translate / e.x,
          i = t.y.translate / e.y,
          o = "translate3d(".concat(r, "px, ").concat(i, "px, 0) ");
        if (((o += "scale(".concat(1 / e.x, ", ").concat(1 / e.y, ") ")), n)) {
          var a = n.rotate,
            s = n.rotateX,
            u = n.rotateY;
          a && (o += "rotate(".concat(a, "deg) ")),
            s && (o += "rotateX(".concat(s, "deg) ")),
            u && (o += "rotateY(".concat(u, "deg) "));
        }
        var l = t.x.scale * e.x,
          c = t.y.scale * e.y;
        return "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)" ===
          (o += "scale(".concat(l, ", ").concat(c, ")"))
          ? "none"
          : o;
      }
      var rg = function (t, e) {
          return t.depth - e.depth;
        },
        ry = (function () {
          function t() {
            (this.children = []), (this.isDirty = !1);
          }
          return (
            (t.prototype.add = function (t) {
              eI(this.children, t), (this.isDirty = !0);
            }),
            (t.prototype.remove = function (t) {
              eO(this.children, t), (this.isDirty = !0);
            }),
            (t.prototype.forEach = function (t) {
              this.isDirty && this.children.sort(rg),
                (this.isDirty = !1),
                this.children.forEach(t);
            }),
            t
          );
        })();
      function rx(t) {
        var e = t.attachResizeListener,
          n = t.defaultParent,
          r = t.measureScroll,
          i = t.checkIsScrollRoot,
          o = t.resetTransform;
        return (function () {
          function t(t, e, r) {
            var i = this;
            void 0 === e && (e = {}),
              void 0 === r && (r = null == n ? void 0 : n()),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.potentialNodes = new Map()),
              (this.checkUpdateFailed = function () {
                i.isUpdating && ((i.isUpdating = !1), i.clearAllSnapshots());
              }),
              (this.updateProjection = function () {
                i.nodes.forEach(rP), i.nodes.forEach(rT);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.id = t),
              (this.latestValues = e),
              (this.root = r ? r.root || r : this),
              (this.path = r
                ? s.__spreadArray(
                    s.__spreadArray([], s.__read(r.path), !1),
                    [r],
                    !1
                  )
                : []),
              (this.parent = r),
              (this.depth = r ? r.depth + 1 : 0),
              t && this.root.registerPotentialNode(t, this);
            for (var o = 0; o < this.path.length; o++)
              this.path[o].shouldResetTransform = !0;
            this.root === this && (this.nodes = new ry());
          }
          return (
            (t.prototype.addEventListener = function (t, e) {
              return (
                this.eventHandlers.has(t) ||
                  this.eventHandlers.set(t, new eF()),
                this.eventHandlers.get(t).add(e)
              );
            }),
            (t.prototype.notifyListeners = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
              var r = this.eventHandlers.get(t);
              null == r ||
                r.notify.apply(r, s.__spreadArray([], s.__read(e), !1));
            }),
            (t.prototype.hasListeners = function (t) {
              return this.eventHandlers.has(t);
            }),
            (t.prototype.registerPotentialNode = function (t, e) {
              this.potentialNodes.set(t, e);
            }),
            (t.prototype.mount = function (t, n) {
              var r = this;
              if ((void 0 === n && (n = !1), !this.instance)) {
                (this.isSVG = t instanceof SVGElement && "svg" !== t.tagName),
                  (this.instance = t);
                var i = this.options,
                  o = i.layoutId,
                  a = i.layout,
                  u = i.visualElement;
                if (
                  (u && !u.getInstance() && u.mount(t),
                  this.root.nodes.add(this),
                  null === (l = this.parent) ||
                    void 0 === l ||
                    l.children.add(this),
                  this.id && this.root.potentialNodes.delete(this.id),
                  n && (a || o) && (this.isLayoutDirty = !0),
                  e)
                ) {
                  var l,
                    c,
                    d = function () {
                      return (r.root.updateBlockedByResize = !1);
                    };
                  e(t, function () {
                    (r.root.updateBlockedByResize = !0),
                      clearTimeout(c),
                      (c = window.setTimeout(d, 250)),
                      X.hasAnimatedSinceResize &&
                        ((X.hasAnimatedSinceResize = !1), r.nodes.forEach(rw));
                  });
                }
                o && this.root.registerSharedNode(o, this),
                  !1 !== this.options.animate &&
                    u &&
                    (o || a) &&
                    this.addEventListener("didUpdate", function (t) {
                      var e,
                        n,
                        i,
                        o,
                        a,
                        l = t.delta,
                        c = t.hasLayoutChanged,
                        d = t.hasRelativeTargetChanged,
                        f = t.layout;
                      if (r.isTreeAnimationBlocked()) {
                        (r.target = void 0), (r.relativeTarget = void 0);
                        return;
                      }
                      var p =
                          null !==
                            (n =
                              null !== (e = r.options.transition) &&
                              void 0 !== e
                                ? e
                                : u.getDefaultTransition()) && void 0 !== n
                            ? n
                            : rD,
                        v = u.getProps(),
                        h = v.onLayoutAnimationStart,
                        m = v.onLayoutAnimationComplete,
                        g = !r.targetLayout || !rv(r.targetLayout, f) || d,
                        y = !c && d;
                      if (
                        (null === (i = r.resumeFrom) || void 0 === i
                          ? void 0
                          : i.instance) ||
                        y ||
                        (c && (g || !r.currentAnimation))
                      ) {
                        r.resumeFrom &&
                          ((r.resumingFrom = r.resumeFrom),
                          (r.resumingFrom.resumingFrom = void 0)),
                          r.setAnimationOrigin(l, y);
                        var x = s.__assign(s.__assign({}, eD(p, "layout")), {
                          onPlay: h,
                          onComplete: m,
                        });
                        u.shouldReduceMotion && ((x.delay = 0), (x.type = !1)),
                          r.startAnimation(x);
                      } else c || 0 !== r.animationProgress || r.finishAnimation(), r.isLead() && (null === (a = (o = r.options).onExitComplete) || void 0 === a || a.call(o));
                      r.targetLayout = f;
                    });
              }
            }),
            (t.prototype.unmount = function () {
              var t, e;
              this.options.layoutId && this.willUpdate(),
                this.root.nodes.remove(this),
                null === (t = this.getStack()) ||
                  void 0 === t ||
                  t.remove(this),
                null === (e = this.parent) ||
                  void 0 === e ||
                  e.children.delete(this),
                (this.instance = void 0),
                f.cancelSync.preRender(this.updateProjection);
            }),
            (t.prototype.blockUpdate = function () {
              this.updateManuallyBlocked = !0;
            }),
            (t.prototype.unblockUpdate = function () {
              this.updateManuallyBlocked = !1;
            }),
            (t.prototype.isUpdateBlocked = function () {
              return this.updateManuallyBlocked || this.updateBlockedByResize;
            }),
            (t.prototype.isTreeAnimationBlocked = function () {
              var t;
              return (
                this.isAnimationBlocked ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isTreeAnimationBlocked()) ||
                !1
              );
            }),
            (t.prototype.startUpdate = function () {
              var t;
              this.isUpdateBlocked() ||
                ((this.isUpdating = !0),
                null === (t = this.nodes) || void 0 === t || t.forEach(rV));
            }),
            (t.prototype.willUpdate = function (t) {
              if ((void 0 === t && (t = !0), this.root.isUpdateBlocked())) {
                null === (n = (e = this.options).onExitComplete) ||
                  void 0 === n ||
                  n.call(e);
                return;
              }
              if (
                (this.root.isUpdating || this.root.startUpdate(),
                !this.isLayoutDirty)
              ) {
                this.isLayoutDirty = !0;
                for (var e, n, r, i = 0; i < this.path.length; i++) {
                  var o = this.path[i];
                  (o.shouldResetTransform = !0), o.updateScroll();
                }
                var a = this.options,
                  s = a.layoutId,
                  u = a.layout;
                if (void 0 !== s || u) {
                  var l =
                    null === (r = this.options.visualElement) || void 0 === r
                      ? void 0
                      : r.getProps().transformTemplate;
                  (this.prevTransformTemplateValue =
                    null == l ? void 0 : l(this.latestValues, "")),
                    this.updateSnapshot(),
                    t && this.notifyListeners("willUpdate");
                }
              }
            }),
            (t.prototype.didUpdate = function () {
              if (this.isUpdateBlocked()) {
                this.unblockUpdate(),
                  this.clearAllSnapshots(),
                  this.nodes.forEach(rS);
                return;
              }
              this.isUpdating &&
                ((this.isUpdating = !1),
                this.potentialNodes.size &&
                  (this.potentialNodes.forEach(rM),
                  this.potentialNodes.clear()),
                this.nodes.forEach(rb),
                this.nodes.forEach(r_),
                this.nodes.forEach(rE),
                this.clearAllSnapshots(),
                f.flushSync.update(),
                f.flushSync.preRender(),
                f.flushSync.render());
            }),
            (t.prototype.clearAllSnapshots = function () {
              this.nodes.forEach(rA), this.sharedNodes.forEach(rC);
            }),
            (t.prototype.scheduleUpdateProjection = function () {
              g.default.preRender(this.updateProjection, !1, !0);
            }),
            (t.prototype.scheduleCheckAfterUnmount = function () {
              var t = this;
              g.default.postRender(function () {
                t.isLayoutDirty
                  ? t.root.didUpdate()
                  : t.root.checkUpdateFailed();
              });
            }),
            (t.prototype.updateSnapshot = function () {
              if (!this.snapshot && this.instance) {
                var t = this.measure(),
                  e = this.removeTransform(this.removeElementScroll(t));
                rO(e),
                  (this.snapshot = {
                    measured: t,
                    layout: e,
                    latestValues: {},
                  });
              }
            }),
            (t.prototype.updateLayout = function () {
              if (
                this.instance &&
                (this.updateScroll(),
                (this.options.alwaysMeasureLayout && this.isLead()) ||
                  this.isLayoutDirty)
              ) {
                if (this.resumeFrom && !this.resumeFrom.instance)
                  for (var t, e = 0; e < this.path.length; e++)
                    this.path[e].updateScroll();
                var n = this.measure();
                rO(n);
                var r = this.layout;
                (this.layout = {
                  measured: n,
                  actual: this.removeElementScroll(n),
                }),
                  (this.layoutCorrected = nf()),
                  (this.isLayoutDirty = !1),
                  (this.projectionDelta = void 0),
                  this.notifyListeners("measure", this.layout.actual),
                  null === (t = this.options.visualElement) ||
                    void 0 === t ||
                    t.notifyLayoutMeasure(
                      this.layout.actual,
                      null == r ? void 0 : r.actual
                    );
              }
            }),
            (t.prototype.updateScroll = function () {
              this.options.layoutScroll &&
                this.instance &&
                ((this.isScrollRoot = i(this.instance)),
                (this.scroll = r(this.instance)));
            }),
            (t.prototype.resetTransform = function () {
              if (o) {
                var t,
                  e = this.isLayoutDirty || this.shouldResetTransform,
                  n = this.projectionDelta && !rp(this.projectionDelta),
                  r =
                    null === (t = this.options.visualElement) || void 0 === t
                      ? void 0
                      : t.getProps().transformTemplate,
                  i = null == r ? void 0 : r(this.latestValues, ""),
                  a = i !== this.prevTransformTemplateValue;
                e &&
                  (n || ng(this.latestValues) || a) &&
                  (o(this.instance, i),
                  (this.shouldResetTransform = !1),
                  this.scheduleRender());
              }
            }),
            (t.prototype.measure = function () {
              var t = this.options.visualElement;
              if (!t) return nf();
              var e = t.measureViewportBox(),
                n = this.root.scroll;
              return n && (nE(e.x, n.x), nE(e.y, n.y)), e;
            }),
            (t.prototype.removeElementScroll = function (t) {
              var e = nf();
              ra(e, t);
              for (var n = 0; n < this.path.length; n++) {
                var r = this.path[n],
                  i = r.scroll,
                  o = r.options,
                  a = r.isScrollRoot;
                if (r !== this.root && i && o.layoutScroll) {
                  if (a) {
                    ra(e, t);
                    var s = this.root.scroll;
                    s && (nE(e.x, -s.x), nE(e.y, -s.y));
                  }
                  nE(e.x, i.x), nE(e.y, i.y);
                }
              }
              return e;
            }),
            (t.prototype.applyTransform = function (t, e) {
              void 0 === e && (e = !1);
              var n = nf();
              ra(n, t);
              for (var r = 0; r < this.path.length; r++) {
                var i = this.path[r];
                !e &&
                  i.options.layoutScroll &&
                  i.scroll &&
                  i !== i.root &&
                  nw(n, { x: -i.scroll.x, y: -i.scroll.y }),
                  ng(i.latestValues) && nw(n, i.latestValues);
              }
              return ng(this.latestValues) && nw(n, this.latestValues), n;
            }),
            (t.prototype.removeTransform = function (t) {
              var e,
                n = nf();
              ra(n, t);
              for (var r = 0; r < this.path.length; r++) {
                var i = this.path[r];
                if (i.instance && ng(i.latestValues)) {
                  nm(i.latestValues) && i.updateSnapshot();
                  var o = nf();
                  ra(o, i.measure()),
                    rd(
                      n,
                      i.latestValues,
                      null === (e = i.snapshot) || void 0 === e
                        ? void 0
                        : e.layout,
                      o
                    );
                }
              }
              return ng(this.latestValues) && rd(n, this.latestValues), n;
            }),
            (t.prototype.setTargetDelta = function (t) {
              (this.targetDelta = t), this.root.scheduleUpdateProjection();
            }),
            (t.prototype.setOptions = function (t) {
              var e;
              this.options = s.__assign(
                s.__assign(s.__assign({}, this.options), t),
                { crossfade: null === (e = t.crossfade) || void 0 === e || e }
              );
            }),
            (t.prototype.clearMeasurements = function () {
              (this.scroll = void 0),
                (this.layout = void 0),
                (this.snapshot = void 0),
                (this.prevTransformTemplateValue = void 0),
                (this.targetDelta = void 0),
                (this.target = void 0),
                (this.isLayoutDirty = !1);
            }),
            (t.prototype.resolveTargetDelta = function () {
              var t,
                e,
                n,
                r,
                i = this.options,
                o = i.layout,
                a = i.layoutId;
              this.layout &&
                (o || a) &&
                (!this.targetDelta &&
                  !this.relativeTarget &&
                  ((this.relativeParent = this.getClosestProjectingParent()),
                  this.relativeParent &&
                    this.relativeParent.layout &&
                    ((this.relativeTarget = nf()),
                    (this.relativeTargetOrigin = nf()),
                    ni(
                      this.relativeTargetOrigin,
                      this.layout.actual,
                      this.relativeParent.layout.actual
                    ),
                    ra(this.relativeTarget, this.relativeTargetOrigin))),
                (this.relativeTarget || this.targetDelta) &&
                  ((this.target ||
                    ((this.target = nf()), (this.targetWithTransforms = nf())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    (null === (r = this.relativeParent) || void 0 === r
                      ? void 0
                      : r.target))
                    ? ((t = this.target),
                      (e = this.relativeTarget),
                      (n = this.relativeParent.target),
                      nn(t.x, e.x, n.x),
                      nn(t.y, e.y, n.y))
                    : this.targetDelta
                    ? (Boolean(this.resumingFrom)
                        ? (this.target = this.applyTransform(
                            this.layout.actual
                          ))
                        : ra(this.target, this.layout.actual),
                      n_(this.target, this.targetDelta))
                    : ra(this.target, this.layout.actual),
                  this.attemptToResolveRelativeTarget &&
                    ((this.attemptToResolveRelativeTarget = !1),
                    (this.relativeParent = this.getClosestProjectingParent()),
                    this.relativeParent &&
                      Boolean(this.relativeParent.resumingFrom) ===
                        Boolean(this.resumingFrom) &&
                      !this.relativeParent.options.layoutScroll &&
                      this.relativeParent.target &&
                      ((this.relativeTarget = nf()),
                      (this.relativeTargetOrigin = nf()),
                      ni(
                        this.relativeTargetOrigin,
                        this.target,
                        this.relativeParent.target
                      ),
                      ra(this.relativeTarget, this.relativeTargetOrigin)))));
            }),
            (t.prototype.getClosestProjectingParent = function () {
              if (!(!this.parent || ng(this.parent.latestValues)))
                return (this.parent.relativeTarget ||
                  this.parent.targetDelta) &&
                  this.parent.layout
                  ? this.parent
                  : this.parent.getClosestProjectingParent();
            }),
            (t.prototype.calcProjection = function () {
              var t,
                e = this.options,
                n = e.layout,
                r = e.layoutId;
              if (
                ((this.isTreeAnimating = Boolean(
                  (null === (t = this.parent) || void 0 === t
                    ? void 0
                    : t.isTreeAnimating) ||
                    this.currentAnimation ||
                    this.pendingAnimation
                )),
                this.isTreeAnimating ||
                  (this.targetDelta = this.relativeTarget = void 0),
                this.layout && (n || r))
              ) {
                var i = this.getLead();
                ra(this.layoutCorrected, this.layout.actual),
                  (function (t, e, n, r) {
                    void 0 === r && (r = !1);
                    var i,
                      o,
                      a,
                      s,
                      u = n.length;
                    if (u) {
                      e.x = e.y = 1;
                      for (var l = 0; l < u; l++)
                        (s = (a = n[l]).projectionDelta),
                          (null ===
                            (o =
                              null === (i = a.instance) || void 0 === i
                                ? void 0
                                : i.style) || void 0 === o
                            ? void 0
                            : o.display) !== "contents" &&
                            (r &&
                              a.options.layoutScroll &&
                              a.scroll &&
                              a !== a.root &&
                              nw(t, { x: -a.scroll.x, y: -a.scroll.y }),
                            s &&
                              ((e.x *= s.x.scale),
                              (e.y *= s.y.scale),
                              n_(t, s)),
                            r && ng(a.latestValues) && nw(t, a.latestValues));
                    }
                  })(
                    this.layoutCorrected,
                    this.treeScale,
                    this.path,
                    Boolean(this.resumingFrom) || this !== i
                  );
                var o = i.target;
                if (o) {
                  this.projectionDelta ||
                    ((this.projectionDelta = nc()),
                    (this.projectionDeltaWithTransform = nc()));
                  var a = this.treeScale.x,
                    s = this.treeScale.y,
                    u = this.projectionTransform;
                  ne(
                    this.projectionDelta,
                    this.layoutCorrected,
                    o,
                    this.latestValues
                  ),
                    (this.projectionTransform = rm(
                      this.projectionDelta,
                      this.treeScale
                    )),
                    (this.projectionTransform !== u ||
                      this.treeScale.x !== a ||
                      this.treeScale.y !== s) &&
                      ((this.hasProjected = !0),
                      this.scheduleRender(),
                      this.notifyListeners("projectionUpdate", o));
                }
              }
            }),
            (t.prototype.hide = function () {
              this.isVisible = !1;
            }),
            (t.prototype.show = function () {
              this.isVisible = !0;
            }),
            (t.prototype.scheduleRender = function (t) {
              var e, n, r;
              void 0 === t && (t = !0),
                null === (n = (e = this.options).scheduleRender) ||
                  void 0 === n ||
                  n.call(e),
                t &&
                  (null === (r = this.getStack()) ||
                    void 0 === r ||
                    r.scheduleRender()),
                this.resumingFrom &&
                  !this.resumingFrom.instance &&
                  (this.resumingFrom = void 0);
            }),
            (t.prototype.setAnimationOrigin = function (t, e) {
              var n,
                r = this;
              void 0 === e && (e = !1);
              var i = this.snapshot,
                o = (null == i ? void 0 : i.latestValues) || {},
                a = s.__assign({}, this.latestValues),
                u = nc();
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
                (this.attemptToResolveRelativeTarget = !e);
              var l = nf(),
                f = null == i ? void 0 : i.isShared,
                p =
                  1 >=
                  ((null === (n = this.getStack()) || void 0 === n
                    ? void 0
                    : n.members.length) || 0),
                v = Boolean(
                  f &&
                    !p &&
                    !0 === this.options.crossfade &&
                    !this.path.some(rk)
                );
              (this.animationProgress = 0),
                (this.mixTargetDelta = function (e) {
                  var n,
                    i,
                    s,
                    h = e / 1e3;
                  rR(u.x, t.x, h),
                    rR(u.y, t.y, h),
                    r.setTargetDelta(u),
                    r.relativeTarget &&
                      r.relativeTargetOrigin &&
                      r.layout &&
                      (null === (s = r.relativeParent) || void 0 === s
                        ? void 0
                        : s.layout) &&
                      (ni(l, r.layout.actual, r.relativeParent.layout.actual),
                      (n = r.relativeTarget),
                      (i = r.relativeTargetOrigin),
                      rL(n.x, i.x, l.x, h),
                      rL(n.y, i.y, l.y, h)),
                    f &&
                      ((r.animationValues = a),
                      (function (t, e, n, r, i, o) {
                        var a, s, u, l;
                        i
                          ? ((t.opacity = d.mix(
                              0,
                              null !== (a = n.opacity) && void 0 !== a ? a : 1,
                              rn(r)
                            )),
                            (t.opacityExit = d.mix(
                              null !== (s = e.opacity) && void 0 !== s ? s : 1,
                              0,
                              rr(r)
                            )))
                          : o &&
                            (t.opacity = d.mix(
                              null !== (u = e.opacity) && void 0 !== u ? u : 1,
                              null !== (l = n.opacity) && void 0 !== l ? l : 1,
                              r
                            ));
                        for (var f = 0; f < n8; f++) {
                          var p = "border".concat(n7[f], "Radius"),
                            v = re(e, p),
                            h = re(n, p);
                          (void 0 !== v || void 0 !== h) &&
                            (v || (v = 0),
                            h || (h = 0),
                            0 === v || 0 === h || rt(v) === rt(h)
                              ? ((t[p] = Math.max(d.mix(n6(v), n6(h), r), 0)),
                                (c.percent.test(h) || c.percent.test(v)) &&
                                  (t[p] += "%"))
                              : (t[p] = h));
                        }
                        (e.rotate || n.rotate) &&
                          (t.rotate = d.mix(e.rotate || 0, n.rotate || 0, r));
                      })(a, o, r.latestValues, h, v, p)),
                    r.root.scheduleUpdateProjection(),
                    r.scheduleRender(),
                    (r.animationProgress = h);
                }),
                this.mixTargetDelta(0);
            }),
            (t.prototype.startAnimation = function (t) {
              var e,
                n,
                r = this;
              this.notifyListeners("animationStart"),
                null === (e = this.currentAnimation) ||
                  void 0 === e ||
                  e.stop(),
                this.resumingFrom &&
                  (null === (n = this.resumingFrom.currentAnimation) ||
                    void 0 === n ||
                    n.stop()),
                this.pendingAnimation &&
                  (f.cancelSync.update(this.pendingAnimation),
                  (this.pendingAnimation = void 0)),
                (this.pendingAnimation = g.default.update(function () {
                  (X.hasAnimatedSinceResize = !0),
                    (r.currentAnimation = n9(
                      0,
                      1e3,
                      s.__assign(s.__assign({}, t), {
                        onUpdate: function (e) {
                          var n;
                          r.mixTargetDelta(e),
                            null === (n = t.onUpdate) ||
                              void 0 === n ||
                              n.call(t, e);
                        },
                        onComplete: function () {
                          var e;
                          null === (e = t.onComplete) ||
                            void 0 === e ||
                            e.call(t),
                            r.completeAnimation();
                        },
                      })
                    )),
                    r.resumingFrom &&
                      (r.resumingFrom.currentAnimation = r.currentAnimation),
                    (r.pendingAnimation = void 0);
                }));
            }),
            (t.prototype.completeAnimation = function () {
              var t;
              this.resumingFrom &&
                ((this.resumingFrom.currentAnimation = void 0),
                (this.resumingFrom.preserveOpacity = void 0)),
                null === (t = this.getStack()) ||
                  void 0 === t ||
                  t.exitAnimationComplete(),
                (this.resumingFrom =
                  this.currentAnimation =
                  this.animationValues =
                    void 0),
                this.notifyListeners("animationComplete");
            }),
            (t.prototype.finishAnimation = function () {
              var t;
              this.currentAnimation &&
                (null === (t = this.mixTargetDelta) ||
                  void 0 === t ||
                  t.call(this, 1e3),
                this.currentAnimation.stop()),
                this.completeAnimation();
            }),
            (t.prototype.applyTransformsToTarget = function () {
              var t = this.getLead(),
                e = t.targetWithTransforms,
                n = t.target,
                r = t.layout,
                i = t.latestValues;
              e &&
                n &&
                r &&
                (ra(e, n),
                nw(e, i),
                ne(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  i
                ));
            }),
            (t.prototype.registerSharedNode = function (t, e) {
              var n, r, i;
              this.sharedNodes.has(t) || this.sharedNodes.set(t, new rh()),
                this.sharedNodes.get(t).add(e),
                e.promote({
                  transition:
                    null === (n = e.options.initialPromotionConfig) ||
                    void 0 === n
                      ? void 0
                      : n.transition,
                  preserveFollowOpacity:
                    null ===
                      (i =
                        null === (r = e.options.initialPromotionConfig) ||
                        void 0 === r
                          ? void 0
                          : r.shouldPreserveFollowOpacity) || void 0 === i
                      ? void 0
                      : i.call(r, e),
                });
            }),
            (t.prototype.isLead = function () {
              var t = this.getStack();
              return !t || t.lead === this;
            }),
            (t.prototype.getLead = function () {
              var t;
              return (
                (this.options.layoutId &&
                  (null === (t = this.getStack()) || void 0 === t
                    ? void 0
                    : t.lead)) ||
                this
              );
            }),
            (t.prototype.getPrevLead = function () {
              var t;
              return this.options.layoutId
                ? null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.prevLead
                : void 0;
            }),
            (t.prototype.getStack = function () {
              var t = this.options.layoutId;
              if (t) return this.root.sharedNodes.get(t);
            }),
            (t.prototype.promote = function (t) {
              var e = void 0 === t ? {} : t,
                n = e.needsReset,
                r = e.transition,
                i = e.preserveFollowOpacity,
                o = this.getStack();
              o && o.promote(this, i),
                n && ((this.projectionDelta = void 0), (this.needsReset = !0)),
                r && this.setOptions({ transition: r });
            }),
            (t.prototype.relegate = function () {
              var t = this.getStack();
              return !!t && t.relegate(this);
            }),
            (t.prototype.resetRotation = function () {
              var t = this.options.visualElement;
              if (t) {
                for (var e = !1, n = {}, r = 0; r < te.length; r++) {
                  var i = "rotate" + te[r];
                  t.getStaticValue(i) &&
                    ((e = !0),
                    (n[i] = t.getStaticValue(i)),
                    t.setStaticValue(i, 0));
                }
                if (e) {
                  for (var i in (null == t || t.syncRender(), n))
                    t.setStaticValue(i, n[i]);
                  t.scheduleRender();
                }
              }
            }),
            (t.prototype.getProjectionStyles = function (t) {
              void 0 === t && (t = {});
              var e,
                n,
                r,
                i,
                o,
                a,
                s = {};
              if (!this.instance || this.isSVG) return s;
              if (!this.isVisible) return { visibility: "hidden" };
              s.visibility = "";
              var u =
                null === (e = this.options.visualElement) || void 0 === e
                  ? void 0
                  : e.getProps().transformTemplate;
              if (this.needsReset)
                return (
                  (this.needsReset = !1),
                  (s.opacity = ""),
                  (s.pointerEvents = tB(t.pointerEvents) || ""),
                  (s.transform = u ? u(this.latestValues, "") : "none"),
                  s
                );
              var l = this.getLead();
              if (!this.projectionDelta || !this.layout || !l.target) {
                var c = {};
                return (
                  this.options.layoutId &&
                    ((c.opacity =
                      null !== (n = this.latestValues.opacity) && void 0 !== n
                        ? n
                        : 1),
                    (c.pointerEvents = tB(t.pointerEvents) || "")),
                  this.hasProjected &&
                    !ng(this.latestValues) &&
                    ((c.transform = u ? u({}, "") : "none"),
                    (this.hasProjected = !1)),
                  c
                );
              }
              var d = l.animationValues || l.latestValues;
              this.applyTransformsToTarget(),
                (s.transform = rm(
                  this.projectionDeltaWithTransform,
                  this.treeScale,
                  d
                )),
                u && (s.transform = u(d, s.transform));
              var f = this.projectionDelta,
                p = f.x,
                v = f.y;
              for (var h in ((s.transformOrigin = ""
                .concat(100 * p.origin, "% ")
                .concat(100 * v.origin, "% 0")),
              l.animationValues
                ? (s.opacity =
                    l === this
                      ? null !==
                          (i =
                            null !== (r = d.opacity) && void 0 !== r
                              ? r
                              : this.latestValues.opacity) && void 0 !== i
                        ? i
                        : 1
                      : this.preserveOpacity
                      ? this.latestValues.opacity
                      : d.opacityExit)
                : (s.opacity =
                    l === this
                      ? null !== (o = d.opacity) && void 0 !== o
                        ? o
                        : ""
                      : null !== (a = d.opacityExit) && void 0 !== a
                      ? a
                      : 0),
              Q))
                if (void 0 !== d[h]) {
                  var m = Q[h],
                    g = m.correct,
                    y = m.applyTo,
                    x = g(d[h], l);
                  if (y) for (var _ = y.length, E = 0; E < _; E++) s[y[E]] = x;
                  else s[h] = x;
                }
              return (
                this.options.layoutId &&
                  (s.pointerEvents =
                    l === this ? tB(t.pointerEvents) || "" : "none"),
                s
              );
            }),
            (t.prototype.clearSnapshot = function () {
              this.resumeFrom = this.snapshot = void 0;
            }),
            (t.prototype.resetTree = function () {
              this.root.nodes.forEach(function (t) {
                var e;
                return null === (e = t.currentAnimation) || void 0 === e
                  ? void 0
                  : e.stop();
              }),
                this.root.nodes.forEach(rS),
                this.root.sharedNodes.clear();
            }),
            t
          );
        })();
      }
      function r_(t) {
        t.updateLayout();
      }
      function rE(t) {
        var e,
          n,
          r,
          i,
          o =
            null !==
              (n =
                null === (e = t.resumeFrom) || void 0 === e
                  ? void 0
                  : e.snapshot) && void 0 !== n
              ? n
              : t.snapshot;
        if (t.isLead() && t.layout && o && t.hasListeners("didUpdate")) {
          var a = t.layout,
            s = a.actual,
            u = a.measured;
          "size" === t.options.animationType
            ? np(function (t) {
                var e = o.isShared ? o.measured[t] : o.layout[t],
                  n = e8(e);
                (e.min = s[t].min), (e.max = e.min + n);
              })
            : "position" === t.options.animationType &&
              np(function (t) {
                var e = o.isShared ? o.measured[t] : o.layout[t],
                  n = e8(s[t]);
                e.max = e.min + n;
              });
          var l = nc();
          ne(l, s, o.layout);
          var c = nc();
          o.isShared
            ? ne(c, t.applyTransform(u, !0), o.measured)
            : ne(c, s, o.layout);
          var d = !rp(l),
            f = !1;
          if (
            !t.resumeFrom &&
            ((t.relativeParent = t.getClosestProjectingParent()),
            t.relativeParent && !t.relativeParent.resumeFrom)
          ) {
            var p = t.relativeParent,
              v = p.snapshot,
              h = p.layout;
            if (v && h) {
              var m = nf();
              ni(m, o.layout, v.layout);
              var g = nf();
              ni(g, s, h.actual), rv(m, g) || (f = !0);
            }
          }
          t.notifyListeners("didUpdate", {
            layout: s,
            snapshot: o,
            delta: c,
            layoutDelta: l,
            hasLayoutChanged: d,
            hasRelativeTargetChanged: f,
          });
        } else
          t.isLead() &&
            (null === (i = (r = t.options).onExitComplete) ||
              void 0 === i ||
              i.call(r));
        t.options.transition = void 0;
      }
      function rA(t) {
        t.clearSnapshot();
      }
      function rS(t) {
        t.clearMeasurements();
      }
      function rb(t) {
        var e = t.options.visualElement;
        (null == e ? void 0 : e.getProps().onBeforeLayoutMeasure) &&
          e.notifyBeforeLayoutMeasure(),
          t.resetTransform();
      }
      function rw(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0);
      }
      function rP(t) {
        t.resolveTargetDelta();
      }
      function rT(t) {
        t.calcProjection();
      }
      function rV(t) {
        t.resetRotation();
      }
      function rC(t) {
        t.removeLeadSnapshot();
      }
      function rR(t, e, n) {
        (t.translate = d.mix(e.translate, 0, n)),
          (t.scale = d.mix(e.scale, 1, n)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function rL(t, e, n, r) {
        (t.min = d.mix(e.min, n.min, r)), (t.max = d.mix(e.max, n.max, r));
      }
      function rk(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      var rD = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function rM(t, e) {
        for (var n = t.root, r = t.path.length - 1; r >= 0; r--)
          if (Boolean(t.path[r].instance)) {
            n = t.path[r];
            break;
          }
        var i = (n && n !== t.root ? n.instance : document).querySelector(
          '[data-projection-id="'.concat(e, '"]')
        );
        i && t.mount(i, !0);
      }
      function rI(t) {
        (t.min = Math.round(t.min)), (t.max = Math.round(t.max));
      }
      function rO(t) {
        rI(t.x), rI(t.y);
      }
      var rF = rx({
          attachResizeListener: function (t, e) {
            return tH(t, "resize", e);
          },
          measureScroll: function () {
            return {
              x:
                document.documentElement.scrollLeft || document.body.scrollLeft,
              y: document.documentElement.scrollTop || document.body.scrollTop,
            };
          },
          checkIsScrollRoot: function () {
            return !0;
          },
        }),
        rj = { current: void 0 },
        rB = rx({
          measureScroll: function (t) {
            return { x: t.scrollLeft, y: t.scrollTop };
          },
          defaultParent: function () {
            if (!rj.current) {
              var t = new rF(0, {});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (rj.current = t);
            }
            return rj.current;
          },
          resetTransform: function (t, e) {
            t.style.transform = null != e ? e : "none";
          },
          checkIsScrollRoot: function (t) {
            return Boolean("fixed" === window.getComputedStyle(t).position);
          },
        }),
        rU = s.__assign(s.__assign(s.__assign(s.__assign({}, e2), ec), nR), n4),
        rN = $(function (t, e) {
          return tX(t, e, rU, nQ, rB);
        }),
        rz = $(tX);
      function rY() {
        var t = u.useRef(!1);
        return (
          R(function () {
            return (
              (t.current = !0),
              function () {
                t.current = !1;
              }
            );
          }, []),
          t
        );
      }
      function rX() {
        var t = rY(),
          e = s.__read(u.useState(0), 2),
          n = e[0],
          r = e[1],
          i = u.useCallback(
            function () {
              t.current && r(n + 1);
            },
            [n]
          );
        return [
          u.useCallback(
            function () {
              return g.default.postRender(i);
            },
            [i]
          ),
          n,
        ];
      }
      var rH = function (t) {
        var e = t.children,
          n = t.initial,
          r = t.isPresent,
          i = t.onExitComplete,
          o = t.custom,
          a = t.presenceAffectsLayout,
          l = Y(rW),
          c = ep(),
          d = u.useMemo(
            function () {
              return {
                id: c,
                initial: n,
                isPresent: r,
                custom: o,
                onExitComplete: function (t) {
                  var e, n;
                  l.set(t, !0);
                  try {
                    for (
                      var r = s.__values(l.values()), o = r.next();
                      !o.done;
                      o = r.next()
                    )
                      if (!o.value) return;
                  } catch (a) {
                    e = { error: a };
                  } finally {
                    try {
                      o && !o.done && (n = r.return) && n.call(r);
                    } finally {
                      if (e) throw e.error;
                    }
                  }
                  null == i || i();
                },
                register: function (t) {
                  return (
                    l.set(t, !1),
                    function () {
                      return l.delete(t);
                    }
                  );
                },
              };
            },
            a ? void 0 : [r]
          );
        return (
          u.useMemo(
            function () {
              l.forEach(function (t, e) {
                return l.set(e, !1);
              });
            },
            [r]
          ),
          h.useEffect(
            function () {
              r || l.size || null == i || i();
            },
            [r]
          ),
          h.createElement(V.Provider, { value: d }, e)
        );
      };
      function rW() {
        return new Map();
      }
      var rG = function (t) {
          return t.key || "";
        },
        rZ = u.createContext(null),
        rK = function (t) {
          return !t.isLayoutDirty && t.willUpdate(!1);
        },
        r$ = function (t) {
          return !0 === t;
        },
        rq = function (t) {
          var e,
            n,
            r,
            i,
            o,
            a,
            l = t.children,
            c = t.id,
            d = t.inheritId,
            f = t.inherit,
            p = void 0 === f || f;
          void 0 !== d && (p = d);
          var v = u.useContext(W),
            m = u.useContext(rZ),
            g = s.__read(rX(), 2),
            y = g[0],
            x = g[1],
            _ = u.useRef(null),
            E = null !== (o = v.id) && void 0 !== o ? o : m;
          null === _.current &&
            ((r$(!0 === (i = p)) || "id" === i) &&
              E &&
              (c = c ? E + "-" + c : E),
            (_.current = {
              id: c,
              group:
                r$(p) &&
                null !== (a = null == v ? void 0 : v.group) &&
                void 0 !== a
                  ? a
                  : ((e = new Set()),
                    (n = new WeakMap()),
                    {
                      add: function (t) {
                        e.add(t), n.set(t, t.addEventListener("willUpdate", r));
                      },
                      remove: function (t) {
                        var i;
                        e.delete(t),
                          null === (i = n.get(t)) || void 0 === i || i(),
                          n.delete(t),
                          r();
                      },
                      dirty: (r = function () {
                        return e.forEach(rK);
                      }),
                    }),
            }));
          var A = u.useMemo(
            function () {
              return s.__assign(s.__assign({}, _.current), { forceRender: y });
            },
            [x]
          );
          return h.createElement(W.Provider, { value: A }, l);
        },
        rJ = 0;
      function rQ(t) {
        return "function" == typeof t;
      }
      var r0 = u.createContext(null),
        r1 = u.forwardRef(function (t, e) {
          var n = t.children,
            r = t.as,
            i = void 0 === r ? "ul" : r,
            o = t.axis,
            a = void 0 === o ? "y" : o,
            c = t.onReorder,
            f = t.values,
            p = s.__rest(t, ["children", "as", "axis", "onReorder", "values"]),
            v = Y(function () {
              return rN(i);
            }),
            m = [],
            g = u.useRef(!1);
          return (
            l.invariant(
              Boolean(f),
              "Reorder.Group must be provided a values prop"
            ),
            u.useEffect(function () {
              g.current = !1;
            }),
            h.createElement(
              v,
              s.__assign({}, p, { ref: e }),
              h.createElement(
                r0.Provider,
                {
                  value: {
                    axis: a,
                    registerItem: function (t, e) {
                      e &&
                        -1 ===
                          m.findIndex(function (e) {
                            return t === e.value;
                          }) &&
                        (m.push({ value: t, layout: e[a] }), m.sort(r5));
                    },
                    updateOrder: function (t, e, n) {
                      if (!g.current) {
                        var r = (function (t, e, n, r) {
                          if (!r) return t;
                          var i = t.findIndex(function (t) {
                            return t.value === e;
                          });
                          if (-1 === i) return t;
                          var o = r > 0 ? 1 : -1,
                            a = t[i + o];
                          if (!a) return t;
                          var u = t[i],
                            l = a.layout,
                            c = d.mix(l.min, l.max, 0.5);
                          return (1 === o && u.layout.max + n > c) ||
                            (-1 === o && u.layout.min + n < c)
                            ? (function (t, e, n) {
                                var r = s.__read(t).slice(0),
                                  i = e < 0 ? r.length + e : e;
                                if (i >= 0 && i < r.length) {
                                  var o = n < 0 ? r.length + n : n,
                                    a = s.__read(r.splice(e, 1), 1)[0];
                                  r.splice(o, 0, a);
                                }
                                return r;
                              })(t, i, i + o)
                            : t;
                        })(m, t, e, n);
                        m !== r &&
                          ((g.current = !0),
                          c(
                            r.map(r2).filter(function (t) {
                              return -1 !== f.indexOf(t);
                            })
                          ));
                      }
                    },
                  },
                },
                n
              )
            )
          );
        });
      function r2(t) {
        return t.value;
      }
      function r5(t, e) {
        return t.layout.min - e.layout.min;
      }
      function r3(t) {
        var e = Y(function () {
          return eB(t);
        });
        if (u.useContext(w).isStatic) {
          var n = s.__read(u.useState(t), 2)[1];
          u.useEffect(function () {
            return e.onChange(n);
          }, []);
        }
        return e;
      }
      function r4() {
        for (var t, e = [], n = 0; n < arguments.length; n++)
          e[n] = arguments[n];
        var r = !Array.isArray(e[0]),
          i = r ? 0 : -1,
          o = e[0 + i],
          a = e[1 + i],
          u = e[2 + i],
          l = e[3 + i],
          c = d.interpolate(
            a,
            u,
            s.__assign(
              {
                mixer: "object" == typeof (t = u[0]) && t.mix ? t.mix : void 0,
              },
              l
            )
          );
        return r ? c(o) : c;
      }
      function r9(t, e) {
        var n,
          r = r3(e()),
          i = function () {
            return r.set(e());
          };
        return (
          i(),
          (n = function () {
            return g.default.update(i, !1, !0);
          }),
          R(function () {
            var e = t.map(function (t) {
              return t.onChange(n);
            });
            return function () {
              return e.forEach(function (t) {
                return t();
              });
            };
          }),
          r
        );
      }
      function r7(t, e, n, r) {
        var i = "function" == typeof e ? e : r4(e, n, r);
        return Array.isArray(t)
          ? r8(t, i)
          : r8([t], function (t) {
              return i(s.__read(t, 1)[0]);
            });
      }
      function r8(t, e) {
        var n = Y(function () {
          return [];
        });
        return r9(t, function () {
          n.length = 0;
          for (var r = t.length, i = 0; i < r; i++) n[i] = t[i].get();
          return e(n);
        });
      }
      function r6(t, e) {
        return void 0 === e && (e = 0), tu(t) ? t : r3(e);
      }
      var it = u.forwardRef(function (t, e) {
          var n = t.children,
            r = t.style,
            i = t.value,
            o = t.as,
            a = void 0 === o ? "li" : o,
            c = t.onDrag,
            d = t.layout,
            f = s.__rest(t, [
              "children",
              "style",
              "value",
              "as",
              "onDrag",
              "layout",
            ]),
            p = Y(function () {
              return rN(a);
            }),
            v = u.useContext(r0),
            m = {
              x: r6(null == r ? void 0 : r.x),
              y: r6(null == r ? void 0 : r.y),
            },
            g = r7([m.x, m.y], function (t) {
              var e = s.__read(t, 2),
                n = e[0],
                r = e[1];
              return n || r ? 1 : "unset";
            }),
            y = u.useRef(null);
          l.invariant(
            Boolean(v),
            "Reorder.Item must be a child of Reorder.Group"
          );
          var x = v.axis,
            _ = v.registerItem,
            E = v.updateOrder;
          return (
            u.useEffect(
              function () {
                _(i, y.current);
              },
              [v]
            ),
            h.createElement(
              p,
              s.__assign({ drag: x }, f, {
                dragSnapToOrigin: !0,
                style: s.__assign(s.__assign({}, r), {
                  x: m.x,
                  y: m.y,
                  zIndex: g,
                }),
                layout: void 0 === d || d,
                onDrag: function (t, e) {
                  var n = e.velocity;
                  n[x] && E(i, m[x].get(), n[x]), null == c || c(t, e);
                },
                onLayoutMeasure: function (t) {
                  y.current = t;
                },
                ref: e,
              }),
              n
            )
          );
        }),
        ie = s.__assign(s.__assign({ renderer: nQ }, e2), ec),
        ir = s.__assign(s.__assign(s.__assign(s.__assign({}, ie), nR), n4), {
          projectionNodeConstructor: rB,
        }),
        ii = function () {
          return {
            scrollX: eB(0),
            scrollY: eB(0),
            scrollXProgress: eB(0),
            scrollYProgress: eB(0),
          };
        };
      function io(t) {
        void 0 === t && (t = {});
        var e = t.container,
          n = t.target,
          r = s.__rest(t, ["container", "target"]),
          i = Y(ii);
        return (
          R(function () {
            return p.scroll(function (t) {
              var e = t.x,
                n = t.y;
              i.scrollX.set(e.current),
                i.scrollXProgress.set(e.progress),
                i.scrollY.set(n.current),
                i.scrollYProgress.set(n.progress);
            }, s.__assign(s.__assign({}, r), {
              container: (null == e ? void 0 : e.current) || void 0,
              target: (null == n ? void 0 : n.current) || void 0,
            }));
          }, []),
          i
        );
      }
      var ia =
        "undefined" != typeof performance
          ? function () {
              return performance.now();
            }
          : function () {
              return Date.now();
            };
      function is(t) {
        var e = Y(ia),
          n = u.useContext(w).isStatic;
        u.useEffect(
          function () {
            if (!n) {
              var r = function (n) {
                t(n.timestamp - e);
              };
              return (
                g.default.update(r, !0),
                function () {
                  return f.cancelSync.update(r);
                }
              );
            }
          },
          [t]
        );
      }
      function iu() {
        var t = !1,
          e = [],
          n = new Set(),
          r = {
            subscribe: function (t) {
              return (
                n.add(t),
                function () {
                  n.delete(t);
                }
              );
            },
            start: function (r, i) {
              if (!t)
                return new Promise(function (t) {
                  e.push({ animation: [r, i], resolve: t });
                });
              var o = [];
              return (
                n.forEach(function (t) {
                  o.push(eZ(t, r, { transitionOverride: i }));
                }),
                Promise.all(o)
              );
            },
            set: function (e) {
              return (
                l.invariant(
                  t,
                  "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."
                ),
                n.forEach(function (t) {
                  Array.isArray(e)
                    ? eH(t, e)
                    : "string" == typeof e
                    ? eH(t, [e])
                    : eX(t, e);
                })
              );
            },
            stop: function () {
              n.forEach(function (t) {
                !(function (t) {
                  t.forEachValue(function (t) {
                    return t.stop();
                  });
                })(t);
              });
            },
            mount: function () {
              return (
                (t = !0),
                e.forEach(function (t) {
                  var e = t.animation,
                    n = t.resolve;
                  r.start
                    .apply(r, s.__spreadArray([], s.__read(e), !1))
                    .then(n);
                }),
                function () {
                  (t = !1), r.stop();
                }
              );
            },
          };
        return r;
      }
      function il() {
        var t = Y(iu);
        return u.useEffect(t.mount, []), t;
      }
      var ic = (function () {
          function t() {
            this.componentControls = new Set();
          }
          return (
            (t.prototype.subscribe = function (t) {
              var e = this;
              return (
                this.componentControls.add(t),
                function () {
                  return e.componentControls.delete(t);
                }
              );
            }),
            (t.prototype.start = function (t, e) {
              this.componentControls.forEach(function (n) {
                n.start(t.nativeEvent || t, e);
              });
            }),
            t
          );
        })(),
        id = function () {
          return new ic();
        };
      function ip(t) {
        rj.current &&
          ((rj.current.isUpdating = !1),
          rj.current.blockUpdate(),
          null == t || t());
      }
      var iv = function () {
          return {};
        },
        ih = nk({
          build: function () {},
          measureViewportBox: nf,
          resetTransform: function () {},
          restoreTransform: function () {},
          removeValueFromRenderState: function () {},
          render: function () {},
          scrapeMotionValuesFromProps: iv,
          readValueFromInstance: function (t, e, n) {
            return n.initialState[e] || 0;
          },
          makeTargetAnimatable: function (t, e) {
            var n = e.transition,
              r = e.transitionEnd,
              i = s.__rest(e, ["transition", "transitionEnd"]),
              o = eG(i, n || {}, t);
            return (
              eW(t, i, o), s.__assign({ transition: n, transitionEnd: r }, i)
            );
          },
        }),
        im = tN({ scrapeMotionValuesFromProps: iv, createRenderState: iv }),
        ig = function (t) {
          return t > 0.001 ? 1 / t : 1e5;
        },
        iy = !1;
      (e.AnimatePresence = function (t) {
        var e,
          n = t.children,
          r = t.custom,
          i = t.initial,
          o = void 0 === i || i,
          a = t.onExitComplete,
          l = t.exitBeforeEnter,
          c = t.presenceAffectsLayout,
          d = void 0 === c || c,
          f = s.__read(rX(), 1)[0],
          p = u.useContext(W).forceRender;
        p && (f = p);
        var v = rY(),
          m =
            ((e = []),
            u.Children.forEach(n, function (t) {
              u.isValidElement(t) && e.push(t);
            }),
            e),
          g = m,
          x = new Set(),
          _ = u.useRef(g),
          E = u.useRef(new Map()).current,
          A = u.useRef(!0);
        if (
          (R(function () {
            (A.current = !1),
              (function (t, e) {
                t.forEach(function (t) {
                  var n = rG(t);
                  e.set(n, t);
                });
              })(m, E),
              (_.current = g);
          }),
          t6(function () {
            (A.current = !0), E.clear(), x.clear();
          }),
          A.current)
        )
          return h.createElement(
            h.Fragment,
            null,
            g.map(function (t) {
              return h.createElement(
                rH,
                {
                  key: rG(t),
                  isPresent: !0,
                  initial: !!o && void 0,
                  presenceAffectsLayout: d,
                },
                t
              );
            })
          );
        g = s.__spreadArray([], s.__read(g), !1);
        for (
          var S = _.current.map(rG), b = m.map(rG), w = S.length, P = 0;
          P < w;
          P++
        ) {
          var T = S[P];
          -1 === b.indexOf(T) && x.add(T);
        }
        return (
          l && x.size && (g = []),
          x.forEach(function (t) {
            if (-1 === b.indexOf(t)) {
              var e = E.get(t);
              if (e) {
                var n = S.indexOf(t);
                g.splice(
                  n,
                  0,
                  h.createElement(
                    rH,
                    {
                      key: rG(e),
                      isPresent: !1,
                      onExitComplete: function () {
                        E.delete(t), x.delete(t);
                        var e = _.current.findIndex(function (e) {
                          return e.key === t;
                        });
                        if ((_.current.splice(e, 1), !x.size)) {
                          if (((_.current = m), !1 === v.current)) return;
                          f(), a && a();
                        }
                      },
                      custom: r,
                      presenceAffectsLayout: d,
                    },
                    e
                  )
                );
              }
            }
          }),
          (g = g.map(function (t) {
            var e = t.key;
            return x.has(e)
              ? t
              : h.createElement(
                  rH,
                  { key: rG(t), isPresent: !0, presenceAffectsLayout: d },
                  t
                );
          })),
          "production" !== y &&
            l &&
            g.length > 1 &&
            console.warn(
              "You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."
            ),
          h.createElement(
            h.Fragment,
            null,
            x.size
              ? g
              : g.map(function (t) {
                  return u.cloneElement(t);
                })
          )
        );
      }),
        (e.AnimateSharedLayout = function (t) {
          var e = t.children;
          return (
            h.useEffect(function () {
              l.warning(
                !1,
                "AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations"
              );
            }, []),
            h.createElement(
              rq,
              {
                id: Y(function () {
                  return "asl-".concat(rJ++);
                }),
              },
              e
            )
          );
        }),
        (e.DeprecatedLayoutGroupContext = rZ),
        (e.DragControls = ic),
        (e.FlatTree = ry),
        (e.LayoutGroup = rq),
        (e.LayoutGroupContext = W),
        (e.LazyMotion = function (t) {
          var e = t.children,
            n = t.features,
            r = t.strict,
            i = s.__read(u.useState(!rQ(n)), 2)[1],
            o = u.useRef(void 0);
          if (!rQ(n)) {
            var a = n.renderer,
              l = s.__rest(n, ["renderer"]);
            (o.current = a), E(l);
          }
          return (
            u.useEffect(function () {
              rQ(n) &&
                n().then(function (t) {
                  var e = t.renderer;
                  E(s.__rest(t, ["renderer"])), (o.current = e), i(!0);
                });
            }, []),
            h.createElement(
              A.Provider,
              { value: { renderer: o.current, strict: void 0 !== r && r } },
              e
            )
          );
        }),
        (e.MotionConfig = function (t) {
          var e = t.children,
            n = t.isValidProp,
            r = s.__rest(t, ["children", "isValidProp"]);
          n && t_(n),
            ((r = s.__assign(s.__assign({}, u.useContext(w)), r)).isStatic = Y(
              function () {
                return r.isStatic;
              }
            ));
          var i = u.useMemo(
            function () {
              return r;
            },
            [
              JSON.stringify(r.transition),
              r.transformPagePoint,
              r.reducedMotion,
            ]
          );
          return h.createElement(w.Provider, { value: i }, e);
        }),
        (e.MotionConfigContext = w),
        (e.MotionContext = P),
        (e.MotionValue = ej),
        (e.PresenceContext = V),
        (e.Reorder = { Group: r1, Item: it }),
        (e.SwitchLayoutGroupContext = G),
        (e.addPointerEvent = t0),
        (e.addScaleCorrector = tt),
        (e.animate = n9),
        (e.animateVisualElement = eZ),
        (e.animationControls = iu),
        (e.animations = e2),
        (e.calcLength = e8),
        (e.checkTargetForNewValues = eW),
        (e.createBox = nf),
        (e.createDomMotionComponent = function (t) {
          return K(tX(t, { forwardMotionProps: !1 }, rU, nQ, rB));
        }),
        (e.createMotionComponent = K),
        (e.domAnimation = ie),
        (e.domMax = ir),
        (e.filterProps = tA),
        (e.isBrowser = C),
        (e.isDragActive = t9),
        (e.isMotionValue = tu),
        (e.isValidMotionProp = ty),
        (e.m = rz),
        (e.makeUseVisualState = tN),
        (e.motion = rN),
        (e.motionValue = eB),
        (e.resolveMotionValue = tB),
        (e.transform = r4),
        (e.useAnimation = il),
        (e.useAnimationControls = il),
        (e.useAnimationFrame = is),
        (e.useCycle = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          var n = u.useRef(0),
            r = s.__read(u.useState(t[n.current]), 2),
            i = r[0],
            o = r[1];
          return [
            i,
            u.useCallback(function (e) {
              (n.current =
                "number" != typeof e ? d.wrap(0, t.length, n.current + 1) : e),
                o(t[n.current]);
            }, s.__spreadArray([t.length], s.__read(t), !1)),
          ];
        }),
        (e.useDeprecatedAnimatedState = function (t) {
          var e = s.__read(u.useState(t), 2),
            n = e[0],
            r = e[1],
            i = im({}, !1),
            o = Y(function () {
              return ih({ props: {}, visualState: i }, { initialState: t });
            });
          return (
            u.useEffect(
              function () {
                return o.mount({}), o.unmount;
              },
              [o]
            ),
            u.useEffect(
              function () {
                o.setProps({
                  onUpdate: function (t) {
                    r(s.__assign({}, t));
                  },
                });
              },
              [r, o]
            ),
            [
              n,
              Y(function () {
                return function (t) {
                  return eZ(o, t);
                };
              }),
            ]
          );
        }),
        (e.useDeprecatedInvertedScale = function (t) {
          var e = r3(1),
            n = r3(1),
            r = T();
          return (
            l.invariant(
              !!(t || r),
              "If no scale values are provided, useInvertedScale must be used within a child of another motion component."
            ),
            l.warning(
              iy,
              "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead."
            ),
            (iy = !0),
            t
              ? ((e = t.scaleX || e), (n = t.scaleY || n))
              : r &&
                ((e = r.getValue("scaleX", 1)), (n = r.getValue("scaleY", 1))),
            { scaleX: r7(e, ig), scaleY: r7(n, ig) }
          );
        }),
        (e.useDomEvent = tW),
        (e.useDragControls = function () {
          return Y(id);
        }),
        (e.useElementScroll = function (t) {
          return (
            ee(
              !1,
              "useElementScroll is deprecated. Convert to useScroll({ container: ref })."
            ),
            io({ container: t })
          );
        }),
        (e.useForceUpdate = rX),
        (e.useInView = function (t, e) {
          var n = void 0 === e ? {} : e,
            r = n.root,
            i = n.margin,
            o = n.amount,
            a = n.once,
            l = void 0 !== a && a,
            c = s.__read(u.useState(!1), 2),
            d = c[0],
            f = c[1];
          return (
            u.useEffect(
              function () {
                if (t.current && (!l || !d)) {
                  var e,
                    n = {
                      root:
                        null !== (e = null == r ? void 0 : r.current) &&
                        void 0 !== e
                          ? e
                          : void 0,
                      margin: i,
                      amount: "some" === o ? "any" : o,
                    };
                  return p.inView(
                    t.current,
                    function () {
                      return (
                        f(!0),
                        l
                          ? void 0
                          : function () {
                              return f(!1);
                            }
                      );
                    },
                    n
                  );
                }
              },
              [r, t, i, l]
            ),
            d
          );
        }),
        (e.useInstantLayoutTransition = function () {
          return ip;
        }),
        (e.useInstantTransition = function () {
          var t = s.__read(rX(), 2),
            e = t[0],
            n = t[1];
          return (
            u.useEffect(
              function () {
                g.default.postRender(function () {
                  return g.default.postRender(function () {
                    return (eC.current = !1);
                  });
                });
              },
              [n]
            ),
            function (t) {
              ip(function () {
                (eC.current = !0), e(), t();
              });
            }
          );
        }),
        (e.useIsPresent = function () {
          var t;
          return null === (t = u.useContext(V)) || t.isPresent;
        }),
        (e.useIsomorphicLayoutEffect = R),
        (e.useMotionTemplate = function (t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n];
          var r = t.length;
          return r9(e, function () {
            for (var n = "", i = 0; i < r; i++)
              (n += t[i]), e[i] && (n += e[i].get());
            return n;
          });
        }),
        (e.useMotionValue = r3),
        (e.usePresence = ev),
        (e.useReducedMotion = D),
        (e.useReducedMotionConfig = M),
        (e.useResetProjection = function () {
          return h.useCallback(function () {
            var t = rj.current;
            t && t.resetTree();
          }, []);
        }),
        (e.useScroll = io),
        (e.useSpring = function (t, e) {
          void 0 === e && (e = {});
          var n,
            r = u.useContext(w).isStatic,
            i = u.useRef(null),
            o = r3(tu(t) ? t.get() : t);
          return (
            u.useMemo(
              function () {
                return o.attach(function (t, n) {
                  return r
                    ? n(t)
                    : (i.current && i.current.stop(),
                      (i.current = d.animate(
                        s.__assign(
                          s.__assign(
                            { from: o.get(), to: t, velocity: o.getVelocity() },
                            e
                          ),
                          { onUpdate: n }
                        )
                      )),
                      o.get());
                });
              },
              [JSON.stringify(e)]
            ),
            R(
              function () {
                if (tu(t)) return t.onChange(n);
              },
              [
                (n = function (t) {
                  return o.set(parseFloat(t));
                }),
              ]
            ),
            o
          );
        }),
        (e.useTime = function () {
          var t = r3(0);
          return (
            is(function (e) {
              return t.set(e);
            }),
            t
          );
        }),
        (e.useTransform = r7),
        (e.useUnmountEffect = t6),
        (e.useVelocity = function (t) {
          var e = r3(t.getVelocity());
          return (
            u.useEffect(
              function () {
                return t.velocityUpdateSubscribers.add(function (t) {
                  e.set(t);
                });
              },
              [t]
            ),
            e
          );
        }),
        (e.useViewportScroll = function () {
          return (
            ee(!1, "useViewportScroll is deprecated. Convert to useScroll()."),
            io()
          );
        }),
        (e.useVisualElementContext = T),
        (e.visualElement = nk),
        (e.wrapHandler = t$);
    },
  },
]);
