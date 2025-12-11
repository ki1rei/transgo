"use client";
import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const SearchBar = ({ onSearch, placeholder = "Cari dokumen..." }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleCollapse = () => {
    setIsExpanded(false);
    setSearchValue('');
    if (onSearch) onSearch('');
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (onSearch) onSearch(value);
  };

  return (
    <div className="relative">
      {!isExpanded ? (
        // Collapsed state - just a button
        <Button
          onClick={handleExpand}
          variant="outline"
          size="icon"
          className="rounded-full bg-slate-800 border-slate-700 hover:bg-slate-700 hover:border-teal-500 transition-all w-9 h-9 sm:w-10 sm:h-10"
        >
          <Search className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </Button>
      ) : (
        // Expanded state - search input with animation
        <div className="flex items-center gap-2 animate-in fade-in slide-in-from-right-5 duration-300">
          <div className="relative">
            <Input
              type="text"
              placeholder={placeholder}
              value={searchValue}
              onChange={handleChange}
              autoFocus
              className="pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 bg-slate-800 text-white rounded-full border-slate-700 focus:border-teal-500 focus-visible:ring-teal-500/20 transition-all w-40 sm:w-64 text-sm sm:text-base"
            />
            <Search className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
          </div>
          <Button
            onClick={handleCollapse}
            variant="outline"
            size="icon"
            className="rounded-full bg-slate-800 border-slate-700 hover:bg-slate-700 hover:border-red-500 transition-all w-9 h-9 sm:w-10 sm:h-10"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
