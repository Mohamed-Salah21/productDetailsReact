import { useEffect } from "react";

type Props = {
  activeURL: string;
  setActiveURL: React.Dispatch<React.SetStateAction<string>>;
};

const NavUrls = ({ setActiveURL, activeURL }: Props) => {
  useEffect(() => {
    const latestUrl: string = window.location.href.split("/")?.pop() || "";
    if (latestUrl) {
      setActiveURL(latestUrl.split("#")[1]);
    }
  }, []);
  return (
    <div className="hidden md:flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global">
        <ul className="flex items-center gap-6 text-sm">
          {myRoutes.map((item: Record<string, string>) => (
            <li key={item.path} onClick={() => setActiveURL(item.path)}>
              <a
                className={`text-sm leading-6 pb-2 ${
                  activeURL === item.path
                    ? "text-primary border-b-[2px] border-primary font-semibold"
                    : "font-medium"
                }`}
                href={"#" + item.path}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavUrls;

const myRoutes = [
  { title: "Home", path: "" },
  {
    title: "Categories",
    path: "categories",
  },
  {
    title: "About Us",
    path: "about-us",
  },
  {
    title: "Contact Us",
    path: "contact-us",
  },
  {
    title: "FAQs",
    path: "faqs",
  },
] as const;
