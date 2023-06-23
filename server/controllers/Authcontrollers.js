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

    if (!fullname || !username || !email || !password)
      res.status(400).send({ error: "All fields are required" });

    const user = await getuser(email, username);

    if (user.length)
      res.status(409).send("User already exists with this username or email!");
    const salt = await bcrypt.genSalt();

    const hashedPassword = await bcrypt.hash(password, salt);

    await insertUser(fullname, username, email, hashedPassword);

    res.status(201).json("User created");
  } catch (error) {
    res.json(error);
  }
};
module.exports = { registerUser };
