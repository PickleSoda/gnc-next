import Link from 'next/link';
import { getDictionary } from "@/app/[lang]/dictionaries";


async function HeaderMenu({ lang }:any) {
  const dict = await getDictionary(lang)

  return (
    <>
        <Link className='header-links' href='/'>{dict.links.home}</Link>
        <Link className='header-links' href='/about'>{dict.links.about}</Link>
        <Link className='header-links' href='/contact'>{dict.links.contact}</Link>
        <Link className='header-links' href='/projects'>{dict.links.projects}</Link>
    </>
)
};

export default HeaderMenu;