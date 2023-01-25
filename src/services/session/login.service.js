require("dotenv-safe").config();
const jwt = require("jsonwebtoken");

const LoginService = async ({ email, password }) => {
  const user = await User.findOne({ where: { email: email } });

  if (!user) throw new AppError("Wrong e-mail or password.", 403);

  /* Validação da senha */

  const token = jwt.sign(
    {
      id,
    },
    String(process.env.SECRET_KEY),
    {
      subject: user.id,
      expiresIn: "5h",
    }
  );

  return token;
};

module.exports = LoginService;
