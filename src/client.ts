import * as wasm from "./static/debug.js";

declare module window {
  let run: typeof wasm;
  let runTS: any;
  let val0: number;
  let val1: number;
}
const elements = {
  output: document.getElementById("output")!,
  status: document.getElementById("status")!,
  input0: document.getElementById("num0")!,
  input1: document.getElementById("num1")!,
};

elements.status.innerHTML = "✅";
elements.output.innerHTML = "-";
export async function runTS(val0: number, val1: number) {
  console.info("running");

  const [result, ms] = wasm.measure(val0, val1);
  console.info(`${result} - ms: ${ms}`);
  elements.output.innerHTML = result.toString();
}

window.run = wasm;
window.runTS = runTS;

console.log("client injected");

elements.input0.addEventListener<"input">("input", (e) => {
  // @ts-expect-error
  window.val0 = +e.target!.value;
});

elements.input1.addEventListener("input", (e) => {
  // @ts-expect-error
  window.val1 = +e.target!.value;
});
