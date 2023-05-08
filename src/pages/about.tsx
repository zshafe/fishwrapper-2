import Layout from "fishwrapper/components/layout";
import Head from "next/head";
import { Paper, Typography } from "@mui/material";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <Paper elevation={3} sx={{ padding: 2, backgroundColor: "#f9f7f1" }}>
        <Typography variant="h1">TODO: FINISH ABOUT PAGE</Typography>
      </Paper>
    </Layout>
  );
}
