(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5557: function (e, s, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(9383);
        },
      ]);
    },
    7127: function (e, s, t) {
      "use strict";
      t.d(s, {
        Z: function () {
          return n;
        },
      });
      var a = t(5893);
      t(7294);
      var l = t(5675),
        i = t.n(l);
      function n() {
        return (0, a.jsxs)("footer", {
          className: "pb-3",
          children: [
            (0, a.jsx)("div", {
              className: "md:h-24 h-16 footer flex items-center justify-center",
              children: (0, a.jsxs)("div", {
                className: "flex space-x-20",
                children: [
                  (0, a.jsx)("a", {
                    href: "https://www.linkedin.com/company/growth-rocket-india",
                    target: "blank",
                    children: (0, a.jsx)(i(), {
                      src: "/linkedin.png",
                      height: 40,
                      width: 40,
                      alt: "Whatsapp",
                      className: "h-10 w-10",
                    }),
                  }),
                  (0, a.jsx)("a", {
                    href: "https://www.youtube.com/@AyushmanPandita",
                    target: "blank",
                    children: (0, a.jsx)(i(), {
                      src: "/youtube.png",
                      height: 40,
                      width: 40,
                      alt: "Whatsapp",
                      className: "h-10 w-10",
                    }),
                  }),
                  (0, a.jsx)("a", {
                    href: "https://www.instagram.com/growthrocket.in/",
                    target: "blank",
                    children: (0, a.jsx)(i(), {
                      src: "/instagram.png",
                      height: 40,
                      width: 40,
                      alt: "Whatsapp",
                      className: "h-10 w-10",
                    }),
                  }),
                ],
              }),
            }),
            (0, a.jsx)("p", {
              className: "text-center py-3",
              children: "Meteorlab07 \xa9 2023. All Rights Reserved.",
            }),
          ],
        });
      }
    },
    700: function (e, s, t) {
      "use strict";
      var a = t(5893),
        l = t(7294),
        i = t(3082),
        n = t.n(i);
      let c = (e) => {
        let s = (0, l.useRef)(null),
          [t, i] = (0, l.useState)(!0);
        (0, l.useEffect)(() => {
          i(!1);
        }, []);
        let [c, r] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
            var e, t, a;
            c
              ? null === (e = s.current) || void 0 === e || e.play()
              : (null === (t = s.current) || void 0 === t ? void 0 : t.play) &&
                (null === (a = s.current) || void 0 === a || a.pause());
          }, [c]),
          (0, a.jsx)("div", {
            className: "mx-auto w-full",
            children: t
              ? null
              : (0, a.jsx)(n(), {
                  onChange: (e) => r(e),
                  children: (0, a.jsx)("video", {
                    autoPlay: !0,
                    muted: !0,
                    playsInline: !0,
                    loop: !0,
                    controls: !0,
                    ref: s,
                    children: (0, a.jsx)("source", {
                      src: e.url,
                      type: "video/mp4",
                    }),
                  }),
                }),
          })
        );
      };
      s.Z = c;
    },
    9383: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return H;
          },
        });
      var a = t(5893),
        l = t(9008),
        i = t.n(l),
        n = t(5675),
        c = t.n(n),
        r = t(7294),
        o = t(719),
        d = t(702);
      t(9645),
        t(8120),
        t(2576),
        [
          {
            name: "Chaitanya Anand",
            designation: "Web Developer",
            image: "team-img",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est repudiandae eius doloribus ea molestias, quo temporibus officiis quisquam possimus, neque, inventore libero ex laudantium soluta a accusantium aperiam voluptates repellat accusamus rerum quas consectetur nemo dicta. Laboriosam, repudiandae! Dolore asperiores omnis in alias accusantium ullam labore est facilis nesciunt!",
          },
          {
            name: "Ayushman Singh",
            designation: "Content Creator",
            image: "team-img",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est repudiandae eius doloribus ea molestias, quo temporibus officiis quisquam possimus, neque, inventore libero ex laudantium soluta a accusantium aperiam voluptates repellat accusamus rerum quas consectetur nemo dicta. Laboriosam, repudiandae! Dolore asperiores omnis in alias accusantium ullam labore est facilis nesciunt!",
          },
          {
            name: "Jasmine Kaur",
            designation: "Web Designer",
            image: "team-img",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est repudiandae eius doloribus ea molestias, quo temporibus officiis quisquam possimus, neque, inventore libero ex laudantium soluta a accusantium aperiam voluptates repellat accusamus rerum quas consectetur nemo dicta. Laboriosam, repudiandae! Dolore asperiores omnis in alias accusantium ullam labore est facilis nesciunt!",
          },
          {
            name: "Jatin Kumar",
            designation: "Co Founder",
            image: "team-img",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est repudiandae eius doloribus ea molestias, quo temporibus officiis quisquam possimus, neque, inventore libero ex laudantium soluta a accusantium aperiam voluptates repellat accusamus rerum quas consectetur nemo dicta. Laboriosam, repudiandae! Dolore asperiores omnis in alias accusantium ullam labore est facilis nesciunt!",
          },
        ].map((e, s) =>
          (0, a.jsxs)(
            o.o5,
            {
              className:
                "bg-gray-100 p-5 items-center md:p-20 grid grid-cols-1 md:grid-cols-5 justify-center gap-x-14 gap-y-4",
              children: [
                (0, a.jsx)("div", {
                  className:
                    "flex flex-col md:col-span-2 items-center md:items-start",
                  children: (0, a.jsx)(c(), {
                    src: "/assets/".concat(e.image, ".png"),
                    width: 400,
                    height: 400,
                    alt: "team-member-image",
                    className: "rounded-t-lg w-[65%] md:w-full object-contain ",
                  }),
                }),
                (0, a.jsxs)("div", {
                  className:
                    "flex flex-col pb-5 md:pb-0 md:gap-5 gap-3 md:col-span-3 items-center md:items-start",
                  children: [
                    (0, a.jsx)("h2", {
                      className: "md:text-4xl text-3xl font-medium",
                      children: e.name,
                    }),
                    (0, a.jsx)("h4", {
                      className:
                        "px-3 py-1 bg-primary-yellow text-lg md:text-xl font-medium italic w-fit",
                      children: e.designation,
                    }),
                    (0, a.jsx)("p", {
                      className: "md:text-lg md:py-5 py-3 text-justify",
                      children: e.text,
                    }),
                  ],
                }),
              ],
            },
            s
          )
        );
      var m = t(1664),
        x = t.n(m),
        h = t(9335);
      t(6912), t(5896);
      var p = {
        src: "/_next/static/media/logo.1a5c9263.png",
        height: 2832,
        width: 3149,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAQlBMVEVMaXH/bwP+XwD/li3/nR3/kgD/UgD/oAD/VwD+oQD/qD3/awD/iw7+ggD+dwD/ogD/kQD/owD/hgD/dAD/lQP/XgBjDkTVAAAAE3RSTlMAriLIeZ9Z/oe10Z6xvjnLXKvN/GprIwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAADZJREFUeJwlhkkCgCAQgMhtXCqt0f9/1TQOAElEpD4JfO8O3wCXz+tlYVXvPYeWXeIw/4T4eQIzIQFRq+JeJQAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 7,
      };
      function g(e) {
        return (0, a.jsx)("section", {
          children: (0, a.jsx)("div", {
            className: "h-[30px] flex",
            children: (0, a.jsx)("h1", {
              className:
                "text-lg text-[#FF341D] font-bold font-kanit uppercase",
              children: e.title,
            }),
          }),
        });
      }
      function u() {
        return (0, a.jsxs)("section", {
          className: "max-w-[1180px] mx-auto px-5 text-white bg-black py-16",
          children: [
            (0, a.jsxs)("h1", {
              className: " text-3xl md:text-5xl font-bold font-kanit py-10",
              children: [
                "Brands That ",
                (0, a.jsx)("span", {
                  className: "hero-text ",
                  children: "Trust Us",
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className:
                " border border-orange-500 -rotate-2 rounded-[8px] mx-3 mt-5",
              children: (0, a.jsx)("div", {
                className:
                  "py-10 px-0 md:px-10 overflow-visible md:flex flex-row md:space-y-0 justify-between no-tilt items-center",
                children: (0, a.jsxs)(o.tq, {
                  slidesPerView: "auto",
                  breakpoints: {
                    200: { slidesPerView: 1 },
                    600: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                  },
                  autoplay: { disableOnInteraction: !1 },
                  navigation: !0,
                  loop: !0,
                  height: "auto",
                  spaceBetween: 30,
                  modules: [d.pt, d.W_],
                  className: "mySwiper ",
                  children: [
                    (0, a.jsx)(o.o5, {
                      className: " swipeslide",
                      children: (0, a.jsx)("div", {
                        className:
                          "relative flex justify-center lg:p-2 md:p-10 p-16 ",
                        children: (0, a.jsx)(c(), {
                          src: "/brands/spur.png",
                          height: 55,
                          width: 220,
                          alt: "spur",
                        }),
                      }),
                    }),
                    (0, a.jsx)(o.o5, {
                      className:
                        "swipeslide flex justify-center lg:p-0 md:p-10 p-16",
                      children: (0, a.jsx)(c(), {
                        src: "/brands/navi.png",
                        height: 55,
                        width: 220,
                        alt: "navi",
                      }),
                    }),
                    (0, a.jsx)(o.o5, {
                      className:
                        "swipeslide flex justify-center lg:p-0 md:p-10 p-16",
                      children: (0, a.jsx)(c(), {
                        src: "/brands/aism.png",
                        height: 55,
                        width: 101,
                        alt: "aism",
                        className: "object-center",
                      }),
                    }),
                    (0, a.jsx)(o.o5, {
                      className:
                        "swipeslide flex justify-center lg:p-0 md:p-10 p-16",
                      children: (0, a.jsx)(c(), {
                        src: "/brands/rangde.png",
                        height: 55,
                        width: 220,
                        alt: "rangde",
                      }),
                    }),
                    (0, a.jsx)(o.o5, {
                      className:
                        "swipeslide flex justify-center lg:p-0 md:p-10 p-16",
                      children: (0, a.jsx)(c(), {
                        src: "/brands/shishu.jpg",
                        height: 55,
                        width: 220,
                        alt: "shishu",
                      }),
                    }),
                    (0, a.jsx)(o.o5, {
                      className:
                        "swipeslide flex justify-center lg:p-0 md:p-10 p-16",
                      children: (0, a.jsx)(c(), {
                        src: "/brands/fisdom.svg",
                        height: 55,
                        width: 220,
                        alt: "fisdom",
                      }),
                    }),
                    (0, a.jsx)(o.o5, {
                      className:
                        "swipeslide flex justify-center lg:p-0 md:p-10 p-16",
                      children: (0, a.jsx)(c(), {
                        src: "/brands/zypp.png",
                        height: 55,
                        width: 220,
                        alt: "zypp",
                      }),
                    }),
                    (0, a.jsx)(o.o5, {
                      className:
                        "swipeslide flex justify-center lg:p-0 md:p-10p-16",
                      children: (0, a.jsx)(c(), {
                        src: "/brands/pokerbazi.png",
                        height: 70,
                        width: 250,
                        alt: "pokerbazi",
                      }),
                    }),
                    (0, a.jsx)(o.o5, {
                      className:
                        "swipeslide flex justify-center lg:p-0 md:p-10p-16",
                      children: (0, a.jsx)(c(), {
                        src: "/brands/opulence.jpeg",
                        height: 55,
                        width: 160,
                        alt: "opulence",
                      }),
                    }),
                    (0, a.jsx)(o.o5, {
                      className:
                        "swipeslide flex justify-center lg:p-0 md:p-10p-16",
                      children: (0, a.jsx)(c(), {
                        src: "/brands/avisa.jpg",
                        height: 55,
                        width: 160,
                        alt: "avisa",
                      }),
                    }),
                    (0, a.jsx)(o.o5, {
                      className:
                        "swipeslide flex justify-center lg:p-0 md:p-10p-16",
                      children: (0, a.jsx)(c(), {
                        src: "/brands/adilqadri.png",
                        height: 55,
                        width: 160,
                        alt: "avisa",
                      }),
                    }),
                    (0, a.jsx)(o.o5, {
                      className:
                        "swipeslide flex justify-center lg:p-0 md:p-10p-16",
                      children: (0, a.jsx)(c(), {
                        src: "/brands/vitra.png",
                        height: 55,
                        width: 160,
                        alt: "avisa",
                      }),
                    }),
                    (0, a.jsx)(o.o5, {
                      className:
                        "swipeslide flex justify-center lg:p-0 md:p-10p-16",
                      children: (0, a.jsx)(c(), {
                        src: "/brands/iquanta.png",
                        height: 55,
                        width: 160,
                        alt: "avisa",
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      function j() {
        return (0, a.jsxs)("section", {
          className: "max-w-[1180px] mx-auto px-5 text-white bg-black py-10",
          children: [
            (0, a.jsxs)("h1", {
              className: " text-3xl md:text-5xl font-bold font-kanit py-8",
              children: [
                "Numbers that speak",
                " ",
                (0, a.jsx)("span", {
                  className: "hero-text ",
                  children: " louder than words",
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className:
                " border border-orange-500 -rotate-2 mt-8 rounded-[8px] mx-3",
              children: (0, a.jsxs)("div", {
                className:
                  "py-10 lg:px-40 lg:flex flex-row space-y-10 lg:space-y-0 justify-between no-tilt items-center",
                children: [
                  (0, a.jsxs)("div", {
                    className: "text-black text-center",
                    children: [
                      (0, a.jsx)("h1", {
                        className: "text-4xl font-extrabold font-kanit",
                        children: "25 Million+",
                      }),
                      (0, a.jsx)("p", {
                        className: "text-2xl font-semibold font-kanit",
                        children: "Views",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "text-black text-center",
                    children: [
                      (0, a.jsx)("h1", {
                        className: "text-4xl font-extrabold font-kanit",
                        children: "200,000 Hours+",
                      }),
                      (0, a.jsx)("p", {
                        className: "text-2xl font-semibold font-kanit",
                        children: "Watch Time",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "text-black text-center",
                    children: [
                      (0, a.jsx)("h1", {
                        className: "text-4xl font-extrabold font-kanit",
                        children: "10 Million+",
                      }),
                      (0, a.jsx)("p", {
                        className: "text-2xl font-semibold font-kanit",
                        children: "Audience",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      t(820);
      var f = t(2076);
      function w() {
        return (0, a.jsxs)("section", {
          className: "max-w-[1220px] px-5 mx-auto py-10 text-mol ",
          id: "services",
          children: [
            (0, a.jsx)("h1", {
              className: "text-4xl font-kanit font-extrabold py-8 px-2",
              children: "Here's what we will do for you",
            }),
            (0, a.jsxs)("div", {
              className: "grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5",
              children: [
                (0, a.jsx)(f.Z, {
                  className: "Tilt",
                  options: { max: 25, speed: 50 },
                  children: (0, a.jsx)("div", {
                    className:
                      "Tilt-inner border border-orange-500 -rotate-[4deg] h-[385px] w-[291px] mx-auto rounded-[8px] tilt2 my-5",
                    children: (0, a.jsxs)("div", {
                      className:
                        "py-10 px-7 text-white hover:text-black h-[385px] w-[291px] no-tilt2 border border-orange-500 ",
                      children: [
                        (0, a.jsx)("h1", {
                          className: "font-extrabold font-kanit text-4xl",
                          children: "Content",
                        }),
                        (0, a.jsx)("h1", {
                          className: "font-extrabold font-kanit text-4xl",
                          children: "Production",
                        }),
                        (0, a.jsx)("p", {
                          className: "text-xl pt-2 font-molengo",
                          children:
                            "Our team will shoot high quality videos for your content.",
                        }),
                      ],
                    }),
                  }),
                }),
                (0, a.jsx)(f.Z, {
                  className: "Tilt",
                  options: { max: 25, speed: 50 },
                  children: (0, a.jsx)("div", {
                    className:
                      "Tilt-inner border border-orange-500 -rotate-[4deg] h-[385px] w-[291px] mx-auto rounded-[8px] tilt2 my-5",
                    children: (0, a.jsxs)("div", {
                      className:
                        "py-10 px-7 text-white hover:text-black h-[385px] w-[291px] no-tilt2 border border-orange-500 ",
                      children: [
                        (0, a.jsx)("h1", {
                          className: "font-extrabold font-kanit text-4xl",
                          children: "Video",
                        }),
                        (0, a.jsx)("h1", {
                          className: "font-extrabold font-kanit text-4xl",
                          children: "Editing",
                        }),
                        (0, a.jsx)("p", {
                          className: "text-xl pt-2 font-molengo",
                          children:
                            "We will create captivating videos using fast paced video editing.",
                        }),
                      ],
                    }),
                  }),
                }),
                (0, a.jsx)(f.Z, {
                  className: "Tilt",
                  options: { max: 25, speed: 50 },
                  children: (0, a.jsx)("div", {
                    className:
                      " border border-orange-500 -rotate-[4deg] h-[385px] w-[291px] mx-auto rounded-[8px] tilt2 my-5",
                    children: (0, a.jsxs)("div", {
                      className:
                        "text-white hover:text-black py-10 px-7 no-tilt h-[385px] w-[291px] no-tilt2 border border-orange-500",
                      children: [
                        (0, a.jsx)("h1", {
                          className: "font-extrabold font-kanit text-4xl",
                          children: "Research &",
                        }),
                        (0, a.jsx)("h1", {
                          className: "font-extrabold font-kanit text-4xl",
                          children: "Writing",
                        }),
                        (0, a.jsx)("p", {
                          className: "text-xl pt-2 font-molengo",
                          children:
                            "For each content, we will do the research and write compelling copies for you.",
                        }),
                      ],
                    }),
                  }),
                }),
                (0, a.jsx)(f.Z, {
                  className: "Tilt",
                  options: { max: 25, speed: 50 },
                  children: (0, a.jsx)("div", {
                    className:
                      " border border-orange-500 -rotate-[4deg] h-[385px] w-[291px] mx-auto rounded-[8px] tilt2 my-5",
                    children: (0, a.jsxs)("div", {
                      className:
                        "text-white hover:text-black py-10 px-7 no-tilt h-[385px] w-[291px] no-tilt2 border border-orange-500",
                      children: [
                        (0, a.jsx)("h1", {
                          className: "font-extrabold font-kanit text-4xl",
                          children: "Graphics",
                        }),
                        (0, a.jsx)("h1", {
                          className: "font-extrabold font-kanit text-4xl",
                          children: "Designing",
                        }),
                        (0, a.jsx)("p", {
                          className: "text-xl pt-2 font-molengo",
                          children:
                            "Our visual design experts will create aesthetic designs that stand out.",
                        }),
                      ],
                    }),
                  }),
                }),
                (0, a.jsx)(f.Z, {
                  className: "Tilt",
                  options: { max: 25, speed: 50 },
                  children: (0, a.jsx)("div", {
                    className:
                      " border border-orange-500 -rotate-[4deg] h-[385px] w-[291px] mx-auto rounded-[8px] tilt2 my-5",
                    children: (0, a.jsxs)("div", {
                      className:
                        "text-white hover:text-black py-10 px-7 no-tilt h-[385px] w-[291px] no-tilt2 border border-orange-500",
                      children: [
                        (0, a.jsx)("h1", {
                          className: "font-extrabold font-kanit text-4xl",
                          children: "Meme",
                        }),
                        (0, a.jsx)("h1", {
                          className: "font-extrabold font-kanit text-4xl",
                          children: "Marketing",
                        }),
                        (0, a.jsx)("p", {
                          className: "text-xl pt-2 font-molengo",
                          children:
                            "Ideate and create relatable memes that resonated with the audience.",
                        }),
                      ],
                    }),
                  }),
                }),
                (0, a.jsx)(f.Z, {
                  className: "Tilt",
                  options: { max: 25, speed: 50 },
                  children: (0, a.jsx)("div", {
                    className:
                      " border border-orange-500 -rotate-[4deg] h-[385px] w-[291px] mx-auto rounded-[8px] tilt2 my-5",
                    children: (0, a.jsxs)("div", {
                      className:
                        "text-white hover:text-black py-10 px-7 no-tilt h-[385px] w-[291px] no-tilt2 border border-orange-500",
                      children: [
                        (0, a.jsx)("h1", {
                          className: "font-extrabold font-kanit text-4xl",
                          children: "Social Media",
                        }),
                        (0, a.jsx)("h1", {
                          className: "font-extrabold font-kanit text-4xl",
                          children: "Management",
                        }),
                        (0, a.jsx)("p", {
                          className: "text-xl pt-2 font-molengo",
                          children:
                            "End-to-end social media management to optimise content and drive engagement.",
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var N = t(3750),
        b = t(700);
      function v() {
        return (0, a.jsx)("section", {
          className: "max-w-[1180px] mx-auto py-10 space-y-16 sm:px-5 px-1",
          children: (0, a.jsx)("div", {
            id: "ig",
            children: (0, a.jsx)("div", {
              children: (0, a.jsxs)("div", {
                className: "lg:flex flex-row px-2 justify-between ",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "lg:block hidden border border-orange-500 h-[576px] w-full rounded-[8px] tilt3 my-5 ",
                    children: (0, a.jsxs)("div", {
                      className:
                        " no-tilt h-full w-full no-tilt3 border border-orange-500 flex items-center relative",
                      children: [
                        (0, a.jsx)(c(), {
                          src: "/reel_thumb.jpg",
                          fill: !0,
                          alt: "display picture",
                          className: " h-full object-cover rounded-md w-full",
                        }),
                        (0, a.jsx)("a", {
                          href: "https://www.instagram.com/reel/Cr3MMybJof3/?igshid=MzRlODBiNWFlZA==",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: (0, a.jsx)(N.BEK, {
                            className:
                              "play text-yellow-500/80 absolute text-6xl top-0 mx-auto my-auto bottom-0 left-0 right-0 duration-300 ease-in-out hover:scale-110 cursor-pointer",
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "lg:ml-16 px-1",
                    children: [
                      (0, a.jsxs)("h1", {
                        className:
                          " text-xl text-red-600 md:text-xl uppercase font-kanit ",
                        children: [
                          "If your business isn't on Instagram,",
                          " ",
                          (0, a.jsx)("span", {
                            className: " ",
                            children: " it should be.",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "py-7 space-y-2",
                        children: [
                          (0, a.jsx)("h1", {
                            className: "text-5xl font-bold font-kanit",
                            children: "If your business is on",
                          }),
                          (0, a.jsxs)("h1", {
                            className: "text-5xl font-bold font-kanit",
                            children: [
                              "Instagram,",
                              " ",
                              (0, a.jsx)("span", {
                                className: "hero-text",
                                children: "engage your",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("h1", {
                            className: "text-5xl font-bold font-kanit",
                            children: [
                              " ",
                              (0, a.jsx)("span", {
                                className: "hero-text",
                                children: "followers daily.",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("p", {
                        className: "text-xl font-molengo",
                        children: [
                          "Create end-to-end content for your Instagram. We will create Reels, Carousels, Memes & Daily Stories for your page. Grow your Instagram page organically and build a community of followers that convert to paid customers.",
                          " ",
                        ],
                      }),
                      (0, a.jsx)("a", {
                        href: "#pricing",
                        children: (0, a.jsxs)("button", {
                          className:
                            "py-3 px-7 cta-btn text-black font-semibold my-10",
                          children: [" ", "Go Viral", " "],
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "lg:hidden border border-orange-500 h-[576px] w-[325px] mx-auto rounded-[8px] tilt3 my-5 relative",
                    children: (0, a.jsxs)("div", {
                      className:
                        "py-10 px-7 no-tilt h-[576px] w-[325px] no-tilt3 border border-orange-500 relative",
                      children: [
                        (0, a.jsx)(c(), {
                          src: "/reel_thumb.jpg",
                          fill: !0,
                          alt: "display picture",
                          className: "object-cover rounded-md",
                        }),
                        (0, a.jsx)("a", {
                          href: "https://www.instagram.com/reel/Cr3MMybJof3/?igshid=MzRlODBiNWFlZA==",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: (0, a.jsx)(N.BEK, {
                            className:
                              "text-yellow-500/80 absolute text-6xl top-0 mx-auto my-auto bottom-0 left-0 right-0 duration-300 ease-in-out hover:scale-110 cursor-pointer",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      }
      function y() {
        return (0, a.jsxs)("section", {
          className: "max-w-screen-lg sm:mx-auto mr-auto py-10 px-8",
          id: "contact",
          children: [
            (0, a.jsx)("div", {
              className: "sm:flex sm:justify-center",
              children: (0, a.jsx)(g, { title: "CONTACT US" }),
            }),
            (0, a.jsx)("h1", {
              className:
                "text-5xl mx-auto font-extrabold font-kanit py-3 sm:text-center text-left",
              children: "Let's connect",
            }),
            (0, a.jsx)("div", {
              className: "flex sm:justify-center",
              children: (0, a.jsxs)("div", {
                className:
                  "sm:space-x-10 py-2 sm:flex sm:space-y-0 space-y-3 sm:justify-center ",
                children: [
                  (0, a.jsx)("div", {
                    className: "flex justify-start",
                    children: (0, a.jsx)("a", {
                      href: "https://calendly.com/ayushman-a5i/growth-rocket-book-a-call",
                      target: "blank",
                      children: (0, a.jsx)("button", {
                        className:
                          "py-3 px-10 cta-btn text-black font-semibold",
                        children: "Book Call",
                      }),
                    }),
                  }),
                  (0, a.jsx)("div", {
                    children: (0, a.jsx)("a", {
                      href: "https://wa.me/919871918003",
                      target: "blank",
                      children: (0, a.jsx)("button", {
                        className:
                          "py-3 px-10 cta-btn text-black font-semibold",
                        children: "Chat On Whatsapp",
                      }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      t(9844), t(7731), t(615);
      var k = t(8193);
      function A() {
        return (0, a.jsx)("section", {
          className: "max-w-[1180px] mx-auto py-10 space-y-16 sm:px-5 px-1",
          children: (0, a.jsxs)("div", {
            children: [
              (0, a.jsx)("div", {
                className: "lg:hidden block px-3",
                children: (0, a.jsx)(g, { title: "meet the founder" }),
              }),
              (0, a.jsx)("div", {
                children: (0, a.jsxs)("div", {
                  className: "lg:flex flex-row px-2 justify-between",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "block mx-5 border border-orange-500 h-[576px] w-[325px] mx-auto rounded-[8px] tilt3 my-5 relative",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "py-10 px-7 no-tilt h-[576px] w-[325px] no-tilt3 border border-orange-500",
                          children: (0, a.jsx)(c(), {
                            src: "/founder.jpg",
                            fill: !0,
                            alt: "display picture",
                            className: "object-cover",
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "py-1 px-7 text-black font-semibold sm:scale-125 border border-orange-500 rotate-[4deg] tilt3 absolute top-5 sm:top-10 left-0 md:text-sm",
                          children: [
                            (0, a.jsx)("h2", { children: "Ayushman Pandita " }),
                            (0, a.jsxs)("div", {
                              className: "flex space-x-1 items-center",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "flex",
                                  children: (0, a.jsx)(x(), {
                                    href: "https://www.instagram.com/xyushmxn/",
                                    target: "blank",
                                    children: (0, a.jsx)(k.Bpw, {
                                      className: "text-xl",
                                    }),
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  className: "flex",
                                  children: (0, a.jsx)(x(), {
                                    href: "https://www.youtube.com/@AyushmanPandita",
                                    target: "blank",
                                    children: (0, a.jsx)(k.RLq, {
                                      className: "text-xl",
                                    }),
                                  }),
                                }),
                                (0, a.jsx)("div", { children: "400,000+" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "lg:ml-16 flex items-center pb-5 px-1",
                      children: (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)("div", {
                            className: "lg:block hidden",
                            children: (0, a.jsxs)("h1", {
                              className:
                                " text-3xl md:text-3xl font-bold font-kanit ",
                              children: [
                                "Meet ",
                                (0, a.jsx)("span", {
                                  className: "hero-text ",
                                  children: " The Founder",
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "py-7 space-y-2",
                            children: [
                              (0, a.jsx)("h1", {
                                className: "text-5xl font-bold font-kanit",
                                children: "Ayushman Pandita",
                              }),
                              (0, a.jsx)("h1", {
                                className:
                                  "text-2xl font-bold font-kanit text-yellow-500",
                                children:
                                  "250,000+ Youtube | 150,000+ Instagram",
                              }),
                            ],
                          }),
                          (0, a.jsx)("p", {
                            className: "text-xl font-molengo",
                            children:
                              "As an entrepreneur and content creator, Ayushman has a passion for creating exceptional content that resonates with audiences. His journey began in February 2021 when he started making finance videos on YouTube for India's youth. After his success on Youtube, he launched his Instagram account in August 2022 and scaled to 1 lakh followers in less than 4 months.",
                          }),
                          (0, a.jsx)("p", {
                            className: "text-xl font-molengo pt-4",
                            children:
                              "Ayushman completed his BTech in Computer Science from IIITD in 2020. He previously worked as a Software Engineer at HSBC and as a Product Manager at BharatPe.",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      var C = t(7127),
        S = t(7788),
        T = t.n(S);
      let D = ["transparent", "transparent", "transparent"];
      function P() {
        let [e, s] = r.useState(0),
          t = r.useRef(null);
        function l() {
          t.current && clearTimeout(t.current);
        }
        return (
          r.useEffect(
            () => (
              l(),
              (t.current = setTimeout(
                () => s((e) => (e === D.length - 1 ? 0 : e + 1)),
                2500
              )),
              () => {
                l();
              }
            ),
            [e]
          ),
          (0, a.jsxs)("div", {
            className: "space-y-2 z-40",
            children: [
              (0, a.jsx)("h1", {
                className:
                  "xl:text-7xl text-3xl md:text-5xl font-medium font-kanit tracking-wide",
                children: "Create",
              }),
              (0, a.jsx)("h1", {
                className:
                  "xl:text-7xl text-3xl md:text-5xl font-medium font-kanit tracking-wide",
                children: "Content That",
              }),
              (0, a.jsx)("div", {
                className:
                  "text-4xl hero-text font-bold xl:text-7xl md:text-5xl font-kanit animate-text sm:pb-10 pb-2 tracking-wide",
                style: { fontWeight: "800" },
                children: (0, a.jsx)("div", {
                  className: "font-extrabold hero-text",
                  children: (0, a.jsx)(T(), {
                    strings: [
                      "Builds Brand",
                      "Engages Viewers",
                      "Educates Customers",
                    ],
                    typeSpeed: 100,
                    backSpeed: 80,
                    loop: !0,
                  }),
                }),
              }),
              (0, a.jsx)("div", {
                className: "z-40",
                children: (0, a.jsx)("a", {
                  href: "#pricing",
                  children: (0, a.jsx)("button", {
                    className:
                      "cta-btn text-sm px-4 sm:text-lg md:text-xl py-2 text-gray-900 sm:px-5 rounded-sm font-semibold",
                    children: "Go Viral",
                  }),
                }),
              }),
            ],
          })
        );
      }
      function M() {
        return (0, a.jsx)("section", {
          className: "max-w-[1180px] mx-auto px-3 text-white bg-black py-16",
          children: (0, a.jsx)("div", {
            className:
              " border border-orange-500 -rotate-2 mt-8 w-full rounded-[8px] mx-3 mx-auto",
            children: (0, a.jsx)("div", {
              className:
                "py-10 lg:px-10 lg:flex flex-row space-y-10 lg:space-y-0 justify-between w-full no-tilt items-center",
              children: (0, a.jsx)("h1", {
                className:
                  "md:text-5xl sm:text-3xl text-2xl w-full text-black font-extrabold font-kanit capitalize text-center popping-text ",
                children: "Full Refund If We Don't Beat Your Current Views",
              }),
            }),
          }),
        });
      }
      var q = t(2194),
        I = t(3330),
        W = t(2797),
        B = t(8862),
        R = t(5185);
      function L(e) {
        let { question: s, answer: t } = e;
        return (0, a.jsxs)(q.Z, {
          className: "accordion-outer border-orange-500 faq-shadow",
          children: [
            (0, a.jsx)(I.Z, {
              expandIcon: (0, a.jsx)(R.Z, { className: "accordion-icon" }),
              "aria-controls": "panel1a-content",
              id: "panel1a-header",
              children: (0, a.jsx)(B.Z, {
                className: "font-kanitt text-2xll ",
                children: s,
              }),
            }),
            (0, a.jsx)(W.Z, {
              children: (0, a.jsx)(B.Z, {
                className: "text-basee font-molengoo",
                children: t,
              }),
            }),
          ],
        });
      }
      var E = [
        {
          question: "What is the 100% refund policy exactly?",
          answer:
            "a. If we are not able to outperform the number of views that your content is getting right now, we will give you a 100% refund. No questions asked. No hidden terms. Only performance shall speak.",
        },
        {
          question: "Who will create this content exactly?",
          answer:
            "a. We have an in-house team of social media experts who will create your content end to end. Right from research & scripting all the way to shooting and editing the content we will do it all.",
        },
        {
          question:
            "How long will it take to start posting content on my page?",
          answer:
            "a. Once we finalize our partnership, we will start posting content on your Instagram within 7-10 days.",
        },
        {
          question:
            "Can I post this content on other social media platforms like Youtube & Facebook?",
          answer:
            "a. Yes! You can create the content created by us on any platform of your choice.",
        },
        {
          question:
            "Who will be my point of contact and how do I communicate with them?",
          answer:
            "a. Each partner will get a dedicated content manager and a content team. We prefer creating WhatsApp groups with our partners for faster communications.",
        },
        {
          question:
            "My requirements are different from the listed package. Can you help me with that too?",
          answer:
            "a. Yes. We do provide customized social media services to our brands. Book a call and let’s discuss!",
        },
      ];
      function V() {
        let e = E.map((e, s) =>
          (0, a.jsx)(
            "div",
            {
              children: (0, a.jsx)(
                L,
                { question: e.question, answer: e.answer },
                s
              ),
            },
            s
          )
        );
        return (0, a.jsxs)("section", {
          className: "max-w-[1180px] mx-auto px-3 pb-20",
          id: "faq",
          children: [
            (0, a.jsx)("div", { className: "" }),
            (0, a.jsx)("h1", {
              className:
                "text-5xl md:text-6xl lg:text-7xl font-bold font-kanit pt-5 pb-10 text-left",
              children: "FAQs",
            }),
            (0, a.jsx)("div", {
              className: "md:grid-cols-2 grid gap-5",
              children: e,
            }),
          ],
        });
      }
      function G(e) {
        let [s, t] = (0, r.useState)(!1),
          l = () => {
            t(!0);
          },
          i = () => {
            t(!1);
          };
        return (0, a.jsx)(f.Z, {
          className: "Tilt h-full md:scale-100 ",
          options: { max: 25, speed: 50 },
          children: (0, a.jsx)("div", {
            onMouseEnter: l,
            onMouseLeave: i,
            className:
              "border-[3px] border-orange-500 shadow-md shadow-orange-400  h-full scale-[90%] md:scale-100  mx-auto rounded-[8px]  mt-5 ",
            children: (0, a.jsxs)("div", {
              className: " text-white grid grid-cols-12 h-full py-5 ",
              children: [
                (0, a.jsx)("div", {
                  className:
                    "md:col-span-3 col-span-12 flex items-center justify-center rounded-sm",
                  children: (0, a.jsx)("div", {
                    className:
                      "md:w-[150px] md:h-[150px] h-[250px] w-[250px] bg-yellow-200 rounded-md object-cover flex",
                    children: (0, a.jsx)(c(), {
                      src: e.imgSrc,
                      height: 250,
                      width: 250,
                      alt: "brand logo",
                      className: "p-1 object-contain",
                    }),
                  }),
                }),
                (0, a.jsxs)("div", {
                  className:
                    "md:col-span-9 col-span-12 space-y-5 pt-5 px-6 md:pr-5 ",
                  children: [
                    (0, a.jsx)("h3", {
                      className: "".concat(
                        "text-yellow-500",
                        "  text-3xl font-kanit  font-semibold"
                      ),
                      children: e.title,
                    }),
                    (0, a.jsx)("p", {
                      className: "text-base font-molengo font-medium",
                      children: e.subTitle,
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      function Z() {
        return (0, a.jsxs)("section", {
          id: "results",
          className:
            "max-w-[1180px] lg:mx-auto text-white bg-black py-10 lg:py-16 px-3 md:px-5",
          children: [
            (0, a.jsxs)("h1", {
              className:
                " text-3xl md:text-5xl font-bold font-kanit mb-3 md:my-10",
              children: [
                "Stories of our brands that saw",
                " ",
                (0, a.jsx)("span", {
                  className: "hero-text ",
                  children: " exponential growth",
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className:
                "grid lg:grid-cols-1 grid-cols-1 grid-rows-1 gap-5 items-end lg:gap-10",
              children: [
                (0, a.jsxs)("div", {
                  className: "grid grid-cols-12",
                  children: [
                    (0, a.jsx)("div", {
                      className: "lg:col-span-8 col-span-12",
                      children: (0, a.jsx)(G, {
                        imgSrc: "/brands/fisdom.svg",
                        name: "Fisdom",
                        title: "1100% Increase in views within 45 days",
                        subTitle:
                          "Fisdom's Instagram reels used to get an average of 300-400 organic views. After partnering with us, their average views on reels skyrocketed to 3500 in less than 45 days.",
                      }),
                    }),
                    " ",
                    (0, a.jsx)("div", { className: "lg:col-span-4" }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "grid grid-cols-12",
                  children: [
                    (0, a.jsx)("div", { className: "lg:col-span-4" }),
                    (0, a.jsx)("div", {
                      className: "lg:col-span-8 col-span-12",
                      children: (0, a.jsx)(G, {
                        imgSrc: "/result_formula.JPG",
                        name: "Formula Guy",
                        title:
                          "50,000 followers and 5 million lifetime views in 6 months",
                        subTitle:
                          "Formula Guy’s personal brand page gained over 50,000 followers and over 5 million views in less than 6 months. Growth Rocket helped build his personal brand from day 1 of his journey. ",
                      }),
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "grid grid-cols-12",
                  children: [
                    (0, a.jsx)("div", {
                      className: "lg:col-span-8 col-span-12",
                      children: (0, a.jsx)(G, {
                        imgSrc: "/rangde.svg",
                        name: "Rang De",
                        title:
                          "800% more virality and 6x growth in average views",
                        subTitle:
                          "RangDe created a reel in house on one of their success stories and it got 6800 views. We created a reel on the exact same topic and it went viral with over 61,000 views! Plus a 6x growth in average views on reels.",
                      }),
                    }),
                    (0, a.jsx)("div", { className: "lg:col-span-4" }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function F(e) {
        return (0, a.jsx)("div", {
          className: " lg:my-3 lg:mx-auto mx-3 mb-3",
          children: (0, a.jsxs)("div", {
            className:
              "py-5 lg:py-10 shadow-lg shadow-orange-400 border border-orange-400 bg-black text-white h-full rounded-se-3xl rounded-es-3xl",
            children: [
              (0, a.jsxs)("div", {
                className: " flex-col items-center justify-center ",
                children: [
                  (0, a.jsx)(c(), {
                    src: e.imgSrc,
                    height: 300,
                    width: 300,
                    alt: "logo",
                    className:
                      "mx-auto object-cover h-[100px] w-[100px] rounded-full shadow-gray-700 shadow-md",
                  }),
                  (0, a.jsx)("img", {
                    width: "40",
                    height: "40",
                    src: "/inv.png",
                    alt: "quote-left",
                    className: "mx-auto py-2 pt-4",
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "md:col-span-7 px-3 md:pr-5 ck ",
                children: [
                  (0, a.jsx)("p", {
                    className:
                      "text-md font-molengo font-medium px-6 md:max-h-[25vh] overflow-auto",
                    children: e.subTitle,
                  }),
                  (0, a.jsx)("div", {
                    className: "border border-[#f5f5f5] mx-2 my-8",
                  }),
                  (0, a.jsx)("h3", {
                    className:
                      "text-2xl font-kanit text-right font-semibold text-yellow-500",
                    children: e.title,
                  }),
                  (0, a.jsx)("h3", {
                    className:
                      "text-xl font-kanit text-right font-medium text-red-400",
                    children: e.position,
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function z() {
        let [e, s] = (0, r.useState)(null);
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)("section", {
            className: "grid lg:grid-cols-3 md:grid-cols-2 gap-10",
            children: [
              (0, a.jsx)(F, {
                imgSrc: "/t111.jpg",
                name: "Fisdom",
                title: "Varun Ganjoo",
                subTitle:
                  "We partnered with Growth Rocket to create a new social media page about Poker education. They didn't just craft a comprehensive social media strategy for our Poker education page, but also flawlessly executed content from conception to delivery. An exemplary team that genuinely drives results!",
                position: "- Founder, Poker Baazi",
              }),
              (0, a.jsx)(F, {
                imgSrc: "/t2.jpg",
                name: "Fisdom",
                title: "Ramakrishna NK",
                subTitle:
                  "Our vision was to share our brand's success stories through short engaging videos. Thanks to the incredibly innovative team at Growth Rocket, not only did we get a tailored social media strategy, but they also spearheaded the entire video creation process. I'm thrilled to share that our debut video skyrocketed with over 60,000 views! Truly an experience beyond our expectations. ",
                position: "- Founder, Rang De ",
              }),
              (0, a.jsx)(F, {
                imgSrc: "/t3.jpeg",
                name: "Shivani Muthanna ",
                title: "Shivani Muthanna",
                subTitle:
                  "Teaming up with Ayushman and Growth Rocket was a game changer for us. Their exceptional financial education videos for YouTube and Instagram not only showcased top-tier production but also drove virality, organically boosting our subscribers and followers. An outstanding collaboration! ",
                position: "- Digital Content Head, Fisdom ",
              }),
            ],
          }),
        });
      }
      function O() {
        return (0, a.jsxs)("section", {
          className:
            " text-white bg-black pt-10 max-w-[1180px] mx-5 md:mx-auto",
          children: [
            (0, a.jsxs)("h1", {
              className:
                " text-3xl md:text-5xl font-bold font-kanit mb-3 md:my-10 px-3 lg:px-0",
              children: [
                "Hear from our ",
                (0, a.jsx)("span", {
                  className: "hero-text ",
                  children: " Happy Clients",
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "py-5",
              children: (0, a.jsx)(z, {}),
            }),
          ],
        });
      }
      t(5282), t(3506);
      let _ = () =>
        (0, a.jsxs)("section", {
          className: " md:pt-6 md:pb-12 py-5 ",
          id: "pricing",
          children: [
            (0, a.jsxs)("h3", {
              className:
                "md:px-40 px-5 pt-10 mb-8 text-3xl md:text-4xl font-bold",
              children: [
                "Select Your Package To Build A",
                " ",
                (0, a.jsx)("span", {
                  className: "hero-text",
                  children: "Viral Brand",
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "md:mx-40 -mt-5",
              children: (0, a.jsxs)(o.tq, {
                spaceBetween: 20,
                slidesPerView: "auto",
                freeMode: !0,
                grabCursor: !0,
                breakpoints: {
                  200: { slidesPerView: 1.6 },
                  768: { slidesPerView: 3 },
                },
                modules: [d.Rv],
                className: " w-full text-black grid items-center ",
                children: [
                  (0, a.jsx)(o.o5, {
                    className:
                      " ml-5 md:ml-0 my-5 flex flex-col justify-center items-center ",
                    children: (0, a.jsxs)("div", {
                      className:
                        "bg-white px-4 py-4 sm:px-7 border-primary-yellow border-[6px] rounded-xl w-full flex flex-col gap-4 ",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "grid gap-2",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "flex gap-2 items-center",
                              children: [
                                (0, a.jsx)("h2", {
                                  className:
                                    "text-2xl text-[19px] font-extrabold md:text-3xl",
                                  children: "Sky Rocket",
                                }),
                                (0, a.jsx)("div", {
                                  className: "w-10 h-10 md:w-12 md:h-12",
                                  children: (0, a.jsx)("lord-icon", {
                                    className: "",
                                    src: "https://cdn.lordicon.com/vfbsedgx.json",
                                    trigger: "loop",
                                    delay: "1000",
                                    colors: "primary:#eee966,secondary:#e83a30",
                                    stroke: "80",
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("p", {
                              className: "text-sm text-gray-600 md:text-base",
                              children: ["₹50,000 per month", " "],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "flex flex-col gap-2 md:gap-2.5 text-xs sm:text-sm md:text-base",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/checked--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "6 Reels",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/checked--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "1 Influencer",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/cancel--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Carousels",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/checked--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Personalized Branding",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/checked--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Video Editing",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/checked--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Production",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/checked--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Script Writing",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/checked--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Content Research",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/cancel--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Content Strategy",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/cancel--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Graphic Designing",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/cancel--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Account Manager",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/cancel--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Dedicated Team",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/cancel--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Meme Marketing",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/cancel--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Daily Stories",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsx)(x(), {
                          href: "https://calendly.com/ayushman-a5i/growth-rocket-book-a-call",
                          target: "blank",
                          children: (0, a.jsxs)("button", {
                            className:
                              "bgGrad text-black rounded-xl px-5 py-2 font-extrabold",
                            children: [
                              "Book Call",
                              " ",
                              (0, a.jsx)("img", {
                                className: "w-5 inline ",
                                src: "/assets/right-arrow.svg",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)(o.o5, {
                    className:
                      " my-5 flex flex-col justify-center items-center",
                    children: (0, a.jsxs)("div", {
                      className:
                        "bg-gray-100 px-4 sm:px-7 py-4 border-primary-yellow border-[6px] rounded-xl w-full flex flex-col gap-4 ",
                      children: [
                        (0, a.jsx)("h4", {
                          className:
                            "bgGrad inline-block w-fit text-white py-1 px-3 text-xs md:text-base md:font-semibold absolute top-2",
                          children: "Best For Growing Brands",
                        }),
                        (0, a.jsxs)("div", {
                          className: "grid gap-2",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "flex items-center gap-3",
                              children: [
                                (0, a.jsx)("h2", {
                                  className:
                                    "text-2xl text-[19px] font-extrabold md:text-3xl",
                                  children: "Moon Rocket",
                                }),
                                (0, a.jsx)("div", {
                                  className: "w-10 h-10 md:w-12 md:h-12",
                                  children: (0, a.jsx)("lord-icon", {
                                    src: "https://cdn.lordicon.com/xhsumrcb.json",
                                    trigger: "loop",
                                    delay: "1000",
                                    colors: "primary:#e83a30,secondary:#eee966",
                                    stroke: "80",
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsx)("p", {
                              className: "text-sm text-gray-600 md:text-base",
                              children: "₹75,000 per month",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "flex flex-col gap-2 md:gap-2.5 text-xs sm:text-sm md:text-base",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/checked--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "12 Reels",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/checked--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "1 Influencer",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/cancel--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Carousels",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/checked--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Personalized Branding",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/checked--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Video Editing",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/checked--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Production",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/checked--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Script Writing",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/checked--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Content Research",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/checked--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Content Strategy",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/checked--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Graphic Designing",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/checked--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Account Manager",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/checked--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Dedicated Team",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/cancel--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Meme Marketing",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/cancel--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Daily Stories",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsx)(x(), {
                          href: "https://calendly.com/ayushman-a5i/growth-rocket-book-a-call",
                          target: "blank",
                          children: (0, a.jsxs)("button", {
                            className:
                              "bgGrad rounded-2xl px-5 py-2 text-black font-extrabold",
                            children: [
                              "Book Call",
                              " ",
                              (0, a.jsx)("img", {
                                className: "w-5 inline ",
                                src: "/assets/right-arrow.svg",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)(o.o5, {
                    className:
                      " my-5 flex flex-col justify-center items-center",
                    children: (0, a.jsxs)("div", {
                      className:
                        " border-primary-yellow border-[6px] bg-white px-4 py-4 sm:px-7 rounded-xl w-full flex flex-col gap-4 ",
                      children: [
                        (0, a.jsx)("h4", {
                          className:
                            "bgGrad inline-block w-fit text-white py-1 px-3 text-xs md:text-base md:font-semibold absolute top-2",
                          children: "Best For Big Brands",
                        }),
                        (0, a.jsxs)("div", {
                          className: "grid gap-2",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "flex items-center gap-2",
                              children: [
                                (0, a.jsx)("h2", {
                                  className:
                                    "text-2xl text-[18px] font-extrabold md:text-3xl whitespace-nowrap",
                                  children: "Milky Way Rocket",
                                }),
                                (0, a.jsx)("div", {
                                  className: "w-10 h-10 md:w-12 md:h-12",
                                  children: (0, a.jsx)("lord-icon", {
                                    src: "https://cdn.lordicon.com/miilpjag.json",
                                    trigger: "loop",
                                    delay: "1000",
                                    colors: "primary:#eee966,secondary:#e83a30",
                                    stroke: "70",
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsx)("p", {
                              className: "text-sm text-gray-600 md:text-base",
                              children: "₹1,25,000 per month",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "flex flex-col gap-2 md:gap-2.5 text-xs sm:text-sm md:text-base",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/checked--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "20 Reels",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/checked--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "2 Influencers",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/checked--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "4 Carousels",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/checked--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Personalized Branding",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/checked--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Video Editing",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/checked--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Production",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/checked--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Script Writing",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/checked--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Content Research",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/checked--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Content Strategy",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/checked--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Graphic Designing",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/checked--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Account Manager",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/checked--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Dedicated Team",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/checked--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Meme Marketing",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, a.jsx)("img", {
                                  src: "https://img.icons8.com/color/96/null/checked--v1.png",
                                  className: "w-6 h-6",
                                }),
                                (0, a.jsx)("p", {
                                  className: "",
                                  children: "Daily Stories",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsx)(x(), {
                          href: "https://calendly.com/ayushman-a5i/growth-rocket-book-a-call",
                          target: "blank",
                          children: (0, a.jsxs)("button", {
                            className:
                              "bgGrad rounded-xl px-5 py-2 text-black font-extrabold",
                            children: [
                              "Book Call",
                              " ",
                              (0, a.jsx)("img", {
                                className: "w-5 inline text-black",
                                src: "/assets/right-arrow.svg",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)(o.o5, {
                    className: "w-[4vw] md:hidden",
                    children: (0, a.jsx)("div", { className: "w-[4vw] " }),
                  }),
                ],
              }),
            }),
          ],
        });
      t(3539);
      let Y = () =>
        (0, a.jsx)("section", {
          className: "max-w-[1180px] mx-auto py-10 space-y-16 sm:px-5 px-1",
          id: "portfolio",
          children: (0, a.jsxs)("div", {
            id: "ig",
            children: [
              (0, a.jsx)("div", {
                className: "px-5 md:px-1 mb-6 md:mb-12",
                children: (0, a.jsx)("div", {
                  className: "md:py-2 py-7 space-y-2",
                  children: (0, a.jsxs)("h1", {
                    className: " text-3xl md:text-5xl font-bold font-kanit",
                    children: [
                      "We create the highest quality content for brands.",
                      " ",
                      (0, a.jsx)("span", {
                        className: "hero-text ",
                        children: "And we will do the same for you.",
                      }),
                    ],
                  }),
                }),
              }),
              (0, a.jsx)("div", {
                className: " p-2 h-full w-full rounded-md ",
                children: (0, a.jsxs)(o.tq, {
                  spaceBetween: 30,
                  slidesPerView: "auto",
                  loop: !0,
                  grabCursor: !0,
                  breakpoints: {
                    200: { slidesPerView: 1.4 },
                    768: { slidesPerView: 3.5 },
                  },
                  centeredSlides: !0,
                  modules: [d.Rv],
                  className: "mySwiper flex h-full w-full rounded-md",
                  children: [
                    (0, a.jsxs)(o.o5, {
                      className:
                        "border border-orange-500 shadow-md shadow-orange-600 p-1 rounded-md",
                      children: [
                        " ",
                        (0, a.jsx)(b.Z, { url: "/Portfolio/1.mp4" }),
                      ],
                    }),
                    (0, a.jsxs)(o.o5, {
                      className:
                        "border border-orange-500 shadow-md shadow-orange-600 p-1 rounded-md",
                      children: [
                        " ",
                        (0, a.jsx)(b.Z, { url: "/Portfolio/2.mp4" }),
                      ],
                    }),
                    (0, a.jsxs)(o.o5, {
                      className:
                        "border border-orange-500 shadow-md shadow-orange-600 p-1 rounded-md",
                      children: [
                        " ",
                        (0, a.jsx)(b.Z, { url: "/Portfolio/3.mp4" }),
                      ],
                    }),
                    (0, a.jsxs)(o.o5, {
                      className:
                        "border border-orange-500 shadow-md shadow-orange-600 p-1 rounded-md",
                      children: [
                        " ",
                        (0, a.jsx)(b.Z, { url: "/Portfolio/4.mp4" }),
                      ],
                    }),
                    (0, a.jsxs)(o.o5, {
                      className:
                        "border border-orange-500 shadow-md shadow-orange-600 p-1 rounded-md",
                      children: [
                        " ",
                        (0, a.jsx)(b.Z, { url: "/Portfolio/5.mp4" }),
                      ],
                    }),
                    (0, a.jsxs)(o.o5, {
                      className:
                        "border border-orange-500 shadow-md shadow-orange-600 p-1 rounded-md",
                      children: [
                        " ",
                        (0, a.jsx)(b.Z, { url: "/Portfolio/6.mp4" }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      function H() {
        let [e, s] = (0, r.useState)(!1);
        (0, r.useEffect)(() => {
          window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && s(!1)
          );
        }, []);
        let t = (0, a.jsxs)("ul", {
          className:
            " mt-2 flex flex-col gap-2 pt-3 mb-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6",
          children: [
            (0, a.jsx)(h.Typography, {
              as: "li",
              variant: "small",
              color: "blue-gray",
              className: "p-1 text-xl text-left ",
              children: (0, a.jsx)(x(), {
                href: "#portfolio",
                className: "flex items-center ",
                children: "Portfolio",
              }),
            }),
            (0, a.jsx)(h.Typography, {
              as: "li",
              variant: "small",
              color: "blue-gray",
              className: "p-1 text-xl text-left",
              children: (0, a.jsx)(x(), {
                href: "#results",
                className: "flex items-center",
                children: "Results",
              }),
            }),
            (0, a.jsx)(h.Typography, {
              as: "li",
              variant: "small",
              color: "blue-gray",
              className: "p-1 text-xl text-left ",
              children: (0, a.jsx)(x(), {
                href: "#pricing",
                className: "flex items-center",
                children: "Pricing",
              }),
            }),
            (0, a.jsx)(h.Typography, {
              as: "li",
              variant: "small",
              color: "blue-gray",
              className: "p-1 text-xl text-left",
              children: (0, a.jsx)(x(), {
                href: "#services",
                className: "flex items-center",
                children: "Services",
              }),
            }),
            (0, a.jsx)(h.Typography, {
              as: "li",
              variant: "small",
              color: "blue-gray",
              className: "p-1 text-xl text-left",
              children: (0, a.jsx)(x(), {
                href: "#contact",
                className: "flex items-center",
                children: "Contact",
              }),
            }),
          ],
        });
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(i(), {
              children: [
                (0, a.jsx)("title", { children: "Meteorlab07t" }),
                (0, a.jsx)("meta", {
                  name: "viewport",
                  content: "width=device-width, initial-scale=1",
                }),
                (0, a.jsx)("meta", {
                  name: "description",
                  content:
                    "We specialize in creating engaging social media content for various brands, helping them connect with their audience and drive growth.",
                }),
                (0, a.jsx)("meta", {
                  name: "keywords",
                  content:
                    "social media content, brand marketing, content creation, social media strategy",
                }),
                (0, a.jsx)("meta", {
                  name: "author",
                  content: "Meteorlab07",
                }),
                (0, a.jsx)("meta", {
                  property: "og:title",
                  content: "Meteorlab07",
                }),
                (0, a.jsx)("meta", {
                  property: "og:description",
                  content:
                    "We specialize in creating engaging social media content for various brands, helping them connect with their audience and drive growth.",
                }),
                (0, a.jsx)("meta", {
                  property: "og:image",
                  content: "https://imgur.com/a/BoRmuLh",
                }),
                (0, a.jsx)("meta", {
                  property: "og:url",
                  content: "https://growthrocket.media",
                }),
                (0, a.jsx)("meta", { property: "og:type", content: "website" }),
                (0, a.jsx)("meta", {
                  property: "og:site_name",
                  content: "Meteorlab07: Let us help you to Grow Your Brand",
                }),
                (0, a.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
              ],
            }),
            (0, a.jsxs)("main", {
              className: "overflow-x-hidden bg-black text-white ",
              children: [
                (0, a.jsxs)(h.Navbar, {
                  className:
                    "mx-auto max-w-screen-xl pb-3 pt-6 px-4 lg:px-8 lg:py-4 bg-transparent navbar",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "container mx-auto flex items-center justify-between text-blue-gray-900",
                      children: [
                        (0, a.jsx)(c(), {
                          src: p,
                          alt: "team-member-image",
                          className: " w-10 h-10 mt-3 ml-4",
                          priority: !0,
                        }),
                        (0, a.jsx)("div", {
                          className: "hidden lg:block",
                          children: t,
                        }),
                        (0, a.jsx)(h.IconButton, {
                          variant: "text",
                          className:
                            " h-10 w-10 items-center text-xl scale-[180%] lg:hidden hover:bg-transparent active:bg-transparent focus:bg-transparent",
                          ripple: !1,
                          onClick: () => s(!e),
                          children: e
                            ? (0, a.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                className: "h-6 w-6 relative right-6",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                strokeWidth: 2,
                                children: (0, a.jsx)("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  d: "M6 18L18 6M6 6l12 12",
                                }),
                              })
                            : (0, a.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-6 w-6 relative right-6 ",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: 2,
                                children: (0, a.jsx)("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  d: "M4 6h16M4 12h16M4 18h16",
                                }),
                              }),
                        }),
                      ],
                    }),
                    (0, a.jsx)(h.MobileNav, { open: e, children: t }),
                  ],
                }),
                (0, a.jsx)("section", {
                  className: "bg-black min-h-[550px] mb-10 md:pb-16 ",
                  children: (0, a.jsx)("div", {
                    className:
                      "flex p-4 z-50 lg:max-w-screen-xl px-5 justify-between md:p-12 md:pt-0 lg:p-16 items-center mx-auto relative ",
                    children: (0, a.jsx)("div", {
                      className: "font-molengo py-5 md:py-28 lg:py-20 sm:pb-0",
                      children: (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)(P, {}),
                          (0, a.jsxs)("div", {
                            className:
                              "absolute right-[44%] z-10 sm:right-[35%] 2xl:top-[42%] md:rotate-[-55deg] md:right-[30%] sm:top-[35%] sm:scale-125 top-[85%] lg:scale-[140%] 2xl:scale-[160%] md:py-0",
                            children: [
                              (0, a.jsx)("div", {
                                className: "relative right-[-85%]",
                                children: (0, a.jsxs)(o.tq, {
                                  effect: "cube",
                                  autoplay: {
                                    delay: 4500,
                                    disableOnInteraction: !1,
                                  },
                                  cubeEffect: {
                                    shadow: !0,
                                    slideShadows: !0,
                                    shadowOffset: 20,
                                    shadowScale: 0.94,
                                  },
                                  loop: !0,
                                  modules: [d.VP, d.pt, d.SH, d.xW],
                                  className: "h-36 w-36 md:rotate-[55deg] ",
                                  children: [
                                    (0, a.jsx)(o.o5, {
                                      children: (0, a.jsx)(c(), {
                                        src: "/01.jpg",
                                        fill: !0,
                                        alt: "",
                                        className:
                                          "h-36 w-auto rounded-full object-cover",
                                      }),
                                    }),
                                    (0, a.jsx)(o.o5, {
                                      children: (0, a.jsx)(c(), {
                                        src: "/02.jpg",
                                        fill: !0,
                                        alt: "",
                                        className:
                                          "h-36 rounded-full w-auto object-cover",
                                      }),
                                    }),
                                    (0, a.jsx)(o.o5, {
                                      children: (0, a.jsx)(c(), {
                                        src: "/03.JPG",
                                        fill: !0,
                                        alt: "",
                                        className:
                                          "h-36 rounded-full w-auto object-cover",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "relative h-40 w-40 md:rotate-[55deg] z-20",
                                children: (0, a.jsxs)(o.tq, {
                                  effect: "cube",
                                  autoplay: {
                                    delay: 5500,
                                    disableOnInteraction: !1,
                                  },
                                  cubeEffect: {
                                    shadow: !0,
                                    slideShadows: !0,
                                    shadowOffset: 20,
                                    shadowScale: 0.94,
                                  },
                                  loop: !0,
                                  modules: [d.VP, d.pt, d.SH, d.xW],
                                  className: "h-40 w-40 ",
                                  children: [
                                    (0, a.jsx)(o.o5, {
                                      children: (0, a.jsx)(c(), {
                                        src: "/07.jpeg",
                                        fill: !0,
                                        alt: "",
                                        className:
                                          "h-28 rounded-full object-cover w-auto",
                                      }),
                                    }),
                                    (0, a.jsx)(o.o5, {
                                      children: (0, a.jsx)(c(), {
                                        src: "/06.jpg",
                                        fill: !0,
                                        alt: "",
                                        className:
                                          "h-28 rounded-full object-cover w-auto",
                                      }),
                                    }),
                                    (0, a.jsx)(o.o5, {
                                      children: (0, a.jsx)(c(), {
                                        src: "/08.JPG",
                                        fill: !0,
                                        alt: "",
                                        className:
                                          "h-28 rounded-full object-cover w-auto",
                                      }),
                                    }),
                                    (0, a.jsx)(o.o5, {
                                      children: (0, a.jsx)(c(), {
                                        src: "/09.jpg",
                                        fill: !0,
                                        alt: "",
                                        className:
                                          "h-28 rounded-full object-cover w-auto",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "absolute right-[-90%] bottom-[5%] md:right-[-105%] h-28 w-28",
                                children: (0, a.jsxs)(o.tq, {
                                  effect: "cube",
                                  autoplay: {
                                    delay: 3500,
                                    disableOnInteraction: !1,
                                  },
                                  cubeEffect: {
                                    shadow: !0,
                                    slideShadows: !0,
                                    shadowOffset: 20,
                                    shadowScale: 0.94,
                                  },
                                  loop: !0,
                                  modules: [d.VP, d.pt, d.SH, d.xW],
                                  className: "h-28 w-28 md:rotate-[55deg] ",
                                  children: [
                                    (0, a.jsx)(o.o5, {
                                      children: (0, a.jsx)(c(), {
                                        src: "/04.JPG",
                                        alt: "",
                                        fill: !0,
                                        className:
                                          "h-40 rounded-full w-auto object-cover",
                                      }),
                                    }),
                                    (0, a.jsx)(o.o5, {
                                      children: (0, a.jsx)(c(), {
                                        src: "/05.jpeg",
                                        alt: "",
                                        fill: !0,
                                        className:
                                          "h-40 rounded-full w-auto object-cover",
                                      }),
                                    }),
                                    (0, a.jsx)(o.o5, {
                                      children: (0, a.jsx)(c(), {
                                        src: "/06.jpeg",
                                        fill: !0,
                                        alt: "",
                                        className:
                                          "h-28 rounded-full object-cover w-auto",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "space-y-10",
                  children: [
                    (0, a.jsx)(u, {}),
                    (0, a.jsx)(Y, {}),
                    (0, a.jsx)(j, {}),
                    (0, a.jsx)(Z, {}),
                    (0, a.jsx)(v, {}),
                    (0, a.jsx)(M, {}),
                    (0, a.jsx)(_, {}),
                    (0, a.jsx)(V, {}),
                    (0, a.jsx)(w, {}),
                    (0, a.jsx)(O, {}),
                    (0, a.jsx)(A, {}),
                    (0, a.jsx)(y, {}),
                    (0, a.jsx)(C.Z, {}),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      [
        { img: "Views", num: "10 Million+", text: "Views", class: "" },
        {
          img: "PeopleReached",
          num: "400,000+",
          text: "People Reached",
          class: "",
        },
        {
          img: "WatchTime",
          num: "100,000 Hours+",
          text: "Watch Time",
          class: "watchtime ",
        },
      ].map((e, s) =>
        (0, a.jsxs)(
          "div",
          {
            className: "items-center ".concat(
              e.class,
              " flex flex-col  h-[54]  justify-end"
            ),
            children: [
              (0, a.jsx)(c(), {
                src: "/assets/".concat(e.img, ".png"),
                alt: "",
                width: 300,
                height: 300,
                priority: !0,
                className: "h-36 md:h-52 w-auto object-cover ",
              }),
              (0, a.jsx)("div", {
                className: "font-extrabold text-xl pt-2",
                children: e.num,
              }),
              (0, a.jsx)("div", { children: e.text }),
            ],
          },
          s
        )
      ),
        [
          {
            header: "Youtube and Instagram Content",
            coverImg: "Ellipse 3",
            textLine1:
              "We create content that is a blend of Science & Creativity. Be it full length 10 minute videos or 1 minute reels, our team excels in creating high engagement and fast-paced content that drives growth.",
            textLine2:
              "\n       We create content that is a blend of Science & Creativity. Be it full length 10 minute videos or 1 minute reels, our team excels in creating high engagement and fast-paced content that drives growth.",
            class: "first-div",
            id: "first",
          },
          {
            header: "Youtube and Instagram Content",
            coverImg: "Ellipse 3",
            textLine1:
              "We create content that is a blend of Science & Creativity. Be it full length 10 minute videos or 1 minute reels, our team excels in creating high engagement and fast-paced content that drives growth.",
            textLine2:
              "\n       We create content that is a blend of Science & Creativity. Be it full length 10 minute videos or 1 minute reels, our team excels in creating high engagement and fast-paced content that drives growth.",
            class: "second-div",
            id: "second",
          },
          {
            header: "Youtube and Instagram Content",
            coverImg: "Ellipse 3",
            textLine1:
              "We create content that is a blend of Science & Creativity. Be it full length 10 minute videos or 1 minute reels, our team excels in creating high engagement and fast-paced content that drives growth.",
            textLine2:
              "\n       We create content that is a blend of Science & Creativity. Be it full length 10 minute videos or 1 minute reels, our team excels in creating high engagement and fast-paced content that drives growth.",
            class: "first-div",
            id: "third",
          },
        ].map((e, s) =>
          (0, a.jsxs)(
            "div",
            {
              id: e.id,
              className: "items-center p-2 mb-9 h-[54] lg:w-[90%] lg:mx-auto ",
              children: [
                (0, a.jsx)("h3", {
                  className:
                    "mx-auto md:text-left md:px-16 text-center pt-10 text-3xl mb-10 md:text-4xl font-bold",
                  children: e.header,
                }),
                (0, a.jsxs)("div", {
                  className: "md:flex  ".concat(
                    e.class,
                    " items-center mt-4 sm:px-16 "
                  ),
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "lg:w-1/5 md:w-1/3 mb-4 md:mr-4 px-4 flex items-center justify-center m-auto",
                      children: (0, a.jsx)(c(), {
                        src: "/assets/MainContent/".concat(e.coverImg, ".png"),
                        alt: "",
                        width: 600,
                        height: 600,
                        className:
                          "mb-4 mx-auto rounded-full w-48 md:w-full my-auto",
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "text-center font-extralight px-2 md:text-left tracking-wide md:w-4/5 mx-auto md:text-lg lg:text-xl",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "mb-4",
                          children: [e.textLine1, " "],
                        }),
                        (0, a.jsxs)("div", {
                          className: "mb-4",
                          children: [e.textLine1, " "],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            },
            s
          )
        ),
        [
          {
            img: "ContentCreation",
            textLine1: "Content",
            textLine2: "Creation",
          },
          {
            img: "DataDrivenStrategy",
            textLine1: "Data Driven",
            textLine2: "Content Strategy",
          },
          { img: "NewAge", textLine1: "New Age", textLine2: "Tech Marketing" },
          {
            img: "InstaManagement",
            textLine1: "360* YouTube &",
            textLine2: "Instagram Management",
          },
        ].map((e, s) =>
          (0, a.jsxs)(
            "div",
            {
              className: "service",
              children: [
                (0, a.jsx)("div", {
                  className: "mb-3 ",
                  children: (0, a.jsx)(c(), {
                    src: "/assets/OurServices/".concat(e.img, ".png"),
                    width: 300,
                    height: 300,
                    alt: "",
                    className: " h-32 w-auto",
                  }),
                }),
                (0, a.jsxs)("div", {
                  children: [
                    e.textLine1,
                    " ",
                    (0, a.jsx)("br", {}),
                    " ",
                    e.textLine2,
                  ],
                }),
              ],
            },
            s
          )
        );
    },
  },
  function (e) {
    e.O(0, [434, 13, 617, 396, 169, 774, 888, 179], function () {
      return e((e.s = 5557));
    }),
      (_N_E = e.O());
  },
]);
