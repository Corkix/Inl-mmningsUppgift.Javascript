/*
Uppgift 1: 
Använd variabeln blue för att "toggla" bakrgrundsfärgen mellan blå och vit
för diven med id answer-one när man klickar på knappen
*/

let Blue = false;

//When you press this btn
function taskOne() {
  //Call on "anwser-one"
  const answerOne = document.getElementById("answer-one");

  //if "Blue" is false, set background color to blue and set "Blue" to true
  if (Blue === false) {
    answerOne.style.backgroundColor = "blue";
    Blue = true;
  }

  //Otherwise, set background color to white and set blue to false
  else {
    answerOne.style.backgroundColor = "white";
    Blue = false;
  }
}

/*
Uppgift 2: 
Varje gång man klickar på knappen ska ett nytt random-värde 
läggas till i numbers-arrayen, innan arrayen renderas ut i diven med id answer-two
*/

//An Array with diffrent nummbers that we call "numbers"
const numbers = [234, 986, 784];

//when you press the btn
function taskTwo() {
  /*Call on the div namned "answer-two and asign it to "answerTwo 
  Generate a random number between 0 and 1 and multiply it by 100 and assign the result to "random"
  Round out the number generated and assing the result to "roundIt"
  push "roundIt" to the Array namned "numbers" 
  and display it
  */
  const answerTwo = document.getElementById("answer-two");
  const random = Math.random() * 100;
  const roundIt = Math.round(random);
  numbers.push(roundIt);
  answerTwo.innerHTML = numbers;
}

/*
Uppgift 3: 
Identifiera vilken dag i veckan det är, ifall det är helg (lördag eller söndag) 
ska du trigga en alert med meddelandet "Woohooo it's weekend" annars om det 
inte är helg ska du trigga en alert med meddelandet "FML"
*/

//When you press the btn
function taskThree() {
  /*Pull the current date and call it "date"
   Pull the current day and call it "day*/
  const date = new Date();
  const day = date.getDay();

  // if the value of the current day matches 6 OR 0, Alert this string
  if (day === 6 || day === 0) {
    alert("Whooho");
  }

  // Otherwise, Alert this string
  else {
    alert("FML");
  }
}

/*
Uppgift 4: 
Anropa funktionen multiplier och förse den med två argument (värden), multiplier ska sedan 
undersöka om dessa värden är nummer, om så är fallet ska värdena multipliceras och resultatet 
ska sedan visas i en alert-box utefter följande: Produkten är: [RESULTATET], annars om ett av 
eller båda värdena inte är ett nummer ska en alertbox med meddelandet "Jag kan bara multiplicera numer" triggas
*/

/*We have a function with 2 values*/
function multiplier(valueOne, valueTwo) {
  valueOne = 5;
  valueTwo = 5;

  //if valueOne and/or valueTwo are NOT strings then multiply and set the result to the const "resultat" and alert it
  if (valueOne == "" || valueTwo == "") {
    alert("jag kan bara använda siffror");
  } else {
    const resultat = valueTwo * valueOne;
    alert(resultat);
  }
}

//When you press the btn, call on the funktion "multiplier" and execute it
function taskFour() {
  multiplier();
}

/*
Uppgift 5: 
Börja med att iterera över arrayen fruits, om värdet är "apelsin" eller "päron" 
ska du pusha värdet till trash-arrayen, annars ska du pusha värdet till eatable-arrayen, 
du ska sedan rendera ut båda arrayerna i diven "answer-five", där eatable arrayen ska 
prefixas av "Ätligt:" i bold och trash-arrayens värden ska prefixas av "Skräp:" i bold

Det kommer alltså att se ut såhär
Ätligt: banan, äpple, citron
Skräp: apelsin, päron
*/

/*We have an three Arrays,
"fruits" that contain our diffrent types of string values
"eatable" and "trash" that will contain the users string values depending on if he/she likes them or not*/
const fruits = ["banan", "äpple", "citron", "apelsin", "päron"];
const eatable = [];
const trash = [];

//When you press the btn
function taskFive() {
  //For loop that let us target each individual string in the Array
  for (let i = 0; i < fruits.length; i++) {
    //if the string matches one of these strings, push the string to "trash"
    if (fruits[i] === "apelsin" || fruits[i] === "päron") {
      trash.push(fruits[i]);
    }

    //Otherwise push the string to "eatable"
    else {
      eatable.push(fruits[i]);
    }
  }

  //when the loop is done, display "eatable" and trash, also separate the Arrays with a "<br>" and display the titles with bold
  document.getElementById("answer-five").innerHTML =
    "Ätbara frukter: ".bold() + eatable + "<br>" + "Skräp: ".bold() + trash;
}

