import { Nunito} from "next/font/google";
import "./globals.css";
import '../../sass/index.scss'
import MainLayout from "./components/mainLayout";
import {locales} from '@/config';
import clsx from 'clsx';
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
const nunito = Nunito({
  subsets: ["latin"],
  weight: "300"
});




export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params: {locale}
}: Omit<Props, 'children'>) {
  const t = await getTranslations({locale, namespace: 'LocaleLayout'});

  return {
    title: t('title')
  };
}

interface Props {
  children: React.ReactNode;
  params: {locale:string}
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: Readonly<Props>) {
  console.log('layout lang', locale);
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body className={clsx(nunito.className)}>
          <MainLayout>
            {children}
          </MainLayout>
      </body>
    </html>
  );
}