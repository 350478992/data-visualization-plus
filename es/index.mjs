import * as o from "./src/index.mjs";
import { Icon as f } from "./src/Icon/index.mjs";
import { ProgressBar as i } from "./src/ProgressBar/index.mjs";
import { SvgAnimation as a } from "./src/SvgAnimation/index.mjs";
import { SvgLogo as g } from "./src/SvgLogo/index.mjs";
import { FlyBox as d } from "./src/FlyBox/index.mjs";
import { Loading as u } from "./src/Loading/index.mjs";
import { Container as B } from "./src/Container/index.mjs";
const e = {
  install: (r) => {
    for (const t in o)
      r.use(o[t]);
  }
};
export {
  B as Container,
  d as FlyBox,
  f as Icon,
  u as Loading,
  i as ProgressBar,
  a as SvgAnimation,
  g as SvgLogo,
  e as default
};
