const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcryptjs.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid Password" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token: token });
  } catch (error) {
    console.log("SignIn User Controller", error);
    res.status(500).json({ message: "Server Error" });
  }
};

const signUp = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: "User Already Exists" });

    if (password !== confirmPassword)
      return res.status(400).json({ message: "Password do not match" });

    const hashedPassword = await bcryptjs.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });
    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "1h",
    });
    console.log("token: ", token);
    res.status(200).json({ result, token });
  } catch (error) {
    console.log("SingUp User Controller", error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { signIn, signUp };
