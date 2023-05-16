import { Paper } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import ContentGridItem from 'fishwrapper/components/ContentGridItem';
import Layout from 'fishwrapper/components/layout';
import { getSortedArticlesData } from 'fishwrapper/lib/mdArticleUtils';
import { paperTitle } from 'fishwrapper/strings';
import { GetStaticProps } from 'next';
import Head from 'next/head';

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
        <Layout>
            <Head>
                <title>{paperTitle}</title>
            </Head>
            <Paper
                elevation={3}
                sx={{ padding: 2, backgroundColor: '#f9f7f1' }}
            >
                <Grid2 container spacing={2}>
                    {allArticlesData.map(({ id, date, title }) => (
                        <ContentGridItem
                            key={id}
                            id={id}
                            date={date}
                            title={title}
                        />
                    ))}
                </Grid2>
            </Paper>
        </Layout>
    );
}
