import { CircleIcon } from "@/components/icon";

export default function Home() {
  return (
    <div className="p-8 flex flex-col items-center gap-8">
      <h1 className="text-2xl font-bold">Icon Component Test</h1>
      
      <div className="flex flex-col items-center">
        <h2 className="text-xl mb-4">Tooth Icon in Circle</h2>
        <CircleIcon 
          src="/icons/tooth.svg"
          alt="Tooth icon"
          bgClassName="bg-red-500 w-16 h-16"
          className="p-3"
          size={32}
        />
      </div>
    </div>
  );
}
