import React from "react";
import Image from "next/image";
import utilStyles from "fishwrapper/styles/utils.module.css";
import { Link, Paper, Stack, Typography } from "@mui/material";
import { siteTitle } from "fishwrapper/components/layout";

export default function PageHeader() {
  return (
    <Paper elevation={3} sx={{ backgroundColor: "#f9f7f1" }}>
      <Stack
        direction={"column"}
        alignItems={"center"}
        spacing={2}
        sx={{ my: 2, py: 2 }}
      >
        <Link href="/">
          <Image
            priority
            src="/images/fishwrapper.jpg"
            className={utilStyles.borderCircle}
            height={108}
            width={108}
            alt={siteTitle}
          />
        </Link>
        <Link href="/" className={utilStyles.linkFixer}>
          <Typography variant="h5">{siteTitle}</Typography>
        </Link>
      </Stack>
    </Paper>
  );
}
