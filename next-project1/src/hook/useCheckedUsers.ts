"use client";

import { useContext } from "react";
import { CheckedUsersContext } from "@/context/CheckedUsersContext";  

export function useCheckedUsers() {
  const context = useContext(CheckedUsersContext);
  if (!context) {
    throw new Error(
      "useCheckedUsers must be used within a CheckedUsersProvider"
    );
  }
  return context;
}
