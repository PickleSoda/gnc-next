import Link from 'next/link';
import { getDictionary } from "@/app/[lang]/dictionaries";


async function HeaderMenu({ lang }:any) {
  const dict = await getDictionary(lang)

  return (
    <>
        <Link href='/'>{dict.links.home}</Link>
        <Link href='/about'>{dict.links.about}</Link>
        <Link href='/contact'>{dict.links.contact}</Link>
        <Link href='/projects'>{dict.links.projects}</Link>
    </>
)
};

export default HeaderMenu;