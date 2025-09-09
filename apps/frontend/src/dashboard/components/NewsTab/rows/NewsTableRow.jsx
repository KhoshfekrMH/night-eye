//TODO: need backend for get data from database
import { Link } from "react-router-dom";
import { Eye, SquarePen, Delete, Archive } from "lucide-react";
import { users } from "../../../../shared/dummy";
import Tags from "../../../../shared/components/UIElements/Tag";

export default function NewsTableRow({ newsItem, isSelected, toggleRow }) {
  const writer = users.find((u) => u.id === newsItem.writerId);

  return (
    <tr>
      <td>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            checked={isSelected}
            onChange={toggleRow}
          />
        </label>
      </td>
      <td>{newsItem.date}</td>
      <td>
        <span className="badge badge-ghost">{newsItem.category}</span>
      </td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={newsItem.mainImage} alt={newsItem.title} />
            </div>
          </div>
          <div>
            <div className="font-bold">
              {newsItem.title} {newsItem.hero && <span>⭐</span>}
            </div>
            <div className="text-sm opacity-50">{writer.name}</div>
            {newsItem.badge && (
              <div className="badge badge-error mt-1">{newsItem.badge}</div>
            )}
          </div>
        </div>
      </td>
      <td>
        {newsItem.status ? (
          <span className="badge badge-ghost badge-sm">{newsItem.status}</span>
        ) : (
          <span className="badge badge-ghost badge-sm">Unknown</span>
        )}
      </td>
      <td>
        <Tags tags={newsItem.tags} />
      </td>
      <td>{newsItem.readCount}</td>
      <td>
        <div className="text-sm opacity-50">
          {newsItem.description.slice(0, 100) + "..."}
        </div>
      </td>
    </tr>
  );
}
