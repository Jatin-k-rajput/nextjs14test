
import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Header from '/src/coponents/header;

const Home: React.FC = () => {
  return (

    <div className="bg-gray-100">
      <Head>
        <title>Visit Here</title>
      </Head>


      <main>
        {/* Section 1 with Background Image, Heading, and Paragraph */}
        <section
          className="bg-cover p-4 bg-center  h-screen flex items-center"
          style={{ backgroundImage: 'url("/images/watch.jpg")' }}
        >
          <div className="container mx-auto text-center text-white">
            <Image
              src="\images\next.svg"
              alt="Description of the image"
              width={500}
              height={300}
            />
            <h1 className="text-4xl font-bold mb-4">Welcome to Your Website</h1>
            <p className="text-lg">
              Your paragraph content goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </section>

        {/* Section 2 with Background Image and Two Column Text */}
        <section
          className="bg-cover p-4 bg-slate-700 bg-center h-screen flex items-center"
          style={{ backgroundImage: 'url("/images/black.jpg")' }}
        >
          <div className="container mx-auto text-white gap-8 ">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Heading One</h2>
                <p>
                  Text for column 1 goes here. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 ">heading Two</h2>
                <p>
                  Text for column 2 goes here. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-2 flex justify-center  items-center">
          <div className="container max-auto ">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

              <Image
                src="/images/one.jpg"
                alt="one"
                width={500}
                height={300}
              />
              <Image
                 src="/images/two.jpg"
                alt="two"
                width={500}
                height={300}
              />

              <Image
                 src="/images/three.jpg"
                alt="three"
                width={500} 
                height={300}
              />
            </div>
          </div>
        </section>

      </main>


    </div>
  );
};



export default Home;
