import { useEffect, useState } from "react";
import RestaurantCard from "./components/RestaurantCard";
import "./styles.css";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [filterRating, setFilterRating] = useState(0);
  const [page, setPage] = useState(1);
  const [costForTwoOrder, setCostForTwoOrder] = useState("ASC");

  // fetching data from api
  const getRestaurants = async ({ filterRating, page, costForTwoOrder }) => {
    try {
      setLoading(true);
      setError(false);

      let res = await fetch(
        `https://62c011a3c134cf51cec88cec.mockapi.io/restaurants/list` +
          `?rating=${filterRating}&page=${page}&limit=2&sort=costForTwo&order=${costForTwoOrder}`
      );
      res = await res.json();
      setLoading(false);
      setData(res);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  // useeffect
  useEffect(() => {
    getRestaurants({ filterRating, page, costForTwoOrder });
  }, [filterRating, page, costForTwoOrder]);

  // return app
  return (
    <div className="App">
      {/* <RestaurantCard /> */}
      <div>
        <button onClick={() => setFilterRating(4)}>Greater than 4 </button>
        <button onClick={() => setFilterRating(3)}>Greater than 3 </button>
        <button onClick={() => setFilterRating(2)}>Greater than 2 </button>
        <button onClick={() => setFilterRating(1)}>Greater than 1 </button>
        <button onClick={() => setFilterRating(0)}>Show all </button>
      </div>

      <div>
        <button
          disabled={costForTwoOrder === "ASC"}
          onClick={() => setCostForTwoOrder("ASC")}
        >
          cost for two acs
        </button>
        <button
          disabled={costForTwoOrder === "DESC"}
          onClick={() => setCostForTwoOrder("DESC")}
        >
          cost for two desc
        </button>
      </div>

      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          PREV
        </button>
        <button onClick={() => setPage(page + 1)}>NEXT</button>
      </div>

      {data.map((res) => (
        <RestaurantCard key={res.id} data={res} />
      ))}
    </div>
  );
}
