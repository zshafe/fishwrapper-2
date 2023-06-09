import { Button } from '@mui/material';
import utilStyles from 'fishwrapper/styles/utils.module.css';
import Link from 'next/link';
import React from 'react';

export default function AppBarIcon({
    text,
    link,
}: {
    text: string;
    link: string;
}) {
    return (
        <Link href={link}>
            <Button className={utilStyles.linkFixer}>{text}</Button>
        </Link>
    );
}
