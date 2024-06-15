function PhotoGrid() {
  const photos = [
    {
      id: 1,
      src: "../../assets/images/baked-appetizing-whole-chicken-with-oranges-cranberries-oven-form-closeup.jpg",
      size: "large",
    },
    {
      id: 2,
      src: "../../assets/images/chocolate-brownie-cake-with-scoop-ice-cream.jpg",
      size: "small",
    },
    {
      id: 3,
      src: "../../assets/images/delicious-goulash-stew-table.jpg",
      size: "medium",
    },
    {
      id: 4,
      src: "../../assets/images/fried-chicken-breast-with-vegetables-fruits.jpg",
      size: "small",
    },
    {
      id: 5,
      src: "../../assets/images/fried-shrimp-salad-with-lettuce-arugula-orange-tomato-walnut-dark-opal-basil.jpg",
      size: "large",
    },
    {
      id: 6,
      src: "../../assets/images/healthy-grilled-beef-caesar-salad-with-cheese-cherry-tomatoes-lettuce.jpg",
      size: "medium",
    },
    {
      id: 7,
      src: "../../assets/images/front-view-chocolate-dessert-glass-with-straw.jpg",
      size: "small",
    },
    {
      id: 8,
      src: "../../assets/images/tasty-fettuccine-pasta-dish-topped-with-grated-cheese-white-plate.jpg",
      size: "medium",
    },
    {
      id: 9,
      src: "../../assets/images/top-view-delicious-dessert-with-strawberries.jpg",
      size: "large",
    },
  ];

  const getSize = (photoSize) => {
    switch (photoSize) {
      case "small":
        return "span-1";
      case "medium":
        return "span-2";
      case "large":
        return "span-3";
      default:
        return "span-1";
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className={`relative col-span-${getSize(photo.size)}`}
        >
          <img className="object-cover w-full h-full" src={photo.src} alt="" />
        </div>
      ))}
    </div>
  );
}

export default PhotoGrid;
