"use client";

import { createContext, useState, useContext } from "react";


interface CheckedUsersContextType {
  checkedUsers: number[];
  toggleUser: (id: number) => void; 
}


export const CheckedUsersContext = createContext<
  CheckedUsersContextType | undefined
>(undefined);


export function CheckedUsersProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [checkedUsers, setCheckedUsers] = useState<number[]>([]); // کاربران 

  const toggleUser = (id: number) => {
    setCheckedUsers((prev) =>
      prev.includes(id) ? prev.filter((uid) => uid !== id) : [...prev, id]
    );
  };

  return (
    <CheckedUsersContext.Provider value={{ checkedUsers, toggleUser }}>
      {children}
    </CheckedUsersContext.Provider>
  );
}

