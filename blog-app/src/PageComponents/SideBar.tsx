import React, { useState } from "react";
import { FaBars, FaHome, FaAddressBook } from "react-icons/fa";
import styles from "./SideBar.module.css"; // Import CSS module

export const SideBarData = [
  {
    title: "Home",
    path: "/",
    icon: <FaHome />,
  },
  {
    title: "About me",
    path: "/about",
    icon: <FaAddressBook />,
  },
];

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState); // Toggle isOpen state
  };

  return (
    <div className={styles.sidebar} style={{ width: isOpen ? "250px" : "0" }}>
      <button className={styles.toggleButton} onClick={toggleSidebar}>
        <FaBars />
      </button>
      <div className={styles.content} style={{ width: isOpen ? "250px" : "0" }}>
        <ul className={styles["sidebar-list"]}>
          {SideBarData.map((item, index) => (
            <li key={index} className={styles["sidebar-item"]}>
              {item.icon}
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
