import styles from "./RestaurantCard.module.css";

export default function Rating({ rating, votes, reviews }) {
  return (
    <div>
      <div className={styles.rating}>{rating}</div>
      <div> {votes} votes</div>
      <div> {reviews} reviews</div>
    </div>
  );
}
