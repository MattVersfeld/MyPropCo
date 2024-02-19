
import Card from 'react-bootstrap/Card';
import { contentData } from '../data/data';

export default function ContentAds() {
    return (
        <div className='content-container'>
            <div className='content-card-container'>
                {contentData.map(items => (
                    <Card key={items.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={items.image} />
                        <Card.Body>
                            <Card.Title>{items.title}</Card.Title>
                            <Card.Text>
                                {items.text}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>

    );
}



// import React, { useState } from 'react';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';

// export default function ContentAds(props) {
//     const { image, setup, punch, title, text } = props;
//     const [isFlipped, setIsFlipped] = useState(false);

//     const handleClick = () => {
//         setIsFlipped(!isFlipped);
//     };

//     return (

//         <div className={`content__container ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
//             <div className='content__card'>
//                 <div className='content__side content__side--front'>
//                     <CardMedia
//                         className='content__image'
//                         sx={{ width: '100%', height: '100%' }}
//                         image={image}
//                         title="Image"
//                     />
//                     <div className='content__info'>
//                         <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h4" component="div">
//                             {title}
//                         </Typography>
//                         <Typography sx={{ textAlign: 'center' }} variant="body2" color="text.secondary">
//                             {text}
//                         </Typography>
//                     </div>
//                 </div>
//                 <div className='content__side content__side--back'>
//                     <CardMedia
//                         className='content__image'
//                         sx={{ width: '100%', height: '100%' }}
//                         image={image}
//                         title="Back Image"
//                     />
//                     <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h4" component="div">
//                         {setup}
//                     </Typography>
//                     <Typography sx={{ textAlign: 'center' }} variant="body2" color="text.secondary">
//                         {punch}
//                     </Typography>
//                 </div>
//             </div>
//         </div>
//     );
// }