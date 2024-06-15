import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import NavBar from "./NavBar";
import { RiMenu2Fill, RiCloseLargeFill } from "react-icons/ri";

function Header() {
  const { currentLanguage } = useLanguage();
  const [selectLanguageIsOpen, setSelectLanguageIsOpen] = useState(false);
  const [sideMenuIsOpen, setSideMenuIsOpen] = useState(false);

  //Function to open and close language switcher
  const selectLanguageAction = () => {
    if (sideMenuIsOpen) {
      setSideMenuIsOpen(false);
    }
    setSelectLanguageIsOpen(!selectLanguageIsOpen);
  };

  //Function to open and close side menu
  const sideMenueAction = () => {
    if (selectLanguageIsOpen) {
      setSelectLanguageIsOpen(false);
    }
    setSideMenuIsOpen(!sideMenuIsOpen);
  };

  return (
    <div className="w-full h-14 xl:px-28 lg:px-24 md:px-16 px-10 flex flex-row justify-between items-center headerOnTop ">
      <span className="hidden md:flex">Les Saveurs Enchantées</span>
      <button className="flex md:hidden" onClick={() => sideMenueAction()}>
        {!sideMenuIsOpen ? (
          <RiMenu2Fill className="w-8 h-8" />
        ) : (
          <RiCloseLargeFill className="w-8 h-8" />
        )}
      </button>
      <section className="md:flex hidden">
        <NavBar />
      </section>
      <section className="flex flex-row items-center">
        <span className="hidden md:flex mr-3">+330000000000</span>
        <button onClick={() => selectLanguageAction()}>
          {currentLanguage}
        </button>
      </section>
      {selectLanguageIsOpen && (
        <div className="absolute h-screen bottom-0 bg-white right-0 top-14 w-full md:w-[25vw]">
          <LanguageSwitcher setSelectLanguageIsOpen={setSelectLanguageIsOpen} />
        </div>
      )}
      {sideMenuIsOpen && (
        <div className="absolute h-screen bottom-0 bg-white left-0 top-14 w-full md:w-[25vw] md:hidden">
          <NavBar setSideMenuIsOpen={setSideMenuIsOpen} />
        </div>
      )}
    </div>
  );
}

export default Header;
