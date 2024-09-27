import PropTypes from "prop-types";

export default function UsersListItem({
  usersListItem: {
    id,
    firstName,
    lastName,
    email,
    favouriteColour,
    profileImage,
  },
}) {
  UsersListItem.propTypes = {
    usersListItem: PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      favouriteColour: PropTypes.string.isRequired,
      profileImage: PropTypes.string.isRequired,
    }).isRequired,
  };

  return (
    <li style={{ background: favouriteColour }} key={id}>
      <img src={profileImage} alt={firstName + " " + lastName} />
      <h3>{firstName + " " + lastName}</h3>
      <p>Email: {email}</p>
    </li>
  );
}
