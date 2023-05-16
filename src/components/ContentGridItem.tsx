import { Card, CardActionArea, Stack, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import Date from 'fishwrapper/components/date';
import Link from 'next/link';

export default function ContentGridItem({
    id,
    date,
    title,
}: {
    id: string;
    date: string;
    title: string;
}) {
    return (
        <Grid2
            key={id}
            xs={3}
            margin={1}
            component={Card}
            display={'flex'}
            elevation={3}
            sx={{ backgroundColor: '#f9f7f1' }}
        >
            <CardActionArea>
                <Link href={`/articles/${id}`}>
                    <Stack
                        direction={'column'}
                        alignItems={'center'}
                        textAlign={'center'}
                    >
                        <Typography variant="subtitle1">{title}</Typography>
                        <Date dateString={date} />
                    </Stack>
                </Link>
            </CardActionArea>
        </Grid2>
    );
}
