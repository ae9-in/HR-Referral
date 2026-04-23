import React from 'react';
import { Search } from 'lucide-react';

export const SearchLine = () => {
  return (
    <div className="relative w-full max-w-md float">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="search"
        placeholder="Search..."
        className="w-full pl-10 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8B1414]/20 bg-[#FAFAF7] text-sm"
      />
    </div>
  );
};
