import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
{
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  role: {
    type: String,
    enum: ["customer", "admin"],
    default: "customer"
  },
  isVerified: {
    type: Boolean,
    default: false
  },
phone: String,
address: String,
city: String,

  emailOTP: String,
 otpExpire: Date,
  resetOTP: String,
resetOTPExpire: Date,
lastOtpSentAt: Date,
},
{
  timestamps: true
}
);

// Hash password
userSchema.pre("save", async function(next){
  if(!this.isModified("password")) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Compare password
userSchema.methods.matchPassword = async function(enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;