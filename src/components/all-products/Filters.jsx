/* eslint-disable react/prop-types */
import { FilterIcon, RotateCwIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { totalBrands, totalCategories } from "../../lib/constants";


const FiltersSidebar = ({ setBrand, setCategory, handleReset }) => {
  return (
    <div className="w-full flex flex-col gap-6 min-h-screen lg:p-12 px-4 py-32">
      <h3 className="text-lg font-bold lg:flex items-center hidden">
        <FilterIcon size={18} className="mr-2" />
        Filters
      </h3>
      {/* brand */}
      <div>
        <Select
          onValueChange={(value) => {
            if (value === "All Brands") {
              setBrand("");
            } else {
              setBrand(value);
            }
          }}
          className="w-full"
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Brand" />
          </SelectTrigger>
          <SelectContent>
            {totalBrands.map((item) => (
              <SelectItem key={item.id} value={item.name}>
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {/* category */}
      <div>
        <Select
          onValueChange={(value) => {
            if (value === "All Categories") {
              setCategory("");
            } else {
              setCategory(value);
            }
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Categories" />
          </SelectTrigger>
          <SelectContent>
            {totalCategories.map((item) => (
              <SelectItem key={item.id} value={item.name}>
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Button className="flex gap-2 w-full" onClick={handleReset}>
          <RotateCwIcon size={18} /> Reset
        </Button>
      </div>
    </div>
  );
};

export default FiltersSidebar;
