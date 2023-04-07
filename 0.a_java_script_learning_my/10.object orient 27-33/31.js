class SimpleDate {
    constructor(year, month, day) {
      this._year = year;
      this._month = month;
      this._day = day;
    }
    addMonth(nMonths) {
    }
    getMonth() {
      return this.month;
    }
  }

/*
  constructor(year, month, day) {
    this._year = year;
    this._month = month;
    this._day = day;
  }
*/

class Car {
 constructor(name,year ) {
        this.name = name;
        this.year = year; 
}
greet() {
        return `${this.name} says hello.`;
}}

const car1 = new Car('Audi', 2018);


