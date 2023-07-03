import Logo from "./Logo";
import Button from "./Button";
import Navigation from "./Navigation";

import classes from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  return (
    <nav className={classes.navbar}>
      <Logo />
      <Navigation />
      <Button>Request Invite</Button>
    </nav>
  );
};

export default Navbar;
