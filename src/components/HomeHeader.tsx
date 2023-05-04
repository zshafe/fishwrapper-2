import React from "react";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import { Stack, Typography } from "@mui/material";
import { siteTitle } from "./layout";

export default function HomeHeader() {
  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      spacing={2}
      sx={{ mb: 2 }}
    >
      <Image
        priority
        src="/images/fishwrapper.jpg"
        className={utilStyles.borderCircle}
        height={144}
        width={144}
        alt={siteTitle}
      />
      <Typography variant="h3">{siteTitle}</Typography>
      {/* TODO: Factor out 'It's all irrelevant' and make it a component that will randomly choose text to display */}
      <Typography variant="h5">It’s all irrelevant</Typography>
    </Stack>
  );
}
