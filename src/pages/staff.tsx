import Layout from "fishwrapper/components/layout";
import Head from "next/head";
import { Box, Divider, Paper, Typography } from "@mui/material";
import StaffCard from "fishwrapper/components/StaffCard";
import { staffList } from "fishwrapper/staffInfo";

export default function Staff() {
  return (
    <Layout>
      <Head>
        <title>Staff</title>
      </Head>
      <Paper elevation={3} sx={{ padding: 2, backgroundColor: "#f9f7f1" }}>
        <Typography variant="h4" align="center" fontWeight="bold" pb={2}>
          {"Our Wonderful Staff"}
        </Typography>
        <Divider />
        {staffList.map((person) => (
          <Box key={person.id}>
            <StaffCard {...person} />
            <Divider />
          </Box>
        ))}
      </Paper>
    </Layout>
  );
}
