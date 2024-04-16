import Link from "next/link"
import { FC } from "react"

interface IPropsMenu {
    open: boolean
    onClose: () => void
}

const MobileMenu: FC<IPropsMenu> = ( {open, onClose} ) => {
    return (
        <div id="mobile-menu-container" className={open ? 'open' : ''}>
            <div className="layout" onClick={() => onClose()}></div>
            <div className="mobile-menu-content">
                <div className="mobile-menu-content-container">
                    <ul onClick={() => onClose()}>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/about'>About</Link></li>
                        <li><Link href='/contact'>Contact</Link></li>
                        <li><Link href='/projects'>Projects</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu