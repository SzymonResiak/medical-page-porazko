import { SpecialistCards } from "@/components/SpecialistCards";

export default function Home() {
  return (
    <div className="max-w-4xl desktop-2:max-w-full mx-auto">
      <h1 className="text-xl tablet:text-4xl desktop:text-[3.5rem] font-bold text-center p-3 mb-4 tablet:mb-12 text-[#2E2E2E]">
        Jakiego wsparcia zdrowotnego potrzebujesz?
      </h1>

      <div className="grid gap-5 justify-center mb-8">
        <SpecialistCards />
      </div>
    </div>
  );
}
