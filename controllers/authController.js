const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Password policy: min 8 chars, 1 uppercase, 1 number, 1 special char
const passwordPolicy = (pwd) => {
  const re = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
  return re.test(pwd);
};

exports.register = async (req, res) => {
  console.log('Register endpoint hit', { path: req.path, ip: req.ip, headers: req.headers && { origin: req.headers.origin, referer: req.headers.referer } });
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Name, email and password are required" });
  }

  if (!passwordPolicy(password)) {
    return res.status(400).json({
      message:
        "Password must be at least 8 characters and include 1 uppercase letter, 1 number and 1 special character",
    });
  }

  try {
    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email: email.toLowerCase(), password: hash });

    return res.status(201).json({ message: "Registered", userId: user._id });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

exports.login = async (req, res) => {
  console.log('Login endpoint hit', { path: req.path, ip: req.ip, headers: req.headers && { authorization: req.headers.authorization } });
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(400).json({ message: "User Not Found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Invalid Password" });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};