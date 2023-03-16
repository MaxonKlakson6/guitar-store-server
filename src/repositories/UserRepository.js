const { UserModel } = require("../models");

class UserRepository {
  async createUnauthorizedUser() {
    return UserModel.create();
  }
}

module.exports = new UserRepository();
