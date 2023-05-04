import Layout from "../../components/layout";
import { getAllArticleIds, getArticleData } from "../../lib/mdArticleUtils";
import Head from "next/head";
import Date from "../../components/Date";
import utilStyles from "../../styles/utils.module.css";
import { GetStaticProps, GetStaticPaths } from "next";

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
      <article>
        <h1 className={utilStyles.headingXl}>{articleData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={articleData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
      </article>
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
