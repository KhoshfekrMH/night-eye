import { useParams } from "react-router-dom";
import Archive from "./Archive";

function SearchWrapper() {
  const { query } = useParams();
  return <Archive type="search" query={query} />;
}

export default SearchWrapper;
