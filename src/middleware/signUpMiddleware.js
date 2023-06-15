const UserRepository = require("../repositories/UserRepository");

module.exports = async (req, res, next) => {
  const { email, phoneNumber } = req.body;
  const userWithSameEmail = await UserRepository.findUserByEmail(email);
  const userWithSamePhoneNumber = await UserRepository.findUserByPhoneNumber(
    phoneNumber
  );
  if (userWithSameEmail || userWithSamePhoneNumber) {
    res.status(400).json("Пользователь с такими данными уже существует");
    return;
  }
  next();
};
