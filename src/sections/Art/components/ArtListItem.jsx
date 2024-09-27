import PropTypes from "prop-types";

export default function ArtListItem({
  artListItem: { id, title, artist, imageURL, publicationHistory },
}) {
  ArtListItem.propTypes = {
    artListItem: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
      imageURL: PropTypes.string.isRequired,
      publicationHistory: PropTypes.array.isRequired,
    }).isRequired,
  };

  return (
    <ul className="art-list">
      <li key={id}>
        <div className="frame">
          <img src={"https://boolean-uk-api-server.fly.dev" + imageURL} />
        </div>
        <h3>{title}</h3>
        <p>Artist: {artist}</p>
        <h4>Publication History:</h4>
        <ul>
          {publicationHistory.map((historyItem, index) => (
            <li key={index}>{historyItem}</li>
          ))}
        </ul>
      </li>
    </ul>
  );
}
