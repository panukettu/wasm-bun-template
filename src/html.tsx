import { html } from "hono/html";
import "./style.css";

export const App = () => {
  return (
    <Layout title="WebAssembly">
      <body>
        <h3>
          .wasm: <span id="status">loading wasm..</span>
        </h3>
        <span id="exports"></span>
        <br />
        <br />
        <div>
          add
          <input type="text" size="5" id="num0" />
          +
          <input type="text" size="5" id="num1" />
          <button onClick={"runTS(val0,val1)"}>run</button>
        </div>

        <b>out: </b>
        <span id="output"></span>
      </body>
    </Layout>
  );
};
interface SiteData {
  title: string;
  children?: any;
}

const Layout = (props: SiteData) => html`<!DOCTYPE html>
  <html>
    <head>
      <title>${props.title}</title>
    </head>
    <body>
      ${props.children}
    </body>
    <script type="module" src="./client.ts"></script>
  </html>`;
