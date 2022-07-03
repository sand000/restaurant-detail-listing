import { DetailsComponent } from "./DetailsComponent";
import { Image } from "./Image";
import { OrderButton } from "./OrderButton";
import Rating from "./Rating";
import styles from "./RestaurantCard.module.css";

// function RestaurantCard
export default function RestaurantCard({ data }) {
  // destructuring props
  const {
    name,
    id,
    cuisine,
    costForTwo,
    minOrder,
    deliveryTime,
    rating,
    votes,
    reviews,
    payment_methods,
    src
  } = data;

  // console.log(payment_methods);
  // return restaurant card
  return (
    <div>
      <div className={styles.container}>
        <div>
          <Image src={src} width="150px" height="200px" />
        </div>

        <div className={styles.detailsContainer}>
          <DetailsComponent
            styles={{ flex: 3 }}
            title={name}
            cusine={cuisine}
            price={costForTwo}
            minPrice={minOrder}
            time={deliveryTime}
            cash={payment_methods.cash}
            card={payment_methods.card}
          />
        </div>

        <div>
          <Rating rating={rating} votes={votes} reviews={reviews} />
        </div>
      </div>

      <div className={styles.footer}>
        <OrderButton />
      </div>
    </div>
  );
}
