import Link from "next/link"

const Header = () => {
    return (
        <header className="header">
            <Link href='/'>home</Link>
            <Link href='/about'>abouta</Link>
            <Link href='/contact'>contact</Link>
            <Link href='/projects'>projects</Link>
        </header>
    )
}

export default Header