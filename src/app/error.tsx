"use client";

import { useEffect } from "react";
import { Button } from "@/components/Button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Logowanie błędu do serwisu monitoringu (np. Sentry)
    if (process.env.NODE_ENV === "development") {
      console.error("Application error:", error);
    }
    // W produkcji można tu dodać integrację z Sentry, LogRocket itp.
  }, [error]);

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center text-center p-4">
      <h2 className="text-2xl font-bold text-dark-gray mb-4">
        Ups! Coś poszło nie tak
      </h2>
      <p className="text-gray-600 mb-6 max-w-md">
        Przepraszamy za niedogodności. Proszę spróbować ponownie.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => reset()}>Spróbuj ponownie</Button>
        <Button onClick={() => (window.location.href = "/")}>
          Wróć na stronę główną
        </Button>
      </div>
    </div>
  );
}
