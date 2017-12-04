console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  //console.log('hey');
  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  
  // create a section tag
  var middleEarth = document.createElement('section'); 
  console.log(middleEarth);
 
  //with an id of middle-earth
  middleEarth.setAttribute('id', 'middle-earth'); 
  console.log(middleEarth);
   
   //iterate through the lands array
    for (var i = 0; i < lands.length; i++) {
      
      // inside, add each land as an article tag
      var newLand = document.createElement('article'); 
      
      // inside each article tag include an h1
      var newHeading = document.createElement('h1');

      //with the name of the land
      newHeading.innerHTML = lands[i];

      // append middle-earth to your document body
      newLand.appendChild(newHeading);//appending the h1
      middleEarth.appendChild(newLand);//appending the article
    }
      //console.log(middleEarth);
    
    body.appendChild(middleEarth);//append middle-earth to your document body

}

makeMiddleEarth();



// Part 2
   function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit  
  
  //Create an unordered list
  var unorderedList = document.createElement('ul');

  //in the shire
  var shire = document.querySelector('article');

  //pull the items for list 
  for (var i = 0; i < hobbits.length; i++) {

    //create the individual li's
    var listItem = document.createElement('li');

    //give each li (hobbit) a class = 'hobbit'
    listItem.setAttribute('class', 'hobbit');
    

    //add each hobbit into the li's by looping through the array
    listItem.innerHTML = hobbits[i];
    console.log(listItem);

    // unorderedList.appendChild(shire);

    // shire.appendChild(unorderedList);
}
//     
    // body.appendChild(shire);

}

makeHobbits();



// Part 3

function keepItSecretKeepItSafe() {
  // create a div //with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  

  //create a div
  var ring = document.createElement('div');
  console.log(ring);
  
  //with an id of 'the-ring'
  ring.setAttribute('id', 'the-ring');

  //// give the div a class of 'magic-imbued-jewelry'
  ring.setAttribute('class', 'magic-imbued-jewelry');

  //add an event listener on the ring
  ring.addEventListener('click', function() {
    document.getElementById("nazgul-screech").play();
  }); 
}

keepItSecretKeepItSafe();


// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  
  //create an aside tag
  var buddies = document.createElement('aside');
}


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
}


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
