import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import {
  faFile,
  faLightbulb,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from 'next-themes';

const Header = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <FontAwesomeIcon
          icon={faSun}
          role='button'
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <FontAwesomeIcon
          icon={faMoon}
          role='button'
          onClick={() => setTheme('dark')}
        />
      );
    }
  };

  return (
    <header>
      <nav className='bg-[#fff] px-4 lg:px-6 py-2.5 dark:bg-[#252e42]'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
          <a href='#' rel='noopener' className='flex items-center m-0'>
            <img
              src='free.png'
              className='mr-3 sm:h-9 rounded-full'
              alt='0xfree image'
            />
            <span className='self-center  text-black text-xl font-[Rubik Distressed]  whitespace-nowrap dark:text-white'>
              0xfree
            </span>
          </a>
          <div className='flex items-center lg:order-2'>
            <a
              href='https://twitter.com/0xfreepearl '
              rel='noopener'
              className='text-[#252e42] dark:text-white hover:bg-gray-50  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800'
            >
              Twitter
              <FontAwesomeIcon icon={faTwitter} className='mx-2' />
            </a>

            <a
              href='#'
              rel='noopener'
              className='text-gray-800 dark:text-white hover:bg-gray-50 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800'
            >
              Linkedin
              <FontAwesomeIcon icon={faLinkedin} className='mx-2' />
            </a>
            <a
              href='https://github.com/ozgurtutarr?tab=repositories'
              rel='noopener'
              className='text-gray-800 dark:text-white hover:bg-gray-50 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800'
            >
              GitHub
              <FontAwesomeIcon icon={faGithub} className='mx-2' />
            </a>
            <a
              href='#'
              className='text-gray-800 dark:text-white hover:bg-gray-50  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800'
            >
              Resume
              <FontAwesomeIcon icon={faFile} className='mx-2' />
            </a>
            <button>{renderThemeChanger()}</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
