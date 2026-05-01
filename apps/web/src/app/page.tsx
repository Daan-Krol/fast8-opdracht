import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      
      {/* HERO SECTION */}
      <section className="min-h-[10vh] flex flex-col justify-center items-center text-center px-6 py-8">
        <h1 className="text-5xl font-bold tracking-tight">
          A marketing-style website
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-xl">
          I build this using Next.js, Shadcn, and Tailwind CSS.
        </p>

        <div className="mt-6 flex gap-4">
          <a href="/about" className="bg-black text-white px-6 py-3 rounded-md">
            About me
          </a>
          <a href="/contact" className="bg-black text-white px-6 py-3 rounded-md">
            Contact me
          </a>
        </div>
      </section>
    </main>
  );
}