import { IconCircle } from "@/components/IconCircle";
import { BackIcon } from "@/components/icons/BackIcon";
import { ToothIcon } from "@/components/icons/ToothIcon";

export default function Home() {
  return (
    <div className="p-8 flex flex-col items-center gap-8">
      <h1 className="text-2xl font-bold">IconCircle Component Showcase</h1>

      <div className="flex flex-col items-center gap-12 w-full max-w-3xl">
        <section className="space-y-4 w-full">
          <h2 className="text-xl font-medium border-b pb-2">All Sizes</h2>
          <div className="flex gap-4 items-center flex-wrap">
            <div className="flex flex-col items-center gap-2">
              <IconCircle icon={<BackIcon />} size="2xs" />
              <span className="text-sm text-gray-500">2xs (30px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconCircle icon={<ToothIcon />} size="xs" />
              <span className="text-sm text-gray-500">xs (38px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconCircle icon={<ToothIcon />} size="sm" />
              <span className="text-sm text-gray-500">sm (45px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconCircle icon={<ToothIcon />} size="md" />
              <span className="text-sm text-gray-500">md (50px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconCircle icon={<ToothIcon />} size="lg" />
              <span className="text-sm text-gray-500">lg (60px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconCircle icon={<ToothIcon />} size="xl" />
              <span className="text-sm text-gray-500">xl (75px)</span>
            </div>
          </div>
        </section>

        <section className="space-y-4 w-full">
          <h2 className="text-xl font-medium border-b pb-2">
            Different Colors
          </h2>
          <div className="flex gap-8 items-center">
            <div className="flex flex-col items-center gap-2">
              <IconCircle
                icon={<ToothIcon />}
                size="lg"
                backgroundColor="#FF6B6B"
              />
              <span className="text-sm text-gray-500">Red</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconCircle
                icon={<ToothIcon />}
                size="lg"
                backgroundColor="#4ECDC4"
              />
              <span className="text-sm text-gray-500">Teal</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconCircle
                icon={<ToothIcon />}
                size="lg"
                backgroundColor="#FFD93D"
              />
              <span className="text-sm text-gray-500">Yellow</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
