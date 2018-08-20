"use strict";


 prompt("hello, are you new here?")
//-----loop practice-------

// var limit = 65536;
// /* part of my condition */
// var powersOfTwo = 2; // accumulator

// while (powersOfTwo <= limit) {
//     console.log(powersOfTwo);
//     // powersOfTwo = powersOfTwo * 2;
//     powersOfTwo *= 2;
// }

// var allCones = Math.floor(Math.random() * 50) + 50;
// var cones;
// console.log(allCones)
// do {
//     cones = Math.floor(Math.random() * 5) + 1;
//     if (cones > allCones) {
//         console.log("I can't sell you " + cones + " cones I only have " + allCones);
//         continue;
//     }
//     allCones -= cones; // allCones = allCones - cones;
//     console.log(cones + " cones sold of " + allCones);
// } while (allCones > 0);
// console.log("Sold them all! Time to go home.");




// console.log("example for loop 1")
// var i;
// var number = prompt("Enter a number between 1 and 10");

// for (i = 1; i <= 10; i++) {
//     console.log(number + "x" + i + "=" + number * i );
// }

// console.log("example for loop 2")

// for (i = 1; i <= 10; i++) {
//     var number = Math.floor(Math.random() * 180) + 20;
//     if (number % 2 === 0) {
//         console.log(number + " is even");
//     } else {
//         console.log(number + " is odd");
//     }
// }


// console.log ("example for loop 3")
// for (i = 1; i <= 10; i++) {
//     console.log((i % 10).toString().repeat(i));
// }


// console.log("example for loop 4")
// var j, repeated;
// for (i = 1; i <= 10; i++) {
//     repeated = "";
//     for (j = 1; j <= i; j++) {
//         repeated += i % 10;
//     }
//     console.log(repeated);
// }



// for (var i=1; i < 101; i++){
//     if (i % 15 == 0) console.log("FizzBuzz");
//     else if (i % 3 == 0) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else console.log(i);
// }


//-----array iterating practice------


// var names = ["terrell", "karli", "linda", "ash"]
// console.log(names)

// console.log("There are " + names.length + " names in the array");

// console.log('The first name is: ' + names[0]);
// console.log('The second name is: ' + names[1]);
// console.log('The third shape is: ' + names[2]);
// console.log('The fourth shape is: ' + names[3]);
// console.log('The fifth name is: ' + names[4] + " because there isnt a name there!");

// for (var i =0; i < names.length; i++) {
// console.log(names[i]);
// }

// console.log("-----------------")
// function thank(names){
//   console.log("thanks to " + names);
// }
// names.forEach(thank);
// console.log("-----------------")

// names.forEach(function(names) {
//               console.log("thanks " + names);
//               })

// console.log("---------------")

// function first(input) {
// if(Array.isArray(input)) {
//   return input[0]
// }
// }

// function second(input) {
// if(Array.isArray(input)) {
//   return input[1]
// }
// }

// function last(input) {
// if(Array.isArray(input)) {
//   return input[input.length-1]
// }
// }

// function secondToLast(input) {
// if(Array.isArray(input)) {
//   return input[input.length-2]
// }
// }

// var stuff = ["thing 1", "thing2", "thing3", "thing4"]

// console.log(first(stuff))
// console.log(second(stuff))
// console.log(last(stuff))
// console.log(secondToLast(stuff))

// console.log("----------------------------")

//---------manipulation practice-------
// var bugs = ["roach", "dragonfly", "spider", "other thing", "ladybug", "wasp"]
// console.log(bugs)
// bugs.push("ant") //adds to array to back
// console.log(bugs)
// bugs.pop() //deletes from end of array
// console.log(bugs)
// bugs.shift()  //deletes from front of array
// console.log(bugs)
// bugs.unshift() //add item to front
// console.log(bugs)
// bugs.push(bugs.shift())
// console.log(bugs)
// bugs.unshift(bugs.pop())
// console.log(bugs)

// console.log(bugs.indexOf("spider")) // shows you the index of an item in the array
// console.log(bugs.reverse()) // reverse the array
// console.log(bugs.sort()) // sort array

// console.log(bugs.indexOf("wasp"))
// console.log(bugs.slice(4,5)) //slice takes an item our of array
// console.log(bugs)

// bugs.push("ant", "china","seafood")
// console.log(bugs)
// bugs.splice(bugs.indexOf("china"), 1)
// console.log(bugs)



// var namesString = "Joe,Bob,Sally";

// console.log(namesString);
// // Joe,Bob,Sally

// var namesArray = namesString.split(',');

// console.log(namesArray);

// var namesArray = ['Joe', 'Bob', 'Sally'];

// console.log(namesArray);
// // ['Joe', 'Bob', 'Sally']

// var namesString = namesArray.join(',');

// console.log(namesString);
// // Joe,Bob,Sally

//------------------------ manipulation exersise---------------------

//     var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
//     var planetsArray;

//     planetsArray = planetsString.split("|");

