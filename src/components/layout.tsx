import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Container } from "@mui/material";
import HomeHeader from "fishwrapper/components/HomeHeader";
import PageHeader from "fishwrapper/components/PageHeader";

export const siteTitle = "The Fishwrapper 2.0";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <Container maxWidth="lg" sx={{ mt: 3 }}>
      <Head>
        <link rel="icon" href="/images/fishwrapper.jpg" />
        <meta name="description" content="Good content. Don't ask questions." />
        <meta name="og:title" content={siteTitle} />
      </Head>
      {home ? <HomeHeader /> : <PageHeader />}
      <main>{children}</main>
      {!home && <Link href="/">← Back to home</Link>}
    </Container>
  );
}
