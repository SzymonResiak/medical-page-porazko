import { IconCircle } from "@/components/IconCircle";
import { ToothIcon } from "@/components/icons/ToothIcon";
import { Button } from "@/components/Button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="max-w-4xl mx-auto">
        <h1 className="text-xl font-bold text-center p-3 mb-4 text-[#2E2E2E]">
          Jakiego wsparcia zdrowotnego potrzebujesz?
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <Link href="/dentist" className="group relative">
            <div className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 relative overflow-hidden">
              <Image
                src="/images/toothbrush-bg.png"
                alt="Toothbrush background"
                fill
                className="object-cover"
                quality={100}
              />
              <div className="relative">
                <div className="flex items-start gap-2 mb-4">
                  <IconCircle icon={<ToothIcon />} size="2xs" />
                  <p className="text-[#2E2E2E] text-xs">
                    Stomatologia dla całej Twojej rodziny pełen zakres usług.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#2E2E2E]">
                    Stomatolog
                  </h2>
                  <h3 className="text-xl text-[#2E2E2E]">Justyna Porażko</h3>
                  <p className="mt-1 text-[#2E2E2E] text-xs">
                    Dla każdego pacjenta przygotowywany jest indywidualny plan
                    leczenia w oparciu o badanie kliniczne oraz badania
                    obrazowe.
                  </p>
                  <Button>dowiedz się więcej</Button>
                  <button className="bg-gray-800 text-white px-6 py-2 rounded-full mt-4 hover:bg-gray-700 transition-colors">
                    dowiedz się więcej
                  </button>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/internist" className="group relative">
            <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 relative overflow-hidden">
              <Image
                src="/images/medicine-bg.png"
                alt="Medicine background"
                fill
                className="object-cover"
                quality={100}
              />
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <IconCircle
                    icon={<ToothIcon />}
                    size="xl"
                    backgroundColor="#FF6B6B"
                  />
                </div>
                <h2 className="text-2xl font-semibold text-center mb-3">
                  Internal Medicine
                </h2>
                <p className="text-gray-600 text-center">
                  Comprehensive internal medicine care for adults. Our
                  specialists are here to help you maintain your health and
                  well-being.
                </p>
              </div>
            </div>
          </Link>
        </div>

        <section className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4">
              <h3 className="text-xl font-medium mb-2">Expert Care</h3>
              <p className="text-gray-600">
                Experienced medical professionals dedicated to your health
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-medium mb-2">Modern Facilities</h3>
              <p className="text-gray-600">
                State-of-the-art equipment and comfortable environment
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-medium mb-2">Patient-Focused</h3>
              <p className="text-gray-600">
                Personalized care tailored to your needs
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
