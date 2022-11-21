import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='flex justify-center items-center border-t border-solid border-[#eaeaea] mx-4 my-4 mb-0'>
      <a href='#'>
        <Image src='/free.png' alt='Free Image' width={72} height={30} />
      </a>
    </footer>
  );
};

export default Footer;
