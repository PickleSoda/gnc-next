
import Image from "next/image"
import Link from "next/link"
import logo from '@/assets/images/logo.png'
import geo from '@/assets/images/geo-flag.png'
import uk from '@/assets/images/uk-flag.webp'
import { useState } from "react"
// import { usePathname } from "next/navigation"
import MobileMenu from "../ui/mobileMenu"
import HeaderMenu from "../partials/headerMenu"

const Header = ({ dict, lang}: { dict:any; lang:string}) => {

    // const pathname = usePathname();
    // const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false)

    // const setBodyFixed = () => {
    //     document.body.classList.toggle('fixed')
    // }

    return (
        <header className="header">
            <div className="header-container">
                <Link href='/'><Image height={50} width={50} alt="logo" src={logo}/></Link>
                <div className="header-links">
                    <HeaderMenu lang={lang} />
                </div>
                <div>
                    {/* {showGeoFlag ? (
                        <Link href='/en'>
                            <Image
                                className="flag-img"
                                src={geo}
                                alt="geo"
                                width={30}
                                height={20}
                                onClick={toggleFlags}
                            />
                        </Link>
                    ) : (
                        <Link href='/ge'>
                            <Image
                                className="flag-img"
                                src={uk}
                                alt="uk"
                                width={30}
                                height={20}
                                onClick={toggleFlags}
                            />
                        </Link>
                    )} */}

                        <Link href='/ge'>
                            <Image
                                className="flag-img"
                                src={geo}
                                alt="geo"
                                width={30}
                                height={20}
                                // onClick={toggleFlags}
                            />
                        </Link>

                        <Link href='/en'>
                            <Image
                                className="flag-img"
                                src={uk}
                                alt="uk"
                                width={30}
                                height={20}
                                // onClick={toggleFlags}
                            />
                        </Link>
                </div>
                {/* <svg className="burger-menu" onClick={() => {setOpenMobileMenu(true); setBodyFixed()}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg> */}
            </div>
            {/* <MobileMenu open={openMobileMenu} onClose={() => {setOpenMobileMenu(false); setBodyFixed()}}/> */}
        </header>
    )
}

export default Header