
import axios from "axios";
import { useEffect, useState } from "react";
import { ArrowBigLeft, ArrowBigRight, FilterIcon } from "lucide-react";
import SearchBar from "../components/all-products/SearchBar";
import SortByPrice from "../components/all-products/Sort";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import FiltersSidebar from "../components/all-products/Filters";
import LoadingSpinner from "../components/LoadingSpinner";
import SingleProduct from "../components/SingleProduct";
import { Button } from "../components/ui/button";

const AllProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [sort, setSort] = useState("asc");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    setPage(1);
    e.target.search.value = "";
  };

  useEffect(() => {
    setIsLoading(true);
    const fetch = async () => {
      const result = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }api/products?name=${search}&page=${page}&limit=${9}&sort=${sort}&category=${category}&brand=${brand}`
      );
      setProducts(result.data.products);
      setTotalPages(Math.ceil(result.data.total / 9));
      setIsLoading(false);
    };

    fetch();
  }, [search, category, brand, sort, page]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleReset = () => {
    setSearch("");
    setCategory("");
    setBrand("");
    setSort("asc");
    setPage(1);
    window.location.reload();
  };

  return (
    <div className=" container mx-auto pt-24">
      {/* Search and sort*/}
      <div className="lg:flex space-y-4 lg:space-y-0 justify-between items-center w-full">
        <SearchBar handleSearch={handleSearch} />
        <SortByPrice setSort={setSort} />
      </div>

      {/* Product rendering */}
      {search !== "" && (
        <p className="mt-2">
          Search result for{" "}
          <span className="text-md font-semibold italic text-red-500">
            {search}
          </span>
        </p>
      )}

      <div className="grid lg:grid-cols-12 lg:mt-12 mt-4">
        {/* sidebar for filters */}
        <div className="lg:hidden mb-4">
          <Sheet>
            <SheetTrigger>
              <Button size="sm" className="text-lg font-bold flex items-center">
                <FilterIcon size={16} className="mr-2" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="lg:hidden flex flex-col gap-6 items-center px-0  bg-slate-100"
            >
              <FiltersSidebar
                setBrand={setBrand}
                setCategory={setCategory}
                handleReset={handleReset}
              />
            </SheetContent>
          </Sheet>
        </div>

        <div className="lg:col-span-3 hidden lg:block bg-slate-100 rounded-t-md">
          <FiltersSidebar
            setBrand={setBrand}
            setCategory={setCategory}
            handleReset={handleReset}
          />
        </div>
        {/* products rendering */}
        {isLoading ? (
          <div className="col-span-9">
            <LoadingSpinner />
          </div>
        ) : (
          <>
            {products.length === 0 ? (
              <div className="lg:col-span-9 flex mt-32 justify-center">
                <h1 className="text-red-500 font-bold text-4xl">
                  No products found!
                </h1>
              </div>
            ) : (
              <div className="lg:col-span-9">
                <div className="min-h-screen">
                  {products ? (
                    <div className="grid lg:grid-cols-3 lg:gap-3 lg:px-4 gap-2 ">
                      {products.map((product) => (
                        <SingleProduct key={product._id} product={product} />
                      ))}
                    </div>
                  ) : (
                    <LoadingSpinner />
                  )}
                </div>
                <div className="flex justify-center items-center my-8">
                  <Button
                    className="rounded-full"
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 1}
                  >
                    <ArrowBigLeft />
                  </Button>
                  <span className="mx-2">
                    Page {page} of {totalPages}
                  </span>
                  <Button
                    className="rounded-full"
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page === totalPages}
                  >
                    <ArrowBigRight />
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Pagination */}
    </div>
  );
};

export default AllProducts;
