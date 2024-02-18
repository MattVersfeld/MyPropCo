import React from 'react';
import Carousel from 'react-material-ui-carousel/dist'
import { featuredPropData } from '../data/data';
import FeaturedProp from './FeaturedProp';

export default function FeaturedCarousel() {


    const propCards = (props) => {
        return props.map(item => (
            <FeaturedProp
                key={item.id}
                price={item.price}
                heading={item.heading}
                description={item.description}
                agentName={item.agentName}
                contactNum={item.contactNum}
                image={item.image}
                avatar={item.avatar}
                bedrooms={item.listingInfo.bedrooms}
                bathrooms={item.listingInfo.bathrooms}
                garages={item.listingInfo.garages}
            />
        ))
    }

    const properties = propCards(featuredPropData)

    return (
        <div className='carousel__container'>
            <h2 className='carousel__title'>Featured Properties</h2>
            <Carousel
                sx={{ maxWidth: '1500px', margin: '0 auto' }}
                autoPlay={false}
                indicators={true}
                animation='fade'
                navButtonsAlwaysVisible={true}
            >
                {properties}
            </Carousel>
        </div>

    )
}