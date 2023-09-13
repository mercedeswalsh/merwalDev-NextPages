import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import styles from "./Header.module.css"

export default function Header() {
    return (
        <header className="header">
            <nav>
                <Link href="/"><a>home</a></Link>
                <Link href="/blog"><a>blog</a></Link>
                <Link href="/works"><a>works</a></Link>
                <Link href="/kits"><a>kits</a></Link>
                <Link href="/contact"><a>contact</a></Link>
                <Link href="/about"><a>about me(r)</a></Link>
            </nav>
        </header>
    )
}