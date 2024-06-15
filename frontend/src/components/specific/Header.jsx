import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import NavBar from "./NavBar";
import { RiMenu2Fill, RiCloseLargeFill } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa6";

function Header() {
  const { currentLanguage } = useLanguage();
  const [selectLanguageIsOpen, setSelectLanguageIsOpen] = useState(false);
  const [sideMenuIsOpen, setSideMenuIsOpen] = useState(false);
  const phoneNumber = "+33745432031";

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
      <span className="hidden md:flex font-northwell text-4xl mt-4 ">
        Les Saveurs Enchantées
      </span>
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
        <a
          href={`tel:${phoneNumber}`}
          className="hidden md:flex mr-3 font-barlow text-xl"
        >
          +33 7 45 43 20 31
        </a>
        <span className="w-[2px] bg-slate-500 h-[30px] mr-2 hidden md:flex"></span>
        <button
          className="font-barlow text-lg flex flex-row items-center"
          onClick={() => selectLanguageAction()}
        >
          <span>{currentLanguage}</span>
        </button>
      </section>
      {selectLanguageIsOpen && (
        <div className="absolute z-10 h-screen bottom-0 pl-[40px] bg-white right-0 top-14 w-full md:w-[25vw]">
          <LanguageSwitcher setSelectLanguageIsOpen={setSelectLanguageIsOpen} />
        </div>
      )}
      {sideMenuIsOpen && (
        <div className="absolute z-10 h-screen bottom-0 bg-white left-0 top-14 w-full md:w-[25vw] md:hidden items-center flex flex-col">
          <span className="md:flex font-northwell text-4xl mt-4">
            Les Saveurs Enchantées
          </span>
          <span className="h-[1px] mt-2 bg-slate-500 w-[75vw]"></span>
          <section className="mt-10 pl-[40px] w-full">
            <NavBar setSideMenuIsOpen={setSideMenuIsOpen} />
          </section>
          <a
            href={`tel:${phoneNumber}`}
            className="mt-20 md:flex mr-3 font-barlow text-xl"
          >
            +33 7 45 43 20 31
          </a>
          <span className="h-[1px] mt-2 bg-slate-500 w-[75px]"></span>
        </div>
      )}
    </div>
  );
}

export default Header;
