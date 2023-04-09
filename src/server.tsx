import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { App } from "./html";

const app = new Hono();
const clientFile = Bun.file("./src/client.ts", {
  type: "application/javascript",
});

const transpiler = new Bun.Transpiler({
  loader: "ts",
});

const code = await transpiler.transform(await clientFile.arrayBuffer());

app.get("/", (c) => {
  return c.html(<App />);
});

app.get("/client.ts", (c) =>
  c.text(code, 200, {
    "content-type": "application/javascript",
  })
);

app.get(
  "/static/*",
  serveStatic({
    root: "/src/",
  })
);

const port = 3001;
console.log(`Running at http://localhost:${port}`);

export default {
  port,
  fetch: app.fetch,
};
