import { useEffect, useState } from "react";
import BlogCard from "../../components/common/BlogCard";
import SearchBar from "../../components/common/SearchBar";
import {
  useGetBlogCategoriesQuery,
  useGetBlogsQuery,
} from "../../store/reducers/apiSlice";
import { useLocation } from "react-router";

const MAX_NUM_RENDERS = 9;

const BlogsGallery = () => {
  const [query, setQuery] = useState([]); // Query que se enviará al back para traer los blogs filtrados por categoría
  const [numRenders, setNumRenders] = useState(1); // Número de veces que se a clickeado el boton "Cargar más"
  const [blogsGallery, setBlogsGallery] = useState(); // Los datos de los Blogs de la galería
  const { state: blogDetailsSearch } = useLocation();

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

  const handleLoadMore = () => setNumRenders(numRenders + 1);
  const handleRadioFilter = (event, categoryId) => {
    if (event.target.checked) {
      setQuery([...query, `categoryId=${categoryId}`]);
    } else {
      setQuery(query.filter((value) => !value.includes(categoryId)));
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

  return (
    <section className="flex flex-col pb-20">
      <header className="flex flex-col tablet:flex-row justify-between">
        <div className="flex flex-wrap w-full">
          {categories?.map((category) => (
            <CategoryRadio
              key={`blogs-category-filter-${category._id}`}
              id={category._id}
              name={category.name}
              onClick={() => handleRadioFilter(event, category._id)}
            />
          ))}
        </div>
        <div className="drop-shadow-lg flex justify-center">
          <SearchBar
            onSubmit={handleSearchBar}
            defaultValue={blogDetailsSearch}
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
                category={blog.blogCategoryId.name}
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
          className="lacampana-btn mt-10 bg-lacampana-red2 px-8 py-2 mb-5 text-white disabled:bg-lacampana-gray2"
        >
          Cargar más
        </button>
      </footer>
    </section>
  );
};

export default BlogsGallery;

const CategoryRadio = ({ id, name, onClick }) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer gap-2">
        <input
          onClick={onClick}
          type="checkbox"
          name={`radio-filter-news-${id}`}
          className="radio w-4 h-4 checked:bg-lacampana-red2"
        />
        <span className="text-p2-desktop">{name}</span>
      </label>
    </div>
  );
};
