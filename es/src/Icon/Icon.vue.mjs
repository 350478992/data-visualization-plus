import { defineComponent as c, computed as r, openBlock as n, createElementBlock as o, normalizeStyle as a, createElementVNode as l } from "vue";
import "./style/index.css";
const i = { class: "icon" }, p = ["href"], m = c({ name: "Icon" }), h = /* @__PURE__ */ c({
  ...m,
  props: {
    name: String,
    prefix: {
      type: String,
      default: "icon"
      // iconfont 设置的prefix
    },
    style: Object
  },
  setup(e) {
    const t = e, s = r(() => `#${t.prefix}${t.name}`);
    return (f, u) => (n(), o("div", {
      class: "icon-wrapper",
      style: a({ ...e.style })
    }, [
      (n(), o("svg", i, [
        l("use", { href: s.value }, null, 8, p)
      ]))
    ], 4));
  }
});
export {
  h as default
};
