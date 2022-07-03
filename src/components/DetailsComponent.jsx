import styles from "./RestaurantCard.module.css";

// details componets
export const DetailsComponent = ({
  title,
  cusine,
  price,
  minPrice,
  time,
  cash,
  card
}) => {
  return (
    <div>
      <h5>{title}</h5>
      <h5>{cusine.join(", ")}</h5>
      <h5>Cost {price} for One</h5>
      <h5>
        Min {minPrice} Up to {time} min
      </h5>
      <div>
        Accepts {cash && "cash"} {card && "card"}
      </div>
    </div>
  );
};
