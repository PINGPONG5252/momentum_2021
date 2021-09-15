/** 
 const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
 
 // Get Item from Array//
 console.log(daysOfWeek);
 
 //Add one more day to the array//
 daysOfWeek.push("sun");
 
 console.log(daysOfWeek);
 **/

const player = {
  name: "JOJO",
  points: 10,
  fat: true,
};

console.log(player);

player.fat = false;
console.log(player);

player.lastName = "potato";
player.points = player.points + 15;
console.log(player);

player.points = player.points + 10;
console.log(player);
