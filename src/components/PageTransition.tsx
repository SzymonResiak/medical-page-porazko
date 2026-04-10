"use client";

import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();

  return (
    <div key={pathname} className="page-fade-in flex flex-col gap-6 desktop:gap-8 desktop-lg:gap-[50px] desktop-lg:pb-[40px]">
      {children}
    </div>
  );
};
