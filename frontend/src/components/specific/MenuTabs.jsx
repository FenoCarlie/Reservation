import { useState } from "react";
import starterDishData from "../../assets/data/starterDish.json";
import mainDishData from "../../assets/data/mainDish.json";
import desertData from "../../assets/data/dessert.json";
import { useLanguage } from "../../contexts/LanguageContext";

function MenuTabs() {
  const { translate } = useLanguage();
  const [activeTab, setActiveTab] = useState("start");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Function to render menu items based on menu data
  const renderMenu = (menuData) => (
    <ul className="">
      {menuData.map((item) => (
        <li key={item.nom} className="mb-5">
          <h1 className="font-bold w-full items-center flex">{item.nom}</h1>
          <p className="pl-5">{item.description}</p>
          <span className="pl-5">{item.prix} €</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="w-full px-6 font-barlow h-auto">
      <section className="flex flex-row w-full justify-between md:px-20 px-10">
        <button
          className={activeTab === "start" ? "menuTabActive" : ""}
          onClick={() => handleTabClick("start")}
        >
          {translate(`menu.start`)}
        </button>
        <button
          className={activeTab === "main" ? "menuTabActive" : ""}
          onClick={() => handleTabClick("main")}
        >
          {translate(`menu.main`)}
        </button>
        <button
          className={activeTab === "dessert" ? "menuTabActive" : ""}
          onClick={() => handleTabClick("dessert")}
        >
          {translate(`menu.dessert`)}
        </button>
      </section>
      <section className="menu-scrollbar mt-10 h-[650px] overflow-auto">
        {activeTab === "start" && renderMenu(starterDishData)}

        {activeTab === "main" && renderMenu(mainDishData)}

        {activeTab === "dessert" && renderMenu(desertData)}
      </section>
    </div>
  );
}

export default MenuTabs;
