import { IconCircle } from "@/components/IconCircle";
import { ToothIcon } from "@/components/icons/ToothIcon";
import { Button } from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import { KidneysIcon } from "@/components/icons/KidneysIcon";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-xl font-bold text-center p-3 mb-4 text-[#2E2E2E]">
        Jakiego wsparcia zdrowotnego potrzebujesz?
      </h1>

      <div className="grid gap-5">
        <div className="group relative">
          <div className="rounded-lg p-4 relative overflow-hidden">
            <Image
              src="/images/toothbrush-bg.png"
              alt="Toothbrush background"
              fill
              className="object-cover"
              quality={100}
            />
            <div className="relative">
              <div className="flex items-center gap-2 mb-4 mobile-2:mb-12">
                <div>
                  <IconCircle icon={<ToothIcon />} size="xs" />
                </div>
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
                  leczenia w oparciu o badanie kliniczne oraz badania obrazowe.
                </p>
              </div>
              <div className="flex justify-end">
                <Link href="/dentist">
                  <Button className="mt-4 mobile-2:mt-12">
                    dowiedz się więcej
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="group relative">
          <div className="rounded-lg p-4 relative overflow-hidden">
            <Image
              src="/images/medicine-bg.png"
              alt="Medicine background"
              fill
              className="object-cover"
              quality={100}
            />
            <div className="relative">
              <div className="flex items-center gap-2 mobile-2:mb-12">
                <div>
                  <IconCircle icon={<KidneysIcon />} size="xs" />
                </div>
                <p className="text-[#2E2E2E] text-xs">
                  Diagnostyka i leczenie chorób wewnętrznych, z naciskiem na
                  choroby nerek.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#2E2E2E]">
                  Internista, nefrolog
                </h2>
                <h3 className="text-xl text-[#2E2E2E]">Tomasz Porażko</h3>
                <p className="mt-1 text-[#2E2E2E] text-xs">
                  Badanie USG jamy brzusznej obejmujące nerki, drogi moczowe,
                  płuca, naczynia oraz przetoki i grafty do hemodializ.
                </p>
              </div>
              <div className="flex justify-end">
                <Link href="/dentist">
                  <Button className="mt-4 mobile-2:mt-12">
                    dowiedz się więcej
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
