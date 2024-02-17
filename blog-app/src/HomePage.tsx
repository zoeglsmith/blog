import React from "react";
import Header from "./PageComponents/Header";
import Footer from "./PageComponents/Footer";
import SideBar from "./PageComponents/SideBar";
import styles from "./HomePage.module.css"; // Import CSS module

function HomePage() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <SideBar />
        <body>
          <p>HELLO</p>
        </body>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
