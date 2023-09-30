import mongoose from "mongoose";

const CreateAccountSchema = new mongoose.Schema({
  name: { type: String, },
  email: { type: String, },
  password: { type: String, },
  confirm_password: { type: String, }
});

const CreateAccountModel = mongoose.model('CreateAccount', CreateAccountSchema);
export default CreateAccountModel;
