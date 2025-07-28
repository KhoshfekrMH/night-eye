import { useNavigate } from "react-router-dom";

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
        <div className="card-actions justify-end">
          {props.tags &&
            props.tags.map((tag) => (
              <div key={tag} className="badge badge-primary">
                {tag}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default LargeCard;
