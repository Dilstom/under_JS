// Add the own properties of canary to the array ownProps

function Bird(name) {
 this.name = name;
 this.numLegs = 2;
}

let canary = new Bird('Tweety');
let ownProps = [];

for (let i in canary) {
 if (canary.hasOwnProperty(i)) {
  ownProps.push(i);
 }
}
console.log(ownProps);
