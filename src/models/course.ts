import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema({
    name: {
        type: String,
        required: true,
        minimumLength: [3, "Name must be at least 3 characters long"],
        maximumLength: [255, "Name must be at most 255 characters long"]
    },
    description: {
        type: String,
        required: true,
        minimumLength: [20, "Description must be at least 20 characters long"],
        maximumLength: [5000, "Description must be at most 5000 characters long"]
    },
    instructor: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    learners: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    published: {
        type: Boolean,
        default: false
    },
    videos: [{
        title: {
            type: String,
            required: true,
            minimumLength: [3, "Title must be at least 3 characters long"],
            maximumLength: [255, "Title must be at most 255 characters long"]
        },
        url: {
            type: String,
            required: true
        }
    }]
}, { timestamps: true });

export default mongoose.models.Course || mongoose.model("Course", courseSchema);