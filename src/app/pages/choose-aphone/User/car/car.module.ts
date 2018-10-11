import { Deserializable } from "../deserializable/deserializable.module";

export class Car implements Deserializable {
  brand: string;
  year: number;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}