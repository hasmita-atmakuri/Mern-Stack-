//question 2 

function createGreeting(greeting) {
    return function(name) {
        return `${greeting}, ${name}!`;
    };
}
const greetHello = createGreeting("Hello");
console.log(greetHello("Hasmita"))

//question 3

function createSecretHolder(secret){
  return{
    getSecret: function() {
      return secret;
    },
    setSecret: function(newSecret) {
      secret = newSecret;
    }
  };
}

//question 4

const secretHolder = createSecretHolder(85);
console.log(secretHolder.getSecret()); 
secretHolder.setSecret(100);
console.log(secretHolder.getSecret());

  /*
  function setupCounter(initialValue) {
    let count = initialValue;
    function increment() {
    count++;
    return count;
    }
    function decrement() {
    count--;
    return count;
    }
    return {
    increment: increment,
    decrement: decrement
    };
  }
  const counterOne = setupCounter(5);
  console.log(counterOne.increment());
  console.log(counterOne.increment());
  const counterTwo = setupCounter(10);
  console.log(counterTwo.decrement());
  
  console.log(counterOne.decrement());
  */ 