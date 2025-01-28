"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Box, Button, TextField, Typography, Link } from "@mui/material";
import { useUsers } from "@/hook/useUsers";


interface User {
  id: number;
  name: string;
  family: string;
}

export default function Home() {
  const { register, handleSubmit, reset } = useForm<User>();
 const { addUser, users } = useUsers();
 const [lastUserId, setLastUserId] = useState<number | null>(null);
  const onSubmit = (data: User) => {
        const newUser = { ...data, id: users.length + 1 }; 
        addUser(newUser);
      setLastUserId(newUser.id);
    reset();
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
      p={4}
    >
      <Link href="/content" color="primary">
       ContentPage
      </Link>

      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "300px" }}>
        <TextField
          {...register("name")}
          label="نام"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          {...register("family")}
          label="نام خانوادگی"
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          افزودن
        </Button>
      </form>
      {lastUserId !== null && (
        <Typography variant="h6" color="secondary">
         USER: {lastUserId}
        </Typography>
      )}
    </Box>
  );
}
