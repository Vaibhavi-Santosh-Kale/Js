/*console.log("Oops");
// Bind Method

let pokemon = {
  firstName: "Rohit ",
  lastName: "Pawar ",
  getpokeName: function () {
    let fullname = this.firstName + "" + this.lastName;
    return fullname;
  },
};
let pokemonName = function () {
  console.log(this.getpokeName() + "I choose you!");
};
let logPokemon = pokemonName.bind(pokemon);
logPokemon();


//Call & Apply

let pokemon = {
  firstName: "Rohit ",
  lastName: "Pawar ",
  getpokeName: function () {
    let fullname = this.firstName + "" + this.lastName;
    return fullname;
  },
};
let pokeName = function (snack, hobby) {
  console.log(this.getpokeName() + "loves " + snack + "and " + hobby);
};
pokeName.call(pokemon, "Vaibhavi ", "only Vaibhavi");
pokeName.apply(pokemon, ["Vaibhavi ", "only Vaibhavi"]);
 */

//JavaScript Prototype

class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }
}
let rectangle = new Rectangle(10, 20);
console.log(rectangle);
