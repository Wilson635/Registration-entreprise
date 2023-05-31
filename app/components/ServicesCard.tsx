"use client"


import Heading from "./Heading";

/* eslint-disable @next/next/no-img-element */
const ServicesCard = () => {
    return (
        <>
            {data.map((item) => (
                <div className="w-full overflow-hidden py-4" key={item.title}>
                    <img className="w-full rounded-md h-60" src={item.image} alt="Sunset in the mountains" />
                    <Heading 
                    title={item.title}
                    subtitle={item.subtitle}
                    />
                </div>
            ))}
        </>
    );
}

export default ServicesCard;




export const data = [
    {
        title: 'Concepteur de logo',
        subtitle: 'Creez votre marque',
        image: '/images/cover.jpg'
    },
    {
        title: 'Concepteur de logo',
        subtitle: 'Creez votre marque',
        image: '/images/cover.jpg'
    },
    {
        title: 'Concepteur de logo',
        subtitle: 'Creez votre marque',
        image: '/images/cover.jpg'
    },
    {
        title: 'Concepteur de logo',
        subtitle: 'Creez votre marque',
        image: '/images/cover.jpg'
    },
    {
        title: 'Concepteur de logo',
        subtitle: 'Creez votre marque',
        image: '/images/cover.jpg'
    },
    {
        title: 'Concepteur de logo',
        subtitle: 'Creez votre marque',
        image: '/images/cover.jpg'
    },
    {
        title: 'Concepteur de logo',
        subtitle: 'Creez votre marque',
        image: '/images/cover.jpg'
    },
    {
        title: 'Concepteur de logo',
        subtitle: 'Creez votre marque',
        image: '/images/cover.jpg'
    },
    {
        title: 'Concepteur de logo',
        subtitle: 'Creez votre marque',
        image: '/images/cover.jpg'
    },
    {
        title: 'Concepteur de logo',
        subtitle: 'Creez votre marque',
        image: '/images/cover.jpg'
    },
    {
        title: 'Concepteur de logo',
        subtitle: 'Creez votre marque',
        image: '/images/cover.jpg'
    },
    {
        title: 'Concepteur de logo',
        subtitle: 'Creez votre marque',
        image: '/images/cover.jpg'
    },
    {
        title: 'Concepteur de logo',
        subtitle: 'Creez votre marque',
        image: '/images/cover.jpg'
    },
    {
        title: 'Concepteur de logo',
        subtitle: 'Creez votre marque',
        image: '/images/cover.jpg'
    },
    {
        title: 'Concepteur de logo',
        subtitle: 'Creez votre marque',
        image: '/images/cover.jpg'
    },{
        title: 'Concepteur de logo',
        subtitle: 'Creez votre marque',
        image: '/images/cover.jpg'
    },
    {
        title: 'Concepteur de logo',
        subtitle: 'Creez votre marque',
        image: '/images/cover.jpg'
    },
    {
        title: 'Concepteur de logo',
        subtitle: 'Creez votre marque',
        image: '/images/cover.jpg'
    },

]