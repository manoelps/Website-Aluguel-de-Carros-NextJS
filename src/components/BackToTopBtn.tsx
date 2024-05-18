'use client';

import { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa6';
import { Link } from 'react-scroll';

const BackToTopBtn = () => {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 400 ? setActive(true) : setActive(false);
    };

    window.addEventListener('scroll', handleScroll);

    // clean up the event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <Link
      to="home"
      smooth
      spy
      className={`${
        !isActive && 'hidden'
      } fixed bg-accent hover:bg-accent-hover w-12 h-12 right-16 bottom-11 z-10 cursor-pointer
      flex justify-center items-center text-white border-2 border-white`}
    >
      <FaChevronUp className="text-xl" />
    </Link>
  );
};

export default BackToTopBtn;
