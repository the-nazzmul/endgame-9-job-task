/* eslint-disable react/prop-types */
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const SortByPrice = ({ setSort }) => {
  return (
    <div className="lg:max-w-sm">
      <Select onValueChange={(value) => setSort(value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Sort by price" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="asc">Low to High</SelectItem>
          <SelectItem value="desc">High to Low</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortByPrice;
