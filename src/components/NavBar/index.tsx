'use client'
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { LinkIcon } from '@heroicons/react/outline';


function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Logo et titre */}
              <div className="flex flex-shrink-0 items-center">
                <h1 className="text-white text-xxl font-thin">Welcome</h1>
              </div>
              {/* Liens pour les langues */}
              <div className="hidden sm:flex sm:items-center sm:ml-6">
                <a className="text-white hover:text-gray-300 mr-4">🐭</a>
              </div>
              {/* logo */}
              <div className="hidden sm:flex sm:items-center sm:ml-6">
                <a href="#" className="text-white hover:text-gray-300 mr-4">ENG</a>
                <a href="#" className="text-white hover:text-gray-300 mr-4">FR</a>
              </div>
              {/* Bouton de menu mobile */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  <LinkIcon className="block h-6 w-6" aria-hidden="true" />
                </Disclosure.Button>
              </div>
            </div>
          </div>
          {/* Menu mobile */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Liens pour les langues */}
              <div className="flex justify-center">
                <a href="#" className="text-white hover:text-gray-300 mr-4">ENG</a>
                <a href="#" className="text-white hover:text-gray-300 mr-4">FR</a>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
