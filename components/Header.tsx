import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './Header.module.css';

export default function Header() {
  const router = useRouter();

  return (
    <div className={`${styles.header} color-theme-1`}>
      <Link href="/" className={styles.logo}>mercedes walsh</Link>
      <ul className={styles.navlink}>
        <li>
          <Link href="/" className={router.pathname === '/' ? `${styles.active}` : ''}>
            home
          </Link>
        </li>
          
        
        <li>
        <Link href="/blog" className={router.pathname === '/blog' ? `${styles.active}` : ''}>
            blog
          </Link>  
        </li>
        
        
        <li>
          <Link href="/works" className={router.pathname === '/works' ? `${styles.active}` : ''}>
            works
          </Link>
        </li>
        <li>
        <Link href="/kits" className={router.pathname === '/kits' ? `${styles.active}` : ''}>
            kits
          </Link>
        </li>
        <li>
          <Link href="/about" className={router.pathname === '/about' ? `${styles.active}` : ''}>
            about me(r)
          </Link>
        </li>
      </ul>
    </div>
  );
}