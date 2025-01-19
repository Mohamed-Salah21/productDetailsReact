import { Dispatch, SetStateAction, useEffect } from "react";
import { IoBagOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import DropDownMenu from "../DropDownMenu";
import { CiUser } from "react-icons/ci";

type Props = {
  activeURL: string;
  setActiveURL: Dispatch<SetStateAction<string>>;
};

const NavIcons = ({ activeURL, setActiveURL }: Props) => {
  useEffect(() => {
    const latestUrl: string = window.location.href.split("/")?.pop() || "";
    if (latestUrl) {
      setActiveURL(latestUrl.split("#")[1]);
    }
  }, []);
  return (
    <div className="hidden md:flex items-center sm:gap-4">
      <a
        className={`block pb-2 ${
          activeURL.includes("cart") ? "border-b-[2px] border-primary" : ""
        }`}
        href="#cart"
        onClick={() => {
          setActiveURL("cart");
        }}
      >
        <IoBagOutline
          size={25}
          className={activeURL === "cart" ? "text-primary" : "text-lightDark"}
        />
      </a>

      <a
        href={"#notifications"}
        className={`block pb-2 ${
          activeURL.includes("notifications")
            ? "border-b-[2px] border-primary"
            : ""
        }`}
        onClick={() => {
          setActiveURL("notifications");
        }}
      >
        <IoIosNotifications
          size={25}
          className={
            activeURL === "notifications" ? "text-primary" : "text-lightDark"
          }
        />
      </a>
      <DropDownMenu
        childElement={<span className="font-normal">EN</span>}
        listItems={menuLists.languages}
      />
      <DropDownMenu
        childElement={<CiUser size={20} />}
        listItems={menuLists.auth}
      />
    </div>
  );
};

export default NavIcons;

const menuLists = {
  languages: ["EN", "العربية"],
  auth: ["Login", "Register"],
};
