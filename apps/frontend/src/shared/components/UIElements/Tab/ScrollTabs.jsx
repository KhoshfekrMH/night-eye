function scrolltabs({ categories = [] }) {
  return (
    <div className="flex justify-center mt-4">
      <div role="tablist" className="tabs tabs-bordered">
        {categories.map((category, index) => (
          <a
            key={index}
            href={`#${category.toLowerCase()}`}
            role="tab"
            className="tab"
          >
            {category}
          </a>
        ))}
      </div>
    </div>
  );
}

export default scrolltabs;
