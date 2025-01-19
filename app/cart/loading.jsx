'use client';
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="mt-14 container mx-auto min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-5 md:gap-4">
        {/* Cart Section Skeleton */}
        <div className="mb-4 md:col-span-3">
          <h1 className="text-center font-bold text-2xl mb-2">Cart</h1>

          {/* Skeleton for empty cart */}
          <div className="flex flex-col items-center justify-center h-full rounded-lg">
            <Skeleton className="w-20 h-20 rounded-full mb-4" />
            <Skeleton className="w-48 h-6 mb-2" />
            <Skeleton className="w-64 h-4 mb-4" />
            <Skeleton className="w-36 h-10 rounded-lg" />
          </div>

          {/* Skeleton for cart with items */}
          <div className="hidden md:block">
            <table className="w-full table-fixed text-center text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-2">
                    <Skeleton className="w-16 h-6" />
                  </th>
                  <th className="py-2">
                    <Skeleton className="w-16 h-6" />
                  </th>
                  <th className="py-2">
                    <Skeleton className="w-16 h-6" />
                  </th>
                  <th className="py-2">
                    <Skeleton className="w-16 h-6" />
                  </th>
                  <th className="py-2">
                    <Skeleton className="w-16 h-6" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...Array(3)].map((_, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="py-6">
                      <div className="flex items-center justify-center gap-4">
                        <Skeleton className="w-16 h-16 rounded-md" />
                        <Skeleton className="w-24 h-6" />
                      </div>
                    </td>
                    <td>
                      <Skeleton className="w-14 h-8" />
                    </td>
                    <td>
                      <Skeleton className="w-16 h-6" />
                    </td>
                    <td>
                      <Skeleton className="w-16 h-6" />
                    </td>
                    <td>
                      <Skeleton className="w-6 h-6 rounded-full" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Section Skeleton */}
        <div className="mx-10 mt-4 md:mt-0 md:col-span-2 text-sm">
          <div className="flex flex-col gap-1">
            <h1 className="text-center font-bold text-lg border-b-2 mb-4 pb-3">Summary</h1>
            {[...Array(3)].map((_, index) => (
              <div className="flex justify-between" key={index}>
                <Skeleton className="w-24 h-6" />
                <Skeleton className="w-16 h-6" />
              </div>
            ))}
            <div className="flex justify-between border-b-2 pb-4">
              <Skeleton className="w-24 h-6" />
              <Skeleton className="w-16 h-6" />
            </div>
            <div className="flex justify-between py-2">
              <Skeleton className="w-24 h-6" />
              <Skeleton className="w-16 h-6" />
            </div>
            <div className="mt-4">
              <Skeleton className="w-full h-10 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
