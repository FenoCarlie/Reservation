import Footer from "../components/specific/Footer";
import Header from "../components/specific/Header";
import { useLanguage } from "../contexts/LanguageContext";
import Home from "../pages/defaultLayout/Home";
import Menu from "../pages/defaultLayout/Menu";
import Reviews from "../pages/defaultLayout/Reviews";

function DefaultLayout() {
  const { translate } = useLanguage();
  return (
    <div className="w-full h-screen element">
      <section className="sticky top-0 z-10">
        <Header />
      </section>
      <button className="fixed z-0 bottom-28 xl:right-28 md:right-16 right-10 font-barlow text-2xl bg-[#1a2228] hover:bg-[#222d35] text-white px-6 py-3 rounded-xl">
        {translate(`button.booking`)}
      </button>
      <Home />
      <Menu />
      <Reviews />
      <Footer />
    </div>
  );
}

export default DefaultLayout;
