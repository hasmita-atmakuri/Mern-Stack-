const userExample={
  name: "Hasmita",
  greetDelayed: function(){
    setTimeout(()=>{
      console.log(`Hello, ${this.name}!`);
    }, 1000);
  }
};

/*const userExample={
  name: "Hasmita",
  greet: function(){
    setTimeout(function(){
      console.log(`Hello, ${this.name}!`);
    }, 1000);
  }
};*/

/*
const userCorrectedArrow = {
  name: "Bob",
  greetDelayed: function() {
  setTimeout(() => {
  console.log(`Hello, ${this.name}!`);
  
  }, 1000);
  }
  };
  userCorrectedArrow.greetDelayed();

  
  const userCorrectedTraditional = {
    name: "Alice",
    greetDelayed: function() {
    const self = this; // Store a reference to &#39;this&#39;
    setTimeout(function() {
    console.log(`Hello, ${self.name}!`);
    }, 1000);
    }
    };
  userCorrectedTraditional.greetDelayed();
  */ 