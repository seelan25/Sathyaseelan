import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

function serveSourceOutsideRoot() {
  const entryPath = path.resolve(projectRoot, "src/main.jsx").replaceAll("\\", "/");

  return {
    name: "serve-source-outside-root",
    transformIndexHtml: {
      order: "pre",
      handler(html, ctx) {
        if (!ctx.server) return html;
        return html.replace(
          'src="../src/main.jsx"',
          `src="/@fs/${entryPath}"`
        );
      },
    },
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const url = req.url ?? "";
        const pathname = url.split("?")[0];
        if (!pathname.startsWith("/src/")) {
          next();
          return;
        }

        const filePath = path.join(projectRoot, pathname).replaceAll("\\", "/");
        const search = url.includes("?") ? `?${url.split("?").slice(1).join("?")}` : "";
        req.url = `/@fs/${filePath}${search}`;
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [serveSourceOutsideRoot(), react()],
  root: path.resolve(projectRoot, "public"),
  publicDir: false,
  build: {
    outDir: path.resolve(projectRoot, "dist"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      allow: [projectRoot],
    },
  },
});
