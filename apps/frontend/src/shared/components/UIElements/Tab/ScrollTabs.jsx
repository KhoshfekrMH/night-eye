function ScrollTabs({ categories = [] }) {
  return (
    <div className="flex justify-center">
      <div role="tablist" className="tabs tabs-bordered">
        {categories.map((category, index) => (
          <a
            key={index}
            href={`#${category.toLowerCase()}`}
            role="tab"
            className="tab text-2xl capitalize"
          >
            {category}
          </a>
        ))}
      </div>
    </div>
  );
}

export default ScrollTabs;
