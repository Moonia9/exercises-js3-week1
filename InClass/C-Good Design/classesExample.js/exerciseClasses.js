class NameOfTheClass {
  constructor(param1) {
    this.param1 = param1;
    console.log(param1);
  }
  aGreatFunction() {
    return this.param1 + "from somebody";
  }
}

const objectOfTheClass = new NameOfTheClass("Some text");
objectOfTheClass.aGreatFunction();
