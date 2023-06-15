'use client';
import {
  agriczoneObjectiveData,
  expertPictureData,
  traderPictureData,
  farmProducePictureData,
} from '@/utils/data';
import { Divider } from '@mui/material';
import React from 'react';
// import Fade from 'react-reveal/Fade';

import Marquee from 'react-fast-marquee';

const AgricZoneObjective = () => {
  return (
    <>
      <div className="h-full md:min-h-screen w-full place-items-center  md:w-3/6 grid">
        <Marquee className="container--image--experts">
          {expertPictureData.map((item) => (
            <img
              key={item.id}
              src={`${item.image}`}
              alt={item.image}
              className="w-72 mx-2 h-48 rounded-md shadow-md object-cover"
            />
          ))}
        </Marquee>
        <Marquee
          style={{
            margin: '1rem 0 1rem 0',
          }}
          direction="right"
          className="container--image--marketplace"
        >
          {farmProducePictureData.map((item) => (
            <img
              key={item.id}
              src={`${item.image}`}
              alt={item.image}
              className="w-72 mx-2 h-48 rounded-md shadow-md object-cover"
            />
          ))}
        </Marquee>
        <Marquee className="container--image--traders">
          {traderPictureData.map((item) => (
            <img
              key={item.id}
              src={`${item.image}`}
              alt={item.image}
              className="w-72 mx-2 rounded-md shadow-md h-48 object-cover"
            />
          ))}
        </Marquee>
      </div>

      {
        <div className="md:hidden">
          <h2 className="text-2xl mt-10 p-4 rounded-md ">
            Curious to know what Agric Zone is all about?
          </h2>

          <div className="rounded-md">
            <ul className="marker:text-green-500 marker:text-2xl list-outside p-4 mx-6 list-disc ">
              {agriczoneObjectiveData.map((item) => (
                <li
                  className=" dark:text-slate-100 text-slate-700 mb-4"
                  key={item.id}
                >
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      }
      <Divider />
      <div className="md:hidden dark:text-slate-100 text-slate-700 space-y-2 px-8 my-10">
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
