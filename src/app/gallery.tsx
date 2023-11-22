import React, { useState } from 'react';
import Image from 'next/image';

const Gallery: React.FC = () => {
const [isLightboxOpen, setIsLightboxOpen] = useState(false);
const [lightboxImage, setLightboxImage] = useState('');

const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc);
    setIsLightboxOpen(true);
};

const closeLightbox = () => {
    setIsLightboxOpen(false);
};

return (
    <section className="py-20 px-2 flex justify-center items-center">
    <div className="container max-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Image
    src="images\two.jpg" // Path to your image file
    alt="Description of the image"
    width={500} // Width of the image
    height={300} // Height of the image
    />
        
        </div>
    </div>

    {/* Lightbox */}
    {isLightboxOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center">
        <div className="max-w-screen-md w-full p-4">
            <ModalImage
            small={lightboxImage}
            large={lightboxImage}
            alt="Enlarged Image"
            onClose={closeLightbox}
            />
        </div>
        </div>
    )}
    </section>
);
};

export default Gallery;




