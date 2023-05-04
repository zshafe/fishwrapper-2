import React from "react";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import { Link, Stack, Typography } from "@mui/material";
import { siteTitle } from "./layout";

export default function PageHeader() {
  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      spacing={2}
      sx={{ mb: 2 }}
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
  );
}
