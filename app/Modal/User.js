const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Define the user schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
  }
});

// Pre-save middleware to hash password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10); 
  this.password = await bcrypt.hash(this.password, salt);  
  next();
});
UserSchema.methods.generateAuthToken = function () {
  const payload = { userId: this._id };
  const secretKey = process.env.JWT_SECRET; 
  const token = jwt.sign(payload, secretKey, { expiresIn: "1h" }); 
  return token;
};
UserSchema.methods.comparePassword = async function (enteredPassword) {
  const isMatch = await bcrypt.compare(enteredPassword, this.password);  
  return isMatch;
};

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
