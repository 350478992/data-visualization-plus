import { defineComponent as a, computed as i, openBlock as n, createElementBlock as r, createElementVNode as e, renderSlot as l } from "vue";
const c = { class: "loading" }, m = ["width", "height"], h = ["stroke"], f = ["dur"], S = ["values", "dur"], C = ["stroke"], k = ["dur"], g = ["values", "dur"], v = { class: "loading-content" }, y = a({ name: "Loading" }), p = /* @__PURE__ */ a({
  ...y,
  props: {
    width: {
      type: [Number, String],
      default: 50
    },
    height: {
      type: [Number, String],
      default: 50
    },
    outSideColor: {
      type: [String],
      default: "#3de6cb"
    },
    inSideColor: {
      type: [String],
      default: "#02bcfe"
    },
    duration: {
      type: [Number, String],
      default: 2
    }
  },
  setup(t) {
    const o = t, d = i(() => `
      ${o.outSideColor};${o.inSideColor};${o.outSideColor};
    `), s = i(() => `
      ${o.inSideColor};${o.outSideColor};${o.inSideColor};
    `);
    return (u, $) => (n(), r("div", c, [
      (n(), r("svg", {
        width: t.width,
        height: t.height,
        viewBox: "0 0 50 50",
        preserveAspectRatio: "xMidYMid meet"
      }, [
        e("circle", {
          cx: "25",
          cy: "25",
          r: "22",
          fill: "none",
          "stroke-width": "3",
          stroke: t.outSideColor,
          "stroke-dasharray": "34",
          "stroke-linecap": "round"
        }, [
          e("animateTransform", {
            attributeName: "transform",
            type: "rotate",
            values: "0 25 25;360 25 25",
            dur: `${+t.duration}s`,
            repeatCount: "indefinite"
          }, null, 8, f),
          e("animate", {
            attributeName: "stroke",
            values: s.value,
            dur: `${+t.duration * 2}s`,
            repeatCount: "indefinite"
          }, null, 8, S)
        ], 8, h),
        e("circle", {
          cx: "25",
          cy: "25",
          r: "12",
          fill: "none",
          "stroke-width": "3",
          stroke: t.inSideColor,
          "stroke-dasharray": "19",
          "stroke-linecap": "round"
        }, [
          e("animateTransform", {
            attributeName: "transform",
            type: "rotate",
            from: "360 25 25",
            to: "0 25 25",
            dur: `${+t.duration}s`,
            repeatCount: "indefinite"
          }, null, 8, k),
          e("animate", {
            attributeName: "stroke",
            values: d.value,
            dur: `${+t.duration * 2}s`,
            repeatCount: "indefinite"
          }, null, 8, g)
        ], 8, C)
      ], 8, m)),
      e("div", v, [
        l(u.$slots, "default")
      ])
    ]));
  }
});
export {
  p as default
};
