import UsersList from "./components/UsersList";
import { useState, useEffect } from "react";

function UsersSection() {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/badde00/contact")
      .then((res) => res.json())
      .then((data) => setUsersList(data));
  }, []);

  return (
    <UsersList usersList={usersList} />
  );
}

export default UsersSection;
