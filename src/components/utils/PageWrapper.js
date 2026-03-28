"use client";

import { usePathname } from "next/navigation";

export default function PageWrapper({ children }) {
  const pathname = usePathname();

  return (
    <main key={pathname} className="flex-grow w-full">
      {children}
    </main>
  );
}
