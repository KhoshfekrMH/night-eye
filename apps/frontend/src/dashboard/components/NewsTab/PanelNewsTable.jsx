import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../shared/context/AuthContext";
import { news, users } from "../../../shared/dummy";
import Tags from "../../../shared/components/UIElements/Tag";

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

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>News</th>
            <th>Status</th>
            <th>Tags</th>
            <th>Read Count</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {panelNewsFiltered.map((n) => {
            const writer = users.find((u) => u.id === n.writerId);
            return (
              <tr key={n.id}>
                <td>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={n.mainImage} alt={n.title} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{n.title}</div>
                      <div className="text-sm opacity-50">{writer.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {n.status ? (
                    <span className="badge badge-ghost badge-sm">
                      {n.status}
                    </span>
                  ) : (
                    <span className="badge badge-ghost badge-sm">Unknown</span>
                  )}
                </td>
                <td>
                  <Tags tags={n.tags} varian="outline" />
                </td>
                <td>{n.readCount}</td>
                <td>
                  <Link className="btn btn-ghost btn-xs" to={`/news/${n.slug}`}>
                    Details
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
