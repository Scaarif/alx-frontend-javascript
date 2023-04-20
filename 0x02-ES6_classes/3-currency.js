export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // define a setters and getters for all the properties/fields
  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    this._code = code;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
