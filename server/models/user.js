import mongoose from "mongoose";

let User;

try {
  User = mongoose.model("User");
} catch (e) {
  const UserSchema = new mongoose.Schema({
    // Your schema definition remains the same
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      mix: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    city: String,
    state: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    transactions: Array,
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "admin",
    },
  });
  User = mongoose.model("User", UserSchema);
}

export default User;
