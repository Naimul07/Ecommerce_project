'use client'

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mt-14 mx-auto flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md space-y-6">
        {/* Skeleton for title */}
        <Skeleton className="h-6 w-1/3 mx-auto" />

        {/* Skeleton for email field */}
        <Skeleton className="h-12 w-full" />

        {/* Skeleton for password field */}
        <Skeleton className="h-12 w-full" />

        {/* Skeleton for submit button */}
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
}
