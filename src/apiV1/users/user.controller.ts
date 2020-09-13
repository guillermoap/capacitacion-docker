import { Request, Response } from "express";
// import { User } from "../../db/models/user.model";

export async function findAll(req: Request, res: Response): Promise<any> {
  try {
    // const users = await User.findAll({
    //   attributes: { exclude: ["password", "deletionDate"] }
    // });
    const users = null
    if (!users) {
      return res.status(404).send({
        success: false,
        message: "Users not found",
        data: null
      });
    }

    res.status(200).send({
      success: true,
      data: users
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.toString(),
      data: null
    });
  }
}

export async function findOne(req: Request, res: Response): Promise<any> {
  try {
    // const user = await User.findById(req.params.id, {
    //   attributes: { exclude: ["password", "deletionDate"] }
    // });
    const user = null
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
        data: null
      });
    }

    res.status(200).send({
      success: true,
      data: user
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.toString(),
      data: null
    });
  }
}

export async function update(req: Request, res: Response): Promise<any> {
  try {
    // const userUpdated = await User.update(req.body, {
    //   where: { id: req.params.id }
    // });
    const userUpdated = null
    if (!userUpdated) {
      return res.status(404).send({
        success: false,
        message: "User not found",
        data: null
      });
    }
    res.status(200).send({
      success: true,
      data: userUpdated
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.toString(),
      data: null
    });
  }
}

export async function remove(req: Request, res: Response): Promise<any> {
  try {
    // const user = await User.destroy({ where: { id: req.params.id } });
    const user = null

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
        data: null
      });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.toString(),
      data: null
    });
  }
}
