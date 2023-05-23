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
}

module.exports = new UserRepository();
