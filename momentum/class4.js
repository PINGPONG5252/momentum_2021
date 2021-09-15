/** 
const age = 96;
function calculatorKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}
const krAge = calculatorKrAge(age);

console.log(krAge);
*/

const calculator = {
  plus: function (a, b) {
    console.log("hello");
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  kakeru: function (a, b) {
    return a * b;
  },
  waru: function (a, b) {
    return a / b;
  },

  shou: function (a, b) {
    return a ** b;
  },
};

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const kakeruResult = calculator.kakeru(10, minusResult);
const waruResult = calculator.waru(kakeruResult, plusResult);
const shouResult = calculator.shou(waruResult, minusResult);

console.log(plusResult);
console.log(minusResult);
console.log(kakeruResult);
console.log(waruResult);
console.log(shouResult);
/** 
console.log(calculator.plus(2, 3));
console.log(calculator.minus(2, 3));
console.log(calculator.kakeru(2, 3));
console.log(calculator.waru(2, 3));
console.log(calculator.shou(2, 3));
*/
