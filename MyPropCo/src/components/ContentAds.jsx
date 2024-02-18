import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function MediaCard() {
    return (
        <div>
            <CardMedia
                sx={{ width: 300, height: 413 }}
                image="./src/assets/CTA1.png"
                title="Image"
            />
            <Typography gutterBottom variant="h4" component="div">
                title
            </Typography>
            <Typography variant="body2" color="text.secondary">
                random text
            </Typography>
        </div>
    );
}