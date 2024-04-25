import type { Metadata } from "next";
import { Nunito} from "next/font/google";
import "./globals.css";
import '../../sass/index.scss'
import MainLayout from "./components/mainLayout";
import { getDictionary } from './dictionaries'

const nunito = Nunito({
  subsets: ["latin"],
  weight: "300"
});

export const metadata: Metadata = {
  title: "gnc",
  description: "gnc gnc",
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ge" }];
}

interface Props {
  children: React.ReactNode;
  params: {lang:string}
}

export default async function RootLayout({
  children,
  params: {lang}
}: Readonly<Props>) {
  
  const dict = await getDictionary(lang) // en
  console.log('layout lang', lang);
  
  
  return (
    <html lang={lang}>
      <body>
          <MainLayout dict={dict} lang={lang}>
            {children}
          </MainLayout>
      </body>
    </html>
  );
}