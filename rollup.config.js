import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";
import resolve from "rollup-plugin-node-resolve";
import svelte from "rollup-plugin-svelte";

export default ["es", "umd"].map((format) => {
  const UMD = format === "umd";

  const output = {
    format,
    file: UMD ? pkg.main : pkg.module,
    name: UMD ? "TemplateSvelte" : undefined,
  };

  return {
    input: "src",
    output,
    external: Object.keys(pkg.dependencies || {}),
    plugins: [svelte(), resolve(), UMD && terser()],
  };
});
