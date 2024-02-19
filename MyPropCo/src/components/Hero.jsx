import Carousel from 'react-bootstrap/Carousel';
import { carouselItems } from '../data/data';

export default function Hero() {


    return (
        <Carousel
            interval={8000}
            controls={false}
            indicators={false}
            id='hero-carousel'
            data-bs-theme="dark"
        >
            {carouselItems.map(item => (
                <Carousel.Item
                    key={item.id}
                >
                    <img
                        className="d-block w-100"
                        src={item.image}
                        alt="image"
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

// import React from 'react';
// import Carousel from 'react-material-ui-carousel/dist'
// import { Paper } from '@mui/material'

// export default function Hero() {


//     var items = [
//         {
//             image: './src/assets/headerimage1.png'
//         },
//         {
//             image: './src/assets/headerimage2.jpg'
//         }
//     ]

//     return (
//         <Carousel className='hero_carousel' indicators={false} interval={8000} swipe={false} navButtonsAlwaysInvisible={true}>
//             {
//                 items.map((item, i) => <Item key={i} item={item} />)
//             }
//         </Carousel>
//     )
// }

// function Item(props) {

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
//         <Paper>
//             {breakpoint > width ? <img className='hero__image_max' src={props.item.image} alt="" /> : <img className='hero__image_min' src={props.item.image} alt="" />}
//         </Paper>
//     )
// }
