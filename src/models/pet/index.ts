class Pet {
  constructor(
    public age: number,
    public gender: "male" | "female",
    public location: string,
    public phoneNumber: string,
    public image: string
  ) {
    this.age = age;
    this.gender = gender;
    this.location = location;
    this.phoneNumber = phoneNumber;
    this.image = image;
  }
}

export default Pet;
