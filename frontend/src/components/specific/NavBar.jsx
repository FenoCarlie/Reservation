import { useLanguage } from "../../contexts/LanguageContext";

function NavBar({ setSideMenuIsOpen }) {
  const { translate } = useLanguage();
  return (
    <ul className="flex xl:flex-row md:flex-row flex-col w-[15vw] justify-between">
      <li className="p-3">{translate(`pages.home`)}</li>
      <li className="p-3">{translate(`pages.menu`)}</li>
      <li className="p-3">{translate(`pages.revue`)}</li>
    </ul>
  );
}

export default NavBar;
