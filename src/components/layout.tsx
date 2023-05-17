import { Container } from '@mui/material';
import Header from 'fishwrapper/components/Header';
import { paperTitle } from 'fishwrapper/strings';
import Head from 'next/head';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Container maxWidth="lg" sx={{ mt: 3 }}>
            <Head>
                <link rel="icon" href="/images/fishwrapper.jpg" />
                <meta name="og:title" content={paperTitle} />
            </Head>
            <Header />
            <main>{children}</main>
            {/* TODO: Add a footer with copyright info, maybe some other stuff idk? I also envision a
      form to sign up for our mailing list (ig if we want one of those) */}
        </Container>
    );
}
