"use client";

import { useForm } from "react-hook-form";

import { Box, Button, TextField } from "@mui/material";
import { useUsers } from "@/hook/useUsers";

interface User {
  id: number;
  name: string;
  family: string;
}

export default function Home() {
  const { register, handleSubmit, reset } = useForm<User>();
  const { addUser } = useUsers();

  const onSubmit = (data: User) => {
    addUser({ ...data, id: Date.now() });
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
    </Box>
  );
}
