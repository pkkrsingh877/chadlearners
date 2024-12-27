import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <h1 className="text-5xl">Instructor Panel</h1>
      <Link href="/instructor/login" className="text-blue-500">Login</Link>
      <Link href="/instructor/signup" className="text-blue-500">Signup</Link>
    </div>
  );
}
