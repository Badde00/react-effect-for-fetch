import { useEffect, useState } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {
  const [advice, setAdvice] = useState({});
  const [favourites, setFavourites] = useState([]);

  const fetchAdvice = () => {
    // I added a timestamp to the URL to prevent caching
    // modification of this: https://stackoverflow.com/questions/42553302/caching-solution-is-adding-timestamp-or-random-numbers-at-the-end-of-file-is-a
    const url = `https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAdvice(data.slip))
      .then(() => console.log(advice));
  };

  const saveToFavourites = () => {
    if (!favourites.some((favourite) => favourite.id === advice.id)) {
      setFavourites([...favourites, advice]);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="advice-slip">
        <AdviceSlip adviceItem={advice} />
        <button onClick={fetchAdvice}>Get More Advice</button>
        <button onClick={saveToFavourites}>Save to Favourites</button>
      </section>

      <section className="favourite-slips-list">
        <FavouriteSlipsList favourites={favourites} />
      </section>
    </section>
  );
}

export default AdviceSection;
