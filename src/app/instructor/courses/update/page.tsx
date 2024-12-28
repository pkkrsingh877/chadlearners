"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UpdateCourse() {
    const [course, setCourse] = useState({
        name: "",
        description: ""
    });

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await axios.get("/api/instructor/courses/:id");
                setCourse(response.data.course);
            } catch (error) {
                console.error("Error fetching course", error);
            }
        }
        fetchCourse();
    })

    const router = useRouter();
    const handleNavigation = () => {
        router.push("/instructor/courses");
    }

    const handleSubmit = async () => {
        try {
            const response = await axios.post("/api/instructor/courses/:id", course);
            if (response.data.success) {
                console.log("Course created successfully");
                handleNavigation();
            }
        } catch (error) {
            console.error("Error creating course", error);
        }
    }

    return (
        <div className="flex flex-col items-center justify-start h-screen gap-5">
            <h1 className="text-5xl text-center p-4">Update Course</h1>
            <div className="flex flex-col items-center justify-center text-blue-500">
                <input type="text"
                    placeholder="course name"
                    value={course.name}
                    onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                <input type="text"
                    placeholder="course description"
                    value={course.description}
                    onChange={(e) => setCourse({ ...course, description: e.target.value })} />
                <button className="bg-black text-white rounded-md p-4" onClick={handleSubmit}>Update</button>
            </div>
        </div>
    )
}