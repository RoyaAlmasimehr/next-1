import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  family: string;
}

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);


  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(storedUsers);
  }, []);


  const addUser = (user: User) => {
    const updatedUsers = [...users, user];
    setUsers(updatedUsers);


    localStorage.setItem("users", JSON.stringify(updatedUsers));


    window.dispatchEvent(new Event("usersUpdated")); 
  };

 
  useEffect(() => {
    const handleUsersUpdate = () => {
      const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
      setUsers(storedUsers);
    };


    window.addEventListener("usersUpdated", handleUsersUpdate);


    return () => {
      window.removeEventListener("usersUpdated", handleUsersUpdate);
    };
  }, []);

  return { users, addUser };
}
