import { Instagram, Twitter } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import StaffProfile from 'fishwrapper/components/StaffProfile';
import { StaffInfo } from 'fishwrapper/staffInfo';
import Link from 'next/link';

export default function StaffCard({
    name,
    title,
    bio,
    instagramLink,
    twitterLink,
}: StaffInfo) {
    return (
        <Stack
            direction="row"
            alignItems="center"
            sx={{
                padding: 2,
            }}
        >
            <StaffProfile name={name} title={title} />
            <Typography variant="body2">{bio}</Typography>
            <Box justifySelf="flex-end">
                <Stack
                    alignSelf="center"
                    spacing={1}
                    direction="column"
                    sx={{ m: 2 }}
                >
                    {instagramLink ? (
                        <Link href={instagramLink} target="_blank">
                            <Instagram />
                        </Link>
                    ) : (
                        <div />
                    )}
                    {twitterLink ? (
                        <Link href={twitterLink} target="_blank">
                            <Twitter />
                        </Link>
                    ) : (
                        <div />
                    )}
                </Stack>
            </Box>
        </Stack>
    );
}
