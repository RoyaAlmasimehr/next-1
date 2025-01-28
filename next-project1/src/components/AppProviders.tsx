"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CheckedUsersProvider } from "@/context/CheckedUsersContext";

const queryClient = new QueryClient(); 

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <CheckedUsersProvider>{children}</CheckedUsersProvider>
    </QueryClientProvider>
  );
}
