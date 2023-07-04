import classes from "./Navigation.module.scss";

type NavigationProps = {
  windowWidth: number;
  mobileMenuIsOpen: boolean;
  setMobileMenuIsOpen: (value: boolean) => void;
};

const Navigation: React.FC<NavigationProps> = ({
  windowWidth,
  mobileMenuIsOpen,
  setMobileMenuIsOpen,
}) => {
  const toggleMobileMenu = () => {
    const open = mobileMenuIsOpen;
    setMobileMenuIsOpen(!open);
  };

  if (windowWidth < 750)
    return (
      <>
        <button className={classes.hamburgerMenu} onClick={toggleMobileMenu}>
          {!mobileMenuIsOpen && (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="11">
              <g fill="#2D314D" fill-rule="evenodd">
                <path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z" />
              </g>
            </svg>
          )}
          {mobileMenuIsOpen && (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19">
              <g fill="#2D314D" fill-rule="evenodd">
                <path d="M.868.661l16.97 16.97-.706.708L.162 1.369z" />
                <path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z" />
              </g>
            </svg>
          )}
        </button>
        {mobileMenuIsOpen && (
          <>
            <div className={classes.overlay}></div>
            <ul className={classes.mobileMenu}>
              <li className={classes.element}>Home</li>
              <li className={classes.element}>About</li>
              <li className={classes.element}>Contact</li>
              <li className={classes.element}>Blog</li>
              <li className={classes.element}>Careers</li>
            </ul>
          </>
        )}
      </>
    );

  return (
    <ul className={classes.navigation}>
      <li className={classes.element}>Home</li>
      <li className={classes.element}>About</li>
      <li className={classes.element}>Contact</li>
      <li className={classes.element}>Blog</li>
      <li className={classes.element}>Careers</li>
    </ul>
  );
};

export default Navigation;
