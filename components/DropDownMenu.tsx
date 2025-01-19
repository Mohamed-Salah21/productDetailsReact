import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

type Props = {
  childElement: React.ReactNode;
  listItems: string[];
};

const DropDownMenu = ({ childElement, listItems }: Props) => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsopen] = useState<boolean>(false);
  const toggleDropdown = () => setIsopen((open: boolean) => !open);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsopen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center justify-center outline-none"
      >
        {childElement}

        <FaChevronDown
          className={`w-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 z-10 mt-2 w-24 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {listItems.map((item: string) => (
              <a
                href="#"
                className="block text-center px-4 py-2 text-sm text-lightDark hover:bg-gray-100 font-semibold"
                role="menuitem"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
