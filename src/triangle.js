export function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

Triangle.prototype.isNotTriangle = function() {
  if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
    return true;
  }
};

Triangle.prototype.isIsosceles = function() {
  if ((this.side1 === this.side2 && this.side2 !== this.side3) || (this.side1 === this.side3 && this.side2 !== this.side3) ||
  (this.side1 !== this.side2 && this.side2 === this.side3)) return true;
  return false;
};

// all sides equal
Triangle.prototype.isEquilateral = function() {
  if (this.side1 === this.side2 && this.side1 === this.side3) return true;
}

// no sides equal
Triangle.prototype.isScalene = function() {
  if (this.side1 !== this.side2 && this.side2 !== this.side3) return true;
  return false;
}

Triangle.prototype.checkTriangle = function() {
  if (this.isNotTriangle()) {
    return "Not a triangle!";
  } else if (this.isIsosceles()) {
    return "Isosceles";
  } else if (this.isEquilateral()) {
    return "Equilateral";
  } else if (this.isScalene()) {
    return "Scalene";
  } else {
    return "You broke it...";
  }
}
