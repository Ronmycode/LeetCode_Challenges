// Do this chores in order

// 1. Walk The Dog
// 2. Clean the Kitchen
// 3. Take Out the Trash

/* Callback hell */
// This is how it caould be handled without JS promise:

walkDog(() => {
  cleanKitchen(() => {
    takeOutTrash(() => console.log("you finished all the chores!!"));
  });
});

/* 
#############################
Function declaration
#############################
*/
//Task number 1
function walkDog(callback) {
  setTimeout(() => {
    console.log("You walk the dog");
    console.log("dog before kitchen callback");
    callback();
    console.log("dog after kitchen callback");
  }, 5000);
}

//Task number 2
function cleanKitchen(callback) {
  setTimeout(() => {
    console.log("You clean the Kitchen");
    console.log("dog before trash callback");
    callback();
    console.log("dog after trash callback");
  }, 5000);
}

//Task number 3
function takeOutTrash(callback) {
  setTimeout(() => {
    console.log("You take the trash Out");
    console.log("dog before end callback");
    callback();
    console.log("dog after end callback");
  }, 5000);
}
