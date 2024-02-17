import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Hamburger from './Hamburger';

export default function ButtonAppBar() {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 992;
    React.useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{
                backgroundColor: '#19263A'
            }}>
                <Toolbar className='nav__toolbar'>
                    <img className='nav__image' src="./src/assets/logo.svg" alt="Logo" />
                    {breakpoint > width ? <Hamburger /> : <div>
                        <Button sx={{ fontFamily: 'Open Sans', fontWeight: '15' }} size='small' color="inherit">Home</Button>
                        <Button sx={{ fontFamily: 'Open Sans', fontWeight: '15' }} size='small' color="inherit">Property Search</Button>
                        <Button sx={{ fontFamily: 'Open Sans', fontWeight: '15' }} size='small' color="inherit">Tools</Button>
                        <Button sx={{ fontFamily: 'Open Sans', fontWeight: '15' }} size='small' color="inherit">About</Button>
                        <Button sx={{ fontFamily: 'Open Sans', fontWeight: '15' }} size='small' color="inherit">Contact</Button>
                    </div>}
                </Toolbar>
            </AppBar>
        </Box >
    );
}