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
          className="relative flex items-center gap-2 px-4 py-2 bg-slate-800 border-slate-700 hover:bg-slate-700 hover:border-teal-500 text-white rounded-full transition-all"
        >
          <Filter className="w-5 h-5" />
          {/* <span className="hidden sm:inline">Filter</span> */}
          {hasActiveFilters && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-teal-500 rounded-full border-2 border-slate-900"></span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-80 bg-slate-800 border-slate-700 text-white p-0" 
        align="end"
        sideOffset={8}
      >
        {children}
      </PopoverContent>
    </Popover>
  );
};

export default FilterDialog;
