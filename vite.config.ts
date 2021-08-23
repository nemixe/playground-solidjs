import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import WindiCSS from "vite-plugin-windicss";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [solidPlugin(), tsconfigPaths(), WindiCSS()],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
