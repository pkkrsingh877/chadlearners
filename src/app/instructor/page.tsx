"use client";

import Link from "next/link";

export default function Dashboard() {
    return (
        <div className="flex flex-col items-center justify-start h-screen gap-5">
            <h1 className="text-5xl text-center p-4">Instructor Dashboard</h1>
            <div className="flex flex-col items-center justify-center text-blue-500">
                <Link href="/instructor/courses">List Courses</Link>
                <Link href="/instructor/courses/create">Create Course</Link>
                <Link href="/instructor/profile">View Profile</Link>
                <Link href="/instructor/profile/update">Update Profile</Link>
            </div>
        </div>
    )
}