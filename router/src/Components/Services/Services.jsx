import React from 'react';

const Services = () => {
    return (
        <div className=' w-screen h-screen flex flex-col bg-purple-500 '>
              <h1 className=' font-extrabold text-6xl text-white text-center '>The services we provide are highlighted here:</h1>
            <ul className=' font-normal text-6xl text-amber-100 text-center pt-20'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
        </div>
    );
}

export default Services;
