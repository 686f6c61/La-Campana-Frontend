const TitleAndParagraph = ({ title, children, showOnSmall = true, showOnLarge = true }) => {
    return (
      <div
        className={`w-full mx-auto my-8 px-4 md:px-8 text-left 
        ${showOnSmall ? "" : "hidden md:block"} 
        ${showOnLarge ? "md:block" : "md:hidden"}`}
      >
        <h2 className="text-2xl font-bold text-lacampana-gray1 mb-6 font-antonio">
          {title}
        </h2>
        <p className="text-gray-600 text-lg mb-10">{children}</p>
      </div>
    );
  };
  
  export default TitleAndParagraph;
  