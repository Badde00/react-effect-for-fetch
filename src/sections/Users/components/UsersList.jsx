import PropTypes from "prop-types";
import UsersListItem from "./UsersListItem";

export default function UsersList(props) {
  UsersList.propTypes = {
    usersList: PropTypes.array.isRequired,
  };

  const { usersList } = props;

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {usersList.map((usersListItem, i) => (
            <UsersListItem key={i} usersListItem={usersListItem} />
          ))}
        </ul>
      </div>
    </section>
  );
}
