import { defineComponent as p, ref as e, computed as m, onMounted as y, openBlock as h, createElementBlock as _, createElementVNode as t, renderSlot as $ } from "vue";
import "./style/index.css";
import { v4 as k } from "uuid";
const g = ["width", "height"], x = ["id", "d"], B = ["id"], C = /* @__PURE__ */ t("stop", {
  offset: "0%",
  "stop-color": "#fff",
  "stop-opacity": "1"
}, null, -1), w = /* @__PURE__ */ t("stop", {
  offset: "100%",
  "stop-color": "#fff",
  "stop-opacity": "0"
}, null, -1), L = [
  C,
  w
], S = ["id"], b = ["r", "fill"], N = ["dur", "path"], I = ["href", "stroke"], M = ["href", "stroke", "mask"], E = { class: "fly-box-content" }, G = p({ name: "FlyBox" }), W = /* @__PURE__ */ p({
  ...G,
  props: {
    lineColor: {
      type: String,
      default: "#235fa7"
    },
    starColor: {
      type: String,
      default: "#4fd2dd"
    },
    starLength: {
      type: [String, Number],
      default: 50
    },
    duration: {
      type: [String, Number],
      default: 3
    }
  },
  setup(o) {
    const a = k(), l = e(0), s = e(0), r = e(), i = "flyBox", d = e(`${i}-path-${a}`), u = e(`${i}-gradient-${a}`), c = e(`${i}-mask-${a}`), f = m(() => `M5 5 L${l.value - 5} 5 L${l.value - 5} ${s.value - 5} L5 ${s.value} Z`), v = () => {
      const n = r.value;
      l.value = n.clientWidth, s.value = n.clientHeight;
    };
    return y(() => {
      v();
    }), (n, R) => (h(), _("div", {
      class: "fly-box",
      ref_key: "flyBoxRef",
      ref: r
    }, [
      (h(), _("svg", {
        width: l.value,
        height: s.value
      }, [
        t("defs", null, [
          t("path", {
            id: d.value,
            d: f.value,
            fill: "none"
          }, null, 8, x),
          t("radialGradient", {
            id: u.value,
            cx: "50%",
            cy: "50%",
            fx: "100%",
            fy: "50%",
            r: "50%"
          }, L, 8, B),
          t("mask", { id: c.value }, [
            t("circle", {
              r: o.starLength,
              cx: "0",
              cy: "0",
              fill: `url(#${u.value})`
            }, [
              t("animateMotion", {
                dur: `${o.duration}s`,
                path: f.value,
                rotate: "auto",
                repeatCount: "indefinite"
              }, null, 8, N)
            ], 8, b)
          ], 8, S)
        ]),
        t("use", {
          href: `#${d.value}`,
          "stroke-width": "1",
          stroke: o.lineColor
        }, null, 8, I),
        t("use", {
          href: `#${d.value}`,
          "stroke-width": "3",
          stroke: o.starColor,
          mask: `url(#${c.value})`
        }, null, 8, M)
      ], 8, g)),
      t("div", E, [
        $(n.$slots, "default")
      ])
    ], 512));
  }
});
export {
  W as default
};
