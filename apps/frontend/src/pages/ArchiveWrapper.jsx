import { useParams } from "react-router-dom";
import Arhive from "./Archive";

function ArchiveWrapper() {
  const { category, page } = useParams();
  const currentPage = parseInt(page) || 1;

  return <Arhive category={category} page={currentPage} />;
}

export default ArchiveWrapper;
