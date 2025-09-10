import { Link } from "react-router-dom";
import { Eye, SquarePen, Delete, Archive } from "lucide-react";

export default function NewsTableActions({
  newsItem,
  onEdit,
  onDelete,
  onArchive,
  actions = ["view", "edit", "delete", "archive"],
  mode = "row",
}) {
  return (
    <div
      className={
        mode === "row" ? "flex flex-col gap-2 items-start" : "flex gap-2"
      }
    >
      {actions.includes("view") && (
        <Link
          className="btn btn-ghost btn-xs text-secondary"
          to={`/news/${newsItem?.slug ?? "#"}`}
        >
          <Eye />
          View
        </Link>
      )}

      {actions.includes("edit") && (
        <button
          className="btn btn-ghost btn-xs text-accent"
          onClick={() => onEdit?.(newsItem)}
        >
          <SquarePen />
          Edit
        </button>
      )}

      {actions.includes("delete") && (
        <button
          className="btn btn-ghost btn-xs text-error"
          onClick={() => onDelete?.(newsItem)}
        >
          <Delete />
          Delete
        </button>
      )}

      {actions.includes("delete") && (
        <button
          className="btn btn-ghost btn-xs text-warning"
          onClick={() => onArchive?.(newsItem)}
        >
          <Archive />
          Archive
        </button>
      )}
    </div>
  );
}
