'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { LinkIcon } from '@heroicons/react/outline';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const ContentSwitcher: React.FC<{ selected: string }> = ({ selected }) => {
  switch (selected) {
    case 'Who am I':
      return (
        <div className=''>
          <img src="https://images.unsplash.com/photo-1665686304312-16e3a16be0ed?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <h3>Who am I</h3>
          <p>Let&apos;s talk about me</p>
        </div>
      );
    case 'My work':
      return (
        <div>
          <img src="" alt="" />
          <h3>My work</h3>
          <p>You can find all my projects here</p>
        </div>
      );
    case 'You may like':
      return (
        <div>
          <img src="" alt="" />
          <h3>You may like</h3>
          <p>Some non-dev projects if you&apos;re curious</p>
        </div>
      );
    case 'Contact me':
      return (
        <div>
          <img src="" alt="" />
          <h3>Contact me</h3>
          <p>Let&apos;s talk</p>
        </div>
      );
    default:
      return null;
  }
};

const Categorie: React.FC = () => {
  const [showWhoAmI, setShowWhoAmI] = useState<boolean>(false);
  const [showMyWork, setShowMyWork] = useState<boolean>(false);
  const [showYouMayLike, setShowYouMayLike] = useState<boolean>(false);
  const [showContactMe, setShowContactMe] = useState<boolean>(false);
  const [showText, setShowText] = useState<boolean>(false);

  const handleButtonClick = (buttonName: string) => {
    setShowWhoAmI(buttonName === 'Who am I');
    setShowMyWork(buttonName === 'My work');
    setShowYouMayLike(buttonName === 'You may like');
    setShowContactMe(buttonName === 'Contact me');
    setShowText(false);
  };

  return (
    <div className='flex flex-col'>
      <div className="categorie-container">
        <div className='flex flex-row items-end'>
          <button
            className="categorie-button categorie-font"
            onClick={() => handleButtonClick('Who am I')}
          >
            LEA BESSE
          </button>
          {showWhoAmI && <ContentSwitcher selected='Who am I' />}
        </div>
        <Link href="" passHref>
          <button
            className="categorie-button"
            onClick={() => handleButtonClick('My work')}
          >
            PROJECTS
          </button>
        </Link>
        {showMyWork && <ContentSwitcher selected='My work' />}
        <Link href="" passHref>
          <button
            className="categorie-button"
            onClick={() => handleButtonClick('You may like')}
          >
            OTHERS
          </button>
        </Link>
        {showYouMayLike && <ContentSwitcher selected='You may like' />}
        <Link href="" passHref>
          <button
            className="categorie-button"
            onClick={() => handleButtonClick('Contact me')}
          >
            CONTACT
          </button>
        </Link>
        {showContactMe && <ContentSwitcher selected='Contact me' />}
      </div>

      <div>
        {showText && <p>Texte à afficher en dessous de toutes les catégories</p>}
      </div>
    </div>
  );
};

export default Categorie;
