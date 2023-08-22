import { ObjectId } from "mongodb";

class Pet {
  constructor(
    public _id: ObjectId,
    public age: number,
    public gender: "male" | "female",
    public location: string,
    public mobile: string
  ) {
    this._id = _id;
    this.age = age;
    this.gender = gender;
    this.location = location;
    this.mobile = mobile;
  }
}

export default Pet;
