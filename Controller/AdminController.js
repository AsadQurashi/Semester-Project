import CreateAccountModel from "../Module/Create_Account.js";
import { generateToken } from "../Config/Toekn.js"; // Import the generateToken function

export const AccountCreation = async (req, res) => {
  try {
    const { action, email, password, name, confirm_password } = req.body;

    if (action === "register") {
      if (name && email && password && confirm_password) {
        // Check if email is already taken
        const existingAccount = await CreateAccountModel.findOne({ email });
        if (existingAccount) {
          return res.status(400).json({ error: "Email is already taken" });
        }

        // Create the account
        const newAccount = new CreateAccountModel({
          name,
          email,
          password,
          confirm_password,
        });
        await newAccount.save();
        const token = generateToken({ email });
        res
          .status(200)
          .json({ message: "Account created successfully", token });
      } else {
        res.status(400).json({ error: "Required all fields" });
      }
    } else if (action === "login") {
      if (email && password) {
        // Find the user by email
        const user = await CreateAccountModel.findOne({ email });

        if (user) {
          if (user.password === password) {
            const token = generateToken({ email }); // Generate JWT token
            res.status(200).json({ message: "Login successful", user, token });
          } else {
            res.status(400).json({ error: "Invalid password" });
          }
        } else {
          res.status(404).json({ error: "User not found" });
        }
      }
    } else {
      res.status(400).json({ error: "Invalid action" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "User does not exist" });
  }
};
