import Link from 'next/link';
import { getDictionary } from "@/app/[lang]/dictionaries";


async function HeaderMenu({ lang }:any) {
  const dict = await getDictionary(lang)

  return (
    <>
        <Link href={`/${lang}/`}>{dict.links.home}</Link>
        <Link href={`/${lang}/about`}>{dict.links.about}</Link>
        <Link href={`/${lang}/contact`}>{dict.links.contact}</Link>
        <Link href={`/${lang}/projects`}>{dict.links.projects}</Link>
    </>
)
};

export default HeaderMenu;