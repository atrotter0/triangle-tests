import { Triangle } from './../src/triangle';

describe('Triangle', function() {
  var triangle;

  beforeEach(function() {
    triangle = new Triangle(5, 5, 5);
  });

  it('should test whether a Triangle has three sides', function() {
    expect(triangle.side1).toEqual(5);
    expect(triangle.side2).toEqual(5);
    expect(triangle.side3).toEqual(5);
  });

  it('should correctly determine whether three lengths can be made into a triangle', function() {
    var notTriangle = new Triangle(3,9,22);
    expect(notTriangle.isNotTriangle()).toEqual(true);
  });

  it('should test whether a shape is an isosceles triangle', function() {
    expect(triangle.isIsosceles()).toEqual(false);
  });

  it('should test whether a shape is an equilateral triangle', function() {
    expect(triangle.isEquilateral()).toEqual(true);
  });

  it('should test whether a shape is an scalene triangle', function() {
    expect(triangle.isScalene()).toEqual(false);
  });

  it('should test what kind of triangle a triangle is', function() {
    expect(triangle.checkTriangle()).toEqual("Equilateral");
  });

  it('should test what kind of triangle a triangle is', function() {
    var aTriangle = new Triangle(4, 5, 5);
    expect(aTriangle.checkTriangle()).toEqual("Isosceles");
  });

  it('should test what kind of triangle a triangle is', function() {
    var aTriangle = new Triangle(7, 3, 5);
    expect(aTriangle.checkTriangle()).toEqual("Scalene");
  });

  it('should test what kind of triangle a triangle is', function() {
    var aTriangle = new Triangle(3,6640,22);
    console.log(aTriangle.isNotTriangle());
    expect(aTriangle.checkTriangle()).toEqual("Not a triangle!");
  });
});
