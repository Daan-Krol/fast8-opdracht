"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleLogin() {
    //mock 
    if (email === "test" && password === "test") {
      router.push("/dashboard");
    } else {
      alert("Invalid login");
    }
  }

  return (
    <section
      className="h-screen flex justify-center items-start bg-cover bg-center pt-16"
      style={{ backgroundImage: "url('/bglogin.jpg')" }}
      >
      <div className="w-full max-w-sm bg-white backdrop-blur-sm p-6 rounded-xl shadow-lg space-y-4">
        <h1 className="text-2xl font-bold text-center">
          Admin Login 
        </h1>

        <p className="text-sm text-gray-600 text-center">
          Login mock data is email: test and password: test
        </p>

        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin} className="w-full">
          Login
        </Button>
      </div>
    </section>
  );
}
// import LoginForm from "@/components/shadcn-space/blocks/login-01/login";

// const Page = () => {
//   return <LoginForm/>;
// };

// export default Page;