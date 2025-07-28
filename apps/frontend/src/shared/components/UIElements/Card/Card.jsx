import { useMemo } from "react";

import SmallCard from "./SmallCard";
import LargeCard from "./LargeCard";

import "./Card.css";

function Card({ type = "card-small", ...props }) {
  const Components = {
    "card-small": SmallCard,
    "card-large": LargeCard,
  };

  const CardComponents = useMemo(() => Components[type] || SmallCard, [type]);

  return <CardComponents {...props} />;
}

export default Card;
