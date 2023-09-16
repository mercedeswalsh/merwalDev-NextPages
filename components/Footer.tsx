import Link from 'next/link';

import styles from './footer.module.css'

export default function Footer () {
    return (
        <div className={`color-theme-1 ${styles.footer}`}>
            <Link href="/" className={styles.logo}>mercedes walsh</Link>
        </div>
    )
}
