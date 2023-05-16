import { Avatar, Stack, Typography } from '@mui/material';

export default function StaffProfile({
    name,
    title,
}: {
    name: string;
    title: string;
}) {
    return (
        <Stack
            direction="row"
            sx={{
                padding: 2,
            }}
        >
            <Avatar
                sx={{ width: 104, height: 104, alignSelf: 'center', m: 2 }}
            />
            <Stack alignSelf="center" direction="column" sx={{ m: 2 }}>
                <Typography noWrap variant="h6">
                    {name}
                </Typography>
                <Typography noWrap variant="overline">
                    {title}
                </Typography>
            </Stack>
        </Stack>
    );
}
