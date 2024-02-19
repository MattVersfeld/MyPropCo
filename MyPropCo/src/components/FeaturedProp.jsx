import Card from 'react-bootstrap/Card';

export default function FeaturedProp(props) {
    const { price, heading, description, agentName, contactNum, image, avatar, bedrooms, bathrooms, garages } = props

    return (
        <div className='featured-card-container'>
            <Card className='featured-container'>
                <Card.Img className='featured-image' variant="top" src={image} />
                <Card.Body>
                    <Card.Title className='featured-price'>{price}</Card.Title>
                    <Card.Text className='featured-heading'>
                        {heading}
                    </Card.Text>
                    <div className='featured-icons'>
                        <img src='./src/assets/Listing-icons.svg' />
                        <p>{bedrooms}</p>
                        <img src='./src/assets/Listing-icons-1.svg' />
                        <p>{bathrooms}</p>
                        <img src='./src/assets/Listing-icons-2.svg' />
                        <p>{garages}</p>
                    </div>
                    <Card.Text className='featured-description'>
                        {description}
                    </Card.Text>
                    <div className='featured-avatar'>
                        <img className='featured-avatar-image' src={avatar} alt="Agent Avatar" />
                        <div className='featured-avatar-info'>
                            <p>{agentName}</p>
                            <p>{contactNum}</p>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

// import * as React from 'react';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import Avatar from '@mui/material/Avatar';

// export default function FeaturedProp(props) {
//     const { price, heading, description, agentName, contactNum, image, avatar, bedrooms, bathrooms, garages } = props


//     return (
//         <div className='featured__container'>
//             <div className='featured__image'>
//                 <CardMedia
//                     sx={{ height: '100%', width: 620 }}
//                     image={image}
//                 />
//             </div>
//             <div className='featured__info'>
//                 <Typography sx={{
//                     fontWeight: 'bold',
//                     width: 125,
//                     fontFamily: 'Open Sans',
//                     fontSize: 24
//                 }} gutterBottom variant="h2" component="div">
//                     {price}
//                 </Typography>
//                 <Typography sx={{ fontSize: 15, color: '#828282' }} gutterBottom variant="h5" component="div">
//                     {heading}
//                 </Typography>
//                 <div className='featured__icons'>
//                     <img src="./src/assets/Listing-icons.svg" alt="" />
//                     <Typography sx={{ fontSize: 13, color: '#828282' }} gutterBottom variant="h6" component="div">
//                         {bedrooms}
//                     </Typography>
//                     <img src="./src/assets/Listing-icons-1.svg" alt="" />
//                     <Typography sx={{ fontSize: 13, color: '#828282' }} gutterBottom variant="h6" component="div">
//                         {bathrooms}
//                     </Typography>
//                     <img src="./src/assets/Listing-icons-2.svg" alt="" />
//                     <Typography sx={{ fontSize: 13, color: '#828282' }} gutterBottom variant="h6" component="div">
//                         {garages}
//                     </Typography>
//                 </div>

//                 <Typography sx={{ fontSize: 15, color: '#828282' }} gutterBottom variant="h5" component="div">
//                     {description}
//                 </Typography>
//                 <div className='featured__avatar'>
//                     <Avatar sx={{ height: 69, width: 69, marginRight: '20px' }} alt="Agent Avatar" src={avatar} />
//                     <div className='featured__avatar_info'>
//                         <Typography sx={{ fontSize: 15, fontWeight: 'bold' }} gutterBottom variant="h6" component="div">
//                             {agentName}
//                         </Typography>
//                         <Typography sx={{ fontSize: 15, color: '#FC495D' }} gutterBottom variant="h6" component="div">
//                             {contactNum}
//                         </Typography>
//                     </div>

//                 </div>
//             </div>

//         </div>
//     );
// }