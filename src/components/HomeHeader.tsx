import React from "react";
import Image from "next/image";
import utilStyles from "fishwrapper/styles/utils.module.css";
import { Paper, Stack, Typography } from "@mui/material";
import { siteTitle } from "fishwrapper/components/layout";

export default function HomeHeader() {
  return (
    <Paper elevation={3} sx={{ backgroundColor: "#f9f7f1" }}>
      <Stack
        direction={"column"}
        alignItems={"center"}
        spacing={2}
        sx={{ my: 2, py: 2 }}
      >
        <Image
          priority
          src="/images/fishwrapper.jpg"
          className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt={siteTitle}
        />
        <Typography variant="h4">{siteTitle}</Typography>
        {/* TODO: Factor out 'It's all irrelevant' and make it a component that will randomly choose text to display */}
        <Typography variant="h5">It’s all irrelevant</Typography>
      </Stack>
    </Paper>
  );
}
