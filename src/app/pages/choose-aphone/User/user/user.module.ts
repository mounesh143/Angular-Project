import { Car } from "../car/car.module";
import { Deserializable } from "../deserializable/deserializable.module";

export class User implements Deserializable {
  id: number;
  name: string;
  car: Car;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}