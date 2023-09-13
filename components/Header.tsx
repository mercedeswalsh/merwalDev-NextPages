import styles from './Header.module.css'
import Hamburger from './Hamburger'

import { PortableText } from '@portabletext/react'
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/" className="font-bold">Your Logo</Link>
          </div>

          <div className="md:hidden">
            <button type="button" onClick={() => setIsOpen(!isOpen)}>
          
                {isOpen ? (
                  // This is an "X" icon
                  <>
                  </>
                ) : (

                    // This is a "hamburger" icon
                    <Hamburger />
                )}
              </button>
            </div>
          </div>

          <div className={`${isOpen ? 'block w-screen h-screen' : 'hidden'} md:flex md:flex-row md:space-x-4`}>
          <Link href="/" className={styles.navlink}>home</Link>
          <Link href="/blog"className={styles.navlink}>blog</Link>
          <Link href="/works" className={styles.navlink}>works</Link>
          <Link href="/kits" className={styles.navlink}>kits</Link>
          <Link href="/contact" className={styles.navlink}>contact</Link>
          <Link href="/about" className={styles.navlink}>about me(r)</Link>
          </div>
        </nav>
      </header>
    );
}