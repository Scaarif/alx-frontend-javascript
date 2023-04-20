export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // return a new object of the class
  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Clone = this.constructor[Symbol.species];
    return new Clone();
  }
}
