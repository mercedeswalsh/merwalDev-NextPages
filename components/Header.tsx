import styles from './Header.module.css'
import Hamburger from './Hamburger'

import { PortableText } from '@portabletext/react'
import Link from 'next/link';
import { useState } from 'react';

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

          <div className={`md:block ${isOpen ? 'block' : 'hidden'}`}>
          <Link href="/"><a className={styles.navlink}>home</a></Link>
          <Link href="/blog"><a className={styles.navlink}>blog</a></Link>
          <Link href="/works"><a className={styles.navlink}>works</a></Link>
          <Link href="/kits"><a className={styles.navlink}>kits</a></Link>
          <Link href="/contact"><a className={styles.navlink}>contact</a></Link>
          <Link href="/about"><a className={styles.navlink}>about me(r)</a></Link>
          </div>
        </nav>
      </header>
    );
}