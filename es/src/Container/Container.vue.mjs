import { defineComponent as p, ref as o, onMounted as _, onUnmounted as $, openBlock as x, createElementBlock as S, renderSlot as k, createCommentVNode as z, nextTick as H } from "vue";
import { debounce as W } from "../utils/index.mjs";
const b = p({ name: "Container" }), E = /* @__PURE__ */ p({
  ...b,
  props: {
    options: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(f) {
    const c = f, i = o(), t = o(0), n = o(0), a = o(0), l = o(0), r = o(!1), d = () => new Promise((e) => {
      H(() => {
        var s, u;
        (s = c.options) != null && s.width && ((u = c.options) != null && u.height) ? (t.value = c.options.width, n.value = c.options.height) : (t.value = i.value.clientWidth, n.value = i.value.clientHeight), !a.value && !l.value && (a.value = window.screen.width, l.value = window.screen.height), console.log(t.value, n.value, a.value, l.value), e(!0);
      });
    }), m = () => {
      const e = i.value;
      t.value && n.value ? (e.style.width = `${t.value}px`, e.style.height = `${n.value}px`) : (e.style.width = `${a.value}px`, e.style.height = `${l.value}px`);
    }, v = () => {
      const e = document.body.clientWidth, s = document.body.clientHeight, u = t.value || a.value, w = n.value || l.value, g = e / u, y = s / w;
      i.value.style.transform = `scale(${g}, ${y})`;
    }, h = () => {
      W(1e3, async function() {
        console.log("onResize..."), await d(), v();
      })();
    };
    return _(async () => {
      r.value = !1, await d(), m(), v(), window.addEventListener("resize", h), r.value = !0;
    }), $(() => {
      window.removeEventListener("remove", h);
    }), (e, s) => (x(), S("div", {
      id: "container",
      ref_key: "containerRef",
      ref: i
    }, [
      r.value ? k(e.$slots, "default", { key: 0 }) : z("", !0)
    ], 512));
  }
});
export {
  E as default
};
