import { Router } from "express";
import * as controller from "./auth.controller";

const user: Router = Router();

// Sign In
user.post("/authenticate", controller.authenticate);

// Register New User
user.post("/register", controller.register);

user.get("/", controller.status)

export default user;
