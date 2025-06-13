import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

'use client';


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white relative">
      {/* Navbar */}
      <header className="flex justify-between items-center p-6 bg-black/40 text-white z-10 absolute top-0 w-full">
        <h1 className="text-2xl font-bold">Keller Pacific</h1>
        <nav className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-4 py-2 bg-white/10 border border-white rounded hover:bg-white/20"
          >
            Menu
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
              <ul className="divide-y divide-gray-200">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Home</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">About</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Projects</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Contact</li>
              </ul>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-100 to-white">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <Image
            src="/hero-construction.jpg"
            alt="Keller Pacific Construction"
            fill
            quality={90}
            className="opacity-30 object-cover"
            priority
          />
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-4 drop-shadow-lg mt-20">
          Building the Future of Northern California
        </h1>
        <p className="text-xl text-gray-700 max-w-xl mb-6">
          High-performance construction with integrity, safety, and lasting craftsmanship.
        </p>
        <Button className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl shadow-md">
          View Our Projects <ArrowRight className="ml-2" />
        </Button>
      </section>

      {/* Card Section */}
      <section className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50">
        <Card className="shadow-sm">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Residential Construction</h3>
            <p className="text-gray-600">
              Custom homes, remodels, and ADUs crafted with precision and care.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Commercial Projects</h3>
            <p className="text-gray-600">
              From tenant improvements to ground-up developments.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Earthworks & Infrastructure</h3>
            <p className="text-gray-600">
              Site preparation, grading, trenching, and underground utilities.
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}