'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { IconSearch } from '@tabler/icons-react';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(`Searching... ${term}`);

    const params = new URLSearchParams(searchParams);

    params.set('page', '1');

    if (term) {
      params.set('name', term);
    } else {
      params.delete('name');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 400);

  return (
    <div className="relative w-80">
      <div className="relative">
        <input
          className="w-full px-4 py-3 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 pl-10"
          placeholder={placeholder}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get('name')?.toString()}
        />
        <IconSearch className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500"/>
      </div>
    </div>
  );
}
