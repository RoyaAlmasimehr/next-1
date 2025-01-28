"use client";

import { useCheckedUsers } from "@/hook/useCheckedUsers";
import { useUsers } from "@/hook/useUsers";

import { Box, Typography, Card, CardContent, Link } from "@mui/material";

export default function ContentPage() {
  const { users } = useUsers();
  const { checkedUsers } = useCheckedUsers();


  const selectedUsers = users.filter((user) => checkedUsers.includes(user.id));

  return (
    <Box p={4}>
      <div className="flex justify-between items-center py-4">
        <Typography variant="h4">Content</Typography>
        <Link href="/" color="primary">
          Back To Home
        </Link>
      </div>

      <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" mt={2}>
        {selectedUsers.length > 0 ? (
          selectedUsers.map((user) => (
            <Card
              key={user.id}
             className="bg-blue-300 my-4 w-[150px] h-[150px] flex items-center justify-center"
            >
              <CardContent>
                <Typography variant="h6">
                  {user.name} {user.family}
                </Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography>هیچ کاربری انتخاب نشده است.</Typography>
        )}
      </Box>
    </Box>
  );
}
