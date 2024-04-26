'use client'
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import geo from '@/assets/images/geo-flag.png';
import uk from '@/assets/images/uk-flag.webp';

const HeaderLangs = () => {
  const path = usePathname();
  const newPath = path.replace(/^\/(ge|en)(\/|$)/, '/');
  const [activeFlag, setActiveFlag] = useState('en'); // Default active flag

  const handleToggle = (flag:any) => {
    setActiveFlag(flag);
  };

  return (
    <div>
      {activeFlag === 'en' ? (
        <Link href={`/en${newPath}`}>
          <div
            className="cursor-pointer flex p-[3px]"
            onClick={() => handleToggle('ge')} // Update flag and path on click
          >
            <Image src={uk} alt="en" width={34} height={24} className="mr-[5px]" /> EN
          </div>
        </Link>
      ) : (
        <Link href={`/ge${newPath}`}>
          <div
            className="cursor-pointer flex p-[3px]"
            onClick={() => handleToggle('en')} // Update flag and path on click
          >
            <Image src={geo} alt="ge" width={34} height={24} className="mr-[5px]" /> GE
          </div>
        </Link>
      )}
    </div>
  );
};

export default HeaderLangs;


