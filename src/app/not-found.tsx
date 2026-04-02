import Link from "next/link";
import { Button } from "@/components/Button";
import { ToothRunner } from "@/components/ToothRunner";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-6xl font-bold text-primary mb-2">404</h1>
      <p className="text-gray-500 mb-4 text-sm">
        Tej strony nie znaleźliśmy... ale może pobijsz rekord?
      </p>
      <ToothRunner />
      <div className="mt-4">
        <Link href="/">
          <Button>Wróć na stronę główną</Button>
        </Link>
      </div>
    </div>
  );
}
