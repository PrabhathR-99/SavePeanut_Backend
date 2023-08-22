// import type { RequestHandler } from "express";
// import dbConnect from "./../../utils/dbConnect";
// import errorHandler from "middlewares/errorHandler";

// /**
//  * @controller getUser
//  * @desc Get a user by id
//  * @route GET /api/user/:id
//  * @access Private
//  */
// export const getUser: RequestHandler = async (req, res) => {
//   // get the id from the request parameters
//   const { id } = req.params;

//   // get the users collection
//   const { client, usersCollection } = await dbConnect();

//   // get the user
//   // const user = await usersCollection.findOne({ _id: id });

//   // close the connection to the database
//   await client.close();

//   // check if the user exists
//   // if (!user) {
//   //     // if the user does not exist, return an error
//   //     errorHandler(
//   //         {
//   //             statusCode: 400,
//   //             type: "Bad Request",
//   //             message: "User does not exist",
//   //         },
//   //         req,
//   //         res
//   //     );
//   // } else {
//   //     // if the user exists, return the user
//   //     res.status(200).json({
//   //         success: true,
//   //         data: user,
//   //     });
//   // }
// };
