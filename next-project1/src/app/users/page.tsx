"use client";

import { useFetchUsers } from "@/hook/useFetchUsers";

import {
  Box,
  Typography,
  Card,
  CardContent,
  Link,
  CircularProgress,

} from "@mui/material";

export default function UsersPage() {
  const { data: users = [], isLoading, isError } = useFetchUsers(); 
useFetchUsers
  if (isLoading) return <CircularProgress />; 
  if (isError)
    return <Typography color="error">خطا در دریافت اطلاعات کاربران</Typography>; 

  return (
    <Box p={4}>
      <div className="flex justify-between items-center py-4">
        <Typography variant="h4" mb={3}>
          👥 لیست کاربران ثبت نام شده
        </Typography>
        <Link href="/" color="primary">
          Back To Home
        </Link>
      </div>
      <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={2}>
        {users.map((user: { id: number; name: string; email: string }) => (
          <Card
            key={user.id}
className="bg-rose-200"
          >
            <CardContent>
              <Typography variant="h6">{user.name}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
