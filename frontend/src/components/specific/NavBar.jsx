import { useLanguage } from "../../contexts/LanguageContext";

function NavBar({ setSideMenuIsOpen }) {
  const { translate } = useLanguage();
  return (
    <ul className="flex xl:flex-row md:flex-row flex-col md:w-[15vw]  justify-between">
      <li className="font-barlow text-lg link">{translate(`pages.home`)}</li>
      <li className="font-barlow text-lg link md:mt-0 mt-4">
        {translate(`pages.menu`)}
      </li>
      <li className="font-barlow text-lg link md:mt-0 mt-4">
        {translate(`pages.revue`)}
      </li>
    </ul>
  );
}

export default NavBar;
