const ContentSection = ({ sections }) => {
  return (
    <div className="mt-8 space-y-12 px-4 desktop:px-8 ml-80 mr-80 pb-20 text-left">
      {sections.map((section, index) => (
        <div key={index}>
          <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
          {Array.isArray(section.content) ? (
            section.content.map((paragraph, pIndex) => (
              <p
                key={pIndex}
                className="text-lg leading-relaxed text-gray-700 mb-4"
              >
                {paragraph}
              </p>
            ))
          ) : (
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              {section.content}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContentSection;
