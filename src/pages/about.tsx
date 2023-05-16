import Layout from "fishwrapper/components/layout";
import Head from "next/head";
import { Paper, Typography } from "@mui/material";
import { Timeline } from "@mui/lab";
import AboutItem from "fishwrapper/components/AboutItem";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <Paper elevation={3} sx={{ padding: 2, backgroundColor: "#f9f7f1" }}>
        {/* TODO: Write real fake timeline */}
        <Typography variant="h4" align="center">
          {"A Brief History"}
        </Typography>
        <Timeline position="alternate">
          <AboutItem
            title={"IT WAS A NEW BEGINNING"}
            date={"2023-04-13"}
            text={"It was time to be funny again"}
          />
          <AboutItem
            title={"THEN THEY HUNG OUT AGAIN"}
            date={"2023-04-25"}
            text={"And made some progress"}
            finalItem
          />
        </Timeline>
      </Paper>
    </Layout>
  );
}
