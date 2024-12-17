function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: Arguments must be numbers.');
  }
  return a + b;
}

let result1 = addSafe(1, 2); // Correct usage
console.log(result1); // Output: 3

try {
  let result2 = addSafe("hello", 2); // Type Error, now caught at runtime
  console.log(result2);
} catch (error) {
  console.error(error.message); // Output: Invalid input: Arguments must be numbers.
}

//Adding type guards
function isNumber(x: any): x is number {
    return typeof x === 'number';
}

function addWithGuard(a: any, b: any): number {
    if(!isNumber(a) || !isNumber(b)){
        throw new Error("Invalid Input: Arguments must be numbers");
    }
    return a+b;
}

let result3 = addWithGuard(1,2); // Correct usage
console.log(result3); //Output: 3

try {
    let result4 = addWithGuard("hello",2); //Type Error, now caught at runtime
    console.log(result4);
} catch(error){
    console.error(error.message); //Output: Invalid Input: Arguments must be numbers
}
