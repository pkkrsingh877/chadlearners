"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"
import axios from "axios";

export default function Login() {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const router = useRouter();
    const handleNavigation = () => {
        router.push("/instructor/dashboard");
    }

    const handleSubmit = async () => {
        try {
            const response = await axios.post("/api/instructor/login", user);
            console.log(response.data);
            if (response.data.success) {
                handleNavigation();
            }
        } catch (error) {
            console.error("Error handling login", error);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
            <h1 className="text-5xl text-center">Login</h1>
            <input type="email"
                placeholder="email"
                name="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="rounded-md p-4 border border-black" />
            <input type="password"
                placeholder="password"
                name="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="rounded-md p-4 border border-black" />
            <button className="bg-black text-white rounded-md p-4" onClick={handleSubmit}>Login</button>
            <p>Don't have an Account?</p>
            <Link href="/auth/signup" className="text-blue-500">Signup</Link>
        </div>
    )
}