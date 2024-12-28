import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minimumLength: [3, "Email must be at least 3 characters long"],
        maximumLength: [255, "Name must be at most 255 characters long"],
    },
    email: {
        type: String,
        required: true,
        minimumLength: [8, "Email must be at least 8 characters long"],
        maximumLength: [255, "Email must be at most 255 characters long"],
        unique: true
    },
    password: {
        type: String,
        required: true,
        minimumLength: [8, "Email must be at least 8 characters long"],
        maximumLength: [1024, "Password must be at most 1024 characters long"],
    },
    role: {
        type: String,
        enum: ["learner", "instructor"],
        default: "learner",
        required: true
    }
}, { timestamps: true });

export default mongoose.models.User || mongoose.model("User", userSchema);