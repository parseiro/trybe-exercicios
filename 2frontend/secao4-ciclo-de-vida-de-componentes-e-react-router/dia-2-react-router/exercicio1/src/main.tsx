import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Flowbite } from 'flowbite-react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Flowbite
        theme={{
          theme: {
            navbar: {
              collapse: {
                base: 'w-full sm:block sm:w-auto', // original had: sm:w-auto
                list: 'mt-4 flex flex-col sm:mt-0 sm:flex-row sm:space-x-8 sm:text-sm sm:font-medium sm:justify-around',
              },
              link: {
                base: 'block py-2 pr-4 pl-3 sm:p-0',
                active: {
                  on: 'bg-blue-700 text-white dark:text-white sm:bg-transparent sm:text-blue-700',
                  off: 'border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white sm:border-0 sm:hover:bg-transparent sm:hover:text-blue-700 sm:dark:hover:bg-transparent sm:dark:hover:text-white',
                },
              },
              toggle: {
                base: 'inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden',
                icon: 'h-6 w-6 shrink-0',
              },
            },
          },
        }}
      >
        <App />
      </Flowbite>
    </BrowserRouter>
  </React.StrictMode>
);
