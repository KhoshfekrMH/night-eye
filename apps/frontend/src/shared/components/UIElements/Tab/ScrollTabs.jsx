function scrolltabs({ tags = [] }) {
  return (
    <div className="flex justify-center mt-4">
      <div role="tablist" className="tabs tabs-bordered">
        {tags.map((tag, index) => (
          <a
            key={index}
            href={`#${tag.toLowerCase()}`}
            role="tab"
            className="tab"
          >
            {tag}
          </a>
        ))}
      </div>
    </div>
  );
}

export default scrolltabs;
