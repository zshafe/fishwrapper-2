import Head from "next/head";
import Layout, { siteTitle } from "fishwrapper/components/layout";
import { GetStaticProps } from "next";
import { getSortedArticlesData } from "fishwrapper/lib/mdArticleUtils";
import Grid2 from "@mui/material/Unstable_Grid2";
import ContentGridItem from "fishwrapper/components/ContentGridItem";
import { Paper } from "@mui/material";

export const getStaticProps: GetStaticProps = async () => {
  const allArticlesData = getSortedArticlesData();
  return {
    props: {
      allArticlesData,
    },
  };
};

export default function Home({
  allArticlesData,
}: {
  allArticlesData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Paper elevation={3} sx={{ padding: 2, backgroundColor: "#f9f7f1" }}>
        <Grid2 container spacing={2}>
          {allArticlesData.map(({ id, date, title }) => (
            <ContentGridItem key={id} id={id} date={date} title={title} />
          ))}
        </Grid2>
      </Paper>
    </Layout>
  );
}
