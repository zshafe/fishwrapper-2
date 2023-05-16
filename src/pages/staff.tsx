import Layout from "fishwrapper/components/layout";
import Head from "next/head";
import { Divider, Paper, Typography } from "@mui/material";
import StaffCard from "fishwrapper/components/StaffCard";
import { benOlsen, emilyVaughan, zackShafer } from "fishwrapper/staffInfo";

export default function Staff() {
  return (
    <Layout>
      <Head>
        <title>Staff</title>
      </Head>
      <Paper elevation={3} sx={{ padding: 2, backgroundColor: "#f9f7f1" }}>
        <Typography variant="h4" align="center" fontWeight="bold">
          {"Our Wonderful Staff"}
        </Typography>
        <StaffCard {...emilyVaughan} />
        <Divider />
        <StaffCard {...benOlsen} />
        <Divider />
        <StaffCard {...zackShafer} />
      </Paper>
    </Layout>
  );
}
