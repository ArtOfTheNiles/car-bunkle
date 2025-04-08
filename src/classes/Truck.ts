// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;
  
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
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
    this.towingCapacity = towingCapacity;
  }
  tow(vehicle: Truck | Motorbike | Car): void {
    const vehicleMake = vehicle.make || 'Make';
    const vehicleModel = vehicle.model || 'Model';
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`Towing ${vehicleMake} ${vehicleModel}`);
    } else {
      console.log(`Sorry, ${vehicleMake} ${vehicleModel} is too heavy to be towed`);
    }
  }

  override printDetails(): void {
    super.printDetails();
    console.log(`Truck VIN: ${this.vin}`);
    console.log(`Truck make: ${this.make}`);
    console.log(`Truck model: ${this.model}`);
    console.log(`Truck year: ${this.year}`);
    console.log(`Truck weight: ${this.weight} lbs`);
    console.log(`Truck top speed: ${this.topSpeed} mph`);
    console.log(`Truck color: ${this.color}`);
    console.log(`Truck towing capacity: ${this.towingCapacity} lbs`);
    console.log(`Truck wheels: ${this.wheels.length}`);
  }
}


export default Truck;
