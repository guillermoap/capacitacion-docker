import { Router } from "express";
import verifyToken from "../../helpers/verifyToken";
import * as controller from "./user.controller";

const user: Router = Router();

// Retrieve all Users
user.get("/", verifyToken, controller.findAll);

// Retrieve a Specific User
user.get("/:id", verifyToken, controller.findOne);

// Update a User with Id
user.put("/:id", verifyToken, controller.update);

// Delete a User with Id
user.delete("/:id", verifyToken, controller.remove);

export default user;
