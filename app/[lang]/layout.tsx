import type { Metadata } from "next";
import { Nunito} from "next/font/google";
import "./globals.css";
import '../../sass/index.scss'
import HeaderTop from "../../components/layout/headerTop";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";

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

export default function RootLayout({
  children,
  params: {lang}
}: Readonly<Props>) {

  console.log('layout lang', lang);
  
  
  return (
    <html lang={lang}>
      <body>
          <HeaderTop />
          <Header dict={undefined} lang={""} />
          <main className='content'>
            {children}
          </main>
          <Footer />
      </body>
    </html>
  );
}