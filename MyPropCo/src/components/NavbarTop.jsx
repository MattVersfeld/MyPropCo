import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarTop() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary navbar-background navbar-dark">
            <Container className='navbar-container'>
                <Navbar.Brand href="#home"><img src="./src/assets/logo.svg" alt="My Propery Co." /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='navbar-spacing' id="basic-navbar-nav">
                    <Nav className='navbar-link-container'>
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <Nav.Link href="#link">PROPERTY SEARCH</Nav.Link>
                        <Nav.Link href="#link">TOOLS</Nav.Link>
                        <Nav.Link href="#link">ABOUT</Nav.Link>
                        <Nav.Link href="#link">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
// import Hamburger from './Hamburger';

// export default function ButtonAppBar() {

//     const [width, setWidth] = React.useState(window.innerWidth);
//     const breakpoint = 992;
//     React.useEffect(() => {
//         const handleResizeWindow = () => setWidth(window.innerWidth);
//         window.addEventListener("resize", handleResizeWindow);
//         return () => {
//             window.removeEventListener("resize", handleResizeWindow);
//         };
//     }, []);

//     return (
//         <Box sx={{ flexGrow: 1 }}>
//             <AppBar sx={{
//                 backgroundColor: '#19263A'
//             }}>
//                 <Toolbar className='nav__toolbar'>
//                     <img className='nav__image' src="./src/assets/logo.svg" alt="Logo" />
//                     {breakpoint > width ? <Hamburger /> : <div>
//                         <Button sx={{ fontFamily: 'Open Sans', fontWeight: '15' }} size='small' color="inherit">Home</Button>
//                         <Button sx={{ fontFamily: 'Open Sans', fontWeight: '15' }} size='small' color="inherit">Property Search</Button>
//                         <Button sx={{ fontFamily: 'Open Sans', fontWeight: '15' }} size='small' color="inherit">Tools</Button>
//                         <Button sx={{ fontFamily: 'Open Sans', fontWeight: '15' }} size='small' color="inherit">About</Button>
//                         <Button sx={{ fontFamily: 'Open Sans', fontWeight: '15' }} size='small' color="inherit">Contact</Button>
//                     </div>}
//                 </Toolbar>
//             </AppBar>
//         </Box >
//     );
// }