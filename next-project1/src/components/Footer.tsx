"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link"; 

export default function Footer() {
  return (
    <Box
      component="footer"
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={2}
      bgcolor="primary.main"
      color="white"
    >
      <Typography variant="body2" mr={2}>
        <Link href="/users" className="font-bold cursor-pointer text-xl ">
    لینک لیست کاربران
        </Link>
      </Typography>
    </Box>
  );
}
