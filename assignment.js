// Problem-01:Convert feet to mile .
function feetToMile(feet) {
    if (feet < 0) {
        return "Invalid! feet cannot be a negative number.";
    } 
    else {
        var mile = feet / 5280; //formula for convert feet to mile
        var resultMile = mile.toFixed(4); // Displaying 4 decimal places
        return `${feet} feet = ${resultMile} mile`;
    }
}
console.log(feetToMile(100));

//Problem-02: woodCalculator --How many wood required to make chair, table and bed.
function woodCalculator(chair, table, bed) {
    var totalWoodAmount = 0;
    if (chair < 0 || table < 0 || bed < 0) {
        return "This is a negative value.Please Enter Positive Values.";
    } 
    else{
        var totalWoodAmount = (chair*1) + (table*3) + (bed*5);
        return totalWoodAmount;
    }
  }
  var woodAmount = woodCalculator(12,2,6);
  console.log(`Amount of wood required is =  ${woodAmount} cubic feet`);

  //Problem-03: brickCalculator -- How many bricks needed for a building.
  function brickCalculator(floorNumber) {
    const bricksPerFeet = 1000;
    var floorHeight = 0;
    if (floorNumber < 0) {
      return "you entered a negative value for floor number. Please enter a positive number"
    } 
    else if (floorNumber <= 10) {
      floorHeight = 15 * floorNumber;
    } 
    else if (floorNumber > 10 && floorNumber <= 20) {
      floorHeight = 12 * (floorNumber - 10) + 15 * 10;
    } 
    else {
      floorHeight = 10 * (floorNumber - 20) + 15 * 10 + 12 * 10;
    }
    return bricksPerFeet * floorHeight;
  }
  
  var amountOfBrick = brickCalculator(20);
  console.log(`Total ${amountOfBrick} bricks needed for your building.`);

  //Problem-04: Tiny Friend --Finding tiny friend name from an array.
 function tinyFriends(friends) {
    if (friends.length == 0) {
        return `You cannot enter an empty array.If you want to compare  atleast you need to enter 2 names.`;
    } 
    else {
        var  tinyFriendsName = friends[0];
        for (var i = 0; i < friends.length; i++) {
            if (friends[i].length <  tinyFriendsName.length) {
                tinyFriendsName = friends[i];
            }
        }
        return  tinyFriendsName;
    }
 }
 var friendsName = tinyFriends(['Jannatul','Samia','Era','Sadia']);
 console.log(`Your most tiny friends name is = ${friendsName}`);

 // Ending the assignment...