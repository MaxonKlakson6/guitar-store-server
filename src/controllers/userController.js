const jwt = require("jsonwebtoken");

const UserRepository = require("../repositories/UserRepository");

class UserController {
  async createUnauthorizedUser(req, res) {
    const newUser = await UserRepository.createUnauthorizedUser();
    const jwtCredentials = {
      id: newUser.id,
      isRegistered: newUser.isRegistered,
    };

    const jwtToken = jwt.sign(jwtCredentials, process.env.JWT_SECRET);
    res.json(jwtToken);
  }
}

module.exports = new UserController();
