import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-100 to-white">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <Image
            src="/hero-construction.jpg"
            alt="Keller Pacific Construction"
            layout="fill"
            objectFit="cover"
            quality={90}
            className="opacity-30"
          />
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-4 drop-shadow-lg">
          Building the Future of Northern California
        </h1>
        <p className="text-xl text-gray-700 max-w-xl mb-6">
          High-performance construction with integrity, safety, and lasting craftsmanship.
        </p>
        <Button className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl shadow-md">
          View Our Projects <ArrowRight className="ml-2" />
        </Button>
      </section>

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