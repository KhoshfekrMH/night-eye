import { useState, useContext } from "react";
import { AuthContext } from "../../../shared/context/AuthContext";
import { news } from "../../../shared/dummy"; //TODO: connect backend for panel news filtered
import NewsTableBody from "./table/layouts/NewsTableBody";
import NewsTableHeader from "./table/layouts/NewsTableHeader";
import NewsTableBulk from "./table/util/NewsTableBulk";

export default function PanelNewsTable() {
  const { id: userId, isAdmin, isOwner, isWriter } = useContext(AuthContext);

  const [selectedIds, setSelectedIds] = useState([]);
  const [dateSort, setDateSort] = useState("desc");
  const [readCountSort, setReadCountSort] = useState(null);

  let panelNewsFiltered = news.filter((n) => {
    if (isOwner || isAdmin) {
      return true;
    } else if (isWriter) {
      return n.writerId === userId;
    } else {
      return false;
    }
  });

  if (dateSort) {
    panelNewsFiltered = [...panelNewsFiltered].sort((a, b) =>
      dateSort === "asc"
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date),
    );
  }

  if (readCountSort) {
    panelNewsFiltered = [...panelNewsFiltered].sort((a, b) =>
      readCountSort === "asc"
        ? a.readCount - b.readCount
        : b.readCount - a.readCount,
    );
  }

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
      <NewsTableBulk
        selectedIds={selectedIds}
        onDelete={() => console.log("Bulk Delete", selectedIds)}
        onArchive={() => console.log("Bulk Archive", selectedIds)}
      />
      <table className="table w-full">
        <NewsTableHeader
          panelNews={panelNewsFiltered}
          toggleAll={toggleAll}
          checked={
            selectedIds.length > 0 &&
            selectedIds.length === panelNewsFiltered.length
          }
          dateSort={dateSort}
          setDateSort={setDateSort}
          readCountSort={readCountSort}
          setReadCountSort={setReadCountSort}
        />

        {panelNewsFiltered.map((n) => {
          return (
            <NewsTableBody
              key={n.id}
              newsItem={n}
              isSelected={selectedIds.includes(n.id)}
              toggleRow={() => toggleRow(n.id)}
            />
          );
        })}
      </table>
    </div>
  );
}
