import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function ContentAds(props) {
    const { image, title, text } = props

    return (
        <div className='content__container'>
            <CardMedia
                className='content__image'
                sx={{ width: '100%', height: 250 }}
                image={image}
                title="Image"
            />
            <div className='content__info'>
                <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h4" component="div">
                    {title}
                </Typography>
                <Typography sx={{ textAlign: 'center' }} variant="body2" color="text.secondary">
                    {text}
                </Typography>
            </div>
        </div>
    );
}