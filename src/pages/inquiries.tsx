import Layout from "fishwrapper/components/layout";
import Head from "next/head";
import { Paper, Typography } from "@mui/material";

export default function Inquiries() {
  return (
    <Layout>
      <Head>
        <title>Inquiries</title>
      </Head>
      <Paper elevation={3} sx={{ padding: 2, backgroundColor: "#f9f7f1" }}>
        {/* TODO: Create a real contact form. */}
        {/* TODO: Replace with actual new email */}
        <Typography variant="body2" align="center">
          {`Do you want to work with us? Have ideas you think are funny, events
          you think we should know about, or an advertisement you'd like to
          place? Email us at thefishwrapper2@gmail.com and we'll get back to
          you if you're not lame.`}
        </Typography>
      </Paper>
    </Layout>
  );
}
