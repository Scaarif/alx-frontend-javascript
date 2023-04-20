export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new TypeError('Class extending Building must implement evacuationWarningMessage');
    }
  }

  // define a setters and getters for all the properties/fields
  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
