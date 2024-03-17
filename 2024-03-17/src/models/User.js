import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { hash } from "../utils/hash.js";

const userShcema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});



userShcema.pre("save", function (next) {
  if (this.password) {
    this.password = hash(this.password);
  }

  next();
});

//pass validation

userShcema.methods.validatePassword = function (data) {
    return bcrypt.compare(data, this.password ) 

}

const Users = mongoose.model("Users", userShcema);

export default Users;
