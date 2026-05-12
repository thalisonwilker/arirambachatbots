"use client";
// This client component ensures FA icons are registered in the browser
import "@/lib/fa";

export function FAProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
