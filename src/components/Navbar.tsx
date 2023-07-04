import { useState, useEffect } from "react";

import Logo from "./utils/Logo";
import Button from "./utils/Button";
import Navigation from "./Navigation";

import classes from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 750) setMobileMenuIsOpen(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div className={classes.container}>
      <nav className={classes.navbar}>
        <Logo />
        <Navigation
          windowWidth={windowWidth}
          mobileMenuIsOpen={mobileMenuIsOpen}
          setMobileMenuIsOpen={setMobileMenuIsOpen}
        />
        {windowWidth >= 750 && <Button>Request Invite</Button>}
      </nav>
    </div>
  );
};

export default Navbar;
