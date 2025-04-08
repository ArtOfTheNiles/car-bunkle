// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
  ) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels;
  }
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie! 🏍`);
  }
  override printDetails(): void {
    super.printDetails();
    console.log(`Motorbike VIN: ${this.vin}`);
    console.log(`Motorbike make: ${this.make}`);
    console.log(`Motorbike model: ${this.model}`);
    console.log(`Motorbike year: ${this.year}`);
    console.log(`Motorbike weight: ${this.weight} lbs`);
    console.log(`Motorbike top speed: ${this.topSpeed} mph`);
    console.log(`Motorbike color: ${this.color}`);
    console.log(`Motorbike wheels: ${this.wheels.length}`);
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
