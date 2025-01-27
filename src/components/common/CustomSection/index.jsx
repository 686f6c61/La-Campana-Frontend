import React from "react";

const CustomSection = ({
  title,
  highlight,
  children,
  padding = "p-8",
  margin = "mb-4",
  textColor = "text-gray-500",
  highlightColor = "text-red-500",
}) => {
  return (
    <div className={`lg:w-[3/4] ${padding}`}>
      <h4 className={`text-3xl font-bold ${margin} text-left`}>
        {title} <span className={highlightColor}>{highlight}</span>
      </h4>
      <p className={`${textColor} lg:max-w-2xl text-left`}>{children}</p>
    </div>
  );
};

export default CustomSection;
