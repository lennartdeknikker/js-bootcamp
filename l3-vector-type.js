 class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
   
  get length() {
    return Math.sqrt(this.x*this.x + this.y*this.y);
  }
  
  plus(otherVector) {
    let x = this.x + otherVector.x
    let y = this.y + otherVector.y
    return new Vec(x, y);
  }
   
  minus(otherVector) {
    return new Vec(this.x - otherVector.x, this.y - otherVector.y);
  }
}

 console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
 console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5
