const UserRepository = require("../repositories/UserRepository");
const getTokenData = require("../helpers/getTokenData");

module.exports = async (req, res, next) => {
  try {
    console.log(req.headers.authorization);
    const tokenData = getTokenData(req.headers.authorization);
    const user = await UserRepository.findUserById(tokenData.id);
    if (!user) {
      throw new Error();
    }

    next();
  } catch (error) {
    res.status(401).json("Unauthorized");
  }
};
