import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import styles from "./Header.module.css"

export default function Header() {
    return (
        <header className="header">
            <nav className="flex justify-between">
                <Link href="/"><a className="mx-2">home</a></Link>
                <Link href="/blog"><a className="mx-2">blog</a></Link>
                <Link href="/works"><a className="mx-2">works</a></Link>
                <Link href="/kits"><a className="mx-2">kits</a></Link>
                <Link href="/contact"><a className="mx-2">contact</a></Link>
                <Link href="/about"><a className="mx-2">about me(r)</a></Link>
            </nav>
        </header>
    )
}