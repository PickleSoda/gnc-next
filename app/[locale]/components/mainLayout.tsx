import Header from "../../../components/layout/header";
import HeaderTop from "../../../components/layout/headerTop";
import Footer from "../../../components/layout/footer";

type Props = {
    children: React.ReactNode;
  };
const MainLayout = ({ children}: Props) => {
    return (
        <div>
            <HeaderTop />
            <Header />
            <main className="content">{children}</main>
            <Footer />
        </div>
    )
}

export default MainLayout