/*
Uppgift 6: 
Börja med att iterera över arrayen persons, om personens age-attribut är över eller lika med 30
ska du pusha personens namn till overThirty-arrayen, annars ska du pusha värdet till underThirty-arrayen,
du ska sedan kolla om personens married-attribut är true eller false, är det true ska du pusha personens 
namn till married-arrayen, annars ska du pusha personens namn till notMarried-arrayen.

Du ska sedan rendera ut alla arrayerna i diven "answer-six", där overThirty arrayens värden ska 
prefixas av "Över 30:" i bold, underThirty-arrayens värden ska prefixas av "Under 30:" i bold, 
married-arrayens värden ska prefixas av "Gift:" i bold och notMarried-arrayens värden ska prefixas av "Ogift:" i bold

Det kommer alltså att se ut såhär
Över 30: Christian
Under 30: Diana,Carl,Karin
Gift: Christian,Diana
Ogift: Carl,Karin
*/

const persons = [
  { name: "Christian", age: 31, married: true },
  { name: "Diana", age: 29, married: true },
  { name: "Carl", age: 28, married: false },
  { name: "Karin", age: 29, married: false },
];

const married = [];
const notMarried = [];
const overThirty = [];
const underThirty = [];

function taskSix() {
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].age < 30) {
      underThirty.push(persons[i].name);
    } else {
      overThirty.push(persons[i].name);
    }

    if (persons[i].married === true) {
      married.push(persons[i].name);
    } else {
      notMarried.push(persons[i].name);
    }
  }

  document.getElementById("answer-six").innerHTML =
    "Över: ".bold() +
    overThirty +
    "<br>" +
    "Under: ".bold() +
    underThirty +
    "<br>" +
    "Gift: ".bold() +
    married +
    "<br>" +
    "Ogift: ".bold() +
    notMarried;
}

/*
Uppgift 7: 
Dela upp strängen addMeSomeLineBreaks vid varje komma och skriv 
ut texten på en ny rad i diven "answer-seven"
*/

const addMeSomeLineBreaks =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

//An String value that will repalce the current letter in the loop
let radbyte = "";

// when you press the btn
function taskSeven() {
  //A for loop that looks at the individual letters/spaces/symbols....
  for (let x of addMeSomeLineBreaks) {
    // if it encounters a "," then replace it with a "," AND a "<br>"
    if (x === ",") {
      radbyte += ", <br>";
    }

    // otherwise just replace it with the same sting value
    else {
      radbyte += x;
    }
  }

  //display the new text "radbyte" insted of the old one
  document.getElementById("answer-seven").innerHTML = radbyte;
}

/*
Uppgift 8: 
Dölj diven med id card-eight i 3 sekunder efter att du klickat på knappenn,
efter att tre sekunder har gått ska diven visas som vanligt igen
*/

//When you press on the btn
function taskEight() {
  //pull "card-eight" and hide it
  document.getElementById("card-eight").style.display = "none";

  // after 3sec make it pop up again
  setTimeout(() => {
    document.getElementById("card-eight").style.display = "block";
  }, 3000);
}

/*
Uppgift 9: 
Om klockan är över 17.00 ska bakgrundsfärgen ändras på alla divar med klassen 
answer-container till blå, annars ska den ändras till röd
*/

/* We pull the current date and call it "dagar"
   We pull the current hours on this day and call it "hour"
   we pull the div:s with the class "answer-container"  */
const dagar = new Date();
let hour = dagar.getHours();
const allContainers = document.getElementsByClassName("answer-container");

// When you press the btn
function taskNine() {
  //for loop, we style one "answer-container" at the time
  for (let i = 0; i < allContainers.length; i++) {
    //depending on the time we style with red or blue
    if (hour >= 17) {
      allContainers[i].style.backgroundColor = "blue";
    } else {
      allContainers[i].style.backgroundColor = "red";
    }
  }
}

/*
Uppgift 10: 
Sista uppgiften är att bygga en miniräknare genom att anropa och förse 
calculator-funktionen med tre argument (se taskTen-funktionen), 
i calculator-funktionen ska du sedan göra olika beräkningar (plus, minus, gånger, delat med) på de två 
första parametrarna beroende av vad den tredje parametern är satt till ("add", "subtract", "multiply", "divide"). 
När resultatet har beräknats ska detta visas i en alert-box. 

Ytterligare så ska du innan beräkningen görs kontrollera att argument 1 och 2 är satta till nummer 
och att argument nummer tre antingen är satt till "add", "subtract", "multiply" eller "divide", 
om någon av dessa conditions inte uppfylls ska du 
visa en alertbox med texten "Något är fel"
*/

function calculator(valueOne, valueTwo, operator) {
  valueOne = 10;
  valueTwo = 5;
  operator = "add";

  // If both values are nummbers run the code switch
  if (valueOne !== "" && valueTwo !== "") {
    // depending on the string value of "operator" do the following
    switch (operator) {
      case "add":
        alert(valueOne + valueTwo);
        break;

      case "sub":
        alert(valueOne - valueTwo);
        break;

      case "multi":
        alert(valueOne * valueTwo);
        break;

      case "divi":
        alert(valueOne / valueTwo);

      //if the string value of "operator" does NOT match any cases
      default:
        alert("Något är fel");
    }
  }
  // otherwise
  else {
    alert("något är fel");
  }
}

function taskTen() {
  //första och andra argumentet ska vara nummer, tredje argumentet ska
  //vara en sträng med något av värdena "add", "subtract", "multiply", "divide"
  calculator();
}
