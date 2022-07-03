import styles from "./RestaurantCard.module.css";

// image component
export function Image({ src, name, height, width }) {
  return (
    <img
      style={{ objectFit: "cover" }}
      src={src}
      width={width}
      height={height}
      alt={name}
    />
  );
}
