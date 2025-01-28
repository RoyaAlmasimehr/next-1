"use client";


import { useUsers } from "@/hook/useUsers";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";

export default function UsersPage() {
  const { data: users, isLoading, isError } = useUsers(); 

  if (isLoading) return <CircularProgress />; 
  if (isError)
    
    return <Typography color="error"> خطا در دریافت اطلاعات</Typography>;

  return (
    <Box p={4} display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h4" mb={3}>
        👥 کاربران ثبت‌شده
      </Typography>

   
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))"
        gap={2}
        maxWidth="800px"
      >
        {users.map((user) => (
          <Card
            key={user.id}
            sx={{ bgcolor: "secondary.main", color: "white" }}
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
