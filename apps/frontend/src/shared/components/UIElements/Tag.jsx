function Tags({ tags }) {
  return (
    <>
      {tags.map((tag) => (
        <div key={tag} className="badge badge-primary">
          {tag}
        </div>
      ))}
    </>
  );
}

export default Tags;
