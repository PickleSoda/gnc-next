
import {useTranslations} from 'next-intl';
import NavigationLink from './navigationLink';

function HeaderMenu({ lang }:any) {
  // const dict = await getDictionary(lang)
  const t = useTranslations('Navigation');
  return (
    <>
        <NavigationLink href={'/'}>{t('home')}</NavigationLink>
        <NavigationLink href={'/about'}>{t('about')}</NavigationLink>
        <NavigationLink href={'/contact'}>{t('contact')}</NavigationLink>
        <NavigationLink href={'/projects'}>{t('projects')}</NavigationLink>
    </>
)
};

export default HeaderMenu;