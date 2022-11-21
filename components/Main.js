import { faGithub, faWeebly } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faSitemap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from '../styles/Home.module.css';

const Main = () => {
  return (
    <main class={styles.main}>
      <h1 class='text-8xl mb-20 leading-15'>Özgür Tutar</h1>
      <div class={styles.grid}>
        <div className='max-w-sm bg-[#F05454] border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-2'>
          <a href='https://whitelist-dapp-orcin.vercel.app/'>
            <img
              class='rounded-t-lg transition-all duration-500 ease-in-out transform bg-center bg-cover overflow-hidden hover:mb-6 hover:scale-150 hover:rounded-xl hover:border hover:border-black '
              src='/1.png'
              alt='Whitelist Dapp Website Image'
            />
          </a>
          <div class='p-5'>
            <a href='#'>
              <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                Whitelist Dapp
              </h5>
            </a>
            <p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              Its an whitelist for developers in Crypto.
            </p>
          </div>
          <div class='flex justify-center items-center'>
            <a
              href='https://github.com/ozgurtutarr/whitelist-dapp'
              rel='noopener'
              class='inline-flex items-center justify-center m-2 px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              <FontAwesomeIcon icon={faGithub} class='mx-2 m-auto ' />
            </a>
            <a
              href='https://whitelist-dapp-orcin.vercel.app/'
              rel='noopener'
              className='inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              <FontAwesomeIcon icon={faGlobe} class='mx-2 m-auto ' />
            </a>
          </div>
        </div>
        <div className='max-w-sm bg-[#F05454] border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-2'>
          <a href='https://mint-nft-collection.vercel.app/'>
            <img
              class='rounded-t-lg transition-all duration-500 ease-in-out transform bg-center bg-cover overflow-hidden hover:mb-6 hover:scale-150 hover:rounded-xl hover:border hover:border-black '
              src='/nft-mint.png'
              alt='NFT Mint Dapp Website Image'
            />
          </a>
          <div class='p-5'>
            <a href='#'>
              <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                NFT Mint Dapp
              </h5>
            </a>
            <p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              Its an NFT collection for developers in Crypto.
            </p>
          </div>
          <div class='flex justify-center items-center'>
            <a
              href='#'
              class='inline-flex items-center justify-center m-2 px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              <FontAwesomeIcon icon={faGithub} class='mx-2 m-auto ' />
            </a>
            <a
              href='#'
              class='inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              <FontAwesomeIcon icon={faGlobe} class='mx-2 m-auto ' />
            </a>
          </div>
        </div>
        <div className='max-w-sm bg-[#F05454] border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-2'>
          <a href='https://ico-lovat-nine.vercel.app/'>
            <img
              class='rounded-t-lg transition-all duration-500 ease-in-out transform bg-center bg-cover overflow-hidden hover:mb-6 hover:scale-150 hover:rounded-xl hover:border hover:border-black '
              src='/ico.png'
              alt='ICO image'
            />
          </a>
          <div class='p-5'>
            <a href='#'>
              <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                ICO
              </h5>
            </a>
            <p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              Its an ICO.
            </p>
          </div>
          <div class='flex justify-center items-center'>
            <a
              href='#'
              class='inline-flex items-center justify-center m-2 px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              <FontAwesomeIcon icon={faGithub} class='mx-2 m-auto ' />
            </a>
            <a
              href='#'
              class='inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              <FontAwesomeIcon icon={faGlobe} class='mx-2 m-auto ' />
            </a>
          </div>
        </div>
        <div className='max-w-sm bg-[#F05454] border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-2'>
          <a href='https://dao-ruddy.vercel.app/'>
            <img
              class='rounded-t-lg transition-all duration-500 ease-in-out transform bg-center bg-cover overflow-hidden hover:mb-6 hover:scale-150 hover:rounded-xl hover:border hover:border-black '
              src='/DAO.png'
              alt='Whitelist Dapp Website Image'
            />
          </a>
          <div class='p-5'>
            <a href='#'>
              <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                DAO
              </h5>
            </a>
            <p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              Its an NFT collection for developers in Crypto.
            </p>
          </div>
          <div class='flex justify-center items-center'>
            <a
              href='#'
              class='inline-flex items-center justify-center m-2 px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              <FontAwesomeIcon icon={faGithub} class='mx-2 m-auto ' />
            </a>
            <a
              href='#'
              class='inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              <FontAwesomeIcon icon={faGlobe} class='mx-2 m-auto ' />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
