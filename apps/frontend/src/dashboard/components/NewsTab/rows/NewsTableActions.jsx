import { Link } from "react-router-dom";
import { Eye, SquarePen, Delete, Archive } from "lucide-react";

export default function NewsTableActions({
  newsItem,
  onEdit,
  onDelete,
  onArchive,
  mode = "row",
}) {
  return (
    <div
      className={
        mode === "row" ? "flex flex-col gap-2 itemsstart" : "flex gap-2"
      }
    >
      <Link
        className="btn btn-ghost btn-xs text-secondary"
        to={`/news/${newsItem?.slug ?? "#"}`}
      >
        <Eye />
        View
      </Link>
      <button
        className="btn btn-ghost btn-xs text-accent"
        onClick={() => onEdit?.(newsItem)}
      >
        <SquarePen />
        Edit
      </button>
      <button
        className="btn btn-ghost btn-xs text-error"
        onClick={() => onDelete?.(newsItem)}
      >
        <Delete />
        Delete
      </button>
      <button
        className="btn btn-ghost btn-xs text-warning"
        onClick={() => onArchive?.(newsItem)}
      >
        <Archive />
        Archive
      </button>
    </div>
  );
}
