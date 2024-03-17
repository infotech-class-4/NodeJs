import Users from "../models/User.js";
import jwt from "jsonwebtoken";
// REST API
// CRUD => Create, Read, Update, Delete

export const register = async (req, res) => {
  //   const user = req.body;
  const { username, password, name, surname } = req.body;
  const user = { username, password, name, surname };

  try {
    const data = await Users.create(user);

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: "User can not created." });
  }
};

export const login = async (req, res) => {
  // $2b$10$RB8C5AXVNWiAjTB7NWYeM.HYkSiURIQn3ipx8X/NgQFxpO/62tnjK = 1234
  const { username, password } = req.body;

  const data = await Users.findOne({ username }).exec();
  if (!data) {
    return res.status(404).json({ message: "User could not find." });
  }

  const isValidated = await data.validatePassword(password);

  if (!isValidated) {
    return res.status(403).json({ message: "The password is incorrect." });
  }

  const user = {
    id: data.id,
    username: data.username,
    name: data.name,
    surname: data.surname,
  };

  const token = jwt.sign(user, process.env.ACCESS_TOKEN);

  res.json({ ...user, token: token });
};

export const find = async (req, res) => {
  try {
    const id = req.params.id;

    const data = await Users.findOne({ _id: id }).exec();
    res.status(200).json(data);
  } catch (error) {
    return res.status(404).json({ message: "User could not find." });
  }
};

export const findAll = async (req, res) => {
  try {
    const data = await Users.find().exec();
    res.status(200).json(data);
  } catch (error) {
    return res.status(404).json({ message: "Users could not find." });
  }
};

export const update = async (req, res) => {
  try {
    const user = req.body;
    const data = await Users.updateOne({ _id: user.id }, { $set: user }).exec();
    res.status(200).json(data);
  } catch (error) {
    return res.status(404).json({ message: "Users could not update." });
  }
};

export const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Users.deleteOne({ _id: id }).exec();
    res.status(200).json(data);
  } catch (error) {
    return res.status(404).json({ message: "Users could not update." });
  }
};
