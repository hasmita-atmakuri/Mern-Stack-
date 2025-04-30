//question 3

function sumAll(...restParameter){
  let sum = 0;
  for (let i = 0; i < restParameter.length; i++) {
    sum += restParameter[i];
  }
  return sum;
}
console.log(sumAll(1, 2, 3, 4, 5)); 

//question 4

function processArguments(functionName, ...args) {
  return functionName(...args);
}
function divide(a,b){
  return (b!==0)? a/b: "undefined";
}

console.log(processArguments(divide, 10, 2)); 
console.log(processArguments(divide, 10, 0));