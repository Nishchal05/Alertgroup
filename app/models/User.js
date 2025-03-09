const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

// Define the user schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: function () {
      return !this.googleId; 
    },
  },
  googleId: {
    type: String,
    unique: true,
    sparse: true, 
  },
  image: {
    type: String,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
  },
  verificationTokenExpiry: {
    type: Date,
  },
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

// Method to generate an auth token (for your JWT-based session system)
UserSchema.methods.generateAuthToken = function () {
  const payload = { userId: this._id };
  const secretKey = process.env.JWT_SECRET;
  const token = jwt.sign(payload, secretKey, { expiresIn: "1d" });
  return token;
};

// Method to generate a verification token
UserSchema.methods.generateVerificationToken = function () {
  const verifyToken = crypto.randomBytes(20).toString("hex");
  this.verificationToken = verifyToken;
  this.verificationTokenExpiry = Date.now() + 60 * 60 * 1000; // 1-hour expiry
  return verifyToken;
};

// Method to compare password for login (if email/password method is used)
UserSchema.methods.comparePassword = async function (enteredPassword) {
  if (!this.password) return false; // For OAuth users without passwords
  return await bcrypt.compare(enteredPassword, this.password);
};

// Check if the model already exists before creating it
const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);

module.exports = UserModel;