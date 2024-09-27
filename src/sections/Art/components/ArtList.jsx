import PropTypes from "prop-types";
import ArtListItem from "./ArtListItem";

export default function ArtList(props) {
  ArtList.propTypes = {
    artList: PropTypes.array.isRequired,
  };

  const { artList } = props;

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        {artList.map((artListItem, i) => (
          <ArtListItem key={i} artListItem={artListItem} />
        ))}
      </div>
    </section>
  );
}
