import Portfolio from "@/components/shadcn-space/blocks/portfolio-01/portfolio";
import Image from "next/image";

const Portfolio01Page = () => {
  return <Portfolio />;
};

export default function About() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
        <section className="flex flex-col gap-6 items-center text-center">
            <h1 className="text-3xl font-bold">About me:</h1>
            <img
                src="/gezichtdaan.png"
                alt="Profile"
                className="items-center text-center w-48 h-48 rounded-full object-cover "
            />
            <p className="max-w-xl text-gray-600">
                My name is Daan Krol. I’m a software engineering student focused on building web applications.
                I enjoy working with React, Next.js, and .NET to create fast and intuitive websites. I made this website 
                for fast8 as a technical assessment, to show off my skills and projects.
            </p>
        </section>
        <Portfolio01Page />
    </main>
  );
}
