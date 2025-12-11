"use client";
import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const FilterDialog = ({ children, hasActiveFilters = false }) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="relative flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-800 border-slate-700 hover:bg-slate-700 hover:border-teal-500 text-white rounded-full transition-all h-9 sm:h-10"
        >
          <Filter className="w-4 h-4 sm:w-5 sm:h-5" />
          {/* <span className="hidden sm:inline">Filter</span> */}
          {hasActiveFilters && (
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-teal-500 rounded-full border-2 border-slate-900"></span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-72 sm:w-80 bg-slate-800 border-slate-700 text-white p-0" 
        align="end"
        sideOffset={8}
      >
        {children}
      </PopoverContent>
    </Popover>
  );
};

export default FilterDialog;
