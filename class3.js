/**  function sayHello() {
  console.log("Hello! my name is C");
}

sayHello("Bemo");
sayHello("fin");
sayHello("jake")
**/
/** 
function sayHello(nameOfPerson, age) {
  console.log(
    "hello my name is " + nameOfPerson + " and I'm " + age + " years old"
  );
}

sayHello("Bemo", 10);
sayHello("fin", 10);
sayHello("jake", 21);
*/
/** 
function plus(a, b) {
  console.log(a + b);
  console.log(a * b);
}
function divide(a, b) {
  console.log(a / b);
}

plus(8, 60);
divide(2, 10);
*/

const player = {
  name: "JOJO",
  sayHello: function (otherPersonName) {
    console.log("hello! " + otherPersonName + " Nice to meet you");
  },
};

console.log(player.name);
player.sayHello("JOSTAR");
player.sayHello("KUJO");
