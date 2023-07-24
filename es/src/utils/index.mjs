function u(e, n) {
  let t;
  return function() {
    clearTimeout(t), t = setTimeout(() => {
      n.apply(this, arguments);
    }, e);
  };
}
export {
  u as debounce
};
