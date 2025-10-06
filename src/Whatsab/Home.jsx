import React from 'react';
import image from '../assets/1678304313134-3.jpeg'
 
export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black bg-opacity-50 text-white z-50 flex justify-between px-8 py-4">
        <div className="font-bold text-xl">STG</div>
        <ul className="flex gap-6">
          <li>PORTFOLIO</li>
          <li>WHO WE ARE</li>
          <li>NEWS</li>
          <li>CONTACT</li>
        </ul>
      </nav>

      {/* Hero Section with Video Background */}
      <section className="relative h-screen w-full overflow-hidden">
               <img src={image} alt="CaseWorthy" className="absolute top-0 left-0 w-full h-full object-cover z-20"/>
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">PORTFOLIO</h1>
          <p className="max-w-2xl text-lg">
            Our global portfolio of companies includes skf;dfkjnvnionjf  market leaders across the mid-market software and software-enabled tech services landscape.
          </p>
        </div>
      </section>

      {/* Logos Section */}
      <section className="bg-white py-16 px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
          <img src="/logos/avi.png" alt="AVI" className="h-12 mx-auto" />
          <img src="/logos/cadmium.png" alt="Cadmium" className="h-12 mx-auto" />
          <img src="/logos/cai.png" alt="CAI" className="h-12 mx-auto" />
          <img src="/logos/caseworthy.png" alt="CaseWorthy" className="h-12 mx-auto" />
        </div>
      </section>
 
     </>
  );
}