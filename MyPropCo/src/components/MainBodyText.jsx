import * as React from 'react';
import Button from '@mui/material/Button';

export default function MainBodyText() {


    return (
        <div className='main-wrapper'>
            <div className='main-container'>
                <h1 className='main-title'>Lorem ipsum dolor sit amet</h1>
                <p className='main-paragraph'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et. Urna nec tincidunt praesent semper. Ac tortor vitae purus faucibus ornare suspendisse sed. Lacus sed viverra tellus in hac habitasse. Iaculis at erat pellentesque adipiscing commodo elit. Fringilla urna porttitor rhoncus dolor purus non. Facilisis gravida neque convallis a cras semper auctor neque vitae. Porttitor lacus luctus accumsan tortor posuere ac ut.</p>
                <Button
                    className='main-button'
                    sx={{
                        bgcolor: '#FC495D',
                        fontSize: 10,
                        fontFamily: 'Open Sans',
                        height: 30,
                        width: 95,
                        marginTop: 3
                    }}
                    variant="contained">Read more</Button>
            </div>
        </div>
    )
}



