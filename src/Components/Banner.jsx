import React from 'react';

const Banner = () => {

    const image = [
        'https://rukminim2.flixcart.com/fk-p-flap/960/160/image/5b309e98775e22e4.jpg?q=60',
        // 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        // 'https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    ]
  return (
    <div className='mt-12 m-4'>
        {image.map((img, index) => (
            <div key={index} className='w-full rounded-lg mb-4'>
                <div id={`slide${index+1}`} className="relative w-full">
                    <img src={img} className="w-full object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href={`#slide${index === 0 ? image.length : index}`} className="btn btn-circle">❮</a>
                        <a href={`#slide${index === image.length - 1 ? 1 : index + 2}`} className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        ))}
    </div>
  );
}

export default Banner;
