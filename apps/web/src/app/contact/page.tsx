"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit() {
    alert("(There is no backend, so this doesn't do anything)");
  }

  return (
    <main className="p-8 max-w-md mx-auto space-y-4">
      <h1 className="text-3xl font-bold">Contact</h1>

      <Input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Textarea
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <Button onClick={handleSubmit}>Submit</Button>
    </main>
  );
}