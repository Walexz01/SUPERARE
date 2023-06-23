const jwt = require("jsonwebtoken");
const pool = require("../config/connection");
const bcrypt = require("bcrypt");

//get the users by the email or username

async function getuser(email, username) {
  try {
    const q = `SELECT * FROM users WHERE email = ? OR user_name = ?`;
    const [result] = await pool.query(q, [email, username]);
    return result;
  } catch (error) {
    return error;
  }
}

// insert new user to the database
async function insertUser(fullname, username, email, hashedPassword) {
  try {
    const query = `INSERT INTO users(full_name,user_name,email,password)
                  VALUES(?, ?,?,?)`;
    await pool.query(query, [fullname, username, email, hashedPassword]);
  } catch (error) {
    return error;
  }
}

const registerUser = async (req, res) => {
  try {
    const { fullname, username, email, password } = req.body;

    if (!fullname || !username || !email || !password) {
      return res.status(400).send({ error: "All fields are required" });
    }

    const user = await getuser(email, username);

    if (user.length) {
      return res
        .status(409)
        .send("User already exists with this username or email!");
    }
    const salt = await bcrypt.genSalt();

    const hashedPassword = await bcrypt.hash(password, salt);

    await insertUser(fullname, username, email, hashedPassword);

    res.status(201).json("User created");
  } catch (error) {
    res.json(error);
  }
};

// Login User
// getuserbyemail

async function getUserByEmail(email) {
  try {
    const q = `SELECT * FROM users WHERE email = ? `;
    const [result] = await pool.query(q, [email]);
    return result;
  } catch (error) {
    return error;
  }
}

const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({ error: "All fields are required" });
    }
    const [user] = await getUserByEmail(email);

    if (!user) {
      return res.status(404).send("User doesn't exist!");
    }
    const compare = await bcrypt.compare(password, user.password);
    if (!compare) {
      return res.status(400).send("Wrong Email or Password");
    }

    const token = jwt.sign(
      { id: user.id, username: user.user_name, fullname: user.full_name },
      process.env.JWT_KEY
    );
    res.status(200).cookie("access_token", token, { httpOnly: true }).json({
      id: user.id,
      fullname: user.full_name,
      username: user.user_name,
      email: user.email,
      image: user.image,
    });
  } catch (error) {
    res.json(error);
  }
};
module.exports = { registerUser, LoginUser };
