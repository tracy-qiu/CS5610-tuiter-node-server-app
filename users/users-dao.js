import usersModel from "./users-model.js";

let users = [];

export const findAllUsers = () => usersModel.find();

export const findUserById = (uid) => {
  usersModel.findById(id);
};

export const findUserByUsername = (username) => {
  usersModel.findOne({ username });
};

export const findUserByCredentials = (username, password) => {
  usersModel.findOne({ username, password });
};

export const createUser = (user) => usersModel.create(user);

export const updateUser = (uid, user) => {
  usersModel.updateOne({ _id: id }, { $set: user });
};
export const deleteUser = (uid) => {
  usersModel.deleteOne({ _id: id });
};
