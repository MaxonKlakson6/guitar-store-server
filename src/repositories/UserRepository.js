const { UserModel } = require("../models");

class UserRepository {
  async createUnauthorizedUser() {
    return UserModel.create();
  }
  async findUserById(id) {
    return UserModel.findOne({
      where: { id },
    });
  }
  async findUserByEmail(email) {
    return UserModel.findOne({ where: { email } });
  }
  async findUserByPhoneNumber(phoneNumber) {
    return UserModel.findOne({ where: { phoneNumber } });
  }
  async findByEmailAndPassword(credentials) {
    return UserModel.findOne({ where: credentials });
  }
  async updateUnauthorizedUser(userData, id) {
    return UserModel.update(userData, { where: { id } });
  }
  async updateUserField(fieldName, value, id) {
    await UserModel.update({ [fieldName]: value }, { where: { id } });
  }
}

module.exports = new UserRepository();
