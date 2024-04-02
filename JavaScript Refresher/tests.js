//FUNCTIONS
function greetUser(name, message = "Hello" ) { // setting default message in case 2nd parameter is not given
    console.log(name);
    console.log(message);
}
// greetUser("David"," wassup ?");
// greetUser("Bean");


//OBJECTS
const user = { 
    name: 'Max',
    age: 32,
    greet() {
        console.log("Hello " + user.name); //standard method
        console.log("Wassup " + this.name); // Best practice
    }
};
// console.log(user); 
// user.greet(); //Hello Max

//CLASS
class User {
    constructor(name, age, job){
        this.name = name;
        this.age = age;
        this.job = job;
    }

    jobDescription(){
        console.log("He is a "+ this.job);
    }
}
const person1 = new User("Mehul",12,"Doctor"); // This is a new object with assigned values
// console.log(person1); 
// person1.jobDescription();

//ARRAYS
const sports = ["bag", "gear","ball", "bat"];
sports.push("money");
// console.log(sports);//[ 'bag', 'gear', 'ball', 'bat', 'money' ]

const keyIndex = sports.findIndex((item) => item === "gear");
// console.log(keyIndex); // if true returns index else -1

editedSportsArray = sports.map((item) =>  item + "!"  );
// console.log(editedSportsArray); //[ 'bag!', 'gear!', 'ball!', 'bat!', 'money!' ]

//DESTRUCTURING for Arrays
//lets say
const data = ["max", "miller"]; 
//we need to extract first and last name
let firstName = data[0];
let lastName = data[1];
//instead of this we can use destructuring
const [ firstName_ , lastName_ ] = [ "Max" , " Miller "];
// console.log(firstName_);
// console.log(lastName_);

    //DESTRUCTURING for objects
    const users = { 
        name: "MAX",
        agw: 12
    };
    let name_ =users.name;
    let age_ =users.agw;
    //
    const {name : userName, age} = { 
        // in case of arrays destructuring and pulling the values is done by position so you can keep any name to the object to be assigned
        //in objects the destructuring is done by property so the names should be same as property
        //we can also use alias name "as" but in this case ":" 
        name:"mikl",
        age:23
    };
    // console.log(userName);
    // console.log(age);

// //Destructuring in Function
function storeOrder(order) {
    // console.log(order);
    const localStorage = {
        id:order.id,
        currency:order.currency
    }
   console.log(localStorage);
  }
  const database = [{ 
    id:12,
    currency:"INR"
    },
        {
        id:13,
        currency:"USD" 
    }];
//   storeOrder(database);



//Spread in Array
let hobbies = ["cricket","basketball","golf"];
let newhobbies = ["swimming"];
let mergedHobbies = [...hobbies, ...newhobbies];
// console.log(mergedHobbies);

//Spread in objects
let newUser = {
    isExist:true,
    ...database
}
console.log(newUser);

