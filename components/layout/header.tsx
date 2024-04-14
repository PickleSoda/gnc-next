'use client'

import Image from "next/image"
import Link from "next/link"
import logo from '@/assets/images/logo.png'
import geo from '@/assets/images/geo-flag.png'
import uk from '@/assets/images/uk-flag.webp'
import { useState } from "react"
import { usePathname } from "next/navigation"

const Header = () => {

    const pathname = usePathname();
    const [showGeoFlag, setShowGeoFlag] = useState<boolean>(true);

    const toggleFlags = () => {
        setShowGeoFlag((prev) => !prev);
    };

    const isActive = (path: string) => (pathname === path ? 'active' : '');

    return (
        <header className="header">
            <div className="header-container">
                <Image height={50} width={50} alt="logo" src={logo}/>
                <div className="header-links">
                    <Link href='/' className={isActive('/')}>Home</Link>
                    <Link href='/about' className={isActive('/about')}>About</Link>
                    <Link href='/contact' className={isActive('/contact')}>Contact</Link>
                    <Link href='/projects' className={isActive('/projects')}>Projects</Link>
                </div>
                <div>
                    {showGeoFlag ? (
                        <Image
                        className="flag-img"
                        src={geo}
                        alt="geo"
                        width={30}
                        height={20}
                        onClick={toggleFlags}
                        />
                    ) : (
                        <Image
                        className="flag-img"
                        src={uk}
                        alt="uk"
                        width={30}
                        height={20}
                        onClick={toggleFlags}
                        />
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header