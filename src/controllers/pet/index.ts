import type { RequestHandler } from "express";
import Pet from "./../../models/pet";
import dbConnect from "./../../utils/dbConnect";
import errorHandler from "./../../middlewares/errorHandler";
import { ObjectId } from "mongodb";

/**
 * @controller createPet
 * @desc Create a new pet
 * @route POST /api/pets
 * @access Private
 */
export const createPet: RequestHandler = async (req, res) => {
  // get the pet details from the request body
  const { age, gender, location, phoneNumber, image } = req.body;

  // get the pets collection
  const { client, petsCollection } = await dbConnect();

  // create a new pet
  const newPet = new Pet(age, gender, location, phoneNumber, image);

  // insert the new pet into the database
  const result = await petsCollection.insertOne(newPet);

  // close the connection to the database
  await client.close();

  // return 201 and the new pet
  res.status(201).json({
    success: true,
    data: {
      message: "Pet created successfully",
      pet: {
        id: result.insertedId,
      },
    },
  });
};

/**
 * @controller getPets
 * @desc Get all pets
 * @route GET /api/pets
 * @access Private
 * */
export const getPets: RequestHandler = async (req, res) => {
  // get the pets collection
  const { client, petsCollection } = await dbConnect();

  // get the pets
  const pets = await petsCollection.find({}).toArray();

  // close the connection to the database
  await client.close();

  // return the pets
  res.status(200).json({
    success: true,
    data: pets,
  });
};

/**
 * @controller getPet
 * @desc Get a pet by id
 * @route GET /api/pets/:id
 * @access Private
 * */
// export const getPet: RequestHandler = async (req, res) => {
//     // get the id from the request parameters
//     const { id } = req.params;

//     // get the pets collection
//     const { client, petsCollection } = await dbConnect();

//     // get the pet
//     const pet = petsCollection.findOne({ _id: id });
// };
