function Tags({ tags, variant = "primary" }) {
  return (
    <>
      {tags.map((tag) => (
        <span key={tag} className={`badge badge-${variant} mr-1 mb-1`}>
          {tag}
        </span>
      ))}
    </>
  );
}

export default Tags;
