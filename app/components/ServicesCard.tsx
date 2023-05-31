"use client"


import Heading from "./Heading";

/* eslint-disable @next/next/no-img-element */
const ServicesCard = () => {
    return (
        <>
            {data.map((item) => (
                <div className="w-full overflow-hidden py-4" key={item.title}>
                    <img className="abosulte w-full rounded-md h-60" src={item.image} alt="Sunset in the mountains" />
                    <Heading 
                    subtitle={item.subtitle}
                    title={item.title}
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
        title: 'Wordpress',
        subtitle: 'Personnalisez votre site',
        image: '/images/cover.jpg'
    },
    {
        title: 'Voix Off',
        subtitle: 'Partagez votre message',
        image: '/images/cover.jpg'
    },
    {
        title: 'Video explicative',
        subtitle: 'Accrochez votre public',
        image: '/images/cover.jpg'
    },
    {
        title: 'Reseaux sociaux',
        subtitle: 'Attirez plus de clients',
        image: '/images/cover.jpg'
    },
    {
        title: 'SEO',
        subtitle: 'Optimisez votre site',
        image: '/images/cover.jpg'
    },
    {
        title: 'Illustration',
        subtitle: 'Illustrez vos reves',
        image: '/images/cover.jpg'
    },
    {
        title: 'Traduction',
        subtitle: 'Internationalisez-vous',
        image: '/images/cover.jpg'
    },
    {
        title: 'Saisie de donnee',
        subtitle: 'Comprenez votre entreprise',
        image: '/images/cover.jpg'
    },
    {
        title: 'Premiere de couverture',
        subtitle: 'Presentez votre histoire',
        image: '/images/cover.jpg'
    },

]