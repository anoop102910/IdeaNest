"use client";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback(e => {
    const params = new URLSearchParams(searchParams);
    const value = e.target.value;
    if (value) {
      params.set("q", e.target.value);
    } else params.delete("q");

    replace(`${pathname}?${params.toString()}`);
  }, 300);
  
  return (
    <div>
      <input
        className=" bg-inherit outline-none border border-slate-100 w-80   text-slate-100  rounded-md shadow-md "
        placeholder="Search..."
        type="search"
        onChange={handleSearch}
        defaultValue={searchParams.get("q")?.toString()}
      />
    </div>
  );
}

export default SearchInput;
