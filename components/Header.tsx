import { PortableText } from '@portabletext/react'
import { useState } from 'react';
import Link from 'next/link';
import './Header.module.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/"><a className="font-bold">Your Logo</a></Link>
          </div>

          <div className="md:hidden">
            <button type="button" onClick={() => setIsOpen(!isOpen)}>
              <svg viewBox="0 0 20 20" fill="currentColor">
                {isOpen ? (
                  // This is an "X" icon
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                ) : (
                  // This is a "hamburger" icon
                  <path fillRule="evenodd" d="M4 5a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm0 6a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm6-11a1 1 0 00-1-1H5a1 1 0 000 2h4a1 1 0 
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className={`md:block ${isOpen ? 'block' : 'hidden'}`}>
          <Link href="/"><a className="mx-2">home</a></Link>
          <Link href="/blog"><a className="mx-2">blog</a></Link>
          <Link href="/works"><a className="mx-2">works</a></Link>
          <Link href="/kits"><a className="mx-2">kits</a></Link>
          <Link href="/contact"><a className="mx-2">contact</a></Link>
          <Link href="/about"><a className="mx-2">about me(r)</a></Link>
          </div>
        </nav>
      </header>
    );
}