// The entry file of your WebAssembly module.
export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function measure(a: i32, b: i32): i64[] {
  const now = Date.now();
  const result = add(a, 1000);
  const ms = Date.now() - now;
  return [result, ms];
}
