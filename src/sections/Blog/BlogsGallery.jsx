import { useEffect, useState } from "react";
import BlogCard from "../../components/common/BlogCard";
import SearchBar from "../../components/common/SearchBar";
import {
  useGetBlogCategoriesQuery,
  useGetBlogsQuery,
} from "../../store/reducers/apiSlice";
import { useLocation } from "react-router";
import RadioSelect from "../../components/common/RadioSelect";

const MAX_NUM_RENDERS = 9;

const BlogsGallery = () => {
  const [query, setQuery] = useState([]); // Query que se enviará al back para traer los blogs filtrados por categoría
  const [numRenders, setNumRenders] = useState(1); // Número de veces que se a clickeado el boton "Cargar más"
  const [blogsGallery, setBlogsGallery] = useState(); // Los datos de los Blogs de la galería
  const { state: blogDetailsSearch } = useLocation();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const {
    data: categories,
    error: errorCategories,
    isLoading: isLoadingCategories,
  } = useGetBlogCategoriesQuery();

  const {
    data: blogs,
    error: errorBlogs,
    isLoading: isLoadingBlogs,
  } = useGetBlogsQuery(`${query.length ? "?" : ""}${query.join("&")}`);

  useEffect(() => {
    if (blogs) {
      setBlogsGallery(blogs.slice(0, MAX_NUM_RENDERS * numRenders));
    }
  }, [numRenders, blogs]);
  useEffect(() => {
    if (blogDetailsSearch) {
      const searchTerm = blogDetailsSearch;
      handleSearchBar(searchTerm);

      setTimeout(() => {
        window.scrollTo({
          top: 950,
          behavior: "smooth",
        });
      }, 300);
    }
  }, []);
  useEffect(() => {
    if (blogDetailsSearch) {
      if (blogDetailsSearch.startsWith("categoryId=")) {
        const categoryId = blogDetailsSearch.split("=")[1];
        handleRadioChange(categoryId);
        setSelectedCategory(categoryId); // Marcar el radio visualmente
      } else {
        handleSearchBar(blogDetailsSearch);
      }

      setTimeout(() => {
        window.scrollTo({ top: 950, behavior: "smooth" });
      }, 300);
    }
  }, []);

  const handleLoadMore = () => setNumRenders(numRenders + 1);
  const handleRadioChange = (categoryId) => {
    setSelectedCategory(categoryId);

    if (categoryId === "clear-filters") {
      setQuery([]);
    } else {
      setQuery([`categoryId=${categoryId}`]);
    }
  };
  const handleSearchBar = (searchTerm) => {
    const keywordParam = query.find((queryParam) =>
      queryParam.includes("keyword")
    );
    const newQuery = query.filter((queryParam) => queryParam !== keywordParam);

    setQuery([...newQuery, `keyword=${searchTerm}`]);
  };

  if (isLoadingBlogs) return <p>Cargando...</p>;
  if (errorBlogs) return <p>Error al cargar los datos.</p>;
  if (isLoadingCategories) return <p>Cargando...</p>;
  if (errorCategories) return <p>Error al cargar los datos.</p>;

  const cleanFilterCategory = {
    _id: "clear-filters",
    name: "Todos",
  };
  const allCategories = [...categories, cleanFilterCategory];
  const filteredCategories = allCategories.filter(
    (category) => category.name.toLowerCase() !== "uncategorized"
  );


  return (
    <section className="flex flex-col pb-20">
      <header className="flex flex-col tablet:flex-row justify-between">
        <div className="flex flex-wrap w-full">
          <RadioSelect
            options={filteredCategories.map((category) => ({
              value: category._id,
              label: category.name,
            }))}
            selectedOption={selectedCategory}
            onSelectionChange={handleRadioChange}
            bgColorSelected="bg-lacampana-red2"
            borderColorSelected="border-lacampana-red2"
          />
        </div>
        <div className="drop-shadow-lg flex justify-center">
          <SearchBar
            onSubmit={handleSearchBar}
            defaultValue=""
            placeholder="Buscar noticia..."
          />
        </div>
      </header>
      <main>
        {!blogsGallery?.length && (
          <div className="py-32">
            <h2>No se encontraron resultados para la búsqueda...</h2>
          </div>
        )}
        <div className="flex flex-wrap justify-center gap-2 w-full mt-10">
          {blogsGallery?.map((blog) => (
            <article key={`blog-card-${blog._id}`} className="">
              <BlogCard
                id={blog._id}
                title={blog.name}
                description={blog.body}
                category={
                  blog.blogCategoryId
                    ? blog.blogCategoryId.name
                    : "Categoría no disponible"
                }
                image={blog.image}
                publicationDate={blog.createdAt}
                blogsGallery={true}
              />
            </article>
          ))}
        </div>
      </main>
      <footer>
        <button
          disabled={MAX_NUM_RENDERS * numRenders >= blogs?.length}
          onClick={handleLoadMore}
          className="lacampana-btn mt-10 bg-lacampana-red2 px-8 py-2 mb-5 text-white disabled:bg-lacampana-gray2 md:pb-2 transition duration-300 ease-in-out hover:scale-90"
        >
          Cargar más
        </button>
      </footer>
    </section>
  );
};

export default BlogsGallery;

// const CategoryRadio = ({ id, name, onClick, isChecked }) => {
//   return (
//     <div className="form-control">
//       <label className="label cursor-pointer gap-2">
//         <input
//           onClick={(event) => onClick(event, id)}
//           type="checkbox"
//           name={`radio-filter-news-${id}`}
//           className="radio w-4 h-4 border-2 checked:border-lacampana-red2"
//           checked={isChecked}
//         />
//         <div className="custom-radio">
//           {isChecked && <span className="inner-circle" />}
//         </div>
//         <span className="text-p2-desktop">{name}</span>
//       </label>
//     </div>
//   );
// };
