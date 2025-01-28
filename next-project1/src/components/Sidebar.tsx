"use client";

import { useUsers } from "@/hook/useUsers";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Checkbox,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function Sidebar() {

    const{users}=useUsers();
    const router=useRouter()
  return (
    <Drawer anchor="right" variant="permanent">
      <Box width={240}>
        <List>
          {users.map((user) => (
            <ListItem key={user.id} disablePadding>
              <ListItemButton
                onClick={() => router.push(`/content?id=${user.id}`)}
              >
                <Checkbox />
                <ListItemText primary={`${user.name} ${user.family}`} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
