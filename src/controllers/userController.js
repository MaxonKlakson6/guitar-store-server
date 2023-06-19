const jwt = require("jsonwebtoken");

const UserRepository = require("../repositories/UserRepository");
const getTokenData = require("../helpers/getTokenData");

class UserController {
  async getUser(req, res) {
    const { id } = getTokenData(req.headers.authorization);
    const user = await UserRepository.findUserById(id);
    res.json(user);
  }
  async createUnauthorizedUser(req, res) {
    const newUser = await UserRepository.createUnauthorizedUser();
    const jwtCredentials = {
      id: newUser.id,
      isRegistered: newUser.isRegistered,
    };

    const jwtToken = jwt.sign(jwtCredentials, process.env.JWT_SECRET);
    res.json(jwtToken);
  }
  async updateUnauthorizedUser(req, res) {
    const { id } = getTokenData(req.headers.authorization);
    await UserRepository.updateUnauthorizedUser(req.body, id);
    res.json("ok");
  }
  async signIn(req, res) {
    const user = await UserRepository.findByEmailAndPassword(req.body);
    if (!user) {
      res.status(400).json("Неверные данные");
      return;
    }
    const jwtCredentials = {
      id: user.id,
      isRegistered: true,
    };
    const token = jwt.sign(jwtCredentials, process.env.JWT_SECRET);
    res.json({ message: `Добро пожаловать ${user.name}`, token });
  }
  async updateUserInformation(req, res) {
    const { fieldName, value } = req.body;
    const { id } = getTokenData(req.headers.authorization);
    await UserRepository.updateUserField(fieldName, value, id);
    res.json("Данные были изменены");
  }
}

module.exports = new UserController();
