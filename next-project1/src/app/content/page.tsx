"use client";


import { useSearchParams } from "next/navigation";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import { useUsers } from "@/hook/useUsers";

export default function ContentPage() {
  const searchParams = useSearchParams();
  const userId = searchParams.get("id");
  const { users } = useUsers();
  const selectedUser = users.find((user) => user.id.toString() === userId);

  return (
    <Box p={4}>
      <Typography variant="h4">صفحه محتوا (Content)</Typography>
      <Grid container spacing={2} columns={4} mt={2}>
        {selectedUser ? (
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  {selectedUser.name} {selectedUser.family}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ) : (
          <Typography>کاربری انتخاب نشده است.</Typography>
        )}
      </Grid>
    </Box>
  );
}
