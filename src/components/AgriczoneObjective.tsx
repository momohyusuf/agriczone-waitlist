'use client';
import { agriczoneObjectiveData } from '@/utils/data';
import React from 'react';
// import Fade from 'react-reveal/Fade';
import { Fade } from 'react-awesome-reveal';

const AgricZoneObjective = () => {
  return (
    <>
      <div className="h-full md:min-h-screen w-full md:w-3/6 grid place-items-center agriczone--objective--bg p-4">
        <div>
          <h2 className="text-3xl bg--glass p-4 rounded-md mb-10 text-white">
            Curious to know what Agric Zone is all about?
          </h2>

          <div className="bg--glass rounded-md">
            <ul className="marker:text-green-500 marker:text-2xl list-outside my-10 p-4 mx-6 list-disc ">
              {agriczoneObjectiveData.map((item) => (
                <li className="text-slate-50 mb-4" key={item.id}>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="md:hidden space-y-2 p-4 my-10">
        <p>Want to partner with us on this amazing journey? </p>
        <p>
          Send us a mail{' '}
          <a
            className="text-green-600 hover:text-green-800 transition-all duration-300"
            href="mailto:info@agriczone.com"
          >
            info@agriczone.com
          </a>
        </p>
        <p> &#xA9; 2023</p>
      </div>
    </>
  );
};

export default AgricZoneObjective;
