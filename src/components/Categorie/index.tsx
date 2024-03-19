import React from 'react';
import Link from 'next/link';

const Categorie: React.FC = () => {
  return (
    <div className="categorie-container">
      <Link href="/lea-besse" passHref>
        <button className="categorie-button categorie-font">LEA BESSE</button>
      </Link>
      <Link href="/projects" passHref>
        <button className="categorie-button">PROJECTS</button>
      </Link>
      <Link href="/others" passHref>
        <button className="categorie-button">OTHERS</button>
      </Link>
      <Link href="/contact" passHref>
        <button className="categorie-button">CONTACT</button>
      </Link>
    </div>
  );
};

export default Categorie;
