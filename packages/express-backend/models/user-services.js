import mongoose from "mongoose";
import userModel from "./user.js";

mongoose.set("debug", true);

mongoose.connect("mongodb://localhost:27017/users")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

function getUsers(name, job) {
  if(name && job) {
    return findUserByNameAndJob(name, job);
  }
  if(name){
    return findUserByName(name);
  }
  if(job){
    return findUserByJob(job);
  }
  return userModel.find();
}

function findUserById(id) {
  return userModel.findById(id);
}

function addUser(user) {
  const userToAdd = new userModel(user);
  const promise = userToAdd.save();
  return promise;
}

function findUserByName(name) {
  return userModel.find({ name: name });
}

function findUserByJob(job) {
  return userModel.find({ job: job });
}

function findUserByNameAndJob(name, job){
  return userModel.find({name: name, job: job});
}

function deleteUserById(id){
  return userModel.findByIdAndDelete(id);
}

export default {
  addUser,
  getUsers,
  findUserById,
  findUserByName,
  findUserByJob,
  findUserByNameAndJob,
  deleteUserById
};
