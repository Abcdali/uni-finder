import React from "react";

export default function ShimmerCard() {
  return (
    <div className="animate-pulse bg-white rounded-xl shadow-md overflow-hidden">

   
      <div className="h-48 bg-gray-300"></div>

      <div className="p-4 space-y-3">

        <div className="h-4 bg-gray-300 rounded w-3/4"></div>

        <div className="h-3 bg-gray-200 rounded w-1/2"></div>

        <div className="h-3 bg-gray-200 rounded w-2/3"></div>

        <div className="flex gap-2 mt-4">
          <div className="h-6 w-16 bg-gray-300 rounded"></div>
          <div className="h-6 w-20 bg-gray-300 rounded"></div>
        </div>

        <div className="h-6 w-24 bg-orange-200 rounded"></div>
      </div>
    </div>
  );
}