import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

function SearchNav() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const wrapperRef = useRef(null);
  const navigate = useNavigate();

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  function handleSubmit(e) {
    if (e.key === "Enter" && query) {
      e.preventDefault();
      navigate(`/search/${encodeURIComponent(query.trim())}`);
    }
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef}>
      {isOpen ? (
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleSubmit}
        />
      ) : (
        <button className="btn btn-ghost btn-circle" onClick={handleToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />{" "}
          </svg>
        </button>
      )}
    </div>
  );
}

export default SearchNav;
