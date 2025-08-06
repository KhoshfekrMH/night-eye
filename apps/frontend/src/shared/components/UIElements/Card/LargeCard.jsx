import { useNavigate } from "react-router-dom";
import { Calendar } from "lucide-react";
import Tag from "../Tag";

function LargeCard(props) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(props.link);
  }

  return (
    <div
      className="card lg:card-side bg-base-300 shadow-sm"
      onClick={handleClick}
    >
      <figure>
        <img
          className="w-full h-48 object-cover rounded-lg"
          src={props.image}
          alt={`Image for ${props.title}`}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-secondary">{props.title}</h2>
        {props.badge && <div className="badge badge-error">{props.badge}</div>}
        <p className="card-description">{props.description}</p>
        <div className="flex flex-row p-2 items-center gap-2 text-primary">
          <Calendar />
          <span className="text-sm">{props.date}</span>
        </div>
        <div className="card-actions justify-end">
          <Tag tags={props.tags} />
        </div>
      </div>
    </div>
  );
}

export default LargeCard;
