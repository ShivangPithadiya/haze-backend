/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const mongoose = require("mongoose");
//schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    profileImage: {
      type: String,
      required: false,
    },
    userType: {
      type: String,
      required: true,
      enum: ["super-admin", "super-admin-manager", "store-owner", "store-owner-manager"],
      default: "store-owner"
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    password: {
      type: String,
      required: true,
    },
    resetToken: { type: String },
    resetTokenExpiration: { type: Date },
    address: {
      type: Array,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
    phone: {
      type: String,
      required: false,
    },
    shopifyapikey: {
      type: String,
      required: false,
    },
    shopifyaccesstoken: {
      type: String,
      required: false,
    },
    shopifystoredomain: {
      type: String,
      required: false,
    },
    profile: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);
// Method to create a super admin if not exists
userSchema.statics.createSuperAdminIfNeeded = async function () {
  // Hardcoded super admin details
  // Hardcoded super admin details
  const hardcodedSuperAdmin = {
    name: "Super Admin",
    email: "superadmin.haze@gmail.com",
    userType: "super-admin",
    status: "active",
    password: "haze@123",
  };
  try {
    // Check if a super admin already exists
    const existingSuperAdmin = await this.findOne({ userType: "super-admin" });
    if (!existingSuperAdmin) {
      // Create the super admin if not exists
      await this.create(hardcodedSuperAdmin);
      console.log("Super admin created successfully.");
    } else {
      console.log("Super admin already exists.");
    }
  } catch (error) {
    console.error("Error creating super admin:", error);
  }
};
// Method to check if user is a super admin
userSchema.methods.isSuperAdmin = function () {
  return this.userType === "super-admin";
};
//export
module.exports = mongoose.model("User", userSchema);