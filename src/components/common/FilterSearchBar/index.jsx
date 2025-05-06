import React, { useState, useRef, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../../../store/reducers/categorySlice";

const BreadCrumbs = () => {
  const location = useLocation();
  const { categoryId } = useParams();
  
  // Format the category name for display
  const formatCategoryName = (categoryName) => {
    if (!categoryName) return '';
    return categoryName.charAt(0).toUpperCase() + categoryName.slice(1).toLowerCase();
  };

  return (
    <div className="flex justify-center">
      <ol className="list-reset py-4 pl-4 rounded flex bg-grey-light text-lacampana-gray2">
        <li className="px-2">
          <a href="/" className="no-underline text-open-sans text-sm hover:text-lacampana-red2">
            Inicio
          </a>
        </li>
        <li>/</li>
        <li className="px-2">
          <a href="/tienda" className="no-underline text-open-sans text-sm hover:text-lacampana-red2">
            Tienda
          </a>
        </li>
        {categoryId && (
          <>
            <li>/</li>
            <li className="px-2 text-open-sans hover:text-lacampana-red2">{formatCategoryName(categoryId)}</li>
          </>
        )}
      </ol>
    </div>
  );
};

const FilterSearchBar = ({ 
  onFilterClick, 
  onSearchSubmit
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const searchInputRef = useRef(null);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categoryId || "");
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  
  // Predefined categories
  const categories = [
    { id: "laminas", name: "Láminas" },
    { id: "tuberias", name: "Tuberías" },
    { id: "perfil", name: "Perfil" },
    { id: "entrepiso", name: "Entrepiso" },
    { id: "viga", name: "Viga" },
    { id: "tejas", name: "Tejas" }
  ];
  
  // Actualizar selectedCategory cuando cambia el parámetro de URL
  useEffect(() => {
    setSelectedCategory(categoryId || "");
  }, [categoryId]);
  
  // Get search query from URL params to use as default value
  const searchParams = new URLSearchParams(location.search);
  const defaultSearchValue = searchParams.get('search') || '';

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchValue = searchInputRef.current.value.trim();
    
    // Update the search parameters
    const newSearchParams = new URLSearchParams(location.search);
    if (searchValue) {
      newSearchParams.set('search', searchValue);
    } else {
      newSearchParams.delete('search');
    }
    
    // Determine where to navigate based on whether a category is selected
    let navigatePath;
    if (selectedCategory) {
      navigatePath = `/categoria/${selectedCategory}`;
    } else {
      navigatePath = "/tienda";
    }
    
    // Navigate with search parameters
    const queryString = newSearchParams.toString();
    navigate(`${navigatePath}${queryString ? `?${queryString}` : ''}`);
    
    // Call the callback if provided
    if (onSearchSubmit) {
      onSearchSubmit(searchValue);
    }
  };

  const handleFilterClick = () => {
    setIsFilterActive(!isFilterActive);
    setShowCategoryMenu(!showCategoryMenu);
    if (onFilterClick) {
      onFilterClick(!isFilterActive);
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowCategoryMenu(false);
    
    // Update Redux store with selected category
    dispatch(setSelectedCategory(category));
    
    // Construct the new URL with the selected category and existing search
    const newSearchParams = new URLSearchParams(location.search);
    const searchValue = newSearchParams.get('search');
    
    let navigatePath;
    if (category) {
      // Asegurarse de que estamos navegando a la categoría específica
      navigatePath = `/categoria/${category}`;
    } else {
      navigatePath = "/tienda";
    }
    
    // Navigate with preserved search parameters
    navigate(`${navigatePath}${searchValue ? `?search=${searchValue}` : ''}`);
  };

  // Format the category name for display
  const formatCategoryName = (categoryName) => {
    if (!categoryName) return '';
    return categoryName.charAt(0).toUpperCase() + categoryName.slice(1).toLowerCase();
  };

  const getCategoryNameById = (id) => {
    const category = categories.find(cat => cat.id === id);
    return category ? category.name : id;
  };

  return (
    <div>
      <BreadCrumbs />
      <div className="flex flex-col">
        <div className="flex">
          <div className="w-2/6 text-center relative">
            <button
              className={`${
                isFilterActive ? 'bg-lacampana-red2' : 'bg-lacampana-red2'
              } text-white px-10 py-2 rounded-tl-full rounded-bl-full rounded-tr-full hover:bg-red-600`}
              onClick={handleFilterClick}
            >
              {selectedCategory ? formatCategoryName(getCategoryNameById(selectedCategory)) : "Filtro"}
            </button>
            
            {/* Dropdown menu for categories */}
            {showCategoryMenu && (
              <div className="absolute left-0 mt-1 w-full bg-white shadow-lg rounded-md z-10">
                <ul className="py-1">
                  <li 
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleCategorySelect("")}
                  >
                    Todas las categorías
                  </li>
                  {categories.map((category) => (
                    <li 
                      key={category.id}
                      className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                        selectedCategory === category.id ? "bg-gray-100 font-semibold" : ""
                      }`}
                      onClick={() => handleCategorySelect(category.id)}
                    >
                      {formatCategoryName(category.name)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <form onSubmit={handleSearchSubmit} className="relative w-4/6 pr-2">
            <input
              type="text"
              placeholder="Buscar producto"
              className="w-full p-2 pr-10 rounded-tl-full rounded-bl-full rounded-tr-full bg-gray-100 focus:outline-none"
              ref={searchInputRef}
              defaultValue={defaultSearchValue}
            />
            <button 
              type="submit"
              className="absolute right-0 top-0 h-full w-12 flex items-center justify-center rounded-tl-full rounded-bl-full rounded-tr-full hover:bg-red-300"
            >
              <FiSearch className="text-black text-lg" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FilterSearchBar;