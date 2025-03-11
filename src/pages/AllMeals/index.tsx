import { useState } from "react";
import ReactPaginate from "react-paginate";
import { v4 as uuid } from "uuid";
import { Sizes } from "../../@types/sizes";
import { Dropdown } from "../../components/Dropdown";
import { IDropdownItem } from "../../components/Dropdown/types";
import { Loader } from "../../components/Loader";
import { useCategories } from "../../hooks/useCategories";
import { useMeals } from "../../hooks/useMeals";
import { MealsList } from "../../page-components/all-meals/MealsList";

const ITEMS_PER_PAGE = 9;

const AllMeals = () => {
  const { data: categories, isLoading: categoriesLoading } = useCategories();
  const { data: meals, isLoading: mealsLoading } = useMeals(categories || []);

  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCategory, setSelectedCategory] =
    useState<IDropdownItem | null>(null);

  if (categoriesLoading || mealsLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader size={Sizes.XXL} />
      </div>
    );

  if (!meals || !categories) {
    return <p>Meals not found</p>;
  }

  const filteredMeals = selectedCategory
    ? meals.filter((meal) => meal.strCategory === selectedCategory.slug)
    : meals;

  const offset = currentPage * ITEMS_PER_PAGE;
  const currentItems = filteredMeals.slice(offset, offset + ITEMS_PER_PAGE);
  const pageCount = Math.ceil(filteredMeals.length / ITEMS_PER_PAGE);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const categoriesDropdownItems: IDropdownItem[] =
    categories.map((item) => ({
      id: uuid(),
      slug: item,
      label: item,
    })) ?? [];

  const handleCategoryChange = (categoryItem: IDropdownItem) => {
    setSelectedCategory(categoryItem);
    setCurrentPage(0);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="mb-4 text-2xl font-bold text-white">All Meals</h2>

      <div className="mb-4">
        <Dropdown
          items={categoriesDropdownItems}
          onItemClick={handleCategoryChange}
          currentItem={selectedCategory}
          initialLabel="Select category"
        />
      </div>

      <MealsList mealsList={currentItems} />

      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"flex justify-center space-x-2 mt-6 text-white"}
        pageClassName={
          "px-3 text-black bg-white py-1 border rounded-md cursor-pointer"
        }
        activeClassName={"!bg-blue-500 text-black"}
        previousClassName={
          "bg-white px-3 text-black py-1 border rounded-md cursor-pointer"
        }
        nextClassName={
          "bg-white text-black px-3 py-1 border rounded-md cursor-pointer"
        }
        disabledClassName={"bg-white opacity-50 cursor-not-allowed"}
      />
    </div>
  );
};

export default AllMeals;
