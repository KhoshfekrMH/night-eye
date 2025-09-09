import { useState, useContext } from "react";
import { AuthContext } from "../../../shared/context/AuthContext";
import { news } from "../../../shared/dummy";
import NewsTableRow from "./rows/NewsTableRow";

export default function PanelNewsTable() {
  const { id: userId, isAdmin, isOwner, isWriter } = useContext(AuthContext);

  const panelNewsFiltered = news.filter((n) => {
    if (isOwner || isAdmin) {
      return true;
    } else if (isWriter) {
      return n.writerId === userId;
    } else {
      return false;
    }
  });

  const [selectedIds, setSelectedIds] = useState([]);

  function toggleAll(event) {
    if (event.target.checked) {
      setSelectedIds(panelNewsFiltered.map((n) => n.id));
    } else {
      setSelectedIds([]);
    }
  }

  function toggleRow(id) {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input
                  type="checkbox"
                  className="checkbox"
                  onChange={toggleAll}
                  checked={
                    selectedIds.length > 0 &&
                    selectedIds.length === panelNewsFiltered.length
                  }
                />
              </label>
            </th>
            <th>Date</th>
            <th>Category</th>
            <th>News</th>
            <th>Status</th>
            <th>Tags</th>
            <th>Read Count</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {panelNewsFiltered.map((n) => {
            return (
              <NewsTableRow
                key={n.id}
                newsItem={n}
                isSelected={selectedIds.includes(n.id)}
                toggleRow={() => toggleRow(n.id)}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
