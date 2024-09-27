import PropTypes from 'prop-types';

export default function FavouriteSlipsList({ favourites }) {
  return (
    <section>
      <h3>Favourite Advice Slips</h3>
      <ul>
        {favourites.map((favourite) => (
          <li key={favourite.id}>{favourite.advice}</li>
        ))}
      </ul>
    </section>
  );
}

FavouriteSlipsList.propTypes = {
  favourites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      advice: PropTypes.string.isRequired,
    })
  ).isRequired,
};
