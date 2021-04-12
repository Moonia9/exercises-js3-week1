function greetPeople(people) {
  var greeting = "Hello";
  greeting = greeting + " ";
  greeting = greeting + "llo";
  greeting = greeting + " ";

  // people.forEach((person) =>  {
  //   greeting = greeting + person;
  //   greeting = `${greeting} ${person}`;
  //   console.log(greeting);
  // });

  for (const key in people) {
    const person = people[key];
    greeting = `${greeting} ${person},`;
    console.log(key);

    if(key === people.length - 1){
      greeting = `${greeting} ${person},`;
    } else if (key === people.length - 1) {
      greeting = `${greeting} ${person} & `;
    } else {
      greeting = `${greeting} ${person}`;
    }
  }

  return greeting;
  
}

console.log(result);


/*
  Let's trace this piece of code - what is the value of result with this input
  
  */
var mentors = ["Irina", "Ashleigh", "Etza"];
var result = greetPeople(mentors);
