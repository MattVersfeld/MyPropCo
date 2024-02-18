import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function FooterInfo() {


    return (
        <>
            <div className='footer__container'>
                <div className='footer__info'>
                    <div className='footer__images'>
                        <img src="./src/assets/Associations/EAAB/Light.png" alt="" />
                        <img src="./src/assets/Associations/IEASA/Light.png" alt="" />
                    </div>
                    <div className='footer__links_top'>
                        <p>Browse:</p>
                        <a href="https://www.example.com">Home</a>
                        <a href="https://www.example.com">Resedential for sale [5]</a>
                        <a className='footer__link_red' href="https://www.example.com">Calculators</a>
                        <a href="https://www.example.com">Company Profile</a>
                        <a href="https://www.example.com">Agent Search</a>
                        <a href="https://www.example.com">Contact Us</a>
                        <a href="https://www.example.com">Website map</a>
                        <a href="https://www.example.com">Links</a>
                        <a href="https://www.example.com">Privacy policy</a>
                    </div>
                    <hr className='footer__line' />
                    <div className='footer__links_bottom'>
                        <p>Resedential for sale [54]:</p>
                        <a href="https://www.example.com">Amanzimtoti [12]</a>
                        <a href="https://www.example.com">Athlone Park [3]</a>
                        <a href="https://www.example.com">Doonside [6]</a>
                        <a href="https://www.example.com">Warner Beach [11]</a>
                        <a href="https://www.example.com">St Winifreds [4]</a>
                        <p>Residential To Let [54]:</p>
                        <a href="https://www.example.com">Amanzimtoti [12]</a>
                        <a href="https://www.example.com">Athlone Park [3]</a>
                        <a href="https://www.example.com">Doonside [6]</a>
                        <a href="https://www.example.com">Warner Beach [11]</a>
                        <a href="https://www.example.com">St Winifreds [4]</a>
                    </div>
                    <div className='footer__icons'>
                        <img src="./src/assets/footer-icon.svg" alt="" />
                        <p className='footer__icons_paragraph'>Website Powered by Prop Data Copyright © 2019 Name</p>
                        <img src="./src/assets/Facebook.svg" alt="" />
                        <img src="./src/assets/Twitter.svg" alt="" />
                        <img src="./src/assets/YouTube.svg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
