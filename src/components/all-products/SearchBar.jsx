/* eslint-disable react/prop-types */
import { SearchIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const SearchBar = ({ handleSearch }) => {
  return (
    <form onSubmit={handleSearch} className="flex gap-1">
      <Input
        className="max-w-md"
        type="text"
        placeholder="Search products"
        name="search"
      />
      <Button type="submit">
        <SearchIcon size={20} />
      </Button>
    </form>
  );
};
 
export default SearchBar;