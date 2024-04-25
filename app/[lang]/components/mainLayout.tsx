import Header from "../../../components/layout/header";
import HeaderTop from "../../../components/layout/headerTop";
import Footer from "../../../components/layout/footer";

type Props = {
    children: React.ReactNode;
    dict: any;
    lang: string;
  };
const MainLayout = ({ children, dict, lang}: Props) => {
    return (
        <div>
            <HeaderTop />
            <Header dict={dict} lang={lang} />
            <main className="content">{children}</main>
            <Footer lang={lang}/>
        </div>
    )
}

export default MainLayout