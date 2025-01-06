import React, { useState, useEffect, useCallback, useMemo } from "react";
import { UserList } from "./component/userList";

// A functional component for rendering a user list
// preventing re-renders unless the users prop changes.

const FetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch users from the API
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  // Filter users based on search term (memoized for performance)
  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  // Update search term (memoized function to prevent unnecessary renders)
  const handleSearch = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <UserList users={filteredUsers} />
    </div>
  );
};

export default FetchUsers;
