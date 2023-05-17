import { Paper, Stack, Typography } from '@mui/material';
import NavBar from 'fishwrapper/components/NavBar';
import { paperTitle } from 'fishwrapper/strings';
import utilStyles from 'fishwrapper/styles/utils.module.css';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Header() {
    return (
        <Paper elevation={3} sx={{ backgroundColor: '#f9f7f1' }}>
            <Stack
                direction={'column'}
                alignItems={'center'}
                spacing={2}
                sx={{ my: 2, py: 2 }}
            >
                <Link href="/">
                    <Image
                        priority
                        src="/images/fishwrapper.jpg"
                        className={utilStyles.borderCircle}
                        height={144}
                        width={144}
                        alt={paperTitle}
                    />
                </Link>
                <Typography variant="h4" fontWeight="bold">
                    {paperTitle}
                </Typography>
                {/* TODO: Factor out 'It's all irrelevant' and make it a component that will randomly choose text to display */}
                <Typography variant="h5">It’s all irrelevant</Typography>
                <NavBar />
            </Stack>
        </Paper>
    );
}
