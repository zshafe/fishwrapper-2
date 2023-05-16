import { AppBar, Toolbar } from '@mui/material';
import AppBarIcon from 'fishwrapper/components/AppBarIcon';
import React from 'react';

export default function NavBar() {
    return (
        <AppBar
            position="static"
            elevation={3}
            sx={{ backgroundColor: '#f9f7f1', maxWidth: 2 / 3 }}
        >
            <Toolbar
                sx={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                }}
            >
                <AppBarIcon text="Content" link="/"></AppBarIcon>
                <AppBarIcon text="Staff" link="/staff"></AppBarIcon>
                <AppBarIcon text="About" link="/about"></AppBarIcon>
                <AppBarIcon text="Inquiries" link="/inquiries"></AppBarIcon>
            </Toolbar>
        </AppBar>
    );
}
