import React, { useState } from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ContentAds(props) {
    const { image, backImage, title, text } = props;
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (

        <div className={`content__container ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div className='content__card'>
                <div className='content__side content__side--front'>
                    <CardMedia
                        className='content__image'
                        sx={{ width: '100%', height: '100%' }}
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
                <div className='content__side content__side--back'>
                    <CardMedia
                        className='content__image'
                        sx={{ width: '100%', height: '100%' }}
                        image={image}
                        title="Back Image"
                    />
                    <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h4" component="div">
                        Why do developers prefer dark mode?
                    </Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="body2" color="text.secondary">
                        Light attracts bugs!
                    </Typography>
                </div>
            </div>
        </div>
    );
}