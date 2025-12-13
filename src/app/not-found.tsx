import Link from "next/link";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-bold text-dark-gray mb-4">
        Strona nie znaleziona
      </h2>
      <p className="text-gray-600 mb-6 max-w-md">
        Przepraszamy, strona której szukasz nie istnieje.
      </p>
      <Link href="/">
        <Button>Wróć na stronę główną</Button>
      </Link>
    </div>
  );
}
