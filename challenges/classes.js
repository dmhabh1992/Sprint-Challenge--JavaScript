// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
//Find out the formulas for volume and surface area for cubes and create those methods 
//using the dimension properties from CuboidMaker.  
//Test your work by logging out your volume and surface area.
class CuboidMaker {
    constructor(length, width, height) {
        this.length = length,
        this.width = width,
        this.height = height
    }
  }
  CuboidMaker.prototype.volume = function() {
    return volume = this.length * this.width * this.height
  }
  CuboidMaker.prototype.surfaceArea = function() {
    return this.surfaceArea = 2* (this.length*this.width+this.length*this.height+this.width*this.height)
  }
  const cuboid = new CuboidMaker ({
    length: 4,
    width: 5,
    height: 5
  })
  console.log(cuboid.volume());
 console.log(cuboid.surfaceArea()); 