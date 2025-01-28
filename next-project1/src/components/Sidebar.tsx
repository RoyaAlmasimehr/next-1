"use client";

import { useCheckedUsers } from "@/hook/useCheckedUsers";
import { useUsers } from "@/hook/useUsers";

import {
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  Checkbox,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const { users } = useUsers(); 
  const { checkedUsers, toggleUser } = useCheckedUsers(); 
const router=useRouter()


  const handleCheckboxChange = (id: number) => {
    toggleUser(id); 
    router.push("/content"); 
  };

  return (
    <Drawer anchor="right" variant="permanent">
      <Box width={240} p={2}>
        <Typography variant="h6" mb={2}>
          لیست کاربران
        </Typography>
        <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={1}>
          {users.map((user) => (
            <ListItem key={user.id} disablePadding>
              <ListItemButton>
                <Checkbox
                  checked={checkedUsers.includes(user.id)}
                  onChange={() => handleCheckboxChange(user.id)}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </Box>
      </Box>
    </Drawer>
  );
}
