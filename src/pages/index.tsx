import Head from "next/head";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";
import Layout, { siteTitle } from "../components/layout";
import { GetStaticProps } from "next";
import { getSortedArticlesData } from "fishwrapper/lib/mdArticleUtils";
import Link from "next/link";

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
      <section className={utilStyles.headingLg}>
        <p>It’s all irrelevant</p>
      </section>
      <div
        className={`${utilStyles.grid} ${utilStyles.headingMd} ${utilStyles.padding1px}`}
      >
        {allArticlesData.map(({ id, date, title }) => (
          <div className={utilStyles.listItem} key={id}>
            <Link href={`/articles/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </div>
        ))}
      </div>
    </Layout>
  );
}
