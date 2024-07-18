(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    1118: function (n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return e(8484);
        },
      ]);
    },
    8484: function (n, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
          default: function () {
            return i;
          },
        });
      var r = e(5893);
      e(9008), e(4744);
      var a = e(4298),
        c = e.n(a);
      function i(n) {
        let { Component: t, pageProps: e } = n;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
            (0, r.jsx)(c(), {
              strategy: "afterInteractive",
              src: "https://www.googletagmanager.com/gtag/js?id=G-7ZHMPQXBW0",
            }),
            (0, r.jsx)(c(), { src: "https://cdn.lordicon.com/bhenfmcm.js" }),
            (0, r.jsx)(c(), {
              id: "google-analytics",
              strategy: "afterInteractive",
              children:
                "\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n          gtag('config', 'G-7ZHMPQXBW0');\n          ",
            }),
            (0, r.jsx)(t, { ...e }),
          ],
        });
      }
    },
    4744: function () {},
    9008: function (n, t, e) {
      n.exports = e(3121);
    },
    4298: function (n, t, e) {
      n.exports = e(3573);
    },
  },
  function (n) {
    var t = function (t) {
      return n((n.s = t));
    };
    n.O(0, [774, 179], function () {
      return t(1118), t(880);
    }),
      (_N_E = n.O());
  },
]);
