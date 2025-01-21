import React, { useState } from "react";

const Sidebar = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      id: "drywall",
      name: "Perfiles Drywall",
      subcategories: [
        {
          title: "Subcategoría Título",
          items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
        },
        {
          title: "Subcategoría Título",
          items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
        },
        {
            title: "Subcategoría Título",
            items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
          },
          {
            title: "Subcategoría Título",
            items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
          },
          {
            title: "Subcategoría Título",
            items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
          },
      ],
      image: "public/images/steel-pipes-factory.png", // Cambia por tu URL de imagen
    },
    {
      id: "ornamentacion",
      name: "Perfiles Ornamentación",
      subcategories: [
        {
          title: "Subcategoría Título",
          items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
        },
        {
          title: "Subcategoría Título",
          items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
        },
        {
            title: "Subcategoría Título",
            items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
          },
          {
            title: "Subcategoría Título",
            items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
          },
          {
            title: "Subcategoría Título",
            items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
          },
      ],
      image: "public/images/steel-pipes-factory.png", // Cambia por tu URL de imagen
    },
    {
        id: "Tejas",
        name: "Tejas y Cubiertas",
        subcategories: [
          {
            title: "Subcategoría Título",
            items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
          },
          {
            title: "Subcategoría Título",
            items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
          },
          {
              title: "Subcategoría Título",
              items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
            },
            {
              title: "Subcategoría Título",
              items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
            },
            {
              title: "Subcategoría Título",
              items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
            },
        ],
        image: "public/images/steel-pipes-factory.png", // Cambia por tu URL de imagen
      },
      {
        id: "tuberias",
        name: "Tuberias",
        subcategories: [
          {
            title: "Subcategoría Título",
            items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
          },
          {
            title: "Subcategoría Título",
            items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
          },
          {
              title: "Subcategoría Título",
              items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
            },
            {
              title: "Subcategoría Título",
              items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
            },
            {
              title: "Subcategoría Título",
              items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
            },
        ],
        image: "public/images/steel-pipes-factory.png", // Cambia por tu URL de imagen
      },
      {
        id: "vigas",
        name: "Vigas y Perfiles",
        subcategories: [
          {
            title: "Subcategoría Título",
            items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
          },
          {
            title: "Subcategoría Título",
            items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
          },
          {
              title: "Subcategoría Título",
              items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
            },
            {
              title: "Subcategoría Título",
              items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
            },
            {
              title: "Subcategoría Título",
              items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
            },
        ],
        image: "public/images/steel-pipes-factory.png", // Cambia por tu URL de imagen
      },
      {
        id: "entrepisos",
        name: "Entrepisos",
        subcategories: [
          {
            title: "Subcategoría Título",
            items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
          },
          {
            title: "Subcategoría Título",
            items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
          },
          {
              title: "Subcategoría Título",
              items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
            },
            {
              title: "Subcategoría Título",
              items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
            },
            {
              title: "Subcategoría Título",
              items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
            },
        ],
        image: "public/images/steel-pipes-factory.png", // Cambia por tu URL de imagen
      },
      {
        id: "Laminas",
        name: "Laminas",
        subcategories: [
          {
            title: "Subcategoría Título",
            items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
          },
          {
            title: "Subcategoría Título",
            items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
          },
          {
              title: "Subcategoría Título",
              items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
            },
            {
              title: "Subcategoría Título",
              items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
            },
            {
              title: "Subcategoría Título",
              items: ["Lorem ipsum dolor sit amet", "Lorem ipsum", "Lorem ipsum dolor sit"],
            },
        ],
        image: "public/images/steel-pipes-factory.png", // Cambia por tu URL de imagen
      },
      
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="flex h-screen w-full relative">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md overflow-y-auto z-10">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl font-bold text-red-600">Categorías</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            ✕
          </button>
        </div>
        <nav>
          {categories.map((category) => (
            <div
              key={category.id}
              className={`p-4 cursor-pointer flex justify-between items-center ${
                activeCategory?.id === category.id
                  ? "bg-red-100 text-red-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              <span className="font-bold ">{category.name}</span>
              <span>→</span>
            </div>
          ))}
        </nav>
      </div>

      {activeCategory && (
        <div className="absolute left-64 top-0 h-full rounded-t  bg-gray-50 p-6 overflow-y-auto shadow-lg z-20 flex-grow">
          <div className="flex justify-between items-start mb-8">
            <h2 className="text-2xl font-antonio text-red-600">
              {activeCategory.name}
            </h2>
            <button className="text-gray-500 text-sm hover:text-gray-700">
              VER TODO
            </button>
          </div>
          <div className="grid grid-cols-12 gap-16 px-8">
          
            <div className="col-start-2 col-end-8 grid grid-cols-2 gap-8">
              {activeCategory.subcategories.map((subcategory, index) => (
                <div key={index}>
                  <h3 className="font-antonio text-lg mb-8">{subcategory.title}</h3>
                  <ul>
                    {subcategory.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          
            <div className=" lg:h-screen lg:w-60 flex bg-cover rounded-t lg:rounded-t-none lg:rounded-l">
              <img
                src={activeCategory.image}
                alt={activeCategory.name}
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
