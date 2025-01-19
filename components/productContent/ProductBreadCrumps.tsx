import { useEffect, useState } from "react";

type CrumpItem = {
  title: string;
  path: string;
};

const ProductBreadCrumps = () => {
  const [crumbs, setCrumbs] = useState<CrumpItem[]>(initCrumbs);
  useEffect(() => {
    const handleResetCrumbs = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 640) {
        setCrumbs([crumbs[0], crumbs[crumbs.length - 1]]);
      } else {
        setCrumbs(crumbs);
      }
    };
    handleResetCrumbs();
    window.addEventListener("resize", handleResetCrumbs);

    return () => {
      window.removeEventListener("resize", handleResetCrumbs);
    };
  }, []);

  return (
    <div className="flex items-center gap-2 py-4">
      {crumbs.map((item, index) => (
        <div key = {item.path} className="flex items-center gap-2">
          <a
            onClick={(event) => {
              if (crumbs.length - 1 === index) {
                event.preventDefault();
              }
            }}
            key={item.path}
            href={`#${item.path}`}
            className={`font-medium text-sm ${
              crumbs.length - 1 === index ? "text-gray-400 " : ""
            }`}
          >
            {item.title}
          </a>
          {crumbs.length - 1 !== index ? <span>/</span> : null}
        </div>
      ))}
    </div>
  );
};

export default ProductBreadCrumps;

const initCrumbs = [
  { title: "Home", path: "/" },
  { title: "All Categories", path: "categories" },
  { title: "bags", path: "bags" },
  { title: "Product Details", path: "product-details" },
];
