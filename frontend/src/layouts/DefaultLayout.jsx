import Footer from "../components/specific/Footer";
import Header from "../components/specific/Header";
import Home from "../pages/defaultLayout/Home";
import Menu from "../pages/defaultLayout/Menu";
import Reviews from "../pages/defaultLayout/Reviews";

function DefaultLayout() {
  return (
    <div className="w-full flex flex-col h-screen">
      <section className="sticky top-0">
        <Header />
      </section>
      <Home />
      <Menu />
      <Reviews />
      <Footer />
    </div>
  );
}

export default DefaultLayout;