//     console.log(planetsArray);

//     //       Why might this be useful?

//     var resHtml = planetsArray.join("<br>");
//     console.log(resHtml);

//     // Bonus: Create a second string that would display your planets in an undordered list.
//     //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
//     //        console.log() your results.

//     var listHTML = "<ul><li>";
//     listHTML += planetsArray.join("</li><li>");
//     listHTML += "</li></ul>";

//     console.log(listHTML);

//     document.body.innerHTML = listHTML;

// //------------------------------------------------------------------

//     var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

//     // function for logging the planets array
//     function logPlanets() {
//         console.log("Here is the list of planets:");
//         console.log(planets);
//         console.log("---- ---- ---- ----");
//     }

//     logPlanets();

//     console.log('Adding "The Sun" to the beginning of the planets array.');
//     planets.unshift("sun");
//     logPlanets();

//     console.log('Adding "Pluto" to the end of the planets array.');
//     planets.push("pluto");
//     logPlanets();

//     console.log('Removing "The Sun" from the beginning of the planets array.');
//     planets.shift();
//     logPlanets();

//     console.log('Removing "Pluto" from the end of the planets array.');
//     planets.pop();
//     logPlanets();

//     console.log('Finding and logging the index of "Earth" in the planets array.');
//     console.log(planets.indexOf("earth"));

//     console.log('Using splice to remove the planet after "Earth".');
//     planets.splice(planets.indexOf("earth") + 1, 1);
//     logPlanets();

//     console.log('Using splice to add back the planet after "Earth".');
//     planets.splice(planets.indexOf("earth") + 1, 0, "mars");
//     logPlanets();

//     console.log("Reversing the order of the planets array.");
//     planets.reverse();
//     logPlanets();

//     console.log("Sorting the planets array.");
//     planets.sort();
//     logPlanets();


//--------------OOP practice---------------------

//  var person = {};  // literal object representation

//     person.firstName = "Terrell";
//     person.lastName = "Stewart";
//     person.middleName = "Wade";

//     person.sayHello = function() {
//         return "Hello from " + this.firstName + " " + this.middleName + " " + this.lastName + "!";
//     }; // literal function representation

//     console.log(person.sayHello());

//     var shoppers = [
//         {name: 'Jim', amount: 180},
//         {name: 'Paul', amount: 250},
//         {name: 'Geoff', amount: 320}
//     ];

//     // 3. loop
//     // for loop
//     // foreach function
//     for (var i = 0; i < shoppers.length; i++) {
//         var shopper = shoppers[i]; // current shopper
//         console.log(buildReceipt(shopper));
//     }

//     shoppers.forEach(function (shopper) {
//         console.log(buildReceipt(shopper));
//     });


//     function buildReceipt(shopper) {
//         var discount = 0;
//         var totalAfterDiscount = shopper.amount;
//         // 2. Conditionals
//         if (shopper.amount > 200) {
//             discount = .1;
//             totalAfterDiscount = shopper.amount - shopper.amount * discount;
//         }
//         return shopper.name
//             + " has to pay $" + shopper.amount
//             + ", it has a discount of $" + discount
//             + ", the total to pay after the discount is $" + totalAfterDiscount
//         ;
//     }
//------------------------------------------------------------------
//     var books = [
//         {
//             title: "Breathing in the sun",
//             author: {firstName: "Jonathan", lastName: "Jostar"}
//         },
//         {
//             title: "Bad english and how to use it",
//             author: {firstName: "Joseph", lastName: "Jostar"}
//         },
//         {
//             title: " How to be a moody teen",
//             author: {firstName: "Jotaro", lastName:  "Kujo"}
//         },
//         {
//             title: "Healing thru fistfights",
//             author: {firstName: "Joske", lastName: "Hishgatake"}
//         },
//         {
//             title: "Life inside a turtle",
//             author: { firstName: "Gierno", lastName: "Giovane"}
//         }
//     ];

//     console.log(books);

//     books.forEach(function (book, i) {
//         console.log("Book #" + (i + 1));
//         console.log("Title: " + book.title);
//         console.log("Author: " + book.author.firstName + " " + book.author.lastName);
//         console.log("---");
//     });




//    var circle = {
//         radius: 3,

//         getArea: function () {
//             var area = Math.PI * Math.pow(this.radius, 2);
//             return area;
//         },


//         logInfo: function (rounding) {
//             var area;
//             if (rounding) { // consequence
//                 area = Math.round(this.getArea());
//             } else { // alternative
//                 area = this.getArea();
//             }

//             console.log(
//                 "Area of a circle with radius: " + this.radius +
//                 ", is: " + area
//             );
//         }
//     };

//     console.log(" circle 3 info");
//     circle.logInfo(false);
//     console.log("circle info rounded ");
//     circle.logInfo(true);




//     circle.radius = 5;


//     console.log("circle 5 info");
//     circle.logInfo(false);
//     console.log("circle info rounded ");
//     circle.logInfo(true);


