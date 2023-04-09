/** Exported memory */
export declare const memory: WebAssembly.Memory;
/**
 * assembly/index/add
 * @param a `i32`
 * @param b `i32`
 * @returns `i32`
 */
export declare function add(a: number, b: number): number;
/**
 * assembly/index/measure
 * @param a `i32`
 * @param b `i32`
 * @returns `~lib/array/Array<i64>`
 */
export declare function measure(a: number, b: number): Array<bigint>;
