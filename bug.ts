function add(a: number, b: number): number {
  return a + b;
}

let result = add("hello", 2); // Type Error, but not caught by TypeScript
console.log(result);