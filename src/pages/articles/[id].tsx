import Layout from "fishwrapper/components/layout";
import {
  getAllArticleIds,
  getArticleData,
} from "fishwrapper/lib/mdArticleUtils";
import Head from "next/head";
import Date from "fishwrapper/components/Date";
import { GetStaticProps, GetStaticPaths } from "next";
import { Container, Paper, Typography } from "@mui/material";

export default function Article({
  articleData,
}: {
  articleData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{articleData.title}</title>
      </Head>
      <Paper elevation={3} sx={{ padding: 2, backgroundColor: "#f9f7f1" }}>
        <Container>
          <Typography variant="h4">{articleData.title}</Typography>
          <Date dateString={articleData.date} />
          {/* TODO: Replace when we have a better method to store articles. After this, the whole
            mdArticleUtils.ts file should be able to be deleted */}
          <div dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
        </Container>
      </Paper>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllArticleIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const articleData = await getArticleData(params?.id as string);
  return {
    props: {
      articleData,
    },
  };
};
