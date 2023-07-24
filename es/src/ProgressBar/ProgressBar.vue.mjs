import { defineComponent as t, openBlock as o, createElementBlock as r, createElementVNode as e } from "vue";
import "./style/index.css";
const c = { class: "container" }, s = /* @__PURE__ */ e("svg", {
  width: "50",
  height: "50",
  viewBox: "0 0 400 400 "
}, [
  /* @__PURE__ */ e("circle", {
    cx: "100",
    cy: "100",
    r: "80",
    "stroke-width": "30",
    stroke: "#d1d3d7",
    fill: "none"
  }),
  /* @__PURE__ */ e("circle", {
    cx: "100",
    cy: "100",
    r: "80",
    "stroke-width": "30",
    stroke: "#00a5e0",
    fill: "none",
    transform: "matrix(0,-1,1,0,0,200)",
    class: "circle"
  })
], -1), n = [
  s
], i = t({ name: "ProgressBar" }), h = /* @__PURE__ */ t({
  ...i,
  setup(_) {
    return (a, l) => (o(), r("div", c, n));
  }
});
export {
  h as default
};
